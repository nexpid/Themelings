// app/modules/collectibles/hooks/useBadBundleFilter.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useCallback;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/hooks/useBadBundleFilter.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 3;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            golfie = report.bind(tangon)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot4;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot4;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = oscard.bind(golfie)(report, zuuluu);
            zuuluu = null;
            report = zuuluu != golfie;
            if(!report) { _fun00002_ip = 97; continue _fun00001 }
 66:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = oscard.canUseCollectibles;
            report = zuuluu.bind(oscard)(golfie);
 97:
            var _closure2_slot0 = report;
            zuuluu = _closure1_slot3;
            michal = new Array(1);
            michal[0] = report;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    michal = null;
                    entity = tangon;
                    if(!(michal != tangon)) { _fun00004_ip = 45; continue _fun00003 }
 12:
                    zuuluu = tangon.length;
                    michal = 0;
                    entity = tangon;
                    if(!(michal !== zuuluu)) { _fun00004_ip = 45; continue _fun00003 }
 26:
                    zuuluu = tangon.filter;
                    michal = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            tangon = argFoo;
                            option = _closure1_slot0;
                            report = _closure1_slot2;
                            michal = 5;
                            michal = report[michal];
                            oscard = undefined;
                            verify = option.bind(oscard)(michal);
                            golfie = verify.getProductPurchaseState;
                            michal = _closure1_slot5;
                            michal = golfie.bind(verify)(michal, tangon);
                            michal = michal.isPurchased;
                            golfie = 6;
                            report = report[golfie];
                            option = option.bind(oscard)(report);
                            report = option.isBundleProduct;
                            report = report.bind(option)(tangon);
                            if(!report) { _fun00006_ip = 255; continue _fun00005 }
 81:
                            option = _closure1_slot0;
                            report = _closure1_slot2;
                            report = report[golfie];
                            option = option.bind(oscard)(report);
                            report = option.isFreeCollectiblesProduct;
                            report = report.bind(option)(tangon);
                            if(report) { _fun00006_ip = 255; continue _fun00005 }
 115:
                            if(michal) { _fun00006_ip = 255; continue _fun00005 }
 121:
                            michal = _closure1_slot0;
                            entity = _closure1_slot2;
                            report = entity[golfie];
                            verify = michal.bind(oscard)(report);
                            option = verify.getDefaultPriceSetAssignmentPurchaseType;
                            report = _closure2_slot0;
                            report = option.bind(verify)(report);
                            var _closure4_slot0 = report;
                            entity = entity[golfie];
                            michal = michal.bind(oscard)(entity);
                            entity = michal.extractPriceByPurchaseTypes;
                            entity = entity.bind(michal)(tangon, report);
                            report = null;
                            if(!(report != entity)) { _fun00006_ip = 251; continue _fun00005 }
 187:
                            michal = entity.amount;
                            oscard = 0;
                            if(!(oscard !== michal)) { _fun00006_ip = 251; continue _fun00005 }
 199:
                            michal = tangon.bundledProducts;
                            report = report != michal;
                            michal = 0;
                            if(!report) { _fun00006_ip = 239; continue _fun00005 }
 214:
                            report = tangon.bundledProducts;
                            tangon = report.reduce;
                            zuuluu = function(argFoo, argBar) {
                                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                    zuuluu = _closure1_slot0;
                                    michal = _closure1_slot2;
                                    entity = 6;
                                    michal = michal[entity];
                                    entity = undefined;
                                    report = zuuluu.bind(entity)(michal);
                                    tangon = report.extractPriceByPurchaseTypes;
                                    zuuluu = _closure4_slot0;
                                    michal = argBar;
                                    zuuluu = tangon.bind(report)(michal, zuuluu);
                                    michal = null;
                                    tangon = michal == zuuluu;
                                    if(tangon) { _fun00008_ip = 62; continue _fun00007 }
 56:
                                    entity = zuuluu.amount;
 62:
                                    zuuluu = michal != entity;
                                    michal = 0;
                                    if(!zuuluu) { _fun00008_ip = 74; continue _fun00007 }
 71:
                                    michal = entity;
 74:
                                    entity = argFoo;
                                    entity = entity + michal;
                                    return entity;
                                }
                            };
                            michal = tangon.bind(report)(zuuluu, oscard);
 239:
                            entity = entity.amount;
                            entity = entity < michal;
                            return entity;
 251:
                            entity = true;
                            return entity;
 255:
                            entity = true;
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(michal);
 45:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useBadBundleFilter'] = michal;
    return entity;
})();