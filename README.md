In this we will learn about the express with backend with notes.

// REQUEST AND RESPONSE
req mein saare data hota hai aane waale user ki taraf ka, jaise ki uski location, device info and other things.
Aur res mein controls hote hai jinke basis pe hum server se response behj paate hain.

//NEXT
next is just a push so that our request moves to the next thing which should be executed.

//MIDDLEWARE
middleware ek aisa function hota hai jo route se pahle chalta hain, mtlb saare routes mai koi bhi chale usse phle middleware chalta hain and usmein likha code phle excute hota hain.

//ROUTE PARAMETERS
--> dynamic routing
aisa koi bhi route jiska koi hissa baar baara same rhta hai aur kuch chheez uski change hoti rhti hain.. to we will make dynamic route for it.
== to make any route dynamic you can use : where you want to make dynamic. and to use their value use
(${`req.params`})

//TEMPLATE ENGINES
html do not having power
but ejs is with html is superpower.

How can setup ejs

1. ejs install
   npm i ejs

2) configure ejs
   app.set ("view engine ", "ejs");

3) now will make views folder

4) Make ejs files in it

5) now we will render it ==> we will render the file we make in views folder. And we will not write the .ejs

//TEMPLATE ENGINES
ejs html m convert hota hain.
aur ejs m hum dynamic value use kr skte hainn
like <%= name%>


// STATIC FILES
images, stylesheet , frontend ki static files kasie use krenge
setup of static files
==> create a folder called public
create three folders name images,  stylesheets , javascript
configure the express static
understand the path

//ERROR HANDLING
