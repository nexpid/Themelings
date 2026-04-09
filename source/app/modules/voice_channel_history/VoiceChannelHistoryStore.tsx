// app/modules/voice_channel_history/VoiceChannelHistoryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3["@@iterator"];
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot20;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot20;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function voiceActivityKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = 'voice-activity-';
        var3 = arg1;
        var2 = '-';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function userEventKey(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'voice-user-';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function indexByEventState(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = var1.eventType;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var7 = 10;
            var3 = var3[var7];
            var6 = undefined;
            var3 = var5.bind(var6)(var3);
            var3 = var3.VoiceChannelEventType;
            var3 = var3.USER_JOINED;
            if(!(var3 !== var4)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.VoiceChannelEventType;
            var3 = var3.USER_LEFT;
            if(!(var3 !== var4)) { _fun0005_ip = 42; continue _fun0005 }
case 13:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.VoiceChannelEventType;
            var3 = var3.ACTIVITY_STARTED;
            if(!(var3 !== var4)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.VoiceChannelEventType;
            var3 = var3.ACTIVITY_ENDED;
            if(!(var3 !== var4)) { _fun0005_ip = 19; continue _fun0005 }
case 45:
            var3 = new Array(0);
            return var3;
case 19:
            var4 = _closure1_slot12;
            var3 = new Array(2);
            var3[0] = var4;
            var4 = var1.userId;
            var3[1] = var4;
            return var3;
case 43:
            var4 = var1.userId;
            var3 = ['present-activity'];
            var3[1] = var4;
            return var3;
case 42:
            var3 = _closure1_slot12;
            var2 = new Array(2);
            var2[0] = var3;
            var3 = var1.userId;
            var2[1] = var3;
            return var2;
case 40:
            var2 = var1.userId;
            var1 = ['present-user'];
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function sortByTimestampDesc(arg1) {
        var1 = arg1;
        var1 = var1.timestamp;
        var1 = -var1;
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function recomputeLastLeftUserId(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot13;
            var1 = var2.get;
            var8 = var1.bind(var2)(var6);
            var2 = _closure1_slot15;
            var1 = var2.get;
            var2 = var1.bind(var2)(var6);
            var4 = null;
            var5 = var4 == var8;
            var1 = undefined;
            if(var5) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var7 = var8.values;
            var5 = _closure1_slot12;
            var8 = var7.bind(var8)(var5);
            var7 = var8.find;
            var5 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.eventType;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 10;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1.VoiceChannelEventType;
                    var1 = var1.USER_LEFT;
                    var1 = var4 === var1;
                    if(!var1) { _fun0007_ip = 4; continue _fun0007 }
case 41:
                    var4 = _closure1_slot9;
                    var3 = var4.isBlockedOrIgnored;
                    var2 = var2.userId;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 4:
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var5);
case 46:
            if(!(var4 == var1)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var7 = _closure1_slot15;
            var5 = var7.delete;
            var5 = var5.bind(var7)(var6);
            if(!(var4 != var2)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var4 = true;
            return var4;
case 48:
            var5 = _closure1_slot15;
            var4 = var5.set;
            var3 = var1.userId;
            var3 = var4.bind(var5)(var6, var3);
            var1 = var1.userId;
            if(!(var2 === var1)) { _fun0006_ip = 52; continue _fun0006 }
case 50:
            var1 = false;
            return var1;
case 52:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function recomputeFilteredHistory(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot13;
            var1 = var2.get;
            var5 = var1.bind(var2)(var6);
            var2 = null;
            var1 = var2 == var5;
            var4 = undefined;
            if(var1) { _fun0008_ip = 47; continue _fun0008 }
case 53:
            var3 = var5.values;
            var1 = _closure1_slot12;
            var4 = var3.bind(var5)(var1);
case 47:
            if(!(var2 == var4)) { _fun0008_ip = 41; continue _fun0008 }
case 9:
            var4 = new Array(0);
case 41:
            var3 = _closure1_slot16;
            var1 = var3.get;
            var1 = var1.bind(var3)(var6);
            if(!(var2 == var1)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var1 = _closure1_slot17;
case 54:
            var3 = var4.filter;
            var2 = function(arg1) {
                var3 = _closure1_slot9;
                var2 = var3.isBlockedOrIgnored;
                var1 = arg1;
                var1 = var1.userId;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var5 = _closure1_slot16;
            var4 = var5.set;
            var9 = var2.length;
            var8 = 0;
            var3 = var2;
            if(!(!(var9 > var8))) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var3 = _closure1_slot17;
case 56:
            var3 = var4.bind(var5)(var6, var3);
            var2 = var2.length;
            var1 = var1.length;
            var1 = var2 !== var1;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function updateChannelUserJoined(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var7 = arg2;
            var1 = _closure1_slot22;
            var8 = undefined;
            var5 = var1.bind(var8)(var7);
            var3 = _closure1_slot13;
            var2 = var3.get;
            var1 = arg1;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var3 = var4.set;
            var2 = {};
            var2['userId'] = var7;
            var7 = global;
            var9 = var7.Date;
            var7 = var9.now;
            var7 = var7.bind(var9)();
            var2['timestamp'] = var7;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 10;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.VoiceChannelEventType;
            var6 = var6.USER_JOINED;
            var2['eventType'] = var6;
            var2['key'] = var5;
            var2 = var3.bind(var4)(var5, var2);
            var1 = true;
case 58:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function updateChannelUserLeft(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var8 = arg2;
            var6 = arg3;
            var1 = _closure1_slot22;
            var9 = undefined;
            var5 = var1.bind(var9)(var8);
            var3 = _closure1_slot13;
            var2 = var3.get;
            var1 = arg1;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var4)) { _fun0010_ip = 60; continue _fun0010 }
case 6:
            var2 = var4.get;
            var2 = var2.bind(var4)(var5);
            if(!(var1 != var2)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
            if(!(var1 != var6)) { _fun0010_ip = 44; continue _fun0010 }
case 34:
            var10 = var2.eventType;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 10;
            var3 = var12[var3];
            var3 = var11.bind(var9)(var3);
            var3 = var3.VoiceChannelEventType;
            var3 = var3.USER_JOINED;
            if(!(var10 !== var3)) { _fun0010_ip = 63; continue _fun0010 }
case 64:
            var2 = var2.timestamp;
            if(!(!(var2 >= var6))) { _fun0010_ip = 63; continue _fun0010 }
case 44:
            var10 = var6;
            if(!(var1 == var10)) { _fun0010_ip = 65; continue _fun0010 }
case 66:
            var2 = global;
            var3 = var2.Date;
            var2 = var3.now;
            var10 = var2.bind(var3)();
case 65:
            var3 = var4.set;
            var2 = {};
            var2['userId'] = var8;
            var2['key'] = var5;
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 10;
            var11 = var13[var11];
            var11 = var12.bind(var9)(var11);
            var11 = var11.VoiceChannelEventType;
            var11 = var11.USER_LEFT;
            var2['eventType'] = var11;
            var2['timestamp'] = var10;
            var2 = var3.bind(var4)(var5, var2);
            var2 = true;
            return var2;
case 63:
            var2 = false;
            return var2;
case 61:
            var1 = var1 != var6;
            if(!var1) { _fun0010_ip = 67; continue _fun0010 }
case 68:
            var3 = var4.set;
            var2 = {};
            var2['userId'] = var8;
            var2['key'] = var5;
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 10;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var7 = var7.VoiceChannelEventType;
            var7 = var7.USER_LEFT;
            var2['eventType'] = var7;
            var2['timestamp'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            var1 = true;
case 67:
            return var1;
case 60:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function updateChannelActivityEnded(arg1, arg2, arg3, arg4, arg5) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var9 = arg2;
            var8 = arg3;
            var6 = arg4;
            var1 = null;
            var2 = var6;
            if(!(var1 != var8)) { _fun0011_ip = 69; continue _fun0011 }
case 70:
            var2 = var8;
case 69:
            if(!(var1 != var2)) { _fun0011_ip = 71; continue _fun0011 }
case 38:
            var7 = _closure1_slot13;
            var4 = var7.get;
            var3 = arg1;
            var4 = var4.bind(var7)(var3);
            if(!(var1 != var4)) { _fun0011_ip = 45; continue _fun0011 }
case 72:
            var1 = _closure1_slot21;
            var7 = undefined;
            var3 = var1.bind(var7)(var9, var2);
            var2 = var4.set;
            var1 = {};
            var1['userId'] = var9;
            var1['key'] = var3;
            var9 = arg5;
            var1['timestamp'] = var9;
            var1['applicationId'] = var8;
            var1['applicationName'] = var6;
            var6 = 'PLAYED_GAME';
            var1['activityType'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 10;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.VoiceChannelEventType;
            var5 = var5.ACTIVITY_ENDED;
            var1['eventType'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            var1 = true;
            return var1;
case 45:
            var1 = false;
            return var1;
case 71:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var4 = function handleRelationshipChange() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = _closure1_slot19;
            var3 = _closure1_slot13;
            var1 = var3.keys;
            var1 = var1.bind(var3)();
            var7 = undefined;
            var6 = var2.bind(var7)(var1);
            var2 = var6.bind(var7)();
            var3 = var2.done;
            var5 = var2;
            var4 = false;
            var2 = false;
            if(var3) { _fun0012_ip = 73; continue _fun0012 }
case 6:
            var9 = _closure1_slot25;
            var3 = var5.value;
            var9 = var9.bind(var7)(var3);
            if(var9) { _fun0012_ip = 74; continue _fun0012 }
case 62:
            var9 = var4;
case 74:
            var10 = var6.bind(var7)();
            var3 = var10.done;
            var4 = var9;
            var5 = var10;
            var2 = var4;
            if(!var3) { _fun0012_ip = 6; continue _fun0012 }
case 73:
            var4 = _closure1_slot19;
            var5 = _closure1_slot13;
            var3 = var5.keys;
            var3 = var3.bind(var5)();
            var6 = var4.bind(var7)(var3);
            var4 = var6.bind(var7)();
            var3 = var4.done;
            var5 = var4;
            var4 = false;
            var1 = false;
            if(var3) { _fun0012_ip = 21; continue _fun0012 }
case 75:
            var9 = _closure1_slot26;
            var3 = var5.value;
            var9 = var9.bind(var7)(var3);
            if(var9) { _fun0012_ip = 76; continue _fun0012 }
case 77:
            var9 = var4;
case 76:
            var10 = var6.bind(var7)();
            var3 = var10.done;
            var4 = var9;
            var5 = var10;
            var1 = var4;
            if(!var3) { _fun0012_ip = 75; continue _fun0012 }
case 21:
            if(var1) { _fun0012_ip = 78; continue _fun0012 }
case 79:
            var1 = var2;
case 78:
            return var1;
        }
    };
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var10 = 0;
    var8 = var6[var10];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 'past';
    var _closure1_slot12 = var8;
    var8 = var2.Map;
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var15 = var11;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot13 = var8;
    var8 = var2.Map;
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var15 = var11;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot14 = var8;
    var8 = var2.Map;
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var15 = var11;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot15 = var8;
    var8 = var2.Map;
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var15 = var11;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot16 = var8;
    var2 = var2.Array;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var14 = 0;
    var2 = new var15[var2](var14, var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot17 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function VoiceChannelHistoryStore(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot2;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot5;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0013_ip = 80; continue _fun0013 }
case 55:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0013_ip = 81; continue _fun0013;
case 80:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot5;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 81:
                var1 = var2.bind(var3)(var4, var1);
                var2 = function() {
                    var1 = {};
                    var3 = _closure1_slot13;
                    var1['channelEventMaps'] = var3;
                    var2 = _closure1_slot15;
                    var1['lastLeftUserIds'] = var2;
                    return var1;
                };
                var1['__getLocalVars'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var7 = this;
            var6 = var7.waitFor;
            var12 = _closure1_slot8;
            var11 = _closure1_slot7;
            var10 = _closure1_slot11;
            var9 = _closure1_slot9;
            var8 = _closure1_slot10;
            var13 = var7;
            var1 = var13[var6](var12, var11, var10, var9, var8, var7);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getLastLeftUserId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot15;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getHistory';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = _closure1_slot16;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0014_ip = 7; continue _fun0014 }
case 82:
                var1 = _closure1_slot17;
case 7:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getHistoryVersion';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = _closure1_slot13;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0015_ip = 83; continue _fun0015 }
case 53:
                var2 = var3.version;
case 83:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0015_ip = 9; continue _fun0015 }
case 6:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getHistoryExists';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot13;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getLastFetchTime';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot14;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 13;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleVoiceChannelSelect(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot10;
            var1 = var4.getCurrentUser;
            var1 = var1.bind(var4)();
            var6 = null;
            var7 = var6 == var1;
            var4 = undefined;
            var5 = undefined;
            if(var7) { _fun0016_ip = 83; continue _fun0016 }
case 84:
            var5 = var1.id;
case 83:
            var1 = var3.channelId;
            var3 = var3.currentVoiceChannelId;
            if(!(var6 != var5)) { _fun0016_ip = 85; continue _fun0016 }
case 72:
            if(!(var6 != var3)) { _fun0016_ip = 85; continue _fun0016 }
case 32:
            if(!(var1 !== var3)) { _fun0016_ip = 85; continue _fun0016 }
case 86:
            var1 = _closure1_slot28;
            var1 = var1.bind(var4)(var3, var5);
            if(!var1) { _fun0016_ip = 87; continue _fun0016 }
case 88:
            var5 = _closure1_slot25;
            var5 = var5.bind(var4)(var3);
            var2 = _closure1_slot26;
            var2 = var2.bind(var4)(var3);
case 87:
            return var1;
case 85:
            var1 = false;
            return var1;
        }
    };
    var2['VOICE_CHANNEL_SELECT'] = var10;
    var10 = function handleVoiceStateUpdates(arg1) {
        var3 = arg1;
        var2 = false;
        var _closure2_slot0 = var2;
        var2 = global;
        var4 = var2.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var10 = var5;
        var4 = new var10[var4](var9);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure2_slot1 = var4;
        var7 = var3.voiceStates;
        var6 = var7.filter;
        var5 = function(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var2 = arg1;
                var3 = var2.oldChannelId;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0017_ip = 89; continue _fun0017 }
case 70:
                var4 = _closure1_slot13;
                var3 = var4.has;
                var2 = var2.oldChannelId;
                var1 = var3.bind(var4)(var2);
case 89:
                return var1;
            }
        };
        var6 = var6.bind(var7)(var5);
        var7 = var3.voiceStates;
        var5 = var7.filter;
        var3 = function(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = arg1;
                var3 = var2.channelId;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0018_ip = 90; continue _fun0018 }
case 91:
                var4 = _closure1_slot13;
                var3 = var4.has;
                var2 = var2.channelId;
                var1 = var3.bind(var4)(var2);
case 90:
                return var1;
            }
        };
        var5 = var5.bind(var7)(var3);
        var7 = var2.Set;
        var3 = var6.map;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.oldChannelId;
            return var1;
        };
        var8 = var3.bind(var6)(var2);
        var3 = var8.filter;
        var2 = function(arg1) {
            var2 = null;
            var1 = arg1;
            var1 = var2 != var1;
            return var1;
        };
        var9 = var3.bind(var8)(var2);
        var3 = var7.prototype;
        var3 = Object.create(var3, {constructor: {value: var7}});
        var10 = var3;
        var2 = new var10[var7](var9, var8);
        var7 = var2 instanceof Object ? var2 : var3;
        var3 = var7.forEach;
        var2 = function(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = arg1;
                var1 = global;
                var5 = var1.Object;
                var4 = var5.keys;
                var6 = _closure1_slot11;
                var2 = var6.getVoiceStatesForChannel;
                var2 = var2.bind(var6)(var3);
                var2 = var4.bind(var5)(var2);
                var4 = var2.length;
                var2 = 0;
                if(!(var2 === var4)) { _fun0019_ip = 92; continue _fun0019 }
case 93:
                var4 = _closure1_slot13;
                var2 = var4.get;
                var4 = var2.bind(var4)(var3);
                var2 = null;
                if(!(var2 != var4)) { _fun0019_ip = 94; continue _fun0019 }
case 39:
                var2 = var4.clear;
                var2 = var2.bind(var4)();
case 94:
                var4 = _closure1_slot15;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
                var2 = _closure1_slot16;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
case 92:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var7)(var2);
        var3 = var6.forEach;
        var2 = function(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = arg1;
                var5 = var1.userId;
                var3 = var1.oldChannelId;
                var2 = null;
                var1 = var2 != var3;
                var4 = null;
                if(!var1) { _fun0020_ip = 95; continue _fun0020 }
case 96:
                var6 = _closure1_slot13;
                var1 = var6.get;
                var4 = var1.bind(var6)(var3);
case 95:
                var1 = var2 != var3;
                if(!var1) { _fun0020_ip = 41; continue _fun0020 }
case 9:
                var1 = var2 != var4;
case 41:
                if(!var1) { _fun0020_ip = 4; continue _fun0020 }
case 32:
                var2 = var4.values;
                var2 = var2.bind(var4)();
                var4 = var2.length;
                var2 = 0;
                var1 = var4 > var2;
case 4:
                if(!var1) { _fun0020_ip = 97; continue _fun0020 }
case 46:
                var4 = _closure1_slot28;
                var2 = undefined;
                var1 = var4.bind(var2)(var3, var5);
case 97:
                if(!var1) { _fun0020_ip = 98; continue _fun0020 }
case 99:
                var2 = true;
                _closure2_slot0 = var2;
                var2 = _closure2_slot1;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
case 98:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var6)(var2);
        var3 = var5.forEach;
        var2 = function(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = arg1;
                var5 = var1.userId;
                var3 = var1.channelId;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0021_ip = 90; continue _fun0021 }
case 100:
                var4 = _closure1_slot13;
                var2 = var4.has;
                var1 = var2.bind(var4)(var3);
case 90:
                if(!var1) { _fun0021_ip = 101; continue _fun0021 }
case 95:
                var4 = _closure1_slot27;
                var2 = undefined;
                var1 = var4.bind(var2)(var3, var5);
case 101:
                if(!var1) { _fun0021_ip = 49; continue _fun0021 }
case 86:
                var2 = true;
                _closure2_slot0 = var2;
                var2 = _closure2_slot1;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
case 49:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var5)(var2);
        var5 = var4.forEach;
        var3 = _closure1_slot25;
        var3 = var5.bind(var4)(var3);
        var3 = var4.forEach;
        var2 = _closure1_slot26;
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var10;
    var10 = function handleChannelDelete(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var5 = _closure1_slot13;
            var4 = var5.has;
            var1 = var2.id;
            var1 = var4.bind(var5)(var1);
            var4 = !var1;
            var1 = !var4;
            if(var4) { _fun0022_ip = 57; continue _fun0022 }
case 90:
            var6 = _closure1_slot13;
            var5 = var6.delete;
            var4 = var2.id;
            var4 = var5.bind(var6)(var4);
            var6 = _closure1_slot14;
            var5 = var6.delete;
            var4 = var2.id;
            var4 = var5.bind(var6)(var4);
            var6 = _closure1_slot15;
            var5 = var6.delete;
            var4 = var2.id;
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot16;
            var3 = var4.delete;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 57:
            return var1;
        }
    };
    var2['CHANNEL_DELETE'] = var10;
    var10 = function handleVoiceChannelHistoryStartTracking(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = _closure1_slot13;
            var1 = var2.has;
            var1 = var1.bind(var2)(var4);
            var1 = !var1;
            if(!var1) { _fun0023_ip = 9; continue _fun0023 }
case 53:
            var3 = function initializeChannelTracking(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot13;
                    var3 = var5.has;
                    var3 = var3.bind(var5)(var4);
                    if(var3) { _fun0024_ip = 102; continue _fun0024 }
case 103:
                    var6 = _closure1_slot13;
                    var5 = var6.set;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 11;
                    var7 = var7[var3];
                    var3 = undefined;
                    var3 = var8.bind(var3)(var7);
                    var9 = var3.SecondaryIndexMap;
                    var11 = _closure1_slot23;
                    var10 = _closure1_slot24;
                    var7 = var9.prototype;
                    var7 = Object.create(var7, {constructor: {value: var9}});
                    var12 = var7;
                    var3 = new var12[var9](var11, var10, var9);
                    var3 = var3 instanceof Object ? var3 : var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure1_slot11;
                    var2 = var3.getVoiceStatesForChannel;
                    var4 = var2.bind(var3)(var4);
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.values;
                    var3 = var2.bind(var3)(var4);
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var4 = var1.userId;
                        var3 = _closure1_slot27;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2, var4);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 102:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            var1 = true;
case 9:
            return var1;
        }
    };
    var2['VOICE_CHANNEL_HISTORY_START_TRACKING'] = var10;
    var10 = function handleFetchComplete(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var5 = var1.voiceLeaves;
            var6 = var1.activities;
            var3 = _closure1_slot13;
            var1 = var3.get;
            var12 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 != var12)) { _fun0025_ip = 104; continue _fun0025 }
case 105:
            var1 = _closure1_slot19;
            var3 = undefined;
            var9 = var1.bind(var3)(var5);
            var7 = var9.bind(var3)();
            var5 = var7.done;
            var8 = var7;
            var7 = false;
            var1 = false;
            if(var5) { _fun0025_ip = 50; continue _fun0025 }
case 106:
            var5 = var8.value;
            var11 = _closure1_slot28;
            var10 = var5.userId;
            var5 = var5.leftAt;
            var10 = var11.bind(var3)(var4, var10, var5);
            if(var10) { _fun0025_ip = 107; continue _fun0025 }
case 17:
            var10 = var7;
case 107:
            var11 = var9.bind(var3)();
            var5 = var11.done;
            var7 = var10;
            var8 = var11;
            var1 = var7;
            if(!var5) { _fun0025_ip = 106; continue _fun0025 }
case 50:
            var5 = global;
            var8 = var5.Set;
            var7 = var6.map;
            var5 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.userId;
                    var1 = var2.applicationId;
                    var3 = var2.applicationName;
                    var2 = _closure1_slot21;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0026_ip = 108; continue _fun0026 }
case 84:
                    var3 = var1;
case 108:
                    var1 = undefined;
                    var1 = var2.bind(var1)(var4, var3);
                    return var1;
                }
            };
            var20 = var7.bind(var6)(var5);
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var21 = var7;
            var5 = new var21[var8](var20, var19);
            var11 = var5 instanceof Object ? var5 : var7;
            var7 = _closure1_slot19;
            var8 = var12.values;
            var5 = _closure1_slot12;
            var5 = var8.bind(var12)(var5);
            var10 = var7.bind(var3)(var5);
            var7 = var10.bind(var3)();
            var5 = var7.done;
            var9 = 10;
            var8 = var1;
            var1 = var8;
            if(var5) { _fun0025_ip = 109; continue _fun0025 }
case 40:
            var5 = var7.value;
            var14 = var5.eventType;
            var15 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var9];
            var13 = var15.bind(var3)(var13);
            var13 = var13.VoiceChannelEventType;
            var13 = var13.ACTIVITY_ENDED;
            var14 = var14 !== var13;
            if(var14) { _fun0025_ip = 110; continue _fun0025 }
