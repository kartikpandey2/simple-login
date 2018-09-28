const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes')
var cors = require('cors')

const app = express()

mongoose.connect('mongodb://localhost/simple-login');

app.use(cors())

app.use(bodyParser.json())

app.use('/',routes)

app.listen(4000, () => {
	console.log('server started on port 3000')
})