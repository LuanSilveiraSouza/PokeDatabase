const mongoose = require('mongoose');
const mai = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb+srv://luan:luansouza@cluster0-9x3yg.mongodb.net/test?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true});

mai.initialize(connection);

const PokeSchema = mongoose.Schema({
    name : String,
    pkdx: Number,
    nature: String,
    gender: String,
    ability: String,
    moves: [String],
    item: String,
    shiny: Boolean
});

PokeSchema.plugin(mai.plugin, {
    model: 'Pokemon',
    startAt: 100
});

module.exports = mongoose.model('Pokemon', PokeSchema);