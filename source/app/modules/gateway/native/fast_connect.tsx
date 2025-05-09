// app/modules/gateway/native/fast_connect.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    tangon = function() { // Original name: createFastConnectSocket
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = global;
            entity = entity.window;
            michal = entity.WebSocket;
            entity = null;
            if(!(entity == michal)) { _fun00002_ip = 45; continue _fun00001 }
 20:
            zuuluu = _closure1_slot7;
            michal = zuuluu.log;
            entity = 'Skipping fast_connect because `window.WebSocket` does not exist.';
            entity = michal.bind(zuuluu)(entity);
            _fun00002_ip = 58; continue _fun00001;
 45:
            michal = function() { // Original name: newWebSocket
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot0;
                    entity = _closure1_slot3;
                    yankee = 4;
                    michal = entity[yankee];
                    entity = undefined;
                    tangon = tangon.bind(entity)(michal);
                    michal = tangon.isAndroid;
                    michal = michal.bind(tangon)();
                    if(michal) { _fun00004_ip = 57; continue _fun00003 }
 39:
                    michal = _closure1_slot4;
                    michal = michal.DCDCompressionManager;
                    option = michal.supportsZstd;
                    _fun00004_ip = 93; continue _fun00003;
 57:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot3;
                    michal = 10;
                    michal = oscard[michal];
                    tangon = tangon.bind(entity)(michal);
                    michal = tangon.getConstants;
                    michal = michal.bind(tangon)();
                    option = michal.supportsZstd;
 93:
                    foxtra = 'zlib-stream';
                    if(!option) { _fun00004_ip = 108; continue _fun00003 }
 102:
                    foxtra = 'zstd-stream';
 108:
                    tangon = global;
                    michal = tangon.window;
                    michal = michal.GLOBAL_ENV;
                    result = michal.GATEWAY_ENDPOINT;
                    michal = tangon.window;
                    michal = michal.GLOBAL_ENV;
                    sizing = michal.API_VERSION;
                    michal = tangon.HermesInternal;
                    verify = michal.concat;
                    echoed = '';
                    output = '/?encoding=json&v=';
                    kiloes = '&compress=';
                    backup = foxtra;
                    golfie = echoed[verify](result, output, sizing, kiloes, backup, foxtra);
                    verify = _closure1_slot7;
                    oscard = verify.log;
                    michal = '[FAST CONNECT] ';
                    michal = michal + golfie;
                    michal = oscard.bind(verify)(michal);
                    oscard = tangon.Date;
                    michal = oscard.now;
                    michal = michal.bind(oscard)();
                    var _closure3_slot0 = michal;
                    oscard = _closure1_slot1;
                    verify = _closure1_slot3;
                    michal = 11;
                    michal = verify[michal];
                    michal = oscard.bind(entity)(michal);
                    michal = michal.bind(entity)(golfie);
                    verify = tangon.parseFloat;
                    oscard = michal._socketId;
                    verify = verify.bind(entity)(oscard);
                    oscard = tangon.isNaN;
                    oscard = oscard.bind(entity)(verify);
                    if(oscard) { _fun00004_ip = 566; continue _fun00003 }
 282:
                    offset = _closure1_slot0;
                    oscard = _closure1_slot3;
                    oscard = oscard[yankee];
                    offset = offset.bind(entity)(oscard);
                    oscard = offset.isAndroid;
                    oscard = oscard.bind(offset)();
                    if(option) { _fun00004_ip = 370; continue _fun00003 }
 311:
                    if(oscard) { _fun00004_ip = 337; continue _fun00003 }
 314:
                    option = _closure1_slot4;
                    offset = option.DCDCompressionManager;
                    option = offset.enableZlibStreamSupport;
                    option = option.bind(offset)(verify);
                    _fun00004_ip = 430; continue _fun00003;
 337:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot3;
                    option = 10;
                    option = yankee[option];
                    offset = offset.bind(entity)(option);
                    option = offset.enableZlibStreamSupport;
                    option = option.bind(offset)(verify);
                    _fun00004_ip = 430; continue _fun00003;
 370:
                    if(oscard) { _fun00004_ip = 399; continue _fun00003 }
 373:
                    oscard = _closure1_slot4;
                    offset = oscard.DCDCompressionManager;
                    option = offset.enableZstdStreamSupport;
                    oscard = 0;
                    oscard = option.bind(offset)(verify, oscard);
                    _fun00004_ip = 430; continue _fun00003;
 399:
                    option = _closure1_slot1;
                    offset = _closure1_slot3;
                    oscard = 10;
                    oscard = offset[oscard];
                    option = option.bind(entity)(oscard);
                    oscard = option.enableZstdStreamSupport;
                    oscard = oscard.bind(option)(verify);
 430:
                    oscard = {'open': false, 'gateway': null, 'identify': false, 'messages': null, 'clientState': null};
                    oscard['gateway'] = golfie;
                    golfie = new Array(0);
                    oscard['messages'] = golfie;
                    var _closure3_slot1 = oscard;
                    golfie = function() {
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        entity = 12;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        oscard = tangon.bind(entity)(zuuluu);
                        report = oscard.mark;
                        tangon = '🌐';
                        zuuluu = 'Fastconnect socket opened';
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
                        report = _closure1_slot7;
                        tangon = report.log;
                        zuuluu = global;
                        oscard = zuuluu.Date;
                        michal = oscard.now;
                        golfie = michal.bind(oscard)();
                        oscard = _closure3_slot0;
                        verify = golfie - oscard;
                        oscard = _closure3_slot1;
                        option = oscard.identify;
                        zuuluu = zuuluu.HermesInternal;
                        golfie = zuuluu.concat;
                        oscard = 'connected and identified in ';
                        zuuluu = 'ms didIdentify:';
                        zuuluu = golfie.bind(oscard)(verify, zuuluu, option);
                        zuuluu = tangon.bind(report)(zuuluu);
                        zuuluu = _closure3_slot1;
                        michal = true;
                        zuuluu['open'] = michal;
                        return entity;
                    };
                    michal['onopen'] = golfie;
                    golfie = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 12;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.mark;
                        zuuluu = '🌐';
                        michal = 'Fastconnect socket close';
                        michal = tangon.bind(report)(zuuluu, michal);
                        michal = global;
                        zuuluu = michal.window;
                        michal = null;
                        zuuluu['_ws'] = michal;
                        return entity;
                    };
                    michal['onerror'] = golfie;
                    michal['onclose'] = golfie;
                    report = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 12;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.mark;
                        zuuluu = '🌐';
                        michal = 'Fastconnect socket message';
                        michal = tangon.bind(report)(zuuluu, michal);
                        michal = _closure3_slot1;
                        tangon = michal.messages;
                        zuuluu = tangon.push;
                        michal = argFoo;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal['onmessage'] = report;
                    report = tangon.window;
                    tangon = {};
                    tangon['ws'] = michal;
                    tangon['state'] = oscard;
                    report['_ws'] = tangon;
                    report = _closure1_slot1;
                    oscard = _closure1_slot3;
                    tangon = 12;
                    tangon = oscard[tangon];
                    golfie = report.bind(entity)(tangon);
                    oscard = golfie.mark;
                    report = '🌐';
                    tangon = 'Fastconnect socket created';
                    tangon = oscard.bind(golfie)(report, tangon);
                    _fun00004_ip = 593; continue _fun00003;
 566:
                    report = _closure1_slot7;
                    tangon = report.log;
                    zuuluu = michal._socketId;
                    michal = '[FAST CONNECT] Unable to create socketId from NaN value ';
                    michal = tangon.bind(report)(michal, zuuluu);
 593:
                    return entity;
                }
            };
            entity = undefined;
            entity = michal.bind(entity)();
 58:
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.NativeModules;
    var _closure1_slot4 = option;
    option = report.Platform;
    report = report.AppState;
    var _closure1_slot5 = report;
    option = 2;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
    var _closure1_slot6 = option;
    option = 3;
    option = golfie[option];
    offset = verify.bind(entity)(option);
    option = offset.prototype;
    verify = Object.create(option, {constructor: {value: offset}});
    foxtra = 'FAST CONNECT';
    backup = verify;
    option = new backup[offset](foxtra, romeon);
    offset = option instanceof Object ? option : verify;
    var _closure1_slot7 = offset;
    verify = offset.info;
    option = report.currentState;
    report = 'initial app state (import time)';
    report = verify.bind(offset)(report, option);
    report = tangon.bind(entity)();
    report = 14;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/gateway/native/fast_connect.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['createFastConnectSocket'] = tangon;
    tangon = function() { // Original name: closeFastConnectSocket
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = global;
            michal = entity.window;
            zuuluu = michal._ws;
            michal = null;
            if(!(michal != zuuluu)) { _fun00006_ip = 60; continue _fun00005 }
 20:
            zuuluu = entity.window;
            zuuluu = zuuluu._ws;
            tangon = zuuluu.ws;
            zuuluu = tangon.close;
            zuuluu = zuuluu.bind(tangon)();
            entity = entity.window;
            entity['_ws'] = michal;
 60:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['closeFastConnectSocket'] = tangon;
    michal = function() { // Original name: identifyWebSocket
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = global;
            entity = entity.window;
            michal = entity._ws;
            entity = null;
            if(!(entity == michal)) { _fun00008_ip = 45; continue _fun00007 }
 20:
            zuuluu = _closure1_slot7;
            michal = zuuluu.log;
            entity = 'Skipping identifyWebSocket because socket is null';
            entity = michal.bind(zuuluu)(entity);
            _fun00008_ip = 94; continue _fun00007;
 45:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 13;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.beginFastConnect;
            michal = zuuluu.measure;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    tangon = michal.loadFastConnectNativeModule;
                    zuuluu = tangon.measure;
                    michal = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zuuluu = _closure1_slot0;
                            tangon = _closure1_slot3;
                            entity = 4;
                            entity = tangon[entity];
                            tangon = undefined;
                            zuuluu = zuuluu.bind(tangon)(entity);
                            entity = zuuluu.isAndroid;
                            entity = entity.bind(zuuluu)();
                            if(entity) { _fun00012_ip = 55; continue _fun00011 }
 37:
                            entity = _closure1_slot4;
                            entity = entity.DCDFastConnectManager;
                            entity = entity.token;
                            _fun00012_ip = 106; continue _fun00011;
 55:
                            zuuluu = _closure1_slot1;
                            report = _closure1_slot3;
                            michal = 5;
                            michal = report[michal];
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = zuuluu.getConstants;
                            michal = michal.bind(zuuluu)();
                            zuuluu = michal.token;
                            michal = null;
                            tangon = michal != zuuluu;
                            if(!tangon) { _fun00012_ip = 103; continue _fun00011 }
 100:
                            michal = zuuluu;
 103:
                            entity = michal;
 106:
                            return entity;
                        }
                    };
                    tangon = zuuluu.bind(tangon)(michal);
                    offset = null;
                    if(!(offset != tangon)) { _fun00010_ip = 63; continue _fun00009 }
 55:
                    michal = '';
                    if(!(michal === tangon)) { _fun00010_ip = 88; continue _fun00009 }
 63:
                    report = _closure1_slot7;
                    zuuluu = report.log;
                    michal = 'Skipping fast_connect because we could not find a token to connect with.';
                    michal = zuuluu.bind(report)(michal);
                    _fun00010_ip = 771; continue _fun00009;
 88:
                    report = global;
                    michal = report.window;
                    zuuluu = michal._ws;
                    michal = zuuluu.ws;
                    zuuluu = zuuluu.state;
                    oscard = michal._socketId;
                    golfie = _closure1_slot0;
                    michal = _closure1_slot3;
                    foxtra = 4;
                    michal = michal[foxtra];
                    golfie = golfie.bind(entity)(michal);
                    michal = golfie.isAndroid;
                    michal = michal.bind(golfie)();
                    if(michal) { _fun00010_ip = 168; continue _fun00009 }
 151:
                    michal = _closure1_slot4;
                    michal = michal.DCDFastConnectManager;
                    michal = michal.userId;
                    _fun00010_ip = 203; continue _fun00009;
 168:
                    option = _closure1_slot1;
                    verify = _closure1_slot3;
                    golfie = 5;
                    golfie = verify[golfie];
                    option = option.bind(entity)(golfie);
                    golfie = option.getConstants;
                    golfie = golfie.bind(option)();
                    michal = golfie.userId;
 203:
                    golfie = offset != michal;
                    romeon = null;
                    if(!golfie) { _fun00010_ip = 215; continue _fun00009 }
 212:
                    romeon = michal;
 215:
                    verify = _closure1_slot7;
                    option = verify.info;
                    michal = _closure1_slot5;
                    golfie = michal.currentState;
                    michal = 'prepareIdentify: app state: ';
                    michal = option.bind(verify)(michal, golfie);
                    golfie = _closure1_slot1;
                    michal = _closure1_slot3;
                    verify = 6;
                    michal = michal[verify];
                    golfie = golfie.bind(entity)(michal);
                    michal = golfie.getLatestTaskRunOn;
                    golfie = michal.bind(golfie)();
                    michal = offset != golfie;
                    sizing = null;
                    if(!michal) { _fun00010_ip = 315; continue _fun00009 }
 286:
                    option = report.Date;
                    michal = option.now;
                    michal = michal.bind(option)();
                    golfie = michal - golfie;
                    michal = 1000;
                    sizing = golfie / michal;
 315:
                    michal = {};
                    michal['token'] = tangon;
                    option = {};
                    backup = _closure1_slot2;
                    golfie = _closure1_slot3;
                    tangon = 7;
                    tangon = golfie[tangon];
                    backup = backup.bind(entity)(tangon);
                    tangon = backup.getSuperProperties;
                    update = tangon.bind(backup)();
                    source = option;
                    tangon = copyDataProperties(source, update);
                    tangon = _closure1_slot5;
                    backup = tangon.currentState;
                    tangon = 'client_app_state';
                    option[tangon] = backup;
                    tangon = true;
                    backup = 'is_fast_connect';
                    option[backup] = tangon;
                    backup = _closure1_slot1;
                    kiloes = golfie[verify];
                    output = backup.bind(entity)(kiloes);
                    kiloes = output.getHeadlessTasks;
                    output = kiloes.bind(output)();
                    kiloes = 'latest_headless_tasks';
                    option[kiloes] = output;
                    kiloes = 'latest_headless_task_run_on';
                    option[kiloes] = sizing;
                    michal['properties'] = option;
                    option = _closure1_slot0;
                    kiloes = 8;
                    kiloes = golfie[kiloes];
                    sizing = option.bind(entity)(kiloes);
                    kiloes = sizing.getClientCapabilities;
                    kiloes = kiloes.bind(sizing)();
                    michal['capabilities'] = kiloes;
                    kiloes = {};
                    sizing = {};
                    kiloes['guild_versions'] = sizing;
                    michal['client_state'] = kiloes;
                    verify = golfie[verify];
                    backup = backup.bind(entity)(verify);
                    verify = backup.clear;
                    verify = verify.bind(backup)();
                    kiloes = report.JSON;
                    backup = kiloes.stringify;
                    verify = {};
                    sizing = 2;
                    verify['op'] = sizing;
                    verify['d'] = michal;
                    verify = backup.bind(kiloes)(verify);
                    golfie = golfie[foxtra];
                    option = option.bind(entity)(golfie);
                    golfie = option.isAndroid;
                    golfie = golfie.bind(option)();
                    if(golfie) { _fun00010_ip = 632; continue _fun00009 }
 556:
                    golfie = _closure1_slot4;
                    foxtra = golfie.DCDFastConnectManager;
                    option = foxtra.prepareIdentify;
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot3;
                    golfie = 9;
                    golfie = kiloes[golfie];
                    backup = backup.bind(entity)(golfie);
                    golfie = backup.isCacheEnabled;
                    backup = golfie.bind(backup)();
                    golfie = null;
                    if(!backup) { _fun00010_ip = 611; continue _fun00009 }
 607:
                    golfie = _closure1_slot6;
 611:
                    ctrled = foxtra;
                    source = romeon;
                    update = verify;
                    echoed = oscard;
                    result = golfie;
                    golfie = ctrled[option](source, update, echoed, result, output);
                    _fun00010_ip = 753; continue _fun00009;
 632:
                    option = offset == romeon;
                    golfie = undefined;
                    if(option) { _fun00010_ip = 650; continue _fun00009 }
 641:
                    option = romeon.toString;
                    golfie = option.bind(romeon)();
 650:
                    option = offset != golfie;
                    offset = null;
                    if(!option) { _fun00010_ip = 662; continue _fun00009 }
 659:
                    offset = golfie;
 662:
                    option = _closure1_slot1;
                    foxtra = _closure1_slot3;
                    golfie = 5;
                    golfie = foxtra[golfie];
                    option = option.bind(entity)(golfie);
                    golfie = option.prepareIdentify;
                    report = report.parseFloat;
                    oscard = report.bind(entity)(oscard);
                    romeon = _closure1_slot0;
                    report = 9;
                    report = foxtra[report];
                    romeon = romeon.bind(entity)(report);
                    report = romeon.isCacheEnabled;
                    romeon = report.bind(romeon)();
                    report = undefined;
                    if(!romeon) { _fun00010_ip = 734; continue _fun00009 }
 730:
                    report = _closure1_slot6;
 734:
                    ctrled = option;
                    source = offset;
                    update = verify;
                    echoed = oscard;
                    result = report;
                    report = ctrled[golfie](source, update, echoed, result, output);
 753:
                    michal = michal.client_state;
                    zuuluu['identify'] = tangon;
                    zuuluu['clientState'] = michal;
 771:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
 94:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['identifyWebSocket'] = michal;
    return entity;
})();