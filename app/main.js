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
const CausalConnector = require('./model/causalconnector');
// TODO Remove Action and Condition when implement real objects
const Condition = require('./model/condition');
const Action = require('./model/action');

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
a.add(new CausalConnector("myConnector", new Condition(), new Action()));

console.log(a.generate());

// var a = new Ncl();

// console.log(a.root.end({pretty:true}));
