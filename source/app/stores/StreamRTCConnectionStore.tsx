// app/stores/StreamRTCConnectionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var6;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
 70: // try_end0
                _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot24 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot24 = var1;
        var1 = function destroyStreamRTCConnections() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 14;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.forEach;
            var3 = _closure1_slot23;
            var2 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var2 = arg2;
                    var3 = var4.destroy;
                    var5 = var4.isOwner;
                    var1 = 'receiver-disconnect';
                    if(!var5) { _fun0003_ip = 33; continue _fun0003 }
 27:
                    var1 = 'sender-disconnect';
 33:
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure1_slot23;
                    var3 = delete var3[var2];
                    var1 = _closure1_slot21;
                    var1 = delete var1[var2];
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var _closure1_slot25 = var1;
        var10 = function handleRtcAction() {
            var1 = true;
            return var1;
        };
        var1 = function parseSourceType(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var4 = null;
                if(!(var4 != var3)) { _fun0004_ip = 246; continue _fun0004 }
 12:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.isPlatformEmbedded;
                if(var1) { _fun0004_ip = 162; continue _fun0004 }
 46:
                var1 = global;
                var5 = var1.platform;
                var7 = var4 == var5;
                var6 = undefined;
                if(var7) { _fun0004_ip = 68; continue _fun0004 }
 63:
                var6 = var5.name;
 68:
                var5 = 'Chrome';
                if(!(var5 !== var6)) { _fun0004_ip = 162; continue _fun0004 }
 78:
                var5 = var1.platform;
                var7 = var4 == var5;
                var6 = undefined;
                if(var7) { _fun0004_ip = 98; continue _fun0004 }
 93:
                var6 = var5.name;
 98:
                var5 = 'Firefox';
                if(!(var5 !== var6)) { _fun0004_ip = 144; continue _fun0004 }
 108:
                var1 = var1.platform;
                var4 = var4 == var1;
                var2 = undefined;
                if(var4) { _fun0004_ip = 128; continue _fun0004 }
 123:
                var2 = var1.name;
 128:
                var1 = 'Safari';
                if(!(var1 === var2)) { _fun0004_ip = 222; continue _fun0004 }
 138:
                var1 = 'window';
                return var1;
 144:
                var1 = 'screen';
                var2 = '';
                if(!(var2 !== var3)) { _fun0004_ip = 160; continue _fun0004 }
 156:
                var1 = 'window';
 160:
                return var1;
 162:
                var2 = var3.startsWith;
                var1 = 'web-contents-media-stream:';
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0004_ip = 240; continue _fun0004 }
 182:
                var2 = var3.startsWith;
                var1 = 'window:';
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0004_ip = 234; continue _fun0004 }
 202:
                var2 = var3.startsWith;
                var1 = 'screen:';
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0004_ip = 228; continue _fun0004 }
 222:
                var1 = 'unknown';
                return var1;
 228:
                var1 = 'screen';
                return var1;
 234:
                var1 = 'window';
                return var1;
 240:
                var1 = 'tab';
                return var1;
 246:
                var1 = 'unknown';
                return var1;
            }
        };
        var _closure1_slot26 = var1;
        var1 = global;
        var8 = var1.Object;
        var4 = var8.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var8)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 1;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 2;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 3;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot7 = var2;
        var2 = 4;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot8 = var2;
        var2 = 5;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot9 = var2;
        var2 = 6;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot10 = var2;
        var2 = 7;
        var2 = var6[var2];
        var4 = var7.bind(var1)(var2);
        var _closure1_slot11 = var4;
        var2 = 8;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot12 = var2;
        var2 = 9;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot13 = var2;
        var2 = 10;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var8 = var2.RTCConnectionQuality;
        var _closure1_slot14 = var8;
        var2 = var2.StreamLayouts;
        var8 = 11;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var8 = var8.StreamTypes;
        var _closure1_slot15 = var8;
        var8 = {};
        var _closure1_slot16 = var8;
        var8 = {};
        var _closure1_slot17 = var8;
        var8 = {};
        var _closure1_slot18 = var8;
        var8 = {};
        var _closure1_slot19 = var8;
        var8 = {};
        var _closure1_slot20 = var8;
        var8 = {};
        var _closure1_slot21 = var8;
        var2 = var2.PORTRAIT;
        var _closure1_slot22 = var2;
        var2 = {};
        var _closure1_slot23 = var2;
        var2 = 23;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var8 = var2.Store;
        var2 = function(arg1) {
            var4 = function StreamRTCConnectionStore() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = this;
                    var3 = undefined;
                    var5 = undefined;
                    var1 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var4, var2);
                    var1 = _closure1_slot7;
                    var9 = var1.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var1 = _closure1_slot24;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0005_ip = 105; continue _fun0005;
 69:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
 105:
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot8;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot5;
            var5 = {};
            var1 = 'getRTCConnections';
            var5['key'] = var1;
            var1 = function value() {
                var1 = _closure1_slot23;
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(16);
            var1[0] = var5;
            var5 = {};
            var7 = 'getAllActiveStreamKeys';
            var5['key'] = var7;
            var7 = function value() {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = _closure1_slot23;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'getRTCConnection';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = _closure1_slot23;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'getQuality';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = arg1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = _closure1_slot11;
                    var3 = var4.bind(var1)(var3);
                    if(!var3) { _fun0006_ip = 73; continue _fun0006 }
 40:
                    var3 = null;
                    if(!(var3 != var5)) { _fun0006_ip = 73; continue _fun0006 }
 46:
                    var4 = _closure1_slot23;
                    var4 = var4[var5];
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 69; continue _fun0006 }
 63:
                    var1 = var4.quality;
 69:
                    if(!(var3 == var1)) { _fun0006_ip = 83; continue _fun0006 }
 73:
                    var2 = _closure1_slot14;
                    var1 = var2.UNKNOWN;
 83:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'getMediaSessionId';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0007_ip = 53; continue _fun0007 }
 9:
                    var2 = _closure1_slot23;
                    var5 = var2[var3];
                    var3 = var1 != var5;
                    var2 = undefined;
                    if(!var3) { _fun0007_ip = 51; continue _fun0007 }
 29:
                    var4 = var1 != var5;
                    var3 = null;
                    if(!var4) { _fun0007_ip = 48; continue _fun0007 }
 38:
                    var4 = var5.getMediaSessionId;
                    var3 = var4.bind(var5)();
 48:
                    var2 = var3;
 51:
                    return var2;
 53:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'getRtcConnectionId';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 53; continue _fun0008 }
 9:
                    var2 = _closure1_slot23;
                    var5 = var2[var3];
                    var3 = var1 != var5;
                    var2 = undefined;
                    if(!var3) { _fun0008_ip = 51; continue _fun0008 }
 29:
                    var4 = var1 != var5;
                    var3 = null;
                    if(!var4) { _fun0008_ip = 48; continue _fun0008 }
 38:
                    var4 = var5.getRTCConnectionId;
                    var3 = var4.bind(var5)();
 48:
                    var2 = var3;
 51:
                    return var2;
 53:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'getVideoStats';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0009_ip = 41; continue _fun0009 }
 9:
                    var2 = _closure1_slot23;
                    var4 = var2[var3];
                    var3 = var1 != var4;
                    var2 = null;
                    if(!var3) { _fun0009_ip = 39; continue _fun0009 }
 29:
                    var3 = var4.getVideoStats;
                    var2 = var3.bind(var4)();
 39:
                    return var2;
 41:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'getHostname';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = arg1;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0010_ip = 58; continue _fun0010 }
 9:
                    var1 = _closure1_slot23;
                    var2 = var1[var2];
                    var3 = var5 != var2;
                    var4 = '';
                    var1 = var4;
                    if(!var3) { _fun0010_ip = 56; continue _fun0010 }
 34:
                    var3 = var2.hostname;
                    var3 = var5 != var3;
                    var1 = var4;
                    if(!var3) { _fun0010_ip = 56; continue _fun0010 }
 50:
                    var1 = var2.hostname;
 56:
                    return var1;
 58:
                    var1 = '';
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'getRegion';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0011_ip = 41; continue _fun0011 }
 9:
                    var2 = _closure1_slot23;
                    var4 = var2[var3];
                    var3 = var1 != var4;
                    var2 = null;
                    if(!var3) { _fun0011_ip = 39; continue _fun0011 }
 29:
                    var3 = var4.getRegion;
                    var2 = var3.bind(var4)();
 39:
                    return var2;
 41:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'getMaxViewers';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0012_ip = 41; continue _fun0012 }
 9:
                    var2 = _closure1_slot23;
                    var4 = var2[var3];
                    var3 = var1 != var4;
                    var2 = null;
                    if(!var3) { _fun0012_ip = 39; continue _fun0012 }
 29:
                    var3 = var4.getMaxViewers;
                    var2 = var3.bind(var4)();
 39:
                    return var2;
 41:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'getStreamSourceId';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = _closure1_slot19;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var5['value'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = 'getLastNonZeroRemoteVideoSinkWantsTime';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = _closure1_slot21;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var5['value'] = var7;
            var1[11] = var5;
            var5 = {};
            var7 = 'getUserIds';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure1_slot23;
                    var1 = arg1;
                    var3 = var2[var1];
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0013_ip = 35; continue _fun0013 }
 25:
                    var2 = var3.getUserIds;
                    var1 = var2.bind(var3)();
 35:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[12] = var5;
            var5 = {};
            var7 = 'isUserConnected';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure1_slot23;
                    var1 = arg1;
                    var4 = var2[var1];
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0014_ip = 39; continue _fun0014 }
 25:
                    var3 = var4.getIsUserConnected;
                    var2 = arg2;
                    var1 = var3.bind(var4)(var2);
 39:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[13] = var5;
            var5 = {};
            var7 = 'getSecureFramesState';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = _closure1_slot23;
                    var1 = arg1;
                    var3 = var2[var1];
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0015_ip = 35; continue _fun0015 }
 25:
                    var2 = var3.getSecureFramesState;
                    var1 = var2.bind(var3)();
 35:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[14] = var5;
            var5 = {};
            var7 = 'getSecureFramesRosterMapEntry';
            var5['key'] = var7;
            var6 = function value(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var2 = _closure1_slot23;
                    var1 = arg1;
                    var5 = var2[var1];
                    var2 = null;
                    var3 = var2 == var5;
                    var4 = undefined;
                    if(var3) { _fun0016_ip = 35; continue _fun0016 }
 25:
                    var3 = var5.getSecureFramesRosterMap;
                    var4 = var3.bind(var5)();
 35:
                    var2 = var2 == var4;
                    var1 = undefined;
                    if(var2) { _fun0016_ip = 57; continue _fun0016 }
 44:
                    var3 = var4.get;
                    var2 = arg2;
                    var1 = var3.bind(var4)(var2);
 57:
                    return var1;
                }
            };
            var5['value'] = var6;
            var1[15] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var8 = var2.bind(var1)(var8);
        var2 = 'StreamRTCConnectionStore';
        var8['displayName'] = var2;
        var2 = 17;
        var2 = var6[var2];
        var7 = var7.bind(var1)(var2);
        var2 = var4.isSupported;
        var2 = var2.bind(var4)();
        if(var2) { _fun0001_ip = 425; continue _fun0001 }
 418:
        var2 = {};
        _fun0001_ip = 594; continue _fun0001;
 425:
        var4 = {};
        var11 = function handleConnectionOpen(arg1) {
            var1 = arg1;
            var2 = var1.sessionId;
            var _closure1_slot3 = var2;
            var2 = _closure1_slot25;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4['CONNECTION_OPEN'] = var11;
        var11 = function handleConnectionClosed() {
            var2 = null;
            _closure1_slot3 = var2;
            var2 = _closure1_slot25;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4['CONNECTION_CLOSED'] = var11;
        var4['RTC_CONNECTION_STATE'] = var10;
        var4['RTC_CONNECTION_PING'] = var10;
        var4['RTC_CONNECTION_LOSS_RATE'] = var10;
        var11 = function handleRtcConnectionUpdateId(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 14;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.some;
            var2 = _closure1_slot23;
            var1 = function(arg1) {
                var1 = _closure2_slot0;
                var2 = var1.connection;
                var1 = arg1;
                var1 = var1 === var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4['RTC_CONNECTION_UPDATE_ID'] = var11;
        var4['RTC_CONNECTION_SECURE_FRAMES_UPDATE'] = var10;
        var10 = function handleRtcConnectionRemoteVideoSinkWants(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var1 = arg1;
                var2 = var1.context;
                var7 = var1.wants;
                var9 = var1.userId;
                var11 = var1.guildId;
                var10 = var1.channelId;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 15;
                var1 = var5[var1];
                var8 = undefined;
                var6 = var3.bind(var8)(var1);
                var5 = var6.encodeStreamKey;
                var1 = {};
                var3 = null;
                if(!(var3 != var11)) { _fun0017_ip = 80; continue _fun0017 }
 68:
                var12 = _closure1_slot15;
                var12 = var12.GUILD;
                _fun0017_ip = 90; continue _fun0017;
 80:
                var13 = _closure1_slot15;
                var12 = var13.CALL;
 90:
                var1['streamType'] = var12;
                var1['guildId'] = var11;
                var1['channelId'] = var10;
                var1['ownerId'] = var9;
                var5 = var5.bind(var6)(var1);
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 20;
                var1 = var9[var1];
                var1 = var6.bind(var8)(var1);
                var1 = var1.MediaEngineContextTypes;
                var1 = var1.STREAM;
                var1 = var2 === var1;
                if(!var1) { _fun0017_ip = 164; continue _fun0017 }
 152:
                var2 = _closure1_slot23;
                var2 = var2[var5];
                var1 = var3 != var2;
 164:
                if(!var1) { _fun0017_ip = 241; continue _fun0017 }
 167:
                var3 = global;
                var6 = var3.Object;
                var2 = var6.entries;
                var7 = var2.bind(var6)(var7);
                var6 = var7.some;
                var2 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var5 = arg1;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var3 = var5().value;
                        var2 = var1;
                        var7 = undefined;
                        var4 = var2 === var7;
                        var2 = undefined;
                        if(var4) { _fun0018_ip = 27; continue _fun0018 }
 24:
                        var2 = var3;
 27:
                        var3 = undefined;
                        if(var4) { _fun0018_ip = 57; continue _fun0018 }
 32:
                        var6 = var5().value;
                        var5 = var1;
                        var5 = var5 === var7;
                        var3 = undefined;
                        var4 = var5;
                        if(var5) { _fun0018_ip = 57; continue _fun0018 }
 51:
                        var3 = var6;
                        var4 = var5;
 57:
                        if(var4) { _fun0018_ip = 63; continue _fun0018 }
 60:
                        var1.return();
 63:
                        var1 = 'any';
                        var1 = var1 !== var2;
                        if(!var1) { _fun0018_ip = 80; continue _fun0018 }
 74:
                        var2 = 0;
                        var1 = var2 !== var3;
 80:
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var2);
                var6 = !var2;
                var2 = !var6;
                if(var6) { _fun0017_ip = 238; continue _fun0017 }
 213:
                var4 = _closure1_slot21;
                var6 = var3.performance;
                var3 = var6.now;
                var3 = var3.bind(var6)();
                var4[var5] = var3;
                var2 = undefined;
 238:
                var1 = var2;
 241:
                return var1;
            }
        };
        var4['RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS'] = var10;
        var10 = function handleStreamStart(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var1 = arg1;
                var15 = var1.streamType;
                var14 = var1.guildId;
                var13 = var1.channelId;
                var12 = var1.appContext;
                var _closure2_slot0 = var12;
                var8 = var1.pid;
                var6 = var1.sourceId;
                var2 = var1.nativePickerStyleUsed;
                var _closure2_slot1 = var2;
                var4 = var1.goLiveModalDurationMs;
                var11 = var1.analyticsLocations;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 15;
                var3 = var10[var1];
                var1 = undefined;
                var9 = var7.bind(var1)(var3);
                var7 = var9.encodeStreamKey;
                var3 = {};
                var3['streamType'] = var15;
                var3['guildId'] = var14;
                var3['channelId'] = var13;
                var14 = _closure1_slot10;
                var13 = var14.getId;
                var13 = var13.bind(var14)();
                var3['ownerId'] = var13;
                var3 = var7.bind(var9)(var3);
                var9 = _closure1_slot16;
                var7 = {};
                var7['appContext'] = var12;
                var7['analyticsLocations'] = var11;
                var9[var3] = var7;
                var9 = _closure1_slot1;
                var7 = 14;
                var7 = var10[var7];
                var10 = var9.bind(var1)(var7);
                var9 = var10.forEach;
                var7 = _closure1_slot23;
                var5 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.analyticsContext;
                        var1 = var1.isOwner;
                        var5 = var2.setActionContext;
                        var4 = _closure2_slot0;
                        var4 = var5.bind(var2)(var4);
                        var4 = var2.setNativePickerStyleUsed;
                        var3 = _closure2_slot1;
                        var3 = var4.bind(var2)(var3);
                        if(!var1) { _fun0020_ip = 65; continue _fun0020 }
 53:
                        var1 = var2.trackStart;
                        var1 = var1.bind(var2)();
 65:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var9.bind(var10)(var7, var5);
                var5 = _closure1_slot19;
                var5[var3] = var6;
                var5 = _closure1_slot18;
                var5[var3] = var8;
                var5 = null;
                if(!(var5 != var8)) { _fun0019_ip = 304; continue _fun0019 }
 213:
                var7 = _closure1_slot9;
                var6 = var7.getGameForPID;
                var8 = var6.bind(var7)(var8);
                if(!(var5 != var8)) { _fun0019_ip = 304; continue _fun0019 }
 232:
                var7 = _closure1_slot17;
                var6 = {};
                var9 = var8.name;
                var6['name'] = var9;
                var9 = var8.id;
                var6['id'] = var9;
                var9 = var8.exeName;
                var6['exe'] = var9;
                var9 = var8.distributor;
                var6['distributor'] = var9;
                var9 = var8.sku;
                var6['sku'] = var9;
                var8 = var8.gameMetadata;
                var6['gameMetadata'] = var8;
                var7[var3] = var6;
 304:
                if(!(var5 == var4)) { _fun0019_ip = 318; continue _fun0019 }
 308:
                var5 = _closure1_slot20;
                var5 = delete var5[var3];
                _fun0019_ip = 326; continue _fun0019;
 318:
                var2 = _closure1_slot20;
                var2[var3] = var4;
 326:
                return var1;
            }
        };
        var4['STREAM_START'] = var10;
        var10 = function handleStreamStop(arg1) {
            var2 = arg1;
            var1 = var2.appContext;
            var _closure2_slot0 = var1;
            var3 = var2.streamKey;
            var6 = _closure1_slot16;
            var5 = {};
            var5['appContext'] = var1;
            var1 = undefined;
            var5['analyticsLocations'] = var1;
            var6[var3] = var5;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 14;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.forEach;
            var5 = _closure1_slot23;
            var4 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.analyticsContext;
                    var1 = var1.isOwner;
                    var4 = var2.setActionContext;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var2)(var3);
                    if(!var1) { _fun0021_ip = 48; continue _fun0021 }
 36:
                    var1 = var2.trackEnd;
                    var1 = var1.bind(var2)();
 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var5, var4);
            var4 = _closure1_slot19;
            var5 = null;
            var4[var3] = var5;
            var4 = _closure1_slot18;
            var4[var3] = var5;
            var2 = _closure1_slot20;
            var2 = delete var2[var3];
            return var1;
        };
        var4['STREAM_STOP'] = var10;
        var10 = function handleStreamCreate(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var1 = arg1;
                var5 = var1.streamKey;
                var10 = var1.rtcServerId;
                var9 = var1.rtcChannelId;
                var7 = var1.region;
                var13 = var1.viewerIds;
                var1 = _closure1_slot23;
                var11 = var1[var5];
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.decodeStreamKey;
                var4 = var2.bind(var3)(var5);
                var2 = null;
                var3 = var2 == var11;
                if(!var3) { _fun0022_ip = 90; continue _fun0022 }
 86:
                var3 = var2 != var10;
 90:
                if(!var3) { _fun0022_ip = 527; continue _fun0022 }
 96:
                var3 = _closure1_slot18;
                var3 = var3[var5];
                if(!(var2 == var3)) { _fun0022_ip = 116; continue _fun0022 }
 108:
                var3 = _closure1_slot17;
                var3[var5] = var2;
 116:
                var3 = _closure1_slot17;
                var3 = var3[var5];
                var3 = var2 == var3;
                if(!var3) { _fun0022_ip = 143; continue _fun0022 }
 131:
                var8 = _closure1_slot19;
                var8 = var8[var5];
                var3 = var2 == var8;
 143:
                if(!var3) { _fun0022_ip = 190; continue _fun0022 }
 146:
                var8 = _closure1_slot17;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 16;
                var3 = var14[var3];
                var14 = var12.bind(var1)(var3);
                var12 = var14.getStreamerApplication;
                var3 = _closure1_slot12;
                var3 = var12.bind(var14)(var4, var3);
                var8[var5] = var3;
 190:
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var12 = 13;
                var3 = var3[var12];
                var3 = var8.bind(var1)(var3);
                var8 = var3.StreamRTCAnalyticsContext;
                var3 = {};
                var3['streamRegion'] = var7;
                var7 = _closure1_slot17;
                var7 = var7[var5];
                var3['streamApplication'] = var7;
                var14 = _closure1_slot26;
                var7 = _closure1_slot19;
                var7 = var7[var5];
                var7 = var14.bind(var1)(var7);
                var3['streamSourceType'] = var7;
                var7 = _closure1_slot16;
                var14 = var7[var5];
                var15 = var2 == var14;
                var7 = undefined;
                if(var15) { _fun0022_ip = 281; continue _fun0022 }
 275:
                var7 = var14.appContext;
 281:
                var3['actionContext'] = var7;
                var14 = var2 != var13;
                var7 = 0;
                if(!var14) { _fun0022_ip = 300; continue _fun0022 }
 295:
                var7 = var13.length;
 300:
                var3['numViewers'] = var7;
                var7 = _closure1_slot20;
                var7 = var7[var5];
                var3['goLiveModalDurationMs'] = var7;
                var7 = _closure1_slot16;
                var13 = var7[var5];
                var14 = var2 == var13;
                var7 = undefined;
                if(var14) { _fun0022_ip = 341; continue _fun0022 }
 335:
                var7 = var13.analyticsLocations;
 341:
                var3['analyticsLocations'] = var7;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var18 = var7;
                var17 = var3;
                var3 = new var18[var8](var17, var16);
                var7 = var3 instanceof Object ? var3 : var7;
                var8 = _closure1_slot1;
                var3 = _closure1_slot2;
                var13 = 12;
                var13 = var3[var13];
                var15 = var8.bind(var1)(var13);
                var13 = _closure1_slot3;
                var14 = var2 != var13;
                var13 = 'Creating RTCConnection without session.';
                var13 = var15.bind(var1)(var14, var13);
                var3 = var3[var12];
                var8 = var8.bind(var1)(var3);
                var3 = {};
                var12 = _closure1_slot3;
                var3['sessionId'] = var12;
                var3['streamKey'] = var5;
                var3['serverId'] = var10;
                var3['channelId'] = var9;
                var9 = _closure1_slot22;
                var3['initialLayout'] = var9;
                var3['analyticsContext'] = var7;
                var7 = _closure1_slot17;
                var7 = var7[var5];
                var7 = var2 != var7;
                var3['isStreamer'] = var7;
                var9 = _closure1_slot13;
                var7 = var9.getMediaSessionId;
                var7 = var7.bind(var9)();
                var3['parentMediaSessionId'] = var7;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var18 = var7;
                var17 = var3;
                var3 = new var18[var8](var17, var16);
                var3 = var3 instanceof Object ? var3 : var7;
                var7 = _closure1_slot23;
                var7[var5] = var3;
                var11 = var3;
 527:
                var3 = _closure1_slot21;
                var3 = delete var3[var5];
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 17;
                var3 = var8[var3];
                var9 = var7.bind(var1)(var3);
                var7 = var9.dispatch;
                var3 = {};
                var10 = 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET';
                var3['type'] = var10;
                var10 = var11.getMediaEngineConnectionId;
                var10 = var10.bind(var11)();
                var3['mediaEngineConnectionId'] = var10;
                var3 = var7.bind(var9)(var3);
                var7 = _closure1_slot0;
                var3 = 18;
                var3 = var8[var3];
                var8 = var7.bind(var1)(var3);
                var7 = var8.isEligibleForGoLiveNotificationGuildExperiment;
                var3 = {};
                var9 = var4.guildId;
                var3['guildId'] = var9;
                var9 = 'StreamRTCConnectionStore';
                var3['location'] = var9;
                var3 = var7.bind(var8)(var3);
                if(!var3) { _fun0022_ip = 667; continue _fun0022 }
 643:
                var7 = var4.ownerId;
                var8 = _closure1_slot10;
                var4 = var8.getId;
                var4 = var4.bind(var8)();
                var3 = var7 === var4;
 667:
                if(!var3) { _fun0022_ip = 724; continue _fun0022 }
 670:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 19;
                var3 = var7[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.createStreamStartNotificationV2;
                var6 = _closure1_slot17;
                var6 = var6[var5];
                var7 = var2 == var6;
                var2 = undefined;
                if(var7) { _fun0022_ip = 718; continue _fun0022 }
 713:
                var2 = var6.id;
 718:
                var2 = var3.bind(var4)(var5, var2);
 724:
                return var1;
            }
        };
        var4['STREAM_CREATE'] = var10;
        var10 = function handleStreamServerUpdate(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var1 = arg1;
                var3 = _closure1_slot23;
                var2 = var1.streamKey;
                var4 = var3[var2];
                var2 = null;
                if(!(var2 != var4)) { _fun0023_ip = 54; continue _fun0023 }
 26:
                var3 = var4.connect;
                var2 = var1.endpoint;
                var1 = var1.token;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
 54:
                var1 = false;
                return var1;
            }
        };
        var4['STREAM_SERVER_UPDATE'] = var10;
        var10 = function handleStreamUpdate(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var2 = arg1;
                var4 = var2.streamKey;
                var1 = var2.viewerIds;
                var3 = var2.paused;
                var2 = _closure1_slot23;
                var2 = var2[var4];
                var4 = null;
                if(!(var4 != var2)) { _fun0024_ip = 83; continue _fun0024 }
 38:
                if(!(var4 != var1)) { _fun0024_ip = 66; continue _fun0024 }
 42:
                var5 = var2.analyticsContext;
                var4 = var5.trackViewerCount;
                var1 = var1.length;
                var1 = var4.bind(var5)(var1);
 66:
                var1 = var2.streamUpdate;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
 83:
                var1 = false;
                return var1;
            }
        };
        var4['STREAM_UPDATE'] = var10;
        var10 = function handleStreamDelete(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var1 = arg1;
                var3 = var1.streamKey;
                var1 = _closure1_slot23;
                var6 = var1[var3];
                var1 = null;
                if(!(var1 != var6)) { _fun0025_ip = 112; continue _fun0025 }
 26:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 17;
                var4 = var4[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var5 = var7.dispatch;
                var4 = {};
                var8 = 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET';
                var4['type'] = var8;
                var8 = var6.getMediaEngineConnectionId;
                var8 = var8.bind(var6)();
                var4['mediaEngineConnectionId'] = var8;
                var4 = var5.bind(var7)(var4);
                var5 = var6.destroy;
                var4 = 'stream-end';
                var4 = var5.bind(var6)(var4);
                var2 = _closure1_slot23;
                var2 = delete var2[var3];
                return var1;
 112:
                var1 = false;
                return var1;
            }
        };
        var4['STREAM_DELETE'] = var10;
        var10 = function handleMediaEngineConnectionStats(arg1) {
            var1 = arg1;
            var1 = var1.connectionStats;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 14;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.forEach;
            var3 = _closure1_slot23;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.updateStats;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var4['MEDIA_ENGINE_CONNECTION_STATS'] = var10;
        var10 = function handleLayoutUpdate(arg1) {
            var2 = arg1;
            var3 = var2.layout;
            var _closure2_slot0 = var3;
            _closure1_slot22 = var3;
            var3 = global;
            var4 = var3.Object;
            var3 = var4.values;
            var2 = _closure1_slot23;
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.layoutChange;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var4['STREAM_LAYOUT_UPDATE'] = var10;
        var10 = function handleSimulcastDebugOverrideChanged(arg1) {
            var1 = arg1;
            var3 = var1.userId;
            var _closure2_slot0 = var3;
            var3 = var1.context;
            var _closure2_slot1 = var3;
            var1 = var1.quality;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 14;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.forEach;
            var3 = _closure1_slot23;
            var2 = function(arg1) {
                var5 = arg1;
                var4 = var5.setSimulcastDebugOverride;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = _closure2_slot2;
                var1 = var4.bind(var5)(var3, var2, var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var4['RTC_DEBUG_SET_SIMULCAST_OVERRIDE'] = var10;
        var9 = function handleVideoSizeUpdate(arg1) {
            var1 = arg1;
            var3 = var1.streamId;
            var _closure2_slot0 = var3;
            var3 = var1.width;
            var _closure2_slot1 = var3;
            var1 = var1.height;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 14;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.forEach;
            var3 = _closure1_slot23;
            var2 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                    var5 = arg1;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0026_ip = 37; continue _fun0026 }
 9:
                    var4 = var5.setVideoSize;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2, var1);
 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var4['VIDEO_SIZE_UPDATE'] = var9;
        var2 = var4;
 594:
        var4 = var8.prototype;
        var4 = Object.create(var4, {constructor: {value: var8}});
        var15 = var4;
        var14 = var7;
        var13 = var2;
        var2 = new var15[var8](var14, var13, var12);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 24;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'stores/StreamRTCConnectionStore.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();