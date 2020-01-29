// created by @author: Ruddá Beltrão at 2020/01/20 20:04.
// @email: beltrao.rudah@gmail.com
// MIT license

const NCLNS_TYPE = require('./types/nclns.types');
const CommonNode = require('./common/common.node');

class Ncl extends CommonNode {

    /** set default value of xmlns attribuite */
    constructor() {

        super('ncl', [{ version: '1.0'}, {encoding: 'UTF-8' }]);
        this._xmlns = NCLNS_TYPE.XMLNS_BDTV;
        this._encoding = 'UTF-8';

    }
    
}

module.exports = Ncl;
