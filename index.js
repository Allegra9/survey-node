const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ all: 'good, we got another deployment!' })
})

const PORT = process.env.PORT
app.listen(PORT);
