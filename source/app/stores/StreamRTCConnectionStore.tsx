// app/stores/StreamRTCConnectionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var6;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
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
case 0:
                    var4 = arg1;
                    var2 = arg2;
                    var3 = var4.destroy;
                    var5 = var4.isOwner;
                    var1 = 'receiver-disconnect';
                    if(!var5) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var1 = 'sender-disconnect';
case 6:
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
case 0:
                var3 = arg1;
                var4 = null;
                if(!(var4 != var3)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.isPlatformEmbedded;
                if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                var1 = global;
                var5 = var1.platform;
                var7 = var4 == var5;
                var6 = undefined;
                if(var7) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var6 = var5.name;
case 12:
                var5 = 'Chrome';
                if(!(var5 !== var6)) { _fun0004_ip = 10; continue _fun0004 }
case 14:
                var5 = var1.platform;
                var7 = var4 == var5;
                var6 = undefined;
                if(var7) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var6 = var5.name;
case 15:
                var5 = 'Firefox';
                if(!(var5 !== var6)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var1 = var1.platform;
                var4 = var4 == var1;
                var2 = undefined;
                if(var4) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var2 = var1.name;
case 19:
                var1 = 'Safari';
                if(!(var1 === var2)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var1 = 'window';
                return var1;
case 17:
                var1 = 'screen';
                var2 = '';
                if(!(var2 !== var3)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var1 = 'window';
case 23:
                return var1;
case 10:
                var2 = var3.startsWith;
                var1 = 'web-contents-media-stream:';
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var2 = var3.startsWith;
                var1 = 'window:';
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var2 = var3.startsWith;
                var1 = 'screen:';
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0004_ip = 29; continue _fun0004 }
case 21:
                var1 = 'unknown';
                return var1;
case 29:
                var1 = 'screen';
                return var1;
case 27:
                var1 = 'window';
                return var1;
case 25:
                var1 = 'tab';
                return var1;
case 8:
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
        var2 = 21;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var8 = var2.Store;
        var2 = function(arg1) {
            var4 = function StreamRTCConnectionStore() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
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
                    if(var1) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0005_ip = 32; continue _fun0005;
case 30:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
case 32:
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
case 0:
                    var5 = arg1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = _closure1_slot11;
                    var3 = var4.bind(var1)(var3);
                    if(!var3) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var3 = null;
                    if(!(var3 != var5)) { _fun0006_ip = 33; continue _fun0006 }
case 11:
                    var4 = _closure1_slot23;
                    var4 = var4[var5];
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 30; continue _fun0006 }
case 13:
                    var1 = var4.quality;
case 30:
                    if(!(var3 == var1)) { _fun0006_ip = 35; continue _fun0006 }
case 33:
                    var2 = _closure1_slot14;
                    var1 = var2.UNKNOWN;
case 35:
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
case 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var2 = _closure1_slot23;
                    var5 = var2[var3];
                    var3 = var1 != var5;
                    var2 = undefined;
                    if(!var3) { _fun0007_ip = 31; continue _fun0007 }
case 38:
                    var4 = var1 != var5;
                    var3 = null;
                    if(!var4) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var4 = var5.getMediaSessionId;
                    var3 = var4.bind(var5)();
case 39:
                    var2 = var3;
case 31:
                    return var2;
case 36:
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
case 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var2 = _closure1_slot23;
                    var5 = var2[var3];
                    var3 = var1 != var5;
                    var2 = undefined;
                    if(!var3) { _fun0008_ip = 31; continue _fun0008 }
case 38:
                    var4 = var1 != var5;
                    var3 = null;
                    if(!var4) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var4 = var5.getRTCConnectionId;
                    var3 = var4.bind(var5)();
case 39:
                    var2 = var3;
case 31:
                    return var2;
case 36:
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
case 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0009_ip = 41; continue _fun0009 }
case 37:
                    var2 = _closure1_slot23;
                    var4 = var2[var3];
                    var3 = var1 != var4;
                    var2 = null;
                    if(!var3) { _fun0009_ip = 42; continue _fun0009 }
case 38:
                    var3 = var4.getVideoStats;
                    var2 = var3.bind(var4)();
case 42:
                    return var2;
case 41:
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
case 0:
                    var2 = arg1;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0010_ip = 43; continue _fun0010 }
case 37:
                    var1 = _closure1_slot23;
                    var2 = var1[var2];
                    var3 = var5 != var2;
                    var4 = '';
                    var1 = var4;
                    if(!var3) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                    var3 = var2.hostname;
                    var3 = var5 != var3;
                    var1 = var4;
                    if(!var3) { _fun0010_ip = 44; continue _fun0010 }
case 46:
                    var1 = var2.hostname;
case 44:
                    return var1;
case 43:
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
case 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0011_ip = 41; continue _fun0011 }
case 37:
                    var2 = _closure1_slot23;
                    var4 = var2[var3];
                    var3 = var1 != var4;
                    var2 = null;
                    if(!var3) { _fun0011_ip = 42; continue _fun0011 }
