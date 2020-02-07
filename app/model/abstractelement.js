// #! /usr/bin/env python
// # -*- coding: utf-8 -*-
// # vim:fenc=utf-8
// #
// # Copyright © 2019 Michael Bittencourt <mchl.bittencourt@gmail.com>
// #
// # Distributed under terms of the MIT license.

const etree = require('xmlbuilder');

class AbstractElement {

    //@abstractmethod
    constructor(name, listAttributes, listChildren) {
        this._name = name;
        this._setListAttributes(listAttributes);
        this._setListChildren(listChildren);
    }

    _setTagName(tagName) {
        this._name = tagName;
    }

    _appendAttributes(listAttributes) {
        for (let attribute in listAttributes) {
            attribute = listAttributes[attribute];
            // assert (isinstance(attribute, str)), "Each Param need be a string attribute!" 
            this.__listAttributes[attribute] = undefined;
        }
    }

    _appendChildren(listChildren) {
        for (let child in listChildren) {
            child = listChildren[child];
            // # TODO Try check if is possible create a interface seems to Java to implemente the interface GetterElementIF
            // # assert (issubclass(child, AbstractElement)), "each list element need be inherit from AbstractElement!" 
            // assert (isinstance(child, type)), "Each child need be a class prefered inherit from AbstractElement!" 
            this.__listChildren[child.name] = {type:child, list: []};
        }
    }

    _getListAttributes() {
        return this.__listAttributes;
    }

    _setListAttributes(listAttributes) {
        // assert (isinstance(listAttributes, list)), "The param \"listAttributes\" need be a list of strings!" 
        this.__listAttributes = {};
        this._appendAttributes(listAttributes);
    }

    _getListChildren() {
        return this.__listChildren;
    }

    _setListChildren(listChildren) {
        // assert (isinstance(listChildren, list)), "The param \"listChildren\" need be a list of NCL Element Classes(inherit from AbstractElement)!" 
        this.__listChildren = {};
        this._appendChildren(listChildren);
    }

    add(nclComponent) {
        for (let item in this.__listChildren) {
            item = this.__listChildren[item];
            if (nclComponent instanceof item.type) {
                item.list.push(nclComponent);
                return true;
            }
        }
        let couldAddElement = false;
        for (let key in this.__listChildren) {
            if (this.__listChildren[key].list) {
                let list = this.__listChildren[key].list.reverse();//I use a reverse list to insert new element in the more recently object
                for (let item in list) { 
                    couldAddElement = list[item].add(nclComponent);
                    if (couldAddElement)
                        break;
                }
            }
            if (couldAddElement)
                break;
        }
        return couldAddElement;
    }

    set(attribute, value) {
        console.log("attribute:", attribute);
        console.log("value:", value);
        console.log("list:", this.__listAttributes);
        if (this.__listAttributes.hasOwnProperty(attribute)) {
            console.log("passou")
            this.__listAttributes[attribute] = value;
        }
    }

    get(attribute) {
        return this.__listAttributes[attribute];
    }

    getElement() {
        let element = etree.create(this._name);
        for (let key in this.__listAttributes) {
            if (this.__listAttributes[key]) {
                element.att(key, this.__listAttributes[key]);
            }
        }
        for (let key in this.__listChildren) {
            if (this.__listChildren[key]) {
                for (let item in this.__listChildren[key].list) {
                    item = this.__listChildren[key].list[item];
                    element.importDocument(this.customizeItem(item).getElement());
                }
            }
        }
        return element;
    }

    customizeItem(item) {
        return item
    }

    generate(encoding) {
        let xmlCode = this.getElement();
        xmlCode.dec({encoding:encoding});
        return xmlCode.end({pretty:true});
    }

}

module.exports = AbstractElement;
