// app/modules/voice_panel/native/hooks/useCanConnect.tsx
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/hooks/useCanConnect.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useCanConnect
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        golf = _closure1_slot2;
        zulu = new Array(4);
        zulu[0] = golf;
        golf = _closure1_slot4;
        zulu[1] = golf;
        golf = _closure1_slot3;
        zulu[2] = golf;
        mike = _closure1_slot5;
        zulu[3] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot2;
                mike = tango.getChannel;
                entity = _closure2_slot0;
                golf = mike.bind(tango)(entity);
                entity = {};
                mike = null;
                tango = mike != golf;
                if(!tango) { _fun00002_ip = 77; continue _fun00001 }
 35:
                report = golf.isPrivate;
                report = report.bind(golf)();
                if(report) { _fun00002_ip = 74; continue _fun00001 }
 48:
                verify = _closure1_slot4;
                options = verify.can;
                oscar = _closure1_slot6;
                oscar = oscar.CONNECT;
                report = options.bind(verify)(oscar, golf);
 74:
                tango = report;
 77:
                entity['canConnect'] = tango;
                mike = mike == golf;
                if(mike) { _fun00002_ip = 132; continue _fun00001 }
 89:
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                tango = 6;
                report = report[tango];
                tango = undefined;
                oscar = oscar.bind(tango)(report);
                report = oscar.isChannelFull;
                tango = _closure1_slot5;
                zulu = _closure1_slot3;
                mike = report.bind(oscar)(golf, tango, zulu);
 132:
                entity['isAtMaxCapacity'] = mike;
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();