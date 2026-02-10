// app/lib/RTCConnection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var7;
        var1 = metroImportAll;
        var _closure1_slot2 = var1;
        var _closure1_slot3 = var6;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 2:
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var3.@@iterator;
case 4:
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var7 = {};
                var9 = var7.toString;
                var7 = var9.call;
                var11 = var7.bind(var9)(var3);
                var10 = var11.slice;
                var9 = 8;
                var7 = -1;
                var9 = var10.bind(var11)(var9, var7);
                var7 = 'Object';
                var7 = var7 === var9;
                if(!var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var7 = var3.constructor;
case 14:
                var10 = var9;
                if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var7 = var3.constructor;
                var10 = var7.name;
case 16:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 23; continue _fun0002 }
case 21:
                var9 = _closure1_slot37;
                var7 = var9.bind(var8)(var3, var8);
case 23:
                _fun0002_ip = 24; continue _fun0002;
case 18:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 24:
                var6 = var7;
                _fun0002_ip = 10; continue _fun0002;
case 12:
                var7 = _closure1_slot37;
                var6 = var7.bind(var8)(var3, var8);
case 10:
                var4 = var6;
                if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 25:
                var7 = var5.TypeError;
                var5 = var7.prototype;
                var6 = Object.create(var5, {constructor: {value: var7}});
                var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var14 = var6;
                var5 = new var14[var7](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
case 8:
                if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                _closure2_slot0 = var4;
case 26:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                        var1 = {};
                        var2 = false;
                        var1['done'] = var2;
                        var3 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var2 = parseFloat(var2);
                        var4 = var2 + 1;
                        _closure2_slot1 = var4;
                        var2 = var3[var2];
                        var1['value'] = var2;
                        _fun0003_ip = 30; continue _fun0003;
case 28:
                        var2 = {};
                        var3 = true;
                        var2['done'] = var3;
                        var1 = var2;
case 30:
                        return var1;
                    }
                };
                return var1;
case 6:
                var1 = var2.call;
                var3 = var1.bind(var2)(var3);
                var2 = var3.next;
                var1 = var2.bind;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var _closure1_slot36 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var2 = var4.length;
                var1 = var3 > var2;
case 31:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var2 = var4.length;
case 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 35; continue _fun0004 }
case 4:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 4; continue _fun0004 }
case 35:
                return var1;
            }
        };
        var _closure1_slot37 = var1;
        var1 = function _isNativeReflectConstruct() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
case 36: // try_start_0
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
case 35: // try_end0
                _fun0005_ip = 37; continue _fun0005;
case 38: // catch_target0
                CatchBlockStart(arg_register=1);
case 37:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot38 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot38 = var1;
        var1 = function getEventHistoryString() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = new Array(0);
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 19;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.now;
                var6 = var2.bind(var4)();
                var5 = _closure1_slot35;
                var1 = var5.length;
                var4 = 0;
                var1 = var4 < var1;
                var2 = 't';
                if(!var1) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                var8 = var5[var4];
                var7 = var3.push;
                var1 = {};
                var11 = var1;
                var10 = var8;
                var9 = copyDataProperties(var11, var10);
                var8 = var8.t;
                var8 = var6 - var8;
                var1[var2] = var8;
                var1 = var7.bind(var3)(var1);
                var4 = var4 + 1;
                var1 = var5.length;
                if(var4 < var1) { _fun0006_ip = 40; continue _fun0006 }
case 39:
                var1 = global;
                var2 = var1.JSON;
                var1 = var2.stringify;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var _closure1_slot39 = var1;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var4);
        var4 = 0;
        var8 = var6[var4];
        var1 = undefined;
        var8 = var7.bind(var1)(var8);
        var _closure1_slot4 = var8;
        var20 = 1;
        var8 = var6[var20];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot5 = var8;
        var19 = 2;
        var8 = var6[var19];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot6 = var8;
        var18 = 3;
        var8 = var6[var18];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot7 = var8;
        var17 = 4;
        var8 = var6[var17];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot8 = var8;
        var16 = 5;
        var8 = var6[var16];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot9 = var8;
        var15 = 6;
        var8 = var6[var15];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot10 = var8;
        var14 = 7;
        var8 = var6[var14];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot11 = var8;
        var13 = 8;
        var8 = var6[var13];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot12 = var8;
        var12 = 9;
        var8 = var6[var12];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot13 = var8;
        var11 = 10;
        var8 = var6[var11];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot14 = var8;
        var10 = 11;
        var8 = var6[var10];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot15 = var8;
        var8 = 12;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot16 = var8;
        var8 = 13;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot17 = var8;
        var8 = 14;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot18 = var8;
        var8 = 15;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot19 = var8;
        var8 = 16;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.AnalyticEvents;
        var _closure1_slot20 = var9;
        var9 = var8.ChannelTypes;
        var _closure1_slot21 = var9;
        var9 = var8.RTCConnectionStates;
        var _closure1_slot22 = var9;
        var8 = var8.RTCConnectionQuality;
        var _closure1_slot23 = var8;
        var8 = 17;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var8 = var8.BROWSER_SUPPORTS_UNIFIED_PLAN;
        var _closure1_slot24 = var8;
        var8 = 18;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.Features;
        var _closure1_slot25 = var9;
        var9 = var8.MediaEngineContextTypes;
        var _closure1_slot26 = var9;
        var9 = var8.ConnectionStates;
        var _closure1_slot27 = var9;
        var9 = var8.Codecs;
        var _closure1_slot28 = var9;
        var9 = var8.MediaTypes;
        var _closure1_slot29 = var9;
        var9 = var8.SpeakingFlags;
        var _closure1_slot30 = var9;
        var8 = var8.DISABLED_DEVICE_ID;
        var _closure1_slot31 = var8;
        var21 = /^https/;
        var9 = var21.test;
        var8 = 'https:';
        var9 = var9.bind(var21)(var8);
        var8 = 'ws:';
        if(!var9) { _fun0001_ip = 41; continue _fun0001 }
case 42:
        var8 = 'wss:';
case 41:
        var _closure1_slot32 = var8;
        var8 = {};
        var8['CONNECTION_CREATE'] = var4;
        var9 = 'CONNECTION_CREATE';
        var8[var4] = var9;
        var8['CONNECTION_DESTROY'] = var20;
        var9 = 'CONNECTION_DESTROY';
        var8[var20] = var9;
        var8['CONNECT'] = var19;
        var9 = 'CONNECT';
        var8[var19] = var9;
        var8['MLS_FAILURE'] = var18;
        var9 = 'MLS_FAILURE';
        var8[var18] = var9;
        var8['MESSAGE_RECEIVE'] = var17;
        var9 = 'MESSAGE_RECEIVE';
        var8[var17] = var9;
        var8['MESSAGE_SEND'] = var16;
        var9 = 'MESSAGE_SEND';
        var8[var16] = var9;
        var8['SET_ENDPOINT'] = var15;
        var9 = 'SET_ENDPOINT';
        var8[var15] = var9;
        var8['RECONNECT'] = var14;
        var9 = 'RECONNECT';
        var8[var14] = var9;
        var8['SET_STATE'] = var13;
        var9 = 'SET_STATE';
        var8[var13] = var9;
        var8['SET_NEXT_CHANNEL_ID'] = var12;
        var9 = 'SET_NEXT_CHANNEL_ID';
        var8[var12] = var9;
        var8['MLS_INIT'] = var11;
        var9 = 'MLS_INIT';
        var8[var11] = var9;
        var8['SECURE_FRAMES_INIT'] = var10;
        var9 = 'SECURE_FRAMES_INIT';
        var8[var10] = var9;
        var _closure1_slot33 = var8;
        var _closure1_slot34 = var4;
        var4 = new Array(0);
        var _closure1_slot35 = var4;
        var4 = 64;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var2 = function(arg1) {
            var4 = function RTCConnection(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var8 = this;
                    var14 = var1.userId;
                    var19 = var1.sessionId;
                    var17 = var1.guildId;
                    var18 = var1.channelId;
                    var9 = var1.context;
                    var7 = undefined;
                    if(!(var9 === var7)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var3 = _closure1_slot26;
                    var9 = var3.DEFAULT;
case 43:
                    var13 = var1.streamServerId;
                    var12 = var1.streamChannelId;
                    var5 = var1.parentMediaSessionId;
                    var4 = var1.joinVoiceId;
                    var _closure3_slot0 = var7;
                    var1 = _closure1_slot5;
                    var6 = _closure2_slot0;
                    var1 = var1.bind(var7)(var8, var6);
                    var1 = _closure1_slot8;
                    var20 = var1.bind(var7)(var6);
                    var6 = _closure1_slot7;
                    var1 = _closure1_slot38;
                    var1 = var1.bind(var7)();
                    if(var1) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    var1 = var20.apply;
                    var1 = var1.bind(var20)(var8, var7);
                    _fun0007_ip = 47; continue _fun0007;
case 45:
                    var10 = global;
                    var16 = var10.Reflect;
                    var15 = var16.construct;
                    var10 = _closure1_slot8;
                    var10 = var10.bind(var7)(var8);
                    var11 = var10.constructor;
                    var10 = new Array(0);
                    var1 = var15.bind(var16)(var20, var10, var11);
case 47:
                    var1 = var6.bind(var7)(var8, var1);
                    _closure3_slot0 = var1;
                    var10 = global;
                    var6 = var10.Map;
                    var8 = var6.prototype;
                    var8 = Object.create(var8, {constructor: {value: var6}});
                    var27 = var8;
                    var6 = new var27[var6](var26);
                    var6 = var6 instanceof Object ? var6 : var8;
                    var1['_secureFramesRosterMap'] = var6;
                    var8 = false;
                    var1['reconnecting'] = var8;
                    var6 = 0;
                    var1['_nextFailureId'] = var6;
                    var11 = new Array(0);
                    var1['_mlsFailures'] = var11;
                    var11 = var10.Map;
                    var15 = var11.prototype;
                    var15 = Object.create(var15, {constructor: {value: var11}});
                    var27 = var15;
                    var11 = new var27[var11](var26);
                    var11 = var11 instanceof Object ? var11 : var15;
                    var1['_secureFramesTransitionStates'] = var11;
                    var1['_secureFramesMaxConcurrentTransitions'] = var6;
                    var1['_secureFramesTransitionPrepareCount'] = var6;
                    var1['_secureFramesTransitionExecuteCount'] = var6;
                    var1['_numNoiseCancellationChanges'] = var6;
                    var11 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var5 = _closure3_slot0;
                            var4 = var5.recordEvent;
                            var2 = {};
                            var6 = _closure1_slot33;
                            var6 = var6.RECONNECT;
                            var2['c'] = var6;
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure3_slot0;
                            var2 = var2._socket;
                            var4 = null;
                            if(!(var4 != var2)) { _fun0008_ip = 48; continue _fun0008 }
case 28:
                            var4 = _closure3_slot0;
                            var4 = var4._connected;
                            if(!var4) { _fun0008_ip = 13; continue _fun0008 }
case 49:
                            var4 = _closure3_slot0;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var3 = 19;
                            var5 = var5[var3];
                            var3 = undefined;
                            var5 = var6.bind(var3)(var5);
                            var3 = var5.now;
                            var3 = var3.bind(var5)();
                            var4['_connectStartTime'] = var3;
case 13:
                            var3 = _closure3_slot0;
                            var3 = var3._connecting;
                            if(var3) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                            var4 = _closure3_slot0;
                            var3 = var4._trackVoiceConnectionConnecting;
                            var3 = var3.bind(var4)();
                            var4 = _closure3_slot0;
                            var3 = true;
                            var4['_connecting'] = var3;
                            var4 = _closure3_slot0;
                            var3 = false;
                            var4['_encountered_socket_failure'] = var3;
case 50:
                            var4 = _closure3_slot0;
                            var3 = var4._connectCount;
                            var3 = var3 + 1;
                            var4['_connectCount'] = var3;
                            var3 = _closure3_slot0;
                            var1 = true;
                            var3['reconnecting'] = var1;
                            var1 = var2.close;
                            var1 = var1.bind(var2)();
                            var1 = var2.connect;
                            var1 = var1.bind(var2)();
case 48:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['reconnect'] = var11;
                    var16 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var11 = 20;
                    var11 = var15[var11];
                    var21 = var16.bind(var7)(var11);
                    var20 = var1._alertMLSFailure;
                    var11 = 100;
                    var11 = var21.bind(var7)(var20, var11);
                    var1['_alertMLSFailureDebouced'] = var11;
                    var11 = function() {
                        var4 = _closure3_slot0;
                        var3 = var4.expeditedHeartbeat;
                        var2 = 5000;
                        var1 = 'network detected online.';
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1['_handleNetworkOnline'] = var11;
                    var11 = function() {
                        var5 = _closure3_slot0;
                        var4 = var5.expeditedHeartbeat;
                        var3 = 15000;
                        var2 = 'network detected offline.';
                        var1 = false;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1['_handleNetworkOffline'] = var11;
                    var11 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var2 = var1._socket;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                            var1 = var2.noRoute;
                            var1 = var1.bind(var2)();
case 52:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['_handleNoRoute'] = var11;
                    var11 = function() {
                        var4 = _closure3_slot0;
                        var3 = var4.expeditedHeartbeat;
                        var2 = 5000;
                        var1 = 'power monitor resumed';
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1['_handlePowerResume'] = var11;
                    var11 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var3 = var2._voiceQuality;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                            var2 = _closure3_slot0;
                            var3 = var2._voiceQuality;
                            var2 = var3.getPeriodicStats;
                            var3 = var2.bind(var3)();
                            var4 = _closure3_slot0;
                            var2 = var4.shouldReportPeriodicStats;
                            var2 = var2.bind(var4)(var3);
                            if(!var2) { _fun0010_ip = 56; continue _fun0010 }
case 30:
                            var2 = _closure1_slot36;
                            var28 = undefined;
                            var27 = var2.bind(var28)(var3);
                            var3 = var27.bind(var28)();
                            var2 = var3.done;
                            var26 = 21;
                            var25 = 'media_session_id';
                            var24 = 'sender_user_id';
                            var23 = 'hostname';
                            var22 = 'frame_op_silent';
                            var21 = 'frame_op_normal';
                            var20 = 'frame_op_merged';
                            var19 = 'frame_op_expanded';
                            var18 = 'frame_op_accelerated';
                            var17 = 'frame_op_preemptive_expanded';
                            var16 = 'frame_op_cng';
                            var15 = 'accelerate_rate';
                            var14 = 'expand_rate';
                            var13 = 'preemptive_expand_rate';
                            var12 = 'speech_expand_rate';
                            var11 = 'duration_ms';
                            var10 = 'sequence_id';
                            var9 = 'input_device';
                            var8 = 'output_device';
                            var7 = global;
                            var6 = 'ping_average';
                            var5 = 'ping_bad_count';
                            var4 = 'parent_media_session_id';
                            if(var2) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                            var33 = var3.value;
                            var30 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var2 = var2[var26];
                            var32 = var30.bind(var28)(var2);
                            var31 = var32.track;
                            var2 = _closure1_slot20;
                            var30 = var2.VOICE_QUALITY_PERIODIC_STATS;
                            var2 = {};
                            var35 = _closure3_slot0;
                            var34 = var35._getAnalyticsProperties;
                            var37 = var34.bind(var35)();
                            var38 = var2;
                            var34 = copyDataProperties(var38, var37);
                            var35 = _closure3_slot0;
                            var34 = var35.getMediaSessionId;
                            var34 = var34.bind(var35)();
                            var2[var25] = var34;
                            var34 = var33.userId;
                            var2[var24] = var34;
                            var34 = _closure3_slot0;
                            var34 = var34.hostname;
                            var2[var23] = var34;
                            var34 = var33.silent;
                            var2[var22] = var34;
                            var34 = var33.normal;
                            var2[var21] = var34;
                            var34 = var33.merged;
                            var2[var20] = var34;
                            var34 = var33.expanded;
                            var2[var19] = var34;
                            var34 = var33.accelerated;
                            var2[var18] = var34;
                            var34 = var33.preemptiveExpanded;
                            var2[var17] = var34;
                            var34 = var33.cng;
                            var2[var16] = var34;
                            var34 = var33.accelerateRate;
                            var2[var15] = var34;
                            var34 = var33.expandRate;
                            var2[var14] = var34;
                            var34 = var33.preemptiveExpandRate;
                            var2[var13] = var34;
                            var34 = var33.speechExpandRate;
                            var2[var12] = var34;
                            var33 = var33.durationMs;
                            var2[var11] = var33;
                            var33 = _closure3_slot0;
                            var33 = var33._voiceQualityPeriodicStatsSequenceId;
                            var2[var10] = var33;
                            var34 = _closure3_slot0;
                            var33 = var34.getInputDeviceName;
                            var33 = var33.bind(var34)();
                            var2[var9] = var33;
                            var34 = _closure3_slot0;
                            var33 = var34.getOutputDeviceName;
                            var33 = var33.bind(var34)();
                            var2[var8] = var33;
                            var35 = var7.Math;
                            var34 = var35.round;
                            var36 = _closure3_slot0;
                            var33 = var36.getAveragePing;
                            var33 = var33.bind(var36)();
                            var33 = var34.bind(var35)(var33);
                            var2[var6] = var33;
                            var33 = _closure3_slot0;
                            var33 = var33._pingBadCount;
                            var2[var5] = var33;
                            var33 = _closure3_slot0;
                            var33 = var33.parentMediaSessionId;
                            var2[var4] = var33;
                            var2 = var31.bind(var32)(var30, var2);
                            var30 = var27.bind(var28)();
                            var2 = var30.done;
                            var3 = var30;
                            if(!var2) { _fun0010_ip = 57; continue _fun0010 }
case 56:
                            var2 = _closure3_slot0;
                            var1 = var2._voiceQualityPeriodicStatsSequenceId;
                            var1 = var1 + 1;
                            var2['_voiceQualityPeriodicStatsSequenceId'] = var1;
case 54:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['_handleVoiceQualityPeriodicsStats'] = var11;
                    var11 = function() {
                        var1 = {};
                        var4 = _closure3_slot0;
                        var2 = var4.getInputDeviceName;
                        var2 = var2.bind(var4)();
                        var1['input_device'] = var2;
                        var2 = global;
                        var7 = var2.Object;
                        var6 = var7.keys;
                        var5 = _closure1_slot15;
                        var4 = var5.getInputDevices;
                        var4 = var4.bind(var5)();
                        var4 = var6.bind(var7)(var4);
                        var4 = var4.length;
                        var1['input_device_count'] = var4;
                        var4 = _closure3_slot0;
                        var3 = var4.getOutputDeviceName;
                        var3 = var3.bind(var4)();
                        var1['output_device'] = var3;
                        var4 = var2.Object;
                        var3 = var4.keys;
                        var2 = var5.getOutputDevices;
                        var2 = var2.bind(var5)();
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.length;
                        var1['output_device_count'] = var2;
                        return var1;
                    };
                    var1['getAudioDeviceStates'] = var11;
                    var11 = function() {
                        var1 = {};
                        var3 = _closure3_slot0;
                        var2 = var3.getVideoDeviceName;
                        var2 = var2.bind(var3)();
                        var1['camera_device'] = var2;
                        var2 = global;
                        var4 = var2.Object;
                        var3 = var4.keys;
                        var5 = _closure1_slot15;
                        var2 = var5.getVideoDevices;
                        var2 = var2.bind(var5)();
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.length;
                        var1['camera_device_count'] = var2;
                        return var1;
                    };
                    var1['getVideoDeviceStates'] = var11;
                    var11 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure1_slot14;
                            var2 = var3.getChannel;
                            var1 = _closure3_slot0;
                            var1 = var1.channelId;
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            var3 = var1 == var2;
                            var1 = undefined;
                            var9 = undefined;
                            if(var3) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                            var9 = var2.type;
case 58:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 21;
                            var2 = var4[var2];
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot20;
                            var3 = var2.VOICE_CONNECTION_CONNECTING;
                            var2 = {};
                            var10 = _closure3_slot0;
                            var8 = var10.getAudioDeviceStates;
                            var11 = var8.bind(var10)();
                            var12 = var2;
                            var8 = copyDataProperties(var12, var11);
                            var10 = _closure3_slot0;
                            var8 = var10.getVideoDeviceStates;
                            var11 = var8.bind(var10)();
                            var12 = var2;
                            var8 = copyDataProperties(var12, var11);
                            var8 = _closure3_slot0;
                            var10 = var8.guildId;
                            var8 = 'guild_id';
                            var2[var8] = var10;
                            var8 = _closure3_slot0;
                            var10 = var8.channelId;
                            var8 = 'channel_id';
                            var2[var8] = var10;
                            var10 = _closure3_slot0;
                            var8 = var10.getRTCConnectionId;
                            var10 = var8.bind(var10)();
                            var8 = 'rtc_connection_id';
                            var2[var8] = var10;
                            var8 = _closure3_slot0;
                            var10 = var8.hostname;
                            var8 = 'hostname';
                            var2[var8] = var10;
                            var8 = _closure3_slot0;
                            var10 = var8._connectCount;
                            var8 = 'connect_count';
                            var2[var8] = var10;
                            var8 = _closure3_slot0;
                            var10 = var8.context;
                            var8 = 'context';
                            var2[var8] = var10;
                            var8 = 'channel_type';
                            var2[var8] = var9;
                            var9 = _closure3_slot0;
                            var8 = var9.getVoiceParticipantType;
                            var9 = var8.bind(var9)();
                            var8 = 'participant_type';
                            var2[var8] = var9;
                            var8 = _closure1_slot15;
                            var7 = var8.isMute;
                            var8 = var7.bind(var8)();
                            var7 = 'is_muted';
                            var2[var7] = var8;
                            var7 = _closure3_slot0;
                            var8 = var7.joinVoiceId;
                            var7 = 'join_voice_id';
                            var2[var7] = var8;
                            var6 = _closure3_slot0;
                            var7 = var6._connectionSerial;
                            var6 = 'connection_serial';
                            var2[var6] = var7;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var1['_trackVoiceConnectionConnecting'] = var11;
                    var11 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var3 = arg1;
                            var1 = _closure3_slot0;
                            var5 = var1._goLiveQualityManager;
                            var1 = null;
                            if(!(var1 != var5)) { _fun0012_ip = 60; continue _fun0012 }
case 55:
                            var4 = var5.onIncomingVideoEnabled;
                            var4 = var4.bind(var5)(var3);
case 60:
                            var2 = _closure3_slot0;
                            var2 = var2._videoQuality;
                            if(!(var1 != var2)) { _fun0012_ip = 61; continue _fun0012 }
case 5:
                            var1 = var2.setOcclusionIncomingVideoEnabled;
                            var1 = var1.bind(var2)(var3);
case 61:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['incomingVideoEnabledChanged'] = var11;
                    var11 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var3 = var1._videoQuality;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0013_ip = 62; continue _fun0013 }
case 53:
                            var2 = var3.setWindowOcclusionState;
                            var1 = arg1;
                            var1 = !var1;
                            var1 = var2.bind(var3)(var1);
case 62:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['windowVisibilityChanged'] = var11;
                    var1['context'] = var9;
                    var20 = var1.recordEvent;
                    var11 = {};
                    var21 = _closure1_slot33;
                    var21 = var21.CONNECTION_CREATE;
                    var11['c'] = var21;
                    var11 = var20.bind(var1)(var11);
                    var11 = _closure1_slot15;
                    var20 = var11.fetchAsyncResources;
                    var22 = var20.bind(var11)();
                    var21 = var22.catch;
                    var20 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 22;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.captureException;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var20 = var21.bind(var22)(var20);
                    var1['_fetchAsyncResourcesPromise'] = var20;
                    var1['userId'] = var14;
                    var1['sessionId'] = var19;
                    var1['guildId'] = var17;
                    var1['_channelId'] = var18;
                    var19 = var10.Set;
                    var17 = new Array(1);
                    var17[0] = var18;
                    var18 = var19.prototype;
                    var18 = Object.create(var18, {constructor: {value: var19}});
                    var27 = var18;
                    var26 = var17;
                    var17 = new var27[var19](var26, var25);
                    var17 = var17 instanceof Object ? var17 : var18;
                    var1['channelIds'] = var17;
                    var1['streamServerId'] = var13;
                    var1['streamChannelId'] = var12;
                    var1['parentMediaSessionId'] = var5;
                    var1['joinVoiceId'] = var4;
                    var4 = _closure1_slot34;
                    var4 = parseFloat(var4);
                    var5 = var4 + 1;
                    _closure1_slot34 = var5;
                    var1['_connectionSerial'] = var4;
                    var4 = 23;
                    var4 = var15[var4];
                    var12 = var16.bind(var7)(var4);
                    var26 = var1.trueServerId;
                    var24 = var1.context;
                    var4 = var10.HermesInternal;
                    var17 = var4.concat;
                    var27 = 'RTCConnection(';
                    var25 = ', ';
                    var23 = ')';
                    var26 = var27[var17](var26, var25, var24, var23, var22);
                    var5 = var12.prototype;
                    var5 = Object.create(var5, {constructor: {value: var12}});
                    var27 = var5;
                    var4 = new var27[var12](var26, var25);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var1['logger'] = var4;
                    var12 = var1.logger;
                    var4 = var12.enableNativeLogger;
                    var5 = true;
                    var4 = var4.bind(var12)(var5);
                    var4 = null;
                    var1['_endpoint'] = var4;
                    var1['hostname'] = var4;
                    var1['port'] = var4;
                    var1['token'] = var4;
                    var1['voiceVersion'] = var4;
                    var1['rtcWorkerVersion'] = var4;
                    var12 = _closure1_slot22;
                    var12 = var12.AWAITING_ENDPOINT;
                    var1['state'] = var12;
                    var13 = _closure1_slot0;
                    var12 = 24;
                    var12 = var15[var12];
                    var12 = var13.bind(var7)(var12);
                    var18 = var12.StateHistory;
                    var26 = var1.state;
                    var17 = var18.prototype;
                    var17 = Object.create(var17, {constructor: {value: var18}});
                    var27 = var17;
                    var12 = new var27[var18](var26, var25);
                    var12 = var12 instanceof Object ? var12 : var17;
                    var1['stateHistory'] = var12;
                    var1['_socket'] = var4;
                    var12 = 25;
                    var12 = var15[var12];
                    var18 = var16.bind(var7)(var12);
                    var12 = var18.prototype;
                    var16 = Object.create(var12, {constructor: {value: var18}});
                    var26 = 1000;
                    var25 = 10000;
                    var27 = var16;
                    var12 = new var27[var18](var26, var25, var24);
                    var12 = var12 instanceof Object ? var12 : var16;
                    var1['_backoff'] = var12;
                    var1['_destroyed'] = var8;
                    var12 = new Array(0);
                    var1['_pings'] = var12;
                    var1['_pingBadCount'] = var6;
                    var12 = new Array(0);
                    var1['_pingTimeouts'] = var12;
                    var1['_mediaSessionId'] = var4;
                    var1['_voiceQuality'] = var4;
                    var1['_voiceQualityPeriodicStatsInterval'] = var4;
                    var1['_voiceQualityPeriodicStatsSequenceId'] = var6;
                    var1['_systemResponsiveness'] = var4;
                    var1['_noiseCancellationError'] = var6;
                    var1['_voiceDuration'] = var4;
                    var1['_videoQuality'] = var4;
                    var1['_videoHealthManager'] = var4;
                    var1['_sentVideo'] = var8;
                    var1['_videoDecoderFallbackSuppressed'] = var8;
                    var1['_outboundLossRate'] = var4;
                    var12 = 19;
                    var12 = var15[var12];
                    var16 = var13.bind(var7)(var12);
                    var12 = var16.now;
                    var12 = var12.bind(var16)();
                    var1['_createdTime'] = var12;
                    var1['_connectStartTime'] = var6;
                    var1['_connectCompletedTime'] = var6;
                    var12 = 26;
                    var12 = var15[var12];
                    var13 = var13.bind(var7)(var12);
                    var12 = var13.v4;
                    var12 = var12.bind(var13)();
                    var1['_rtcConnectionId'] = var12;
                    var1['_connectCount'] = var6;
                    var1['_connected'] = var8;
                    var1['_connecting'] = var8;
                    var1['_encountered_socket_failure'] = var8;
                    var1['_inputDetected'] = var8;
                    var12 = new Array(0);
                    var1['_selectedExperiments'] = var12;
                    var1['_secureFramesState'] = var4;
                    var13 = var10.Set;
                    var10 = new Array(1);
                    var10[0] = var14;
                    var12 = var13.prototype;
                    var12 = Object.create(var12, {constructor: {value: var13}});
                    var27 = var12;
                    var26 = var10;
                    var10 = new var27[var13](var26, var25);
                    var10 = var10 instanceof Object ? var10 : var12;
                    var1['_userIds'] = var10;
                    var12 = var1._secureFramesRosterMap;
                    var10 = var12.clear;
                    var10 = var10.bind(var12)();
                    var10 = new Array(0);
                    var1['_mlsFailures'] = var10;
                    var1['_nextFailureId'] = var6;
                    var1['_mediaEngineConnectionId'] = var4;
                    var1['reconnecting'] = var8;
                    var1['_lastSentSpeakingStatus'] = var6;
                    var1['_lastSentSSRC'] = var7;
                    var10 = var11.supports;
                    var6 = _closure1_slot25;
                    var6 = var6.FIRST_FRAME_CALLBACK;
                    var13 = var10.bind(var11)(var6);
                    if(!var13) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                    var11 = _closure1_slot15;
                    var10 = var11.supports;
                    var6 = _closure1_slot25;
                    var6 = var6.REMOTE_USER_MULTI_STREAM;
                    var13 = var10.bind(var11)(var6);
case 63:
                    var6 = _closure1_slot26;
                    var6 = var6.DEFAULT;
                    if(!(var9 !== var6)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                    var6 = _closure1_slot26;
                    var6 = var6.STREAM;
                    if(!(var9 === var6)) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var6 = 28;
                    var9 = var12[var6];
                    var9 = var10.bind(var7)(var9);
                    var10 = var9.prototype;
                    var10 = Object.create(var10, {constructor: {value: var9}});
                    var27 = var10;
                    var26 = true;
                    var9 = new var27[var9](var26, var25);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var1['_goLiveQualityManager'] = var9;
                    var16 = var1._goLiveQualityManager;
                    var15 = var16.on;
                    var9 = _closure1_slot0;
                    var10 = var12[var6];
                    var10 = var9.bind(var7)(var10);
                    var10 = var10.GoLiveQualityManagerEvent;
                    var11 = var10.RequestedSSRCsUpdate;
                    var10 = function(arg1, arg2, arg3) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var5 = var1._connection;
                            var1 = null;
                            if(!(var1 != var5)) { _fun0014_ip = 69; continue _fun0014 }
case 53:
                            var4 = var5.createUser;
                            var3 = arg1;
                            var2 = arg2;
                            var1 = arg3;
                            var1 = var4.bind(var5)(var3, var2, var1);
case 69:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10 = var15.bind(var16)(var11, var10);
                    var11 = var1._goLiveQualityManager;
                    var10 = var11.on;
                    var6 = var12[var6];
                    var6 = var9.bind(var7)(var6);
                    var6 = var6.GoLiveQualityManagerEvent;
                    var9 = var6.RequestedStreamsUpdate;
                    var6 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var3 = arg1;
                            var2 = _closure3_slot0;
                            var4 = var2.state;
                            var2 = _closure1_slot22;
                            var2 = var2.RTC_CONNECTED;
                            var2 = var4 === var2;
                            if(!var2) { _fun0015_ip = 70; continue _fun0015 }
case 60:
                            var4 = _closure3_slot0;
                            var5 = var4._socket;
                            var4 = null;
                            var2 = var4 != var5;
case 70:
                            if(!var2) { _fun0015_ip = 71; continue _fun0015 }
case 72:
                            var2 = _closure3_slot0;
                            var5 = var2.logger;
                            var4 = var5.info;
                            var2 = global;
                            var7 = var2.JSON;
                            var6 = var7.stringify;
                            var7 = var6.bind(var7)(var3);
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var2 = 'Go Live Media sink wants: ';
                            var2 = var6.bind(var2)(var7);
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure3_slot0;
                            var4 = var2._socket;
                            var2 = var4.mediaSinkWants;
                            var2 = var2.bind(var4)(var3);
                            var1 = _closure3_slot0;
                            var2 = var1._connection;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0015_ip = 71; continue _fun0015 }
case 73:
                            var1 = var2.setLocalVideoSinkWants;
                            var1 = var1.bind(var2)(var3);
case 71:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var10.bind(var11)(var9, var6);
                    _fun0007_ip = 67; continue _fun0007;
case 65:
                    var10 = _closure1_slot14;
                    var9 = var10.getChannel;
                    var6 = var1.channelId;
                    var6 = var9.bind(var10)(var6);
                    var9 = var4 == var6;
                    var15 = undefined;
                    if(var9) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                    var15 = var6.type;
case 74:
                    var6 = _closure1_slot21;
                    var9 = var6.GUILD_STAGE_VOICE;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var6 = 27;
                    var10 = var12[var6];
                    var11 = var11.bind(var7)(var10);
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {constructor: {value: var11}});
                    var25 = var15 === var9;
                    var27 = var10;
                    var26 = var14;
                    var24 = var13;
                    var9 = new var27[var11](var26, var25, var24, var23);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var1['_localMediaSinkWantsManager'] = var9;
                    var14 = var1._localMediaSinkWantsManager;
                    var13 = var14.on;
                    var9 = _closure1_slot0;
                    var10 = var12[var6];
                    var10 = var9.bind(var7)(var10);
                    var10 = var10.RTCMediaSinkWantsManagerEvent;
                    var11 = var10.Update;
                    var10 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var3 = arg1;
                            var2 = _closure3_slot0;
                            var4 = var2.state;
                            var2 = _closure1_slot22;
                            var2 = var2.RTC_CONNECTED;
                            var2 = var4 === var2;
                            if(!var2) { _fun0016_ip = 70; continue _fun0016 }
case 60:
                            var4 = _closure3_slot0;
                            var5 = var4._socket;
                            var4 = null;
                            var2 = var4 != var5;
case 70:
                            if(!var2) { _fun0016_ip = 71; continue _fun0016 }
case 72:
                            var2 = _closure3_slot0;
                            var5 = var2.logger;
                            var4 = var5.info;
                            var2 = global;
                            var7 = var2.JSON;
                            var6 = var7.stringify;
                            var7 = var6.bind(var7)(var3);
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var2 = 'Media sink wants: ';
                            var2 = var6.bind(var2)(var7);
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure3_slot0;
                            var4 = var2._socket;
                            var2 = var4.mediaSinkWants;
                            var2 = var2.bind(var4)(var3);
                            var1 = _closure3_slot0;
                            var2 = var1._connection;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0016_ip = 71; continue _fun0016 }
case 73:
                            var1 = var2.setLocalVideoSinkWants;
                            var1 = var1.bind(var2)(var3);
case 71:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10 = var13.bind(var14)(var11, var10);
                    var11 = var1._localMediaSinkWantsManager;
                    var10 = var11.on;
                    var6 = var12[var6];
                    var6 = var9.bind(var7)(var6);
                    var6 = var6.RTCMediaSinkWantsManagerEvent;
                    var9 = var6.UserSSRCUpdate;
                    var6 = function(arg1, arg2, arg3) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var5 = var1._connection;
                            var1 = null;
                            if(!(var1 != var5)) { _fun0017_ip = 69; continue _fun0017 }
case 53:
                            var4 = var5.createUser;
                            var3 = arg1;
                            var2 = arg2;
                            var1 = arg3;
                            var1 = var4.bind(var5)(var3, var2, var1);
case 69:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var10.bind(var11)(var9, var6);
case 67:
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var6 = 27;
                    var6 = var12[var6];
                    var6 = var9.bind(var7)(var6);
                    var6 = var6.DEFAULT_WANTS_FULL;
                    var1['_remoteVideoSinkWants'] = var6;
                    var6 = 29;
                    var10 = var12[var6];
                    var10 = var9.bind(var7)(var10);
                    var14 = var10.WindowVisibilityVideoManager;
                    var13 = var14.on;
                    var10 = var12[var6];
                    var10 = var9.bind(var7)(var10);
                    var10 = var10.WindowVisibilityEvent;
                    var11 = var10.IncomingVideoEnabledChanged;
                    var10 = var1.incomingVideoEnabledChanged;
                    var10 = var13.bind(var14)(var11, var10);
                    var10 = var12[var6];
                    var10 = var9.bind(var7)(var10);
                    var11 = var10.WindowVisibilityVideoManager;
                    var10 = var11.on;
                    var6 = var12[var6];
                    var6 = var9.bind(var7)(var6);
                    var6 = var6.WindowVisibilityEvent;
                    var9 = var6.WindowVisibilityChanged;
                    var6 = var1.windowVisibilityChanged;
                    var6 = var10.bind(var11)(var9, var6);
                    var9 = _closure1_slot17;
                    var6 = var9.shouldRecordNextConnection;
                    var6 = var6.bind(var9)();
                    if(var6) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                    var1['_recordingEnabled'] = var8;
                    _fun0007_ip = 78; continue _fun0007;
case 76:
                    var1['_recordingEnabled'] = var5;
                    var6 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var5 = 30;
                    var5 = var9[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.setShouldRecordNextConnection;
                    var5 = var5.bind(var6)(var8);
case 78:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 31;
                    var9 = var8[var5];
                    var11 = var6.bind(var7)(var9);
                    var10 = var11.addOnlineCallback;
                    var9 = var1._handleNetworkOnline;
                    var9 = var10.bind(var11)(var9);
                    var5 = var8[var5];
                    var9 = var6.bind(var7)(var5);
                    var6 = var9.addOfflineCallback;
                    var5 = var1._handleNetworkOffline;
                    var5 = var6.bind(var9)(var5);
                    var6 = _closure1_slot0;
                    var5 = 32;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.isDesktop;
                    var5 = var5.bind(var6)();
                    if(!var5) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 33;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var8 = var5.remotePowerMonitor;
                    var7 = var8.on;
                    var6 = var1._handlePowerResume;
                    var5 = 'resume';
                    var5 = var7.bind(var8)(var5, var6);
                    var1['powerMonitorListener'] = var5;
case 79:
                    var5 = new Array(0);
                    var1['_supportedBandwidthEstimationExperiments'] = var5;
                    var1['_bandwidthEstimationExperiment'] = var4;
                    var4 = _closure1_slot15;
                    var3 = var4.getMediaEngine;
                    var4 = var3.bind(var4)();
                    var3 = var4.getSupportedBandwidthEstimationExperiments;
                    var2 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var2['_supportedBandwidthEstimationExperiments'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot9;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot6;
            var5 = {};
            var1 = 'recordEvent';
            var5['key'] = var1;
            var1 = function value(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var5 = _closure1_slot35;
                    var3 = var5.push;
                    var2 = {};
                    var8 = arg1;
                    var9 = var2;
                    var1 = copyDataProperties(var9, var8);
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 19;
                    var6 = var6[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.now;
                    var7 = var6.bind(var7)();
                    var6 = 't';
                    var2[var6] = var7;
                    var6 = this;
                    var7 = var6._connectionSerial;
                    var6 = 'n';
                    var2[var6] = var7;
                    var2 = var3.bind(var5)(var2);
                    var2 = _closure1_slot35;
                    var2 = var2.length;
                    var3 = 50;
                    if(!(var2 > var3)) { _fun0018_ip = 81; continue _fun0018 }
case 82:
                    var5 = _closure1_slot35;
                    var2 = var5.shift;
                    var2 = var2.bind(var5)();
                    var2 = _closure1_slot35;
                    var2 = var2.length;
                    if(var2 > var3) { _fun0018_ip = 82; continue _fun0018 }
case 81:
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(105);
            var1[0] = var5;
            var5 = {};
            var7 = 'quality';
            var5['key'] = var7;
            var7 = function get() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = this;
                    var2 = var1.getLastPing;
                    var5 = var2.bind(var1)();
                    var4 = var1.state;
                    var3 = _closure1_slot22;
                    var3 = var3.RTC_CONNECTED;
                    if(!(var4 === var3)) { _fun0019_ip = 83; continue _fun0019 }
case 60:
                    var3 = undefined;
                    if(!(var3 !== var5)) { _fun0019_ip = 83; continue _fun0019 }
case 69:
                    var3 = 500;
                    if(!(!(var5 > var3))) { _fun0019_ip = 81; continue _fun0019 }
case 70:
                    var3 = var1._outboundLossRate;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0019_ip = 84; continue _fun0019 }
case 85:
                    var6 = var1._outboundLossRate;
                    var3 = 10;
                    if(!(!(var6 > var3))) { _fun0019_ip = 81; continue _fun0019 }
case 84:
                    var3 = 250;
                    if(!(!(var5 > var3))) { _fun0019_ip = 86; continue _fun0019 }
case 87:
                    var3 = var1._outboundLossRate;
                    if(!(var4 != var3)) { _fun0019_ip = 88; continue _fun0019 }
case 89:
                    var3 = var1._outboundLossRate;
                    var1 = 5;
                    if(!(!(var3 > var1))) { _fun0019_ip = 86; continue _fun0019 }
case 88:
                    var1 = _closure1_slot23;
                    var1 = var1.FINE;
                    _fun0019_ip = 90; continue _fun0019;
case 86:
                    var3 = _closure1_slot23;
                    var1 = var3.AVERAGE;
case 90:
                    _fun0019_ip = 91; continue _fun0019;
case 81:
                    var3 = _closure1_slot23;
                    var1 = var3.BAD;
case 91:
                    _fun0019_ip = 92; continue _fun0019;
case 83:
                    var2 = _closure1_slot23;
                    var1 = var2.UNKNOWN;
case 92:
                    return var1;
                }
            };
            var5['get'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'endpoint';
            var5['key'] = var7;
            var7 = function get() {
                var1 = this;
                var1 = var1._endpoint;
                return var1;
            };
            var5['get'] = var7;
            var7 = function set(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var9 = arg1;
                    var2 = this;
                    var4 = var2.recordEvent;
                    var3 = {};
                    var1 = _closure1_slot33;
                    var1 = var1.SET_ENDPOINT;
                    var3['c'] = var1;
                    var1 = null;
                    var5 = var1 != var9;
                    var3['e'] = var5;
                    var3 = var4.bind(var2)(var3);
                    if(!(var1 != var9)) { _fun0020_ip = 93; continue _fun0020 }
case 43:
                    var5 = _closure1_slot32;
                    var4 = global;
                    var3 = var4.HermesInternal;
                    var3 = var3.concat;
                    var8 = '';
                    var7 = '//';
                    var5 = var3.bind(var8)(var5, var7, var9);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var3 = 34;
                    var3 = var10[var3];
                    var11 = undefined;
                    var9 = var9.bind(var11)(var3);
                    var3 = var9.toURLSafe;
                    var9 = var3.bind(var9)(var5);
                    if(!(var1 == var9)) { _fun0020_ip = 94; continue _fun0020 }
case 95:
                    var9 = {};
case 94:
                    var3 = var9.hostname;
                    var10 = var9.port;
                    if(!(var1 == var10)) { _fun0020_ip = 96; continue _fun0020 }
case 83:
                    var12 = var4.NaN;
                    _fun0020_ip = 50; continue _fun0020;
case 96:
                    var9 = var4.parseInt;
                    var12 = var9.bind(var11)(var10);
case 50:
                    var9 = var1 == var3;
                    if(var9) { _fun0020_ip = 97; continue _fun0020 }
case 98:
                    var10 = 80;
                    var10 = var10 !== var12;
                    if(!var10) { _fun0020_ip = 99; continue _fun0020 }
case 100:
                    var11 = 443;
                    var10 = var11 !== var12;
case 99:
                    var9 = var10;
case 97:
                    if(var9) { _fun0020_ip = 101; continue _fun0020 }
case 102:
                    var6 = _closure1_slot32;
                    var4 = var4.HermesInternal;
                    var4 = var4.concat;
                    var5 = var4.bind(var8)(var6, var7, var3);
case 101:
                    var4 = '/';
                    var4 = var5 + var4;
                    var2['_endpoint'] = var4;
                    var2['hostname'] = var3;
                    _fun0020_ip = 103; continue _fun0020;
case 93:
                    var2['_endpoint'] = var1;
                    var2['hostname'] = var1;
case 103:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['set'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'connect';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var5 = arg1;
                    var7 = arg2;
                    var3 = this;
                    var1 = var3._destroyed;
                    if(var1) { _fun0021_ip = 104; continue _fun0021 }
case 105:
                    var6 = var3.recordEvent;
                    var2 = {};
                    var1 = _closure1_slot33;
                    var1 = var1.CONNECT;
                    var2['c'] = var1;
                    var1 = null;
                    var8 = var1 != var5;
                    var2['e'] = var8;
                    var8 = var1 != var7;
                    var2['h'] = var8;
                    var2 = var6.bind(var3)(var2);
                    var6 = var3._backoff;
                    var2 = var6.cancel;
                    var2 = var2.bind(var6)();
                    var2 = var3.endpoint;
                    var6 = var3.token;
                    var3['endpoint'] = var5;
                    var3['token'] = var7;
                    var5 = var3.endpoint;
                    var5 = var2 === var5;
                    if(!var5) { _fun0021_ip = 94; continue _fun0021 }
case 106:
                    var5 = var6 === var7;
case 94:
                    if(var5) { _fun0021_ip = 107; continue _fun0021 }
case 108:
                    var5 = var3._cleanupSocket;
                    var5 = var5.bind(var3)();
                    var3['_mediaSessionId'] = var1;
                    if(!(var1 != var2)) { _fun0021_ip = 107; continue _fun0021 }
case 109:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 26;
                    var2 = var7[var2];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.v4;
                    var2 = var2.bind(var5)();
                    var3['_rtcConnectionId'] = var2;
                    var5 = _closure1_slot1;
                    var2 = 35;
                    var2 = var7[var2];
                    var6 = var5.bind(var6)(var2);
                    var5 = var6.dispatch;
                    var2 = {};
                    var7 = 'RTC_CONNECTION_UPDATE_ID';
                    var2['type'] = var7;
                    var2['connection'] = var3;
                    var2 = var5.bind(var6)(var2);
case 107:
                    var2 = var3.endpoint;
                    if(!(var1 == var2)) { _fun0021_ip = 110; continue _fun0021 }
case 93:
                    var5 = var3.setState;
                    var2 = _closure1_slot22;
                    var2 = var2.AWAITING_ENDPOINT;
                    var2 = var5.bind(var3)(var2);
                    _fun0021_ip = 111; continue _fun0021;
case 110:
                    var2 = var3._socket;
                    if(!(var1 != var2)) { _fun0021_ip = 112; continue _fun0021 }
case 113:
                    var2 = var3._cleanupSocket;
                    var2 = var2.bind(var3)();
case 112:
                    var2 = var3._nextChannelId;
                    if(!(var1 != var2)) { _fun0021_ip = 114; continue _fun0021 }
case 115:
                    var2 = var3._nextChannelId;
                    var3['_channelId'] = var2;
                    var2 = undefined;
                    var3['_nextChannelId'] = var2;
case 114:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var8 = 36;
                    var2 = var7[var8];
                    var6 = undefined;
                    var10 = var5.bind(var6)(var2);
                    var15 = var3.endpoint;
                    var14 = var3.context;
                    var5 = var10.prototype;
                    var5 = Object.create(var5, {constructor: {value: var10}});
                    var16 = var5;
                    var2 = new var16[var10](var15, var14, var13);
                    var2 = var2 instanceof Object ? var2 : var5;
                    var3['_socket'] = var2;
                    var11 = var2.on;
                    var5 = _closure1_slot0;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.Connecting;
                    var12 = var3._handleConnecting;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3, var2);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.Connect;
                    var12 = var3._handleConnect;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3, var2);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.Disconnect;
                    var12 = var3._handleDisconnect;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3, var2);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.Resuming;
                    var12 = var3._handleResuming;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3, var2);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.Ready;
                    var12 = var3._handleReady;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3, var2);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.Speaking;
                    var12 = var3._handleSpeaking;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3, var2);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.Video;
                    var12 = var3._handleVideo;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3, var2);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.Ping;
                    var12 = var3._handleControlPing;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.ClientDisconnect;
                    var12 = var3._handleClientDisconnect;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.ClientConnect;
                    var12 = var3._handleClientConnect;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.Codecs;
                    var12 = var3._handleCodecs;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.MediaSessionId;
                    var12 = var3._handleMediaSessionId;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.MediaSinkWants;
                    var12 = var3._handleMediaSinkWants;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.VoiceBackendVersion;
                    var12 = var3._handleCodeVersion;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.KeyframeInterval;
                    var12 = var3._handleKeyframeInterval;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.Flags;
                    var12 = var3.handleFlags;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.Platform;
                    var12 = var3.handlePlatform;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.BandwidthEstimationExperiment;
                    var12 = var3._handleBandwidthEstimationExperiment;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.SecureFramesInit;
                    var12 = var3._handleSecureFramesInit;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.SecureFramesPrepareTransition;
                    var12 = var3._handleSecureFramesPrepareTransition;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.SecureFramesPrepareEpoch;
                    var12 = var3._handleSecureFramesPrepareEpoch;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.SecureFramesExecuteTransition;
                    var12 = var3._handleSecureFramesExecuteTransition;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.MLSExternalSenderPackage;
                    var12 = var3._handleMLSExternalSenderPackage;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.MLSProposals;
                    var12 = var3._handleMLSProposals;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3, var2);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.MLSPrepareCommitTransition;
                    var12 = var3._handleMLSPrepareCommitTransition;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.MLSWelcome;
                    var12 = var3._handleMLSWelcome;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var8];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.SocketEvent;
                    var10 = var9.ReceiveMessage;
                    var13 = var3._recordMessageEvent;
                    var12 = var13.bind;
                    var9 = _closure1_slot33;
                    var9 = var9.MESSAGE_RECEIVE;
                    var9 = var12.bind(var13)(var3, var9);
                    var9 = var11.bind(var2)(var10, var9);
                    var9 = var2.on;
                    var8 = var7[var8];
                    var8 = var5.bind(var6)(var8);
                    var8 = var8.SocketEvent;
                    var8 = var8.SendMessage;
                    var11 = var3._recordMessageEvent;
                    var10 = var11.bind;
                    var4 = _closure1_slot33;
                    var4 = var4.MESSAGE_SEND;
                    var4 = var10.bind(var11)(var3, var4);
                    var4 = var9.bind(var2)(var8, var4);
                    var4 = 19;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.now;
                    var4 = var4.bind(var5)();
                    var3['_connectStartTime'] = var4;
                    var4 = var3._connectCount;
                    var4 = var4 + 1;
                    var3['_connectCount'] = var4;
                    var4 = true;
                    var3['_connecting'] = var4;
                    var1 = var1 != var2;
                    if(!var1) { _fun0021_ip = 116; continue _fun0021 }
