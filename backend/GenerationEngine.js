const Generation = require("./generation.js");

class GenerationEngine{
    constructor(){
        this.generation = null;
    }

    newGeneration(){
        const OldGeneration = new Generation();

        if(Date.now() > OldGeneration.expiration){
            //throw new Error("This generation expired on " + this.expiration);
            this.generation = new Generation();
        }
         
    return this.newGeneration;
    }
}

module.exports = GenerationEngine;