case 38:
                    var3 = var4.getRegion;
                    var2 = var3.bind(var4)();
case 42:
                    return var2;
case 41:
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
case 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0012_ip = 41; continue _fun0012 }
case 37:
                    var2 = _closure1_slot23;
                    var4 = var2[var3];
                    var3 = var1 != var4;
                    var2 = null;
                    if(!var3) { _fun0012_ip = 42; continue _fun0012 }
case 38:
                    var3 = var4.getMaxViewers;
                    var2 = var3.bind(var4)();
case 42:
                    return var2;
case 41:
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
case 0:
                    var2 = _closure1_slot23;
                    var1 = arg1;
                    var3 = var2[var1];
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0013_ip = 47; continue _fun0013 }
case 48:
                    var2 = var3.getUserIds;
                    var1 = var2.bind(var3)();
case 47:
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
case 0:
                    var2 = _closure1_slot23;
                    var1 = arg1;
                    var4 = var2[var1];
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0014_ip = 42; continue _fun0014 }
case 48:
                    var3 = var4.getIsUserConnected;
                    var2 = arg2;
                    var1 = var3.bind(var4)(var2);
case 42:
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
case 0:
                    var2 = _closure1_slot23;
                    var1 = arg1;
                    var3 = var2[var1];
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0015_ip = 47; continue _fun0015 }
case 48:
                    var2 = var3.getSecureFramesState;
                    var1 = var2.bind(var3)();
case 47:
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
case 0:
                    var2 = _closure1_slot23;
                    var1 = arg1;
                    var5 = var2[var1];
                    var2 = null;
                    var3 = var2 == var5;
                    var4 = undefined;
                    if(var3) { _fun0016_ip = 47; continue _fun0016 }
case 48:
                    var3 = var5.getSecureFramesRosterMap;
                    var4 = var3.bind(var5)();
case 47:
                    var2 = var2 == var4;
                    var1 = undefined;
                    if(var2) { _fun0016_ip = 49; continue _fun0016 }
case 50:
                    var3 = var4.get;
                    var2 = arg2;
                    var1 = var3.bind(var4)(var2);
case 49:
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
        if(var2) { _fun0001_ip = 51; continue _fun0001 }
case 52:
        var2 = {};
        _fun0001_ip = 53; continue _fun0001;
case 51:
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
case 0:
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
                if(!(var3 != var11)) { _fun0017_ip = 54; continue _fun0017 }
case 12:
                var12 = _closure1_slot15;
                var12 = var12.GUILD;
                _fun0017_ip = 55; continue _fun0017;
case 54:
                var13 = _closure1_slot15;
                var12 = var13.CALL;
case 55:
                var1['streamType'] = var12;
                var1['guildId'] = var11;
                var1['channelId'] = var10;
                var1['ownerId'] = var9;
                var5 = var5.bind(var6)(var1);
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 18;
                var1 = var9[var1];
                var1 = var6.bind(var8)(var1);
                var1 = var1.MediaEngineContextTypes;
                var1 = var1.STREAM;
                var1 = var2 === var1;
                if(!var1) { _fun0017_ip = 56; continue _fun0017 }
case 57:
                var2 = _closure1_slot23;
                var2 = var2[var5];
                var1 = var3 != var2;
case 56:
                if(!var1) { _fun0017_ip = 58; continue _fun0017 }
case 59:
                var3 = global;
                var6 = var3.Object;
                var2 = var6.entries;
                var7 = var2.bind(var6)(var7);
                var6 = var7.some;
                var2 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var5 = arg1;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var3 = var5().value;
                        var2 = var1;
                        var7 = undefined;
                        var4 = var2 === var7;
                        var2 = undefined;
                        if(var4) { _fun0018_ip = 7; continue _fun0018 }
case 60:
                        var2 = var3;
case 7:
                        var3 = undefined;
                        if(var4) { _fun0018_ip = 49; continue _fun0018 }
case 61:
                        var6 = var5().value;
                        var5 = var1;
                        var5 = var5 === var7;
                        var3 = undefined;
                        var4 = var5;
                        if(var5) { _fun0018_ip = 49; continue _fun0018 }
case 31:
                        var3 = var6;
                        var4 = var5;
