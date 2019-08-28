/**
 * create by Rudda Beltrao
 * 
 * Body must to follow a order
 *     (recomendation only)
 * 1 - importedDocumentBase
 * 2 - ruleBase
 * 3-  transitionBase
 * 4 - RegionBase
 * 5 - DescriptorBase
 * 6 - ConnectorBase
 * 7 - meta
 * 8 - metadata
 * 
 */

 const ImportedDocumentBase = require('../modules/import/imported_document_base');
 const RuleBase = require('../modules/test_rule/RuleBase');
 const TransitionBase = require('../modules/transition_base/transition_base');
 const RegionBase = require('../modules/layout/region_base');
 const DescriptorBase = require('../modules/descriptor/descriptor_base');
 const ConnectorBase = require('../modules/connector_base/connector_base');
 const Meta = require('../modules/meta_information/meta');
 const MetaData = require('../modules/meta_information/metadata');

 const Head = {
    importedDocumentBase : ImportedDocumentBase,
    ruleBase : RuleBase,
    transitionBase : TransitionBase,
    regionBase : RegionBase,
    descriptorBase : DescriptorBase,
    connectorBase : ConnectorBase,
    meta: Meta,
    metaData : MetaData       
 };

 module.exports = Head;