case 117:
                    var4 = var3._socket;
                    var1 = var4 === var2;
case 116:
                    if(!var1) { _fun0021_ip = 111; continue _fun0021 }
case 118:
                    var1 = var3._trackVoiceConnectionConnecting;
                    var1 = var1.bind(var3)();
                    var1 = false;
                    var3['_encountered_socket_failure'] = var1;
                    var1 = var2.connect;
                    var1 = var1.bind(var2)();
case 111:
                    var1 = undefined;
                    return var1;
case 104:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var15 = 'RTCConnection.connect(...): Attempting to connect on destroyed instance.';
                    var16 = var2;
                    var1 = new var16[var3](var15, var14);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = '_recordMessageEvent';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                var3 = this;
                var2 = var3.recordEvent;
                var1 = {};
                var4 = arg1;
                var1['c'] = var4;
                var4 = arg2;
                var1['o'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'destroy';
            var5['key'] = var7;
            var7 = function value() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = this;
                    var4 = var3.logger;
                    var2 = var4.info;
                    var1 = 'Destroy RTCConnection';
                    var1 = var2.bind(var4)(var1);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 31;
                    var7 = var6[var4];
                    var1 = undefined;
                    var9 = var5.bind(var1)(var7);
                    var8 = var9.removeOnlineCallback;
                    var7 = var3._handleNetworkOnline;
                    var7 = var8.bind(var9)(var7);
                    var4 = var6[var4];
                    var7 = var5.bind(var1)(var4);
                    var5 = var7.removeOfflineCallback;
                    var4 = var3._handleNetworkOffline;
                    var4 = var5.bind(var7)(var4);
                    var5 = _closure1_slot0;
                    var4 = 32;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isDesktop;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0022_ip = 119; continue _fun0022 }
case 51:
                    var5 = var3.powerMonitorListener;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0022_ip = 119; continue _fun0022 }
case 120:
                    var4 = var5.call;
                    var4 = var4.bind(var5)(var3);
case 119:
                    var5 = var3.recordEvent;
                    var4 = {};
                    var6 = _closure1_slot33;
                    var6 = var6.CONNECTION_DESTROY;
                    var4['c'] = var6;
                    var4 = var5.bind(var3)(var4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 29;
                    var5 = var7[var2];
                    var5 = var4.bind(var1)(var5);
                    var9 = var5.WindowVisibilityVideoManager;
                    var8 = var9.off;
                    var5 = var7[var2];
                    var5 = var4.bind(var1)(var5);
                    var5 = var5.WindowVisibilityEvent;
                    var6 = var5.IncomingVideoEnabledChanged;
                    var5 = var3.incomingVideoEnabledChanged;
                    var5 = var8.bind(var9)(var6, var5);
                    var5 = var7[var2];
                    var5 = var4.bind(var1)(var5);
                    var6 = var5.WindowVisibilityVideoManager;
                    var5 = var6.off;
                    var2 = var7[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.WindowVisibilityEvent;
                    var4 = var2.WindowVisibilityChanged;
                    var2 = var3.windowVisibilityChanged;
                    var2 = var5.bind(var6)(var4, var2);
                    var4 = var3._backoff;
                    var2 = var4.cancel;
                    var2 = var2.bind(var4)();
                    var2 = var3._cleanupSocket;
                    var2 = var2.bind(var3)();
                    var5 = var3._voiceQuality;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0022_ip = 121; continue _fun0022 }
case 122:
                    var4 = var5.stop;
                    var4 = var4.bind(var5)();
case 121:
                    var5 = var3._voiceQuality;
                    if(!(var2 != var5)) { _fun0022_ip = 123; continue _fun0022 }
case 124:
                    var4 = var5.removeAllListeners;
                    var4 = var4.bind(var5)();
case 123:
                    var3['_voiceQuality'] = var2;
                    var4 = global;
                    var5 = var4.clearInterval;
                    var4 = var3._voiceQualityPeriodicStatsInterval;
                    var4 = var5.bind(var1)(var4);
                    var3['_voiceQualityPeriodicStatsInterval'] = var2;
                    var4 = 0;
                    var3['_voiceQualityPeriodicStatsSequenceId'] = var4;
                    var6 = var3._systemResponsiveness;
                    if(!(var2 != var6)) { _fun0022_ip = 125; continue _fun0022 }
case 126:
                    var5 = var6.stop;
                    var5 = var5.bind(var6)();
case 125:
                    var3['_systemResponsiveness'] = var2;
                    var3['_noiseCancellationError'] = var4;
                    var5 = var3._voiceDuration;
                    if(!(var2 != var5)) { _fun0022_ip = 127; continue _fun0022 }
case 128:
                    var4 = var5.stop;
                    var4 = var4.bind(var5)();
case 127:
                    var3['_voiceDuration'] = var2;
                    var5 = var3._videoQuality;
                    if(!(var2 != var5)) { _fun0022_ip = 129; continue _fun0022 }
case 130:
                    var4 = var5.stop;
                    var4 = var4.bind(var5)();
case 129:
                    var3['_videoQuality'] = var2;
                    var3['_videoHealthManager'] = var2;
                    var3['_secureFramesState'] = var2;
                    var5 = var3._localMediaSinkWantsManager;
                    if(!(var2 != var5)) { _fun0022_ip = 131; continue _fun0022 }
case 132:
                    var4 = var5.reset;
                    var4 = var4.bind(var5)();
case 131:
                    var4 = var3._connection;
                    if(!(var2 != var4)) { _fun0022_ip = 133; continue _fun0022 }
case 134:
                    var4 = var3._connection;
                    var3['_connection'] = var2;
                    var2 = var4.destroy;
                    var2 = var2.bind(var4)();
case 133:
                    var2 = var3.removeAllListeners;
                    var2 = var2.bind(var3)();
                    var2 = true;
                    var3['_destroyed'] = var2;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'shouldSendSpeaking';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var6 = arg1;
                    var5 = arg2;
                    var4 = this;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 32;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.isWeb;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0023_ip = 135; continue _fun0023 }
case 136:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var2 = 37;
                    var1 = var10[var2];
                    var12 = var9.bind(var3)(var1);
                    var11 = var12.hasFlag;
                    var1 = _closure1_slot30;
                    var8 = var1.PRIORITY;
                    var8 = var11.bind(var12)(var6, var8);
                    var2 = var10[var2];
                    var10 = var9.bind(var3)(var2);
                    var9 = var10.hasFlag;
                    var2 = var4._lastSentSpeakingStatus;
                    var1 = var1.PRIORITY;
                    var2 = var9.bind(var10)(var2, var1);
                    var1 = var4._lastSentSSRC;
                    var1 = var1 !== var5;
                    if(var1) { _fun0023_ip = 83; continue _fun0023 }
case 45:
                    var1 = var8 !== var2;
case 83:
                    if(!var1) { _fun0023_ip = 137; continue _fun0023 }
case 119:
                    var2 = var4._lastSentSSRC;
                    var2 = var3 !== var2;
                    if(var2) { _fun0023_ip = 138; continue _fun0023 }
case 15:
                    var3 = _closure1_slot30;
                    var3 = var3.NONE;
                    var2 = var6 !== var3;
case 138:
                    if(!var2) { _fun0023_ip = 139; continue _fun0023 }
case 140:
                    var3 = var4._lastSentSSRC;
                    var3 = var3 === var5;
                    if(var3) { _fun0023_ip = 141; continue _fun0023 }
case 99:
                    var7 = _closure1_slot30;
                    var7 = var7.NONE;
                    var3 = var6 !== var7;
case 141:
                    if(!var3) { _fun0023_ip = 142; continue _fun0023 }
case 22:
                    var4['_lastSentSpeakingStatus'] = var6;
                    var4['_lastSentSSRC'] = var5;
                    var3 = true;
case 142:
                    var2 = var3;
case 139:
                    var1 = var2;
case 137:
                    return var1;
case 135:
                    var1 = true;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'sendSpeaking';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var5 = arg1;
                    var4 = arg2;
                    var2 = this;
                    var3 = var2._socket;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0024_ip = 35; continue _fun0024 }
case 105:
                    var1 = var2.shouldSendSpeaking;
                    var1 = var1.bind(var2)(var5, var4);
                    if(!var1) { _fun0024_ip = 35; continue _fun0024 }
case 62:
                    var2 = _closure1_slot15;
                    var1 = var2.getPacketDelay;
                    var2 = var1.bind(var2)();
                    var1 = var3.speaking;
                    var1 = var1.bind(var3)(var5, var2, var4);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'sendVideo';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var6 = arg2;
                    var1 = this;
                    var5 = var1._socket;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0025_ip = 143; continue _fun0025 }
case 144:
                    var2 = 0;
                    if(!(var2 !== var6)) { _fun0025_ip = 145; continue _fun0025 }
case 146:
                    var2 = true;
                    var1['_sentVideo'] = var2;
case 145:
                    var1 = var1._sentVideo;
                    if(!var1) { _fun0025_ip = 143; continue _fun0025 }
case 69:
                    var4 = var5.video;
                    var10 = arg1;
                    var8 = arg3;
                    var7 = arg4;
                    var11 = var5;
                    var9 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
case 143:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'getPings';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._pings;
                return var1;
            };
            var5['value'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'getAveragePing';
            var5['key'] = var7;
            var7 = function value() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var3 = this;
                    var4 = var3._pings;
                    var2 = var4.slice;
                    var1 = global;
                    var7 = var1.Math;
                    var6 = var7.min;
                    var1 = var3._pings;
                    var5 = var1.length;
                    var1 = 20;
                    var1 = var6.bind(var7)(var5, var1);
                    var5 = 0;
                    var2 = var2.bind(var4)(var5, var1);
                    var4 = var2.length;
                    var1 = 0;
                    if(!(var5 !== var4)) { _fun0026_ip = 147; continue _fun0026 }
case 143:
                    var4 = var3._socket;
                    var3 = null;
                    var3 = var3 == var4;
                    var1 = 0;
                    if(var3) { _fun0026_ip = 147; continue _fun0026 }
case 87:
                    var4 = var2.reduce;
                    var3 = function(arg1, arg2) {
                        var1 = arg2;
                        var2 = var1.value;
                        var1 = arg1;
                        var1 = var1 + var2;
                        return var1;
                    };
                    var3 = var4.bind(var2)(var3, var5);
                    var2 = var2.length;
                    var1 = var3 / var2;
case 147:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = 'getLastPing';
            var5['key'] = var7;
            var7 = function value() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var1 = this;
                    var2 = var1._pings;
                    var1 = var1._pings;
                    var3 = var1.length;
                    var1 = 1;
                    var1 = var3 - var1;
                    var2 = var2[var1];
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0027_ip = 58; continue _fun0027 }
case 59:
                    var1 = var2.value;
