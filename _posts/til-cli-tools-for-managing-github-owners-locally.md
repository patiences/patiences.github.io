---
title: 'TIL: CLI tools for managing Github codeowners locally'
excerpt: Two useful open source tools for validating CODEOWNER changes super quickly.
date: '2025-05-29T00:00:00+02:00'
tags: [tools, github, open source]
---


The [codeowners](https://github.com/hmarr/codeowners) CLI tool is super useful for inspecting who owns specific files:

```
> codeowners path/to/files/*.py
path/to/files/a.py            @ateam
path/to/files/b.py            @bteam

```

You can also ensure newly added files have codeowners assigned using a pre-commit hook in the pre-commit yaml config file:

```
- id: codeowners-new
  name: Check newly added files have codeowners
  language: system
  stages: [pre-commit]
  entry: >
    bash -c 'git diff --cached --diff-filter=A --name-only | xargs codeowners | grep -F "(unowned)"
    && exit 1 || exit 0'

```

After making a codeowner change, you can check the results using the [codeowners-diff](https://github.com/samueljsb/codeowners-diff) tool:

```
> codeowners-diff
2 files have changed ownership:

| file                         | `HEAD`   | working tree               |
|:-----------------------------|:---------|:---------------------------|
| `path/to/files/a.py`         |          | @ateam                     |
| `path/to/files/b.py`         |          | @bteam                      |
```
