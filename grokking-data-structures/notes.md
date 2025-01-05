# Grokking Data Structures

## 1. Why you should learn data structures

To make sense of all the data, we need to find a way to organize it => **data structure** (DS).

DS and Algos are interdependent : algos are used to describe the operations performed on DS.

> Mawslow's hammer : "if your tool belt only has a hammer, you will be tempted to treat everything as a nail."

=> Knowing more data structures allows to have more tools and so, be more efficient when facing a problem

**How should I choose the right DS ?** You don't need do always choose the perfect one, just avoid the wrong one.
The wrong data structure can cause perf issues, security issues or even make an app crash.

At a high level, the process of going from a problem to a solution is:

1. Understand the problem you are solving.
2. Sketch out a possible solution.
3. Identify the data structures you need.
4. Implement a solution.
5. Check whether the solution works; if not, iterate.
6. Check whether the solution is good (efficient) enough; if not, iterate.

## 2. Static arrays: Building your first data structure

Arrays are a way of storing a collection of elements and efficiently accessing them by position.

Array usually serves as a synonym for a statically sized array.

Dynamically sized arrays are also possible, except that the number of elements they contain can change.

Arrays can be initialized at compile time, if a language allows to skip init, then the initial value of the array's elements depends on the language.

Arrays can be nested as array of arrays. We call them multidimensional arrays or **matrices**.

If we don't mind the order of its elements, adding and removing can be done easily (see implementation).

It's possible to use arrays for many applications : counting items and computing statistics for example.

## 3. Sorted arrays : Searching faster, at a price
