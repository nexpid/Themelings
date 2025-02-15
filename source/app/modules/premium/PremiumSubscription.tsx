// app/modules/premium/PremiumSubscription.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    report = function(argFoo) { // Original name: getNonePlanIdForIntervalType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = arguments[1];
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            zulu = undefined;
            if(!(mike === zulu)) { _fun00002_ip = 21; continue _fun00001 }
 18:
            mike = 1;
 21:
            var _closure2_slot1 = mike;
            mike = global;
            report = mike.Object;
            tango = report.keys;
            zulu = _closure1_slot1;
            tango = tango.bind(report)(zulu);
            zulu = tango.find;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure1_slot1;
                    entity = argFoo;
                    mike = mike[entity];
                    entity = null;
                    entity = entity != mike;
                    if(!entity) { _fun00004_ip = 43; continue _fun00003 }
 23:
                    tango = mike.skuId;
                    zulu = _closure1_slot2;
                    zulu = zulu.NONE;
                    entity = tango === zulu;
 43:
                    if(!entity) { _fun00004_ip = 63; continue _fun00003 }
 46:
                    tango = mike.interval;
                    zulu = _closure2_slot0;
                    entity = tango === zulu;
 63:
                    if(!entity) { _fun00004_ip = 83; continue _fun00003 }
 66:
                    zulu = mike.intervalCount;
                    mike = _closure2_slot1;
                    entity = zulu === mike;
 83:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity);
            zulu = null;
            if(!(zulu == entity)) { _fun00002_ip = 81; continue _fun00001 }
 71:
            mike = _closure1_slot0;
            entity = mike.NONE_MONTH;
 81:
            return entity;
        }
    };
    var _closure1_slot3 = report;
    tango = function(argFoo) { // Original name: getBaseSubscriptionItemForSubscriptionItems
        zulu = argFoo;
        mike = zulu.find;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = _closure1_slot1;
                entity = argFoo;
                entity = entity.planId;
                mike = mike[entity];
                zulu = null;
                entity = zulu != mike;
                if(!entity) { _fun00006_ip = 39; continue _fun00005 }
 29:
                mike = mike.premiumType;
                entity = zulu != mike;
 39:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot4 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    verify = oscar.SubscriptionPlans;
    var _closure1_slot0 = verify;
    verify = oscar.SubscriptionPlanInfo;
    var _closure1_slot1 = verify;
    oscar = oscar.PremiumSubscriptionSKUs;
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/premium/PremiumSubscription.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['getNonePlanIdForIntervalType'] = report;
    report = function(argFoo) { // Original name: getNonePlanIdForSubscription
        zulu = _closure1_slot1;
        entity = argFoo;
        tango = entity.items;
        entity = 0;
        entity = tango[entity];
        entity = entity.planId;
        entity = zulu[entity];
        tango = _closure1_slot3;
        zulu = entity.interval;
        mike = entity.intervalCount;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    zulu['getNonePlanIdForSubscription'] = report;
    zulu['getBaseSubscriptionItemForSubscriptionItems'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: getBasePlanIdForSubscriptionItems
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golf = argFoo;
            tango = argBar;
            zulu = argBaz;
            report = _closure1_slot4;
            mike = undefined;
            report = report.bind(mike)(golf);
            oscar = null;
            if(!(oscar != report)) { _fun00008_ip = 37; continue _fun00007 }
 29:
            report = report.planId;
            return report;
 37:
            oscar = golf.length;
            report = 0;
            if(!(oscar > report)) { _fun00008_ip = 78; continue _fun00007 }
 48:
            oscar = _closure1_slot1;
            report = golf[report];
            report = report.planId;
            report = oscar[report];
            tango = report.interval;
            zulu = report.intervalCount;
 78:
            entity = _closure1_slot3;
            entity = entity.bind(mike)(tango, zulu);
            return entity;
        }
    };
    zulu['getBasePlanIdForSubscriptionItems'] = mike;
    return entity;
})();