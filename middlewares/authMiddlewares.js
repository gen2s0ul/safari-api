require('dotenv').config()
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const tokenKey = "kfkjnhekdmvopndksnkdgskjdogjedbebkuj"

const isAuthenticated = (req, res, next) =>{
 const token = req.headers.authorization.split(" ")[1]
 console.log(token);
    if (token){
        jwt.verify(token, tokenKey, (err, decoded)=>{
            if(err){
                res.status(401).json({
                "error":"Unauthorised"
                });
            } next()
        })
    }
    
}

module.exports = isAuthenticated;