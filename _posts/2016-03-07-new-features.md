---
title: New Features
author: Ben Pirt
date: 2016/03/07
layout: post
---

I've been busy recently implementing a bunch of new features that I've had on my list for quite a while. Here's a quick rundown on some of them:

Python App
==========

![Python App](/assets/blog/new-features/python.jpg)

Python is a great programming language for beginners and there's been a Python library for Mirobot for over a year now, but I've always wanted to make it even easier to get started so I put together a way of running Python in-browser so you don't need to install anything. It's made with a Python engine called [Skulpt](http://www.skulpt.org).



Auto Discovery
==============

![Discovery](/assets/blog/new-features/discovery.jpg)

One of the parts of the setup process that always annoyed me was finding your Mirobot on your network once you've got it on your WiFi. The latest firmware now has a discovery process built in so that it's easy to find. What this means is that you can now visit [local.mirobot.io](http://local.mirobot.io) when you're on your own network and it will connect directly to your Mirobot. It also means that if you visit [apps.mirobot.io](http://apps.mirobot.io) it will autoconnect there too or let you choose which Mirobot you want to use if you've got more than one on your network. I'm going to be building support for this into the Python and Javascript libraries to make them even easier to use.


Simulation Tool
===============

![Simulation](/assets/blog/new-features/simulation.jpg)

I'd always wanted to have a way of simulating how Mirobot would move that could be used by any app. Now you can just toggle a switch and it will send all commands to the simulator instead of the Mirobot. It comes in especially handy if you want to practice some programming but haven't got your Mirobot set up and ready.


Fullscreen
==========

![Fullscreen](/assets/blog/new-features/fullscreen.jpg)

When working on programming, it's nice to be able to remove all distractions so you can now put the apps into fullscreen mode


Chrome App
==========

![Chrome App](/assets/blog/new-features/chrome.jpg)

All of the apps have been packaged up into one Chrome app which lets you run it offline as well as giving you an application icon to click on. It can be installed via Chrome on Mac, Windows and Android devices.


Internationalised Apps
======================

![International](/assets/blog/new-features/international.jpg)

Mirobot is used in over 50 countries around the world so it's only fitting that the apps should work in more than just English. There are currently 9 languages supported and more on their way. If you'd like to help out by spending 10 minutes translating the apps into your language please [get in touch](mailto:info@mirobot.io)


That's it for now - if you have any suggestions for features or apps you'd like to see, [get in touch](mailto:info@mirobot.io)