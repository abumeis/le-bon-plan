const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors())


app.listen(port);
