const Generation = require("./index.js");

const GenerationTable = require("./table");

class GenerationEngine_1{
    constructor(){
        this.generation = null;
        this.timer = null;

    }

    start(){
        this.buildNewGeneration();
    }

    stop(){
        clearTimeout(this.timer);
    }

    buildNewGeneration(){
        this.generation = new Generation();

        console.log("New generation ", this.generation);

        this.timer = setTimeout(()=>this.buildNewGeneration(),
        this.generation.expiration.getTime()-Date.now());
    }
}

module.exports = GenerationEngine_1;