// app/modules/debug/serializePushNotifcationLogs.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    golf = tango.DEVICE_TOKEN;
    var _closure1_slot2 = golf;
    tango = tango.DEVICE_VOIP_TOKEN;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/debug/serializePushNotifcationLogs.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: serializePushNotificationLogs
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            var _closure2_slot0 = mike;
            tango = zulu.length;
            mike = 0;
            if(!(mike !== tango)) { _fun00002_ip = 242; continue _fun00001 }
 26:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            tango = 1;
            options = golf[tango];
            report = undefined;
            options = oscar.bind(report)(options);
            offset = options.Storage;
            verify = offset.get;
            options = _closure1_slot2;
            verify = verify.bind(offset)(options);
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            report = tango.Storage;
            tango = report.get;
            mike = _closure1_slot3;
            options = tango.bind(report)(mike);
            mike = null;
            tango = mike != verify;
            golf = '';
            oscar = golf;
            if(!tango) { _fun00002_ip = 140; continue _fun00001 }
 116:
            tango = global;
            tango = tango.HermesInternal;
            report = tango.concat;
            tango = 'Device Token: ';
            oscar = report.bind(tango)(verify);
 140:
            mike = mike != options;
            report = golf;
            if(!mike) { _fun00002_ip = 174; continue _fun00001 }
 150:
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            mike = 'Device Voip Token: ';
            report = tango.bind(mike)(options);
 174:
            mike = zulu.map;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = argFoo;
                    entity = mike.silent;
                    verify = 'Displayed';
                    if(!entity) { _fun00004_ip = 24; continue _fun00003 }
 18:
                    verify = 'Silent';
 24:
                    entity = _closure2_slot0;
                    if(entity) { _fun00004_ip = 76; continue _fun00003 }
 34:
                    oscar = mike.title;
                    report = mike.content;
                    entity = global;
                    entity = entity.HermesInternal;
                    tango = entity.concat;
                    zulu = '';
                    entity = ' - ';
                    options = tango.bind(zulu)(oscar, entity, report);
                    _fun00004_ip = 116; continue _fun00003;
 76:
                    oscar = mike.channelId;
                    report = mike.messageId;
                    entity = global;
                    entity = entity.HermesInternal;
                    tango = entity.concat;
                    zulu = '';
                    entity = ' - ';
                    options = tango.bind(zulu)(oscar, entity, report);
 116:
                    entity = global;
                    report = entity.Date;
                    sizing = mike.receivedTimestamp;
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    output = tango;
                    zulu = new output[report](sizing, kilo);
                    tango = zulu instanceof Object ? zulu : tango;
                    zulu = tango.toISOString;
                    sizing = zulu.bind(tango)();
                    backup = mike.type;
                    entity = entity.HermesInternal;
                    report = entity.concat;
                    output = '';
                    kilo = ' [';
                    foxtrot = '] ';
                    yankee = ' - ';
                    romeo = verify;
                    offset = options;
                    entity = output[report](sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify);
                    return entity;
                }
            };
            mike = mike.bind(zulu)(entity);
            entity = mike.join;
            tango = '\n';
            yankee = entity.bind(mike)(tango);
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            romeo = '\n\n';
            sizing = golf;
            kilo = oscar;
            backup = tango;
            foxtrot = report;
            entity = sizing[mike](kilo, backup, foxtrot, romeo, yankee, offset);
            return entity;
 242:
            entity = 'No logs';
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();