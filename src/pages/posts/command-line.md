---
layout: "@/templates/BasePost.astro"
title: Command line basics
description: Basic commands you need to know
pubDate: 2024-03-22T00:00:00Z
# imgSrc: "https://community.codenewbie.org/remoteimages/uploads/articles/hpliusk9ryd2sz8klhfy.PNG"
# imgAlt: "Game of life image"
---

# Command line basics

The shell is a textual interface to interact with the machine.
You can do everything on your computer from the shell, no need for a graphical interface.

I am going to present here the basic commands to navigate in the shell and execute actions
like reading or creating files/directories.


## Navigate in the shell
The directories are separated by `/` on Linux and Mac os and `\` on Windows.
The path / is the root of the file system, on Windows each disk partition have its root.

Two kinds of path: 
- relative path (relative to the current working directory)
- absolute path (start with /, the root)


to see your current working directory 
`pwd` (print working directory)

to change directory
`cd` directory:  change directory

`.` refers to the current directory
`..` refers to the parent directory
`cd -` brings you back to the directory you were

to list the content of a directory:
`ls`
ls print the content of the current directory, unless you give him a directory as its first arguement
`ls /home`

you can use the -l option with ls to list the content of a directory using a long listing format

`clear` to clear the terminal


## Creating and moving
`mv` to rename / move a file
`cp` to copy a file
`mkdir` create a new directory
`mkdir -p` to create a directory with nested directories
`touch` to create a file

## Get help for a command
Most of commands have a lot of options available, you can't know all of them. You can get help by two ways directly from the shell.

### Manual
To get more informations about the command you want to use, use the `man` program, following by the command name. It will display the manual of the command.
Use the arrows keys up and down to navigate line by line or space and B to navigate page by page.
Press q to quit.
Press `/` and type the term you want to seach and use n and Shift N to navigate through the occurences of this term.

### Help
`command --help` 
To display essential informations about the command, shorter than the manual.