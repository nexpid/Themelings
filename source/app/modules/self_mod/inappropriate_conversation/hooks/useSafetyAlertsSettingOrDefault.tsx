// app/modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getCurrentUser;
            oscard = michal.bind(zuuluu)();
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 2;
            michal = golfie[michal];
            report = undefined;
            option = tangon.bind(report)(michal);
            zuuluu = option.useStateFromStores;
            entity = _closure1_slot2;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure1_slot2;
                    entity = entity.settings;
                    zuuluu = entity.privacy;
                    entity = null;
                    tangon = entity == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00004_ip = 50; continue _fun00003 }
 30:
                    zuuluu = zuuluu.inappropriateConversationWarnings;
                    tangon = entity == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00004_ip = 50; continue _fun00003 }
 45:
                    michal = zuuluu.value;
 50:
                    entity = entity == michal;
                    if(entity) { _fun00004_ip = 60; continue _fun00003 }
 57:
                    entity = michal;
 60:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(option)(michal, entity);
            entity = 3;
            entity = golfie[entity];
            michal = tangon.bind(report)(entity);
            entity = michal.useUserIsTeen;
            michal = entity.bind(michal)();
            entity = 4;
            entity = golfie[entity];
            golfie = tangon.bind(report)(entity);
            tangon = golfie.useIsEligibleForInappropriateConversationDefaultOn;
            entity = {};
            option = 'useSafetyAlertsSettingOrDefault';
            entity['location'] = option;
            entity = tangon.bind(golfie)(entity);
            tangon = !michal;
            if(tangon) { _fun00002_ip = 134; continue _fun00001 }
 131:
            tangon = !entity;
 134:
            entity = !tangon;
            if(!tangon) { _fun00002_ip = 179; continue _fun00001 }
 140:
            if(michal) { _fun00002_ip = 170; continue _fun00001 }
 143:
            tangon = null;
            tangon = tangon == oscard;
            report = undefined;
            if(tangon) { _fun00002_ip = 164; continue _fun00001 }
 154:
            tangon = oscard.isStaff;
            report = tangon.bind(oscard)();
 164:
            tangon = true;
            michal = tangon === report;
 170:
            if(!michal) { _fun00002_ip = 176; continue _fun00001 }
 173:
            michal = zuuluu;
 176:
            entity = michal;
 179:
            return entity;
        }
    };
    zuuluu['useSafetyAlertsSettingOrDefault'] = michal;
    return entity;
})();