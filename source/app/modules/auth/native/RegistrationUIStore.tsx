// app/modules/auth/native/RegistrationUIStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    option = oscard.bind(entity)(tangon);
    report = option.create;
    tangon = function() {
        entity = {};
        michal = {};
        entity['errors'] = michal;
        michal = {};
        entity['registrationOptions'] = michal;
        michal = false;
        entity['submitting'] = michal;
        michal = undefined;
        entity['registrationVariant'] = michal;
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot3 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/auth/native/RegistrationUIStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useRegistrationUIStore'] = tangon;
    tangon = function(argFoo) { // Original name: setRegistrationErrors
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
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
            entity['errors'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setRegistrationErrors'] = tangon;
    tangon = function(argFoo) { // Original name: updateRegistrationOptions
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot3;
        zuuluu = tangon.getState;
        zuuluu = zuuluu.bind(tangon)();
        zuuluu = zuuluu.registrationOptions;
        var _closure2_slot1 = zuuluu;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.setState;
            entity = {};
            tangon = {};
            golfie = _closure2_slot1;
            option = tangon;
            oscard = copyDataProperties(option, golfie);
            golfie = _closure2_slot0;
            option = tangon;
            report = copyDataProperties(option, golfie);
            entity['registrationOptions'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateRegistrationOptions'] = tangon;
    tangon = function() { // Original name: resetRegistration
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            tangon = _closure1_slot3;
            zuuluu = tangon.setState;
            michal = {};
            entity = {};
            michal['errors'] = entity;
            entity = {};
            michal['registrationOptions'] = entity;
            entity = false;
            michal['submitting'] = entity;
            entity = undefined;
            michal['registrationVariant'] = entity;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetRegistration'] = tangon;
    tangon = function(argFoo) { // Original name: setSubmitting
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.setState;
            entity = {};
            tangon = {};
            entity['errors'] = tangon;
            tangon = _closure2_slot0;
            entity['submitting'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setSubmitting'] = tangon;
    tangon = function() { // Original name: getRegistrationVariant
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot3;
            entity = zuuluu.getState;
            entity = entity.bind(zuuluu)();
            entity = entity.registrationVariant;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00002_ip = 31; continue _fun00001 }
 29:
            return entity;
 31:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.getCurrentConfig;
            zuuluu = {};
            entity = 'Auth';
            zuuluu['location'] = entity;
            entity = {};
            oscard = true;
            entity['autoTrackExposure'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            entity = entity.variant;
            tangon = _closure1_slot3;
            zuuluu = tangon.setState;
            michal = {};
            michal['registrationVariant'] = entity;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['getRegistrationVariant'] = tangon;
    michal = function() { // Original name: doesRegistrationHaveIdentityType
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot3;
            entity = michal.getState;
            entity = entity.bind(michal)();
            michal = entity.registrationOptions;
            entity = michal.email;
            zuuluu = null;
            entity = zuuluu != entity;
            if(entity) { _fun00004_ip = 48; continue _fun00003 }
 38:
            michal = michal.phone;
            entity = zuuluu != michal;
 48:
            return entity;
        }
    };
    zuuluu['doesRegistrationHaveIdentityType'] = michal;
    return entity;
})();