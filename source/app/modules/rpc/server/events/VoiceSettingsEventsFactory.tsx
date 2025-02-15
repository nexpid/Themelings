// app/modules/rpc/server/events/VoiceSettingsEventsFactory.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.RPC_SCOPE_CONFIG;
    var _closure1_slot3 = golf;
    tango = tango.RPC_LOCAL_SCOPE;
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RPCEvents;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/events/VoiceSettingsEventsFactory.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: createVoiceSettingsEventHandlers
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        mike = _closure1_slot5;
        oscar = mike.VOICE_SETTINGS_UPDATE;
        zulu = {};
        golf = {};
        options = _closure1_slot3;
        verify = options.ANY;
        romeo = _closure1_slot0;
        foxtrot = _closure1_slot2;
        offset = 2;
        options = foxtrot[offset];
        yankee = undefined;
        options = romeo.bind(yankee)(options);
        options = options.OAuth2Scopes;
        backup = options.RPC;
        options = new Array(2);
        options[0] = backup;
        offset = foxtrot[offset];
        offset = romeo.bind(yankee)(offset);
        offset = offset.OAuth2Scopes;
        offset = offset.RPC_VOICE_READ;
        options[1] = offset;
        golf[verify] = options;
        zulu['scope'] = golf;
        golf = function() { // Original name: handler
            entity = function(argFoo) {
                _fun109932: for(var _fun109932_ip = 0; ; ) switch(_fun109932_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.prevState;
                    zulu = entity.dispatch;
                    entity = _closure2_slot0;
                    mike = undefined;
                    entity = entity.bind(mike)();
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 3;
                    tango = golf[tango];
                    report = report.bind(mike)(tango);
                    tango = report.isEqual;
                    tango = tango.bind(report)(entity, oscar);
                    if(tango) { _fun109932_ip = 70; continue _fun109932 }
 65:
                    mike = zulu.bind(mike)(entity);
 70:
                    return entity;
                }
            };
            return entity;
        };
        zulu['handler'] = golf;
        entity[oscar] = zulu;
        zulu = mike.VOICE_SETTINGS_UPDATE_2;
        mike = {};
        report = _closure1_slot4;
        mike['scope'] = report;
        tango = function(argFoo) { // Original name: handler
            mike = argFoo;
            mike = mike.socket;
            var _closure3_slot0 = mike;
            entity = function(argFoo) {
                _fun109934: for(var _fun109934_ip = 0; ; ) switch(_fun109934_ip) {
 0:
                    mike = argFoo;
                    entity = mike.prevState;
                    tango = mike.dispatch;
                    zulu = _closure3_slot0;
                    zulu = zulu.application;
                    report = zulu.id;
                    zulu = null;
                    if(!(zulu != report)) { _fun109934_ip = 110; continue _fun109934 }
 37:
                    report = _closure2_slot1;
                    mike = _closure3_slot0;
                    mike = mike.application;
                    mike = mike.id;
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 3;
                    report = golf[report];
                    oscar = oscar.bind(zulu)(report);
                    report = oscar.isEqual;
                    report = report.bind(oscar)(mike, entity);
                    if(report) { _fun109934_ip = 108; continue _fun109934 }
 103:
                    zulu = tango.bind(zulu)(mike);
 108:
                    return mike;
 110:
                    return entity;
                }
            };
            return entity;
        };
        mike['handler'] = tango;
        entity[zulu] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();