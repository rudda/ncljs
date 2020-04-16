// #! /usr/bin/node
// # -*- coding: utf-8 -*-
// # vim:fenc=utf-8
// #
// # Copyright © 2019 Michael Bittencourt <mchl.bittencourt@gmail.com>
// #
// # Distributed under terms of the MIT license.

const AbstractElement = require("./abstractelement"); 
const CausalConnector = require("./causalconnector");

class ConnectorBase extends AbstractElement {

    constructor() {
        let listAttributes = [];
        let listChildren = [CausalConnector];
        super("connectorBase", listAttributes, listChildren);
    }
        
}

module.exports = ConnectorBase;
