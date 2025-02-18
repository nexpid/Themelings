// app/modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: shouldShowTakeoverForWarnings
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot5;
                entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                entity = michal === entity;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.length;
            entity = 0;
            entity = zuuluu > entity;
            if(!entity) { _fun00002_ip = 50; continue _fun00001 }
 34:
            zuuluu = tangon.every;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.dismiss_timestamp;
                entity = null;
                entity = entity == michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 50:
            return entity;
        }
    };
    var _closure1_slot6 = michal;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    option = golfie[report];
    option = verify.bind(entity)(option);
    var _closure1_slot4 = option;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.SafetyWarningTypes;
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: getSafetyAlertsSettingOrDefault
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getCurrentUser;
            oscard = michal.bind(zuuluu)();
            michal = null;
            zuuluu = michal == oscard;
            report = undefined;
            tangon = undefined;
            if(zuuluu) { _fun00004_ip = 39; continue _fun00003 }
 29:
            zuuluu = oscard.isStaff;
            tangon = zuuluu.bind(oscard)();
 39:
            zuuluu = true;
            zuuluu = zuuluu === tangon;
            tangon = _closure1_slot2;
            tangon = tangon.settings;
            oscard = tangon.privacy;
            golfie = michal == oscard;
            tangon = undefined;
            if(golfie) { _fun00004_ip = 90; continue _fun00003 }
 70:
            oscard = oscard.inappropriateConversationWarnings;
            golfie = michal == oscard;
            tangon = undefined;
            if(golfie) { _fun00004_ip = 90; continue _fun00003 }
 85:
            tangon = oscard.value;
 90:
            michal = michal == tangon;
            if(michal) { _fun00004_ip = 100; continue _fun00003 }
 97:
            michal = tangon;
 100:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 3;
            entity = oscard[entity];
            tangon = tangon.bind(report)(entity);
            entity = tangon.getUserIsTeen;
            entity = entity.bind(tangon)();
            if(entity) { _fun00004_ip = 136; continue _fun00003 }
 133:
            entity = zuuluu;
 136:
            if(!entity) { _fun00004_ip = 142; continue _fun00003 }
 139:
            entity = michal;
 142:
            return entity;
        }
    };
    zuuluu['getSafetyAlertsSettingOrDefault'] = report;
    report = function(argFoo) { // Original name: getInappropriateConversationTakeoverForChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = function(argFoo) { // Original name: getTier1WarningsForChannel
                zuuluu = _closure1_slot4;
                michal = zuuluu.getChannelSafetyWarnings;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.type;
                    entity = _closure1_slot5;
                    entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                    entity = michal === entity;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = undefined;
            michal = argFoo;
            tangon = tangon.bind(zuuluu)(michal);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.dismiss_timestamp;
                entity = null;
                entity = entity != michal;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.length;
            zuuluu = 0;
            if(!(!(michal > zuuluu))) { _fun00006_ip = 78; continue _fun00005 }
 43:
            michal = tangon.filter;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.dismiss_timestamp;
                entity = null;
                entity = entity == michal;
                return entity;
            };
            michal = michal.bind(tangon)(entity);
            report = michal.length;
            tangon = 1;
            entity = null;
            if(!(tangon === report)) { _fun00006_ip = 76; continue _fun00005 }
 72:
            entity = michal[zuuluu];
 76:
            return entity;
 78:
            entity = null;
            return entity;
        }
    };
    zuuluu['getInappropriateConversationTakeoverForChannel'] = report;
    tangon = function(argFoo) { // Original name: shouldShowInappropriateConversationTakeoverForChannelRecord
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.safetyWarnings;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00008_ip = 38; continue _fun00007 }
 18:
            tangon = _closure1_slot6;
            zuuluu = michal.safetyWarnings;
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 38:
            return entity;
        }
    };
    zuuluu['shouldShowInappropriateConversationTakeoverForChannelRecord'] = tangon;
    zuuluu['shouldShowTakeoverForWarnings'] = michal;
    return entity;
})();