// app/modules/markup/MarkupShopLinkRule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    michal = true;
    tangon['value'] = michal;
    michal = '__esModule';
    michal = option.bind(verify)(zuuluu, michal, tangon);
    tangon = entity.RegExp;
    entity = tangon.prototype;
    michal = Object.create(entity, {constructor: {value: tangon}});
    romeon = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?\\.com|staging\\.discord\\.co)/shop(?:\\?tab=[a-z]+)?#itemSkuId=(\\d+)';
    foxtra = michal;
    entity = new foxtra[tangon](romeon, yankee);
    entity = entity instanceof Object ? entity : michal;
    var _closure1_slot2 = entity;
    michal = {};
    tangon = {};
    entity = 0;
    verify = oscard[entity];
    option = argBaz;
    entity = undefined;
    option = option.bind(entity)(verify);
    option = option.defaultRules;
    option = option.url;
    verify = option.order;
    option = 0.5;
    option = verify - option;
    tangon['order'] = option;
    option = ['h'];
    tangon['requiredFirstCharacters'] = option;
    option = function(argFoo) { // Original name: match
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot2;
            michal = tangon.exec;
            entity = argFoo;
            entity = michal.bind(tangon)(entity);
            michal = null;
            if(!(michal != entity)) { _fun00002_ip = 71; continue _fun00001 }
 27:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 1;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.getCollectiblesShopLinkMentionEnabled;
            zuuluu = 'MarkupShopLinkRule';
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00002_ip = 71; continue _fun00001 }
 69:
            return michal;
 71:
            return entity;
        }
    };
    tangon['match'] = option;
    golfie = function(argFoo) { // Original name: parse
        michal = argFoo;
        entity = 0;
        zuuluu = michal[entity];
        entity = 1;
        michal = michal[entity];
        entity = {};
        tangon = 'shopLink';
        entity['type'] = tangon;
        report = {};
        tangon = 'text';
        report['type'] = tangon;
        report['content'] = michal;
        tangon = new Array(1);
        tangon[0] = report;
        entity['content'] = tangon;
        entity['shopLink'] = zuuluu;
        entity['skuId'] = michal;
        return entity;
    };
    tangon['parse'] = golfie;
    michal['shopLink'] = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/markup/MarkupShopLinkRule.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();