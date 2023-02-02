const { user } = require("../Model/user")
var jwt = require('jsonwebtoken');
let privateKey = "tokenPrivetKey";

const tokencontruler={
    login:(req, res)=>{
        let email = req.body.email.toLowerCase().trim();
        let passwod = req.body.passwod;
      

        user.findOne({email:email , passwod:passwod} , (err, doc)=>{
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
    },
    tokenControl: (req, res) => {

        let token = req.body.token;

        jwt.verify(token, privateKey, function (err, doc) {
            if (err)
                res.status(401).json({ 'message': 'token error1!' })
            else
                res.send('OK!');
        })


    }
}

module.exports={
    tokencontruler
}