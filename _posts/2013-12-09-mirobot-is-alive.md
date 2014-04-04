---
title: Mirobot is alive!
author: Ben Pirt
date: 2013-12-09
layout: post
---

After working on a lot of the component parts of Mirobot in isolation, I decided it was about time to actually make it do what it has been designed to do; draw!

I ran this simple program on it:
<pre><code>REPEAT 5 [
  FORWARD 120
  RIGHT 144
]
</code></pre>
Which makes it go forward 120mm and then turn 144 degrees to the right (5 times). That's the beauty of a simple language like LOGO when it comes to these first steps of learning how to program - it's very easy to understand what it's meant to do. This (if you haven't already run it through in your head) makes it draw a five pointed star. Here's the proof:

<iframe width="720" height="405" src="http://www.youtube.com/embed/fvvo351CHts" frameborder="0" allowfullscreen></iframe>

One of the issues I had was that in my initial design for Mirobot I had the battery pack (which is the heaviest part of the robot) towards the back of the chassis near the rear caster wheel as you can see in this photo:

![Initial Layout](/assets/mirobot-is-alive/initial_layout.jpg "The initial layout")

Unfortunately this created too much friction on that wheel which is meant to be free turning. I've improved on this by moving the battery upright and as close to the main drive wheels as possible which means they grip better and the caster wheel doesn't grip as much:

![Improved Layout](/assets/mirobot-is-alive/improved_layout.jpg "The improved layout")

I'm going to get another run of the PCBs done without the nice outline for the pen and designed to slot upright into the chassis base. Should be done in time for Christmas for my kids :-)