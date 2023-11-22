const Animal = require('../models/Animal')


module.exports.allanimals= (req, res)=>{
    
    Animal.find()
    .then(animals =>{
         res.json( {"animals" : animals})
    })
    .catch(err => {
     console.log(err.message);
     res.send(err.message)
    })
}
//add new animal
module.exports.newAnimal = (req, res)=> {
    let { specie, name, sex, age } = req.body;
      const animal = new Animal({
       specie,
        name,
        sex,
        age,
    });
    //save animal
    animal.save()
    .then(data =>{
        res.json ({
            
             "message": "Animal succesfully registered",
             "user" : data
    });
    })
    .catch(err =>{
        console.log(err.message);
    });
}

//to get single animal
module.exports.singleAnimal = (req, res)=>{
    const id = req.params.id
  
     //find animal with id = id
     Animal.findById(id)
     .then(animal =>{
      console.log("animal found")
      if (animal) res.json({"animal": animal})
      else res.json({err : "animal not found"})
     })
     .catch(err =>{
      console.log(err.message);
      })
}


// to update animal
module.exports.updateAnimal = (req, res)=>{
    res.json({
        animal: "animal updated"
    })
}

//delete animal
module.exports.deleteAnimal= (req, res)=>{
    const id = req.params.id

     //find specie with id = id
     Animal.findByIdAndDelete(id)
     .then(() =>{
      console.log("animal found")
      res.json({"message": "animal deleted"})
     })
     .catch(err =>{
      console.log(err.message);
      })
}