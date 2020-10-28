const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');

app.get('/', function(req, res) {
    res.send('Hello World!');
});


app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(history());

app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), function() {
    console.log(`Example app listening on port http://localhost:${app.get('puerto')}`);
});