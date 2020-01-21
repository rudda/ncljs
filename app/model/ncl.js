// created by @author: Ruddá Beltrão at 2020/01/20 20:04.
// @email: beltrao.rudah@gmail.com
// MIT license

const NCLNS_TYPE = require('./types/nclns.types');
const builder = require('xmlbuilder');

class Ncl {

    /** set default value of xmlns attribuite */
    constructor() {
        
        this._xmlns = NCLNS_TYPE.XMLNS_BDTV;
        this._encoding = 'UTF-8';
        this._xml = builder.create('ncl',  { version: '1.0', encoding: this.encoding } );
    }

    set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set xmlns(xmlns) {
        this._xmlns = xmlns;
    }

    get xmlns() {
        return this._xmlns;
    }

    set title(title) {
        this._title = title;
    }

    get title() {
        return this._title;
    }

    get xml() {
        return this._xml;
    }
    
    set xml( xml ) {
        //TODO ??
    }

}

module.exports = Ncl;
