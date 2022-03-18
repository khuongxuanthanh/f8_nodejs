const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

import { engine } from 'express-handlebars';

// HTTP logger
app.use(morgan('combined'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })