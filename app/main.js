const xmlbuilder = require('xmlbuilder');

var Ncl = require('./model/ncl');
const AbstractElement = require('./model/abstractelement');
const Head = require('./model/head');
const Body = require('./model/body');
const Port = require('./model/port');
const Region = require('./model/region');

a = new AbstractElement("ncl", ["id", "xmlns", "title"], [Body, Head]);
a.set("id", "main");
a.add(new Head());
body = new Body();
body.add(new Port("portId", "componentId"));
a.add(body);
a.add(new Region(id="region1"));

console.log(a.generate());

// var a = new Ncl();

// console.log(a.root.end({pretty:true}));
