// #! /usr/bin/env python
// # -*- coding: utf-8 -*-
// # vim:fenc=utf-8
// #
// # Copyright © 2019 Michael Bittencourt <mchl.bittencourt@gmail.com>
// #
// # Distributed under terms of the MIT license.

const AbstractElement = require("./abstractelement"); 
const RegionBase = require("./regionbase"); 
const DescriptorBase = require("./descriptorbase"); 
const ConnectorBase = require("./connectorbase"); 

class Head extends AbstractElement {

    constructor() {
        let listAttributes = [];
        let listChildren = [RegionBase, DescriptorBase, ConnectorBase];
        super("head", listAttributes, listChildren)
        this.add(new RegionBase());
        this.add(new DescriptorBase());
        this.add(new ConnectorBase());
    }

    // #TODO Still need add all childrens to head tag
}

module.exports = Head;
