// #! /usr/bin/env python
// # -*- coding: utf-8 -*-
// # vim:fenc=utf-8
// #
// # Copyright © 2019 Michael Bittencourt <mchl.bittencourt@gmail.com>
// #
// # Distributed under terms of the MIT license.

const AbstractElement = require("./abstractelement");
const Port = require("./port");
const Property = require("./property");
const Media = require("./media");
// const Link = require("./link");

class Link {};

class Body extends AbstractElement {

    constructor(id=undefined) {
        let listAttributes = ["id"];
        // TODO: Still needs add Context, Switch, Meta, Metadata
        // [OBS] The body can be a special Context
        let listChildren = [Port, Property, Media, Link];
        super("body", listAttributes, listChildren);
        id && this.set("id", id);
    }

}

module.exports = Body;
