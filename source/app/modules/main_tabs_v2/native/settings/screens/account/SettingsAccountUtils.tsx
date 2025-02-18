// app/modules/main_tabs_v2/native/settings/screens/account/SettingsAccountUtils.tsx
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
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/screens/account/SettingsAccountUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useIs2FAEnabled
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot3;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                zuuluu = entity.bind(michal)();
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00002_ip = 33; continue _fun00001 }
 27:
                michal = zuuluu.mfaEnabled;
 33:
                entity = entity != michal;
                if(!entity) { _fun00002_ip = 43; continue _fun00001 }
 40:
                entity = michal;
 43:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIs2FAEnabled'] = tangon;
    tangon = function() { // Original name: useIsTOTPEnabled
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot2;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            michal = _closure1_slot2;
            entity = michal.hasTOTPEnabled;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsTOTPEnabled'] = tangon;
    michal = function() { // Original name: useIsUserVerified
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot3;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                zuuluu = entity.bind(michal)();
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00004_ip = 33; continue _fun00003 }
 27:
                michal = zuuluu.verified;
 33:
                entity = entity != michal;
                if(!entity) { _fun00004_ip = 43; continue _fun00003 }
 40:
                entity = michal;
 43:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsUserVerified'] = michal;
    return entity;
})();