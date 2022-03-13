const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const port = process.env.PORT || 6789;

const app = express();

app.use(morgan('combined'));
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'resources/views'));
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

app.get('/', (req, res) => { 
  res.render('home');
});
app.get('/News', (req, res) => { 
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port htpp://locahost: ${port}`)
})