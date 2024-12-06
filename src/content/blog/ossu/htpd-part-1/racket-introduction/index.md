---
title: "Introduction to Racket programming"
summary: "A rapid introduction to Racket programming"
date: "Dec 06 2024"
draft: true
tags:
- Tutorial
- Python
- Racket
---


It's easier to use DrRacket to program with Racket, find it here [here](https://download.racket-lang.org/).

Let's start by doing some numbers arithmetic.
```racket
> (+ 1 1)
2

> (- 2 1)
1

> (* 2 2)
4

> (/ 6 2)
3
```

`(+ 1 1)` this is called an expression. You can nest expressions with each other as you want.

```racket

(+ 1 (/ 6 3))
3

> (+ 2 3 4)
9

> (+ (* 5 5) (+ (* 3 (/ 12 4)) 4))
38

```

There is no limits to nesting

### Str
```racket
> "Hello world"
"Hello world"
```


Strings have also operations

```racket
> (string-append "hello" "world)
"helloworld"

> (string-append "hello" " " "world)
"hello world"
```


