// app/modules/gateway/native/fast_connect.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
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
            if(!(entity == michal)) { _fun00002_ip = 46; continue _fun00001 }
 20:
            zuuluu = _closure1_slot6;
            michal = zuuluu.log;
            entity = 'Skipping fast_connect because `window.WebSocket` does not exist.';
            entity = michal.bind(zuuluu)(entity);
            _fun00002_ip = 59; continue _fun00001;
 46:
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
                    michal = 9;
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
                    verify = _closure1_slot6;
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
                    michal = 10;
                    michal = verify[michal];
                    michal = oscard.bind(entity)(michal);
                    michal = michal.bind(entity)(golfie);
                    verify = tangon.parseFloat;
                    oscard = michal._socketId;
                    verify = verify.bind(entity)(oscard);
                    oscard = tangon.isNaN;
                    oscard = oscard.bind(entity)(verify);
                    if(oscard) { _fun00004_ip = 569; continue _fun00003 }
 283:
                    offset = _closure1_slot0;
                    oscard = _closure1_slot3;
                    oscard = oscard[yankee];
                    offset = offset.bind(entity)(oscard);
                    oscard = offset.isAndroid;
                    oscard = oscard.bind(offset)();
                    if(option) { _fun00004_ip = 371; continue _fun00003 }
 312:
                    if(oscard) { _fun00004_ip = 338; continue _fun00003 }
 315:
                    option = _closure1_slot4;
                    offset = option.DCDCompressionManager;
                    option = offset.enableZlibStreamSupport;
                    option = option.bind(offset)(verify);
                    _fun00004_ip = 431; continue _fun00003;
 338:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot3;
                    option = 9;
                    option = yankee[option];
                    offset = offset.bind(entity)(option);
                    option = offset.enableZlibStreamSupport;
                    option = option.bind(offset)(verify);
                    _fun00004_ip = 431; continue _fun00003;
 371:
                    if(oscard) { _fun00004_ip = 400; continue _fun00003 }
 374:
                    oscard = _closure1_slot4;
                    offset = oscard.DCDCompressionManager;
                    option = offset.enableZstdStreamSupport;
                    oscard = 0;
                    oscard = option.bind(offset)(verify, oscard);
                    _fun00004_ip = 431; continue _fun00003;
 400:
                    option = _closure1_slot1;
                    offset = _closure1_slot3;
                    oscard = 9;
                    oscard = offset[oscard];
                    option = option.bind(entity)(oscard);
                    oscard = option.enableZstdStreamSupport;
                    oscard = oscard.bind(option)(verify);
 431:
                    oscard = {'open': false, 'gateway': null, 'identify': false, 'messages': null, 'clientState': null};
                    oscard['gateway'] = golfie;
                    golfie = new Array(0);
                    oscard['messages'] = golfie;
                    var _closure3_slot1 = oscard;
                    golfie = function() {
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        entity = 11;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        oscard = tangon.bind(entity)(zuuluu);
                        report = oscard.mark;
                        tangon = '🌐';
                        zuuluu = 'Fastconnect socket opened';
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
                        report = _closure1_slot6;
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
                        entity = 11;
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
                        entity = 11;
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
                    tangon = 11;
                    tangon = oscard[tangon];
                    golfie = report.bind(entity)(tangon);
                    oscard = golfie.mark;
                    report = '🌐';
                    tangon = 'Fastconnect socket created';
                    tangon = oscard.bind(golfie)(report, tangon);
                    _fun00004_ip = 597; continue _fun00003;
 569:
                    report = _closure1_slot6;
                    tangon = report.log;
                    zuuluu = michal._socketId;
                    michal = '[FAST CONNECT] Unable to create socketId from NaN value ';
                    michal = tangon.bind(report)(michal, zuuluu);
 597:
                    return entity;
                }
            };
            entity = undefined;
            entity = michal.bind(entity)();
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
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    verify = report.NativeModules;
    var _closure1_slot4 = verify;
    report = report.Platform;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    verify = option.bind(entity)(report);
    report = verify.prototype;
    option = Object.create(report, {constructor: {value: verify}});
    foxtra = 'FAST CONNECT';
    backup = option;
    report = new backup[verify](foxtra, romeon);
    report = report instanceof Object ? report : option;
    var _closure1_slot6 = report;
    report = tangon.bind(entity)();
    report = 13;
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
            if(!(entity == michal)) { _fun00008_ip = 46; continue _fun00007 }
 20:
            zuuluu = _closure1_slot6;
            michal = zuuluu.log;
            entity = 'Skipping identifyWebSocket because socket is null';
            entity = michal.bind(zuuluu)(entity);
            _fun00008_ip = 95; continue _fun00007;
 46:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 12;
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
                    entity = 12;
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
                    oscard = zuuluu.bind(tangon)(michal);
                    verify = null;
                    if(!(verify != oscard)) { _fun00010_ip = 63; continue _fun00009 }
 55:
                    michal = '';
                    if(!(michal === oscard)) { _fun00010_ip = 89; continue _fun00009 }
 63:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.log;
                    michal = 'Skipping fast_connect because we could not find a token to connect with.';
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00010_ip = 571; continue _fun00009;
 89:
                    tangon = global;
                    michal = tangon.window;
                    zuuluu = michal._ws;
                    michal = zuuluu.ws;
                    zuuluu = zuuluu.state;
                    report = michal._socketId;
                    golfie = _closure1_slot0;
                    michal = _closure1_slot3;
                    romeon = 4;
                    michal = michal[romeon];
                    golfie = golfie.bind(entity)(michal);
                    michal = golfie.isAndroid;
                    michal = michal.bind(golfie)();
                    if(michal) { _fun00010_ip = 169; continue _fun00009 }
 152:
                    michal = _closure1_slot4;
                    michal = michal.DCDFastConnectManager;
                    michal = michal.userId;
                    _fun00010_ip = 204; continue _fun00009;
 169:
                    option = _closure1_slot1;
                    yankee = _closure1_slot3;
                    golfie = 5;
                    golfie = yankee[golfie];
                    option = option.bind(entity)(golfie);
                    golfie = option.getConstants;
                    golfie = golfie.bind(option)();
                    michal = golfie.userId;
 204:
                    golfie = verify != michal;
                    yankee = null;
                    if(!golfie) { _fun00010_ip = 216; continue _fun00009 }
 213:
                    yankee = michal;
 216:
                    michal = {};
                    michal['token'] = oscard;
                    option = _closure1_slot2;
                    oscard = _closure1_slot3;
                    golfie = 6;
                    golfie = oscard[golfie];
                    option = option.bind(entity)(golfie);
                    golfie = option.getSuperProperties;
                    golfie = golfie.bind(option)();
                    michal['properties'] = golfie;
                    golfie = _closure1_slot0;
                    option = 7;
                    option = oscard[option];
                    foxtra = golfie.bind(entity)(option);
                    option = foxtra.getClientCapabilities;
                    option = option.bind(foxtra)();
                    michal['capabilities'] = option;
                    option = {};
                    foxtra = {};
                    option['guild_versions'] = foxtra;
                    michal['client_state'] = option;
                    backup = tangon.JSON;
                    foxtra = backup.stringify;
                    option = {};
                    kiloes = 2;
                    option['op'] = kiloes;
                    option['d'] = michal;
                    option = foxtra.bind(backup)(option);
                    oscard = oscard[romeon];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.isAndroid;
                    oscard = oscard.bind(golfie)();
                    if(oscard) { _fun00010_ip = 430; continue _fun00009 }
 354:
                    oscard = _closure1_slot4;
                    romeon = oscard.DCDFastConnectManager;
                    golfie = romeon.prepareIdentify;
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot3;
                    oscard = 8;
                    oscard = backup[oscard];
                    foxtra = foxtra.bind(entity)(oscard);
                    oscard = foxtra.isCacheEnabled;
                    foxtra = oscard.bind(foxtra)();
                    oscard = null;
                    if(!foxtra) { _fun00010_ip = 409; continue _fun00009 }
 405:
                    oscard = _closure1_slot5;
 409:
                    update = romeon;
                    echoed = yankee;
                    result = option;
                    output = report;
                    sizing = oscard;
                    oscard = update[golfie](echoed, result, output, sizing, kiloes);
                    _fun00010_ip = 551; continue _fun00009;
 430:
                    golfie = verify == yankee;
                    oscard = undefined;
                    if(golfie) { _fun00010_ip = 448; continue _fun00009 }
 439:
                    golfie = yankee.toString;
                    oscard = golfie.bind(yankee)();
 448:
                    golfie = verify != oscard;
                    verify = null;
                    if(!golfie) { _fun00010_ip = 460; continue _fun00009 }
 457:
                    verify = oscard;
 460:
                    golfie = _closure1_slot1;
                    romeon = _closure1_slot3;
                    oscard = 5;
                    oscard = romeon[oscard];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.prepareIdentify;
                    tangon = tangon.parseFloat;
                    report = tangon.bind(entity)(report);
                    yankee = _closure1_slot0;
                    tangon = 8;
                    tangon = romeon[tangon];
                    yankee = yankee.bind(entity)(tangon);
                    tangon = yankee.isCacheEnabled;
                    yankee = tangon.bind(yankee)();
                    tangon = undefined;
                    if(!yankee) { _fun00010_ip = 532; continue _fun00009 }
 528:
                    tangon = _closure1_slot5;
 532:
                    update = golfie;
                    echoed = verify;
                    result = option;
                    output = report;
                    sizing = tangon;
                    tangon = update[oscard](echoed, result, output, sizing, kiloes);
 551:
                    michal = michal.client_state;
                    tangon = true;
                    zuuluu['identify'] = tangon;
                    zuuluu['clientState'] = michal;
 571:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
 95:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['identifyWebSocket'] = michal;
    return entity;
})();