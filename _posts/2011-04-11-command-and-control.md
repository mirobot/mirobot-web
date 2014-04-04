---
title: Command and Control
author: Ben Pirt
date: 2011-04-11
layout: post
---

I spent today hacking at a couple of things on the Arduinobot; a Logo based command set based on the original Turtle Logo and making a prototype chassis. This post is about the Logo command set and another will follow with what I learned from the prototype.

I found a very small example of some original BBC Turtle Logo programming [here](http://www.classicacorn.freeuk.com/8bit_focus/logo/logo.html) and then came across some pretty good documentation along with some interactive examples [here](http://www.bfoit.org/itp/Preface.html). I also found this awesome [wiki](https://logothings.wikispaces.com/) by Cynthia Solomon, one of the original developers of Logo - check out the footage of the BBC turtle in some of the Youtube clips. I'd be fascinated to see some more original examples of the original BBC Turtle Logo as I'm unsure exactly which features it supports. Turtle Logo seems to be a subset of Logo and from my research it looks like there are a few levels of commands which get increasingly complex:

Basic commands:

  * **FD** <amount> - move forward by \<amount> mm
  * **BK** <amount> - move backward by \<amount> mm
  * **RT** <amount> - rotate clockwise by \<amount> degrees
  * **RT** <amount> - rotate anti-clockwise by \<amount> degrees
  * **PU** - move the pen up (i.e. stop drawing)
  * **PU** - move the pen down (i.e. start drawing)
 
Iterative commands:

  * **REPEAT \<count> [\<commands>]** - repeats the commands within the brackets \<count> times. The commands look like they each accept one argument only and can be just written after eachother, e.g. REPEAT 10 [FD 100 RT 30]
 
Procedural commands:

  * **TO** - allows the user to define procedures and pass them arguments.

My plan of action is to tackle the language in this order - I've already got the basic commands working well (although they aren't calibrated yet). I think the REPEAT statement is a crucial part of the Turtle experience and is much easier to fit into the line oriented processing that I currently have working. At the moment I'm taking the approach of processing each line as it comes in and performing the action that the command specified. To support adding functions at run time will be a nice interesting challenge, but one that should fit into the framework I've developed quite well.

I've still got a few questions about Logo - it seems like there are quite a few variants so I'm not sure what should be in scope for this project. If anyone can help with these qustions it would be much appreciated.

  * Can a function have more than one argument?
  * If so, when it is in a repeat statement, how does it look?
  * Can repeat statements be on multiple lines?

I'm planning on turning this into a proper arduino library, but at the moment here's the arduino sketch that has everything in it. It's pretty straightforward (except the bit about passing function references) and there's some room for improvement, but it seems to be working well.

<script src="https://gist.github.com/913815.js"> </script>

