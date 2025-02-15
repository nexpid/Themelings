// app/modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = new Array(0);
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useUserProfileGameFriendApplicationIds
        mike = argFoo;
        offset = mike.userId;
        var _closure2_slot0 = offset;
        options = mike.location;
        report = _closure1_slot0;
        verify = _closure1_slot1;
        zulu = 3;
        zulu = verify[zulu];
        tango = undefined;
        yankee = report.bind(tango)(zulu);
        golf = yankee.useStateFromStores;
        zulu = _closure1_slot3;
        oscar = new Array(2);
        oscar[0] = zulu;
        zulu = _closure1_slot4;
        oscar[1] = zulu;
        zulu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure1_slot3;
                tango = report.isFriend;
                entity = _closure2_slot0;
                entity = tango.bind(report)(entity);
                if(entity) { _fun00002_ip = 67; continue _fun00001 }
 28:
                tango = _closure1_slot4;
                zulu = tango.getUser;
                mike = _closure2_slot0;
                zulu = zulu.bind(tango)(mike);
                mike = null;
                tango = mike == zulu;
                mike = undefined;
                if(tango) { _fun00002_ip = 64; continue _fun00001 }
 58:
                mike = zulu.isProvisional;
 64:
                entity = mike;
 67:
                return entity;
            }
        };
        oscar = golf.bind(yankee)(oscar, zulu);
        var _closure2_slot1 = oscar;
        zulu = 4;
        zulu = verify[zulu];
        golf = report.bind(tango)(zulu);
        zulu = golf.useGameFriendsForUser;
        golf = zulu.bind(golf)(offset);
        var _closure2_slot2 = golf;
        zulu = 5;
        zulu = verify[zulu];
        report = report.bind(tango)(zulu);
        tango = report.useIsFriendTiersUIEnabled;
        zulu = {};
        zulu['location'] = options;
        report = tango.bind(report)(zulu);
        var _closure2_slot3 = report;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = _closure2_slot3;
                if(!mike) { _fun00004_ip = 42; continue _fun00003 }
 10:
                mike = _closure2_slot1;
                if(mike) { _fun00004_ip = 42; continue _fun00003 }
 17:
                zulu = _closure2_slot2;
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.applicationId;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                _fun00004_ip = 49; continue _fun00003;
 42:
                entity = _closure1_slot5;
 49:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useUserProfileGameFriendApplicationIds'] = mike;
    return entity;
})();