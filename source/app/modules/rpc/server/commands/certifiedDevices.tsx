// app/modules/rpc/server/commands/certifiedDevices.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    golf = entity.Object;
    tango = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(golf)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    romeo = mike.RPC_LOCAL_SCOPE;
    offset = mike.RPC_SCOPE_CONFIG;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.RPCCommands;
    mike = mike.RPCErrors;
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.DeviceTypes;
    var _closure1_slot4 = mike;
    mike = {};
    golf = tango.SET_CERTIFIED_DEVICES;
    tango = {};
    verify = {};
    yankee = offset.ANY;
    offset = 3;
    offset = oscar[offset];
    offset = report.bind(entity)(offset);
    offset = offset.OAuth2Scopes;
    foxtrot = offset.RPC;
    offset = new Array(2);
    offset[0] = foxtrot;
    offset[1] = romeo;
    verify[yankee] = offset;
    tango['scope'] = verify;
    verify = function(argFoo) { // Original name: validation
        offset = argFoo;
        romeo = _closure1_slot1;
        foxtrot = _closure1_slot2;
        verify = 4;
        entity = foxtrot[verify];
        yankee = undefined;
        entity = romeo.bind(yankee)(entity);
        mike = entity.bind(yankee)(offset);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = offset.array;
        oscar = tango.bind(offset)();
        report = oscar.items;
        tango = foxtrot[verify];
        tango = romeo.bind(yankee)(tango);
        options = tango.bind(yankee)(offset);
        golf = options.keys;
        tango = {};
        kilo = offset.string;
        sizing = kilo.bind(offset)();
        kilo = sizing.required;
        sizing = kilo.bind(sizing)();
        kilo = sizing.valid;
        output = _closure1_slot4;
        result = output.AUDIO_INPUT;
        backup = new Array(3);
        backup[0] = result;
        result = output.AUDIO_OUTPUT;
        backup[1] = result;
        output = output.VIDEO_INPUT;
        backup[2] = output;
        backup = kilo.bind(sizing)(backup);
        tango['type'] = backup;
        backup = offset.string;
        kilo = backup.bind(offset)();
        backup = kilo.required;
        sizing = backup.bind(kilo)();
        kilo = sizing.min;
        backup = 1;
        kilo = kilo.bind(sizing)(backup);
        tango['id'] = kilo;
        kilo = foxtrot[verify];
        kilo = romeo.bind(yankee)(kilo);
        sizing = kilo.bind(yankee)(offset);
        kilo = sizing.required;
        output = kilo.bind(sizing)();
        sizing = output.keys;
        kilo = {};
        result = offset.string;
        echo = result.bind(offset)();
        result = echo.min;
        result = result.bind(echo)(backup);
        kilo['name'] = result;
        result = offset.string;
        echo = result.bind(offset)();
        result = echo.min;
        result = result.bind(echo)(backup);
        kilo['url'] = result;
        kilo = sizing.bind(output)(kilo);
        tango['vendor'] = kilo;
        verify = foxtrot[verify];
        verify = romeo.bind(yankee)(verify);
        yankee = verify.bind(yankee)(offset);
        verify = yankee.required;
        romeo = verify.bind(yankee)();
        yankee = romeo.keys;
        verify = {};
        foxtrot = offset.string;
        kilo = foxtrot.bind(offset)();
        foxtrot = kilo.min;
        foxtrot = foxtrot.bind(kilo)(backup);
        verify['name'] = foxtrot;
        foxtrot = offset.string;
        kilo = foxtrot.bind(offset)();
        foxtrot = kilo.min;
        foxtrot = foxtrot.bind(kilo)(backup);
        verify['url'] = foxtrot;
        verify = yankee.bind(romeo)(verify);
        tango['model'] = verify;
        verify = offset.array;
        romeo = verify.bind(offset)();
        yankee = romeo.items;
        verify = offset.string;
        foxtrot = verify.bind(offset)();
        verify = foxtrot.min;
        verify = verify.bind(foxtrot)(backup);
        verify = yankee.bind(romeo)(verify);
        tango['related'] = verify;
        verify = offset.boolean;
        verify = verify.bind(offset)();
        tango['echo_cancellation'] = verify;
        verify = offset.boolean;
        verify = verify.bind(offset)();
        tango['noise_suppression'] = verify;
        verify = offset.boolean;
        verify = verify.bind(offset)();
        tango['automatic_gain_control'] = verify;
        verify = offset.boolean;
        verify = verify.bind(offset)();
        tango['hardware_mute'] = verify;
        tango = golf.bind(options)(tango);
        tango = report.bind(oscar)(tango);
        entity['devices'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['validation'] = verify;
    options = function(argFoo) { // Original name: handler
        _fun109530: for(var _fun109530_ip = 0; ; ) switch(_fun109530_ip) {
 0:
            entity = argFoo;
            zulu = entity.socket;
            entity = entity.args;
            golf = entity.devices;
            var _closure2_slot0 = golf;
            entity = zulu.application;
            tango = entity.id;
            entity = null;
            if(!(entity != tango)) { _fun109530_ip = 109; continue _fun109530 }
 43:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 6;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.setCertifiedDevices;
            zulu = zulu.application;
            zulu = zulu.id;
            oscar = golf.map;
            mike = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = mike.type;
                entity['type'] = zulu;
                zulu = mike.id;
                entity['id'] = zulu;
                zulu = mike.vendor;
                entity['vendor'] = zulu;
                zulu = mike.model;
                entity['model'] = zulu;
                report = mike.related;
                tango = report.filter;
                zulu = function(argFoo) {
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    zulu = _closure2_slot0;
                    mike = zulu.some;
                    entity = function(argFoo) {
                        entity = argFoo;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                entity['related'] = zulu;
                zulu = mike.echo_cancellation;
                entity['echoCancellation'] = zulu;
                zulu = mike.noise_suppression;
                entity['noiseSuppression'] = zulu;
                zulu = mike.automatic_gain_control;
                entity['automaticGainControl'] = zulu;
                mike = mike.hardware_mute;
                entity['hardwareMute'] = mike;
                return entity;
            };
            mike = oscar.bind(golf)(mike);
            mike = tango.bind(report)(zulu, mike);
            return entity;
 109:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot3;
            entity = entity.INVALID_COMMAND;
            zulu['errorCode'] = entity;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            options = 'No application.';
            offset = mike;
            verify = zulu;
            entity = new offset[tango](verify, options, golf);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/certifiedDevices.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();