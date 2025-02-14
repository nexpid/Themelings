// app/modules/blocking/BlockedUserUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: voiceStateHasBlockedUsers
        zulu = _closure1_slot3;
        mike = zulu.isBlockedOrIgnored;
        entity = argFoo;
        entity = entity.userId;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot4 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/blocking/BlockedUserUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: filterOutBlockedOrIgnoredUsers
        tango = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        zulu = tango.filter;
        mike = function(argFoo) {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.isNotNullish;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.filter;
        entity = function(argFoo) {
            _fun114524: for(var _fun114524_ip = 0; ; ) switch(_fun114524_ip) {
 0:
                mike = argFoo;
                tango = _closure2_slot0;
                entity = null;
                if(!(entity == tango)) { _fun114524_ip = 41; continue _fun114524 }
 16:
                report = _closure1_slot3;
                tango = report.isBlockedOrIgnored;
                entity = mike.id;
                entity = tango.bind(report)(entity);
                _fun114524_ip = 60; continue _fun114524;
 41:
                tango = _closure2_slot0;
                zulu = tango.includes;
                mike = mike.id;
                entity = zulu.bind(tango)(mike);
 60:
                entity = !entity;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['filterOutBlockedOrIgnoredUsers'] = report;
    report = function(argFoo, argBar) { // Original name: filterOutBlockedOrIgnoredUserIds
        zulu = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = zulu.filter;
        entity = function(argFoo) {
            _fun114526: for(var _fun114526_ip = 0; ; ) switch(_fun114526_ip) {
 0:
                tango = argFoo;
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity == zulu)) { _fun114526_ip = 36; continue _fun114526 }
 16:
                zulu = _closure1_slot3;
                entity = zulu.isBlockedOrIgnored;
                entity = entity.bind(zulu)(tango);
                _fun114526_ip = 50; continue _fun114526;
 36:
                zulu = _closure2_slot0;
                mike = zulu.includes;
                entity = mike.bind(zulu)(tango);
 50:
                entity = !entity;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['filterOutBlockedOrIgnoredUserIds'] = report;
    report = function(argFoo) { // Original name: filterOutStreamsByBlockedOwner
        zulu = argFoo;
        mike = zulu.filter;
        entity = function(argFoo) {
            zulu = _closure1_slot3;
            mike = zulu.isBlockedOrIgnored;
            entity = argFoo;
            entity = entity.ownerId;
            entity = mike.bind(zulu)(entity);
            entity = !entity;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['filterOutStreamsByBlockedOwner'] = report;
    report = function(argFoo, argBar) { // Original name: hasBlockedOrIgnoredUserIds
        zulu = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = zulu.some;
        entity = function(argFoo) {
            _fun114530: for(var _fun114530_ip = 0; ; ) switch(_fun114530_ip) {
 0:
                tango = argFoo;
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity == zulu)) { _fun114530_ip = 36; continue _fun114530 }
 16:
                zulu = _closure1_slot3;
                entity = zulu.isBlockedOrIgnored;
                entity = entity.bind(zulu)(tango);
                _fun114530_ip = 50; continue _fun114530;
 36:
                zulu = _closure2_slot0;
                mike = zulu.includes;
                entity = mike.bind(zulu)(tango);
 50:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['hasBlockedOrIgnoredUserIds'] = report;
    zulu['voiceStateHasBlockedUsers'] = tango;
    mike = function(argFoo) { // Original name: filterBlockedUsersFromVoiceStates
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 2;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = argFoo;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.filter;
        entity = function(argFoo) {
            zulu = _closure1_slot4;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = !entity;
            return entity;
        };
        zulu = mike.bind(zulu)(entity);
        mike = zulu.keyBy;
        entity = 'userId';
        mike = mike.bind(zulu)(entity);
        entity = mike.value;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['filterBlockedUsersFromVoiceStates'] = mike;
    return entity;
})();