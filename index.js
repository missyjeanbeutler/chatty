
const express = require('express'),
      bodyParser = require('body-parser')

const app = express()
const port = 3051

app.use(express.static('assets'))
app.use(bodyParser.json())

let messages = []

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  messages.push({message: req.body.message, username: req.body.username, time: new Date()});
  res.status(200).json({messages: messages})
});


app.listen(port, () => console.log(`listening on ${port}`))