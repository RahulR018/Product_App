const express = require('../products/node_modules/express');
const bodyParser = require('../products/node_modules/body-parser');
const productdata = require('./src/models/productdata');
const signupdata= require('./src/models/signupdata');
const cors = require('../products/node_modules/cors');

var app = new express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hai from server')
});

app.get('/products', (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Alloe-Methods: GET,POST,PATCH,PUT,DELETE,OPTION');
    productdata.find().then(function (data) {
        res.send(data);
    })
});

app.post('/signup/up', (req,res)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Alloe-Methods: GET,POST,PATCH,PUT,DELETE,OPTION');
    signupdata.find().then(function(data){
        console.log(data);
    })
})
app.post('/insert',(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    var product={
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode: req.body.product.productCode,
        releaseDate: req.body.product.releaseDate,
        description:req.body.product.description,
        price: req.body.product.price,
        starRating:req.body.product.starRating,
        imageUrl: req.body.product.imageUrl
    }
    var product= new productdata(product);
    product.save();
    console.log(product);
})


app.delete('/remove/:id',(req,res)=>{
    let id=req.params.id;
    productdata.deleteOne({_id: id}).then((err, product)=>{
        if (err) {
            console.log(err)
        } else {
            console.log(product)
            res.status(200).send(product)
        }
    })
})


app.put('/update', (req,res)=>{
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    productdata.update({_id:req.body.id},{$set: req.body.product},(err, product)=>{
        if(err) {
            console.log(err)
        } else {
            res.status(200).send(product)
        }
    })
})
app.listen(3000, () => {
    console.log('Working');
})

