// #! /usr/bin/env python
// # -*- coding: utf-8 -*-
// # vim:fenc=utf-8
// #
// # Copyright © 2019 Michael Bittencourt <mchl.bittencourt@gmail.com>
// #
// # Distributed under terms of the MIT license.

const AbstractElement = require("./abstractelement"); 
//TODO: const Region = require(".region");
class Region {}

class RegionBase extends AbstractElement {

    constructor() {
        let listAttributes = []
        let listChildren = [Region]
        super("regionBase", listAttributes, listChildren)
    }

}

module.exports = RegionBase;