case 49:
                        if(var4) { _fun0018_ip = 13; continue _fun0018 }
case 62:
                        var1.return();
case 13:
                        var1 = 'any';
                        var1 = var1 !== var2;
                        if(!var1) { _fun0018_ip = 54; continue _fun0018 }
case 4:
                        var2 = 0;
                        var1 = var2 !== var3;
case 54:
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var2);
                var6 = !var2;
                var2 = !var6;
                if(var6) { _fun0017_ip = 63; continue _fun0017 }
case 64:
                var4 = _closure1_slot21;
                var6 = var3.performance;
                var3 = var6.now;
                var3 = var3.bind(var6)();
                var4[var5] = var3;
                var2 = undefined;
case 63:
                var1 = var2;
case 58:
                return var1;
            }
        };
        var4['RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS'] = var10;
        var10 = function handleStreamStart(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
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
case 0:
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
case 36:
                        var1 = var2.trackStart;
                        var1 = var1.bind(var2)();
case 65:
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
                if(!(var5 != var8)) { _fun0019_ip = 66; continue _fun0019 }
case 64:
                var7 = _closure1_slot9;
                var6 = var7.getGameForPID;
                var8 = var6.bind(var7)(var8);
                if(!(var5 != var8)) { _fun0019_ip = 66; continue _fun0019 }
case 67:
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
case 66:
                if(!(var5 == var4)) { _fun0019_ip = 68; continue _fun0019 }
case 69:
                var5 = _closure1_slot20;
                var5 = delete var5[var3];
                _fun0019_ip = 70; continue _fun0019;
case 68:
                var2 = _closure1_slot20;
                var2[var3] = var4;
case 70:
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
case 0:
                    var1 = arg1;
                    var2 = var1.analyticsContext;
                    var1 = var1.isOwner;
                    var4 = var2.setActionContext;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var2)(var3);
                    if(!var1) { _fun0021_ip = 39; continue _fun0021 }
case 71:
                    var1 = var2.trackEnd;
                    var1 = var1.bind(var2)();
case 39:
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
case 0:
                var1 = arg1;
                var4 = var1.streamKey;
                var10 = var1.rtcServerId;
                var9 = var1.rtcChannelId;
                var5 = var1.region;
                var12 = var1.viewerIds;
                var1 = _closure1_slot23;
                var6 = var1[var4];
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var3);
                var3 = var7.decodeStreamKey;
                var14 = var3.bind(var7)(var4);
                var8 = null;
                var3 = var8 == var6;
                if(!var3) { _fun0022_ip = 55; continue _fun0022 }
case 72:
                var3 = var8 != var10;
case 55:
                if(!var3) { _fun0022_ip = 73; continue _fun0022 }
case 74:
                var3 = _closure1_slot18;
                var3 = var3[var4];
                if(!(var8 == var3)) { _fun0022_ip = 75; continue _fun0022 }
case 18:
                var3 = _closure1_slot17;
                var3[var4] = var8;
case 75:
                var3 = _closure1_slot17;
                var3 = var3[var4];
                var3 = var8 == var3;
                if(!var3) { _fun0022_ip = 76; continue _fun0022 }
case 77:
                var7 = _closure1_slot19;
                var7 = var7[var4];
                var3 = var8 == var7;
case 76:
                if(!var3) { _fun0022_ip = 78; continue _fun0022 }
case 79:
                var7 = _closure1_slot17;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 16;
                var3 = var13[var3];
                var13 = var11.bind(var1)(var3);
                var11 = var13.getStreamerApplication;
                var3 = _closure1_slot12;
                var3 = var11.bind(var13)(var14, var3);
                var7[var4] = var3;
case 78:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var11 = 13;
                var3 = var3[var11];
                var3 = var7.bind(var1)(var3);
                var7 = var3.StreamRTCAnalyticsContext;
                var3 = {};
                var3['streamRegion'] = var5;
                var5 = _closure1_slot17;
                var5 = var5[var4];
                var3['streamApplication'] = var5;
                var13 = _closure1_slot26;
                var5 = _closure1_slot19;
                var5 = var5[var4];
                var5 = var13.bind(var1)(var5);
                var3['streamSourceType'] = var5;
                var5 = _closure1_slot16;
                var13 = var5[var4];
                var14 = var8 == var13;
                var5 = undefined;
                if(var14) { _fun0022_ip = 80; continue _fun0022 }
case 81:
                var5 = var13.appContext;
case 80:
                var3['actionContext'] = var5;
                var13 = var8 != var12;
                var5 = 0;
                if(!var13) { _fun0022_ip = 82; continue _fun0022 }
