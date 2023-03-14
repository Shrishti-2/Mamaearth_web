let express = require('express');
let app = express();
let port = 9310;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl ="mongodb://localhost:27017";
let db;

app.use(cors())

app.get('/',(req,res) =>{
    res.send('<h1>Hiiii from express</h1>');
})
app.get('/location',(req,res) =>{
    res.send('<h1>Hiiii from location</h1>');
})

//Connection with db
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Error While Connecting');
    db = client.db('') // database name
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})
 
app.listen(port,(err)=>{
    if (err) throw err;
     console.log(`Server is running at port ${port}`)
})