/*
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2019 Michael Bittencourt <mchl.bittencourt@gmail.com>
#
# Distributed under terms of the MIT license.
*/

const AbstractElement = require("./abstractelement"); 

class Property extends AbstractElement {

    constructor(name, value=undefined, externable=undefined) {
        super("property", ["name", "value", "externable"], []);
        this.set("name", name);
        if (value) {
            this.set("value", value);
        }
        if (externable) {
            this.set("externable", externable);
        }
    }
}

module.exports = Property;