case 111:
            var15 = var11.has;
            var13 = var5.key;
            var14 = var15.bind(var11)(var13);
case 110:
            var13 = var8;
            if(var14) { _fun0025_ip = 112; continue _fun0025 }
case 113:
            var14 = var12.delete;
            var5 = var5.key;
            var5 = var14.bind(var12)(var5);
            if(var5) { _fun0025_ip = 114; continue _fun0025 }
case 115:
            var5 = var8;
case 114:
            var13 = var5;
case 112:
            var14 = var10.bind(var3)();
            var5 = var14.done;
            var8 = var13;
            var7 = var14;
            var1 = var8;
            if(!var5) { _fun0025_ip = 40; continue _fun0025 }
case 109:
            var5 = _closure1_slot19;
            var8 = var5.bind(var3)(var6);
            var6 = var8.bind(var3)();
            var5 = var6.done;
            var7 = var1;
            var1 = var7;
            if(var5) { _fun0025_ip = 116; continue _fun0025 }
case 117:
            var5 = var6.value;
            var12 = _closure1_slot29;
            var19 = var5.userId;
            var18 = var5.applicationId;
            var17 = var5.applicationName;
            var16 = var5.endedAt;
            var21 = undefined;
            var20 = var4;
            var9 = var21[var12](var20, var19, var18, var17, var16, var15);
            if(var9) { _fun0025_ip = 118; continue _fun0025 }
