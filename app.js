const express = require('express');
const app = new express();
const router = require('./src/Routes/api');


app.use('/api',router);
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

module.exports = app;

