const mongoose= require('../../../products/node_modules/mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');

const Schema = mongoose.Schema;

var signupSchema =new Schema({
    FirstName: String,
    LastName:String,
    gender:Number,
    email: String,
    password:String
})

var signupdata =mongoose.model('signupdata', signupSchema);

module.exports= signupdata;