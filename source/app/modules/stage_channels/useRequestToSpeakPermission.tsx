// app/modules/stage_channels/useRequestToSpeakPermission.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/useRequestToSpeakPermission.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useRequestToSpeakPermission
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 4;
            tango = oscar[tango];
            report = undefined;
            verify = golf.bind(report)(tango);
            options = verify.useStateFromStores;
            tango = _closure1_slot5;
            golf = new Array(1);
            golf[0] = tango;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = options.bind(verify)(golf, zulu, tango);
            var _closure2_slot1 = golf;
            tango = _closure1_slot1;
            zulu = 5;
            zulu = oscar[zulu];
            oscar = tango.bind(report)(zulu);
            tango = oscar.canEveryoneRole;
            zulu = _closure1_slot6;
            zulu = zulu.REQUEST_TO_SPEAK;
            tango = tango.bind(oscar)(zulu, golf);
            oscar = _closure1_slot4;
            zulu = oscar.useState;
            oscar = zulu.bind(oscar)(tango);
            zulu = _closure1_slot3;
            entity = 2;
            oscar = zulu.bind(report)(oscar, entity);
            entity = 0;
            zulu = oscar[entity];
            entity = 1;
            entity = oscar[entity];
            var _closure2_slot2 = entity;
            if(!(tango !== zulu)) { _fun00002_ip = 168; continue _fun00001 }
 163:
            entity = entity.bind(report)(tango);
 168:
            entity = new Array(2);
            entity[0] = zulu;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    zulu = _closure2_slot1;
                    entity = null;
                    if(!(entity != zulu)) { _fun00004_ip = 77; continue _fun00003 }
 16:
                    entity = _closure2_slot2;
                    oscar = undefined;
                    entity = entity.bind(oscar)(report);
                    tango = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 6;
                    zulu = golf[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.setEveryoneRolePermissionAllowed;
                    mike = _closure2_slot1;
                    entity = _closure1_slot6;
                    entity = entity.REQUEST_TO_SPEAK;
                    entity = zulu.bind(tango)(mike, entity, report);
 77:
                    entity = undefined;
                    return entity;
                }
            };
            entity[1] = mike;
            return entity;
        }
    };
    zulu['useRequestToSpeakPermission'] = mike;
    return entity;
})();