case 58:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[11] = var5;
            var5 = {};
            var7 = 'getOutboundLossRate';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._outboundLossRate;
                return var1;
            };
            var5['value'] = var7;
            var1[12] = var5;
            var5 = {};
            var7 = 'getMediaSessionId';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._mediaSessionId;
                return var1;
            };
            var5['value'] = var7;
            var1[13] = var5;
            var5 = {};
            var7 = 'getVoiceParticipantType';
            var5['key'] = var7;
            var7 = function value() {
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[14] = var5;
            var5 = {};
            var7 = 'getRTCConnectionId';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._rtcConnectionId;
                return var1;
            };
            var5['value'] = var7;
            var1[15] = var5;
            var5 = {};
            var7 = 'getMediaEngineConnectionId';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._mediaEngineConnectionId;
                return var1;
            };
            var5['value'] = var7;
            var1[16] = var5;
            var5 = {};
            var7 = 'getVoiceVersion';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1.voiceVersion;
                return var1;
            };
            var5['value'] = var7;
            var1[17] = var5;
            var5 = {};
            var7 = 'getRtcWorkerVersion';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1.rtcWorkerVersion;
                return var1;
            };
            var5['value'] = var7;
            var1[18] = var5;
            var5 = {};
            var7 = 'getDuration';
            var5['key'] = var7;
            var7 = function value() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var3 = this;
                    var2 = var3._connectCompletedTime;
                    var1 = 0;
                    var4 = var2 > var1;
                    var2 = 0;
                    if(!var4) { _fun0028_ip = 148; continue _fun0028 }
case 29:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var4 = 19;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.now;
                    var4 = var4.bind(var5)();
                    var3 = var3._connectCompletedTime;
                    var2 = var4 - var3;
case 148:
                    var1 = 0;
                    if(!(var2 > var1)) { _fun0028_ip = 149; continue _fun0028 }
case 35:
                    var1 = var2;
case 149:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[19] = var5;
            var5 = {};
            var7 = 'getDurationSeconds';
            var5['key'] = var7;
            var7 = function value() {
                var2 = this;
                var1 = var2.getDuration;
                var2 = var1.bind(var2)();
                var1 = 1000;
                var1 = var2 / var1;
                return var1;
            };
            var5['value'] = var7;
            var1[20] = var5;
            var5 = {};
            var7 = 'getVoiceFilterSpeakingDurationMs';
            var5['key'] = var7;
            var7 = function value() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var2 = this;
                    var3 = var2._voiceDuration;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0029_ip = 150; continue _fun0029 }
case 144:
                    var3 = var2._voiceDuration;
                    var2 = var3.getVoiceFilterSpeakingDurationMs;
                    var1 = var2.bind(var3)();
case 150:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[21] = var5;
            var5 = {};
            var7 = 'getPacketStats';
            var5['key'] = var7;
            var7 = function value() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = this;
                    var3 = var1._voiceQuality;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0030_ip = 3; continue _fun0030 }
case 29:
                    var2 = var3.getPacketStats;
                    var1 = var2.bind(var3)();
case 3:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[22] = var5;
            var5 = {};
            var7 = 'getCreatedTime';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._createdTime;
                return var1;
            };
            var5['value'] = var7;
            var1[23] = var5;
            var5 = {};
            var7 = 'getSecureFramesState';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._secureFramesState;
                return var1;
            };
            var5['value'] = var7;
            var1[24] = var5;
            var5 = {};
            var7 = 'getSecureFramesRosterMap';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._secureFramesRosterMap;
                return var1;
            };
            var5['value'] = var7;
            var1[25] = var5;
            var5 = {};
            var7 = 'getUserIds';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._userIds;
                return var1;
            };
            var5['value'] = var7;
            var1[26] = var5;
            var5 = {};
            var7 = 'getIsUserConnected';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var1 = this;
                var3 = var1._userIds;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[27] = var5;
            var5 = {};
            var7 = 'getVideoHealthManager';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._videoHealthManager;
                return var1;
            };
            var5['value'] = var7;
            var1[28] = var5;
            var5 = {};
            var7 = 'getBandwidthEstimationExperiment';
            var5['key'] = var7;
            var7 = function value() {
                var1 = this;
                var1 = var1._bandwidthEstimationExperiment;
                return var1;
            };
            var5['value'] = var7;
            var1[29] = var5;
            var5 = {};
            var7 = 'hasActiveRemoteWants';
            var5['key'] = var7;
            var7 = function value() {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.entries;
                var1 = this;
                var1 = var1._remoteVideoSinkWants;
                var3 = var2.bind(var3)(var1);
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                        var5 = arg1;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var3 = var5().value;
                        var4 = var1;
                        var2 = undefined;
                        var4 = var4 === var2;
                        var6 = undefined;
                        if(var4) { _fun0031_ip = 151; continue _fun0031 }
case 146:
                        var6 = var3;
case 151:
                        var3 = undefined;
                        if(var4) { _fun0031_ip = 152; continue _fun0031 }
case 145:
                        var7 = var5().value;
                        var5 = var1;
                        var5 = var5 === var2;
                        var3 = undefined;
                        var4 = var5;
                        if(var5) { _fun0031_ip = 152; continue _fun0031 }
case 70:
                        var3 = var7;
                        var4 = var5;
case 152:
                        if(var4) { _fun0031_ip = 85; continue _fun0031 }
case 40:
                        var1.return();
case 85:
                        var4 = global;
                        var5 = var4.Number;
                        var1 = var5.isInteger;
                        var1 = var1.bind(var5)(var6);
                        if(var1) { _fun0031_ip = 119; continue _fun0031 }
case 153:
                        var1 = 'any';
                        var1 = var1 !== var6;
                        if(!var1) { _fun0031_ip = 154; continue _fun0031 }
case 11:
                        var5 = 'pixelCounts';
                        var2 = undefined;
                        if(!(var5 === var6)) { _fun0031_ip = 91; continue _fun0031 }
case 88:
                        var5 = var4.Object;
                        var4 = var5.values;
                        var6 = var4.bind(var5)(var3);
                        var5 = var6.some;
                        var4 = function(arg1) {
                            var2 = 0;
                            var1 = arg1;
                            var1 = var2 !== var1;
                            return var1;
                        };
                        var2 = var5.bind(var6)(var4);
case 91:
                        var1 = var2;
case 154:
                        _fun0031_ip = 155; continue _fun0031;
case 119:
                        var2 = 0;
                        var1 = var2 !== var3;
case 155:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[30] = var5;
            var5 = {};
            var7 = 'pauseStatsCollectionForUser';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var3 = arg1;
                    var1 = this;
                    var2 = var1.getOrCreateVideoQuality;
                    var2 = var2.bind(var1)();
                    var4 = null;
                    if(!(var4 == var2)) { _fun0032_ip = 2; continue _fun0032 }
case 55:
                    var5 = var1.logger;
                    var4 = var5.error;
                    var1 = 'pauseStatsCollectionForUser: Unable to create videoQuality.';
                    var1 = var4.bind(var5)(var1);
                    _fun0032_ip = 156; continue _fun0032;
case 2:
                    var1 = arg2;
                    if(var1) { _fun0032_ip = 30; continue _fun0032 }
case 157:
                    var1 = var2.removeUserFromStatsCollectionPausedSet;
                    var1 = var1.bind(var2)(var3);
                    _fun0032_ip = 156; continue _fun0032;
case 30:
                    var1 = var2.addUserToStatsCollectionPausedSet;
                    var1 = var1.bind(var2)(var3);
case 156:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[31] = var5;
            var5 = {};
            var7 = 'getOutboundStats';
            var5['key'] = var7;
            var7 = function value() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var2 = this;
                    var1 = var2.getOrCreateVideoQuality;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var2 = var1 != var3;
                    if(!var2) { _fun0033_ip = 145; continue _fun0033 }
case 55:
                    var2 = var3.getOutboundStats;
                    var1 = var2.bind(var3)();
case 145:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[32] = var5;
            var5 = {};
            var7 = 'getInboundStats';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var2 = this;
                    var1 = var2.getOrCreateVideoQuality;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var2 = var1 != var4;
                    if(!var2) { _fun0034_ip = 158; continue _fun0034 }
case 55:
                    var3 = var4.getInboundStats;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
case 158:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[33] = var5;
            var5 = {};
            var7 = 'setState';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var7 = arg1;
                    var6 = arguments[1];
                    var5 = this;
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0035_ip = 159; continue _fun0035 }
case 160:
                    var6 = {};
case 159:
                    var4 = var5.recordEvent;
                    var3 = {};
                    var8 = _closure1_slot33;
                    var8 = var8.SET_STATE;
                    var3['c'] = var8;
                    var3['s'] = var7;
                    var3 = var4.bind(var5)(var3);
                    var8 = var5.logger;
                    var4 = var8.info;
                    var11 = var5.state;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var10 = var3.concat;
                    var9 = 'RTC connection state: ';
                    var3 = ' => ';
                    var3 = var10.bind(var9)(var11, var3, var7);
                    var3 = var4.bind(var8)(var3);
                    var5['state'] = var7;
                    var8 = var5.stateHistory;
                    var4 = var8.update;
                    var3 = var5.state;
                    var3 = var4.bind(var8)(var3);
                    var4 = var5.emit;
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 38;
                    var2 = var8[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.RTCConnectionEvent;
                    var15 = var2.State;
                    var2 = {};
                    var8 = var5.hostname;
                    var2['hostname'] = var8;
                    var8 = var5.trueChannelId;
                    var2['channelId'] = var8;
                    var8 = var5.context;
                    var2['context'] = var8;
                    var16 = var5;
                    var14 = var7;
                    var13 = var2;
                    var12 = var6;
                    var2 = var16[var4](var15, var14, var13, var12, var11);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[34] = var5;
            var5 = {};
            var7 = 'expeditedHeartbeat';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var8 = arguments[1];
                    var7 = arguments[2];
                    var2 = this;
                    var1 = undefined;
                    if(!(var8 === var1)) { _fun0036_ip = 53; continue _fun0036 }
case 160:
                    var8 = '';
case 53:
                    if(!(var7 === var1)) { _fun0036_ip = 161; continue _fun0036 }
case 31:
                    var7 = true;
case 161:
                    var6 = var2._socket;
                    var3 = null;
                    var3 = var3 != var6;
                    if(!var3) { _fun0036_ip = 28; continue _fun0036 }
case 44:
                    var5 = var6.expeditedHeartbeat;
                    var4 = arg1;
                    var3 = var5.bind(var6)(var4, var8, var7);
case 28:
                    if(!var3) { _fun0036_ip = 162; continue _fun0036 }
case 163:
                    var3 = var2._backoff;
                    var2 = var3.cancel;
                    var2 = var2.bind(var3)();
case 162:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[35] = var5;
            var5 = {};
            var7 = 'resetBackoff';
            var5['key'] = var7;
            var7 = function value() {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    var6 = arguments[0];
                    var2 = this;
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0037_ip = 164; continue _fun0037 }
case 165:
                    var6 = '';
case 164:
                    var5 = var2._socket;
                    var3 = null;
                    var3 = var3 != var5;
                    if(!var3) { _fun0037_ip = 59; continue _fun0037 }
case 52:
                    var4 = var5.resetBackoff;
                    var3 = var4.bind(var5)(var6);
case 59:
                    if(!var3) { _fun0037_ip = 7; continue _fun0037 }
case 166:
                    var3 = var2._backoff;
                    var2 = var3.cancel;
                    var2 = var2.bind(var3)();
case 7:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[36] = var5;
            var5 = {};
            var7 = 'setSelectedParticipant';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                    var1 = this;
                    var3 = var1._localMediaSinkWantsManager;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0038_ip = 167; continue _fun0038 }
case 160:
                    var2 = var3.setSelectedParticipant;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 167:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[37] = var5;
            var5 = {};
            var7 = 'setPipOpen';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    var1 = this;
                    var3 = var1._localMediaSinkWantsManager;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0039_ip = 167; continue _fun0039 }
case 160:
                    var2 = var3.setPipOpen;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 167:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[38] = var5;
            var5 = {};
            var7 = 'setClipRecordUser';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    var1 = this;
                    var5 = var1._connection;
                    var3 = null;
                    var1 = var3 == var5;
                    if(var1) { _fun0040_ip = 34; continue _fun0040 }
case 144:
                    var2 = var5.setClipRecordUser;
                    var1 = var3 == var2;
case 34:
                    if(var1) { _fun0040_ip = 43; continue _fun0040 }
case 52:
                    var4 = var5.setClipRecordUser;
                    var3 = arg1;
                    var2 = arg2;
                    var1 = arg3;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[39] = var5;
            var5 = {};
            var7 = 'setNoiseCancellationEnabled';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                    var1 = this;
                    var2 = var1._numNoiseCancellationChanges;
                    var2 = var2 + 1;
                    var1['_numNoiseCancellationChanges'] = var2;
                    var3 = var1._voiceDuration;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0041_ip = 168; continue _fun0041 }
case 3:
                    var2 = var3.setNoiseCancellationEnabled;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 168:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[40] = var5;
            var5 = {};
            var7 = 'setSimulcastDebugOverride';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                    var3 = arg2;
                    var4 = arg3;
                    var1 = this;
                    var2 = var1.context;
                    if(!(var3 === var2)) { _fun0042_ip = 169; continue _fun0042 }
case 144:
                    var2 = _closure1_slot26;
                    var2 = var2.DEFAULT;
                    if(!(var3 !== var2)) { _fun0042_ip = 40; continue _fun0042 }
case 60:
                    var3 = var1._goLiveQualityManager;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0042_ip = 169; continue _fun0042 }
case 58:
                    var2 = var3.setSimulcastDebugOverride;
                    var2 = var2.bind(var3)(var4);
                    _fun0042_ip = 169; continue _fun0042;
case 40:
                    var3 = var1._localMediaSinkWantsManager;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0042_ip = 169; continue _fun0042 }
case 38:
                    var2 = var3.setSimulcastDebugOverride;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1, var4);
case 169:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[41] = var5;
            var5 = {};
            var7 = 'setVideoSize';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                    var5 = arg1;
                    var4 = arg2;
                    var2 = this;
                    var1 = null;
                    var3 = var1 == var4;
                    if(var3) { _fun0043_ip = 43; continue _fun0043 }
case 144:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var6 = 32;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var8.bind(var6)(var7);
                    var6 = var7.isAndroid;
                    var3 = var6.bind(var7)();
case 43:
                    if(var3) { _fun0043_ip = 170; continue _fun0043 }
case 28:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var6 = 32;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var8.bind(var6)(var7);
                    var6 = var7.isIOS;
                    var3 = var6.bind(var7)();
case 170:
                    if(var3) { _fun0043_ip = 81; continue _fun0043 }
case 171:
                    var7 = var2._localMediaSinkWantsManager;
                    if(!(var1 != var7)) { _fun0043_ip = 81; continue _fun0043 }
case 172:
                    var6 = var7.setVideoSize;
                    var8 = var4.width;
                    var3 = var4.height;
                    var3 = var8 * var3;
                    var3 = var6.bind(var7)(var5, var3);
case 81:
                    var3 = var2._goLiveQualityManager;
                    if(!(var1 != var3)) { _fun0043_ip = 173; continue _fun0043 }
case 91:
                    var2 = var3.setVideoSize;
                    var1 = arg3;
                    var1 = var2.bind(var3)(var5, var4, var1);
case 173:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[42] = var5;
            var5 = {};
            var7 = 'clearJoinVoiceId';
            var5['key'] = var7;
            var7 = function value() {
                var2 = null;
                var1 = this;
                var1['joinVoiceId'] = var2;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[43] = var5;
            var5 = {};
            var7 = 'setNextChannelId';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                    var4 = arg1;
                    var2 = this;
                    var5 = var2.recordEvent;
                    var3 = {};
                    var6 = _closure1_slot33;
                    var6 = var6.SET_NEXT_CHANNEL_ID;
                    var3['c'] = var6;
                    var3 = var5.bind(var2)(var3);
                    var5 = _closure1_slot14;
                    var3 = var5.getChannel;
                    var1 = var2.channelId;
                    var3 = var3.bind(var5)(var1);
                    var1 = null;
                    var5 = var1 == var3;
                    var1 = undefined;
                    var10 = undefined;
                    if(var5) { _fun0044_ip = 149; continue _fun0044 }
case 174:
                    var10 = var3.type;
case 149:
                    var6 = var2.logger;
                    var5 = var6.info;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var15 = 'Updating channel: ';
                    var13 = '(';
                    var11 = ')';
                    var14 = var4;
                    var12 = var10;
                    var3 = var15[var9](var14, var13, var12, var11, var10);
                    var3 = var5.bind(var6)(var3);
                    var2['_nextChannelId'] = var4;
                    var3 = var2.channelIds;
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[44] = var5;
            var5 = {};
            var7 = 'getNextChannelId';
            var5['key'] = var7;
            var7 = function value() {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    var2 = this;
                    var1 = var2._nextChannelId;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0045_ip = 105; continue _fun0045 }
case 160:
                    var1 = var2._channelId;
case 105:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[45] = var5;
            var5 = {};
            var7 = 'channelId';
            var5['key'] = var7;
            var7 = function get() {
                var1 = this;
                var1 = var1._channelId;
                return var1;
            };
            var5['get'] = var7;
            var1[46] = var5;
            var5 = {};
            var7 = 'trueServerId';
            var5['key'] = var7;
            var7 = function get() {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    var2 = this;
                    var1 = var2.streamServerId;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0046_ip = 29; continue _fun0046 }
case 160:
                    var1 = var2.guildId;
case 29:
                    if(!(var3 == var1)) { _fun0046_ip = 167; continue _fun0046 }
case 146:
                    var1 = var2.channelId;
case 167:
                    return var1;
                }
            };
            var5['get'] = var7;
            var1[47] = var5;
            var5 = {};
            var7 = 'trueChannelId';
            var5['key'] = var7;
            var7 = function get() {
                _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                    var2 = this;
                    var1 = var2.streamServerId;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0047_ip = 175; continue _fun0047 }
case 160:
                    var1 = var2.streamChannelId;
                    if(!(var3 == var1)) { _fun0047_ip = 176; continue _fun0047 }
case 161:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 39;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = var2.streamServerId;
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.prev;
                    var3 = var1.bind(var3)();
                    var1 = var3.toString;
                    var1 = var1.bind(var3)();
                    _fun0047_ip = 177; continue _fun0047;
case 176:
                    var1 = var2.streamChannelId;
case 177:
                    _fun0047_ip = 178; continue _fun0047;
case 175:
                    var1 = var2.channelId;
case 178:
                    return var1;
                }
            };
            var5['get'] = var7;
            var1[48] = var5;
            var5 = {};
            var7 = '_cleanupSocket';
            var5['key'] = var7;
            var7 = function value() {
                _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                    var2 = this;
                    var4 = var2._socket;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0048_ip = 69; continue _fun0048 }
case 160:
                    var3 = var4.close;
                    var3 = var3.bind(var4)();
                    var3 = var4.removeAllListeners;
                    var3 = var3.bind(var4)();
                    var2['_socket'] = var1;
case 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[49] = var5;
            var5 = {};
            var7 = '_chooseExperiments';
            var5['key'] = var7;
            var7 = function value() {
                _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                    var3 = this;
                    var2 = new Array(0);
                    var1 = var3._recordingEnabled;
                    if(!var1) { _fun0049_ip = 145; continue _fun0049 }
case 164:
                    var4 = var2.push;
                    var1 = 'connection_log';
                    var1 = var4.bind(var2)(var1);
case 145:
                    var5 = _closure1_slot15;
                    var4 = var5.supports;
                    var1 = _closure1_slot25;
                    var1 = var1.FIXED_KEYFRAME_INTERVAL;
                    var1 = var4.bind(var5)(var1);
                    if(!var1) { _fun0049_ip = 179; continue _fun0049 }
case 85:
                    var4 = var2.push;
                    var1 = 'fixed_keyframe_interval';
                    var1 = var4.bind(var2)(var1);
case 179:
                    var1 = var3._supportedBandwidthEstimationExperiments;
                    var4 = var1.length;
                    var1 = 0;
                    if(!(var1 !== var4)) { _fun0049_ip = 180; continue _fun0049 }
case 11:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 40;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.workerExperimentString;
                    var4 = var1.bind(var4)();
                    var1 = null;
                    if(!(var1 != var4)) { _fun0049_ip = 180; continue _fun0049 }
case 181:
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var4);
case 180:
                    var4 = var3.context;
                    var1 = _closure1_slot26;
                    var1 = var1.DEFAULT;
                    var1 = var4 === var1;
                    if(!var1) { _fun0049_ip = 182; continue _fun0049 }
case 183:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var4 = 41;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.getAudioBitrateAdaptationExperimentConfig;
                    var4 = 'RtcConnection';
                    var4 = var5.bind(var6)(var4);
                    var1 = var4.enabled;
case 182:
                    if(!var1) { _fun0049_ip = 184; continue _fun0049 }
case 185:
                    var4 = var2.push;
                    var1 = 'audio_transport_cc';
                    var1 = var4.bind(var2)(var1);
case 184:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 42;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.getConfig;
                    var5 = {};
                    var4 = '_chooseExperiments';
                    var5['location'] = var4;
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.enabled;
                    if(!var5) { _fun0049_ip = 186; continue _fun0049 }
case 187:
                    var6 = var2.push;
                    var5 = 'should_analyze_user_voice_volume';
                    var5 = var6.bind(var2)(var5);
case 186:
                    var6 = var2.push;
                    var5 = 'keyframe_on_join';
                    var5 = var6.bind(var2)(var5);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 43;
                    var5 = var7[var5];
                    var10 = var6.bind(var1)(var5);
                    var7 = var10.getCurrentConfig;
                    var6 = {};
                    var6['location'] = var4;
                    var5 = {};
                    var8 = true;
                    var5['autoTrackExposure'] = var8;
                    var5 = var7.bind(var10)(var6, var5);
                    var5 = var5.enabled;
                    if(!var5) { _fun0049_ip = 188; continue _fun0049 }
case 189:
                    var6 = var2.push;
                    var5 = 'network_aware_socket';
                    var5 = var6.bind(var2)(var5);
case 188:
                    var6 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var5 = 44;
                    var5 = var11[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.getCurrentConfig;
                    var5 = {};
                    var5['location'] = var4;
                    var4 = {};
                    var10 = _closure1_slot0;
                    var9 = 32;
                    var9 = var11[var9];
                    var10 = var10.bind(var1)(var9);
                    var9 = var10.isWindows;
                    var9 = var9.bind(var10)();
                    var9 = !var9;
                    var4['disable'] = var9;
                    var4['autoTrackExposure'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var5 = var4.prewarm;
                    if(!var5) { _fun0049_ip = 190; continue _fun0049 }
case 191:
                    var6 = var2.push;
                    var5 = 'prewarm_cuda_cache';
                    var5 = var6.bind(var2)(var5);
case 190:
                    var4 = var4.clear;
                    if(!var4) { _fun0049_ip = 131; continue _fun0049 }
case 192:
                    var5 = var2.push;
                    var4 = 'clear_cuda_cache';
                    var4 = var5.bind(var2)(var4);
case 131:
                    var3['_selectedExperiments'] = var2;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[50] = var5;
            var5 = {};
            var7 = '_handleConnecting';
            var5['key'] = var7;
            var7 = function value() {
                _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                    var3 = this;
                    var1 = var3.endpoint;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0050_ip = 120; continue _fun0050 }
case 160:
                    var5 = _closure1_slot14;
                    var4 = var5.getChannel;
                    var1 = var3.channelId;
                    var1 = var4.bind(var5)(var1);
                    var2 = var2 == var1;
                    var13 = undefined;
                    if(var2) { _fun0050_ip = 70; continue _fun0050 }
case 2:
                    var13 = var1.type;
case 70:
                    var4 = var3.logger;
                    var2 = var4.info;
                    var21 = var3.endpoint;
                    var1 = var3.getRTCConnectionId;
                    var19 = var1.bind(var3)();
                    var17 = var3.channelId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var9 = var1.concat;
                    var22 = 'Connecting to RTC server ';
                    var20 = ', rtc-connection-id: ';
                    var18 = ', channel: ';
                    var16 = '(';
                    var14 = ')';
                    var15 = var13;
                    var1 = var22[var9](var21, var20, var19, var18, var17, var16, var15, var14, var13);
                    var1 = var2.bind(var4)(var1);
case 120:
                    var2 = var3.setState;
                    var1 = _closure1_slot22;
                    var1 = var1.CONNECTING;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[51] = var5;
            var5 = {};
            var7 = '_handleConnect';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var3 = arg1;
                    var _closure3_slot1 = var3;
                    var4 = var2.token;
                    var _closure3_slot2 = var4;
                    var3 = false;
                    var2['reconnecting'] = var3;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0051_ip = 193; continue _fun0051 }
case 44:
                    var5 = var2.logger;
                    var4 = var5.info;
                    var3 = 'Connected to RTC server.';
                    var3 = var4.bind(var5)(var3);
                    var3 = var2._fetchAsyncResourcesPromise;
                    var2 = var3.finally;
                    var1 = function() {
                        var5 = _closure3_slot1;
                        var4 = var5.identify;
                        var2 = {};
                        var3 = _closure3_slot0;
                        var6 = var3.trueServerId;
                        var2['serverId'] = var6;
                        var6 = var3.trueChannelId;
                        var2['channelId'] = var6;
                        var6 = var3.userId;
                        var2['userId'] = var6;
                        var6 = var3.sessionId;
                        var2['sessionId'] = var6;
                        var1 = _closure3_slot2;
                        var2['token'] = var1;
                        var8 = _closure1_slot15;
                        var6 = var8.getSupportedSecureFramesProtocolVersion;
                        var6 = var6.bind(var8)();
                        var2['maxDaveProtocolVersion'] = var6;
                        var7 = var8.supports;
                        var6 = _closure1_slot25;
                        var6 = var6.VIDEO;
                        var6 = var7.bind(var8)(var6);
                        var2['video'] = var6;
                        var7 = var8.getVideoStreamParameters;
                        var6 = var3.context;
                        var6 = var7.bind(var8)(var6);
                        var2['streamParameters'] = var6;
                        var2 = var4.bind(var5)(var2);
                        var2 = var3.setState;
                        var1 = _closure1_slot22;
                        var1 = var1.AUTHENTICATING;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
case 193:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var6 = 'RTCConnection._handleConnect(...): Token is missing.';
                    var7 = var2;
                    var1 = new var7[var3](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var5['value'] = var7;
            var1[52] = var5;
            var5 = {};
            var7 = '_handleDisconnect';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4) {
                _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                    var2 = arg2;
                    var9 = arg3;
                    var14 = arg4;
                    var5 = this;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var14;
                    var _closure3_slot2 = var5;
                    var6 = var5.logger;
                    var4 = var6.info;
                    var16 = var5.state;
                    var7 = global;
                    var3 = var7.HermesInternal;
                    var12 = var3.concat;
                    var23 = 'Disconnected from RTC server, clean: ';
                    var21 = ', code: ';
                    var19 = ', reason: ';
                    var17 = ', state: ';
                    var22 = var2;
                    var20 = var9;
                    var18 = var14;
                    var3 = var23[var12](var22, var21, var20, var19, var18, var17, var16, var15);
                    var3 = var4.bind(var6)(var3);
                    if(var2) { _fun0052_ip = 13; continue _fun0052 }
case 194:
                    var3 = var5._connecting;
                    var2 = !var3;
case 13:
                    if(var2) { _fun0052_ip = 195; continue _fun0052 }
case 196:
                    var2 = var5._encountered_socket_failure;
case 195:
                    if(var2) { _fun0052_ip = 197; continue _fun0052 }
case 46:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var3 = 21;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.track;
                    var2 = _closure1_slot20;
                    var3 = var2.VOICE_CONNECTION_SOCKET_FAILURE;
                    var2 = {};
                    var8 = var5._getAnalyticsProperties;
                    var21 = var8.bind(var5)();
                    var22 = var2;
                    var8 = copyDataProperties(var22, var21);
                    var10 = var5.hostname;
                    var8 = 'hostname';
                    var2[var8] = var10;
                    var10 = var5._connectCount;
                    var8 = 'connect_count';
                    var2[var8] = var10;
                    var8 = 'code';
                    var2[var8] = var9;
                    var8 = 'reason';
                    var2[var8] = var14;
                    var2 = var4.bind(var6)(var3, var2);
                    var2 = true;
                    var5['_encountered_socket_failure'] = var2;
case 197:
                    var4 = _closure1_slot16;
                    var3 = var4.getRemoteDisconnectVoiceChannelId;
                    var4 = var3.bind(var4)();
                    var3 = var5.channelId;
                    if(!(var4 === var3)) { _fun0052_ip = 186; continue _fun0052 }
case 198:
                    var4 = var5._connection;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0052_ip = 186; continue _fun0052 }
case 199:
                    var3 = var4.wasRemoteDisconnected;
                    var3 = var3.bind(var4)();
case 186:
                    var3 = 'Force Close';
                    var6 = var3 !== var14;
                    if(!var6) { _fun0052_ip = 200; continue _fun0052 }
case 201:
                    var8 = var5._backoff;
                    var4 = var8.fail;
                    var3 = var5.reconnect;
                    var9 = var4.bind(var8)(var3);
                    var8 = var5.logger;
                    var4 = var8.warn;
                    var3 = 1000;
                    var10 = var9 / var3;
                    var9 = var10.toFixed;
                    var3 = 2;
                    var20 = var9.bind(var10)(var3);
                    var3 = var7.HermesInternal;
                    var11 = var3.concat;
                    var23 = 'Disconnect was not clean! reason=';
                    var21 = '. Reconnecting in ';
                    var19 = ' seconds.';
                    var22 = var14;
                    var3 = var23[var11](var22, var21, var20, var19, var18);
                    var3 = var4.bind(var8)(var3);
case 200:
                    var4 = var5.state;
                    var3 = _closure1_slot22;
                    var3 = var3.DISCONNECTED;
                    if(!(var4 !== var3)) { _fun0052_ip = 202; continue _fun0052 }
case 203:
                    var4 = var5._videoQuality;
                    var _closure3_slot3 = var4;
                    var11 = null;
                    if(!(var11 != var4)) { _fun0052_ip = 204; continue _fun0052 }
case 205:
                    var8 = var5.context;
                    var3 = _closure1_slot26;
                    var3 = var3.DEFAULT;
                    if(!(var8 === var3)) { _fun0052_ip = 204; continue _fun0052 }
case 191:
                    var3 = var4.stop;
                    var3 = var3.bind(var4)();
                    var3 = var5._sentVideo;
                    if(!var3) { _fun0052_ip = 206; continue _fun0052 }
case 207:
                    var3 = var4.getOutboundStats;
                    var9 = var3.bind(var4)();
                    var8 = var9.forEach;
                    var3 = function(arg1) {
                        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                            var10 = arg1;
                            var3 = var10.num_frames;
                            var1 = null;
                            var4 = var1 != var3;
                            var2 = 0;
                            var1 = 0;
                            if(!var4) { _fun0053_ip = 161; continue _fun0053 }
case 55:
                            var1 = var3;
case 161:
                            if(!(var1 > var2)) { _fun0053_ip = 208; continue _fun0053 }
case 145:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var1 = 21;
                            var1 = var8[var1];
                            var6 = undefined;
                            var4 = var7.bind(var6)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot20;
                            var2 = var1.VIDEO_STREAM_ENDED;
                            var1 = {};
                            var5 = _closure3_slot0;
                            var11 = var5._getAnalyticsProperties;
                            var16 = var11.bind(var5)();
                            var17 = var1;
                            var11 = copyDataProperties(var17, var16);
                            var11 = 45;
                            var11 = var8[var11];
                            var13 = var7.bind(var6)(var11);
                            var11 = var13.getAppHardwareAccelerationEnabled;
                            var13 = var11.bind(var13)();
                            var11 = 'app_hardware_acceleration_enabled';
                            var1[var11] = var13;
                            var11 = var5.getMediaSessionId;
                            var13 = var11.bind(var5)();
                            var11 = 'media_session_id';
                            var1[var11] = var13;
                            var13 = var5.userId;
                            var11 = 'sender_user_id';
                            var1[var11] = var13;
                            var13 = _closure3_slot1;
                            var11 = 'reason';
                            var1[var11] = var13;
                            var11 = 'sender';
                            var13 = 'participant_type';
                            var1[var13] = var11;
                            var15 = _closure1_slot18;
                            var14 = var15.getRegion;
                            var13 = var5.hostname;
                            var14 = var14.bind(var15)(var13);
                            var13 = 'guild_region';
                            var1[var13] = var14;
                            var14 = var5.hostname;
                            var13 = 'hostname';
                            var1[var13] = var14;
                            var13 = _closure1_slot15;
                            var12 = var13.getHardwareEncoding;
                            var13 = var12.bind(var13)();
                            var12 = 'hardware_enabled';
                            var1[var12] = var13;
                            var17 = var1;
                            var16 = var10;
                            var10 = copyDataProperties(var17, var16);
                            var12 = _closure3_slot3;
                            var10 = var12.getNetworkStats;
                            var16 = var10.bind(var12)();
                            var17 = var1;
                            var10 = copyDataProperties(var17, var16);
                            var10 = _closure3_slot3;
                            var9 = var10.getCodecUsageStats;
                            var5 = var5.userId;
                            var16 = var9.bind(var10)(var11, var5);
                            var17 = var1;
                            var5 = copyDataProperties(var17, var16);
                            var5 = 46;
                            var5 = var8[var5];
                            var5 = var7.bind(var6)(var5);
                            var6 = var5.bind(var6)();
                            var5 = 'device_performance_class';
                            var1[var5] = var6;
                            var1 = var3.bind(var4)(var2, var1);
case 208:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var8.bind(var9)(var3);
                    var3 = var4.getCameraDurationStats;
                    var12 = var3.bind(var4)();
                    var3 = var11 != var12;
                    if(!var3) { _fun0052_ip = 209; continue _fun0052 }
case 210:
                    var9 = var12.camera_enabled_duration;
                    var8 = 0;
                    var3 = var9 > var8;
case 209:
                    if(!var3) { _fun0052_ip = 206; continue _fun0052 }
case 211:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 21;
                    var8 = var8[var3];
                    var3 = undefined;
                    var10 = var9.bind(var3)(var8);
                    var9 = var10.track;
                    var3 = _closure1_slot20;
                    var8 = var3.VIDEO_CALL_ENDED;
                    var3 = {};
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var12 = var5.getMediaSessionId;
                    var13 = var12.bind(var5)();
                    var12 = 'media_session_id';
                    var3[var12] = var13;
                    var3 = var9.bind(var10)(var8, var3);
case 206:
                    var3 = var4.getInboundParticipants;
                    var8 = var3.bind(var4)();
                    var4 = var8.forEach;
                    var3 = function(arg1) {
                        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                            var9 = arg1;
                            var2 = _closure3_slot3;
                            var1 = var2.getInboundStats;
                            var7 = var1.bind(var2)(var9);
                            var2 = null;
                            var3 = var2 == var7;
                            var1 = undefined;
                            var4 = undefined;
                            if(var3) { _fun0054_ip = 44; continue _fun0054 }
case 150:
                            var4 = var7.num_frames;
case 44:
                            var5 = var2 != var4;
                            var3 = 0;
                            var2 = 0;
                            if(!var5) { _fun0054_ip = 72; continue _fun0054 }
case 70:
                            var2 = var4;
case 72:
                            if(!(var2 > var3)) { _fun0054_ip = 212; continue _fun0054 }
case 7:
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var2 = 21;
                            var2 = var13[var2];
                            var5 = var12.bind(var1)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot20;
                            var3 = var2.VIDEO_STREAM_ENDED;
                            var2 = {};
                            var11 = _closure3_slot0;
                            var8 = var11._getAnalyticsProperties;
                            var15 = var8.bind(var11)();
                            var16 = var2;
                            var8 = copyDataProperties(var16, var15);
                            var8 = 45;
                            var8 = var13[var8];
                            var12 = var12.bind(var1)(var8);
                            var8 = var12.getAppHardwareAccelerationEnabled;
                            var12 = var8.bind(var12)();
                            var8 = 'app_hardware_acceleration_enabled';
                            var2[var8] = var12;
                            var8 = var11.getMediaSessionId;
                            var12 = var8.bind(var11)();
                            var8 = 'media_session_id';
                            var2[var8] = var12;
                            var8 = 'sender_user_id';
                            var2[var8] = var9;
                            var12 = _closure3_slot1;
                            var8 = 'reason';
                            var2[var8] = var12;
                            var8 = 'receiver';
                            var12 = 'participant_type';
                            var2[var12] = var8;
                            var14 = _closure1_slot18;
                            var13 = var14.getRegion;
                            var12 = var11.hostname;
                            var13 = var13.bind(var14)(var12);
                            var12 = 'guild_region';
                            var2[var12] = var13;
                            var12 = var11.hostname;
                            var11 = 'hostname';
                            var2[var11] = var12;
                            var11 = _closure1_slot15;
                            var10 = var11.getHardwareEncoding;
                            var11 = var10.bind(var11)();
                            var10 = 'hardware_enabled';
                            var2[var10] = var11;
                            var16 = var2;
                            var15 = var7;
                            var7 = copyDataProperties(var16, var15);
                            var10 = _closure3_slot3;
                            var7 = var10.getNetworkStats;
                            var15 = var7.bind(var10)();
                            var16 = var2;
                            var7 = copyDataProperties(var16, var15);
                            var7 = _closure3_slot3;
                            var6 = var7.getCodecUsageStats;
                            var15 = var6.bind(var7)(var8, var9);
                            var16 = var2;
                            var6 = copyDataProperties(var16, var15);
                            var2 = var4.bind(var5)(var3, var2);
case 212:
                            return var1;
                        }
                    };
                    var3 = var4.bind(var8)(var3);
case 204:
                    var3 = var5.getMediaSessionId;
                    var3 = var3.bind(var5)();
                    var _closure3_slot4 = var3;
                    var4 = _closure1_slot15;
                    var3 = var4.getMediaEngine;
                    var4 = var3.bind(var4)();
                    var3 = var4.getCodecSurvey;
                    var8 = var3.bind(var4)();
                    var4 = var8.then;
                    var3 = function(arg1) {
                        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                            var1 = global;
                            var4 = var1.JSON;
                            var3 = var4.parse;
                            var2 = arg1;
                            var7 = var3.bind(var4)(var2);
                            var3 = null;
                            if(!(var3 != var7)) { _fun0055_ip = 92; continue _fun0055 }
case 52:
                            var2 = var7.available_video_encoders;
                            if(!(var3 != var2)) { _fun0055_ip = 92; continue _fun0055 }
case 213:
                            var2 = var7.available_video_decoders;
                            if(!(var3 != var2)) { _fun0055_ip = 92; continue _fun0055 }
case 43:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 21;
                            var4 = var4[var2];
                            var2 = undefined;
                            var6 = var5.bind(var2)(var4);
                            var5 = var6.track;
                            var3 = _closure1_slot20;
                            var4 = var3.VOICE_CODEC_DETECTED;
                            var3 = {};
                            var11 = var3;
                            var10 = var7;
                            var7 = copyDataProperties(var11, var10);
                            var9 = _closure3_slot0;
                            var8 = var9.getRTCConnectionId;
                            var9 = var8.bind(var9)();
                            var8 = 'rtc_connection_id';
                            var3[var8] = var9;
                            var8 = _closure3_slot4;
                            var7 = 'media_session_id';
                            var3[var7] = var8;
                            var3 = var5.bind(var6)(var4, var3);
                            return var2;
case 92:
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {constructor: {value: var3}});
                            var11 = 'codec survey is not available';
                            var12 = var2;
                            var1 = new var12[var3](var11, var10);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        }
                    };
                    var8 = var4.bind(var8)(var3);
                    var4 = var8.catch;
                    var3 = function(arg1) {
                        var1 = _closure3_slot0;
                        var3 = var1.logger;
                        var2 = var3.warn;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var3 = var4.bind(var8)(var3);
                    var4 = var5._trackMLSFailures;
                    var3 = {'recovered': false, 'downgraded': false};
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot18;
                    var3 = var4.shouldIncludePreferredRegion;
                    var3 = var3.bind(var4)();
                    var10 = null;
                    if(!var3) { _fun0052_ip = 214; continue _fun0052 }
case 215:
                    var4 = _closure1_slot18;
                    var3 = var4.getPreferredRegion;
                    var10 = var3.bind(var4)();
case 214:
                    var4 = _closure1_slot15;
                    var3 = var4.getSettings;
                    var4 = var3.bind(var4)();
                    var9 = _closure1_slot14;
                    var8 = var9.getChannel;
                    var3 = var5.channelId;
                    var8 = var8.bind(var9)(var3);
                    var12 = _closure1_slot11;
                    var9 = var12.getConnectionStats;
                    var3 = var5.getMediaEngineConnectionId;
                    var3 = var3.bind(var5)();
                    var3 = var9.bind(var12)(var3);
                    var12 = var11 == var3;
                    var13 = undefined;
                    var9 = undefined;
                    if(var12) { _fun0052_ip = 216; continue _fun0052 }
case 217:
                    var3 = var3.stats;
                    var3 = var3.rtp;
                    var15 = var3.outbound;
                    var12 = var15.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = 'audio';
                        var1 = var1 === var2;
                        return var1;
                    };
                    var3 = var12.bind(var15)(var3);
                    var12 = var11 == var3;
                    var9 = undefined;
                    if(var12) { _fun0052_ip = 216; continue _fun0052 }
