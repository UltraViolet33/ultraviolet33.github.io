---
layout: "@/templates/BasePost.astro"
title: Let's create a text editor in Python
description: How to create a text editor with Tkinter in Python
pubDate: 2023-04-18T00:00:00Z
imgSrc: "/assets/images/posts/text_editor.png"
imgAlt: "Image post 5"
---

## Create a text editor

<div style="text-align: justify">
Hey guys, I write this post to show you how I created my own text editor using Python.

Why a text editor ? There is already plenty of very good text editors available. So my text editor won't be the next Word or Vscode.

But since I know how to create things with code, I spend time creating my own applications. I learn some new things on the way and I have fun coding. That's the main thing.

So our text editor will not have many features, only text editing, saving and loading files.

I will use Python, and the customTkinter library, to create GUI.

The <a href="https://github.com/TomSchimansky/CustomTkinter" target="_blank"> CustomTkinter</a>
is based on
<a href="https://docs.python.org/fr/3/library/tkinter.html" target="_blank">Tkinter</a>library but with more modern widgets.

First let's import the librairies

```py
import tkinter as tk
import customtkinter
```

Then our program will consist in a single class

```py
class TextEditorGui(customtkinter.CTk):
    def __init__(self):

        super().__init__()
        self.text = ""
        self.title("Text Editor")
        self.minsize(800, 600)
        self.textbox = customtkinter.CTkTextbox(master=self)
        self.textbox.pack(expand=1, fill="both")

        self.load_button = customtkinter.CTkButton(
            master=self, text="Load")
        self.load_button.pack(side=tk.LEFT)

        self.save_button = customtkinter.CTkButton(
            master=self, text="Save")
        self.save_button.pack(side=tk.RIGHT)
```

Here, we just set the title and the size window. We create a textbox field and we place it in the center.

Then we create two buttons on each side, one to save a file, and one to load a file. Later, we will create and bind methods to these buttons.

The `text` property will be the text that the user types in.

To run the program, we first have to create an instance of the TextEditorGui class.

```py
if __name__ == "__main__":
    textEditor = TextEditorGui()
    textEditor.mainloop()
```

For now, your application should looks like this :

![Text editor image](https://community.codenewbie.org/remoteimages/uploads/articles/jearap86ru07p6fftyw8.PNG)

So the next step is to bind the `self.text` property to the text typed in the textbox field.

So add this just under the textbox creation

```py
self.textbox = customtkinter.CTkTextbox(master=self)
self.textbox.pack(expand=1, fill="both")
# just this line
self.textbox.bind("<KeyRelease>", self.update_text)
```

When the user will use keyboard to type text, a `self.update_text` method will be called, this is our next step:

```py
def update_text(self, event):
    self.text = self.textbox.get(1.0, 'end-1c')
    print(self.text)
```

Now if you type text, you should see the text in the python console.

Next we have to create two methods, one to load a file and one to save a file.

```py
def save(self):
    filename = tk.filedialog.asksaveasfilename(defaultextension=".txt")
    with open(filename, "w") as f:
        f.write(self.text)

def load(self):
    filename = tk.filedialog.askopenfilename(defaultextension=".txt")
    with open(filename, "r") as f:
        self.text = f.read()
    self.update_textbox()
```

The save method writes text into a file. We use file dialog from Tkinter.

The load method opens a file and then sets `self.text` with the file content.
We must not forget to bind these methods to the save and load buttons.

```py
#update this line
self.load_button = customtkinter.CTkButton(
master=self, text="Load", command=self.load)

self.load_button.pack(side=tk.LEFT)

# and this line
self.save_button = customtkinter.CTkButton(
master=self, text="Save", command=self.save)
self.save_button.pack(side=tk.RIGHT)
```

The last thing to do is to create the `self.update_textbox()` to update the content of textbox field with the text from the file.

```py
def update_textbox(self):
    self.textbox.delete("1.0", tk.END)
    self.textbox.insert(tk.END, self.text)
```

We delete the content and we write the new text. So be sure to save the file before opening a new one !

As you can see, this text editor is very basic, but in 15 minutes, it works well. Plenty of ameliorations and new features can be added to this text editor, you just have to imagine it.

Hope you enjoy creating this text editor as much i did, see you next time.

<a href="https://github.com/UltraViolet33/Text-Editor" target="_blank">See the code oGithub</a>

</div>
