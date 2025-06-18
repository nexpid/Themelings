// app/modules/auth/native/useInitialRegistrationStep.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: isFirstStep
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot6;
            tangon = undefined;
            zuuluu = michal.bind(tangon)();
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            report = 4;
            michal = michal[report];
            michal = oscard.bind(tangon)(michal);
            michal = michal.ORDERED_REGISTRATION_STEPS_BY_VARIANT;
            michal = michal[zuuluu];
            zuuluu = null;
            if(!(zuuluu == michal)) { _fun00002_ip = 72; continue _fun00001 }
 49:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[report];
            entity = zuuluu.bind(tangon)(entity);
            michal = entity.DEFAULT_REGISTRATION_STEPS;
 72:
            entity = 1;
            michal = michal[entity];
            entity = argFoo;
            entity = entity === michal;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.getRegistrationVariant;
    var _closure1_slot6 = golfie;
    tangon = tangon.resetRegistration;
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/native/useInitialRegistrationStep.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useInitialRegistrationStep
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        option = report.bind(entity)(zuuluu);
        golfie = option.useStateFromStores;
        zuuluu = _closure1_slot5;
        report = new Array(1);
        report[0] = zuuluu;
        zuuluu = function() {
            michal = _closure1_slot5;
            entity = michal.getAuthenticationConsentRequired;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu = golfie.bind(option)(report, zuuluu);
        var _closure2_slot1 = zuuluu;
        report = _closure1_slot3;
        golfie = report.useEffect;
        tangon = new Array(2);
        tangon[0] = zuuluu;
        tangon[1] = oscard;
        zuuluu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = _closure1_slot8;
                zuuluu = _closure2_slot0;
                entity = undefined;
                zuuluu = report.bind(entity)(zuuluu);
                if(!zuuluu) { _fun00004_ip = 34; continue _fun00003 }
 24:
                report = _closure2_slot1;
                tangon = null;
                zuuluu = tangon == report;
 34:
                if(!zuuluu) { _fun00004_ip = 67; continue _fun00003 }
 37:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 6;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getLocationMetadata;
                michal = michal.bind(zuuluu)();
 67:
                return entity;
            }
        };
        zuuluu = golfie.bind(report)(zuuluu, tangon);
        tangon = report.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot8;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                if(michal) { _fun00006_ip = 26; continue _fun00005 }
 24:
                return entity;
 26:
                entity = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = _closure1_slot7;
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)();
                        tangon = _closure1_slot4;
                        zuuluu = tangon.isAuthenticated;
                        zuuluu = zuuluu.bind(tangon)();
                        if(zuuluu) { _fun00008_ip = 60; continue _fun00007 }
 30:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 6;
                        michal = tangon[michal];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.loginReset;
                        michal = michal.bind(zuuluu)();
 60:
                        return entity;
                    }
                };
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();