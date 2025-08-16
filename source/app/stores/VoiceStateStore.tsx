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
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot24;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot24;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
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
 0:
            var4 = arg1;
            var3 = arg2;
            var1 = var4[var3];
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 25; continue _fun0005 }
 16:
            var2 = {};
            var4[var3] = var2;
            var1 = var2;
 25:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function clearCall(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot15;
            var1 = _closure1_slot11;
            var7 = var4[var1];
            var1 = null;
            if(!(var1 == var7)) { _fun0006_ip = 32; continue _fun0006 }
 30:
            var7 = {};
 32:
            var4 = {};
            var _closure2_slot1 = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 9;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.each;
            var3 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.channelId;
                    var2 = _closure2_slot0;
                    if(!(var4 !== var2)) { _fun0007_ip = 30; continue _fun0007 }
 19:
                    var2 = _closure2_slot1;
                    var1 = arg2;
                    var2[var1] = var3;
 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var7, var3);
            var3 = _closure1_slot15;
            var2 = _closure1_slot11;
            var3[var2] = var4;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function getOrCreateUsersWithVideo(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = _closure1_slot17;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0008_ip = 54; continue _fun0008 }
 26:
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var5 = var3;
            var2 = new var5[var2](var4);
            var1 = var2 instanceof Object ? var2 : var3;
 54:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function updateVoiceState(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var8 = arg1;
            var6 = arg2;
            var4 = _closure1_slot26;
            var3 = _closure1_slot15;
            var7 = null;
            var2 = var8;
            if(!(var7 == var8)) { _fun0009_ip = 30; continue _fun0009 }
 26:
            var2 = _closure1_slot11;
 30:
            var5 = undefined;
            var2 = var4.bind(var5)(var3, var2);
            var3 = var2[var6];
            var4 = arg3;
            var4 = var4.bind(var5)(var3);
            if(!(var3 !== var4)) { _fun0009_ip = 493; continue _fun0009 }
 57:
            if(!(var7 != var3)) { _fun0009_ip = 272; continue _fun0009 }
 64:
            var9 = delete var2[var6];
            var9 = var3.channelId;
            if(!(var7 != var9)) { _fun0009_ip = 119; continue _fun0009 }
 77:
            var11 = _closure1_slot26;
            var10 = _closure1_slot18;
            var9 = var3.channelId;
            var9 = var11.bind(var5)(var10, var9);
            var9 = delete var9[var6];
            var10 = _closure1_slot19;
            var9 = var3.channelId;
            var9 = var11.bind(var5)(var10, var9);
            var9 = delete var9[var6];
 119:
            var9 = var3.sessionId;
            if(!(var7 != var9)) { _fun0009_ip = 153; continue _fun0009 }
 129:
            var10 = _closure1_slot26;
            var9 = _closure1_slot20;
            var10 = var10.bind(var5)(var9, var6);
            var9 = var3.sessionId;
            var9 = delete var10[var9];
 153:
            var10 = var8;
            if(!(var7 == var8)) { _fun0009_ip = 164; continue _fun0009 }
 160:
            var10 = _closure1_slot11;
 164:
            var9 = _closure1_slot28;
            var12 = var9.bind(var5)(var10);
            var9 = var12.has;
            var9 = var9.bind(var12)(var6);
            var11 = var10;
            if(!var9) { _fun0009_ip = 272; continue _fun0009 }
 189:
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
            if(!(var9 !== var10)) { _fun0009_ip = 258; continue _fun0009 }
 241:
            var10 = _closure1_slot17;
            var9 = var10.set;
            var9 = var9.bind(var10)(var11, var12);
            _fun0009_ip = 272; continue _fun0009;
 258:
            var10 = _closure1_slot17;
            var9 = var10.delete;
            var9 = var9.bind(var10)(var11);
 272:
            if(!(var7 != var4)) { _fun0009_ip = 473; continue _fun0009 }
 279:
            var2[var6] = var4;
            var2 = var4.channelId;
            if(!(var7 != var2)) { _fun0009_ip = 439; continue _fun0009 }
 295:
            var10 = _closure1_slot26;
            var9 = _closure1_slot18;
            var2 = var4.channelId;
            var2 = var10.bind(var5)(var9, var2);
            var2[var6] = var4;
            var2 = var4.selfVideo;
            if(!var2) { _fun0009_ip = 439; continue _fun0009 }
 327:
            var10 = _closure1_slot26;
            var9 = _closure1_slot19;
            var2 = var4.channelId;
            var2 = var10.bind(var5)(var9, var2);
            var2[var6] = var4;
            if(!(var7 == var8)) { _fun0009_ip = 358; continue _fun0009 }
 354:
            var8 = _closure1_slot11;
 358:
            var2 = _closure1_slot28;
            var9 = var2.bind(var5)(var8);
            var2 = var9.has;
            var2 = var2.bind(var9)(var6);
            var10 = var8;
            if(var2) { _fun0009_ip = 439; continue _fun0009 }
 383:
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
 439:
            var2 = var4.sessionId;
            if(!(var7 != var2)) { _fun0009_ip = 473; continue _fun0009 }
 449:
            var2 = _closure1_slot26;
            var1 = _closure1_slot20;
            var2 = var2.bind(var5)(var1, var6);
            var1 = var4.sessionId;
            var2[var1] = var4;
 473:
            var1 = new Array(3);
            var2 = true;
            var1[0] = var2;
            var1[1] = var4;
            var1[2] = var3;
            _fun0009_ip = 514; continue _fun0009;
 493:
            var2 = new Array(3);
            var5 = false;
            var2[0] = var5;
            var2[1] = var4;
            var2[2] = var3;
            var1 = var2;
 514:
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
 0:
                var5 = arg1;
                var1 = _closure2_slot0;
                var3 = var1.channelId;
                var1 = null;
                if(!(var1 != var3)) { _fun0010_ip = 207; continue _fun0010 }
 24:
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
                if(!(var1 == var5)) { _fun0010_ip = 194; continue _fun0010 }
 162:
                var2 = _closure1_slot10;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var7 = var3;
                var6 = var4;
                var2 = new var7[var2](var6, var5);
                var2 = var2 instanceof Object ? var2 : var3;
                _fun0010_ip = 205; continue _fun0010;
 194:
                var3 = var5.merge;
                var2 = var3.bind(var5)(var4);
 205:
                return var2;
 207:
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
                var1 = _closure1_slot22;
                var1 = var1.bind(var3)();
                if(var1) { _fun0011_ip = 69; continue _fun0011 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0011_ip = 105; continue _fun0011;
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
 0:
                var4 = arg1;
                var3 = _closure1_slot26;
                var2 = _closure1_slot15;
                var5 = null;
                if(!(var5 == var4)) { _fun0012_ip = 24; continue _fun0012 }
 20:
                var4 = _closure1_slot11;
 24:
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
 0:
                var4 = this;
                var3 = var4.getVoiceState;
                var2 = arg1;
                var1 = arg2;
                var2 = var3.bind(var4)(var2, var1);
                var5 = null;
                var3 = var5 == var2;
                var1 = null;
                if(var3) { _fun0013_ip = 49; continue _fun0013 }
 32:
                var4 = var2.discoverable;
                var3 = false;
                var1 = null;
                if(!(var3 !== var4)) { _fun0013_ip = 49; continue _fun0013 }
 46:
                var1 = var2;
 49:
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
 0:
                var3 = arguments[1];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0014_ip = 16; continue _fun0014 }
 9:
                var3 = _closure1_slot2;
 16:
                var5 = _closure1_slot26;
                var4 = _closure1_slot18;
                var2 = arg1;
                var2 = var5.bind(var1)(var4, var2);
                var4 = null;
                var4 = var4 == var2;
                var1 = undefined;
                if(var4) { _fun0014_ip = 51; continue _fun0014 }
 47:
                var1 = var2[var3];
 51:
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
 0:
                var4 = arg2;
                var5 = null;
                var2 = var5 != var4;
                var1 = null;
                if(!var2) { _fun0015_ip = 50; continue _fun0015 }
 14:
                var7 = _closure1_slot26;
                var6 = _closure1_slot20;
                var2 = undefined;
                var3 = arg1;
                var3 = var7.bind(var2)(var6, var3);
                var5 = var5 == var3;
                if(var5) { _fun0015_ip = 47; continue _fun0015 }
 43:
                var2 = var3[var4];
 47:
                var1 = var2;
 50:
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
 0:
                var4 = this;
                var3 = var4.getVoiceState;
                var2 = arg1;
                var1 = arg2;
                var2 = var3.bind(var4)(var2, var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0016_ip = 37; continue _fun0016 }
 32:
                var1 = var2.channelId;
 37:
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
 0:
                var5 = this;
                var4 = var5.getVoiceState;
                var2 = _closure1_slot2;
                var1 = arg1;
                var2 = var4.bind(var5)(var1, var2);
                var5 = null;
                var4 = var5 != var2;
                var1 = null;
                if(!var4) { _fun0017_ip = 70; continue _fun0017 }
 36:
                var4 = _closure1_slot3;
                var4 = var5 != var4;
                var1 = null;
                if(!var4) { _fun0017_ip = 70; continue _fun0017 }
 49:
                var4 = var2.sessionId;
                var3 = _closure1_slot3;
                var1 = null;
                if(!(var4 === var3)) { _fun0017_ip = 70; continue _fun0017 }
 65:
                var1 = var2.channelId;
 70:
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
 0:
                var4 = _closure1_slot17;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0018_ip = 30; continue _fun0018 }
 26:
                var1 = _closure1_slot16;
 30:
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
 0:
                var1 = _closure1_slot3;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0019_ip = 49; continue _fun0019 }
 16:
                var5 = _closure1_slot20;
                var2 = _closure1_slot2;
                var5 = var5[var2];
                var6 = var3 == var5;
                var2 = undefined;
                if(var6) { _fun0019_ip = 45; continue _fun0019 }
 37:
                var4 = _closure1_slot3;
                var2 = var5[var4];
 45:
                var1 = var3 != var2;
 49:
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
 0:
                var4 = arg1;
                var3 = arguments[1];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0020_ip = 22; continue _fun0020 }
 15:
                var3 = _closure1_slot2;
 22:
                var6 = null;
                if(!(var6 != var4)) { _fun0020_ip = 94; continue _fun0020 }
 28:
                var1 = var2.getVoiceStateForChannel;
                var5 = var1.bind(var2)(var4, var3);
                var1 = var6 != var5;
                if(!var1) { _fun0020_ip = 92; continue _fun0020 }
 47:
                var2 = _closure1_slot2;
                var2 = var3 !== var2;
                if(var2) { _fun0020_ip = 89; continue _fun0020 }
 61:
                var3 = _closure1_slot3;
                var3 = var6 != var3;
                if(!var3) { _fun0020_ip = 86; continue _fun0020 }
 72:
                var5 = var5.sessionId;
                var4 = _closure1_slot3;
                var3 = var5 === var4;
 86:
                var2 = var3;
 89:
                var1 = var2;
 92:
                return var1;
 94:
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
 0:
                var6 = arg1;
                var5 = arg2;
                var1 = _closure1_slot3;
                var7 = null;
                var1 = var7 != var1;
                if(!var1) { _fun0021_ip = 68; continue _fun0021 }
 22:
                var4 = _closure1_slot20;
                var3 = _closure1_slot2;
                var9 = var4[var3];
                var4 = var7 == var9;
                var3 = undefined;
                if(var4) { _fun0021_ip = 65; continue _fun0021 }
 43:
                var4 = _closure1_slot3;
                var4 = var9[var4];
                var7 = var7 == var4;
                var3 = undefined;
                if(var7) { _fun0021_ip = 65; continue _fun0021 }
 60:
                var3 = var4.channelId;
 65:
                var1 = var3;
 68:
                var3 = _closure1_slot2;
                if(!(var5 === var3)) { _fun0021_ip = 80; continue _fun0021 }
 76:
                if(!(var6 !== var1)) { _fun0021_ip = 102; continue _fun0021 }
 80:
                var3 = _closure1_slot21;
                var4 = _closure1_slot25;
                var1 = undefined;
                var1 = var4.bind(var1)(var5, var6);
                var1 = var3[var1];
                _fun0021_ip = 112; continue _fun0021;
 102:
                var2 = _closure1_slot12;
                var1 = var2.MOBILE;
 112:
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
 0:
            var1 = arg1;
            var4 = var1.user;
            var3 = var1.sessionId;
            var5 = _closure1_slot2;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0022_ip = 43; continue _fun0022 }
 30:
            var6 = _closure1_slot2;
            var5 = var4.id;
            var1 = var6 !== var5;
 43:
            if(!var1) { _fun0022_ip = 84; continue _fun0022 }
 46:
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
 84:
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
 0:
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
            if(!var5) { _fun0023_ip = 217; continue _fun0023 }
 100:
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
            if(!var5) { _fun0023_ip = 205; continue _fun0023 }
 162:
            var16 = var14[var13];
            var5 = _closure1_slot9;
            var5 = var5.bind(var1)(var16, var8);
            var16 = var5[var9];
            _closure2_slot1 = var16;
            var5 = var5[var7];
            var5 = var15.bind(var1)(var5);
            var13 = var13 + 1;
            var5 = var14.length;
            if(var13 < var5) { _fun0023_ip = 162; continue _fun0023 }
 205:
            var6 = var6 + 1;
            var5 = var10.length;
            if(var6 < var5) { _fun0023_ip = 100; continue _fun0023 }
 217:
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
 0:
                var5 = arg1;
                var1 = null;
                var2 = var1 == var5;
                var1 = undefined;
                if(var2) { _fun0024_ip = 36; continue _fun0024 }
 14:
                var4 = var5.set;
                var3 = _closure2_slot0;
                var2 = 'channelId';
                var1 = var4.bind(var5)(var2, var3);
 36:
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
 0:
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
                if(!var7) { _fun0025_ip = 139; continue _fun0025 }
 62:
                var7 = var2.sessionId;
                var2 = _closure1_slot3;
                var2 = var7 === var2;
                if(!var2) { _fun0025_ip = 85; continue _fun0025 }
 79:
                var7 = null;
                var2 = var7 != var5;
 85:
                if(!var2) { _fun0025_ip = 94; continue _fun0025 }
 88:
                var7 = null;
                var2 = var7 != var6;
 94:
                if(!var2) { _fun0025_ip = 111; continue _fun0025 }
 97:
                var6 = var6.channelId;
                var5 = var5.channelId;
                var2 = var6 !== var5;
 111:
                if(!var2) { _fun0025_ip = 126; continue _fun0025 }
 114:
                var2 = _closure1_slot13;
                var2 = var2 + var4;
                _closure1_slot13 = var2;
 126:
                var2 = _closure1_slot14;
                var2 = var2 + 1;
                _closure1_slot14 = var2;
                var1 = true;
 139:
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
 0:
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
            if(var2) { _fun0026_ip = 107; continue _fun0026 }
 49:
            var13 = var5.value;
            var12 = _closure1_slot30;
            var2 = var8.guildId;
            var12 = var12.bind(var7)(var2, var13);
            var2 = _closure1_slot9;
            var2 = var2.bind(var7)(var12, var10);
            var2 = var2[var6];
            if(var4) { _fun0026_ip = 89; continue _fun0026 }
 86:
            var4 = var2;
 89:
            var13 = var11.bind(var7)();
            var2 = var13.done;
            var5 = var13;
            var1 = var4;
            if(!var2) { _fun0026_ip = 49; continue _fun0026 }
 107:
            var4 = _closure1_slot23;
            var2 = var8.removedVoiceStateUsers;
            var6 = var4.bind(var7)(var2);
            var4 = var6.bind(var7)();
            var2 = var4.done;
            if(var2) { _fun0026_ip = 177; continue _fun0026 }
 134:
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
            if(!var2) { _fun0026_ip = 134; continue _fun0026 }
 177:
            if(!var1) { _fun0026_ip = 191; continue _fun0026 }
 180:
            var2 = _closure1_slot14;
            var2 = var2 + 1;
            _closure1_slot14 = var2;
 191:
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