// #! /usr/bin/env python
// # -*- coding: utf-8 -*-
// # vim:fenc=utf-8
// #
// # Copyright © 2019 Michael Bittencourt <mchl.bittencourt@gmail.com>
// #
// # Distributed under terms of the MIT license.

// """

// """

const AbstractElement = require("./abstractelement"); 

class Port extends AbstractElement {

    constructor(id, component, interfaceElement=undefined) {
        let listAttributes = ["id", "component", "interface"]
        super("port", listAttributes, []);
        this.set("id", id)
        this.set("component", component)
        if (interfaceElement) {
            self.set("interface", interfaceElement)
        }
    }

}

module.exports = Port;

