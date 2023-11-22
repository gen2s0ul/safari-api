require('dotenv').config()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// const tokenKey = process.env.JWT_TOKEN
const tokenKey = "kfkjnhekdmvopndksnkdgskjdogjedbebkuj"

//function to create jwt token
const createToken = (id) =>{
    return jwt.sign({ id }, tokenKey,{ expiresIn: '1h'});
}

//register new user 
module.exports.register = async(req, res) =>{
    let {name, email, password} = req.body;

    // genearate salt
    const salt = await bcrypt.genSalt()
    //hash the passwword
    password = await bcrypt.hash(password, salt);

    User.create({
        name,
        email,
        password
    })
    .then(user =>{
        //create authentication token
        const token = createToken(user.id)
        //send response with hte token  of the created user
        res.status(200).json({
            'message':"User registered succesfully",
            "access-token": token,
        })
    }).catch(err =>{
        res.status(400).json({
            "message": err.message
        })
    })
}

//user login
module.exports.login = async(req,res)=>{
    const {email, password} = req.body

    const user =  await User.findOne({email : email});
 if (user){
    //compare password of the user
    const passwordValidity = await  bcrypt.compare(password, user.password);
    if (passwordValidity){
        //creaete web token
        const token = createToken(user.id);
      
        res.status(200).json({
            "message" : "User logged in",
            "access-token" : token
        })
    } else {
        res.status(200).json({
            "message": "Login credentials incorrect"
        })
    }
    }else {
     res.status(200).json({
        "message": "Login credentials incorrect"
     })
    }
}

