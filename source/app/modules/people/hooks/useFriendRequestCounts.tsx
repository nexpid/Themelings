// app/modules/people/hooks/useFriendRequestCounts.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _getIncomingFriendRequestCount
        _fun114450: for(var _fun114450_ip = 0; ; ) switch(_fun114450_ip) {
 0:
            tango = _closure1_slot2;
            zulu = undefined;
            mike = argBar;
            entity = 2;
            mike = tango.bind(zulu)(mike, entity);
            entity = 0;
            zulu = mike[entity];
            entity = 1;
            mike = mike[entity];
            entity = zulu.getPendingCount;
            zulu = entity.bind(zulu)();
            entity = mike.getPendingIncomingCount;
            mike = entity.bind(mike)();
            tango = argFoo;
            entity = zulu;
            if(!tango) { _fun114450_ip = 67; continue _fun114450 }
 63:
            entity = zulu + mike;
 67:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/people/hooks/useFriendRequestCounts.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getIncomingFriendRequestCount
        tango = _closure1_slot5;
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 3;
        entity = zulu[entity];
        zulu = undefined;
        report = mike.bind(zulu)(entity);
        mike = report.getIsFriendTiersUIEnabled;
        entity = {};
        oscar = 'getIncomingFriendRequestCount';
        entity['location'] = oscar;
        mike = mike.bind(report)(entity);
        entity = argFoo;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['getIncomingFriendRequestCount'] = tango;
    tango = function() { // Original name: useIncomingFriendRequestCount
        tango = _closure1_slot0;
        oscar = _closure1_slot1;
        mike = 3;
        mike = oscar[mike];
        zulu = undefined;
        options = tango.bind(zulu)(mike);
        golf = options.useIsFriendTiersUIEnabled;
        mike = {};
        verify = 'useIncomingFriendRequestCount';
        mike['location'] = verify;
        mike = golf.bind(options)(mike);
        var _closure2_slot0 = mike;
        mike = 4;
        mike = oscar[mike];
        tango = tango.bind(zulu)(mike);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot4;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot3;
        mike[1] = report;
        entity = function() {
            tango = _closure1_slot5;
            zulu = _closure2_slot0;
            report = _closure1_slot4;
            mike = new Array(2);
            mike[0] = report;
            entity = _closure1_slot3;
            mike[1] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIncomingFriendRequestCount'] = tango;
    mike = function() { // Original name: getOutgoingFriendRequestCount
        _fun114454: for(var _fun114454_ip = 0; ; ) switch(_fun114454_ip) {
 0:
            tango = arguments[0];
            report = undefined;
            if(!(tango === report)) { _fun114454_ip = 38; continue _fun114454 }
 9:
            mike = global;
            zulu = mike.o;
            entity = new Array(2);
            entity[0] = zulu;
            mike = mike.s;
            entity[1] = mike;
            tango = entity;
 38:
            zulu = _closure1_slot2;
            mike = 2;
            tango = zulu.bind(report)(tango, mike);
            mike = 0;
            zulu = tango[mike];
            mike = 1;
            mike = tango[mike];
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            entity = oscar[entity];
            report = tango.bind(report)(entity);
            tango = report.getIsFriendTiersUIEnabled;
            entity = {};
            oscar = 'getOutgoingFriendRequestCount';
            entity['location'] = oscar;
            tango = tango.bind(report)(entity);
            entity = zulu.getOutgoingCount;
            zulu = entity.bind(zulu)();
            entity = mike.getPendingOutgoingCount;
            mike = entity.bind(mike)();
            entity = zulu;
            if(!tango) { _fun114454_ip = 138; continue _fun114454 }
 134:
            entity = zulu + mike;
 138:
            return entity;
        }
    };
    zulu['getOutgoingFriendRequestCount'] = mike;
    return entity;
})();