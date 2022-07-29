const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5bdfc81a22a066f3ec3bc4dd1c337ad9&query='+ latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + " percent.")
        }
    })
}

module.exports = forecast