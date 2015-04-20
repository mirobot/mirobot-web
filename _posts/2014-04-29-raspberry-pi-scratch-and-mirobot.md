---
title: Raspberry Pi, Scratch and Mirobot
author: Ben Pirt
date: 2014/04/29
layout: post
---

One of the things that people asked me during the fantastic [Maker Faire UK](http://www.makerfaireuk.com/) last weekend was whether Mirobot would work with Scratch and the Raspberry Pi. This is hugely appealing for many reasons, but one that particularly appeals to me is the similarity to the early days of computing in schools. I've always said that one of the big influences for Mirobot was the BBC Turtle, which worked with the BBC Micro computer.

![Old and new](/assets/blog/scratch/bbc.jpg "Old and new")

_Educational robotics, old and new_

There's something really nice about using the modern equivalents to update robotics in schools for the 21st century and using the [Raspberry Pi](http://www.raspberrypi.org), Mirobot and [Scratch](http://scratch.mit.edu/) makes a poetic kind of sense. Mirobot has been built to be very open so integrations like this are pretty straightforward. Check out the demo video below and then read on for more details on how I did it.

<iframe width="720" height="405" src="http://www.youtube.com/embed/kObLpDoN-0Q" frameborder="0" allowfullscreen></iframe>

Building integrations like this with Scratch is made relatively tricky because Scratch only has a limited means of interacting with external resources. Fortunately, using the "Remote Sensor Connections" functionality I was able to write a small bridge in Node.js that would send the commands from Scratch to the WebSocket interface of Mirobot and then let Scratch know once the action was complete. You can see the hacked together script in [this gist](https://gist.github.com/bjpirt/790d1f69e8b02e209a7f) if you're interested. The way this works is as follows:

 * Scratch broadcasts a message, (e.g. mirobot-forward-100) and waits until it has completed
 * Node.js receives this message, decodes it (you can't send arguments) and forwards it on to Mirobot
 * Mirobot completes the command and broadcasts the "ready" message
 * Scratch receives the "ready" message and continues with the program

I used a trick in Scratch to make it wait until the command had completed before sending the next:

![Scratch screenshot](/assets/blog/scratch/screenshot.png "Scratch screenshot")
 
If you're interested, you can also check out [the full Scratch program](/assets/blog/scratch/program.png "Scratch program") I ran in the video.

I'd love to make this a bit slicker, but to do that I'd have to create custom blocks which means forking Scratch. It's sad that Scratch v2.0 won't run on the Raspberry Pi because the next version can be extended more easily. I think I'll write an add-on for [Snap!](http://snap.berkeley.edu/) which is a well-supported fork of Scratch that supports add-ons like this. It runs in the browser too, so it might make a great default interface for controlling Mirobot in any case.