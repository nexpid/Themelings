// app/modules/user_profile/hooks/useUserProfileConnections.tsx
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
    tangon = tangon.useMemo;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = new Array(0);
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/useUserProfileConnections.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useUserProfileConnections
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            michal = golfie[michal];
            tangon = undefined;
            option = oscard.bind(tangon)(michal);
            report = option.usePlatformAllowed;
            michal = {};
            verify = true;
            michal['forUserProfile'] = verify;
            report = report.bind(option)(michal);
            var _closure2_slot1 = report;
            michal = 3;
            michal = golfie[michal];
            option = oscard.bind(tangon)(michal);
            golfie = option.useStateFromStores;
            michal = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getUserProfile;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = golfie.bind(option)(oscard, michal);
            var _closure2_slot2 = michal;
            zuuluu = _closure1_slot3;
            oscard = null;
            golfie = oscard == michal;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 125; continue _fun00001 }
 119:
            oscard = michal.connectedAccounts;
 125:
            michal = new Array(2);
            michal[0] = oscard;
            michal[1] = report;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot2;
                    zuuluu = null;
                    tangon = zuuluu == michal;
                    michal = undefined;
                    if(tangon) { _fun00004_ip = 28; continue _fun00003 }
 18:
                    tangon = _closure2_slot2;
                    michal = tangon.connectedAccounts;
 28:
                    if(!(zuuluu != michal)) { _fun00004_ip = 63; continue _fun00003 }
 32:
                    entity = _closure2_slot2;
                    zuuluu = entity.connectedAccounts;
                    michal = zuuluu.filter;
                    entity = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = argFoo;
                            oscard = entity.type;
                            zuuluu = _closure1_slot1;
                            entity = _closure1_slot2;
                            golfie = 4;
                            entity = entity[golfie];
                            tangon = undefined;
                            zuuluu = zuuluu.bind(tangon)(entity);
                            entity = zuuluu.get;
                            zuuluu = entity.bind(zuuluu)(oscard);
                            entity = null;
                            entity = entity != zuuluu;
                            if(!entity) { _fun00006_ip = 80; continue _fun00005 }
 52:
                            report = _closure1_slot1;
                            michal = _closure1_slot2;
                            michal = michal[golfie];
                            report = report.bind(tangon)(michal);
                            michal = report.isSupported;
                            entity = michal.bind(report)(oscard);
 80:
                            if(!entity) { _fun00006_ip = 95; continue _fun00005 }
 83:
                            michal = _closure2_slot1;
                            entity = michal.bind(tangon)(zuuluu);
 95:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    _fun00004_ip = 70; continue _fun00003;
 63:
                    entity = _closure1_slot5;
 70:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();