case 218:
                    var9 = var3.sampleRateMismatchPercent;
case 216:
                    var3 = {};
                    var12 = var5._getAnalyticsProperties;
                    var21 = var12.bind(var5)();
                    var22 = var3;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5.hostname;
                    var12 = 'hostname';
                    var3[var12] = var15;
                    var15 = var5.port;
                    var12 = 'port';
                    var3[var12] = var15;
                    var15 = var5.protocol;
                    var12 = 'protocol';
                    var3[var12] = var15;
                    var12 = 'reconnect';
                    var3[var12] = var6;
                    var12 = 'reason';
                    var3[var12] = var14;
                    var12 = var5.getDuration;
                    var14 = var12.bind(var5)();
                    var12 = 'duration';
                    var3[var12] = var14;
                    var15 = _closure1_slot16;
                    var14 = var15.getUserVoiceSettingsStats;
                    var12 = var5.context;
                    var21 = var14.bind(var15)(var12);
                    var22 = var3;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 219; continue _fun0052 }
case 220:
                    var14 = var15.getMosStats;
                    var12 = var14.bind(var15)();
case 219:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 221; continue _fun0052 }
case 222:
                    var14 = var15.getPacketStats;
                    var12 = var14.bind(var15)();
case 221:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 223; continue _fun0052 }
case 224:
                    var14 = var15.getBytesStats;
                    var12 = var14.bind(var15)();
case 223:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 225; continue _fun0052 }
case 226:
                    var14 = var15.getBufferStats;
                    var12 = var14.bind(var15)();
case 225:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 227; continue _fun0052 }
case 228:
                    var14 = var15.getNetworkStats;
                    var12 = var14.bind(var15)();
case 227:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 229; continue _fun0052 }
case 230:
                    var14 = var15.getSystemResourceStats;
                    var12 = var14.bind(var15)();
case 229:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 231; continue _fun0052 }
case 232:
                    var14 = var15.getFrameOpStats;
                    var12 = var14.bind(var15)();
case 231:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 233; continue _fun0052 }
case 234:
                    var14 = var15.getDurationStats;
                    var12 = var14.bind(var15)();
case 233:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 235; continue _fun0052 }
case 236:
                    var14 = var15.getTransportStats;
                    var12 = var14.bind(var15)();
case 235:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 237; continue _fun0052 }
case 238:
                    var14 = var15.getE2EEStats;
                    var12 = var14.bind(var15)();
case 237:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 239; continue _fun0052 }
case 240:
                    var14 = var15.getAudioDeviceStats;
                    var12 = var14.bind(var15)();
case 239:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceQuality;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 241; continue _fun0052 }
case 242:
                    var14 = var15.getAudioLevelStats;
                    var12 = var14.bind(var15)();
case 241:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._voiceDuration;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 243; continue _fun0052 }
case 244:
                    var14 = var15.getDurationStats;
                    var12 = var14.bind(var15)();
case 243:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var14 = _closure1_slot10;
                    var12 = var14.getUsageStats;
                    var21 = var12.bind(var14)();
                    var22 = var3;
                    var12 = copyDataProperties(var22, var21);
                    var12 = var5.getAudioDeviceStates;
                    var21 = var12.bind(var5)();
                    var22 = var3;
                    var12 = copyDataProperties(var22, var21);
                    var15 = var5._systemResponsiveness;
                    var14 = var11 == var15;
                    var12 = undefined;
                    if(var14) { _fun0052_ip = 245; continue _fun0052 }
case 246:
                    var14 = var15.getPttQueueLatencyStats;
                    var12 = var14.bind(var15)();
case 245:
                    var22 = var3;
                    var21 = var12;
                    var12 = copyDataProperties(var22, var21);
                    var14 = var5._numNoiseCancellationChanges;
                    var12 = 'num_noise_cancellation_changes';
                    var3[var12] = var14;
                    var12 = var5.getMediaSessionId;
                    var14 = var12.bind(var5)();
                    var12 = 'media_session_id';
                    var3[var12] = var14;
                    var14 = var11 != var8;
                    var12 = null;
                    if(!var14) { _fun0052_ip = 247; continue _fun0052 }
case 248:
                    var12 = var8.bitrate;
case 247:
                    var8 = 'channel_bitrate';
                    var3[var8] = var12;
                    var8 = 'cloudflare_best_region';
                    var3[var8] = var10;
                    var10 = var5._connectCount;
                    var8 = 'connect_count';
                    var3[var8] = var10;
                    var12 = var7.Math;
                    var10 = var12.round;
                    var8 = var5.getAveragePing;
                    var8 = var8.bind(var5)();
                    var10 = var10.bind(var12)(var8);
                    var8 = 'ping_average';
                    var3[var8] = var10;
                    var10 = var5._pingBadCount;
                    var8 = 'ping_bad_count';
                    var3[var8] = var10;
                    var8 = var5._pingTimeouts;
                    var10 = var8.length;
                    var8 = 'ping_timeout';
                    var3[var8] = var10;
                    var10 = var5._inputDetected;
                    var8 = 'input_detected';
                    var3[var8] = var10;
                    var10 = _closure1_slot15;
                    var8 = var10.getNoInputDetectedNotice;
                    var10 = var8.bind(var10)();
                    var8 = 'no_input_detected_notice';
                    var3[var8] = var10;
                    var10 = var4.mode;
                    var8 = 'audio_input_mode';
                    var3[var8] = var10;
                    var8 = var4.modeOptions;
                    var10 = var8.autoThreshold;
                    var8 = 'automatic_audio_input_sensitivity_enabled';
                    var3[var8] = var10;
                    var8 = var4.modeOptions;
                    var10 = var8.threshold;
                    var8 = 'audio_input_sensitivity';
                    var3[var8] = var10;
                    var10 = var4.echoCancellation;
                    var8 = 'echo_cancellation_enabled';
                    var3[var8] = var10;
                    var10 = var4.sidechainCompression;
                    var8 = 'sidechain_compression_enabled';
                    var3[var8] = var10;
                    var10 = var4.noiseSuppression;
                    var8 = 'noise_suppression_enabled';
                    var3[var8] = var10;
                    var10 = var4.noiseCancellation;
                    var8 = 'noise_cancellation_enabled';
                    var3[var8] = var10;
                    var10 = var5._noiseCancellationError;
                    var8 = 'noise_canceller_error';
                    var3[var8] = var10;
                    var10 = var4.automaticGainControl;
                    var8 = 'automatic_gain_control_enabled';
                    var3[var8] = var10;
                    var10 = var4.outputVolume;
                    var8 = 'voice_output_volume';
                    var3[var8] = var10;
                    var10 = var4.inputVolume;
                    var8 = 'voice_input_volume';
                    var3[var8] = var10;
                    var10 = var5._encryptionMode;
                    var8 = 'encryption_mode';
                    var3[var8] = var10;
                    var8 = var5.channelIds;
                    var10 = var8.size;
                    var8 = 'channel_count';
                    var3[var8] = var10;
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var8 = 46;
                    var8 = var12[var8];
                    var8 = var10.bind(var13)(var8);
                    var10 = var8.bind(var13)();
                    var8 = 'device_performance_class';
                    var3[var8] = var10;
                    var8 = var5._connection;
                    var8 = var11 != var8;
                    var10 = null;
                    if(!var8) { _fun0052_ip = 249; continue _fun0052 }
case 250:
                    var14 = var5._connection;
                    var12 = var11 == var14;
                    var8 = undefined;
                    if(var12) { _fun0052_ip = 251; continue _fun0052 }
case 252:
                    var12 = var14.getNumFastUdpReconnects;
                    var8 = var12.bind(var14)();
case 251:
                    var10 = var8;
case 249:
                    var8 = 'num_fast_udp_reconnects';
                    var3[var8] = var10;
                    var10 = var5.parentMediaSessionId;
                    var8 = 'parent_media_session_id';
                    var3[var8] = var10;
                    var10 = _closure1_slot15;
                    var8 = var10.getMediaEngine;
                    var12 = var8.bind(var10)();
                    var8 = var12.getAudioSubsystem;
                    var12 = var8.bind(var12)();
                    var8 = 'audio_subsystem';
                    var3[var8] = var12;
                    var8 = var10.getMediaEngine;
                    var12 = var8.bind(var10)();
                    var8 = var12.getAudioLayer;
                    var12 = var8.bind(var12)();
                    var8 = 'audio_layer';
                    var3[var8] = var12;
                    var12 = var4.automaticAudioSubsystem;
                    var8 = 'automatic_audio_subsystem';
                    var3[var8] = var12;
                    var8 = var5.getVoiceParticipantType;
                    var12 = var8.bind(var5)();
                    var8 = 'participant_type';
                    var3[var8] = var12;
                    var8 = 'audio_capture_sample_rate_mismatch_percent';
                    var3[var8] = var9;
                    var8 = var10.getState;
                    var8 = var8.bind(var10)();
                    var9 = var8.krispVersion;
                    var8 = 'krisp_sdk_version';
                    var3[var8] = var9;
                    var9 = var5._secureFramesMaxConcurrentTransitions;
                    var8 = 'secure_frames_max_concurrent_transitions';
                    var3[var8] = var9;
                    var9 = var5._secureFramesTransitionPrepareCount;
                    var8 = 'secure_frames_transition_prepare_count';
                    var3[var8] = var9;
                    var9 = var5._secureFramesTransitionExecuteCount;
                    var8 = 'secure_frames_transition_execute_count';
                    var3[var8] = var9;
                    var8 = var4.modeOptions;
                    var9 = var8.vadUseKrisp;
                    var8 = 'vad_use_advanced_voice_activity';
                    var3[var8] = var9;
                    var8 = var10.getExperimentalSoundshare;
                    var9 = var8.bind(var10)();
                    var8 = 'soundshare_experimental';
                    var3[var8] = var9;
                    var9 = var5.joinVoiceId;
                    var8 = 'join_voice_id';
                    var3[var8] = var9;
                    var8 = var4.bypassSystemInputProcessing;
                    var4 = 'bypass_system_input_processing';
                    var3[var4] = var8;
                    var4 = var10.getSystemMicrophoneMode;
                    var8 = var4.bind(var10)();
                    var4 = 'system_microphone_mode';
                    var3[var4] = var8;
                    var _closure3_slot5 = var3;
                    var3 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0056_ip = 84; continue _fun0056 }
case 253:
                                    var2 = _closure3_slot2;
                                    var4 = var2._systemResources;
                                    var5 = null;
                                    var3 = var5 == var4;
                                    var2 = undefined;
                                    if(var3) { _fun0056_ip = 213; continue _fun0056 }
case 52:
                                    var3 = var4.getBatteryLevelStats;
                                    var2 = var3.bind(var4)();
case 213:
                                    SaveGenerator(address=47);
case 166:
                                    return var2;
case 58:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0056_ip = 149; continue _fun0056 }
case 43:
                                    var3 = var2;
                                    if(!(var5 == var3)) { _fun0056_ip = 35; continue _fun0056 }
case 40:
                                    var4 = {};
                                    var4['batteryUsageRounded'] = var5;
                                    var3 = var4;
case 35:
                                    return var3;
case 149:
                                    return var2;
case 84:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var3 = var3.bind(var13)();
                    var8 = var7.Promise;
                    var4 = var8.all;
                    var9 = var3.bind(var13)();
                    var3 = new Array(3);
                    var3[0] = var9;
                    var12 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var9 = 47;
                    var9 = var14[var9];
                    var12 = var12.bind(var13)(var9);
                    var9 = var12.getKrispModel;
                    var9 = var9.bind(var12)();
                    var3[1] = var9;
                    var9 = var10.getKrispEnableStats;
                    var9 = var9.bind(var10)();
                    if(var9) { _fun0052_ip = 254; continue _fun0052 }
case 255:
                    var10 = var7.Promise;
                    var9 = var10.resolve;
                    var9 = var9.bind(var10)(var11);
                    _fun0052_ip = 256; continue _fun0052;
case 254:
                    var11 = _closure1_slot15;
                    var10 = var11.getMediaEngine;
                    var11 = var10.bind(var11)();
                    var10 = var11.getNoiseCancellationStats;
                    var9 = var10.bind(var11)();
case 256:
                    var3[2] = var9;
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.then;
                    var1 = function(arg1) {
                        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                            var6 = arg1;
                            var2 = var6[Symbol.iterator];
                            var6 = var2().next;
                            var4 = undefined;
                            var3 = undefined;
                            var5 = undefined;
                            var7 = var6().value;
                            var8 = var2;
                            var8 = var8 === var4;
                            var3 = var8;
                            if(var8) { _fun0057_ip = 145; continue _fun0057 }
case 167:
                            var5 = var7;
case 145: // try_start_0
                            var7 = var5;
                            var11 = var7.batteryUsageRounded;
case 69: // try_end0
                            var5 = undefined;
                            var7 = var3;
                            if(var7) { _fun0057_ip = 49; continue _fun0057 }
case 5:
                            var7 = var6().value;
                            var8 = var2;
                            var8 = var8 === var4;
                            var3 = var8;
                            if(var8) { _fun0057_ip = 49; continue _fun0057 }
case 143:
                            var5 = var7;
case 49:
                            var10 = var5;
                            var5 = undefined;
                            var7 = var3;
                            if(var7) { _fun0057_ip = 257; continue _fun0057 }
case 156:
                            var6 = var6().value;
                            var7 = var2;
                            var7 = var7 === var4;
                            var3 = var7;
                            if(var7) { _fun0057_ip = 257; continue _fun0057 }
case 258:
                            var5 = var6;
case 257:
                            var9 = var5;
                            var5 = var3;
                            if(var5) { _fun0057_ip = 39; continue _fun0057 }
case 259:
                            var2.return();
case 39:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var6 = 21;
                            var6 = var8[var6];
                            var8 = var7.bind(var4)(var6);
                            var7 = var8.track;
                            var5 = _closure1_slot20;
                            var6 = var5.VOICE_DISCONNECT;
                            var5 = {};
                            var13 = _closure3_slot5;
                            var14 = var5;
                            var12 = copyDataProperties(var14, var13);
                            var12 = var11;
                            var11 = 'battery_usage';
                            var5[var11] = var12;
                            var11 = var10;
                            var10 = 'krisp_nc_model';
                            var5[var10] = var11;
                            var10 = var9;
                            var11 = null;
                            var10 = var11 == var10;
                            var12 = undefined;
                            if(var10) { _fun0057_ip = 142; continue _fun0057 }
case 260:
                            var10 = var9;
                            var12 = var10.lowNoiseMs;
case 142:
                            var10 = 'duration_low_noise_detected_ms';
                            var5[var10] = var12;
                            var10 = var9;
                            var10 = var11 == var10;
                            var12 = undefined;
                            if(var10) { _fun0057_ip = 261; continue _fun0057 }
case 262:
                            var10 = var9;
                            var12 = var10.mediumNoiseMs;
case 261:
                            var10 = 'duration_medium_noise_detected_ms';
                            var5[var10] = var12;
                            var10 = var9;
                            var10 = var11 == var10;
                            var12 = undefined;
                            if(var10) { _fun0057_ip = 263; continue _fun0057 }
case 198:
                            var10 = var9;
                            var12 = var10.highNoiseMs;
case 263:
                            var10 = 'duration_high_noise_detected_ms';
                            var5[var10] = var12;
                            var10 = var9;
                            var11 = var11 == var10;
                            var10 = undefined;
                            if(var11) { _fun0057_ip = 264; continue _fun0057 }
case 265:
                            var10 = var9.talkTimeMs;
case 264:
                            var9 = 'duration_noise_cancellation_voice_detected_ms';
                            var5[var9] = var10;
                            var5 = var7.bind(var8)(var6, var5);
                            return var4;
case 266: // catch_target0
                            CatchBlockStart(arg_register=0);
                            _fun0057_ip = 6; continue _fun0057;
case 212:
                            CatchBlockStart(arg_register=0);
case 6:
                            if(var3) { _fun0057_ip = 124; continue _fun0057 }
case 267:
                            var2.return();
case 124:
                            throw var1;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = var5._trackRemainingSecureFrameTransitions;
                    var1 = var1.bind(var5)();
case 202:
                    var1 = new Array(0);
                    var5['_pingTimeouts'] = var1;
                    var1 = new Array(0);
                    var5['_pings'] = var1;
                    var4 = 0;
                    var5['_connectCompletedTime'] = var4;
                    var5['_pingBadCount'] = var4;
                    var1 = false;
                    var5['_inputDetected'] = var1;
                    var3 = null;
                    var5['_mediaSessionId'] = var3;
                    var8 = var5._voiceQuality;
                    if(!(var3 != var8)) { _fun0052_ip = 268; continue _fun0052 }
case 269:
                    var1 = var8.stop;
                    var1 = var1.bind(var8)();
case 268:
                    var5['_voiceQuality'] = var3;
                    var9 = var7.clearInterval;
                    var8 = var5._voiceQualityPeriodicStatsInterval;
                    var1 = undefined;
                    var8 = var9.bind(var1)(var8);
                    var5['_voiceQualityPeriodicStatsInterval'] = var3;
                    var5['_voiceQualityPeriodicStatsSequenceId'] = var4;
                    var5['_noiseCancellationError'] = var4;
                    var5['_numNoiseCancellationChanges'] = var4;
                    var9 = var5._voiceDuration;
                    if(!(var3 != var9)) { _fun0052_ip = 270; continue _fun0052 }
case 271:
                    var8 = var9.stop;
                    var8 = var8.bind(var9)();
case 270:
                    var5['_voiceDuration'] = var3;
                    var9 = var5._videoQuality;
                    if(!(var3 != var9)) { _fun0052_ip = 272; continue _fun0052 }
case 273:
                    var8 = var9.stop;
                    var8 = var8.bind(var9)();
case 272:
                    var5['_videoQuality'] = var3;
                    var5['_videoHealthManager'] = var3;
                    var9 = var5._localMediaSinkWantsManager;
                    if(!(var3 != var9)) { _fun0052_ip = 274; continue _fun0052 }
case 275:
                    var8 = var9.reset;
                    var8 = var8.bind(var9)();
case 274:
                    var5['_secureFramesState'] = var3;
                    var9 = var7.Set;
                    var8 = var5.userId;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {constructor: {value: var9}});
                    var23 = var8;
                    var22 = var7;
                    var7 = new var23[var9](var22, var21);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var5['_userIds'] = var7;
                    var8 = var5._secureFramesRosterMap;
                    var7 = var8.clear;
                    var7 = var7.bind(var8)();
                    var8 = var5._secureFramesTransitionStates;
                    var7 = var8.clear;
                    var7 = var7.bind(var8)();
                    var5['_secureFramesNextTransitionState'] = var1;
                    var5['_secureFramesMaxConcurrentTransitions'] = var4;
                    var5['_secureFramesTransitionPrepareCount'] = var4;
                    var5['_secureFramesTransitionExecuteCount'] = var4;
                    var4 = var5._connection;
                    if(!(var3 != var4)) { _fun0052_ip = 276; continue _fun0052 }
case 277:
                    var7 = var5._connection;
                    var5['_connection'] = var3;
                    var4 = var7.destroy;
                    var3 = var5.reconnecting;
                    var3 = var4.bind(var7)(var3);
case 276:
                    var4 = var5.setState;
                    var2 = _closure1_slot22;
                    var3 = var2.DISCONNECTED;
                    var2 = {};
                    var2['willReconnect'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[53] = var5;
            var5 = {};
            var7 = '_handleResuming';
            var5['key'] = var7;
            var7 = function value() {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                    var2 = this;
                    var4 = var2._connection;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0058_ip = 161; continue _fun0058 }
case 160:
                    var3 = var4.fastUdpReconnect;
                    var3 = var3.bind(var4)();
case 161:
                    var2 = var2._connection;
                    if(!(var1 != var2)) { _fun0058_ip = 58; continue _fun0058 }
case 60:
                    var1 = var2.clearAllSpeaking;
                    var1 = var1.bind(var2)();
case 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[54] = var5;
            var5 = {};
            var7 = '_handleReady';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
                _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                    var16 = arg2;
                    var15 = arg3;
                    var17 = arg5;
                    var12 = arg6;
                    var4 = arg7;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var _closure3_slot2 = var16;
                    var _closure3_slot3 = var15;
                    var2 = var3.setState;
                    var1 = _closure1_slot22;
                    var1 = var1.RTC_CONNECTING;
                    var1 = var2.bind(var3)(var1);
                    var3['port'] = var15;
                    var2 = var3._chooseExperiments;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0059_ip = 169; continue _fun0059 }
case 87:
                    var4 = new Array(0);
case 169:
                    var2 = var2.bind(var3)(var4);
                    var4 = var12.length;
                    var2 = 0;
                    if(!(var2 === var4)) { _fun0059_ip = 278; continue _fun0059 }
case 82:
                    var4 = var12.push;
                    var2 = {'type': null, 'rid': '100', 'ssrc': null, 'rtxSsrc': null, 'quality': 100, 'active': false};
                    var5 = _closure1_slot29;
                    var5 = var5.VIDEO;
                    var2['type'] = var5;
                    var5 = 1;
                    var5 = var17 + var5;
                    var2['ssrc'] = var5;
                    var5 = 2;
                    var5 = var17 + var5;
                    var2['rtxSsrc'] = var5;
                    var2 = var4.bind(var12)(var2);
case 278:
                    var4 = _closure1_slot15;
                    var2 = var4.getMediaEngine;
                    var10 = var2.bind(var4)();
                    var4 = _closure1_slot12;
                    var2 = var4.getPersistentCodesEnabled;
                    var14 = var2.bind(var4)();
                    var4 = _closure1_slot13;
                    var2 = var4.getStaticAuthSessionId;
                    var2 = var2.bind(var4)();
                    var4 = var1 != var2;
                    var1 = undefined;
                    var13 = undefined;
                    if(!var4) { _fun0059_ip = 279; continue _fun0059 }
