---
title: Static Analysis and Abstract Interpretation
excerpt: Abstract interpretation has a reputation for being inaccessible. So I was very excited about two of the talks which promised gentle introductions to abstract interpretation, from Francesco Logozzo at Facebook and Matt Might at the University of Utah...
date: '2017-06-01T00:00:00.322Z'
tags: [programming languages, program analysis, abstract interpretation]
---
This is the second of three posts written about what I learned at the [Programming Language Implementation Summer School](https://pliss2017.github.io/).

Abstract interpretation has a reputation for being inaccessible. So I was very excited about two of the talks which promised gentle introductions to abstract interpretation, from [Francesco Logozzo](https://www.linkedin.com/in/francesco-logozzo-4106386/) at Facebook and [Matt Might](http://matt.might.net/) at the University of Utah (one of his last CS lectures too, before he takes officially the plunge into medicine!)

## The engineering motivation

As programmers, we'd like to be able to write efficient code with as few bugs as possible. Unfortunately, the software engineering workflow doesn't really help us do this easily.

![Matt's Slide](/assets/blog/static-analysis-and-abstract-interpretation/se-cartoon.jpg "Matt's slide")

We try to write thorough tests, but the test suite grows with each bug fix. We rely on engineers with more experience to tell us about optimizations during code review, but if you don't have people with that kind of expertise on your team, then you're out of luck.

That's why programming languages researchers have been working on static analysis techniques for forever, because static analysis can help catch bugs and find places ripe for optimization.

## So what is static analysis?

Static analysis is about gathering information about a program without executing it.

## And what is abstract interpretation?

Abstract interpretation is an approximation over all possible executions of a program.

That sounds cryptic, but Francesco showed us an informal way to visualize it, and seeing the pictures really helped me. Let me try to replicate it:

We want to find some way to express all the possible things that can happen during the program execution. So if we try to imagine what all possible executions of a program might look like, we could end up with something like this:

![AI Trajectories](/assets/blog/static-analysis-and-abstract-interpretation/ai-trajectories.jpg "AI Trajectories")

Disclaimer: This graph is from Patrick Cousot's [Abstract Interpretation in a Nutshell](http://www.di.ens.fr/~cousot/AI/IntroAbsInt.html). The green and red coloring on subsequent images is my doing :-)

Each colored line is a single execution, and the lot comprise the set of all possible executions (called the concrete semantics).

Now if I color the execution space with this green color, then we can think of the entire green space as an abstraction of all the executions that lie within it (the abstract semantics).

![AI Highlighted](/assets/blog/static-analysis-and-abstract-interpretation/ai-highlighted.jpg "AI Highlighted")

We can add red areas to indicate something like an error zone:

![AI Red](/assets/blog/static-analysis-and-abstract-interpretation/ai-red.jpg "AI Red")

And now the cool part is that if we can say something about the green zone, then it applies to the program as well since all executions are bounded by the green. For example, if we can prove that the green zone never overlaps with the red zone, then we know that the program cannot produce those errors.

## How do we use this?

We can actually perform abstract interpretation of a program via static analysis. That is, we can build a *partial* interpreter, and since it's not a real interpreter, when we use that on a program we're performing a static analysis. Matt showed us how to easily turn an interpreter into an abstract interpreter, which I will briefly outline here (but he has a whole [blog post](http://matt.might.net/articles/intro-static-analysis/) on this which is very good and easy to follow).

Consider a simple case of sign analysis: we want to know whether the result of an arithmetic expression is positive, negative, or zero.

![Expr Racket](/assets/blog/static-analysis-and-abstract-interpretation/expr-rkt.jpg "Expr Racket")

Now the code for determining the value of the expression might look something like this:

![Eval Racket](/assets/blog/static-analysis-and-abstract-interpretation/eval-rkt.jpg "Eval Racket")

Warning: this is pseudocode.

But if we just want to know the sign, we can tweak it a little bit by:

1. Changing *eval* to *eval-sign*</li>
2. Adding 3 helper functions *abstract*, *+/abstract* and **/abstract* (omitted here for brevity)</li>
3. Wrapping the results inside *eval-sign* with our abstract helper functions</li>

![Abstract Racket](/assets/blog/static-analysis-and-abstract-interpretation/abstract-rkt.jpg "Abstract Racket")

Disclaimer: this is Matt's code (I have made some simplications), as detailed on his blog.

Notice that we have lost some information going from the original value *42* to *positive*. In other cases, we can get all of *negative*, *positive* and *zero* (sign is unknown).

But we didn't have to *run* the program! In this toy example there really isn't a time savings because we execute even more lines of code, but it really isn't about creating a cheaper and less precise interpreter -- the information we get from the abstraction can help us make decisions about potential optimizations (maybe a value can never be negative, so we don't need to handle negative values), or catch bugs (perhaps we made an incorrect assumption that a value can't be zero).

## Lingering questions

So, abstract interpretation is pretty awesome. As far as I can tell, the community is still actively working on abstract interpretation and static analysis techniques. However, I wonder if there are a few issues that make the most powerful static analyses not so usable:

1. Do existing static analysis tools fit into the development process? One barrier to use is that good tool design, which includes meaningful explanations of defects, automatic fixes, and easy configurability is hard.
2. Do you always have to know what information you want to abstract from the program? What if you don't know the "shape" of the concrete semantics and can't figure out what kind of analysis you want to do? Are there all-purpose static analyses?
3. Isn't it expensive? Francesco mentioned that they could run a static analyzer on the entire Facebook codebase (tens of millions of LOC) in about 19 minutes. I would love to see more performance stats.

References: 

B. Johnson, Y. Song and E. Murphy-Hill. "Why Don't Software Developers Use Static Analysis Tools to Find Bugs?" in *Proc. ICSE*, 2013, pp.672-681


