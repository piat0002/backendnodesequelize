const express = require('express');
const logger = require('morgan');
const http = require('http');
const app = express();
app.use(logger('dev'));
app.use(express.json());

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
        message: 'Welcome to the beginning of nothingness.',
    })
);

console.log("ok")
module.exports = app;