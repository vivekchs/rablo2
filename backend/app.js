require('./models/config');
const Product = require('./models/schema');
const express = require('express');
const app = express();
const PORT = 8000;

const mongodb = require('mongodb')

const cors = require('cors');

app.use(cors());

const Use = require('./models/user')

app.use(express.json());
app.get('/hello', (req,res) => {
    res.send("hello");
})

app.post('/add', async (req, resp) => {
    let result = new Product(req.body);
    let ans = await result.save();

    resp.send(ans);
})

app.post('/signup', async (req, resp) => {
    console.log(req.body);
    let result = new Use(req.body);
    let ans = await result.save();

    resp.send(ans);
})

app.post('/login', async (req, resp) => {
    let result = await Use.find(req.body);

    console.log(result);
    resp.send(result);
})
app.post('/displaydata', async(req, res) => {
    const data = await Product.find();
    // console.log(data);
    res.send(data);
})

app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    let productId = req.params.id;

    const result = await Product.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.send("hello");
    
});



app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

