const xmlbuilder = require('xmlbuilder');

var Ncl = require('./model/ncl');
var a = new Ncl();
a.id ="ncl";
a.xml.ele("oi");

person = xmlbuilder.create('person').att('id', 1);
a.xml.importDocument(person);
console.log(a.xml.end({pretty:true}));