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
    michal = function() { // Original name: usePasswordRegistrationStep
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
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
            option = zuuluu != oscard;
            zuuluu = '';
            if(!option) { _fun00002_ip = 54; continue _fun00001 }
 51:
            zuuluu = oscard;
 54:
            report = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot3;
            zuuluu = 2;
            tangon = tangon.bind(golfie)(report, zuuluu);
            zuuluu = 0;
            report = tangon[zuuluu];
            var _closure2_slot0 = report;
            zuuluu = 1;
            tangon = tangon[zuuluu];
            oscard = _closure1_slot5;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.errors;
                return entity;
            };
            verify = oscard.bind(golfie)(zuuluu);
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 3;
            zuuluu = option[zuuluu];
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = 'password';
            verify = oscard.bind(golfie)(zuuluu, verify);
            var _closure2_slot1 = verify;
            oscard = _closure1_slot0;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = oscard.usePasswordScore;
            oscard = zuuluu.bind(oscard)(report);
            zuuluu = oscard.passwordScore;
            option = oscard.passwordValid;
            var _closure2_slot2 = option;
            golfie = _closure1_slot4;
            oscard = golfie.useMemo;
            michal = new Array(3);
            michal[0] = report;
            michal[1] = verify;
            michal[2] = option;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot0;
                    report = null;
                    entity = report == entity;
                    if(entity) { _fun00004_ip = 28; continue _fun00003 }
 16:
                    tangon = _closure2_slot0;
                    michal = '';
                    entity = michal === tangon;
 28:
                    if(entity) { _fun00004_ip = 74; continue _fun00003 }
 31:
                    michal = _closure2_slot0;
                    tangon = michal.length;
                    michal = 8;
                    michal = tangon < michal;
                    if(michal) { _fun00004_ip = 58; continue _fun00003 }
 50:
                    tangon = _closure2_slot1;
                    michal = report != tangon;
 58:
                    if(michal) { _fun00004_ip = 71; continue _fun00003 }
 61:
                    tangon = _closure2_slot2;
                    zuuluu = false;
                    michal = zuuluu === tangon;
 71:
                    entity = michal;
 74:
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