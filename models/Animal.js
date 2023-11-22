const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Specie = require("./Specie")
//animal schema 

//specie model

//lion schema
const animalSchema = new Schema({
  specie:{
    type: mongoose.Schema.ObjectId,
    ref: Specie,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  sex:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  }

}, {timestamps: true})


//models
const Animal = mongoose.model("animal", animalSchema);


//export models
module.exports = Animal


