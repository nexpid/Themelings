// app/modules/user_settings/MFAUtils.tsx
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot5 = golfie;
    golfie = tangon.UserFlags;
    var _closure1_slot6 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/MFAUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getSMSBackupDisabledMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.hasAnyStaffLevel;
            michal = michal.bind(entity)();
            if(michal) { _fun00002_ip = 119; continue _fun00001 }
 16:
            tangon = entity.hasFlag;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.PARTNER;
            zuuluu = tangon.bind(entity)(zuuluu);
            if(zuuluu) { _fun00002_ip = 119; continue _fun00001 }
 43:
            zuuluu = entity.email;
            entity = null;
            zuuluu = entity == zuuluu;
            if(!zuuluu) { _fun00002_ip = 117; continue _fun00001 }
 58:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.LfCBZG;
            entity = zuuluu.bind(tangon)(michal);
 117:
            _fun00002_ip = 181; continue _fun00001;
 119:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.Sq6Q1t;
            entity = zuuluu.bind(tangon)(michal);
 181:
            return entity;
        }
    };
    zuuluu['getSMSBackupDisabledMessage'] = tangon;
    michal = function() { // Original name: use2FARemoveDisableReason
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot2;
        michal = new Array(3);
        michal[0] = report;
        report = _closure1_slot3;
        michal[1] = report;
        entity = _closure1_slot4;
        michal[2] = entity;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot4;
                entity = zuuluu.getCurrentUser;
                tangon = entity.bind(zuuluu)();
                entity = null;
                if(!(entity != tangon)) { _fun00004_ip = 35; continue _fun00003 }
 22:
                zuuluu = tangon.hasAnyStaffLevel;
                zuuluu = zuuluu.bind(tangon)();
                if(zuuluu) { _fun00004_ip = 135; continue _fun00003 }
 35:
                tangon = _closure1_slot2;
                zuuluu = tangon.getGuildsArray;
                report = zuuluu.bind(tangon)();
                tangon = report.some;
                zuuluu = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        report = argFoo;
                        zuuluu = report.hasFeature;
                        entity = _closure1_slot5;
                        entity = entity.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                        entity = zuuluu.bind(report)(entity);
                        if(!entity) { _fun00006_ip = 56; continue _fun00005 }
 30:
                        tangon = _closure1_slot3;
                        zuuluu = tangon.can;
                        michal = _closure1_slot7;
                        michal = michal.ADMINISTRATOR;
                        entity = zuuluu.bind(tangon)(michal, report);
 56:
                        return entity;
                    }
                };
                zuuluu = tangon.bind(report)(zuuluu);
                entity = null;
                if(!zuuluu) { _fun00004_ip = 133; continue _fun00003 }
 74:
                golfie = _closure1_slot0;
                option = _closure1_slot1;
                zuuluu = 4;
                tangon = option[zuuluu];
                oscard = undefined;
                tangon = golfie.bind(oscard)(tangon);
                report = tangon.intl;
                tangon = report.string;
                zuuluu = option[zuuluu];
                zuuluu = golfie.bind(oscard)(zuuluu);
                zuuluu = zuuluu.t;
                zuuluu = zuuluu.HC8uSU;
                entity = tangon.bind(report)(zuuluu);
 133:
                _fun00004_ip = 194; continue _fun00003;
 135:
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                michal = 4;
                zuuluu = golfie[michal];
                report = undefined;
                zuuluu = oscard.bind(report)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.string;
                michal = golfie[michal];
                michal = oscard.bind(report)(michal);
                michal = michal.t;
                michal = michal.3iKih4;
                entity = zuuluu.bind(tangon)(michal);
 194:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['use2FARemoveDisableReason'] = michal;
    return entity;
})();