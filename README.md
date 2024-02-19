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
