var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser: true,useUnifiedTopology: true });

var products = [
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSheQB5U8Xd2D66ehZ6aRyD0pYKDGGo9g1hTk7lh3NUAHZmJRV-',
        title: 'PUBG',
        description : 'Winner winner chicken dinner!!!',
        price: 30
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7hBeuo8yXnxJQhKxsAblBLoB-KDcUqEyXS0FkAsMpihZUHBEY',
         title: 'MINECRAFT',
        description:'It is super awesome!!',
        price: 20
    }),
    new Product({
        imagePath: 'https://images.app.goo.gl/aJoupcZ3LNFiuoDv5',
        title: 'GTA V',
        description:'Awesome Game!!!',
        price: 24
    }),
    new Product({
        imagePath: 'https://images.app.goo.gl/uXcWuu5qSANbGZ3E6',
        title: 'CALL OF DUTY',
        description:'Mind blowing game !!',
        price: 32
    }),
    new Product({
        imagePath: 'https://images.app.goo.gl/HeNTxcqNmnGk9eUs7',
        title: 'ROADRASH',
        description:'Evergreen favourite!!!!!',
        price: 23
    }),
    new Product({
        imagePath:"https://images.app.goo.gl/oSZ93UajDQMSF6fE6" ,
        title: 'EURO TRUCK SIMULATOR 2',
        description:'Marvelous graphics!!!',
        price: 18
    }),
];
var done=0;
for (var i=0; i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if (done===products.lenth){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}