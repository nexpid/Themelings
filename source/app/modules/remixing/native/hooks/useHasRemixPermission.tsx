// app/modules/remixing/native/hooks/useHasRemixPermission.tsx
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
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/native/hooks/useHasRemixPermission.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        zulu = 3;
        golf = oscar[zulu];
        tango = undefined;
        offset = report.bind(tango)(golf);
        verify = offset.useStateFromStores;
        golf = _closure1_slot2;
        options = new Array(1);
        options[0] = golf;
        golf = function() {
            zulu = _closure1_slot2;
            mike = zulu.getChannel;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf = verify.bind(offset)(options, golf);
        var _closure2_slot1 = golf;
        zulu = oscar[zulu];
        tango = report.bind(tango)(zulu);
        zulu = tango.useStateFromStores;
        report = _closure1_slot3;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun82052: for(var _fun82052_ip = 0; ; ) switch(_fun82052_ip) {
 0:
                entity = _closure2_slot1;
                report = null;
                tango = report == entity;
                entity = undefined;
                if(tango) { _fun82052_ip = 32; continue _fun82052 }
 18:
                oscar = _closure2_slot1;
                tango = oscar.isDM;
                entity = tango.bind(oscar)();
 32:
                if(entity) { _fun82052_ip = 65; continue _fun82052 }
 35:
                tango = _closure2_slot1;
                tango = report == tango;
                mike = undefined;
                if(tango) { _fun82052_ip = 62; continue _fun82052 }
 48:
                report = _closure2_slot1;
                tango = report.isMultiUserDM;
                mike = tango.bind(report)();
 62:
                entity = mike;
 65:
                if(entity) { _fun82052_ip = 137; continue _fun82052 }
 68:
                golf = _closure1_slot3;
                oscar = golf.can;
                mike = _closure1_slot4;
                report = mike.SEND_MESSAGES;
                mike = _closure2_slot1;
                mike = oscar.bind(golf)(report, mike);
                if(!mike) { _fun82052_ip = 134; continue _fun82052 }
 104:
                oscar = _closure1_slot3;
                report = oscar.can;
                tango = _closure1_slot4;
                tango = tango.ATTACH_FILES;
                zulu = _closure2_slot1;
                mike = report.bind(oscar)(tango, zulu);
 134:
                entity = mike;
 137:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();