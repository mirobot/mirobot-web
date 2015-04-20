---
title: Decisions Decisions
author: Ben Pirt
date: 2011-01-07
layout: post
---

I've been doing some research into the various components that will be used to make the robot. At a high level I'm going to need:

 * A controller
 * A motor driver
 * 2 motors
 * 2 wheels
 * A chassis
 * A pen control mechanism
~

So far I've been thinking that I'll laser-cut a chassis design from some ply which should assemble quite well and be sturdy enough. Plus, in the spirit of open hardware, it is an easily reproducable design that others can build - I'm also hoping to laser-cut the wheels in the same process. I'm going with the Arduino for the controller because it's an excellent open hardware platform to use with great tools and an excellent community (which I'm keen to contribute to). For the motor driver I'll probably go for an Arduino shield, depending on the motors.

The tricky decision to make at this point is to do with which motors to choose. I think I have a few options;

![Geared motor](/assets/blog/decisions/geared_motor.jpg "Geared motor")

[A low(ish) cost DC geared motor, direct-drive](http://www.solarbotics.com/products/gm3/)

![Stepper motor](/assets/blog/decisions/large_stepper.jpg "Stepper motor")

[A good quality stepper motor with a good, fine-grained, 1.8&deg; step angle, direct-drive](http://www.skpang.co.uk/catalog/product_info.php?products_id=673)

![Small stepper motor](/assets/blog/decisions/small_stepper.jpg "Small stepper motor")

[A lesser quality stepper motor with a coarser 7.5&deg; angle, geared drive](http://www.adafruit.com/index.php?main_page=product_info&products_id=168)

Although the price of the DC geared motor is good, I had doubts about how accurately I would be able to control it. If this was a robot which constantly adjusted its course based on sensors then this would probably be fine, but a turtle is designed to be programmed and set on its way so accuracy is pretty important.

I almost went for the more expensive, direct-drive stepper motor. With a 60mm diameter wheel, a 1.8 degree roation would result in a movement of 0.9mm, which is easily enough resolution. However, my concerns with this option are that it uses quite a lot of power (about 2W per phase) and that the cost is higher than I was hoping for. Also, attaching the wheel directly to the motor shaft can be a little tricky unless you use special attachments which will add more cost to the overall design.

What I'm currently thinking is that I can use the much cheaper stepper which has a 7.5 degree step, but that I can gear it down by using the stepper to drive the edge of the wheel instead of the centre. This would give a decent resolution (for example, driving a 60mm wheel with the 0.255" gear on this motor results in a 0.42mm movement, which is much more accuracy than we need). This also, hopefully, solves the issue of attaching the wheel to the motor. Fingers crossed that it's powerful enough, but I think with the gearing, and considering that it only ever gets used on a flat surface, it should be OK.

So I ordered 2 of these motors and the stepper motor shield from Adafruit Industries. Postage was a bit steep because it's shipping from America, but it was the quickest way to start prototyping. I'm hoping that I'll be able to source the stepper even cheaper than $6 because it's a very common model that should be pretty easy to find.

I still haven't figured out how I'm going to approach the pen mechanism yet, but I ordered a micro servo as well because I figure it might be an approach to take. I'm thinking that the pen will be attached to an arm with an elastic band, and I'll use another elastic band to apply downwards pressure. So the servo can raise the arm against the pressure of the band. I've also been thinking about how to use a solenoid to switch a bi-stable mechanism between two states but haven't cracked it yet.