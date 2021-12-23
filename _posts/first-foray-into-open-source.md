---
title: First Foray into Open Source
excerpt: or, How to Contribute to Open Source for the First Time...
date: '2018-03-14T00:00:00.322Z'
---

People have been telling me to contribute to open source for years: in the same breath as they're recommending building a personal website (check), working on personal projects (check) -- you know, all the stuff you're supposed to do as a fresh-faced cs student looking for a development job. For me, open source was the most intimidating of the three. Personal projects hide spaghetti code, files that don't compile, a tumultuous git history... things that we students maybe shouldn't advertise, in hindsight.

But open source? That always felt way out of reach, even with development experience under my belt. I remember feeling  overwhelmed just trying to pick a project.

This spring I am applying to be a [Google Summer of Code](https://summerofcode.withgoogle.com/) student. If you're not familiar with the program, GSoC is essentially a remote, self-directed summer internship program that lets you work for and be mentored by an approved open source organization. Whether or not you're applying for GSoC, I think the list of [approved organizations](https://summerofcode.withgoogle.com/organizations/) is a great (not so) shortlist of awesome open source projects that are a) looking for contributors and b) open to mentoring newcomers.

So, since I've spent the past month getting my hands dirty with various open source projects, here are a few things I've learned so far.


## Required Skills To Contribute To Open Source

* A little bit of git
* A little bit of some programming language (not even strictly necessary, there is always documentation that needs to be written or other non-programming tasks, which can be a good place to start!)


That's it! Contrary to my former beliefs, you don't need to be a master of Ruby or already know all the features of Django to contribute to a well-known project. Even through the process of installing and trying out the software for the first time you may end up submitting a bug report, which is extremely valuable.

## A Step-By-Step Guide

Here's my current approach for getting acquainted with a new open source project:

1. Check that you are somewhat familiar with at least one of the languages/frameworks being used. If I didn't know enough of the technical stuff, I'd probably pick up a documentation task while I learned the language(s) on my own.
2. Find out where the contributors hang out. There's usually a mailing list, [gitter room](https://gitter.im), or some other forum-type place to ask questions about the codebase. Unfortunately many orgs still use [irc](https://en.wikipedia.org/wiki/Internet_Relay_Chat), which is not very nice to navigate (I still can't get used to it).
3. Find a beginner's task. Check out their open issues to see what bugs they need fixed or features they need implemented. Many projects have issue tags like `low-hanging-fruit` or `good-first-issue`, which are easy-ish tasks reserved for newcomers. Drop a comment on the issue to make sure no one else is actively working on it, and then it's yours!
4. Ask questions about the problem. It's perfectly fine to ask for specific guidance, especially on a first issue, and it saves you time as well as the developer who might end up reviewing a misinformed PR.
5. Submit your first pull request. Fork the repository and create a new, aptly-named branch for each issue that you work on. This way, you can submit PRs for multiple issues at a time (I learned this the hard way).
6. Respond to feedback. It's normal for a first timer to require many iterations of changes (no shame in that). Some organizations will ask you to squash or rebase commits, which is a good git exercise in itself. Remember that much open source development is voluntary work, so be patient if you don't get feedback immediately.
7. Merge your first contribution! High five.

## Project Spotlight

Some super cool open source projects I've tested out in the past few weeks!

### [BeeWare](href="https://pybee.org/")

BeeWare is collection of projects with the goal of making it easy to write native apps in Python. Surprised? I was too -- Python is not the language that comes to mind when I think of app development. But there's no reason why the awesomeness of Python can't be leveraged to build apps. BeeWare currently consists of [bridge libraries](https://pybee.org/project/projects/bridges/rubicon/) that connect Python and Objective-C for iOS development, a [transpiler](https://pybee.org/project/projects/bridges/voc/) that translates Python bytecode into Java bytecode for Android development, a [toolkit](https://pybee.org/project/projects/libraries/toga/) that abstracts away the differences between the two platforms for seamless cross-platform development, and many more [exciting projects](https://pybee.org/project/projects/)! Everything's still in early development, and they're are seeking active contributors!


### [Checker Framework](https://checkerframework.org/)

Love typechecking? The Checker Framework is a project that came from academia that lets you add specific, targeted typechecking to your Java programs. Their typecheckers can catch traditionally runtime errors at compile time -- errors such as null pointer exceptions, array indexing errors... You plug in a typechecker, compile a seemingly functioning Java program and find a bunch of potentially erroneous code. To get rid of the errors, type annotations are used to specify additional type information, or if it's a real bug, the code should be fixed. The Checkers are easily integrated into Eclipse, and though there are many typecheckers already written and ready to inspect your programs, they are looking for people to write more.

### [Scrapy](https://pybee.org/)

 If you've heard of Scrapy before, no surprise there -- it's probably the most widely used open source web scraping framework out there. Web scraping is about navigating to a webpage and fetching specific data from it. Scrapy is a mature, well-maintained project with many core developers that have been around a long time and are still actively contributing. They currently have lots of interesting problems resulting from supporting various kinds of use cases and maintaining backwards-compatibility while integrating with new Python features (at the time of writing, async/await syntax support is an example).

 ## Two More Cents

Contributing to open source can help you develop skills that you learn in industry, like how to write a good bug eport, respond to code reviews, and communicate with other developers effectively -- and I argue, even more so because you're working with people from all backgrounds from all over the world. I only wish somebody had handed me something like this two years ago when I was browsing trending repositories dejectedly. Maybe I would have gotten started earlier.