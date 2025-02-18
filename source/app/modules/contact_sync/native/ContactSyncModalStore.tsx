// app/modules/contact_sync/native/ContactSyncModalStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = function() { // Original name: initialValues
        entity = {'mode': null, 'permissionState': null, 'error': '', 'phone': null, 'phoneToken': null, 'name': null, 'isNameFromContactBook': false, 'allowPhone': true, 'allowEmail': true, 'bulkAddToken': null};
        zuuluu = _closure1_slot6;
        zuuluu = zuuluu.NORMAL;
        entity['mode'] = zuuluu;
        michal = _closure1_slot4;
        michal = michal.NOT_DETERMINED;
        entity['permissionState'] = michal;
        michal = new Array(0);
        entity['suggestions'] = michal;
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    offset = 0;
    tangon = option[offset];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    verify = 1;
    tangon = option[verify];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    oscard = 2;
    tangon = option[oscard];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.ContactPermissions;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.PlatformTypes;
    var _closure1_slot5 = tangon;
    report = {};
    report['NORMAL'] = offset;
    tangon = 'NORMAL';
    report[offset] = tangon;
    report['ONBOARDING'] = verify;
    tangon = 'ONBOARDING';
    report[verify] = tangon;
    report['ONBOARDING_INVITE'] = oscard;
    tangon = 'ONBOARDING_INVITE';
    report[oscard] = tangon;
    var _closure1_slot6 = report;
    tangon = 4;
    tangon = option[tangon];
    verify = golfie.bind(entity)(tangon);
    oscard = verify.create;
    tangon = function() {
        michal = _closure1_slot8;
        entity = undefined;
        entity = michal.bind(entity)();
        return entity;
    };
    tangon = oscard.bind(verify)(tangon);
    var _closure1_slot7 = tangon;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/contact_sync/native/ContactSyncModalStore.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['ContactSyncModes'] = report;
    zuuluu['useContactSyncModalStore'] = tangon;
    tangon = function(argFoo) { // Original name: initialize
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = _closure1_slot2;
            tangon = report.getLocalAccount;
            entity = _closure1_slot5;
            entity = entity.CONTACTS;
            oscard = tangon.bind(report)(entity);
            tangon = null;
            golfie = tangon == oscard;
            entity = undefined;
            report = undefined;
            if(golfie) { _fun00002_ip = 55; continue _fun00001 }
 50:
            report = oscard.name;
 55:
            var _closure2_slot1 = report;
            oscard = _closure1_slot3;
            report = oscard.getCurrentUser;
            report = report.bind(oscard)();
            oscard = tangon == report;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 87; continue _fun00001 }
 81:
            tangon = report.phone;
 87:
            var _closure2_slot2 = tangon;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.setState;
                entity = function() {
                    entity = {};
                    zuuluu = _closure1_slot8;
                    michal = undefined;
                    report = zuuluu.bind(michal)();
                    oscard = entity;
                    michal = copyDataProperties(oscard, report);
                    tangon = _closure2_slot0;
                    zuuluu = 'mode';
                    entity[zuuluu] = tangon;
                    tangon = _closure2_slot2;
                    zuuluu = 'phone';
                    entity[zuuluu] = tangon;
                    zuuluu = _closure2_slot1;
                    michal = 'name';
                    entity[michal] = zuuluu;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['initialize'] = tangon;
    tangon = function(argFoo) { // Original name: setAllowSync
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot0;
                michal = 'allowPhone';
                entity[michal] = zuuluu;
                michal = 'allowEmail';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setAllowSync'] = tangon;
    tangon = function(argFoo) { // Original name: setAllowPhone
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot0;
                michal = 'allowPhone';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setAllowPhone'] = tangon;
    tangon = function(argFoo) { // Original name: setAllowEmail
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot0;
                michal = 'allowEmail';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setAllowEmail'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: setSuggestions
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                report = argFoo;
                oscard = entity;
                michal = copyDataProperties(oscard, report);
                tangon = _closure2_slot0;
                zuuluu = 'suggestions';
                entity[zuuluu] = tangon;
                zuuluu = _closure2_slot1;
                michal = 'bulkAddToken';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setSuggestions'] = tangon;
    tangon = function(argFoo) { // Original name: setPhone
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot0;
                michal = 'phone';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPhone'] = tangon;
    tangon = function(argFoo) { // Original name: setPhoneToken
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot0;
                michal = 'phoneToken';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPhoneToken'] = tangon;
    tangon = function(argFoo) { // Original name: setName
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = arguments[1];
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00004_ip = 20; continue _fun00003 }
 18:
            zuuluu = false;
 20:
            var _closure2_slot1 = zuuluu;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.setState;
                entity = function(argFoo) {
                    entity = {};
                    report = argFoo;
                    oscard = entity;
                    michal = copyDataProperties(oscard, report);
                    tangon = _closure2_slot0;
                    zuuluu = 'name';
                    entity[zuuluu] = tangon;
                    zuuluu = _closure2_slot1;
                    michal = 'isNameFromContactBook';
                    entity[michal] = zuuluu;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['setName'] = tangon;
    tangon = function(argFoo) { // Original name: setPermissionState
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot0;
                michal = 'permissionState';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPermissionState'] = tangon;
    tangon = function(argFoo) { // Original name: setError
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot0;
                michal = 'error';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setError'] = tangon;
    tangon = function() { // Original name: useIsOnboarding
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot7;
            entity = undefined;
            entity = zuuluu.bind(entity)();
            zuuluu = entity.mode;
            entity = _closure1_slot6;
            entity = entity.ONBOARDING;
            entity = zuuluu === entity;
            if(entity) { _fun00006_ip = 49; continue _fun00005 }
 35:
            michal = _closure1_slot6;
            michal = michal.ONBOARDING_INVITE;
            entity = zuuluu === michal;
 49:
            return entity;
        }
    };
    zuuluu['useIsOnboarding'] = tangon;
    michal = function() { // Original name: getIsOnboarding
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot7;
            entity = zuuluu.getState;
            entity = entity.bind(zuuluu)();
            zuuluu = entity.mode;
            entity = _closure1_slot6;
            entity = entity.ONBOARDING;
            entity = zuuluu === entity;
            if(entity) { _fun00008_ip = 53; continue _fun00007 }
 39:
            michal = _closure1_slot6;
            michal = michal.ONBOARDING_INVITE;
            entity = zuuluu === michal;
 53:
            return entity;
        }
    };
    zuuluu['getIsOnboarding'] = michal;
    return entity;
})();