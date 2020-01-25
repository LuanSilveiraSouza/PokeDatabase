const express = require ('express');
const mongoose = require ('mongoose');
const routes = require ('./routes.js');
const cors = require ('cors');

const app = express();
const uri = 'mongodb+srv://luan:luansouza@cluster0-9x3yg.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect (uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function() {
        console.log("DB Connection: OK");
    })
    .catch(function() {
        console.log("DB Connection: Failed");
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3030);