var express = require('express');

var app = express(),
    tweets = [];
app.listen('8000');

app.get('/', function(req, res) {
    res.send('Welcome to Node Twitter');
});

app.post('', express.bodyParser(), function(req, res) {
    if(req.body && req.body.tweet) {
        tweets.push(req.body.tweet);
        res.send({status: 'ok', message: 'Tweet Received'});
    } else {
        res.send({status: 'ok', message: 'No tweets received'});
    }
});

app.get('/tweets', function(req, res) {
    res.send(tweets);
});