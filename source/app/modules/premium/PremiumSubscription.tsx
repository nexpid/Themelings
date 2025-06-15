// app/modules/premium/PremiumSubscription.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    report = function(argFoo) { // Original name: getNonePlanIdForIntervalType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = arguments[1];
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00002_ip = 21; continue _fun00001 }
 18:
            michal = 1;
 21:
            var _closure2_slot1 = michal;
            michal = global;
            report = michal.Object;
            tangon = report.keys;
            zuuluu = _closure1_slot1;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.find;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot1;
                    entity = argFoo;
                    michal = michal[entity];
                    entity = null;
                    entity = entity != michal;
                    if(!entity) { _fun00004_ip = 43; continue _fun00003 }
 23:
                    tangon = michal.skuId;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu.NONE;
                    entity = tangon === zuuluu;
 43:
                    if(!entity) { _fun00004_ip = 63; continue _fun00003 }
 46:
                    tangon = michal.interval;
                    zuuluu = _closure2_slot0;
                    entity = tangon === zuuluu;
 63:
                    if(!entity) { _fun00004_ip = 83; continue _fun00003 }
 66:
                    zuuluu = michal.intervalCount;
                    michal = _closure2_slot1;
                    entity = zuuluu === michal;
 83:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00002_ip = 82; continue _fun00001 }
 72:
            michal = _closure1_slot0;
            entity = michal.NONE_MONTH;
 82:
            return entity;
        }
    };
    var _closure1_slot3 = report;
    tangon = function(argFoo) { // Original name: getBaseSubscriptionItemForSubscriptionItems
        zuuluu = argFoo;
        michal = zuuluu.find;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure1_slot1;
                entity = argFoo;
                entity = entity.planId;
                michal = michal[entity];
                zuuluu = null;
                entity = zuuluu != michal;
                if(!entity) { _fun00006_ip = 39; continue _fun00005 }
 29:
                michal = michal.premiumType;
                entity = zuuluu != michal;
 39:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot4 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.SubscriptionPlans;
    var _closure1_slot0 = verify;
    verify = oscard.SubscriptionPlanInfo;
    var _closure1_slot1 = verify;
    oscard = oscard.PremiumSubscriptionSKUs;
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/premium/PremiumSubscription.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['getNonePlanIdForIntervalType'] = report;
    report = function(argFoo) { // Original name: getNonePlanIdForSubscription
        zuuluu = _closure1_slot1;
        entity = argFoo;
        tangon = entity.items;
        entity = 0;
        entity = tangon[entity];
        entity = entity.planId;
        entity = zuuluu[entity];
        tangon = _closure1_slot3;
        zuuluu = entity.interval;
        michal = entity.intervalCount;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['getNonePlanIdForSubscription'] = report;
    zuuluu['getBaseSubscriptionItemForSubscriptionItems'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: getBasePlanIdForSubscriptionItems
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            tangon = argBar;
            zuuluu = argBaz;
            report = _closure1_slot4;
            michal = undefined;
            report = report.bind(michal)(golfie);
            oscard = null;
            if(!(oscard != report)) { _fun00008_ip = 37; continue _fun00007 }
 29:
            report = report.planId;
            return report;
 37:
            oscard = golfie.length;
            report = 0;
            if(!(oscard > report)) { _fun00008_ip = 78; continue _fun00007 }
 48:
            oscard = _closure1_slot1;
            report = golfie[report];
            report = report.planId;
            report = oscard[report];
            tangon = report.interval;
            zuuluu = report.intervalCount;
 78:
            entity = _closure1_slot3;
            entity = entity.bind(michal)(tangon, zuuluu);
            return entity;
        }
    };
    zuuluu['getBasePlanIdForSubscriptionItems'] = michal;
    return entity;
})();