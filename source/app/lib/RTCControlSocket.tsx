// app/lib/RTCControlSocket.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot19 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: noop
        entity = undefined;
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: convertCodecs
        zuuluu = argFoo;
        michal = zuuluu.map;
        entity = function(argFoo) {
            michal = argFoo;
            entity = {};
            zuuluu = michal.name;
            entity['name'] = zuuluu;
            zuuluu = michal.type;
            entity['type'] = zuuluu;
            tangon = michal.priority;
            zuuluu = 1000;
            zuuluu = zuuluu * tangon;
            entity['priority'] = zuuluu;
            zuuluu = michal.payloadType;
            entity['payload_type'] = zuuluu;
            zuuluu = michal.rtxPayloadType;
            entity['rtx_payload_type'] = zuuluu;
            zuuluu = michal.encode;
            entity['encode'] = zuuluu;
            michal = michal.decode;
            entity['decode'] = michal;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: convertStreamParametersToWire
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = null;
            michal = entity == tangon;
            entity = undefined;
            if(michal) { _fun00004_ip = 33; continue _fun00003 }
 14:
            zuuluu = tangon.map;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    entity = {};
                    michal = tangon.type;
                    entity['type'] = michal;
                    michal = tangon.rid;
                    entity['rid'] = michal;
                    michal = tangon.ssrc;
                    entity['ssrc'] = michal;
                    michal = tangon.active;
                    entity['active'] = michal;
                    michal = tangon.quality;
                    entity['quality'] = michal;
                    michal = tangon.rtxSsrc;
                    entity['rtx_ssrc'] = michal;
                    michal = tangon.maxBitrate;
                    entity['max_bitrate'] = michal;
                    michal = tangon.maxFrameRate;
                    entity['max_framerate'] = michal;
                    zuuluu = tangon.maxResolution;
                    michal = null;
                    zuuluu = michal != zuuluu;
                    michal = undefined;
                    if(!zuuluu) { _fun00006_ip = 158; continue _fun00005 }
 108:
                    zuuluu = {};
                    report = tangon.maxResolution;
                    report = report.type;
                    zuuluu['type'] = report;
                    report = tangon.maxResolution;
                    report = report.width;
                    zuuluu['width'] = report;
                    tangon = tangon.maxResolution;
                    tangon = tangon.height;
                    zuuluu['height'] = tangon;
                    michal = zuuluu;
 158:
                    entity['max_resolution'] = michal;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal);
 33:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: convertStreamParametersFromWire
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            michal = null;
            zuuluu = michal == report;
            entity = undefined;
            if(zuuluu) { _fun00008_ip = 33; continue _fun00007 }
 14:
            tangon = report.map;
            zuuluu = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    entity = {};
                    zuuluu = tangon.type;
                    michal = 'audio';
                    if(!(michal !== zuuluu)) { _fun00010_ip = 79; continue _fun00009 }
 18:
                    michal = 'test';
                    if(!(michal !== zuuluu)) { _fun00010_ip = 64; continue _fun00009 }
 26:
                    michal = 'screen';
                    if(!(michal !== zuuluu)) { _fun00010_ip = 49; continue _fun00009 }
 34:
                    michal = _closure1_slot10;
                    michal = michal.VIDEO;
                    _fun00010_ip = 62; continue _fun00009;
 49:
                    zuuluu = _closure1_slot10;
                    michal = zuuluu.SCREEN;
 62:
                    _fun00010_ip = 77; continue _fun00009;
 64:
                    zuuluu = _closure1_slot10;
                    michal = zuuluu.TEST;
 77:
                    _fun00010_ip = 92; continue _fun00009;
 79:
                    zuuluu = _closure1_slot10;
                    michal = zuuluu.AUDIO;
 92:
                    entity['type'] = michal;
                    michal = tangon.rid;
                    entity['rid'] = michal;
                    michal = tangon.ssrc;
                    entity['ssrc'] = michal;
                    michal = tangon.rtx_ssrc;
                    entity['rtxSsrc'] = michal;
                    michal = tangon.active;
                    entity['active'] = michal;
                    michal = tangon.quality;
                    entity['quality'] = michal;
                    michal = tangon.max_bitrate;
                    entity['maxBitrate'] = michal;
                    michal = tangon.max_framerate;
                    entity['maxFrameRate'] = michal;
                    zuuluu = tangon.max_resolution;
                    michal = null;
                    zuuluu = michal != zuuluu;
                    michal = undefined;
                    if(!zuuluu) { _fun00010_ip = 240; continue _fun00009 }
 190:
                    zuuluu = {};
                    report = tangon.max_resolution;
                    report = report.type;
                    zuuluu['type'] = report;
                    report = tangon.max_resolution;
                    report = report.width;
                    zuuluu['width'] = report;
                    tangon = tangon.max_resolution;
                    tangon = tangon.height;
                    zuuluu['height'] = tangon;
                    michal = zuuluu;
 240:
                    entity['maxResolution'] = michal;
                    return entity;
                }
            };
            entity = tangon.bind(report)(zuuluu);
 33:
            if(!(michal == entity)) { _fun00008_ip = 41; continue _fun00007 }
 37:
            entity = new Array(0);
 41:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    result = 0;
    michal = golfie[result];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    var _closure1_slot3 = michal;
    romeon = 1;
    michal = golfie[romeon];
    michal = verify.bind(entity)(michal);
    var _closure1_slot4 = michal;
    output = 2;
    michal = golfie[output];
    michal = verify.bind(entity)(michal);
    var _closure1_slot5 = michal;
    sizing = 3;
    michal = golfie[sizing];
    michal = verify.bind(entity)(michal);
    var _closure1_slot6 = michal;
    kiloes = 4;
    michal = golfie[kiloes];
    michal = verify.bind(entity)(michal);
    var _closure1_slot7 = michal;
    offset = 5;
    michal = golfie[offset];
    michal = verify.bind(entity)(michal);
    var _closure1_slot8 = michal;
    report = 6;
    michal = golfie[report];
    michal = oscard.bind(entity)(michal);
    option = michal.MediaEngineContextTypes;
    var _closure1_slot9 = option;
    option = michal.MediaTypes;
    var _closure1_slot10 = option;
    michal = michal.SpeakingFlags;
    var _closure1_slot11 = michal;
    yankee = {};
    yankee['IDENTIFY'] = result;
    michal = 'IDENTIFY';
    yankee[result] = michal;
    yankee['SELECT_PROTOCOL'] = romeon;
    michal = 'SELECT_PROTOCOL';
    yankee[romeon] = michal;
    yankee['READY'] = output;
    michal = 'READY';
    yankee[output] = michal;
    yankee['HEARTBEAT'] = sizing;
    michal = 'HEARTBEAT';
    yankee[sizing] = michal;
    yankee['SELECT_PROTOCOL_ACK'] = kiloes;
    michal = 'SELECT_PROTOCOL_ACK';
    yankee[kiloes] = michal;
    yankee['SPEAKING'] = offset;
    michal = 'SPEAKING';
    yankee[offset] = michal;
    yankee['HEARTBEAT_ACK'] = report;
    michal = 'HEARTBEAT_ACK';
    yankee[report] = michal;
    michal = 7;
    yankee['RESUME'] = michal;
    report = 'RESUME';
    yankee[michal] = report;
    option = 8;
    yankee['HELLO'] = option;
    report = 'HELLO';
    yankee[option] = report;
    option = 9;
    yankee['RESUMED'] = option;
    report = 'RESUMED';
    yankee[option] = report;
    option = 11;
    yankee['CLIENT_CONNECT'] = option;
    report = 'CLIENT_CONNECT';
    yankee[option] = report;
    option = 12;
    yankee['VIDEO'] = option;
    report = 'VIDEO';
    yankee[option] = report;
    report = 13;
    yankee['CLIENT_DISCONNECT'] = report;
    foxtra = 'CLIENT_DISCONNECT';
    yankee[report] = foxtra;
    backup = 14;
    yankee['SESSION_UPDATE'] = backup;
    foxtra = 'SESSION_UPDATE';
    yankee[backup] = foxtra;
    backup = 15;
    yankee['MEDIA_SINK_WANTS'] = backup;
    foxtra = 'MEDIA_SINK_WANTS';
    yankee[backup] = foxtra;
    backup = 16;
    yankee['VOICE_BACKEND_VERSION'] = backup;
    foxtra = 'VOICE_BACKEND_VERSION';
    yankee[backup] = foxtra;
    backup = 17;
    yankee['CHANNEL_OPTIONS_UPDATE'] = backup;
    foxtra = 'CHANNEL_OPTIONS_UPDATE';
    yankee[backup] = foxtra;
    backup = 18;
    yankee['FLAGS'] = backup;
    foxtra = 'FLAGS';
    yankee[backup] = foxtra;
    foxtra = 20;
    yankee['PLATFORM'] = foxtra;
    backup = 'PLATFORM';
    yankee[foxtra] = backup;
    echoed = 21;
    yankee['DAVE_PROTOCOL_PREPARE_TRANSITION'] = echoed;
    backup = 'DAVE_PROTOCOL_PREPARE_TRANSITION';
    yankee[echoed] = backup;
    echoed = 22;
    yankee['DAVE_PROTOCOL_EXECUTE_TRANSITION'] = echoed;
    backup = 'DAVE_PROTOCOL_EXECUTE_TRANSITION';
    yankee[echoed] = backup;
    echoed = 23;
    yankee['DAVE_PROTOCOL_READY_FOR_TRANSITION'] = echoed;
    backup = 'DAVE_PROTOCOL_READY_FOR_TRANSITION';
    yankee[echoed] = backup;
    echoed = 24;
    yankee['DAVE_PROTOCOL_PREPARE_EPOCH'] = echoed;
    backup = 'DAVE_PROTOCOL_PREPARE_EPOCH';
    yankee[echoed] = backup;
    echoed = 25;
    yankee['MLS_EXTERNAL_SENDER_PACKAGE'] = echoed;
    backup = 'MLS_EXTERNAL_SENDER_PACKAGE';
    yankee[echoed] = backup;
    echoed = 26;
    yankee['MLS_KEY_PACKAGE'] = echoed;
    backup = 'MLS_KEY_PACKAGE';
    yankee[echoed] = backup;
    echoed = 27;
    yankee['MLS_PROPOSALS'] = echoed;
    backup = 'MLS_PROPOSALS';
    yankee[echoed] = backup;
    echoed = 28;
    yankee['MLS_COMMIT_WELCOME'] = echoed;
    backup = 'MLS_COMMIT_WELCOME';
    yankee[echoed] = backup;
    echoed = 29;
    yankee['MLS_PREPARE_COMMIT_TRANSITION'] = echoed;
    backup = 'MLS_PREPARE_COMMIT_TRANSITION';
    yankee[echoed] = backup;
    echoed = 30;
    yankee['MLS_WELCOME'] = echoed;
    backup = 'MLS_WELCOME';
    yankee[echoed] = backup;
    echoed = 31;
    yankee['MLS_INVALID_COMMIT_WELCOME'] = echoed;
    backup = 'MLS_INVALID_COMMIT_WELCOME';
    yankee[echoed] = backup;
    echoed = 32;
    yankee['CLIENT_CANNOT_REACH_RTC_SERVER'] = echoed;
    backup = 'CLIENT_CANNOT_REACH_RTC_SERVER';
    yankee[echoed] = backup;
    var _closure1_slot12 = yankee;
    yankee = {};
    echoed = 4004;
    yankee['AUTHENTICATION_FAILED'] = echoed;
    backup = 'AUTHENTICATION_FAILED';
    yankee[echoed] = backup;
    echoed = 4006;
    yankee['INVALID_SESSION'] = echoed;
    backup = 'INVALID_SESSION';
    yankee[echoed] = backup;
    echoed = 4011;
    yankee['SERVER_NOT_FOUND'] = echoed;
    backup = 'SERVER_NOT_FOUND';
    yankee[echoed] = backup;
    echoed = 4015;
    yankee['SERVER_CRASH'] = echoed;
    backup = 'SERVER_CRASH';
    yankee[echoed] = backup;
    echoed = 4016;
    yankee['CANCELED'] = echoed;
    backup = 'CANCELED';
    yankee[echoed] = backup;
    echoed = 4800;
    yankee['HEARTBEAT_TIMEOUT'] = echoed;
    backup = 'HEARTBEAT_TIMEOUT';
    yankee[echoed] = backup;
    echoed = 4801;
    yankee['UNRESUMABLE'] = echoed;
    backup = 'UNRESUMABLE';
    yankee[echoed] = backup;
    echoed = 4802;
    yankee['RESET_BACKOFF'] = echoed;
    backup = 'RESET_BACKOFF';
    yankee[echoed] = backup;
    var _closure1_slot13 = yankee;
    yankee = {};
    yankee['DISCONNECTED'] = result;
    backup = 'DISCONNECTED';
    yankee[result] = backup;
    yankee['CONNECTING'] = romeon;
    backup = 'CONNECTING';
    yankee[romeon] = backup;
    yankee['IDENTIFYING'] = output;
    backup = 'IDENTIFYING';
    yankee[output] = backup;
    yankee['RESUMING'] = sizing;
    backup = 'RESUMING';
    yankee[sizing] = backup;
    yankee['CONNECTED'] = kiloes;
    backup = 'CONNECTED';
    yankee[kiloes] = backup;
    yankee['RECONNECTING'] = offset;
    backup = 'RECONNECTING';
    yankee[offset] = backup;
    var _closure1_slot14 = yankee;
    yankee = golfie[michal];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.Millis;
    yankee = yankee.SECOND;
    yankee = foxtra * yankee;
    var _closure1_slot15 = yankee;
    yankee = golfie[michal];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.Millis;
    yankee = yankee.MINUTE;
    yankee = romeon * yankee;
    var _closure1_slot16 = yankee;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    michal = michal.Millis;
    michal = michal.SECOND;
    michal = offset * michal;
    var _closure1_slot17 = michal;
    michal = {};
    offset = 'connecting';
    michal['Connecting'] = offset;
    offset = 'connect';
    michal['Connect'] = offset;
    offset = 'disconnect';
    michal['Disconnect'] = offset;
    offset = 'resuming';
    michal['Resuming'] = offset;
    offset = 'ready';
    michal['Ready'] = offset;
    offset = 'speaking';
    michal['Speaking'] = offset;
    offset = 'video';
    michal['Video'] = offset;
    offset = 'ping';
    michal['Ping'] = offset;
    offset = 'client-connect';
    michal['ClientConnect'] = offset;
    offset = 'client-disconnect';
    michal['ClientDisconnect'] = offset;
    offset = 'codecs';
    michal['Codecs'] = offset;
    offset = 'media-session-id';
    michal['MediaSessionId'] = offset;
    offset = 'media-sink-wants';
    michal['MediaSinkWants'] = offset;
    offset = 'voice-backend-version';
    michal['VoiceBackendVersion'] = offset;
    offset = 'keyframe-interval';
    michal['KeyframeInterval'] = offset;
    offset = 'update-secure-frames-protocol';
    michal['ChannelOptionsUpdateSecureFramesProtocol'] = offset;
    offset = 'flags';
    michal['Flags'] = offset;
    offset = 'platform';
    michal['Platform'] = offset;
    offset = 'sdp';
    michal['SDP'] = offset;
    offset = 'encryption';
    michal['Encryption'] = offset;
    offset = 'bandwidth-estimation-experiment';
    michal['BandwidthEstimationExperiment'] = offset;
    offset = 'secure-frames-init';
    michal['SecureFramesInit'] = offset;
    offset = 'secure-frames-prepare-transition';
    michal['SecureFramesPrepareTransition'] = offset;
    offset = 'secure-frames-execute-transition';
    michal['SecureFramesExecuteTransition'] = offset;
    offset = 'secure-frames-prepare-epoch';
    michal['SecureFramesPrepareEpoch'] = offset;
    offset = 'mls-external-sender-package';
    michal['MLSExternalSenderPackage'] = offset;
    offset = 'mls-proposals';
    michal['MLSProposals'] = offset;
    offset = 'mls-prepare-commit-transition';
    michal['MLSPrepareCommitTransition'] = offset;
    offset = 'mls-welcome';
    michal['MLSWelcome'] = offset;
    var _closure1_slot18 = michal;
    option = golfie[option];
    option = verify.bind(entity)(option);
    tangon = function(argFoo) {
        tangon = function(argFoo) { // Original name: RTCControlSocket
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                option = arguments[1];
                zuuluu = this;
                oscard = undefined;
                if(!(option === oscard)) { _fun00012_ip = 25; continue _fun00011 }
 12:
                entity = _closure1_slot9;
                option = entity.DEFAULT;
 25:
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(oscard)(zuuluu, michal);
                entity = _closure1_slot6;
                yankee = entity.bind(oscard)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot19;
                entity = entity.bind(oscard)();
                if(entity) { _fun00012_ip = 82; continue _fun00011 }
 69:
                entity = yankee.apply;
                entity = entity.bind(yankee)(zuuluu, oscard);
                _fun00012_ip = 120; continue _fun00011;
 82:
                tangon = global;
                offset = tangon.Reflect;
                verify = offset.construct;
                tangon = _closure1_slot6;
                tangon = tangon.bind(oscard)(zuuluu);
                golfie = tangon.constructor;
                tangon = new Array(0);
                entity = verify.bind(offset)(yankee, tangon, golfie);
 120:
                entity = michal.bind(oscard)(zuuluu, entity);
                tangon = _closure1_slot1;
                golfie = _closure1_slot2;
                michal = 8;
                michal = golfie[michal];
                offset = tangon.bind(oscard)(michal);
                michal = offset.prototype;
                zuuluu = Object.create(michal, {constructor: {value: offset}});
                backup = 1000;
                foxtra = 5000;
                kiloes = zuuluu;
                michal = new kiloes[offset](backup, foxtra, romeon);
                michal = michal instanceof Object ? michal : zuuluu;
                entity['backoff'] = michal;
                zuuluu = 0;
                entity['serverVersion'] = zuuluu;
                michal = argFoo;
                entity['url'] = michal;
                michal = 9;
                michal = golfie[michal];
                oscard = tangon.bind(oscard)(michal);
                michal = global;
                michal = michal.HermesInternal;
                golfie = michal.concat;
                tangon = 'RTCControlSocket(';
                michal = ')';
                backup = golfie.bind(tangon)(option, michal);
                tangon = oscard.prototype;
                tangon = Object.create(tangon, {constructor: {value: oscard}});
                kiloes = tangon;
                michal = new kiloes[oscard](backup, foxtra);
                michal = michal instanceof Object ? michal : tangon;
                entity['logger'] = michal;
                oscard = entity.logger;
                michal = oscard.enableNativeLogger;
                tangon = true;
                michal = michal.bind(oscard)(tangon);
                michal = null;
                entity['webSocket'] = michal;
                report = _closure1_slot14;
                report = report.DISCONNECTED;
                entity['connectionState'] = report;
                entity['helloTimeout'] = michal;
                entity['lastHeartbeatAckTime'] = michal;
                entity['heartbeatInterval'] = michal;
                entity['heartbeater'] = michal;
                entity['heartbeatAck'] = tangon;
                entity['expeditedHeartbeatTimeout'] = michal;
                tangon = 1;
                entity['heartbeatIntervalModifier'] = tangon;
                entity['connectionStartTime'] = zuuluu;
                entity['lastRecvSeqNum'] = michal;
                entity['sessionId'] = michal;
                entity['serverId'] = michal;
                entity['token'] = michal;
                michal = false;
                entity['resumable'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'createWebSocket';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = this;
                var _closure3_slot0 = tangon;
                oscard = tangon.logger;
                report = oscard.info;
                option = tangon.url;
                zuuluu = global;
                entity = zuuluu.HermesInternal;
                golfie = entity.concat;
                entity = '[CONNECT] ';
                entity = golfie.bind(entity)(option);
                entity = report.bind(oscard)(entity);
                report = tangon.webSocket;
                entity = null;
                if(!(entity !== report)) { _fun00014_ip = 105; continue _fun00013 }
 66:
                oscard = tangon.logger;
                report = oscard.error;
                entity = 'Connect called with already existing websocket';
                entity = report.bind(oscard)(entity);
                report = tangon.cleanupWebSocket;
                entity = function(argFoo) {
                    zuuluu = argFoo;
                    michal = zuuluu.close;
                    entity = 4000;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = report.bind(tangon)(entity);
 105:
                report = zuuluu.Date;
                entity = report.now;
                entity = entity.bind(report)();
                tangon['connectionStartTime'] = entity;
                golfie = zuuluu.setTimeout;
                oscard = _closure1_slot15;
                entity = undefined;
                report = function() {
                    entity = global;
                    zuuluu = entity.Date;
                    michal = zuuluu.now;
                    zuuluu = michal.bind(zuuluu)();
                    report = _closure3_slot0;
                    michal = report.connectionStartTime;
                    oscard = zuuluu - michal;
                    tangon = report.handleClose;
                    entity = entity.HermesInternal;
                    zuuluu = entity.concat;
                    michal = 'The connection timed out after ';
                    entity = ' ms - did not receive OP_HELLO in time.';
                    zuuluu = zuuluu.bind(michal)(oscard, entity);
                    michal = false;
                    entity = 0;
                    entity = tangon.bind(report)(michal, entity, zuuluu);
                    entity = undefined;
                    return entity;
                };
                report = golfie.bind(entity)(report, oscard);
                tangon['helloTimeout'] = report;
                oscard = zuuluu.WebSocket;
                option = tangon.url;
                zuuluu = zuuluu.HermesInternal;
                golfie = zuuluu.concat;
                report = '';
                zuuluu = '?v=8';
                offset = golfie.bind(report)(option, zuuluu);
                report = oscard.prototype;
                report = Object.create(report, {constructor: {value: oscard}});
                yankee = report;
                zuuluu = new yankee[oscard](offset, verify);
                zuuluu = zuuluu instanceof Object ? zuuluu : report;
                tangon['webSocket'] = zuuluu;
                tangon = 'arraybuffer';
                zuuluu['binaryType'] = tangon;
                tangon = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        michal = _closure3_slot0;
                        tangon = michal.connectionState;
                        zuuluu = _closure1_slot14;
                        zuuluu = zuuluu.CONNECTING;
                        if(!(tangon !== zuuluu)) { _fun00016_ip = 72; continue _fun00015 }
 30:
                        zuuluu = _closure3_slot0;
                        tangon = zuuluu.connectionState;
                        zuuluu = _closure1_slot14;
                        zuuluu = zuuluu.RECONNECTING;
                        if(!(tangon === zuuluu)) { _fun00016_ip = 97; continue _fun00015 }
 54:
                        tangon = _closure3_slot0;
                        zuuluu = tangon.doResumeOrClose;
                        zuuluu = zuuluu.bind(tangon)();
                        _fun00016_ip = 97; continue _fun00015;
 72:
                        report = _closure3_slot0;
                        tangon = report.emit;
                        zuuluu = _closure1_slot18;
                        zuuluu = zuuluu.Connect;
                        zuuluu = tangon.bind(report)(zuuluu);
 97:
                        tangon = _closure3_slot0;
                        entity = _closure1_slot14;
                        entity = entity.CONNECTED;
                        tangon['connectionState'] = entity;
                        entity = global;
                        report = entity.Date;
                        zuuluu = report.now;
                        report = zuuluu.bind(report)();
                        zuuluu = tangon.connectionStartTime;
                        golfie = report - zuuluu;
                        oscard = tangon.logger;
                        report = oscard.info;
                        kiloes = tangon.url;
                        zuuluu = entity.HermesInternal;
                        offset = zuuluu.concat;
                        sizing = '[CONNECTED] ';
                        backup = ' in ';
                        romeon = ' ms';
                        foxtra = golfie;
                        zuuluu = sizing[offset](kiloes, backup, foxtra, romeon, yankee);
                        zuuluu = report.bind(oscard)(zuuluu);
                        zuuluu = tangon.emit;
                        michal = _closure1_slot18;
                        michal = michal.Ping;
                        oscard = entity.Math;
                        report = oscard.round;
                        entity = 2;
                        entity = golfie / entity;
                        entity = report.bind(oscard)(entity);
                        entity = zuuluu.bind(tangon)(michal, entity);
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu['onopen'] = tangon;
                tangon = function(argFoo) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        tangon = _closure3_slot0;
                        zuuluu = tangon.parseWebSocketMessage;
                        michal = argFoo;
                        michal = zuuluu.bind(tangon)(michal);
                        option = michal.op;
                        tangon = michal.seq;
                        zuuluu = michal.d;
                        if(!tangon) { _fun00018_ip = 52; continue _fun00017 }
 42:
                        michal = _closure3_slot0;
                        michal['lastRecvSeqNum'] = tangon;
 52:
                        tangon = _closure1_slot8;
                        tangon = tangon.isLoggingGatewayEvents;
                        if(!tangon) { _fun00018_ip = 254; continue _fun00017 }
 71:
                        tangon = global;
                        report = tangon.Uint8Array;
                        report = zuuluu instanceof report;
                        if(report) { _fun00018_ip = 155; continue _fun00017 }
 86:
                        report = _closure3_slot0;
                        golfie = report.logger;
                        oscard = golfie.info;
                        verify = tangon.JSON;
                        report = verify.stringify;
                        yankee = report.bind(verify)(zuuluu);
                        report = tangon.HermesInternal;
                        offset = report.concat;
                        verify = '~> ';
                        report = ': ';
                        report = offset.bind(verify)(option, report, yankee);
                        report = oscard.bind(golfie)(report);
                        _fun00018_ip = 254; continue _fun00017;
 155:
                        golfie = new Array(0);
                        kiloes = 0;
                        output = golfie;
                        sizing = zuuluu;
                        report = arraySpread(output, sizing, kiloes);
                        oscard = golfie.map;
                        report = function(argFoo) {
                            zuuluu = argFoo;
                            michal = zuuluu.toString;
                            entity = 16;
                            tangon = michal.bind(zuuluu)(entity);
                            zuuluu = tangon.padStart;
                            michal = 2;
                            entity = '0';
                            entity = zuuluu.bind(tangon)(michal, entity);
                            return entity;
                        };
                        golfie = oscard.bind(golfie)(report);
                        oscard = golfie.join;
                        report = '';
                        offset = oscard.bind(golfie)(report);
                        report = _closure3_slot0;
                        oscard = report.logger;
                        report = oscard.info;
                        tangon = tangon.HermesInternal;
                        verify = tangon.concat;
                        golfie = '~> ';
                        tangon = ': 0x';
                        tangon = verify.bind(golfie)(option, tangon, offset);
                        tangon = report.bind(oscard)(tangon);
 254:
                        tangon = _closure1_slot12;
                        tangon = tangon.HELLO;
                        if(!(tangon !== option)) { _fun00018_ip = 2178; continue _fun00017 }
 271:
                        tangon = _closure1_slot12;
                        tangon = tangon.READY;
                        if(!(tangon !== option)) { _fun00018_ip = 2159; continue _fun00017 }
 288:
                        tangon = _closure1_slot12;
                        tangon = tangon.RESUMED;
                        if(!(tangon !== option)) { _fun00018_ip = 2140; continue _fun00017 }
 305:
                        tangon = _closure1_slot12;
                        tangon = tangon.SELECT_PROTOCOL_ACK;
                        if(!(tangon !== option)) { _fun00018_ip = 1834; continue _fun00017 }
 322:
                        tangon = _closure1_slot12;
                        tangon = tangon.SPEAKING;
                        if(!(tangon !== option)) { _fun00018_ip = 1743; continue _fun00017 }
 339:
                        tangon = _closure1_slot12;
                        tangon = tangon.HEARTBEAT;
                        if(!(tangon !== option)) { _fun00018_ip = 1724; continue _fun00017 }
 356:
                        tangon = _closure1_slot12;
                        tangon = tangon.HEARTBEAT_ACK;
                        if(!(tangon !== option)) { _fun00018_ip = 1702; continue _fun00017 }
 373:
                        tangon = _closure1_slot12;
                        tangon = tangon.VIDEO;
                        if(!(tangon !== option)) { _fun00018_ip = 1632; continue _fun00017 }
 390:
                        tangon = _closure1_slot12;
                        tangon = tangon.CLIENT_CONNECT;
                        if(!(tangon !== option)) { _fun00018_ip = 1595; continue _fun00017 }
 407:
                        tangon = _closure1_slot12;
                        tangon = tangon.CLIENT_DISCONNECT;
                        if(!(tangon !== option)) { _fun00018_ip = 1558; continue _fun00017 }
 424:
                        tangon = _closure1_slot12;
                        tangon = tangon.SESSION_UPDATE;
                        if(!(tangon !== option)) { _fun00018_ip = 1400; continue _fun00017 }
 441:
                        tangon = _closure1_slot12;
                        tangon = tangon.MEDIA_SINK_WANTS;
                        if(!(tangon !== option)) { _fun00018_ip = 1369; continue _fun00017 }
 458:
                        tangon = _closure1_slot12;
                        tangon = tangon.VOICE_BACKEND_VERSION;
                        if(!(tangon !== option)) { _fun00018_ip = 1294; continue _fun00017 }
 475:
                        tangon = _closure1_slot12;
                        tangon = tangon.FLAGS;
                        if(!(tangon !== option)) { _fun00018_ip = 1221; continue _fun00017 }
 492:
                        tangon = _closure1_slot12;
                        tangon = tangon.PLATFORM;
                        if(!(tangon !== option)) { _fun00018_ip = 1146; continue _fun00017 }
 509:
                        tangon = _closure1_slot12;
                        tangon = tangon.DAVE_PROTOCOL_PREPARE_TRANSITION;
                        if(!(tangon !== option)) { _fun00018_ip = 1071; continue _fun00017 }
 526:
                        tangon = _closure1_slot12;
                        tangon = tangon.DAVE_PROTOCOL_EXECUTE_TRANSITION;
                        if(!(tangon !== option)) { _fun00018_ip = 1019; continue _fun00017 }
 543:
                        tangon = _closure1_slot12;
                        tangon = tangon.DAVE_PROTOCOL_PREPARE_EPOCH;
                        if(!(tangon !== option)) { _fun00018_ip = 944; continue _fun00017 }
 560:
                        tangon = _closure1_slot12;
                        tangon = tangon.MLS_EXTERNAL_SENDER_PACKAGE;
                        if(!(tangon !== option)) { _fun00018_ip = 913; continue _fun00017 }
 577:
                        tangon = _closure1_slot12;
                        tangon = tangon.MLS_PROPOSALS;
                        if(!(tangon !== option)) { _fun00018_ip = 882; continue _fun00017 }
 594:
                        tangon = _closure1_slot12;
                        tangon = tangon.MLS_PREPARE_COMMIT_TRANSITION;
                        if(!(tangon !== option)) { _fun00018_ip = 778; continue _fun00017 }
 611:
                        tangon = _closure1_slot12;
                        tangon = tangon.MLS_WELCOME;
                        if(!(tangon !== option)) { _fun00018_ip = 674; continue _fun00017 }
 625:
                        tangon = _closure3_slot0;
                        oscard = tangon.logger;
                        report = oscard.info;
                        tangon = global;
                        tangon = tangon.HermesInternal;
                        golfie = tangon.concat;
                        tangon = 'Unhandled op ';
                        tangon = golfie.bind(tangon)(option);
                        tangon = report.bind(oscard)(tangon);
                        _fun00018_ip = 2205; continue _fun00017;
 674:
                        tangon = global;
                        option = tangon.DataView;
                        output = zuuluu.buffer;
                        sizing = zuuluu.byteOffset;
                        report = option.prototype;
                        oscard = Object.create(report, {constructor: {value: option}});
                        report = 2;
                        result = oscard;
                        kiloes = report;
                        tangon = new result[option](output, sizing, kiloes, backup);
                        option = tangon instanceof Object ? tangon : oscard;
                        golfie = option.getUint16;
                        oscard = 0;
                        tangon = false;
                        option = golfie.bind(option)(oscard, tangon);
                        tangon = zuuluu.slice;
                        golfie = tangon.bind(zuuluu)(report);
                        oscard = _closure3_slot0;
                        report = oscard.emit;
                        tangon = _closure1_slot18;
                        tangon = tangon.MLSWelcome;
                        tangon = report.bind(oscard)(tangon, option, golfie);
                        _fun00018_ip = 2205; continue _fun00017;
 778:
                        tangon = global;
                        option = tangon.DataView;
                        output = zuuluu.buffer;
                        sizing = zuuluu.byteOffset;
                        report = option.prototype;
                        oscard = Object.create(report, {constructor: {value: option}});
                        report = 2;
                        result = oscard;
                        kiloes = report;
                        tangon = new result[option](output, sizing, kiloes, backup);
                        option = tangon instanceof Object ? tangon : oscard;
                        golfie = option.getUint16;
                        oscard = 0;
                        tangon = false;
                        option = golfie.bind(option)(oscard, tangon);
                        tangon = zuuluu.slice;
                        golfie = tangon.bind(zuuluu)(report);
                        oscard = _closure3_slot0;
                        report = oscard.emit;
                        tangon = _closure1_slot18;
                        tangon = tangon.MLSPrepareCommitTransition;
                        tangon = report.bind(oscard)(tangon, option, golfie);
                        _fun00018_ip = 2205; continue _fun00017;
 882:
                        oscard = _closure3_slot0;
                        report = oscard.emit;
                        tangon = _closure1_slot18;
                        tangon = tangon.MLSProposals;
                        tangon = report.bind(oscard)(tangon, zuuluu);
                        _fun00018_ip = 2205; continue _fun00017;
 913:
                        oscard = _closure3_slot0;
                        report = oscard.emit;
                        tangon = _closure1_slot18;
                        tangon = tangon.MLSExternalSenderPackage;
                        tangon = report.bind(oscard)(tangon, zuuluu);
                        _fun00018_ip = 2205; continue _fun00017;
 944:
                        tangon = zuuluu.epoch;
                        oscard = null;
                        tangon = oscard != tangon;
                        if(!tangon) { _fun00018_ip = 969; continue _fun00017 }
 959:
                        report = zuuluu.protocol_version;
                        tangon = oscard != report;
 969:
                        if(!tangon) { _fun00018_ip = 2205; continue _fun00017 }
 975:
                        option = _closure3_slot0;
                        golfie = option.emit;
                        tangon = _closure1_slot18;
                        oscard = tangon.SecureFramesPrepareEpoch;
                        report = zuuluu.epoch;
                        tangon = zuuluu.protocol_version;
                        tangon = golfie.bind(option)(oscard, report, tangon);
                        _fun00018_ip = 2205; continue _fun00017;
 1019:
                        report = zuuluu.transition_id;
                        tangon = null;
                        if(!(tangon != report)) { _fun00018_ip = 2205; continue _fun00017 }
 1034:
                        golfie = _closure3_slot0;
                        oscard = golfie.emit;
                        tangon = _closure1_slot18;
                        report = tangon.SecureFramesExecuteTransition;
                        tangon = zuuluu.transition_id;
                        tangon = oscard.bind(golfie)(report, tangon);
                        _fun00018_ip = 2205; continue _fun00017;
 1071:
                        tangon = zuuluu.transition_id;
                        oscard = null;
                        tangon = oscard != tangon;
                        if(!tangon) { _fun00018_ip = 1096; continue _fun00017 }
 1086:
                        report = zuuluu.protocol_version;
                        tangon = oscard != report;
 1096:
                        if(!tangon) { _fun00018_ip = 2205; continue _fun00017 }
 1102:
                        option = _closure3_slot0;
                        golfie = option.emit;
                        tangon = _closure1_slot18;
                        oscard = tangon.SecureFramesPrepareTransition;
                        report = zuuluu.transition_id;
                        tangon = zuuluu.protocol_version;
                        tangon = golfie.bind(option)(oscard, report, tangon);
                        _fun00018_ip = 2205; continue _fun00017;
 1146:
                        tangon = zuuluu.platform;
                        oscard = null;
                        tangon = oscard != tangon;
                        if(!tangon) { _fun00018_ip = 1171; continue _fun00017 }
 1161:
                        report = zuuluu.user_id;
                        tangon = oscard != report;
 1171:
                        if(!tangon) { _fun00018_ip = 2205; continue _fun00017 }
 1177:
                        option = _closure3_slot0;
                        golfie = option.emit;
                        tangon = _closure1_slot18;
                        oscard = tangon.Platform;
                        report = zuuluu.user_id;
                        tangon = zuuluu.platform;
                        tangon = golfie.bind(option)(oscard, report, tangon);
                        _fun00018_ip = 2205; continue _fun00017;
 1221:
                        tangon = zuuluu.flags;
                        oscard = null;
                        tangon = oscard != tangon;
                        if(!tangon) { _fun00018_ip = 1245; continue _fun00017 }
 1235:
                        report = zuuluu.user_id;
                        tangon = oscard != report;
 1245:
                        if(!tangon) { _fun00018_ip = 2205; continue _fun00017 }
 1251:
                        option = _closure3_slot0;
                        golfie = option.emit;
                        tangon = _closure1_slot18;
                        oscard = tangon.Flags;
                        report = zuuluu.user_id;
                        tangon = zuuluu.flags;
                        tangon = golfie.bind(option)(oscard, report, tangon);
                        _fun00018_ip = 2205; continue _fun00017;
 1294:
                        tangon = zuuluu.voice;
                        oscard = null;
                        tangon = oscard != tangon;
                        if(!tangon) { _fun00018_ip = 1319; continue _fun00017 }
 1309:
                        report = zuuluu.rtc_worker;
                        tangon = oscard != report;
 1319:
                        if(!tangon) { _fun00018_ip = 2205; continue _fun00017 }
 1325:
                        option = _closure3_slot0;
                        golfie = option.emit;
                        tangon = _closure1_slot18;
                        oscard = tangon.VoiceBackendVersion;
                        report = zuuluu.voice;
                        tangon = zuuluu.rtc_worker;
                        tangon = golfie.bind(option)(oscard, report, tangon);
                        _fun00018_ip = 2205; continue _fun00017;
 1369:
                        oscard = _closure3_slot0;
                        report = oscard.emit;
                        tangon = _closure1_slot18;
                        tangon = tangon.MediaSinkWants;
                        tangon = report.bind(oscard)(tangon, zuuluu);
                        _fun00018_ip = 2205; continue _fun00017;
 1400:
                        tangon = zuuluu.audio_codec;
                        report = null;
                        tangon = report == tangon;
                        if(!tangon) { _fun00018_ip = 1425; continue _fun00017 }
 1415:
                        oscard = zuuluu.video_codec;
                        tangon = report == oscard;
 1425:
                        if(tangon) { _fun00018_ip = 1467; continue _fun00017 }
 1428:
                        verify = _closure3_slot0;
                        option = verify.emit;
                        tangon = _closure1_slot18;
                        golfie = tangon.Codecs;
                        oscard = zuuluu.audio_codec;
                        tangon = zuuluu.video_codec;
                        tangon = option.bind(verify)(golfie, oscard, tangon);
 1467:
                        tangon = zuuluu.media_session_id;
                        if(!(report != tangon)) { _fun00018_ip = 1509; continue _fun00017 }
 1477:
                        golfie = _closure3_slot0;
                        oscard = golfie.emit;
                        tangon = _closure1_slot18;
                        report = tangon.MediaSessionId;
                        tangon = zuuluu.media_session_id;
                        tangon = oscard.bind(golfie)(report, tangon);
 1509:
                        tangon = zuuluu.keyframe_interval;
                        if(!tangon) { _fun00018_ip = 2205; continue _fun00017 }
 1521:
                        golfie = _closure3_slot0;
                        oscard = golfie.emit;
                        tangon = _closure1_slot18;
                        report = tangon.KeyframeInterval;
                        tangon = zuuluu.keyframe_interval;
                        tangon = oscard.bind(golfie)(report, tangon);
                        _fun00018_ip = 2205; continue _fun00017;
 1558:
                        golfie = _closure3_slot0;
                        oscard = golfie.emit;
                        tangon = _closure1_slot18;
                        report = tangon.ClientDisconnect;
                        tangon = zuuluu.user_id;
                        tangon = oscard.bind(golfie)(report, tangon);
                        _fun00018_ip = 2205; continue _fun00017;
 1595:
                        golfie = _closure3_slot0;
                        oscard = golfie.emit;
                        tangon = _closure1_slot18;
                        report = tangon.ClientConnect;
                        tangon = zuuluu.user_ids;
                        tangon = oscard.bind(golfie)(report, tangon);
                        _fun00018_ip = 2205; continue _fun00017;
 1632:
                        offset = _closure3_slot0;
                        verify = offset.emit;
                        tangon = _closure1_slot18;
                        option = tangon.Video;
                        sizing = zuuluu.user_id;
                        kiloes = zuuluu.audio_ssrc;
                        backup = zuuluu.video_ssrc;
                        romeon = _closure1_slot23;
                        yankee = zuuluu.streams;
                        tangon = undefined;
                        foxtra = romeon.bind(tangon)(yankee);
                        result = offset;
                        output = option;
                        tangon = result[verify](output, sizing, kiloes, backup, foxtra, romeon);
                        _fun00018_ip = 2205; continue _fun00017;
 1702:
                        report = _closure3_slot0;
                        tangon = report.handleHeartbeatAck;
                        tangon = tangon.bind(report)(zuuluu);
                        _fun00018_ip = 2205; continue _fun00017;
 1724:
                        report = _closure3_slot0;
                        tangon = report.sendHeartbeat;
                        tangon = tangon.bind(report)();
                        _fun00018_ip = 2205; continue _fun00017;
 1743:
                        tangon = zuuluu.speaking;
                        oscard = 'boolean';
                        report = typeof tangon;
                        verify = tangon;
                        if(!(oscard === report)) { _fun00018_ip = 1787; continue _fun00017 }
 1763:
                        report = _closure1_slot11;
                        if(tangon) { _fun00018_ip = 1778; continue _fun00017 }
 1770:
                        tangon = report.NONE;
                        _fun00018_ip = 1784; continue _fun00017;
 1778:
                        tangon = report.VOICE;
 1784:
                        verify = tangon;
 1787:
                        option = _closure3_slot0;
                        golfie = option.emit;
                        tangon = _closure1_slot18;
                        output = tangon.Speaking;
                        sizing = zuuluu.user_id;
                        kiloes = zuuluu.ssrc;
                        result = option;
                        backup = verify;
                        tangon = result[golfie](output, sizing, kiloes, backup, foxtra);
                        _fun00018_ip = 2205; continue _fun00017;
 1834:
                        tangon = zuuluu.bandwidth_estimation_experiment;
                        if(!tangon) { _fun00018_ip = 1875; continue _fun00017 }
 1843:
                        golfie = _closure3_slot0;
                        oscard = golfie.emit;
                        tangon = _closure1_slot18;
                        report = tangon.BandwidthEstimationExperiment;
                        tangon = zuuluu.bandwidth_estimation_experiment;
                        tangon = oscard.bind(golfie)(report, tangon);
 1875:
                        option = _closure3_slot0;
                        golfie = option.emit;
                        tangon = _closure1_slot18;
                        oscard = tangon.Codecs;
                        report = zuuluu.audio_codec;
                        tangon = zuuluu.video_codec;
                        tangon = golfie.bind(option)(oscard, report, tangon);
                        tangon = zuuluu.media_session_id;
                        if(!tangon) { _fun00018_ip = 1955; continue _fun00017 }
 1923:
                        golfie = _closure3_slot0;
                        oscard = golfie.emit;
                        tangon = _closure1_slot18;
                        report = tangon.MediaSessionId;
                        tangon = zuuluu.media_session_id;
                        tangon = oscard.bind(golfie)(report, tangon);
 1955:
                        tangon = zuuluu.sdp;
                        if(tangon) { _fun00018_ip = 2014; continue _fun00017 }
 1964:
                        tangon = zuuluu.mode;
                        if(!tangon) { _fun00018_ip = 2046; continue _fun00017 }
 1972:
                        option = _closure3_slot0;
                        golfie = option.emit;
                        tangon = _closure1_slot18;
                        oscard = tangon.Encryption;
                        report = zuuluu.mode;
                        tangon = zuuluu.secret_key;
                        tangon = golfie.bind(option)(oscard, report, tangon);
                        _fun00018_ip = 2046; continue _fun00017;
 2014:
                        golfie = _closure3_slot0;
                        oscard = golfie.emit;
                        tangon = _closure1_slot18;
                        report = tangon.SDP;
                        tangon = zuuluu.sdp;
                        tangon = oscard.bind(golfie)(report, tangon);
 2046:
                        tangon = zuuluu.keyframe_interval;
                        if(!tangon) { _fun00018_ip = 2087; continue _fun00017 }
 2055:
                        golfie = _closure3_slot0;
                        oscard = golfie.emit;
                        tangon = _closure1_slot18;
                        report = tangon.KeyframeInterval;
                        tangon = zuuluu.keyframe_interval;
                        tangon = oscard.bind(golfie)(report, tangon);
 2087:
                        oscard = _closure3_slot0;
                        report = oscard.emit;
                        michal = _closure1_slot18;
                        tangon = michal.SecureFramesInit;
                        michal = zuuluu.dave_protocol_version;
                        if(michal) { _fun00018_ip = 2120; continue _fun00017 }
 2118:
                        michal = 0;
 2120:
                        michal = report.bind(oscard)(tangon, michal);
                        tangon = _closure3_slot0;
                        michal = true;
                        tangon['resumable'] = michal;
                        _fun00018_ip = 2205; continue _fun00017;
 2140:
                        tangon = _closure3_slot0;
                        michal = tangon.handleResumed;
                        michal = michal.bind(tangon)(zuuluu);
                        _fun00018_ip = 2205; continue _fun00017;
 2159:
                        tangon = _closure3_slot0;
                        michal = tangon.handleReady;
                        michal = michal.bind(tangon)(zuuluu);
                        _fun00018_ip = 2205; continue _fun00017;
 2178:
                        michal = _closure3_slot0;
                        entity = michal.clearHelloTimeout;
                        entity = entity.bind(michal)();
                        entity = michal.handleHello;
                        entity = entity.bind(michal)(zuuluu);
 2205:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu['onmessage'] = tangon;
                tangon = function() {
                    report = _closure3_slot0;
                    tangon = report.handleClose;
                    zuuluu = false;
                    michal = 0;
                    entity = 'An error with the websocket occurred';
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                };
                zuuluu['onerror'] = tangon;
                michal = function(argFoo) {
                    entity = argFoo;
                    report = entity.wasClean;
                    tangon = entity.code;
                    zuuluu = entity.reason;
                    michal = _closure3_slot0;
                    entity = michal.handleClose;
                    entity = entity.bind(michal)(report, tangon, zuuluu);
                    return entity;
                };
                zuuluu['onclose'] = michal;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(38);
        entity[0] = report;
        report = {};
        golfie = 'send';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                verify = arguments[1];
                report = this;
                entity = undefined;
                if(!(verify === entity)) { _fun00020_ip = 14; continue _fun00019 }
 12:
                verify = null;
 14:
                zuuluu = undefined;
                michal = undefined;
                oscard = report.webSocket;
                zuuluu = oscard;
                tangon = null;
                if(!(tangon != oscard)) { _fun00020_ip = 168; continue _fun00019 }
 36:
                tangon = zuuluu;
                golfie = tangon.readyState;
                tangon = global;
                oscard = tangon.WebSocket;
                oscard = oscard.OPEN;
                if(!(golfie === oscard)) { _fun00020_ip = 168; continue _fun00019 }
 63:
                option = tangon.JSON;
                golfie = option.stringify;
                oscard = {};
                offset = argFoo;
                oscard['op'] = offset;
                oscard['d'] = verify;
                michal = golfie.bind(option)(oscard);
                oscard = _closure1_slot8;
                oscard = oscard.isLoggingGatewayEvents;
                if(!oscard) { _fun00020_ip = 150; continue _fun00019 }
 109:
                oscard = report.logger;
                report = oscard.info;
                option = michal;
                tangon = tangon.HermesInternal;
                golfie = tangon.concat;
                tangon = '<~ ';
                tangon = golfie.bind(tangon)(option);
                tangon = report.bind(oscard)(tangon);
 150: // try_start_0
                tangon = zuuluu;
                zuuluu = tangon.send;
                michal = zuuluu.bind(tangon)(michal);
 164: // try_end0
                _fun00020_ip = 168; continue _fun00019;
 166: // catch_target0
                CatchBlockStart(arg_register=1);
 168:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'sendBinary';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                tangon = argFoo;
                report = argBar;
                entity = undefined;
                zuuluu = undefined;
                michal = undefined;
                oscard = this;
                golfie = oscard.webSocket;
                zuuluu = golfie;
                oscard = null;
                if(!(oscard != golfie)) { _fun00022_ip = 146; continue _fun00021 }
 30:
                oscard = zuuluu;
                option = oscard.readyState;
                oscard = global;
                golfie = oscard.WebSocket;
                golfie = golfie.OPEN;
                if(!(option === golfie)) { _fun00022_ip = 146; continue _fun00021 }
 57:
                verify = oscard.Uint8Array;
                golfie = report;
                report = golfie.byteLength;
                oscard = 1;
                yankee = report + oscard;
                option = verify.prototype;
                option = Object.create(option, {constructor: {value: verify}});
                romeon = option;
                report = new romeon[verify](yankee, offset);
                report = report instanceof Object ? report : option;
                michal = report;
                option = tangon;
                tangon = 0;
                report[tangon] = option;
                tangon = report.set;
                tangon = tangon.bind(report)(golfie, oscard);
 122: // try_start_0
                tangon = zuuluu;
                zuuluu = tangon.send;
                michal = michal.buffer;
                michal = zuuluu.bind(tangon)(michal);
 142: // try_end0
                _fun00022_ip = 146; continue _fun00021;
 144: // catch_target0
                CatchBlockStart(arg_register=1);
 146:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'ping';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            entity = michal.sendHeartbeat;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'doResumeOrClose';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                michal = this;
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                entity = entity.bind(zuuluu)();
                zuuluu = michal.serverId;
                tangon = null;
                if(!(tangon !== zuuluu)) { _fun00024_ip = 92; continue _fun00023 }
 32:
                zuuluu = michal.token;
                if(!(tangon !== zuuluu)) { _fun00024_ip = 92; continue _fun00023 }
 42:
                zuuluu = michal.sessionId;
                if(!(tangon !== zuuluu)) { _fun00024_ip = 92; continue _fun00023 }
 52:
                zuuluu = michal.resumable;
                if(!zuuluu) { _fun00024_ip = 92; continue _fun00023 }
 61:
                zuuluu = michal.lastHeartbeatAckTime;
                if(!(tangon != zuuluu)) { _fun00024_ip = 128; continue _fun00023 }
 71:
                zuuluu = michal.lastHeartbeatAckTime;
                tangon = entity - zuuluu;
                zuuluu = _closure1_slot16;
                if(!(!(tangon <= zuuluu))) { _fun00024_ip = 128; continue _fun00023 }
 92:
                oscard = michal.disconnect;
                zuuluu = _closure1_slot13;
                report = zuuluu.UNRESUMABLE;
                tangon = false;
                zuuluu = 'Cannot resume connection.';
                zuuluu = oscard.bind(michal)(tangon, report, zuuluu);
                _fun00024_ip = 146; continue _fun00023;
 128:
                zuuluu = michal.doResume;
                zuuluu = zuuluu.bind(michal)();
                michal['lastHeartbeatAckTime'] = entity;
 146:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'doResume';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tangon = this;
                entity = tangon.lastRecvSeqNum;
                oscard = null;
                michal = oscard != entity;
                report = -1;
                if(!michal) { _fun00026_ip = 27; continue _fun00025 }
 24:
                report = entity;
 27:
                zuuluu = tangon.logger;
                michal = zuuluu.info;
                entity = tangon.serverId;
                golfie = oscard != entity;
                offset = '';
                verify = offset;
                if(!golfie) { _fun00026_ip = 61; continue _fun00025 }
 58:
                verify = entity;
 61:
                entity = tangon.sessionId;
                oscard = oscard != entity;
                if(!oscard) { _fun00026_ip = 77; continue _fun00025 }
 74:
                offset = entity;
 77:
                entity = global;
                entity = entity.HermesInternal;
                option = entity.concat;
                sizing = '[RESUME] resuming session. serverId=';
                backup = ' sessionId=';
                romeon = ' seqAck=';
                kiloes = verify;
                foxtra = offset;
                yankee = report;
                entity = sizing[option](kiloes, backup, foxtra, romeon, yankee, offset);
                entity = michal.bind(zuuluu)(entity);
                zuuluu = tangon.emit;
                michal = _closure1_slot18;
                michal = michal.Resuming;
                michal = zuuluu.bind(tangon)(michal);
                michal = _closure1_slot14;
                michal = michal.RESUMING;
                tangon['connectionState'] = michal;
                zuuluu = tangon.send;
                entity = _closure1_slot12;
                michal = entity.RESUME;
                entity = {};
                oscard = tangon.token;
                entity['token'] = oscard;
                oscard = tangon.sessionId;
                entity['session_id'] = oscard;
                oscard = tangon.serverId;
                entity['server_id'] = oscard;
                entity['seq_ack'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'handleHello';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                entity = argFoo;
                michal = this;
                report = entity.v;
                oscard = null;
                golfie = oscard != report;
                tangon = 3;
                zuuluu = tangon;
                if(!golfie) { _fun00028_ip = 29; continue _fun00027 }
 26:
                zuuluu = report;
 29:
                michal['serverVersion'] = zuuluu;
                zuuluu = michal.serverVersion;
                if(!(!(zuuluu <= tangon))) { _fun00028_ip = 148; continue _fun00027 }
 45:
                tangon = entity.heartbeat_interval;
                zuuluu = michal.heartbeatIntervalModifier;
                zuuluu = tangon * zuuluu;
                michal['heartbeatInterval'] = zuuluu;
                golfie = _closure1_slot0;
                report = _closure1_slot2;
                tangon = 10;
                report = report[tangon];
                tangon = undefined;
                tangon = golfie.bind(tangon)(report);
                tangon = tangon.isPlatformEmbedded;
                if(tangon) { _fun00028_ip = 218; continue _fun00027 }
 101:
                option = global;
                golfie = option.Math;
                report = golfie.min;
                tangon = _closure1_slot17;
                zuuluu = michal.heartbeatInterval;
                if(!(oscard == zuuluu)) { _fun00028_ip = 134; continue _fun00027 }
 128:
                zuuluu = option.NaN;
 134:
                zuuluu = report.bind(golfie)(tangon, zuuluu);
                michal['heartbeatInterval'] = zuuluu;
                _fun00028_ip = 218; continue _fun00027;
 148:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 10;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                tangon = zuuluu.isPlatformEmbedded;
                zuuluu = 0.1;
                if(!tangon) { _fun00028_ip = 202; continue _fun00027 }
 192:
                zuuluu = 0.25;
 202:
                entity = entity.heartbeat_interval;
                entity = entity * zuuluu;
                michal['heartbeatInterval'] = entity;
 218:
                entity = global;
                tangon = entity.Date;
                zuuluu = tangon.now;
                tangon = zuuluu.bind(tangon)();
                zuuluu = michal.connectionStartTime;
                yankee = tangon - zuuluu;
                tangon = michal.logger;
                zuuluu = tangon.info;
                report = michal.heartbeatInterval;
                oscard = oscard != report;
                offset = '??';
                if(!oscard) { _fun00028_ip = 278; continue _fun00027 }
 275:
                offset = report;
 278:
                kiloes = michal.serverVersion;
                entity = entity.HermesInternal;
                option = entity.concat;
                result = '[HELLO] heartbeat interval: ';
                sizing = ', version: ';
                backup = ', took ';
                romeon = ' ms';
                output = offset;
                foxtra = yankee;
                entity = result[option](output, sizing, kiloes, backup, foxtra, romeon, yankee);
                entity = zuuluu.bind(tangon)(entity);
                entity = michal.startHeartbeater;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'handleReady';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                michal = argFoo;
                offset = this;
                zuuluu = offset.backoff;
                entity = zuuluu.succeed;
                entity = entity.bind(zuuluu)();
                entity = global;
                tangon = entity.Date;
                zuuluu = tangon.now;
                tangon = zuuluu.bind(tangon)();
                zuuluu = offset.connectionStartTime;
                golfie = tangon - zuuluu;
                tangon = offset.logger;
                zuuluu = tangon.info;
                entity = entity.HermesInternal;
                oscard = entity.concat;
                report = '[READY] took ';
                entity = ' ms';
                entity = oscard.bind(report)(golfie, entity);
                entity = zuuluu.bind(tangon)(entity);
                zuuluu = offset.serverVersion;
                entity = 6;
                if(!(zuuluu >= entity)) { _fun00030_ip = 134; continue _fun00029 }
 107:
                tangon = offset.send;
                entity = _closure1_slot12;
                zuuluu = entity.VOICE_BACKEND_VERSION;
                entity = {};
                entity = tangon.bind(offset)(zuuluu, entity);
 134:
                verify = offset.emit;
                zuuluu = _closure1_slot18;
                option = zuuluu.Ready;
                output = michal.ip;
                sizing = michal.port;
                kiloes = michal.modes;
                backup = michal.ssrc;
                yankee = _closure1_slot23;
                zuuluu = michal.streams;
                entity = undefined;
                foxtra = yankee.bind(entity)(zuuluu);
                romeon = michal.experiments;
                echoed = offset;
                result = option;
                michal = echoed[verify](result, output, sizing, kiloes, backup, foxtra, romeon, yankee);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'handleResumed';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            michal = entity.backoff;
            entity = michal.succeed;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'handleClose';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                report = argFoo;
                tangon = argBar;
                zuuluu = argBaz;
                michal = this;
                var _closure3_slot0 = michal;
                var _closure3_slot1 = report;
                var _closure3_slot2 = tangon;
                var _closure3_slot3 = zuuluu;
                golfie = _closure1_slot14;
                golfie = golfie.DISCONNECTED;
                michal['connectionState'] = golfie;
                if(report) { _fun00032_ip = 54; continue _fun00031 }
 52:
                report = false;
 54:
                _closure3_slot1 = report;
                golfie = michal.cleanupWebSocket;
                golfie = golfie.bind(michal)();
                golfie = _closure1_slot13;
                golfie = golfie.AUTHENTICATION_FAILED;
                if(!(tangon !== golfie)) { _fun00032_ip = 326; continue _fun00031 }
 85:
                golfie = _closure1_slot13;
                golfie = golfie.SERVER_CRASH;
                if(!(tangon !== golfie)) { _fun00032_ip = 326; continue _fun00031 }
 102:
                golfie = _closure1_slot13;
                golfie = golfie.SERVER_NOT_FOUND;
                if(!(tangon !== golfie)) { _fun00032_ip = 326; continue _fun00031 }
 119:
                oscard = _closure1_slot13;
                oscard = oscard.INVALID_SESSION;
                if(!(tangon !== oscard)) { _fun00032_ip = 326; continue _fun00031 }
 136:
                oscard = michal.backoff;
                golfie = oscard.fails;
                oscard = 3;
                if(!(!(golfie > oscard))) { _fun00032_ip = 288; continue _fun00031 }
 158:
                golfie = michal.backoff;
                oscard = golfie.fail;
                entity = function() {
                    report = _closure3_slot0;
                    tangon = report.reconnect;
                    zuuluu = _closure3_slot1;
                    michal = _closure3_slot2;
                    entity = _closure3_slot3;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                };
                option = oscard.bind(golfie)(entity);
                golfie = michal.logger;
                oscard = golfie.warn;
                entity = report.toString;
                backup = entity.bind(report)();
                entity = 1000;
                verify = option / entity;
                option = verify.toFixed;
                entity = 2;
                sizing = option.bind(verify)(entity);
                entity = global;
                entity = entity.HermesInternal;
                romeon = entity.concat;
                vacuum = '[WS CLOSED] (clean: ';
                source = ', code: ';
                echoed = ', reason: ';
                output = ') retrying in ';
                kiloes = ' seconds.';
                ctrled = backup;
                update = tangon;
                result = zuuluu;
                entity = vacuum[romeon](ctrled, source, update, echoed, result, output, sizing, kiloes, backup);
                entity = oscard.bind(golfie)(entity);
                _fun00032_ip = 322; continue _fun00031;
 288:
                golfie = michal.logger;
                oscard = golfie.warn;
                entity = '[WS CLOSED] Backoff exceed. Resetting.';
                entity = oscard.bind(golfie)(entity);
                entity = michal.disconnect;
                entity = entity.bind(michal)(report, tangon, zuuluu);
 322:
                entity = undefined;
                return entity;
 326:
                entity = michal.disconnect;
                entity = entity.bind(michal)(report, tangon, zuuluu);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'disconnect';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            oscard = argFoo;
            report = argBar;
            tangon = argBaz;
            zuuluu = this;
            golfie = zuuluu.logger;
            michal = golfie.warn;
            entity = oscard.toString;
            output = entity.bind(oscard)();
            entity = global;
            entity = entity.HermesInternal;
            offset = entity.concat;
            result = '[DISCONNECT] (';
            option = ', ';
            romeon = ')';
            sizing = option;
            kiloes = report;
            backup = option;
            foxtra = tangon;
            entity = result[offset](output, sizing, kiloes, backup, foxtra, romeon, yankee);
            entity = michal.bind(golfie)(entity);
            entity = zuuluu.cleanupWebSocket;
            entity = entity.bind(zuuluu)();
            entity = zuuluu.cleanupState;
            entity = entity.bind(zuuluu)();
            michal = _closure1_slot14;
            michal = michal.DISCONNECTED;
            zuuluu['connectionState'] = michal;
            michal = zuuluu.emit;
            entity = _closure1_slot18;
            output = entity.Disconnect;
            result = zuuluu;
            sizing = oscard;
            kiloes = report;
            backup = tangon;
            entity = result[michal](output, sizing, kiloes, backup, foxtra);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'reconnect';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            report = argFoo;
            michal = this;
            tangon = michal.logger;
            zuuluu = tangon.info;
            entity = report.toString;
            kiloes = entity.bind(report)();
            entity = global;
            entity = entity.HermesInternal;
            verify = entity.concat;
            sizing = '[RECONNECT] wasClean=';
            backup = ' code=';
            foxtra = argBar;
            romeon = ' reason=';
            yankee = argBaz;
            entity = sizing[verify](kiloes, backup, foxtra, romeon, yankee, offset);
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = michal.cleanupWebSocket;
            entity = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.close;
                entity = 4000;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = _closure1_slot14;
            entity = entity.RECONNECTING;
            michal['connectionState'] = entity;
            entity = michal.createWebSocket;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'cleanupWebSocket';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                tangon = argFoo;
                entity = this;
                michal = entity.stopHeartbeater;
                michal = michal.bind(entity)();
                michal = entity.clearHelloTimeout;
                michal = michal.bind(entity)();
                zuuluu = entity.webSocket;
                michal = null;
                entity['webSocket'] = michal;
                if(!(michal != zuuluu)) { _fun00034_ip = 88; continue _fun00033 }
 46:
                report = _closure1_slot20;
                zuuluu['onopen'] = report;
                zuuluu['onmessage'] = report;
                zuuluu['onerror'] = report;
                zuuluu['onclose'] = report;
                if(!(michal != tangon)) { _fun00034_ip = 88; continue _fun00033 }
 81:
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
 88:
                michal = entity.backoff;
                entity = michal.cancel;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'cleanupState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            entity = null;
            michal['serverId'] = entity;
            michal['sessionId'] = entity;
            michal['token'] = entity;
            zuuluu = false;
            michal['resumable'] = zuuluu;
            michal['lastRecvSeqNum'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'parseWebSocketMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                michal = argFoo;
                entity = this;
                tangon = michal.data;
                report = global;
                zuuluu = report.ArrayBuffer;
                zuuluu = tangon instanceof zuuluu;
                if(zuuluu) { _fun00036_ip = 50; continue _fun00035 }
 26:
                oscard = report.JSON;
                tangon = oscard.parse;
                zuuluu = michal.data;
                zuuluu = tangon.bind(oscard)(zuuluu);
                return zuuluu;
 50:
                tangon = report.Uint8Array;
                offset = michal.data;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                yankee = zuuluu;
                michal = new yankee[tangon](offset, verify);
                tangon = michal instanceof Object ? michal : zuuluu;
                michal = entity.serverVersion;
                zuuluu = 8;
                oscard = michal >= zuuluu;
                michal = null;
                if(!oscard) { _fun00036_ip = 147; continue _fun00035 }
 99:
                golfie = report.DataView;
                offset = tangon.buffer;
                oscard = golfie.prototype;
                oscard = Object.create(oscard, {constructor: {value: golfie}});
                yankee = oscard;
                report = new yankee[golfie](offset, verify);
                option = report instanceof Object ? report : oscard;
                golfie = option.getUint16;
                oscard = 0;
                report = false;
                michal = golfie.bind(option)(oscard, report);
 147:
                entity = entity.serverVersion;
                entity = entity >= zuuluu;
                report = 0;
                if(!entity) { _fun00036_ip = 165; continue _fun00035 }
 162:
                report = 2;
 165:
                entity = {};
                zuuluu = tangon[report];
                entity['op'] = zuuluu;
                entity['seq'] = michal;
                zuuluu = tangon.subarray;
                michal = 1;
                michal = report + michal;
                michal = zuuluu.bind(tangon)(michal);
                entity['d'] = michal;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'clearHelloTimeout';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                michal = this;
                zuuluu = michal.helloTimeout;
                entity = null;
                if(!(entity != zuuluu)) { _fun00038_ip = 42; continue _fun00037 }
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
        report['value'] = golfie;
        entity[15] = report;
        report = {};
        golfie = 'handleHeartbeatAck';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                michal = argFoo;
                entity = this;
                report = entity.logger;
                tangon = report.info;
                zuuluu = 'Heartbeat ACK received';
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = entity.serverVersion;
                zuuluu = 8;
                oscard = michal;
                if(!(tangon >= zuuluu)) { _fun00040_ip = 49; continue _fun00039 }
 44:
                oscard = michal.t;
 49:
                report = entity.emit;
                michal = _closure1_slot18;
                tangon = michal.Ping;
                zuuluu = global;
                golfie = zuuluu.Date;
                michal = golfie.now;
                michal = michal.bind(golfie)();
                michal = michal - oscard;
                michal = report.bind(entity)(tangon, michal);
                tangon = zuuluu.Date;
                michal = tangon.now;
                michal = michal.bind(tangon)();
                entity['lastHeartbeatAckTime'] = michal;
                michal = true;
                entity['heartbeatAck'] = michal;
                tangon = entity.expeditedHeartbeatTimeout;
                michal = null;
                if(!(michal !== tangon)) { _fun00040_ip = 183; continue _fun00039 }
 136:
                report = zuuluu.clearTimeout;
                tangon = entity.expeditedHeartbeatTimeout;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                entity['expeditedHeartbeatTimeout'] = michal;
                zuuluu = entity.logger;
                michal = zuuluu.info;
                entity = 'Expedited heartbeat succeeded';
                entity = michal.bind(zuuluu)(entity);
 183:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[16] = report;
        report = {};
        golfie = 'handleHeartbeatTimeout';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            tangon = entity.cleanupWebSocket;
            zuuluu = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.close;
                entity = 4000;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = entity.backoff;
            zuuluu = tangon.fail;
            michal = function() {
                report = _closure3_slot0;
                tangon = report.reconnect;
                entity = _closure1_slot13;
                zuuluu = entity.HEARTBEAT_TIMEOUT;
                michal = false;
                entity = 'Heartbeat timeout.';
                entity = tangon.bind(report)(michal, zuuluu, entity);
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = entity.logger;
            michal = zuuluu.warn;
            entity = 1000;
            report = tangon / entity;
            tangon = report.toFixed;
            entity = 2;
            oscard = tangon.bind(report)(entity);
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            tangon = '[HEARTBEAT ACK TIMEOUT] reconnecting in ';
            entity = ' seconds.';
            entity = report.bind(tangon)(oscard, entity);
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[17] = report;
        report = {};
        golfie = 'startHeartbeater';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 11;
                tangon = tangon[entity];
                entity = undefined;
                golfie = report.bind(entity)(tangon);
                tangon = zuuluu.heartbeatInterval;
                oscard = null;
                report = oscard != tangon;
                tangon = 'RTCControlSocket: Heartbeat interval should never null here.';
                tangon = golfie.bind(entity)(report, tangon);
                option = zuuluu.logger;
                golfie = option.info;
                offset = zuuluu.heartbeatInterval;
                tangon = global;
                report = tangon.HermesInternal;
                verify = report.concat;
                report = 'Starting heartbeat with interval: ';
                report = verify.bind(report)(offset);
                report = golfie.bind(option)(report);
                report = zuuluu.heartbeater;
                if(!(oscard !== report)) { _fun00042_ip = 131; continue _fun00041 }
 114:
                oscard = tangon.clearInterval;
                report = zuuluu.heartbeater;
                report = oscard.bind(entity)(report);
 131:
                report = true;
                zuuluu['heartbeatAck'] = report;
                report = tangon.setInterval;
                tangon = zuuluu.heartbeatInterval;
                michal = function() {
                    _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                        michal = _closure3_slot0;
                        zuuluu = michal.heartbeatAck;
                        michal = _closure3_slot0;
                        if(zuuluu) { _fun00044_ip = 48; continue _fun00043 }
 20:
                        tangon = michal.expeditedHeartbeatTimeout;
                        zuuluu = null;
                        if(!(zuuluu === tangon)) { _fun00044_ip = 66; continue _fun00043 }
 32:
                        zuuluu = _closure3_slot0;
                        entity = zuuluu.handleHeartbeatTimeout;
                        entity = entity.bind(zuuluu)();
                        _fun00044_ip = 66; continue _fun00043;
 48:
                        entity = false;
                        michal['heartbeatAck'] = entity;
                        entity = michal.sendHeartbeat;
                        entity = entity.bind(michal)();
 66:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = report.bind(entity)(michal, tangon);
                zuuluu['heartbeater'] = michal;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[18] = report;
        report = {};
        golfie = 'sendHeartbeat';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                tangon = this;
                michal = tangon.serverVersion;
                entity = 8;
                if(!(!(michal >= entity))) { _fun00046_ip = 82; continue _fun00045 }
 16:
                zuuluu = tangon.logger;
                michal = zuuluu.info;
                entity = 'Sending heartbeat';
                entity = michal.bind(zuuluu)(entity);
                zuuluu = tangon.send;
                entity = _closure1_slot12;
                michal = entity.HEARTBEAT;
                entity = global;
                report = entity.Date;
                entity = report.now;
                entity = entity.bind(report)();
                entity = zuuluu.bind(tangon)(michal, entity);
                _fun00046_ip = 197; continue _fun00045;
 82:
                entity = tangon.lastRecvSeqNum;
                michal = null;
                michal = michal != entity;
                report = -1;
                if(!michal) { _fun00046_ip = 106; continue _fun00045 }
 103:
                report = entity;
 106:
                zuuluu = tangon.logger;
                michal = zuuluu.info;
                oscard = global;
                entity = oscard.HermesInternal;
                golfie = entity.concat;
                entity = 'Sending heartbeat with last received sequence number: ';
                entity = golfie.bind(entity)(report);
                entity = michal.bind(zuuluu)(entity);
                zuuluu = tangon.send;
                entity = _closure1_slot12;
                michal = entity.HEARTBEAT;
                entity = {};
                golfie = oscard.Date;
                oscard = golfie.now;
                oscard = oscard.bind(golfie)();
                entity['t'] = oscard;
                entity['seq_ack'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
 197:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[19] = report;
        report = {};
        golfie = 'stopHeartbeater';
        report['key'] = golfie;
        golfie = function() { // Original name: value
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
                zuuluu = michal.expeditedHeartbeatTimeout;
                if(!(entity !== zuuluu)) { _fun00048_ip = 79; continue _fun00047 }
 52:
                zuuluu = global;
                report = zuuluu.clearTimeout;
                tangon = michal.expeditedHeartbeatTimeout;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                michal['expeditedHeartbeatTimeout'] = entity;
 79:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[20] = report;
        report = {};
        golfie = 'connect';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                michal = this;
                tangon = michal.connectionState;
                zuuluu = _closure1_slot14;
                zuuluu = zuuluu.DISCONNECTED;
                if(!(tangon === zuuluu)) { _fun00050_ip = 77; continue _fun00049 }
 26:
                zuuluu = _closure1_slot14;
                zuuluu = zuuluu.CONNECTING;
                michal['connectionState'] = zuuluu;
                zuuluu = michal.createWebSocket;
                zuuluu = zuuluu.bind(michal)();
                zuuluu = michal.emit;
                entity = _closure1_slot18;
                entity = entity.Connecting;
                entity = zuuluu.bind(michal)(entity);
                entity = true;
                _fun00050_ip = 100; continue _fun00049;
 77:
                tangon = michal.logger;
                zuuluu = tangon.error;
                michal = 'Cannot start a new connection, connection state is not disconnected';
                michal = zuuluu.bind(tangon)(michal);
                entity = false;
 100:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[21] = report;
        report = {};
        golfie = 'identify';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                michal = argFoo;
                report = this;
                foxtra = michal.serverId;
                romeon = michal.userId;
                yankee = michal.sessionId;
                offset = michal.token;
                verify = michal.maxDaveProtocolVersion;
                option = michal.video;
                entity = undefined;
                if(!(option === entity)) { _fun00052_ip = 49; continue _fun00051 }
 47:
                option = false;
 49:
                golfie = michal.streamParameters;
                report['serverId'] = foxtra;
                report['sessionId'] = yankee;
                report['token'] = offset;
                michal = _closure1_slot14;
                michal = michal.IDENTIFYING;
                report['connectionState'] = michal;
                tangon = report.send;
                michal = _closure1_slot12;
                zuuluu = michal.IDENTIFY;
                michal = {};
                michal['server_id'] = foxtra;
                michal['user_id'] = romeon;
                michal['session_id'] = yankee;
                michal['token'] = offset;
                michal['max_dave_protocol_version'] = verify;
                michal['video'] = option;
                oscard = _closure1_slot22;
                oscard = oscard.bind(entity)(golfie);
                michal['streams'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[22] = report;
        report = {};
        golfie = 'expeditedHeartbeat';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                verify = arguments[1];
                zuuluu = arguments[2];
                michal = this;
                var _closure3_slot0 = michal;
                report = undefined;
                if(!(verify === report)) { _fun00054_ip = 25; continue _fun00053 }
 21:
                verify = '';
 25:
                if(!(zuuluu === report)) { _fun00054_ip = 31; continue _fun00053 }
 29:
                zuuluu = true;
 31:
                oscard = michal.webSocket;
                tangon = null;
                if(!(tangon == oscard)) { _fun00054_ip = 108; continue _fun00053 }
 43:
                if(zuuluu) { _fun00054_ip = 95; continue _fun00053 }
 46:
                golfie = michal.logger;
                oscard = golfie.info;
                option = '';
                if(!(option !== verify)) { _fun00054_ip = 75; continue _fun00053 }
 65:
                zuuluu = 'reason: ';
                option = zuuluu + verify;
 75:
                zuuluu = 'Expedited heartbeat requested, but is disconnected and a reset was not requested ';
                zuuluu = zuuluu + option;
                zuuluu = oscard.bind(golfie)(zuuluu);
                _fun00054_ip = 229; continue _fun00053;
 95:
                zuuluu = michal.resetBackoff;
                zuuluu = zuuluu.bind(michal)(verify);
                return zuuluu;
 108:
                golfie = michal.logger;
                oscard = golfie.info;
                option = '';
                if(!(option !== verify)) { _fun00054_ip = 137; continue _fun00053 }
 127:
                zuuluu = 'reason: ';
                option = zuuluu + verify;
 137:
                zuuluu = 'Performing an expedited heartbeat ';
                zuuluu = zuuluu + option;
                zuuluu = oscard.bind(golfie)(zuuluu);
                zuuluu = false;
                michal['heartbeatAck'] = zuuluu;
                zuuluu = michal.sendHeartbeat;
                zuuluu = zuuluu.bind(michal)();
                zuuluu = michal.expeditedHeartbeatTimeout;
                if(!(tangon !== zuuluu)) { _fun00054_ip = 199; continue _fun00053 }
 180:
                zuuluu = global;
                tangon = zuuluu.clearTimeout;
                zuuluu = michal.expeditedHeartbeatTimeout;
                zuuluu = tangon.bind(report)(zuuluu);
 199:
                zuuluu = global;
                tangon = zuuluu.setTimeout;
                zuuluu = function() {
                    _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                        michal = _closure3_slot0;
                        zuuluu = null;
                        michal['expeditedHeartbeatTimeout'] = zuuluu;
                        zuuluu = michal.heartbeatAck;
                        michal = false;
                        if(!(michal === zuuluu)) { _fun00056_ip = 41; continue _fun00055 }
 27:
                        michal = _closure3_slot0;
                        entity = michal.handleHeartbeatTimeout;
                        entity = entity.bind(michal)();
 41:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = argFoo;
                entity = tangon.bind(report)(zuuluu, entity);
                michal['expeditedHeartbeatTimeout'] = entity;
 229:
                entity = false;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[23] = report;
        report = {};
        golfie = 'resetBackoff';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                golfie = arguments[0];
                oscard = this;
                entity = undefined;
                if(!(golfie === entity)) { _fun00058_ip = 16; continue _fun00057 }
 12:
                golfie = '';
 16:
                entity = oscard.backoff;
                michal = entity.fails;
                entity = 0;
                entity = michal > entity;
                if(!entity) { _fun00058_ip = 49; continue _fun00057 }
 37:
                zuuluu = oscard.webSocket;
                michal = null;
                entity = michal == zuuluu;
 49:
                if(!entity) { _fun00058_ip = 148; continue _fun00057 }
 52:
                tangon = oscard.logger;
                zuuluu = tangon.info;
                report = '';
                if(!(report !== golfie)) { _fun00058_ip = 81; continue _fun00057 }
 71:
                michal = 'for reason: ';
                report = michal + golfie;
 81:
                michal = 'Connection backoff reset ';
                michal = michal + report;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = oscard.backoff;
                michal = zuuluu.succeed;
                michal = michal.bind(zuuluu)();
                report = oscard.reconnect;
                michal = _closure1_slot13;
                tangon = michal.RESET_BACKOFF;
                zuuluu = false;
                michal = 'Reset backoff.';
                michal = report.bind(oscard)(zuuluu, tangon, michal);
                entity = true;
 148:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[24] = report;
        report = {};
        golfie = 'close';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            oscard = this;
            zuuluu = oscard.logger;
            michal = zuuluu.info;
            entity = 'CLOSE';
            entity = michal.bind(zuuluu)(entity);
            michal = oscard.cleanupWebSocket;
            entity = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.close;
                entity = 4000;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(oscard)(entity);
            entity = oscard.cleanupState;
            entity = entity.bind(oscard)();
            michal = _closure1_slot14;
            michal = michal.DISCONNECTED;
            oscard['connectionState'] = michal;
            report = oscard.emit;
            entity = _closure1_slot18;
            offset = entity.Disconnect;
            verify = true;
            option = 1000;
            golfie = 'Force Close';
            yankee = oscard;
            entity = yankee[report](offset, verify, option, golfie, oscard);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[25] = report;
        report = {};
        golfie = 'destroy';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            entity = michal.close;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[26] = report;
        report = {};
        golfie = 'selectProtocol';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                golfie = argBar;
                zuuluu = argBaz;
                tangon = this;
                michal = {};
                verify = null;
                entity = verify == zuuluu;
                oscard = null;
                report = michal;
                if(entity) { _fun00060_ip = 329; continue _fun00059 }
 28:
                entity = 'sdp';
                entity = entity in zuuluu;
                if(!entity) { _fun00060_ip = 66; continue _fun00059 }
 39:
                entity = zuuluu.sdp;
                if(!(verify != entity)) { _fun00060_ip = 66; continue _fun00059 }
 49:
                option = zuuluu.sdp;
                entity = '';
                if(!(entity === option)) { _fun00060_ip = 270; continue _fun00059 }
 66:
                entity = 'address';
                entity = entity in zuuluu;
                if(!entity) { _fun00060_ip = 87; continue _fun00059 }
 77:
                option = zuuluu.address;
                entity = verify != option;
 87:
                if(!entity) { _fun00060_ip = 104; continue _fun00059 }
 90:
                offset = zuuluu.address;
                option = '';
                entity = option !== offset;
 104:
                if(!entity) { _fun00060_ip = 128; continue _fun00059 }
 107:
                option = global;
                yankee = option.Boolean;
                offset = zuuluu.port;
                option = undefined;
                entity = yankee.bind(option)(offset);
 128:
                if(!entity) { _fun00060_ip = 140; continue _fun00059 }
 131:
                option = zuuluu.mode;
                entity = verify != option;
 140:
                if(!entity) { _fun00060_ip = 156; continue _fun00059 }
 143:
                verify = zuuluu.mode;
                option = '';
                entity = option !== verify;
 156:
                offset = undefined;
                oscard = undefined;
                report = michal;
                if(!entity) { _fun00060_ip = 329; continue _fun00059 }
 169:
                michal = {};
                entity = zuuluu.address;
                michal['address'] = entity;
                entity = zuuluu.port;
                michal['port'] = entity;
                entity = zuuluu.mode;
                michal['mode'] = entity;
                entity = {};
                foxtra = entity;
                romeon = zuuluu;
                option = copyDataProperties(foxtra, romeon);
                verify = _closure1_slot21;
                option = zuuluu.codecs;
                verify = verify.bind(offset)(option);
                option = 'codecs';
                entity[option] = verify;
                option = 'rtc_connection_id';
                entity[option] = golfie;
                verify = argCor;
                option = 'experiments';
                entity[option] = verify;
                oscard = michal;
                report = entity;
                _fun00060_ip = 329; continue _fun00059;
 270:
                oscard = zuuluu.sdp;
                entity = {};
                foxtra = entity;
                romeon = zuuluu;
                option = copyDataProperties(foxtra, romeon);
                verify = _closure1_slot21;
                option = zuuluu.codecs;
                zuuluu = undefined;
                option = verify.bind(zuuluu)(option);
                zuuluu = 'codecs';
                entity[zuuluu] = option;
                zuuluu = 'rtc_connection_id';
                entity[zuuluu] = golfie;
                report = entity;
 329:
                zuuluu = tangon.send;
                entity = _closure1_slot12;
                michal = entity.SELECT_PROTOCOL;
                entity = {};
                golfie = argFoo;
                entity['protocol'] = golfie;
                entity['data'] = oscard;
                foxtra = entity;
                romeon = report;
                report = copyDataProperties(foxtra, romeon);
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[27] = report;
        report = {};
        golfie = 'updateSession';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            report = this;
            tangon = report.send;
            michal = _closure1_slot12;
            zuuluu = michal.SESSION_UPDATE;
            michal = {};
            golfie = _closure1_slot21;
            entity = argFoo;
            oscard = entity.codecs;
            entity = undefined;
            oscard = golfie.bind(entity)(oscard);
            michal['codecs'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[28] = report;
        report = {};
        golfie = 'speaking';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                offset = argFoo;
                golfie = arguments[1];
                oscard = arguments[2];
                report = this;
                entity = undefined;
                if(!(golfie === entity)) { _fun00062_ip = 20; continue _fun00061 }
 18:
                golfie = 0;
 20:
                if(!(oscard === entity)) { _fun00062_ip = 26; continue _fun00061 }
 24:
                oscard = 0;
 26:
                tangon = report.send;
                michal = _closure1_slot12;
                zuuluu = michal.SPEAKING;
                michal = {};
                yankee = report.serverVersion;
                verify = 3;
                option = offset;
                if(!(yankee <= verify)) { _fun00062_ip = 76; continue _fun00061 }
 63:
                verify = global;
                verify = verify.Boolean;
                option = verify.bind(entity)(offset);
 76:
                michal['speaking'] = option;
                michal['delay'] = golfie;
                michal['ssrc'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[29] = report;
        report = {};
        golfie = 'video';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            report = this;
            tangon = report.send;
            michal = _closure1_slot12;
            zuuluu = michal.VIDEO;
            michal = {};
            oscard = argFoo;
            michal['audio_ssrc'] = oscard;
            oscard = argBar;
            michal['video_ssrc'] = oscard;
            oscard = argBaz;
            michal['rtx_ssrc'] = oscard;
            golfie = _closure1_slot22;
            entity = undefined;
            oscard = argCor;
            oscard = golfie.bind(entity)(oscard);
            michal['streams'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[30] = report;
        report = {};
        golfie = 'mediaSinkWants';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                tangon = this;
                michal = tangon.serverVersion;
                entity = 5;
                if(!(michal >= entity)) { _fun00064_ip = 44; continue _fun00063 }
 16:
                zuuluu = tangon.send;
                entity = _closure1_slot12;
                michal = entity.MEDIA_SINK_WANTS;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
 44:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[31] = report;
        report = {};
        golfie = 'secureFramesReadyForTransition';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = this;
            zuuluu = tangon.send;
            entity = _closure1_slot12;
            michal = entity.DAVE_PROTOCOL_READY_FOR_TRANSITION;
            entity = {};
            report = argFoo;
            entity['transition_id'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[32] = report;
        report = {};
        golfie = 'sendMLSKeyPackage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = this;
            zuuluu = tangon.logger;
            michal = zuuluu.info;
            entity = 'Sending MLS key package';
            entity = michal.bind(zuuluu)(entity);
            zuuluu = tangon.sendBinary;
            entity = _closure1_slot12;
            michal = entity.MLS_KEY_PACKAGE;
            entity = global;
            oscard = entity.Uint8Array;
            entity = oscard.prototype;
            report = Object.create(entity, {constructor: {value: oscard}});
            option = argFoo;
            verify = report;
            entity = new verify[oscard](option, golfie);
            entity = entity instanceof Object ? entity : report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[33] = report;
        report = {};
        golfie = 'sendMLSCommitWelcome';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = this;
            zuuluu = tangon.logger;
            michal = zuuluu.info;
            entity = 'Sending MLS commit + welcome message';
            entity = michal.bind(zuuluu)(entity);
            zuuluu = tangon.sendBinary;
            entity = _closure1_slot12;
            michal = entity.MLS_COMMIT_WELCOME;
            entity = global;
            oscard = entity.Uint8Array;
            entity = oscard.prototype;
            report = Object.create(entity, {constructor: {value: oscard}});
            option = argFoo;
            verify = report;
            entity = new verify[oscard](option, golfie);
            entity = entity instanceof Object ? entity : report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[34] = report;
        report = {};
        golfie = 'flagMLSInvalidCommitWelcome';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = this;
            zuuluu = tangon.send;
            entity = _closure1_slot12;
            michal = entity.MLS_INVALID_COMMIT_WELCOME;
            entity = {};
            report = argFoo;
            entity['transition_id'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[35] = report;
        report = {};
        golfie = 'noRoute';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            tangon = this;
            zuuluu = tangon.send;
            entity = _closure1_slot12;
            michal = entity.CLIENT_CANNOT_REACH_RTC_SERVER;
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[36] = report;
        report = {};
        golfie = 'setHeartbeatIntervalModifier';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = this;
            entity['heartbeatIntervalModifier'] = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[37] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(option);
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'lib/RTCControlSocket.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['SocketEvent'] = michal;
    return entity;
})();