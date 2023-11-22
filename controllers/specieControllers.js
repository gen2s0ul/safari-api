const Specie = require("../models/Specie");

//controller to get animal species
module.exports.allSpecies = (req, res)=>{
    Specie.find()
     .then(specie =>{
      console.log(specie)
      res.json({"species": specie})
     })
     .catch(err =>{
      console.log(err.message);
      res.send (err.message)
      })
}

//add new specie 
module.exports.newSpecies = (req, res)=>{
    console.log(req.body);
    let specie = new Specie({
        specie: req.body.specie, 
    })

    specie.save()
    .then((newspecie)=>{
         res.redirect('/species')
    })
    .catch(err =>{
        console.log(err);
    });
    
}

//get single specie
module.exports.getSpecies = (req, res)=>{
    const id = req.params.id

     //find specie with id = id
     Specie.findById(id)
     .then(specie =>{
      console.log("specie found")
      res.json({"specie": specie})
     })
     .catch(err =>{
      console.log(err.message);
      })
}

//update new specie
module.exports.updateSpecies = (req, res)=>{
    res.json({
        species:"Update species"
    })
}

//delete species
module.exports.deleteSpecies = (req, res)=>{
    const id = req.params.id

     //find specie with id = id
     Specie.deleteOne(id)
     .then(specie =>{
      console.log("specie found")
      res.json({"specie": specie})
     })
     .catch(err =>{
      console.log(err.message);
      })
}