case 83:
                var5 = var12.length;
case 82:
                var3['numViewers'] = var5;
                var5 = _closure1_slot20;
                var5 = var5[var4];
                var3['goLiveModalDurationMs'] = var5;
                var5 = _closure1_slot16;
                var12 = var5[var4];
                var13 = var8 == var12;
                var5 = undefined;
                if(var13) { _fun0022_ip = 84; continue _fun0022 }
case 85:
                var5 = var12.analyticsLocations;
case 84:
                var3['analyticsLocations'] = var5;
                var5 = var7.prototype;
                var5 = Object.create(var5, {constructor: {value: var7}});
                var17 = var5;
                var16 = var3;
                var3 = new var17[var7](var16, var15);
                var5 = var3 instanceof Object ? var3 : var5;
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var12 = 12;
                var12 = var3[var12];
                var14 = var7.bind(var1)(var12);
                var12 = _closure1_slot3;
                var13 = var8 != var12;
                var12 = 'Creating RTCConnection without session.';
                var12 = var14.bind(var1)(var13, var12);
                var3 = var3[var11];
                var7 = var7.bind(var1)(var3);
                var3 = {};
                var11 = _closure1_slot3;
                var3['sessionId'] = var11;
                var3['streamKey'] = var4;
                var3['serverId'] = var10;
                var3['channelId'] = var9;
                var9 = _closure1_slot22;
                var3['initialLayout'] = var9;
                var3['analyticsContext'] = var5;
                var5 = _closure1_slot17;
                var5 = var5[var4];
                var5 = var8 != var5;
                var3['isStreamer'] = var5;
                var8 = _closure1_slot13;
                var5 = var8.getMediaSessionId;
                var5 = var5.bind(var8)();
                var3['parentMediaSessionId'] = var5;
                var5 = var7.prototype;
                var5 = Object.create(var5, {constructor: {value: var7}});
                var17 = var5;
                var16 = var3;
                var3 = new var17[var7](var16, var15);
                var3 = var3 instanceof Object ? var3 : var5;
                var5 = _closure1_slot23;
                var5[var4] = var3;
                var6 = var3;
case 73:
                var3 = _closure1_slot21;
                var3 = delete var3[var4];
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 17;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET';
                var2['type'] = var5;
                var5 = var6.getMediaEngineConnectionId;
                var5 = var5.bind(var6)();
                var2['mediaEngineConnectionId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var4['STREAM_CREATE'] = var10;
        var10 = function handleStreamServerUpdate(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var1 = arg1;
                var3 = _closure1_slot23;
                var2 = var1.streamKey;
                var4 = var3[var2];
                var2 = null;
                if(!(var2 != var4)) { _fun0023_ip = 86; continue _fun0023 }
case 87:
                var3 = var4.connect;
                var2 = var1.endpoint;
                var1 = var1.token;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
case 86:
                var1 = false;
                return var1;
            }
        };
        var4['STREAM_SERVER_UPDATE'] = var10;
        var10 = function handleStreamUpdate(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var2 = arg1;
                var4 = var2.streamKey;
                var1 = var2.viewerIds;
                var3 = var2.paused;
                var2 = _closure1_slot23;
                var2 = var2[var4];
                var4 = null;
                if(!(var4 != var2)) { _fun0024_ip = 35; continue _fun0024 }
case 40:
                if(!(var4 != var1)) { _fun0024_ip = 88; continue _fun0024 }
case 89:
                var5 = var2.analyticsContext;
                var4 = var5.trackViewerCount;
                var1 = var1.length;
                var1 = var4.bind(var5)(var1);
case 88:
                var1 = var2.streamUpdate;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
case 35:
                var1 = false;
                return var1;
            }
        };
        var4['STREAM_UPDATE'] = var10;
        var10 = function handleStreamDelete(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var1 = arg1;
                var3 = var1.streamKey;
                var1 = _closure1_slot23;
                var6 = var1[var3];
                var1 = null;
                if(!(var1 != var6)) { _fun0025_ip = 90; continue _fun0025 }
case 87:
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
case 90:
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
case 0:
                    var5 = arg1;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0026_ip = 91; continue _fun0026 }
case 37:
                    var4 = var5.setVideoSize;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 91:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var4['VIDEO_SIZE_UPDATE'] = var9;
        var2 = var4;
case 53:
        var4 = var8.prototype;
        var4 = Object.create(var4, {constructor: {value: var8}});
        var15 = var4;
        var14 = var7;
        var13 = var2;
        var2 = new var15[var8](var14, var13, var12);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 22;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'stores/StreamRTCConnectionStore.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();