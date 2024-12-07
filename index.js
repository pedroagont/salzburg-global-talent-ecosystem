const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API working!' });
});

app.listen(8080, () => console.log('Listening...'));
