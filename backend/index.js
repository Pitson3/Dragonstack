const Generation = require("./generation.js");

const generation = new Generation();

console.log(generation);

const gooby = generation.newDragon();

console.log("Gooby ", gooby);

setTimeout(()=>{
    const mimar = generation.newDragon();

    console.log("Mimar ", mimar)
}, 15000);






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