// console.log("hello")
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express();

// app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
})
console.log("listen on 8081")
app.listen(process.env.PORT || 8081);