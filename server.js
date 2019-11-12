const express = require('express');
const mongoose = require ('mongoose');
//const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
//const mongojs = require('mongojs')
//const db = mongojs('mtg', ['cards'])
const db = require('./src/models')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

//app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mtg', { useNewUrlParser: true });

app.get("/api/cards/:id", function(req, res) {
    let searchQ = req.params.id
    db.Card.find({ $text: { $search: searchQ } }, (err, results) => {
        if(err) throw err;
        res.json(results)
    })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));