case 280:
                    var13 = var2;
case 279:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var4 = 19;
                    var2 = var2[var4];
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.now;
                    var9 = var2.bind(var5)();
                    var11 = var10.connect;
                    var7 = var3.context;
                    var5 = var3.userId;
                    var2 = {};
                    var2['ssrc'] = var17;
                    var2['address'] = var16;
                    var2['port'] = var15;
                    var15 = arg4;
                    var2['modes'] = var15;
                    var15 = var3._selectedExperiments;
                    var2['experiments'] = var15;
                    var2['streamParameters'] = var12;
                    var15 = _closure1_slot15;
                    var12 = var15.getQoS;
                    var12 = var12.bind(var15)();
                    var2['qosEnabled'] = var12;
                    var12 = undefined;
                    if(!var14) { _fun0059_ip = 281; continue _fun0059 }
case 282:
                    var12 = var13;
case 281:
                    var2['signingKeyId'] = var12;
                    var12 = var3.getExtraConnectionOptions;
                    var19 = var12.bind(var3)();
                    var20 = var2;
                    var12 = copyDataProperties(var20, var19);
                    var2 = var11.bind(var10)(var7, var5, var2);
                    var _closure3_slot4 = var2;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = var7[var4];
                    var11 = var5.bind(var1)(var4);
                    var4 = var11.now;
                    var4 = var4.bind(var11)();
                    var4 = var4 - var9;
                    var _closure3_slot5 = var4;
                    var4 = 32;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isWeb;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0059_ip = 283; continue _fun0059 }
case 203:
                    var5 = _closure1_slot24;
                    var4 = !var5;
case 283:
                    if(!var4) { _fun0059_ip = 284; continue _fun0059 }
case 285:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 22;
                    var4 = var7[var4];
                    var7 = var5.bind(var1)(var4);
                    var5 = var7.captureMessage;
                    var4 = 'Browser does not support Unified Plan';
                    var4 = var5.bind(var7)(var4);
case 284:
                    var7 = var2.setUseElectronVideo;
                    var9 = var10.supports;
                    var4 = _closure1_slot25;
                    var5 = var4.ELECTRON_VIDEO;
                    var5 = var9.bind(var10)(var5);
                    var5 = var7.bind(var2)(var5);
                    var7 = _closure1_slot15;
                    var5 = var7.supports;
                    var4 = var4.IMAGE_QUALITY_MEASUREMENT;
                    var4 = var5.bind(var7)(var4);
                    if(!var4) { _fun0059_ip = 41; continue _fun0059 }
case 286:
                    var5 = var2.setVideoQualityMeasurement;
                    var4 = 'imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec';
                    var4 = var5.bind(var2)(var4);
case 41:
                    var4 = global;
                    var7 = var4.Array;
                    var4 = var7.prototype;
                    var5 = Object.create(var4, {constructor: {value: var7}});
                    var20 = 'unk';
                    var21 = var5;
                    var4 = new var21[var7](var20, var19);
                    var9 = var4 instanceof Object ? var4 : var5;
                    var5 = var9.push;
                    var4 = 'nvNewPresets';
                    var4 = var5.bind(var9)(var4);
                    var5 = var3.context;
                    var4 = _closure1_slot26;
                    var4 = var4.STREAM;
                    if(!(var5 !== var4)) { _fun0059_ip = 287; continue _fun0059 }
case 288:
                    var5 = var9.push;
                    var4 = 'nvRelaxRc=75';
                    var4 = var5.bind(var9)(var4);
                    _fun0059_ip = 289; continue _fun0059;
case 287:
                    var5 = var9.push;
                    var4 = 'nvRelaxRc=250';
                    var4 = var5.bind(var9)(var4);
case 289:
                    var5 = _closure1_slot15;
                    var4 = var5.getUseVaapiEncoder;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0059_ip = 290; continue _fun0059 }
case 291:
                    var5 = var9.push;
                    var4 = 'vaapi';
                    var4 = var5.bind(var9)(var4);
case 290:
                    var5 = var3.context;
                    var4 = _closure1_slot26;
                    var4 = var4.STREAM;
                    var4 = var5 === var4;
                    if(!var4) { _fun0059_ip = 292; continue _fun0059 }
case 293:
                    var5 = var3.getVoiceParticipantType;
                    var7 = var5.bind(var3)();
                    var5 = 'streamer';
                    var4 = var5 === var7;
case 292:
                    if(!var4) { _fun0059_ip = 294; continue _fun0059 }
case 295:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var5 = 48;
                    var5 = var10[var5];
                    var10 = var7.bind(var1)(var5);
                    var7 = var10.getVideoCaptureDeviceForEncodeConfig;
                    var5 = 'handleReady';
                    var5 = var7.bind(var10)(var5);
                    var4 = var5.enabled;
case 294:
                    if(!var4) { _fun0059_ip = 296; continue _fun0059 }
case 297:
                    var5 = var9.push;
                    var4 = 'useCaptureDeviceForEncode';
                    var4 = var5.bind(var9)(var4);
