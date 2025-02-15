// app/modules/contact_sync/native/ContactSyncModalStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    entity = function() { // Original name: initialValues
        entity = {'mode': null, 'permissionState': null, 'error': '', 'phone': null, 'phoneToken': null, 'name': null, 'isNameFromContactBook': false, 'allowPhone': true, 'allowEmail': true, 'bulkAddToken': null};
        zulu = _closure1_slot6;
        zulu = zulu.NORMAL;
        entity['mode'] = zulu;
        mike = _closure1_slot4;
        mike = mike.NOT_DETERMINED;
        entity['permissionState'] = mike;
        mike = new Array(0);
        entity['suggestions'] = mike;
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, tango);
    offset = 0;
    tango = options[offset];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    verify = 1;
    tango = options[verify];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    oscar = 2;
    tango = options[oscar];
    tango = golf.bind(entity)(tango);
    tango = tango.ContactPermissions;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.PlatformTypes;
    var _closure1_slot5 = tango;
    report = {};
    report['NORMAL'] = offset;
    tango = 'NORMAL';
    report[offset] = tango;
    report['ONBOARDING'] = verify;
    tango = 'ONBOARDING';
    report[verify] = tango;
    report['ONBOARDING_INVITE'] = oscar;
    tango = 'ONBOARDING_INVITE';
    report[oscar] = tango;
    var _closure1_slot6 = report;
    tango = 4;
    tango = options[tango];
    verify = golf.bind(entity)(tango);
    oscar = verify.create;
    tango = function() {
        mike = _closure1_slot8;
        entity = undefined;
        entity = mike.bind(entity)();
        return entity;
    };
    tango = oscar.bind(verify)(tango);
    var _closure1_slot7 = tango;
    oscar = 6;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/contact_sync/native/ContactSyncModalStore.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['ContactSyncModes'] = report;
    zulu['useContactSyncModalStore'] = tango;
    tango = function(argFoo) { // Original name: initialize
        _fun93872: for(var _fun93872_ip = 0; ; ) switch(_fun93872_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = _closure1_slot2;
            tango = report.getLocalAccount;
            entity = _closure1_slot5;
            entity = entity.CONTACTS;
            oscar = tango.bind(report)(entity);
            tango = null;
            golf = tango == oscar;
            entity = undefined;
            report = undefined;
            if(golf) { _fun93872_ip = 55; continue _fun93872 }
 50:
            report = oscar.name;
 55:
            var _closure2_slot1 = report;
            oscar = _closure1_slot3;
            report = oscar.getCurrentUser;
            report = report.bind(oscar)();
            oscar = tango == report;
            tango = undefined;
            if(oscar) { _fun93872_ip = 87; continue _fun93872 }
 81:
            tango = report.phone;
 87:
            var _closure2_slot2 = tango;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 5;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure1_slot7;
                mike = zulu.setState;
                entity = function() {
                    entity = {};
                    zulu = _closure1_slot8;
                    mike = undefined;
                    report = zulu.bind(mike)();
                    oscar = entity;
                    mike = copyDataProperties(oscar, report);
                    tango = _closure2_slot0;
                    zulu = 'mode';
                    entity[zulu] = tango;
                    tango = _closure2_slot2;
                    zulu = 'phone';
                    entity[zulu] = tango;
                    zulu = _closure2_slot1;
                    mike = 'name';
                    entity[mike] = zulu;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['initialize'] = tango;
    tango = function(argFoo) { // Original name: setAllowSync
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot7;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = _closure2_slot0;
                mike = 'allowPhone';
                entity[mike] = zulu;
                mike = 'allowEmail';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setAllowSync'] = tango;
    tango = function(argFoo) { // Original name: setAllowPhone
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot7;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = _closure2_slot0;
                mike = 'allowPhone';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setAllowPhone'] = tango;
    tango = function(argFoo) { // Original name: setAllowEmail
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot7;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = _closure2_slot0;
                mike = 'allowEmail';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setAllowEmail'] = tango;
    tango = function(argFoo, argBar) { // Original name: setSuggestions
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot7;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                report = argFoo;
                oscar = entity;
                mike = copyDataProperties(oscar, report);
                tango = _closure2_slot0;
                zulu = 'suggestions';
                entity[zulu] = tango;
                zulu = _closure2_slot1;
                mike = 'bulkAddToken';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setSuggestions'] = tango;
    tango = function(argFoo) { // Original name: setPhone
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot7;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = _closure2_slot0;
                mike = 'phone';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPhone'] = tango;
    tango = function(argFoo) { // Original name: setPhoneToken
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot7;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = _closure2_slot0;
                mike = 'phoneToken';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPhoneToken'] = tango;
    tango = function(argFoo) { // Original name: setName
        _fun93893: for(var _fun93893_ip = 0; ; ) switch(_fun93893_ip) {
 0:
            zulu = arguments[1];
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = undefined;
            if(!(zulu === entity)) { _fun93893_ip = 20; continue _fun93893 }
 18:
            zulu = false;
 20:
            var _closure2_slot1 = zulu;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 5;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure1_slot7;
                mike = zulu.setState;
                entity = function(argFoo) {
                    entity = {};
                    report = argFoo;
                    oscar = entity;
                    mike = copyDataProperties(oscar, report);
                    tango = _closure2_slot0;
                    zulu = 'name';
                    entity[zulu] = tango;
                    zulu = _closure2_slot1;
                    mike = 'isNameFromContactBook';
                    entity[mike] = zulu;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['setName'] = tango;
    tango = function(argFoo) { // Original name: setPermissionState
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot7;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = _closure2_slot0;
                mike = 'permissionState';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPermissionState'] = tango;
    tango = function(argFoo) { // Original name: setError
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot7;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = _closure2_slot0;
                mike = 'error';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setError'] = tango;
    tango = function() { // Original name: useIsOnboarding
        _fun93902: for(var _fun93902_ip = 0; ; ) switch(_fun93902_ip) {
 0:
            zulu = _closure1_slot7;
            entity = undefined;
            entity = zulu.bind(entity)();
            zulu = entity.mode;
            entity = _closure1_slot6;
            entity = entity.ONBOARDING;
            entity = zulu === entity;
            if(entity) { _fun93902_ip = 49; continue _fun93902 }
 35:
            mike = _closure1_slot6;
            mike = mike.ONBOARDING_INVITE;
            entity = zulu === mike;
 49:
            return entity;
        }
    };
    zulu['useIsOnboarding'] = tango;
    mike = function() { // Original name: getIsOnboarding
        _fun93903: for(var _fun93903_ip = 0; ; ) switch(_fun93903_ip) {
 0:
            zulu = _closure1_slot7;
            entity = zulu.getState;
            entity = entity.bind(zulu)();
            zulu = entity.mode;
            entity = _closure1_slot6;
            entity = entity.ONBOARDING;
            entity = zulu === entity;
            if(entity) { _fun93903_ip = 53; continue _fun93903 }
 39:
            mike = _closure1_slot6;
            mike = mike.ONBOARDING_INVITE;
            entity = zulu === mike;
 53:
            return entity;
        }
    };
    zulu['getIsOnboarding'] = mike;
    return entity;
})();