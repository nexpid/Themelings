// app/modules/verification/ChangeEmailStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    tangon = function(argFoo, argBar) { // Original name: setChangeEmailError
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                michal = {};
                zuuluu = argFoo;
                report = zuuluu.errors;
                oscard = michal;
                zuuluu = copyDataProperties(oscard, report);
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot1;
                michal[tangon] = zuuluu;
                entity['errors'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot4 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    oscard = {};
    entity = 'email';
    oscard['EMAIL'] = entity;
    entity = 'email_token';
    oscard['EMAIL_TOKEN'] = entity;
    entity = 'password';
    oscard['PASSWORD'] = entity;
    entity = {'errors': null, 'emailToken': null};
    var _closure1_slot2 = entity;
    entity = 0;
    report = verify[entity];
    entity = undefined;
    offset = option.bind(entity)(report);
    golfie = offset.create;
    report = function() {
        entity = _closure1_slot2;
        return entity;
    };
    report = golfie.bind(offset)(report);
    var _closure1_slot3 = report;
    golfie = 2;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/verification/ChangeEmailStore.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['ChangeEmailFields'] = oscard;
    zuuluu['useChangeEmailStore'] = report;
    zuuluu['setChangeEmailError'] = tangon;
    tangon = function(argFoo) { // Original name: useChangeEmailError
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot3;
        zuuluu = undefined;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.errors;
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00002_ip = 31; continue _fun00001 }
 20:
                michal = _closure2_slot0;
                entity = zuuluu[michal];
 31:
                return entity;
            }
        };
        zuuluu = tangon.bind(zuuluu)(entity);
        entity = new Array(2);
        entity[0] = zuuluu;
        michal = function(argFoo) {
            tangon = _closure1_slot4;
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = argFoo;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity[1] = michal;
        return entity;
    };
    zuuluu['useChangeEmailError'] = tangon;
    tangon = function(argFoo) { // Original name: setEmailToken
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.setState;
            entity = {};
            tangon = _closure2_slot0;
            entity['emailToken'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setEmailToken'] = tangon;
    michal = function() { // Original name: resetChangeEmailStore
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            tangon = _closure1_slot3;
            zuuluu = tangon.setState;
            michal = _closure1_slot2;
            entity = true;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetChangeEmailStore'] = michal;
    return entity;
})();