case 296:
                    var5 = var2.setVideoEncoderExperiments;
                    var7 = var9.join;
                    var4 = ',';
                    var4 = var7.bind(var9)(var4);
                    var4 = var5.bind(var2)(var4);
                    var11 = var2.on;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 49;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.Speaking;
                    var9 = function(arg1, arg2, arg3) {
                        _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                            var6 = arg1;
                            var5 = arg2;
                            var2 = _closure3_slot0;
                            var2 = var2.userId;
                            if(!(var2 === var6)) { _fun0060_ip = 213; continue _fun0060 }
case 55:
                            var4 = _closure3_slot0;
                            var3 = var4.sendSpeaking;
                            var2 = arg3;
                            var2 = var3.bind(var4)(var5, var2);
case 213:
                            var4 = _closure3_slot0;
                            var3 = var4.emit;
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 38;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.RTCConnectionEvent;
                            var2 = var2.Speaking;
                            var2 = var3.bind(var4)(var2, var6, var5);
                            return var1;
                        }
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.ToggleMuteFromNative;
                    var9 = function() {
                        _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var3 = var1.context;
                            var2 = _closure1_slot26;
                            var2 = var2.DEFAULT;
                            if(!(var3 === var2)) { _fun0061_ip = 298; continue _fun0061 }
case 167:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 50;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.toggleSelfMute;
                            var1 = {};
                            var4 = false;
                            var1['playSoundEffect'] = var4;
                            var1 = var2.bind(var3)(var1);
case 298:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.NativeMuteChanged;
                    var9 = function(arg1) {
                        _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var3 = var1.context;
                            var2 = _closure1_slot26;
                            var2 = var2.DEFAULT;
                            if(!(var3 === var2)) { _fun0062_ip = 299; continue _fun0062 }
case 167:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 51;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.nativeMuteChanged;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
case 299:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.Video;
                    var9 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                        _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                            var7 = arg1;
                            var4 = arg3;
                            var10 = arg4;
                            var9 = arg5;
                            var3 = arg6;
                            var _closure4_slot0 = var7;
                            var12 = _closure3_slot0;
                            var11 = var12._handleVideoStreamId;
                            var6 = {};
                            var6['userId'] = var7;
                            var2 = arg2;
                            var6['streamId'] = var2;
                            var6['audioSsrc'] = var4;
                            var2 = null;
                            var14 = var2 != var10;
                            var13 = 0;
                            if(!var14) { _fun0063_ip = 298; continue _fun0063 }
case 174:
                            var13 = var10;
case 298:
                            var6['videoSsrc'] = var13;
                            var6['rtxSsrc'] = var9;
                            var6['videoStreamParameters'] = var3;
                            var6 = var11.bind(var12)(var6);
                            var6 = _closure3_slot0;
                            var6 = var6.userId;
                            if(!(var6 === var7)) { _fun0063_ip = 300; continue _fun0063 }
case 172:
                            var7 = _closure3_slot0;
                            var6 = var7.sendVideo;
                            var11 = var2 != var4;
                            var5 = 0;
                            if(!var11) { _fun0063_ip = 90; continue _fun0063 }
case 46:
                            var5 = var4;
case 90:
                            var11 = var2 != var10;
                            var4 = 0;
                            if(!var11) { _fun0063_ip = 91; continue _fun0063 }
case 301:
                            var4 = var10;
case 91:
                            var10 = var2 != var9;
                            var8 = 0;
                            if(!var10) { _fun0063_ip = 92; continue _fun0063 }
case 109:
                            var8 = var9;
case 92:
                            var19 = var7;
                            var18 = var5;
                            var17 = var4;
                            var16 = var8;
                            var15 = var3;
                            var4 = var19[var6](var18, var17, var16, var15, var14);
                            if(!(var2 != var3)) { _fun0063_ip = 300; continue _fun0063 }
case 140:
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                                    var1 = arg1;
                                    var3 = var1.quality;
                                    var2 = 100;
                                    if(!(var2 === var3)) { _fun0064_ip = 302; continue _fun0064 }
case 164:
                                    var9 = _closure3_slot0;
                                    var8 = var9.emit;
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var2 = 38;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var2 = var4.bind(var2)(var3);
                                    var2 = var2.RTCConnectionEvent;
                                    var16 = var2.VideoSourceQualityChanged;
                                    var15 = var9.guildId;
                                    var14 = var9.channelId;
                                    var13 = _closure4_slot0;
                                    var12 = var1.maxResolution;
                                    var11 = var1.maxFrameRate;
                                    var10 = var9.context;
                                    var17 = var9;
                                    var1 = var17[var8](var16, var15, var14, var13, var12, var11, var10, var9);
case 302:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
case 300:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.FirstFrame;
                    var9 = function(arg1, arg2, arg3) {
                        _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                            var8 = arg1;
                            var3 = arg2;
                            var7 = arg3;
                            var2 = _closure3_slot0;
                            var2 = var2._localMediaSinkWantsManager;
                            var4 = null;
                            if(!(var4 != var2)) { _fun0065_ip = 303; continue _fun0065 }
case 34:
                            var11 = _closure3_slot0;
                            var5 = var11._localMediaSinkWantsManager;
                            var2 = var5.setFirstFrameReceived;
                            var2 = var2.bind(var5)(var3);
                            var10 = var11.emit;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 38;
                            var5 = var5[var2];
                            var2 = undefined;
                            var2 = var6.bind(var2)(var5);
                            var2 = var2.RTCConnectionEvent;
                            var17 = var2.Video;
                            var16 = var11.guildId;
                            var15 = var11.channelId;
                            var12 = var11.streamServerId;
                            var18 = var11;
                            var14 = var8;
                            var13 = var7;
                            var2 = var18[var10](var17, var16, var15, var14, var13, var12, var11);
case 303:
                            var2 = _closure3_slot0;
                            var2 = var2._goLiveQualityManager;
                            if(!(var4 != var2)) { _fun0065_ip = 107; continue _fun0065 }
case 120:
                            var6 = _closure3_slot0;
                            var2 = var6._goLiveQualityManager;
                            var1 = var2.setFirstFrameReceived;
                            var1 = var1.bind(var2)(var3);
                            var5 = var6.emit;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 38;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var1 = var1.RTCConnectionEvent;
                            var17 = var1.Video;
                            var16 = var6.guildId;
                            var15 = var6.channelId;
                            var12 = var6.streamServerId;
                            var18 = var6;
                            var14 = var8;
                            var13 = var7;
                            var1 = var18[var5](var17, var16, var15, var14, var13, var12, var11);
case 107:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.Silence;
                    var9 = function(arg1) {
                        _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var1 = var2._inputDetected;
                            if(var1) { _fun0066_ip = 55; continue _fun0066 }
case 164:
                            var3 = arg1;
                            var1 = !var3;
case 55:
                            var2['_inputDetected'] = var1;
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.Connected;
                    var9 = function(arg1, arg2) {
                        _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                            var7 = arg1;
                            var6 = arg2;
                            var2 = _closure3_slot0;
                            var8 = var2.logger;
                            var5 = var8.info;
                            var13 = _closure3_slot2;
                            var12 = _closure3_slot3;
                            var11 = global;
                            var4 = var11.HermesInternal;
                            var10 = var4.concat;
                            var9 = 'RTC connected to media server: ';
                            var4 = ':';
                            var4 = var10.bind(var9)(var13, var4, var12);
                            var4 = var5.bind(var8)(var4);
                            var4 = _closure3_slot1;
                            var2 = var2._socket;
                            if(!(var4 !== var2)) { _fun0067_ip = 304; continue _fun0067 }
case 305:
                            var2 = _closure3_slot0;
                            var5 = var2.logger;
                            var4 = var5.warn;
                            var2 = 'Socket mismatch, disconnecting';
                            var2 = var4.bind(var5)(var2);
                            _fun0067_ip = 306; continue _fun0067;
case 304:
                            var2 = _closure3_slot0;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var5 = 52;
                            var12 = var9[var5];
                            var10 = undefined;
                            var14 = var8.bind(var10)(var12);
                            var18 = _closure3_slot4;
                            var13 = var14.prototype;
                            var13 = Object.create(var13, {constructor: {value: var14}});
                            var19 = var13;
                            var12 = new var19[var14](var18, var17);
                            var12 = var12 instanceof Object ? var12 : var13;
                            var2['_voiceQuality'] = var12;
                            var13 = var2._voiceQuality;
                            var12 = var13.start;
                            var12 = var12.bind(var13)();
                            var14 = var2._voiceQuality;
                            var13 = var14.on;
                            var12 = _closure1_slot0;
                            var5 = var9[var5];
                            var5 = var12.bind(var10)(var5);
                            var5 = var5.VoiceQualityEvent;
                            var12 = var5.InputDeviceSampleRateChanged;
                            var5 = function(arg1) {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var1 = 35;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.dispatch;
                                var2 = {};
                                var5 = 'AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED';
                                var2['type'] = var5;
                                var5 = arg1;
                                var2['sampleRate'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var5 = var13.bind(var14)(var12, var5);
                            var5 = 0;
                            var2['_voiceQualityPeriodicStatsSequenceId'] = var5;
                            var13 = var11.setInterval;
                            var12 = var2._handleVoiceQualityPeriodicsStats;
                            var11 = 300000;
                            var11 = var13.bind(var10)(var12, var11);
                            var2['_voiceQualityPeriodicStatsInterval'] = var11;
                            var11 = 53;
                            var11 = var9[var11];
                            var13 = var8.bind(var10)(var11);
                            var18 = _closure3_slot4;
                            var12 = var13.prototype;
                            var12 = Object.create(var12, {constructor: {value: var13}});
                            var19 = var12;
                            var11 = new var19[var13](var18, var17);
                            var11 = var11 instanceof Object ? var11 : var12;
                            var2['_systemResponsiveness'] = var11;
                            var12 = var2._systemResponsiveness;
                            var11 = var12.start;
                            var11 = var11.bind(var12)();
                            var11 = 54;
                            var11 = var9[var11];
                            var11 = var8.bind(var10)(var11);
                            var12 = var11.prototype;
                            var12 = Object.create(var12, {constructor: {value: var11}});
                            var19 = var12;
                            var11 = new var19[var11](var18);
                            var11 = var11 instanceof Object ? var11 : var12;
                            var2['_systemResources'] = var11;
                            var12 = var2._systemResources;
                            var11 = var12.setLastBattery;
                            var11 = var11.bind(var12)();
                            var2['_noiseCancellationError'] = var5;
                            var5 = 55;
                            var5 = var9[var5];
                            var11 = var8.bind(var10)(var5);
                            var18 = var2.userId;
                            var17 = _closure3_slot4;
                            var8 = var11.prototype;
                            var8 = Object.create(var8, {constructor: {value: var11}});
                            var19 = var8;
                            var5 = new var19[var11](var18, var17, var16);
                            var5 = var5 instanceof Object ? var5 : var8;
                            var2['_voiceDuration'] = var5;
                            var12 = var2._voiceDuration;
                            var11 = var12.start;
                            var8 = _closure3_slot4;
                            var5 = var8.getSelfMute;
                            var9 = var5.bind(var8)();
                            var8 = _closure3_slot4;
                            var5 = var8.getSelfDeaf;
                            var8 = var5.bind(var8)();
                            var13 = _closure3_slot4;
                            var5 = var13.getVoiceFilterId;
                            var5 = var5.bind(var13)();
                            var5 = var11.bind(var12)(var9, var8, var5);
                            var2['protocol'] = var7;
                            var2 = 'udp';
                            if(!(var2 !== var7)) { _fun0067_ip = 307; continue _fun0067 }
case 134:
                            var2 = 'webrtc';
                            if(!(var2 !== var7)) { _fun0067_ip = 308; continue _fun0067 }
case 309:
                            var2 = _closure3_slot0;
                            var8 = var2.logger;
                            var5 = var8.error;
                            var2 = 'Unable to determine protocol.';
                            var2 = var5.bind(var8)(var2);
                            var2 = undefined;
                            return var2;
case 308:
                            var9 = _closure3_slot0;
                            var8 = var9.logger;
                            var5 = var8.info;
                            var2 = 'Sending local SDP to RTC server.';
                            var2 = var5.bind(var8)(var2);
                            var8 = _closure3_slot1;
                            var11 = var8.once;
                            var5 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var2 = 36;
                            var2 = var12[var2];
                            var2 = var5.bind(var10)(var2);
                            var2 = var2.SocketEvent;
                            var5 = var2.SDP;
                            var12 = var9._handleSDP;
                            var2 = var12.bind;
                            var2 = var2.bind(var12)(var9);
                            var2 = var11.bind(var8)(var5, var2);
                            var5 = var8.selectProtocol;
                            var2 = var9.getRTCConnectionId;
                            var2 = var2.bind(var9)();
                            var2 = var5.bind(var8)(var7, var2, var6);
                            _fun0067_ip = 310; continue _fun0067;
case 307:
                            var2 = _closure3_slot0;
                            var11 = var2.logger;
                            var9 = var11.info;
                            var8 = var2._selectedExperiments;
                            var5 = 'Sending UDP info to RTC server.';
                            var5 = var9.bind(var11)(var5, var6, var8);
                            var5 = _closure3_slot1;
                            var8 = var5.once;
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var4 = 36;
                            var4 = var11[var4];
                            var4 = var9.bind(var10)(var4);
                            var4 = var4.SocketEvent;
                            var4 = var4.Encryption;
                            var3 = function(arg1, arg2) {
                                _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                                    var2 = arg1;
                                    var4 = _closure3_slot4;
                                    var3 = _closure3_slot0;
                                    var3 = var3._connection;
                                    if(!(var4 === var3)) { _fun0068_ip = 4; continue _fun0068 }
case 146:
                                    var5 = _closure3_slot4;
                                    var4 = var5.setEncryption;
                                    var3 = arg2;
                                    var3 = var4.bind(var5)(var2, var3);
                                    var1 = _closure3_slot0;
                                    var1['_encryptionMode'] = var2;
case 4:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var3 = var8.bind(var5)(var4, var3);
                            var4 = var5.selectProtocol;
                            var3 = var2.getRTCConnectionId;
                            var17 = var3.bind(var2)();
                            var15 = var2._selectedExperiments;
                            var19 = var5;
                            var18 = var7;
                            var16 = var6;
                            var2 = var19[var4](var18, var17, var16, var15, var14);
case 310:
                            var1 = _closure3_slot0;
                            var2 = var1._backoff;
                            var1 = var2.succeed;
                            var1 = var1.bind(var2)();
case 306:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.VideoEncoderFallback;
                    var9 = function(arg1) {
                        var4 = arg1;
                        var3 = var4.filter;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.type;
                            var1 = 'video';
                            var1 = var1 === var2;
                            return var1;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.map;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.name;
                            return var1;
                        };
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.join;
                        var1 = ',';
                        var7 = var2.bind(var3)(var1);
                        var2 = _closure3_slot0;
                        var5 = var2.logger;
                        var3 = var5.info;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var2 = 'The originally selected video encoder is not working, fallback to the other available encoders: ';
                        var2 = var6.bind(var2)(var7);
                        var2 = var3.bind(var5)(var2);
                        var3 = _closure3_slot1;
                        var2 = var3.updateSession;
                        var1 = {};
                        var1['codecs'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.VideoDecoderFallback;
                    var9 = function(arg1) {
                        _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                            var7 = arg1;
                            var6 = _closure1_slot14;
                            var5 = var6.getChannel;
                            var1 = _closure3_slot0;
                            var1 = var1.channelId;
                            var5 = var5.bind(var6)(var1);
                            var1 = null;
                            var8 = var1 == var5;
                            var1 = undefined;
                            var6 = undefined;
                            if(var8) { _fun0069_ip = 157; continue _fun0069 }
case 58:
                            var6 = var5.type;
case 157:
                            var5 = _closure1_slot21;
                            var5 = var5.GUILD_STAGE_VOICE;
                            var9 = _closure1_slot15;
                            var8 = var9.isVideoDecoderFallbackEnabled;
                            var8 = var8.bind(var9)();
                            if(!var8) { _fun0069_ip = 311; continue _fun0069 }
case 179:
                            if(!(var6 !== var5)) { _fun0069_ip = 311; continue _fun0069 }
case 87:
                            var6 = var7.filter;
                            var5 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var1 = 'video';
                                var1 = var1 === var2;
                                return var1;
                            };
                            var6 = var6.bind(var7)(var5);
                            var5 = var6.map;
                            var4 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.name;
                                return var1;
                            };
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.join;
                            var4 = ',';
                            var9 = var5.bind(var6)(var4);
                            var4 = _closure3_slot0;
                            var6 = var4.logger;
                            var5 = var6.info;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var8 = var4.concat;
                            var4 = 'The originally selected video decoder is not working, fallback to the other available decoders: ';
                            var4 = var8.bind(var4)(var9);
                            var4 = var5.bind(var6)(var4);
                            var6 = _closure3_slot1;
                            var5 = var6.updateSession;
                            var4 = {};
                            var4['codecs'] = var7;
                            var4 = var5.bind(var6)(var4);
                            _fun0069_ip = 312; continue _fun0069;
case 311:
                            var4 = _closure3_slot0;
                            var4 = var4._videoDecoderFallbackSuppressed;
                            if(var4) { _fun0069_ip = 312; continue _fun0069 }
case 313:
                            var4 = _closure1_slot15;
                            var3 = var4.isVideoDecoderFallbackEnabled;
                            var3 = var3.bind(var4)();
                            var7 = 'not in fallback treatment';
                            if(!var3) { _fun0069_ip = 93; continue _fun0069 }
case 314:
                            var7 = 'stage channel';
case 93:
                            var3 = _closure3_slot0;
                            var5 = var3.logger;
                            var4 = var5.info;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var2 = 'Suppressing video decoder fallback: ';
                            var2 = var6.bind(var2)(var7);
                            var2 = var4.bind(var5)(var2);
                            var2 = true;
                            var3['_videoDecoderFallbackSuppressed'] = var2;
case 312:
                            return var1;
                        }
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.Error;
                    var9 = function(arg1) {
                        _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                            var8 = arg1;
                            var3 = _closure3_slot1;
                            var1 = _closure3_slot0;
                            var1 = var1._socket;
                            if(!(var3 === var1)) { _fun0070_ip = 315; continue _fun0070 }
case 151:
                            var4 = _closure1_slot18;
                            var3 = var4.shouldIncludePreferredRegion;
                            var3 = var3.bind(var4)();
                            var7 = null;
                            if(!var3) { _fun0070_ip = 85; continue _fun0070 }
case 5:
                            var4 = _closure1_slot18;
                            var3 = var4.getPreferredRegion;
                            var7 = var3.bind(var4)();
case 85:
                            var5 = _closure3_slot0;
                            var4 = var5.logger;
                            var3 = var4.error;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var2 = 'Error occurred while connecting to RTC server: ';
                            var2 = var6.bind(var2)(var8);
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var2 = 21;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.track;
                            var1 = _closure1_slot20;
                            var2 = var1.VOICE_CONNECTION_FAILURE;
                            var1 = {};
                            var6 = var5._getAnalyticsProperties;
                            var10 = var6.bind(var5)();
                            var11 = var1;
                            var6 = copyDataProperties(var11, var10);
                            var9 = var5.hostname;
                            var6 = 'hostname';
                            var1[var6] = var9;
                            var9 = var5.port;
                            var6 = 'port';
                            var1[var6] = var9;
                            var9 = var5.protocol;
                            var6 = 'protocol';
                            var1[var6] = var9;
                            var6 = 'error';
                            var1[var6] = var8;
                            var6 = 'cloudflare_best_region';
                            var1[var6] = var7;
                            var7 = var5._connectCount;
                            var6 = 'connect_count';
                            var1[var6] = var7;
                            var6 = var5.joinVoiceId;
                            var5 = 'join_voice_id';
                            var1[var5] = var6;
                            var1 = var3.bind(var4)(var2, var1);
case 315:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.ConnectionStateChange;
                    var9 = function(arg1) {
                        _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                            var6 = arg1;
                            var1 = _closure3_slot0;
                            var7 = var1.logger;
                            var5 = var7.info;
                            var10 = var1.state;
                            var4 = global;
                            var3 = var4.HermesInternal;
                            var9 = var3.concat;
                            var8 = 'RTC media connection state change: ';
                            var3 = ' => ';
                            var3 = var9.bind(var8)(var10, var3, var6);
                            var3 = var5.bind(var7)(var3);
                            var3 = _closure3_slot1;
                            var1 = var1._socket;
                            if(!(var3 === var1)) { _fun0071_ip = 316; continue _fun0071 }
case 317:
                            var1 = _closure3_slot0;
                            var5 = var1.state;
                            var3 = _closure1_slot27;
                            var3 = var3.DISCONNECTED;
                            if(!(var3 !== var6)) { _fun0071_ip = 318; continue _fun0071 }
case 13:
                            var3 = _closure1_slot27;
                            var3 = var3.CONNECTING;
                            if(!(var3 !== var6)) { _fun0071_ip = 319; continue _fun0071 }
case 320:
                            var3 = _closure1_slot27;
                            var3 = var3.CONNECTED;
                            if(!(var3 !== var6)) { _fun0071_ip = 321; continue _fun0071 }
case 180:
                            var3 = _closure1_slot27;
                            var3 = var3.NO_ROUTE;
                            if(!(var3 !== var6)) { _fun0071_ip = 322; continue _fun0071 }
case 15:
                            var3 = _closure1_slot27;
                            var3 = var3.ICE_CHECKING;
                            if(!(var3 !== var6)) { _fun0071_ip = 142; continue _fun0071 }
case 138:
                            var3 = _closure1_slot27;
                            var3 = var3.DTLS_CONNECTING;
                            if(!(var3 === var6)) { _fun0071_ip = 208; continue _fun0071 }
case 323:
                            var7 = _closure3_slot0;
                            var6 = var7.setState;
                            var3 = _closure1_slot22;
                            var3 = var3.DTLS_CONNECTING;
                            var3 = var6.bind(var7)(var3);
                            _fun0071_ip = 208; continue _fun0071;
case 142:
                            var7 = _closure3_slot0;
                            var6 = var7.setState;
                            var3 = _closure1_slot22;
                            var3 = var3.ICE_CHECKING;
                            var3 = var6.bind(var7)(var3);
                            _fun0071_ip = 208; continue _fun0071;
case 322:
                            var7 = _closure3_slot0;
                            var6 = var7.setState;
                            var3 = _closure1_slot22;
                            var3 = var3.NO_ROUTE;
                            var3 = var6.bind(var7)(var3);
                            _fun0071_ip = 208; continue _fun0071;
case 321:
                            var7 = _closure3_slot0;
                            var6 = var7.setState;
                            var3 = _closure1_slot22;
                            var3 = var3.RTC_CONNECTED;
                            var3 = var6.bind(var7)(var3);
                            _fun0071_ip = 208; continue _fun0071;
case 319:
                            var7 = _closure3_slot0;
                            var6 = var7.setState;
                            var3 = _closure1_slot22;
                            var3 = var3.RTC_CONNECTING;
                            var3 = var6.bind(var7)(var3);
                            _fun0071_ip = 208; continue _fun0071;
case 318:
                            var7 = _closure3_slot0;
                            var6 = var7.setState;
                            var3 = _closure1_slot22;
                            var3 = var3.RTC_DISCONNECTED;
                            var3 = var6.bind(var7)(var3);
case 208:
                            var3 = _closure1_slot22;
                            var3 = var3.RTC_CONNECTING;
                            if(!(var5 === var3)) { _fun0071_ip = 324; continue _fun0071 }
case 325:
                            var3 = _closure3_slot0;
                            var6 = var3.state;
                            var3 = _closure1_slot22;
                            var3 = var3.RTC_DISCONNECTED;
                            if(!(var6 !== var3)) { _fun0071_ip = 326; continue _fun0071 }
case 324:
                            var3 = _closure3_slot0;
                            var6 = var3.state;
                            var3 = _closure1_slot22;
                            var3 = var3.NO_ROUTE;
                            if(!(var6 === var3)) { _fun0071_ip = 327; continue _fun0071 }
case 328:
                            var3 = _closure3_slot0;
                            var3 = var3._backoff;
                            var6 = var3.fails;
                            var3 = 0;
                            if(!(var3 === var6)) { _fun0071_ip = 329; continue _fun0071 }
case 330:
                            var6 = _closure3_slot0;
                            var3 = var6._handleNoRoute;
                            var3 = var3.bind(var6)();
case 329:
                            var3 = _closure3_slot0;
                            var7 = var3._backoff;
                            var6 = var7.fail;
                            var3 = var3.reconnect;
                            var3 = var6.bind(var7)(var3);
                            _fun0071_ip = 327; continue _fun0071;
case 326:
                            var6 = _closure3_slot0;
                            var3 = var6.reconnect;
                            var3 = var3.bind(var6)();
case 327:
                            var3 = _closure3_slot0;
                            var6 = var3.state;
                            var3 = _closure1_slot22;
                            var3 = var3.RTC_CONNECTED;
                            if(!(var6 !== var3)) { _fun0071_ip = 331; continue _fun0071 }
case 131:
                            var3 = _closure1_slot22;
                            var3 = var3.RTC_CONNECTED;
                            if(!(var5 === var3)) { _fun0071_ip = 316; continue _fun0071 }
case 332:
                            var3 = _closure3_slot0;
                            var6 = var3.stateHistory;
                            var5 = var6.reset;
                            var3 = var3.state;
                            var3 = var5.bind(var6)(var3);
                            _fun0071_ip = 316; continue _fun0071;
case 331:
                            var5 = _closure1_slot18;
                            var3 = var5.shouldIncludePreferredRegion;
                            var5 = var3.bind(var5)();
                            var3 = null;
                            var15 = null;
                            if(!var5) { _fun0071_ip = 333; continue _fun0071 }
case 334:
                            var6 = _closure1_slot18;
                            var5 = var6.getPreferredRegion;
                            var15 = var5.bind(var6)();
case 333:
                            var5 = _closure3_slot0;
                            var5 = var5._connecting;
                            if(!var5) { _fun0071_ip = 335; continue _fun0071 }
case 336:
                            var6 = _closure1_slot15;
                            var5 = var6.getSettings;
                            var14 = var5.bind(var6)();
                            var8 = _closure3_slot0;
                            var5 = var8._getAnalyticsProperties;
                            var12 = var5.bind(var8)();
                            var7 = _closure1_slot1;
                            var16 = _closure1_slot3;
                            var6 = 21;
                            var5 = var16[var6];
                            var11 = undefined;
                            var10 = var7.bind(var11)(var5);
                            var9 = var10.track;
                            var5 = _closure1_slot20;
                            var7 = var5.VOICE_CONNECTION_SUCCESS;
                            var5 = {};
                            var20 = var5;
                            var19 = var12;
                            var13 = copyDataProperties(var20, var19);
                            var17 = var8.hostname;
                            var13 = 'hostname';
                            var5[var13] = var17;
                            var17 = var8.port;
                            var13 = 'port';
                            var5[var13] = var17;
                            var17 = var8.protocol;
                            var13 = 'protocol';
                            var5[var13] = var17;
                            var13 = 'cloudflare_best_region';
                            var5[var13] = var15;
                            var15 = _closure1_slot0;
                            var13 = 19;
                            var13 = var16[var13];
                            var15 = var15.bind(var11)(var13);
                            var13 = var15.now;
                            var13 = var13.bind(var15)();
                            var8 = var8._connected;
                            var15 = _closure3_slot0;
                            if(var8) { _fun0071_ip = 337; continue _fun0071 }
case 297:
                            var8 = var15._createdTime;
                            _fun0071_ip = 296; continue _fun0071;
case 337:
                            var8 = var15._connectStartTime;
case 296:
                            var13 = var13 - var8;
                            var8 = 'connect_time';
                            var5[var8] = var13;
                            var8 = _closure3_slot0;
                            var15 = var8._connectCount;
                            var13 = 'connect_count';
                            var5[var13] = var15;
                            var13 = _closure1_slot15;
                            var15 = var13.getMediaEngine;
                            var16 = var15.bind(var13)();
                            var15 = var16.getAudioSubsystem;
                            var16 = var15.bind(var16)();
                            var15 = 'audio_subsystem';
                            var5[var15] = var16;
                            var15 = var13.getMediaEngine;
                            var16 = var15.bind(var13)();
                            var15 = var16.getAudioLayer;
                            var16 = var15.bind(var16)();
                            var15 = 'audio_layer';
                            var5[var15] = var16;
                            var15 = var14.automaticAudioSubsystem;
                            var14 = 'automatic_audio_subsystem';
                            var5[var14] = var15;
                            var14 = var8.getMediaSessionId;
                            var15 = var14.bind(var8)();
                            var14 = 'media_session_id';
                            var5[var14] = var15;
                            var14 = var8.getVoiceParticipantType;
                            var15 = var14.bind(var8)();
                            var14 = 'participant_type';
                            var5[var14] = var15;
                            var14 = var8.joinVoiceId;
                            var8 = 'join_voice_id';
                            var5[var8] = var14;
                            var8 = var13.getMediaEngine;
                            var13 = var8.bind(var13)();
                            var8 = var13.getVideoInputDeviceId;
                            var13 = var8.bind(var13)();
                            var8 = _closure1_slot31;
                            var13 = var13 !== var8;
                            if(!var13) { _fun0071_ip = 338; continue _fun0071 }
case 339:
                            var8 = _closure3_slot4;
                            var14 = var8.context;
                            var8 = _closure1_slot26;
                            var8 = var8.DEFAULT;
                            var13 = var14 === var8;
case 338:
                            var8 = 'is_camera_enabled';
                            var5[var8] = var13;
                            var8 = _closure3_slot0;
                            var14 = var8.stateHistory;
                            var13 = var14.getVoiceConnectionSuccessStats;
                            var19 = var13.bind(var14)();
                            var20 = var5;
                            var13 = copyDataProperties(var20, var19);
                            var5 = var9.bind(var10)(var7, var5);
                            var5 = var4.performance;
                            var4 = var5.now;
                            var9 = var4.bind(var5)();
                            var10 = function nullableSubtract(arg1, arg2) {
                                _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                                    var3 = arg1;
                                    var2 = arg2;
                                    var5 = null;
                                    var4 = var5 == var3;
                                    var1 = null;
                                    if(var4) { _fun0072_ip = 3; continue _fun0072 }
case 159:
                                    var4 = var5 == var2;
                                    var1 = null;
                                    if(var4) { _fun0072_ip = 3; continue _fun0072 }
case 340:
                                    var1 = var3 - var2;
case 3:
                                    return var1;
                                }
                            };
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var4 = var4[var6];
                            var7 = var5.bind(var11)(var4);
                            var6 = var7.track;
                            var4 = _closure1_slot20;
                            var5 = var4.VOICE_CONNECTION_TTC_COLLECTED;
                            var4 = {};
                            var12 = var12.rtc_connection_id;
                            var4['rtc_connection_id'] = var12;
                            var12 = var8._connectStartTime;
                            var8 = var8._createdTime;
                            var8 = var12 - var8;
                            var4['time_1_creation_to_connect'] = var8;
                            var8 = _closure3_slot5;
                            var4['time_2_media_engine_connect'] = var8;
                            var8 = _closure3_slot4;
                            var12 = var8.transportInfo;
                            var13 = var3 == var12;
                            var8 = undefined;
                            if(var13) { _fun0071_ip = 227; continue _fun0071 }
case 341:
                            var8 = var12.createConnectionTime;
case 227:
                            var4['time_3_media_engine_create_native_connection'] = var8;
                            var8 = _closure3_slot4;
                            var12 = var8.transportInfo;
                            var13 = var3 == var12;
                            var8 = undefined;
                            if(var13) { _fun0071_ip = 342; continue _fun0071 }
case 343:
                            var8 = var12.connectTime;
case 342:
                            var4['time_4_media_engine_connect_to_socket'] = var8;
                            var8 = _closure3_slot0;
                            var8 = var8._connection;
                            var13 = var3 == var8;
                            var12 = undefined;
                            if(var13) { _fun0071_ip = 344; continue _fun0071 }
case 345:
                            var12 = var8.onConnectCallbackAt;
case 344:
                            var8 = _closure3_slot0;
                            var13 = var8._connection;
                            var14 = var3 == var13;
                            var8 = undefined;
                            if(var14) { _fun0071_ip = 346; continue _fun0071 }
case 347:
                            var13 = var13.transportInfo;
                            var14 = var3 == var13;
                            var8 = undefined;
                            if(var14) { _fun0071_ip = 346; continue _fun0071 }
case 348:
                            var8 = var13.connectCallbackScheduledMs;
case 346:
                            var8 = var10.bind(var11)(var12, var8);
                            var4['time_5_scheduling_connected_callback'] = var8;
                            var8 = _closure3_slot0;
                            var12 = var8._connection;
                            var13 = var3 == var12;
                            var8 = undefined;
                            if(var13) { _fun0071_ip = 349; continue _fun0071 }
case 350:
                            var8 = var12.onConnectCallbackAt;
case 349:
                            var8 = var10.bind(var11)(var9, var8);
                            var4['time_6_state_connected_to_end_measure'] = var8;
                            var8 = _closure3_slot0;
                            var9 = var8._connectCount;
                            var4['connect_count'] = var9;
                            var8 = var8._connection;
                            var12 = var3 == var8;
                            var9 = undefined;
                            if(var12) { _fun0071_ip = 351; continue _fun0071 }
case 352:
                            var9 = var8.onConnectCallbackAt;
case 351:
                            var8 = _closure3_slot0;
                            var12 = var8._connection;
                            var13 = var3 == var12;
                            var8 = undefined;
                            if(var13) { _fun0071_ip = 353; continue _fun0071 }
case 354:
                            var8 = var12.beginInitializeAt;
case 353:
                            var8 = var10.bind(var11)(var9, var8);
                            var4['rtc_connecting_native_connect'] = var8;
                            var8 = _closure3_slot0;
                            var8 = var8._connection;
                            var12 = var3 == var8;
                            var9 = undefined;
                            if(var12) { _fun0071_ip = 355; continue _fun0071 }
case 356:
                            var9 = var8.onVideoCodecsCallbackAt;
case 355:
                            var8 = _closure3_slot0;
                            var12 = var8._connection;
                            var13 = var3 == var12;
                            var8 = undefined;
                            if(var13) { _fun0071_ip = 357; continue _fun0071 }
case 358:
                            var8 = var12.onConnectCallbackAt;
case 357:
                            var8 = var10.bind(var11)(var9, var8);
                            var4['rtc_connecting_native_codecs'] = var8;
                            var8 = _closure3_slot0;
                            var8 = var8._connection;
                            var12 = var3 == var8;
                            var9 = undefined;
                            if(var12) { _fun0071_ip = 359; continue _fun0071 }
case 360:
                            var9 = var8.onEncryptionModesCallbackAt;
case 359:
                            var8 = _closure3_slot0;
                            var12 = var8._connection;
                            var13 = var3 == var12;
                            var8 = undefined;
                            if(var13) { _fun0071_ip = 361; continue _fun0071 }
case 362:
                            var8 = var12.onVideoCodecsCallbackAt;
case 361:
                            var8 = var10.bind(var11)(var9, var8);
                            var4['rtc_connecting_native_crypto_modes'] = var8;
                            var4 = var6.bind(var7)(var5, var4);
case 335:
                            var4 = _closure3_slot0;
                            var6 = var4._localMediaSinkWantsManager;
                            if(!(var3 != var6)) { _fun0071_ip = 363; continue _fun0071 }
case 364:
                            var5 = var6.setConnection;
                            var4 = _closure3_slot4;
                            var4 = var5.bind(var6)(var4);
case 363:
                            var4 = _closure3_slot0;
                            var4 = var4._goLiveQualityManager;
                            if(!(var3 != var4)) { _fun0071_ip = 365; continue _fun0071 }
case 366:
                            var3 = var4.update;
                            var3 = var3.bind(var4)();
case 365:
                            var2 = _closure3_slot0;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 19;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var1 = var3.now;
                            var1 = var1.bind(var3)();
                            var2['_connectCompletedTime'] = var1;
                            var1 = true;
                            var2['_connected'] = var1;
                            var1 = false;
                            var2['_connecting'] = var1;
                            var2['_encountered_socket_failure'] = var1;
case 316:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.SecureFramesUpdate;
                    var9 = function(arg1) {
                        var4 = _closure3_slot0;
                        var1 = arg1;
                        var4['_secureFramesState'] = var1;
                        var3 = var4.emit;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 38;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.RTCConnectionEvent;
                        var2 = var2.SecureFramesUpdate;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.Ping;
                    var12 = var3._handlePing;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.PingTimeout;
                    var12 = var3._handlePingTimeout;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.OutboundLossRate;
                    var12 = var3._handleOutboundLossRate;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var11 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var10 = var9.LocalVideoDisabled;
                    var12 = var3._handleLocalVideoDisabled;
                    var9 = var12.bind;
                    var9 = var9.bind(var12)(var3);
                    var9 = var11.bind(var2)(var10, var9);
                    var10 = var2.on;
                    var9 = var7[var4];
                    var9 = var5.bind(var1)(var9);
                    var9 = var9.BaseConnectionEvent;
                    var9 = var9.Stats;
                    var11 = _closure1_slot1;
                    var8 = 56;
                    var8 = var7[var8];
                    var11 = var11.bind(var1)(var8);
                    var8 = var11.create;
                    var8 = var8.bind(var11)();
                    var8 = var10.bind(var2)(var9, var8);
                    var10 = var2.on;
                    var8 = var7[var4];
                    var8 = var5.bind(var1)(var8);
                    var8 = var8.BaseConnectionEvent;
                    var9 = var8.RemoteStreamsReady;
                    var11 = var3._handleRemoteStreamsReady;
                    var8 = var11.bind;
                    var8 = var8.bind(var11)(var3);
                    var8 = var10.bind(var2)(var9, var8);
                    var10 = var2.on;
                    var8 = var7[var4];
                    var8 = var5.bind(var1)(var8);
                    var8 = var8.BaseConnectionEvent;
                    var9 = var8.UsersMerged;
                    var11 = var3.handleUsersMerged;
                    var8 = var11.bind;
                    var8 = var8.bind(var11)(var3);
                    var8 = var10.bind(var2)(var9, var8);
                    var9 = var2.on;
                    var8 = var7[var4];
                    var8 = var5.bind(var1)(var8);
                    var8 = var8.BaseConnectionEvent;
                    var8 = var8.NoiseCancellationError;
                    var6 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var2['_noiseCancellationError'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var6 = var9.bind(var2)(var8, var6);
                    var6 = var2.on;
                    var4 = var7[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.BaseConnectionEvent;
                    var5 = var4.MLSFailure;
                    var7 = var3._handleMLSFailure;
                    var4 = var7.bind;
                    var4 = var4.bind(var7)(var3);
                    var4 = var6.bind(var2)(var5, var4);
                    var5 = var2.setRemoteVideoSinkWants;
                    var4 = var3._remoteVideoSinkWants;
                    var4 = var5.bind(var2)(var4);
                    var3['_connection'] = var2;
                    var2 = var2.mediaEngineConnectionId;
                    var3['_mediaEngineConnectionId'] = var2;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[55] = var5;
            var5 = {};
            var7 = '_handleSpeaking';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4) {
                _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                    var4 = arg2;
                    var3 = arg3;
                    var2 = this;
                    var6 = var2._connection;
                    var1 = null;
                    var5 = var1 != var6;
                    if(!var5) { _fun0073_ip = 33; continue _fun0073 }
case 146:
                    var7 = var2.userId;
                    var5 = var7 !== var4;
case 33:
                    if(!var5) { _fun0073_ip = 175; continue _fun0073 }
case 158:
                    var5 = _closure1_slot30;
                    var7 = var5.NONE;
                    var5 = arg4;
                    if(!(var5 !== var7)) { _fun0073_ip = 174; continue _fun0073 }
case 28:
                    var5 = var6.createUser;
                    var5 = var5.bind(var6)(var4, var3);
case 174:
                    var2 = var2._localMediaSinkWantsManager;
                    if(!(var1 != var2)) { _fun0073_ip = 175; continue _fun0073 }
case 367:
                    var1 = var2.setAudioSSRC;
                    var1 = var1.bind(var2)(var4, var3);
case 175:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[56] = var5;
            var5 = {};
            var7 = 'handleFlags';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                var6 = this;
                var5 = var6.emit;
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.RTCConnectionEvent;
                var4 = var2.Flags;
                var3 = arg1;
                var2 = arg2;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var5['value'] = var7;
            var1[57] = var5;
            var5 = {};
            var7 = 'handlePlatform';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                var7 = this;
                var6 = var7.emit;
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.RTCConnectionEvent;
                var11 = var2.Platform;
                var8 = var7.channelId;
                var10 = arg1;
                var9 = arg2;
                var12 = var7;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var5['value'] = var7;
            var1[58] = var5;
            var5 = {};
            var7 = 'handleUsersMerged';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var7 = arg1;
                var6 = this;
                var5 = var6.emit;
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.RTCConnectionEvent;
                var4 = var2.UsersMerged;
                var3 = var7.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var3 = var3.bind(var7)(var2);
                var2 = var6.context;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var5['value'] = var7;
            var1[59] = var5;
            var5 = {};
            var7 = 'getOrCreateVideoQuality';
            var5['key'] = var7;
            var7 = function value() {
                _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var3 = var1._connection;
                    var5 = null;
                    if(!(var5 != var3)) { _fun0074_ip = 368; continue _fun0074 }
case 146:
                    var3 = var1._videoQuality;
                    if(!(var5 == var3)) { _fun0074_ip = 368; continue _fun0074 }
case 369:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var8 = 57;
                    var9 = var4[var8];
                    var7 = undefined;
                    var9 = var6.bind(var7)(var9);
                    var11 = var9.VideoQuality;
                    var17 = var1._connection;
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {constructor: {value: var11}});
                    var18 = var10;
                    var9 = new var18[var11](var17, var16);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var1['_videoQuality'] = var9;
                    var11 = var1._videoQuality;
                    var10 = var11.updateCallUserIdsCount;
                    var9 = var1._userIds;
                    var9 = var9.size;
                    var9 = var10.bind(var11)(var9);
                    var10 = var1._videoQuality;
                    var9 = var10.start;
                    var9 = var9.bind(var10)();
                    var13 = 58;
                    var4 = var4[var13];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.VideoHealthManager;
                    var6 = var4.defaultConfig;
                    var4 = var6.featureEnabled;
                    var12 = var6.windowLength;
                    var11 = var6.allowedPoorFpsRatio;
                    var10 = var6.fpsThreshold;
                    var9 = var6.backoffTimeSec;
                    if(!var4) { _fun0074_ip = 368; continue _fun0074 }
case 370:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var13];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.VideoHealthManager;
                    var6 = var4.prototype;
                    var6 = Object.create(var6, {constructor: {value: var4}});
                    var18 = var6;
                    var17 = var12;
                    var16 = var11;
                    var15 = var10;
                    var14 = var9;
                    var4 = new var18[var4](var17, var16, var15, var14, var13);
                    var4 = var4 instanceof Object ? var4 : var6;
                    var1['_videoHealthManager'] = var4;
                    var4 = var1._localMediaSinkWantsManager;
                    if(!(var5 != var4)) { _fun0074_ip = 371; continue _fun0074 }
case 113:
                    var5 = var1._localMediaSinkWantsManager;
                    var4 = var1._videoHealthManager;
                    var5['videoHealthManager'] = var4;
case 371:
                    var5 = var1._videoQuality;
                    var4 = var5.on;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var8];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.VideoQualityEvent;
                    var3 = var3.FpsUpdate;
                    var2 = function(arg1, arg2, arg3) {
                        _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                            var5 = arg1;
                            var1 = _closure3_slot0;
                            var6 = var1._localMediaSinkWantsManager;
                            var1 = null;
                            var3 = var1 != var6;
                            if(!var3) { _fun0075_ip = 158; continue _fun0075 }
case 161:
                            var4 = var6.shouldReceiveFromUser;
                            var3 = var4.bind(var6)(var5);
case 158:
                            if(!var3) { _fun0075_ip = 37; continue _fun0075 }
case 372:
                            var2 = _closure3_slot0;
                            var4 = var2._videoHealthManager;
                            if(!(var1 != var4)) { _fun0075_ip = 37; continue _fun0075 }
case 43:
                            var3 = var4.updateFps;
                            var2 = arg2;
                            var1 = arg3;
                            var1 = var3.bind(var4)(var5, var2, var1);
case 37:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var3, var2);
case 368:
                    var1 = var1._videoQuality;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[60] = var5;
            var5 = {};
            var7 = '_handleVideoStreamId';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                    var1 = arg1;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var5 = var1.userId;
                    var4 = var1.streamId;
                    var8 = var1.videoSsrc;
                    var9 = var1.videoStreamParameters;
                    var12 = var2.emit;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 38;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.RTCConnectionEvent;
                    var18 = var3.Video;
                    var17 = var2.guildId;
                    var16 = var2.channelId;
                    var13 = var2.streamServerId;
                    var19 = var2;
                    var15 = var5;
                    var14 = var4;
                    var3 = var19[var12](var18, var17, var16, var15, var14, var13, var12);
                    var3 = null;
                    var7 = var3 != var4;
                    if(!var7) { _fun0076_ip = 81; continue _fun0076 }
case 373:
                    var10 = var2.getOrCreateVideoQuality;
                    var10 = var10.bind(var2)();
                    var7 = var3 == var10;
case 81:
                    if(!var7) { _fun0076_ip = 374; continue _fun0076 }
case 375:
                    var11 = var2.logger;
                    var10 = var11.error;
                    var7 = '_handleVideoStreamId: Unable to create videoQuality.';
                    var7 = var10.bind(var11)(var7);
case 374:
                    var7 = var2._videoQuality;
                    var7 = var3 != var7;
                    if(!var7) { _fun0076_ip = 376; continue _fun0076 }
case 98:
                    var10 = var2.userId;
                    var7 = var10 === var5;
case 376:
                    if(!var7) { _fun0076_ip = 20; continue _fun0076 }
case 377:
                    var7 = var9.forEach;
                    var6 = function(arg1) {
                        _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                            var4 = arg1;
                            var5 = var4.ssrc;
                            var1 = null;
                            var6 = var1 != var5;
                            var2 = 0;
                            var3 = 0;
                            if(!var6) { _fun0077_ip = 161; continue _fun0077 }
case 55:
                            var3 = var5;
case 161:
                            var2 = var3 > var2;
                            if(!var2) { _fun0077_ip = 168; continue _fun0077 }
case 145:
                            var5 = var4.active;
                            var4 = true;
                            var2 = var4 === var5;
case 168:
                            if(!var2) { _fun0077_ip = 378; continue _fun0077 }
case 58:
                            var2 = _closure3_slot0;
                            var2 = var2._videoQuality;
                            if(!(var1 != var2)) { _fun0077_ip = 378; continue _fun0077 }
case 148:
                            var1 = var2.setOutboundSsrc;
                            var1 = var1.bind(var2)(var3);
case 378:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var7.bind(var9)(var6);
case 20:
                    var6 = var2.userId;
                    if(!(var6 !== var5)) { _fun0076_ip = 379; continue _fun0076 }
case 380:
                    var6 = 0;
                    var6 = var6 === var8;
                    if(!var6) { _fun0076_ip = 381; continue _fun0076 }
case 185:
                    var6 = var3 === var4;
case 381:
                    if(!var6) { _fun0076_ip = 382; continue _fun0076 }
case 383:
                    if(!var6) { _fun0076_ip = 379; continue _fun0076 }
case 384:
                    var9 = var2._videoQuality;
                    var7 = var3 == var9;
                    var6 = undefined;
                    if(var7) { _fun0076_ip = 385; continue _fun0076 }
case 93:
                    var7 = var9.getInboundParticipants;
                    var9 = var7.bind(var9)();
                    var7 = var9.includes;
                    var6 = var7.bind(var9)(var5);
case 385:
                    if(!var6) { _fun0076_ip = 379; continue _fun0076 }
case 382:
                    var7 = var2._videoQuality;
                    if(!(var3 != var7)) { _fun0076_ip = 386; continue _fun0076 }
case 387:
                    var6 = var7.setInboundUser;
                    var6 = var6.bind(var7)(var5, var8);
case 386:
                    var7 = var2._videoHealthManager;
                    if(!(var3 != var7)) { _fun0076_ip = 379; continue _fun0076 }
case 388:
                    var6 = var7.createUser;
                    var6 = var6.bind(var7)(var5);
case 379:
                    var6 = var2._connection;
                    if(!(var3 != var6)) { _fun0076_ip = 389; continue _fun0076 }
case 390:
                    var6 = var2.userId;
                    if(!(var6 !== var5)) { _fun0076_ip = 389; continue _fun0076 }
case 391:
                    var6 = var2._localMediaSinkWantsManager;
                    if(!(var3 == var6)) { _fun0076_ip = 392; continue _fun0076 }
case 393:
                    var6 = var2._goLiveQualityManager;
                    if(!(var3 != var6)) { _fun0076_ip = 389; continue _fun0076 }
case 394:
                    var7 = var2._goLiveQualityManager;
                    var6 = var7.getUserID;
                    var6 = var6.bind(var7)();
                    if(!(var6 === var5)) { _fun0076_ip = 389; continue _fun0076 }
case 395:
                    var6 = var2._goLiveQualityManager;
                    if(!(var3 != var6)) { _fun0076_ip = 389; continue _fun0076 }
case 396:
                    var3 = var6.setStreamId;
                    var3 = var3.bind(var6)(var4);
                    _fun0076_ip = 389; continue _fun0076;
case 392:
                    var3 = var2._localMediaSinkWantsManager;
                    var2 = var3.setStreamId;
                    var2 = var2.bind(var3)(var5, var4);
case 389:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[61] = var5;
            var5 = {};
            var7 = '_handleLocalVideoDisabled';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                    var5 = arg1;
                    var1 = this;
                    var2 = var1.userId;
                    if(!(var2 !== var5)) { _fun0078_ip = 397; continue _fun0078 }
case 160:
                    var2 = var1.getOrCreateVideoQuality;
                    var4 = var2.bind(var1)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0078_ip = 157; continue _fun0078 }
case 52:
                    var3 = var4.setUserVideoDisabled;
                    var2 = arg2;
                    var2 = var3.bind(var4)(var5, var2);
case 397:
                    var2 = undefined;
                    return var2;
case 157:
                    var3 = var1.logger;
                    var2 = var3.error;
                    var1 = '_handleLocalVideoDisabled: Unable to create videoQuality.';
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[62] = var5;
            var5 = {};
            var7 = '_handleRemoteStreamsReady';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var8 = this;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 19;
                var3 = var5[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.now;
                var4 = var3.bind(var4)();
                var3 = var8._connectStartTime;
                var7 = var4 - var3;
                var4 = _closure1_slot1;
                var3 = 21;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot20;
                var3 = var2.VOICE_CONNECTION_REMOTE_STREAMS_CREATED;
                var2 = {};
                var6 = var8._getAnalyticsProperties;
                var9 = var6.bind(var8)();
                var10 = var2;
                var6 = copyDataProperties(var10, var9);
                var8 = arg1;
                var6 = 'number_of_users';
                var2[var6] = var8;
                var6 = 'duration_ms';
                var2[var6] = var7;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var5['value'] = var7;
            var1[63] = var5;
            var5 = {};
            var7 = '_handleVideo';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4, arg5) {
                _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                    var7 = arg2;
                    var8 = arg3;
                    var10 = arg4;
                    var3 = arg5;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var7;
                    var _closure3_slot2 = var10;
                    var5 = var4._connection;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0079_ip = 398; continue _fun0079 }
case 168:
                    var5 = var4.userId;
                    if(!(var5 !== var7)) { _fun0079_ip = 398; continue _fun0079 }
case 28:
                    var5 = var4._localMediaSinkWantsManager;
                    if(!(var2 == var5)) { _fun0079_ip = 399; continue _fun0079 }
case 49:
                    var9 = new Array(0);
                    var5 = _closure1_slot36;
                    var13 = undefined;
                    var12 = var5.bind(var13)(var3);
                    var6 = var12.bind(var13)();
                    var5 = var6.done;
                    var11 = var6;
                    var6 = undefined;
                    if(var5) { _fun0079_ip = 400; continue _fun0079 }
case 172:
                    var5 = var11.value;
                    var15 = var5.ssrc;
                    var14 = var6;
                    if(!(var2 != var15)) { _fun0079_ip = 401; continue _fun0079 }
case 106:
                    var15 = var5.quality;
                    var14 = var6;
                    if(!(var2 != var15)) { _fun0079_ip = 401; continue _fun0079 }
case 120:
                    var16 = var9.push;
                    var15 = {};
                    var17 = var5.ssrc;
                    var15['ssrc'] = var17;
                    var17 = var5.quality;
                    var15['quality'] = var17;
                    var5 = var5.active;
                    var17 = var2 == var5;
                    if(var17) { _fun0079_ip = 377; continue _fun0079 }
case 376:
                    var17 = var5;
case 377:
                    var15['active'] = var17;
                    var15 = var16.bind(var9)(var15);
                    var14 = var5;
case 401:
                    var15 = var12.bind(var13)();
                    var5 = var15.done;
                    var6 = var14;
                    var11 = var15;
                    if(!var5) { _fun0079_ip = 172; continue _fun0079 }
case 400:
                    var6 = var4._goLiveQualityManager;
                    if(!(var2 != var6)) { _fun0079_ip = 21; continue _fun0079 }
case 279:
                    var5 = var6.setUserID;
                    var5 = var5.bind(var6)(var7);
case 21:
                    var6 = var4._goLiveQualityManager;
                    if(!(var2 != var6)) { _fun0079_ip = 402; continue _fun0079 }
case 23:
                    var5 = var6.updateAudioAndVideoStreamInfo;
                    var5 = var5.bind(var6)(var8, var9);
                    _fun0079_ip = 402; continue _fun0079;
case 399:
                    var6 = var4._localMediaSinkWantsManager;
                    var5 = var6.setAudioSSRC;
                    var5 = var5.bind(var6)(var7, var8);
                    var6 = var3.map;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = _closure1_slot29;
                        var3 = var3.VIDEO;
                        var1['type'] = var3;
                        var3 = var2.rid;
                        var1['rid'] = var3;
                        var3 = var2.ssrc;
                        var1['ssrc'] = var3;
                        var3 = var2.rtxSsrc;
                        var1['rtxSsrc'] = var3;
                        var2 = var2.quality;
                        var1['quality'] = var2;
                        var3 = _closure3_slot2;
                        var2 = 0;
                        var2 = var3 > var2;
                        var1['active'] = var2;
                        return var1;
                    };
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.length;
                    var9 = 0;
                    if(!(var9 === var5)) { _fun0079_ip = 403; continue _fun0079 }
case 265:
                    var8 = var6.push;
                    var5 = {};
                    var11 = _closure1_slot29;
                    var11 = var11.VIDEO;
                    var5['type'] = var11;
                    var11 = '100';
                    var5['rid'] = var11;
                    var5['ssrc'] = var10;
                    var11 = 1;
                    var11 = var10 + var11;
                    var5['rtxSsrc'] = var11;
                    var11 = 100;
                    var5['quality'] = var11;
                    var9 = var10 > var9;
                    var5['active'] = var9;
                    var5 = var8.bind(var6)(var5);
case 403:
                    var5 = var4._localMediaSinkWantsManager;
                    var4 = var5.setVideoSSRCs;
                    var4 = var4.bind(var5)(var7, var6);
case 402:
                    if(!(var2 != var3)) { _fun0079_ip = 398; continue _fun0079 }
case 126:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.quality;
                            var2 = 100;
                            if(!(var2 === var3)) { _fun0080_ip = 172; continue _fun0080 }
case 164:
                            var9 = _closure3_slot0;
                            var8 = var9.emit;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var3 = 38;
                            var4 = var4[var3];
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var3 = var3.RTCConnectionEvent;
                            var16 = var3.VideoSourceQualityChanged;
                            var15 = var9.guildId;
                            var14 = var9.channelId;
                            var13 = _closure3_slot1;
                            var12 = var1.maxResolution;
                            var11 = var1.maxFrameRate;
                            var10 = var9.context;
                            var17 = var9;
                            var1 = var17[var8](var16, var15, var14, var13, var12, var11, var10, var9);
case 172:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 398:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[64] = var5;
            var5 = {};
            var7 = '_handleControlPing';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                    var3 = this;
                    var4 = _closure1_slot15;
                    var2 = var4.supports;
                    var1 = _closure1_slot25;
                    var1 = var1.NATIVE_PING;
                    var1 = var2.bind(var4)(var1);
                    if(var1) { _fun0081_ip = 397; continue _fun0081 }
case 150:
                    var2 = var3._handlePing;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 397:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[65] = var5;
            var5 = {};
            var7 = '_handlePing';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                    var3 = arg1;
                    var6 = this;
                    var1 = undefined;
                    if(!(var1 !== var3)) { _fun0082_ip = 401; continue _fun0082 }
case 160:
                    var5 = var6._pings;
                    var4 = var5.push;
                    var2 = {};
                    var7 = global;
                    var8 = var7.Date;
                    var7 = var8.now;
                    var7 = var7.bind(var8)();
                    var2['time'] = var7;
                    var2['value'] = var3;
                    var2 = var4.bind(var5)(var2);
                    var2 = var6._pings;
                    var2 = var2.length;
                    var4 = 200;
                    if(!(var2 >= var4)) { _fun0082_ip = 404; continue _fun0082 }
case 378:
                    var5 = var6._pings;
                    var2 = var5.shift;
                    var2 = var2.bind(var5)();
                    var2 = var6._pings;
                    var2 = var2.length;
                    if(var2 >= var4) { _fun0082_ip = 378; continue _fun0082 }
case 404:
                    var2 = 500;
                    if(!(var3 > var2)) { _fun0082_ip = 375; continue _fun0082 }
case 86:
                    var2 = var6._pingBadCount;
                    var2 = var2 + 1;
                    var6['_pingBadCount'] = var2;
case 375:
                    var5 = var6.emit;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 38;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.RTCConnectionEvent;
                    var4 = var2.Ping;
                    var3 = var6._pings;
                    var2 = var6.quality;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 401:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[66] = var5;
            var5 = {};
            var7 = '_handlePingTimeout';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
                    var3 = this;
                    var4 = var3._pingTimeouts;
                    var2 = var4.push;
                    var1 = arg1;
                    var1 = var2.bind(var4)(var1);
                    var1 = var3._pingTimeouts;
                    var6 = var1.length;
                    var2 = 3;
                    var1 = var6 >= var2;
                    if(!var1) { _fun0083_ip = 153; continue _fun0083 }
case 213:
                    var5 = var3._pingTimeouts;
                    var7 = 1;
                    var4 = var6 - var7;
                    var5 = var5[var4];
                    var8 = var3._pingTimeouts;
                    var4 = 2;
                    var4 = var6 - var4;
                    var4 = var8[var4];
                    var4 = var4 + var7;
                    var1 = var5 === var4;
case 153:
                    if(!var1) { _fun0083_ip = 81; continue _fun0083 }
case 177:
                    var5 = var3._pingTimeouts;
                    var4 = 2;
                    var4 = var6 - var4;
                    var4 = var5[var4];
                    var5 = var3._pingTimeouts;
                    var2 = var6 - var2;
                    var5 = var5[var2];
                    var2 = 1;
                    var2 = var5 + var2;
                    var1 = var4 === var2;
case 81:
                    if(!var1) { _fun0083_ip = 405; continue _fun0083 }
case 375:
                    var2 = var3._handlePing;
                    var1 = arg2;
                    var1 = var2.bind(var3)(var1);
case 405:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[67] = var5;
            var5 = {};
            var7 = '_handleOutboundLossRate';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var5 = arg1;
                var4 = this;
                var4['_outboundLossRate'] = var5;
                var3 = var4.emit;
                var6 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var2 = var2.RTCConnectionEvent;
                var2 = var2.OutboundLossRate;
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            };
            var5['value'] = var7;
            var1[68] = var5;
            var5 = {};
            var7 = '_getAnalyticsProperties';
            var5['key'] = var7;
            var7 = function value() {
                _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                    var2 = this;
                    var4 = _closure1_slot14;
                    var3 = var4.getChannel;
                    var1 = var2.channelId;
                    var1 = var3.bind(var4)(var1);
                    var3 = null;
                    var4 = var3 == var1;
                    var3 = undefined;
                    if(var4) { _fun0084_ip = 69; continue _fun0084 }
case 158:
                    var3 = var1.type;
case 69:
                    var1 = {};
                    var4 = var2.guildId;
                    var1['guild_id'] = var4;
                    var4 = var2.channelId;
                    var1['channel_id'] = var4;
                    var1['channel_type'] = var3;
                    var3 = var2.getRTCConnectionId;
                    var3 = var3.bind(var2)();
                    var1['rtc_connection_id'] = var3;
                    var3 = var2.context;
                    var1['context'] = var3;
                    var3 = var2.voiceVersion;
                    var1['voice_backend_version'] = var3;
                    var2 = var2.rtcWorkerVersion;
                    var1['rtc_worker_backend_version'] = var2;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[69] = var5;
            var5 = {};
            var7 = '_handleClientConnect';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
                    var5 = arg1;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var3 = var5.forEach;
                    var1 = function(arg1) {
                        _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
                            var4 = arg1;
                            var1 = _closure3_slot0;
                            var3 = var1._userIds;
                            var2 = var3.add;
                            var2 = var2.bind(var3)(var4);
                            var3 = var1._connection;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0086_ip = 157; continue _fun0086 }
case 62:
                            var2 = var3.createUser;
                            var1 = 0;
                            var1 = var2.bind(var3)(var4, var1);
case 157:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var5)(var1);
                    var4 = var2.emit;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 38;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.RTCConnectionEvent;
                    var3 = var3.ClientConnect;
                    var3 = var4.bind(var2)(var3, var5);
                    var6 = var2._videoQuality;
                    var3 = null;
                    if(!(var3 != var6)) { _fun0085_ip = 13; continue _fun0085 }
case 177:
                    var5 = var6.updateCallUserIdsCount;
                    var4 = var2._userIds;
                    var4 = var4.size;
                    var4 = var5.bind(var6)(var4);
case 13:
                    var6 = var2._goLiveQualityManager;
                    if(!(var3 != var6)) { _fun0085_ip = 301; continue _fun0085 }
case 406:
                    var5 = var6.updateCallUserIds;
                    var4 = var2._userIds;
                    var4 = var5.bind(var6)(var4);
case 301:
                    var4 = var2._localMediaSinkWantsManager;
                    if(!(var3 != var4)) { _fun0085_ip = 71; continue _fun0085 }
case 405:
                    var3 = var4.updateCallUserIds;
                    var2 = var2._userIds;
                    var2 = var3.bind(var4)(var2);
case 71:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[70] = var5;
            var5 = {};
            var7 = '_handleClientDisconnect';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
                    var7 = arg1;
                    var3 = this;
                    var2 = var3._videoQuality;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0087_ip = 407; continue _fun0087 }
case 105:
                    var5 = var3.context;
                    var1 = _closure1_slot26;
                    var1 = var1.DEFAULT;
                    if(!(var5 === var1)) { _fun0087_ip = 407; continue _fun0087 }
case 2:
                    var1 = var2.getInboundStats;
                    var9 = var1.bind(var2)(var7);
                    var1 = var4 == var9;
                    var13 = undefined;
                    var6 = undefined;
                    if(var1) { _fun0087_ip = 37; continue _fun0087 }
case 174:
                    var6 = var9.num_frames;
case 37:
                    var8 = var4 != var6;
                    var5 = 0;
                    var1 = 0;
                    if(!var8) { _fun0087_ip = 177; continue _fun0087 }
case 153:
                    var1 = var6;
case 177:
                    if(!(var4 != var9)) { _fun0087_ip = 407; continue _fun0087 }
case 178:
                    if(!(var1 > var5)) { _fun0087_ip = 407; continue _fun0087 }
case 408:
                    var12 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var1 = 21;
                    var1 = var14[var1];
                    var8 = var12.bind(var13)(var1);
                    var6 = var8.track;
                    var1 = _closure1_slot20;
                    var5 = var1.VIDEO_STREAM_ENDED;
                    var1 = {};
                    var10 = var3._getAnalyticsProperties;
                    var15 = var10.bind(var3)();
                    var16 = var1;
                    var10 = copyDataProperties(var16, var15);
                    var10 = 45;
                    var10 = var14[var10];
                    var12 = var12.bind(var13)(var10);
                    var10 = var12.getAppHardwareAccelerationEnabled;
                    var12 = var10.bind(var12)();
                    var10 = 'app_hardware_acceleration_enabled';
                    var1[var10] = var12;
                    var10 = var3.getMediaSessionId;
                    var12 = var10.bind(var3)();
                    var10 = 'media_session_id';
                    var1[var10] = var12;
                    var10 = 'sender_user_id';
                    var1[var10] = var7;
                    var12 = 'User disconnected';
                    var10 = 'reason';
                    var1[var10] = var12;
                    var10 = 'receiver';
                    var12 = 'participant_type';
                    var1[var12] = var10;
                    var14 = _closure1_slot18;
                    var13 = var14.getRegion;
                    var12 = var3.hostname;
                    var13 = var13.bind(var14)(var12);
                    var12 = 'guild_region';
                    var1[var12] = var13;
                    var13 = var3.hostname;
                    var12 = 'hostname';
                    var1[var12] = var13;
                    var12 = _closure1_slot15;
                    var11 = var12.getHardwareEncoding;
                    var12 = var11.bind(var12)();
                    var11 = 'hardware_enabled';
                    var1[var11] = var12;
                    var16 = var1;
                    var15 = var9;
                    var9 = copyDataProperties(var16, var15);
                    var9 = var2.getNetworkStats;
                    var15 = var9.bind(var2)();
                    var16 = var1;
                    var9 = copyDataProperties(var16, var15);
                    var9 = var2.getCodecUsageStats;
                    var15 = var9.bind(var2)(var10, var7);
                    var16 = var1;
                    var9 = copyDataProperties(var16, var15);
                    var1 = var6.bind(var8)(var5, var1);
                    var1 = var2.destroyUser;
                    var1 = var1.bind(var2)(var7);
                    var2 = var3._videoHealthManager;
                    if(!(var4 != var2)) { _fun0087_ip = 407; continue _fun0087 }
case 409:
                    var1 = var2.deleteUser;
                    var1 = var1.bind(var2)(var7);
case 407:
                    var2 = var3._connection;
                    if(!(var4 != var2)) { _fun0087_ip = 410; continue _fun0087 }
case 411:
                    var1 = var2.destroyUser;
                    var1 = var1.bind(var2)(var7);
case 410:
                    var2 = var3._localMediaSinkWantsManager;
                    if(!(var4 != var2)) { _fun0087_ip = 412; continue _fun0087 }
case 203:
                    var1 = var2.destroyUser;
                    var1 = var1.bind(var2)(var7);
case 412:
                    var2 = var3._userIds;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var7);
                    var6 = var3.emit;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 38;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.RTCConnectionEvent;
                    var5 = var5.ClientDisconnect;
                    var5 = var6.bind(var3)(var5, var7);
                    var7 = var3._goLiveQualityManager;
                    if(!(var4 != var7)) { _fun0087_ip = 413; continue _fun0087 }
case 414:
                    var6 = var7.updateCallUserIds;
                    var5 = var3._userIds;
                    var5 = var6.bind(var7)(var5);
case 413:
                    var7 = var3._localMediaSinkWantsManager;
                    if(!(var4 != var7)) { _fun0087_ip = 331; continue _fun0087 }
case 415:
                    var6 = var7.updateCallUserIds;
                    var5 = var3._userIds;
                    var5 = var6.bind(var7)(var5);
case 331:
                    var6 = var3._videoQuality;
                    if(!(var4 != var6)) { _fun0087_ip = 416; continue _fun0087 }
case 417:
                    var5 = var6.updateCallUserIdsCount;
                    var4 = var3._userIds;
                    var4 = var4.size;
                    var4 = var5.bind(var6)(var4);
case 416:
                    var4 = var3._userIds;
                    var5 = var4.size;
                    var4 = 1;
                    if(!(var4 === var5)) { _fun0087_ip = 418; continue _fun0087 }
case 54:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 19;
                    var2 = var5[var2];
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var3['_secureFramesLastBecameAloneTime'] = var2;
case 418:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[71] = var5;
            var5 = {};
            var7 = '_handleCodecs';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
                    var5 = arg1;
                    var4 = arg2;
                    var1 = this;
                    var3 = var1._connection;
                    var6 = null;
                    if(!(var6 != var3)) { _fun0088_ip = 52; continue _fun0088 }
case 105:
                    var2 = var1.protocol;
                    if(!(var6 == var2)) { _fun0088_ip = 61; continue _fun0088 }
case 52:
                    var9 = var1.logger;
                    var8 = var9.warn;
                    var7 = var1.protocol;
                    var2 = 'Cannot set codecs on connection with protocol:';
                    var2 = var8.bind(var9)(var2, var7);
                    _fun0088_ip = 81; continue _fun0088;
case 61:
                    var2 = var3.setCodecs;
                    if(!(var6 != var5)) { _fun0088_ip = 156; continue _fun0088 }
case 38:
                    var7 = '';
                    if(!(var7 === var5)) { _fun0088_ip = 89; continue _fun0088 }
case 156:
                    var7 = _closure1_slot28;
                    var5 = var7.OPUS;
case 89:
                    if(!(var6 != var4)) { _fun0088_ip = 419; continue _fun0088 }
case 258:
                    var6 = '';
                    if(!(var6 === var4)) { _fun0088_ip = 86; continue _fun0088 }
case 419:
                    var6 = _closure1_slot28;
                    var4 = var6.H264;
case 86:
                    var1 = var1.context;
                    var1 = var2.bind(var3)(var5, var4, var1);
case 81:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[72] = var5;
            var5 = {};
            var7 = '_handleSDP';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
                    var1 = this;
                    var3 = var1._connection;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0089_ip = 161; continue _fun0089 }
case 160:
                    var2 = var1.protocol;
                    if(!(var4 == var2)) { _fun0089_ip = 28; continue _fun0089 }
case 161:
                    var5 = var1.logger;
                    var4 = var5.warn;
                    var2 = var1.protocol;
                    var1 = 'Cannot set SDP on connection with protocol:';
                    var1 = var4.bind(var5)(var1, var2);
                    _fun0089_ip = 38; continue _fun0089;
case 28:
                    var2 = var3.setSDP;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[73] = var5;
            var5 = {};
            var7 = '_handleMediaSessionId';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var8 = arg1;
                var5 = this;
                var5['_mediaSessionId'] = var8;
                var3 = var5.logger;
                var2 = var3.info;
                var1 = var5.getRTCConnectionId;
                var7 = var1.bind(var5)();
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var4 = 'Setting media-session-id: ';
                var1 = ' for rtc-connection-id: ';
                var1 = var6.bind(var4)(var8, var1, var7);
                var1 = var2.bind(var3)(var1);
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 59;
                var6 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var6);
                var6 = var7.getRawThermalState;
                var10 = var6.bind(var7)();
                var6 = 21;
                var6 = var4[var6];
                var8 = var3.bind(var1)(var6);
                var7 = var8.track;
                var2 = _closure1_slot20;
                var6 = var2.MEDIA_SESSION_JOINED;
                var2 = {};
                var9 = var5._getAnalyticsProperties;
                var13 = var9.bind(var5)();
                var14 = var2;
                var9 = copyDataProperties(var14, var13);
                var9 = var5.getMediaSessionId;
                var11 = var9.bind(var5)();
                var9 = 'media_session_id';
                var2[var9] = var11;
                var11 = var5.parentMediaSessionId;
                var9 = 'parent_media_session_id';
                var2[var9] = var11;
                var9 = 'raw_thermal_state';
                var2[var9] = var10;
                var2 = var7.bind(var8)(var6, var2);
                var2 = 35;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'MEDIA_SESSION_JOINED';
                var2['type'] = var6;
                var6 = var5.getMediaSessionId;
                var6 = var6.bind(var5)();
                var2['mediaSessionId'] = var6;
                var5 = var5.context;
                var2['context'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['value'] = var7;
            var1[74] = var5;
            var5 = {};
            var7 = '_handleMediaSinkWants';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
                    var4 = arg1;
                    var7 = this;
                    var3 = var7._connection;
                    var5 = var7.logger;
                    var2 = var5.info;
                    var1 = global;
                    var8 = var1.JSON;
                    var6 = var8.stringify;
                    var8 = var6.bind(var8)(var4);
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'Remote media sink wants: ';
                    var1 = var6.bind(var1)(var8);
                    var1 = var2.bind(var5)(var1);
                    var7['_remoteVideoSinkWants'] = var4;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 35;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var2);
                    var5 = var6.dispatch;
                    var2 = {};
                    var8 = 'RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS';
                    var2['type'] = var8;
                    var8 = var7.context;
                    var2['context'] = var8;
                    var2['wants'] = var4;
                    var8 = var7.channelId;
                    var2['channelId'] = var8;
                    var8 = var7.guildId;
                    var2['guildId'] = var8;
                    var7 = var7.userId;
                    var2['userId'] = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0090_ip = 16; continue _fun0090 }
case 98:
                    var2 = var3.setRemoteVideoSinkWants;
                    var2 = var2.bind(var3)(var4);
case 16:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[75] = var5;
            var5 = {};
            var7 = '_handleCodeVersion';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                var2 = this;
                var1 = arg1;
                var2['voiceVersion'] = var1;
                var1 = arg2;
                var2['rtcWorkerVersion'] = var1;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[76] = var5;
            var5 = {};
            var7 = '_handleKeyframeInterval';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
                    var1 = this;
                    var3 = var1._connection;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0091_ip = 161; continue _fun0091 }
case 160:
                    var2 = var1.protocol;
                    if(!(var4 == var2)) { _fun0091_ip = 28; continue _fun0091 }
case 161:
                    var5 = var1.logger;
                    var4 = var5.warn;
                    var2 = var1.protocol;
                    var1 = 'Cannot set keyframe interval on connection with protocol:';
                    var1 = var4.bind(var5)(var1, var2);
                    _fun0091_ip = 38; continue _fun0091;
case 28:
                    var2 = var3.setKeyframeInterval;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[77] = var5;
            var5 = {};
            var7 = '_handleBandwidthEstimationExperiment';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
                    var5 = arg1;
                    var3 = this;
                    var3['_bandwidthEstimationExperiment'] = var5;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 60;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.getMediaEngineExperiments;
                    var4 = var2.bind(var4)(var5);
                    var2 = null;
                    var5 = var2 !== var4;
                    if(!var5) { _fun0092_ip = 174; continue _fun0092 }
case 152:
                    var7 = var4.length;
                    var6 = 0;
                    var5 = var6 !== var7;
case 174:
                    if(!var5) { _fun0092_ip = 171; continue _fun0092 }
case 298:
                    var3 = var3._connection;
                    if(!(var2 != var3)) { _fun0092_ip = 171; continue _fun0092 }
case 317:
                    var2 = var3.setBandwidthEstimationExperiments;
                    var2 = var2.bind(var3)(var4);
case 171:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[78] = var5;
            var5 = {};
            var7 = '_trackSecureFrameTransition';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
                    var3 = arg1;
                    var2 = this;
                    var4 = var2._secureFramesTransitionStates;
                    var1 = var4.get;
                    var7 = var1.bind(var4)(var3);
                    var1 = null;
                    if(!(var1 != var7)) { _fun0093_ip = 420; continue _fun0093 }
case 52:
                    var1 = var2._secureFramesTransitionStates;
                    var13 = var1.size;
                    var4 = var2._secureFramesTransitionStates;
                    var1 = var4.delete;
                    var1 = var1.bind(var4)(var3);
                    var10 = function differenceOrUndefined(arg1, arg2) {
                        _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
                            var3 = arg1;
                            var2 = arg2;
                            var4 = null;
                            var6 = var4 != var3;
                            var1 = undefined;
                            if(!var6) { _fun0094_ip = 3; continue _fun0094 }
case 159:
                            var4 = var4 != var2;
                            var1 = undefined;
                            if(!var4) { _fun0094_ip = 3; continue _fun0094 }
case 340:
                            var1 = var3 - var2;
case 3:
                            return var1;
                        }
                    };
                    var4 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var1 = 21;
                    var1 = var12[var1];
                    var9 = undefined;
                    var6 = var4.bind(var9)(var1);
                    var5 = var6.track;
                    var1 = _closure1_slot20;
                    var4 = var1.SECURE_FRAMES_TRANSITION;
                    var1 = {};
                    var11 = var2._getAnalyticsProperties;
                    var15 = var11.bind(var2)();
                    var16 = var1;
                    var11 = copyDataProperties(var16, var15);
                    var11 = var2.getMediaSessionId;
                    var14 = var11.bind(var2)();
                    var11 = 'media_session_id';
                    var1[var11] = var14;
                    var14 = var2.parentMediaSessionId;
                    var11 = 'parent_media_session_id';
                    var1[var11] = var14;
                    var14 = var2.userId;
                    var11 = 'sender_user_id';
                    var1[var11] = var14;
                    var11 = 'transition_id';
                    var1[var11] = var3;
                    var14 = var7.protocolVersion;
                    var11 = 'protocol_version';
                    var1[var11] = var14;
                    var14 = var7.initReceivedTime;
                    var11 = var2._connectStartTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'start_to_init_duration';
                    var1[var11] = var14;
                    var14 = var7.initFinishedTime;
                    var11 = var7.initReceivedTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'init_duration';
                    var1[var11] = var14;
                    var14 = var7.firstProposalsFinishedTime;
                    var11 = var7.firstProposalsReceivedTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'first_proposals_duration';
                    var1[var11] = var14;
                    var14 = var7.lastProposalsFinishedTime;
                    var11 = var7.lastProposalsReceivedTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'last_proposals_duration';
                    var1[var11] = var14;
                    var14 = var7.lastProposalsReceivedTime;
                    var11 = var7.firstProposalsReceivedTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'duration_between_proposals';
                    var1[var11] = var14;
                    var14 = var7.totalProposalsSize;
                    var11 = 'total_proposals_size';
                    var1[var11] = var14;
                    var14 = var7.totalCommitWelcomeSize;
                    var11 = 'total_commit_welcome_size';
                    var1[var11] = var14;
                    var14 = var7.welcomeReceivedTime;
                    var11 = var7.initFinishedTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'welcome_wait_duration';
                    var1[var11] = var14;
                    var14 = var7.welcomeFinishedTime;
                    var11 = var7.welcomeReceivedTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'welcome_duration';
                    var1[var11] = var14;
                    var14 = var7.welcomeSize;
                    var11 = 'welcome_size';
                    var1[var11] = var14;
                    var14 = var7.welcomeError;
                    var11 = 'welcome_error';
                    var1[var11] = var14;
                    var14 = var7.commitReceivedTime;
                    var11 = var7.lastProposalsFinishedTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'commit_wait_duration';
                    var1[var11] = var14;
                    var14 = var7.commitFinishedTime;
                    var11 = var7.commitReceivedTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'commit_duration';
                    var1[var11] = var14;
                    var14 = var7.commitSize;
                    var11 = 'commit_size';
                    var1[var11] = var14;
                    var14 = var7.commitError;
                    var11 = 'commit_error';
                    var1[var11] = var14;
                    var14 = var7.prepareReceivedTime;
                    var11 = var2._secureFramesLastBecameAloneTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'prepare_wait_duration';
                    var1[var11] = var14;
                    var14 = var7.prepareFinishedTime;
                    var11 = var7.prepareReceivedTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'prepare_duration';
                    var1[var11] = var14;
                    var14 = var7.executeReceivedTime;
                    var11 = var7.readyTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'execute_wait_duration';
                    var1[var11] = var14;
                    var14 = var7.executeFinishedTime;
                    var11 = var7.executeReceivedTime;
                    var14 = var10.bind(var9)(var14, var11);
                    var11 = 'execute_duration';
                    var1[var11] = var14;
                    var14 = var7.executeError;
                    var11 = 'execute_error';
                    var1[var11] = var14;
                    var14 = var7.incomplete;
                    var11 = 'incomplete';
                    var1[var11] = var14;
                    var11 = 'active_transition_count';
                    var1[var11] = var13;
                    var11 = _closure1_slot0;
                    var8 = 19;
                    var8 = var12[var8];
                    var11 = var11.bind(var9)(var8);
                    var8 = var11.now;
                    var11 = var8.bind(var11)();
                    var8 = var7.creationTime;
                    var11 = var11 - var8;
                    var8 = 'time_since_creation';
                    var1[var8] = var11;
                    var11 = var7.usersAdded;
                    var8 = 'users_added_count';
                    var1[var8] = var11;
                    var11 = var7.usersRemoved;
                    var8 = 'users_removed_count';
                    var1[var8] = var11;
                    var11 = var7.rosterSizeAfter;
                    var8 = 'roster_size_after';
                    var1[var8] = var11;
                    var8 = var7.executeFinishedTime;
                    var7 = var7.initReceivedTime;
                    var8 = var10.bind(var9)(var8, var7);
                    var7 = 'init_to_finish_duration';
                    var1[var7] = var8;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = 0;
                    if(!(var1 === var3)) { _fun0093_ip = 420; continue _fun0093 }
