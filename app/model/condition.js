#! /usr/bin/node
// # -*- coding: utf-8 -*-
// # vim:fenc=utf-8
// #
// # Copyright © 2020 Michael Bittencourt <mchl.bittencourt@gmail.com>
// #
// # Distributed under terms of the MIT license.

// TODO Remove reference from AbstractElement when create Real object
const AbstractElement = require("./abstractelement");

class Condition extends AbstractElement {

    constructor() {
        super("exampleCondition", [], []);
    }
}

module.exports = Condition;
