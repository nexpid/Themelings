// app/modules/premium/hooks/usePremiumDiscountOffer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: hasUserDiscountExpired
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = null;
            entity = tangon != michal;
            if(!entity) { _fun00002_ip = 22; continue _fun00001 }
 12:
            zuuluu = michal.expires_at;
            entity = tangon != zuuluu;
 22:
            if(!entity) { _fun00002_ip = 69; continue _fun00001 }
 25:
            tangon = global;
            report = tangon.Date;
            zuuluu = report.now;
            zuuluu = zuuluu.bind(report)();
            report = tangon.Date;
            tangon = report.parse;
            michal = michal.expires_at;
            michal = tangon.bind(report)(michal);
            entity = zuuluu > michal;
 69:
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    entity = function(argFoo, argBar) { // Original name: useDiscountOffer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 5;
            michal = option[zuuluu];
            oscard = undefined;
            offset = golfie.bind(oscard)(michal);
            verify = offset.useStateFromStores;
            michal = _closure1_slot5;
            report = new Array(1);
            report[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getUserDiscountOffer;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = verify.bind(offset)(report, michal);
            var _closure2_slot1 = michal;
            offset = _closure1_slot3;
            verify = offset.useState;
            report = _closure1_slot11;
            report = report.bind(oscard)(michal);
            offset = verify.bind(offset)(report);
            verify = _closure1_slot2;
            report = 2;
            offset = verify.bind(oscard)(offset, report);
            report = 0;
            report = offset[report];
            var _closure2_slot2 = report;
            verify = 1;
            verify = offset[verify];
            var _closure2_slot3 = verify;
            zuuluu = option[zuuluu];
            option = golfie.bind(oscard)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isPremium;
                tangon = _closure1_slot4;
                entity = tangon.getCurrentUser;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = golfie.bind(option)(oscard, zuuluu);
            golfie = _closure1_slot3;
            oscard = golfie.useEffect;
            tangon = new Array(2);
            tangon[0] = report;
            tangon[1] = michal;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure2_slot1;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00006_ip = 29; continue _fun00005 }
 15:
                    michal = _closure2_slot1;
                    michal = michal.expires_at;
                    if(!(zuuluu == michal)) { _fun00006_ip = 33; continue _fun00005 }
 29:
                    michal = undefined;
                    return michal;
 33:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 7;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    michal = michal.Timeout;
                    tangon = michal.prototype;
                    tangon = Object.create(tangon, {constructor: {value: michal}});
                    oscard = tangon;
                    michal = new oscard[michal](report);
                    michal = michal instanceof Object ? michal : tangon;
                    var _closure3_slot0 = michal;
                    michal = function() { // Original name: startTimer
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            entity = _closure2_slot1;
                            entity = entity.expires_at;
                            zuuluu = null;
                            entity = zuuluu != entity;
                            tangon = 0;
                            if(!entity) { _fun00008_ip = 72; continue _fun00007 }
 24:
                            entity = global;
                            oscard = entity.Date;
                            report = oscard.parse;
                            michal = _closure2_slot1;
                            michal = michal.expires_at;
                            michal = report.bind(oscard)(michal);
                            report = entity.Date;
                            entity = report.now;
                            entity = entity.bind(report)();
                            tangon = michal - entity;
 72:
                            michal = _closure3_slot0;
                            if(!(zuuluu != michal)) { _fun00008_ip = 107; continue _fun00007 }
 83:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.start;
                            entity = function() {
                                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                    michal = _closure2_slot2;
                                    if(michal) { _fun00010_ip = 44; continue _fun00009 }
 10:
                                    tangon = _closure1_slot11;
                                    michal = _closure2_slot1;
                                    zuuluu = undefined;
                                    michal = tangon.bind(zuuluu)(michal);
                                    if(!michal) { _fun00010_ip = 44; continue _fun00009 }
 31:
                                    michal = _closure2_slot3;
                                    entity = true;
                                    entity = michal.bind(zuuluu)(entity);
                                    _fun00010_ip = 57; continue _fun00009;
 44:
                                    michal = _closure3_slot1;
                                    entity = undefined;
                                    entity = michal.bind(entity)();
 57:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity = michal.bind(zuuluu)(tangon, entity);
 107:
                            entity = undefined;
                            return entity;
                        }
                    };
                    var _closure3_slot1 = michal;
                    michal = michal.bind(zuuluu)();
                    entity = function() {
                        michal = _closure3_slot0;
                        entity = michal.stop;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    return entity;
                }
            };
            entity = oscard.bind(golfie)(entity, tangon);
            entity = null;
            if(report) { _fun00004_ip = 217; continue _fun00003 }
 203:
            if(!zuuluu) { _fun00004_ip = 214; continue _fun00003 }
 206:
            zuuluu = argBar;
            entity = null;
            if(!zuuluu) { _fun00004_ip = 217; continue _fun00003 }
 214:
            entity = michal;
 217:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    verify = golfie[report];
    report = argCor;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID;
    var _closure1_slot6 = option;
    option = report.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
    var _closure1_slot7 = option;
    option = report.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID;
    var _closure1_slot8 = option;
    option = report.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID;
    var _closure1_slot9 = option;
    report = report.SubscriptionPlanInfo;
    var _closure1_slot10 = report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/hooks/usePremiumDiscountOffer.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['hasUserDiscountExpired'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: discountOfferHasTier
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            entity = michal != zuuluu;
            if(!entity) { _fun00012_ip = 98; continue _fun00011 }
 12:
            tangon = global;
            tangon = tangon.Set;
            zuuluu = zuuluu.discount;
            report = michal == zuuluu;
            michal = undefined;
            if(report) { _fun00012_ip = 62; continue _fun00011 }
 35:
            oscard = zuuluu.plan_ids;
            report = oscard.map;
            zuuluu = function(argFoo) {
                michal = _closure1_slot10;
                entity = argFoo;
                entity = michal[entity];
                entity = entity.skuId;
                return entity;
            };
            michal = report.bind(oscard)(zuuluu);
 62:
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            option = zuuluu;
            golfie = michal;
            michal = new option[tangon](golfie, oscard);
            tangon = michal instanceof Object ? michal : zuuluu;
            zuuluu = tangon.has;
            michal = argBar;
            entity = zuuluu.bind(tangon)(michal);
 98:
            return entity;
        }
    };
    zuuluu['discountOfferHasTier'] = tangon;
    michal = function() { // Original name: usePremiumDiscountOffer
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = _closure1_slot12;
            michal = _closure1_slot8;
            zuuluu = undefined;
            report = oscard.bind(zuuluu)(michal);
            michal = _closure1_slot9;
            tangon = oscard.bind(zuuluu)(michal);
            michal = _closure1_slot6;
            michal = oscard.bind(zuuluu)(michal);
            entity = _closure1_slot7;
            entity = oscard.bind(zuuluu)(entity);
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00014_ip = 54; continue _fun00013 }
 51:
            tangon = report;
 54:
            if(!(zuuluu != tangon)) { _fun00014_ip = 61; continue _fun00013 }
 58:
            michal = tangon;
 61:
            if(!(zuuluu != michal)) { _fun00014_ip = 68; continue _fun00013 }
 65:
            entity = michal;
 68:
            return entity;
        }
    };
    zuuluu['usePremiumDiscountOffer'] = michal;
    return entity;
})();