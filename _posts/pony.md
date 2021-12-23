---
title: Worry-free Concurrent Programming in Pony
excerpt: The Pony language, being developed at Sophia Drossopoulou’s group at Imperial College London, introduces two core ideas such that, if you can get your program to compile, guarantees memory safety (among other things).
date: '2017-05-30T00:00:00.322Z'
---


I spent the past week at the [Programming Language Implementation Summer School](https://pliss2017.github.io/) in Bertinoro, Italy. Throughout my undergrad I've avoided taking classes in the summer but when Ron told me about this one in Italy I couldn't not apply. Now that the week is over and I'm sunning it up in Croatia, I want to write a few blog posts about some stuff I learned both in and out of the classroom. This is the first of three posts. 

![PLISS classroom](assets/blog/pony/pliss-classroom.jpeg "PLISS classroom")

Writing concurrent programs is hard. At the heart of the challenge is handling shared data — and to that, our Intro to Computer Science professors say: put a lock on it! But programming with locks and semaphores is very difficult to get right and is torturously slow (imagine Facebook locking each of Donald Trump’s posts when someone comments). The [Pony](https://www.ponylang.org/) language, being developed at [Sophia Drossopoulou](https://wp.doc.ic.ac.uk/sd/)’s group at Imperial College London, introduces two core ideas such that, if you can get your program to compile, guarantees memory safety (among other things).

## The Actor Model

The first of these is the actor model. This isn’t really a new idea — probably the best known language that uses this is Erlang. Instead of the traditional threads, we have actors, and they define the concurrent system. Each actor does its own computation, receives messages, and sends messages to other actors. The actor executes each message in its entirety and sequentially. So the concurrency happens when you have multiple actors, each doing their own thing.

To me this is a very intuitive model to think about parallel work. Suppose I want to ask a bunch of people to do my homework. I’d probably make photocopies to distribute to each of my minions, and they’ll each work on an assigned question, and send it back to me when they’re done. Notice that while they’re doing the work, each one has its own copy — there is no passing around one homework a la Sisterhood of the Traveling Pants. In the actor model, each actor always has its own private state.

## Reference Capabilities

But this is not still not enough, because we need to define the rules around shared data. Pony’s solution to this is reference capabilities: an extra tag that you write with the type (Pony is strongly typed) for each variable that tells you how that variable can be used. There are [6 of these](https://tutorial.ponylang.org/capabilities/reference-capabilities.html), from *iso* and *val* (isolated, as in no other variables can access the data, and immutable, respectively) to *ref* and *box* (mutable and read-only, respectively).

Confused? I am. From a theoretical perspective, ref capabilities are absolutely beautiful. But for an engineer who just wanted to hit the ground running, the powerful type system was, at first, a bit off-putting. I’m used to writing programs that compile with little effort (usually because the problems are hiding somewhere where it’s hard to diagnose and hard to debug).

## Tada...

This combination gets us some very nice (and interesting) guarantees.

* **No data races.** If an actor sees some object as writeable (*iso* or *ref*) then all other actors see the object as unreadable and unwritable (*tag*).
* **Immutability is deep and permanent.** If an actor sees some object as immutable (*val*), its contents are also immutable.
* **Atomicity.** We can trace what happened when without too much difficulty. If an actor <i>a</i> at some point <i>C</i> sees an object <i>o</i> with a non-tag capability(so <i>a</i> can actually do something with <i>o</i>) without message receipts, and <i>o</i> is different at some earlier point, then <i>a</i> did it: <i>a</i> must have either created or modified <i>o</i>.
* Lots more [here](https://tutorial.ponylang.org/capabilities/guarantees.html)...

## What about Rust? Why not Rust?

 Idiomatically I think Rust's and Pony's approaches to memory safety aren't so different -- capabilities can capture a bit more information than mutabilities, but essentially they are just about annotating data with restrictions. However, Pony’s core focus is safe concurrency, and with the actor model you have to think in a totally different way even when you’re writing a sequential program (though who ever did anything interesting with a sequential program?), whereas Rust is more familiar for those of us coming from the C world.

 One advantage that Pony has over Rust is creating and manipulating cyclic data structures. Cyclic data structures are nontrivial in Rust, partly because of the mutability qualifiers (I mean check out this implementation of [graphs](https://github.com/nrc/r4cppp/tree/master/graphs)). According to Sophia, it’s much more painless in Pony (need to try this for myself though).

 ## Borrowing? 

  There isn’t really a concept of borrowing yet, although I think you can fake it by [recovering capabilities](https://tutorial.ponylang.org/capabilities/recovering-capabilities.html) (essentially change the capability so the variable can be passed to and changed by another actor). It’s next on their to-do list, though!


## How usable is it, really?

I think there’s a trend in recent years towards languages that have as flat a learning curve as possible. It seems like languages that are a bit prickly at first (because of the type system or otherwise) haven’t gained much traction. On the other hand, dynamic languages like Python and Ruby are still going strong. Rust, for example, started off with a lot more structure baked into the language and spent years simplifying and pushing abstractions into libraries (see [Cells](https://doc.rust-lang.org/std/cell/) and [RefCells](https://doc.rust-lang.org/std/cell/struct.RefCell.html) for example) to make it more accessible. The Pony developers don't currently anticipate having to water down their type system (I asked :-) ).


Last week, I was definitely on the Python train… now I’m not so sure. What would it take for the masses to adopt a language like Pony?

Can we convince the programming community to have enough patience to handle compiler errors if it means we have fewer of those seriously painful concurrency bugs later down the line?

I’d personally much rather debug a compile error with a nice message than a deadlock, but first it's about getting out of the mindset that the compilation step is trivial.


<br />


**06-01-2017 EDIT:** After chatting about this more with [Paley](http://palez.github.io/), I think we've managed to nail down the pros and cons of the actor model + reference capabilities system, in addition to the technical benefits mentioned above.

### PROS 

* **Explicitness.** With reference capabilities, you must write down exactly what you are doing and what you will be doing with each variable.
* **Readability.** This goes hand in hand with explicitness, because capabilities are essentially written intentions. When you come back months later to read the code, hopefully it'll be easier to understand what you were thinking at the time.
* **Programming with concurrency in mind.** This model makes you constantly aware that the code is meant to be executed concurrently. Although that is a lot to keep in your head at once, it forces you to always be thinking about resource and memory management.

### CONS

* **Coupling between the "concurrency" stuff and the "regular" stuff.** In the traditional multi-threaded paradigm, the concurrency and parallelization bits are somewhat localized to the thread management code, but we lose this separation of concerns here.
* **Fighting with the compiler.** This is inevitable and it can take a time before the error messages are more useful than annoying. Pony (or any language with a complicated type system) does not enable fast prototyping. But maybe changing capabilities to satisfy the compiler is not so different from putting * and & everywhere until g++ is happy?
* **Unreadability.**  Yes, I know I put this as a pro too. Capabilities clutter up the code when you're just trying to get a sense of what the program is doing and don't care about the nitty-gritty details.