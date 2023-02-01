const {default:mongoose, model}=require('mongoose')

const {Schema}=mongoose

 const userSchema = new Schema({
email:String,
passwod:Number,
name:String,
surname:String,
username:String
})


const user = mongoose.model('user', userSchema)


module.exports={
    user
}