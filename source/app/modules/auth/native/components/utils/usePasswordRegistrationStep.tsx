// app/modules/auth/native/components/utils/usePasswordRegistrationStep.tsx
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useRegistrationUIStore;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/native/components/utils/usePasswordRegistrationStep.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: usePasswordRegistrationStep
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            option = argBar;
            var _closure2_slot0 = verify;
            var _closure2_slot1 = option;
            tangon = _closure1_slot5;
            golfie = undefined;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.registrationOptions;
                return entity;
            };
            zuuluu = tangon.bind(golfie)(zuuluu);
            report = _closure1_slot4;
            tangon = report.useState;
            oscard = zuuluu.password;
            zuuluu = null;
            offset = zuuluu != oscard;
            zuuluu = '';
            if(!offset) { _fun00002_ip = 68; continue _fun00001 }
 65:
            zuuluu = oscard;
 68:
            report = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot3;
            zuuluu = 2;
            tangon = tangon.bind(golfie)(report, zuuluu);
            zuuluu = 0;
            report = tangon[zuuluu];
            var _closure2_slot2 = report;
            zuuluu = 1;
            tangon = tangon[zuuluu];
            oscard = _closure1_slot5;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.errors;
                return entity;
            };
            yankee = oscard.bind(golfie)(zuuluu);
            oscard = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 3;
            zuuluu = offset[zuuluu];
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = 'password';
            yankee = oscard.bind(golfie)(zuuluu, yankee);
            var _closure2_slot3 = yankee;
            oscard = _closure1_slot0;
            zuuluu = 4;
            zuuluu = offset[zuuluu];
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = oscard.usePasswordScore;
            oscard = zuuluu.bind(oscard)(report, option);
            zuuluu = oscard.passwordScore;
            offset = oscard.passwordValid;
            var _closure2_slot4 = offset;
            golfie = _closure1_slot4;
            oscard = golfie.useMemo;
            michal = new Array(5);
            michal[0] = report;
            michal[1] = yankee;
            michal[2] = offset;
            michal[3] = verify;
            michal[4] = option;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot2;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00004_ip = 85; continue _fun00003 }
 13:
                    tangon = _closure2_slot2;
                    michal = '';
                    if(!(michal !== tangon)) { _fun00004_ip = 85; continue _fun00003 }
 25:
                    michal = _closure2_slot0;
                    if(!michal) { _fun00004_ip = 73; continue _fun00003 }
 32:
                    michal = _closure2_slot2;
                    tangon = michal.length;
                    michal = 8;
                    if(!(!(tangon < michal))) { _fun00004_ip = 81; continue _fun00003 }
 48:
                    michal = _closure2_slot3;
                    if(!(zuuluu == michal)) { _fun00004_ip = 81; continue _fun00003 }
 56:
                    michal = _closure2_slot1;
                    if(!michal) { _fun00004_ip = 73; continue _fun00003 }
 63:
                    michal = _closure2_slot4;
                    entity = false;
                    if(!(entity !== michal)) { _fun00004_ip = 77; continue _fun00003 }
 73:
                    entity = false;
                    return entity;
 77:
                    entity = true;
                    return entity;
 81:
                    entity = true;
                    return entity;
 85:
                    entity = true;
                    return entity;
                }
            };
            michal = oscard.bind(golfie)(entity, michal);
            entity = {};
            entity['password'] = report;
            entity['setPassword'] = tangon;
            entity['passwordScore'] = zuuluu;
            entity['preventSubmitPassword'] = michal;
            return entity;
        }
    };
    zuuluu['usePasswordRegistrationStep'] = michal;
    return entity;
})();