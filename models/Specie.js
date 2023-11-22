const mongoose = require("mongoose")
const Schema = mongoose.Schema

const specieSchema = new Schema({
    specie:{
     type: String,
     required: true
    },
    population:{
     type: Number,
     required: true,
     default: 0
    }
})
 
// create species model
const Specie = mongoose.model('specie', specieSchema);

//export model
module.exports = Specie