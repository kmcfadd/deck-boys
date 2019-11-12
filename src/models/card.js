const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema ({
    set: { type: String, required: true },
    number: { type:  String, required: true },
    name: { type:  String, required: true },
    type: { type: String, required: true },
    types: { type:  Array, required: true },
    colors: { type:  Array, required: true },
    manaCost: { type:  String, required: false },
    convertedManaCost: { type:  Number, required: true },
    power: { type:  String, required: false },
    toughness: { type:  String, required: false },
    text: { type:  String, required: true },
    artist: { type:  String, required: false },
})

const Card = mongoose.model('Card', cardSchema, 'cards');

module.exports = Card;