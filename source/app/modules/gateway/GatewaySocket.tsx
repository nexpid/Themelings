// app/modules/gateway/GatewaySocket.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun105890: for(var _fun105890_ip = 0; ; ) switch(_fun105890_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot9;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot8;
            entity = _closure1_slot21;
            entity = entity.bind(zulu)();
            if(entity) { _fun105890_ip = 48; continue _fun105890 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun105890_ip = 86; continue _fun105890;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot9;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun105891: for(var _fun105891_ip = 0; ; ) switch(_fun105891_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun105891_ip = 76; continue _fun105891;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
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
        tango = argFoo;
        var _closure2_slot0 = tango;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = 0;
        var _closure2_slot3 = mike;
        zulu = tango.dataReady;
        mike = function(argFoo) {
            _fun105896: for(var _fun105896_ip = 0; ; ) switch(_fun105896_ip) {
 0:
                entity = argFoo;
 3: // try_start_0
                report = _closure2_slot2;
                tango = entity;
                mike = _closure2_slot3;
                entity = undefined;
                entity = report.bind(entity)(tango, mike);
 25: // try_end0
                mike = 0;
                _closure2_slot3 = mike;
                return entity;
 33: // catch_target0
                CatchBlockStart(arg_register=0);
                mike = 0;
                _closure2_slot3 = mike;
                throw entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        mike = false;
        var _closure2_slot4 = mike;
        entity = function(argFoo) {
            _fun105897: for(var _fun105897_ip = 0; ; ) switch(_fun105897_ip) {
 0:
                zulu = argFoo;
                oscar = undefined;
                mike = undefined;
                mike = zulu.data;
                report = zulu.raw_length;
                tango = null;
                if(!(tango == report)) { _fun105897_ip = 56; continue _fun105897 }
 24:
                golf = _closure2_slot3;
                options = _closure1_slot24;
                tango = mike;
                tango = options.bind(oscar)(tango);
                tango = golf + tango;
                _closure2_slot3 = tango;
                _fun105897_ip = 77; continue _fun105897;
 56:
                report = _closure2_slot3;
                zulu = zulu.raw_length;
                zulu = report + zulu;
                _closure2_slot3 = zulu;
 77: // try_start_0
                tango = _closure2_slot0;
                zulu = tango.feed;
                mike = zulu.bind(tango)(mike);
 95: // try_end0
                return oscar;
 97: // catch_target0
                CatchBlockStart(arg_register=0);
                zulu = _closure2_slot4;
                if(zulu) { _fun105897_ip = 136; continue _fun105897 }
 109:
                zulu = true;
                _closure2_slot4 = zulu;
                report = _closure2_slot1;
                tango = false;
                zulu = 0;
                mike = 'A decompression error occurred';
                mike = report.bind(oscar)(tango, zulu, mike);
 136:
                throw entity;
            }
        };
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: byteSize
        _fun105898: for(var _fun105898_ip = 0; ; ) switch(_fun105898_ip) {
 0:
            zulu = argFoo;
            entity = null;
            mike = entity == zulu;
            entity = 0;
            if(mike) { _fun105898_ip = 41; continue _fun105898 }
 14:
            tango = 'string';
            mike = typeof zulu;
            if(!(tango !== mike)) { _fun105898_ip = 33; continue _fun105898 }
 25:
            mike = zulu.byteLength;
            _fun105898_ip = 38; continue _fun105898;
 33:
            mike = zulu.length;
 38:
            entity = mike;
 41:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    verify = 1;
    options = oscar[verify];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    yankee = 3;
    options = oscar[yankee];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 7;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot11 = options;
    options = 8;
    options = oscar[options];
    options = report.bind(entity)(options);
    offset = options.AnalyticEvents;
    var _closure1_slot12 = offset;
    options = options.Endpoints;
    var _closure1_slot13 = options;
    options = 9;
    options = oscar[options];
    romeo = golf.bind(entity)(options);
    options = romeo.prototype;
    offset = Object.create(options, {constructor: {value: romeo}});
    kilo = 'GatewaySocket';
    sizing = offset;
    options = new sizing[romeo](kilo, backup);
    options = options instanceof Object ? options : offset;
    var _closure1_slot14 = options;
    options = 10;
    options = oscar[options];
    options = golf.bind(entity)(options);
    offset = options.prototype;
    offset = Object.create(offset, {constructor: {value: options}});
    sizing = offset;
    options = new sizing[options](kilo);
    options = options instanceof Object ? options : offset;
    var _closure1_slot15 = options;
    options = 12;
    offset = oscar[options];
    offset = golf.bind(entity)(offset);
    offset = offset.Millis;
    romeo = offset.SECOND;
    offset = 30;
    offset = offset * romeo;
    var _closure1_slot16 = offset;
    offset = oscar[options];
    offset = golf.bind(entity)(offset);
    offset = offset.Millis;
    offset = offset.MINUTE;
    offset = yankee * offset;
    var _closure1_slot17 = offset;
    options = oscar[options];
    options = golf.bind(entity)(options);
    options = options.Millis;
    options = options.MINUTE;
    options = verify * options;
    var _closure1_slot18 = options;
    tango = tango.window;
    tango = tango.GLOBAL_ENV;
    tango = tango.GATEWAY_ENDPOINT;
    var _closure1_slot19 = tango;
    tango = 19;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function() { // Original name: GatewaySocket
            zulu = this;
            entity = _closure1_slot6;
            mike = _closure2_slot1;
            golf = undefined;
            entity = entity.bind(golf)(zulu, mike);
            entity = _closure1_slot20;
            entity = entity.bind(golf)(zulu, mike);
            var _closure3_slot0 = entity;
            verify = _closure1_slot1;
            options = _closure1_slot3;
            oscar = 13;
            mike = options[oscar];
            report = verify.bind(golf)(mike);
            foxtrot = _closure1_slot18;
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            romeo = 1000;
            kilo = zulu;
            backup = romeo;
            mike = new kilo[report](backup, foxtrot, romeo);
            mike = mike instanceof Object ? mike : zulu;
            entity['dispatchExceptionBackoff'] = mike;
            mike = 0;
            entity['dispatchSuccessTimer'] = mike;
            zulu = false;
            entity['didForceClearGuildHashes'] = zulu;
            entity['identifyUncompressedByteSize'] = mike;
            entity['identifyCompressedByteSize'] = mike;
            report = {};
            entity['analytics'] = report;
            entity['identifyCount'] = mike;
            report = null;
            entity['resumeUrl'] = report;
            entity['iosGoingAwayEventCount'] = mike;
            offset = function(argFoo, argBar, argBaz) {
                _fun105901: for(var _fun105901_ip = 0; ; ) switch(_fun105901_ip) {
 0:
                    golf = argFoo;
                    options = argBar;
                    entity = undefined;
                    mike = undefined;
                    tango = _closure1_slot11;
                    tango = tango.isLoggingGatewayEvents;
                    if(!tango) { _fun105901_ip = 49; continue _fun105901 }
 26:
                    oscar = _closure1_slot14;
                    report = oscar.verboseDangerously;
                    tango = '~>';
                    tango = report.bind(oscar)(tango, golf, options);
 49:
                    oscar = _closure1_slot15;
                    report = oscar.pack;
                    tango = {};
                    tango['op'] = golf;
                    tango['d'] = options;
                    mike = report.bind(oscar)(tango);
                    tango = argBaz;
                    if(!tango) { _fun105901_ip = 140; continue _fun105901 }
 80:
                    report = _closure3_slot0;
                    tango = report.isSessionEstablished;
                    tango = tango.bind(report)();
                    if(tango) { _fun105901_ip = 140; continue _fun105901 }
 100:
                    report = _closure1_slot14;
                    tango = report.warn;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    oscar = zulu.concat;
                    zulu = 'Attempted to send while not being in a connected state opcode: ';
                    zulu = oscar.bind(zulu)(golf);
                    zulu = tango.bind(report)(zulu);
                    _fun105901_ip = 184; continue _fun105901;
 140: // try_start_0
                    tango = _closure3_slot0;
                    report = tango.webSocket;
                    tango = null;
                    if(!(tango != report)) { _fun105901_ip = 180; continue _fun105901 }
 159:
                    zulu = _closure3_slot0;
                    tango = zulu.webSocket;
                    zulu = tango.send;
                    mike = zulu.bind(tango)(mike);
 180: // try_end0
                    _fun105901_ip = 184; continue _fun105901;
 182: // catch_target0
                    CatchBlockStart(arg_register=1);
 184:
                    return entity;
                }
            };
            entity['send'] = offset;
            offset = 14;
            offset = options[offset];
            offset = verify.bind(golf)(offset);
            yankee = offset.prototype;
            yankee = Object.create(yankee, {constructor: {value: offset}});
            kilo = yankee;
            backup = entity;
            offset = new kilo[offset](backup, foxtrot);
            offset = offset instanceof Object ? offset : yankee;
            entity['dispatcher'] = offset;
            oscar = options[oscar];
            yankee = verify.bind(golf)(oscar);
            oscar = yankee.prototype;
            offset = Object.create(oscar, {constructor: {value: yankee}});
            foxtrot = 60000;
            kilo = offset;
            backup = romeo;
            oscar = new kilo[yankee](backup, foxtrot, romeo);
            oscar = oscar instanceof Object ? oscar : offset;
            entity['gatewayBackoff'] = oscar;
            oscar = 15;
            oscar = options[oscar];
            oscar = verify.bind(golf)(oscar);
            oscar = oscar.CLOSED;
            entity['connectionState_'] = oscar;
            entity['webSocket'] = report;
            entity['seq'] = mike;
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
            entity['connectionStartTime'] = mike;
            entity['identifyStartTime'] = mike;
            entity['nextReconnectIsImmediate'] = zulu;
            oscar = _closure1_slot0;
            report = 16;
            report = options[report];
            oscar = oscar.bind(golf)(report);
            report = oscar.getCompressionHandler;
            tango = _closure1_slot15;
            tango = report.bind(oscar)(tango);
            entity['compressionHandler'] = tango;
            entity['hasConnectedOnce'] = zulu;
            entity['isFastConnect'] = zulu;
            entity['identifyCount'] = mike;
            entity['iosGoingAwayEventCount'] = mike;
            return entity;
        };
        var _closure2_slot1 = tango;
        mike = _closure1_slot10;
        zulu = undefined;
        entity = argFoo;
        entity = mike.bind(zulu)(tango, entity);
        mike = _closure1_slot7;
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
            mike = argFoo;
            tango = _closure1_slot14;
            zulu = tango.verbose;
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            entity = 'Setting connection state to ';
            entity = report.bind(entity)(mike);
            entity = zulu.bind(tango)(entity);
            entity = this;
            entity['connectionState_'] = mike;
            entity = undefined;
            return entity;
        };
        report['set'] = entity;
        entity = new Array(41);
        entity[0] = report;
        report = {};
        options = 'addAnalytics';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            mike = this;
            entity = {};
            tango = mike.analytics;
            report = entity;
            zulu = copyDataProperties(report, tango);
            tango = argFoo;
            report = entity;
            zulu = copyDataProperties(report, tango);
            mike['analytics'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[1] = report;
        report = {};
        options = 'setResumeUrl';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun105905: for(var _fun105905_ip = 0; ; ) switch(_fun105905_ip) {
 0:
                oscar = argFoo;
                entity = null;
                zulu = entity != oscar;
                if(!zulu) { _fun105905_ip = 27; continue _fun105905 }
 12:
                tango = oscar.endsWith;
                mike = '/';
                zulu = tango.bind(oscar)(mike);
 27:
                mike = oscar;
                if(!zulu) { _fun105905_ip = 59; continue _fun105905 }
 33:
                report = oscar.substring;
                tango = oscar.length;
                zulu = 1;
                tango = tango - zulu;
                zulu = 0;
                mike = report.bind(oscar)(zulu, tango);
 59:
                if(!(entity !== mike)) { _fun105905_ip = 105; continue _fun105905 }
 63:
                tango = _closure1_slot14;
                zulu = tango.verbose;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                entity = 'Updating resume url to ';
                entity = report.bind(entity)(mike);
                entity = zulu.bind(tango)(entity);
 105:
                entity = this;
                entity['resumeUrl'] = mike;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[2] = report;
        report = {};
        options = '_connect';
        report['key'] = options;
        options = function() { // Original name: value
            _fun105906: for(var _fun105906_ip = 0; ; ) switch(_fun105906_ip) {
 0:
                verify = this;
                var _closure3_slot0 = verify;
                entity = verify.willReconnect;
                zulu = entity.bind(verify)();
                if(zulu) { _fun105906_ip = 51; continue _fun105906 }
 25:
                report = _closure1_slot14;
                tango = report.verbose;
                zulu = 'Skipping _connect because willReconnect is false';
                zulu = tango.bind(report)(zulu);
                _fun105906_ip = 663; continue _fun105906;
 51:
                report = _closure1_slot2;
                tango = _closure1_slot3;
                zulu = 17;
                zulu = tango[zulu];
                tango = undefined;
                report = report.bind(tango)(zulu);
                zulu = report.getIsPaused;
                zulu = zulu.bind(report)();
                if(zulu) { _fun105906_ip = 642; continue _fun105906 }
 89:
                oscar = _closure1_slot1;
                yankee = _closure1_slot3;
                zulu = 15;
                zulu = yankee[zulu];
                zulu = oscar.bind(tango)(zulu);
                zulu = zulu.CONNECTING;
                verify['connectionState'] = zulu;
                zulu = false;
                verify['nextReconnectIsImmediate'] = zulu;
                report = verify.compressionHandler;
                zulu = report.getAlgorithm;
                options = zulu.bind(report)();
                report = _closure1_slot15;
                zulu = report.getName;
                romeo = zulu.bind(report)();
                zulu = verify._getGatewayUrl;
                offset = zulu.bind(verify)();
                report = global;
                zulu = report.window;
                zulu = zulu.GLOBAL_ENV;
                golf = zulu.API_VERSION;
                zulu = 18;
                zulu = yankee[zulu];
                foxtrot = oscar.bind(tango)(zulu);
                yankee = foxtrot.mark;
                oscar = '🌐';
                zulu = 'Socket._connect';
                zulu = yankee.bind(foxtrot)(oscar, zulu);
                foxtrot = _closure1_slot14;
                yankee = foxtrot.info;
                zulu = null;
                oscar = zulu != options;
                result = 'none';
                if(!oscar) { _fun105906_ip = 253; continue _fun105906 }
 250:
                result = options;
 253:
                oscar = report.HermesInternal;
                output = oscar.concat;
                record = '[CONNECT] ';
                sequence = ', encoding: ';
                control = ', version: ';
                update = ', compression: ';
                config = offset;
                vacuum = romeo;
                source = golf;
                echo = result;
                oscar = record[output](config, sequence, vacuum, control, source, update, echo, result);
                oscar = yankee.bind(foxtrot)(oscar);
                oscar = verify.webSocket;
                if(!(zulu !== oscar)) { _fun105906_ip = 357; continue _fun105906 }
 319:
                foxtrot = _closure1_slot14;
                yankee = foxtrot.error;
                oscar = '_connect called with already existing websocket';
                oscar = yankee.bind(foxtrot)(oscar);
                yankee = verify._cleanup;
                oscar = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.close;
                    entity = 4000;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                oscar = yankee.bind(verify)(oscar);
 357:
                yankee = report.Date;
                oscar = yankee.now;
                oscar = oscar.bind(yankee)();
                verify['connectionStartTime'] = oscar;
                foxtrot = report.setTimeout;
                yankee = _closure1_slot16;
                oscar = function() {
                    entity = global;
                    zulu = entity.Date;
                    mike = zulu.now;
                    tango = mike.bind(zulu)();
                    zulu = _closure3_slot0;
                    mike = zulu.connectionStartTime;
                    oscar = tango - mike;
                    report = zulu._handleClose;
                    entity = entity.HermesInternal;
                    tango = entity.concat;
                    mike = 'The connection timed out after ';
                    entity = ' ms - did not receive OP_HELLO in time.';
                    tango = tango.bind(mike)(oscar, entity);
                    mike = false;
                    entity = 0;
                    entity = report.bind(zulu)(mike, entity, tango);
                    mike = zulu.setResumeUrl;
                    entity = null;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                oscar = foxtrot.bind(tango)(oscar, yankee);
                verify['helloTimeout'] = oscar;
                report = report.URL;
                oscar = report.prototype;
                oscar = Object.create(oscar, {constructor: {value: report}});
                record = oscar;
                config = offset;
                report = new record[report](config, sequence);
                oscar = report instanceof Object ? report : oscar;
                var _closure3_slot1 = oscar;
                yankee = oscar.searchParams;
                offset = yankee.append;
                report = 'encoding';
                report = offset.bind(yankee)(report, romeo);
                yankee = oscar.searchParams;
                offset = yankee.append;
                report = golf.toString;
                golf = report.bind(golf)();
                report = 'v';
                report = offset.bind(yankee)(report, golf);
                if(!(zulu != options)) { _fun105906_ip = 519; continue _fun105906 }
 497:
                golf = oscar.searchParams;
                report = golf.append;
                zulu = 'compress';
                zulu = report.bind(golf)(zulu, options);
 519:
                zulu = {};
                report = oscar.toString;
                report = report.bind(oscar)();
                zulu['gatewayURL'] = report;
                report = function(argFoo) { // Original name: newCallback
                    zulu = argFoo;
                    entity = _closure3_slot0;
                    entity['webSocket'] = zulu;
                    mike = entity.compressionHandler;
                    entity = mike.bindWebSocket;
                    entity = entity.bind(mike)(zulu);
                    entity = undefined;
                    return entity;
                };
                zulu['newCallback'] = report;
                report = function(argFoo) { // Original name: onOpen
                    _fun105913: for(var _fun105913_ip = 0; ; ) switch(_fun105913_ip) {
 0:
                        mike = argFoo;
                        tango = _closure1_slot1;
                        zulu = _closure1_slot3;
                        entity = 18;
                        zulu = zulu[entity];
                        entity = undefined;
                        options = tango.bind(entity)(zulu);
                        golf = options.mark;
                        report = global;
                        zulu = report.HermesInternal;
                        tango = zulu.concat;
                        zulu = 'GatewaySocket.onOpen ';
                        tango = tango.bind(zulu)(mike);
                        zulu = '🌐';
                        zulu = golf.bind(options)(zulu, tango);
                        tango = report.Date;
                        zulu = tango.now;
                        options = zulu.bind(tango)();
                        tango = _closure3_slot0;
                        golf = tango.connectionStartTime;
                        backup = options - golf;
                        golf = _closure1_slot14;
                        oscar = golf.info;
                        verify = _closure3_slot1;
                        options = verify.toString;
                        sizing = options.bind(verify)();
                        report = report.HermesInternal;
                        offset = report.concat;
                        output = '[CONNECTED] ';
                        kilo = ' in ';
                        foxtrot = ' ms';
                        report = output[offset](sizing, kilo, backup, foxtrot, romeo);
                        report = oscar.bind(golf)(report);
                        tango['isFastConnect'] = mike;
                        zulu = _closure3_slot0;
                        if(mike) { _fun105913_ip = 188; continue _fun105913 }
 176:
                        mike = zulu._doResumeOrIdentify;
                        mike = mike.bind(zulu)();
                        _fun105913_ip = 200; continue _fun105913;
 188:
                        mike = zulu._doFastConnectIdentify;
                        mike = mike.bind(zulu)();
 200:
                        return entity;
                    }
                };
                zulu['onOpen'] = report;
                options = _closure1_slot23;
                golf = verify.compressionHandler;
                oscar = verify._handleClose;
                report = oscar.bind;
                oscar = report.bind(oscar)(verify);
                report = function(argFoo, argBar) {
                    _fun105914: for(var _fun105914_ip = 0; ; ) switch(_fun105914_ip) {
 0:
                        romeo = argFoo;
                        mike = global;
                        zulu = mike.Date;
                        entity = zulu.now;
                        backup = entity.bind(zulu)();
                        zulu = _closure1_slot15;
                        entity = zulu.unpack;
                        entity = entity.bind(zulu)(romeo);
                        foxtrot = entity.op;
                        offset = entity.s;
                        oscar = entity.t;
                        tango = entity.d;
                        report = _closure1_slot0;
                        entity = _closure1_slot3;
                        yankee = 19;
                        zulu = entity[yankee];
                        entity = undefined;
                        zulu = report.bind(entity)(zulu);
                        zulu = zulu.Opcode;
                        zulu = zulu.DISPATCH;
                        if(!(foxtrot !== zulu)) { _fun105914_ip = 185; continue _fun105914 }
 96:
                        golf = _closure1_slot1;
                        zulu = _closure1_slot3;
                        report = 18;
                        report = zulu[report];
                        options = golf.bind(entity)(report);
                        golf = options.mark;
                        report = _closure1_slot0;
                        zulu = zulu[yankee];
                        zulu = report.bind(entity)(zulu);
                        zulu = zulu.Opcode;
                        sizing = zulu[foxtrot];
                        zulu = mike.HermesInternal;
                        kilo = zulu.concat;
                        report = 'GatewaySocket.onMessage ';
                        zulu = ' ';
                        report = kilo.bind(report)(foxtrot, zulu, sizing);
                        zulu = '🌐';
                        zulu = golf.bind(options)(zulu, report);
 185:
                        zulu = _closure1_slot11;
                        zulu = zulu.isLoggingGatewayEvents;
                        if(!zulu) { _fun105914_ip = 305; continue _fun105914 }
 198:
                        kilo = new Array(1);
                        kilo[0] = foxtrot;
                        report = _closure1_slot0;
                        zulu = _closure1_slot3;
                        zulu = zulu[yankee];
                        zulu = report.bind(entity)(zulu);
                        zulu = zulu.Opcode;
                        zulu = zulu.DISPATCH;
                        if(!(foxtrot === zulu)) { _fun105914_ip = 249; continue _fun105914 }
 239:
                        zulu = kilo.push;
                        zulu = zulu.bind(kilo)(oscar);
 249:
                        zulu = kilo.push;
                        zulu = zulu.bind(kilo)(tango);
                        golf = _closure1_slot14;
                        report = golf.verboseDangerously;
                        zulu = ['<~'];
                        output = 1;
                        echo = zulu;
                        result = kilo;
                        options = arraySpread(echo, result, output);
                        echo = report;
                        result = zulu;
                        output = golf;
                        zulu = apply(echo, result, output);
 305:
                        report = mike.Date;
                        zulu = report.now;
                        zulu = zulu.bind(report)();
                        options = zulu - backup;
                        zulu = 'READY';
                        golf = zulu === oscar;
                        if(golf) { _fun105914_ip = 445; continue _fun105914 }
 335:
                        zulu = 'READY_SUPPLEMENTAL';
                        if(!(zulu !== oscar)) { _fun105914_ip = 406; continue _fun105914 }
 345:
                        zulu = 10;
                        if(!(options > zulu)) { _fun105914_ip = 482; continue _fun105914 }
 355:
                        report = _closure1_slot1;
                        kilo = _closure1_slot3;
                        zulu = 18;
                        zulu = kilo[zulu];
                        sizing = report.bind(entity)(zulu);
                        kilo = sizing.mark;
                        zulu = 'Parse ';
                        report = zulu + oscar;
                        zulu = '🌐';
                        zulu = kilo.bind(sizing)(zulu, report, options);
                        _fun105914_ip = 482; continue _fun105914;
 406:
                        report = _closure1_slot1;
                        kilo = _closure1_slot3;
                        zulu = 20;
                        zulu = kilo[zulu];
                        zulu = report.bind(entity)(zulu);
                        report = zulu.parseReadySupplemental;
                        zulu = report.set;
                        zulu = zulu.bind(report)(backup, options);
                        _fun105914_ip = 482; continue _fun105914;
 445:
                        report = _closure1_slot1;
                        kilo = _closure1_slot3;
                        zulu = 20;
                        zulu = kilo[zulu];
                        zulu = report.bind(entity)(zulu);
                        report = zulu.parseReady;
                        zulu = report.set;
                        zulu = zulu.bind(report)(backup, options);
 482:
                        report = null;
                        if(!(report != offset)) { _fun105914_ip = 501; continue _fun105914 }
 488:
                        zulu = _closure3_slot0;
                        zulu['seq'] = offset;
 501:
                        offset = _closure1_slot0;
                        zulu = _closure1_slot3;
                        zulu = zulu[yankee];
                        zulu = offset.bind(entity)(zulu);
                        zulu = zulu.Opcode;
                        zulu = zulu.HELLO;
                        if(!(zulu !== foxtrot)) { _fun105914_ip = 947; continue _fun105914 }
 537:
                        offset = _closure1_slot0;
                        zulu = _closure1_slot3;
                        zulu = zulu[yankee];
                        zulu = offset.bind(entity)(zulu);
                        zulu = zulu.Opcode;
                        zulu = zulu.RECONNECT;
                        if(!(zulu !== foxtrot)) { _fun105914_ip = 926; continue _fun105914 }
 573:
                        offset = _closure1_slot0;
                        zulu = _closure1_slot3;
                        zulu = zulu[yankee];
                        zulu = offset.bind(entity)(zulu);
                        zulu = zulu.Opcode;
                        zulu = zulu.INVALID_SESSION;
                        if(!(zulu !== foxtrot)) { _fun105914_ip = 904; continue _fun105914 }
 609:
                        offset = _closure1_slot0;
                        zulu = _closure1_slot3;
                        zulu = zulu[yankee];
                        zulu = offset.bind(entity)(zulu);
                        zulu = zulu.Opcode;
                        zulu = zulu.HEARTBEAT;
                        if(!(zulu !== foxtrot)) { _fun105914_ip = 883; continue _fun105914 }
 645:
                        offset = _closure1_slot0;
                        zulu = _closure1_slot3;
                        zulu = zulu[yankee];
                        zulu = offset.bind(entity)(zulu);
                        zulu = zulu.Opcode;
                        zulu = zulu.HEARTBEAT_ACK;
                        if(!(zulu !== foxtrot)) { _fun105914_ip = 861; continue _fun105914 }
 681:
                        offset = _closure1_slot0;
                        zulu = _closure1_slot3;
                        zulu = zulu[yankee];
                        zulu = offset.bind(entity)(zulu);
                        zulu = zulu.Opcode;
                        zulu = zulu.DISPATCH;
                        if(!(zulu !== foxtrot)) { _fun105914_ip = 756; continue _fun105914 }
 714:
                        offset = _closure1_slot14;
                        zulu = offset.info;
                        mike = mike.HermesInternal;
                        yankee = mike.concat;
                        mike = 'Unhandled op ';
                        mike = yankee.bind(mike)(foxtrot);
                        mike = zulu.bind(offset)(mike);
                        _fun105914_ip = 977; continue _fun105914;
 756:
                        zulu = _closure3_slot0;
                        mike = zulu._handleDispatch;
                        report = null;
                        if(!golf) { _fun105914_ip = 852; continue _fun105914 }
 776:
                        golf = {};
                        yankee = argBar;
                        golf['compressed_byte_size'] = yankee;
                        yankee = _closure1_slot24;
                        yankee = yankee.bind(entity)(romeo);
                        golf['uncompressed_byte_size'] = yankee;
                        offset = _closure3_slot0;
                        yankee = offset.compressionHandler;
                        offset = yankee.getAlgorithm;
                        offset = offset.bind(yankee)();
                        golf['compression_algorithm'] = offset;
                        offset = _closure1_slot15;
                        verify = offset.getName;
                        verify = verify.bind(offset)();
                        golf['packing_algorithm'] = verify;
                        golf['unpack_duration_ms'] = options;
                        report = golf;
 852:
                        mike = mike.bind(zulu)(tango, oscar, report);
                        _fun105914_ip = 977; continue _fun105914;
 861:
                        zulu = _closure3_slot0;
                        mike = zulu._handleHeartbeatAck;
                        mike = mike.bind(zulu)(tango);
                        _fun105914_ip = 977; continue _fun105914;
 883:
                        zulu = _closure3_slot0;
                        mike = zulu._handleHeartbeatReceive;
                        mike = mike.bind(zulu)();
                        _fun105914_ip = 977; continue _fun105914;
 904:
                        zulu = _closure3_slot0;
                        mike = zulu._handleInvalidSession;
                        mike = mike.bind(zulu)(tango);
                        _fun105914_ip = 977; continue _fun105914;
 926:
                        zulu = _closure3_slot0;
                        mike = zulu._handleReconnect;
                        mike = mike.bind(zulu)();
                        _fun105914_ip = 977; continue _fun105914;
 947:
                        zulu = _closure3_slot0;
                        mike = zulu._clearHelloTimeout;
                        mike = mike.bind(zulu)();
                        mike = zulu._handleHello;
                        mike = mike.bind(zulu)(tango);
 977:
                        zulu = _closure3_slot0;
                        mike = zulu._sendHeartbeatIfDue;
                        mike = mike.bind(zulu)();
                        return entity;
                    }
                };
                report = options.bind(tango)(golf, oscar, report);
                zulu['onMessage'] = report;
                report = function() { // Original name: onError
                    oscar = _closure3_slot0;
                    mike = oscar.setResumeUrl;
                    entity = null;
                    entity = mike.bind(oscar)(entity);
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 21;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.flushDNSCache;
                    mike = mike.bind(zulu)();
                    report = oscar._handleClose;
                    tango = false;
                    zulu = 0;
                    mike = 'An error with the websocket occurred';
                    mike = report.bind(oscar)(tango, zulu, mike);
                    return entity;
                };
                zulu['onError'] = report;
                report = function(argFoo) { // Original name: onClose
                    entity = argFoo;
                    report = entity.wasClean;
                    tango = entity.code;
                    zulu = entity.reason;
                    mike = _closure3_slot0;
                    entity = mike._handleClose;
                    entity = entity.bind(mike)(report, tango, zulu);
                    return entity;
                };
                zulu['onClose'] = report;
                mike = function(argFoo) { // Original name: newOrTakeoverWebSocket
                    _fun105909: for(var _fun105909_ip = 0; ; ) switch(_fun105909_ip) {
 0:
                        entity = argFoo;
                        kilo = entity.gatewayURL;
                        foxtrot = entity.newCallback;
                        yankee = entity.onOpen;
                        var _closure4_slot0 = yankee;
                        report = entity.onMessage;
                        zulu = entity.onError;
                        tango = entity.onClose;
                        golf = _closure1_slot14;
                        mike = golf.enableNativeLogger;
                        entity = true;
                        entity = mike.bind(golf)(entity);
                        output = global;
                        entity = output.window;
                        source = entity._ws;
                        sizing = false;
                        var _closure4_slot1 = sizing;
                        golf = null;
                        var _closure4_slot2 = golf;
                        entity = output.window;
                        entity['_ws'] = golf;
                        result = golf != source;
                        entity = undefined;
                        mike = undefined;
                        romeo = false;
                        offset = false;
                        options = null;
                        verify = null;
                        if(!result) { _fun105909_ip = 411; continue _fun105909 }
 125:
                        echo = source.ws;
                        result = source.state;
                        result = result.gateway;
                        if(!(result === kilo)) { _fun105909_ip = 328; continue _fun105909 }
 149:
                        result = {};
                        context = source.state;
                        papa = result;
                        update = copyDataProperties(papa, context);
                        update = result.messages;
                        if(!(golf != update)) { _fun105909_ip = 202; continue _fun105909 }
 173:
                        vacuum = result.messages;
                        control = vacuum.map;
                        update = function(argFoo) {
                            _fun105910: for(var _fun105910_ip = 0; ; ) switch(_fun105910_ip) {
 0:
                                zulu = argFoo;
                                tango = zulu.data;
                                mike = null;
                                entity = zulu;
                                if(!(mike != tango)) { _fun105910_ip = 82; continue _fun105910 }
 17:
                                mike = zulu.data;
                                tango = 'string';
                                mike = typeof mike;
                                entity = zulu;
                                if(!(tango === mike)) { _fun105910_ip = 82; continue _fun105910 }
 36:
                                mike = {};
                                options = mike;
                                golf = zulu;
                                tango = copyDataProperties(options, golf);
                                oscar = zulu.data;
                                report = oscar.substring;
                                tango = 0;
                                zulu = 100;
                                tango = report.bind(oscar)(tango, zulu);
                                zulu = 'data';
                                mike[zulu] = tango;
                                entity = mike;
 82:
                                return entity;
                            }
                        };
                        update = control.bind(vacuum)(update);
                        result['messages'] = update;
 202:
                        vacuum = _closure1_slot14;
                        control = vacuum.log;
                        update = {};
                        papa = update;
                        context = result;
                        sequence = copyDataProperties(papa, context);
                        result = result.messages;
                        config = golf == result;
                        sequence = undefined;
                        if(config) { _fun105909_ip = 244; continue _fun105909 }
 239:
                        sequence = result.length;
 244:
                        result = 'messages';
                        update[result] = sequence;
                        result = '[FAST CONNECT] successfully took over websocket, state:';
                        result = control.bind(vacuum)(result, update);
                        result = source.state;
                        romeo = result.open;
                        result = source.state;
                        control = result.identify;
                        _closure4_slot1 = control;
                        result = source.state;
                        options = result.messages;
                        result = source.state;
                        result = result.clientState;
                        _closure4_slot2 = result;
                        mike = echo;
                        offset = control;
                        verify = result;
                        _fun105909_ip = 411; continue _fun105909;
 328:
                        update = _closure1_slot14;
                        result = update.verbose;
                        source = source.state;
                        vacuum = source.gateway;
                        output = output.HermesInternal;
                        control = output.concat;
                        source = '[FAST CONNECT] gatewayURL mismatch: ';
                        output = ' !== ';
                        output = control.bind(source)(vacuum, output, kilo);
                        output = result.bind(update)(output);
                        result = echo.close;
                        output = 1000;
                        output = result.bind(echo)(output);
                        mike = null;
                        romeo = false;
                        offset = false;
                        options = null;
                        verify = null;
 411:
                        if(!(golf == mike)) { _fun105909_ip = 453; continue _fun105909 }
 415:
                        sizing = _closure1_slot1;
                        output = _closure1_slot3;
                        backup = 11;
                        backup = output[backup];
                        backup = sizing.bind(entity)(backup);
                        backup = backup.bind(entity)(kilo);
                        kilo = 'arraybuffer';
                        backup['binaryType'] = kilo;
                        mike = backup;
 453:
                        foxtrot = foxtrot.bind(entity)(mike);
                        if(!romeo) { _fun105909_ip = 467; continue _fun105909 }
 461:
                        verify = yankee.bind(entity)(offset, verify);
 467:
                        if(!(golf != options)) { _fun105909_ip = 481; continue _fun105909 }
 471:
                        golf = options.forEach;
                        golf = golf.bind(options)(report);
 481:
                        oscar = function() {
                            tango = _closure4_slot0;
                            zulu = _closure4_slot1;
                            mike = _closure4_slot2;
                            entity = undefined;
                            entity = tango.bind(entity)(zulu, mike);
                            return entity;
                        };
                        mike['onopen'] = oscar;
                        mike['onmessage'] = report;
                        mike['onclose'] = tango;
                        mike['onerror'] = zulu;
                        return entity;
                    }
                };
                mike = mike.bind(tango)(zulu);
                _fun105906_ip = 663; continue _fun105906;
 642:
                zulu = _closure1_slot14;
                mike = zulu.info;
                entity = 'Skipping _connect because socket is paused';
                entity = mike.bind(zulu)(entity);
 663:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[3] = report;
        report = {};
        options = '_handleHello';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            options = argFoo;
            zulu = this;
            romeo = options.heartbeat_interval;
            zulu['heartbeatInterval'] = romeo;
            mike = global;
            tango = mike.Date;
            entity = tango.now;
            tango = entity.bind(tango)();
            entity = zulu.connectionStartTime;
            backup = tango - entity;
            report = _closure1_slot14;
            tango = report.verbose;
            golf = _closure1_slot0;
            oscar = _closure1_slot3;
            entity = 22;
            oscar = oscar[entity];
            entity = undefined;
            golf = golf.bind(entity)(oscar);
            oscar = golf.getConnectionPath;
            result = oscar.bind(golf)(options);
            mike = mike.HermesInternal;
            verify = mike.concat;
            echo = '[HELLO] via ';
            output = ', heartbeat interval: ';
            kilo = ', took ';
            foxtrot = ' ms';
            sizing = romeo;
            mike = echo[verify](result, output, sizing, kilo, backup, foxtrot, romeo);
            mike = tango.bind(report)(mike);
            mike = zulu._startHeartbeater;
            mike = mike.bind(zulu)();
            return entity;
        };
        report['value'] = options;
        entity[4] = report;
        report = {};
        options = '_handleReconnect';
        report['key'] = options;
        options = function() { // Original name: value
            zulu = this;
            report = _closure1_slot14;
            tango = report.verbose;
            mike = '[RECONNECT] gateway requested I reconnect.';
            mike = tango.bind(report)(mike);
            tango = zulu._cleanup;
            mike = function(argFoo) {
                zulu = argFoo;
                mike = zulu.close;
                entity = 4000;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            tango = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 15;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            mike = mike.WILL_RECONNECT;
            zulu['connectionState'] = mike;
            mike = zulu._connect;
            mike = mike.bind(zulu)();
            return entity;
        };
        report['value'] = options;
        entity[5] = report;
        report = {};
        options = '_handleInvalidSession';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun105920: for(var _fun105920_ip = 0; ; ) switch(_fun105920_ip) {
 0:
                entity = argFoo;
                mike = this;
                report = _closure1_slot14;
                tango = report.info;
                oscar = '';
                if(!entity) { _fun105920_ip = 32; continue _fun105920 }
 26:
                oscar = ' can resume)';
 32:
                zulu = '[INVALID_SESSION]';
                zulu = zulu + oscar;
                zulu = tango.bind(report)(zulu);
                if(entity) { _fun105920_ip = 62; continue _fun105920 }
 50:
                entity = mike._doIdentify;
                entity = entity.bind(mike)();
                _fun105920_ip = 72; continue _fun105920;
 62:
                entity = mike._doResumeOrIdentify;
                entity = entity.bind(mike)();
 72:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[6] = report;
        report = {};
        options = '_handleDispatch';
        report['key'] = options;
        options = function(argFoo, argBar, argBaz) { // Original name: value
            _fun105921: for(var _fun105921_ip = 0; ; ) switch(_fun105921_ip) {
 0:
                report = argFoo;
                tango = argBar;
                entity = this;
                mike = global;
                oscar = mike.Date;
                zulu = oscar.now;
                oscar = zulu.bind(oscar)();
                zulu = entity.connectionStartTime;
                kilo = oscar - zulu;
                zulu = 'READY';
                if(!(zulu !== tango)) { _fun105921_ip = 284; continue _fun105921 }
 47:
                zulu = 'READY_SUPPLEMENTAL';
                if(!(zulu !== tango)) { _fun105921_ip = 176; continue _fun105921 }
 57:
                zulu = 'RESUMED';
                if(!(zulu === tango)) { _fun105921_ip = 502; continue _fun105921 }
 68:
                offset = _closure1_slot14;
                verify = offset.verbose;
                yankee = _closure1_slot0;
                options = _closure1_slot3;
                oscar = 22;
                oscar = options[oscar];
                golf = undefined;
                yankee = yankee.bind(golf)(oscar);
                oscar = yankee.getConnectionPath;
                oscar = oscar.bind(yankee)(report);
                oscar = verify.bind(offset)(oscar);
                oscar = _closure1_slot1;
                zulu = 15;
                zulu = options[zulu];
                zulu = oscar.bind(golf)(zulu);
                zulu = zulu.SESSION_ESTABLISHED;
                entity['connectionState'] = zulu;
                oscar = entity.gatewayBackoff;
                zulu = oscar.succeed;
                zulu = zulu.bind(oscar)();
                zulu = 0;
                entity['iosGoingAwayEventCount'] = zulu;
                _fun105921_ip = 502; continue _fun105921;
 176:
                options = _closure1_slot14;
                golf = options.info;
                oscar = mike.HermesInternal;
                offset = oscar.concat;
                verify = '[READY_SUPPLEMENTAL] took ';
                oscar = 'ms';
                oscar = offset.bind(verify)(kilo, oscar);
                oscar = golf.bind(options)(oscar);
                golf = _closure1_slot1;
                oscar = _closure1_slot3;
                zulu = 15;
                oscar = oscar[zulu];
                zulu = undefined;
                zulu = golf.bind(zulu)(oscar);
                zulu = zulu.SESSION_ESTABLISHED;
                entity['connectionState'] = zulu;
                oscar = entity.gatewayBackoff;
                zulu = oscar.succeed;
                zulu = zulu.bind(oscar)();
                zulu = 0;
                entity['iosGoingAwayEventCount'] = zulu;
                _fun105921_ip = 502; continue _fun105921;
 284:
                backup = report.session_id;
                entity['sessionId'] = backup;
                verify = _closure1_slot0;
                golf = _closure1_slot3;
                zulu = 22;
                zulu = golf[zulu];
                oscar = undefined;
                verify = verify.bind(oscar)(zulu);
                zulu = verify.getConnectionPath;
                yankee = zulu.bind(verify)(report);
                zulu = _closure1_slot1;
                verify = 18;
                verify = golf[verify];
                offset = zulu.bind(oscar)(verify);
                verify = offset.setServerTrace;
                verify = verify.bind(offset)(yankee);
                verify = _closure1_slot14;
                offset = verify.info;
                options = mike.HermesInternal;
                foxtrot = options.concat;
                romeo = '[READY] took ';
                options = 'ms, as ';
                options = foxtrot.bind(romeo)(kilo, options, backup);
                options = offset.bind(verify)(options);
                options = verify.verbose;
                mike = mike.HermesInternal;
                offset = mike.concat;
                mike = '';
                mike = offset.bind(mike)(yankee);
                mike = options.bind(verify)(mike);
                mike = 15;
                mike = golf[mike];
                mike = zulu.bind(oscar)(mike);
                mike = mike.SESSION_ESTABLISHED;
                entity['connectionState'] = mike;
                zulu = entity.gatewayBackoff;
                mike = zulu.succeed;
                mike = mike.bind(zulu)();
                mike = 0;
                entity['iosGoingAwayEventCount'] = mike;
                zulu = entity.setResumeUrl;
                mike = report.resume_gateway_url;
                mike = zulu.bind(entity)(mike);
 502:
                zulu = entity.dispatcher;
                mike = zulu.receiveDispatch;
                entity = argBaz;
                entity = mike.bind(zulu)(report, tango, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[7] = report;
        report = {};
        options = 'handleResumeDispatched';
        report['key'] = options;
        options = function() { // Original name: value
            tango = this;
            entity = global;
            zulu = entity.Date;
            mike = zulu.now;
            zulu = mike.bind(zulu)();
            mike = tango.connectionStartTime;
            backup = zulu - mike;
            zulu = _closure1_slot14;
            mike = zulu.info;
            report = tango.dispatcher;
            report = report.resumeAnalytics;
            romeo = report.numEvents;
            offset = tango.seq;
            entity = entity.HermesInternal;
            oscar = entity.concat;
            kilo = '[RESUMED] took ';
            foxtrot = 'ms, replayed ';
            yankee = ' events, new seq: ';
            entity = kilo[oscar](backup, foxtrot, romeo, yankee, offset, verify);
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[8] = report;
        report = {};
        options = 'handleReadyDispatched';
        report['key'] = options;
        options = function() { // Original name: value
            mike = this;
            entity = false;
            mike['didForceClearGuildHashes'] = entity;
            entity = true;
            mike['hasConnectedOnce'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[9] = report;
        report = {};
        options = '_getGatewayUrl';
        report['key'] = options;
        options = function() { // Original name: value
            _fun105924: for(var _fun105924_ip = 0; ; ) switch(_fun105924_ip) {
 0:
                mike = this;
                zulu = mike.resumeUrl;
                entity = null;
                if(!(entity == zulu)) { _fun105924_ip = 24; continue _fun105924 }
 15:
                entity = _closure1_slot19;
                _fun105924_ip = 30; continue _fun105924;
 24:
                entity = mike.resumeUrl;
 30:
                return entity;
            }
        };
        report['value'] = options;
        entity[10] = report;
        report = {};
        options = '_handleHeartbeatReceive';
        report['key'] = options;
        options = function() { // Original name: value
            _fun105925: for(var _fun105925_ip = 0; ; ) switch(_fun105925_ip) {
 0:
                mike = this;
                entity = mike._sendHeartbeat;
                entity = entity.bind(mike)();
                entity = mike.heartbeater;
                tango = null;
                entity = tango != entity;
                if(!entity) { _fun105925_ip = 38; continue _fun105925 }
 28:
                zulu = mike.heartbeatInterval;
                entity = tango != zulu;
 38:
                if(!entity) { _fun105925_ip = 102; continue _fun105925 }
 41:
                entity = global;
                tango = entity.clearInterval;
                zulu = mike.heartbeater;
                report = undefined;
                zulu = tango.bind(report)(zulu);
                tango = entity.setInterval;
                zulu = mike._doHeartbeatInterval;
                entity = zulu.bind;
                zulu = entity.bind(zulu)(mike);
                entity = mike.heartbeatInterval;
                entity = tango.bind(report)(zulu, entity);
                mike['heartbeater'] = entity;
 102:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[11] = report;
        report = {};
        options = '_handleHeartbeatAck';
        report['key'] = options;
        options = function() { // Original name: value
            _fun105926: for(var _fun105926_ip = 0; ; ) switch(_fun105926_ip) {
 0:
                mike = this;
                zulu = global;
                tango = zulu.Date;
                entity = tango.now;
                entity = entity.bind(tango)();
                mike['lastHeartbeatAckTime'] = entity;
                entity = true;
                mike['heartbeatAck'] = entity;
                tango = mike.expeditedHeartbeatTimeout;
                entity = null;
                if(!(entity !== tango)) { _fun105926_ip = 95; continue _fun105926 }
 46:
                report = zulu.clearTimeout;
                tango = mike.expeditedHeartbeatTimeout;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['expeditedHeartbeatTimeout'] = entity;
                zulu = _closure1_slot14;
                mike = zulu.verbose;
                entity = 'Expedited heartbeat succeeded';
                entity = mike.bind(zulu)(entity);
 95:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[12] = report;
        report = {};
        options = '_handleHeartbeatTimeout';
        report['key'] = options;
        options = function() { // Original name: value
            tango = this;
            var _closure3_slot0 = tango;
            mike = tango._cleanup;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = zulu.close;
                entity = 4000;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(tango)(entity);
            oscar = _closure1_slot1;
            report = _closure1_slot3;
            entity = 15;
            report = report[entity];
            entity = undefined;
            report = oscar.bind(entity)(report);
            report = report.WILL_RECONNECT;
            tango['connectionState'] = report;
            report = tango.gatewayBackoff;
            tango = report.fail;
            zulu = function() {
                mike = _closure3_slot0;
                entity = mike._connect;
                entity = entity.bind(mike)();
                return entity;
            };
            report = tango.bind(report)(zulu);
            tango = _closure1_slot14;
            zulu = tango.warn;
            mike = 1000;
            oscar = report / mike;
            report = oscar.toFixed;
            mike = 2;
            golf = report.bind(oscar)(mike);
            mike = global;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            report = '[ACK TIMEOUT] reconnecting in ';
            mike = ' seconds.';
            mike = oscar.bind(report)(golf, mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = options;
        entity[13] = report;
        report = {};
        options = '_handleClose';
        report['key'] = options;
        options = function(argFoo, argBar, argBaz) { // Original name: value
            _fun105930: for(var _fun105930_ip = 0; ; ) switch(_fun105930_ip) {
 0:
                report = argFoo;
                tango = argBar;
                zulu = argBaz;
                mike = this;
                var _closure3_slot0 = mike;
                if(report) { _fun105930_ip = 23; continue _fun105930 }
 21:
                report = false;
 23:
                entity = mike._cleanup;
                entity = entity.bind(mike)();
                options = mike.emit;
                oscar = {};
                oscar['code'] = tango;
                oscar['reason'] = zulu;
                entity = 'close';
                entity = options.bind(mike)(entity, oscar);
                entity = 4004;
                if(!(tango !== entity)) { _fun105930_ip = 382; continue _fun105930 }
 73:
                entity = mike._tryDetectInvalidIOSToken;
                entity = entity.bind(mike)(tango, zulu, report);
                verify = _closure1_slot1;
                options = _closure1_slot3;
                entity = 15;
                options = options[entity];
                entity = undefined;
                options = verify.bind(entity)(options);
                options = options.WILL_RECONNECT;
                mike['connectionState'] = options;
                options = mike.nextReconnectIsImmediate;
                if(options) { _fun105930_ip = 299; continue _fun105930 }
 137:
                verify = mike.gatewayBackoff;
                options = verify.fail;
                golf = function() {
                    mike = _closure3_slot0;
                    entity = mike._connect;
                    entity = entity.bind(mike)();
                    return entity;
                };
                offset = options.bind(verify)(golf);
                verify = _closure1_slot14;
                options = verify.info;
                golf = report.toString;
                kilo = golf.bind(report)();
                golf = 1000;
                yankee = offset / golf;
                offset = yankee.toFixed;
                golf = 2;
                output = offset.bind(yankee)(golf);
                golf = global;
                golf = golf.HermesInternal;
                foxtrot = golf.concat;
                sequence = '[WS CLOSED] (';
                yankee = ', ';
                result = ') retrying in ';
                sizing = ' seconds.';
                vacuum = kilo;
                control = yankee;
                source = tango;
                update = yankee;
                echo = zulu;
                golf = sequence[foxtrot](vacuum, control, source, update, echo, result, output, sizing, kilo);
                golf = options.bind(verify)(golf);
                golf = mike.gatewayBackoff;
                options = golf.fails;
                golf = 4;
                if(!(options > golf)) { _fun105930_ip = 380; continue _fun105930 }
 284:
                golf = mike._reset;
                golf = golf.bind(mike)(report, tango, zulu);
                _fun105930_ip = 380; continue _fun105930;
 299:
                options = _closure1_slot14;
                golf = options.info;
                oscar = report.toString;
                vacuum = oscar.bind(report)();
                oscar = global;
                oscar = oscar.HermesInternal;
                yankee = oscar.concat;
                sequence = '[WS CLOSED] (';
                verify = ', ';
                result = ') retrying immediately.';
                control = verify;
                source = tango;
                update = verify;
                echo = zulu;
                oscar = sequence[yankee](vacuum, control, source, update, echo, result, output);
                oscar = golf.bind(options)(oscar);
                oscar = mike._connect;
                oscar = oscar.bind(mike)();
 380:
                return entity;
 382:
                options = _closure1_slot1;
                golf = _closure1_slot3;
                oscar = 15;
                golf = golf[oscar];
                oscar = undefined;
                oscar = options.bind(oscar)(golf);
                oscar = oscar.CLOSED;
                mike['connectionState'] = oscar;
                golf = _closure1_slot14;
                oscar = golf.warn;
                entity = '[WS CLOSED] because of authentication failure, marking as closed.';
                entity = oscar.bind(golf)(entity);
                entity = mike._reset;
                entity = entity.bind(mike)(report, tango, zulu);
                return entity;
            }
        };
        report['value'] = options;
        entity[14] = report;
        report = {};
        options = '_tryDetectInvalidIOSToken';
        report['key'] = options;
        options = function(argFoo, argBar, argBaz) { // Original name: value
            _fun105932: for(var _fun105932_ip = 0; ; ) switch(_fun105932_ip) {
 0:
                golf = this;
                var _closure3_slot0 = golf;
                entity = argBaz;
                var _closure3_slot1 = entity;
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 23;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isIOS;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun105932_ip = 66; continue _fun105932 }
 54:
                report = golf.token;
                tango = null;
                zulu = tango != report;
 66:
                if(!zulu) { _fun105932_ip = 82; continue _fun105932 }
 69:
                report = 1001;
                tango = argFoo;
                zulu = report === tango;
 82:
                if(!zulu) { _fun105932_ip = 98; continue _fun105932 }
 85:
                report = 'Stream end encountered';
                tango = argBar;
                zulu = report === tango;
 98:
                if(!zulu) { _fun105932_ip = 236; continue _fun105932 }
 104:
                tango = golf.iosGoingAwayEventCount;
                zulu = 1;
                zulu = tango + zulu;
                golf['iosGoingAwayEventCount'] = zulu;
                tango = golf.iosGoingAwayEventCount;
                zulu = 3;
                if(!(zulu === tango)) { _fun105932_ip = 236; continue _fun105932 }
 136:
                tango = _closure1_slot0;
                report = _closure1_slot3;
                zulu = 24;
                zulu = report[zulu];
                zulu = tango.bind(entity)(zulu);
                report = zulu.HTTP;
                tango = report.get;
                zulu = {};
                oscar = _closure1_slot13;
                oscar = oscar.ME;
                zulu['url'] = oscar;
                oscar = {};
                golf = golf.token;
                oscar['authorization'] = golf;
                zulu['headers'] = oscar;
                oscar = false;
                zulu['rejectWithError'] = oscar;
                report = tango.bind(report)(zulu);
                tango = report.then;
                zulu = function(argFoo) {
                    entity = argFoo;
                    oscar = entity.status;
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    entity = 25;
                    zulu = zulu[entity];
                    entity = undefined;
                    report = tango.bind(entity)(zulu);
                    tango = report.track;
                    mike = _closure1_slot12;
                    zulu = mike.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED;
                    mike = {};
                    mike['api_status_code'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                mike = function(argFoo) {
                    _fun105934: for(var _fun105934_ip = 0; ; ) switch(_fun105934_ip) {
 0:
                        entity = argFoo;
                        oscar = entity.status;
                        entity = 401;
                        if(!(entity === oscar)) { _fun105934_ip = 111; continue _fun105934 }
 18:
                        report = _closure3_slot0;
                        golf = _closure1_slot1;
                        tango = _closure1_slot3;
                        zulu = 15;
                        tango = tango[zulu];
                        zulu = undefined;
                        zulu = golf.bind(zulu)(tango);
                        zulu = zulu.CLOSED;
                        report['connectionState'] = zulu;
                        tango = _closure1_slot14;
                        zulu = tango.warn;
                        mike = '[WS CLOSED] because of manual authentication failure, marking as closed.';
                        mike = zulu.bind(tango)(mike);
                        tango = report._reset;
                        zulu = _closure3_slot1;
                        mike = 4004;
                        entity = 'invalid token manually detected';
                        entity = tango.bind(report)(zulu, mike, entity);
 111:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot3;
                        entity = 25;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.track;
                        mike = _closure1_slot12;
                        zulu = mike.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED;
                        mike = {};
                        mike['api_status_code'] = oscar;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    }
                };
                mike = tango.bind(report)(zulu, mike);
 236:
                return entity;
            }
        };
        report['value'] = options;
        entity[15] = report;
        report = {};
        options = '_reset';
        report['key'] = options;
        options = function(argFoo, argBar, argBaz) { // Original name: value
            oscar = argFoo;
            report = argBar;
            entity = argBaz;
            tango = this;
            mike = null;
            tango['sessionId'] = mike;
            mike = 0;
            tango['seq'] = mike;
            golf = _closure1_slot14;
            zulu = golf.warn;
            mike = oscar.toString;
            output = mike.bind(oscar)();
            mike = global;
            mike = mike.HermesInternal;
            offset = mike.concat;
            result = '[RESET] (';
            options = ', ';
            romeo = ')';
            sizing = options;
            kilo = report;
            backup = options;
            foxtrot = entity;
            mike = result[offset](output, sizing, kilo, backup, foxtrot, romeo, yankee);
            mike = zulu.bind(golf)(mike);
            zulu = tango.emit;
            mike = {};
            mike['wasClean'] = oscar;
            mike['code'] = report;
            mike['reason'] = entity;
            entity = 'disconnect';
            entity = zulu.bind(tango)(entity, mike);
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[16] = report;
        report = {};
        options = '_sendHeartbeatIfDue';
        report['key'] = options;
        options = function() { // Original name: value
            _fun105936: for(var _fun105936_ip = 0; ; ) switch(_fun105936_ip) {
 0:
                mike = this;
                zulu = mike.heartbeatInterval;
                entity = null;
                if(!(entity != zulu)) { _fun105936_ip = 92; continue _fun105936 }
 15:
                zulu = mike.heartbeater;
                if(!(entity != zulu)) { _fun105936_ip = 92; continue _fun105936 }
 25:
                tango = mike.lastHeartbeatTime;
                entity = entity != tango;
                if(!entity) { _fun105936_ip = 79; continue _fun105936 }
 38:
                zulu = global;
                report = zulu.Date;
                zulu = report.now;
                zulu = zulu.bind(report)();
                tango = zulu - tango;
                report = mike.heartbeatInterval;
                zulu = 5000;
                zulu = report + zulu;
                entity = tango > zulu;
 79:
                if(!entity) { _fun105936_ip = 92; continue _fun105936 }
 82:
                entity = mike._sendHeartbeat;
                entity = entity.bind(mike)();
 92:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[17] = report;
        report = {};
        options = '_doHeartbeatInterval';
        report['key'] = options;
        options = function() { // Original name: value
            _fun105937: for(var _fun105937_ip = 0; ; ) switch(_fun105937_ip) {
 0:
                mike = this;
                entity = mike.heartbeatAck;
                if(entity) { _fun105937_ip = 36; continue _fun105937 }
 12:
                zulu = mike.expeditedHeartbeatTimeout;
                entity = null;
                if(!(entity === zulu)) { _fun105937_ip = 54; continue _fun105937 }
 24:
                entity = mike._handleHeartbeatTimeout;
                entity = entity.bind(mike)();
                _fun105937_ip = 54; continue _fun105937;
 36:
                entity = false;
                mike['heartbeatAck'] = entity;
                entity = mike._sendHeartbeat;
                entity = entity.bind(mike)();
 54:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[18] = report;
        report = {};
        options = '_startHeartbeater';
        report['key'] = options;
        options = function() { // Original name: value
            _fun105938: for(var _fun105938_ip = 0; ; ) switch(_fun105938_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                options = zulu.heartbeatInterval;
                var _closure3_slot1 = options;
                report = _closure1_slot1;
                tango = _closure1_slot3;
                entity = 26;
                tango = tango[entity];
                entity = undefined;
                golf = report.bind(entity)(tango);
                tango = null;
                oscar = tango != options;
                report = 'GatewaySocket: Heartbeat interval should never null here.';
                report = golf.bind(entity)(oscar, report);
                report = zulu.initialHeartbeatTimeout;
                if(!(tango !== report)) { _fun105938_ip = 91; continue _fun105938 }
 72:
                report = global;
                oscar = report.clearTimeout;
                report = zulu.initialHeartbeatTimeout;
                report = oscar.bind(entity)(report);
 91:
                report = zulu.heartbeater;
                if(!(tango !== report)) { _fun105938_ip = 126; continue _fun105938 }
 101:
                report = global;
                oscar = report.clearInterval;
                report = zulu.heartbeater;
                report = oscar.bind(entity)(report);
                zulu['heartbeater'] = tango;
 126:
                tango = global;
                report = tango.setTimeout;
                golf = tango.Math;
                oscar = golf.floor;
                verify = tango.Math;
                tango = verify.random;
                tango = tango.bind(verify)();
                tango = tango * options;
                tango = oscar.bind(golf)(tango);
                mike = function() {
                    zulu = _closure3_slot0;
                    mike = null;
                    zulu['initialHeartbeatTimeout'] = mike;
                    mike = true;
                    zulu['heartbeatAck'] = mike;
                    mike = global;
                    report = mike.setInterval;
                    tango = zulu._doHeartbeatInterval;
                    mike = tango.bind;
                    tango = mike.bind(tango)(zulu);
                    mike = _closure3_slot1;
                    entity = undefined;
                    mike = report.bind(entity)(tango, mike);
                    zulu['heartbeater'] = mike;
                    mike = zulu._doHeartbeatInterval;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                mike = report.bind(entity)(mike, tango);
                zulu['initialHeartbeatTimeout'] = mike;
                return entity;
            }
        };
        report['value'] = options;
        entity[19] = report;
        report = {};
        options = '_stopHeartbeater';
        report['key'] = options;
        options = function() { // Original name: value
            _fun105940: for(var _fun105940_ip = 0; ; ) switch(_fun105940_ip) {
 0:
                mike = this;
                zulu = mike.heartbeater;
                entity = null;
                if(!(entity !== zulu)) { _fun105940_ip = 42; continue _fun105940 }
 15:
                zulu = global;
                report = zulu.clearInterval;
                tango = mike.heartbeater;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['heartbeater'] = entity;
 42:
                zulu = mike.initialHeartbeatTimeout;
                if(!(entity !== zulu)) { _fun105940_ip = 79; continue _fun105940 }
 52:
                zulu = global;
                report = zulu.clearTimeout;
                tango = mike.initialHeartbeatTimeout;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['initialHeartbeatTimeout'] = entity;
 79:
                zulu = mike.expeditedHeartbeatTimeout;
                if(!(entity !== zulu)) { _fun105940_ip = 116; continue _fun105940 }
 89:
                zulu = global;
                report = zulu.clearTimeout;
                tango = mike.expeditedHeartbeatTimeout;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['expeditedHeartbeatTimeout'] = entity;
 116:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[20] = report;
        report = {};
        options = '_clearHelloTimeout';
        report['key'] = options;
        options = function() { // Original name: value
            _fun105941: for(var _fun105941_ip = 0; ; ) switch(_fun105941_ip) {
 0:
                mike = this;
                zulu = mike.helloTimeout;
                entity = null;
                if(!(entity != zulu)) { _fun105941_ip = 42; continue _fun105941 }
 15:
                zulu = global;
                report = zulu.clearTimeout;
                tango = mike.helloTimeout;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['helloTimeout'] = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[21] = report;
        report = {};
        options = '_cleanup';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun105942: for(var _fun105942_ip = 0; ; ) switch(_fun105942_ip) {
 0:
                report = argFoo;
                zulu = this;
                oscar = _closure1_slot1;
                tango = _closure1_slot3;
                entity = 27;
                tango = tango[entity];
                entity = undefined;
                tango = oscar.bind(entity)(tango);
                oscar = tango.Emitter;
                tango = oscar.resume;
                tango = tango.bind(oscar)();
                tango = zulu._stopHeartbeater;
                tango = tango.bind(zulu)();
                tango = zulu._clearHelloTimeout;
                tango = tango.bind(zulu)();
                tango = zulu.webSocket;
                oscar = null;
                zulu['webSocket'] = oscar;
                if(!(oscar != tango)) { _fun105942_ip = 124; continue _fun105942 }
 87:
                golf = _closure1_slot22;
                tango['onopen'] = golf;
                tango['onmessage'] = golf;
                tango['onerror'] = golf;
                tango['onclose'] = golf;
                if(!(oscar != report)) { _fun105942_ip = 124; continue _fun105942 }
 119:
                tango = report.bind(entity)(tango);
 124:
                report = zulu.gatewayBackoff;
                tango = report.cancel;
                tango = tango.bind(report)();
                report = zulu.compressionHandler;
                tango = report.close;
                tango = tango.bind(report)();
                report = _closure1_slot0;
                oscar = _closure1_slot3;
                tango = 16;
                tango = oscar[tango];
                report = report.bind(entity)(tango);
                tango = report.getCompressionHandler;
                mike = _closure1_slot15;
                mike = tango.bind(report)(mike);
                zulu['compressionHandler'] = mike;
                return entity;
            }
        };
        report['value'] = options;
        entity[22] = report;
        report = {};
        options = '_doResume';
        report['key'] = options;
        options = function() { // Original name: value
            _fun105943: for(var _fun105943_ip = 0; ; ) switch(_fun105943_ip) {
 0:
                oscar = this;
                tango = _closure1_slot1;
                golf = _closure1_slot3;
                entity = 15;
                zulu = golf[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.RESUMING;
                oscar['connectionState'] = zulu;
                report = oscar.dispatcher;
                tango = _closure1_slot0;
                zulu = 22;
                zulu = golf[zulu];
                options = tango.bind(entity)(zulu);
                golf = options.createResumeAnalytics;
                zulu = global;
                verify = zulu.Date;
                tango = verify.now;
                verify = tango.bind(verify)();
                tango = oscar.connectionStartTime;
                tango = verify - tango;
                tango = golf.bind(options)(tango);
                report['resumeAnalytics'] = tango;
                report = _closure1_slot14;
                tango = report.info;
                golf = oscar.sessionId;
                options = null;
                options = options != golf;
                offset = '';
                if(!options) { _fun105943_ip = 138; continue _fun105943 }
 135:
                offset = golf;
 138:
                verify = oscar.seq;
                zulu = zulu.HermesInternal;
                options = zulu.concat;
                golf = '[RESUME] resuming session ';
                zulu = ', seq: ';
                zulu = options.bind(golf)(offset, zulu, verify);
                zulu = tango.bind(report)(zulu);
                report = oscar.send;
                zulu = _closure1_slot0;
                tango = _closure1_slot3;
                mike = 19;
                mike = tango[mike];
                mike = zulu.bind(entity)(mike);
                mike = mike.Opcode;
                tango = mike.RESUME;
                zulu = {};
                mike = oscar.token;
                zulu['token'] = mike;
                mike = oscar.sessionId;
                zulu['session_id'] = mike;
                mike = oscar.seq;
                zulu['seq'] = mike;
                mike = false;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            }
        };
        report['value'] = options;
        entity[23] = report;
        report = {};
        options = '_doIdentify';
        report['key'] = options;
        options = _closure1_slot5;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun105945: for(var _fun105945_ip = 0; ; ) switch(_fun105945_ip) {
 0:
                    StartGenerator();
                    golf = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun105945_ip = 834; continue _fun105945 }
 13:
                    tango = 0;
                    golf['seq'] = tango;
                    mike = null;
                    golf['sessionId'] = mike;
                    zulu = golf.handleIdentify;
                    oscar = zulu.bind(golf)();
                    if(!(mike === oscar)) { _fun105945_ip = 75; continue _fun105945 }
 43:
                    options = golf._handleClose;
                    report = true;
                    zulu = 4004;
                    mike = 'No connection info provided';
                    mike = options.bind(golf)(report, zulu, mike);
                    _fun105945_ip = 826; continue _fun105945;
 75:
                    verify = _closure1_slot1;
                    mike = _closure1_slot3;
                    backup = 15;
                    report = mike[backup];
                    options = undefined;
                    report = verify.bind(options)(report);
                    report = report.IDENTIFYING;
                    golf['connectionState'] = report;
                    offset = global;
                    verify = offset.Date;
                    report = verify.now;
                    verify = report.bind(verify)();
                    golf['identifyStartTime'] = verify;
                    yankee = offset.Promise;
                    report = yankee.all;
                    romeo = _closure1_slot0;
                    kilo = 28;
                    mike = mike[kilo];
                    romeo = romeo.bind(options)(mike);
                    mike = romeo.isCacheEnabled;
                    mike = mike.bind(romeo)();
                    if(mike) { _fun105945_ip = 180; continue _fun105945 }
 176:
                    romeo = {};
                    _fun105945_ip = 210; continue _fun105945;
 180:
                    foxtrot = _closure1_slot1;
                    sizing = _closure1_slot3;
                    mike = 29;
                    mike = sizing[mike];
                    foxtrot = foxtrot.bind(options)(mike);
                    mike = foxtrot.getCommittedVersions;
                    romeo = mike.bind(foxtrot)();
 210:
                    mike = new Array(3);
                    mike[0] = romeo;
                    foxtrot = _closure1_slot0;
                    romeo = _closure1_slot3;
                    romeo = romeo[kilo];
                    foxtrot = foxtrot.bind(options)(romeo);
                    romeo = foxtrot.isCacheEnabled;
                    romeo = romeo.bind(foxtrot)();
                    if(romeo) { _fun105945_ip = 252; continue _fun105945 }
 248:
                    romeo = {};
                    _fun105945_ip = 282; continue _fun105945;
 252:
                    sizing = _closure1_slot1;
                    output = _closure1_slot3;
                    foxtrot = 30;
                    foxtrot = output[foxtrot];
                    sizing = sizing.bind(options)(foxtrot);
                    foxtrot = sizing.getCommittedVersions;
                    romeo = foxtrot.bind(sizing)();
 282:
                    mike[1] = romeo;
                    foxtrot = _closure1_slot0;
                    romeo = _closure1_slot3;
                    romeo = romeo[kilo];
                    foxtrot = foxtrot.bind(options)(romeo);
                    romeo = foxtrot.isCacheEnabled;
                    romeo = romeo.bind(foxtrot)();
                    foxtrot = !romeo;
                    romeo = !foxtrot;
                    if(foxtrot) { _fun105945_ip = 352; continue _fun105945 }
 322:
                    kilo = _closure1_slot1;
                    sizing = _closure1_slot3;
                    foxtrot = 31;
                    foxtrot = sizing[foxtrot];
                    kilo = kilo.bind(options)(foxtrot);
                    foxtrot = kilo.canUseGuildVersions;
                    romeo = foxtrot.bind(kilo)();
 352:
                    mike[2] = romeo;
                    mike = report.bind(yankee)(mike);
                    SaveGenerator(address=365);
 363:
                    return mike;
 365:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun105945_ip = 831; continue _fun105945 }
 374:
                    yankee = _closure1_slot4;
                    report = 3;
                    yankee = yankee.bind(options)(mike, report);
                    foxtrot = yankee[tango];
                    report = 1;
                    romeo = yankee[report];
                    tango = 2;
                    tango = yankee[tango];
                    if(tango) { _fun105945_ip = 419; continue _fun105945 }
 408:
                    yankee = {};
                    tango = {};
                    yankee['guild_versions'] = tango;
                    _fun105945_ip = 506; continue _fun105945;
 419:
                    tango = {};
                    tango['guild_versions'] = foxtrot;
                    foxtrot = romeo.highest_last_message_id;
                    tango['highest_last_message_id'] = foxtrot;
                    foxtrot = romeo.read_state_version;
                    tango['read_state_version'] = foxtrot;
                    foxtrot = romeo.user_guild_settings_version;
                    tango['user_guild_settings_version'] = foxtrot;
                    foxtrot = romeo.user_settings_version;
                    tango['user_settings_version'] = foxtrot;
                    foxtrot = romeo.private_channels_version;
                    tango['private_channels_version'] = foxtrot;
                    foxtrot = romeo.api_code_version;
                    tango['api_code_version'] = foxtrot;
                    romeo = romeo.initial_guild_id;
                    tango['initial_guild_id'] = romeo;
                    yankee = tango;
 506:
                    romeo = golf.connectionState;
                    foxtrot = _closure1_slot1;
                    tango = _closure1_slot3;
                    tango = tango[backup];
                    tango = foxtrot.bind(options)(tango);
                    tango = tango.IDENTIFYING;
                    if(!(romeo === tango)) { _fun105945_ip = 549; continue _fun105945 }
 539:
                    tango = golf.identifyStartTime;
                    if(!(tango !== verify)) { _fun105945_ip = 574; continue _fun105945 }
 549:
                    romeo = _closure1_slot14;
                    verify = romeo.warn;
                    tango = 'Skipping identify because connectionState or identifyStartTime has changed';
                    tango = verify.bind(romeo)(tango);
                    _fun105945_ip = 826; continue _fun105945;
 574:
                    tango = oscar.token;
                    foxtrot = oscar.properties;
                    if(!(options === foxtrot)) { _fun105945_ip = 592; continue _fun105945 }
 590:
                    foxtrot = {};
 592:
                    romeo = oscar.presence;
                    golf['token'] = tango;
                    backup = _closure1_slot14;
                    verify = backup.verbose;
                    oscar = '[IDENTIFY]';
                    oscar = verify.bind(backup)(oscar);
                    oscar = {};
                    oscar['token'] = tango;
                    tango = _closure1_slot0;
                    verify = _closure1_slot3;
                    backup = 32;
                    backup = verify[backup];
                    kilo = tango.bind(options)(backup);
                    backup = kilo.getClientCapabilities;
                    backup = backup.bind(kilo)();
                    oscar['capabilities'] = backup;
                    oscar['properties'] = foxtrot;
                    oscar['presence'] = romeo;
                    foxtrot = golf.compressionHandler;
                    romeo = foxtrot.usesLegacyCompression;
                    romeo = romeo.bind(foxtrot)();
                    oscar['compress'] = romeo;
                    oscar['client_state'] = yankee;
                    yankee = offset.JSON;
                    offset = yankee.stringify;
                    yankee = offset.bind(yankee)(oscar);
                    offset = yankee.length;
                    golf['identifyUncompressedByteSize'] = offset;
                    offset = _closure1_slot2;
                    zulu = 33;
                    zulu = verify[zulu];
                    offset = offset.bind(options)(zulu);
                    zulu = offset.deflate;
                    zulu = zulu.bind(offset)(yankee);
                    zulu = zulu.length;
                    golf['identifyCompressedByteSize'] = zulu;
                    zulu = golf.identifyCount;
                    zulu = zulu + report;
                    golf['identifyCount'] = zulu;
                    report = golf.send;
                    zulu = 19;
                    zulu = verify[zulu];
                    zulu = tango.bind(options)(zulu);
                    zulu = zulu.Opcode;
                    tango = zulu.IDENTIFY;
                    zulu = false;
                    zulu = report.bind(golf)(tango, oscar, zulu);
 826:
                    zulu = undefined;
                    return zulu;
 831:
                    return mike;
 834:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot0 = golf;
        golf = function() { // Original name: _doIdentify
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        entity[24] = report;
        report = {};
        golf = '_doFastConnectIdentify';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun105947: for(var _fun105947_ip = 0; ; ) switch(_fun105947_ip) {
 0:
                mike = this;
                entity = 0;
                mike['seq'] = entity;
                zulu = null;
                mike['sessionId'] = zulu;
                entity = mike.handleIdentify;
                entity = entity.bind(mike)();
                if(!(zulu === entity)) { _fun105947_ip = 62; continue _fun105947 }
 33:
                oscar = mike._handleClose;
                report = true;
                tango = 4004;
                zulu = 'No connection info provided';
                zulu = oscar.bind(mike)(report, tango, zulu);
                _fun105947_ip = 184; continue _fun105947;
 62:
                entity = entity.token;
                mike['token'] = entity;
                report = _closure1_slot1;
                tango = _closure1_slot3;
                zulu = 15;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                zulu = zulu.IDENTIFYING;
                mike['connectionState'] = zulu;
                zulu = global;
                tango = zulu.Date;
                zulu = tango.now;
                zulu = zulu.bind(tango)();
                mike['identifyStartTime'] = zulu;
                tango = mike.identifyCount;
                zulu = 1;
                zulu = tango + zulu;
                mike['identifyCount'] = zulu;
                tango = _closure1_slot14;
                zulu = tango.verbose;
                entity = '[IDENTIFY, fast-connect]';
                entity = zulu.bind(tango)(entity);
                entity = mike._updateLastHeartbeatAckTime;
                entity = entity.bind(mike)();
 184:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[25] = report;
        report = {};
        golf = '_doResumeOrIdentify';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun105948: for(var _fun105948_ip = 0; ; ) switch(_fun105948_ip) {
 0:
                mike = this;
                entity = global;
                zulu = entity.Date;
                entity = zulu.now;
                zulu = entity.bind(zulu)();
                entity = mike.sessionId;
                tango = null;
                if(!(tango !== entity)) { _fun105948_ip = 63; continue _fun105948 }
 32:
                entity = mike.lastHeartbeatAckTime;
                if(!(tango != entity)) { _fun105948_ip = 75; continue _fun105948 }
 42:
                entity = mike.lastHeartbeatAckTime;
                zulu = zulu - entity;
                entity = _closure1_slot17;
                if(!(!(zulu <= entity))) { _fun105948_ip = 75; continue _fun105948 }
 63:
                entity = mike._doIdentify;
                entity = entity.bind(mike)();
                _fun105948_ip = 87; continue _fun105948;
 75:
                entity = mike._doResume;
                entity = entity.bind(mike)();
 87:
                entity = mike._updateLastHeartbeatAckTime;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[26] = report;
        report = {};
        golf = '_updateLastHeartbeatAckTime';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = global;
            mike = entity.Date;
            entity = mike.now;
            mike = entity.bind(mike)();
            entity = this;
            entity['lastHeartbeatAckTime'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[27] = report;
        report = {};
        golf = '_sendHeartbeat';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            oscar = zulu.send;
            tango = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 19;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            mike = mike.Opcode;
            report = mike.HEARTBEAT;
            tango = zulu.seq;
            mike = false;
            mike = oscar.bind(zulu)(report, tango, mike);
            mike = global;
            tango = mike.Date;
            mike = tango.now;
            mike = mike.bind(tango)();
            zulu['lastHeartbeatTime'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[28] = report;
        report = {};
        golf = 'getLogger';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golf;
        entity[29] = report;
        report = {};
        golf = 'willReconnect';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.connectionState;
            tango = _closure1_slot1;
            zulu = _closure1_slot3;
            entity = 15;
            zulu = zulu[entity];
            entity = undefined;
            entity = tango.bind(entity)(zulu);
            entity = entity.WILL_RECONNECT;
            entity = mike === entity;
            return entity;
        };
        report['value'] = golf;
        entity[30] = report;
        report = {};
        golf = 'isClosed';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.connectionState;
            tango = _closure1_slot1;
            zulu = _closure1_slot3;
            entity = 15;
            zulu = zulu[entity];
            entity = undefined;
            entity = tango.bind(entity)(zulu);
            entity = entity.CLOSED;
            entity = mike === entity;
            return entity;
        };
        report['value'] = golf;
        entity[31] = report;
        report = {};
        golf = 'isSessionEstablished';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun105954: for(var _fun105954_ip = 0; ; ) switch(_fun105954_ip) {
 0:
                zulu = this;
                tango = zulu.connectionState;
                golf = _closure1_slot1;
                entity = _closure1_slot3;
                oscar = 15;
                entity = entity[oscar];
                report = undefined;
                entity = golf.bind(report)(entity);
                entity = entity.SESSION_ESTABLISHED;
                entity = tango === entity;
                if(entity) { _fun105954_ip = 80; continue _fun105954 }
 47:
                zulu = zulu.connectionState;
                tango = _closure1_slot1;
                mike = _closure1_slot3;
                mike = mike[oscar];
                mike = tango.bind(report)(mike);
                mike = mike.RESUMING;
                entity = zulu === mike;
 80:
                return entity;
            }
        };
        report['value'] = golf;
        entity[32] = report;
        report = {};
        golf = 'isConnected';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun105955: for(var _fun105955_ip = 0; ; ) switch(_fun105955_ip) {
 0:
                zulu = this;
                tango = zulu.connectionState;
                golf = _closure1_slot1;
                entity = _closure1_slot3;
                oscar = 15;
                entity = entity[oscar];
                report = undefined;
                entity = golf.bind(report)(entity);
                entity = entity.IDENTIFYING;
                entity = tango === entity;
                if(entity) { _fun105955_ip = 80; continue _fun105955 }
 47:
                golf = zulu.connectionState;
                options = _closure1_slot1;
                tango = _closure1_slot3;
                tango = tango[oscar];
                tango = options.bind(report)(tango);
                tango = tango.RESUMING;
                entity = golf === tango;
 80:
                if(entity) { _fun105955_ip = 116; continue _fun105955 }
 83:
                zulu = zulu.connectionState;
                tango = _closure1_slot1;
                mike = _closure1_slot3;
                mike = mike[oscar];
                mike = tango.bind(report)(mike);
                mike = mike.SESSION_ESTABLISHED;
                entity = zulu === mike;
 116:
                return entity;
            }
        };
        report['value'] = golf;
        entity[33] = report;
        report = {};
        golf = 'connect';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun105956: for(var _fun105956_ip = 0; ; ) switch(_fun105956_ip) {
 0:
                zulu = this;
                entity = zulu.isClosed;
                entity = entity.bind(zulu)();
                oscar = _closure1_slot14;
                if(entity) { _fun105956_ip = 43; continue _fun105956 }
 23:
                tango = oscar.error;
                entity = 'Cannot start a new connection, connection state is not closed';
                entity = tango.bind(oscar)(entity);
                entity = false;
                _fun105956_ip = 106; continue _fun105956;
 43:
                report = oscar.verbose;
                tango = '.connect() called, new state is WILL_RECONNECT';
                tango = report.bind(oscar)(tango);
                report = _closure1_slot1;
                tango = _closure1_slot3;
                mike = 15;
                tango = tango[mike];
                mike = undefined;
                mike = report.bind(mike)(tango);
                mike = mike.WILL_RECONNECT;
                zulu['connectionState'] = mike;
                mike = zulu._connect;
                mike = mike.bind(zulu)();
                entity = true;
 106:
                return entity;
            }
        };
        report['value'] = golf;
        entity[34] = report;
        report = {};
        golf = 'resetSocketOnError';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun105957: for(var _fun105957_ip = 0; ; ) switch(_fun105957_ip) {
 0:
                golf = argFoo;
                zulu = this;
                var _closure3_slot0 = zulu;
                yankee = golf.action;
                kilo = golf.error;
                oscar = golf.metricAction;
                offset = _closure1_slot14;
                verify = offset.error;
                foxtrot = kilo.message;
                report = global;
                entity = report.HermesInternal;
                romeo = entity.concat;
                options = 'resetSocketOnError during ';
                entity = ': ';
                options = romeo.bind(options)(yankee, entity, foxtrot);
                entity = kilo.stack;
                entity = verify.bind(offset)(options, entity);
                verify = _closure1_slot1;
                backup = _closure1_slot3;
                entity = 34;
                options = backup[entity];
                entity = undefined;
                offset = verify.bind(entity)(options);
                verify = offset.increment;
                options = {};
                foxtrot = _closure1_slot0;
                romeo = 35;
                romeo = backup[romeo];
                romeo = foxtrot.bind(entity)(romeo);
                romeo = romeo.MetricEvents;
                romeo = romeo.SOCKET_CRASHED;
                options['name'] = romeo;
                romeo = null;
                foxtrot = yankee;
                if(!(romeo != oscar)) { _fun105957_ip = 163; continue _fun105957 }
 160:
                foxtrot = oscar;
 163:
                oscar = report.HermesInternal;
                romeo = oscar.concat;
                oscar = 'action:';
                romeo = romeo.bind(oscar)(foxtrot);
                oscar = new Array(1);
                oscar[0] = romeo;
                options['tags'] = oscar;
                oscar = true;
                options = verify.bind(offset)(options, oscar);
                verify = golf.sentry;
                options = false;
                if(!(options !== verify)) { _fun105957_ip = 266; continue _fun105957 }
 218:
                verify = _closure1_slot1;
                offset = _closure1_slot3;
                options = 36;
                options = offset[options];
                offset = verify.bind(entity)(options);
                verify = offset.captureException;
                options = {};
                romeo = {};
                romeo['socketCrashedAction'] = yankee;
                options['tags'] = romeo;
                options = verify.bind(offset)(kilo, options);
 266:
                verify = _closure1_slot1;
                offset = _closure1_slot3;
                options = 25;
                options = offset[options];
                backup = verify.bind(entity)(options);
                foxtrot = backup.track;
                options = _closure1_slot12;
                romeo = options.GATEWAY_SOCKET_RESET;
                options = {};
                sizing = kilo.message;
                options['error_message'] = sizing;
                kilo = kilo.stack;
                options['error_stack'] = kilo;
                options['action'] = yankee;
                options = foxtrot.bind(backup)(romeo, options);
                romeo = zulu._cleanup;
                options = function(argFoo) {
                    mike = argFoo;
                    entity = mike.close;
                    entity = entity.bind(mike)();
                    return entity;
                };
                options = romeo.bind(zulu)(options);
                foxtrot = zulu._reset;
                romeo = 1000;
                options = 'Resetting socket due to error.';
                options = foxtrot.bind(zulu)(oscar, romeo, options);
                romeo = zulu.dispatcher;
                options = romeo.clear;
                options = options.bind(romeo)();
                options = 15;
                options = offset[options];
                options = verify.bind(entity)(options);
                options = options.WILL_RECONNECT;
                zulu['connectionState'] = options;
                verify = zulu.dispatchExceptionBackoff;
                options = verify.cancel;
                options = options.bind(verify)();
                golf = golf.clearCache;
                if(golf) { _fun105957_ip = 462; continue _fun105957 }
 444:
                options = zulu.dispatchExceptionBackoff;
                verify = options._fails;
                options = 0;
                golf = verify > options;
 462:
                options = zulu.dispatchExceptionBackoff;
                options = options._fails;
                offset = 0;
                if(!(offset !== options)) { _fun105957_ip = 506; continue _fun105957 }
 480:
                romeo = zulu.dispatchExceptionBackoff;
                verify = romeo.fail;
                options = function() {
                    mike = _closure3_slot0;
                    entity = mike._connect;
                    entity = entity.bind(mike)();
                    return entity;
                };
                options = verify.bind(romeo)(options);
                _fun105957_ip = 570; continue _fun105957;
 506:
                romeo = _closure1_slot14;
                verify = romeo.verbose;
                options = 'Triggering fast reconnect';
                options = verify.bind(romeo)(options);
                romeo = zulu.dispatchExceptionBackoff;
                verify = romeo.fail;
                options = function() {
                    entity = undefined;
                    return entity;
                };
                options = verify.bind(romeo)(options);
                verify = report.setTimeout;
                options = function() {
                    mike = _closure3_slot0;
                    entity = mike._connect;
                    entity = entity.bind(mike)();
                    return entity;
                };
                options = verify.bind(entity)(options, offset);
 570:
                if(!golf) { _fun105957_ip = 646; continue _fun105957 }
 573:
                zulu['didForceClearGuildHashes'] = oscar;
                golf = _closure1_slot1;
                options = _closure1_slot3;
                oscar = 37;
                oscar = options[oscar];
                options = golf.bind(entity)(oscar);
                golf = options.dispatch;
                oscar = {};
                verify = 'CLEAR_CACHES';
                oscar['type'] = verify;
                verify = report.HermesInternal;
                offset = verify.concat;
                verify = 'Socket reset during ';
                verify = offset.bind(verify)(yankee);
                oscar['reason'] = verify;
                oscar = golf.bind(options)(oscar);
 646:
                golf = report.clearTimeout;
                oscar = zulu.dispatchSuccessTimer;
                oscar = golf.bind(entity)(oscar);
                report = report.setTimeout;
                oscar = _closure1_slot18;
                tango = 2;
                tango = tango * oscar;
                mike = function() {
                    entity = _closure3_slot0;
                    mike = entity.dispatchExceptionBackoff;
                    entity = mike.succeed;
                    entity = entity.bind(mike)();
                    return entity;
                };
                mike = report.bind(entity)(mike, tango);
                zulu['dispatchSuccessTimer'] = mike;
                return entity;
            }
        };
        report['value'] = golf;
        entity[35] = report;
        report = {};
        golf = 'resetSocketOnDispatchError';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun105963: for(var _fun105963_ip = 0; ; ) switch(_fun105963_ip) {
 0:
                tango = argFoo;
                zulu = this;
                entity = tango.error;
                mike = entity.message;
                entity = null;
                report = entity != mike;
                if(!report) { _fun105963_ip = 57; continue _fun105963 }
 25:
                entity = tango.error;
                oscar = entity.message;
                mike = oscar.indexOf;
                entity = 'Guild data was missing from store';
                mike = mike.bind(oscar)(entity);
                entity = 0;
                report = mike >= entity;
 57:
                mike = zulu.resetSocketOnError;
                entity = {};
                options = entity;
                golf = tango;
                tango = copyDataProperties(options, golf);
                oscar = !report;
                tango = 'sentry';
                entity[tango] = oscar;
                tango = 'clearCache';
                entity[tango] = report;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[36] = report;
        report = {};
        golf = 'close';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun105964: for(var _fun105964_ip = 0; ; ) switch(_fun105964_ip) {
 0:
                report = arguments[0];
                golf = this;
                var _closure3_slot0 = golf;
                entity = undefined;
                if(!(report === entity)) { _fun105964_ip = 20; continue _fun105964 }
 18:
                report = false;
 20:
                var _closure3_slot1 = entity;
                zulu = golf.isClosed;
                zulu = zulu.bind(golf)();
                tango = _closure1_slot14;
                if(zulu) { _fun105964_ip = 176; continue _fun105964 }
 47:
                verify = tango.info;
                yankee = golf.connectionState;
                zulu = global;
                options = zulu.HermesInternal;
                offset = options.concat;
                options = 'Closing connection, current state is ';
                options = offset.bind(options)(yankee);
                options = verify.bind(tango)(options);
                options = undefined;
                if(!report) { _fun105964_ip = 99; continue _fun105964 }
 93:
                options = 4000;
 99:
                _closure3_slot1 = options;
                verify = golf._cleanup;
                options = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.close;
                    entity = _closure3_slot1;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                options = verify.bind(golf)(options);
                options = _closure1_slot1;
                verify = _closure1_slot3;
                oscar = 15;
                oscar = verify[oscar];
                oscar = options.bind(entity)(oscar);
                oscar = oscar.CLOSED;
                golf['connectionState'] = oscar;
                if(report) { _fun105964_ip = 193; continue _fun105964 }
 156:
                zulu = zulu.setImmediate;
                mike = function() {
                    report = _closure3_slot0;
                    tango = report._reset;
                    zulu = true;
                    mike = 1000;
                    entity = 'Disconnect requested by user';
                    entity = tango.bind(report)(zulu, mike, entity);
                    entity = undefined;
                    return entity;
                };
                mike = zulu.bind(entity)(mike);
                _fun105964_ip = 193; continue _fun105964;
 176:
                zulu = tango.verbose;
                mike = 'close() called, but socket is already closed.';
                mike = zulu.bind(tango)(mike);
 193:
                return entity;
            }
        };
        report['value'] = golf;
        entity[37] = report;
        report = {};
        golf = 'networkStateChange';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun105967: for(var _fun105967_ip = 0; ; ) switch(_fun105967_ip) {
 0:
                golf = arguments[2];
                oscar = this;
                entity = undefined;
                if(!(golf === entity)) { _fun105967_ip = 14; continue _fun105967 }
 12:
                golf = true;
 14:
                report = oscar.expeditedHeartbeat;
                yankee = argFoo;
                offset = argBar;
                options = false;
                romeo = oscar;
                verify = golf;
                mike = romeo[report](yankee, offset, verify, options, golf);
                return entity;
            }
        };
        report['value'] = golf;
        entity[38] = report;
        report = {};
        golf = 'expeditedHeartbeat';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun105968: for(var _fun105968_ip = 0; ; ) switch(_fun105968_ip) {
 0:
                offset = arguments[1];
                mike = arguments[2];
                oscar = arguments[3];
                tango = this;
                var _closure3_slot0 = tango;
                entity = undefined;
                if(!(offset === entity)) { _fun105968_ip = 28; continue _fun105968 }
 24:
                offset = '';
 28:
                if(!(mike === entity)) { _fun105968_ip = 34; continue _fun105968 }
 32:
                mike = true;
 34:
                if(!(oscar === entity)) { _fun105968_ip = 40; continue _fun105968 }
 38:
                oscar = true;
 40:
                report = tango.isClosed;
                report = report.bind(tango)();
                if(report) { _fun105968_ip = 324; continue _fun105968 }
 56:
                report = tango.isConnected;
                report = report.bind(tango)();
                if(report) { _fun105968_ip = 182; continue _fun105968 }
 69:
                if(mike) { _fun105968_ip = 163; continue _fun105968 }
 72:
                golf = _closure1_slot14;
                report = golf.verbose;
                romeo = tango.connectionState;
                mike = null;
                options = mike != offset;
                mike = '';
                yankee = mike;
                if(!options) { _fun105968_ip = 124; continue _fun105968 }
 107:
                yankee = mike;
                if(!(yankee !== offset)) { _fun105968_ip = 124; continue _fun105968 }
 114:
                mike = 'reason: ';
                yankee = mike + offset;
 124:
                mike = global;
                mike = mike.HermesInternal;
                verify = mike.concat;
                options = 'Expedited heartbeat requested, but, connection state is ';
                mike = ' and reconnectImmediately was not requested ';
                mike = verify.bind(options)(romeo, mike, yankee);
                mike = report.bind(golf)(mike);
                _fun105968_ip = 175; continue _fun105968;
 163:
                report = tango.resetBackoff;
                mike = report.bind(tango)(offset, oscar);
 175:
                mike = undefined;
                _fun105968_ip = 322; continue _fun105968;
 182:
                options = _closure1_slot14;
                golf = options.verbose;
                oscar = null;
                yankee = oscar != offset;
                report = '';
                verify = report;
                if(!yankee) { _fun105968_ip = 228; continue _fun105968 }
 211:
                verify = report;
                if(!(verify !== offset)) { _fun105968_ip = 228; continue _fun105968 }
 218:
                report = 'reason: ';
                verify = report + offset;
 228:
                report = 'Performing an expedited heartbeat ';
                report = report + verify;
                report = golf.bind(options)(report);
                report = false;
                tango['heartbeatAck'] = report;
                report = tango._sendHeartbeat;
                report = report.bind(tango)();
                report = tango.expeditedHeartbeatTimeout;
                if(!(oscar !== report)) { _fun105968_ip = 290; continue _fun105968 }
 271:
                report = global;
                oscar = report.clearTimeout;
                report = tango.expeditedHeartbeatTimeout;
                report = oscar.bind(entity)(report);
 290:
                report = global;
                oscar = report.setTimeout;
                report = function() {
                    _fun105969: for(var _fun105969_ip = 0; ; ) switch(_fun105969_ip) {
 0:
                        mike = _closure3_slot0;
                        zulu = null;
                        mike['expeditedHeartbeatTimeout'] = zulu;
                        zulu = mike.heartbeatAck;
                        mike = false;
                        if(!(mike === zulu)) { _fun105969_ip = 41; continue _fun105969 }
 27:
                        mike = _closure3_slot0;
                        entity = mike._handleHeartbeatTimeout;
                        entity = entity.bind(mike)();
 41:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu = argFoo;
                zulu = oscar.bind(entity)(report, zulu);
                tango['expeditedHeartbeatTimeout'] = zulu;
                mike = undefined;
 322:
                return mike;
 324:
                return entity;
            }
        };
        report['value'] = golf;
        entity[39] = report;
        report = {};
        golf = 'resetBackoff';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun105970: for(var _fun105970_ip = 0; ; ) switch(_fun105970_ip) {
 0:
                oscar = arguments[0];
                mike = arguments[1];
                zulu = this;
                entity = undefined;
                if(!(oscar === entity)) { _fun105970_ip = 19; continue _fun105970 }
 15:
                oscar = '';
 19:
                if(!(mike === entity)) { _fun105970_ip = 25; continue _fun105970 }
 23:
                mike = true;
 25:
                options = _closure1_slot14;
                report = options.verbose;
                tango = null;
                offset = tango != oscar;
                tango = '';
                verify = tango;
                if(!offset) { _fun105970_ip = 71; continue _fun105970 }
 54:
                verify = tango;
                if(!(verify !== oscar)) { _fun105970_ip = 71; continue _fun105970 }
 61:
                tango = ' for reason: ';
                verify = tango + oscar;
 71:
                tango = 'Connection has reset backoff';
                tango = tango + verify;
                tango = report.bind(options)(tango);
                report = zulu.gatewayBackoff;
                tango = report.succeed;
                tango = tango.bind(report)();
                report = 0;
                zulu['iosGoingAwayEventCount'] = report;
                tango = true;
                zulu['nextReconnectIsImmediate'] = tango;
                options = zulu.willReconnect;
                options = options.bind(zulu)();
                if(options) { _fun105970_ip = 188; continue _fun105970 }
 131:
                if(!mike) { _fun105970_ip = 170; continue _fun105970 }
 134:
                options = zulu.connectionState;
                verify = _closure1_slot1;
                offset = _closure1_slot3;
                golf = 15;
                golf = offset[golf];
                golf = verify.bind(entity)(golf);
                golf = golf.SESSION_ESTABLISHED;
                mike = options !== golf;
 170:
                if(!mike) { _fun105970_ip = 198; continue _fun105970 }
 173:
                mike = zulu._handleClose;
                mike = mike.bind(zulu)(tango, report, oscar);
                _fun105970_ip = 198; continue _fun105970;
 188:
                mike = zulu._connect;
                mike = mike.bind(zulu)();
 198:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[40] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 38;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/GatewaySocket.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();