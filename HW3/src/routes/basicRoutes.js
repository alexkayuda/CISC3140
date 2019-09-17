const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');

module.exports = (app) => {

    app.get('', (req, res) => {
        res.render('index', {
            title: 'Weather',
            name: 'Alexander Kayuda'
        })
    });
    
    app.get('/about', (req, res) => {
        res.render('about', {
            title: 'About Me',
            name: 'Alexander Kayuda'
        })
    });
    
    app.get('/help', (req, res) => {
        res.render('help', {
            helpText: 'This is some helpful text.',
            title: 'Help',
            name: 'Alexander Kayuda'
        })
    });
    
    app.get('/weather', (req, res) => {
        if (!req.query.address) {
            return res.send({
                error: 'You must provide an address!'
            })
        }
    
        geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
            if (error) {
                return res.send({ error })
            }
    
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send({ error })
                }
    
                res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address
                })
            })
        })
    });
    
    app.get('/products', (req, res) => {
        if (!req.query.search) {
            return res.send({
                error: 'You must provide a search term'
            })
        }
    
        console.log(req.query.search)
        res.send({
            products: []
        })
    });
    
    app.get('/help/*', (req, res) => {
        res.render('404', {
            title: '404',
            name: 'Alexander Kayuda',
            errorMessage: 'Help article not found.'
        })
    });
    
    app.get('*', (req, res) => {
        res.render('404', {
            title: '404',
            name: 'Alexander Kayuda',
            errorMessage: 'Page not found.'
        })
    });
};
