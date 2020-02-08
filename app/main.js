const xmlbuilder = require('xmlbuilder');

var Ncl = require('./model/ncl');
const AbstractElement = require('./model/abstractelement');
const Head = require('./model/head');
const Body = require('./model/body');
const Port = require('./model/port');
const Region = require('./model/region');
const Media = require('./model/media');
const Area = require('./model/area');
const Property = require('./model/property');

a = new AbstractElement("ncl", ["id", "xmlns", "title"], [Body, Head]);
a.set("id", "main");
a.add(new Head());
body = new Body();
body.add(new Port("portId", "componentId"));
a.add(body);
a.add(new Region(id="region1"));
let media = new Media("mediaId", "descriptor1", "lena.jpg");
media.add(new Property("propertyMedia1", "42"));
media.add(new Area("areaMedia1"));
a.add(media);
a.add(new Property("propertyBody1", "uia"));

console.log(a.generate());

// var a = new Ncl();

// console.log(a.root.end({pretty:true}));
