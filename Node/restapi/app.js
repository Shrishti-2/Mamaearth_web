let express = require('express');
let app = express();
let port = 9310;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let bodyParser = require('body-parser')
let mongoUrl = "mongodb://localhost:27017";
let db;

app.use(cors())

app.get('/',(req,res) =>{
    res.send('<h1>Hiiii from express</h1>');
})
// get all category
app.get('/category',(req,res) => {
    db.collection('category').find().toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//Connection with db
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Error While Connecting');
    db = client.db('Mamaearth') // database name
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})
 
