const { default: mongoose } = require('mongoose');
const express = require('express');

const app =express()
app.use(express.json());
app.use(express.urlencoded())
var jwt = require('jsonwebtoken');



mongoose.connect('mongodb+srv://Nizam:Niza2002m@cluster0.t5dydtz.mongodb.net/test')
.then(res => {
    console.log('Succerss!!');
})
.catch(err => {
    console.log('Error', err);
})


let privateKey = 'tokenPrivetKey'

app.use((req, res, next)=>{
    if(req.url = '/token'  || req.url == '/token/tokencontrol')
    return next()
    let auth = req.header?.authorization
    if(auth != undefined){
let token = auth.split(" ")[1]

jwt.verify(token, privateKey, function (err, doc) {
    if (err)
        res.status(400).json({ 'Messege': 'error!' })
    else
        next();
})
    }
else {
    res.status(400).json({ 'Messege': 'error!' })

}
})


app.use('Home', homerouter)
app.use('token', tokenrouter)


app.listen(5050)