case 421:
                    var1 = var2._trackRemainingSecureFrameTransitions;
                    var1 = var1.bind(var2)();
case 420:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[79] = var5;
            var5 = {};
            var7 = '_trackRemainingSecureFrameTransitions';
            var5['key'] = var7;
            var7 = function value() {
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2._secureFramesTransitionStates;
                var2 = var3.forEach;
                var1 = function(arg1, arg2) {
                    var2 = true;
                    var1 = arg1;
                    var1['incomplete'] = var2;
                    var3 = _closure3_slot0;
                    var2 = var3._trackSecureFrameTransition;
                    var1 = arg2;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[80] = var5;
            var5 = {};
            var7 = '_storeSecureFrameNextTransitionData';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
case 0:
                    var2 = this;
                    var3 = var2._secureFramesNextTransitionState;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0095_ip = 61; continue _fun0095 }
case 160:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 19;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var1['creationTime'] = var3;
                    var2['_secureFramesNextTransitionState'] = var1;
case 61:
                    var1 = {};
                    var6 = var2._secureFramesNextTransitionState;
                    var7 = var1;
                    var3 = copyDataProperties(var7, var6);
                    var6 = arg1;
                    var7 = var1;
                    var3 = copyDataProperties(var7, var6);
                    var2['_secureFramesNextTransitionState'] = var1;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[81] = var5;
            var5 = {};
            var7 = '_storeSecureFrameTransitionData';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
case 0:
                    var5 = arg1;
                    var2 = this;
                    var3 = var2._secureFramesTransitionStates;
                    var1 = var3.get;
                    var6 = var1.bind(var3)(var5);
                    var1 = null;
                    if(!(var1 == var6)) { _fun0096_ip = 5; continue _fun0096 }
case 34:
                    var3 = var2._storeSecureFrameNextTransitionData;
                    var1 = {};
                    var6 = var3.bind(var2)(var1);
                    var3 = undefined;
                    var2['_secureFramesNextTransitionState'] = var3;
case 5:
                    var4 = var2._secureFramesTransitionStates;
                    var3 = var4.set;
                    var1 = {};
                    var8 = var1;
                    var7 = var6;
                    var6 = copyDataProperties(var8, var7);
                    var7 = arg2;
                    var8 = var1;
                    var6 = copyDataProperties(var8, var7);
                    var1 = var3.bind(var4)(var5, var1);
                    var1 = global;
                    var5 = var1.Math;
                    var4 = var5.max;
                    var3 = var2._secureFramesMaxConcurrentTransitions;
                    var1 = var2._secureFramesTransitionStates;
                    var1 = var1.size;
                    var1 = var4.bind(var5)(var3, var1);
                    var2['_secureFramesMaxConcurrentTransitions'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[82] = var5;
            var5 = {};
            var7 = '_handleSecureFramesInit';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
case 0:
                    var6 = arg1;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var6;
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var9 = 19;
                    var3 = var1[var9];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var3);
                    var3 = var7.now;
                    var7 = var3.bind(var7)();
                    var _closure3_slot2 = var7;
                    var8 = var4.recordEvent;
                    var3 = {};
                    var10 = _closure1_slot33;
                    var10 = var10.SECURE_FRAMES_INIT;
                    var3['c'] = var10;
                    var3['v'] = var6;
                    var3 = var8.bind(var4)(var3);
                    var10 = 0;
                    if(!(!(var6 > var10))) { _fun0097_ip = 108; continue _fun0097 }
case 170:
                    var8 = var4._connection;
                    var3 = null;
                    if(!(var3 != var8)) { _fun0097_ip = 422; continue _fun0097 }
case 88:
                    var3 = var8.prepareSecureFramesTransition;
                    var2 = function() {
                        _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
case 0:
                            var1 = undefined;
                            var2 = undefined;
                            var3 = false;
case 423: // try_start_0
                            var4 = _closure3_slot0;
                            var5 = var4._connection;
                            var2 = var5;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0098_ip = 168; continue _fun0098 }
case 34:
                            var5 = var2;
                            var4 = var5.executeSecureFramesTransition;
                            var2 = 0;
                            var2 = var4.bind(var5)(var2);
case 168: // try_end0
                            _fun0098_ip = 305; continue _fun0098;
case 2: // catch_target0
                            CatchBlockStart(arg_register=4);
                            var3 = true;
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var2 = 22;
                            var2 = var6[var2];
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.captureException;
                            var2 = var2.bind(var4)(var5);
case 305:
                            var4 = _closure3_slot0;
                            var5 = var4._storeSecureFrameTransitionData;
                            var2 = {};
                            var7 = _closure3_slot2;
                            var2['initReceivedTime'] = var7;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var7 = 19;
                            var7 = var9[var7];
                            var8 = var8.bind(var1)(var7);
                            var7 = var8.now;
                            var7 = var7.bind(var8)();
                            var2['initFinishedTime'] = var7;
                            var6 = _closure3_slot1;
                            var2['protocolVersion'] = var6;
                            var2['executeError'] = var3;
                            var3 = 0;
                            var2 = var5.bind(var4)(var3, var2);
                            var2 = var4._trackSecureFrameTransition;
                            var2 = var2.bind(var4)(var3);
                            return var1;
                        }
                    };
                    var2 = var3.bind(var8)(var10, var6, var2);
                    _fun0097_ip = 422; continue _fun0097;
case 108:
                    var8 = var4.logger;
                    var3 = var8.info;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var10 = var2.concat;
                    var2 = 'DAVE protocol init with protocol version: ';
                    var2 = var10.bind(var2)(var6);
                    var2 = var3.bind(var8)(var2);
                    var4['_mlsInitReceivedTime'] = var7;
                    var10 = var4._connection;
                    var2 = null;
                    if(!(var2 != var10)) { _fun0097_ip = 185; continue _fun0097 }
case 99:
                    var8 = var10.prepareSecureFramesEpoch;
                    var3 = var4.trueChannelId;
                    var2 = '1';
                    var2 = var8.bind(var10)(var2, var6, var3);
case 185:
                    var2 = var4._sendMLSKeyPackage;
                    var2 = var2.bind(var4)();
                    var3 = var4._storeSecureFrameNextTransitionData;
                    var2 = {};
                    var2['initReceivedTime'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var9];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.now;
                    var7 = var7.bind(var8)();
                    var2['initFinishedTime'] = var7;
                    var2['protocolVersion'] = var6;
                    var2 = var3.bind(var4)(var2);
                    var3 = var4.recordEvent;
                    var2 = {};
                    var5 = _closure1_slot33;
                    var5 = var5.MLS_INIT;
                    var2['c'] = var5;
                    var2 = var3.bind(var4)(var2);
