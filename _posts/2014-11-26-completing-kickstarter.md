---
title: Completing Kickstarter
author: Ben Pirt
date: 2014/11/26
layout: post
---

There's a reason it's been a few months since the last blog post; I've been working full tilt towards delivering all of the units for the Kickstarter backers. All of these have now shipped and I've had some really positive feedback so far which has been great. Lots of useful comments and subtle ways to improve Mirobot in the future.

One of the things I've found really interesting about production has been the devices that I've ended up making to speed up the process and I thought I'd share a few of these with you here.

![Units](/assets/blog/completing-kickstarter/programmer.jpg "Arduino Programmer")

This is a 5 way Arduino Pro Mini programmer. It allows me to quickly put an Arduino into the jig, press the button and then program it. You can control each Arduino individually. It's driven by a Raspberry Pi which runs a Node.js based programmer application that then programs the Arduinos over USB to serial adapters. There's an Arduino in there too which handles the button presses and flashes their LEDs. It's all open source:

 * [Here's the Arduino code for the flashing buttons](https://github.com/bjpirt/flashingButtons)
 * [Here's the Node.js programmer code](https://github.com/bjpirt/arduinoBulkProgrammer)

![Units](/assets/blog/completing-kickstarter/picker.jpg "Parts Picker")

This is a handy stand for picking bags of components. Just put a bag on each tube and it will hold it open and in place so you can easily drop the parts in the holes.

![Units](/assets/blog/completing-kickstarter/batjig.jpg "Battery Jig")

The battery boxes that come with Mirobot have long leads that need trimming down and also need a sticky pad putting on them for assembly. This is a simple little jig that lets you easily cut the pins to the right length and then gives you easy windows to put the stickers in.

I've found that if you can eliminate as much thought from the process as possible then hopefully mistakes will be less likely to happen. I'm really pleased I didn't just farm out the whole process to a third party - I've learned so much from actually managing this for myself that it makes development in the future a lot easier.

I'll be updating shortly on the plans for the future, but right now I've got lots of stock ready to ship out for Christmas, so [hit the store](http://shop.mirobot.io)!