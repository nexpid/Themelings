// app/lib/RTCControlSocket.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun52619: for(var _fun52619_ip = 0; ; ) switch(_fun52619_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot20;
            entity = entity.bind(zulu)();
            if(entity) { _fun52619_ip = 48; continue _fun52619 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun52619_ip = 86; continue _fun52619;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun52620: for(var _fun52620_ip = 0; ; ) switch(_fun52620_ip) {
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
 70: // try_end0
            _fun52620_ip = 74; continue _fun52620;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot20 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: noop
        entity = undefined;
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: convertCodecs
        zulu = argFoo;
        mike = zulu.map;
        entity = function(argFoo) {
            mike = argFoo;
            entity = {};
            zulu = mike.name;
            entity['name'] = zulu;
            zulu = mike.type;
            entity['type'] = zulu;
            tango = mike.priority;
            zulu = 1000;
            zulu = zulu * tango;
            entity['priority'] = zulu;
            zulu = mike.payloadType;
            entity['payload_type'] = zulu;
            zulu = mike.rtxPayloadType;
            entity['rtx_payload_type'] = zulu;
            zulu = mike.encode;
            entity['encode'] = zulu;
            mike = mike.decode;
            entity['decode'] = mike;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: convertStreamParametersToWire
        _fun52626: for(var _fun52626_ip = 0; ; ) switch(_fun52626_ip) {
 0:
            tango = argFoo;
            entity = null;
            mike = entity == tango;
            entity = undefined;
            if(mike) { _fun52626_ip = 31; continue _fun52626 }
 14:
            zulu = tango.map;
            mike = function(argFoo) {
                _fun52627: for(var _fun52627_ip = 0; ; ) switch(_fun52627_ip) {
 0:
                    tango = argFoo;
                    entity = {};
                    mike = tango.type;
                    entity['type'] = mike;
                    mike = tango.rid;
                    entity['rid'] = mike;
                    mike = tango.ssrc;
                    entity['ssrc'] = mike;
                    mike = tango.active;
                    entity['active'] = mike;
                    mike = tango.quality;
                    entity['quality'] = mike;
                    mike = tango.rtxSsrc;
                    entity['rtx_ssrc'] = mike;
                    mike = tango.maxBitrate;
                    entity['max_bitrate'] = mike;
                    mike = tango.maxFrameRate;
                    entity['max_framerate'] = mike;
                    zulu = tango.maxResolution;
                    mike = null;
                    zulu = mike != zulu;
                    mike = undefined;
                    if(!zulu) { _fun52627_ip = 158; continue _fun52627 }
 108:
                    zulu = {};
                    report = tango.maxResolution;
                    report = report.type;
                    zulu['type'] = report;
                    report = tango.maxResolution;
                    report = report.width;
                    zulu['width'] = report;
                    tango = tango.maxResolution;
                    tango = tango.height;
                    zulu['height'] = tango;
                    mike = zulu;
 158:
                    entity['max_resolution'] = mike;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 31:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: convertStreamParametersFromWire
        _fun52628: for(var _fun52628_ip = 0; ; ) switch(_fun52628_ip) {
 0:
            report = argFoo;
            mike = null;
            zulu = mike == report;
            entity = undefined;
            if(zulu) { _fun52628_ip = 31; continue _fun52628 }
 14:
            tango = report.map;
            zulu = function(argFoo) {
                _fun52629: for(var _fun52629_ip = 0; ; ) switch(_fun52629_ip) {
 0:
                    tango = argFoo;
                    entity = {};
                    zulu = tango.type;
                    mike = 'audio';
                    if(!(mike !== zulu)) { _fun52629_ip = 79; continue _fun52629 }
 18:
                    mike = 'test';
                    if(!(mike !== zulu)) { _fun52629_ip = 64; continue _fun52629 }
 26:
                    mike = 'screen';
                    if(!(mike !== zulu)) { _fun52629_ip = 49; continue _fun52629 }
 34:
                    mike = _closure1_slot10;
                    mike = mike.VIDEO;
                    _fun52629_ip = 62; continue _fun52629;
 49:
                    zulu = _closure1_slot10;
                    mike = zulu.SCREEN;
 62:
                    _fun52629_ip = 77; continue _fun52629;
 64:
                    zulu = _closure1_slot10;
                    mike = zulu.TEST;
 77:
                    _fun52629_ip = 92; continue _fun52629;
 79:
                    zulu = _closure1_slot10;
                    mike = zulu.AUDIO;
 92:
                    entity['type'] = mike;
                    mike = tango.rid;
                    entity['rid'] = mike;
                    mike = tango.ssrc;
                    entity['ssrc'] = mike;
                    mike = tango.rtx_ssrc;
                    entity['rtxSsrc'] = mike;
                    mike = tango.active;
                    entity['active'] = mike;
                    mike = tango.quality;
                    entity['quality'] = mike;
                    mike = tango.max_bitrate;
                    entity['maxBitrate'] = mike;
                    mike = tango.max_framerate;
                    entity['maxFrameRate'] = mike;
                    zulu = tango.max_resolution;
                    mike = null;
                    zulu = mike != zulu;
                    mike = undefined;
                    if(!zulu) { _fun52629_ip = 240; continue _fun52629 }
 190:
                    zulu = {};
                    report = tango.max_resolution;
                    report = report.type;
                    zulu['type'] = report;
                    report = tango.max_resolution;
                    report = report.width;
                    zulu['width'] = report;
                    tango = tango.max_resolution;
                    tango = tango.height;
                    zulu['height'] = tango;
                    mike = zulu;
 240:
                    entity['maxResolution'] = mike;
                    return entity;
                }
            };
            entity = tango.bind(report)(zulu);
 31:
            if(!(mike == entity)) { _fun52628_ip = 39; continue _fun52628 }
 35:
            entity = new Array(0);
 39:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    result = 0;
    mike = golf[result];
    entity = undefined;
    mike = verify.bind(entity)(mike);
    var _closure1_slot3 = mike;
    romeo = 1;
    mike = golf[romeo];
    mike = verify.bind(entity)(mike);
    var _closure1_slot4 = mike;
    output = 2;
    mike = golf[output];
    mike = verify.bind(entity)(mike);
    var _closure1_slot5 = mike;
    sizing = 3;
    mike = golf[sizing];
    mike = verify.bind(entity)(mike);
    var _closure1_slot6 = mike;
    kilo = 4;
    mike = golf[kilo];
    mike = verify.bind(entity)(mike);
    var _closure1_slot7 = mike;
    offset = 5;
    mike = golf[offset];
    mike = verify.bind(entity)(mike);
    var _closure1_slot8 = mike;
    report = 6;
    mike = golf[report];
    mike = oscar.bind(entity)(mike);
    options = mike.MediaEngineContextTypes;
    var _closure1_slot9 = options;
    options = mike.MediaTypes;
    var _closure1_slot10 = options;
    mike = mike.SpeakingFlags;
    var _closure1_slot11 = mike;
    yankee = {};
    yankee['IDENTIFY'] = result;
    mike = 'IDENTIFY';
    yankee[result] = mike;
    yankee['SELECT_PROTOCOL'] = romeo;
    mike = 'SELECT_PROTOCOL';
    yankee[romeo] = mike;
    yankee['READY'] = output;
    mike = 'READY';
    yankee[output] = mike;
    yankee['HEARTBEAT'] = sizing;
    mike = 'HEARTBEAT';
    yankee[sizing] = mike;
    yankee['SELECT_PROTOCOL_ACK'] = kilo;
    mike = 'SELECT_PROTOCOL_ACK';
    yankee[kilo] = mike;
    yankee['SPEAKING'] = offset;
    mike = 'SPEAKING';
    yankee[offset] = mike;
    yankee['HEARTBEAT_ACK'] = report;
    mike = 'HEARTBEAT_ACK';
    yankee[report] = mike;
    mike = 7;
    yankee['RESUME'] = mike;
    report = 'RESUME';
    yankee[mike] = report;
    options = 8;
    yankee['HELLO'] = options;
    report = 'HELLO';
    yankee[options] = report;
    options = 9;
    yankee['RESUMED'] = options;
    report = 'RESUMED';
    yankee[options] = report;
    options = 11;
    yankee['CLIENT_CONNECT'] = options;
    report = 'CLIENT_CONNECT';
    yankee[options] = report;
    options = 12;
    yankee['VIDEO'] = options;
    report = 'VIDEO';
    yankee[options] = report;
    report = 13;
    yankee['CLIENT_DISCONNECT'] = report;
    foxtrot = 'CLIENT_DISCONNECT';
    yankee[report] = foxtrot;
    backup = 14;
    yankee['SESSION_UPDATE'] = backup;
    foxtrot = 'SESSION_UPDATE';
    yankee[backup] = foxtrot;
    backup = 15;
    yankee['MEDIA_SINK_WANTS'] = backup;
    foxtrot = 'MEDIA_SINK_WANTS';
    yankee[backup] = foxtrot;
    backup = 16;
    yankee['VOICE_BACKEND_VERSION'] = backup;
    foxtrot = 'VOICE_BACKEND_VERSION';
    yankee[backup] = foxtrot;
    backup = 17;
    yankee['CHANNEL_OPTIONS_UPDATE'] = backup;
    foxtrot = 'CHANNEL_OPTIONS_UPDATE';
    yankee[backup] = foxtrot;
    backup = 18;
    yankee['FLAGS'] = backup;
    foxtrot = 'FLAGS';
    yankee[backup] = foxtrot;
    foxtrot = 20;
    yankee['PLATFORM'] = foxtrot;
    backup = 'PLATFORM';
    yankee[foxtrot] = backup;
    echo = 21;
    yankee['DAVE_PROTOCOL_PREPARE_TRANSITION'] = echo;
    backup = 'DAVE_PROTOCOL_PREPARE_TRANSITION';
    yankee[echo] = backup;
    echo = 22;
    yankee['DAVE_PROTOCOL_EXECUTE_TRANSITION'] = echo;
    backup = 'DAVE_PROTOCOL_EXECUTE_TRANSITION';
    yankee[echo] = backup;
    echo = 23;
    yankee['DAVE_PROTOCOL_READY_FOR_TRANSITION'] = echo;
    backup = 'DAVE_PROTOCOL_READY_FOR_TRANSITION';
    yankee[echo] = backup;
    echo = 24;
    yankee['DAVE_PROTOCOL_PREPARE_EPOCH'] = echo;
    backup = 'DAVE_PROTOCOL_PREPARE_EPOCH';
    yankee[echo] = backup;
    echo = 25;
    yankee['MLS_EXTERNAL_SENDER_PACKAGE'] = echo;
    backup = 'MLS_EXTERNAL_SENDER_PACKAGE';
    yankee[echo] = backup;
    echo = 26;
    yankee['MLS_KEY_PACKAGE'] = echo;
    backup = 'MLS_KEY_PACKAGE';
    yankee[echo] = backup;
    echo = 27;
    yankee['MLS_PROPOSALS'] = echo;
    backup = 'MLS_PROPOSALS';
    yankee[echo] = backup;
    echo = 28;
    yankee['MLS_COMMIT_WELCOME'] = echo;
    backup = 'MLS_COMMIT_WELCOME';
    yankee[echo] = backup;
    echo = 29;
    yankee['MLS_PREPARE_COMMIT_TRANSITION'] = echo;
    backup = 'MLS_PREPARE_COMMIT_TRANSITION';
    yankee[echo] = backup;
    echo = 30;
    yankee['MLS_WELCOME'] = echo;
    backup = 'MLS_WELCOME';
    yankee[echo] = backup;
    echo = 31;
    yankee['MLS_INVALID_COMMIT_WELCOME'] = echo;
    backup = 'MLS_INVALID_COMMIT_WELCOME';
    yankee[echo] = backup;
    echo = 32;
    yankee['CLIENT_CANNOT_REACH_RTC_SERVER'] = echo;
    backup = 'CLIENT_CANNOT_REACH_RTC_SERVER';
    yankee[echo] = backup;
    var _closure1_slot12 = yankee;
    yankee = {};
    echo = 4004;
    yankee['AUTHENTICATION_FAILED'] = echo;
    backup = 'AUTHENTICATION_FAILED';
    yankee[echo] = backup;
    echo = 4006;
    yankee['INVALID_SESSION'] = echo;
    backup = 'INVALID_SESSION';
    yankee[echo] = backup;
    echo = 4011;
    yankee['SERVER_NOT_FOUND'] = echo;
    backup = 'SERVER_NOT_FOUND';
    yankee[echo] = backup;
    echo = 4015;
    yankee['SERVER_CRASH'] = echo;
    backup = 'SERVER_CRASH';
    yankee[echo] = backup;
    echo = 4016;
    yankee['CANCELED'] = echo;
    backup = 'CANCELED';
    yankee[echo] = backup;
    echo = 4800;
    yankee['HEARTBEAT_TIMEOUT'] = echo;
    backup = 'HEARTBEAT_TIMEOUT';
    yankee[echo] = backup;
    echo = 4801;
    yankee['UNRESUMABLE'] = echo;
    backup = 'UNRESUMABLE';
    yankee[echo] = backup;
    echo = 4802;
    yankee['RESET_BACKOFF'] = echo;
    backup = 'RESET_BACKOFF';
    yankee[echo] = backup;
    var _closure1_slot13 = yankee;
    yankee = {};
    yankee['DISCONNECTED'] = result;
    backup = 'DISCONNECTED';
    yankee[result] = backup;
    yankee['CONNECTING'] = romeo;
    backup = 'CONNECTING';
    yankee[romeo] = backup;
    yankee['IDENTIFYING'] = output;
    backup = 'IDENTIFYING';
    yankee[output] = backup;
    yankee['RESUMING'] = sizing;
    backup = 'RESUMING';
    yankee[sizing] = backup;
    yankee['CONNECTED'] = kilo;
    backup = 'CONNECTED';
    yankee[kilo] = backup;
    yankee['RECONNECTING'] = offset;
    backup = 'RECONNECTING';
    yankee[offset] = backup;
    var _closure1_slot14 = yankee;
    yankee = golf[mike];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.Millis;
    yankee = yankee.SECOND;
    yankee = foxtrot * yankee;
    var _closure1_slot15 = yankee;
    yankee = golf[mike];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.Millis;
    yankee = yankee.MINUTE;
    yankee = romeo * yankee;
    var _closure1_slot16 = yankee;
    mike = golf[mike];
    mike = verify.bind(entity)(mike);
    mike = mike.Millis;
    mike = mike.SECOND;
    mike = offset * mike;
    var _closure1_slot17 = mike;
    mike = {};
    offset = 'connecting';
    mike['Connecting'] = offset;
    offset = 'connect';
    mike['Connect'] = offset;
    offset = 'disconnect';
    mike['Disconnect'] = offset;
    offset = 'resuming';
    mike['Resuming'] = offset;
    offset = 'ready';
    mike['Ready'] = offset;
    offset = 'speaking';
    mike['Speaking'] = offset;
    offset = 'video';
    mike['Video'] = offset;
    offset = 'ping';
    mike['Ping'] = offset;
    offset = 'client-connect';
    mike['ClientConnect'] = offset;
    offset = 'client-disconnect';
    mike['ClientDisconnect'] = offset;
    offset = 'codecs';
    mike['Codecs'] = offset;
    offset = 'media-session-id';
    mike['MediaSessionId'] = offset;
    offset = 'media-sink-wants';
    mike['MediaSinkWants'] = offset;
    offset = 'voice-backend-version';
    mike['VoiceBackendVersion'] = offset;
    offset = 'keyframe-interval';
    mike['KeyframeInterval'] = offset;
    offset = 'update-secure-frames-protocol';
    mike['ChannelOptionsUpdateSecureFramesProtocol'] = offset;
    offset = 'flags';
    mike['Flags'] = offset;
    offset = 'platform';
    mike['Platform'] = offset;
    offset = 'sdp';
    mike['SDP'] = offset;
    offset = 'encryption';
    mike['Encryption'] = offset;
    offset = 'bandwidth-estimation-experiment';
    mike['BandwidthEstimationExperiment'] = offset;
    offset = 'secure-frames-init';
    mike['SecureFramesInit'] = offset;
    offset = 'secure-frames-prepare-transition';
    mike['SecureFramesPrepareTransition'] = offset;
    offset = 'secure-frames-execute-transition';
    mike['SecureFramesExecuteTransition'] = offset;
    offset = 'secure-frames-prepare-epoch';
    mike['SecureFramesPrepareEpoch'] = offset;
    offset = 'mls-external-sender-package';
    mike['MLSExternalSenderPackage'] = offset;
    offset = 'mls-proposals';
    mike['MLSProposals'] = offset;
    offset = 'mls-prepare-commit-transition';
    mike['MLSPrepareCommitTransition'] = offset;
    offset = 'mls-welcome';
    mike['MLSWelcome'] = offset;
    var _closure1_slot18 = mike;
    options = golf[options];
    options = verify.bind(entity)(options);
    tango = function(argFoo) {
        tango = function(argFoo) { // Original name: RTCControlSocket
            _fun52631: for(var _fun52631_ip = 0; ; ) switch(_fun52631_ip) {
 0:
                options = arguments[1];
                zulu = this;
                oscar = undefined;
                if(!(options === oscar)) { _fun52631_ip = 25; continue _fun52631 }
 12:
                entity = _closure1_slot9;
                options = entity.DEFAULT;
 25:
                entity = _closure1_slot3;
                mike = _closure2_slot0;
                entity = entity.bind(oscar)(zulu, mike);
                entity = _closure1_slot19;
                entity = entity.bind(oscar)(zulu, mike);
                tango = _closure1_slot1;
                golf = _closure1_slot2;
                mike = 8;
                mike = golf[mike];
                offset = tango.bind(oscar)(mike);
                mike = offset.prototype;
                zulu = Object.create(mike, {constructor: {value: offset}});
                romeo = 1000;
                yankee = 5000;
                foxtrot = zulu;
                mike = new foxtrot[offset](romeo, yankee, offset);
                mike = mike instanceof Object ? mike : zulu;
                entity['backoff'] = mike;
                zulu = 0;
                entity['serverVersion'] = zulu;
                mike = argFoo;
                entity['url'] = mike;
                mike = 9;
                mike = golf[mike];
                oscar = tango.bind(oscar)(mike);
                mike = global;
                mike = mike.HermesInternal;
                golf = mike.concat;
                tango = 'RTCControlSocket(';
                mike = ')';
                romeo = golf.bind(tango)(options, mike);
                tango = oscar.prototype;
                tango = Object.create(tango, {constructor: {value: oscar}});
                foxtrot = tango;
                mike = new foxtrot[oscar](romeo, yankee);
                mike = mike instanceof Object ? mike : tango;
                entity['logger'] = mike;
                oscar = entity.logger;
                mike = oscar.enableNativeLogger;
                tango = true;
                mike = mike.bind(oscar)(tango);
                mike = null;
                entity['webSocket'] = mike;
                report = _closure1_slot14;
                report = report.DISCONNECTED;
                entity['connectionState'] = report;
                entity['helloTimeout'] = mike;
                entity['lastHeartbeatAckTime'] = mike;
                entity['heartbeatInterval'] = mike;
                entity['heartbeater'] = mike;
                entity['heartbeatAck'] = tango;
                entity['expeditedHeartbeatTimeout'] = mike;
                tango = 1;
                entity['heartbeatIntervalModifier'] = tango;
                entity['connectionStartTime'] = zulu;
                entity['lastRecvSeqNum'] = mike;
                entity['sessionId'] = mike;
                entity['serverId'] = mike;
                entity['token'] = mike;
                mike = false;
                entity['resumable'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'createWebSocket';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun52632: for(var _fun52632_ip = 0; ; ) switch(_fun52632_ip) {
 0:
                tango = this;
                var _closure3_slot0 = tango;
                oscar = tango.logger;
                report = oscar.info;
                options = tango.url;
                zulu = global;
                entity = zulu.HermesInternal;
                golf = entity.concat;
                entity = '[CONNECT] ';
                entity = golf.bind(entity)(options);
                entity = report.bind(oscar)(entity);
                report = tango.webSocket;
                entity = null;
                if(!(entity !== report)) { _fun52632_ip = 103; continue _fun52632 }
 66:
                oscar = tango.logger;
                report = oscar.error;
                entity = 'Connect called with already existing websocket';
                entity = report.bind(oscar)(entity);
                report = tango.cleanupWebSocket;
                entity = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.close;
                    entity = 4000;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = report.bind(tango)(entity);
 103:
                report = zulu.Date;
                entity = report.now;
                entity = entity.bind(report)();
                tango['connectionStartTime'] = entity;
                golf = zulu.setTimeout;
                oscar = _closure1_slot15;
                entity = undefined;
                report = function() {
                    entity = global;
                    zulu = entity.Date;
                    mike = zulu.now;
                    zulu = mike.bind(zulu)();
                    report = _closure3_slot0;
                    mike = report.connectionStartTime;
                    oscar = zulu - mike;
                    tango = report.handleClose;
                    entity = entity.HermesInternal;
                    zulu = entity.concat;
                    mike = 'The connection timed out after ';
                    entity = ' ms - did not receive OP_HELLO in time.';
                    zulu = zulu.bind(mike)(oscar, entity);
                    mike = false;
                    entity = 0;
                    entity = tango.bind(report)(mike, entity, zulu);
                    entity = undefined;
                    return entity;
                };
                report = golf.bind(entity)(report, oscar);
                tango['helloTimeout'] = report;
                oscar = zulu.WebSocket;
                options = tango.url;
                zulu = zulu.HermesInternal;
                golf = zulu.concat;
                report = '';
                zulu = '?v=8';
                offset = golf.bind(report)(options, zulu);
                report = oscar.prototype;
                report = Object.create(report, {constructor: {value: oscar}});
                yankee = report;
                zulu = new yankee[oscar](offset, verify);
                zulu = zulu instanceof Object ? zulu : report;
                tango['webSocket'] = zulu;
                tango = 'arraybuffer';
                zulu['binaryType'] = tango;
                tango = function() {
                    _fun52635: for(var _fun52635_ip = 0; ; ) switch(_fun52635_ip) {
 0:
                        mike = _closure3_slot0;
                        tango = mike.connectionState;
                        zulu = _closure1_slot14;
                        zulu = zulu.CONNECTING;
                        if(!(tango !== zulu)) { _fun52635_ip = 72; continue _fun52635 }
 30:
                        zulu = _closure3_slot0;
                        tango = zulu.connectionState;
                        zulu = _closure1_slot14;
                        zulu = zulu.RECONNECTING;
                        if(!(tango === zulu)) { _fun52635_ip = 97; continue _fun52635 }
 54:
                        tango = _closure3_slot0;
                        zulu = tango.doResumeOrClose;
                        zulu = zulu.bind(tango)();
                        _fun52635_ip = 97; continue _fun52635;
 72:
                        report = _closure3_slot0;
                        tango = report.emit;
                        zulu = _closure1_slot18;
                        zulu = zulu.Connect;
                        zulu = tango.bind(report)(zulu);
 97:
                        tango = _closure3_slot0;
                        entity = _closure1_slot14;
                        entity = entity.CONNECTED;
                        tango['connectionState'] = entity;
                        entity = global;
                        report = entity.Date;
                        zulu = report.now;
                        report = zulu.bind(report)();
                        zulu = tango.connectionStartTime;
                        golf = report - zulu;
                        oscar = tango.logger;
                        report = oscar.info;
                        kilo = tango.url;
                        zulu = entity.HermesInternal;
                        offset = zulu.concat;
                        sizing = '[CONNECTED] ';
                        backup = ' in ';
                        romeo = ' ms';
                        foxtrot = golf;
                        zulu = sizing[offset](kilo, backup, foxtrot, romeo, yankee);
                        zulu = report.bind(oscar)(zulu);
                        zulu = tango.emit;
                        mike = _closure1_slot18;
                        mike = mike.Ping;
                        oscar = entity.Math;
                        report = oscar.round;
                        entity = 2;
                        entity = golf / entity;
                        entity = report.bind(oscar)(entity);
                        entity = zulu.bind(tango)(mike, entity);
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['onopen'] = tango;
                tango = function(argFoo) {
                    _fun52636: for(var _fun52636_ip = 0; ; ) switch(_fun52636_ip) {
 0:
                        tango = _closure3_slot0;
                        zulu = tango.parseWebSocketMessage;
                        mike = argFoo;
                        mike = zulu.bind(tango)(mike);
                        options = mike.op;
                        tango = mike.seq;
                        zulu = mike.d;
                        if(!tango) { _fun52636_ip = 52; continue _fun52636 }
 42:
                        mike = _closure3_slot0;
                        mike['lastRecvSeqNum'] = tango;
 52:
                        tango = _closure1_slot8;
                        tango = tango.isLoggingGatewayEvents;
                        if(!tango) { _fun52636_ip = 252; continue _fun52636 }
 71:
                        tango = global;
                        report = tango.Uint8Array;
                        report = zulu instanceof report;
                        if(report) { _fun52636_ip = 155; continue _fun52636 }
 86:
                        report = _closure3_slot0;
                        golf = report.logger;
                        oscar = golf.info;
                        verify = tango.JSON;
                        report = verify.stringify;
                        yankee = report.bind(verify)(zulu);
                        report = tango.HermesInternal;
                        offset = report.concat;
                        verify = '~> ';
                        report = ': ';
                        report = offset.bind(verify)(options, report, yankee);
                        report = oscar.bind(golf)(report);
                        _fun52636_ip = 252; continue _fun52636;
 155:
                        golf = new Array(0);
                        kilo = 0;
                        output = golf;
                        sizing = zulu;
                        report = arraySpread(output, sizing, kilo);
                        oscar = golf.map;
                        report = function(argFoo) {
                            zulu = argFoo;
                            mike = zulu.toString;
                            entity = 16;
                            tango = mike.bind(zulu)(entity);
                            zulu = tango.padStart;
                            mike = 2;
                            entity = '0';
                            entity = zulu.bind(tango)(mike, entity);
                            return entity;
                        };
                        golf = oscar.bind(golf)(report);
                        oscar = golf.join;
                        report = '';
                        offset = oscar.bind(golf)(report);
                        report = _closure3_slot0;
                        oscar = report.logger;
                        report = oscar.info;
                        tango = tango.HermesInternal;
                        verify = tango.concat;
                        golf = '~> ';
                        tango = ': 0x';
                        tango = verify.bind(golf)(options, tango, offset);
                        tango = report.bind(oscar)(tango);
 252:
                        tango = _closure1_slot12;
                        tango = tango.HELLO;
                        if(!(tango !== options)) { _fun52636_ip = 2176; continue _fun52636 }
 269:
                        tango = _closure1_slot12;
                        tango = tango.READY;
                        if(!(tango !== options)) { _fun52636_ip = 2157; continue _fun52636 }
 286:
                        tango = _closure1_slot12;
                        tango = tango.RESUMED;
                        if(!(tango !== options)) { _fun52636_ip = 2138; continue _fun52636 }
 303:
                        tango = _closure1_slot12;
                        tango = tango.SELECT_PROTOCOL_ACK;
                        if(!(tango !== options)) { _fun52636_ip = 1832; continue _fun52636 }
 320:
                        tango = _closure1_slot12;
                        tango = tango.SPEAKING;
                        if(!(tango !== options)) { _fun52636_ip = 1741; continue _fun52636 }
 337:
                        tango = _closure1_slot12;
                        tango = tango.HEARTBEAT;
                        if(!(tango !== options)) { _fun52636_ip = 1722; continue _fun52636 }
 354:
                        tango = _closure1_slot12;
                        tango = tango.HEARTBEAT_ACK;
                        if(!(tango !== options)) { _fun52636_ip = 1700; continue _fun52636 }
 371:
                        tango = _closure1_slot12;
                        tango = tango.VIDEO;
                        if(!(tango !== options)) { _fun52636_ip = 1630; continue _fun52636 }
 388:
                        tango = _closure1_slot12;
                        tango = tango.CLIENT_CONNECT;
                        if(!(tango !== options)) { _fun52636_ip = 1593; continue _fun52636 }
 405:
                        tango = _closure1_slot12;
                        tango = tango.CLIENT_DISCONNECT;
                        if(!(tango !== options)) { _fun52636_ip = 1556; continue _fun52636 }
 422:
                        tango = _closure1_slot12;
                        tango = tango.SESSION_UPDATE;
                        if(!(tango !== options)) { _fun52636_ip = 1398; continue _fun52636 }
 439:
                        tango = _closure1_slot12;
                        tango = tango.MEDIA_SINK_WANTS;
                        if(!(tango !== options)) { _fun52636_ip = 1367; continue _fun52636 }
 456:
                        tango = _closure1_slot12;
                        tango = tango.VOICE_BACKEND_VERSION;
                        if(!(tango !== options)) { _fun52636_ip = 1292; continue _fun52636 }
 473:
                        tango = _closure1_slot12;
                        tango = tango.FLAGS;
                        if(!(tango !== options)) { _fun52636_ip = 1219; continue _fun52636 }
 490:
                        tango = _closure1_slot12;
                        tango = tango.PLATFORM;
                        if(!(tango !== options)) { _fun52636_ip = 1144; continue _fun52636 }
 507:
                        tango = _closure1_slot12;
                        tango = tango.DAVE_PROTOCOL_PREPARE_TRANSITION;
                        if(!(tango !== options)) { _fun52636_ip = 1069; continue _fun52636 }
 524:
                        tango = _closure1_slot12;
                        tango = tango.DAVE_PROTOCOL_EXECUTE_TRANSITION;
                        if(!(tango !== options)) { _fun52636_ip = 1017; continue _fun52636 }
 541:
                        tango = _closure1_slot12;
                        tango = tango.DAVE_PROTOCOL_PREPARE_EPOCH;
                        if(!(tango !== options)) { _fun52636_ip = 942; continue _fun52636 }
 558:
                        tango = _closure1_slot12;
                        tango = tango.MLS_EXTERNAL_SENDER_PACKAGE;
                        if(!(tango !== options)) { _fun52636_ip = 911; continue _fun52636 }
 575:
                        tango = _closure1_slot12;
                        tango = tango.MLS_PROPOSALS;
                        if(!(tango !== options)) { _fun52636_ip = 880; continue _fun52636 }
 592:
                        tango = _closure1_slot12;
                        tango = tango.MLS_PREPARE_COMMIT_TRANSITION;
                        if(!(tango !== options)) { _fun52636_ip = 776; continue _fun52636 }
 609:
                        tango = _closure1_slot12;
                        tango = tango.MLS_WELCOME;
                        if(!(tango !== options)) { _fun52636_ip = 672; continue _fun52636 }
 623:
                        tango = _closure3_slot0;
                        oscar = tango.logger;
                        report = oscar.info;
                        tango = global;
                        tango = tango.HermesInternal;
                        golf = tango.concat;
                        tango = 'Unhandled op ';
                        tango = golf.bind(tango)(options);
                        tango = report.bind(oscar)(tango);
                        _fun52636_ip = 2203; continue _fun52636;
 672:
                        tango = global;
                        options = tango.DataView;
                        output = zulu.buffer;
                        sizing = zulu.byteOffset;
                        report = options.prototype;
                        oscar = Object.create(report, {constructor: {value: options}});
                        report = 2;
                        result = oscar;
                        kilo = report;
                        tango = new result[options](output, sizing, kilo, backup);
                        options = tango instanceof Object ? tango : oscar;
                        golf = options.getUint16;
                        oscar = 0;
                        tango = false;
                        options = golf.bind(options)(oscar, tango);
                        tango = zulu.slice;
                        golf = tango.bind(zulu)(report);
                        oscar = _closure3_slot0;
                        report = oscar.emit;
                        tango = _closure1_slot18;
                        tango = tango.MLSWelcome;
                        tango = report.bind(oscar)(tango, options, golf);
                        _fun52636_ip = 2203; continue _fun52636;
 776:
                        tango = global;
                        options = tango.DataView;
                        output = zulu.buffer;
                        sizing = zulu.byteOffset;
                        report = options.prototype;
                        oscar = Object.create(report, {constructor: {value: options}});
                        report = 2;
                        result = oscar;
                        kilo = report;
                        tango = new result[options](output, sizing, kilo, backup);
                        options = tango instanceof Object ? tango : oscar;
                        golf = options.getUint16;
                        oscar = 0;
                        tango = false;
                        options = golf.bind(options)(oscar, tango);
                        tango = zulu.slice;
                        golf = tango.bind(zulu)(report);
                        oscar = _closure3_slot0;
                        report = oscar.emit;
                        tango = _closure1_slot18;
                        tango = tango.MLSPrepareCommitTransition;
                        tango = report.bind(oscar)(tango, options, golf);
                        _fun52636_ip = 2203; continue _fun52636;
 880:
                        oscar = _closure3_slot0;
                        report = oscar.emit;
                        tango = _closure1_slot18;
                        tango = tango.MLSProposals;
                        tango = report.bind(oscar)(tango, zulu);
                        _fun52636_ip = 2203; continue _fun52636;
 911:
                        oscar = _closure3_slot0;
                        report = oscar.emit;
                        tango = _closure1_slot18;
                        tango = tango.MLSExternalSenderPackage;
                        tango = report.bind(oscar)(tango, zulu);
                        _fun52636_ip = 2203; continue _fun52636;
 942:
                        tango = zulu.epoch;
                        oscar = null;
                        tango = oscar != tango;
                        if(!tango) { _fun52636_ip = 967; continue _fun52636 }
 957:
                        report = zulu.protocol_version;
                        tango = oscar != report;
 967:
                        if(!tango) { _fun52636_ip = 2203; continue _fun52636 }
 973:
                        options = _closure3_slot0;
                        golf = options.emit;
                        tango = _closure1_slot18;
                        oscar = tango.SecureFramesPrepareEpoch;
                        report = zulu.epoch;
                        tango = zulu.protocol_version;
                        tango = golf.bind(options)(oscar, report, tango);
                        _fun52636_ip = 2203; continue _fun52636;
 1017:
                        report = zulu.transition_id;
                        tango = null;
                        if(!(tango != report)) { _fun52636_ip = 2203; continue _fun52636 }
 1032:
                        golf = _closure3_slot0;
                        oscar = golf.emit;
                        tango = _closure1_slot18;
                        report = tango.SecureFramesExecuteTransition;
                        tango = zulu.transition_id;
                        tango = oscar.bind(golf)(report, tango);
                        _fun52636_ip = 2203; continue _fun52636;
 1069:
                        tango = zulu.transition_id;
                        oscar = null;
                        tango = oscar != tango;
                        if(!tango) { _fun52636_ip = 1094; continue _fun52636 }
 1084:
                        report = zulu.protocol_version;
                        tango = oscar != report;
 1094:
                        if(!tango) { _fun52636_ip = 2203; continue _fun52636 }
 1100:
                        options = _closure3_slot0;
                        golf = options.emit;
                        tango = _closure1_slot18;
                        oscar = tango.SecureFramesPrepareTransition;
                        report = zulu.transition_id;
                        tango = zulu.protocol_version;
                        tango = golf.bind(options)(oscar, report, tango);
                        _fun52636_ip = 2203; continue _fun52636;
 1144:
                        tango = zulu.platform;
                        oscar = null;
                        tango = oscar != tango;
                        if(!tango) { _fun52636_ip = 1169; continue _fun52636 }
 1159:
                        report = zulu.user_id;
                        tango = oscar != report;
 1169:
                        if(!tango) { _fun52636_ip = 2203; continue _fun52636 }
 1175:
                        options = _closure3_slot0;
                        golf = options.emit;
                        tango = _closure1_slot18;
                        oscar = tango.Platform;
                        report = zulu.user_id;
                        tango = zulu.platform;
                        tango = golf.bind(options)(oscar, report, tango);
                        _fun52636_ip = 2203; continue _fun52636;
 1219:
                        tango = zulu.flags;
                        oscar = null;
                        tango = oscar != tango;
                        if(!tango) { _fun52636_ip = 1243; continue _fun52636 }
 1233:
                        report = zulu.user_id;
                        tango = oscar != report;
 1243:
                        if(!tango) { _fun52636_ip = 2203; continue _fun52636 }
 1249:
                        options = _closure3_slot0;
                        golf = options.emit;
                        tango = _closure1_slot18;
                        oscar = tango.Flags;
                        report = zulu.user_id;
                        tango = zulu.flags;
                        tango = golf.bind(options)(oscar, report, tango);
                        _fun52636_ip = 2203; continue _fun52636;
 1292:
                        tango = zulu.voice;
                        oscar = null;
                        tango = oscar != tango;
                        if(!tango) { _fun52636_ip = 1317; continue _fun52636 }
 1307:
                        report = zulu.rtc_worker;
                        tango = oscar != report;
 1317:
                        if(!tango) { _fun52636_ip = 2203; continue _fun52636 }
 1323:
                        options = _closure3_slot0;
                        golf = options.emit;
                        tango = _closure1_slot18;
                        oscar = tango.VoiceBackendVersion;
                        report = zulu.voice;
                        tango = zulu.rtc_worker;
                        tango = golf.bind(options)(oscar, report, tango);
                        _fun52636_ip = 2203; continue _fun52636;
 1367:
                        oscar = _closure3_slot0;
                        report = oscar.emit;
                        tango = _closure1_slot18;
                        tango = tango.MediaSinkWants;
                        tango = report.bind(oscar)(tango, zulu);
                        _fun52636_ip = 2203; continue _fun52636;
 1398:
                        tango = zulu.audio_codec;
                        report = null;
                        tango = report == tango;
                        if(!tango) { _fun52636_ip = 1423; continue _fun52636 }
 1413:
                        oscar = zulu.video_codec;
                        tango = report == oscar;
 1423:
                        if(tango) { _fun52636_ip = 1465; continue _fun52636 }
 1426:
                        verify = _closure3_slot0;
                        options = verify.emit;
                        tango = _closure1_slot18;
                        golf = tango.Codecs;
                        oscar = zulu.audio_codec;
                        tango = zulu.video_codec;
                        tango = options.bind(verify)(golf, oscar, tango);
 1465:
                        tango = zulu.media_session_id;
                        if(!(report != tango)) { _fun52636_ip = 1507; continue _fun52636 }
 1475:
                        golf = _closure3_slot0;
                        oscar = golf.emit;
                        tango = _closure1_slot18;
                        report = tango.MediaSessionId;
                        tango = zulu.media_session_id;
                        tango = oscar.bind(golf)(report, tango);
 1507:
                        tango = zulu.keyframe_interval;
                        if(!tango) { _fun52636_ip = 2203; continue _fun52636 }
 1519:
                        golf = _closure3_slot0;
                        oscar = golf.emit;
                        tango = _closure1_slot18;
                        report = tango.KeyframeInterval;
                        tango = zulu.keyframe_interval;
                        tango = oscar.bind(golf)(report, tango);
                        _fun52636_ip = 2203; continue _fun52636;
 1556:
                        golf = _closure3_slot0;
                        oscar = golf.emit;
                        tango = _closure1_slot18;
                        report = tango.ClientDisconnect;
                        tango = zulu.user_id;
                        tango = oscar.bind(golf)(report, tango);
                        _fun52636_ip = 2203; continue _fun52636;
 1593:
                        golf = _closure3_slot0;
                        oscar = golf.emit;
                        tango = _closure1_slot18;
                        report = tango.ClientConnect;
                        tango = zulu.user_ids;
                        tango = oscar.bind(golf)(report, tango);
                        _fun52636_ip = 2203; continue _fun52636;
 1630:
                        offset = _closure3_slot0;
                        verify = offset.emit;
                        tango = _closure1_slot18;
                        options = tango.Video;
                        sizing = zulu.user_id;
                        kilo = zulu.audio_ssrc;
                        backup = zulu.video_ssrc;
                        romeo = _closure1_slot24;
                        yankee = zulu.streams;
                        tango = undefined;
                        foxtrot = romeo.bind(tango)(yankee);
                        result = offset;
                        output = options;
                        tango = result[verify](output, sizing, kilo, backup, foxtrot, romeo);
                        _fun52636_ip = 2203; continue _fun52636;
 1700:
                        report = _closure3_slot0;
                        tango = report.handleHeartbeatAck;
                        tango = tango.bind(report)(zulu);
                        _fun52636_ip = 2203; continue _fun52636;
 1722:
                        report = _closure3_slot0;
                        tango = report.sendHeartbeat;
                        tango = tango.bind(report)();
                        _fun52636_ip = 2203; continue _fun52636;
 1741:
                        tango = zulu.speaking;
                        oscar = 'boolean';
                        report = typeof tango;
                        verify = tango;
                        if(!(oscar === report)) { _fun52636_ip = 1785; continue _fun52636 }
 1761:
                        report = _closure1_slot11;
                        if(tango) { _fun52636_ip = 1776; continue _fun52636 }
 1768:
                        tango = report.NONE;
                        _fun52636_ip = 1782; continue _fun52636;
 1776:
                        tango = report.VOICE;
 1782:
                        verify = tango;
 1785:
                        options = _closure3_slot0;
                        golf = options.emit;
                        tango = _closure1_slot18;
                        output = tango.Speaking;
                        sizing = zulu.user_id;
                        kilo = zulu.ssrc;
                        result = options;
                        backup = verify;
                        tango = result[golf](output, sizing, kilo, backup, foxtrot);
                        _fun52636_ip = 2203; continue _fun52636;
 1832:
                        tango = zulu.bandwidth_estimation_experiment;
                        if(!tango) { _fun52636_ip = 1873; continue _fun52636 }
 1841:
                        golf = _closure3_slot0;
                        oscar = golf.emit;
                        tango = _closure1_slot18;
                        report = tango.BandwidthEstimationExperiment;
                        tango = zulu.bandwidth_estimation_experiment;
                        tango = oscar.bind(golf)(report, tango);
 1873:
                        options = _closure3_slot0;
                        golf = options.emit;
                        tango = _closure1_slot18;
                        oscar = tango.Codecs;
                        report = zulu.audio_codec;
                        tango = zulu.video_codec;
                        tango = golf.bind(options)(oscar, report, tango);
                        tango = zulu.media_session_id;
                        if(!tango) { _fun52636_ip = 1953; continue _fun52636 }
 1921:
                        golf = _closure3_slot0;
                        oscar = golf.emit;
                        tango = _closure1_slot18;
                        report = tango.MediaSessionId;
                        tango = zulu.media_session_id;
                        tango = oscar.bind(golf)(report, tango);
 1953:
                        tango = zulu.sdp;
                        if(tango) { _fun52636_ip = 2012; continue _fun52636 }
 1962:
                        tango = zulu.mode;
                        if(!tango) { _fun52636_ip = 2044; continue _fun52636 }
 1970:
                        options = _closure3_slot0;
                        golf = options.emit;
                        tango = _closure1_slot18;
                        oscar = tango.Encryption;
                        report = zulu.mode;
                        tango = zulu.secret_key;
                        tango = golf.bind(options)(oscar, report, tango);
                        _fun52636_ip = 2044; continue _fun52636;
 2012:
                        golf = _closure3_slot0;
                        oscar = golf.emit;
                        tango = _closure1_slot18;
                        report = tango.SDP;
                        tango = zulu.sdp;
                        tango = oscar.bind(golf)(report, tango);
 2044:
                        tango = zulu.keyframe_interval;
                        if(!tango) { _fun52636_ip = 2085; continue _fun52636 }
 2053:
                        golf = _closure3_slot0;
                        oscar = golf.emit;
                        tango = _closure1_slot18;
                        report = tango.KeyframeInterval;
                        tango = zulu.keyframe_interval;
                        tango = oscar.bind(golf)(report, tango);
 2085:
                        oscar = _closure3_slot0;
                        report = oscar.emit;
                        mike = _closure1_slot18;
                        tango = mike.SecureFramesInit;
                        mike = zulu.dave_protocol_version;
                        if(mike) { _fun52636_ip = 2118; continue _fun52636 }
 2116:
                        mike = 0;
 2118:
                        mike = report.bind(oscar)(tango, mike);
                        tango = _closure3_slot0;
                        mike = true;
                        tango['resumable'] = mike;
                        _fun52636_ip = 2203; continue _fun52636;
 2138:
                        tango = _closure3_slot0;
                        mike = tango.handleResumed;
                        mike = mike.bind(tango)(zulu);
                        _fun52636_ip = 2203; continue _fun52636;
 2157:
                        tango = _closure3_slot0;
                        mike = tango.handleReady;
                        mike = mike.bind(tango)(zulu);
                        _fun52636_ip = 2203; continue _fun52636;
 2176:
                        mike = _closure3_slot0;
                        entity = mike.clearHelloTimeout;
                        entity = entity.bind(mike)();
                        entity = mike.handleHello;
                        entity = entity.bind(mike)(zulu);
 2203:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['onmessage'] = tango;
                tango = function() {
                    report = _closure3_slot0;
                    tango = report.handleClose;
                    zulu = false;
                    mike = 0;
                    entity = 'An error with the websocket occurred';
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                };
                zulu['onerror'] = tango;
                mike = function(argFoo) {
                    entity = argFoo;
                    report = entity.wasClean;
                    tango = entity.code;
                    zulu = entity.reason;
                    mike = _closure3_slot0;
                    entity = mike.handleClose;
                    entity = entity.bind(mike)(report, tango, zulu);
                    return entity;
                };
                zulu['onclose'] = mike;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(38);
        entity[0] = report;
        report = {};
        golf = 'send';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun52640: for(var _fun52640_ip = 0; ; ) switch(_fun52640_ip) {
 0:
                verify = arguments[1];
                report = this;
                entity = undefined;
                if(!(verify === entity)) { _fun52640_ip = 14; continue _fun52640 }
 12:
                verify = null;
 14:
                zulu = undefined;
                mike = undefined;
                oscar = report.webSocket;
                zulu = oscar;
                tango = null;
                if(!(tango != oscar)) { _fun52640_ip = 168; continue _fun52640 }
 36:
                tango = zulu;
                golf = tango.readyState;
                tango = global;
                oscar = tango.WebSocket;
                oscar = oscar.OPEN;
                if(!(golf === oscar)) { _fun52640_ip = 168; continue _fun52640 }
 63:
                options = tango.JSON;
                golf = options.stringify;
                oscar = {};
                offset = argFoo;
                oscar['op'] = offset;
                oscar['d'] = verify;
                mike = golf.bind(options)(oscar);
                oscar = _closure1_slot8;
                oscar = oscar.isLoggingGatewayEvents;
                if(!oscar) { _fun52640_ip = 150; continue _fun52640 }
 109:
                oscar = report.logger;
                report = oscar.info;
                options = mike;
                tango = tango.HermesInternal;
                golf = tango.concat;
                tango = '<~ ';
                tango = golf.bind(tango)(options);
                tango = report.bind(oscar)(tango);
 150: // try_start_0
                tango = zulu;
                zulu = tango.send;
                mike = zulu.bind(tango)(mike);
 164: // try_end0
                _fun52640_ip = 168; continue _fun52640;
 166: // catch_target0
                CatchBlockStart(arg_register=1);
 168:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'sendBinary';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun52641: for(var _fun52641_ip = 0; ; ) switch(_fun52641_ip) {
 0:
                tango = argFoo;
                report = argBar;
                entity = undefined;
                zulu = undefined;
                mike = undefined;
                oscar = this;
                golf = oscar.webSocket;
                zulu = golf;
                oscar = null;
                if(!(oscar != golf)) { _fun52641_ip = 146; continue _fun52641 }
 30:
                oscar = zulu;
                options = oscar.readyState;
                oscar = global;
                golf = oscar.WebSocket;
                golf = golf.OPEN;
                if(!(options === golf)) { _fun52641_ip = 146; continue _fun52641 }
 57:
                verify = oscar.Uint8Array;
                golf = report;
                report = golf.byteLength;
                oscar = 1;
                yankee = report + oscar;
                options = verify.prototype;
                options = Object.create(options, {constructor: {value: verify}});
                romeo = options;
                report = new romeo[verify](yankee, offset);
                report = report instanceof Object ? report : options;
                mike = report;
                options = tango;
                tango = 0;
                report[tango] = options;
                tango = report.set;
                tango = tango.bind(report)(golf, oscar);
 122: // try_start_0
                tango = zulu;
                zulu = tango.send;
                mike = mike.buffer;
                mike = zulu.bind(tango)(mike);
 142: // try_end0
                _fun52641_ip = 146; continue _fun52641;
 144: // catch_target0
                CatchBlockStart(arg_register=1);
 146:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'ping';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            entity = mike.sendHeartbeat;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'doResumeOrClose';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun52643: for(var _fun52643_ip = 0; ; ) switch(_fun52643_ip) {
 0:
                mike = this;
                entity = global;
                zulu = entity.Date;
                entity = zulu.now;
                entity = entity.bind(zulu)();
                zulu = mike.serverId;
                tango = null;
                if(!(tango !== zulu)) { _fun52643_ip = 92; continue _fun52643 }
 32:
                zulu = mike.token;
                if(!(tango !== zulu)) { _fun52643_ip = 92; continue _fun52643 }
 42:
                zulu = mike.sessionId;
                if(!(tango !== zulu)) { _fun52643_ip = 92; continue _fun52643 }
 52:
                zulu = mike.resumable;
                if(!zulu) { _fun52643_ip = 92; continue _fun52643 }
 61:
                zulu = mike.lastHeartbeatAckTime;
                if(!(tango != zulu)) { _fun52643_ip = 128; continue _fun52643 }
 71:
                zulu = mike.lastHeartbeatAckTime;
                tango = entity - zulu;
                zulu = _closure1_slot16;
                if(!(!(tango <= zulu))) { _fun52643_ip = 128; continue _fun52643 }
 92:
                oscar = mike.disconnect;
                zulu = _closure1_slot13;
                report = zulu.UNRESUMABLE;
                tango = false;
                zulu = 'Cannot resume connection.';
                zulu = oscar.bind(mike)(tango, report, zulu);
                _fun52643_ip = 146; continue _fun52643;
 128:
                zulu = mike.doResume;
                zulu = zulu.bind(mike)();
                mike['lastHeartbeatAckTime'] = entity;
 146:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'doResume';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun52644: for(var _fun52644_ip = 0; ; ) switch(_fun52644_ip) {
 0:
                tango = this;
                entity = tango.lastRecvSeqNum;
                oscar = null;
                mike = oscar != entity;
                report = -1;
                if(!mike) { _fun52644_ip = 27; continue _fun52644 }
 24:
                report = entity;
 27:
                zulu = tango.logger;
                mike = zulu.info;
                entity = tango.serverId;
                golf = oscar != entity;
                offset = '';
                verify = offset;
                if(!golf) { _fun52644_ip = 61; continue _fun52644 }
 58:
                verify = entity;
 61:
                entity = tango.sessionId;
                oscar = oscar != entity;
                if(!oscar) { _fun52644_ip = 77; continue _fun52644 }
 74:
                offset = entity;
 77:
                entity = global;
                entity = entity.HermesInternal;
                options = entity.concat;
                sizing = '[RESUME] resuming session. serverId=';
                backup = ' sessionId=';
                romeo = ' seqAck=';
                kilo = verify;
                foxtrot = offset;
                yankee = report;
                entity = sizing[options](kilo, backup, foxtrot, romeo, yankee, offset);
                entity = mike.bind(zulu)(entity);
                zulu = tango.emit;
                mike = _closure1_slot18;
                mike = mike.Resuming;
                mike = zulu.bind(tango)(mike);
                mike = _closure1_slot14;
                mike = mike.RESUMING;
                tango['connectionState'] = mike;
                zulu = tango.send;
                entity = _closure1_slot12;
                mike = entity.RESUME;
                entity = {};
                oscar = tango.token;
                entity['token'] = oscar;
                oscar = tango.sessionId;
                entity['session_id'] = oscar;
                oscar = tango.serverId;
                entity['server_id'] = oscar;
                entity['seq_ack'] = report;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'handleHello';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun52645: for(var _fun52645_ip = 0; ; ) switch(_fun52645_ip) {
 0:
                entity = argFoo;
                mike = this;
                report = entity.v;
                oscar = null;
                golf = oscar != report;
                tango = 3;
                zulu = tango;
                if(!golf) { _fun52645_ip = 29; continue _fun52645 }
 26:
                zulu = report;
 29:
                mike['serverVersion'] = zulu;
                zulu = mike.serverVersion;
                if(!(!(zulu <= tango))) { _fun52645_ip = 148; continue _fun52645 }
 45:
                tango = entity.heartbeat_interval;
                zulu = mike.heartbeatIntervalModifier;
                zulu = tango * zulu;
                mike['heartbeatInterval'] = zulu;
                golf = _closure1_slot0;
                report = _closure1_slot2;
                tango = 10;
                report = report[tango];
                tango = undefined;
                tango = golf.bind(tango)(report);
                tango = tango.isPlatformEmbedded;
                if(tango) { _fun52645_ip = 218; continue _fun52645 }
 101:
                options = global;
                golf = options.Math;
                report = golf.min;
                tango = _closure1_slot17;
                zulu = mike.heartbeatInterval;
                if(!(oscar == zulu)) { _fun52645_ip = 134; continue _fun52645 }
 128:
                zulu = options.NaN;
 134:
                zulu = report.bind(golf)(tango, zulu);
                mike['heartbeatInterval'] = zulu;
                _fun52645_ip = 218; continue _fun52645;
 148:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 10;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                tango = zulu.isPlatformEmbedded;
                zulu = 0.1;
                if(!tango) { _fun52645_ip = 202; continue _fun52645 }
 192:
                zulu = 0.25;
 202:
                entity = entity.heartbeat_interval;
                entity = entity * zulu;
                mike['heartbeatInterval'] = entity;
 218:
                entity = global;
                tango = entity.Date;
                zulu = tango.now;
                tango = zulu.bind(tango)();
                zulu = mike.connectionStartTime;
                yankee = tango - zulu;
                tango = mike.logger;
                zulu = tango.info;
                report = mike.heartbeatInterval;
                oscar = oscar != report;
                offset = '??';
                if(!oscar) { _fun52645_ip = 278; continue _fun52645 }
 275:
                offset = report;
 278:
                kilo = mike.serverVersion;
                entity = entity.HermesInternal;
                options = entity.concat;
                result = '[HELLO] heartbeat interval: ';
                sizing = ', version: ';
                backup = ', took ';
                romeo = ' ms';
                output = offset;
                foxtrot = yankee;
                entity = result[options](output, sizing, kilo, backup, foxtrot, romeo, yankee);
                entity = zulu.bind(tango)(entity);
                entity = mike.startHeartbeater;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'handleReady';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun52646: for(var _fun52646_ip = 0; ; ) switch(_fun52646_ip) {
 0:
                mike = argFoo;
                offset = this;
                zulu = offset.backoff;
                entity = zulu.succeed;
                entity = entity.bind(zulu)();
                entity = global;
                tango = entity.Date;
                zulu = tango.now;
                tango = zulu.bind(tango)();
                zulu = offset.connectionStartTime;
                golf = tango - zulu;
                tango = offset.logger;
                zulu = tango.info;
                entity = entity.HermesInternal;
                oscar = entity.concat;
                report = '[READY] took ';
                entity = ' ms';
                entity = oscar.bind(report)(golf, entity);
                entity = zulu.bind(tango)(entity);
                zulu = offset.serverVersion;
                entity = 6;
                if(!(zulu >= entity)) { _fun52646_ip = 134; continue _fun52646 }
 107:
                tango = offset.send;
                entity = _closure1_slot12;
                zulu = entity.VOICE_BACKEND_VERSION;
                entity = {};
                entity = tango.bind(offset)(zulu, entity);
 134:
                verify = offset.emit;
                zulu = _closure1_slot18;
                options = zulu.Ready;
                output = mike.ip;
                sizing = mike.port;
                kilo = mike.modes;
                backup = mike.ssrc;
                yankee = _closure1_slot24;
                zulu = mike.streams;
                entity = undefined;
                foxtrot = yankee.bind(entity)(zulu);
                romeo = mike.experiments;
                echo = offset;
                result = options;
                mike = echo[verify](result, output, sizing, kilo, backup, foxtrot, romeo, yankee);
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'handleResumed';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.backoff;
            entity = mike.succeed;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'handleClose';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun52648: for(var _fun52648_ip = 0; ; ) switch(_fun52648_ip) {
 0:
                report = argFoo;
                tango = argBar;
                zulu = argBaz;
                mike = this;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = report;
                var _closure3_slot2 = tango;
                var _closure3_slot3 = zulu;
                golf = _closure1_slot14;
                golf = golf.DISCONNECTED;
                mike['connectionState'] = golf;
                if(report) { _fun52648_ip = 54; continue _fun52648 }
 52:
                report = false;
 54:
                _closure3_slot1 = report;
                golf = mike.cleanupWebSocket;
                golf = golf.bind(mike)();
                golf = _closure1_slot13;
                golf = golf.AUTHENTICATION_FAILED;
                if(!(tango !== golf)) { _fun52648_ip = 324; continue _fun52648 }
 85:
                golf = _closure1_slot13;
                golf = golf.SERVER_CRASH;
                if(!(tango !== golf)) { _fun52648_ip = 324; continue _fun52648 }
 102:
                golf = _closure1_slot13;
                golf = golf.SERVER_NOT_FOUND;
                if(!(tango !== golf)) { _fun52648_ip = 324; continue _fun52648 }
 119:
                oscar = _closure1_slot13;
                oscar = oscar.INVALID_SESSION;
                if(!(tango !== oscar)) { _fun52648_ip = 324; continue _fun52648 }
 136:
                oscar = mike.backoff;
                golf = oscar.fails;
                oscar = 3;
                if(!(!(golf > oscar))) { _fun52648_ip = 286; continue _fun52648 }
 158:
                golf = mike.backoff;
                oscar = golf.fail;
                entity = function() {
                    report = _closure3_slot0;
                    tango = report.reconnect;
                    zulu = _closure3_slot1;
                    mike = _closure3_slot2;
                    entity = _closure3_slot3;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                };
                options = oscar.bind(golf)(entity);
                golf = mike.logger;
                oscar = golf.warn;
                entity = report.toString;
                backup = entity.bind(report)();
                entity = 1000;
                verify = options / entity;
                options = verify.toFixed;
                entity = 2;
                sizing = options.bind(verify)(entity);
                entity = global;
                entity = entity.HermesInternal;
                romeo = entity.concat;
                vacuum = '[WS CLOSED] (clean: ';
                source = ', code: ';
                echo = ', reason: ';
                output = ') retrying in ';
                kilo = ' seconds.';
                control = backup;
                update = tango;
                result = zulu;
                entity = vacuum[romeo](control, source, update, echo, result, output, sizing, kilo, backup);
                entity = oscar.bind(golf)(entity);
                _fun52648_ip = 320; continue _fun52648;
 286:
                golf = mike.logger;
                oscar = golf.warn;
                entity = '[WS CLOSED] Backoff exceed. Resetting.';
                entity = oscar.bind(golf)(entity);
                entity = mike.disconnect;
                entity = entity.bind(mike)(report, tango, zulu);
 320:
                entity = undefined;
                return entity;
 324:
                entity = mike.disconnect;
                entity = entity.bind(mike)(report, tango, zulu);
                return entity;
            }
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'disconnect';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            oscar = argFoo;
            report = argBar;
            tango = argBaz;
            zulu = this;
            golf = zulu.logger;
            mike = golf.warn;
            entity = oscar.toString;
            output = entity.bind(oscar)();
            entity = global;
            entity = entity.HermesInternal;
            offset = entity.concat;
            result = '[DISCONNECT] (';
            options = ', ';
            romeo = ')';
            sizing = options;
            kilo = report;
            backup = options;
            foxtrot = tango;
            entity = result[offset](output, sizing, kilo, backup, foxtrot, romeo, yankee);
            entity = mike.bind(golf)(entity);
            entity = zulu.cleanupWebSocket;
            entity = entity.bind(zulu)();
            entity = zulu.cleanupState;
            entity = entity.bind(zulu)();
            mike = _closure1_slot14;
            mike = mike.DISCONNECTED;
            zulu['connectionState'] = mike;
            mike = zulu.emit;
            entity = _closure1_slot18;
            output = entity.Disconnect;
            result = zulu;
            sizing = oscar;
            kilo = report;
            backup = tango;
            entity = result[mike](output, sizing, kilo, backup, foxtrot);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'reconnect';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            report = argFoo;
            mike = this;
            tango = mike.logger;
            zulu = tango.info;
            entity = report.toString;
            kilo = entity.bind(report)();
            entity = global;
            entity = entity.HermesInternal;
            verify = entity.concat;
            sizing = '[RECONNECT] wasClean=';
            backup = ' code=';
            foxtrot = argBar;
            romeo = ' reason=';
            yankee = argBaz;
            entity = sizing[verify](kilo, backup, foxtrot, romeo, yankee, offset);
            entity = zulu.bind(tango)(entity);
            zulu = mike.cleanupWebSocket;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = zulu.close;
                entity = 4000;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = _closure1_slot14;
            entity = entity.RECONNECTING;
            mike['connectionState'] = entity;
            entity = mike.createWebSocket;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'cleanupWebSocket';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun52653: for(var _fun52653_ip = 0; ; ) switch(_fun52653_ip) {
 0:
                tango = argFoo;
                entity = this;
                mike = entity.stopHeartbeater;
                mike = mike.bind(entity)();
                mike = entity.clearHelloTimeout;
                mike = mike.bind(entity)();
                zulu = entity.webSocket;
                mike = null;
                entity['webSocket'] = mike;
                if(!(mike != zulu)) { _fun52653_ip = 88; continue _fun52653 }
 46:
                report = _closure1_slot21;
                zulu['onopen'] = report;
                zulu['onmessage'] = report;
                zulu['onerror'] = report;
                zulu['onclose'] = report;
                if(!(mike != tango)) { _fun52653_ip = 88; continue _fun52653 }
 81:
                mike = undefined;
                mike = tango.bind(mike)(zulu);
 88:
                mike = entity.backoff;
                entity = mike.cancel;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'cleanupState';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            entity = null;
            mike['serverId'] = entity;
            mike['sessionId'] = entity;
            mike['token'] = entity;
            zulu = false;
            mike['resumable'] = zulu;
            mike['lastRecvSeqNum'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'parseWebSocketMessage';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun52655: for(var _fun52655_ip = 0; ; ) switch(_fun52655_ip) {
 0:
                mike = argFoo;
                entity = this;
                tango = mike.data;
                report = global;
                zulu = report.ArrayBuffer;
                zulu = tango instanceof zulu;
                if(zulu) { _fun52655_ip = 50; continue _fun52655 }
 26:
                oscar = report.JSON;
                tango = oscar.parse;
                zulu = mike.data;
                zulu = tango.bind(oscar)(zulu);
                return zulu;
 50:
                tango = report.Uint8Array;
                offset = mike.data;
                zulu = tango.prototype;
                zulu = Object.create(zulu, {constructor: {value: tango}});
                yankee = zulu;
                mike = new yankee[tango](offset, verify);
                tango = mike instanceof Object ? mike : zulu;
                mike = entity.serverVersion;
                zulu = 8;
                oscar = mike >= zulu;
                mike = null;
                if(!oscar) { _fun52655_ip = 147; continue _fun52655 }
 99:
                golf = report.DataView;
                offset = tango.buffer;
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                yankee = oscar;
                report = new yankee[golf](offset, verify);
                options = report instanceof Object ? report : oscar;
                golf = options.getUint16;
                oscar = 0;
                report = false;
                mike = golf.bind(options)(oscar, report);
 147:
                entity = entity.serverVersion;
                entity = entity >= zulu;
                report = 0;
                if(!entity) { _fun52655_ip = 165; continue _fun52655 }
 162:
                report = 2;
 165:
                entity = {};
                zulu = tango[report];
                entity['op'] = zulu;
                entity['seq'] = mike;
                zulu = tango.subarray;
                mike = 1;
                mike = report + mike;
                mike = zulu.bind(tango)(mike);
                entity['d'] = mike;
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'clearHelloTimeout';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun52656: for(var _fun52656_ip = 0; ; ) switch(_fun52656_ip) {
 0:
                mike = this;
                zulu = mike.helloTimeout;
                entity = null;
                if(!(entity != zulu)) { _fun52656_ip = 42; continue _fun52656 }
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
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'handleHeartbeatAck';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun52657: for(var _fun52657_ip = 0; ; ) switch(_fun52657_ip) {
 0:
                mike = argFoo;
                entity = this;
                report = entity.logger;
                tango = report.info;
                zulu = 'Heartbeat ACK received';
                zulu = tango.bind(report)(zulu);
                tango = entity.serverVersion;
                zulu = 8;
                oscar = mike;
                if(!(tango >= zulu)) { _fun52657_ip = 49; continue _fun52657 }
 44:
                oscar = mike.t;
 49:
                report = entity.emit;
                mike = _closure1_slot18;
                tango = mike.Ping;
                zulu = global;
                golf = zulu.Date;
                mike = golf.now;
                mike = mike.bind(golf)();
                mike = mike - oscar;
                mike = report.bind(entity)(tango, mike);
                tango = zulu.Date;
                mike = tango.now;
                mike = mike.bind(tango)();
                entity['lastHeartbeatAckTime'] = mike;
                mike = true;
                entity['heartbeatAck'] = mike;
                tango = entity.expeditedHeartbeatTimeout;
                mike = null;
                if(!(mike !== tango)) { _fun52657_ip = 183; continue _fun52657 }
 136:
                report = zulu.clearTimeout;
                tango = entity.expeditedHeartbeatTimeout;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                entity['expeditedHeartbeatTimeout'] = mike;
                zulu = entity.logger;
                mike = zulu.info;
                entity = 'Expedited heartbeat succeeded';
                entity = mike.bind(zulu)(entity);
 183:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'handleHeartbeatTimeout';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            tango = entity.cleanupWebSocket;
            zulu = function(argFoo) {
                zulu = argFoo;
                mike = zulu.close;
                entity = 4000;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = tango.bind(entity)(zulu);
            tango = entity.backoff;
            zulu = tango.fail;
            mike = function() {
                report = _closure3_slot0;
                tango = report.reconnect;
                entity = _closure1_slot13;
                zulu = entity.HEARTBEAT_TIMEOUT;
                mike = false;
                entity = 'Heartbeat timeout.';
                entity = tango.bind(report)(mike, zulu, entity);
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = entity.logger;
            mike = zulu.warn;
            entity = 1000;
            report = tango / entity;
            tango = report.toFixed;
            entity = 2;
            oscar = tango.bind(report)(entity);
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            tango = '[HEARTBEAT ACK TIMEOUT] reconnecting in ';
            entity = ' seconds.';
            entity = report.bind(tango)(oscar, entity);
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'startHeartbeater';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun52661: for(var _fun52661_ip = 0; ; ) switch(_fun52661_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                report = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 11;
                tango = tango[entity];
                entity = undefined;
                golf = report.bind(entity)(tango);
                tango = zulu.heartbeatInterval;
                oscar = null;
                report = oscar != tango;
                tango = 'RTCControlSocket: Heartbeat interval should never null here.';
                tango = golf.bind(entity)(report, tango);
                options = zulu.logger;
                golf = options.info;
                offset = zulu.heartbeatInterval;
                tango = global;
                report = tango.HermesInternal;
                verify = report.concat;
                report = 'Starting heartbeat with interval: ';
                report = verify.bind(report)(offset);
                report = golf.bind(options)(report);
                report = zulu.heartbeater;
                if(!(oscar !== report)) { _fun52661_ip = 131; continue _fun52661 }
 114:
                oscar = tango.clearInterval;
                report = zulu.heartbeater;
                report = oscar.bind(entity)(report);
 131:
                report = true;
                zulu['heartbeatAck'] = report;
                report = tango.setInterval;
                tango = zulu.heartbeatInterval;
                mike = function() {
                    _fun52662: for(var _fun52662_ip = 0; ; ) switch(_fun52662_ip) {
 0:
                        mike = _closure3_slot0;
                        zulu = mike.heartbeatAck;
                        mike = _closure3_slot0;
                        if(zulu) { _fun52662_ip = 48; continue _fun52662 }
 20:
                        tango = mike.expeditedHeartbeatTimeout;
                        zulu = null;
                        if(!(zulu === tango)) { _fun52662_ip = 66; continue _fun52662 }
 32:
                        zulu = _closure3_slot0;
                        entity = zulu.handleHeartbeatTimeout;
                        entity = entity.bind(zulu)();
                        _fun52662_ip = 66; continue _fun52662;
 48:
                        entity = false;
                        mike['heartbeatAck'] = entity;
                        entity = mike.sendHeartbeat;
                        entity = entity.bind(mike)();
 66:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = report.bind(entity)(mike, tango);
                zulu['heartbeater'] = mike;
                return entity;
            }
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'sendHeartbeat';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun52663: for(var _fun52663_ip = 0; ; ) switch(_fun52663_ip) {
 0:
                tango = this;
                mike = tango.serverVersion;
                entity = 8;
                if(!(!(mike >= entity))) { _fun52663_ip = 82; continue _fun52663 }
 16:
                zulu = tango.logger;
                mike = zulu.info;
                entity = 'Sending heartbeat';
                entity = mike.bind(zulu)(entity);
                zulu = tango.send;
                entity = _closure1_slot12;
                mike = entity.HEARTBEAT;
                entity = global;
                report = entity.Date;
                entity = report.now;
                entity = entity.bind(report)();
                entity = zulu.bind(tango)(mike, entity);
                _fun52663_ip = 197; continue _fun52663;
 82:
                entity = tango.lastRecvSeqNum;
                mike = null;
                mike = mike != entity;
                report = -1;
                if(!mike) { _fun52663_ip = 106; continue _fun52663 }
 103:
                report = entity;
 106:
                zulu = tango.logger;
                mike = zulu.info;
                oscar = global;
                entity = oscar.HermesInternal;
                golf = entity.concat;
                entity = 'Sending heartbeat with last received sequence number: ';
                entity = golf.bind(entity)(report);
                entity = mike.bind(zulu)(entity);
                zulu = tango.send;
                entity = _closure1_slot12;
                mike = entity.HEARTBEAT;
                entity = {};
                golf = oscar.Date;
                oscar = golf.now;
                oscar = oscar.bind(golf)();
                entity['t'] = oscar;
                entity['seq_ack'] = report;
                entity = zulu.bind(tango)(mike, entity);
 197:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'stopHeartbeater';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun52664: for(var _fun52664_ip = 0; ; ) switch(_fun52664_ip) {
 0:
                mike = this;
                zulu = mike.heartbeater;
                entity = null;
                if(!(entity !== zulu)) { _fun52664_ip = 42; continue _fun52664 }
 15:
                zulu = global;
                report = zulu.clearInterval;
                tango = mike.heartbeater;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['heartbeater'] = entity;
 42:
                zulu = mike.expeditedHeartbeatTimeout;
                if(!(entity !== zulu)) { _fun52664_ip = 79; continue _fun52664 }
 52:
                zulu = global;
                report = zulu.clearTimeout;
                tango = mike.expeditedHeartbeatTimeout;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                mike['expeditedHeartbeatTimeout'] = entity;
 79:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[20] = report;
        report = {};
        golf = 'connect';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun52665: for(var _fun52665_ip = 0; ; ) switch(_fun52665_ip) {
 0:
                mike = this;
                tango = mike.connectionState;
                zulu = _closure1_slot14;
                zulu = zulu.DISCONNECTED;
                if(!(tango === zulu)) { _fun52665_ip = 77; continue _fun52665 }
 26:
                zulu = _closure1_slot14;
                zulu = zulu.CONNECTING;
                mike['connectionState'] = zulu;
                zulu = mike.createWebSocket;
                zulu = zulu.bind(mike)();
                zulu = mike.emit;
                entity = _closure1_slot18;
                entity = entity.Connecting;
                entity = zulu.bind(mike)(entity);
                entity = true;
                _fun52665_ip = 100; continue _fun52665;
 77:
                tango = mike.logger;
                zulu = tango.error;
                mike = 'Cannot start a new connection, connection state is not disconnected';
                mike = zulu.bind(tango)(mike);
                entity = false;
 100:
                return entity;
            }
        };
        report['value'] = golf;
        entity[21] = report;
        report = {};
        golf = 'identify';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun52666: for(var _fun52666_ip = 0; ; ) switch(_fun52666_ip) {
 0:
                mike = argFoo;
                report = this;
                foxtrot = mike.serverId;
                romeo = mike.userId;
                yankee = mike.sessionId;
                offset = mike.token;
                verify = mike.maxDaveProtocolVersion;
                options = mike.video;
                entity = undefined;
                if(!(options === entity)) { _fun52666_ip = 49; continue _fun52666 }
 47:
                options = false;
 49:
                golf = mike.streamParameters;
                report['serverId'] = foxtrot;
                report['sessionId'] = yankee;
                report['token'] = offset;
                mike = _closure1_slot14;
                mike = mike.IDENTIFYING;
                report['connectionState'] = mike;
                tango = report.send;
                mike = _closure1_slot12;
                zulu = mike.IDENTIFY;
                mike = {};
                mike['server_id'] = foxtrot;
                mike['user_id'] = romeo;
                mike['session_id'] = yankee;
                mike['token'] = offset;
                mike['max_dave_protocol_version'] = verify;
                mike['video'] = options;
                oscar = _closure1_slot23;
                oscar = oscar.bind(entity)(golf);
                mike['streams'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        report['value'] = golf;
        entity[22] = report;
        report = {};
        golf = 'expeditedHeartbeat';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun52667: for(var _fun52667_ip = 0; ; ) switch(_fun52667_ip) {
 0:
                verify = arguments[1];
                zulu = arguments[2];
                mike = this;
                var _closure3_slot0 = mike;
                report = undefined;
                if(!(verify === report)) { _fun52667_ip = 25; continue _fun52667 }
 21:
                verify = '';
 25:
                if(!(zulu === report)) { _fun52667_ip = 31; continue _fun52667 }
 29:
                zulu = true;
 31:
                oscar = mike.webSocket;
                tango = null;
                if(!(tango == oscar)) { _fun52667_ip = 108; continue _fun52667 }
 43:
                if(zulu) { _fun52667_ip = 95; continue _fun52667 }
 46:
                golf = mike.logger;
                oscar = golf.info;
                options = '';
                if(!(options !== verify)) { _fun52667_ip = 75; continue _fun52667 }
 65:
                zulu = 'reason: ';
                options = zulu + verify;
 75:
                zulu = 'Expedited heartbeat requested, but is disconnected and a reset was not requested ';
                zulu = zulu + options;
                zulu = oscar.bind(golf)(zulu);
                _fun52667_ip = 227; continue _fun52667;
 95:
                zulu = mike.resetBackoff;
                zulu = zulu.bind(mike)(verify);
                return zulu;
 108:
                golf = mike.logger;
                oscar = golf.info;
                options = '';
                if(!(options !== verify)) { _fun52667_ip = 137; continue _fun52667 }
 127:
                zulu = 'reason: ';
                options = zulu + verify;
 137:
                zulu = 'Performing an expedited heartbeat ';
                zulu = zulu + options;
                zulu = oscar.bind(golf)(zulu);
                zulu = false;
                mike['heartbeatAck'] = zulu;
                zulu = mike.sendHeartbeat;
                zulu = zulu.bind(mike)();
                zulu = mike.expeditedHeartbeatTimeout;
                if(!(tango !== zulu)) { _fun52667_ip = 199; continue _fun52667 }
 180:
                zulu = global;
                tango = zulu.clearTimeout;
                zulu = mike.expeditedHeartbeatTimeout;
                zulu = tango.bind(report)(zulu);
 199:
                zulu = global;
                tango = zulu.setTimeout;
                zulu = function() {
                    _fun52668: for(var _fun52668_ip = 0; ; ) switch(_fun52668_ip) {
 0:
                        mike = _closure3_slot0;
                        zulu = null;
                        mike['expeditedHeartbeatTimeout'] = zulu;
                        zulu = mike.heartbeatAck;
                        mike = false;
                        if(!(mike === zulu)) { _fun52668_ip = 41; continue _fun52668 }
 27:
                        mike = _closure3_slot0;
                        entity = mike.handleHeartbeatTimeout;
                        entity = entity.bind(mike)();
 41:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = argFoo;
                entity = tango.bind(report)(zulu, entity);
                mike['expeditedHeartbeatTimeout'] = entity;
 227:
                entity = false;
                return entity;
            }
        };
        report['value'] = golf;
        entity[23] = report;
        report = {};
        golf = 'resetBackoff';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun52669: for(var _fun52669_ip = 0; ; ) switch(_fun52669_ip) {
 0:
                golf = arguments[0];
                oscar = this;
                entity = undefined;
                if(!(golf === entity)) { _fun52669_ip = 16; continue _fun52669 }
 12:
                golf = '';
 16:
                entity = oscar.backoff;
                mike = entity.fails;
                entity = 0;
                entity = mike > entity;
                if(!entity) { _fun52669_ip = 49; continue _fun52669 }
 37:
                zulu = oscar.webSocket;
                mike = null;
                entity = mike == zulu;
 49:
                if(!entity) { _fun52669_ip = 148; continue _fun52669 }
 52:
                tango = oscar.logger;
                zulu = tango.info;
                report = '';
                if(!(report !== golf)) { _fun52669_ip = 81; continue _fun52669 }
 71:
                mike = 'for reason: ';
                report = mike + golf;
 81:
                mike = 'Connection backoff reset ';
                mike = mike + report;
                mike = zulu.bind(tango)(mike);
                zulu = oscar.backoff;
                mike = zulu.succeed;
                mike = mike.bind(zulu)();
                report = oscar.reconnect;
                mike = _closure1_slot13;
                tango = mike.RESET_BACKOFF;
                zulu = false;
                mike = 'Reset backoff.';
                mike = report.bind(oscar)(zulu, tango, mike);
                entity = true;
 148:
                return entity;
            }
        };
        report['value'] = golf;
        entity[24] = report;
        report = {};
        golf = 'close';
        report['key'] = golf;
        golf = function() { // Original name: value
            oscar = this;
            zulu = oscar.logger;
            mike = zulu.info;
            entity = 'CLOSE';
            entity = mike.bind(zulu)(entity);
            mike = oscar.cleanupWebSocket;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = zulu.close;
                entity = 4000;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(oscar)(entity);
            entity = oscar.cleanupState;
            entity = entity.bind(oscar)();
            mike = _closure1_slot14;
            mike = mike.DISCONNECTED;
            oscar['connectionState'] = mike;
            report = oscar.emit;
            entity = _closure1_slot18;
            offset = entity.Disconnect;
            verify = true;
            options = 1000;
            golf = 'Force Close';
            yankee = oscar;
            entity = yankee[report](offset, verify, options, golf, oscar);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[25] = report;
        report = {};
        golf = 'destroy';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            entity = mike.close;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[26] = report;
        report = {};
        golf = 'selectProtocol';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            _fun52673: for(var _fun52673_ip = 0; ; ) switch(_fun52673_ip) {
 0:
                golf = argBar;
                zulu = argBaz;
                tango = this;
                mike = {};
                verify = null;
                entity = verify == zulu;
                oscar = null;
                report = mike;
                if(entity) { _fun52673_ip = 329; continue _fun52673 }
 28:
                entity = 'sdp';
                entity = entity in zulu;
                if(!entity) { _fun52673_ip = 66; continue _fun52673 }
 39:
                entity = zulu.sdp;
                if(!(verify != entity)) { _fun52673_ip = 66; continue _fun52673 }
 49:
                options = zulu.sdp;
                entity = '';
                if(!(entity === options)) { _fun52673_ip = 270; continue _fun52673 }
 66:
                entity = 'address';
                entity = entity in zulu;
                if(!entity) { _fun52673_ip = 87; continue _fun52673 }
 77:
                options = zulu.address;
                entity = verify != options;
 87:
                if(!entity) { _fun52673_ip = 104; continue _fun52673 }
 90:
                offset = zulu.address;
                options = '';
                entity = options !== offset;
 104:
                if(!entity) { _fun52673_ip = 128; continue _fun52673 }
 107:
                options = global;
                yankee = options.Boolean;
                offset = zulu.port;
                options = undefined;
                entity = yankee.bind(options)(offset);
 128:
                if(!entity) { _fun52673_ip = 140; continue _fun52673 }
 131:
                options = zulu.mode;
                entity = verify != options;
 140:
                if(!entity) { _fun52673_ip = 156; continue _fun52673 }
 143:
                verify = zulu.mode;
                options = '';
                entity = options !== verify;
 156:
                offset = undefined;
                oscar = undefined;
                report = mike;
                if(!entity) { _fun52673_ip = 329; continue _fun52673 }
 169:
                mike = {};
                entity = zulu.address;
                mike['address'] = entity;
                entity = zulu.port;
                mike['port'] = entity;
                entity = zulu.mode;
                mike['mode'] = entity;
                entity = {};
                foxtrot = entity;
                romeo = zulu;
                options = copyDataProperties(foxtrot, romeo);
                verify = _closure1_slot22;
                options = zulu.codecs;
                verify = verify.bind(offset)(options);
                options = 'codecs';
                entity[options] = verify;
                options = 'rtc_connection_id';
                entity[options] = golf;
                verify = argCorge;
                options = 'experiments';
                entity[options] = verify;
                oscar = mike;
                report = entity;
                _fun52673_ip = 329; continue _fun52673;
 270:
                oscar = zulu.sdp;
                entity = {};
                foxtrot = entity;
                romeo = zulu;
                options = copyDataProperties(foxtrot, romeo);
                verify = _closure1_slot22;
                options = zulu.codecs;
                zulu = undefined;
                options = verify.bind(zulu)(options);
                zulu = 'codecs';
                entity[zulu] = options;
                zulu = 'rtc_connection_id';
                entity[zulu] = golf;
                report = entity;
 329:
                zulu = tango.send;
                entity = _closure1_slot12;
                mike = entity.SELECT_PROTOCOL;
                entity = {};
                golf = argFoo;
                entity['protocol'] = golf;
                entity['data'] = oscar;
                foxtrot = entity;
                romeo = report;
                report = copyDataProperties(foxtrot, romeo);
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[27] = report;
        report = {};
        golf = 'updateSession';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            report = this;
            tango = report.send;
            mike = _closure1_slot12;
            zulu = mike.SESSION_UPDATE;
            mike = {};
            golf = _closure1_slot22;
            entity = argFoo;
            oscar = entity.codecs;
            entity = undefined;
            oscar = golf.bind(entity)(oscar);
            mike['codecs'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report['value'] = golf;
        entity[28] = report;
        report = {};
        golf = 'speaking';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun52675: for(var _fun52675_ip = 0; ; ) switch(_fun52675_ip) {
 0:
                offset = argFoo;
                golf = arguments[1];
                oscar = arguments[2];
                report = this;
                entity = undefined;
                if(!(golf === entity)) { _fun52675_ip = 20; continue _fun52675 }
 18:
                golf = 0;
 20:
                if(!(oscar === entity)) { _fun52675_ip = 26; continue _fun52675 }
 24:
                oscar = 0;
 26:
                tango = report.send;
                mike = _closure1_slot12;
                zulu = mike.SPEAKING;
                mike = {};
                yankee = report.serverVersion;
                verify = 3;
                options = offset;
                if(!(yankee <= verify)) { _fun52675_ip = 76; continue _fun52675 }
 63:
                verify = global;
                verify = verify.Boolean;
                options = verify.bind(entity)(offset);
 76:
                mike['speaking'] = options;
                mike['delay'] = golf;
                mike['ssrc'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        report['value'] = golf;
        entity[29] = report;
        report = {};
        golf = 'video';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            report = this;
            tango = report.send;
            mike = _closure1_slot12;
            zulu = mike.VIDEO;
            mike = {};
            oscar = argFoo;
            mike['audio_ssrc'] = oscar;
            oscar = argBar;
            mike['video_ssrc'] = oscar;
            oscar = argBaz;
            mike['rtx_ssrc'] = oscar;
            golf = _closure1_slot23;
            entity = undefined;
            oscar = argCorge;
            oscar = golf.bind(entity)(oscar);
            mike['streams'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report['value'] = golf;
        entity[30] = report;
        report = {};
        golf = 'mediaSinkWants';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun52677: for(var _fun52677_ip = 0; ; ) switch(_fun52677_ip) {
 0:
                tango = this;
                mike = tango.serverVersion;
                entity = 5;
                if(!(mike >= entity)) { _fun52677_ip = 44; continue _fun52677 }
 16:
                zulu = tango.send;
                entity = _closure1_slot12;
                mike = entity.MEDIA_SINK_WANTS;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
 44:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[31] = report;
        report = {};
        golf = 'secureFramesReadyForTransition';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = this;
            zulu = tango.send;
            entity = _closure1_slot12;
            mike = entity.DAVE_PROTOCOL_READY_FOR_TRANSITION;
            entity = {};
            report = argFoo;
            entity['transition_id'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[32] = report;
        report = {};
        golf = 'sendMLSKeyPackage';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = this;
            zulu = tango.logger;
            mike = zulu.info;
            entity = 'Sending MLS key package';
            entity = mike.bind(zulu)(entity);
            zulu = tango.sendBinary;
            entity = _closure1_slot12;
            mike = entity.MLS_KEY_PACKAGE;
            entity = global;
            oscar = entity.Uint8Array;
            entity = oscar.prototype;
            report = Object.create(entity, {constructor: {value: oscar}});
            options = argFoo;
            verify = report;
            entity = new verify[oscar](options, golf);
            entity = entity instanceof Object ? entity : report;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[33] = report;
        report = {};
        golf = 'sendMLSCommitWelcome';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = this;
            zulu = tango.logger;
            mike = zulu.info;
            entity = 'Sending MLS commit + welcome message';
            entity = mike.bind(zulu)(entity);
            zulu = tango.sendBinary;
            entity = _closure1_slot12;
            mike = entity.MLS_COMMIT_WELCOME;
            entity = global;
            oscar = entity.Uint8Array;
            entity = oscar.prototype;
            report = Object.create(entity, {constructor: {value: oscar}});
            options = argFoo;
            verify = report;
            entity = new verify[oscar](options, golf);
            entity = entity instanceof Object ? entity : report;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[34] = report;
        report = {};
        golf = 'flagMLSInvalidCommitWelcome';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = this;
            zulu = tango.send;
            entity = _closure1_slot12;
            mike = entity.MLS_INVALID_COMMIT_WELCOME;
            entity = {};
            report = argFoo;
            entity['transition_id'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[35] = report;
        report = {};
        golf = 'noRoute';
        report['key'] = golf;
        golf = function() { // Original name: value
            tango = this;
            zulu = tango.send;
            entity = _closure1_slot12;
            mike = entity.CLIENT_CANNOT_REACH_RTC_SERVER;
            entity = {};
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[36] = report;
        report = {};
        golf = 'setHeartbeatIntervalModifier';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['heartbeatIntervalModifier'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[37] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(options);
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'lib/RTCControlSocket.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['SocketEvent'] = mike;
    return entity;
})();