const express = require('express')
    , bodyParser = require ('body-parser')
    , app = express()
    , ctrl = require('./controller')
    , cors = require('./cors')
app.use(bodyParser.json())
app.use(cors())


