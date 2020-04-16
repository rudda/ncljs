#! /usr/bin/node
// # -*- coding: utf-8 -*-
// # vim:fenc=utf-8
// #
// # Copyright © 2020 Michael Bittencourt <mchl.bittencourt@gmail.com>
// #
// # Distributed under terms of the MIT license.

const AbstractElement = require("./abstractelement");
const Condition = require("./condition");
const Action = require("./action");
//TODO adjust this to get connectorparam
//const ConnectorParam = require("./connectorparam");
const ConnectorParam = {};


class CausalConnector extends AbstractElement {

    constructor(id, condition, action) {
        let listAttributes = ["id"];
        let listChildren = [Condition, Action, ConnectorParam];
        super("causalConnector", listAttributes, listChildren);
        this.set("id", id);
        this.add(condition);
        this.add(action);
    }

    add(nclComponent) {
        if (nclComponent instanceof Condition) {
            if (this._getListChildren()[Condition.name].list.length > 0)
                throw "Is not possible add more of one Condition in CausalConnector";
        }
        if (nclComponent instanceof Action) {
            if (this._getListChildren()[Action.name].list.length > 0)
                throw "Is not possible add more of one Action in CausalConnector";
        }
        return super.add(nclComponent)
        }

    //#TODO Still need setup logic to caudalConnector and need update tu user Condition when this class will created
}

module.exports = CausalConnector;
