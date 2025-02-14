// app/modules/nuf/native/useNotificationPermissionPrompt.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/nuf/native/useNotificationPermissionPrompt.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useNotificationPermissionPrompt
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        tango = 5;
        golf = oscar[tango];
        entity = undefined;
        offset = report.bind(entity)(golf);
        verify = offset.useStateFromStores;
        golf = _closure1_slot5;
        options = new Array(1);
        options[0] = golf;
        golf = function() {
            mike = _closure1_slot5;
            entity = mike.isConnected;
            entity = entity.bind(mike)();
            return entity;
        };
        golf = verify.bind(offset)(options, golf);
        var _closure2_slot0 = golf;
        tango = oscar[tango];
        options = report.bind(entity)(tango);
        oscar = options.useStateFromStores;
        tango = _closure1_slot6;
        report = new Array(2);
        report[0] = tango;
        tango = _closure1_slot4;
        report[1] = tango;
        tango = function() {
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 6;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = _closure1_slot4;
            entity = _closure1_slot6;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar = oscar.bind(options)(report, tango);
        var _closure2_slot1 = oscar;
        report = _closure1_slot3;
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            _fun118235: for(var _fun118235_ip = 0; ; ) switch(_fun118235_ip) {
 0:
                mike = _closure2_slot0;
                if(!mike) { _fun118235_ip = 113; continue _fun118235 }
 10:
                entity = _closure2_slot1;
                if(entity) { _fun118235_ip = 113; continue _fun118235 }
 17:
                mike = _closure1_slot7;
                report = mike.promptSeen;
                oscar = _closure1_slot1;
                mike = _closure1_slot2;
                tango = 7;
                mike = mike[tango];
                zulu = undefined;
                mike = oscar.bind(zulu)(mike);
                mike = mike.shouldRequestNotification;
                if(!mike) { _fun118235_ip = 66; continue _fun118235 }
 63:
                mike = !report;
 66:
                if(!mike) { _fun118235_ip = 113; continue _fun118235 }
 69:
                mike = _closure1_slot1;
                entity = _closure1_slot2;
                report = entity[tango];
                oscar = mike.bind(zulu)(report);
                report = oscar.requestPermission;
                report = report.bind(oscar)();
                entity = entity[tango];
                mike = mike.bind(zulu)(entity);
                entity = false;
                mike['shouldRequestNotification'] = entity;
 113:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();