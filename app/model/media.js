/*
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2019 Michael Bittencourt <mchl.bittencourt@gmail.com>
#
# Distributed under terms of the MIT license.
*/

const AbstractElement = require("./abstractelement"); 
const Area = require("./area");
const Property = require("./property");

class Media extends AbstractElement {

    constructor(id, descriptor, src, type=undefined, refer=undefined, instance=undefined) {
        let listAttributes = ["id", "descriptor", "src", "type", "refer", "instance"];
        let listChildren = [Area, Property];
        super("media", listAttributes, listChildren);
        this.set("id", id);
        this.set("descriptor", descriptor);
        this.set("src", src);
        if (type) {
            this.set("type", type);
        }
        if (refer) {
            this.set("refer", refer);
        }
        if (instance) {
            this.set("instance", instance);
        }
    }
}

module.exports = Media;
