// app/modules/markup/MarkupShopLinkRule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    mike = true;
    tango['value'] = mike;
    mike = '__esModule';
    mike = options.bind(verify)(zulu, mike, tango);
    tango = entity.RegExp;
    entity = tango.prototype;
    mike = Object.create(entity, {constructor: {value: tango}});
    romeo = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop#itemSkuId=(\\d+)?';
    foxtrot = mike;
    entity = new foxtrot[tango](romeo, yankee);
    entity = entity instanceof Object ? entity : mike;
    var _closure1_slot2 = entity;
    mike = {};
    tango = {};
    entity = 0;
    verify = oscar[entity];
    options = argBaz;
    entity = undefined;
    options = options.bind(entity)(verify);
    options = options.defaultRules;
    options = options.url;
    verify = options.order;
    options = 0.5;
    options = verify - options;
    tango['order'] = options;
    options = ['h'];
    tango['requiredFirstCharacters'] = options;
    options = function(argFoo) { // Original name: match
        _fun61851: for(var _fun61851_ip = 0; ; ) switch(_fun61851_ip) {
 0:
            tango = _closure1_slot2;
            mike = tango.exec;
            entity = argFoo;
            entity = mike.bind(tango)(entity);
            mike = null;
            if(!(mike != entity)) { _fun61851_ip = 71; continue _fun61851 }
 27:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 1;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.getCollectiblesShopLinkMentionEnabled;
            zulu = 'MarkupShopLinkRule';
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun61851_ip = 71; continue _fun61851 }
 69:
            return mike;
 71:
            return entity;
        }
    };
    tango['match'] = options;
    golf = function(argFoo) { // Original name: parse
        mike = argFoo;
        entity = 0;
        zulu = mike[entity];
        entity = 1;
        mike = mike[entity];
        entity = {};
        tango = 'shopLink';
        entity['type'] = tango;
        report = {};
        tango = 'text';
        report['type'] = tango;
        report['content'] = mike;
        tango = new Array(1);
        tango[0] = report;
        entity['content'] = tango;
        entity['shopLink'] = zulu;
        entity['skuId'] = mike;
        return entity;
    };
    tango['parse'] = golf;
    mike['shopLink'] = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/markup/MarkupShopLinkRule.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();