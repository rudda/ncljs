/*
#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2019 Michael Bittencourt <mchl.bittencourt@gmail.com>
#
# Distributed under terms of the MIT license.
*/

const AbstractElement = require("./abstractelement"); 

class Region extends AbstractElement {

    constructor(id, height=undefined, width=undefined, title=undefined,  top=undefined, botton=undefined, left=undefined, right=undefined, zIndex=undefined) {
        let listAttributes = ["id", "height", "width", "title",  "top", "botton", "left", "right", "zIndex"];
        let listChildren = [Region];
        super("region", listAttributes, listChildren)
        this.set("id", id);
        if (title) {
            this.set("title", title);
        }
        if (height) {
            this.set("height", height);
        }
        if (width) {
            this.set("width", width);
        }
        if (top) {
            this.set("top", top);
        }
        if (botton) {
            this.set("botton", botton);
        }
        if (left) {
            this.set("left", left);
        }
        if (right) {
            this.set("right", right);
        }
        if (zIndex) {
            this.set("zIndex", zIndex);
        }
    }
}

module.exports = Region;
