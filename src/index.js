const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const port = process.env.PORT || 6789;

const app = express();
const route = require('./routes');

// app.use(morgan('combined'));
            app.use(
                express.urlencoded({
                    extended: true,
                }),
            );
app.use(express.json());

                    app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));
app.set('layout', 'layouts/main');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port htpp://locahost:${port}`);
});
