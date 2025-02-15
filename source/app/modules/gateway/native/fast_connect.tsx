// app/modules/gateway/native/fast_connect.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    tango = function() { // Original name: createFastConnectSocket
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = global;
            entity = entity.window;
            mike = entity.WebSocket;
            entity = null;
            if(!(entity == mike)) { _fun00002_ip = 46; continue _fun00001 }
 20:
            zulu = _closure1_slot6;
            mike = zulu.log;
            entity = 'Skipping fast_connect because `window.WebSocket` does not exist.';
            entity = mike.bind(zulu)(entity);
            _fun00002_ip = 59; continue _fun00001;
 46:
            mike = function() { // Original name: newWebSocket
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tango = _closure1_slot0;
                    entity = _closure1_slot3;
                    yankee = 4;
                    mike = entity[yankee];
                    entity = undefined;
                    tango = tango.bind(entity)(mike);
                    mike = tango.isAndroid;
                    mike = mike.bind(tango)();
                    if(mike) { _fun00004_ip = 57; continue _fun00003 }
 39:
                    mike = _closure1_slot4;
                    mike = mike.DCDCompressionManager;
                    options = mike.supportsZstd;
                    _fun00004_ip = 93; continue _fun00003;
 57:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot3;
                    mike = 9;
                    mike = oscar[mike];
                    tango = tango.bind(entity)(mike);
                    mike = tango.getConstants;
                    mike = mike.bind(tango)();
                    options = mike.supportsZstd;
 93:
                    foxtrot = 'zlib-stream';
                    if(!options) { _fun00004_ip = 108; continue _fun00003 }
 102:
                    foxtrot = 'zstd-stream';
 108:
                    tango = global;
                    mike = tango.window;
                    mike = mike.GLOBAL_ENV;
                    result = mike.GATEWAY_ENDPOINT;
                    mike = tango.window;
                    mike = mike.GLOBAL_ENV;
                    sizing = mike.API_VERSION;
                    mike = tango.HermesInternal;
                    verify = mike.concat;
                    echo = '';
                    output = '/?encoding=json&v=';
                    kilo = '&compress=';
                    backup = foxtrot;
                    golf = echo[verify](result, output, sizing, kilo, backup, foxtrot);
                    verify = _closure1_slot6;
                    oscar = verify.log;
                    mike = '[FAST CONNECT] ';
                    mike = mike + golf;
                    mike = oscar.bind(verify)(mike);
                    oscar = tango.Date;
                    mike = oscar.now;
                    mike = mike.bind(oscar)();
                    var _closure3_slot0 = mike;
                    oscar = _closure1_slot1;
                    verify = _closure1_slot3;
                    mike = 10;
                    mike = verify[mike];
                    mike = oscar.bind(entity)(mike);
                    mike = mike.bind(entity)(golf);
                    verify = tango.parseFloat;
                    oscar = mike._socketId;
                    verify = verify.bind(entity)(oscar);
                    oscar = tango.isNaN;
                    oscar = oscar.bind(entity)(verify);
                    if(oscar) { _fun00004_ip = 569; continue _fun00003 }
 283:
                    offset = _closure1_slot0;
                    oscar = _closure1_slot3;
                    oscar = oscar[yankee];
                    offset = offset.bind(entity)(oscar);
                    oscar = offset.isAndroid;
                    oscar = oscar.bind(offset)();
                    if(options) { _fun00004_ip = 371; continue _fun00003 }
 312:
                    if(oscar) { _fun00004_ip = 338; continue _fun00003 }
 315:
                    options = _closure1_slot4;
                    offset = options.DCDCompressionManager;
                    options = offset.enableZlibStreamSupport;
                    options = options.bind(offset)(verify);
                    _fun00004_ip = 431; continue _fun00003;
 338:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot3;
                    options = 9;
                    options = yankee[options];
                    offset = offset.bind(entity)(options);
                    options = offset.enableZlibStreamSupport;
                    options = options.bind(offset)(verify);
                    _fun00004_ip = 431; continue _fun00003;
 371:
                    if(oscar) { _fun00004_ip = 400; continue _fun00003 }
 374:
                    oscar = _closure1_slot4;
                    offset = oscar.DCDCompressionManager;
                    options = offset.enableZstdStreamSupport;
                    oscar = 0;
                    oscar = options.bind(offset)(verify, oscar);
                    _fun00004_ip = 431; continue _fun00003;
 400:
                    options = _closure1_slot1;
                    offset = _closure1_slot3;
                    oscar = 9;
                    oscar = offset[oscar];
                    options = options.bind(entity)(oscar);
                    oscar = options.enableZstdStreamSupport;
                    oscar = oscar.bind(options)(verify);
 431:
                    oscar = {'open': false, 'gateway': null, 'identify': false, 'messages': null, 'clientState': null};
                    oscar['gateway'] = golf;
                    golf = new Array(0);
                    oscar['messages'] = golf;
                    var _closure3_slot1 = oscar;
                    golf = function() {
                        tango = _closure1_slot1;
                        zulu = _closure1_slot3;
                        entity = 11;
                        zulu = zulu[entity];
                        entity = undefined;
                        oscar = tango.bind(entity)(zulu);
                        report = oscar.mark;
                        tango = '🌐';
                        zulu = 'Fastconnect socket opened';
                        zulu = report.bind(oscar)(tango, zulu);
                        report = _closure1_slot6;
                        tango = report.log;
                        zulu = global;
                        oscar = zulu.Date;
                        mike = oscar.now;
                        golf = mike.bind(oscar)();
                        oscar = _closure3_slot0;
                        verify = golf - oscar;
                        oscar = _closure3_slot1;
                        options = oscar.identify;
                        zulu = zulu.HermesInternal;
                        golf = zulu.concat;
                        oscar = 'connected and identified in ';
                        zulu = 'ms didIdentify:';
                        zulu = golf.bind(oscar)(verify, zulu, options);
                        zulu = tango.bind(report)(zulu);
                        zulu = _closure3_slot1;
                        mike = true;
                        zulu['open'] = mike;
                        return entity;
                    };
                    mike['onopen'] = golf;
                    golf = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        entity = 11;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.mark;
                        zulu = '🌐';
                        mike = 'Fastconnect socket close';
                        mike = tango.bind(report)(zulu, mike);
                        mike = global;
                        zulu = mike.window;
                        mike = null;
                        zulu['_ws'] = mike;
                        return entity;
                    };
                    mike['onerror'] = golf;
                    mike['onclose'] = golf;
                    report = function(argFoo) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        entity = 11;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.mark;
                        zulu = '🌐';
                        mike = 'Fastconnect socket message';
                        mike = tango.bind(report)(zulu, mike);
                        mike = _closure3_slot1;
                        tango = mike.messages;
                        zulu = tango.push;
                        mike = argFoo;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike['onmessage'] = report;
                    report = tango.window;
                    tango = {};
                    tango['ws'] = mike;
                    tango['state'] = oscar;
                    report['_ws'] = tango;
                    report = _closure1_slot1;
                    oscar = _closure1_slot3;
                    tango = 11;
                    tango = oscar[tango];
                    golf = report.bind(entity)(tango);
                    oscar = golf.mark;
                    report = '🌐';
                    tango = 'Fastconnect socket created';
                    tango = oscar.bind(golf)(report, tango);
                    _fun00004_ip = 597; continue _fun00003;
 569:
                    report = _closure1_slot6;
                    tango = report.log;
                    zulu = mike._socketId;
                    mike = '[FAST CONNECT] Unable to create socketId from NaN value ';
                    mike = tango.bind(report)(mike, zulu);
 597:
                    return entity;
                }
            };
            entity = undefined;
            entity = mike.bind(entity)();
 59:
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    verify = report.NativeModules;
    var _closure1_slot4 = verify;
    report = report.Platform;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    verify = options.bind(entity)(report);
    report = verify.prototype;
    options = Object.create(report, {constructor: {value: verify}});
    foxtrot = 'FAST CONNECT';
    backup = options;
    report = new backup[verify](foxtrot, romeo);
    report = report instanceof Object ? report : options;
    var _closure1_slot6 = report;
    report = tango.bind(entity)();
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/gateway/native/fast_connect.tsx';
    report = oscar.bind(golf)(report);
    zulu['createFastConnectSocket'] = tango;
    tango = function() { // Original name: closeFastConnectSocket
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = global;
            mike = entity.window;
            zulu = mike._ws;
            mike = null;
            if(!(mike != zulu)) { _fun00006_ip = 60; continue _fun00005 }
 20:
            zulu = entity.window;
            zulu = zulu._ws;
            tango = zulu.ws;
            zulu = tango.close;
            zulu = zulu.bind(tango)();
            entity = entity.window;
            entity['_ws'] = mike;
 60:
            entity = undefined;
            return entity;
        }
    };
    zulu['closeFastConnectSocket'] = tango;
    mike = function() { // Original name: identifyWebSocket
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = global;
            entity = entity.window;
            mike = entity._ws;
            entity = null;
            if(!(entity == mike)) { _fun00008_ip = 46; continue _fun00007 }
 20:
            zulu = _closure1_slot6;
            mike = zulu.log;
            entity = 'Skipping identifyWebSocket because socket is null';
            entity = mike.bind(zulu)(entity);
            _fun00008_ip = 95; continue _fun00007;
 46:
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.beginFastConnect;
            mike = zulu.measure;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    tango = mike.loadFastConnectNativeModule;
                    zulu = tango.measure;
                    mike = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zulu = _closure1_slot0;
                            tango = _closure1_slot3;
                            entity = 4;
                            entity = tango[entity];
                            tango = undefined;
                            zulu = zulu.bind(tango)(entity);
                            entity = zulu.isAndroid;
                            entity = entity.bind(zulu)();
                            if(entity) { _fun00012_ip = 55; continue _fun00011 }
 37:
                            entity = _closure1_slot4;
                            entity = entity.DCDFastConnectManager;
                            entity = entity.token;
                            _fun00012_ip = 106; continue _fun00011;
 55:
                            zulu = _closure1_slot1;
                            report = _closure1_slot3;
                            mike = 5;
                            mike = report[mike];
                            zulu = zulu.bind(tango)(mike);
                            mike = zulu.getConstants;
                            mike = mike.bind(zulu)();
                            zulu = mike.token;
                            mike = null;
                            tango = mike != zulu;
                            if(!tango) { _fun00012_ip = 103; continue _fun00011 }
 100:
                            mike = zulu;
 103:
                            entity = mike;
 106:
                            return entity;
                        }
                    };
                    oscar = zulu.bind(tango)(mike);
                    verify = null;
                    if(!(verify != oscar)) { _fun00010_ip = 63; continue _fun00009 }
 55:
                    mike = '';
                    if(!(mike === oscar)) { _fun00010_ip = 89; continue _fun00009 }
 63:
                    tango = _closure1_slot6;
                    zulu = tango.log;
                    mike = 'Skipping fast_connect because we could not find a token to connect with.';
                    mike = zulu.bind(tango)(mike);
                    _fun00010_ip = 571; continue _fun00009;
 89:
                    tango = global;
                    mike = tango.window;
                    zulu = mike._ws;
                    mike = zulu.ws;
                    zulu = zulu.state;
                    report = mike._socketId;
                    golf = _closure1_slot0;
                    mike = _closure1_slot3;
                    romeo = 4;
                    mike = mike[romeo];
                    golf = golf.bind(entity)(mike);
                    mike = golf.isAndroid;
                    mike = mike.bind(golf)();
                    if(mike) { _fun00010_ip = 169; continue _fun00009 }
 152:
                    mike = _closure1_slot4;
                    mike = mike.DCDFastConnectManager;
                    mike = mike.userId;
                    _fun00010_ip = 204; continue _fun00009;
 169:
                    options = _closure1_slot1;
                    yankee = _closure1_slot3;
                    golf = 5;
                    golf = yankee[golf];
                    options = options.bind(entity)(golf);
                    golf = options.getConstants;
                    golf = golf.bind(options)();
                    mike = golf.userId;
 204:
                    golf = verify != mike;
                    yankee = null;
                    if(!golf) { _fun00010_ip = 216; continue _fun00009 }
 213:
                    yankee = mike;
 216:
                    mike = {};
                    mike['token'] = oscar;
                    options = _closure1_slot2;
                    oscar = _closure1_slot3;
                    golf = 6;
                    golf = oscar[golf];
                    options = options.bind(entity)(golf);
                    golf = options.getSuperProperties;
                    golf = golf.bind(options)();
                    mike['properties'] = golf;
                    golf = _closure1_slot0;
                    options = 7;
                    options = oscar[options];
                    foxtrot = golf.bind(entity)(options);
                    options = foxtrot.getClientCapabilities;
                    options = options.bind(foxtrot)();
                    mike['capabilities'] = options;
                    options = {};
                    foxtrot = {};
                    options['guild_versions'] = foxtrot;
                    mike['client_state'] = options;
                    backup = tango.JSON;
                    foxtrot = backup.stringify;
                    options = {};
                    kilo = 2;
                    options['op'] = kilo;
                    options['d'] = mike;
                    options = foxtrot.bind(backup)(options);
                    oscar = oscar[romeo];
                    golf = golf.bind(entity)(oscar);
                    oscar = golf.isAndroid;
                    oscar = oscar.bind(golf)();
                    if(oscar) { _fun00010_ip = 430; continue _fun00009 }
 354:
                    oscar = _closure1_slot4;
                    romeo = oscar.DCDFastConnectManager;
                    golf = romeo.prepareIdentify;
                    foxtrot = _closure1_slot0;
                    backup = _closure1_slot3;
                    oscar = 8;
                    oscar = backup[oscar];
                    foxtrot = foxtrot.bind(entity)(oscar);
                    oscar = foxtrot.isCacheEnabled;
                    foxtrot = oscar.bind(foxtrot)();
                    oscar = null;
                    if(!foxtrot) { _fun00010_ip = 409; continue _fun00009 }
 405:
                    oscar = _closure1_slot5;
 409:
                    update = romeo;
                    echo = yankee;
                    result = options;
                    output = report;
                    sizing = oscar;
                    oscar = update[golf](echo, result, output, sizing, kilo);
                    _fun00010_ip = 551; continue _fun00009;
 430:
                    golf = verify == yankee;
                    oscar = undefined;
                    if(golf) { _fun00010_ip = 448; continue _fun00009 }
 439:
                    golf = yankee.toString;
                    oscar = golf.bind(yankee)();
 448:
                    golf = verify != oscar;
                    verify = null;
                    if(!golf) { _fun00010_ip = 460; continue _fun00009 }
 457:
                    verify = oscar;
 460:
                    golf = _closure1_slot1;
                    romeo = _closure1_slot3;
                    oscar = 5;
                    oscar = romeo[oscar];
                    golf = golf.bind(entity)(oscar);
                    oscar = golf.prepareIdentify;
                    tango = tango.parseFloat;
                    report = tango.bind(entity)(report);
                    yankee = _closure1_slot0;
                    tango = 8;
                    tango = romeo[tango];
                    yankee = yankee.bind(entity)(tango);
                    tango = yankee.isCacheEnabled;
                    yankee = tango.bind(yankee)();
                    tango = undefined;
                    if(!yankee) { _fun00010_ip = 532; continue _fun00009 }
 528:
                    tango = _closure1_slot5;
 532:
                    update = golf;
                    echo = verify;
                    result = options;
                    output = report;
                    sizing = tango;
                    tango = update[oscar](echo, result, output, sizing, kilo);
 551:
                    mike = mike.client_state;
                    tango = true;
                    zulu['identify'] = tango;
                    zulu['clientState'] = mike;
 571:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
 95:
            entity = undefined;
            return entity;
        }
    };
    zulu['identifyWebSocket'] = mike;
    return entity;
})();