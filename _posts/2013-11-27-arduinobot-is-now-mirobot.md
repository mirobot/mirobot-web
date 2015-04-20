---
title: Arduinobot is now Mirobot
author: Ben Pirt
date: 2013-11-27
layout: post
---

The project is still very much alive. After a hiatus of almost two years it's great to be posting something here again.

The first news is that I've changed the name of the project. Arduinobot was a bad name because it piggy-backed on the Arduino brand (which is a bad thing to do) so I've renamed it to Mirobot. There are a few things behind the name but essentially it came from thinking about what an artistic drawing robot might be called. It's named after [Joan Miró](https://en.wikipedia.org/wiki/Joan_Mir%C3%B3), the 20th Century Spanish artist.

Since I left Xively I've been dedicating several days a week to completing the first version of Mirobot. This was the main reason for the hiatus - it was too difficult to do work on hardware without a good workshop. Setting up on the kitchen table is far from ideal so now I've got a proper workshop (with room for a laser cutter :-) I've made much better progress. Some of the things I've done in the last couple of months are:

 - Re-worked the drive train to use direct-drive geared steppers. This massively simplifies the mechanical design as well as being even lower cost
 - Designed a custom circuit board that fits nicely in the robot and that's very low cost to build. It's all through-hole so it can be easily soldered. More on that later.
 - Set up a WiFi module so it's completely wireless and networkable.
 - Written a couple of Arduino libraries;
   - [HotStepper](https://github.com/bjpirt/HotStepper) is a lightweight interrupt driven stepper motor driver
   - [LogoVM](https://github.com/bjpirt/LogoVM) is a customisable virtual machine that runs the LOGO language for telling it what to do
 
The aims of the project are unchanged; create a low cost, fully open source drawing robot that can be used to teach children about technology and programming.

There are lots of plans for building the supporting parts of the project like the documentation and instructions as well as a web site where people can learn, but more about those in the future. I'm going to be selling Mirobots as kits to try and get lots out into the world. [Sign up to the mailing list](/signup) if you'd like to be notified when they are available.
