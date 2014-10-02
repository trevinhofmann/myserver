// The express web server module
var express = require('express');

// Instantiate web server application
var app = express();

// MyChain block chain explorer application
var mychain = require('../mychain')();

// MyWallet Bitcoin wallet
var mywallet = require('../mywallet')();

// Use MyChain at mychain.io and www.mychain.io
app.use(express.vhost('mychain.io'), mychain);
app.use(express.vhost('www.mychain.io'), mychain);

// Use MyWallet at wallet.mychain.io
//app.use(express.vhost('wallet.mychain.io'), mywallet);

app.listen(80);
