/**
 * @author Ruddá Beltrão
 * @email beltrao.rudah@gmail.com
 * @description this script is response to create a common xml node 
 */
const builder = require('xmlbuilder');


class CommonNode {

    constructor(node = null, params = []) {

        if (node) {

            this.root = builder.create(node);
            addAttr(this.root, params);

        } else {
            throw 'node param is necessaary';
        }

    }

    /** create dinamically elements for a root parent  */
    /**
     * 
     * @param {root parente element} parent 
     * @param {Element name} element_name 
     * @param {attributes } child 
     * @param {if necessaary add an attribuite} content
     * @description {see: https://www.npmjs.com/package/xmlbuilder } 
     */
    createEl(parent = null, element_name = '', child = [], content = '') {

        if (parent && element_name) {

            var el = parent.ele(element_name);
            addAttr(el, child);

        } else {
            throw 'its necessary a parent element and element name';
        }
    }

};


/** begin private methods */

function addAttr(el, att) {
    //must to be { key: value } element
    att.forEach(item => {
        var key = Object.keys(item)[0];
        el.att(key, item[key]);
    });
}

/** end private methods */


module.exports = CommonNode;
