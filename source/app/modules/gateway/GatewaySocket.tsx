// app/modules/gateway/GatewaySocket.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function noop() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function withGatewayCompressionHandler(arg1, arg2, arg3) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = 0;
        var _closure2_slot3 = var2;
        var3 = var4.dataReady;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
case 6: // try_start_0
                var5 = _closure2_slot2;
                var4 = var1;
                var2 = _closure2_slot3;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var2);
case 7: // try_end0
                var2 = 0;
                _closure2_slot3 = var2;
                return var1;
case 8: // catch_target0
                CatchBlockStart(arg_register=0);
                var2 = 0;
                _closure2_slot3 = var2;
                throw var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var2 = false;
        var _closure2_slot4 = var2;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var6 = undefined;
                var2 = undefined;
                var2 = var3.data;
                var5 = var3.raw_length;
                var4 = null;
                if(!(var4 == var5)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var7 = _closure2_slot3;
                var8 = _closure1_slot23;
                var4 = var2;
                var4 = var8.bind(var6)(var4);
                var4 = var7 + var4;
                _closure2_slot3 = var4;
                _fun0003_ip = 11; continue _fun0003;
case 9:
                var5 = _closure2_slot3;
                var3 = var3.raw_length;
                var3 = var5 + var3;
                _closure2_slot3 = var3;
case 11: // try_start_0
                var4 = _closure2_slot0;
                var3 = var4.feed;
                var2 = var3.bind(var4)(var2);
case 12: // try_end0
                return var6;
case 13: // catch_target0
                CatchBlockStart(arg_register=0);
                var3 = _closure2_slot4;
                if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var3 = true;
                _closure2_slot4 = var3;
                var5 = _closure2_slot1;
                var4 = false;
                var3 = 0;
                var2 = 'A decompression error occurred';
                var2 = var5.bind(var6)(var4, var3, var2);
case 14:
                throw var1;
            }
        };
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function byteSize(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            var1 = 0;
            if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var4 = 'string';
            var2 = typeof var3;
            if(!(var4 !== var2)) { _fun0004_ip = 8; continue _fun0004 }
case 7:
            var2 = var3.byteLength;
            _fun0004_ip = 18; continue _fun0004;
case 8:
            var2 = var3.length;
case 18:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var9 = 1;
    var8 = var6[var9];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var11 = 3;
    var8 = var6[var11];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.AnalyticEvents;
    var _closure1_slot12 = var10;
    var8 = var8.Endpoints;
    var _closure1_slot13 = var8;
    var8 = 9;
    var8 = var6[var8];
    var12 = var7.bind(var1)(var8);
    var8 = var12.prototype;
    var10 = Object.create(var8, {constructor: {value: var12}});
    var15 = 'GatewaySocket';
    var16 = var10;
    var8 = new var16[var12](var15, var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot14 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var16 = var10;
    var8 = new var16[var8](var15);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot15 = var8;
    var8 = 12;
    var10 = var6[var8];
    var10 = var7.bind(var1)(var10);
    var10 = var10.Millis;
    var12 = var10.SECOND;
    var10 = 30;
    var10 = var10 * var12;
    var _closure1_slot16 = var10;
    var10 = var6[var8];
    var10 = var7.bind(var1)(var10);
    var10 = var10.Millis;
    var10 = var10.MINUTE;
    var10 = var11 * var10;
    var _closure1_slot17 = var10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.MINUTE;
    var8 = var9 * var8;
    var _closure1_slot18 = var8;
    var4 = var4.window;
    var4 = var4.GLOBAL_ENV;
    var4 = var4.GATEWAY_ENDPOINT;
    var _closure1_slot19 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function GatewaySocket() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = this;
                var1 = _closure1_slot6;
                var2 = _closure2_slot1;
                var7 = undefined;
                var1 = var1.bind(var7)(var3, var2);
                var1 = _closure1_slot9;
                var11 = var1.bind(var7)(var2);
                var2 = _closure1_slot8;
                var1 = _closure1_slot20;
                var1 = var1.bind(var7)();
                if(var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var3, var7);
                _fun0005_ip = 21; continue _fun0005;
case 19:
                var5 = global;
                var9 = var5.Reflect;
                var8 = var9.construct;
                var5 = _closure1_slot9;
                var5 = var5.bind(var7)(var3);
                var6 = var5.constructor;
                var5 = new Array(0);
                var1 = var8.bind(var9)(var11, var5, var6);
case 21:
                var1 = var2.bind(var7)(var3, var1);
                var _closure3_slot0 = var1;
                var9 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 13;
                var2 = var8[var6];
                var5 = var9.bind(var7)(var2);
                var14 = _closure1_slot18;
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var12 = 1000;
                var16 = var3;
                var15 = var12;
                var2 = new var16[var5](var15, var14, var13);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['dispatchExceptionBackoff'] = var2;
                var2 = 0;
                var1['dispatchSuccessTimer'] = var2;
                var3 = false;
                var1['didForceClearGuildHashes'] = var3;
                var1['identifyUncompressedByteSize'] = var2;
                var1['identifyCompressedByteSize'] = var2;
                var5 = {};
                var1['analytics'] = var5;
                var1['identifyCount'] = var2;
                var5 = null;
                var1['resumeUrl'] = var5;
                var1['iosGoingAwayEventCount'] = var2;
                var11 = {'currentPayload': null, 'upcomingState': null};
                var1['heartbeatQOSState'] = var11;
                var10 = function(arg1, arg2, arg3) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var7 = arg1;
                        var8 = arg2;
                        var1 = undefined;
                        var2 = undefined;
                        var4 = _closure1_slot11;
                        var4 = var4.isLoggingGatewayEvents;
                        if(!var4) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                        var9 = _closure1_slot14;
                        var6 = var9.verboseDangerously;
                        var5 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var4 = 14;
                        var4 = var10[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.Opcode;
                        var12 = var4[var7];
                        var14 = '~>';
                        var15 = var9;
                        var13 = var7;
                        var11 = var8;
                        var4 = var15[var6](var14, var13, var12, var11, var10);
case 22:
                        var6 = _closure1_slot15;
                        var5 = var6.pack;
                        var4 = {};
                        var4['op'] = var7;
                        var4['d'] = var8;
                        var2 = var5.bind(var6)(var4);
                        var4 = arg3;
                        if(!var4) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                        var5 = _closure3_slot0;
                        var4 = var5.isSessionEstablished;
                        var4 = var4.bind(var5)();
                        if(var4) { _fun0006_ip = 24; continue _fun0006 }
case 14:
                        var5 = _closure1_slot14;
                        var4 = var5.warn;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var6 = var3.concat;
                        var3 = 'Attempted to send while not being in a connected state opcode: ';
                        var3 = var6.bind(var3)(var7);
                        var3 = var4.bind(var5)(var3);
                        _fun0006_ip = 26; continue _fun0006;
case 24: // try_start_0
                        var4 = _closure3_slot0;
                        var5 = var4.webSocket;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        var3 = _closure3_slot0;
                        var4 = var3.webSocket;
                        var3 = var4.send;
                        var2 = var3.bind(var4)(var2);
case 27: // try_end0
                        _fun0006_ip = 26; continue _fun0006;
case 29: // catch_target0
                        CatchBlockStart(arg_register=1);
case 26:
                        return var1;
                    }
                };
                var1['send'] = var10;
                var10 = 15;
                var10 = var8[var10];
                var10 = var9.bind(var7)(var10);
                var11 = var10.prototype;
                var11 = Object.create(var11, {constructor: {value: var10}});
                var16 = var11;
                var15 = var1;
                var10 = new var16[var10](var15, var14);
                var10 = var10 instanceof Object ? var10 : var11;
                var1['dispatcher'] = var10;
                var6 = var8[var6];
                var11 = var9.bind(var7)(var6);
                var6 = var11.prototype;
                var10 = Object.create(var6, {constructor: {value: var11}});
                var14 = 60000;
                var16 = var10;
                var15 = var12;
                var6 = new var16[var11](var15, var14, var13);
                var6 = var6 instanceof Object ? var6 : var10;
                var1['gatewayBackoff'] = var6;
                var6 = 16;
                var6 = var8[var6];
                var6 = var9.bind(var7)(var6);
                var6 = var6.CLOSED;
                var1['connectionState_'] = var6;
                var1['webSocket'] = var5;
                var1['seq'] = var2;
                var1['sessionId'] = var5;
                var1['token'] = var5;
                var1['initialHeartbeatTimeout'] = var5;
                var1['expeditedHeartbeatTimeout'] = var5;
                var1['lastHeartbeatTime'] = var5;
                var1['lastHeartbeatAckTime'] = var5;
                var1['helloTimeout'] = var5;
                var1['heartbeatInterval'] = var5;
                var1['heartbeater'] = var5;
                var5 = true;
                var1['heartbeatAck'] = var5;
                var1['connectionStartTime'] = var2;
                var1['identifyStartTime'] = var2;
                var1['nextReconnectIsImmediate'] = var3;
                var6 = _closure1_slot0;
                var5 = 17;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.getCompressionHandler;
                var4 = _closure1_slot15;
                var4 = var5.bind(var6)(var4);
                var1['compressionHandler'] = var4;
                var1['hasConnectedOnce'] = var3;
                var1['isFastConnect'] = var3;
                var1['identifyCount'] = var2;
                var1['iosGoingAwayEventCount'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot10;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'connectionState';
        var5['key'] = var1;
        var1 = function get() {
            var1 = this;
            var1 = var1.connectionState_;
            return var1;
        };
        var5['get'] = var1;
        var1 = function set(arg1) {
            var2 = arg1;
            var4 = _closure1_slot14;
            var3 = var4.verbose;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var1 = 'Setting connection state to ';
            var1 = var5.bind(var1)(var2);
            var1 = var3.bind(var4)(var1);
            var1 = this;
            var1['connectionState_'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['set'] = var1;
        var1 = new Array(44);
        var1[0] = var5;
        var5 = {};
        var8 = 'addAnalytics';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var2 = this;
            var1 = {};
            var4 = var2.analytics;
            var5 = var1;
            var3 = copyDataProperties(var5, var4);
            var4 = arg1;
            var5 = var1;
            var3 = copyDataProperties(var5, var4);
            var2['analytics'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'setResumeUrl';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = arg1;
                var1 = null;
                var3 = var1 != var6;
                if(!var3) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                var4 = var6.endsWith;
                var2 = '/';
                var3 = var4.bind(var6)(var2);
case 30:
                var2 = var6;
                if(!var3) { _fun0007_ip = 32; continue _fun0007 }
case 8:
                var5 = var6.substring;
                var4 = var6.length;
                var3 = 1;
                var4 = var4 - var3;
                var3 = 0;
                var2 = var5.bind(var6)(var3, var4);
case 32:
                if(!(var1 !== var2)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                var4 = _closure1_slot14;
                var3 = var4.verbose;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var1 = 'Updating resume url to ';
                var1 = var5.bind(var1)(var2);
                var1 = var3.bind(var4)(var1);
case 33:
                var1 = this;
                var1['resumeUrl'] = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'handleActiveStateChange';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.heartbeatQOSState;
                var4 = var3.currentPayload;
                var5 = null;
                var3 = var5 != var4;
                if(!var3) { _fun0008_ip = 8; continue _fun0008 }
case 30:
                var3 = var4.active;
case 8:
                var3 = !var3;
                var4 = var1.heartbeatQOSState;
                var4 = var4.currentPayload;
                if(!(var5 == var4)) { _fun0008_ip = 19; continue _fun0008 }
case 35:
                var4 = var1.heartbeatQOSState;
                var4['currentPayload'] = var2;
case 19:
                var4 = var1.heartbeatQOSState;
                var5 = var4.currentPayload;
                var4 = var2.active;
                if(!var4) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                var4 = true;
                var5['active'] = var4;
                var4 = global;
                var8 = var4.Set;
                var11 = var5.reasons;
                var4 = new Array(0);
                var12 = var4;
                var10 = 0;
                var10 = arraySpread(var12, var11, var10);
                var11 = var2.reasons;
                var12 = var4;
                var6 = arraySpread(var12, var11, var10);
                var6 = var8.prototype;
                var6 = Object.create(var6, {constructor: {value: var8}});
                var13 = var6;
                var12 = var4;
                var4 = new var13[var8](var12, var11);
                var11 = var4 instanceof Object ? var4 : var6;
                var6 = new Array(0);
                var12 = var6;
                var10 = 0;
                var4 = arraySpread(var12, var11, var10);
                var4 = var6.sort;
                var4 = var4.bind(var6)();
                var5['reasons'] = var4;
                if(!var3) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                var4 = var1.isSessionEstablished;
                var3 = var4.bind(var1)();
case 38:
                if(!var3) { _fun0008_ip = 36; continue _fun0008 }
case 40:
                var3 = var1._sendHeartbeat;
                var3 = var3.bind(var1)();
case 36:
                var1 = var1.heartbeatQOSState;
                var1['upcomingState'] = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[3] = var5;
        var5 = {};
        var8 = 'handleUpdateTimeSpentSessionId';
        var5['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = this;
                var5 = var3.connectionState_;
                var6 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 16;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var4 = var4.SESSION_ESTABLISHED;
                if(!(var5 === var4)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                var5 = var3.send;
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 14;
                var2 = var6[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.Opcode;
                var4 = var2.UPDATE_TIME_SPENT_SESSION_ID;
                var2 = {};
                var6 = arg1;
                var2['initialization_timestamp'] = var6;
                var6 = arg2;
                var2['session_id'] = var6;
                var6 = arg3;
                var2['client_launch_id'] = var6;
                var2 = var5.bind(var3)(var4, var2);
                var2 = var3._sendHeartbeat;
                var2 = var2.bind(var3)();
case 41:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[4] = var5;
        var5 = {};
        var8 = '_connect';
        var5['key'] = var8;
        var8 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var9 = this;
                var _closure3_slot0 = var9;
                var1 = var9.willReconnect;
                var3 = var1.bind(var9)();
                if(var3) { _fun0010_ip = 20; continue _fun0010 }
case 7:
                var5 = _closure1_slot14;
                var4 = var5.verbose;
                var3 = 'Skipping _connect because willReconnect is false';
                var3 = var4.bind(var5)(var3);
                _fun0010_ip = 43; continue _fun0010;
case 20:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var3 = 18;
                var3 = var4[var3];
                var4 = undefined;
                var5 = var5.bind(var4)(var3);
                var3 = var5.getIsPaused;
                var3 = var3.bind(var5)();
                if(var3) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                var6 = _closure1_slot1;
                var11 = _closure1_slot3;
                var3 = 16;
                var3 = var11[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.CONNECTING;
                var9['connectionState'] = var3;
                var3 = false;
                var9['nextReconnectIsImmediate'] = var3;
                var5 = var9.compressionHandler;
                var3 = var5.getAlgorithm;
                var8 = var3.bind(var5)();
                var5 = _closure1_slot15;
                var3 = var5.getName;
                var12 = var3.bind(var5)();
                var3 = var9._getGatewayUrl;
                var10 = var3.bind(var9)();
                var5 = global;
                var3 = var5.window;
                var3 = var3.GLOBAL_ENV;
                var7 = var3.API_VERSION;
                var3 = 19;
                var3 = var11[var3];
                var13 = var6.bind(var4)(var3);
                var11 = var13.mark;
                var6 = '🌐';
                var3 = 'Socket._connect';
                var3 = var11.bind(var13)(var6, var3);
                var13 = _closure1_slot14;
                var11 = var13.info;
                var3 = null;
                var6 = var3 != var8;
                var18 = 'none';
                if(!var6) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                var18 = var8;
case 46:
                var6 = var5.HermesInternal;
                var17 = var6.concat;
                var26 = '[CONNECT] ';
                var24 = ', encoding: ';
                var22 = ', version: ';
                var20 = ', compression: ';
                var25 = var10;
                var23 = var12;
                var21 = var7;
                var19 = var18;
                var6 = var26[var17](var25, var24, var23, var22, var21, var20, var19, var18);
                var6 = var11.bind(var13)(var6);
                var6 = var9.webSocket;
                if(!(var3 !== var6)) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                var13 = _closure1_slot14;
                var11 = var13.error;
                var6 = '_connect called with already existing websocket';
                var6 = var11.bind(var13)(var6);
                var11 = var9._cleanup;
                var6 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.close;
                    var1 = 4000;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6 = var11.bind(var9)(var6);
case 48:
                var11 = var5.Date;
                var6 = var11.now;
                var6 = var6.bind(var11)();
                var9['connectionStartTime'] = var6;
                var13 = var5.setTimeout;
                var11 = _closure1_slot16;
                var6 = function() {
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.now;
                    var4 = var2.bind(var3)();
                    var3 = _closure3_slot0;
                    var2 = var3.connectionStartTime;
                    var6 = var4 - var2;
                    var5 = var3._handleClose;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var2 = 'The connection timed out after ';
                    var1 = ' ms - did not receive OP_HELLO in time.';
                    var4 = var4.bind(var2)(var6, var1);
                    var2 = false;
                    var1 = 0;
                    var1 = var5.bind(var3)(var2, var1, var4);
                    var2 = var3.setResumeUrl;
                    var1 = null;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var6 = var13.bind(var4)(var6, var11);
                var9['helloTimeout'] = var6;
                var5 = var5.URL;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var26 = var6;
                var25 = var10;
                var5 = new var26[var5](var25, var24);
                var6 = var5 instanceof Object ? var5 : var6;
                var _closure3_slot1 = var6;
                var11 = var6.searchParams;
                var10 = var11.append;
                var5 = 'encoding';
                var5 = var10.bind(var11)(var5, var12);
                var11 = var6.searchParams;
                var10 = var11.append;
                var5 = var7.toString;
                var7 = var5.bind(var7)();
                var5 = 'v';
                var5 = var10.bind(var11)(var5, var7);
                if(!(var3 != var8)) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                var7 = var6.searchParams;
                var5 = var7.append;
                var3 = 'compress';
                var3 = var5.bind(var7)(var3, var8);
case 50:
                var3 = {};
                var5 = var6.toString;
                var5 = var5.bind(var6)();
                var3['gatewayURL'] = var5;
                var5 = function newCallback(arg1) {
                    var3 = arg1;
                    var1 = _closure3_slot0;
                    var1['webSocket'] = var3;
                    var2 = var1.compressionHandler;
                    var1 = var2.bindWebSocket;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                };
                var3['newCallback'] = var5;
                var5 = function onOpen(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 19;
                        var3 = var3[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var3);
                        var7 = var8.mark;
                        var5 = global;
                        var3 = var5.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'GatewaySocket.onOpen ';
                        var4 = var4.bind(var3)(var2);
                        var3 = '🌐';
                        var3 = var7.bind(var8)(var3, var4);
                        var4 = var5.Date;
                        var3 = var4.now;
                        var8 = var3.bind(var4)();
                        var4 = _closure3_slot0;
                        var7 = var4.connectionStartTime;
                        var14 = var8 - var7;
                        var7 = _closure1_slot14;
                        var6 = var7.info;
                        var9 = _closure3_slot1;
                        var8 = var9.toString;
                        var16 = var8.bind(var9)();
                        var5 = var5.HermesInternal;
                        var10 = var5.concat;
                        var17 = '[CONNECTED] ';
                        var15 = ' in ';
                        var13 = ' ms';
                        var5 = var17[var10](var16, var15, var14, var13, var12);
                        var5 = var6.bind(var7)(var5);
                        var4['isFastConnect'] = var2;
                        var3 = _closure3_slot0;
                        if(var2) { _fun0011_ip = 52; continue _fun0011 }
case 53:
                        var2 = var3._doResumeOrIdentify;
                        var2 = var2.bind(var3)();
                        _fun0011_ip = 54; continue _fun0011;
case 52:
                        var2 = var3._doFastConnectIdentify;
                        var2 = var2.bind(var3)();
case 54:
                        return var1;
                    }
                };
                var3['onOpen'] = var5;
                var8 = _closure1_slot22;
                var7 = var9.compressionHandler;
                var6 = var9._handleClose;
                var5 = var6.bind;
                var6 = var5.bind(var6)(var9);
                var5 = function(arg1, arg2) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var12 = arg1;
                        var2 = global;
                        var3 = var2.Date;
                        var1 = var3.now;
                        var14 = var1.bind(var3)();
                        var3 = _closure1_slot15;
                        var1 = var3.unpack;
                        var1 = var1.bind(var3)(var12);
                        var13 = var1.op;
                        var10 = var1.s;
                        var6 = var1.t;
                        var4 = var1.d;
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var11 = 14;
                        var3 = var1[var11];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.Opcode;
                        var3 = var3.DISPATCH;
                        if(!(var13 !== var3)) { _fun0012_ip = 55; continue _fun0012 }
case 56:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var5 = 19;
                        var5 = var3[var5];
                        var8 = var7.bind(var1)(var5);
                        var7 = var8.mark;
                        var5 = _closure1_slot0;
                        var3 = var3[var11];
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.Opcode;
                        var16 = var3[var13];
                        var3 = var2.HermesInternal;
                        var15 = var3.concat;
                        var5 = 'GatewaySocket.onMessage ';
                        var3 = ' ';
                        var5 = var15.bind(var5)(var13, var3, var16);
                        var3 = '🌐';
                        var3 = var7.bind(var8)(var3, var5);
case 55:
                        var3 = _closure1_slot11;
                        var3 = var3.isLoggingGatewayEvents;
                        if(!var3) { _fun0012_ip = 57; continue _fun0012 }
case 54:
                        var15 = new Array(1);
                        var15[0] = var13;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var11];
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.Opcode;
                        var3 = var3.DISPATCH;
                        if(!(var13 === var3)) { _fun0012_ip = 58; continue _fun0012 }
case 59:
                        var3 = var15.push;
                        var3 = var3.bind(var15)(var6);
case 58:
                        var3 = var15.push;
                        var3 = var3.bind(var15)(var4);
                        var7 = _closure1_slot14;
                        var5 = var7.verboseDangerously;
                        var3 = ['<~'];
                        var17 = 1;
                        var19 = var3;
                        var18 = var15;
                        var8 = arraySpread(var19, var18, var17);
                        var19 = var5;
                        var18 = var3;
                        var17 = var7;
                        var3 = apply(var19, var18, var17);
case 57:
                        var5 = var2.Date;
                        var3 = var5.now;
                        var3 = var3.bind(var5)();
                        var8 = var3 - var14;
                        var3 = 'READY';
                        var7 = var3 === var6;
                        if(var7) { _fun0012_ip = 60; continue _fun0012 }
case 61:
                        var3 = 'READY_SUPPLEMENTAL';
                        if(!(var3 !== var6)) { _fun0012_ip = 62; continue _fun0012 }
case 63:
                        var3 = 10;
                        if(!(var8 > var3)) { _fun0012_ip = 64; continue _fun0012 }
case 48:
                        var5 = _closure1_slot1;
                        var15 = _closure1_slot3;
                        var3 = 19;
                        var3 = var15[var3];
                        var16 = var5.bind(var1)(var3);
                        var15 = var16.mark;
                        var3 = 'Parse ';
                        var5 = var3 + var6;
                        var3 = '🌐';
                        var3 = var15.bind(var16)(var3, var5, var8);
                        _fun0012_ip = 64; continue _fun0012;
case 62:
                        var5 = _closure1_slot1;
                        var15 = _closure1_slot3;
                        var3 = 20;
                        var3 = var15[var3];
                        var3 = var5.bind(var1)(var3);
                        var5 = var3.parseReadySupplemental;
                        var3 = var5.set;
                        var3 = var3.bind(var5)(var14, var8);
                        _fun0012_ip = 64; continue _fun0012;
case 60:
                        var5 = _closure1_slot1;
                        var15 = _closure1_slot3;
                        var3 = 20;
                        var3 = var15[var3];
                        var3 = var5.bind(var1)(var3);
                        var5 = var3.parseReady;
                        var3 = var5.set;
                        var3 = var3.bind(var5)(var14, var8);
case 64:
                        var5 = null;
                        if(!(var5 != var10)) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                        var3 = _closure3_slot0;
                        var3['seq'] = var10;
case 65:
                        var10 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var11];
                        var3 = var10.bind(var1)(var3);
                        var3 = var3.Opcode;
                        var3 = var3.HELLO;
                        if(!(var3 !== var13)) { _fun0012_ip = 67; continue _fun0012 }
case 68:
                        var10 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var11];
                        var3 = var10.bind(var1)(var3);
                        var3 = var3.Opcode;
                        var3 = var3.RECONNECT;
                        if(!(var3 !== var13)) { _fun0012_ip = 69; continue _fun0012 }
case 70:
                        var10 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var11];
                        var3 = var10.bind(var1)(var3);
                        var3 = var3.Opcode;
                        var3 = var3.INVALID_SESSION;
                        if(!(var3 !== var13)) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                        var10 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var11];
                        var3 = var10.bind(var1)(var3);
                        var3 = var3.Opcode;
                        var3 = var3.HEARTBEAT;
                        if(!(var3 !== var13)) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                        var10 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var11];
                        var3 = var10.bind(var1)(var3);
                        var3 = var3.Opcode;
                        var3 = var3.HEARTBEAT_ACK;
                        if(!(var3 !== var13)) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                        var10 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var11];
                        var3 = var10.bind(var1)(var3);
                        var3 = var3.Opcode;
                        var3 = var3.DISPATCH;
                        if(!(var3 !== var13)) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                        var10 = _closure1_slot14;
                        var3 = var10.info;
                        var2 = var2.HermesInternal;
                        var11 = var2.concat;
                        var2 = 'Unhandled op ';
                        var2 = var11.bind(var2)(var13);
                        var2 = var3.bind(var10)(var2);
                        _fun0012_ip = 79; continue _fun0012;
case 77:
                        var3 = _closure3_slot0;
                        var2 = var3._handleDispatch;
                        var5 = null;
                        if(!var7) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                        var7 = {};
                        var11 = arg2;
                        var7['compressed_byte_size'] = var11;
                        var11 = _closure1_slot23;
                        var11 = var11.bind(var1)(var12);
                        var7['uncompressed_byte_size'] = var11;
                        var10 = _closure3_slot0;
                        var11 = var10.compressionHandler;
                        var10 = var11.getAlgorithm;
                        var10 = var10.bind(var11)();
                        var7['compression_algorithm'] = var10;
                        var10 = _closure1_slot15;
                        var9 = var10.getName;
                        var9 = var9.bind(var10)();
                        var7['packing_algorithm'] = var9;
                        var7['unpack_duration_ms'] = var8;
                        var5 = var7;
case 80:
                        var2 = var2.bind(var3)(var4, var6, var5);
                        _fun0012_ip = 79; continue _fun0012;
case 75:
                        var3 = _closure3_slot0;
                        var2 = var3._handleHeartbeatAck;
                        var2 = var2.bind(var3)(var4);
                        _fun0012_ip = 79; continue _fun0012;
case 73:
                        var3 = _closure3_slot0;
                        var2 = var3._handleHeartbeatReceive;
                        var2 = var2.bind(var3)();
                        _fun0012_ip = 79; continue _fun0012;
case 71:
                        var3 = _closure3_slot0;
                        var2 = var3._handleInvalidSession;
                        var2 = var2.bind(var3)(var4);
                        _fun0012_ip = 79; continue _fun0012;
case 69:
                        var3 = _closure3_slot0;
                        var2 = var3._handleReconnect;
                        var2 = var2.bind(var3)();
                        _fun0012_ip = 79; continue _fun0012;
case 67:
                        var3 = _closure3_slot0;
                        var2 = var3._clearHelloTimeout;
                        var2 = var2.bind(var3)();
                        var2 = var3._handleHello;
                        var2 = var2.bind(var3)(var4);
case 79:
                        var3 = _closure3_slot0;
                        var2 = var3._sendHeartbeatIfDue;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var5 = var8.bind(var4)(var7, var6, var5);
                var3['onMessage'] = var5;
                var5 = function onError() {
                    var6 = _closure3_slot0;
                    var2 = var6.setResumeUrl;
                    var1 = null;
                    var1 = var2.bind(var6)(var1);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.flushDNSCache;
                    var2 = var2.bind(var3)();
                    var5 = var6._handleClose;
                    var4 = false;
                    var3 = 0;
                    var2 = 'An error with the websocket occurred';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var3['onError'] = var5;
                var5 = function onClose(arg1) {
                    var1 = arg1;
                    var5 = var1.wasClean;
                    var4 = var1.code;
                    var3 = var1.reason;
                    var2 = _closure3_slot0;
                    var1 = var2._handleClose;
                    var1 = var1.bind(var2)(var5, var4, var3);
                    return var1;
                };
                var3['onClose'] = var5;
                var2 = function newOrTakeoverWebSocket(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var15 = var1.gatewayURL;
                        var13 = var1.newCallback;
                        var11 = var1.onOpen;
                        var _closure4_slot0 = var11;
                        var5 = var1.onMessage;
                        var3 = var1.onError;
                        var4 = var1.onClose;
                        var7 = _closure1_slot14;
                        var2 = var7.enableNativeLogger;
                        var1 = true;
                        var1 = var2.bind(var7)(var1);
                        var17 = global;
                        var1 = var17.window;
                        var21 = var1._ws;
                        var16 = false;
                        var _closure4_slot1 = var16;
                        var7 = null;
                        var _closure4_slot2 = var7;
                        var1 = var17.window;
                        var1['_ws'] = var7;
                        var18 = var7 != var21;
                        var1 = undefined;
                        var2 = undefined;
                        var12 = false;
                        var10 = false;
                        var8 = null;
                        var9 = null;
                        if(!var18) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                        var19 = var21.ws;
                        var18 = var21.state;
                        var18 = var18.gateway;
                        if(!(var18 === var15)) { _fun0013_ip = 84; continue _fun0013 }
case 85:
                        var18 = {};
                        var27 = var21.state;
                        var28 = var18;
                        var20 = copyDataProperties(var28, var27);
                        var20 = var18.messages;
                        if(!(var7 != var20)) { _fun0013_ip = 86; continue _fun0013 }
case 87:
                        var23 = var18.messages;
                        var22 = var23.map;
                        var20 = function(arg1) {
                            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                var3 = arg1;
                                var4 = var3.data;
                                var2 = null;
                                var1 = var3;
                                if(!(var2 != var4)) { _fun0014_ip = 88; continue _fun0014 }
case 89:
                                var2 = var3.data;
                                var4 = 'string';
                                var2 = typeof var2;
                                var1 = var3;
                                if(!(var4 === var2)) { _fun0014_ip = 88; continue _fun0014 }
case 90:
                                var2 = {};
                                var8 = var2;
                                var7 = var3;
                                var4 = copyDataProperties(var8, var7);
                                var6 = var3.data;
                                var5 = var6.substring;
                                var4 = 0;
                                var3 = 100;
                                var4 = var5.bind(var6)(var4, var3);
                                var3 = 'data';
                                var2[2] = var4;
                                var1 = var2;
case 88:
                                return var1;
                            }
                        };
                        var20 = var22.bind(var23)(var20);
                        var18['messages'] = var20;
case 86:
                        var23 = _closure1_slot14;
                        var22 = var23.log;
                        var20 = {};
                        var28 = var20;
                        var27 = var18;
                        var24 = copyDataProperties(var28, var27);
                        var18 = var18.messages;
                        var25 = var7 == var18;
                        var24 = undefined;
                        if(var25) { _fun0013_ip = 91; continue _fun0013 }
case 59:
                        var24 = var18.length;
case 91:
                        var18 = 'messages';
                        var20[17] = var24;
                        var18 = '[FAST CONNECT] successfully took over websocket, state:';
                        var18 = var22.bind(var23)(var18, var20);
                        var18 = var21.state;
                        var12 = var18.open;
                        var18 = var21.state;
                        var22 = var18.identify;
                        _closure4_slot1 = var22;
                        var18 = var21.state;
                        var8 = var18.messages;
                        var18 = var21.state;
                        var18 = var18.clientState;
                        _closure4_slot2 = var18;
                        var2 = var19;
                        var10 = var22;
                        var9 = var18;
                        _fun0013_ip = 82; continue _fun0013;
case 84:
                        var20 = _closure1_slot14;
                        var18 = var20.verbose;
                        var21 = var21.state;
                        var23 = var21.gateway;
                        var17 = var17.HermesInternal;
                        var22 = var17.concat;
                        var21 = '[FAST CONNECT] gatewayURL mismatch: ';
                        var17 = ' !== ';
                        var17 = var22.bind(var21)(var23, var17, var15);
                        var17 = var18.bind(var20)(var17);
                        var18 = var19.close;
                        var17 = 1000;
                        var17 = var18.bind(var19)(var17);
                        var2 = null;
                        var12 = false;
                        var10 = false;
                        var8 = null;
                        var9 = null;
case 82:
                        if(!(var7 == var2)) { _fun0013_ip = 92; continue _fun0013 }
case 93:
                        var16 = _closure1_slot1;
                        var17 = _closure1_slot3;
                        var14 = 11;
                        var14 = var17[var14];
                        var14 = var16.bind(var1)(var14);
                        var14 = var14.bind(var1)(var15);
                        var15 = 'arraybuffer';
                        var14['binaryType'] = var15;
                        var2 = var14;
case 92:
                        var13 = var13.bind(var1)(var2);
                        if(!var12) { _fun0013_ip = 94; continue _fun0013 }
case 95:
                        var9 = var11.bind(var1)(var10, var9);
case 94:
                        if(!(var7 != var8)) { _fun0013_ip = 96; continue _fun0013 }
case 97:
                        var7 = var8.forEach;
                        var7 = var7.bind(var8)(var5);
case 96:
                        var6 = function() {
                            var4 = _closure4_slot0;
                            var3 = _closure4_slot1;
                            var2 = _closure4_slot2;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var2['onopen'] = var6;
                        var2['onmessage'] = var5;
                        var2['onclose'] = var4;
                        var2['onerror'] = var3;
                        return var1;
                    }
                };
                var2 = var2.bind(var4)(var3);
                _fun0010_ip = 43; continue _fun0010;
case 44:
                var3 = _closure1_slot14;
                var2 = var3.info;
                var1 = 'Skipping _connect because socket is paused';
                var1 = var2.bind(var3)(var1);
case 43:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[5] = var5;
        var5 = {};
        var8 = '_handleHello';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var8 = arg1;
            var3 = this;
            var12 = var8.heartbeat_interval;
            var3['heartbeatInterval'] = var12;
            var2 = global;
            var4 = var2.Date;
            var1 = var4.now;
            var4 = var1.bind(var4)();
            var1 = var3.connectionStartTime;
            var14 = var4 - var1;
            var5 = _closure1_slot14;
            var4 = var5.verbose;
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 22;
            var6 = var6[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var6);
            var6 = var7.getConnectionPath;
            var18 = var6.bind(var7)(var8);
            var2 = var2.HermesInternal;
            var9 = var2.concat;
            var19 = '[HELLO] via ';
            var17 = ', heartbeat interval: ';
            var15 = ', took ';
            var13 = ' ms';
            var16 = var12;
            var2 = var19[var9](var18, var17, var16, var15, var14, var13, var12);
            var2 = var4.bind(var5)(var2);
            var2 = var3._startHeartbeater;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var8;
        var1[6] = var5;
        var5 = {};
        var8 = '_handleReconnect';
        var5['key'] = var8;
        var8 = function value() {
            var3 = this;
            var5 = _closure1_slot14;
            var4 = var5.verbose;
            var2 = '[RECONNECT] gateway requested I reconnect.';
            var2 = var4.bind(var5)(var2);
            var4 = var3._cleanup;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.close;
                var1 = 4000;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.WILL_RECONNECT;
            var3['connectionState'] = var2;
            var2 = var3._connect;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var8;
        var1[7] = var5;
        var5 = {};
        var8 = '_handleInvalidSession';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var5 = _closure1_slot14;
                var4 = var5.info;
                var6 = '';
                if(!var1) { _fun0015_ip = 98; continue _fun0015 }
case 23:
                var6 = ' can resume)';
case 98:
                var3 = '[INVALID_SESSION]';
                var3 = var3 + var6;
                var3 = var4.bind(var5)(var3);
                if(var1) { _fun0015_ip = 99; continue _fun0015 }
case 100:
                var1 = var2._doIdentify;
                var1 = var1.bind(var2)();
                _fun0015_ip = 3; continue _fun0015;
case 99:
                var1 = var2._doResumeOrIdentify;
                var1 = var1.bind(var2)();
case 3:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[8] = var5;
        var5 = {};
        var8 = '_handleDispatch';
        var5['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var1 = this;
                var2 = global;
                var6 = var2.Date;
                var3 = var6.now;
                var6 = var3.bind(var6)();
                var3 = var1.connectionStartTime;
                var15 = var6 - var3;
                var3 = 'READY';
                if(!(var3 !== var4)) { _fun0016_ip = 101; continue _fun0016 }
case 102:
                var3 = 'READY_SUPPLEMENTAL';
                if(!(var3 !== var4)) { _fun0016_ip = 24; continue _fun0016 }
case 103:
                var3 = 'RESUMED';
                if(!(var3 === var4)) { _fun0016_ip = 104; continue _fun0016 }
case 105:
                var10 = _closure1_slot14;
                var9 = var10.verbose;
                var11 = _closure1_slot0;
                var8 = _closure1_slot3;
                var6 = 22;
                var6 = var8[var6];
                var7 = undefined;
                var11 = var11.bind(var7)(var6);
                var6 = var11.getConnectionPath;
                var6 = var6.bind(var11)(var5);
                var6 = var9.bind(var10)(var6);
                var6 = _closure1_slot1;
                var3 = 16;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.SESSION_ESTABLISHED;
                var1['connectionState'] = var3;
                var6 = var1.gatewayBackoff;
                var3 = var6.succeed;
                var3 = var3.bind(var6)();
                var3 = 0;
                var1['iosGoingAwayEventCount'] = var3;
                _fun0016_ip = 104; continue _fun0016;
case 24:
                var8 = _closure1_slot14;
                var7 = var8.info;
                var6 = var2.HermesInternal;
                var10 = var6.concat;
                var9 = '[READY_SUPPLEMENTAL] took ';
                var6 = 'ms';
                var6 = var10.bind(var9)(var15, var6);
                var6 = var7.bind(var8)(var6);
                var7 = _closure1_slot1;
                var6 = _closure1_slot3;
                var3 = 16;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var3 = var3.SESSION_ESTABLISHED;
                var1['connectionState'] = var3;
                var6 = var1.gatewayBackoff;
                var3 = var6.succeed;
                var3 = var3.bind(var6)();
                var3 = 0;
                var1['iosGoingAwayEventCount'] = var3;
                _fun0016_ip = 104; continue _fun0016;
case 101:
                var14 = var5.session_id;
                var1['sessionId'] = var14;
                var9 = _closure1_slot0;
                var7 = _closure1_slot3;
                var3 = 22;
                var3 = var7[var3];
                var6 = undefined;
                var9 = var9.bind(var6)(var3);
                var3 = var9.getConnectionPath;
                var11 = var3.bind(var9)(var5);
                var3 = _closure1_slot1;
                var9 = 19;
                var9 = var7[var9];
                var10 = var3.bind(var6)(var9);
                var9 = var10.setServerTrace;
                var9 = var9.bind(var10)(var11);
                var9 = _closure1_slot14;
                var10 = var9.info;
                var8 = var2.HermesInternal;
                var13 = var8.concat;
                var12 = '[READY] took ';
                var8 = 'ms, as ';
                var8 = var13.bind(var12)(var15, var8, var14);
                var8 = var10.bind(var9)(var8);
                var8 = var9.verbose;
                var2 = var2.HermesInternal;
                var10 = var2.concat;
                var2 = '';
                var2 = var10.bind(var2)(var11);
                var2 = var8.bind(var9)(var2);
                var2 = 16;
                var2 = var7[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.SESSION_ESTABLISHED;
                var1['connectionState'] = var2;
                var3 = var1.gatewayBackoff;
                var2 = var3.succeed;
                var2 = var2.bind(var3)();
                var2 = 0;
                var1['iosGoingAwayEventCount'] = var2;
                var3 = var1.setResumeUrl;
                var2 = var5.resume_gateway_url;
                var2 = var3.bind(var1)(var2);
case 104:
                var3 = var1.dispatcher;
                var2 = var3.receiveDispatch;
                var1 = arg3;
                var1 = var2.bind(var3)(var5, var4, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[9] = var5;
        var5 = {};
        var8 = 'handleResumeDispatched';
        var5['key'] = var8;
        var8 = function value() {
            var4 = this;
            var1 = global;
            var3 = var1.Date;
            var2 = var3.now;
            var3 = var2.bind(var3)();
            var2 = var4.connectionStartTime;
            var14 = var3 - var2;
            var3 = _closure1_slot14;
            var2 = var3.info;
            var5 = var4.dispatcher;
            var5 = var5.resumeAnalytics;
            var12 = var5.numEvents;
            var10 = var4.seq;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var15 = '[RESUMED] took ';
            var13 = 'ms, replayed ';
            var11 = ' events, new seq: ';
            var1 = var15[var6](var14, var13, var12, var11, var10, var9);
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[10] = var5;
        var5 = {};
        var8 = 'handleReadyDispatched';
        var5['key'] = var8;
        var8 = function value() {
            var2 = this;
            var1 = false;
            var2['didForceClearGuildHashes'] = var1;
            var1 = true;
            var2['hasConnectedOnce'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[11] = var5;
        var5 = {};
        var8 = '_getGatewayUrl';
        var5['key'] = var8;
        var8 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var2 = this;
                var3 = var2.resumeUrl;
                var1 = null;
                if(!(var1 == var3)) { _fun0017_ip = 10; continue _fun0017 }
case 106:
                var1 = _closure1_slot19;
                _fun0017_ip = 107; continue _fun0017;
case 10:
                var1 = var2.resumeUrl;
case 107:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[12] = var5;
        var5 = {};
        var8 = '_handleHeartbeatReceive';
        var5['key'] = var8;
        var8 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = this;
                var1 = var2._sendHeartbeat;
                var1 = var1.bind(var2)();
                var1 = var2.heartbeater;
                var4 = null;
                var1 = var4 != var1;
                if(!var1) { _fun0018_ip = 18; continue _fun0018 }
case 108:
                var3 = var2.heartbeatInterval;
                var1 = var4 != var3;
case 18:
                if(!var1) { _fun0018_ip = 21; continue _fun0018 }
case 16:
                var1 = global;
                var4 = var1.clearInterval;
                var3 = var2.heartbeater;
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                var4 = var1.setInterval;
                var3 = var2._doHeartbeatInterval;
                var1 = var3.bind;
                var3 = var1.bind(var3)(var2);
                var1 = var2.heartbeatInterval;
                var1 = var4.bind(var5)(var3, var1);
                var2['heartbeater'] = var1;
case 21:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[13] = var5;
        var5 = {};
        var8 = '_handleHeartbeatAck';
        var5['key'] = var8;
        var8 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = this;
                var3 = global;
                var4 = var3.Date;
                var1 = var4.now;
                var1 = var1.bind(var4)();
                var2['lastHeartbeatAckTime'] = var1;
                var1 = true;
                var2['heartbeatAck'] = var1;
                var4 = var2.expeditedHeartbeatTimeout;
                var1 = null;
                if(!(var1 !== var4)) { _fun0019_ip = 12; continue _fun0019 }
case 109:
                var5 = var3.clearTimeout;
                var4 = var2.expeditedHeartbeatTimeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['expeditedHeartbeatTimeout'] = var1;
                var3 = _closure1_slot14;
                var2 = var3.verbose;
                var1 = 'Expedited heartbeat succeeded';
                var1 = var2.bind(var3)(var1);
case 12:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[14] = var5;
        var5 = {};
        var8 = '_handleHeartbeatTimeout';
        var5['key'] = var8;
        var8 = function value() {
            var4 = this;
            var _closure3_slot0 = var4;
            var2 = var4._cleanup;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.close;
                var1 = 4000;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            var6 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = 16;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var5 = var5.WILL_RECONNECT;
            var4['connectionState'] = var5;
            var5 = var4.gatewayBackoff;
            var4 = var5.fail;
            var3 = function() {
                var2 = _closure3_slot0;
                var1 = var2._connect;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot14;
            var3 = var4.warn;
            var2 = 1000;
            var6 = var5 / var2;
            var5 = var6.toFixed;
            var2 = 2;
            var7 = var5.bind(var6)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var5 = '[ACK TIMEOUT] reconnecting in ';
            var2 = ' seconds.';
            var2 = var6.bind(var5)(var7, var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var8;
        var1[15] = var5;
        var5 = {};
        var8 = '_handleClose';
        var5['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var3 = arg3;
                var2 = this;
                var _closure3_slot0 = var2;
                if(var5) { _fun0020_ip = 110; continue _fun0020 }
case 111:
                var5 = false;
case 110:
                var1 = var2._cleanup;
                var1 = var1.bind(var2)();
                var8 = var2.emit;
                var6 = {};
                var6['code'] = var4;
                var6['reason'] = var3;
                var1 = 'close';
                var1 = var8.bind(var2)(var1, var6);
                var1 = 4004;
                if(!(var4 !== var1)) { _fun0020_ip = 112; continue _fun0020 }
case 113:
                var1 = var2._tryDetectInvalidIOSToken;
                var1 = var1.bind(var2)(var4, var3, var5);
                var9 = _closure1_slot1;
                var8 = _closure1_slot3;
                var1 = 16;
                var8 = var8[var1];
                var1 = undefined;
                var8 = var9.bind(var1)(var8);
                var8 = var8.WILL_RECONNECT;
                var2['connectionState'] = var8;
                var8 = var2.nextReconnectIsImmediate;
                if(var8) { _fun0020_ip = 114; continue _fun0020 }
case 115:
                var9 = var2.gatewayBackoff;
                var8 = var9.fail;
                var7 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2._connect;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var10 = var8.bind(var9)(var7);
                var9 = _closure1_slot14;
                var8 = var9.info;
                var7 = var5.toString;
                var15 = var7.bind(var5)();
                var7 = 1000;
                var11 = var10 / var7;
                var10 = var11.toFixed;
                var7 = 2;
                var17 = var10.bind(var11)(var7);
                var7 = global;
                var7 = var7.HermesInternal;
                var13 = var7.concat;
                var24 = '[WS CLOSED] (';
                var11 = ', ';
                var18 = ') retrying in ';
                var16 = ' seconds.';
                var23 = var15;
                var22 = var11;
                var21 = var4;
                var20 = var11;
                var19 = var3;
                var7 = var24[var13](var23, var22, var21, var20, var19, var18, var17, var16, var15);
                var7 = var8.bind(var9)(var7);
                var7 = var2.gatewayBackoff;
                var8 = var7.fails;
                var7 = 4;
                if(!(var8 > var7)) { _fun0020_ip = 116; continue _fun0020 }
case 101:
                var7 = var2._reset;
                var7 = var7.bind(var2)(var5, var4, var3);
                _fun0020_ip = 116; continue _fun0020;
case 114:
                var8 = _closure1_slot14;
                var7 = var8.info;
                var6 = var5.toString;
                var23 = var6.bind(var5)();
                var6 = global;
                var6 = var6.HermesInternal;
                var11 = var6.concat;
                var24 = '[WS CLOSED] (';
                var9 = ', ';
                var18 = ') retrying immediately.';
                var22 = var9;
                var21 = var4;
                var20 = var9;
                var19 = var3;
                var6 = var24[var11](var23, var22, var21, var20, var19, var18, var17);
                var6 = var7.bind(var8)(var6);
                var6 = var2._connect;
                var6 = var6.bind(var2)();
case 116:
                return var1;
case 112:
                var8 = _closure1_slot1;
                var7 = _closure1_slot3;
                var6 = 16;
                var7 = var7[var6];
                var6 = undefined;
                var6 = var8.bind(var6)(var7);
                var6 = var6.CLOSED;
                var2['connectionState'] = var6;
                var7 = _closure1_slot14;
                var6 = var7.warn;
                var1 = '[WS CLOSED] because of authentication failure, marking as closed.';
                var1 = var6.bind(var7)(var1);
                var1 = var2._reset;
                var1 = var1.bind(var2)(var5, var4, var3);
                return var1;
            }
        };
        var5['value'] = var8;
        var1[16] = var5;
        var5 = {};
        var8 = '_tryDetectInvalidIOSToken';
        var5['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var7 = this;
                var _closure3_slot0 = var7;
                var1 = arg3;
                var _closure3_slot1 = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 23;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isIOS;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0021_ip = 117; continue _fun0021 }
case 118:
                var5 = var7.token;
                var4 = null;
                var3 = var4 != var5;
case 117:
                if(!var3) { _fun0021_ip = 88; continue _fun0021 }
case 119:
                var5 = 1001;
                var4 = arg1;
                var3 = var5 === var4;
case 88:
                if(!var3) { _fun0021_ip = 120; continue _fun0021 }
case 22:
                var5 = 'Stream end encountered';
                var4 = arg2;
                var3 = var5 === var4;
case 120:
                if(!var3) { _fun0021_ip = 121; continue _fun0021 }
case 122:
                var4 = var7.iosGoingAwayEventCount;
                var3 = 1;
                var3 = var4 + var3;
                var7['iosGoingAwayEventCount'] = var3;
                var4 = var7.iosGoingAwayEventCount;
                var3 = 3;
                if(!(var3 === var4)) { _fun0021_ip = 121; continue _fun0021 }
case 14:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 24;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var5 = var3.HTTP;
                var4 = var5.get;
                var3 = {};
                var6 = _closure1_slot13;
                var6 = var6.ME;
                var3['url'] = var6;
                var6 = {};
                var7 = var7.token;
                var6['authorization'] = var7;
                var3['headers'] = var6;
                var6 = false;
                var3['rejectWithError'] = var6;
                var5 = var4.bind(var5)(var3);
                var4 = var5.then;
                var3 = function(arg1) {
                    var1 = arg1;
                    var6 = var1.status;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 25;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot12;
                    var3 = var2.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED;
                    var2 = {};
                    var2['api_status_code'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var1 = arg1;
                        var6 = var1.status;
                        var1 = 401;
                        if(!(var1 === var6)) { _fun0022_ip = 123; continue _fun0022 }
case 124:
                        var5 = _closure3_slot0;
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var3 = 16;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var7.bind(var3)(var4);
                        var3 = var3.CLOSED;
                        var5['connectionState'] = var3;
                        var4 = _closure1_slot14;
                        var3 = var4.warn;
                        var2 = '[WS CLOSED] because of manual authentication failure, marking as closed.';
                        var2 = var3.bind(var4)(var2);
                        var4 = var5._reset;
                        var3 = _closure3_slot1;
                        var2 = 4004;
                        var1 = 'invalid token manually detected';
                        var1 = var4.bind(var5)(var3, var2, var1);
case 123:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 25;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot12;
                        var3 = var2.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED;
                        var2 = {};
                        var2['api_status_code'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
case 121:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[17] = var5;
        var5 = {};
        var8 = '_reset';
        var5['key'] = var8;
        var8 = function value(arg1, arg2, arg3) {
            var6 = arg1;
            var5 = arg2;
            var1 = arg3;
            var4 = this;
            var2 = null;
            var4['sessionId'] = var2;
            var2 = 0;
            var4['seq'] = var2;
            var7 = _closure1_slot14;
            var3 = var7.warn;
            var2 = var6.toString;
            var17 = var2.bind(var6)();
            var2 = global;
            var2 = var2.HermesInternal;
            var10 = var2.concat;
            var18 = '[RESET] (';
            var8 = ', ';
            var12 = ')';
            var16 = var8;
            var15 = var5;
            var14 = var8;
            var13 = var1;
            var2 = var18[var10](var17, var16, var15, var14, var13, var12, var11);
            var2 = var3.bind(var7)(var2);
            var3 = var4.emit;
            var2 = {};
            var2['wasClean'] = var6;
            var2['code'] = var5;
            var2['reason'] = var1;
            var1 = 'disconnect';
            var1 = var3.bind(var4)(var1, var2);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[18] = var5;
        var5 = {};
        var8 = '_sendHeartbeatIfDue';
        var5['key'] = var8;
        var8 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var2 = this;
                var3 = var2.heartbeatInterval;
                var1 = null;
                if(!(var1 != var3)) { _fun0023_ip = 125; continue _fun0023 }
case 106:
                var3 = var2.heartbeater;
                if(!(var1 != var3)) { _fun0023_ip = 125; continue _fun0023 }
case 7:
                var4 = var2.lastHeartbeatTime;
                var1 = var1 != var4;
                if(!var1) { _fun0023_ip = 126; continue _fun0023 }
case 18:
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var3 = var3.bind(var5)();
                var4 = var3 - var4;
                var5 = var2.heartbeatInterval;
                var3 = 5000;
                var3 = var5 + var3;
                var1 = var4 > var3;
case 126:
                if(!var1) { _fun0023_ip = 125; continue _fun0023 }
case 88:
                var1 = var2._sendHeartbeat;
                var1 = var1.bind(var2)();
case 125:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[19] = var5;
        var5 = {};
        var8 = '_doHeartbeatInterval';
        var5['key'] = var8;
        var8 = function value() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var2 = this;
                var1 = var2.heartbeatAck;
                if(var1) { _fun0024_ip = 90; continue _fun0024 }
case 31:
                var3 = var2.expeditedHeartbeatTimeout;
                var1 = null;
                if(!(var1 === var3)) { _fun0024_ip = 118; continue _fun0024 }
case 10:
                var1 = var2._handleHeartbeatTimeout;
                var1 = var1.bind(var2)();
                _fun0024_ip = 118; continue _fun0024;
case 90:
                var1 = false;
                var2['heartbeatAck'] = var1;
                var1 = var2._sendHeartbeat;
                var1 = var1.bind(var2)();
case 118:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[20] = var5;
        var5 = {};
        var8 = '_startHeartbeater';
        var5['key'] = var8;
        var8 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var8 = var3.heartbeatInterval;
                var _closure3_slot1 = var8;
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 26;
                var4 = var4[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var4 = null;
                var6 = var4 != var8;
                var5 = 'GatewaySocket: Heartbeat interval should never null here.';
                var5 = var7.bind(var1)(var6, var5);
                var5 = var3.initialHeartbeatTimeout;
                if(!(var4 !== var5)) { _fun0025_ip = 127; continue _fun0025 }
case 3:
                var5 = global;
                var6 = var5.clearTimeout;
                var5 = var3.initialHeartbeatTimeout;
                var5 = var6.bind(var1)(var5);
case 127:
                var5 = var3.heartbeater;
                if(!(var4 !== var5)) { _fun0025_ip = 41; continue _fun0025 }
case 128:
                var5 = global;
                var6 = var5.clearInterval;
                var5 = var3.heartbeater;
                var5 = var6.bind(var1)(var5);
                var3['heartbeater'] = var4;
case 41:
                var4 = global;
                var5 = var4.setTimeout;
                var7 = var4.Math;
                var6 = var7.floor;
                var9 = var4.Math;
                var4 = var9.random;
                var4 = var4.bind(var9)();
                var4 = var4 * var8;
                var4 = var6.bind(var7)(var4);
                var2 = function() {
                    var3 = _closure3_slot0;
                    var2 = null;
                    var3['initialHeartbeatTimeout'] = var2;
                    var2 = true;
                    var3['heartbeatAck'] = var2;
                    var2 = global;
                    var5 = var2.setInterval;
                    var4 = var3._doHeartbeatInterval;
                    var2 = var4.bind;
                    var4 = var2.bind(var4)(var3);
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var2 = var5.bind(var1)(var4, var2);
                    var3['heartbeater'] = var2;
                    var2 = var3._doHeartbeatInterval;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var2 = var5.bind(var1)(var2, var4);
                var3['initialHeartbeatTimeout'] = var2;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[21] = var5;
        var5 = {};
        var8 = '_stopHeartbeater';
        var5['key'] = var8;
        var8 = function value() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var2 = this;
                var3 = var2.heartbeater;
                var1 = null;
                if(!(var1 !== var3)) { _fun0026_ip = 129; continue _fun0026 }
case 106:
                var3 = global;
                var5 = var3.clearInterval;
                var4 = var2.heartbeater;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['heartbeater'] = var1;
case 129:
                var3 = var2.initialHeartbeatTimeout;
                if(!(var1 !== var3)) { _fun0026_ip = 126; continue _fun0026 }
case 35:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.initialHeartbeatTimeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['initialHeartbeatTimeout'] = var1;
case 126:
                var3 = var2.expeditedHeartbeatTimeout;
                if(!(var1 !== var3)) { _fun0026_ip = 25; continue _fun0026 }
case 45:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.expeditedHeartbeatTimeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['expeditedHeartbeatTimeout'] = var1;
case 25:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[22] = var5;
        var5 = {};
        var8 = '_clearHelloTimeout';
        var5['key'] = var8;
        var8 = function value() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var2 = this;
                var3 = var2.helloTimeout;
                var1 = null;
                if(!(var1 != var3)) { _fun0027_ip = 129; continue _fun0027 }
case 106:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.helloTimeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['helloTimeout'] = var1;
case 129:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[23] = var5;
        var5 = {};
        var8 = '_cleanup';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var6 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 27;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var6 = var4.Emitter;
                var4 = var6.resume;
                var4 = var4.bind(var6)();
                var4 = var3._stopHeartbeater;
                var4 = var4.bind(var3)();
                var4 = var3._clearHelloTimeout;
                var4 = var4.bind(var3)();
                var4 = var3.webSocket;
                var6 = null;
                var3['webSocket'] = var6;
                if(!(var6 != var4)) { _fun0028_ip = 130; continue _fun0028 }
case 131:
                var7 = _closure1_slot21;
                var4['onopen'] = var7;
                var4['onmessage'] = var7;
                var4['onerror'] = var7;
                var4['onclose'] = var7;
                if(!(var6 != var5)) { _fun0028_ip = 130; continue _fun0028 }
case 132:
                var4 = var5.bind(var1)(var4);
case 130:
                var5 = var3.gatewayBackoff;
                var4 = var5.cancel;
                var4 = var4.bind(var5)();
                var5 = var3.compressionHandler;
                var4 = var5.close;
                var4 = var4.bind(var5)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var4 = 17;
                var4 = var6[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.getCompressionHandler;
                var2 = _closure1_slot15;
                var2 = var4.bind(var5)(var2);
                var3['compressionHandler'] = var2;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[24] = var5;
        var5 = {};
        var8 = '_doResume';
        var5['key'] = var8;
        var8 = function value() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var6 = this;
                var4 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 16;
                var3 = var7[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.RESUMING;
                var6['connectionState'] = var3;
                var5 = var6.dispatcher;
                var4 = _closure1_slot0;
                var3 = 22;
                var3 = var7[var3];
                var8 = var4.bind(var1)(var3);
                var7 = var8.createResumeAnalytics;
                var3 = global;
                var9 = var3.Date;
                var4 = var9.now;
                var9 = var4.bind(var9)();
                var4 = var6.connectionStartTime;
                var4 = var9 - var4;
                var4 = var7.bind(var8)(var4);
                var5['resumeAnalytics'] = var4;
                var5 = _closure1_slot14;
                var4 = var5.info;
                var7 = var6.sessionId;
                var8 = null;
                var8 = var8 != var7;
                var10 = '';
                if(!var8) { _fun0029_ip = 133; continue _fun0029 }
case 134:
                var10 = var7;
case 133:
                var9 = var6.seq;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var7 = '[RESUME] resuming session ';
                var3 = ', seq: ';
                var3 = var8.bind(var7)(var10, var3, var9);
                var3 = var4.bind(var5)(var3);
                var5 = var6.send;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 14;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.Opcode;
                var4 = var2.RESUME;
                var3 = {};
                var2 = var6.token;
                var3['token'] = var2;
                var2 = var6.sessionId;
                var3['session_id'] = var2;
                var2 = var6.seq;
                var3['seq'] = var2;
                var2 = false;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            }
        };
        var5['value'] = var8;
        var1[25] = var5;
        var5 = {};
        var8 = '_doIdentify';
        var5['key'] = var8;
        var8 = _closure1_slot5;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    StartGenerator();
                    var10 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0030_ip = 135; continue _fun0030 }
case 136:
                    var5 = 0;
                    var10['seq'] = var5;
                    var2 = null;
                    var10['sessionId'] = var2;
                    var3 = var10.handleIdentify;
                    var7 = var3.bind(var10)();
                    if(!(var2 === var7)) { _fun0030_ip = 137; continue _fun0030 }
case 138:
                    var6 = var10._handleClose;
                    var4 = true;
                    var3 = 4004;
                    var2 = 'No connection info provided';
                    var2 = var6.bind(var10)(var4, var3, var2);
                    _fun0030_ip = 71; continue _fun0030;
case 137:
                    var8 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var14 = 16;
                    var4 = var2[var14];
                    var6 = undefined;
                    var4 = var8.bind(var6)(var4);
                    var4 = var4.IDENTIFYING;
                    var10['connectionState'] = var4;
                    var4 = global;
                    var9 = var4.Date;
                    var8 = var9.now;
                    var9 = var8.bind(var9)();
                    var10['identifyStartTime'] = var9;
                    var11 = var4.Promise;
                    var8 = var11.all;
                    var12 = _closure1_slot0;
                    var15 = 28;
                    var2 = var2[var15];
                    var12 = var12.bind(var6)(var2);
                    var2 = var12.isCacheEnabled;
                    var2 = var2.bind(var12)();
                    if(var2) { _fun0030_ip = 139; continue _fun0030 }
case 24:
                    var12 = {};
                    _fun0030_ip = 140; continue _fun0030;
case 139:
                    var13 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var2 = 29;
                    var2 = var16[var2];
                    var13 = var13.bind(var6)(var2);
                    var2 = var13.getCommittedVersions;
                    var12 = var2.bind(var13)();
case 140:
                    var2 = new Array(3);
                    var2[0] = var12;
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var12 = var12[var15];
                    var13 = var13.bind(var6)(var12);
                    var12 = var13.isCacheEnabled;
                    var12 = var12.bind(var13)();
                    if(var12) { _fun0030_ip = 141; continue _fun0030 }
case 47:
                    var12 = {};
                    _fun0030_ip = 142; continue _fun0030;
case 141:
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var13 = 30;
                    var13 = var17[var13];
                    var16 = var16.bind(var6)(var13);
                    var13 = var16.getCommittedVersions;
                    var12 = var13.bind(var16)();
case 142:
                    var2[1] = var12;
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var12 = var12[var15];
                    var13 = var13.bind(var6)(var12);
                    var12 = var13.isCacheEnabled;
                    var12 = var12.bind(var13)();
                    var13 = !var12;
                    var12 = !var13;
                    if(var13) { _fun0030_ip = 143; continue _fun0030 }
case 144:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var13 = 31;
                    var13 = var16[var13];
                    var15 = var15.bind(var6)(var13);
                    var13 = var15.canUseGuildVersions;
                    var12 = var13.bind(var15)();
case 143:
                    var2[2] = var12;
                    var2 = var8.bind(var11)(var2);
                    SaveGenerator(address=365);
case 145:
                    return var2;
case 146:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0030_ip = 147; continue _fun0030 }
case 148:
                    var11 = _closure1_slot4;
                    var8 = 3;
                    var11 = var11.bind(var6)(var2, var8);
                    var13 = var11[var5];
                    var8 = 1;
                    var12 = var11[var8];
                    var5 = 2;
                    var5 = var11[var5];
                    if(var5) { _fun0030_ip = 149; continue _fun0030 }
case 150:
                    var11 = {};
                    var5 = {};
                    var11['guild_versions'] = var5;
                    _fun0030_ip = 151; continue _fun0030;
case 149:
                    var5 = {};
                    var5['guild_versions'] = var13;
                    var13 = var12.highest_last_message_id;
                    var5['highest_last_message_id'] = var13;
                    var13 = var12.read_state_version;
                    var5['read_state_version'] = var13;
                    var13 = var12.user_guild_settings_version;
                    var5['user_guild_settings_version'] = var13;
                    var13 = var12.user_settings_version;
                    var5['user_settings_version'] = var13;
                    var13 = var12.private_channels_version;
                    var5['private_channels_version'] = var13;
                    var13 = var12.api_code_version;
                    var5['api_code_version'] = var13;
                    var12 = var12.initial_guild_id;
                    var5['initial_guild_id'] = var12;
                    var11 = var5;
case 151:
                    var12 = var10.connectionState;
                    var13 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var14];
                    var5 = var13.bind(var6)(var5);
                    var5 = var5.IDENTIFYING;
                    if(!(var12 === var5)) { _fun0030_ip = 152; continue _fun0030 }
case 153:
                    var5 = var10.identifyStartTime;
                    if(!(var5 !== var9)) { _fun0030_ip = 154; continue _fun0030 }
case 152:
                    var12 = _closure1_slot14;
                    var9 = var12.warn;
                    var5 = 'Skipping identify because connectionState or identifyStartTime has changed';
                    var5 = var9.bind(var12)(var5);
                    _fun0030_ip = 71; continue _fun0030;
case 154:
                    var5 = var7.token;
                    var13 = var7.properties;
                    if(!(var6 === var13)) { _fun0030_ip = 155; continue _fun0030 }
case 156:
                    var13 = {};
case 155:
                    var12 = var7.presence;
                    var10['token'] = var5;
                    var14 = _closure1_slot14;
                    var9 = var14.verbose;
                    var7 = '[IDENTIFY]';
                    var7 = var9.bind(var14)(var7);
                    var9 = {};
                    var9['token'] = var5;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var14 = 32;
                    var14 = var7[var14];
                    var16 = var5.bind(var6)(var14);
                    var15 = var16.getClientCapabilities;
                    var14 = {};
                    var17 = 33;
                    var17 = var7[var17];
                    var19 = var5.bind(var6)(var17);
                    var18 = var19.isChannelMetadataObfuscationEnabled;
                    var17 = 'GatewaySocket';
                    var17 = var18.bind(var19)(var17);
                    var14['useChannelObfuscation'] = var17;
                    var14 = var15.bind(var16)(var14);
                    var9['capabilities'] = var14;
                    var9['properties'] = var13;
                    var9['presence'] = var12;
                    var13 = var10.compressionHandler;
                    var12 = var13.usesLegacyCompression;
                    var12 = var12.bind(var13)();
                    var9['compress'] = var12;
                    var9['client_state'] = var11;
                    var11 = var4.JSON;
                    var4 = var11.stringify;
                    var12 = var4.bind(var11)(var9);
                    var4 = var12.length;
                    var10['identifyUncompressedByteSize'] = var4;
                    var11 = _closure1_slot2;
                    var4 = 34;
                    var4 = var7[var4];
                    var11 = var11.bind(var6)(var4);
                    var4 = var11.deflate;
                    var4 = var4.bind(var11)(var12);
                    var4 = var4.length;
                    var10['identifyCompressedByteSize'] = var4;
                    var4 = var10.identifyCount;
                    var4 = var4 + var8;
                    var10['identifyCount'] = var4;
                    var8 = var10.send;
                    var4 = 14;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.Opcode;
                    var5 = var4.IDENTIFY;
                    var4 = false;
                    var4 = var8.bind(var10)(var5, var9, var4);
                    var5 = _closure1_slot1;
                    var4 = 25;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot12;
                    var4 = var3.SESSION_START_CLIENT;
                    var3 = {};
                    var3 = var5.bind(var6)(var4, var3);
case 71:
                    var3 = undefined;
                    return var3;
case 147:
                    return var2;
case 135:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var7 = function _doIdentify() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = '_doFastConnectIdentify';
        var5['key'] = var7;
        var7 = function value() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var2 = this;
                var1 = 0;
                var2['seq'] = var1;
                var3 = null;
                var2['sessionId'] = var3;
                var1 = var2.handleIdentify;
                var1 = var1.bind(var2)();
                if(!(var3 === var1)) { _fun0031_ip = 99; continue _fun0031 }
case 8:
                var6 = var2._handleClose;
                var5 = true;
                var4 = 4004;
                var3 = 'No connection info provided';
                var3 = var6.bind(var2)(var5, var4, var3);
                _fun0031_ip = 157; continue _fun0031;
case 99:
                var1 = var1.token;
                var2['token'] = var1;
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 16;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.IDENTIFYING;
                var2['connectionState'] = var3;
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var2['identifyStartTime'] = var3;
                var4 = var2.identifyCount;
                var3 = 1;
                var3 = var4 + var3;
                var2['identifyCount'] = var3;
                var4 = _closure1_slot14;
                var3 = var4.verbose;
                var1 = '[IDENTIFY, fast-connect]';
                var1 = var3.bind(var4)(var1);
                var1 = var2._updateLastHeartbeatAckTime;
                var1 = var1.bind(var2)();
case 157:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = '_doResumeOrIdentify';
        var5['key'] = var7;
        var7 = function value() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var2 = this;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var3 = var1.bind(var3)();
                var1 = var2.sessionId;
                var4 = null;
                if(!(var4 !== var1)) { _fun0032_ip = 34; continue _fun0032 }
case 98:
                var1 = var2.lastHeartbeatAckTime;
                if(!(var4 != var1)) { _fun0032_ip = 137; continue _fun0032 }
case 129:
                var1 = var2.lastHeartbeatAckTime;
                var3 = var3 - var1;
                var1 = _closure1_slot17;
                if(!(!(var3 <= var1))) { _fun0032_ip = 137; continue _fun0032 }
case 34:
                var1 = var2._doIdentify;
                var1 = var1.bind(var2)();
                _fun0032_ip = 131; continue _fun0032;
case 137:
                var1 = var2._doResume;
                var1 = var1.bind(var2)();
case 131:
                var1 = var2._updateLastHeartbeatAckTime;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = '_updateLastHeartbeatAckTime';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = this;
            var1['lastHeartbeatAckTime'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = '_consumeQOSPayload';
        var5['key'] = var7;
        var7 = function value() {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var2 = this;
                var1 = var2.heartbeatQOSState;
                var1 = var1.currentPayload;
                var5 = var2.heartbeatQOSState;
                var3 = var2.heartbeatQOSState;
                var4 = var3.upcomingState;
                var3 = null;
                if(!(var3 == var4)) { _fun0033_ip = 20; continue _fun0033 }
case 158:
                var6 = var2.heartbeatQOSState;
                var4 = var6.currentPayload;
case 20:
                var5['currentPayload'] = var4;
                var2 = var2.heartbeatQOSState;
                var2['upcomingState'] = var3;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = '_sendHeartbeat';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var1 = var3._consumeQOSPayload;
            var2 = var1.bind(var3)();
            var6 = var3.send;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 14;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = var4.Opcode;
            var5 = var4.QOS_HEARTBEAT;
            var4 = {};
            var7 = var3.seq;
            var4['seq'] = var7;
            var4['qos'] = var2;
            var2 = false;
            var2 = var6.bind(var3)(var5, var4, var2);
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3['lastHeartbeatTime'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[31] = var5;
        var5 = {};
        var7 = 'getLogger';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[32] = var5;
        var5 = {};
        var7 = 'willReconnect';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.connectionState;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.WILL_RECONNECT;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[33] = var5;
        var5 = {};
        var7 = 'isClosed';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.connectionState;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.CLOSED;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[34] = var5;
        var5 = {};
        var7 = 'isSessionEstablished';
        var5['key'] = var7;
        var7 = function value() {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var3 = this;
                var4 = var3.connectionState;
                var7 = _closure1_slot1;
                var1 = _closure1_slot3;
                var6 = 16;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var7.bind(var5)(var1);
                var1 = var1.SESSION_ESTABLISHED;
                var1 = var4 === var1;
                if(var1) { _fun0034_ip = 159; continue _fun0034 }
case 102:
                var3 = var3.connectionState;
                var4 = _closure1_slot1;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.RESUMING;
                var1 = var3 === var2;
case 159:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[35] = var5;
        var5 = {};
        var7 = 'isConnected';
        var5['key'] = var7;
        var7 = function value() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var3 = this;
                var4 = var3.connectionState;
                var7 = _closure1_slot1;
                var1 = _closure1_slot3;
                var6 = 16;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var7.bind(var5)(var1);
                var1 = var1.IDENTIFYING;
                var1 = var4 === var1;
                if(var1) { _fun0035_ip = 159; continue _fun0035 }
case 102:
                var7 = var3.connectionState;
                var8 = _closure1_slot1;
                var4 = _closure1_slot3;
                var4 = var4[var6];
                var4 = var8.bind(var5)(var4);
                var4 = var4.RESUMING;
                var1 = var7 === var4;
case 159:
                if(var1) { _fun0035_ip = 25; continue _fun0035 }
case 160:
                var3 = var3.connectionState;
                var4 = _closure1_slot1;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.SESSION_ESTABLISHED;
                var1 = var3 === var2;
case 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[36] = var5;
        var5 = {};
        var7 = 'connect';
        var5['key'] = var7;
        var7 = function value() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var3 = this;
                var1 = var3.isClosed;
                var1 = var1.bind(var3)();
                var6 = _closure1_slot14;
                if(var1) { _fun0036_ip = 138; continue _fun0036 }
case 110:
                var4 = var6.error;
                var1 = 'Cannot start a new connection, connection state is not closed';
                var1 = var4.bind(var6)(var1);
                var1 = false;
                _fun0036_ip = 161; continue _fun0036;
case 138:
                var5 = var6.verbose;
                var4 = '.connect() called, new state is WILL_RECONNECT';
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 16;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.WILL_RECONNECT;
                var3['connectionState'] = var2;
                var2 = var3._connect;
                var2 = var2.bind(var3)();
                var1 = true;
case 161:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[37] = var5;
        var5 = {};
        var7 = 'resetSocketAndClearCacheOnError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var7 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var14 = var7.action;
                var15 = var7.error;
                var6 = var7.metricAction;
                var10 = _closure1_slot14;
                var9 = var10.error;
                var12 = var15.message;
                var5 = global;
                var1 = var5.HermesInternal;
                var11 = var1.concat;
                var8 = 'resetSocketAndClearCacheOnError during ';
                var1 = ': ';
                var8 = var11.bind(var8)(var14, var1, var12);
                var1 = var15.stack;
                var1 = var9.bind(var10)(var8, var1);
                var12 = _closure1_slot0;
                var16 = _closure1_slot3;
                var1 = 35;
                var8 = var16[var1];
                var1 = undefined;
                var9 = var12.bind(var1)(var8);
                var8 = var9.usesClientMods;
                var13 = var8.bind(var9)();
                var9 = _closure1_slot1;
                var8 = 36;
                var8 = var16[var8];
                var10 = var9.bind(var1)(var8);
                var9 = var10.increment;
                var8 = {};
                var11 = 37;
                var11 = var16[var11];
                var11 = var12.bind(var1)(var11);
                var11 = var11.MetricEvents;
                var11 = var11.SOCKET_CRASHED;
                var8['name'] = var11;
                var11 = null;
                var12 = var14;
                if(!(var11 != var6)) { _fun0037_ip = 55; continue _fun0037 }
case 162:
                var12 = var6;
case 55:
                var6 = var5.HermesInternal;
                var11 = var6.concat;
                var6 = 'action:';
                var11 = var11.bind(var6)(var12);
                var6 = new Array(2);
                var6[0] = var11;
                var11 = var5.HermesInternal;
                var12 = var11.concat;
                var11 = 'modded_client:';
                var11 = var12.bind(var11)(var13);
                var6[1] = var11;
                var8['tags'] = var6;
                var6 = true;
                var8 = var9.bind(var10)(var8, var6);
                var8 = var7.sentry;
                var7 = false;
                if(!(var7 !== var8)) { _fun0037_ip = 163; continue _fun0037 }
case 164:
                var8 = _closure1_slot1;
                var9 = _closure1_slot3;
                var7 = 38;
                var7 = var9[var7];
                var9 = var8.bind(var1)(var7);
                var8 = var9.captureException;
                var7 = {};
                var10 = {};
                var10['socketCrashedAction'] = var14;
                var7['tags'] = var10;
                var7 = var8.bind(var9)(var15, var7);
case 163:
                var8 = _closure1_slot1;
                var9 = _closure1_slot3;
                var7 = 25;
                var7 = var9[var7];
                var12 = var8.bind(var1)(var7);
                var11 = var12.track;
                var7 = _closure1_slot12;
                var10 = var7.GATEWAY_SOCKET_RESET;
                var7 = {};
                var16 = var15.message;
                var7['error_message'] = var16;
                var15 = var15.stack;
                var7['error_stack'] = var15;
                var7['has_client_mods'] = var13;
                var7['action'] = var14;
                var7 = var11.bind(var12)(var10, var7);
                var10 = var3._cleanup;
                var7 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.close;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = var10.bind(var3)(var7);
                var11 = var3._reset;
                var10 = 1000;
                var7 = 'Resetting socket due to error.';
                var7 = var11.bind(var3)(var6, var10, var7);
                var10 = var3.dispatcher;
                var7 = var10.clear;
                var7 = var7.bind(var10)();
                var7 = 16;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.WILL_RECONNECT;
                var3['connectionState'] = var7;
                var8 = var3.dispatchExceptionBackoff;
                var7 = var8.cancel;
                var7 = var7.bind(var8)();
                var7 = var3.dispatchExceptionBackoff;
                var7 = var7._fails;
                var9 = 0;
                if(!(var9 !== var7)) { _fun0037_ip = 165; continue _fun0037 }
case 166:
                var10 = var3.dispatchExceptionBackoff;
                var8 = var10.fail;
                var7 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2._connect;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = var8.bind(var10)(var7);
                _fun0037_ip = 167; continue _fun0037;
case 165:
                var10 = _closure1_slot14;
                var8 = var10.verbose;
                var7 = 'Triggering fast reconnect';
                var7 = var8.bind(var10)(var7);
                var10 = var3.dispatchExceptionBackoff;
                var8 = var10.fail;
                var7 = function() {
                    var1 = undefined;
                    return var1;
                };
                var7 = var8.bind(var10)(var7);
                var8 = var5.setTimeout;
                var7 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2._connect;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = var8.bind(var1)(var7, var9);
case 167:
                var3['didForceClearGuildHashes'] = var6;
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 39;
                var9 = var8[var6];
                var11 = var7.bind(var1)(var9);
                var10 = var11.dispatch;
                var9 = {};
                var12 = 'CLEAR_CACHES';
                var9['type'] = var12;
                var12 = var5.HermesInternal;
                var13 = var12.concat;
                var12 = 'Socket reset during ';
                var12 = var13.bind(var12)(var14);
                var9['reason'] = var12;
                var9 = var10.bind(var11)(var9);
                var6 = var8[var6];
                var8 = var7.bind(var1)(var6);
                var7 = var8.dispatch;
                var6 = {};
                var9 = 'LIBDISCORE_RESET';
                var6['type'] = var9;
                var6 = var7.bind(var8)(var6);
                var7 = var5.clearTimeout;
                var6 = var3.dispatchSuccessTimer;
                var6 = var7.bind(var1)(var6);
                var5 = var5.setTimeout;
                var6 = _closure1_slot18;
                var4 = 2;
                var4 = var4 * var6;
                var2 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.dispatchExceptionBackoff;
                    var1 = var2.succeed;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var5.bind(var1)(var2, var4);
                var3['dispatchSuccessTimer'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[38] = var5;
        var5 = {};
        var7 = 'resetSocketOnDispatchError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var1 = var5.error;
                var2 = var1.message;
                var1 = null;
                var4 = var1 != var2;
                if(!var4) { _fun0038_ip = 168; continue _fun0038 }
case 7:
                var1 = var5.error;
                var6 = var1.message;
                var2 = var6.indexOf;
                var1 = 'Guild data was missing from store';
                var2 = var2.bind(var6)(var1);
                var1 = 0;
                var4 = var2 >= var1;
case 168:
                var2 = var3.resetSocketAndClearCacheOnError;
                var1 = {};
                var8 = var1;
                var7 = var5;
                var5 = copyDataProperties(var8, var7);
                var5 = !var4;
                var4 = 'sentry';
                var1[3] = var5;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[39] = var5;
        var5 = {};
        var7 = 'close';
        var5['key'] = var7;
        var7 = function value() {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var1 = arguments[0];
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = undefined;
                if(!(var1 === var2)) { _fun0039_ip = 169; continue _fun0039 }
case 124:
                var1 = false;
case 169:
                var _closure3_slot1 = var2;
                var5 = var3.isClosed;
                var6 = var5.bind(var3)();
                var5 = _closure1_slot14;
                if(var6) { _fun0039_ip = 170; continue _fun0039 }
case 102:
                var9 = var5.info;
                var11 = var3.connectionState;
                var6 = global;
                var8 = var6.HermesInternal;
                var10 = var8.concat;
                var8 = 'Closing connection, current state is ';
                var8 = var10.bind(var8)(var11);
                var8 = var9.bind(var5)(var8);
                var8 = undefined;
                if(!var1) { _fun0039_ip = 171; continue _fun0039 }
case 172:
                var8 = 4000;
case 171:
                _closure3_slot1 = var8;
                var9 = var3._cleanup;
                var8 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.close;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var9.bind(var3)(var8);
                var8 = _closure1_slot1;
                var9 = _closure1_slot3;
                var7 = 16;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.CLOSED;
                var3['connectionState'] = var7;
                if(var1) { _fun0039_ip = 173; continue _fun0039 }
case 174:
                var7 = null;
                var3['sessionId'] = var7;
                var3['token'] = var7;
                var6 = var6.setImmediate;
                var4 = function() {
                    var5 = _closure3_slot0;
                    var4 = var5._reset;
                    var3 = true;
                    var2 = 1000;
                    var1 = 'Disconnect requested by user';
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var4 = var6.bind(var2)(var4);
case 173:
                return var2;
case 170:
                var4 = var5.verbose;
                var2 = 'close() called, but socket is already closed.';
                var2 = var4.bind(var5)(var2);
                if(var1) { _fun0039_ip = 175; continue _fun0039 }
case 140:
                var2 = null;
                var3['sessionId'] = var2;
                var3['token'] = var2;
                var1 = null;
case 175:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[40] = var5;
        var5 = {};
        var7 = 'networkStateChange';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var7 = arguments[2];
                var6 = this;
                var1 = undefined;
                if(!(var7 === var1)) { _fun0040_ip = 17; continue _fun0040 }
case 31:
                var7 = true;
case 17:
                var5 = var6.expeditedHeartbeat;
                var11 = arg1;
                var10 = arg2;
                var8 = false;
                var12 = var6;
                var9 = var7;
                var2 = var12[var5](var11, var10, var9, var8, var7);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[41] = var5;
        var5 = {};
        var7 = 'expeditedHeartbeat';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var10 = arguments[1];
                var2 = arguments[2];
                var6 = arguments[3];
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = undefined;
                if(!(var10 === var1)) { _fun0041_ip = 108; continue _fun0041 }
case 10:
                var10 = '';
case 108:
                if(!(var2 === var1)) { _fun0041_ip = 176; continue _fun0041 }
case 98:
                var2 = true;
case 176:
                if(!(var6 === var1)) { _fun0041_ip = 177; continue _fun0041 }
case 18:
                var6 = true;
case 177:
                var5 = var4.isClosed;
                var5 = var5.bind(var4)();
                if(var5) { _fun0041_ip = 178; continue _fun0041 }
case 9:
                var5 = var4.isConnected;
                var5 = var5.bind(var4)();
                if(var5) { _fun0041_ip = 162; continue _fun0041 }
case 119:
                if(var2) { _fun0041_ip = 179; continue _fun0041 }
case 3:
                var7 = _closure1_slot14;
                var5 = var7.verbose;
                var12 = var4.connectionState;
                var2 = null;
                var8 = var2 != var10;
                var2 = '';
                var11 = var2;
                if(!var8) { _fun0041_ip = 130; continue _fun0041 }
case 180:
                var11 = var2;
                if(!(var11 !== var10)) { _fun0041_ip = 130; continue _fun0041 }
case 181:
                var2 = 'reason: ';
                var11 = var2 + var10;
case 130:
                var2 = global;
                var2 = var2.HermesInternal;
                var9 = var2.concat;
                var8 = 'Expedited heartbeat requested, but, connection state is ';
                var2 = ' and reconnectImmediately was not requested ';
                var2 = var9.bind(var8)(var12, var2, var11);
                var2 = var5.bind(var7)(var2);
                _fun0041_ip = 182; continue _fun0041;
case 179:
                var5 = var4.resetBackoff;
                var2 = var5.bind(var4)(var10, var6);
case 182:
                var2 = undefined;
                _fun0041_ip = 144; continue _fun0041;
case 162:
                var8 = _closure1_slot14;
                var7 = var8.verbose;
                var6 = null;
                var11 = var6 != var10;
                var5 = '';
                var9 = var5;
                if(!var11) { _fun0041_ip = 183; continue _fun0041 }
case 184:
                var9 = var5;
                if(!(var9 !== var10)) { _fun0041_ip = 183; continue _fun0041 }
case 29:
                var5 = 'reason: ';
                var9 = var5 + var10;
case 183:
                var5 = 'Performing an expedited heartbeat ';
                var5 = var5 + var9;
                var5 = var7.bind(var8)(var5);
                var5 = false;
                var4['heartbeatAck'] = var5;
                var5 = var4._sendHeartbeat;
                var5 = var5.bind(var4)();
                var5 = var4.expeditedHeartbeatTimeout;
                if(!(var6 !== var5)) { _fun0041_ip = 185; continue _fun0041 }
case 186:
                var5 = global;
                var6 = var5.clearTimeout;
                var5 = var4.expeditedHeartbeatTimeout;
                var5 = var6.bind(var1)(var5);
case 185:
                var5 = global;
                var6 = var5.setTimeout;
                var5 = function() {
                    _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = null;
                        var2['expeditedHeartbeatTimeout'] = var3;
                        var3 = var2.heartbeatAck;
                        var2 = false;
                        if(!(var2 === var3)) { _fun0042_ip = 16; continue _fun0042 }
case 30:
                        var2 = _closure3_slot0;
                        var1 = var2._handleHeartbeatTimeout;
                        var1 = var1.bind(var2)();
case 16:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = arg1;
                var3 = var6.bind(var1)(var5, var3);
                var4['expeditedHeartbeatTimeout'] = var3;
                var2 = undefined;
case 144:
                return var2;
case 178:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[42] = var5;
        var5 = {};
        var7 = 'resetBackoff';
        var5['key'] = var7;
        var6 = function value() {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var6 = arguments[0];
                var2 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0043_ip = 187; continue _fun0043 }
case 106:
                var6 = '';
case 187:
                if(!(var2 === var1)) { _fun0043_ip = 7; continue _fun0043 }
case 110:
                var2 = true;
case 7:
                var8 = _closure1_slot14;
                var5 = var8.verbose;
                var4 = null;
                var10 = var4 != var6;
                var4 = '';
                var9 = var4;
                if(!var10) { _fun0043_ip = 188; continue _fun0043 }
case 118:
                var9 = var4;
                if(!(var9 !== var6)) { _fun0043_ip = 188; continue _fun0043 }
case 189:
                var4 = ' for reason: ';
                var9 = var4 + var6;
case 188:
                var4 = 'Connection has reset backoff';
                var4 = var4 + var9;
                var4 = var5.bind(var8)(var4);
                var5 = var3.gatewayBackoff;
                var4 = var5.succeed;
                var4 = var4.bind(var5)();
                var5 = 0;
                var3['iosGoingAwayEventCount'] = var5;
                var4 = true;
                var3['nextReconnectIsImmediate'] = var4;
                var8 = var3.willReconnect;
                var8 = var8.bind(var3)();
                if(var8) { _fun0043_ip = 173; continue _fun0043 }
case 190:
                if(!var2) { _fun0043_ip = 191; continue _fun0043 }
case 192:
                var8 = var3.connectionState;
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var7 = 16;
                var7 = var10[var7];
                var7 = var9.bind(var1)(var7);
                var7 = var7.SESSION_ESTABLISHED;
                var2 = var8 !== var7;
case 191:
                if(!var2) { _fun0043_ip = 54; continue _fun0043 }
case 87:
                var2 = var3._handleClose;
                var2 = var2.bind(var3)(var4, var5, var6);
                _fun0043_ip = 54; continue _fun0043;
case 173:
                var2 = var3._connect;
                var2 = var2.bind(var3)();
case 54:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[43] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/GatewaySocket.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();