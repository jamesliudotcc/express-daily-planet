const express = require('express');
const db = require('./models');
const pug = require('pug');

app = express();

// Using Pug for the view engine

app.set('view engine', 'pug');

// >>>>>>>>>>>>>> GET Routes <<<<<<<<<<<<<<<

app.get('/', (req, res) => {
  res.render('site/index');
});

app.get('/articles', (req, res) => {
  res.send('You are at articles');
});

app.get('/articles/new', (req, res) => {
  res.render('articles/new');
});

app.get('/articles/:idx', (req, res) => {
  res.send('You requested article ' + req.params.idx);
});

app.get('/about', (req, res) => {
  res.send('About us');
});

app.get('/contact', (req, res) => {
  res.send('Contact');
});

// >>>>>>>>>> POST Routes <<<<<<<<<<<<<<<<<

app.post('/articles', (req, res) => {
  res.send('You posted something to the form. Did something happen?');
});

app.listen('8000', () => {
  console.log('Daily Planet is listening at port 8000');
});
