---
layout: "@/templates/BasePost.astro"
title: Let's create game of life with Python !
description: How to create a game of life with the Tkinter library in Python
pubDate: 2022-10-06T00:00:00Z
imgSrc: "https://community.codenewbie.org/remoteimages/uploads/articles/hpliusk9ryd2sz8klhfy.PNG"
imgAlt: "Game of life image"
---

Game of life (which is not a game) is a good programming excercise and it is quite funny.
This cellular automation was invented by a mathematician named John Conway.

This is very easy to understand: it consists of a grid of cells which can live, die or multiply based on three rules:

- 1 - Each cell with one or no neigbhors die by soliture
- 2 - Each cell with four or more neigbhors dies by overpopulation
- 3 - Each cell with two or three neigbors survives

You can have more informations <a target="_blank" href="https://playgameoflife.com/info">here</a>.

Let's create it !

We will use Python, so basic knowledge of Python is required.
To create a GUI (graphical user interface), we will use the Python library Tkinter.
More infos about Tkinter <a target="_blank" href="https://docs.python.org/fr/3/library/tkinter.html">here</a>.

### Create the GUI

Create a python file, you can name it main.py or any other name.

```python
from tkinter import Tk, Canvas

window = Tk()
window.geometry(str(600) + "x" + str(600))
canvas = Canvas(window, width=600, height=600, borderwidth=0, highlightthickness=0, bg='lightgray')
canvas.pack()
window.mainloop()
```

Here we create a window with Tkinter of 600 by 600 and a canvas to draw the cells.

We will represent the cells with a list of lists. Since the GUI window is 600 x 600, our cells list wil be 60 x 60. An alive cell is represented with the value 1 and a dead one with the value 0. So, to begin, we fill our list with dead cells.

```py
cells = []
for i in range(60):
    cells.append([0] * 60)
```

Then, we generate random alive cells, here 500. So we give them the value one.

```py
for i in range(500):
    x = random.randint(1, 59)
    y = random.randint(1, 59)
    cells[x][y] = 1
```

Don't forget to import the random module :
`import random`

Now we want to display on the window our cells. For that, we will create a function `displayCells`.

```py
def displayCells():
    canvas.delete("all")
    for x in range(60):
        for y in range(60):
            if cells[x][y] == 1:
                xx = x * 10
                yy = y * 10
                c="black"
                canvas.create_rectangle(xx, yy, xx+10, yy+10, fill=c)
```

We will call `displayCells` in a loop to display the new cells on the window. Here, we delete the precedent cells with `canvas.delete("all")` and we loop through the cells list to display a 10x10 black rectangle if the cell is alive.

As we will want to call others functions in the main program loop, we can create a function `programLoop`.

```py
def programLoop():
    displayCells()
```

And add this to call the programLoop function on the window

```py
window = Tk()
window.geometry(str(600) + "x" + str(600))
canvas = Canvas(window, width=600, height=600, borderwidth=0, highlightthickness=0, bg='lightgray')
canvas.pack()
#the programLoop function will be called 100 milliseconds after the program runs
window.after(100, programLoop)
window.mainloop()
```

The result must looks like something like this:

![Image of game of life](https://community.codenewbie.org/remoteimages/uploads/articles/hpliusk9ryd2sz8klhfy.PNG)

## Make the cells evolve

To make the cells evolve, we first need to count how many each cell have alive cells in its neighborhood. According to this number we could know if each cell is alive or dead (1 or 0). We could create a new list with these new values and then display on the window the new cells. Since is it looping every 100 milliseconds, it will be like the cells are moving.

To count how many cells have alive neighbor cells, we will create a `countAliveCellsAround(x,y)`. It takes two arguments, x and y which are the coordinates of the cell in the list cells.

We initialize count to the value 0.

```py
def countAliveCellsAround(x, y):
    count = 0
```

Each cell have 8 neighbors to check.
Theses cells can be represent with this list of tuples:

`V = [(-1, -1), (0, -1), (1, -1), (-1, 0), (1, 0), (-1, 1), (0, 1), (1, 1)]`

We can access each neighbors cells of a cell of coordinates (x, y) like this :

```py
for dx, dy in V:
    cells[(x+dx)][(y+dy)]
```

Like `cells[(x+dx)][(y+dy)]` is either 1 or 0, we can add its value to count.

so we have :

```py
for dx, dy in V:
    count += cells[(x+dx)][(y+dy)]
```

But we have a problem for the cells which are on the border, we will have an error of index out of range. We can resolve it by saying that the next cell of the cell [60][1] is cell[1][1]
and that the next cell[1][60] is cell[1][1]

```py
for dx, dy in V:
    count += cells[(x+dx)%60][(y+dy)%60]
```

So the function looks like this :

```py
def countAliveCellsAround(x,y):
    count = 0
    V = [(-1, -1), (0, -1), (1, -1), (-1, 0), (1, 0), (-1, 1), (0, 1), (1, 1)]

    for dx, dy in V:
        count += cells[(x+dx)%60][(y+dy)%60]
    return count
```

Last thing to do:
Create a `evolution()` function
Start by creating a new_cells_list with the same size as cells and initialisze with zeros:

```py
new_cells_list = []
for i in range(60):
    new_cells_list.append([0]*60)
```

Now we simpply loop through the current list of cells and for each cells we check how many alive neigbord cells it has.

```py
for x in range(60):
    for y in range(60):
        nbAliveCells = countAliveCellsAround(x, y)
```

If the cell is alive (with the value 1) and it has 2 or 3 alive cells around it, then it stays alive. If it is 0 and it has 3 alive cells around it, it become alive, else it stays or becomes dead. Let's translate that in Python :

```py
for x in range(60):
    for y in range(60):
        nbAliveCells = countAliveCellsAround(x, y)
        if cells[x][y] == 0 and nbAliveCells == 3:
                new_cells_list[x][y] = 1
        if cells[x][y] == 1 and nbAliveCells in [2, 3]:
            new_cells_list[x][y] = 1
    cells = new_cells_list
```

So the evolution function looks like this :

```py
def evolution():
    global cells
    new_cells_list = []
    for i in range(60):
        new_cells_list.append([0]*60)

    for x in range(60):
        for y in range(60):
            nbAliveCells = countAliveCellsAround(x, y)
            if cells[x][y] == 0 and nbAliveCells == 3:
                new_cells_list[x][y] = 1
            if cells[x][y] == 1 and nbAliveCells in [2, 3]:
                new_cells_list[x][y] = 1
    cells = new_cells_list

```

Now we can call this function in the programLoop() function:
And repeat all again each 100 milliseconds

```py
def programLoop():
    displayCells()
    evolution()
    window.after(100, programLoop)
```


Get the whole code on <a target="_blank" href="https://github.com/UltraViolet33/Game-Life">github</a>.
