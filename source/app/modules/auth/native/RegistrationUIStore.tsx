// app/modules/auth/native/RegistrationUIStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
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
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    report = 2;
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
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot2;
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
        tangon = _closure1_slot2;
        zuuluu = tangon.getState;
        zuuluu = zuuluu.bind(tangon)();
        zuuluu = zuuluu.registrationOptions;
        var _closure2_slot1 = zuuluu;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot2;
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
        michal = _closure1_slot1;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot2;
            michal = zuuluu.setState;
            entity = {};
            tangon = {};
            entity['errors'] = tangon;
            tangon = {};
            entity['registrationOptions'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetRegistration'] = tangon;
    michal = function() { // Original name: doesRegistrationHaveIdentityType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot2;
            entity = michal.getState;
            entity = entity.bind(michal)();
            michal = entity.registrationOptions;
            entity = michal.email;
            zuuluu = null;
            entity = zuuluu != entity;
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
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