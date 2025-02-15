// app/modules/clan/hooks/useCurrentUserAvailableClans.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function() { // Original name: useCurrentUserAvailableClans
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStoresArray;
        report = _closure1_slot5;
        mike = new Array(2);
        mike[0] = report;
        entity = _closure1_slot4;
        mike[1] = entity;
        entity = function() {
            zulu = _closure1_slot5;
            mike = zulu.getGuilds;
            zulu = mike.bind(zulu)();
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            entity = mike[entity];
            mike = undefined;
            entity = tango.bind(mike)(entity);
            mike = entity.bind(mike)(zulu);
            entity = mike.values;
            zulu = entity.bind(mike)();
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun93312: for(var _fun93312_ip = 0; ; ) switch(_fun93312_ip) {
 0:
                    zulu = argFoo;
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 5;
                    entity = mike[entity];
                    mike = undefined;
                    report = report.bind(mike)(entity);
                    entity = report.isGuildAClan;
                    entity = entity.bind(report)(zulu);
                    if(!entity) { _fun93312_ip = 83; continue _fun93312 }
 42:
                    report = _closure1_slot4;
                    tango = report.getSelfMember;
                    zulu = zulu.id;
                    tango = tango.bind(report)(zulu);
                    zulu = null;
                    report = zulu == tango;
                    mike = undefined;
                    if(report) { _fun93312_ip = 79; continue _fun93312 }
 73:
                    mike = tango.joinedAt;
 79:
                    entity = zulu != mike;
 83:
                    return entity;
                }
            };
            mike = mike.bind(zulu)(entity);
            entity = mike.value;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot6 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    verify = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/clan/hooks/useCurrentUserAvailableClans.tsx';
    report = oscar.bind(golf)(report);
    zulu['useCurrentUserAvailableClans'] = tango;
    mike = function() { // Original name: useCurrentUserAvailableClanIds
        tango = _closure1_slot6;
        zulu = undefined;
        report = tango.bind(zulu)();
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            entity = global;
            zulu = entity.Set;
            tango = _closure2_slot0;
            mike = tango.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            report = mike.bind(tango)(entity);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = mike;
            entity = new oscar[zulu](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useCurrentUserAvailableClanIds'] = mike;
    return entity;
})();