case 119:
            var9 = var7;
case 118:
            var10 = var8.bind(var3)();
            var5 = var10.done;
            var7 = var9;
            var6 = var10;
            var1 = var7;
            if(!var5) { _fun0025_ip = 117; continue _fun0025 }
case 116:
            if(!var1) { _fun0025_ip = 120; continue _fun0025 }
case 121:
            var5 = _closure1_slot25;
            var5 = var5.bind(var3)(var4);
            var2 = _closure1_slot26;
            var2 = var2.bind(var3)(var4);
case 120:
            return var1;
case 104:
            var1 = false;
            return var1;
        }
    };
    var2['VOICE_CHANNEL_HISTORY_FETCH_COMPLETE'] = var10;
    var10 = function updateLastFetchTime(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.timestamp;
        var2 = _closure1_slot14;
        var1 = var2.set;
        var1 = var1.bind(var2)(var4, var3);
        var1 = undefined;
        return var1;
    };
    var2['VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME'] = var10;
    var9 = function handleConnectionOpen() {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = _closure1_slot13;
            var3 = var1.size;
            var1 = 0;
            var1 = var1 !== var3;
            if(!var1) { _fun0027_ip = 46; continue _fun0027 }
case 69:
            var4 = _closure1_slot13;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot14;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot15;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var3 = _closure1_slot16;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var1 = true;
case 46:
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var9;
    var2['RELATIONSHIP_UPDATE'] = var4;
    var2['RELATIONSHIP_ADD'] = var4;
    var2['RELATIONSHIP_REMOVE'] = var4;
    var2['LOAD_RELATIONSHIPS_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_channel_history/VoiceChannelHistoryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();