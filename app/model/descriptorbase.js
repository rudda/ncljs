// #! /usr/bin/node
// # -*- coding: utf-8 -*-
// # vim:fenc=utf-8
// #
// # Copyright © 2019 Michael Bittencourt <mchl.bittencourt@gmail.com>
// #
// # Distributed under terms of the MIT license.

const AbstractElement = require("./abstractelement"); 
//TODO: const Descriptor = require(".descriptor");
class Descriptor {}

class DescriptorBase extends AbstractElement {

    constructor() {
        let listAttributes = [];
        let listChildren = [Descriptor];
        super("descriptorBase", listAttributes, listChildren);
    }

 }

module.exports = DescriptorBase;
