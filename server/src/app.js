const express = require('express');
const cors = require('cors');
const api = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());
app.use(api);
app.use(express.urlencoded({ extended: true }));

module.exports = app;
