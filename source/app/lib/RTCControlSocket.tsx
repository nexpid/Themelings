// app/lib/RTCControlSocket.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function noop() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function convertCodecs(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.name;
            var1['name'] = var3;
            var3 = var2.type;
            var1['type'] = var3;
            var4 = var2.priority;
            var3 = 1000;
            var3 = var3 * var4;
            var1['priority'] = var3;
            var3 = var2.payloadType;
            var1['payload_type'] = var3;
            var3 = var2.rtxPayloadType;
            var1['rtx_payload_type'] = var3;
            var3 = var2.encode;
            var1['encode'] = var3;
            var2 = var2.decode;
            var1['decode'] = var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function convertStreamParametersToWire(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 == var4;
            var1 = undefined;
            if(var2) { _fun0002_ip = 33; continue _fun0002 }
 14:
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var1 = {};
                    var2 = var4.type;
                    var1['type'] = var2;
                    var2 = var4.rid;
                    var1['rid'] = var2;
                    var2 = var4.ssrc;
                    var1['ssrc'] = var2;
                    var2 = var4.active;
                    var1['active'] = var2;
                    var2 = var4.quality;
                    var1['quality'] = var2;
                    var2 = var4.rtxSsrc;
                    var1['rtx_ssrc'] = var2;
                    var2 = var4.maxBitrate;
                    var1['max_bitrate'] = var2;
                    var2 = var4.maxFrameRate;
                    var1['max_framerate'] = var2;
                    var3 = var4.maxResolution;
                    var2 = null;
                    var3 = var2 != var3;
                    var2 = undefined;
                    if(!var3) { _fun0003_ip = 158; continue _fun0003 }
 108:
                    var3 = {};
                    var5 = var4.maxResolution;
                    var5 = var5.type;
                    var3['type'] = var5;
                    var5 = var4.maxResolution;
                    var5 = var5.width;
                    var3['width'] = var5;
                    var4 = var4.maxResolution;
                    var4 = var4.height;
                    var3['height'] = var4;
                    var2 = var3;
 158:
                    var1['max_resolution'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
 33:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function convertStreamParametersFromWire(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var2 = null;
            var3 = var2 == var5;
            var1 = undefined;
            if(var3) { _fun0004_ip = 33; continue _fun0004 }
 14:
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = arg1;
                    var1 = {};
                    var3 = var4.type;
                    var2 = 'audio';
                    if(!(var2 !== var3)) { _fun0005_ip = 79; continue _fun0005 }
 18:
                    var2 = 'test';
                    if(!(var2 !== var3)) { _fun0005_ip = 64; continue _fun0005 }
 26:
                    var2 = 'screen';
                    if(!(var2 !== var3)) { _fun0005_ip = 49; continue _fun0005 }
 34:
                    var2 = _closure1_slot10;
                    var2 = var2.VIDEO;
                    _fun0005_ip = 62; continue _fun0005;
 49:
                    var3 = _closure1_slot10;
                    var2 = var3.SCREEN;
 62:
                    _fun0005_ip = 77; continue _fun0005;
 64:
                    var3 = _closure1_slot10;
                    var2 = var3.TEST;
 77:
                    _fun0005_ip = 92; continue _fun0005;
 79:
                    var3 = _closure1_slot10;
                    var2 = var3.AUDIO;
 92:
                    var1['type'] = var2;
                    var2 = var4.rid;
                    var1['rid'] = var2;
                    var2 = var4.ssrc;
                    var1['ssrc'] = var2;
                    var2 = var4.rtx_ssrc;
                    var1['rtxSsrc'] = var2;
                    var2 = var4.active;
                    var1['active'] = var2;
                    var2 = var4.quality;
                    var1['quality'] = var2;
                    var2 = var4.max_bitrate;
                    var1['maxBitrate'] = var2;
                    var2 = var4.max_framerate;
                    var1['maxFrameRate'] = var2;
                    var3 = var4.max_resolution;
                    var2 = null;
                    var3 = var2 != var3;
                    var2 = undefined;
                    if(!var3) { _fun0005_ip = 240; continue _fun0005 }
 190:
                    var3 = {};
                    var5 = var4.max_resolution;
                    var5 = var5.type;
                    var3['type'] = var5;
                    var5 = var4.max_resolution;
                    var5 = var5.width;
                    var3['width'] = var5;
                    var4 = var4.max_resolution;
                    var4 = var4.height;
                    var3['height'] = var4;
                    var2 = var3;
 240:
                    var1['maxResolution'] = var2;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3);
 33:
            if(!(var2 == var1)) { _fun0004_ip = 41; continue _fun0004 }
 37:
            var1 = new Array(0);
 41:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var18 = 0;
    var2 = var7[var18];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var12 = 1;
    var2 = var7[var12];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var17 = 2;
    var2 = var7[var17];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var16 = 3;
    var2 = var7[var16];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var15 = 4;
    var2 = var7[var15];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var10 = 5;
    var2 = var7[var10];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var5 = 6;
    var2 = var7[var5];
    var2 = var6.bind(var1)(var2);
    var8 = var2.MediaEngineContextTypes;
    var _closure1_slot9 = var8;
    var8 = var2.MediaTypes;
    var _closure1_slot10 = var8;
    var2 = var2.SpeakingFlags;
    var _closure1_slot11 = var2;
    var11 = {};
    var11['IDENTIFY'] = var18;
    var2 = 'IDENTIFY';
    var11[var18] = var2;
    var11['SELECT_PROTOCOL'] = var12;
    var2 = 'SELECT_PROTOCOL';
    var11[var12] = var2;
    var11['READY'] = var17;
    var2 = 'READY';
    var11[var17] = var2;
    var11['HEARTBEAT'] = var16;
    var2 = 'HEARTBEAT';
    var11[var16] = var2;
    var11['SELECT_PROTOCOL_ACK'] = var15;
    var2 = 'SELECT_PROTOCOL_ACK';
    var11[var15] = var2;
    var11['SPEAKING'] = var10;
    var2 = 'SPEAKING';
    var11[var10] = var2;
    var11['HEARTBEAT_ACK'] = var5;
    var2 = 'HEARTBEAT_ACK';
    var11[var5] = var2;
    var2 = 7;
    var11['RESUME'] = var2;
    var5 = 'RESUME';
    var11[var2] = var5;
    var8 = 8;
    var11['HELLO'] = var8;
    var5 = 'HELLO';
    var11[var8] = var5;
    var8 = 9;
    var11['RESUMED'] = var8;
    var5 = 'RESUMED';
    var11[var8] = var5;
    var8 = 11;
    var11['CLIENT_CONNECT'] = var8;
    var5 = 'CLIENT_CONNECT';
    var11[var8] = var5;
    var8 = 12;
    var11['VIDEO'] = var8;
    var5 = 'VIDEO';
    var11[var8] = var5;
    var8 = 13;
    var11['CLIENT_DISCONNECT'] = var8;
    var5 = 'CLIENT_DISCONNECT';
    var11[var8] = var5;
    var5 = 14;
    var11['SESSION_UPDATE'] = var5;
    var13 = 'SESSION_UPDATE';
    var11[var5] = var13;
    var14 = 15;
    var11['MEDIA_SINK_WANTS'] = var14;
    var13 = 'MEDIA_SINK_WANTS';
    var11[var14] = var13;
    var14 = 16;
    var11['VOICE_BACKEND_VERSION'] = var14;
    var13 = 'VOICE_BACKEND_VERSION';
    var11[var14] = var13;
    var14 = 17;
    var11['CHANNEL_OPTIONS_UPDATE'] = var14;
    var13 = 'CHANNEL_OPTIONS_UPDATE';
    var11[var14] = var13;
    var14 = 18;
    var11['FLAGS'] = var14;
    var13 = 'FLAGS';
    var11[var14] = var13;
    var13 = 20;
    var11['PLATFORM'] = var13;
    var14 = 'PLATFORM';
    var11[var13] = var14;
    var19 = 21;
    var11['DAVE_PROTOCOL_PREPARE_TRANSITION'] = var19;
    var14 = 'DAVE_PROTOCOL_PREPARE_TRANSITION';
    var11[var19] = var14;
    var19 = 22;
    var11['DAVE_PROTOCOL_EXECUTE_TRANSITION'] = var19;
    var14 = 'DAVE_PROTOCOL_EXECUTE_TRANSITION';
    var11[var19] = var14;
    var19 = 23;
    var11['DAVE_PROTOCOL_READY_FOR_TRANSITION'] = var19;
    var14 = 'DAVE_PROTOCOL_READY_FOR_TRANSITION';
    var11[var19] = var14;
    var19 = 24;
    var11['DAVE_PROTOCOL_PREPARE_EPOCH'] = var19;
    var14 = 'DAVE_PROTOCOL_PREPARE_EPOCH';
    var11[var19] = var14;
    var19 = 25;
    var11['MLS_EXTERNAL_SENDER_PACKAGE'] = var19;
    var14 = 'MLS_EXTERNAL_SENDER_PACKAGE';
    var11[var19] = var14;
    var19 = 26;
    var11['MLS_KEY_PACKAGE'] = var19;
    var14 = 'MLS_KEY_PACKAGE';
    var11[var19] = var14;
    var19 = 27;
    var11['MLS_PROPOSALS'] = var19;
    var14 = 'MLS_PROPOSALS';
    var11[var19] = var14;
    var19 = 28;
    var11['MLS_COMMIT_WELCOME'] = var19;
    var14 = 'MLS_COMMIT_WELCOME';
    var11[var19] = var14;
    var19 = 29;
    var11['MLS_PREPARE_COMMIT_TRANSITION'] = var19;
    var14 = 'MLS_PREPARE_COMMIT_TRANSITION';
    var11[var19] = var14;
    var19 = 30;
    var11['MLS_WELCOME'] = var19;
    var14 = 'MLS_WELCOME';
    var11[var19] = var14;
    var19 = 31;
    var11['MLS_INVALID_COMMIT_WELCOME'] = var19;
    var14 = 'MLS_INVALID_COMMIT_WELCOME';
    var11[var19] = var14;
    var19 = 32;
    var11['CLIENT_CANNOT_REACH_RTC_SERVER'] = var19;
    var14 = 'CLIENT_CANNOT_REACH_RTC_SERVER';
    var11[var19] = var14;
    var _closure1_slot12 = var11;
    var11 = {};
    var19 = 4004;
    var11['AUTHENTICATION_FAILED'] = var19;
    var14 = 'AUTHENTICATION_FAILED';
    var11[var19] = var14;
    var19 = 4006;
    var11['INVALID_SESSION'] = var19;
    var14 = 'INVALID_SESSION';
    var11[var19] = var14;
    var19 = 4011;
    var11['SERVER_NOT_FOUND'] = var19;
    var14 = 'SERVER_NOT_FOUND';
    var11[var19] = var14;
    var19 = 4015;
    var11['SERVER_CRASH'] = var19;
    var14 = 'SERVER_CRASH';
    var11[var19] = var14;
    var19 = 4016;
    var11['CANCELED'] = var19;
    var14 = 'CANCELED';
    var11[var19] = var14;
    var19 = 4800;
    var11['HEARTBEAT_TIMEOUT'] = var19;
    var14 = 'HEARTBEAT_TIMEOUT';
    var11[var19] = var14;
    var19 = 4801;
    var11['UNRESUMABLE'] = var19;
    var14 = 'UNRESUMABLE';
    var11[var19] = var14;
    var19 = 4802;
    var11['RESET_BACKOFF'] = var19;
    var14 = 'RESET_BACKOFF';
    var11[var19] = var14;
    var _closure1_slot13 = var11;
    var11 = {};
    var11['DISCONNECTED'] = var18;
    var14 = 'DISCONNECTED';
    var11[var18] = var14;
    var11['CONNECTING'] = var12;
    var14 = 'CONNECTING';
    var11[var12] = var14;
    var11['IDENTIFYING'] = var17;
    var14 = 'IDENTIFYING';
    var11[var17] = var14;
    var11['RESUMING'] = var16;
    var14 = 'RESUMING';
    var11[var16] = var14;
    var11['CONNECTED'] = var15;
    var14 = 'CONNECTED';
    var11[var15] = var14;
    var11['RECONNECTING'] = var10;
    var14 = 'RECONNECTING';
    var11[var10] = var14;
    var _closure1_slot14 = var11;
    var11 = var7[var2];
    var11 = var9.bind(var1)(var11);
    var11 = var11.Millis;
    var11 = var11.SECOND;
    var11 = var13 * var11;
    var _closure1_slot15 = var11;
    var11 = var7[var2];
    var11 = var9.bind(var1)(var11);
    var11 = var11.Millis;
    var11 = var11.MINUTE;
    var11 = var12 * var11;
    var _closure1_slot16 = var11;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.SECOND;
    var2 = var10 * var2;
    var _closure1_slot17 = var2;
    var2 = {};
    var10 = 'connecting';
    var2['Connecting'] = var10;
    var10 = 'connect';
    var2['Connect'] = var10;
    var10 = 'disconnect';
    var2['Disconnect'] = var10;
    var10 = 'resuming';
    var2['Resuming'] = var10;
    var10 = 'ready';
    var2['Ready'] = var10;
    var10 = 'speaking';
    var2['Speaking'] = var10;
    var10 = 'video';
    var2['Video'] = var10;
    var10 = 'ping';
    var2['Ping'] = var10;
    var10 = 'client-connect';
    var2['ClientConnect'] = var10;
    var10 = 'client-disconnect';
    var2['ClientDisconnect'] = var10;
    var10 = 'codecs';
    var2['Codecs'] = var10;
    var10 = 'media-session-id';
    var2['MediaSessionId'] = var10;
    var10 = 'media-sink-wants';
    var2['MediaSinkWants'] = var10;
    var10 = 'voice-backend-version';
    var2['VoiceBackendVersion'] = var10;
    var10 = 'keyframe-interval';
    var2['KeyframeInterval'] = var10;
    var10 = 'update-secure-frames-protocol';
    var2['ChannelOptionsUpdateSecureFramesProtocol'] = var10;
    var10 = 'flags';
    var2['Flags'] = var10;
    var10 = 'platform';
    var2['Platform'] = var10;
    var10 = 'sdp';
    var2['SDP'] = var10;
    var10 = 'encryption';
    var2['Encryption'] = var10;
    var10 = 'bandwidth-estimation-experiment';
    var2['BandwidthEstimationExperiment'] = var10;
    var10 = 'secure-frames-init';
    var2['SecureFramesInit'] = var10;
    var10 = 'secure-frames-prepare-transition';
    var2['SecureFramesPrepareTransition'] = var10;
    var10 = 'secure-frames-execute-transition';
    var2['SecureFramesExecuteTransition'] = var10;
    var10 = 'secure-frames-prepare-epoch';
    var2['SecureFramesPrepareEpoch'] = var10;
    var10 = 'mls-external-sender-package';
    var2['MLSExternalSenderPackage'] = var10;
    var10 = 'mls-proposals';
    var2['MLSProposals'] = var10;
    var10 = 'mls-prepare-commit-transition';
    var2['MLSPrepareCommitTransition'] = var10;
    var10 = 'mls-welcome';
    var2['MLSWelcome'] = var10;
    var _closure1_slot18 = var2;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var4 = function(arg1) {
        var4 = function RTCControlSocket(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var8 = arguments[1];
                var3 = this;
                var6 = undefined;
                if(!(var8 === var6)) { _fun0006_ip = 25; continue _fun0006 }
 12:
                var1 = _closure1_slot9;
                var8 = var1.DEFAULT;
 25:
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var6)(var3, var2);
                var1 = _closure1_slot6;
                var11 = var1.bind(var6)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot19;
                var1 = var1.bind(var6)();
                if(var1) { _fun0006_ip = 82; continue _fun0006 }
 69:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var3, var6);
                _fun0006_ip = 120; continue _fun0006;
 82:
                var4 = global;
                var10 = var4.Reflect;
                var9 = var10.construct;
                var4 = _closure1_slot6;
                var4 = var4.bind(var6)(var3);
                var7 = var4.constructor;
                var4 = new Array(0);
                var1 = var9.bind(var10)(var11, var4, var7);
 120:
                var1 = var2.bind(var6)(var3, var1);
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 8;
                var2 = var7[var2];
                var10 = var4.bind(var6)(var2);
                var2 = var10.prototype;
                var3 = Object.create(var2, {constructor: {value: var10}});
                var14 = 1000;
                var13 = 5000;
                var15 = var3;
                var2 = new var15[var10](var14, var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['backoff'] = var2;
                var3 = 0;
                var1['serverVersion'] = var3;
                var2 = arg1;
                var1['url'] = var2;
                var2 = 9;
                var2 = var7[var2];
                var6 = var4.bind(var6)(var2);
                var2 = global;
                var2 = var2.HermesInternal;
                var7 = var2.concat;
                var4 = 'RTCControlSocket(';
                var2 = ')';
                var14 = var7.bind(var4)(var8, var2);
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var15 = var4;
                var2 = new var15[var6](var14, var13);
                var2 = var2 instanceof Object ? var2 : var4;
                var1['logger'] = var2;
                var6 = var1.logger;
                var2 = var6.enableNativeLogger;
                var4 = true;
                var2 = var2.bind(var6)(var4);
                var2 = null;
                var1['webSocket'] = var2;
                var5 = _closure1_slot14;
                var5 = var5.DISCONNECTED;
                var1['connectionState'] = var5;
                var1['helloTimeout'] = var2;
                var1['lastHeartbeatAckTime'] = var2;
                var1['heartbeatInterval'] = var2;
                var1['heartbeater'] = var2;
                var1['heartbeatAck'] = var4;
                var1['expeditedHeartbeatTimeout'] = var2;
                var4 = 1;
                var1['heartbeatIntervalModifier'] = var4;
                var1['connectionStartTime'] = var3;
                var1['lastRecvSeqNum'] = var2;
                var1['sessionId'] = var2;
                var1['serverId'] = var2;
                var1['channelId'] = var2;
                var1['token'] = var2;
                var2 = false;
                var1['resumable'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'createWebSocket';
        var5['key'] = var1;
        var1 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = this;
                var _closure3_slot0 = var4;
                var6 = var4.logger;
                var5 = var6.info;
                var8 = var4.url;
                var3 = global;
                var1 = var3.HermesInternal;
                var7 = var1.concat;
                var1 = '[CONNECT] ';
                var1 = var7.bind(var1)(var8);
                var1 = var5.bind(var6)(var1);
                var5 = var4.webSocket;
                var1 = null;
                if(!(var1 !== var5)) { _fun0007_ip = 105; continue _fun0007 }
 66:
                var6 = var4.logger;
                var5 = var6.error;
                var1 = 'Connect called with already existing websocket';
                var1 = var5.bind(var6)(var1);
                var5 = var4.cleanupWebSocket;
                var1 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.close;
                    var1 = 4000;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var5.bind(var4)(var1);
 105:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 10;
                var6 = var6[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var6);
                var6 = var7.now;
                var6 = var6.bind(var7)();
                var4['connectionStartTime'] = var6;
                var7 = var3.setTimeout;
                var6 = _closure1_slot15;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var6 = _closure3_slot0;
                    var2 = var6.connectionStartTime;
                    var7 = var3 - var2;
                    var5 = var6.handleClose;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = 'The connection timed out after ';
                    var2 = ' ms - did not receive OP_HELLO in time.';
                    var4 = var4.bind(var3)(var7, var2);
                    var3 = false;
                    var2 = 0;
                    var2 = var5.bind(var6)(var3, var2, var4);
                    return var1;
                };
                var5 = var7.bind(var1)(var5, var6);
                var4['helloTimeout'] = var5;
                var6 = var3.WebSocket;
                var8 = var4.url;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var5 = '';
                var3 = '?v=9';
                var10 = var7.bind(var5)(var8, var3);
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var11 = var5;
                var3 = new var11[var6](var10, var9);
                var3 = var3 instanceof Object ? var3 : var5;
                var4['webSocket'] = var3;
                var4 = 'arraybuffer';
                var3['binaryType'] = var4;
                var4 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var2 = _closure3_slot0;
                        var4 = var2.connectionState;
                        var2 = _closure1_slot14;
                        var2 = var2.CONNECTING;
                        if(!(var4 !== var2)) { _fun0008_ip = 72; continue _fun0008 }
 30:
                        var2 = _closure3_slot0;
                        var4 = var2.connectionState;
                        var2 = _closure1_slot14;
                        var2 = var2.RECONNECTING;
                        if(!(var4 === var2)) { _fun0008_ip = 97; continue _fun0008 }
 54:
                        var4 = _closure3_slot0;
                        var2 = var4.doResumeOrClose;
                        var2 = var2.bind(var4)();
                        _fun0008_ip = 97; continue _fun0008;
 72:
                        var5 = _closure3_slot0;
                        var4 = var5.emit;
                        var2 = _closure1_slot18;
                        var2 = var2.Connect;
                        var2 = var4.bind(var5)(var2);
 97:
                        var5 = _closure3_slot0;
                        var1 = _closure1_slot14;
                        var1 = var1.CONNECTED;
                        var5['connectionState'] = var1;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.now;
                        var4 = var2.bind(var4)();
                        var2 = var5.connectionStartTime;
                        var8 = var4 - var2;
                        var7 = var5.logger;
                        var6 = var7.info;
                        var16 = var5.url;
                        var2 = global;
                        var4 = var2.HermesInternal;
                        var11 = var4.concat;
                        var17 = '[CONNECTED] ';
                        var15 = ' in ';
                        var13 = ' ms';
                        var14 = var8;
                        var4 = var17[var11](var16, var15, var14, var13, var12);
                        var4 = var6.bind(var7)(var4);
                        var4 = var5.emit;
                        var3 = _closure1_slot18;
                        var3 = var3.Ping;
                        var7 = var2.Math;
                        var6 = var7.round;
                        var2 = 2;
                        var2 = var8 / var2;
                        var2 = var6.bind(var7)(var2);
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    }
                };
                var3['onopen'] = var4;
                var4 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var4 = _closure3_slot0;
                        var3 = var4.parseWebSocketMessage;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        var8 = var2.op;
                        var4 = var2.seq;
                        var3 = var2.d;
                        if(!var4) { _fun0009_ip = 52; continue _fun0009 }
 42:
                        var2 = _closure3_slot0;
                        var2['lastRecvSeqNum'] = var4;
 52:
                        var4 = _closure1_slot8;
                        var4 = var4.isLoggingGatewayEvents;
                        if(!var4) { _fun0009_ip = 254; continue _fun0009 }
 71:
                        var4 = global;
                        var5 = var4.Uint8Array;
                        var5 = var3 instanceof var5;
                        if(var5) { _fun0009_ip = 155; continue _fun0009 }
 86:
                        var5 = _closure3_slot0;
                        var7 = var5.logger;
                        var6 = var7.info;
                        var9 = var4.JSON;
                        var5 = var9.stringify;
                        var11 = var5.bind(var9)(var3);
                        var5 = var4.HermesInternal;
                        var10 = var5.concat;
                        var9 = '~> ';
                        var5 = ': ';
                        var5 = var10.bind(var9)(var8, var5, var11);
                        var5 = var6.bind(var7)(var5);
                        _fun0009_ip = 254; continue _fun0009;
 155:
                        var7 = new Array(0);
                        var15 = 0;
                        var17 = var7;
                        var16 = var3;
                        var5 = arraySpread(var17, var16, var15);
                        var6 = var7.map;
                        var5 = function(arg1) {
                            var3 = arg1;
                            var2 = var3.toString;
                            var1 = 16;
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.padStart;
                            var2 = 2;
                            var1 = '0';
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.join;
                        var5 = '';
                        var10 = var6.bind(var7)(var5);
                        var5 = _closure3_slot0;
                        var6 = var5.logger;
                        var5 = var6.info;
                        var4 = var4.HermesInternal;
                        var9 = var4.concat;
                        var7 = '~> ';
                        var4 = ': 0x';
                        var4 = var9.bind(var7)(var8, var4, var10);
                        var4 = var5.bind(var6)(var4);
 254:
                        var4 = _closure1_slot12;
                        var4 = var4.HELLO;
                        if(!(var4 !== var8)) { _fun0009_ip = 2178; continue _fun0009 }
 271:
                        var4 = _closure1_slot12;
                        var4 = var4.READY;
                        if(!(var4 !== var8)) { _fun0009_ip = 2159; continue _fun0009 }
 288:
                        var4 = _closure1_slot12;
                        var4 = var4.RESUMED;
                        if(!(var4 !== var8)) { _fun0009_ip = 2140; continue _fun0009 }
 305:
                        var4 = _closure1_slot12;
                        var4 = var4.SELECT_PROTOCOL_ACK;
                        if(!(var4 !== var8)) { _fun0009_ip = 1834; continue _fun0009 }
 322:
                        var4 = _closure1_slot12;
                        var4 = var4.SPEAKING;
                        if(!(var4 !== var8)) { _fun0009_ip = 1743; continue _fun0009 }
 339:
                        var4 = _closure1_slot12;
                        var4 = var4.HEARTBEAT;
                        if(!(var4 !== var8)) { _fun0009_ip = 1724; continue _fun0009 }
 356:
                        var4 = _closure1_slot12;
                        var4 = var4.HEARTBEAT_ACK;
                        if(!(var4 !== var8)) { _fun0009_ip = 1702; continue _fun0009 }
 373:
                        var4 = _closure1_slot12;
                        var4 = var4.VIDEO;
                        if(!(var4 !== var8)) { _fun0009_ip = 1632; continue _fun0009 }
 390:
                        var4 = _closure1_slot12;
                        var4 = var4.CLIENT_CONNECT;
                        if(!(var4 !== var8)) { _fun0009_ip = 1595; continue _fun0009 }
 407:
                        var4 = _closure1_slot12;
                        var4 = var4.CLIENT_DISCONNECT;
                        if(!(var4 !== var8)) { _fun0009_ip = 1558; continue _fun0009 }
 424:
                        var4 = _closure1_slot12;
                        var4 = var4.SESSION_UPDATE;
                        if(!(var4 !== var8)) { _fun0009_ip = 1400; continue _fun0009 }
 441:
                        var4 = _closure1_slot12;
                        var4 = var4.MEDIA_SINK_WANTS;
                        if(!(var4 !== var8)) { _fun0009_ip = 1369; continue _fun0009 }
 458:
                        var4 = _closure1_slot12;
                        var4 = var4.VOICE_BACKEND_VERSION;
                        if(!(var4 !== var8)) { _fun0009_ip = 1294; continue _fun0009 }
 475:
                        var4 = _closure1_slot12;
                        var4 = var4.FLAGS;
                        if(!(var4 !== var8)) { _fun0009_ip = 1221; continue _fun0009 }
 492:
                        var4 = _closure1_slot12;
                        var4 = var4.PLATFORM;
                        if(!(var4 !== var8)) { _fun0009_ip = 1146; continue _fun0009 }
 509:
                        var4 = _closure1_slot12;
                        var4 = var4.DAVE_PROTOCOL_PREPARE_TRANSITION;
                        if(!(var4 !== var8)) { _fun0009_ip = 1071; continue _fun0009 }
 526:
                        var4 = _closure1_slot12;
                        var4 = var4.DAVE_PROTOCOL_EXECUTE_TRANSITION;
                        if(!(var4 !== var8)) { _fun0009_ip = 1019; continue _fun0009 }
 543:
                        var4 = _closure1_slot12;
                        var4 = var4.DAVE_PROTOCOL_PREPARE_EPOCH;
                        if(!(var4 !== var8)) { _fun0009_ip = 944; continue _fun0009 }
 560:
                        var4 = _closure1_slot12;
                        var4 = var4.MLS_EXTERNAL_SENDER_PACKAGE;
                        if(!(var4 !== var8)) { _fun0009_ip = 913; continue _fun0009 }
 577:
                        var4 = _closure1_slot12;
                        var4 = var4.MLS_PROPOSALS;
                        if(!(var4 !== var8)) { _fun0009_ip = 882; continue _fun0009 }
 594:
                        var4 = _closure1_slot12;
                        var4 = var4.MLS_PREPARE_COMMIT_TRANSITION;
                        if(!(var4 !== var8)) { _fun0009_ip = 778; continue _fun0009 }
 611:
                        var4 = _closure1_slot12;
                        var4 = var4.MLS_WELCOME;
                        if(!(var4 !== var8)) { _fun0009_ip = 674; continue _fun0009 }
 625:
                        var4 = _closure3_slot0;
                        var6 = var4.logger;
                        var5 = var6.info;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var7 = var4.concat;
                        var4 = 'Unhandled op ';
                        var4 = var7.bind(var4)(var8);
                        var4 = var5.bind(var6)(var4);
                        _fun0009_ip = 2205; continue _fun0009;
 674:
                        var4 = global;
                        var8 = var4.DataView;
                        var17 = var3.buffer;
                        var16 = var3.byteOffset;
                        var5 = var8.prototype;
                        var6 = Object.create(var5, {constructor: {value: var8}});
                        var5 = 2;
                        var18 = var6;
                        var15 = var5;
                        var4 = new var18[var8](var17, var16, var15, var14);
                        var8 = var4 instanceof Object ? var4 : var6;
                        var7 = var8.getUint16;
                        var6 = 0;
                        var4 = false;
                        var8 = var7.bind(var8)(var6, var4);
                        var4 = var3.slice;
                        var7 = var4.bind(var3)(var5);
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var4 = _closure1_slot18;
                        var4 = var4.MLSWelcome;
                        var4 = var5.bind(var6)(var4, var8, var7);
                        _fun0009_ip = 2205; continue _fun0009;
 778:
                        var4 = global;
                        var8 = var4.DataView;
                        var17 = var3.buffer;
                        var16 = var3.byteOffset;
                        var5 = var8.prototype;
                        var6 = Object.create(var5, {constructor: {value: var8}});
                        var5 = 2;
                        var18 = var6;
                        var15 = var5;
                        var4 = new var18[var8](var17, var16, var15, var14);
                        var8 = var4 instanceof Object ? var4 : var6;
                        var7 = var8.getUint16;
                        var6 = 0;
                        var4 = false;
                        var8 = var7.bind(var8)(var6, var4);
                        var4 = var3.slice;
                        var7 = var4.bind(var3)(var5);
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var4 = _closure1_slot18;
                        var4 = var4.MLSPrepareCommitTransition;
                        var4 = var5.bind(var6)(var4, var8, var7);
                        _fun0009_ip = 2205; continue _fun0009;
 882:
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var4 = _closure1_slot18;
                        var4 = var4.MLSProposals;
                        var4 = var5.bind(var6)(var4, var3);
                        _fun0009_ip = 2205; continue _fun0009;
 913:
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var4 = _closure1_slot18;
                        var4 = var4.MLSExternalSenderPackage;
                        var4 = var5.bind(var6)(var4, var3);
                        _fun0009_ip = 2205; continue _fun0009;
 944:
                        var4 = var3.epoch;
                        var6 = null;
                        var4 = var6 != var4;
                        if(!var4) { _fun0009_ip = 969; continue _fun0009 }
 959:
                        var5 = var3.protocol_version;
                        var4 = var6 != var5;
 969:
                        if(!var4) { _fun0009_ip = 2205; continue _fun0009 }
 975:
                        var8 = _closure3_slot0;
                        var7 = var8.emit;
                        var4 = _closure1_slot18;
                        var6 = var4.SecureFramesPrepareEpoch;
                        var5 = var3.epoch;
                        var4 = var3.protocol_version;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        _fun0009_ip = 2205; continue _fun0009;
 1019:
                        var5 = var3.transition_id;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0009_ip = 2205; continue _fun0009 }
 1034:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var4 = _closure1_slot18;
                        var5 = var4.SecureFramesExecuteTransition;
                        var4 = var3.transition_id;
                        var4 = var6.bind(var7)(var5, var4);
                        _fun0009_ip = 2205; continue _fun0009;
 1071:
                        var4 = var3.transition_id;
                        var6 = null;
                        var4 = var6 != var4;
                        if(!var4) { _fun0009_ip = 1096; continue _fun0009 }
 1086:
                        var5 = var3.protocol_version;
                        var4 = var6 != var5;
 1096:
                        if(!var4) { _fun0009_ip = 2205; continue _fun0009 }
 1102:
                        var8 = _closure3_slot0;
                        var7 = var8.emit;
                        var4 = _closure1_slot18;
                        var6 = var4.SecureFramesPrepareTransition;
                        var5 = var3.transition_id;
                        var4 = var3.protocol_version;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        _fun0009_ip = 2205; continue _fun0009;
 1146:
                        var4 = var3.platform;
                        var6 = null;
                        var4 = var6 != var4;
                        if(!var4) { _fun0009_ip = 1171; continue _fun0009 }
 1161:
                        var5 = var3.user_id;
                        var4 = var6 != var5;
 1171:
                        if(!var4) { _fun0009_ip = 2205; continue _fun0009 }
 1177:
                        var8 = _closure3_slot0;
                        var7 = var8.emit;
                        var4 = _closure1_slot18;
                        var6 = var4.Platform;
                        var5 = var3.user_id;
                        var4 = var3.platform;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        _fun0009_ip = 2205; continue _fun0009;
 1221:
                        var4 = var3.flags;
                        var6 = null;
                        var4 = var6 != var4;
                        if(!var4) { _fun0009_ip = 1245; continue _fun0009 }
 1235:
                        var5 = var3.user_id;
                        var4 = var6 != var5;
 1245:
                        if(!var4) { _fun0009_ip = 2205; continue _fun0009 }
 1251:
                        var8 = _closure3_slot0;
                        var7 = var8.emit;
                        var4 = _closure1_slot18;
                        var6 = var4.Flags;
                        var5 = var3.user_id;
                        var4 = var3.flags;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        _fun0009_ip = 2205; continue _fun0009;
 1294:
                        var4 = var3.voice;
                        var6 = null;
                        var4 = var6 != var4;
                        if(!var4) { _fun0009_ip = 1319; continue _fun0009 }
 1309:
                        var5 = var3.rtc_worker;
                        var4 = var6 != var5;
 1319:
                        if(!var4) { _fun0009_ip = 2205; continue _fun0009 }
 1325:
                        var8 = _closure3_slot0;
                        var7 = var8.emit;
                        var4 = _closure1_slot18;
                        var6 = var4.VoiceBackendVersion;
                        var5 = var3.voice;
                        var4 = var3.rtc_worker;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        _fun0009_ip = 2205; continue _fun0009;
 1369:
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var4 = _closure1_slot18;
                        var4 = var4.MediaSinkWants;
                        var4 = var5.bind(var6)(var4, var3);
                        _fun0009_ip = 2205; continue _fun0009;
 1400:
                        var4 = var3.audio_codec;
                        var5 = null;
                        var4 = var5 == var4;
                        if(!var4) { _fun0009_ip = 1425; continue _fun0009 }
 1415:
                        var6 = var3.video_codec;
                        var4 = var5 == var6;
 1425:
                        if(var4) { _fun0009_ip = 1467; continue _fun0009 }
 1428:
                        var9 = _closure3_slot0;
                        var8 = var9.emit;
                        var4 = _closure1_slot18;
                        var7 = var4.Codecs;
                        var6 = var3.audio_codec;
                        var4 = var3.video_codec;
                        var4 = var8.bind(var9)(var7, var6, var4);
 1467:
                        var4 = var3.media_session_id;
                        if(!(var5 != var4)) { _fun0009_ip = 1509; continue _fun0009 }
 1477:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var4 = _closure1_slot18;
                        var5 = var4.MediaSessionId;
                        var4 = var3.media_session_id;
                        var4 = var6.bind(var7)(var5, var4);
 1509:
                        var4 = var3.keyframe_interval;
                        if(!var4) { _fun0009_ip = 2205; continue _fun0009 }
 1521:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var4 = _closure1_slot18;
                        var5 = var4.KeyframeInterval;
                        var4 = var3.keyframe_interval;
                        var4 = var6.bind(var7)(var5, var4);
                        _fun0009_ip = 2205; continue _fun0009;
 1558:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var4 = _closure1_slot18;
                        var5 = var4.ClientDisconnect;
                        var4 = var3.user_id;
                        var4 = var6.bind(var7)(var5, var4);
                        _fun0009_ip = 2205; continue _fun0009;
 1595:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var4 = _closure1_slot18;
                        var5 = var4.ClientConnect;
                        var4 = var3.user_ids;
                        var4 = var6.bind(var7)(var5, var4);
                        _fun0009_ip = 2205; continue _fun0009;
 1632:
                        var10 = _closure3_slot0;
                        var9 = var10.emit;
                        var4 = _closure1_slot18;
                        var8 = var4.Video;
                        var16 = var3.user_id;
                        var15 = var3.audio_ssrc;
                        var14 = var3.video_ssrc;
                        var12 = _closure1_slot23;
                        var11 = var3.streams;
                        var4 = undefined;
                        var13 = var12.bind(var4)(var11);
                        var18 = var10;
                        var17 = var8;
                        var4 = var18[var9](var17, var16, var15, var14, var13, var12);
                        _fun0009_ip = 2205; continue _fun0009;
 1702:
                        var5 = _closure3_slot0;
                        var4 = var5.handleHeartbeatAck;
                        var4 = var4.bind(var5)(var3);
                        _fun0009_ip = 2205; continue _fun0009;
 1724:
                        var5 = _closure3_slot0;
                        var4 = var5.sendHeartbeat;
                        var4 = var4.bind(var5)();
                        _fun0009_ip = 2205; continue _fun0009;
 1743:
                        var4 = var3.speaking;
                        var6 = 'boolean';
                        var5 = typeof var4;
                        var9 = var4;
                        if(!(var6 === var5)) { _fun0009_ip = 1787; continue _fun0009 }
 1763:
                        var5 = _closure1_slot11;
                        if(var4) { _fun0009_ip = 1778; continue _fun0009 }
 1770:
                        var4 = var5.NONE;
                        _fun0009_ip = 1784; continue _fun0009;
 1778:
                        var4 = var5.VOICE;
 1784:
                        var9 = var4;
 1787:
                        var8 = _closure3_slot0;
                        var7 = var8.emit;
                        var4 = _closure1_slot18;
                        var17 = var4.Speaking;
                        var16 = var3.user_id;
                        var15 = var3.ssrc;
                        var18 = var8;
                        var14 = var9;
                        var4 = var18[var7](var17, var16, var15, var14, var13);
                        _fun0009_ip = 2205; continue _fun0009;
 1834:
                        var4 = var3.bandwidth_estimation_experiment;
                        if(!var4) { _fun0009_ip = 1875; continue _fun0009 }
 1843:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var4 = _closure1_slot18;
                        var5 = var4.BandwidthEstimationExperiment;
                        var4 = var3.bandwidth_estimation_experiment;
                        var4 = var6.bind(var7)(var5, var4);
 1875:
                        var8 = _closure3_slot0;
                        var7 = var8.emit;
                        var4 = _closure1_slot18;
                        var6 = var4.Codecs;
                        var5 = var3.audio_codec;
                        var4 = var3.video_codec;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        var4 = var3.media_session_id;
                        if(!var4) { _fun0009_ip = 1955; continue _fun0009 }
 1923:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var4 = _closure1_slot18;
                        var5 = var4.MediaSessionId;
                        var4 = var3.media_session_id;
                        var4 = var6.bind(var7)(var5, var4);
 1955:
                        var4 = var3.sdp;
                        if(var4) { _fun0009_ip = 2014; continue _fun0009 }
 1964:
                        var4 = var3.mode;
                        if(!var4) { _fun0009_ip = 2046; continue _fun0009 }
 1972:
                        var8 = _closure3_slot0;
                        var7 = var8.emit;
                        var4 = _closure1_slot18;
                        var6 = var4.Encryption;
                        var5 = var3.mode;
                        var4 = var3.secret_key;
                        var4 = var7.bind(var8)(var6, var5, var4);
                        _fun0009_ip = 2046; continue _fun0009;
 2014:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var4 = _closure1_slot18;
                        var5 = var4.SDP;
                        var4 = var3.sdp;
                        var4 = var6.bind(var7)(var5, var4);
 2046:
                        var4 = var3.keyframe_interval;
                        if(!var4) { _fun0009_ip = 2087; continue _fun0009 }
 2055:
                        var7 = _closure3_slot0;
                        var6 = var7.emit;
                        var4 = _closure1_slot18;
                        var5 = var4.KeyframeInterval;
                        var4 = var3.keyframe_interval;
                        var4 = var6.bind(var7)(var5, var4);
 2087:
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var2 = _closure1_slot18;
                        var4 = var2.SecureFramesInit;
                        var2 = var3.dave_protocol_version;
                        if(var2) { _fun0009_ip = 2120; continue _fun0009 }
 2118:
                        var2 = 0;
 2120:
                        var2 = var5.bind(var6)(var4, var2);
                        var4 = _closure3_slot0;
                        var2 = true;
                        var4['resumable'] = var2;
                        _fun0009_ip = 2205; continue _fun0009;
 2140:
                        var4 = _closure3_slot0;
                        var2 = var4.handleResumed;
                        var2 = var2.bind(var4)(var3);
                        _fun0009_ip = 2205; continue _fun0009;
 2159:
                        var4 = _closure3_slot0;
                        var2 = var4.handleReady;
                        var2 = var2.bind(var4)(var3);
                        _fun0009_ip = 2205; continue _fun0009;
 2178:
                        var2 = _closure3_slot0;
                        var1 = var2.clearHelloTimeout;
                        var1 = var1.bind(var2)();
                        var1 = var2.handleHello;
                        var1 = var1.bind(var2)(var3);
 2205:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['onmessage'] = var4;
                var4 = function() {
                    var5 = _closure3_slot0;
                    var4 = var5.handleClose;
                    var3 = false;
                    var2 = 0;
                    var1 = 'An error with the websocket occurred';
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var3['onerror'] = var4;
                var2 = function(arg1) {
                    var1 = arg1;
                    var5 = var1.wasClean;
                    var4 = var1.code;
                    var3 = var1.reason;
                    var2 = _closure3_slot0;
                    var1 = var2.handleClose;
                    var1 = var1.bind(var2)(var5, var4, var3);
                    return var1;
                };
                var3['onclose'] = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(38);
        var1[0] = var5;
        var5 = {};
        var7 = 'send';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var9 = arguments[1];
                var5 = this;
                var1 = undefined;
                if(!(var9 === var1)) { _fun0010_ip = 14; continue _fun0010 }
 12:
                var9 = null;
 14:
                var3 = undefined;
                var2 = undefined;
                var6 = var5.webSocket;
                var3 = var6;
                var4 = null;
                if(!(var4 != var6)) { _fun0010_ip = 168; continue _fun0010 }
 36:
                var4 = var3;
                var7 = var4.readyState;
                var4 = global;
                var6 = var4.WebSocket;
                var6 = var6.OPEN;
                if(!(var7 === var6)) { _fun0010_ip = 168; continue _fun0010 }
 63:
                var8 = var4.JSON;
                var7 = var8.stringify;
                var6 = {};
                var10 = arg1;
                var6['op'] = var10;
                var6['d'] = var9;
                var2 = var7.bind(var8)(var6);
                var6 = _closure1_slot8;
                var6 = var6.isLoggingGatewayEvents;
                if(!var6) { _fun0010_ip = 150; continue _fun0010 }
 109:
                var6 = var5.logger;
                var5 = var6.info;
                var8 = var2;
                var4 = var4.HermesInternal;
                var7 = var4.concat;
                var4 = '<~ ';
                var4 = var7.bind(var4)(var8);
                var4 = var5.bind(var6)(var4);
 150: // try_start_0
                var4 = var3;
                var3 = var4.send;
                var2 = var3.bind(var4)(var2);
 164: // try_end0
                _fun0010_ip = 168; continue _fun0010;
 166: // catch_target0
                CatchBlockStart(arg_register=1);
 168:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'sendBinary';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = arg1;
                var5 = arg2;
                var1 = undefined;
                var3 = undefined;
                var2 = undefined;
                var6 = this;
                var7 = var6.webSocket;
                var3 = var7;
                var6 = null;
                if(!(var6 != var7)) { _fun0011_ip = 146; continue _fun0011 }
 30:
                var6 = var3;
                var8 = var6.readyState;
                var6 = global;
                var7 = var6.WebSocket;
                var7 = var7.OPEN;
                if(!(var8 === var7)) { _fun0011_ip = 146; continue _fun0011 }
 57:
                var9 = var6.Uint8Array;
                var7 = var5;
                var5 = var7.byteLength;
                var6 = 1;
                var11 = var5 + var6;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var12 = var8;
                var5 = new var12[var9](var11, var10);
                var5 = var5 instanceof Object ? var5 : var8;
                var2 = var5;
                var8 = var4;
                var4 = 0;
                var5[var4] = var8;
                var4 = var5.set;
                var4 = var4.bind(var5)(var7, var6);
 122: // try_start_0
                var4 = var3;
                var3 = var4.send;
                var2 = var2.buffer;
                var2 = var3.bind(var4)(var2);
 142: // try_end0
                _fun0011_ip = 146; continue _fun0011;
 144: // catch_target0
                CatchBlockStart(arg_register=1);
 146:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'ping';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.sendHeartbeat;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'doResumeOrClose';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = this;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var2);
                var2 = var5.now;
                var2 = var2.bind(var5)();
                var5 = var3.serverId;
                var6 = null;
                if(!(var6 !== var5)) { _fun0012_ip = 115; continue _fun0012 }
 49:
                var5 = var3.channelId;
                if(!(var6 !== var5)) { _fun0012_ip = 115; continue _fun0012 }
 58:
                var5 = var3.token;
                if(!(var6 !== var5)) { _fun0012_ip = 115; continue _fun0012 }
 68:
                var5 = var3.sessionId;
                if(!(var6 !== var5)) { _fun0012_ip = 115; continue _fun0012 }
 78:
                var5 = var3.resumable;
                if(!var5) { _fun0012_ip = 115; continue _fun0012 }
 87:
                var5 = var3.lastHeartbeatAckTime;
                if(!(var6 != var5)) { _fun0012_ip = 148; continue _fun0012 }
 97:
                var5 = var3.lastHeartbeatAckTime;
                var6 = var2 - var5;
                var5 = _closure1_slot16;
                if(!(!(var6 <= var5))) { _fun0012_ip = 148; continue _fun0012 }
 115:
                var7 = var3.disconnect;
                var4 = _closure1_slot13;
                var6 = var4.UNRESUMABLE;
                var5 = false;
                var4 = 'Cannot resume connection.';
                var4 = var7.bind(var3)(var5, var6, var4);
                _fun0012_ip = 166; continue _fun0012;
 148:
                var4 = var3.doResume;
                var4 = var4.bind(var3)();
                var3['lastHeartbeatAckTime'] = var2;
 166:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'doResume';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = this;
                var1 = var4.lastRecvSeqNum;
                var6 = null;
                var2 = var6 != var1;
                var5 = -1;
                if(!var2) { _fun0013_ip = 27; continue _fun0013 }
 24:
                var5 = var1;
 27:
                var3 = var4.logger;
                var2 = var3.info;
                var1 = var4.serverId;
                var7 = var6 != var1;
                var12 = '';
                var11 = var12;
                if(!var7) { _fun0013_ip = 61; continue _fun0013 }
 58:
                var11 = var1;
 61:
                var1 = var4.channelId;
                var7 = var6 != var1;
                var10 = var12;
                if(!var7) { _fun0013_ip = 79; continue _fun0013 }
 76:
                var10 = var1;
 79:
                var1 = var4.sessionId;
                var6 = var6 != var1;
                if(!var6) { _fun0013_ip = 95; continue _fun0013 }
 92:
                var12 = var1;
 95:
                var1 = global;
                var1 = var1.HermesInternal;
                var9 = var1.concat;
                var20 = '[RESUME] resuming session. serverId=';
                var18 = ' channelId=';
                var16 = ' sessionId=';
                var14 = ' seqAck=';
                var19 = var11;
                var17 = var10;
                var15 = var12;
                var13 = var5;
                var1 = var20[var9](var19, var18, var17, var16, var15, var14, var13, var12);
                var1 = var2.bind(var3)(var1);
                var3 = var4.emit;
                var2 = _closure1_slot18;
                var2 = var2.Resuming;
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot14;
                var2 = var2.RESUMING;
                var4['connectionState'] = var2;
                var3 = var4.send;
                var1 = _closure1_slot12;
                var2 = var1.RESUME;
                var1 = {};
                var6 = var4.token;
                var1['token'] = var6;
                var6 = var4.sessionId;
                var1['session_id'] = var6;
                var6 = var4.serverId;
                var1['server_id'] = var6;
                var6 = var4.channelId;
                var1['channel_id'] = var6;
                var1['seq_ack'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleHello';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var1 = arg1;
                var3 = this;
                var5 = var1.v;
                var6 = null;
                var7 = var6 != var5;
                var4 = 3;
                var2 = var4;
                if(!var7) { _fun0014_ip = 29; continue _fun0014 }
 26:
                var2 = var5;
 29:
                var3['serverVersion'] = var2;
                var2 = var3.serverVersion;
                if(!(!(var2 <= var4))) { _fun0014_ip = 148; continue _fun0014 }
 45:
                var4 = var1.heartbeat_interval;
                var2 = var3.heartbeatIntervalModifier;
                var2 = var4 * var2;
                var3['heartbeatInterval'] = var2;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 11;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var7.bind(var4)(var5);
                var4 = var4.isPlatformEmbedded;
                if(var4) { _fun0014_ip = 218; continue _fun0014 }
 101:
                var8 = global;
                var7 = var8.Math;
                var5 = var7.min;
                var4 = _closure1_slot17;
                var2 = var3.heartbeatInterval;
                if(!(var6 == var2)) { _fun0014_ip = 134; continue _fun0014 }
 128:
                var2 = var8.NaN;
 134:
                var2 = var5.bind(var7)(var4, var2);
                var3['heartbeatInterval'] = var2;
                _fun0014_ip = 218; continue _fun0014;
 148:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var4 = var2.isPlatformEmbedded;
                var2 = 0.1;
                if(!var4) { _fun0014_ip = 202; continue _fun0014 }
 192:
                var2 = 0.25;
 202:
                var1 = var1.heartbeat_interval;
                var1 = var1 * var2;
                var3['heartbeatInterval'] = var1;
 218:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.now;
                var4 = var2.bind(var4)();
                var2 = var3.connectionStartTime;
                var12 = var4 - var2;
                var5 = var3.logger;
                var4 = var5.info;
                var2 = var3.heartbeatInterval;
                var6 = var6 != var2;
                var11 = '??';
                if(!var6) { _fun0014_ip = 295; continue _fun0014 }
 292:
                var11 = var2;
 295:
                var16 = var3.serverVersion;
                var2 = global;
                var2 = var2.HermesInternal;
                var9 = var2.concat;
                var19 = '[HELLO] heartbeat interval: ';
                var17 = ', version: ';
                var15 = ', took ';
                var13 = ' ms';
                var18 = var11;
                var14 = var12;
                var2 = var19[var9](var18, var17, var16, var15, var14, var13, var12);
                var2 = var4.bind(var5)(var2);
                var2 = var3.startHeartbeater;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleReady';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var2 = arg1;
                var10 = this;
                var3 = var10.backoff;
                var1 = var3.succeed;
                var1 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.now;
                var5 = var4.bind(var5)();
                var4 = var10.connectionStartTime;
                var9 = var5 - var4;
                var6 = var10.logger;
                var5 = var6.info;
                var4 = global;
                var4 = var4.HermesInternal;
                var8 = var4.concat;
                var7 = '[READY] took ';
                var4 = ' ms';
                var4 = var8.bind(var7)(var9, var4);
                var4 = var5.bind(var6)(var4);
                var5 = var10.serverVersion;
                var4 = 6;
                if(!(var5 >= var4)) { _fun0015_ip = 150; continue _fun0015 }
 126:
                var6 = var10.send;
                var4 = _closure1_slot12;
                var5 = var4.VOICE_BACKEND_VERSION;
                var4 = {};
                var4 = var6.bind(var10)(var5, var4);
 150:
                var9 = var10.emit;
                var4 = _closure1_slot18;
                var8 = var4.Ready;
                var17 = var2.ip;
                var16 = var2.port;
                var15 = var2.modes;
                var14 = var2.ssrc;
                var11 = _closure1_slot23;
                var3 = var2.streams;
                var13 = var11.bind(var1)(var3);
                var12 = var2.experiments;
                var19 = var10;
                var18 = var8;
                var2 = var19[var9](var18, var17, var16, var15, var14, var13, var12, var11);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'handleResumed';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.backoff;
            var1 = var2.succeed;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'handleClose';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var5 = arg1;
                var4 = arg2;
                var3 = arg3;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var5;
                var _closure3_slot2 = var4;
                var _closure3_slot3 = var3;
                var7 = _closure1_slot14;
                var7 = var7.DISCONNECTED;
                var2['connectionState'] = var7;
                if(var5) { _fun0016_ip = 54; continue _fun0016 }
 52:
                var5 = false;
 54:
                _closure3_slot1 = var5;
                var7 = var2.cleanupWebSocket;
                var7 = var7.bind(var2)();
                var7 = _closure1_slot13;
                var7 = var7.AUTHENTICATION_FAILED;
                if(!(var4 !== var7)) { _fun0016_ip = 326; continue _fun0016 }
 85:
                var7 = _closure1_slot13;
                var7 = var7.SERVER_CRASH;
                if(!(var4 !== var7)) { _fun0016_ip = 326; continue _fun0016 }
 102:
                var7 = _closure1_slot13;
                var7 = var7.SERVER_NOT_FOUND;
                if(!(var4 !== var7)) { _fun0016_ip = 326; continue _fun0016 }
 119:
                var6 = _closure1_slot13;
                var6 = var6.INVALID_SESSION;
                if(!(var4 !== var6)) { _fun0016_ip = 326; continue _fun0016 }
 136:
                var6 = var2.backoff;
                var7 = var6.fails;
                var6 = 3;
                if(!(!(var7 > var6))) { _fun0016_ip = 288; continue _fun0016 }
 158:
                var7 = var2.backoff;
                var6 = var7.fail;
                var1 = function() {
                    var5 = _closure3_slot0;
                    var4 = var5.reconnect;
                    var3 = _closure3_slot1;
                    var2 = _closure3_slot2;
                    var1 = _closure3_slot3;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var8 = var6.bind(var7)(var1);
                var7 = var2.logger;
                var6 = var7.warn;
                var1 = var5.toString;
                var14 = var1.bind(var5)();
                var1 = 1000;
                var9 = var8 / var1;
                var8 = var9.toFixed;
                var1 = 2;
                var16 = var8.bind(var9)(var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var12 = var1.concat;
                var23 = '[WS CLOSED] (clean: ';
                var21 = ', code: ';
                var19 = ', reason: ';
                var17 = ') retrying in ';
                var15 = ' seconds.';
                var22 = var14;
                var20 = var4;
                var18 = var3;
                var1 = var23[var12](var22, var21, var20, var19, var18, var17, var16, var15, var14);
                var1 = var6.bind(var7)(var1);
                _fun0016_ip = 322; continue _fun0016;
 288:
                var7 = var2.logger;
                var6 = var7.warn;
                var1 = '[WS CLOSED] Backoff exceed. Resetting.';
                var1 = var6.bind(var7)(var1);
                var1 = var2.disconnect;
                var1 = var1.bind(var2)(var5, var4, var3);
 322:
                var1 = undefined;
                return var1;
 326:
                var1 = var2.disconnect;
                var1 = var1.bind(var2)(var5, var4, var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'disconnect';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var6 = arg1;
            var5 = arg2;
            var4 = arg3;
            var3 = this;
            var7 = var3.logger;
            var2 = var7.warn;
            var1 = var6.toString;
            var17 = var1.bind(var6)();
            var1 = global;
            var1 = var1.HermesInternal;
            var10 = var1.concat;
            var18 = '[DISCONNECT] (';
            var8 = ', ';
            var12 = ')';
            var16 = var8;
            var15 = var5;
            var14 = var8;
            var13 = var4;
            var1 = var18[var10](var17, var16, var15, var14, var13, var12, var11);
            var1 = var2.bind(var7)(var1);
            var1 = var3.cleanupWebSocket;
            var1 = var1.bind(var3)();
            var1 = var3.cleanupState;
            var1 = var1.bind(var3)();
            var2 = _closure1_slot14;
            var2 = var2.DISCONNECTED;
            var3['connectionState'] = var2;
            var2 = var3.emit;
            var1 = _closure1_slot18;
            var17 = var1.Disconnect;
            var18 = var3;
            var16 = var6;
            var15 = var5;
            var14 = var4;
            var1 = var18[var2](var17, var16, var15, var14, var13);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'reconnect';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var5 = arg1;
            var2 = this;
            var4 = var2.logger;
            var3 = var4.info;
            var1 = var5.toString;
            var15 = var1.bind(var5)();
            var1 = global;
            var1 = var1.HermesInternal;
            var9 = var1.concat;
            var16 = '[RECONNECT] wasClean=';
            var14 = ' code=';
            var13 = arg2;
            var12 = ' reason=';
            var11 = arg3;
            var1 = var16[var9](var15, var14, var13, var12, var11, var10);
            var1 = var3.bind(var4)(var1);
            var3 = var2.cleanupWebSocket;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.close;
                var1 = 4000;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = _closure1_slot14;
            var1 = var1.RECONNECTING;
            var2['connectionState'] = var1;
            var1 = var2.createWebSocket;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'cleanupWebSocket';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var2 = var1.stopHeartbeater;
                var2 = var2.bind(var1)();
                var2 = var1.clearHelloTimeout;
                var2 = var2.bind(var1)();
                var3 = var1.webSocket;
                var2 = null;
                var1['webSocket'] = var2;
                if(!(var2 != var3)) { _fun0017_ip = 88; continue _fun0017 }
 46:
                var5 = _closure1_slot20;
                var3['onopen'] = var5;
                var3['onmessage'] = var5;
                var3['onerror'] = var5;
                var3['onclose'] = var5;
                if(!(var2 != var4)) { _fun0017_ip = 88; continue _fun0017 }
 81:
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
 88:
                var2 = var1.backoff;
                var1 = var2.cancel;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'cleanupState';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = null;
            var2['serverId'] = var1;
            var2['channelId'] = var1;
            var2['sessionId'] = var1;
            var2['token'] = var1;
            var3 = false;
            var2['resumable'] = var3;
            var2['lastRecvSeqNum'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'parseWebSocketMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var4 = var2.data;
                var5 = global;
                var3 = var5.ArrayBuffer;
                var3 = var4 instanceof var3;
                if(var3) { _fun0018_ip = 50; continue _fun0018 }
 26:
                var6 = var5.JSON;
                var4 = var6.parse;
                var3 = var2.data;
                var3 = var4.bind(var6)(var3);
                return var3;
 50:
                var4 = var5.Uint8Array;
                var10 = var2.data;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var11 = var3;
                var2 = new var11[var4](var10, var9);
                var4 = var2 instanceof Object ? var2 : var3;
                var2 = var1.serverVersion;
                var3 = 8;
                var6 = var2 >= var3;
                var2 = null;
                if(!var6) { _fun0018_ip = 147; continue _fun0018 }
 99:
                var7 = var5.DataView;
                var10 = var4.buffer;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var11 = var6;
                var5 = new var11[var7](var10, var9);
                var8 = var5 instanceof Object ? var5 : var6;
                var7 = var8.getUint16;
                var6 = 0;
                var5 = false;
                var2 = var7.bind(var8)(var6, var5);
 147:
                var1 = var1.serverVersion;
                var1 = var1 >= var3;
                var5 = 0;
                if(!var1) { _fun0018_ip = 165; continue _fun0018 }
 162:
                var5 = 2;
 165:
                var1 = {};
                var3 = var4[var5];
                var1['op'] = var3;
                var1['seq'] = var2;
                var3 = var4.subarray;
                var2 = 1;
                var2 = var5 + var2;
                var2 = var3.bind(var4)(var2);
                var1['d'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'clearHelloTimeout';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var2 = this;
                var3 = var2.helloTimeout;
                var1 = null;
                if(!(var1 != var3)) { _fun0019_ip = 42; continue _fun0019 }
 15:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.helloTimeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['helloTimeout'] = var1;
 42:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'handleHeartbeatAck';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var5 = var2.logger;
                var4 = var5.info;
                var3 = 'Heartbeat ACK received';
                var3 = var4.bind(var5)(var3);
                var4 = var2.serverVersion;
                var3 = 8;
                var9 = var1;
                if(!(var4 >= var3)) { _fun0020_ip = 49; continue _fun0020 }
 44:
                var9 = var1.t;
 49:
                var8 = var2.emit;
                var3 = _closure1_slot18;
                var7 = var3.Ping;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 10;
                var6 = var5[var3];
                var1 = undefined;
                var10 = var4.bind(var1)(var6);
                var6 = var10.now;
                var6 = var6.bind(var10)();
                var6 = var6 - var9;
                var6 = var8.bind(var2)(var7, var6);
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var2['lastHeartbeatAckTime'] = var3;
                var3 = true;
                var2['heartbeatAck'] = var3;
                var4 = var2.expeditedHeartbeatTimeout;
                var3 = null;
                if(!(var3 !== var4)) { _fun0020_ip = 200; continue _fun0020 }
 153:
                var4 = global;
                var5 = var4.clearTimeout;
                var4 = var2.expeditedHeartbeatTimeout;
                var4 = var5.bind(var1)(var4);
                var2['expeditedHeartbeatTimeout'] = var3;
                var4 = var2.logger;
                var3 = var4.info;
                var2 = 'Expedited heartbeat succeeded';
                var2 = var3.bind(var4)(var2);
 200:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'handleHeartbeatTimeout';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var4 = var1.cleanupWebSocket;
            var3 = function(arg1) {
                var3 = arg1;
                var2 = var3.close;
                var1 = 4000;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var1)(var3);
            var4 = var1.backoff;
            var3 = var4.fail;
            var2 = function() {
                var5 = _closure3_slot0;
                var4 = var5.reconnect;
                var1 = _closure1_slot13;
                var3 = var1.HEARTBEAT_TIMEOUT;
                var2 = false;
                var1 = 'Heartbeat timeout.';
                var1 = var4.bind(var5)(var2, var3, var1);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var1.logger;
            var2 = var3.warn;
            var1 = 1000;
            var5 = var4 / var1;
            var4 = var5.toFixed;
            var1 = 2;
            var6 = var4.bind(var5)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '[HEARTBEAT ACK TIMEOUT] reconnecting in ';
            var1 = ' seconds.';
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'startHeartbeater';
        var5['key'] = var7;
        var7 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 12;
                var4 = var4[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var4 = var3.heartbeatInterval;
                var6 = null;
                var5 = var6 != var4;
                var4 = 'RTCControlSocket: Heartbeat interval should never null here.';
                var4 = var7.bind(var1)(var5, var4);
                var8 = var3.logger;
                var7 = var8.info;
                var10 = var3.heartbeatInterval;
                var4 = global;
                var5 = var4.HermesInternal;
                var9 = var5.concat;
                var5 = 'Starting heartbeat with interval: ';
                var5 = var9.bind(var5)(var10);
                var5 = var7.bind(var8)(var5);
                var5 = var3.heartbeater;
                if(!(var6 !== var5)) { _fun0021_ip = 131; continue _fun0021 }
 114:
                var6 = var4.clearInterval;
                var5 = var3.heartbeater;
                var5 = var6.bind(var1)(var5);
 131:
                var5 = true;
                var3['heartbeatAck'] = var5;
                var5 = var4.setInterval;
                var4 = var3.heartbeatInterval;
                var2 = function() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var2 = _closure3_slot0;
                        var3 = var2.heartbeatAck;
                        var2 = _closure3_slot0;
                        if(var3) { _fun0022_ip = 48; continue _fun0022 }
 20:
                        var4 = var2.expeditedHeartbeatTimeout;
                        var3 = null;
                        if(!(var3 === var4)) { _fun0022_ip = 66; continue _fun0022 }
 32:
                        var3 = _closure3_slot0;
                        var1 = var3.handleHeartbeatTimeout;
                        var1 = var1.bind(var3)();
                        _fun0022_ip = 66; continue _fun0022;
 48:
                        var1 = false;
                        var2['heartbeatAck'] = var1;
                        var1 = var2.sendHeartbeat;
                        var1 = var1.bind(var2)();
 66:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var5.bind(var1)(var2, var4);
                var3['heartbeater'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'sendHeartbeat';
        var5['key'] = var7;
        var7 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var4 = this;
                var2 = var4.serverVersion;
                var1 = 8;
                if(!(!(var2 >= var1))) { _fun0023_ip = 99; continue _fun0023 }
 16:
                var3 = var4.logger;
                var2 = var3.info;
                var1 = 'Sending heartbeat';
                var1 = var2.bind(var3)(var1);
                var3 = var4.send;
                var2 = _closure1_slot12;
                var2 = var2.HEARTBEAT;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 10;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var1 = var5.now;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var2, var1);
                _fun0023_ip = 230; continue _fun0023;
 99:
                var1 = var4.lastRecvSeqNum;
                var2 = null;
                var2 = var2 != var1;
                var5 = -1;
                if(!var2) { _fun0023_ip = 123; continue _fun0023 }
 120:
                var5 = var1;
 123:
                var3 = var4.logger;
                var2 = var3.info;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var1 = 'Sending heartbeat with last received sequence number: ';
                var1 = var6.bind(var1)(var5);
                var1 = var2.bind(var3)(var1);
                var3 = var4.send;
                var1 = _closure1_slot12;
                var2 = var1.HEARTBEAT;
                var1 = {};
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 10;
                var7 = var7[var6];
                var6 = undefined;
                var7 = var8.bind(var6)(var7);
                var6 = var7.now;
                var6 = var6.bind(var7)();
                var1['t'] = var6;
                var1['seq_ack'] = var5;
                var1 = var3.bind(var4)(var2, var1);
 230:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'stopHeartbeater';
        var5['key'] = var7;
        var7 = function value() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var2 = this;
                var3 = var2.heartbeater;
                var1 = null;
                if(!(var1 !== var3)) { _fun0024_ip = 42; continue _fun0024 }
 15:
                var3 = global;
                var5 = var3.clearInterval;
                var4 = var2.heartbeater;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['heartbeater'] = var1;
 42:
                var3 = var2.expeditedHeartbeatTimeout;
                if(!(var1 !== var3)) { _fun0024_ip = 79; continue _fun0024 }
 52:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.expeditedHeartbeatTimeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['expeditedHeartbeatTimeout'] = var1;
 79:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'connect';
        var5['key'] = var7;
        var7 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var2 = this;
                var4 = var2.connectionState;
                var3 = _closure1_slot14;
                var3 = var3.DISCONNECTED;
                if(!(var4 === var3)) { _fun0025_ip = 77; continue _fun0025 }
 26:
                var3 = _closure1_slot14;
                var3 = var3.CONNECTING;
                var2['connectionState'] = var3;
                var3 = var2.createWebSocket;
                var3 = var3.bind(var2)();
                var3 = var2.emit;
                var1 = _closure1_slot18;
                var1 = var1.Connecting;
                var1 = var3.bind(var2)(var1);
                var1 = true;
                _fun0025_ip = 100; continue _fun0025;
 77:
                var4 = var2.logger;
                var3 = var4.error;
                var2 = 'Cannot start a new connection, connection state is not disconnected';
                var2 = var3.bind(var4)(var2);
                var1 = false;
 100:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'identify';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var14 = var2.serverId;
                var13 = var2.channelId;
                var12 = var2.userId;
                var11 = var2.sessionId;
                var10 = var2.token;
                var9 = var2.maxDaveProtocolVersion;
                var8 = var2.video;
                var1 = undefined;
                if(!(var8 === var1)) { _fun0026_ip = 54; continue _fun0026 }
 52:
                var8 = false;
 54:
                var7 = var2.streamParameters;
                var5['serverId'] = var14;
                var5['channelId'] = var13;
                var5['sessionId'] = var11;
                var5['token'] = var10;
                var2 = _closure1_slot14;
                var2 = var2.IDENTIFYING;
                var5['connectionState'] = var2;
                var4 = var5.send;
                var2 = _closure1_slot12;
                var3 = var2.IDENTIFY;
                var2 = {};
                var2['server_id'] = var14;
                var2['channel_id'] = var13;
                var2['user_id'] = var12;
                var2['session_id'] = var11;
                var2['token'] = var10;
                var2['max_dave_protocol_version'] = var9;
                var2['video'] = var8;
                var6 = _closure1_slot22;
                var6 = var6.bind(var1)(var7);
                var2['streams'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'expeditedHeartbeat';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var9 = arguments[1];
                var3 = arguments[2];
                var2 = this;
                var _closure3_slot0 = var2;
                var5 = undefined;
                if(!(var9 === var5)) { _fun0027_ip = 25; continue _fun0027 }
 21:
                var9 = '';
 25:
                if(!(var3 === var5)) { _fun0027_ip = 31; continue _fun0027 }
 29:
                var3 = true;
 31:
                var6 = var2.webSocket;
                var4 = null;
                if(!(var4 == var6)) { _fun0027_ip = 108; continue _fun0027 }
 43:
                if(var3) { _fun0027_ip = 95; continue _fun0027 }
 46:
                var7 = var2.logger;
                var6 = var7.info;
                var8 = '';
                if(!(var8 !== var9)) { _fun0027_ip = 75; continue _fun0027 }
 65:
                var3 = 'reason: ';
                var8 = var3 + var9;
 75:
                var3 = 'Expedited heartbeat requested, but is disconnected and a reset was not requested ';
                var3 = var3 + var8;
                var3 = var6.bind(var7)(var3);
                _fun0027_ip = 229; continue _fun0027;
 95:
                var3 = var2.resetBackoff;
                var3 = var3.bind(var2)(var9);
                return var3;
 108:
                var7 = var2.logger;
                var6 = var7.info;
                var8 = '';
                if(!(var8 !== var9)) { _fun0027_ip = 137; continue _fun0027 }
 127:
                var3 = 'reason: ';
                var8 = var3 + var9;
 137:
                var3 = 'Performing an expedited heartbeat ';
                var3 = var3 + var8;
                var3 = var6.bind(var7)(var3);
                var3 = false;
                var2['heartbeatAck'] = var3;
                var3 = var2.sendHeartbeat;
                var3 = var3.bind(var2)();
                var3 = var2.expeditedHeartbeatTimeout;
                if(!(var4 !== var3)) { _fun0027_ip = 199; continue _fun0027 }
 180:
                var3 = global;
                var4 = var3.clearTimeout;
                var3 = var2.expeditedHeartbeatTimeout;
                var3 = var4.bind(var5)(var3);
 199:
                var3 = global;
                var4 = var3.setTimeout;
                var3 = function() {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                        var2 = _closure3_slot0;
                        var3 = null;
                        var2['expeditedHeartbeatTimeout'] = var3;
                        var3 = var2.heartbeatAck;
                        var2 = false;
                        if(!(var2 === var3)) { _fun0028_ip = 41; continue _fun0028 }
 27:
                        var2 = _closure3_slot0;
                        var1 = var2.handleHeartbeatTimeout;
                        var1 = var1.bind(var2)();
 41:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var1);
                var2['expeditedHeartbeatTimeout'] = var1;
 229:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'resetBackoff';
        var5['key'] = var7;
        var7 = function value() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var7 = arguments[0];
                var6 = this;
                var1 = undefined;
                if(!(var7 === var1)) { _fun0029_ip = 16; continue _fun0029 }
 12:
                var7 = '';
 16:
                var1 = var6.backoff;
                var2 = var1.fails;
                var1 = 0;
                var1 = var2 > var1;
                if(!var1) { _fun0029_ip = 49; continue _fun0029 }
 37:
                var3 = var6.webSocket;
                var2 = null;
                var1 = var2 == var3;
 49:
                if(!var1) { _fun0029_ip = 148; continue _fun0029 }
 52:
                var4 = var6.logger;
                var3 = var4.info;
                var5 = '';
                if(!(var5 !== var7)) { _fun0029_ip = 81; continue _fun0029 }
 71:
                var2 = 'for reason: ';
                var5 = var2 + var7;
 81:
                var2 = 'Connection backoff reset ';
                var2 = var2 + var5;
                var2 = var3.bind(var4)(var2);
                var3 = var6.backoff;
                var2 = var3.succeed;
                var2 = var2.bind(var3)();
                var5 = var6.reconnect;
                var2 = _closure1_slot13;
                var4 = var2.RESET_BACKOFF;
                var3 = false;
                var2 = 'Reset backoff.';
                var2 = var5.bind(var6)(var3, var4, var2);
                var1 = true;
 148:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'close';
        var5['key'] = var7;
        var7 = function value() {
            var6 = this;
            var3 = var6.logger;
            var2 = var3.info;
            var1 = 'CLOSE';
            var1 = var2.bind(var3)(var1);
            var2 = var6.cleanupWebSocket;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.close;
                var1 = 4000;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var6)(var1);
            var1 = var6.cleanupState;
            var1 = var1.bind(var6)();
            var2 = _closure1_slot14;
            var2 = var2.DISCONNECTED;
            var6['connectionState'] = var2;
            var5 = var6.emit;
            var1 = _closure1_slot18;
            var10 = var1.Disconnect;
            var9 = true;
            var8 = 1000;
            var7 = 'Force Close';
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'destroy';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.close;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'selectProtocol';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var7 = arg2;
                var3 = arg3;
                var4 = this;
                var2 = {};
                var9 = null;
                var1 = var9 == var3;
                var6 = null;
                var5 = var2;
                if(var1) { _fun0030_ip = 329; continue _fun0030 }
 28:
                var1 = 'sdp';
                var1 = var1 in var3;
                if(!var1) { _fun0030_ip = 66; continue _fun0030 }
 39:
                var1 = var3.sdp;
                if(!(var9 != var1)) { _fun0030_ip = 66; continue _fun0030 }
 49:
                var8 = var3.sdp;
                var1 = '';
                if(!(var1 === var8)) { _fun0030_ip = 270; continue _fun0030 }
 66:
                var1 = 'address';
                var1 = var1 in var3;
                if(!var1) { _fun0030_ip = 87; continue _fun0030 }
 77:
                var8 = var3.address;
                var1 = var9 != var8;
 87:
                if(!var1) { _fun0030_ip = 104; continue _fun0030 }
 90:
                var10 = var3.address;
                var8 = '';
                var1 = var8 !== var10;
 104:
                if(!var1) { _fun0030_ip = 128; continue _fun0030 }
 107:
                var8 = global;
                var11 = var8.Boolean;
                var10 = var3.port;
                var8 = undefined;
                var1 = var11.bind(var8)(var10);
 128:
                if(!var1) { _fun0030_ip = 140; continue _fun0030 }
 131:
                var8 = var3.mode;
                var1 = var9 != var8;
 140:
                if(!var1) { _fun0030_ip = 156; continue _fun0030 }
 143:
                var9 = var3.mode;
                var8 = '';
                var1 = var8 !== var9;
 156:
                var10 = undefined;
                var6 = undefined;
                var5 = var2;
                if(!var1) { _fun0030_ip = 329; continue _fun0030 }
 169:
                var2 = {};
                var1 = var3.address;
                var2['address'] = var1;
                var1 = var3.port;
                var2['port'] = var1;
                var1 = var3.mode;
                var2['mode'] = var1;
                var1 = {};
                var13 = var1;
                var12 = var3;
                var8 = copyDataProperties(var13, var12);
                var9 = _closure1_slot21;
                var8 = var3.codecs;
                var9 = var9.bind(var10)(var8);
                var8 = 'codecs';
                var1[var8] = var9;
                var8 = 'rtc_connection_id';
                var1[var8] = var7;
                var9 = arg4;
                var8 = 'experiments';
                var1[var8] = var9;
                var6 = var2;
                var5 = var1;
                _fun0030_ip = 329; continue _fun0030;
 270:
                var6 = var3.sdp;
                var1 = {};
                var13 = var1;
                var12 = var3;
                var8 = copyDataProperties(var13, var12);
                var9 = _closure1_slot21;
                var8 = var3.codecs;
                var3 = undefined;
                var8 = var9.bind(var3)(var8);
                var3 = 'codecs';
                var1[var3] = var8;
                var3 = 'rtc_connection_id';
                var1[var3] = var7;
                var5 = var1;
 329:
                var3 = var4.send;
                var1 = _closure1_slot12;
                var2 = var1.SELECT_PROTOCOL;
                var1 = {};
                var7 = arg1;
                var1['protocol'] = var7;
                var1['data'] = var6;
                var13 = var1;
                var12 = var5;
                var5 = copyDataProperties(var13, var12);
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'updateSession';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = this;
            var4 = var5.send;
            var2 = _closure1_slot12;
            var3 = var2.SESSION_UPDATE;
            var2 = {};
            var7 = _closure1_slot21;
            var1 = arg1;
            var6 = var1.codecs;
            var1 = undefined;
            var6 = var7.bind(var1)(var6);
            var2['codecs'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'speaking';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var10 = arg1;
                var7 = arguments[1];
                var6 = arguments[2];
                var5 = this;
                var1 = undefined;
                if(!(var7 === var1)) { _fun0031_ip = 20; continue _fun0031 }
 18:
                var7 = 0;
 20:
                if(!(var6 === var1)) { _fun0031_ip = 26; continue _fun0031 }
 24:
                var6 = 0;
 26:
                var4 = var5.send;
                var2 = _closure1_slot12;
                var3 = var2.SPEAKING;
                var2 = {};
                var11 = var5.serverVersion;
                var9 = 3;
                var8 = var10;
                if(!(var11 <= var9)) { _fun0031_ip = 76; continue _fun0031 }
 63:
                var9 = global;
                var9 = var9.Boolean;
                var8 = var9.bind(var1)(var10);
 76:
                var2['speaking'] = var8;
                var2['delay'] = var7;
                var2['ssrc'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'video';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            var5 = this;
            var4 = var5.send;
            var2 = _closure1_slot12;
            var3 = var2.VIDEO;
            var2 = {};
            var6 = arg1;
            var2['audio_ssrc'] = var6;
            var6 = arg2;
            var2['video_ssrc'] = var6;
            var6 = arg3;
            var2['rtx_ssrc'] = var6;
            var7 = _closure1_slot22;
            var1 = undefined;
            var6 = arg4;
            var6 = var7.bind(var1)(var6);
            var2['streams'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = 'mediaSinkWants';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var4 = this;
                var2 = var4.serverVersion;
                var1 = 5;
                if(!(var2 >= var1)) { _fun0032_ip = 44; continue _fun0032 }
 16:
                var3 = var4.send;
                var1 = _closure1_slot12;
                var2 = var1.MEDIA_SINK_WANTS;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
 44:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[31] = var5;
        var5 = {};
        var7 = 'secureFramesReadyForTransition';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot12;
            var2 = var1.DAVE_PROTOCOL_READY_FOR_TRANSITION;
            var1 = {};
            var5 = arg1;
            var1['transition_id'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[32] = var5;
        var5 = {};
        var7 = 'sendMLSKeyPackage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.logger;
            var2 = var3.info;
            var1 = 'Sending MLS key package';
            var1 = var2.bind(var3)(var1);
            var3 = var4.sendBinary;
            var1 = _closure1_slot12;
            var2 = var1.MLS_KEY_PACKAGE;
            var1 = global;
            var6 = var1.Uint8Array;
            var1 = var6.prototype;
            var5 = Object.create(var1, {constructor: {value: var6}});
            var8 = arg1;
            var9 = var5;
            var1 = new var9[var6](var8, var7);
            var1 = var1 instanceof Object ? var1 : var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[33] = var5;
        var5 = {};
        var7 = 'sendMLSCommitWelcome';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.logger;
            var2 = var3.info;
            var1 = 'Sending MLS commit + welcome message';
            var1 = var2.bind(var3)(var1);
            var3 = var4.sendBinary;
            var1 = _closure1_slot12;
            var2 = var1.MLS_COMMIT_WELCOME;
            var1 = global;
            var6 = var1.Uint8Array;
            var1 = var6.prototype;
            var5 = Object.create(var1, {constructor: {value: var6}});
            var8 = arg1;
            var9 = var5;
            var1 = new var9[var6](var8, var7);
            var1 = var1 instanceof Object ? var1 : var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[34] = var5;
        var5 = {};
        var7 = 'flagMLSInvalidCommitWelcome';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot12;
            var2 = var1.MLS_INVALID_COMMIT_WELCOME;
            var1 = {};
            var5 = arg1;
            var1['transition_id'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[35] = var5;
        var5 = {};
        var7 = 'noRoute';
        var5['key'] = var7;
        var7 = function value() {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot12;
            var2 = var1.CLIENT_CANNOT_REACH_RTC_SERVER;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[36] = var5;
        var5 = {};
        var7 = 'setHeartbeatIntervalModifier';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['heartbeatIntervalModifier'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[37] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var8);
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/RTCControlSocket.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['SocketEvent'] = var2;
    return var1;
})();