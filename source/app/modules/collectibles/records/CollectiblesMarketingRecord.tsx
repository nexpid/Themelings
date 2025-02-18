// app/modules/collectibles/records/CollectiblesMarketingRecord.tsx
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
    tangon = tangon.CollectiblesMarketingBadgeRecord;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CollectiblesMarketingBannerRecord;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    michal = function() {
        report = function(argFoo) { // Original name: CollectiblesMarketingsRecord
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = argFoo;
            zuuluu['marketingsBySurfaces'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        entity = {};
        zuuluu = 'fromServer';
        entity['key'] = zuuluu;
        michal = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                option = argFoo;
                zuuluu = _closure2_slot0;
                entity = global;
                tangon = entity.Object;
                michal = tangon.fromEntries;
                oscard = entity.Object;
                report = oscard.entries;
                golfie = null;
                verify = golfie == option;
                entity = undefined;
                if(verify) { _fun00002_ip = 53; continue _fun00001 }
 47:
                entity = option.marketings;
 53:
                if(!(golfie == entity)) { _fun00002_ip = 59; continue _fun00001 }
 57:
                entity = {};
 59:
                oscard = report.bind(oscard)(entity);
                report = oscard.map;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        oscard = argFoo;
                        entity = oscard[Symbol.iterator];
                        oscard = entity().next;
                        report = oscard().value;
                        zuuluu = entity;
                        option = undefined;
                        tangon = zuuluu === option;
                        zuuluu = undefined;
                        if(tangon) { _fun00004_ip = 29; continue _fun00003 }
 26:
                        zuuluu = report;
 29:
                        report = undefined;
                        if(tangon) { _fun00004_ip = 59; continue _fun00003 }
 34:
                        golfie = oscard().value;
                        oscard = entity;
                        oscard = oscard === option;
                        report = undefined;
                        tangon = oscard;
                        if(oscard) { _fun00004_ip = 59; continue _fun00003 }
 53:
                        report = golfie;
                        tangon = oscard;
 59:
                        if(tangon) { _fun00004_ip = 65; continue _fun00003 }
 62:
                        entity.return();
 65:
                        entity = new Array(2);
                        entity[0] = zuuluu;
                        golfie = _closure1_slot0;
                        verify = _closure1_slot1;
                        zuuluu = 5;
                        zuuluu = verify[zuuluu];
                        tangon = golfie.bind(option)(zuuluu);
                        zuuluu = tangon.match;
                        offset = zuuluu.bind(tangon)(report);
                        oscard = offset.with;
                        report = {};
                        zuuluu = 6;
                        tangon = verify[zuuluu];
                        tangon = golfie.bind(option)(tangon);
                        tangon = tangon.CollectiblesMarketingType;
                        tangon = tangon.COACHTIP;
                        report['type'] = tangon;
                        tangon = function(argFoo) {
                            zuuluu = _closure1_slot6;
                            michal = zuuluu.fromServer;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        offset = oscard.bind(offset)(report, tangon);
                        oscard = offset.with;
                        report = {};
                        tangon = verify[zuuluu];
                        tangon = golfie.bind(option)(tangon);
                        tangon = tangon.CollectiblesMarketingType;
                        tangon = tangon.BADGE;
                        report['type'] = tangon;
                        tangon = function(argFoo) {
                            zuuluu = _closure1_slot4;
                            michal = zuuluu.fromServer;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        oscard = oscard.bind(offset)(report, tangon);
                        report = oscard.with;
                        tangon = {};
                        zuuluu = verify[zuuluu];
                        zuuluu = golfie.bind(option)(zuuluu);
                        zuuluu = zuuluu.CollectiblesMarketingType;
                        zuuluu = zuuluu.BANNER;
                        tangon['type'] = zuuluu;
                        zuuluu = function(argFoo) {
                            zuuluu = _closure1_slot5;
                            michal = zuuluu.fromServer;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        tangon = report.bind(oscard)(tangon, zuuluu);
                        zuuluu = tangon.otherwise;
                        michal = function() {
                            entity = undefined;
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        entity[1] = michal;
                        return entity;
                    }
                };
                entity = report.bind(oscard)(entity);
                offset = michal.bind(tangon)(entity);
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                yankee = michal;
                entity = new yankee[zuuluu](offset, verify);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
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
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/records/CollectiblesMarketingRecord.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['CollectiblesMarketingsRecord'] = michal;
    return entity;
})();