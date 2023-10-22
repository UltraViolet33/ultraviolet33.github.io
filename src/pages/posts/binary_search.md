## intro

I'm starting learning more about algorithms and data structure, so I decided to write some articles when i learn something interesting.
For this first post, i am going to talk about DSA in general, what is it and why you should learn more about it.

Why should you learn more abour DSA ?
When you build application, web, mobile or any type of application, you should think about performance issues and how you could optimize your code.


Data stucure and algoritms.

What is a data structure ?

If you know how to code, even just a little, you surely already see arrays. An array store several data. for example several numbers or severals person names.

so an array is a data structure, it is a way to store and organize data. but it is not the only data structure, 

there is more like linked list, hash tables or graphs for examples.

when you create an application, any type of application, if your application manipulate data, you surely use one or several data structures.
but there is case where a data structure is more suitable than another, so you have to choose wisely. That's one part of dsa.


the second part is algorithms. 

an algoritm is a way to solve a problem. when you write code, you write algorithms.

Again, there is a way to optimize your algoritms.


## what do we want to optimize ?

you want to optimize two things : the memery usage and the time complexity. 

let's dive deeper into time complexity

imagine you have a list of 1000 numbers. the numbers are sorted in ascendant order.

you want to find the index of a specific number, let's say 750.

how do you do ?

you could check the numbers one by one in order to see if you find 750. but it's really not optimal, and in the worst case, you will have to try 1000 times before finding you number.

you could try and pick and random index and check if 750 is here, but again it is realyy not optimal.

so you have to find a way, a more optimized way .


for this example it is rather easy. There are 1000 numbers, sorted. so you pick the 500 th. if it is more than 750 then, you know that 750 is betwwen the first and the 499th numbers. you just eliminated the half of the possiblilites, and then you do that again.

you pick the middle one so 250th.

with this method you can find the index of 750 in a few try.

## what is binary search

## example with javascript

