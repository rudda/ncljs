/*
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2019 Michael Bittencourt <mchl.bittencourt@gmail.com>
#
# Distributed under terms of the MIT license.
*/

const AbstractElement = require("./abstractelement"); 

class Area extends AbstractElement {

    constructor(id, coords=undefined, begin=undefined, end=undefined, beginText=undefined, endText=undefined, beginPosition=undefined, endPosition=undefined, first=undefined, last=undefined, label=undefined, clip=undefined) {
        let listAttributes = ["id", "coords", "begin", "end", "beginText", "endText", "beginPosition", "endPosition", "first", "last", "label", "clip"];
        super("area", listAttributes, []);
        this.set("id", id);
        if (coords) {
            this.set("coords", coords);
        }
        if (begin) {
            this.set("begin", begin);
        }
        if (end) {
            this.set("end", end);
        }
        if (beginText) {
            this.set("beginText", beginText);
        }
        if (endText) {
            this.set("endText", endText);
        }
        if (beginPosition) {
            this.set("beginPosition", beginPosition);
        }
        if (endPosition) {
            this.set("endPosition", endPosition);
        }
        if (first) {
            this.set("first", first);
        }
        if (last) {
            this.set("last", last);
        }
        if (label) {
            this.set("label", label);
        }
        if (clip) {
            this.set("clip", clip);
        }
    }
}

module.exports = Area;
