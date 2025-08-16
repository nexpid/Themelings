// app/stores/SpeakingStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportAll;
    var _closure1_slot0 = var1;
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
            var9 = _closure1_slot21;
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
            var7 = _closure1_slot21;
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
    var _closure1_slot20 = var1;
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
    var _closure1_slot21 = var1;
    var1 = function clearSpeakingFlagsInContext(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot15;
            var1 = var3.get;
            var3 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 66; continue _fun0005 }
 26:
            var5 = var3.delete;
            var1 = arg2;
            var1 = var5.bind(var3)(var1);
            var5 = var3.size;
            var3 = 0;
            if(!(var3 === var5)) { _fun0005_ip = 64; continue _fun0005 }
 50:
            var3 = _closure1_slot15;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
 64:
            return var1;
 66:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function hasSpeakingFlagInContext(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg3;
            var5 = _closure1_slot15;
            var4 = var5.get;
            var1 = arg1;
            var8 = var4.bind(var5)(var1);
            var4 = null;
            var5 = var4 == var8;
            var1 = undefined;
            if(var5) { _fun0006_ip = 61; continue _fun0006 }
 34:
            var6 = var8.get;
            var5 = arg2;
            var5 = var6.bind(var8)(var5);
            var6 = var4 == var5;
            var1 = undefined;
            if(var6) { _fun0006_ip = 61; continue _fun0006 }
 56:
            var1 = var5.flags;
 61:
            if(!(var4 == var1)) { _fun0006_ip = 75; continue _fun0006 }
 65:
            var3 = _closure1_slot13;
            var1 = var3.NONE;
 75:
            var1 = var1 & var2;
            var1 = var1 === var2;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function anyoneHasFlagInContext(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var10 = arg2;
            var9 = arguments[2];
            var8 = undefined;
            if(!(var9 === var8)) { _fun0007_ip = 14; continue _fun0007 }
 12:
            var9 = false;
 14:
            var3 = _closure1_slot15;
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0007_ip = 141; continue _fun0007 }
 40:
            var1 = _closure1_slot20;
            var6 = var1.bind(var8)(var2);
            var2 = var6.bind(var8)();
            var1 = var2.done;
            var5 = 2;
            var4 = 0;
            var3 = 1;
            if(var1) { _fun0007_ip = 137; continue _fun0007 }
 69:
            var11 = var2.value;
            var1 = _closure1_slot7;
            var1 = var1.bind(var8)(var11, var5);
            var12 = var1[var4];
            var1 = var1[var3];
            var1 = var1.flags;
            if(!var9) { _fun0007_ip = 108; continue _fun0007 }
 100:
            var11 = _closure1_slot16;
            if(!(var12 !== var11)) { _fun0007_ip = 116; continue _fun0007 }
 108:
            var1 = var1 & var10;
            if(!(var1 !== var10)) { _fun0007_ip = 133; continue _fun0007 }
 116:
            var11 = var6.bind(var8)();
            var1 = var11.done;
            var2 = var11;
            if(var1) { _fun0007_ip = 137; continue _fun0007 }
 131:
            _fun0007_ip = 69; continue _fun0007;
 133:
            var1 = true;
            return var1;
 137:
            var1 = false;
            return var1;
 141:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function setSpeakingFlagForUserInContext(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var6 = arg2;
            var9 = arg3;
            var7 = undefined;
            var4 = var3;
            if(!(var4 === var7)) { _fun0008_ip = 31; continue _fun0008 }
 18:
            var1 = _closure1_slot14;
            var4 = var1.DEFAULT;
 31:
            var5 = _closure1_slot15;
            var2 = var5.get;
            var2 = var2.bind(var5)(var4);
            var5 = null;
            var11 = var4;
            if(!(var5 == var2)) { _fun0008_ip = 103; continue _fun0008 }
 57:
            var4 = global;
            var4 = var4.Map;
            var8 = var4.prototype;
            var8 = Object.create(var8, {constructor: {value: var4}});
            var15 = var8;
            var4 = new var15[var4](var14);
            var4 = var4 instanceof Object ? var4 : var8;
            var10 = _closure1_slot15;
            var8 = var10.set;
            var8 = var8.bind(var10)(var11, var4);
            var2 = var4;
 103:
            var4 = var2.get;
            var8 = var4.bind(var2)(var6);
            var4 = var5 == var8;
            var11 = undefined;
            if(var4) { _fun0008_ip = 127; continue _fun0008 }
 122:
            var11 = var8.flags;
 127:
            var12 = var5 != var11;
            var4 = 0;
            var10 = 0;
            if(!var12) { _fun0008_ip = 141; continue _fun0008 }
 138:
            var10 = var11;
 141:
            if(!(var4 === var10)) { _fun0008_ip = 152; continue _fun0008 }
 145:
            if(!(var4 !== var9)) { _fun0008_ip = 332; continue _fun0008 }
 152:
            if(!(var4 !== var9)) { _fun0008_ip = 295; continue _fun0008 }
 159:
            var11 = var5 == var8;
            var7 = undefined;
            if(var11) { _fun0008_ip = 174; continue _fun0008 }
 168:
            var7 = var8.since;
 174:
            var11 = var5 != var7;
            var8 = null;
            if(!var11) { _fun0008_ip = 186; continue _fun0008 }
 183:
            var8 = var7;
 186:
            var7 = _closure1_slot13;
            var7 = var7.VOICE;
            var11 = var10 & var7;
            var7 = _closure1_slot13;
            var10 = var7.VOICE;
            var7 = _closure1_slot13;
            var7 = var7.VOICE;
            var12 = var9 & var7;
            var7 = _closure1_slot13;
            var7 = var7.VOICE;
            var7 = var12 === var7;
            var10 = var11 === var10;
            if(!(var10 !== var7)) { _fun0008_ip = 271; continue _fun0008 }
 246:
            var5 = null;
            if(!var7) { _fun0008_ip = 268; continue _fun0008 }
 251:
            var7 = global;
            var10 = var7.Date;
            var7 = var10.now;
            var5 = var7.bind(var10)();
 268:
            var8 = var5;
 271:
            var7 = var2.set;
            var5 = {};
            var5['flags'] = var9;
            var5['since'] = var8;
            var5 = var7.bind(var2)(var6, var5);
            _fun0008_ip = 328; continue _fun0008;
 295:
            var5 = var2.delete;
            var5 = var5.bind(var2)(var6);
            var2 = var2.size;
            if(!(var4 === var2)) { _fun0008_ip = 328; continue _fun0008 }
 314:
            var2 = _closure1_slot15;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 328:
            var1 = true;
            return var1;
 332:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var9 = function handleConnectionOpen(arg1) {
        var1 = arg1;
        var2 = var1.user;
        var1 = var1.sessionId;
        var3 = var2.id;
        _closure1_slot16 = var3;
        _closure1_slot17 = var1;
        var1 = null;
        _closure1_slot18 = var1;
        var1 = undefined;
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
    var1 = 0;
    var8 = var6[var1];
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
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.Permissions;
    var _closure1_slot12 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.SpeakingFlags;
    var _closure1_slot13 = var10;
    var8 = var8.MediaEngineContextTypes;
    var _closure1_slot14 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot15 = var2;
    var2 = null;
    var _closure1_slot16 = var2;
    var _closure1_slot17 = var2;
    var _closure1_slot18 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SpeakingStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 69; continue _fun0009 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 105; continue _fun0009;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.mustEmitChanges;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = 'CONNECTION_OPEN';
                    var1 = var1 !== var3;
                    if(!var1) { _fun0010_ip = 32; continue _fun0010 }
 19:
                    var3 = var2.type;
                    var2 = 'VOICE_STATE_UPDATES';
                    var1 = var2 !== var3;
 32:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var2 = var3.waitFor;
            var1 = _closure1_slot10;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSpeakingDuration';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = arguments[2];
                var5 = undefined;
                if(!(var3 === var5)) { _fun0011_ip = 22; continue _fun0011 }
 9:
                var1 = _closure1_slot14;
                var3 = var1.DEFAULT;
 22:
                var2 = _closure1_slot15;
                var1 = var2.get;
                var6 = var1.bind(var2)(var3);
                var1 = null;
                var2 = var1 == var6;
                var3 = undefined;
                if(var2) { _fun0011_ip = 78; continue _fun0011 }
 50:
                var4 = var6.get;
                var2 = arg1;
                var2 = var4.bind(var6)(var2);
                var4 = var1 == var2;
                var3 = undefined;
                if(var4) { _fun0011_ip = 78; continue _fun0011 }
 72:
                var3 = var2.since;
 78:
                var2 = var1 != var3;
                var1 = 0;
                if(!var2) { _fun0011_ip = 94; continue _fun0011 }
 87:
                var2 = arg2;
                var1 = var2 - var3;
 94:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSpeakers';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var7 = arguments[0];
                var4 = undefined;
                if(!(var7 === var4)) { _fun0012_ip = 24; continue _fun0012 }
 11:
                var2 = _closure1_slot14;
                var7 = var2.DEFAULT;
 24:
                var _closure3_slot0 = var7;
                var2 = global;
                var3 = var2.Array;
                var2 = var3.from;
                var6 = _closure1_slot15;
                var5 = var6.get;
                var7 = var5.bind(var6)(var7);
                var5 = null;
                var6 = var5 == var7;
                var4 = undefined;
                if(var6) { _fun0012_ip = 78; continue _fun0012 }
 69:
                var6 = var7.keys;
                var4 = var6.bind(var7)();
 78:
                if(!(var5 == var4)) { _fun0012_ip = 86; continue _fun0012 }
 82:
                var4 = new Array(0);
 86:
                var3 = var2.bind(var3)(var4);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var5 = _closure1_slot23;
                    var4 = _closure3_slot0;
                    var1 = _closure1_slot13;
                    var3 = var1.VOICE;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var5.bind(var2)(var4, var1, var3);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isSpeaking';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var5 = arguments[1];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0013_ip = 22; continue _fun0013 }
 9:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
 22:
                var3 = _closure1_slot23;
                var1 = _closure1_slot13;
                var2 = var1.VOICE;
                var1 = arg1;
                var1 = var3.bind(var4)(var5, var1, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isPrioritySpeaker';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var5 = arguments[1];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0014_ip = 22; continue _fun0014 }
 9:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
 22:
                var3 = _closure1_slot23;
                var1 = _closure1_slot13;
                var2 = var1.PRIORITY;
                var1 = arg1;
                var1 = var3.bind(var4)(var5, var1, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isSoundSharing';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var5 = arguments[1];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0015_ip = 22; continue _fun0015 }
 9:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
 22:
                var3 = _closure1_slot23;
                var1 = _closure1_slot13;
                var2 = var1.SOUNDSHARE;
                var1 = arg1;
                var1 = var3.bind(var4)(var5, var1, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isAnyoneElseSpeaking';
        var5['key'] = var7;
        var7 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var5 = arguments[0];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0016_ip = 22; continue _fun0016 }
 9:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
 22:
                var3 = _closure1_slot24;
                var1 = _closure1_slot13;
                var2 = var1.VOICE;
                var1 = true;
                var1 = var3.bind(var4)(var5, var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isCurrentUserSpeaking';
        var5['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var5 = arguments[0];
                var4 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0017_ip = 25; continue _fun0017 }
 12:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
 25:
                var3 = _closure1_slot16;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0017_ip = 57; continue _fun0017 }
 41:
                var3 = var4.isSpeaking;
                var2 = _closure1_slot16;
                var1 = var3.bind(var4)(var2, var5);
 57:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isAnyonePrioritySpeaking';
        var5['key'] = var7;
        var7 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var4 = arguments[0];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0018_ip = 22; continue _fun0018 }
 9:
                var1 = _closure1_slot14;
                var4 = var1.DEFAULT;
 22:
                var2 = _closure1_slot24;
                var5 = _closure1_slot13;
                var5 = var5.VOICE;
                var1 = _closure1_slot13;
                var1 = var1.PRIORITY;
                var1 = var5 | var1;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isCurrentUserPrioritySpeaker';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var5 = arguments[0];
                var4 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0019_ip = 25; continue _fun0019 }
 12:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
 25:
                var3 = _closure1_slot16;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0019_ip = 57; continue _fun0019 }
 41:
                var3 = var4.isPrioritySpeaker;
                var2 = _closure1_slot16;
                var1 = var3.bind(var4)(var2, var5);
 57:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isCurrentUserPrioritySpeaking';
        var5['key'] = var7;
        var6 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var5 = arguments[0];
                var4 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0020_ip = 25; continue _fun0020 }
 12:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
 25:
                var3 = _closure1_slot16;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0020_ip = 57; continue _fun0020 }
 41:
                var6 = var4.isPrioritySpeaker;
                var3 = _closure1_slot16;
                var1 = var6.bind(var4)(var3, var5);
 57:
                if(!var1) { _fun0020_ip = 76; continue _fun0020 }
 60:
                var3 = var4.isSpeaking;
                var2 = _closure1_slot16;
                var1 = var3.bind(var4)(var2, var5);
 76:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SpeakingStore';
    var8['displayName'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var9;
    var2['OVERLAY_INITIALIZE'] = var9;
    var9 = function handleSpeaking(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var5 = var1.context;
            var4 = var1.userId;
            var2 = var1.speakingFlags;
            var3 = _closure1_slot13;
            var3 = var3.PRIORITY;
            var7 = var2 & var3;
            var3 = _closure1_slot13;
            var6 = var3.PRIORITY;
            var3 = var2;
            if(!(var7 === var6)) { _fun0021_ip = 209; continue _fun0021 }
 56:
            var8 = _closure1_slot8;
            var7 = var8.getChannel;
            var9 = _closure1_slot11;
            var6 = var9.getVoiceChannelId;
            var6 = var6.bind(var9)();
            var9 = var7.bind(var8)(var6);
            var6 = null;
            if(!(var6 != var9)) { _fun0021_ip = 151; continue _fun0021 }
 90:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var6 = 12;
            var7 = var7[var6];
            var6 = undefined;
            var8 = var8.bind(var6)(var7);
            var7 = var8.can;
            var6 = {};
            var10 = _closure1_slot12;
            var10 = var10.PRIORITY_SPEAKER;
            var6['permission'] = var10;
            var6['user'] = var4;
            var6['context'] = var9;
            var6 = var7.bind(var8)(var6);
            if(var6) { _fun0021_ip = 188; continue _fun0021 }
 151:
            var8 = _closure1_slot9;
            var7 = var8.setCanHavePriority;
            var6 = false;
            var6 = var7.bind(var8)(var4, var6);
            var6 = _closure1_slot13;
            var6 = var6.PRIORITY;
            var6 = ~var6;
            var3 = var2 & var6;
            _fun0021_ip = 209; continue _fun0021;
 188:
            var8 = _closure1_slot9;
            var7 = var8.setCanHavePriority;
            var6 = true;
            var6 = var7.bind(var8)(var4, var6);
            var3 = var2;
 209:
            var2 = _closure1_slot13;
            var2 = var2.HIDDEN;
            var6 = var3 & var2;
            var2 = _closure1_slot13;
            var2 = var2.HIDDEN;
            if(!(var6 === var2)) { _fun0021_ip = 239; continue _fun0021 }
 237:
            var3 = 0;
 239:
            var2 = _closure1_slot25;
            var1 = undefined;
            var1 = var2.bind(var1)(var5, var4, var3);
            return var1;
        }
    };
    var2['SPEAKING'] = var9;
    var4 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var2 = arg1;
                var1 = arg2;
                var8 = var1.userId;
                var7 = var1.channelId;
                var6 = var1.sessionId;
                var9 = _closure1_slot18;
                var1 = _closure1_slot16;
                var1 = var8 === var1;
                if(!var1) { _fun0022_ip = 48; continue _fun0022 }
 40:
                var3 = _closure1_slot17;
                var1 = var6 === var3;
 48:
                if(!var1) { _fun0022_ip = 67; continue _fun0022 }
 51:
                var1 = null;
                var3 = var1 != var7;
                if(!var3) { _fun0022_ip = 63; continue _fun0022 }
 60:
                var1 = var7;
 63:
                _closure1_slot18 = var1;
 67:
                var1 = _closure1_slot18;
                var5 = false;
                if(!(var9 !== var1)) { _fun0022_ip = 109; continue _fun0022 }
 77:
                var10 = _closure1_slot15;
                var9 = var10.delete;
                var1 = _closure1_slot14;
                var1 = var1.DEFAULT;
                var1 = var9.bind(var10)(var1);
                if(var1) { _fun0022_ip = 106; continue _fun0022 }
 104:
                var1 = false;
 106:
                var5 = var1;
 109:
                var1 = null;
                if(!(var1 != var7)) { _fun0022_ip = 240; continue _fun0022 }
 118:
                var1 = _closure1_slot16;
                if(!(var8 === var1)) { _fun0022_ip = 134; continue _fun0022 }
 126:
                var1 = _closure1_slot17;
                if(!(var6 === var1)) { _fun0022_ip = 205; continue _fun0022 }
 134:
                var1 = _closure1_slot16;
                var3 = var8 !== var1;
                if(!var3) { _fun0022_ip = 163; continue _fun0022 }
 145:
                var9 = _closure1_slot10;
                var1 = var9.getChannelId;
                var1 = var1.bind(var9)();
                var3 = var7 !== var1;
 163:
                var1 = var5;
                if(!var3) { _fun0022_ip = 322; continue _fun0022 }
 172:
                var9 = _closure1_slot22;
                var3 = _closure1_slot14;
                var7 = var3.DEFAULT;
                var3 = undefined;
                var3 = var9.bind(var3)(var7, var8);
                if(var3) { _fun0022_ip = 200; continue _fun0022 }
 197:
                var3 = var5;
 200:
                var1 = var3;
                _fun0022_ip = 322; continue _fun0022;
 205:
                var9 = _closure1_slot15;
                var7 = var9.delete;
                var3 = _closure1_slot14;
                var3 = var3.DEFAULT;
                var3 = var7.bind(var9)(var3);
                if(var3) { _fun0022_ip = 235; continue _fun0022 }
 232:
                var3 = var5;
 235:
                var1 = var3;
                _fun0022_ip = 322; continue _fun0022;
 240:
                var3 = _closure1_slot16;
                if(!(var8 === var3)) { _fun0022_ip = 256; continue _fun0022 }
 248:
                var3 = _closure1_slot17;
                if(!(var6 !== var3)) { _fun0022_ip = 286; continue _fun0022 }
 256:
                var7 = _closure1_slot22;
                var3 = _closure1_slot14;
                var6 = var3.DEFAULT;
                var3 = undefined;
                var3 = var7.bind(var3)(var6, var8);
                if(var3) { _fun0022_ip = 284; continue _fun0022 }
 281:
                var3 = var5;
 284:
                _fun0022_ip = 319; continue _fun0022;
 286:
                var7 = _closure1_slot15;
                var6 = var7.delete;
                var4 = _closure1_slot14;
                var4 = var4.DEFAULT;
                var4 = var6.bind(var7)(var4);
                if(var4) { _fun0022_ip = 316; continue _fun0022 }
 313:
                var4 = var5;
 316:
                var3 = var4;
 319:
                var1 = var3;
 322:
                if(var1) { _fun0022_ip = 328; continue _fun0022 }
 325:
                var1 = var2;
 328:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/SpeakingStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();