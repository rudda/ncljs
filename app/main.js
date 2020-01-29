const xmlbuilder = require('xmlbuilder');

var Ncl = require('./model/ncl');
var a = new Ncl();

console.log(a.root.end({pretty:true}));