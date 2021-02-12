//const GenerationEngine_1 = require("./engine.js");
const express = require("express");

const app = express();

const dragonRouter = require("./api/dragon.js")
const generationRouter = require("./api/generation")

//const Generation = require("./generation/index.js");
const GenerationEngine = require("./generation/engine.js");

const engine = new GenerationEngine();
//const port = 3000;

app.locals.engine = engine; 

app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);


//Practice Express
app.get("/old", (req,res)=>res.send("Hello! Pitson. You are alive!"))

app.get("/get", (req,res)=>res.send("The server got a get request!"));
app.post("/post", (req,res)=>res.send("The server got a post request!"));
app.put("/put", (req,res)=>res.send("The server got a put request!"));
app.patch("/patch", (req,res)=>res.send("The server got a patch request!"));
app.link("/link", (req,res)=>res.send("The server got a link request!"));
app.delete("/delete", (req,res)=>res.send("The server got a delete request!"));


engine.start();


//app.listen("3000", ()=>{console.log("Listening on port 3000")});
//app.listen(port, ()=>{console.log(`Listening on port ${port}`)});

setTimeout(()=>{
    engine.stop();
},20000);


module.exports = app;


/*
const generation = new Generation();

console.log(generation);

const gooby = generation.newDragon();

console.log("Gooby ", gooby);

setTimeout(()=>{
    const mimar = generation.newDragon();

    console.log("Mimar ", mimar)
}, 15000);


setTimeout(()=>{
    const fooey = GenerationEngine.newDragon();

    console.log("FOoey ", fooey)
}, 2000)
*/






/** 
const Dragon = require("./dragon.js");

const fooey = new Dragon({
        birthdate: new Date,
        nickname: 'fooey'
    });

const baloo = new Dragon({
    birthdate: new Date, 
    nickname: 'baloo',
    traits : {
        traitType:"backgroundColor",
        traitValue:"green"
    }
});

setTimeout(()=>{
    const gooby = new Dragon();
    console.log("gooby", gooby);
}, 3000);

//const mimar = new Dragon();

console.log("fooey", fooey);
console.log("balloo", baloo);

//console.log("mimar", mimar);
**/