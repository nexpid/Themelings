// app/modules/collectibles/records/CollectiblesBundledProductRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        report = function(argFoo) { // Original name: CollectiblesBundledProductRecord
            michal = argFoo;
            zuuluu = this;
            report = _closure1_slot2;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = michal.prices;
            zuuluu['prices'] = tangon;
            tangon = michal.type;
            zuuluu['type'] = tangon;
            tangon = michal.premiumType;
            zuuluu['premiumType'] = tangon;
            tangon = michal.name;
            zuuluu['name'] = tangon;
            tangon = michal.skuId;
            zuuluu['skuId'] = tangon;
            michal = michal.summary;
            zuuluu['summary'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        entity = {};
        zuuluu = 'fromServer';
        entity['key'] = zuuluu;
        michal = function(argFoo) { // Original name: value
            entity = argFoo;
            offset = entity.prices;
            golfie = entity.type;
            oscard = entity.premium_type;
            report = entity.name;
            tangon = entity.sku_id;
            michal = entity.summary;
            zuuluu = _closure2_slot0;
            entity = {};
            yankee = _closure1_slot0;
            verify = _closure1_slot1;
            option = 2;
            verify = verify[option];
            option = undefined;
            verify = yankee.bind(option)(verify);
            option = verify.getPricesFromServer;
            option = option.bind(verify)(offset);
            entity['prices'] = option;
            entity['type'] = golfie;
            entity['premiumType'] = oscard;
            entity['name'] = report;
            entity['skuId'] = tangon;
            entity['summary'] = michal;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            foxtra = michal;
            romeon = entity;
            entity = new foxtra[zuuluu](romeon, yankee);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = michal;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        michal = undefined;
        entity = null;
        entity = tangon.bind(michal)(report, entity, zuuluu);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/records/CollectiblesBundledProductRecord.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();