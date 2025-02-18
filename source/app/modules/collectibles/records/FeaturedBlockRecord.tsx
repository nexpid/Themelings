// app/modules/collectibles/records/FeaturedBlockRecord.tsx
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
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FeaturedCategorySubblockRecord;
    var _closure1_slot4 = tangon;
    michal = function() {
        report = function(argFoo) { // Original name: FeaturedBlockRecord
            zuuluu = this;
            report = _closure1_slot2;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            michal = michal.ShopBlockType;
            michal = michal.FEATURED;
            zuuluu['type'] = michal;
            michal = argFoo;
            report = michal.subblocks;
            tangon = report.map;
            michal = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    tangon = argFoo;
                    report = tangon.type;
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    entity = 4;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    entity = oscard.bind(entity)(zuuluu);
                    entity = entity.FeaturedSubblockType;
                    zuuluu = entity.CATEGORY;
                    entity = tangon;
                    if(!(report === zuuluu)) { _fun00002_ip = 67; continue _fun00001 }
 52:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.fromServer;
                    entity = michal.bind(zuuluu)(tangon);
 67:
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
            zuuluu['subblocks'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        entity = {};
        zuuluu = 'fromServer';
        entity['key'] = zuuluu;
        michal = function(argFoo) { // Original name: value
            zuuluu = _closure2_slot0;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = argFoo;
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/records/FeaturedBlockRecord.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['FeaturedBlockRecord'] = michal;
    return entity;
})();