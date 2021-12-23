---
title: VOC Optimization - Module Caching (Google Summer of Code)
excerpt: Python code lives in Python modules (that is, a `.py` file). Thinking about the module as an object, it knows about all the constants, functions, and classes that are defined in the module itself. Every time one of those definitions is referenced, either for looking up or storing into, the module is used to resolve the definition...
date: '2018-07-17T00:00:00.322Z'
---

I've done some cool stuff this past month. Here's an optimization I've been working on:

## The problem with `Modules`

Python code lives in Python modules (that is, a `.py` file). Thinking about the module as an object, it knows about all the constants, functions, and classes that are defined in the module itself. Every time one of those definitions is referenced, either for looking up or storing into, the module is used to resolve the definition.

For example, consider this tiny program in `example.py`

```
x = 42
print(x)
```

 In bytecode, this translates into something like this (annotated with some comments):

```
 // x = 42
2: LDC2_W (Long 42)
5: INVOKESTATIC org/python/types/Int.getInt (J)Lorg/python/types/Int; // Get a preallocated int 42
8: ASTORE_1 // Store into local variable at position 1
9: GETSTATIC python/sys.modules (Lorg/python/types/Dict;) // Get the dictionary of all modules
12: NEW org/python/types/Str // 12-19 creates a string for the module name, example
16: LDC_W (String 'example')
19: INVOKESPECIAL org/python/types/Str.init (Ljava/lang/String;)V
22: INVOKEINTERFACE org/python/Object.__getitem__ (Lorg/python/Object;)Lorg/python/Object; // Get the current module
30: ALOAD_1 // Get the local variable at position 1
31: LDC_W (String 'x')
35: INVOKEINTERFACE org/python/Object.__setattr__ (Ljava/lang/String;Lorg/python/Object;)V // Set x = 42

// print(x)
40: GETSTATIC python/sys.modules (Lorg/python/types/Dict;) // Get the dictionary of all modules
43: NEW org/python/types/Str // 43-50 creates a string for the module name, example
47: LDC_W (String 'example')
50: INVOKESPECIAL org/python/types/Str.init (Ljava/lang/String;)V
53: INVOKEINTERFACE org/python/Object.__getitem__ (Lorg/python/Object;)Lorg/python/Object; // Get the current module
61: LDC_W (String 'print')
64: INVOKEINTERFACE org/python/Object.__getattribute__ (Ljava/lang/String;)Lorg/python/Object; // Get value of print
69: CHECKCAST (Class org/python/Callable) // Cast it to a Callable (something that can be invoked)
78: GETSTATIC python/sys.modules (Lorg/python/types/Dict;) // Get the dictionary of all modules
81: NEW org/python/types/Str // 81-88 creates a string for the module name, example
85: LDC_W (String 'example')
88: INVOKESPECIAL org/python/types/Str.init (Ljava/lang/String;)V
91: INVOKEINTERFACE org/python/Object.__getitem__ (Lorg/python/Object;)Lorg/python/Object; // Get the current module
99: LDC_W (String 'x')
102: INVOKEINTERFACE org/python/Object.__getattribute__ (Ljava/lang/String;)Lorg/python/Object; // Get the value of x
115: INVOKEINTERFACE org/python/Callable.invoke ([Lorg/python/Object;Ljava/util/Map;)Lorg/python/Object; // invoke print(x)
```

There is *a lot* of repetition here. In fact, the current module `example` is retrieved exactly 3 times: first to store into `x` (9-22), then to look up `print` (40-53), and finally to look up `x` (78-91). If we were to stick this code in a loop running 1000 times, then the module would be loaded at least 1000 * 3 times (more in practice, because there are some new variables introduced in the loop). That's not incredibly efficient.

## Caching `Modules`

The approach we took here to minimize all the re-loading was to cache something. I experimented a bit with caching the global dictionary of modules to reduce all the `GETSTATIC` calls, or caching the String that's being created each time (remember object creation is expensive). But to get the best savings we should eliminate as many lines of bytecode as possible. The biggest reusable block of bytecode here is definitely the 13 lines of bytecode it takes to retrieve the current module. Since you can't change the module while the code in it is running, we know that it will have already been created and available when the code inside the module is being executed. Which means that each function, class and method can keep a copy of its module locally so it can be accesses far more cheaply.

In bytecode, this results in:

```
// First store the current module as a local variable
4: GETSTATIC python/sys.modules (Lorg/python/types/Dict;)
7: NEW org/python/types/Str
11: LDC_W (String 'example')
14: INVOKESPECIAL org/python/types/Str.init (Ljava/lang/String;)V
17: INVOKEINTERFACE org/python/Object.__getitem__ (Lorg/python/Object;)Lorg/python/Object;
25: ASTORE_1 // store in local variable 1

// x = 42
26: LDC2_W (Long 42)
29: INVOKESTATIC org/python/types/Int.getInt (J)Lorg/python/types/Int;
32: ASTORE_2 // Store 42 in local variable 2 (x)
33: ALOAD_1 // Load the current module
34: ALOAD_2 // Load x
35: LDC_W (String 'x')
39: INVOKEINTERFACE org/python/Object.__setattr__ (Ljava/lang/String;Lorg/python/Object;)V // Set x = 42

// print(x)
44: ALOAD_1 // Load the current module
45: LDC_W (String 'print')
48: INVOKEINTERFACE org/python/Object.__getattribute__ (Ljava/lang/String;)Lorg/python/Object; // Get value of print
53: CHECKCAST (Class org/python/Callable) // Cast it to a Callable
62: ALOAD_1 // Load the current module
63: LDC_W (String 'x')
66: INVOKEINTERFACE org/python/Object.__getattribute__ (Ljava/lang/String;)Lorg/python/Object; // Get the value of x
79: INVOKEINTERFACE org/python/Callable.invoke ([Lorg/python/Object;Ljava/util/Map;)Lorg/python/Object; // invoke print(x)
```

Much better! On various [benchmark tests](https://github.com/pybee/voc/pull/839/files#diff-76c95e069000c65f3a49f9984e93fde6) this results in a 25-40% performance improvement.

## Generator Functions: A Special Case

One place where this optimization is not performed is in the case of the generator function. Since generators are iterators that can be paused and resumed, the way that they are implemented in VOC is that the generator's state is kept around in a wrapper around the actual function. On `yield</code>, the generator's state is saved in this object, and on resume, the local variables are reloaded. This means that the current module would also have to be saved and reloaded on each execution stop and start. In this case, it's cleaner to do it on demand rather than carry around two types of local variables.

You can follow the discussion and progression around this work [here](https://github.com/pybee/voc/pull/839).