case 422:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[83] = var5;
            var5 = {};
            var7 = '_handleSecureFramesRosterChange';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                var5 = this;
                var _closure3_slot0 = var5;
                var4 = new Array(0);
                var _closure3_slot1 = var4;
                var2 = 0;
                var _closure3_slot2 = var2;
                var _closure3_slot3 = var2;
                var2 = global;
                var6 = var2.Object;
                var3 = var6.entries;
                var2 = arg1;
                var6 = var3.bind(var6)(var2);
                var3 = var6.forEach;
                var2 = function(arg1) {
                    _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
case 0:
                        var5 = arg1;
                        var2 = var5[Symbol.iterator];
                        var5 = var2().next;
                        var6 = var5().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var4 = undefined;
                        if(var3) { _fun0099_ip = 151; continue _fun0099 }
case 146:
                        var4 = var6;
case 151:
                        var6 = undefined;
                        if(var3) { _fun0099_ip = 152; continue _fun0099 }
case 145:
                        var7 = var5().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var6 = undefined;
                        var3 = var5;
                        if(var5) { _fun0099_ip = 152; continue _fun0099 }
case 70:
                        var6 = var7;
                        var3 = var5;
case 152:
                        if(var3) { _fun0099_ip = 85; continue _fun0099 }
case 40:
                        var2.return();
case 85:
                        var5 = _closure3_slot1;
                        var3 = var5.push;
                        var3 = var3.bind(var5)(var4);
                        var3 = null;
                        if(!(var3 != var6)) { _fun0099_ip = 424; continue _fun0099 }
case 9:
                        var5 = var6.byteLength;
                        var3 = 0;
                        if(!(var3 !== var5)) { _fun0099_ip = 424; continue _fun0099 }
case 425:
                        var3 = _closure3_slot2;
                        var3 = var3 + 1;
                        _closure3_slot2 = var3;
                        var3 = _closure3_slot0;
                        var5 = var3._secureFramesRosterMap;
                        var3 = var5.set;
                        var3 = var3.bind(var5)(var4, var6);
                        _fun0099_ip = 14; continue _fun0099;
case 424:
                        var3 = _closure3_slot3;
                        var3 = var3 + 1;
                        _closure3_slot3 = var3;
                        var2 = _closure3_slot0;
                        var3 = var2._secureFramesRosterMap;
                        var2 = var3.delete;
                        var2 = var2.bind(var3)(var4);
case 14:
                        return var1;
                    }
                };
                var2 = var3.bind(var6)(var2);
                var3 = var5._storeSecureFrameTransitionData;
                var2 = {};
                var6 = _closure3_slot2;
                var2['usersAdded'] = var6;
                var1 = _closure3_slot3;
                var2['usersRemoved'] = var1;
                var1 = var5._secureFramesRosterMap;
                var1 = var1.size;
                var2['rosterSizeAfter'] = var1;
                var1 = arg2;
                var1 = var3.bind(var5)(var1, var2);
                var3 = var5.emit;
                var6 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var2 = var2.RTCConnectionEvent;
                var2 = var2.RosterMapUpdate;
                var2 = var3.bind(var5)(var2, var4);
                return var1;
            };
            var5['value'] = var7;
            var1[84] = var5;
            var5 = {};
            var7 = '_handleSecureFramesPrepareTransition';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
case 0:
                    var6 = arg1;
                    var5 = arg2;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var6;
                    var _closure3_slot2 = var5;
                    var7 = var3.logger;
                    var4 = var7.info;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var9 = var1.concat;
                    var8 = 'Preparing DAVE protocol transition: ';
                    var1 = ', protocol version: ';
                    var1 = var9.bind(var8)(var6, var1, var5);
                    var1 = var4.bind(var7)(var1);
                    var1 = var3._secureFramesTransitionPrepareCount;
                    var1 = var1 + 1;
                    var3['_secureFramesTransitionPrepareCount'] = var1;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 19;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.now;
                    var4 = var4.bind(var7)();
                    var _closure3_slot3 = var4;
                    var4 = 0;
                    if(!(var4 === var5)) { _fun0100_ip = 173; continue _fun0100 }
case 426:
                    var7 = var3._trackMLSFailures;
                    var4 = {'recovered': true, 'downgraded': true};
                    var4 = var7.bind(var3)(var4);
case 173:
                    var4 = var3._connection;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0100_ip = 427; continue _fun0100 }
case 98:
                    var3 = var4.prepareSecureFramesTransition;
                    var2 = function() {
                        var5 = _closure3_slot0;
                        var2 = var5._maybeSendSecureFramesTransitionReady;
                        var4 = _closure3_slot1;
                        var2 = var2.bind(var5)(var4);
                        var3 = var5._storeSecureFrameTransitionData;
                        var2 = {};
                        var6 = _closure3_slot2;
                        var2['protocolVersion'] = var6;
                        var1 = _closure3_slot3;
                        var2['prepareReceivedTime'] = var1;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 19;
                        var6 = var6[var1];
                        var1 = undefined;
                        var7 = var7.bind(var1)(var6);
                        var6 = var7.now;
                        var6 = var6.bind(var7)();
                        var2['prepareFinishedTime'] = var6;
                        var2 = var3.bind(var5)(var4, var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var6, var5, var2);
case 427:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[85] = var5;
            var5 = {};
            var7 = '_handleSecureFramesPrepareEpoch';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0101: for(var _fun0101_ip = 0; ; ) switch(_fun0101_ip) {
case 0:
                    var2 = arg1;
                    var6 = arg2;
                    var3 = this;
                    var5 = var3.logger;
                    var4 = var5.info;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var7 = 'Preparing DAVE protocol epoch: ';
                    var1 = ', protocol version: ';
                    var1 = var8.bind(var7)(var2, var1, var6);
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.toString;
                    var2 = var1.bind(var2)();
                    var5 = var3._connection;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0101_ip = 425; continue _fun0101 }
case 179:
                    var4 = var5.prepareSecureFramesEpoch;
                    var1 = var3.trueChannelId;
                    var1 = var4.bind(var5)(var2, var6, var1);
case 425:
                    var1 = '1';
                    if(!(var1 === var2)) { _fun0101_ip = 428; continue _fun0101 }
case 404:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var1 = var2.now;
                    var1 = var1.bind(var2)();
                    var3['_mlsInitReceivedTime'] = var1;
                    var1 = var3._sendMLSKeyPackage;
                    var1 = var1.bind(var3)();
                    var2 = var3.recordEvent;
                    var1 = {};
                    var4 = _closure1_slot33;
                    var4 = var4.MLS_INIT;
                    var1['c'] = var4;
                    var1 = var2.bind(var3)(var1);
case 428:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[86] = var5;
            var5 = {};
            var7 = '_sendMLSKeyPackage';
            var5['key'] = var7;
            var7 = function value() {
                _fun0102: for(var _fun0102_ip = 0; ; ) switch(_fun0102_ip) {
case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var3 = var2._connection;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0102_ip = 369; continue _fun0102 }
case 105:
                    var2 = var3.getMLSKeyPackage;
                    var1 = function(arg1) {
                        _fun0103: for(var _fun0103_ip = 0; ; ) switch(_fun0103_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var4 = var1.logger;
                            var3 = var4.info;
                            var2 = 'Got MLS key package, sending to RTC server';
                            var2 = var3.bind(var4)(var2);
                            var3 = var1._socket;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0103_ip = 429; continue _fun0103 }
case 59:
                            var2 = var3.sendMLSKeyPackage;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
case 429:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 369:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[87] = var5;
            var5 = {};
            var7 = '_maybeSendSecureFramesTransitionReady';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0104: for(var _fun0104_ip = 0; ; ) switch(_fun0104_ip) {
case 0:
                    var4 = arg1;
                    var3 = this;
                    var1 = 0;
                    if(!(var1 !== var4)) { _fun0104_ip = 426; continue _fun0104 }
case 165:
                    var5 = var3.logger;
                    var2 = var5.info;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'Sending DAVE protocol ready for transition ID ';
                    var1 = var6.bind(var1)(var4);
                    var1 = var2.bind(var5)(var1);
                    var2 = var3._socket;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0104_ip = 367; continue _fun0104 }
case 299:
                    var1 = var2.secureFramesReadyForTransition;
                    var1 = var1.bind(var2)(var4);
case 367:
                    var2 = var3._storeSecureFrameTransitionData;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 19;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var1['readyTime'] = var5;
                    var1 = var2.bind(var3)(var4, var1);
case 426:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[88] = var5;
            var5 = {};
            var7 = '_handleSecureFramesExecuteTransition';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0105: for(var _fun0105_ip = 0; ; ) switch(_fun0105_ip) {
case 0:
                    var11 = arg1;
                    var4 = this;
                    var2 = var11;
                    var1 = undefined;
                    var8 = undefined;
                    var6 = undefined;
                    var3 = undefined;
                    var9 = var4.logger;
                    var7 = var9.info;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var10 = var5.concat;
                    var5 = 'Executing DAVE protocol transition: ';
                    var5 = var10.bind(var5)(var11);
                    var5 = var7.bind(var9)(var5);
                    var5 = var4._secureFramesTransitionExecuteCount;
                    var5 = var5 + 1;
                    var4['_secureFramesTransitionExecuteCount'] = var5;
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var9 = 19;
                    var5 = var5[var9];
                    var10 = var10.bind(var1)(var5);
                    var5 = var10.now;
                    var8 = var5.bind(var10)();
                    var6 = false;
case 302: // try_start_0
                    var10 = var4._connection;
                    var3 = var10;
                    var5 = null;
                    if(!(var5 != var10)) { _fun0105_ip = 430; continue _fun0105 }
case 106:
                    var10 = var3;
                    var5 = var10.executeSecureFramesTransition;
                    var3 = var2;
                    var3 = var5.bind(var10)(var3);
case 430: // try_end0
                    _fun0105_ip = 47; continue _fun0105;
case 431: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var6 = true;
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var3 = 22;
                    var3 = var11[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.captureException;
                    var3 = var3.bind(var5)(var10);
case 47:
                    var5 = var4._storeSecureFrameTransitionData;
                    var3 = var2;
                    var2 = {};
                    var2['executeReceivedTime'] = var8;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var9];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.now;
                    var7 = var7.bind(var8)();
                    var2['executeFinishedTime'] = var7;
                    var2['executeError'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    var2 = var4._trackSecureFrameTransition;
                    var2 = var2.bind(var4)(var3);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[89] = var5;
            var5 = {};
            var7 = '_handleMLSExternalSenderPackage';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0106: for(var _fun0106_ip = 0; ; ) switch(_fun0106_ip) {
case 0:
                    var1 = this;
                    var4 = var1.logger;
                    var3 = var4.info;
                    var2 = 'Received MLS external sender package';
                    var2 = var3.bind(var4)(var2);
                    var3 = var1._connection;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0106_ip = 157; continue _fun0106 }
case 62:
                    var2 = var3.updateMLSExternalSender;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 157:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[90] = var5;
            var5 = {};
            var7 = '_handleMLSProposals';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0107: for(var _fun0107_ip = 0; ; ) switch(_fun0107_ip) {
case 0:
                    var5 = arg2;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var _closure3_slot2 = var5;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 19;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.now;
                    var4 = var4.bind(var6)();
                    var _closure3_slot3 = var4;
                    var7 = var3.logger;
                    var6 = var7.info;
                    var4 = 'Received MLS proposals';
                    var4 = var6.bind(var7)(var4);
                    var4 = var3._connection;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0107_ip = 196; continue _fun0107 }
case 11:
                    var3 = var4.processMLSProposals;
                    var2 = function(arg1) {
                        _fun0108: for(var _fun0108_ip = 0; ; ) switch(_fun0108_ip) {
case 0:
                            var2 = arg1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 19;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.now;
                            var4 = var3.bind(var4)();
                            var3 = _closure3_slot0;
                            var8 = var3.logger;
                            var7 = var8.info;
                            var6 = 'Sending MLS commit welcome message';
                            var6 = var7.bind(var8)(var6);
                            var7 = _closure3_slot1;
                            var6 = var7.sendMLSCommitWelcome;
                            var6 = var6.bind(var7)(var2);
                            var3 = var3._secureFramesNextTransitionState;
                            var6 = null;
                            if(!(var6 == var3)) { _fun0108_ip = 320; continue _fun0108 }
case 11:
                            var9 = _closure3_slot0;
                            var8 = var9._storeSecureFrameNextTransitionData;
                            var7 = {};
                            var10 = _closure3_slot3;
                            var7['firstProposalsReceivedTime'] = var10;
                            var7['firstProposalsFinishedTime'] = var4;
                            var3 = var8.bind(var9)(var7);
case 320:
                            var7 = _closure3_slot3;
                            var3['lastProposalsReceivedTime'] = var7;
                            var3['lastProposalsFinishedTime'] = var4;
                            var8 = var3.totalProposalsSize;
                            var9 = var6 != var8;
                            var7 = 0;
                            if(!var9) { _fun0108_ip = 50; continue _fun0108 }
case 15:
                            var7 = var8;
case 50:
                            var5 = _closure3_slot2;
                            var5 = var5.byteLength;
                            var5 = var7 + var5;
                            var3['totalProposalsSize'] = var5;
                            var5 = var3.totalCommitWelcomeSize;
                            var6 = var6 != var5;
                            var4 = 0;
                            if(!var6) { _fun0108_ip = 432; continue _fun0108 }
case 311:
                            var4 = var5;
case 432:
                            var2 = var2.byteLength;
                            var2 = var4 + var2;
                            var3['totalCommitWelcomeSize'] = var2;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var5, var2);
case 196:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[91] = var5;
            var5 = {};
            var7 = '_handleMLSPrepareCommitTransition';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0109: for(var _fun0109_ip = 0; ; ) switch(_fun0109_ip) {
case 0:
                    var6 = arg1;
                    var5 = arg2;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var6;
                    var _closure3_slot2 = var5;
                    var7 = var3.logger;
                    var4 = var7.info;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var1 = 'Received MLS commit for transition ID ';
                    var1 = var8.bind(var1)(var6);
                    var1 = var4.bind(var7)(var1);
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 19;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.now;
                    var4 = var4.bind(var7)();
                    var _closure3_slot3 = var4;
                    var4 = var3._connection;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0109_ip = 424; continue _fun0109 }
case 433:
                    var3 = var4.prepareMLSCommitTransition;
                    var2 = function(arg1, arg2, arg3) {
                        _fun0110: for(var _fun0110_ip = 0; ; ) switch(_fun0110_ip) {
case 0:
                            var6 = arg1;
                            var1 = arg2;
                            var4 = _closure3_slot0;
                            if(var6) { _fun0110_ip = 95; continue _fun0110 }
case 164:
                            var8 = var4.logger;
                            var5 = var8.warn;
                            var3 = _closure3_slot1;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var9 = var2.concat;
                            var2 = 'Failed to process MLS commit for transition ID ';
                            var2 = var9.bind(var2)(var3);
                            var2 = var5.bind(var8)(var2);
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 19;
                            var5 = var5[var2];
                            var2 = undefined;
                            var5 = var8.bind(var2)(var5);
                            var2 = var5.now;
                            var2 = var2.bind(var5)();
                            var4['_mlsSessionResetStartTime'] = var2;
                            var2 = var4._flagMLSInvalidCommitWelcome;
                            var2 = var2.bind(var4)(var3);
                            var2 = var4._handleSecureFramesInit;
                            var2 = var2.bind(var4)(var1);
                            _fun0110_ip = 19; continue _fun0110;
case 95:
                            var3 = var4._trackMLSFailures;
                            var2 = {'recovered': true, 'downgraded': false};
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            var4['_mlsSessionResetStartTime'] = var2;
                            var5 = var4._handleSecureFramesRosterChange;
                            var3 = _closure3_slot1;
                            var2 = arg3;
                            var2 = var5.bind(var4)(var2, var3);
                            var2 = var4._maybeSendSecureFramesTransitionReady;
                            var2 = var2.bind(var4)(var3);
case 19:
                            var5 = _closure3_slot0;
                            var4 = var5._storeSecureFrameTransitionData;
                            var3 = _closure3_slot1;
                            var2 = {};
                            var2['protocolVersion'] = var1;
                            var1 = _closure3_slot3;
                            var2['commitReceivedTime'] = var1;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var1 = 19;
                            var8 = var8[var1];
                            var1 = undefined;
                            var9 = var9.bind(var1)(var8);
                            var8 = var9.now;
                            var8 = var8.bind(var9)();
                            var2['commitFinishedTime'] = var8;
                            var7 = _closure3_slot2;
                            var7 = var7.byteLength;
                            var2['commitSize'] = var7;
                            var6 = !var6;
                            var2['commitError'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var6, var5, var2);
case 424:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[92] = var5;
            var5 = {};
            var7 = '_handleMLSWelcome';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0111: for(var _fun0111_ip = 0; ; ) switch(_fun0111_ip) {
case 0:
                    var6 = arg1;
                    var5 = arg2;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var6;
                    var _closure3_slot2 = var5;
                    var7 = var3.logger;
                    var4 = var7.info;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var1 = 'Received MLS welcome for transition ID ';
                    var1 = var8.bind(var1)(var6);
                    var1 = var4.bind(var7)(var1);
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 19;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.now;
                    var4 = var4.bind(var7)();
                    var _closure3_slot3 = var4;
                    var4 = var3._connection;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0111_ip = 424; continue _fun0111 }
case 433:
                    var3 = var4.processMLSWelcome;
                    var2 = function(arg1, arg2, arg3) {
                        _fun0112: for(var _fun0112_ip = 0; ; ) switch(_fun0112_ip) {
case 0:
                            var6 = arg1;
                            var3 = _closure3_slot0;
                            if(var6) { _fun0112_ip = 156; continue _fun0112 }
case 434:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 19;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.now;
                            var1 = var1.bind(var2)();
                            var3['_mlsSessionResetStartTime'] = var1;
                            var2 = var3._flagMLSInvalidCommitWelcome;
                            var1 = _closure3_slot1;
                            var1 = var2.bind(var3)(var1);
                            var1 = var3._sendMLSKeyPackage;
                            var1 = var1.bind(var3)();
                            _fun0112_ip = 154; continue _fun0112;
case 156:
                            var2 = var3._trackMLSFailures;
                            var1 = {'recovered': true, 'downgraded': false};
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            var3['_mlsSessionResetStartTime'] = var1;
                            var4 = var3._handleSecureFramesRosterChange;
                            var2 = _closure3_slot1;
                            var1 = arg3;
                            var1 = var4.bind(var3)(var1, var2);
                            var1 = var3._maybeSendSecureFramesTransitionReady;
                            var1 = var1.bind(var3)(var2);
case 154:
                            var5 = _closure3_slot0;
                            var4 = var5._storeSecureFrameTransitionData;
                            var3 = _closure3_slot1;
                            var2 = {};
                            var1 = arg2;
                            var2['protocolVersion'] = var1;
                            var1 = _closure3_slot3;
                            var2['welcomeReceivedTime'] = var1;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var1 = 19;
                            var8 = var8[var1];
                            var1 = undefined;
                            var9 = var9.bind(var1)(var8);
                            var8 = var9.now;
                            var8 = var8.bind(var9)();
                            var2['welcomeFinishedTime'] = var8;
                            var7 = _closure3_slot2;
                            var7 = var7.byteLength;
                            var2['welcomeSize'] = var7;
                            var6 = !var6;
                            var2['welcomeError'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var6, var5, var2);
case 424:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[93] = var5;
            var5 = {};
            var7 = 'getMLSPairwiseFingerprint';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0113: for(var _fun0113_ip = 0; ; ) switch(_fun0113_ip) {
case 0:
                    var1 = this;
                    var5 = var1._connection;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0113_ip = 369; continue _fun0113 }
case 160:
                    var4 = var5.getMLSPairwiseFingerprint;
                    var3 = arg1;
                    var2 = arg2;
                    var1 = arg3;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 369:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[94] = var5;
            var5 = {};
            var7 = '_flagMLSInvalidCommitWelcome';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0114: for(var _fun0114_ip = 0; ; ) switch(_fun0114_ip) {
case 0:
                    var3 = arg1;
                    var1 = this;
                    var5 = var1.logger;
                    var4 = var5.info;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = 'Flagging invalid MLS commit/welcome for transition ID ';
                    var2 = var6.bind(var2)(var3);
                    var2 = var4.bind(var5)(var2);
                    var2 = var1._socket;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0114_ip = 38; continue _fun0114 }
case 163:
                    var1 = var2.flagMLSInvalidCommitWelcome;
                    var1 = var1.bind(var2)(var3);
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[95] = var5;
            var5 = {};
            var7 = '_handleMLSFailure';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0115: for(var _fun0115_ip = 0; ; ) switch(_fun0115_ip) {
case 0:
                    var6 = arg1;
                    var4 = arg2;
                    var3 = this;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var2);
                    var2 = var7.now;
                    var11 = var2.bind(var7)();
                    var2 = var3._nextFailureId;
                    var9 = parseFloat(var2);
                    var2 = var9 + 1;
                    var3['_nextFailureId'] = var2;
                    var7 = var3.recordEvent;
                    var2 = {};
                    var8 = _closure1_slot33;
                    var8 = var8.MLS_FAILURE;
                    var2['c'] = var8;
                    var2['i'] = var9;
                    var2 = var7.bind(var3)(var2);
                    var8 = var3._mlsFailures;
                    var7 = var8.push;
                    var2 = {};
                    var2['id'] = var9;
                    var2['source'] = var6;
                    var2['reason'] = var4;
                    var12 = 1;
                    var2['count'] = var12;
                    var9 = var3._mlsSessionResetStartTime;
                    var10 = null;
                    var13 = var10 != var9;
                    var9 = 0;
                    if(!var13) { _fun0115_ip = 435; continue _fun0115 }
case 154:
                    var9 = var12;
case 435:
                    var2['countDuringReset'] = var9;
                    var2['firstOccurrence'] = var11;
                    var9 = var3._mlsInitReceivedTime;
                    var10 = var10 != var9;
                    var9 = undefined;
                    if(!var10) { _fun0115_ip = 436; continue _fun0115 }
case 437:
                    var10 = var3._mlsInitReceivedTime;
                    var9 = var11 - var10;
case 436:
                    var2['timeSinceInit'] = var9;
                    var9 = _closure1_slot39;
                    var9 = var9.bind(var1)();
                    var2['eventLog'] = var9;
                    var2 = var7.bind(var8)(var2);
                    var7 = var6.includes;
                    var2 = 'GetPersistedKeyPair';
                    var2 = var7.bind(var6)(var2);
                    if(var2) { _fun0115_ip = 438; continue _fun0115 }
case 384:
                    var2 = var3._alertMLSFailureDebouced;
                    var2 = var2.bind(var3)(var6, var4);
                    _fun0115_ip = 439; continue _fun0115;
case 438:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var2 = 61;
                    var2 = var9[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var5 = 62;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.fJUioH;
                    var6 = var7.bind(var10)(var6);
                    var2['title'] = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.CQLWvo;
                    var5 = var6.bind(var7)(var5);
                    var2['body'] = var5;
                    var2 = var3.bind(var4)(var2);
case 439:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[96] = var5;
            var5 = {};
            var7 = '_trackMLSFailures';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0116: for(var _fun0116_ip = 0; ; ) switch(_fun0116_ip) {
case 0:
                    var1 = arg1;
                    var3 = this;
                    var27 = var1.recovered;
                    var26 = var1.downgraded;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.now;
                    var24 = var2.bind(var4)();
                    var2 = var3.getMediaSessionId;
                    var23 = var2.bind(var3)();
                    var4 = var3._mlsSessionResetStartTime;
                    var2 = null;
                    var2 = var2 != var4;
                    var22 = undefined;
                    if(!var2) { _fun0116_ip = 193; continue _fun0116 }
case 179:
                    var2 = var3._mlsSessionResetStartTime;
                    var22 = var24 - var2;
case 193:
                    var4 = _closure1_slot36;
                    var2 = var3._mlsFailures;
                    var21 = var4.bind(var1)(var2);
                    var4 = var21.bind(var1)();
                    var2 = var4.done;
                    var20 = 21;
                    var19 = 'media_session_id';
                    var18 = 'parent_media_session_id';
                    var17 = 'failure_id';
                    var16 = 'failure_time';
                    var15 = 'failure_source';
                    var14 = 'failure_reason';
                    var13 = 'failure_count';
                    var12 = 'failure_was_recovered';
                    var11 = 'failure_cleared_by_downgrade';
                    var10 = 'time_since_first_occurrence';
                    var9 = 'time_since_last_reset';
                    var8 = 'failure_count_during_reset';
                    var7 = 'time_since_init';
                    var6 = 'event_history';
                    var5 = 'connection_serial';
                    if(var2) { _fun0116_ip = 440; continue _fun0116 }
case 441:
                    var2 = var4.value;
                    var38 = var2.id;
                    var37 = var2.source;
                    var36 = var2.reason;
                    var35 = var2.count;
                    var33 = var2.countDuringReset;
                    var34 = var2.firstOccurrence;
                    var32 = var2.timeSinceInit;
                    var31 = var2.eventLog;
                    var28 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var20];
                    var30 = var28.bind(var1)(var2);
                    var29 = var30.track;
                    var2 = _closure1_slot20;
                    var28 = var2.MLS_FAILURES;
                    var2 = {};
                    var39 = var3._getAnalyticsProperties;
                    var40 = var39.bind(var3)();
                    var41 = var2;
                    var39 = copyDataProperties(var41, var40);
                    var2[var19] = var23;
                    var39 = var3.parentMediaSessionId;
                    var2[var18] = var39;
                    var2[var17] = var38;
                    var38 = var3._createdTime;
                    var38 = var34 - var38;
                    var2[var16] = var38;
                    var2[var15] = var37;
                    var2[var14] = var36;
                    var2[var13] = var35;
                    var2[var12] = var27;
                    var2[var11] = var26;
                    var34 = var24 - var34;
                    var2[var10] = var34;
                    var2[var9] = var22;
                    var2[var8] = var33;
                    var2[var7] = var32;
                    var2[var6] = var31;
                    var31 = var3._connectionSerial;
                    var2[var5] = var31;
                    var2 = var29.bind(var30)(var28, var2);
                    var28 = var21.bind(var1)();
                    var2 = var28.done;
                    var4 = var28;
                    if(!var2) { _fun0116_ip = 441; continue _fun0116 }
case 440:
                    var2 = new Array(0);
                    var3['_mlsFailures'] = var2;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[97] = var5;
            var5 = {};
            var7 = '_alertMLSFailure';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0117: for(var _fun0117_ip = 0; ; ) switch(_fun0117_ip) {
case 0:
                    var3 = _closure1_slot19;
                    var2 = var3.getCurrentUser;
                    var5 = var2.bind(var3)();
                    var3 = null;
                    var2 = var3 != var5;
                    if(!var2) { _fun0117_ip = 60; continue _fun0117 }
case 161:
                    var4 = var5.isStaff;
                    var2 = var4.bind(var5)();
case 60:
                    if(var2) { _fun0117_ip = 429; continue _fun0117 }
case 62:
                    var3 = var3 != var5;
                    if(!var3) { _fun0117_ip = 4; continue _fun0117 }
case 166:
                    var4 = var5.isStaffPersonal;
                    var3 = var4.bind(var5)();
case 4:
                    var2 = var3;
case 429:
                    if(!var2) { _fun0117_ip = 14; continue _fun0117 }
case 7:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 61;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.show;
                    var1 = {};
                    var4 = global;
                    var5 = var4.HermesInternal;
                    var7 = var5.concat;
                    var6 = 'MLS Error in ';
                    var5 = arg1;
                    var5 = var7.bind(var6)(var5);
                    var1['title'] = var5;
                    var4 = var4.HermesInternal;
                    var7 = var4.concat;
                    var6 = 'Error: ';
                    var5 = arg2;
                    var4 = '! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!';
                    var4 = var7.bind(var6)(var5, var4);
                    var1['body'] = var4;
                    var1 = var2.bind(var3)(var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[98] = var5;
            var5 = {};
            var7 = 'getExtraConnectionOptions';
            var5['key'] = var7;
            var7 = function value() {
                var1 = {};
                return var1;
            };
            var5['value'] = var7;
            var1[99] = var5;
            var5 = {};
            var7 = 'shouldReportPeriodicStats';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0118: for(var _fun0118_ip = 0; ; ) switch(_fun0118_ip) {
case 0:
                    var2 = this;
                    var1 = arg1;
                    var3 = var1.length;
                    var1 = 10;
                    if(!(!(var3 > var1))) { _fun0118_ip = 193; continue _fun0118 }
case 144:
                    var1 = var2.getMediaSessionId;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0118_ip = 169; continue _fun0118 }
case 369:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 63;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.v3;
                    var3 = var2.bind(var3)(var4);
                    var2 = 100;
                    var3 = var3 % var2;
                    var2 = 5;
                    var1 = var3 <= var2;
case 169:
                    return var1;
case 193:
                    var1 = false;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[100] = var5;
            var5 = {};
            var7 = 'getInputDeviceName';
            var5['key'] = var7;
            var7 = function value() {
                _fun0119: for(var _fun0119_ip = 0; ; ) switch(_fun0119_ip) {
case 0:
                    var3 = _closure1_slot15;
                    var1 = var3.getInputDeviceId;
                    var2 = var1.bind(var3)();
                    var1 = var3.getInputDevices;
                    var1 = var1.bind(var3)();
                    var2 = var1[var2];
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0119_ip = 58; continue _fun0119 }
case 59:
                    var1 = var2.name;
case 58:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[101] = var5;
            var5 = {};
            var7 = 'getOutputDeviceName';
            var5['key'] = var7;
            var7 = function value() {
                _fun0120: for(var _fun0120_ip = 0; ; ) switch(_fun0120_ip) {
case 0:
                    var3 = _closure1_slot15;
                    var1 = var3.getOutputDeviceId;
                    var2 = var1.bind(var3)();
                    var1 = var3.getOutputDevices;
                    var1 = var1.bind(var3)();
                    var2 = var1[var2];
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0120_ip = 58; continue _fun0120 }
case 59:
                    var1 = var2.name;
case 58:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[102] = var5;
            var5 = {};
            var7 = 'getVideoDeviceName';
            var5['key'] = var7;
            var7 = function value() {
                _fun0121: for(var _fun0121_ip = 0; ; ) switch(_fun0121_ip) {
case 0:
                    var3 = _closure1_slot15;
                    var1 = var3.getVideoDeviceId;
                    var2 = var1.bind(var3)();
                    var1 = var3.getVideoDevices;
                    var1 = var1.bind(var3)();
                    var2 = var1[var2];
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0121_ip = 58; continue _fun0121 }
case 59:
                    var1 = var2.name;
case 58:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[103] = var5;
            var5 = {};
            var7 = 'getInputDeviceSampleRate';
            var5['key'] = var7;
            var6 = function value() {
                _fun0122: for(var _fun0122_ip = 0; ; ) switch(_fun0122_ip) {
case 0:
                    var1 = this;
                    var4 = var1._voiceQuality;
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0122_ip = 158; continue _fun0122 }
case 29:
                    var3 = var4.getAudioDeviceStats;
                    var3 = var3.bind(var4)();
                    var2 = var3.input_device_session_sample_rate;
case 158:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0122_ip = 397; continue _fun0122 }
case 166:
                    var1 = var2;
case 397:
                    return var1;
                }
            };
            var5['value'] = var6;
            var1[104] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var2 = var2.bind(var1)(var4);
        var4 = 65;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'lib/RTCConnection.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();