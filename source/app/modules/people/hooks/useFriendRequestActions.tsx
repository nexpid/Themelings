// app/modules/people/hooks/useFriendRequestActions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = report;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    oscar = report[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot2 = tango;
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/people/hooks/useFriendRequestActions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useFriendRequestActions
        entity = argFoo;
        golf = entity.userId;
        var _closure2_slot0 = golf;
        foxtrot = entity.applicationId;
        var _closure2_slot1 = foxtrot;
        yankee = entity.isGameRelationship;
        var _closure2_slot2 = yankee;
        offset = entity.location;
        var _closure2_slot3 = offset;
        romeo = entity.friendToken;
        var _closure2_slot4 = romeo;
        options = entity.onConfirm;
        var _closure2_slot5 = options;
        verify = entity.onCancel;
        var _closure2_slot6 = verify;
        oscar = _closure1_slot2;
        tango = oscar.useCallback;
        mike = new Array(4);
        mike[0] = foxtrot;
        mike[1] = yankee;
        mike[2] = offset;
        mike[3] = golf;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 1;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.cancelFriendRequest;
                mike = {};
                oscar = _closure2_slot0;
                mike['userId'] = oscar;
                golf = _closure2_slot2;
                oscar = null;
                if(!golf) { _fun00002_ip = 57; continue _fun00001 }
 53:
                oscar = _closure2_slot1;
 57:
                mike['applicationId'] = oscar;
                report = _closure2_slot3;
                mike['location'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        mike = tango.bind(oscar)(entity, mike);
        entity = {};
        report = oscar.useCallback;
        tango = new Array(7);
        tango[0] = foxtrot;
        tango[1] = romeo;
        tango[2] = yankee;
        tango[3] = offset;
        tango[4] = verify;
        tango[5] = options;
        tango[6] = golf;
        zulu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 1;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.maybeConfirmFriendRequestAccept;
                mike = {};
                oscar = _closure2_slot0;
                mike['userId'] = oscar;
                golf = _closure2_slot2;
                oscar = null;
                if(!golf) { _fun00004_ip = 57; continue _fun00003 }
 53:
                oscar = _closure2_slot1;
 57:
                mike['applicationId'] = oscar;
                oscar = _closure2_slot3;
                mike['location'] = oscar;
                oscar = _closure2_slot4;
                mike['friendToken'] = oscar;
                oscar = _closure2_slot5;
                mike['onConfirm'] = oscar;
                report = _closure2_slot6;
                mike['onCancel'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        zulu = report.bind(oscar)(zulu, tango);
        entity['acceptFriendRequest'] = zulu;
        entity['cancelFriendRequest'] = mike;
        return entity;
    };
    zulu['useFriendRequestActions'] = mike;
    return entity;
})();