const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 6789;

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views'));
app.set('layout', 'layouts/main');

app.get('/',function (req, res) { 
  res.render('home');
});
app.get('/News',function (req, res) { 
  res.render('news');
});

app.listen(port,function (err) {
  console.log(`Example app listening on port http://locahost:${port}`)
});