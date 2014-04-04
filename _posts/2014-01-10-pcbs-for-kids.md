---
title: PCBs for Kids
author: Ben Pirt
date: 2014/01/10
layout: post
---

It was a real eye-opener soldering the PCBs with the kids over Christmas. It's amazing how, as someone who can solder, you forget how tricky it can be. I've spent the last day or so re-working the Mirobot PCB to try and make the soldering a bit easier. There are a few techniques I've tried which will hopefully eliminate most of the errors.

### Increase the isolation on the solder side

![Increased isolation](/assets/kids-pcbs/isolation.png "Increased isolation")

The default isolation spacing doesn't leave a lot of room for error. You can see in this image showing before and after that there's a much bigger gap around the solder pads. This should do away with most of the shorts that occurred.


### Use staggered pins so the components stay put

![Staggered pins](/assets/kids-pcbs/staggered.png "Staggered pins")

I came across this trick on [Sparkfun](https://www.sparkfun.com/tutorials/114) - by staggering the drill holes for the header pins, they stay in the board using friction so that you don't need to hold them in place or reposition them. It's a little disconcerting having misaligned pads but it really does work.


### Make bigger solder pads

![Bigger pads](/assets/kids-pcbs/big_pads.png "Bigger pads")

It was very noticeable how much trickier it was to solder the components that had very small solder pads. The oval pads give much more space to properly position the soldering iron and flow the solder in. The downside of this is that it makes the board a lot harder to route, but if your market is DIY kids it's a must I think. In this image you can see the original small pads for the voltage regulator and some resistors which I've replaced with some nice fat oval ones.


### Troubleshooting

This isn't a PCB design issue per se, but I'm planning on making build instructions with checkpoints along the way so that you can more accurately locate any shorts you may have inadvertently made. The old approach of "solder everything and see" means that if, for example, you short + and -, the short could be pretty much anywhere on the board. If you check as you go along then the options are reduced.

I've put these components into an Eagle library in case they're useful to anyone. You can get it on GitHub [here](https://github.com/bjpirt/eagle_libraries/tree/master/Child-Friendly)