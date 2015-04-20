---
title: Early Bird Update
author: Ben Pirt
date: 2014/08/16
layout: post
---

Yesterday I shipped 30 Mirobots to the Early Bird backers from Kickstarter. These units have quite a few improvements that have been based on the feedback from the beta testers as well as my experiences in sending out the beta units.

![Units](/assets/blog/earlybird/group.jpg "Units")

PCB improvements
----------------

The main change on this version is a much simplified PCB. This was brought about by using an [Arduino Pro Mini](http://arduino.cc/en/Main/ArduinoBoardProMini) which runs at 3.3V instead of the previous 5V. Running at a lower voltage has a couple of advantages; it means that we can talk to the WiFi module (which is also at 3.3V) without needing any resistors to convert between voltages and very importantly, it also means that we can run from 4 AA batteries instead of the previous 5. If you've ever bought a battery charger or any packs of batteries, you'll know that they don't tend to come in packs of 5. This should make using it on a regular basis (e.g. in a classroom) much easier because you can just use a 4 battery charger.

![PCB](/assets/blog/earlybird/pcb.jpg "PCB")

One of the other big changes that I'm happy about is that I used a PCB mounted battery pack which does away with the wire that ran from the battery pack to the PCB. This was a pain because these packs tend to come with bare wires, but crimping is beyond what people should have to do during assembly, so I was either going to have to hand crimp these cables or get them done at a factory which would be expensive. It also means that the battery pack is held in place nice and securely just because it is attached to the PCB.

One of the most requested features was a power switch, which I'm pleased to announce Mirobot now has! It's much more reliable than having to pull the power cable out.

Another simplification is the driver chip. Previously I was using two 7 channel ULN2003 driver chips, primarily because these came free with the stepper motor I was using so they were the quickest thing to use. I've switched to the 8 channel ULN2803 which means it can handle both stepper motors.

You can compare the instructions for [the previous version](/build/beta/pcb/) to this [new version](/build/earlybird/pcb/) to see how much simpler the build process has become (you should also notice improvements in the instructions).

Pen arm improvements
--------------------

The chassis design has been quite stable for a while now, however one of the outstanding issues that's always bothered me was that unless the pen was adjusted perfectly there could be too much pressure on the pen arm which meant that the wheels began to spin. There were two possible approaches to this solution; either give the wheels more grip or reduce the pen arm friction. I opted for the latter because all of the solutions I could come up with for improving the wheel grip made the chassis assembly much more complex which goes against the main design goal of it being built by children.

![Pen arm](/assets/blog/earlybird/penarm.jpg "Pen arm")

The elastic band pulling the arm down was the main culprit but I'd always thought this was needed to keep the arm in place as well as provide pressure downwards. I managed to design an arm which holds itself in place without the elastic band and so now the only pressure is the weight of the pen and arm. Being able to get rid of one of the more fiddly parts of the assembly is a very nice side effect. It does mean that it works best with pens that don't require lots of pressure (e.g. felt tips rather than ball point pens) but that was always the case really.


Packaging upgrade
-----------------

For the beta units my main concern was in getting the design and software finalised enough to be able to send them out for testing. The packaging was a bit of an afterthought and to be honest, it felt that way. I wrote about the new packaging in [a previous post](/blog/2014/07/25/packaging/) and I'm really happy with how it turned out.

![Packaging](/assets/blog/earlybird/packaging.jpg "Packaging")

There are some big benefits:

 * A number of beta testers had either missing or broken chassis parts - it would be very difficult to damage these now and there's no way of packaging it up without any of the parts.
 * The laser cut parts need cleaning once they come off the machine. By cutting out the parts fully it means they all have to be cleaned separately. Leaving them in a panel means it's possible now to just rub a cloth over the whole thing and it's much, much quicker.
 * Because all of the larger pieces of the kit fit nicely into the assembly it stands out a mile away if any are missing.


What's next?
------------

There are a few things left for me to do before shipping out the bulk of the units to my Kickstarter backers:

 * I need to finalise the addons. I've done some work in thinking about how they can be built and planned ahead so hopefully thy'll be backwards compatible.
 * Put a cover around the package. At the moment it goes straight into the cardboard packaging which means if you want to use it as a gift it doesn't work so well once it's removed. It need to stand alone without the cardboard I think.
 * The pegs need to be more manufacturable. At the moment they are all cut out of a sheet of acrylic individually (they tessalate so it's quite quick) but this means they all need counting out to go in the bag. I'd like to take a similar approach to the chassis and have them come out in groups of 12 (you get some spares) held together by tabs.

That's all for now. I'm about to go on holiday for a couple of weeks but after that it's full tilt towards getting the main batch of units out for Kickstarter.