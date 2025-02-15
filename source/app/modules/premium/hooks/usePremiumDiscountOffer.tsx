// app/modules/premium/hooks/usePremiumDiscountOffer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: hasUserDiscountExpired
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            tango = null;
            entity = tango != mike;
            if(!entity) { _fun00002_ip = 22; continue _fun00001 }
 12:
            zulu = mike.expires_at;
            entity = tango != zulu;
 22:
            if(!entity) { _fun00002_ip = 69; continue _fun00001 }
 25:
            tango = global;
            report = tango.Date;
            zulu = report.now;
            zulu = zulu.bind(report)();
            report = tango.Date;
            tango = report.parse;
            mike = mike.expires_at;
            mike = tango.bind(report)(mike);
            entity = zulu > mike;
 69:
            return entity;
        }
    };
    var _closure1_slot11 = tango;
    entity = function(argFoo, argBar) { // Original name: useDiscountOffer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 5;
            mike = options[zulu];
            oscar = undefined;
            offset = golf.bind(oscar)(mike);
            verify = offset.useStateFromStores;
            mike = _closure1_slot5;
            report = new Array(1);
            report[0] = mike;
            mike = function() {
                zulu = _closure1_slot5;
                mike = zulu.getUserDiscountOffer;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = verify.bind(offset)(report, mike);
            var _closure2_slot1 = mike;
            offset = _closure1_slot3;
            verify = offset.useState;
            report = _closure1_slot11;
            report = report.bind(oscar)(mike);
            offset = verify.bind(offset)(report);
            verify = _closure1_slot2;
            report = 2;
            offset = verify.bind(oscar)(offset, report);
            report = 0;
            report = offset[report];
            var _closure2_slot2 = report;
            verify = 1;
            verify = offset[verify];
            var _closure2_slot3 = verify;
            zulu = options[zulu];
            options = golf.bind(oscar)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot4;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 6;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.isPremium;
                tango = _closure1_slot4;
                entity = tango.getCurrentUser;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = golf.bind(options)(oscar, zulu);
            golf = _closure1_slot3;
            oscar = golf.useEffect;
            tango = new Array(2);
            tango[0] = report;
            tango[1] = mike;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = _closure2_slot1;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00006_ip = 29; continue _fun00005 }
 15:
                    mike = _closure2_slot1;
                    mike = mike.expires_at;
                    if(!(zulu == mike)) { _fun00006_ip = 33; continue _fun00005 }
 29:
                    mike = undefined;
                    return mike;
 33:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 7;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    mike = mike.Timeout;
                    tango = mike.prototype;
                    tango = Object.create(tango, {constructor: {value: mike}});
                    oscar = tango;
                    mike = new oscar[mike](report);
                    mike = mike instanceof Object ? mike : tango;
                    var _closure3_slot0 = mike;
                    mike = function() { // Original name: startTimer
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            entity = _closure2_slot1;
                            entity = entity.expires_at;
                            zulu = null;
                            entity = zulu != entity;
                            tango = 0;
                            if(!entity) { _fun00008_ip = 72; continue _fun00007 }
 24:
                            entity = global;
                            oscar = entity.Date;
                            report = oscar.parse;
                            mike = _closure2_slot1;
                            mike = mike.expires_at;
                            mike = report.bind(oscar)(mike);
                            report = entity.Date;
                            entity = report.now;
                            entity = entity.bind(report)();
                            tango = mike - entity;
 72:
                            mike = _closure3_slot0;
                            if(!(zulu != mike)) { _fun00008_ip = 107; continue _fun00007 }
 83:
                            zulu = _closure3_slot0;
                            mike = zulu.start;
                            entity = function() {
                                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                    mike = _closure2_slot2;
                                    if(mike) { _fun00010_ip = 44; continue _fun00009 }
 10:
                                    tango = _closure1_slot11;
                                    mike = _closure2_slot1;
                                    zulu = undefined;
                                    mike = tango.bind(zulu)(mike);
                                    if(!mike) { _fun00010_ip = 44; continue _fun00009 }
 31:
                                    mike = _closure2_slot3;
                                    entity = true;
                                    entity = mike.bind(zulu)(entity);
                                    _fun00010_ip = 57; continue _fun00009;
 44:
                                    mike = _closure3_slot1;
                                    entity = undefined;
                                    entity = mike.bind(entity)();
 57:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity = mike.bind(zulu)(tango, entity);
 107:
                            entity = undefined;
                            return entity;
                        }
                    };
                    var _closure3_slot1 = mike;
                    mike = mike.bind(zulu)();
                    entity = function() {
                        mike = _closure3_slot0;
                        entity = mike.stop;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    return entity;
                }
            };
            entity = oscar.bind(golf)(entity, tango);
            entity = null;
            if(report) { _fun00004_ip = 217; continue _fun00003 }
 203:
            if(!zulu) { _fun00004_ip = 214; continue _fun00003 }
 206:
            zulu = argBar;
            entity = null;
            if(!zulu) { _fun00004_ip = 217; continue _fun00003 }
 214:
            entity = mike;
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
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    verify = golf[report];
    report = argCorge;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID;
    var _closure1_slot6 = options;
    options = report.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
    var _closure1_slot7 = options;
    options = report.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID;
    var _closure1_slot8 = options;
    options = report.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID;
    var _closure1_slot9 = options;
    report = report.SubscriptionPlanInfo;
    var _closure1_slot10 = report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/premium/hooks/usePremiumDiscountOffer.tsx';
    report = oscar.bind(golf)(report);
    zulu['hasUserDiscountExpired'] = tango;
    tango = function(argFoo, argBar) { // Original name: discountOfferHasTier
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = argFoo;
            mike = null;
            entity = mike != zulu;
            if(!entity) { _fun00012_ip = 98; continue _fun00011 }
 12:
            tango = global;
            tango = tango.Set;
            zulu = zulu.discount;
            report = mike == zulu;
            mike = undefined;
            if(report) { _fun00012_ip = 62; continue _fun00011 }
 35:
            oscar = zulu.plan_ids;
            report = oscar.map;
            zulu = function(argFoo) {
                mike = _closure1_slot10;
                entity = argFoo;
                entity = mike[entity];
                entity = entity.skuId;
                return entity;
            };
            mike = report.bind(oscar)(zulu);
 62:
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            options = zulu;
            golf = mike;
            mike = new options[tango](golf, oscar);
            tango = mike instanceof Object ? mike : zulu;
            zulu = tango.has;
            mike = argBar;
            entity = zulu.bind(tango)(mike);
 98:
            return entity;
        }
    };
    zulu['discountOfferHasTier'] = tango;
    mike = function() { // Original name: usePremiumDiscountOffer
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscar = _closure1_slot12;
            mike = _closure1_slot8;
            zulu = undefined;
            report = oscar.bind(zulu)(mike);
            mike = _closure1_slot9;
            tango = oscar.bind(zulu)(mike);
            mike = _closure1_slot6;
            mike = oscar.bind(zulu)(mike);
            entity = _closure1_slot7;
            entity = oscar.bind(zulu)(entity);
            zulu = null;
            if(!(zulu != report)) { _fun00014_ip = 54; continue _fun00013 }
 51:
            tango = report;
 54:
            if(!(zulu != tango)) { _fun00014_ip = 61; continue _fun00013 }
 58:
            mike = tango;
 61:
            if(!(zulu != mike)) { _fun00014_ip = 68; continue _fun00013 }
 65:
            entity = mike;
 68:
            return entity;
        }
    };
    zulu['usePremiumDiscountOffer'] = mike;
    return entity;
})();