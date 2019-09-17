const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const token = `f3354ececdb8aadb8fc1067bf8abd95e`;
    const url = 'https://api.darksky.net/forecast/' + token + '/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(url);
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out.' + 
                'There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast