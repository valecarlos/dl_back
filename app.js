const express = require('express');
const path = require('path');
const morgan = require('morgan')
const bodyParser = require('body-parser')

const port = process.env.Port || 3005;
// Init app
const app = express();
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./api/routes')(app, {});

app.listen(port, () => console.log(`Server started on port ${port}`));