/*jshint esversion: 8 */

const formato_hvRoute = require('./formatoHv-route');

module.exports = (app) => {
    app.use('/', formato_hvRoute);

    app.get('*', (req, res) => {
        res.status(404).send('PAGE NOT FOUND');
    });
};