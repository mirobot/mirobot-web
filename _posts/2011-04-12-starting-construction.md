---
title: Starting Construction
author: Ben Pirt
date: 2011-04-12
layout: post
---

This is the second of two posts today about the progress I made building the first early stage prototype of the Arduinobot. My main aim with this physical prototype was to test out the drive train mechanism to see if it was going to work. I'd had an idea that by driving the edge of the wheel I'd be able to use a smaller, cheaper, lower resolution stepper motor. One of my prime aims is to make this kit as cheap as possible and this means that I can use a £4 motor instead of an £8 one - it also means that I don't have to buy the expensive mounting kits for attaching the motor shaft to the wheels (e.g. [this one](http://www.skpang.co.uk/catalog/product_info.php?products_id=800&osCsid=8263658981303be6d9dacee53f8e3ca6)). My main concern about this method is that the stepper will either be too slow or too underpowered to work properly. Although this was just a cardboard prototype, it did bring a few things to light.

### Speed

My initial tests were getting 300 rpm out of the motor, but these were at 7.5V. When I used a 5V USB supply, I found that I was only getting about 150 - 200 rpm. Also, one of my motors was faulty so I replaced it with a very similar one I salvaged from a printer years ago. Unfortunately, this motor would only run at 100 rpm, so the speed of this test was extremely hampered. Theoretically, given that the gear that's driving the wheel is 6.4mm in diameter, and so has a circumference of approx. 20mm. 300 rpm means it will move at around 6 meters per minute which should be adequate.


### Grip

A thin cardboard wheel doesn't have a whole lot of grip, but this test made me realise that I might need to add some kind of rubberised edge to the wheels (which I'm planning to laser cut out of ply). I'm considering routing a thin groove around the edge of the wheel and stretching an elastic band around it to provide good grip, both at the drive gear and the ground. I'm also considering using a slightly thicker grade of ply to give more surface area to the ground.


### Axles

The cardboard construction had way too much flex in it to work properly, but it demonstrated that if there is any pressure against the axle it will need to be very securely attached so as not to skew the angle of the wheels. I think this should be fine once I'm using laser-cut ply. The problem was that the cardboard quickly developed a lot of play in the joints. I went for two seperate axles rather than one that goes the whole width because this would get in the way of the pen which has to go at the central point between the two wheels.


### Third wheel

I ended up using some Lego as the third wheel for this prototype, but I realised that I'm going to have to give this a decent amount of thought. It needs to have full 360 degree movement and to have minimal drag. There are quite a few products on the market but the prices range from $8.75 for an [Omni Caster Wheel](http://www.superdroidrobots.com/shop/item.aspx?itemid=27) to $2.99 ($for a [Ball Caster](http://www.pololu.com/catalog/category/45). I'm trying to think if there is a way of making this part using the same technique as the rest of the chassis, but I'll have to get into the design in more detail first.


### Pen mechanism

This feature complicates the overall design considerably; it has to go directly between the two wheels, and it will probably take up the main flat area of the chassis, so the Arduino will probably need to sit on a layer above. It's a crucial feature though, and in itself will be quite tricky to get right, especially if the cost is kept down. I'll probably do this with a servo initially, but I'm looking for a cheaper alternative for the final design.


I need to get up to speed on using the laser cutter to do some more prototyping and spend some serious time in the London Hackspace because cardboard just doesn't cut it! I'm very used to using Illustrator, but unfortunately don't have a copy so I'm going to have to figure out how to use something like Inkscape or SketchUp to create the files for the laser cutter.



