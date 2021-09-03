const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const fetch = require('node-fetch')

const app = express()
dotenv.config();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('dist'))


const PORT = 8081



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

console.log(`API Key is ${process.env.API_KEY}`)
const APIBaseUrl = 'https://api.meaningcloud.com/sentiment-2.1?'
let inputedURL = []

app.post('/evaluate-url', async function(req, res) {
    inputedURL = req.body.url
    console.log(`You entered: ${inputedURL}`)
    console.log(`${APIBaseUrl}key=${process.env.API_KEY}&&url=${inputedURL}&lang=en`);
    const link = `${APIBaseUrl}key=${process.env.API_KEY}&&url=${inputedURL}&lang=en`
    const APIResponse = await fetch(link)
    const data = await APIResponse.json()
    console.log('Yeah Boy!')
    res.send(data)
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})
