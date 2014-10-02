// The express web server module
var express = require('express');

// The virtual host for handling subdomains
var vhost = require('vhost');

// Instantiate web server application
var app = express();

// MyChain block chain explorer application
var mychain = require('../mychain')();

// MyWallet Bitcoin wallet
//var mywallet = require('../mywallet')();

// Use MyChain at mychain.io and www.mychain.io
app.use(vhost('mychain.io', mychain));
app.use(vhost('www.mychain.io', mychain));

// Use MyWallet at wallet.mychain.io
//app.use(vhost('wallet.mychain.io'), mywallet);

app.listen(80);
