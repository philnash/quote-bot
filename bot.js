var botBuilder = require('claudia-bot-builder');
var greeting = require('greeting');
var fetch = require('node-fetch');

var bot = botBuilder(function(message) {
  if (message.text.match(/quote/i)) {
    return fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=en').then(function(res) {
      return res.text();
    });
  } else {
    return greeting.random();
  }
});

module.exports = bot;
