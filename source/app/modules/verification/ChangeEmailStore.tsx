// app/modules/verification/ChangeEmailStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    tango = function(argFoo, argBar) { // Original name: setChangeEmailError
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 1;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot3;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                mike = {};
                zulu = argFoo;
                report = zulu.errors;
                oscar = mike;
                zulu = copyDataProperties(oscar, report);
                tango = _closure2_slot0;
                zulu = _closure2_slot1;
                mike[tango] = zulu;
                entity['errors'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot4 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    oscar = {};
    entity = 'email';
    oscar['EMAIL'] = entity;
    entity = 'email_token';
    oscar['EMAIL_TOKEN'] = entity;
    entity = 'password';
    oscar['PASSWORD'] = entity;
    entity = {'errors': null, 'emailToken': null};
    var _closure1_slot2 = entity;
    entity = 0;
    report = verify[entity];
    entity = undefined;
    offset = options.bind(entity)(report);
    golf = offset.create;
    report = function() {
        entity = _closure1_slot2;
        return entity;
    };
    report = golf.bind(offset)(report);
    var _closure1_slot3 = report;
    golf = 2;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/verification/ChangeEmailStore.tsx';
    golf = options.bind(verify)(golf);
    zulu['ChangeEmailFields'] = oscar;
    zulu['useChangeEmailStore'] = report;
    zulu['setChangeEmailError'] = tango;
    tango = function(argFoo) { // Original name: useChangeEmailError
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot3;
        zulu = undefined;
        entity = function(argFoo) {
            _fun81862: for(var _fun81862_ip = 0; ; ) switch(_fun81862_ip) {
 0:
                entity = argFoo;
                zulu = entity.errors;
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun81862_ip = 31; continue _fun81862 }
 20:
                mike = _closure2_slot0;
                entity = zulu[mike];
 31:
                return entity;
            }
        };
        zulu = tango.bind(zulu)(entity);
        entity = new Array(2);
        entity[0] = zulu;
        mike = function(argFoo) {
            tango = _closure1_slot4;
            zulu = _closure2_slot0;
            entity = undefined;
            mike = argFoo;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity[1] = mike;
        return entity;
    };
    zulu['useChangeEmailError'] = tango;
    tango = function(argFoo) { // Original name: setEmailToken
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 1;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot3;
            mike = zulu.setState;
            entity = {};
            tango = _closure2_slot0;
            entity['emailToken'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setEmailToken'] = tango;
    mike = function() { // Original name: resetChangeEmailStore
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.batchUpdates;
        mike = function() {
            tango = _closure1_slot3;
            zulu = tango.setState;
            mike = _closure1_slot2;
            entity = true;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetChangeEmailStore'] = mike;
    return entity;
})();