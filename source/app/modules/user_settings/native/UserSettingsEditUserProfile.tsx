// app/modules/user_settings/native/UserSettingsEditUserProfile.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/native/UserSettingsEditUserProfile.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: UserSettingsEditUserProfile
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            michal = 3;
            zuuluu = option[michal];
            report = undefined;
            tangon = golfie.bind(report)(zuuluu);
            zuuluu = 4;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.USER_SETTINGS_USER_PROFILE;
            zuuluu = tangon.bind(report)(zuuluu);
            golfie = zuuluu.analyticsLocations;
            tangon = _closure1_slot0;
            zuuluu = 5;
            zuuluu = option[zuuluu];
            verify = tangon.bind(report)(zuuluu);
            option = verify.useStateFromStores;
            zuuluu = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot4;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            option = option.bind(verify)(tangon, zuuluu);
            var _closure2_slot0 = option;
            verify = _closure1_slot3;
            tangon = verify.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00004_ip = 78; continue _fun00003 }
 13:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 6;
                    michal = tangon[michal];
                    report = undefined;
                    tangon = zuuluu.bind(report)(michal);
                    oscard = _closure2_slot0;
                    zuuluu = oscard.id;
                    michal = oscard.getAvatarURL;
                    entity = 80;
                    michal = michal.bind(oscard)(report, entity);
                    entity = {};
                    oscard = true;
                    entity['dispatchWait'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 78:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tangon.bind(verify)(entity, zuuluu);
            entity = null;
            zuuluu = entity == option;
            if(zuuluu) { _fun00002_ip = 227; continue _fun00001 }
 145:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot0;
            verify = _closure1_slot2;
            michal = verify[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.AnalyticsLocationProvider;
            michal = {};
            michal['value'] = golfie;
            golfie = _closure1_slot1;
            oscard = 7;
            oscard = verify[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            oscard['currentUser'] = option;
            yankee = argFoo;
            romeon = oscard;
            option = copyDataProperties(romeon, yankee);
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 227:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();