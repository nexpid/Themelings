// app/stores/VoiceStateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
            _closure1_slot22 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot24;
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
            var7 = _closure1_slot24;
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
    var _closure1_slot23 = var1;
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
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function makeParticipantPlatformKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function getRecords(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = var4[var3];
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var2 = {};
            var4[var3] = var2;
            var1 = var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function clearCall(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot15;
            var3 = _closure1_slot11;
            var5 = var4[var3];
            var3 = null;
            if(!(var3 == var5)) { _fun0006_ip = 41; continue _fun0006 }
case 7:
            var5 = {};
case 41:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.each;
            var2 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.channelId;
                    var1 = _closure2_slot0;
                    if(!(var2 === var1)) { _fun0007_ip = 9; continue _fun0007 }
case 42:
                    var5 = _closure1_slot29;
                    var4 = _closure1_slot11;
                    var3 = undefined;
                    var2 = arg2;
                    var1 = function() {
                        var1 = null;
                        return var1;
                    };
                    var1 = var5.bind(var3)(var4, var2, var1);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function getOrCreateUsersWithVideo(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot17;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var5 = var3;
            var2 = new var5[var2](var4);
            var1 = var2 instanceof Object ? var2 : var3;
case 43:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function updateVoiceState(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var8 = arg1;
            var6 = arg2;
            var4 = _closure1_slot26;
            var3 = _closure1_slot15;
            var7 = null;
            var2 = var8;
            if(!(var7 == var8)) { _fun0009_ip = 7; continue _fun0009 }
case 44:
            var2 = _closure1_slot11;
case 7:
            var5 = undefined;
            var2 = var4.bind(var5)(var3, var2);
            var3 = var2[var6];
            var4 = arg3;
            var4 = var4.bind(var5)(var3);
            if(!(var3 !== var4)) { _fun0009_ip = 45; continue _fun0009 }
case 46:
            if(!(var7 != var3)) { _fun0009_ip = 47; continue _fun0009 }
case 48:
            var9 = delete var2[var6];
            var9 = var3.channelId;
            if(!(var7 != var9)) { _fun0009_ip = 49; continue _fun0009 }
case 50:
            var11 = _closure1_slot26;
            var10 = _closure1_slot18;
            var9 = var3.channelId;
            var9 = var11.bind(var5)(var10, var9);
            var9 = delete var9[var6];
            var10 = _closure1_slot19;
            var9 = var3.channelId;
            var9 = var11.bind(var5)(var10, var9);
            var9 = delete var9[var6];
case 49:
            var9 = var3.sessionId;
            if(!(var7 != var9)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
            var10 = _closure1_slot26;
            var9 = _closure1_slot20;
            var10 = var10.bind(var5)(var9, var6);
            var9 = var3.sessionId;
            var9 = delete var10[var9];
case 51:
            var10 = var8;
            if(!(var7 == var8)) { _fun0009_ip = 53; continue _fun0009 }
case 54:
            var10 = _closure1_slot11;
case 53:
            var9 = _closure1_slot28;
            var12 = var9.bind(var5)(var10);
            var9 = var12.has;
            var9 = var9.bind(var12)(var6);
            var11 = var10;
            if(!var9) { _fun0009_ip = 47; continue _fun0009 }
case 55:
            var9 = global;
            var9 = var9.Set;
            var10 = var9.prototype;
            var10 = Object.create(var10, {constructor: {value: var9}});
            var15 = var10;
            var14 = var12;
            var9 = new var15[var9](var14, var13);
            var12 = var9 instanceof Object ? var9 : var10;
            var9 = var12.delete;
            var9 = var9.bind(var12)(var6);
            var10 = var12.size;
            var9 = 0;
            if(!(var9 !== var10)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
            var10 = _closure1_slot17;
            var9 = var10.set;
            var9 = var9.bind(var10)(var11, var12);
            _fun0009_ip = 47; continue _fun0009;
case 56:
            var10 = _closure1_slot17;
            var9 = var10.delete;
            var9 = var9.bind(var10)(var11);
case 47:
            if(!(var7 != var4)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var2[var6] = var4;
            var2 = var4.channelId;
            if(!(var7 != var2)) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var10 = _closure1_slot26;
            var9 = _closure1_slot18;
            var2 = var4.channelId;
            var2 = var10.bind(var5)(var9, var2);
            var2[var6] = var4;
            var2 = var4.selfVideo;
            if(!var2) { _fun0009_ip = 60; continue _fun0009 }
case 62:
            var10 = _closure1_slot26;
            var9 = _closure1_slot19;
            var2 = var4.channelId;
            var2 = var10.bind(var5)(var9, var2);
            var2[var6] = var4;
            if(!(var7 == var8)) { _fun0009_ip = 63; continue _fun0009 }
case 64:
            var8 = _closure1_slot11;
case 63:
            var2 = _closure1_slot28;
            var9 = var2.bind(var5)(var8);
            var2 = var9.has;
            var2 = var2.bind(var9)(var6);
            var10 = var8;
            if(var2) { _fun0009_ip = 60; continue _fun0009 }
case 65:
            var2 = global;
            var2 = var2.Set;
            var8 = var2.prototype;
            var8 = Object.create(var8, {constructor: {value: var2}});
            var15 = var8;
            var14 = var9;
            var2 = new var15[var2](var14, var13);
            var9 = var2 instanceof Object ? var2 : var8;
            var2 = var9.add;
            var2 = var2.bind(var9)(var6);
            var8 = _closure1_slot17;
            var2 = var8.set;
            var2 = var2.bind(var8)(var10, var9);
case 60:
            var2 = var4.sessionId;
            if(!(var7 != var2)) { _fun0009_ip = 58; continue _fun0009 }
case 66:
            var2 = _closure1_slot26;
            var1 = _closure1_slot20;
            var2 = var2.bind(var5)(var1, var6);
            var1 = var4.sessionId;
            var2[var1] = var4;
case 58:
            var1 = new Array(3);
            var2 = true;
            var1[0] = var2;
            var1[1] = var4;
            var1[2] = var3;
            _fun0009_ip = 67; continue _fun0009;
case 45:
            var2 = new Array(3);
            var5 = false;
            var2[0] = var5;
            var2[1] = var4;
            var2[2] = var3;
            var1 = var2;
case 67:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function mergeVoiceState(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot29;
        var4 = var2.userId;
        var3 = undefined;
        var2 = arg1;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var1 = _closure2_slot0;
                var3 = var1.channelId;
                var1 = null;
                if(!(var1 != var3)) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                var4 = {};
                var2 = _closure2_slot0;
                var3 = var2.channelId;
                var4['channelId'] = var3;
                var3 = var2.deaf;
                var4['deaf'] = var3;
                var3 = var2.mute;
                var4['mute'] = var3;
                var3 = var2.requestToSpeakTimestamp;
                var4['requestToSpeakTimestamp'] = var3;
                var3 = var2.selfDeaf;
                var4['selfDeaf'] = var3;
                var3 = var2.selfMute;
                var4['selfMute'] = var3;
                var3 = var2.selfStream;
                var4['selfStream'] = var3;
                var3 = var2.selfVideo;
                var4['selfVideo'] = var3;
                var3 = var2.sessionId;
                var4['sessionId'] = var3;
                var3 = var2.suppress;
                var4['suppress'] = var3;
                var3 = var2.userId;
                var4['userId'] = var3;
                var2 = var2.discoverable;
                var4['discoverable'] = var2;
                if(!(var1 == var5)) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                var2 = _closure1_slot10;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var7 = var3;
                var6 = var4;
                var2 = new var7[var2](var6, var5);
                var2 = var2 instanceof Object ? var2 : var3;
                _fun0010_ip = 26; continue _fun0010;
case 70:
                var3 = var5.merge;
                var2 = var3.bind(var5)(var4);
case 26:
                return var2;
case 68:
                return var1;
            }
        };
        var1 = var5.bind(var3)(var2, var4, var1);
        return var1;
    };
    var _closure1_slot30 = var1;
    var9 = function handleGuildCreateOrDelete(arg1) {
        var1 = arg1;
        var2 = var1.guild;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 9;
        var5 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var5);
        var6 = var7.forEach;
        var8 = _closure1_slot15;
        var5 = var2.id;
        var5 = var8[var5];
        var4 = function(arg1) {
            var5 = _closure1_slot29;
            var1 = _closure2_slot0;
            var4 = var1.id;
            var1 = arg1;
            var3 = var1.userId;
            var1 = undefined;
            var2 = function() {
                var1 = null;
                return var1;
            };
            var2 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var4 = var6.bind(var7)(var5, var4);
        var3 = _closure1_slot15;
        var2 = var2.id;
        var2 = delete var3[var2];
        return var1;
    };
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var8 = 0;
    var10 = var6[var8];
    var1 = undefined;
    var10 = var7.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 1;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 2;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 3;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 4;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 5;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot9 = var10;
    var10 = 6;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot10 = var10;
    var10 = 7;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.ME;
    var _closure1_slot11 = var10;
    var10 = 8;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.VoicePlatforms;
    var _closure1_slot12 = var10;
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var8;
    var8 = {};
    var _closure1_slot15 = var8;
    var8 = var2.Set;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var15 = var10;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot16 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot17 = var2;
    var2 = {};
    var _closure1_slot18 = var2;
    var2 = {};
    var _closure1_slot19 = var2;
    var2 = {};
    var _closure1_slot20 = var2;
    var2 = {};
    var _closure1_slot21 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function VoiceStateStore() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
                var1 = _closure1_slot22;
                var1 = var1.bind(var3)();
                if(var1) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0011_ip = 74; continue _fun0011;
case 72:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 74:
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
        var1 = 'getAllVoiceStates';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(19);
        var1[0] = var5;
        var5 = {};
        var7 = 'getVoiceStateVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getVoiceStates';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arg1;
                var3 = _closure1_slot26;
                var2 = _closure1_slot15;
                var5 = null;
                if(!(var5 == var4)) { _fun0012_ip = 69; continue _fun0012 }
case 33:
                var4 = _closure1_slot11;
case 69:
                var1 = undefined;
                var1 = var3.bind(var1)(var2, var4);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getVoiceStatesForChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot26;
            var3 = _closure1_slot18;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getVideoVoiceStatesForChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot26;
            var3 = _closure1_slot19;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getVoiceState';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = this;
            var2 = var3.getVoiceStates;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = arg2;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getDiscoverableVoiceState';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = this;
                var3 = var4.getVoiceState;
                var2 = arg1;
                var1 = arg2;
                var2 = var3.bind(var4)(var2, var1);
                var5 = null;
                var3 = var5 == var2;
                var1 = null;
                if(var3) { _fun0013_ip = 9; continue _fun0013 }
case 41:
                var4 = var2.discoverable;
                var3 = false;
                var1 = null;
                if(!(var3 !== var4)) { _fun0013_ip = 9; continue _fun0013 }
case 6:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getVoiceStateForChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = arguments[1];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0014_ip = 40; continue _fun0014 }
case 75:
                var3 = _closure1_slot2;
case 40:
                var5 = _closure1_slot26;
                var4 = _closure1_slot18;
                var2 = arg1;
                var2 = var5.bind(var1)(var4, var2);
                var4 = null;
                var4 = var4 == var2;
                var1 = undefined;
                if(var4) { _fun0014_ip = 73; continue _fun0014 }
case 76:
                var1 = var2[var3];
case 73:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getVoiceStateForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var6 = _closure1_slot26;
            var5 = _closure1_slot20;
            var4 = undefined;
            var1 = arg1;
            var1 = var6.bind(var4)(var5, var1);
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getDiscoverableVoiceStateForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var6 = _closure1_slot26;
            var5 = _closure1_slot20;
            var4 = undefined;
            var1 = arg1;
            var1 = var6.bind(var4)(var5, var1);
            var3 = var2.bind(var3)(var1);
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.discoverable;
                var1 = false;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getVoiceStateForSession';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = arg2;
                var5 = null;
                var2 = var5 != var4;
                var1 = null;
                if(!var2) { _fun0015_ip = 77; continue _fun0015 }
case 36:
                var7 = _closure1_slot26;
                var6 = _closure1_slot20;
                var2 = undefined;
                var3 = arg1;
                var3 = var7.bind(var2)(var6, var3);
                var5 = var5 == var3;
                if(var5) { _fun0015_ip = 76; continue _fun0015 }
case 78:
                var2 = var3[var4];
case 76:
                var1 = var2;
case 77:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getUserVoiceChannelId';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = this;
                var3 = var4.getVoiceState;
                var2 = arg1;
                var1 = arg2;
                var2 = var3.bind(var4)(var2, var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0016_ip = 79; continue _fun0016 }
case 41:
                var1 = var2.channelId;
case 79:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getCurrentClientVoiceChannelId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var5 = this;
                var4 = var5.getVoiceState;
                var2 = _closure1_slot2;
                var1 = arg1;
                var2 = var4.bind(var5)(var1, var2);
                var5 = null;
                var4 = var5 != var2;
                var1 = null;
                if(!var4) { _fun0017_ip = 3; continue _fun0017 }
case 80:
                var4 = _closure1_slot3;
                var4 = var5 != var4;
                var1 = null;
                if(!var4) { _fun0017_ip = 3; continue _fun0017 }
case 9:
                var4 = var2.sessionId;
                var3 = _closure1_slot3;
                var1 = null;
                if(!(var4 === var3)) { _fun0017_ip = 3; continue _fun0017 }
case 81:
                var1 = var2.channelId;
case 3:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getUsersWithVideo';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var4 = _closure1_slot17;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0018_ip = 7; continue _fun0018 }
case 44:
                var1 = _closure1_slot16;
case 7:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'isCurrentClientInVoiceChannel';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = _closure1_slot3;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0019_ip = 9; continue _fun0019 }
case 40:
                var5 = _closure1_slot20;
                var2 = _closure1_slot2;
                var5 = var5[var2];
                var6 = var3 == var5;
                var2 = undefined;
                if(var6) { _fun0019_ip = 82; continue _fun0019 }
case 79:
                var4 = _closure1_slot3;
                var2 = var5[var4];
case 82:
                var1 = var3 != var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isInChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var4 = arg1;
                var3 = arguments[1];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0020_ip = 83; continue _fun0020 }
case 84:
                var3 = _closure1_slot2;
case 83:
                var6 = null;
                if(!(var6 != var4)) { _fun0020_ip = 85; continue _fun0020 }
case 38:
                var1 = var2.getVoiceStateForChannel;
                var5 = var1.bind(var2)(var4, var3);
                var1 = var6 != var5;
                if(!var1) { _fun0020_ip = 86; continue _fun0020 }
case 76:
                var2 = _closure1_slot2;
                var2 = var3 !== var2;
                if(var2) { _fun0020_ip = 87; continue _fun0020 }
case 11:
                var3 = _closure1_slot3;
                var3 = var6 != var3;
                if(!var3) { _fun0020_ip = 13; continue _fun0020 }
case 5:
                var5 = var5.sessionId;
                var4 = _closure1_slot3;
                var3 = var5 === var4;
case 13:
                var2 = var3;
case 87:
                var1 = var2;
case 86:
                return var1;
case 85:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'hasVideo';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var6 = _closure1_slot26;
            var5 = _closure1_slot19;
            var4 = undefined;
            var1 = arg1;
            var1 = var6.bind(var4)(var5, var1);
            var1 = var2.bind(var3)(var1);
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getVoicePlatformForChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var6 = arg1;
                var5 = arg2;
                var1 = _closure1_slot3;
                var7 = null;
                var1 = var7 != var1;
                if(!var1) { _fun0021_ip = 88; continue _fun0021 }
case 83:
                var4 = _closure1_slot20;
                var3 = _closure1_slot2;
                var9 = var4[var3];
                var4 = var7 == var9;
                var3 = undefined;
                if(var4) { _fun0021_ip = 81; continue _fun0021 }
case 78:
                var4 = _closure1_slot3;
                var4 = var9[var4];
                var7 = var7 == var4;
                var3 = undefined;
                if(var7) { _fun0021_ip = 81; continue _fun0021 }
case 89:
                var3 = var4.channelId;
case 81:
                var1 = var3;
case 88:
                var3 = _closure1_slot2;
                if(!(var5 === var3)) { _fun0021_ip = 90; continue _fun0021 }
case 91:
                if(!(var6 !== var1)) { _fun0021_ip = 92; continue _fun0021 }
case 90:
                var3 = _closure1_slot21;
                var4 = _closure1_slot25;
                var1 = undefined;
                var1 = var4.bind(var1)(var5, var6);
                var1 = var3[var1];
                _fun0021_ip = 93; continue _fun0021;
case 92:
                var2 = _closure1_slot12;
                var1 = var2.MOBILE;
case 93:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'userHasBeenMovedVersion';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var6;
        var1[18] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'VoiceStateStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConnectionOpen(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var4 = var1.user;
            var3 = var1.sessionId;
            var5 = _closure1_slot2;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0022_ip = 78; continue _fun0022 }
case 7:
            var6 = _closure1_slot2;
            var5 = var4.id;
            var1 = var6 !== var5;
case 78:
            if(!var1) { _fun0022_ip = 94; continue _fun0022 }
case 6:
            var5 = {};
            _closure1_slot15 = var5;
            var5 = {};
            _closure1_slot18 = var5;
            var5 = {};
            _closure1_slot20 = var5;
            var5 = {};
            _closure1_slot19 = var5;
            var6 = _closure1_slot17;
            var5 = var6.clear;
            var5 = var5.bind(var6)();
case 94:
            var4 = var4.id;
            var _closure1_slot2 = var4;
            var _closure1_slot3 = var3;
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleConnectionOpenSupplemental() {
        var2 = {};
        _closure1_slot15 = var2;
        var2 = {};
        _closure1_slot18 = var2;
        var2 = {};
        _closure1_slot20 = var2;
        var2 = {};
        _closure1_slot19 = var2;
        var2 = _closure1_slot17;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var10;
    var10 = function handleOverlayInitialize(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var7 = var1.voiceStates;
            var4 = var1.user;
            var3 = var1.sessionId;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var5 = {};
            _closure1_slot15 = var5;
            var5 = {};
            _closure1_slot18 = var5;
            var5 = {};
            _closure1_slot20 = var5;
            var5 = {};
            _closure1_slot19 = var5;
            var11 = global;
            var6 = var11.Object;
            var5 = var6.entries;
            var10 = var5.bind(var6)(var7);
            var5 = var10.length;
            var9 = 0;
            var5 = var9 < var5;
            var8 = 2;
            var7 = 1;
            var6 = 0;
            if(!var5) { _fun0023_ip = 95; continue _fun0023 }
case 96:
            var13 = var10[var6];
            var5 = _closure1_slot9;
            var5 = var5.bind(var1)(var13, var8);
            var13 = var5[var9];
            _closure2_slot0 = var13;
            var14 = var5[var7];
            var15 = function _loop(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot29;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = function() {
                    var3 = _closure1_slot10;
                    var4 = _closure3_slot0;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var13 = var11.Object;
            var5 = var13.entries;
            var14 = var5.bind(var13)(var14);
            var5 = var14.length;
            var5 = var9 < var5;
            var13 = 0;
            if(!var5) { _fun0023_ip = 26; continue _fun0023 }
case 71:
            var16 = var14[var13];
            var5 = _closure1_slot9;
            var5 = var5.bind(var1)(var16, var8);
            var16 = var5[var9];
            _closure2_slot1 = var16;
            var5 = var5[var7];
            var5 = var15.bind(var1)(var5);
            var13 = var13 + 1;
            var5 = var14.length;
            if(var13 < var5) { _fun0023_ip = 71; continue _fun0023 }
case 26:
            var6 = var6 + 1;
            var5 = var10.length;
            if(var6 < var5) { _fun0023_ip = 96; continue _fun0023 }
case 95:
            var4 = var4.id;
            _closure1_slot2 = var4;
            _closure1_slot3 = var3;
            return var1;
        }
    };
    var2['OVERLAY_INITIALIZE'] = var10;
    var10 = function handleVoiceChannelSelect(arg1) {
        var1 = arg1;
        var6 = var1.guildId;
        var1 = var1.channelId;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot29;
        var3 = _closure1_slot2;
        var4 = undefined;
        var2 = function(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var5 = arg1;
                var1 = null;
                var2 = var1 == var5;
                var1 = undefined;
                if(var2) { _fun0024_ip = 80; continue _fun0024 }
case 36:
                var4 = var5.set;
                var3 = _closure2_slot0;
                var2 = 'channelId';
                var1 = var4.bind(var5)(var2, var3);
case 80:
                return var1;
            }
        };
        var3 = var5.bind(var4)(var6, var3, var2);
        var2 = _closure1_slot9;
        var1 = 1;
        var2 = var2.bind(var4)(var3, var1);
        var1 = 0;
        var1 = var2[var1];
        return var1;
    };
    var2['VOICE_CHANNEL_SELECT'] = var10;
    var10 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var1 = arg1;
                var2 = arg2;
                var5 = _closure1_slot30;
                var4 = var2.guildId;
                var7 = undefined;
                var6 = var5.bind(var7)(var4, var2);
                var5 = _closure1_slot9;
                var4 = 3;
                var8 = var5.bind(var7)(var6, var4);
                var4 = 0;
                var7 = var8[var4];
                var4 = 1;
                var5 = var8[var4];
                var6 = 2;
                var6 = var8[var6];
                if(!var7) { _fun0025_ip = 97; continue _fun0025 }
case 98:
                var7 = var2.sessionId;
                var2 = _closure1_slot3;
                var2 = var7 === var2;
                if(!var2) { _fun0025_ip = 99; continue _fun0025 }
case 100:
                var7 = null;
                var2 = var7 != var5;
case 99:
                if(!var2) { _fun0025_ip = 85; continue _fun0025 }
case 101:
                var7 = null;
                var2 = var7 != var6;
case 85:
                if(!var2) { _fun0025_ip = 102; continue _fun0025 }
case 103:
                var6 = var6.channelId;
                var5 = var5.channelId;
                var2 = var6 !== var5;
case 102:
                if(!var2) { _fun0025_ip = 104; continue _fun0025 }
case 105:
                var2 = _closure1_slot13;
                var2 = var2 + var4;
                _closure1_slot13 = var2;
case 104:
                var2 = _closure1_slot14;
                var2 = var2 + 1;
                _closure1_slot14 = var2;
                var1 = true;
case 97:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var10;
    var2['GUILD_DELETE'] = var9;
    var2['GUILD_CREATE'] = var9;
    var9 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = _closure1_slot27;
        var2 = var1.id;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var9;
    var9 = function handleCallDelete(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot27;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['CALL_DELETE'] = var9;
    var9 = function handlePassiveUpdateV2(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var8 = arg1;
            var2 = _closure1_slot23;
            var1 = var8.voiceStates;
            var7 = undefined;
            var11 = var2.bind(var7)(var1);
            var4 = var11.bind(var7)();
            var2 = var4.done;
            var10 = 1;
            var6 = 0;
            var5 = var4;
            var4 = false;
            var1 = false;
            if(var2) { _fun0026_ip = 106; continue _fun0026 }
case 9:
            var13 = var5.value;
            var12 = _closure1_slot30;
            var2 = var8.guildId;
            var12 = var12.bind(var7)(var2, var13);
            var2 = _closure1_slot9;
            var2 = var2.bind(var7)(var12, var10);
            var2 = var2[var6];
            if(var4) { _fun0026_ip = 87; continue _fun0026 }
case 13:
            var4 = var2;
case 87:
            var13 = var11.bind(var7)();
            var2 = var13.done;
            var5 = var13;
            var1 = var4;
            if(!var2) { _fun0026_ip = 9; continue _fun0026 }
case 106:
            var4 = _closure1_slot23;
            var2 = var8.removedVoiceStateUsers;
            var6 = var4.bind(var7)(var2);
            var4 = var6.bind(var7)();
            var2 = var4.done;
            if(var2) { _fun0026_ip = 107; continue _fun0026 }
case 108:
            var12 = var4.value;
            var11 = _closure1_slot29;
            var10 = var8.guildId;
            var2 = function() {
                var1 = null;
                return var1;
            };
            var2 = var11.bind(var7)(var10, var12, var2);
            var10 = var6.bind(var7)();
            var2 = var10.done;
            var4 = var10;
            var1 = true;
            if(!var2) { _fun0026_ip = 108; continue _fun0026 }
case 107:
            if(!var1) { _fun0026_ip = 109; continue _fun0026 }
case 110:
            var2 = _closure1_slot14;
            var2 = var2 + 1;
            _closure1_slot14 = var2;
case 109:
            return var1;
        }
    };
    var2['PASSIVE_UPDATE_V2'] = var9;
    var4 = function handleRTCConnectionPlatform(arg1) {
        var1 = arg1;
        var6 = var1.userId;
        var5 = var1.channelId;
        var4 = var1.platform;
        var3 = _closure1_slot21;
        var2 = _closure1_slot25;
        var1 = undefined;
        var2 = var2.bind(var1)(var6, var5);
        var3[var2] = var4;
        return var1;
    };
    var2['RTC_CONNECTION_PLATFORM'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/VoiceStateStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();