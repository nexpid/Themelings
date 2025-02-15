// app/modules/activities/useActivityShelfItemData.tsx
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
    tango = 'modules/activities/useActivityShelfItemData.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useActivityShelfItemData
        report = argBar;
        var _closure2_slot0 = report;
        tango = _closure1_slot0;
        oscar = _closure1_slot1;
        zulu = 1;
        zulu = oscar[zulu];
        oscar = undefined;
        tango = tango.bind(oscar)(zulu);
        zulu = {};
        golf = argFoo;
        zulu['guildId'] = golf;
        oscar = tango.bind(oscar)(zulu);
        var _closure2_slot1 = oscar;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot1;
                mike = zulu.find;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.application;
                    mike = entity.id;
                    entity = _closure2_slot0;
                    entity = mike === entity;
                    return entity;
                };
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun00002_ip = 38; continue _fun00001 }
 35:
                entity = mike;
 38:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useActivityShelfItemData'] = mike;
    return entity;
})();