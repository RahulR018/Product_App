const express = require('../products/node_modules/express');
const bodyParser = require('../products/node_modules/body-parser');
const productdata = require('./src/models/productdata');
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

app.listen(3000, () => {
    console.log('Working');
})

