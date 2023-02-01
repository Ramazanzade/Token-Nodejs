const { user } = require("../Model/user")
var jwt = require('jsonwebtoken');
let privateKey = "tokenPrivetKey";

const tokencontruler={
    tokencontrul:(req, res)=>{
        let email = req.body.email.toLowerCase().trim();
        let passwod = req.body.passwod;
        let name = req.body.name;
        let surname=req.body.surname;
        let username=req.body.username

        user.findOne({email:email , passwod:passwod, name:name, surname:surname, username:username} , (err, doc)=>{
            if(!err){
                if(doc){
                    let token = jwt.sign({email:email}, privateKey,{
                        expiresIn: '10d',
                        algorithm: 'HS256'
                    })

                    res.json({ 'token': token })
                }
                else{
                    res.status(400).json({"massege":"Token yalnis"})
                }
            }
            else{
                res.status(500).json(err)
            }
        })
    }
}

module.exports={
    tokencontruler
}