// app/modules/gateway/GatewaySocket.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot9;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot8;
            entity = _closure1_slot21;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot9;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: noop
        entity = undefined;
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: withGatewayCompressionHandler
        tangon = argFoo;
        var _closure2_slot0 = tangon;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = 0;
        var _closure2_slot3 = michal;
        zuuluu = tangon.dataReady;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
 3: // try_start_0
                report = _closure2_slot2;
                tangon = entity;
                michal = _closure2_slot3;
                entity = undefined;
                entity = report.bind(entity)(tangon, michal);
 25: // try_end0
                michal = 0;
                _closure2_slot3 = michal;
                return entity;
 33: // catch_target0
                CatchBlockStart(arg_register=0);
                michal = 0;
                _closure2_slot3 = michal;
                throw entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        michal = false;
        var _closure2_slot4 = michal;
        entity = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                oscard = undefined;
                michal = undefined;
                michal = zuuluu.data;
                report = zuuluu.raw_length;
                tangon = null;
                if(!(tangon == report)) { _fun00008_ip = 56; continue _fun00007 }
 24:
                golfie = _closure2_slot3;
                option = _closure1_slot24;
                tangon = michal;
                tangon = option.bind(oscard)(tangon);
                tangon = golfie + tangon;
                _closure2_slot3 = tangon;
                _fun00008_ip = 77; continue _fun00007;
 56:
                report = _closure2_slot3;
                zuuluu = zuuluu.raw_length;
                zuuluu = report + zuuluu;
                _closure2_slot3 = zuuluu;
 77: // try_start_0
                tangon = _closure2_slot0;
                zuuluu = tangon.feed;
                michal = zuuluu.bind(tangon)(michal);
 95: // try_end0
                return oscard;
 97: // catch_target0
                CatchBlockStart(arg_register=0);
                zuuluu = _closure2_slot4;
                if(zuuluu) { _fun00008_ip = 136; continue _fun00007 }
 109:
                zuuluu = true;
                _closure2_slot4 = zuuluu;
                report = _closure2_slot1;
                tangon = false;
                zuuluu = 0;
                michal = 'A decompression error occurred';
                michal = report.bind(oscard)(tangon, zuuluu, michal);
 136:
                throw entity;
            }
        };
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: byteSize
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            michal = entity == zuuluu;
            entity = 0;
            if(michal) { _fun00010_ip = 41; continue _fun00009 }
 14:
            tangon = 'string';
            michal = typeof zuuluu;
            if(!(tangon !== michal)) { _fun00010_ip = 33; continue _fun00009 }
 25:
            michal = zuuluu.byteLength;
            _fun00010_ip = 38; continue _fun00009;
 33:
            michal = zuuluu.length;
 38:
            entity = michal;
 41:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    verify = 1;
    option = oscard[verify];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    yankee = 3;
    option = oscard[yankee];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 7;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 8;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.AnalyticEvents;
    var _closure1_slot12 = offset;
    option = option.Endpoints;
    var _closure1_slot13 = option;
    option = 9;
    option = oscard[option];
    romeon = golfie.bind(entity)(option);
    option = romeon.prototype;
    offset = Object.create(option, {constructor: {value: romeon}});
    kiloes = 'GatewaySocket';
    sizing = offset;
    option = new sizing[romeon](kiloes, backup);
    option = option instanceof Object ? option : offset;
    var _closure1_slot14 = option;
    option = 10;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    offset = option.prototype;
    offset = Object.create(offset, {constructor: {value: option}});
    sizing = offset;
    option = new sizing[option](kiloes);
    option = option instanceof Object ? option : offset;
    var _closure1_slot15 = option;
    option = 12;
    offset = oscard[option];
    offset = golfie.bind(entity)(offset);
    offset = offset.Millis;
    romeon = offset.SECOND;
    offset = 30;
    offset = offset * romeon;
    var _closure1_slot16 = offset;
    offset = oscard[option];
    offset = golfie.bind(entity)(offset);
    offset = offset.Millis;
    offset = offset.MINUTE;
    offset = yankee * offset;
    var _closure1_slot17 = offset;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    option = option.Millis;
    option = option.MINUTE;
    option = verify * option;
    var _closure1_slot18 = option;
    tangon = tangon.window;
    tangon = tangon.GLOBAL_ENV;
    tangon = tangon.GATEWAY_ENDPOINT;
    var _closure1_slot19 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function() { // Original name: GatewaySocket
            zuuluu = this;
            entity = _closure1_slot6;
            michal = _closure2_slot1;
            golfie = undefined;
            entity = entity.bind(golfie)(zuuluu, michal);
            entity = _closure1_slot20;
            entity = entity.bind(golfie)(zuuluu, michal);
            var _closure3_slot0 = entity;
            verify = _closure1_slot1;
            option = _closure1_slot3;
            oscard = 13;
            michal = option[oscard];
            report = verify.bind(golfie)(michal);
            foxtra = _closure1_slot18;
            zuuluu = report.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
            romeon = 1000;
            kiloes = zuuluu;
            backup = romeon;
            michal = new kiloes[report](backup, foxtra, romeon);
            michal = michal instanceof Object ? michal : zuuluu;
            entity['dispatchExceptionBackoff'] = michal;
            michal = 0;
            entity['dispatchSuccessTimer'] = michal;
            zuuluu = false;
            entity['didForceClearGuildHashes'] = zuuluu;
            entity['identifyUncompressedByteSize'] = michal;
            entity['identifyCompressedByteSize'] = michal;
            report = {};
            entity['analytics'] = report;
            entity['identifyCount'] = michal;
            report = null;
            entity['resumeUrl'] = report;
            entity['iosGoingAwayEventCount'] = michal;
            offset = function(argFoo, argBar, argBaz) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    golfie = argFoo;
                    option = argBar;
                    entity = undefined;
                    michal = undefined;
                    tangon = _closure1_slot11;
                    tangon = tangon.isLoggingGatewayEvents;
                    if(!tangon) { _fun00012_ip = 49; continue _fun00011 }
 26:
                    oscard = _closure1_slot14;
                    report = oscard.verboseDangerously;
                    tangon = '~>';
                    tangon = report.bind(oscard)(tangon, golfie, option);
 49:
                    oscard = _closure1_slot15;
                    report = oscard.pack;
                    tangon = {};
                    tangon['op'] = golfie;
                    tangon['d'] = option;
                    michal = report.bind(oscard)(tangon);
                    tangon = argBaz;
                    if(!tangon) { _fun00012_ip = 140; continue _fun00011 }
 80:
                    report = _closure3_slot0;
                    tangon = report.isSessionEstablished;
                    tangon = tangon.bind(report)();
                    if(tangon) { _fun00012_ip = 140; continue _fun00011 }
 100:
                    report = _closure1_slot14;
                    tangon = report.warn;
                    zuuluu = global;
                    zuuluu = zuuluu.HermesInternal;
                    oscard = zuuluu.concat;
                    zuuluu = 'Attempted to send while not being in a connected state opcode: ';
                    zuuluu = oscard.bind(zuuluu)(golfie);
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00012_ip = 184; continue _fun00011;
 140: // try_start_0
                    tangon = _closure3_slot0;
                    report = tangon.webSocket;
                    tangon = null;
                    if(!(tangon != report)) { _fun00012_ip = 180; continue _fun00011 }
 159:
                    zuuluu = _closure3_slot0;
                    tangon = zuuluu.webSocket;
                    zuuluu = tangon.send;
                    michal = zuuluu.bind(tangon)(michal);
 180: // try_end0
                    _fun00012_ip = 184; continue _fun00011;
 182: // catch_target0
                    CatchBlockStart(arg_register=1);
 184:
                    return entity;
                }
            };
            entity['send'] = offset;
            offset = 14;
            offset = option[offset];
            offset = verify.bind(golfie)(offset);
            yankee = offset.prototype;
            yankee = Object.create(yankee, {constructor: {value: offset}});
            kiloes = yankee;
            backup = entity;
            offset = new kiloes[offset](backup, foxtra);
            offset = offset instanceof Object ? offset : yankee;
            entity['dispatcher'] = offset;
            oscard = option[oscard];
            yankee = verify.bind(golfie)(oscard);
            oscard = yankee.prototype;
            offset = Object.create(oscard, {constructor: {value: yankee}});
            foxtra = 60000;
            kiloes = offset;
            backup = romeon;
            oscard = new kiloes[yankee](backup, foxtra, romeon);
            oscard = oscard instanceof Object ? oscard : offset;
            entity['gatewayBackoff'] = oscard;
            oscard = 15;
            oscard = option[oscard];
            oscard = verify.bind(golfie)(oscard);
            oscard = oscard.CLOSED;
            entity['connectionState_'] = oscard;
            entity['webSocket'] = report;
            entity['seq'] = michal;
            entity['sessionId'] = report;
            entity['token'] = report;
            entity['initialHeartbeatTimeout'] = report;
            entity['expeditedHeartbeatTimeout'] = report;
            entity['lastHeartbeatTime'] = report;
            entity['lastHeartbeatAckTime'] = report;
            entity['helloTimeout'] = report;
            entity['heartbeatInterval'] = report;
            entity['heartbeater'] = report;
            report = true;
            entity['heartbeatAck'] = report;
            entity['connectionStartTime'] = michal;
            entity['identifyStartTime'] = michal;
            entity['nextReconnectIsImmediate'] = zuuluu;
            oscard = _closure1_slot0;
            report = 16;
            report = option[report];
            oscard = oscard.bind(golfie)(report);
            report = oscard.getCompressionHandler;
            tangon = _closure1_slot15;
            tangon = report.bind(oscard)(tangon);
            entity['compressionHandler'] = tangon;
            entity['hasConnectedOnce'] = zuuluu;
            entity['isFastConnect'] = zuuluu;
            entity['identifyCount'] = michal;
            entity['iosGoingAwayEventCount'] = michal;
            return entity;
        };
        var _closure2_slot1 = tangon;
        michal = _closure1_slot10;
        zuuluu = undefined;
        entity = argFoo;
        entity = michal.bind(zuuluu)(tangon, entity);
        michal = _closure1_slot7;
        report = {};
        entity = 'connectionState';
        report['key'] = entity;
        entity = function() { // Original name: get
            entity = this;
            entity = entity.connectionState_;
            return entity;
        };
        report['get'] = entity;
        entity = function(argFoo) { // Original name: set
            michal = argFoo;
            tangon = _closure1_slot14;
            zuuluu = tangon.verbose;
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            entity = 'Setting connection state to ';
            entity = report.bind(entity)(michal);
            entity = zuuluu.bind(tangon)(entity);
            entity = this;
            entity['connectionState_'] = michal;
            entity = undefined;
            return entity;
        };
        report['set'] = entity;
        entity = new Array(41);
        entity[0] = report;
        report = {};
        option = 'addAnalytics';
        report['key'] = option;
        option = function(argFoo) { // Original name: value
            michal = this;
            entity = {};
            tangon = michal.analytics;
            report = entity;
            zuuluu = copyDataProperties(report, tangon);
            tangon = argFoo;
            report = entity;
            zuuluu = copyDataProperties(report, tangon);
            michal['analytics'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = option;
        entity[1] = report;
        report = {};
        option = 'setResumeUrl';
        report['key'] = option;
        option = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                oscard = argFoo;
                entity = null;
                zuuluu = entity != oscard;
                if(!zuuluu) { _fun00014_ip = 27; continue _fun00013 }
 12:
                tangon = oscard.endsWith;
                michal = '/';
                zuuluu = tangon.bind(oscard)(michal);
 27:
                michal = oscard;
                if(!zuuluu) { _fun00014_ip = 59; continue _fun00013 }
 33:
                report = oscard.substring;
                tangon = oscard.length;
                zuuluu = 1;
                tangon = tangon - zuuluu;
                zuuluu = 0;
                michal = report.bind(oscard)(zuuluu, tangon);
 59:
                if(!(entity !== michal)) { _fun00014_ip = 105; continue _fun00013 }
 63:
                tangon = _closure1_slot14;
                zuuluu = tangon.verbose;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                entity = 'Updating resume url to ';
                entity = report.bind(entity)(michal);
                entity = zuuluu.bind(tangon)(entity);
 105:
                entity = this;
                entity['resumeUrl'] = michal;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = option;
        entity[2] = report;
        report = {};
        option = '_connect';
        report['key'] = option;
        option = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                verify = this;
                var _closure3_slot0 = verify;
                entity = verify.willReconnect;
                zuuluu = entity.bind(verify)();
                if(zuuluu) { _fun00016_ip = 51; continue _fun00015 }
 25:
                report = _closure1_slot14;
                tangon = report.verbose;
                zuuluu = 'Skipping _connect because willReconnect is false';
                zuuluu = tangon.bind(report)(zuuluu);
                _fun00016_ip = 661; continue _fun00015;
 51:
                report = _closure1_slot2;
                tangon = _closure1_slot3;
                zuuluu = 17;
                zuuluu = tangon[zuuluu];
                tangon = undefined;
                report = report.bind(tangon)(zuuluu);
                zuuluu = report.getIsPaused;
                zuuluu = zuuluu.bind(report)();
                if(zuuluu) { _fun00016_ip = 640; continue _fun00015 }
 89:
                oscard = _closure1_slot1;
                yankee = _closure1_slot3;
                zuuluu = 15;
                zuuluu = yankee[zuuluu];
                zuuluu = oscard.bind(tangon)(zuuluu);
                zuuluu = zuuluu.CONNECTING;
                verify['connectionState'] = zuuluu;
                zuuluu = false;
                verify['nextReconnectIsImmediate'] = zuuluu;
                report = verify.compressionHandler;
                zuuluu = report.getAlgorithm;
                option = zuuluu.bind(report)();
                report = _closure1_slot15;
                zuuluu = report.getName;
                romeon = zuuluu.bind(report)();
                zuuluu = verify._getGatewayUrl;
                offset = zuuluu.bind(verify)();
                report = global;
                zuuluu = report.window;
                zuuluu = zuuluu.GLOBAL_ENV;
                golfie = zuuluu.API_VERSION;
                zuuluu = 18;
                zuuluu = yankee[zuuluu];
                foxtra = oscard.bind(tangon)(zuuluu);
                yankee = foxtra.mark;
                oscard = '🌐';
                zuuluu = 'Socket._connect';
                zuuluu = yankee.bind(foxtra)(oscard, zuuluu);
                foxtra = _closure1_slot14;
                yankee = foxtra.info;
                zuuluu = null;
                oscard = zuuluu != option;
                result = 'none';
                if(!oscard) { _fun00016_ip = 251; continue _fun00015 }
 248:
                result = option;
 251:
                oscard = report.HermesInternal;
                output = oscard.concat;
                record = '[CONNECT] ';
                sequen = ', encoding: ';
                ctrled = ', version: ';
                update = ', compression: ';
                config = offset;
                vacuum = romeon;
                source = golfie;
                echoed = result;
                oscard = record[output](config, sequen, vacuum, ctrled, source, update, echoed, result);
                oscard = yankee.bind(foxtra)(oscard);
                oscard = verify.webSocket;
                if(!(zuuluu !== oscard)) { _fun00016_ip = 355; continue _fun00015 }
 317:
                foxtra = _closure1_slot14;
                yankee = foxtra.error;
                oscard = '_connect called with already existing websocket';
                oscard = yankee.bind(foxtra)(oscard);
                yankee = verify._cleanup;
                oscard = function(argFoo) {
                    zuuluu = argFoo;
                    michal = zuuluu.close;
                    entity = 4000;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                oscard = yankee.bind(verify)(oscard);
 355:
                yankee = report.Date;
                oscard = yankee.now;
                oscard = oscard.bind(yankee)();
                verify['connectionStartTime'] = oscard;
                foxtra = report.setTimeout;
                yankee = _closure1_slot16;
                oscard = function() {
                    entity = global;
                    zuuluu = entity.Date;
                    michal = zuuluu.now;
                    tangon = michal.bind(zuuluu)();
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.connectionStartTime;
                    oscard = tangon - michal;
                    report = zuuluu._handleClose;
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    michal = 'The connection timed out after ';
                    entity = ' ms - did not receive OP_HELLO in time.';
                    tangon = tangon.bind(michal)(oscard, entity);
                    michal = false;
                    entity = 0;
                    entity = report.bind(zuuluu)(michal, entity, tangon);
                    michal = zuuluu.setResumeUrl;
                    entity = null;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                oscard = foxtra.bind(tangon)(oscard, yankee);
                verify['helloTimeout'] = oscard;
                report = report.URL;
                oscard = report.prototype;
                oscard = Object.create(oscard, {constructor: {value: report}});
                record = oscard;
                config = offset;
                report = new record[report](config, sequen);
                oscard = report instanceof Object ? report : oscard;
                var _closure3_slot1 = oscard;
                yankee = oscard.searchParams;
                offset = yankee.append;
                report = 'encoding';
                report = offset.bind(yankee)(report, romeon);
                yankee = oscard.searchParams;
                offset = yankee.append;
                report = golfie.toString;
                golfie = report.bind(golfie)();
                report = 'v';
                report = offset.bind(yankee)(report, golfie);
                if(!(zuuluu != option)) { _fun00016_ip = 517; continue _fun00015 }
 495:
                golfie = oscard.searchParams;
                report = golfie.append;
                zuuluu = 'compress';
                zuuluu = report.bind(golfie)(zuuluu, option);
 517:
                zuuluu = {};
                report = oscard.toString;
                report = report.bind(oscard)();
                zuuluu['gatewayURL'] = report;
                report = function(argFoo) { // Original name: newCallback
                    zuuluu = argFoo;
                    entity = _closure3_slot0;
                    entity['webSocket'] = zuuluu;
                    michal = entity.compressionHandler;
                    entity = michal.bindWebSocket;
                    entity = entity.bind(michal)(zuuluu);
                    entity = undefined;
                    return entity;
                };
                zuuluu['newCallback'] = report;
                report = function(argFoo) { // Original name: onOpen
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        michal = argFoo;
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        entity = 18;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        option = tangon.bind(entity)(zuuluu);
                        golfie = option.mark;
                        report = global;
                        zuuluu = report.HermesInternal;
                        tangon = zuuluu.concat;
                        zuuluu = 'GatewaySocket.onOpen ';
                        tangon = tangon.bind(zuuluu)(michal);
                        zuuluu = '🌐';
                        zuuluu = golfie.bind(option)(zuuluu, tangon);
                        tangon = report.Date;
                        zuuluu = tangon.now;
                        option = zuuluu.bind(tangon)();
                        tangon = _closure3_slot0;
                        golfie = tangon.connectionStartTime;
                        backup = option - golfie;
                        golfie = _closure1_slot14;
                        oscard = golfie.info;
                        verify = _closure3_slot1;
                        option = verify.toString;
                        sizing = option.bind(verify)();
                        report = report.HermesInternal;
                        offset = report.concat;
                        output = '[CONNECTED] ';
                        kiloes = ' in ';
                        foxtra = ' ms';
                        report = output[offset](sizing, kiloes, backup, foxtra, romeon);
                        report = oscard.bind(golfie)(report);
                        tangon['isFastConnect'] = michal;
                        zuuluu = _closure3_slot0;
                        if(michal) { _fun00018_ip = 186; continue _fun00017 }
 174:
                        michal = zuuluu._doResumeOrIdentify;
                        michal = michal.bind(zuuluu)();
                        _fun00018_ip = 198; continue _fun00017;
 186:
                        michal = zuuluu._doFastConnectIdentify;
                        michal = michal.bind(zuuluu)();
 198:
                        return entity;
                    }
                };
                zuuluu['onOpen'] = report;
                option = _closure1_slot23;
                golfie = verify.compressionHandler;
                oscard = verify._handleClose;
                report = oscard.bind;
                oscard = report.bind(oscard)(verify);
                report = function(argFoo, argBar) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        romeon = argFoo;
                        michal = global;
                        zuuluu = michal.Date;
                        entity = zuuluu.now;
                        backup = entity.bind(zuuluu)();
                        zuuluu = _closure1_slot15;
                        entity = zuuluu.unpack;
                        entity = entity.bind(zuuluu)(romeon);
                        foxtra = entity.op;
                        offset = entity.s;
                        oscard = entity.t;
                        tangon = entity.d;
                        report = _closure1_slot0;
                        entity = _closure1_slot3;
                        yankee = 19;
                        zuuluu = entity[yankee];
                        entity = undefined;
                        zuuluu = report.bind(entity)(zuuluu);
                        zuuluu = zuuluu.Opcode;
                        zuuluu = zuuluu.DISPATCH;
                        if(!(foxtra !== zuuluu)) { _fun00020_ip = 183; continue _fun00019 }
 96:
                        golfie = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        report = 18;
                        report = zuuluu[report];
                        option = golfie.bind(entity)(report);
                        golfie = option.mark;
                        report = _closure1_slot0;
                        zuuluu = zuuluu[yankee];
                        zuuluu = report.bind(entity)(zuuluu);
                        zuuluu = zuuluu.Opcode;
                        sizing = zuuluu[foxtra];
                        zuuluu = michal.HermesInternal;
                        kiloes = zuuluu.concat;
                        report = 'GatewaySocket.onMessage ';
                        zuuluu = ' ';
                        report = kiloes.bind(report)(foxtra, zuuluu, sizing);
                        zuuluu = '🌐';
                        zuuluu = golfie.bind(option)(zuuluu, report);
 183:
                        zuuluu = _closure1_slot11;
                        zuuluu = zuuluu.isLoggingGatewayEvents;
                        if(!zuuluu) { _fun00020_ip = 303; continue _fun00019 }
 196:
                        kiloes = new Array(1);
                        kiloes[0] = foxtra;
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        zuuluu = zuuluu[yankee];
                        zuuluu = report.bind(entity)(zuuluu);
                        zuuluu = zuuluu.Opcode;
                        zuuluu = zuuluu.DISPATCH;
                        if(!(foxtra === zuuluu)) { _fun00020_ip = 247; continue _fun00019 }
 237:
                        zuuluu = kiloes.push;
                        zuuluu = zuuluu.bind(kiloes)(oscard);
 247:
                        zuuluu = kiloes.push;
                        zuuluu = zuuluu.bind(kiloes)(tangon);
                        golfie = _closure1_slot14;
                        report = golfie.verboseDangerously;
                        zuuluu = ['<~'];
                        output = 1;
                        echoed = zuuluu;
                        result = kiloes;
                        option = arraySpread(echoed, result, output);
                        echoed = report;
                        result = zuuluu;
                        output = golfie;
                        zuuluu = apply(echoed, result, output);
 303:
                        report = michal.Date;
                        zuuluu = report.now;
                        zuuluu = zuuluu.bind(report)();
                        option = zuuluu - backup;
                        zuuluu = 'READY';
                        golfie = zuuluu === oscard;
                        if(golfie) { _fun00020_ip = 441; continue _fun00019 }
 333:
                        zuuluu = 'READY_SUPPLEMENTAL';
                        if(!(zuuluu !== oscard)) { _fun00020_ip = 402; continue _fun00019 }
 343:
                        zuuluu = 10;
                        if(!(option > zuuluu)) { _fun00020_ip = 478; continue _fun00019 }
 353:
                        report = _closure1_slot1;
                        kiloes = _closure1_slot3;
                        zuuluu = 18;
                        zuuluu = kiloes[zuuluu];
                        sizing = report.bind(entity)(zuuluu);
                        kiloes = sizing.mark;
                        zuuluu = 'Parse ';
                        report = zuuluu + oscard;
                        zuuluu = '🌐';
                        zuuluu = kiloes.bind(sizing)(zuuluu, report, option);
                        _fun00020_ip = 478; continue _fun00019;
 402:
                        report = _closure1_slot1;
                        kiloes = _closure1_slot3;
                        zuuluu = 20;
                        zuuluu = kiloes[zuuluu];
                        zuuluu = report.bind(entity)(zuuluu);
                        report = zuuluu.parseReadySupplemental;
                        zuuluu = report.set;
                        zuuluu = zuuluu.bind(report)(backup, option);
                        _fun00020_ip = 478; continue _fun00019;
 441:
                        report = _closure1_slot1;
                        kiloes = _closure1_slot3;
                        zuuluu = 20;
                        zuuluu = kiloes[zuuluu];
                        zuuluu = report.bind(entity)(zuuluu);
                        report = zuuluu.parseReady;
                        zuuluu = report.set;
                        zuuluu = zuuluu.bind(report)(backup, option);
 478:
                        report = null;
                        if(!(report != offset)) { _fun00020_ip = 497; continue _fun00019 }
 484:
                        zuuluu = _closure3_slot0;
                        zuuluu['seq'] = offset;
 497:
                        offset = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        zuuluu = zuuluu[yankee];
                        zuuluu = offset.bind(entity)(zuuluu);
                        zuuluu = zuuluu.Opcode;
                        zuuluu = zuuluu.HELLO;
                        if(!(zuuluu !== foxtra)) { _fun00020_ip = 943; continue _fun00019 }
 533:
                        offset = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        zuuluu = zuuluu[yankee];
                        zuuluu = offset.bind(entity)(zuuluu);
                        zuuluu = zuuluu.Opcode;
                        zuuluu = zuuluu.RECONNECT;
                        if(!(zuuluu !== foxtra)) { _fun00020_ip = 922; continue _fun00019 }
 569:
                        offset = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        zuuluu = zuuluu[yankee];
                        zuuluu = offset.bind(entity)(zuuluu);
                        zuuluu = zuuluu.Opcode;
                        zuuluu = zuuluu.INVALID_SESSION;
                        if(!(zuuluu !== foxtra)) { _fun00020_ip = 900; continue _fun00019 }
 605:
                        offset = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        zuuluu = zuuluu[yankee];
                        zuuluu = offset.bind(entity)(zuuluu);
                        zuuluu = zuuluu.Opcode;
                        zuuluu = zuuluu.HEARTBEAT;
                        if(!(zuuluu !== foxtra)) { _fun00020_ip = 879; continue _fun00019 }
 641:
                        offset = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        zuuluu = zuuluu[yankee];
                        zuuluu = offset.bind(entity)(zuuluu);
                        zuuluu = zuuluu.Opcode;
                        zuuluu = zuuluu.HEARTBEAT_ACK;
                        if(!(zuuluu !== foxtra)) { _fun00020_ip = 857; continue _fun00019 }
 677:
                        offset = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        zuuluu = zuuluu[yankee];
                        zuuluu = offset.bind(entity)(zuuluu);
                        zuuluu = zuuluu.Opcode;
                        zuuluu = zuuluu.DISPATCH;
                        if(!(zuuluu !== foxtra)) { _fun00020_ip = 752; continue _fun00019 }
 710:
                        offset = _closure1_slot14;
                        zuuluu = offset.info;
                        michal = michal.HermesInternal;
                        yankee = michal.concat;
                        michal = 'Unhandled op ';
                        michal = yankee.bind(michal)(foxtra);
                        michal = zuuluu.bind(offset)(michal);
                        _fun00020_ip = 973; continue _fun00019;
 752:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu._handleDispatch;
                        report = null;
                        if(!golfie) { _fun00020_ip = 848; continue _fun00019 }
 772:
                        golfie = {};
                        yankee = argBar;
                        golfie['compressed_byte_size'] = yankee;
                        yankee = _closure1_slot24;
                        yankee = yankee.bind(entity)(romeon);
                        golfie['uncompressed_byte_size'] = yankee;
                        offset = _closure3_slot0;
                        yankee = offset.compressionHandler;
                        offset = yankee.getAlgorithm;
                        offset = offset.bind(yankee)();
                        golfie['compression_algorithm'] = offset;
                        offset = _closure1_slot15;
                        verify = offset.getName;
                        verify = verify.bind(offset)();
                        golfie['packing_algorithm'] = verify;
                        golfie['unpack_duration_ms'] = option;
                        report = golfie;
 848:
                        michal = michal.bind(zuuluu)(tangon, oscard, report);
                        _fun00020_ip = 973; continue _fun00019;
 857:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu._handleHeartbeatAck;
                        michal = michal.bind(zuuluu)(tangon);
                        _fun00020_ip = 973; continue _fun00019;
 879:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu._handleHeartbeatReceive;
                        michal = michal.bind(zuuluu)();
                        _fun00020_ip = 973; continue _fun00019;
 900:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu._handleInvalidSession;
                        michal = michal.bind(zuuluu)(tangon);
                        _fun00020_ip = 973; continue _fun00019;
 922:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu._handleReconnect;
                        michal = michal.bind(zuuluu)();
                        _fun00020_ip = 973; continue _fun00019;
 943:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu._clearHelloTimeout;
                        michal = michal.bind(zuuluu)();
                        michal = zuuluu._handleHello;
                        michal = michal.bind(zuuluu)(tangon);
 973:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu._sendHeartbeatIfDue;
                        michal = michal.bind(zuuluu)();
                        return entity;
                    }
                };
                report = option.bind(tangon)(golfie, oscard, report);
                zuuluu['onMessage'] = report;
                report = function() { // Original name: onError
                    oscard = _closure3_slot0;
                    michal = oscard.setResumeUrl;
                    entity = null;
                    entity = michal.bind(oscard)(entity);
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 21;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.flushDNSCache;
                    michal = michal.bind(zuuluu)();
                    report = oscard._handleClose;
                    tangon = false;
                    zuuluu = 0;
                    michal = 'An error with the websocket occurred';
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    return entity;
                };
                zuuluu['onError'] = report;
                report = function(argFoo) { // Original name: onClose
                    entity = argFoo;
                    report = entity.wasClean;
                    tangon = entity.code;
                    zuuluu = entity.reason;
                    michal = _closure3_slot0;
                    entity = michal._handleClose;
                    entity = entity.bind(michal)(report, tangon, zuuluu);
                    return entity;
                };
                zuuluu['onClose'] = report;
                michal = function(argFoo) { // Original name: newOrTakeoverWebSocket
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        entity = argFoo;
                        kiloes = entity.gatewayURL;
                        foxtra = entity.newCallback;
                        yankee = entity.onOpen;
                        var _closure4_slot0 = yankee;
                        report = entity.onMessage;
                        zuuluu = entity.onError;
                        tangon = entity.onClose;
                        golfie = _closure1_slot14;
                        michal = golfie.enableNativeLogger;
                        entity = true;
                        entity = michal.bind(golfie)(entity);
                        output = global;
                        entity = output.window;
                        source = entity._ws;
                        sizing = false;
                        var _closure4_slot1 = sizing;
                        golfie = null;
                        var _closure4_slot2 = golfie;
                        entity = output.window;
                        entity['_ws'] = golfie;
                        result = golfie != source;
                        entity = undefined;
                        michal = undefined;
                        romeon = false;
                        offset = false;
                        option = null;
                        verify = null;
                        if(!result) { _fun00022_ip = 411; continue _fun00021 }
 125:
                        echoed = source.ws;
                        result = source.state;
                        result = result.gateway;
                        if(!(result === kiloes)) { _fun00022_ip = 328; continue _fun00021 }
 149:
                        result = {};
                        cntext = source.state;
                        papara = result;
                        update = copyDataProperties(papara, cntext);
                        update = result.messages;
                        if(!(golfie != update)) { _fun00022_ip = 202; continue _fun00021 }
 173:
                        vacuum = result.messages;
                        ctrled = vacuum.map;
                        update = function(argFoo) {
                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                zuuluu = argFoo;
                                tangon = zuuluu.data;
                                michal = null;
                                entity = zuuluu;
                                if(!(michal != tangon)) { _fun00024_ip = 82; continue _fun00023 }
 17:
                                michal = zuuluu.data;
                                tangon = 'string';
                                michal = typeof michal;
                                entity = zuuluu;
                                if(!(tangon === michal)) { _fun00024_ip = 82; continue _fun00023 }
 36:
                                michal = {};
                                option = michal;
                                golfie = zuuluu;
                                tangon = copyDataProperties(option, golfie);
                                oscard = zuuluu.data;
                                report = oscard.substring;
                                tangon = 0;
                                zuuluu = 100;
                                tangon = report.bind(oscard)(tangon, zuuluu);
                                zuuluu = 'data';
                                michal[zuuluu] = tangon;
                                entity = michal;
 82:
                                return entity;
                            }
                        };
                        update = ctrled.bind(vacuum)(update);
                        result['messages'] = update;
 202:
                        vacuum = _closure1_slot14;
                        ctrled = vacuum.log;
                        update = {};
                        papara = update;
                        cntext = result;
                        sequen = copyDataProperties(papara, cntext);
                        result = result.messages;
                        config = golfie == result;
                        sequen = undefined;
                        if(config) { _fun00022_ip = 244; continue _fun00021 }
 239:
                        sequen = result.length;
 244:
                        result = 'messages';
                        update[result] = sequen;
                        result = '[FAST CONNECT] successfully took over websocket, state:';
                        result = ctrled.bind(vacuum)(result, update);
                        result = source.state;
                        romeon = result.open;
                        result = source.state;
                        ctrled = result.identify;
                        _closure4_slot1 = ctrled;
                        result = source.state;
                        option = result.messages;
                        result = source.state;
                        result = result.clientState;
                        _closure4_slot2 = result;
                        michal = echoed;
                        offset = ctrled;
                        verify = result;
                        _fun00022_ip = 411; continue _fun00021;
 328:
                        update = _closure1_slot14;
                        result = update.verbose;
                        source = source.state;
                        vacuum = source.gateway;
                        output = output.HermesInternal;
                        ctrled = output.concat;
                        source = '[FAST CONNECT] gatewayURL mismatch: ';
                        output = ' !== ';
                        output = ctrled.bind(source)(vacuum, output, kiloes);
                        output = result.bind(update)(output);
                        result = echoed.close;
                        output = 1000;
                        output = result.bind(echoed)(output);
                        michal = null;
                        romeon = false;
                        offset = false;
                        option = null;
                        verify = null;
 411:
                        if(!(golfie == michal)) { _fun00022_ip = 453; continue _fun00021 }
 415:
                        sizing = _closure1_slot1;
                        output = _closure1_slot3;
                        backup = 11;
                        backup = output[backup];
                        backup = sizing.bind(entity)(backup);
                        backup = backup.bind(entity)(kiloes);
                        kiloes = 'arraybuffer';
                        backup['binaryType'] = kiloes;
                        michal = backup;
 453:
                        foxtra = foxtra.bind(entity)(michal);
                        if(!romeon) { _fun00022_ip = 467; continue _fun00021 }
 461:
                        verify = yankee.bind(entity)(offset, verify);
 467:
                        if(!(golfie != option)) { _fun00022_ip = 481; continue _fun00021 }
 471:
                        golfie = option.forEach;
                        golfie = golfie.bind(option)(report);
 481:
                        oscard = function() {
                            tangon = _closure4_slot0;
                            zuuluu = _closure4_slot1;
                            michal = _closure4_slot2;
                            entity = undefined;
                            entity = tangon.bind(entity)(zuuluu, michal);
                            return entity;
                        };
                        michal['onopen'] = oscard;
                        michal['onmessage'] = report;
                        michal['onclose'] = tangon;
                        michal['onerror'] = zuuluu;
                        return entity;
                    }
                };
                michal = michal.bind(tangon)(zuuluu);
                _fun00016_ip = 661; continue _fun00015;
 640:
                zuuluu = _closure1_slot14;
                michal = zuuluu.info;
                entity = 'Skipping _connect because socket is paused';
                entity = michal.bind(zuuluu)(entity);
 661:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = option;
        entity[3] = report;
        report = {};
        option = '_handleHello';
        report['key'] = option;
        option = function(argFoo) { // Original name: value
            option = argFoo;
            zuuluu = this;
            romeon = option.heartbeat_interval;
            zuuluu['heartbeatInterval'] = romeon;
            michal = global;
            tangon = michal.Date;
            entity = tangon.now;
            tangon = entity.bind(tangon)();
            entity = zuuluu.connectionStartTime;
            backup = tangon - entity;
            report = _closure1_slot14;
            tangon = report.verbose;
            golfie = _closure1_slot0;
            oscard = _closure1_slot3;
            entity = 22;
            oscard = oscard[entity];
            entity = undefined;
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.getConnectionPath;
            result = oscard.bind(golfie)(option);
            michal = michal.HermesInternal;
            verify = michal.concat;
            echoed = '[HELLO] via ';
            output = ', heartbeat interval: ';
            kiloes = ', took ';
            foxtra = ' ms';
            sizing = romeon;
            michal = echoed[verify](result, output, sizing, kiloes, backup, foxtra, romeon);
            michal = tangon.bind(report)(michal);
            michal = zuuluu._startHeartbeater;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        report['value'] = option;
        entity[4] = report;
        report = {};
        option = '_handleReconnect';
        report['key'] = option;
        option = function() { // Original name: value
            zuuluu = this;
            report = _closure1_slot14;
            tangon = report.verbose;
            michal = '[RECONNECT] gateway requested I reconnect.';
            michal = tangon.bind(report)(michal);
            tangon = zuuluu._cleanup;
            michal = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.close;
                entity = 4000;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            tangon = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 15;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            michal = michal.WILL_RECONNECT;
            zuuluu['connectionState'] = michal;
            michal = zuuluu._connect;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        report['value'] = option;
        entity[5] = report;
        report = {};
        option = '_handleInvalidSession';
        report['key'] = option;
        option = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = argFoo;
                michal = this;
                report = _closure1_slot14;
                tangon = report.info;
                oscard = '';
                if(!entity) { _fun00026_ip = 32; continue _fun00025 }
 26:
                oscard = ' can resume)';
 32:
                zuuluu = '[INVALID_SESSION]';
                zuuluu = zuuluu + oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                if(entity) { _fun00026_ip = 62; continue _fun00025 }
 50:
                entity = michal._doIdentify;
                entity = entity.bind(michal)();
                _fun00026_ip = 72; continue _fun00025;
 62:
                entity = michal._doResumeOrIdentify;
                entity = entity.bind(michal)();
 72:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = option;
        entity[6] = report;
        report = {};
        option = '_handleDispatch';
        report['key'] = option;
        option = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                report = argFoo;
                tangon = argBar;
                entity = this;
                michal = global;
                oscard = michal.Date;
                zuuluu = oscard.now;
                oscard = zuuluu.bind(oscard)();
                zuuluu = entity.connectionStartTime;
                kiloes = oscard - zuuluu;
                zuuluu = 'READY';
                if(!(zuuluu !== tangon)) { _fun00028_ip = 284; continue _fun00027 }
 47:
                zuuluu = 'READY_SUPPLEMENTAL';
                if(!(zuuluu !== tangon)) { _fun00028_ip = 176; continue _fun00027 }
 57:
                zuuluu = 'RESUMED';
                if(!(zuuluu === tangon)) { _fun00028_ip = 502; continue _fun00027 }
 68:
                offset = _closure1_slot14;
                verify = offset.verbose;
                yankee = _closure1_slot0;
                option = _closure1_slot3;
                oscard = 22;
                oscard = option[oscard];
                golfie = undefined;
                yankee = yankee.bind(golfie)(oscard);
                oscard = yankee.getConnectionPath;
                oscard = oscard.bind(yankee)(report);
                oscard = verify.bind(offset)(oscard);
                oscard = _closure1_slot1;
                zuuluu = 15;
                zuuluu = option[zuuluu];
                zuuluu = oscard.bind(golfie)(zuuluu);
                zuuluu = zuuluu.SESSION_ESTABLISHED;
                entity['connectionState'] = zuuluu;
                oscard = entity.gatewayBackoff;
                zuuluu = oscard.succeed;
                zuuluu = zuuluu.bind(oscard)();
                zuuluu = 0;
                entity['iosGoingAwayEventCount'] = zuuluu;
                _fun00028_ip = 502; continue _fun00027;
 176:
                option = _closure1_slot14;
                golfie = option.info;
                oscard = michal.HermesInternal;
                offset = oscard.concat;
                verify = '[READY_SUPPLEMENTAL] took ';
                oscard = 'ms';
                oscard = offset.bind(verify)(kiloes, oscard);
                oscard = golfie.bind(option)(oscard);
                golfie = _closure1_slot1;
                oscard = _closure1_slot3;
                zuuluu = 15;
                oscard = oscard[zuuluu];
                zuuluu = undefined;
                zuuluu = golfie.bind(zuuluu)(oscard);
                zuuluu = zuuluu.SESSION_ESTABLISHED;
                entity['connectionState'] = zuuluu;
                oscard = entity.gatewayBackoff;
                zuuluu = oscard.succeed;
                zuuluu = zuuluu.bind(oscard)();
                zuuluu = 0;
                entity['iosGoingAwayEventCount'] = zuuluu;
                _fun00028_ip = 502; continue _fun00027;
 284:
                backup = report.session_id;
                entity['sessionId'] = backup;
                verify = _closure1_slot0;
                golfie = _closure1_slot3;
                zuuluu = 22;
                zuuluu = golfie[zuuluu];
                oscard = undefined;
                verify = verify.bind(oscard)(zuuluu);
                zuuluu = verify.getConnectionPath;
                yankee = zuuluu.bind(verify)(report);
                zuuluu = _closure1_slot1;
                verify = 18;
                verify = golfie[verify];
                offset = zuuluu.bind(oscard)(verify);
                verify = offset.setServerTrace;
                verify = verify.bind(offset)(yankee);
                verify = _closure1_slot14;
                offset = verify.info;
                option = michal.HermesInternal;
                foxtra = option.concat;
                romeon = '[READY] took ';
                option = 'ms, as ';
                option = foxtra.bind(romeon)(kiloes, option, backup);
                option = offset.bind(verify)(option);
                option = verify.verbose;
                michal = michal.HermesInternal;
                offset = michal.concat;
                michal = '';
                michal = offset.bind(michal)(yankee);
                michal = option.bind(verify)(michal);
                michal = 15;
                michal = golfie[michal];
                michal = zuuluu.bind(oscard)(michal);
                michal = michal.SESSION_ESTABLISHED;
                entity['connectionState'] = michal;
                zuuluu = entity.gatewayBackoff;
                michal = zuuluu.succeed;
                michal = michal.bind(zuuluu)();
                michal = 0;
                entity['iosGoingAwayEventCount'] = michal;
                zuuluu = entity.setResumeUrl;
                michal = report.resume_gateway_url;
                michal = zuuluu.bind(entity)(michal);
 502:
                zuuluu = entity.dispatcher;
                michal = zuuluu.receiveDispatch;
                entity = argBaz;
                entity = michal.bind(zuuluu)(report, tangon, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = option;
        entity[7] = report;
        report = {};
        option = 'handleResumeDispatched';
        report['key'] = option;
        option = function() { // Original name: value
            tangon = this;
            entity = global;
            zuuluu = entity.Date;
            michal = zuuluu.now;
            zuuluu = michal.bind(zuuluu)();
            michal = tangon.connectionStartTime;
            backup = zuuluu - michal;
            zuuluu = _closure1_slot14;
            michal = zuuluu.info;
            report = tangon.dispatcher;
            report = report.resumeAnalytics;
            romeon = report.numEvents;
            offset = tangon.seq;
            entity = entity.HermesInternal;
            oscard = entity.concat;
            kiloes = '[RESUMED] took ';
            foxtra = 'ms, replayed ';
            yankee = ' events, new seq: ';
            entity = kiloes[oscard](backup, foxtra, romeon, yankee, offset, verify);
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = option;
        entity[8] = report;
        report = {};
        option = 'handleReadyDispatched';
        report['key'] = option;
        option = function() { // Original name: value
            michal = this;
            entity = false;
            michal['didForceClearGuildHashes'] = entity;
            entity = true;
            michal['hasConnectedOnce'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = option;
        entity[9] = report;
        report = {};
        option = '_getGatewayUrl';
        report['key'] = option;
        option = function() { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                michal = this;
                zuuluu = michal.resumeUrl;
                entity = null;
                if(!(entity == zuuluu)) { _fun00030_ip = 24; continue _fun00029 }
 15:
                entity = _closure1_slot19;
                _fun00030_ip = 30; continue _fun00029;
 24:
                entity = michal.resumeUrl;
 30:
                return entity;
            }
        };
        report['value'] = option;
        entity[10] = report;
        report = {};
        option = '_handleHeartbeatReceive';
        report['key'] = option;
        option = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                michal = this;
                entity = michal._sendHeartbeat;
                entity = entity.bind(michal)();
                entity = michal.heartbeater;
                tangon = null;
                entity = tangon != entity;
                if(!entity) { _fun00032_ip = 38; continue _fun00031 }
 28:
                zuuluu = michal.heartbeatInterval;
                entity = tangon != zuuluu;
 38:
                if(!entity) { _fun00032_ip = 102; continue _fun00031 }
 41:
                entity = global;
                tangon = entity.clearInterval;
                zuuluu = michal.heartbeater;
                report = undefined;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = entity.setInterval;
                zuuluu = michal._doHeartbeatInterval;
                entity = zuuluu.bind;
                zuuluu = entity.bind(zuuluu)(michal);
                entity = michal.heartbeatInterval;
                entity = tangon.bind(report)(zuuluu, entity);
                michal['heartbeater'] = entity;
 102:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = option;
        entity[11] = report;
        report = {};
        option = '_handleHeartbeatAck';
        report['key'] = option;
        option = function() { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                michal = this;
                zuuluu = global;
                tangon = zuuluu.Date;
                entity = tangon.now;
                entity = entity.bind(tangon)();
                michal['lastHeartbeatAckTime'] = entity;
                entity = true;
                michal['heartbeatAck'] = entity;
                tangon = michal.expeditedHeartbeatTimeout;
                entity = null;
                if(!(entity !== tangon)) { _fun00034_ip = 95; continue _fun00033 }
 46:
                report = zuuluu.clearTimeout;
                tangon = michal.expeditedHeartbeatTimeout;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['expeditedHeartbeatTimeout'] = entity;
                zuuluu = _closure1_slot14;
                michal = zuuluu.verbose;
                entity = 'Expedited heartbeat succeeded';
                entity = michal.bind(zuuluu)(entity);
 95:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = option;
        entity[12] = report;
        report = {};
        option = '_handleHeartbeatTimeout';
        report['key'] = option;
        option = function() { // Original name: value
            tangon = this;
            var _closure3_slot0 = tangon;
            michal = tangon._cleanup;
            entity = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.close;
                entity = 4000;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(tangon)(entity);
            oscard = _closure1_slot1;
            report = _closure1_slot3;
            entity = 15;
            report = report[entity];
            entity = undefined;
            report = oscard.bind(entity)(report);
            report = report.WILL_RECONNECT;
            tangon['connectionState'] = report;
            report = tangon.gatewayBackoff;
            tangon = report.fail;
            zuuluu = function() {
                michal = _closure3_slot0;
                entity = michal._connect;
                entity = entity.bind(michal)();
                return entity;
            };
            report = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot14;
            zuuluu = tangon.warn;
            michal = 1000;
            oscard = report / michal;
            report = oscard.toFixed;
            michal = 2;
            golfie = report.bind(oscard)(michal);
            michal = global;
            michal = michal.HermesInternal;
            oscard = michal.concat;
            report = '[ACK TIMEOUT] reconnecting in ';
            michal = ' seconds.';
            michal = oscard.bind(report)(golfie, michal);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = option;
        entity[13] = report;
        report = {};
        option = '_handleClose';
        report['key'] = option;
        option = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                report = argFoo;
                tangon = argBar;
                zuuluu = argBaz;
                michal = this;
                var _closure3_slot0 = michal;
                if(report) { _fun00036_ip = 23; continue _fun00035 }
 21:
                report = false;
 23:
                entity = michal._cleanup;
                entity = entity.bind(michal)();
                option = michal.emit;
                oscard = {};
                oscard['code'] = tangon;
                oscard['reason'] = zuuluu;
                entity = 'close';
                entity = option.bind(michal)(entity, oscard);
                entity = 4004;
                if(!(tangon !== entity)) { _fun00036_ip = 382; continue _fun00035 }
 73:
                entity = michal._tryDetectInvalidIOSToken;
                entity = entity.bind(michal)(tangon, zuuluu, report);
                verify = _closure1_slot1;
                option = _closure1_slot3;
                entity = 15;
                option = option[entity];
                entity = undefined;
                option = verify.bind(entity)(option);
                option = option.WILL_RECONNECT;
                michal['connectionState'] = option;
                option = michal.nextReconnectIsImmediate;
                if(option) { _fun00036_ip = 299; continue _fun00035 }
 137:
                verify = michal.gatewayBackoff;
                option = verify.fail;
                golfie = function() {
                    michal = _closure3_slot0;
                    entity = michal._connect;
                    entity = entity.bind(michal)();
                    return entity;
                };
                offset = option.bind(verify)(golfie);
                verify = _closure1_slot14;
                option = verify.info;
                golfie = report.toString;
                kiloes = golfie.bind(report)();
                golfie = 1000;
                yankee = offset / golfie;
                offset = yankee.toFixed;
                golfie = 2;
                output = offset.bind(yankee)(golfie);
                golfie = global;
                golfie = golfie.HermesInternal;
                foxtra = golfie.concat;
                sequen = '[WS CLOSED] (';
                yankee = ', ';
                result = ') retrying in ';
                sizing = ' seconds.';
                vacuum = kiloes;
                ctrled = yankee;
                source = tangon;
                update = yankee;
                echoed = zuuluu;
                golfie = sequen[foxtra](vacuum, ctrled, source, update, echoed, result, output, sizing, kiloes);
                golfie = option.bind(verify)(golfie);
                golfie = michal.gatewayBackoff;
                option = golfie.fails;
                golfie = 4;
                if(!(option > golfie)) { _fun00036_ip = 380; continue _fun00035 }
 284:
                golfie = michal._reset;
                golfie = golfie.bind(michal)(report, tangon, zuuluu);
                _fun00036_ip = 380; continue _fun00035;
 299:
                option = _closure1_slot14;
                golfie = option.info;
                oscard = report.toString;
                vacuum = oscard.bind(report)();
                oscard = global;
                oscard = oscard.HermesInternal;
                yankee = oscard.concat;
                sequen = '[WS CLOSED] (';
                verify = ', ';
                result = ') retrying immediately.';
                ctrled = verify;
                source = tangon;
                update = verify;
                echoed = zuuluu;
                oscard = sequen[yankee](vacuum, ctrled, source, update, echoed, result, output);
                oscard = golfie.bind(option)(oscard);
                oscard = michal._connect;
                oscard = oscard.bind(michal)();
 380:
                return entity;
 382:
                option = _closure1_slot1;
                golfie = _closure1_slot3;
                oscard = 15;
                golfie = golfie[oscard];
                oscard = undefined;
                oscard = option.bind(oscard)(golfie);
                oscard = oscard.CLOSED;
                michal['connectionState'] = oscard;
                golfie = _closure1_slot14;
                oscard = golfie.warn;
                entity = '[WS CLOSED] because of authentication failure, marking as closed.';
                entity = oscard.bind(golfie)(entity);
                entity = michal._reset;
                entity = entity.bind(michal)(report, tangon, zuuluu);
                return entity;
            }
        };
        report['value'] = option;
        entity[14] = report;
        report = {};
        option = '_tryDetectInvalidIOSToken';
        report['key'] = option;
        option = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                golfie = this;
                var _closure3_slot0 = golfie;
                entity = argBaz;
                var _closure3_slot1 = entity;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 23;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.isIOS;
                zuuluu = zuuluu.bind(tangon)();
                if(!zuuluu) { _fun00038_ip = 66; continue _fun00037 }
 54:
                report = golfie.token;
                tangon = null;
                zuuluu = tangon != report;
 66:
                if(!zuuluu) { _fun00038_ip = 82; continue _fun00037 }
 69:
                report = 1001;
                tangon = argFoo;
                zuuluu = report === tangon;
 82:
                if(!zuuluu) { _fun00038_ip = 98; continue _fun00037 }
 85:
                report = 'Stream end encountered';
                tangon = argBar;
                zuuluu = report === tangon;
 98:
                if(!zuuluu) { _fun00038_ip = 236; continue _fun00037 }
 104:
                tangon = golfie.iosGoingAwayEventCount;
                zuuluu = 1;
                zuuluu = tangon + zuuluu;
                golfie['iosGoingAwayEventCount'] = zuuluu;
                tangon = golfie.iosGoingAwayEventCount;
                zuuluu = 3;
                if(!(zuuluu === tangon)) { _fun00038_ip = 236; continue _fun00037 }
 136:
                tangon = _closure1_slot0;
                report = _closure1_slot3;
                zuuluu = 24;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(entity)(zuuluu);
                report = zuuluu.HTTP;
                tangon = report.get;
                zuuluu = {};
                oscard = _closure1_slot13;
                oscard = oscard.ME;
                zuuluu['url'] = oscard;
                oscard = {};
                golfie = golfie.token;
                oscard['authorization'] = golfie;
                zuuluu['headers'] = oscard;
                oscard = false;
                zuuluu['rejectWithError'] = oscard;
                report = tangon.bind(report)(zuuluu);
                tangon = report.then;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    oscard = entity.status;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    entity = 25;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.track;
                    michal = _closure1_slot12;
                    zuuluu = michal.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED;
                    michal = {};
                    michal['api_status_code'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                michal = function(argFoo) {
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        entity = argFoo;
                        oscard = entity.status;
                        entity = 401;
                        if(!(entity === oscard)) { _fun00040_ip = 111; continue _fun00039 }
 18:
                        report = _closure3_slot0;
                        golfie = _closure1_slot1;
                        tangon = _closure1_slot3;
                        zuuluu = 15;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        zuuluu = golfie.bind(zuuluu)(tangon);
                        zuuluu = zuuluu.CLOSED;
                        report['connectionState'] = zuuluu;
                        tangon = _closure1_slot14;
                        zuuluu = tangon.warn;
                        michal = '[WS CLOSED] because of manual authentication failure, marking as closed.';
                        michal = zuuluu.bind(tangon)(michal);
                        tangon = report._reset;
                        zuuluu = _closure3_slot1;
                        michal = 4004;
                        entity = 'invalid token manually detected';
                        entity = tangon.bind(report)(zuuluu, michal, entity);
 111:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        entity = 25;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.track;
                        michal = _closure1_slot12;
                        zuuluu = michal.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED;
                        michal = {};
                        michal['api_status_code'] = oscard;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    }
                };
                michal = tangon.bind(report)(zuuluu, michal);
 236:
                return entity;
            }
        };
        report['value'] = option;
        entity[15] = report;
        report = {};
        option = '_reset';
        report['key'] = option;
        option = function(argFoo, argBar, argBaz) { // Original name: value
            oscard = argFoo;
            report = argBar;
            entity = argBaz;
            tangon = this;
            michal = null;
            tangon['sessionId'] = michal;
            michal = 0;
            tangon['seq'] = michal;
            golfie = _closure1_slot14;
            zuuluu = golfie.warn;
            michal = oscard.toString;
            output = michal.bind(oscard)();
            michal = global;
            michal = michal.HermesInternal;
            offset = michal.concat;
            result = '[RESET] (';
            option = ', ';
            romeon = ')';
            sizing = option;
            kiloes = report;
            backup = option;
            foxtra = entity;
            michal = result[offset](output, sizing, kiloes, backup, foxtra, romeon, yankee);
            michal = zuuluu.bind(golfie)(michal);
            zuuluu = tangon.emit;
            michal = {};
            michal['wasClean'] = oscard;
            michal['code'] = report;
            michal['reason'] = entity;
            entity = 'disconnect';
            entity = zuuluu.bind(tangon)(entity, michal);
            entity = undefined;
            return entity;
        };
        report['value'] = option;
        entity[16] = report;
        report = {};
        option = '_sendHeartbeatIfDue';
        report['key'] = option;
        option = function() { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                michal = this;
                zuuluu = michal.heartbeatInterval;
                entity = null;
                if(!(entity != zuuluu)) { _fun00042_ip = 92; continue _fun00041 }
 15:
                zuuluu = michal.heartbeater;
                if(!(entity != zuuluu)) { _fun00042_ip = 92; continue _fun00041 }
 25:
                tangon = michal.lastHeartbeatTime;
                entity = entity != tangon;
                if(!entity) { _fun00042_ip = 79; continue _fun00041 }
 38:
                zuuluu = global;
                report = zuuluu.Date;
                zuuluu = report.now;
                zuuluu = zuuluu.bind(report)();
                tangon = zuuluu - tangon;
                report = michal.heartbeatInterval;
                zuuluu = 5000;
                zuuluu = report + zuuluu;
                entity = tangon > zuuluu;
 79:
                if(!entity) { _fun00042_ip = 92; continue _fun00041 }
 82:
                entity = michal._sendHeartbeat;
                entity = entity.bind(michal)();
 92:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = option;
        entity[17] = report;
        report = {};
        option = '_doHeartbeatInterval';
        report['key'] = option;
        option = function() { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                michal = this;
                entity = michal.heartbeatAck;
                if(entity) { _fun00044_ip = 36; continue _fun00043 }
 12:
                zuuluu = michal.expeditedHeartbeatTimeout;
                entity = null;
                if(!(entity === zuuluu)) { _fun00044_ip = 54; continue _fun00043 }
 24:
                entity = michal._handleHeartbeatTimeout;
                entity = entity.bind(michal)();
                _fun00044_ip = 54; continue _fun00043;
 36:
                entity = false;
                michal['heartbeatAck'] = entity;
                entity = michal._sendHeartbeat;
                entity = entity.bind(michal)();
 54:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = option;
        entity[18] = report;
        report = {};
        option = '_startHeartbeater';
        report['key'] = option;
        option = function() { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                option = zuuluu.heartbeatInterval;
                var _closure3_slot1 = option;
                report = _closure1_slot1;
                tangon = _closure1_slot3;
                entity = 26;
                tangon = tangon[entity];
                entity = undefined;
                golfie = report.bind(entity)(tangon);
                tangon = null;
                oscard = tangon != option;
                report = 'GatewaySocket: Heartbeat interval should never null here.';
                report = golfie.bind(entity)(oscard, report);
                report = zuuluu.initialHeartbeatTimeout;
                if(!(tangon !== report)) { _fun00046_ip = 91; continue _fun00045 }
 72:
                report = global;
                oscard = report.clearTimeout;
                report = zuuluu.initialHeartbeatTimeout;
                report = oscard.bind(entity)(report);
 91:
                report = zuuluu.heartbeater;
                if(!(tangon !== report)) { _fun00046_ip = 126; continue _fun00045 }
 101:
                report = global;
                oscard = report.clearInterval;
                report = zuuluu.heartbeater;
                report = oscard.bind(entity)(report);
                zuuluu['heartbeater'] = tangon;
 126:
                tangon = global;
                report = tangon.setTimeout;
                golfie = tangon.Math;
                oscard = golfie.floor;
                verify = tangon.Math;
                tangon = verify.random;
                tangon = tangon.bind(verify)();
                tangon = tangon * option;
                tangon = oscard.bind(golfie)(tangon);
                michal = function() {
                    zuuluu = _closure3_slot0;
                    michal = null;
                    zuuluu['initialHeartbeatTimeout'] = michal;
                    michal = true;
                    zuuluu['heartbeatAck'] = michal;
                    michal = global;
                    report = michal.setInterval;
                    tangon = zuuluu._doHeartbeatInterval;
                    michal = tangon.bind;
                    tangon = michal.bind(tangon)(zuuluu);
                    michal = _closure3_slot1;
                    entity = undefined;
                    michal = report.bind(entity)(tangon, michal);
                    zuuluu['heartbeater'] = michal;
                    michal = zuuluu._doHeartbeatInterval;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                michal = report.bind(entity)(michal, tangon);
                zuuluu['initialHeartbeatTimeout'] = michal;
                return entity;
            }
        };
        report['value'] = option;
        entity[19] = report;
        report = {};
        option = '_stopHeartbeater';
        report['key'] = option;
        option = function() { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                michal = this;
                zuuluu = michal.heartbeater;
                entity = null;
                if(!(entity !== zuuluu)) { _fun00048_ip = 42; continue _fun00047 }
 15:
                zuuluu = global;
                report = zuuluu.clearInterval;
                tangon = michal.heartbeater;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['heartbeater'] = entity;
 42:
                zuuluu = michal.initialHeartbeatTimeout;
                if(!(entity !== zuuluu)) { _fun00048_ip = 79; continue _fun00047 }
 52:
                zuuluu = global;
                report = zuuluu.clearTimeout;
                tangon = michal.initialHeartbeatTimeout;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['initialHeartbeatTimeout'] = entity;
 79:
                zuuluu = michal.expeditedHeartbeatTimeout;
                if(!(entity !== zuuluu)) { _fun00048_ip = 116; continue _fun00047 }
 89:
                zuuluu = global;
                report = zuuluu.clearTimeout;
                tangon = michal.expeditedHeartbeatTimeout;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['expeditedHeartbeatTimeout'] = entity;
 116:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = option;
        entity[20] = report;
        report = {};
        option = '_clearHelloTimeout';
        report['key'] = option;
        option = function() { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                michal = this;
                zuuluu = michal.helloTimeout;
                entity = null;
                if(!(entity != zuuluu)) { _fun00050_ip = 42; continue _fun00049 }
 15:
                zuuluu = global;
                report = zuuluu.clearTimeout;
                tangon = michal.helloTimeout;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['helloTimeout'] = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = option;
        entity[21] = report;
        report = {};
        option = '_cleanup';
        report['key'] = option;
        option = function(argFoo) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                oscard = _closure1_slot1;
                tangon = _closure1_slot3;
                entity = 27;
                tangon = tangon[entity];
                entity = undefined;
                tangon = oscard.bind(entity)(tangon);
                oscard = tangon.Emitter;
                tangon = oscard.resume;
                tangon = tangon.bind(oscard)();
                tangon = zuuluu._stopHeartbeater;
                tangon = tangon.bind(zuuluu)();
                tangon = zuuluu._clearHelloTimeout;
                tangon = tangon.bind(zuuluu)();
                tangon = zuuluu.webSocket;
                oscard = null;
                zuuluu['webSocket'] = oscard;
                if(!(oscard != tangon)) { _fun00052_ip = 124; continue _fun00051 }
 87:
                golfie = _closure1_slot22;
                tangon['onopen'] = golfie;
                tangon['onmessage'] = golfie;
                tangon['onerror'] = golfie;
                tangon['onclose'] = golfie;
                if(!(oscard != report)) { _fun00052_ip = 124; continue _fun00051 }
 119:
                tangon = report.bind(entity)(tangon);
 124:
                report = zuuluu.gatewayBackoff;
                tangon = report.cancel;
                tangon = tangon.bind(report)();
                report = zuuluu.compressionHandler;
                tangon = report.close;
                tangon = tangon.bind(report)();
                report = _closure1_slot0;
                oscard = _closure1_slot3;
                tangon = 16;
                tangon = oscard[tangon];
                report = report.bind(entity)(tangon);
                tangon = report.getCompressionHandler;
                michal = _closure1_slot15;
                michal = tangon.bind(report)(michal);
                zuuluu['compressionHandler'] = michal;
                return entity;
            }
        };
        report['value'] = option;
        entity[22] = report;
        report = {};
        option = '_doResume';
        report['key'] = option;
        option = function() { // Original name: value
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                oscard = this;
                tangon = _closure1_slot1;
                golfie = _closure1_slot3;
                entity = 15;
                zuuluu = golfie[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.RESUMING;
                oscard['connectionState'] = zuuluu;
                report = oscard.dispatcher;
                tangon = _closure1_slot0;
                zuuluu = 22;
                zuuluu = golfie[zuuluu];
                option = tangon.bind(entity)(zuuluu);
                golfie = option.createResumeAnalytics;
                zuuluu = global;
                verify = zuuluu.Date;
                tangon = verify.now;
                verify = tangon.bind(verify)();
                tangon = oscard.connectionStartTime;
                tangon = verify - tangon;
                tangon = golfie.bind(option)(tangon);
                report['resumeAnalytics'] = tangon;
                report = _closure1_slot14;
                tangon = report.info;
                golfie = oscard.sessionId;
                option = null;
                option = option != golfie;
                offset = '';
                if(!option) { _fun00054_ip = 138; continue _fun00053 }
 135:
                offset = golfie;
 138:
                verify = oscard.seq;
                zuuluu = zuuluu.HermesInternal;
                option = zuuluu.concat;
                golfie = '[RESUME] resuming session ';
                zuuluu = ', seq: ';
                zuuluu = option.bind(golfie)(offset, zuuluu, verify);
                zuuluu = tangon.bind(report)(zuuluu);
                report = oscard.send;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot3;
                michal = 19;
                michal = tangon[michal];
                michal = zuuluu.bind(entity)(michal);
                michal = michal.Opcode;
                tangon = michal.RESUME;
                zuuluu = {};
                michal = oscard.token;
                zuuluu['token'] = michal;
                michal = oscard.sessionId;
                zuuluu['session_id'] = michal;
                michal = oscard.seq;
                zuuluu['seq'] = michal;
                michal = false;
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                return entity;
            }
        };
        report['value'] = option;
        entity[23] = report;
        report = {};
        option = '_doIdentify';
        report['key'] = option;
        option = _closure1_slot5;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                    StartGenerator();
                    offset = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00056_ip = 873; continue _fun00055 }
 13:
                    report = 0;
                    offset['seq'] = report;
                    michal = null;
                    offset['sessionId'] = michal;
                    zuuluu = offset.handleIdentify;
                    golfie = zuuluu.bind(offset)();
                    if(!(michal === golfie)) { _fun00056_ip = 75; continue _fun00055 }
 43:
                    oscard = offset._handleClose;
                    tangon = true;
                    zuuluu = 4004;
                    michal = 'No connection info provided';
                    michal = oscard.bind(offset)(tangon, zuuluu, michal);
                    _fun00056_ip = 865; continue _fun00055;
 75:
                    option = _closure1_slot1;
                    michal = _closure1_slot3;
                    backup = 15;
                    tangon = michal[backup];
                    oscard = undefined;
                    tangon = option.bind(oscard)(tangon);
                    tangon = tangon.IDENTIFYING;
                    offset['connectionState'] = tangon;
                    tangon = global;
                    verify = tangon.Date;
                    option = verify.now;
                    verify = option.bind(verify)();
                    offset['identifyStartTime'] = verify;
                    yankee = tangon.Promise;
                    option = yankee.all;
                    romeon = _closure1_slot0;
                    kiloes = 28;
                    michal = michal[kiloes];
                    romeon = romeon.bind(oscard)(michal);
                    michal = romeon.isCacheEnabled;
                    michal = michal.bind(romeon)();
                    if(michal) { _fun00056_ip = 180; continue _fun00055 }
 176:
                    romeon = {};
                    _fun00056_ip = 210; continue _fun00055;
 180:
                    foxtra = _closure1_slot1;
                    sizing = _closure1_slot3;
                    michal = 29;
                    michal = sizing[michal];
                    foxtra = foxtra.bind(oscard)(michal);
                    michal = foxtra.getCommittedVersions;
                    romeon = michal.bind(foxtra)();
 210:
                    michal = new Array(3);
                    michal[0] = romeon;
                    foxtra = _closure1_slot0;
                    romeon = _closure1_slot3;
                    romeon = romeon[kiloes];
                    foxtra = foxtra.bind(oscard)(romeon);
                    romeon = foxtra.isCacheEnabled;
                    romeon = romeon.bind(foxtra)();
                    if(romeon) { _fun00056_ip = 252; continue _fun00055 }
 248:
                    romeon = {};
                    _fun00056_ip = 282; continue _fun00055;
 252:
                    sizing = _closure1_slot1;
                    output = _closure1_slot3;
                    foxtra = 30;
                    foxtra = output[foxtra];
                    sizing = sizing.bind(oscard)(foxtra);
                    foxtra = sizing.getCommittedVersions;
                    romeon = foxtra.bind(sizing)();
 282:
                    michal[1] = romeon;
                    foxtra = _closure1_slot0;
                    romeon = _closure1_slot3;
                    romeon = romeon[kiloes];
                    foxtra = foxtra.bind(oscard)(romeon);
                    romeon = foxtra.isCacheEnabled;
                    romeon = romeon.bind(foxtra)();
                    foxtra = !romeon;
                    romeon = !foxtra;
                    if(foxtra) { _fun00056_ip = 352; continue _fun00055 }
 322:
                    kiloes = _closure1_slot1;
                    sizing = _closure1_slot3;
                    foxtra = 31;
                    foxtra = sizing[foxtra];
                    kiloes = kiloes.bind(oscard)(foxtra);
                    foxtra = kiloes.canUseGuildVersions;
                    romeon = foxtra.bind(kiloes)();
 352:
                    michal[2] = romeon;
                    michal = option.bind(yankee)(michal);
                    SaveGenerator(address=365);
 363:
                    return michal;
 365:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(option) { _fun00056_ip = 870; continue _fun00055 }
 374:
                    yankee = _closure1_slot4;
                    option = 3;
                    yankee = yankee.bind(oscard)(michal, option);
                    foxtra = yankee[report];
                    option = 1;
                    romeon = yankee[option];
                    report = 2;
                    report = yankee[report];
                    if(report) { _fun00056_ip = 419; continue _fun00055 }
 408:
                    yankee = {};
                    report = {};
                    yankee['guild_versions'] = report;
                    _fun00056_ip = 506; continue _fun00055;
 419:
                    report = {};
                    report['guild_versions'] = foxtra;
                    foxtra = romeon.highest_last_message_id;
                    report['highest_last_message_id'] = foxtra;
                    foxtra = romeon.read_state_version;
                    report['read_state_version'] = foxtra;
                    foxtra = romeon.user_guild_settings_version;
                    report['user_guild_settings_version'] = foxtra;
                    foxtra = romeon.user_settings_version;
                    report['user_settings_version'] = foxtra;
                    foxtra = romeon.private_channels_version;
                    report['private_channels_version'] = foxtra;
                    foxtra = romeon.api_code_version;
                    report['api_code_version'] = foxtra;
                    romeon = romeon.initial_guild_id;
                    report['initial_guild_id'] = romeon;
                    yankee = report;
 506:
                    romeon = offset.connectionState;
                    foxtra = _closure1_slot1;
                    report = _closure1_slot3;
                    report = report[backup];
                    report = foxtra.bind(oscard)(report);
                    report = report.IDENTIFYING;
                    if(!(romeon === report)) { _fun00056_ip = 549; continue _fun00055 }
 539:
                    report = offset.identifyStartTime;
                    if(!(report !== verify)) { _fun00056_ip = 574; continue _fun00055 }
 549:
                    romeon = _closure1_slot14;
                    verify = romeon.warn;
                    report = 'Skipping identify because connectionState or identifyStartTime has changed';
                    report = verify.bind(romeon)(report);
                    _fun00056_ip = 865; continue _fun00055;
 574:
                    report = golfie.token;
                    foxtra = golfie.properties;
                    if(!(oscard === foxtra)) { _fun00056_ip = 592; continue _fun00055 }
 590:
                    foxtra = {};
 592:
                    romeon = golfie.presence;
                    offset['token'] = report;
                    backup = _closure1_slot14;
                    verify = backup.verbose;
                    golfie = '[IDENTIFY]';
                    golfie = verify.bind(backup)(golfie);
                    verify = {};
                    verify['token'] = report;
                    report = _closure1_slot0;
                    golfie = _closure1_slot3;
                    backup = 32;
                    backup = golfie[backup];
                    kiloes = report.bind(oscard)(backup);
                    backup = kiloes.getClientCapabilities;
                    backup = backup.bind(kiloes)();
                    verify['capabilities'] = backup;
                    verify['properties'] = foxtra;
                    verify['presence'] = romeon;
                    foxtra = offset.compressionHandler;
                    romeon = foxtra.usesLegacyCompression;
                    romeon = romeon.bind(foxtra)();
                    verify['compress'] = romeon;
                    verify['client_state'] = yankee;
                    yankee = tangon.JSON;
                    tangon = yankee.stringify;
                    romeon = tangon.bind(yankee)(verify);
                    tangon = romeon.length;
                    offset['identifyUncompressedByteSize'] = tangon;
                    yankee = _closure1_slot2;
                    tangon = 33;
                    tangon = golfie[tangon];
                    yankee = yankee.bind(oscard)(tangon);
                    tangon = yankee.deflate;
                    tangon = tangon.bind(yankee)(romeon);
                    tangon = tangon.length;
                    offset['identifyCompressedByteSize'] = tangon;
                    tangon = offset.identifyCount;
                    tangon = tangon + option;
                    offset['identifyCount'] = tangon;
                    option = offset.send;
                    tangon = 19;
                    tangon = golfie[tangon];
                    tangon = report.bind(oscard)(tangon);
                    tangon = tangon.Opcode;
                    report = tangon.IDENTIFY;
                    tangon = false;
                    tangon = option.bind(offset)(report, verify, tangon);
                    report = _closure1_slot1;
                    tangon = 25;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.track;
                    zuuluu = _closure1_slot12;
                    tangon = zuuluu.SESSION_START_CLIENT;
                    zuuluu = {};
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
 865:
                    zuuluu = undefined;
                    return zuuluu;
 870:
                    return michal;
 873:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot0 = golfie;
        golfie = function() { // Original name: _doIdentify
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[24] = report;
        report = {};
        golfie = '_doFastConnectIdentify';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                michal = this;
                entity = 0;
                michal['seq'] = entity;
                zuuluu = null;
                michal['sessionId'] = zuuluu;
                entity = michal.handleIdentify;
                entity = entity.bind(michal)();
                if(!(zuuluu === entity)) { _fun00058_ip = 62; continue _fun00057 }
 33:
                oscard = michal._handleClose;
                report = true;
                tangon = 4004;
                zuuluu = 'No connection info provided';
                zuuluu = oscard.bind(michal)(report, tangon, zuuluu);
                _fun00058_ip = 184; continue _fun00057;
 62:
                entity = entity.token;
                michal['token'] = entity;
                report = _closure1_slot1;
                tangon = _closure1_slot3;
                zuuluu = 15;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                zuuluu = zuuluu.IDENTIFYING;
                michal['connectionState'] = zuuluu;
                zuuluu = global;
                tangon = zuuluu.Date;
                zuuluu = tangon.now;
                zuuluu = zuuluu.bind(tangon)();
                michal['identifyStartTime'] = zuuluu;
                tangon = michal.identifyCount;
                zuuluu = 1;
                zuuluu = tangon + zuuluu;
                michal['identifyCount'] = zuuluu;
                tangon = _closure1_slot14;
                zuuluu = tangon.verbose;
                entity = '[IDENTIFY, fast-connect]';
                entity = zuuluu.bind(tangon)(entity);
                entity = michal._updateLastHeartbeatAckTime;
                entity = entity.bind(michal)();
 184:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[25] = report;
        report = {};
        golfie = '_doResumeOrIdentify';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                michal = this;
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                zuuluu = entity.bind(zuuluu)();
                entity = michal.sessionId;
                tangon = null;
                if(!(tangon !== entity)) { _fun00060_ip = 63; continue _fun00059 }
 32:
                entity = michal.lastHeartbeatAckTime;
                if(!(tangon != entity)) { _fun00060_ip = 75; continue _fun00059 }
 42:
                entity = michal.lastHeartbeatAckTime;
                zuuluu = zuuluu - entity;
                entity = _closure1_slot17;
                if(!(!(zuuluu <= entity))) { _fun00060_ip = 75; continue _fun00059 }
 63:
                entity = michal._doIdentify;
                entity = entity.bind(michal)();
                _fun00060_ip = 87; continue _fun00059;
 75:
                entity = michal._doResume;
                entity = entity.bind(michal)();
 87:
                entity = michal._updateLastHeartbeatAckTime;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[26] = report;
        report = {};
        golfie = '_updateLastHeartbeatAckTime';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = global;
            michal = entity.Date;
            entity = michal.now;
            michal = entity.bind(michal)();
            entity = this;
            entity['lastHeartbeatAckTime'] = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[27] = report;
        report = {};
        golfie = '_sendHeartbeat';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = this;
            oscard = zuuluu.send;
            tangon = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 19;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            michal = michal.Opcode;
            report = michal.HEARTBEAT;
            tangon = zuuluu.seq;
            michal = false;
            michal = oscard.bind(zuuluu)(report, tangon, michal);
            michal = global;
            tangon = michal.Date;
            michal = tangon.now;
            michal = michal.bind(tangon)();
            zuuluu['lastHeartbeatTime'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[28] = report;
        report = {};
        golfie = 'getLogger';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golfie;
        entity[29] = report;
        report = {};
        golfie = 'willReconnect';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            michal = entity.connectionState;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot3;
            entity = 15;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            entity = entity.WILL_RECONNECT;
            entity = michal === entity;
            return entity;
        };
        report['value'] = golfie;
        entity[30] = report;
        report = {};
        golfie = 'isClosed';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            michal = entity.connectionState;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot3;
            entity = 15;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            entity = entity.CLOSED;
            entity = michal === entity;
            return entity;
        };
        report['value'] = golfie;
        entity[31] = report;
        report = {};
        golfie = 'isSessionEstablished';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                zuuluu = this;
                tangon = zuuluu.connectionState;
                golfie = _closure1_slot1;
                entity = _closure1_slot3;
                oscard = 15;
                entity = entity[oscard];
                report = undefined;
                entity = golfie.bind(report)(entity);
                entity = entity.SESSION_ESTABLISHED;
                entity = tangon === entity;
                if(entity) { _fun00062_ip = 80; continue _fun00061 }
 47:
                zuuluu = zuuluu.connectionState;
                tangon = _closure1_slot1;
                michal = _closure1_slot3;
                michal = michal[oscard];
                michal = tangon.bind(report)(michal);
                michal = michal.RESUMING;
                entity = zuuluu === michal;
 80:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[32] = report;
        report = {};
        golfie = 'isConnected';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                zuuluu = this;
                tangon = zuuluu.connectionState;
                golfie = _closure1_slot1;
                entity = _closure1_slot3;
                oscard = 15;
                entity = entity[oscard];
                report = undefined;
                entity = golfie.bind(report)(entity);
                entity = entity.IDENTIFYING;
                entity = tangon === entity;
                if(entity) { _fun00064_ip = 80; continue _fun00063 }
 47:
                golfie = zuuluu.connectionState;
                option = _closure1_slot1;
                tangon = _closure1_slot3;
                tangon = tangon[oscard];
                tangon = option.bind(report)(tangon);
                tangon = tangon.RESUMING;
                entity = golfie === tangon;
 80:
                if(entity) { _fun00064_ip = 116; continue _fun00063 }
 83:
                zuuluu = zuuluu.connectionState;
                tangon = _closure1_slot1;
                michal = _closure1_slot3;
                michal = michal[oscard];
                michal = tangon.bind(report)(michal);
                michal = michal.SESSION_ESTABLISHED;
                entity = zuuluu === michal;
 116:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[33] = report;
        report = {};
        golfie = 'connect';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                zuuluu = this;
                entity = zuuluu.isClosed;
                entity = entity.bind(zuuluu)();
                oscard = _closure1_slot14;
                if(entity) { _fun00066_ip = 43; continue _fun00065 }
 23:
                tangon = oscard.error;
                entity = 'Cannot start a new connection, connection state is not closed';
                entity = tangon.bind(oscard)(entity);
                entity = false;
                _fun00066_ip = 106; continue _fun00065;
 43:
                report = oscard.verbose;
                tangon = '.connect() called, new state is WILL_RECONNECT';
                tangon = report.bind(oscard)(tangon);
                report = _closure1_slot1;
                tangon = _closure1_slot3;
                michal = 15;
                tangon = tangon[michal];
                michal = undefined;
                michal = report.bind(michal)(tangon);
                michal = michal.WILL_RECONNECT;
                zuuluu['connectionState'] = michal;
                michal = zuuluu._connect;
                michal = michal.bind(zuuluu)();
                entity = true;
 106:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[34] = report;
        report = {};
        golfie = 'resetSocketOnError';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                golfie = argFoo;
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                yankee = golfie.action;
                kiloes = golfie.error;
                oscard = golfie.metricAction;
                offset = _closure1_slot14;
                verify = offset.error;
                foxtra = kiloes.message;
                report = global;
                entity = report.HermesInternal;
                romeon = entity.concat;
                option = 'resetSocketOnError during ';
                entity = ': ';
                option = romeon.bind(option)(yankee, entity, foxtra);
                entity = kiloes.stack;
                entity = verify.bind(offset)(option, entity);
                verify = _closure1_slot1;
                backup = _closure1_slot3;
                entity = 34;
                option = backup[entity];
                entity = undefined;
                offset = verify.bind(entity)(option);
                verify = offset.increment;
                option = {};
                foxtra = _closure1_slot0;
                romeon = 35;
                romeon = backup[romeon];
                romeon = foxtra.bind(entity)(romeon);
                romeon = romeon.MetricEvents;
                romeon = romeon.SOCKET_CRASHED;
                option['name'] = romeon;
                romeon = null;
                foxtra = yankee;
                if(!(romeon != oscard)) { _fun00068_ip = 163; continue _fun00067 }
 160:
                foxtra = oscard;
 163:
                oscard = report.HermesInternal;
                romeon = oscard.concat;
                oscard = 'action:';
                romeon = romeon.bind(oscard)(foxtra);
                oscard = new Array(1);
                oscard[0] = romeon;
                option['tags'] = oscard;
                oscard = true;
                option = verify.bind(offset)(option, oscard);
                verify = golfie.sentry;
                option = false;
                if(!(option !== verify)) { _fun00068_ip = 266; continue _fun00067 }
 218:
                verify = _closure1_slot1;
                offset = _closure1_slot3;
                option = 36;
                option = offset[option];
                offset = verify.bind(entity)(option);
                verify = offset.captureException;
                option = {};
                romeon = {};
                romeon['socketCrashedAction'] = yankee;
                option['tags'] = romeon;
                option = verify.bind(offset)(kiloes, option);
 266:
                verify = _closure1_slot1;
                offset = _closure1_slot3;
                option = 25;
                option = offset[option];
                backup = verify.bind(entity)(option);
                foxtra = backup.track;
                option = _closure1_slot12;
                romeon = option.GATEWAY_SOCKET_RESET;
                option = {};
                sizing = kiloes.message;
                option['error_message'] = sizing;
                kiloes = kiloes.stack;
                option['error_stack'] = kiloes;
                option['action'] = yankee;
                option = foxtra.bind(backup)(romeon, option);
                romeon = zuuluu._cleanup;
                option = function(argFoo) {
                    michal = argFoo;
                    entity = michal.close;
                    entity = entity.bind(michal)();
                    return entity;
                };
                option = romeon.bind(zuuluu)(option);
                foxtra = zuuluu._reset;
                romeon = 1000;
                option = 'Resetting socket due to error.';
                option = foxtra.bind(zuuluu)(oscard, romeon, option);
                romeon = zuuluu.dispatcher;
                option = romeon.clear;
                option = option.bind(romeon)();
                option = 15;
                option = offset[option];
                option = verify.bind(entity)(option);
                option = option.WILL_RECONNECT;
                zuuluu['connectionState'] = option;
                verify = zuuluu.dispatchExceptionBackoff;
                option = verify.cancel;
                option = option.bind(verify)();
                golfie = golfie.clearCache;
                if(golfie) { _fun00068_ip = 460; continue _fun00067 }
 442:
                option = zuuluu.dispatchExceptionBackoff;
                verify = option._fails;
                option = 0;
                golfie = verify > option;
 460:
                option = zuuluu.dispatchExceptionBackoff;
                option = option._fails;
                offset = 0;
                if(!(offset !== option)) { _fun00068_ip = 504; continue _fun00067 }
 478:
                romeon = zuuluu.dispatchExceptionBackoff;
                verify = romeon.fail;
                option = function() {
                    michal = _closure3_slot0;
                    entity = michal._connect;
                    entity = entity.bind(michal)();
                    return entity;
                };
                option = verify.bind(romeon)(option);
                _fun00068_ip = 568; continue _fun00067;
 504:
                romeon = _closure1_slot14;
                verify = romeon.verbose;
                option = 'Triggering fast reconnect';
                option = verify.bind(romeon)(option);
                romeon = zuuluu.dispatchExceptionBackoff;
                verify = romeon.fail;
                option = function() {
                    entity = undefined;
                    return entity;
                };
                option = verify.bind(romeon)(option);
                verify = report.setTimeout;
                option = function() {
                    michal = _closure3_slot0;
                    entity = michal._connect;
                    entity = entity.bind(michal)();
                    return entity;
                };
                option = verify.bind(entity)(option, offset);
 568:
                if(!golfie) { _fun00068_ip = 644; continue _fun00067 }
 571:
                zuuluu['didForceClearGuildHashes'] = oscard;
                golfie = _closure1_slot1;
                option = _closure1_slot3;
                oscard = 37;
                oscard = option[oscard];
                option = golfie.bind(entity)(oscard);
                golfie = option.dispatch;
                oscard = {};
                verify = 'CLEAR_CACHES';
                oscard['type'] = verify;
                verify = report.HermesInternal;
                offset = verify.concat;
                verify = 'Socket reset during ';
                verify = offset.bind(verify)(yankee);
                oscard['reason'] = verify;
                oscard = golfie.bind(option)(oscard);
 644:
                golfie = report.clearTimeout;
                oscard = zuuluu.dispatchSuccessTimer;
                oscard = golfie.bind(entity)(oscard);
                report = report.setTimeout;
                oscard = _closure1_slot18;
                tangon = 2;
                tangon = tangon * oscard;
                michal = function() {
                    entity = _closure3_slot0;
                    michal = entity.dispatchExceptionBackoff;
                    entity = michal.succeed;
                    entity = entity.bind(michal)();
                    return entity;
                };
                michal = report.bind(entity)(michal, tangon);
                zuuluu['dispatchSuccessTimer'] = michal;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[35] = report;
        report = {};
        golfie = 'resetSocketOnDispatchError';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                entity = tangon.error;
                michal = entity.message;
                entity = null;
                report = entity != michal;
                if(!report) { _fun00070_ip = 57; continue _fun00069 }
 25:
                entity = tangon.error;
                oscard = entity.message;
                michal = oscard.indexOf;
                entity = 'Guild data was missing from store';
                michal = michal.bind(oscard)(entity);
                entity = 0;
                report = michal >= entity;
 57:
                michal = zuuluu.resetSocketOnError;
                entity = {};
                option = entity;
                golfie = tangon;
                tangon = copyDataProperties(option, golfie);
                oscard = !report;
                tangon = 'sentry';
                entity[tangon] = oscard;
                tangon = 'clearCache';
                entity[tangon] = report;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[36] = report;
        report = {};
        golfie = 'close';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                report = arguments[0];
                golfie = this;
                var _closure3_slot0 = golfie;
                entity = undefined;
                if(!(report === entity)) { _fun00072_ip = 20; continue _fun00071 }
 18:
                report = false;
 20:
                var _closure3_slot1 = entity;
                zuuluu = golfie.isClosed;
                zuuluu = zuuluu.bind(golfie)();
                tangon = _closure1_slot14;
                if(zuuluu) { _fun00072_ip = 176; continue _fun00071 }
 47:
                verify = tangon.info;
                yankee = golfie.connectionState;
                zuuluu = global;
                option = zuuluu.HermesInternal;
                offset = option.concat;
                option = 'Closing connection, current state is ';
                option = offset.bind(option)(yankee);
                option = verify.bind(tangon)(option);
                option = undefined;
                if(!report) { _fun00072_ip = 99; continue _fun00071 }
 93:
                option = 4000;
 99:
                _closure3_slot1 = option;
                verify = golfie._cleanup;
                option = function(argFoo) {
                    zuuluu = argFoo;
                    michal = zuuluu.close;
                    entity = _closure3_slot1;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                option = verify.bind(golfie)(option);
                option = _closure1_slot1;
                verify = _closure1_slot3;
                oscard = 15;
                oscard = verify[oscard];
                oscard = option.bind(entity)(oscard);
                oscard = oscard.CLOSED;
                golfie['connectionState'] = oscard;
                if(report) { _fun00072_ip = 193; continue _fun00071 }
 156:
                zuuluu = zuuluu.setImmediate;
                michal = function() {
                    report = _closure3_slot0;
                    tangon = report._reset;
                    zuuluu = true;
                    michal = 1000;
                    entity = 'Disconnect requested by user';
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    entity = undefined;
                    return entity;
                };
                michal = zuuluu.bind(entity)(michal);
                _fun00072_ip = 193; continue _fun00071;
 176:
                zuuluu = tangon.verbose;
                michal = 'close() called, but socket is already closed.';
                michal = zuuluu.bind(tangon)(michal);
 193:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[37] = report;
        report = {};
        golfie = 'networkStateChange';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                golfie = arguments[2];
                oscard = this;
                entity = undefined;
                if(!(golfie === entity)) { _fun00074_ip = 14; continue _fun00073 }
 12:
                golfie = true;
 14:
                report = oscard.expeditedHeartbeat;
                yankee = argFoo;
                offset = argBar;
                option = false;
                romeon = oscard;
                verify = golfie;
                michal = romeon[report](yankee, offset, verify, option, golfie);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[38] = report;
        report = {};
        golfie = 'expeditedHeartbeat';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                offset = arguments[1];
                michal = arguments[2];
                oscard = arguments[3];
                tangon = this;
                var _closure3_slot0 = tangon;
                entity = undefined;
                if(!(offset === entity)) { _fun00076_ip = 28; continue _fun00075 }
 24:
                offset = '';
 28:
                if(!(michal === entity)) { _fun00076_ip = 34; continue _fun00075 }
 32:
                michal = true;
 34:
                if(!(oscard === entity)) { _fun00076_ip = 40; continue _fun00075 }
 38:
                oscard = true;
 40:
                report = tangon.isClosed;
                report = report.bind(tangon)();
                if(report) { _fun00076_ip = 324; continue _fun00075 }
 56:
                report = tangon.isConnected;
                report = report.bind(tangon)();
                if(report) { _fun00076_ip = 182; continue _fun00075 }
 69:
                if(michal) { _fun00076_ip = 163; continue _fun00075 }
 72:
                golfie = _closure1_slot14;
                report = golfie.verbose;
                romeon = tangon.connectionState;
                michal = null;
                option = michal != offset;
                michal = '';
                yankee = michal;
                if(!option) { _fun00076_ip = 124; continue _fun00075 }
 107:
                yankee = michal;
                if(!(yankee !== offset)) { _fun00076_ip = 124; continue _fun00075 }
 114:
                michal = 'reason: ';
                yankee = michal + offset;
 124:
                michal = global;
                michal = michal.HermesInternal;
                verify = michal.concat;
                option = 'Expedited heartbeat requested, but, connection state is ';
                michal = ' and reconnectImmediately was not requested ';
                michal = verify.bind(option)(romeon, michal, yankee);
                michal = report.bind(golfie)(michal);
                _fun00076_ip = 175; continue _fun00075;
 163:
                report = tangon.resetBackoff;
                michal = report.bind(tangon)(offset, oscard);
 175:
                michal = undefined;
                _fun00076_ip = 322; continue _fun00075;
 182:
                option = _closure1_slot14;
                golfie = option.verbose;
                oscard = null;
                yankee = oscard != offset;
                report = '';
                verify = report;
                if(!yankee) { _fun00076_ip = 228; continue _fun00075 }
 211:
                verify = report;
                if(!(verify !== offset)) { _fun00076_ip = 228; continue _fun00075 }
 218:
                report = 'reason: ';
                verify = report + offset;
 228:
                report = 'Performing an expedited heartbeat ';
                report = report + verify;
                report = golfie.bind(option)(report);
                report = false;
                tangon['heartbeatAck'] = report;
                report = tangon._sendHeartbeat;
                report = report.bind(tangon)();
                report = tangon.expeditedHeartbeatTimeout;
                if(!(oscard !== report)) { _fun00076_ip = 290; continue _fun00075 }
 271:
                report = global;
                oscard = report.clearTimeout;
                report = tangon.expeditedHeartbeatTimeout;
                report = oscard.bind(entity)(report);
 290:
                report = global;
                oscard = report.setTimeout;
                report = function() {
                    _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                        michal = _closure3_slot0;
                        zuuluu = null;
                        michal['expeditedHeartbeatTimeout'] = zuuluu;
                        zuuluu = michal.heartbeatAck;
                        michal = false;
                        if(!(michal === zuuluu)) { _fun00078_ip = 41; continue _fun00077 }
 27:
                        michal = _closure3_slot0;
                        entity = michal._handleHeartbeatTimeout;
                        entity = entity.bind(michal)();
 41:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu = argFoo;
                zuuluu = oscard.bind(entity)(report, zuuluu);
                tangon['expeditedHeartbeatTimeout'] = zuuluu;
                michal = undefined;
 322:
                return michal;
 324:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[39] = report;
        report = {};
        golfie = 'resetBackoff';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                oscard = arguments[0];
                michal = arguments[1];
                zuuluu = this;
                entity = undefined;
                if(!(oscard === entity)) { _fun00080_ip = 19; continue _fun00079 }
 15:
                oscard = '';
 19:
                if(!(michal === entity)) { _fun00080_ip = 25; continue _fun00079 }
 23:
                michal = true;
 25:
                option = _closure1_slot14;
                report = option.verbose;
                tangon = null;
                offset = tangon != oscard;
                tangon = '';
                verify = tangon;
                if(!offset) { _fun00080_ip = 71; continue _fun00079 }
 54:
                verify = tangon;
                if(!(verify !== oscard)) { _fun00080_ip = 71; continue _fun00079 }
 61:
                tangon = ' for reason: ';
                verify = tangon + oscard;
 71:
                tangon = 'Connection has reset backoff';
                tangon = tangon + verify;
                tangon = report.bind(option)(tangon);
                report = zuuluu.gatewayBackoff;
                tangon = report.succeed;
                tangon = tangon.bind(report)();
                report = 0;
                zuuluu['iosGoingAwayEventCount'] = report;
                tangon = true;
                zuuluu['nextReconnectIsImmediate'] = tangon;
                option = zuuluu.willReconnect;
                option = option.bind(zuuluu)();
                if(option) { _fun00080_ip = 188; continue _fun00079 }
 131:
                if(!michal) { _fun00080_ip = 170; continue _fun00079 }
 134:
                option = zuuluu.connectionState;
                verify = _closure1_slot1;
                offset = _closure1_slot3;
                golfie = 15;
                golfie = offset[golfie];
                golfie = verify.bind(entity)(golfie);
                golfie = golfie.SESSION_ESTABLISHED;
                michal = option !== golfie;
 170:
                if(!michal) { _fun00080_ip = 198; continue _fun00079 }
 173:
                michal = zuuluu._handleClose;
                michal = michal.bind(zuuluu)(tangon, report, oscard);
                _fun00080_ip = 198; continue _fun00079;
 188:
                michal = zuuluu._connect;
                michal = michal.bind(zuuluu)();
 198:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[40] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 38;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/GatewaySocket.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();