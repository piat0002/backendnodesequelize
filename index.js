const express = require('express');
const logger = require('morgan');
const http = require('http');
const app = express();
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(logger('dev'));
app.use(express.json());
// Add headers before the routes are defined

var models = require('./models');
const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

console.log("server started on ", port)

models.sequelize.sync()
    .then(function () {
        app.listen(port);
    });

require('./routes')(app);

app.get('*', (req, res) => res.status(200)
    .send({
        message: 'Bonjour.',
    })
);

console.log("ok")
module.exports = app;