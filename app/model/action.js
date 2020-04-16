#! /usr/bin/node
// # -*- coding: utf-8 -*-
// # vim:fenc=utf-8
// #
// # Copyright © 2020 Michael Bittencourt <mchl.bittencourt@gmail.com>
// #
// # Distributed under terms of the MIT license.

const AbstractElement = require("./abstractelement");

class Action extends AbstractElement {
    
    constructor() {
        super("exampleAction", [], []);
    }

}

module.exports = Action;
