// app/modules/external_pip/useExternalPipEnabler.android.tsx
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
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/external_pip/useExternalPipEnabler.android.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useExternalPIPEnabler
        mike = argFoo;
        oscar = mike.disabled;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        golf = _closure1_slot2;
        zulu = new Array(3);
        zulu[0] = golf;
        golf = _closure1_slot4;
        zulu[1] = golf;
        mike = _closure1_slot3;
        zulu[2] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun121216: for(var _fun121216_ip = 0; ; ) switch(_fun121216_ip) {
 0:
                tango = _closure1_slot4;
                zulu = tango.getChannelId;
                golf = zulu.bind(tango)();
                zulu = null;
                if(!(zulu != golf)) { _fun121216_ip = 188; continue _fun121216 }
 28:
                tango = _closure2_slot0;
                if(tango) { _fun121216_ip = 188; continue _fun121216 }
 41:
                report = _closure1_slot2;
                tango = report.getVideoParticipants;
                oscar = tango.bind(report)(golf);
                report = oscar.filter;
                tango = function(argFoo) {
                    entity = argFoo;
                    entity = entity.localVideoDisabled;
                    entity = !entity;
                    return entity;
                };
                tango = report.bind(oscar)(tango);
                report = tango.length;
                tango = 0;
                tango = report > tango;
                if(tango) { _fun121216_ip = 140; continue _fun121216 }
 87:
                oscar = _closure1_slot2;
                report = oscar.getStreamParticipants;
                golf = report.bind(oscar)(golf);
                oscar = golf.filter;
                report = function(argFoo) {
                    entity = argFoo;
                    entity = entity.user;
                    mike = entity.id;
                    zulu = _closure1_slot3;
                    entity = zulu.getId;
                    entity = entity.bind(zulu)();
                    entity = mike !== entity;
                    return entity;
                };
                oscar = oscar.bind(golf)(report);
                report = oscar.find;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.streamId;
                    entity = null;
                    entity = entity != mike;
                    return entity;
                };
                mike = report.bind(oscar)(mike);
                tango = zulu != mike;
 140:
                mike = {};
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 4;
                report = report[zulu];
                zulu = undefined;
                zulu = oscar.bind(zulu)(report);
                options = zulu.DEFAULT_STATE;
                verify = mike;
                zulu = copyDataProperties(verify, options);
                zulu = 'externalPipEnabled';
                mike[zulu] = tango;
                return mike;
 188:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.DEFAULT_STATE;
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();