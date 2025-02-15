// app/modules/activities/useActivityUsers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/useActivityUsers.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useActivityUsers
        oscar = argFoo;
        golf = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = golf;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresArray;
        options = _closure1_slot3;
        zulu = new Array(2);
        zulu[0] = options;
        mike = _closure1_slot2;
        zulu[1] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun122147: for(var _fun122147_ip = 0; ; ) switch(_fun122147_ip) {
 0:
                tango = _closure2_slot1;
                zulu = null;
                if(!(zulu != tango)) { _fun122147_ip = 124; continue _fun122147 }
 15:
                report = _closure1_slot3;
                tango = report.getEmbeddedActivitiesForChannel;
                mike = _closure2_slot1;
                report = tango.bind(report)(mike);
                tango = report.find;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.applicationId;
                    entity = _closure2_slot0;
                    entity = mike === entity;
                    return entity;
                };
                mike = tango.bind(report)(mike);
                if(!(zulu != mike)) { _fun122147_ip = 118; continue _fun122147 }
 58:
                zulu = global;
                tango = zulu.Array;
                zulu = tango.from;
                mike = mike.userIds;
                tango = zulu.bind(tango)(mike);
                zulu = tango.map;
                mike = function(argFoo) {
                    zulu = _closure1_slot2;
                    mike = zulu.getUser;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.filter;
                entity = function(argFoo) {
                    mike = null;
                    entity = argFoo;
                    entity = mike != entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                _fun122147_ip = 122; continue _fun122147;
 118:
                entity = new Array(0);
 122:
                return entity;
 124:
                entity = new Array(0);
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();