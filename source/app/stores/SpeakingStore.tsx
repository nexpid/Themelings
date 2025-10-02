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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
            var9 = _closure1_slot21;
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
            var7 = _closure1_slot21;
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
    var _closure1_slot20 = var1;
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
    var _closure1_slot21 = var1;
    var1 = function clearSpeakingFlagsInContext(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot15;
            var1 = var3.get;
            var3 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var5 = var3.delete;
            var1 = arg2;
            var1 = var5.bind(var3)(var1);
            var5 = var3.size;
            var3 = 0;
            if(!(var3 === var5)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var3 = _closure1_slot15;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
case 41:
            return var1;
case 39:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function hasSpeakingFlagInContext(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg3;
            var5 = _closure1_slot15;
            var4 = var5.get;
            var1 = arg1;
            var8 = var4.bind(var5)(var1);
            var4 = null;
            var5 = var4 == var8;
            var1 = undefined;
            if(var5) { _fun0006_ip = 11; continue _fun0006 }
case 43:
            var6 = var8.get;
            var5 = arg2;
            var5 = var6.bind(var8)(var5);
            var6 = var4 == var5;
            var1 = undefined;
            if(var6) { _fun0006_ip = 11; continue _fun0006 }
case 32:
            var1 = var5.flags;
case 11:
            if(!(var4 == var1)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var3 = _closure1_slot13;
            var1 = var3.NONE;
case 44:
            var1 = var1 & var2;
            var1 = var1 === var2;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function anyoneHasFlagInContext(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var10 = arg2;
            var9 = arguments[2];
            var8 = undefined;
            if(!(var9 === var8)) { _fun0007_ip = 36; continue _fun0007 }
case 46:
            var9 = false;
case 36:
            var3 = _closure1_slot15;
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var1 = _closure1_slot20;
            var6 = var1.bind(var8)(var2);
            var2 = var6.bind(var8)();
            var1 = var2.done;
            var5 = 2;
            var4 = 0;
            var3 = 1;
            if(var1) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var11 = var2.value;
            var1 = _closure1_slot7;
            var1 = var1.bind(var8)(var11, var5);
            var12 = var1[var4];
            var1 = var1[var3];
            var1 = var1.flags;
            if(!var9) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var11 = _closure1_slot16;
            if(!(var12 !== var11)) { _fun0007_ip = 53; continue _fun0007 }
case 51:
            var1 = var1 & var10;
            if(!(var1 !== var10)) { _fun0007_ip = 54; continue _fun0007 }
case 53:
            var11 = var6.bind(var8)();
            var1 = var11.done;
            var2 = var11;
            if(var1) { _fun0007_ip = 49; continue _fun0007 }
case 55:
            _fun0007_ip = 50; continue _fun0007;
case 54:
            var1 = true;
            return var1;
case 49:
            var1 = false;
            return var1;
case 47:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function setSpeakingFlagForUserInContext(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var6 = arg2;
            var9 = arg3;
            var7 = undefined;
            var4 = var3;
            if(!(var4 === var7)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var1 = _closure1_slot14;
            var4 = var1.DEFAULT;
case 56:
            var5 = _closure1_slot15;
            var2 = var5.get;
            var2 = var2.bind(var5)(var4);
            var5 = null;
            var11 = var4;
            if(!(var5 == var2)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
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
case 58:
            var4 = var2.get;
            var8 = var4.bind(var2)(var6);
            var4 = var5 == var8;
            var11 = undefined;
            if(var4) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var11 = var8.flags;
case 60:
            var12 = var5 != var11;
            var4 = 0;
            var10 = 0;
            if(!var12) { _fun0008_ip = 47; continue _fun0008 }
case 62:
            var10 = var11;
case 47:
            if(!(var4 === var10)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
            if(!(var4 !== var9)) { _fun0008_ip = 65; continue _fun0008 }
case 63:
            if(!(var4 !== var9)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var11 = var5 == var8;
            var7 = undefined;
            if(var11) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var7 = var8.since;
case 68:
            var11 = var5 != var7;
            var8 = null;
            if(!var11) { _fun0008_ip = 70; continue _fun0008 }
case 71:
            var8 = var7;
case 70:
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
            if(!(var10 !== var7)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
            var5 = null;
            if(!var7) { _fun0008_ip = 74; continue _fun0008 }
case 75:
            var7 = global;
            var10 = var7.Date;
            var7 = var10.now;
            var5 = var7.bind(var10)();
case 74:
            var8 = var5;
case 72:
            var7 = var2.set;
            var5 = {};
            var5['flags'] = var9;
            var5['since'] = var8;
            var5 = var7.bind(var2)(var6, var5);
            _fun0008_ip = 76; continue _fun0008;
case 66:
            var5 = var2.delete;
            var5 = var5.bind(var2)(var6);
            var2 = var2.size;
            if(!(var4 === var2)) { _fun0008_ip = 76; continue _fun0008 }
case 77:
            var2 = _closure1_slot15;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
case 76:
            var1 = true;
            return var1;
case 65:
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
case 0:
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
                if(var1) { _fun0009_ip = 50; continue _fun0009 }
case 78:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 79; continue _fun0009;
case 50:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 79:
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
case 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = 'CONNECTION_OPEN';
                    var1 = var1 !== var3;
                    if(!var1) { _fun0010_ip = 80; continue _fun0010 }
case 81:
                    var3 = var2.type;
                    var2 = 'VOICE_STATE_UPDATES';
                    var1 = var2 !== var3;
case 80:
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
case 0:
                var3 = arguments[2];
                var5 = undefined;
                if(!(var3 === var5)) { _fun0011_ip = 82; continue _fun0011 }
case 83:
                var1 = _closure1_slot14;
                var3 = var1.DEFAULT;
case 82:
                var2 = _closure1_slot15;
                var1 = var2.get;
                var6 = var1.bind(var2)(var3);
                var1 = null;
                var2 = var1 == var6;
                var3 = undefined;
                if(var2) { _fun0011_ip = 84; continue _fun0011 }
case 42:
                var4 = var6.get;
                var2 = arg1;
                var2 = var4.bind(var6)(var2);
                var4 = var1 == var2;
                var3 = undefined;
                if(var4) { _fun0011_ip = 84; continue _fun0011 }
case 5:
                var3 = var2.since;
case 84:
                var2 = var1 != var3;
                var1 = 0;
                if(!var2) { _fun0011_ip = 85; continue _fun0011 }
case 86:
                var2 = arg2;
                var1 = var2 - var3;
case 85:
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
case 0:
                var7 = arguments[0];
                var4 = undefined;
                if(!(var7 === var4)) { _fun0012_ip = 87; continue _fun0012 }
case 88:
                var2 = _closure1_slot14;
                var7 = var2.DEFAULT;
case 87:
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
                if(var6) { _fun0012_ip = 84; continue _fun0012 }
case 50:
                var6 = var7.keys;
                var4 = var6.bind(var7)();
case 84:
                if(!(var5 == var4)) { _fun0012_ip = 13; continue _fun0012 }
case 89:
                var4 = new Array(0);
case 13:
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
case 0:
                var5 = arguments[1];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
case 82:
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
case 0:
                var5 = arguments[1];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0014_ip = 82; continue _fun0014 }
case 83:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
case 82:
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
case 0:
                var5 = arguments[1];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0015_ip = 82; continue _fun0015 }
case 83:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
case 82:
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
case 0:
                var5 = arguments[0];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0016_ip = 82; continue _fun0016 }
case 83:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
case 82:
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
case 0:
                var5 = arguments[0];
                var4 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0017_ip = 90; continue _fun0017 }
case 46:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
case 90:
                var3 = _closure1_slot16;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0017_ip = 59; continue _fun0017 }
case 91:
                var3 = var4.isSpeaking;
                var2 = _closure1_slot16;
                var1 = var3.bind(var4)(var2, var5);
case 59:
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
case 0:
                var4 = arguments[0];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0018_ip = 82; continue _fun0018 }
case 83:
                var1 = _closure1_slot14;
                var4 = var1.DEFAULT;
case 82:
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
case 0:
                var5 = arguments[0];
                var4 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0019_ip = 90; continue _fun0019 }
case 46:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
case 90:
                var3 = _closure1_slot16;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0019_ip = 59; continue _fun0019 }
case 91:
                var3 = var4.isPrioritySpeaker;
                var2 = _closure1_slot16;
                var1 = var3.bind(var4)(var2, var5);
case 59:
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
case 0:
                var5 = arguments[0];
                var4 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0020_ip = 90; continue _fun0020 }
case 46:
                var1 = _closure1_slot14;
                var5 = var1.DEFAULT;
case 90:
                var3 = _closure1_slot16;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0020_ip = 59; continue _fun0020 }
case 91:
                var6 = var4.isPrioritySpeaker;
                var3 = _closure1_slot16;
                var1 = var6.bind(var4)(var3, var5);
case 59:
                if(!var1) { _fun0020_ip = 92; continue _fun0020 }
case 93:
                var3 = var4.isSpeaking;
                var2 = _closure1_slot16;
                var1 = var3.bind(var4)(var2, var5);
case 92:
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
case 0:
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
            if(!(var7 === var6)) { _fun0021_ip = 94; continue _fun0021 }
case 32:
            var8 = _closure1_slot8;
            var7 = var8.getChannel;
            var9 = _closure1_slot11;
            var6 = var9.getVoiceChannelId;
            var6 = var6.bind(var9)();
            var9 = var7.bind(var8)(var6);
            var6 = null;
            if(!(var6 != var9)) { _fun0021_ip = 95; continue _fun0021 }
case 96:
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
            if(var6) { _fun0021_ip = 97; continue _fun0021 }
case 95:
            var8 = _closure1_slot9;
            var7 = var8.setCanHavePriority;
            var6 = false;
            var6 = var7.bind(var8)(var4, var6);
            var6 = _closure1_slot13;
            var6 = var6.PRIORITY;
            var6 = ~var6;
            var3 = var2 & var6;
            _fun0021_ip = 94; continue _fun0021;
case 97:
            var8 = _closure1_slot9;
            var7 = var8.setCanHavePriority;
            var6 = true;
            var6 = var7.bind(var8)(var4, var6);
            var3 = var2;
case 94:
            var2 = _closure1_slot13;
            var2 = var2.HIDDEN;
            var6 = var3 & var2;
            var2 = _closure1_slot13;
            var2 = var2.HIDDEN;
            if(!(var6 === var2)) { _fun0021_ip = 98; continue _fun0021 }
case 99:
            var3 = 0;
case 98:
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
case 0:
                var2 = arg1;
                var1 = arg2;
                var8 = var1.userId;
                var7 = var1.channelId;
                var6 = var1.sessionId;
                var9 = _closure1_slot18;
                var1 = _closure1_slot16;
                var1 = var8 === var1;
                if(!var1) { _fun0022_ip = 100; continue _fun0022 }
case 48:
                var3 = _closure1_slot17;
                var1 = var6 === var3;
case 100:
                if(!var1) { _fun0022_ip = 34; continue _fun0022 }
case 78:
                var1 = null;
                var3 = var1 != var7;
                if(!var3) { _fun0022_ip = 101; continue _fun0022 }
case 93:
                var1 = var7;
case 101:
                _closure1_slot18 = var1;
case 34:
                var1 = _closure1_slot18;
                var5 = false;
                if(!(var9 !== var1)) { _fun0022_ip = 102; continue _fun0022 }
case 103:
                var10 = _closure1_slot15;
                var9 = var10.delete;
                var1 = _closure1_slot14;
                var1 = var1.DEFAULT;
                var1 = var9.bind(var10)(var1);
                if(var1) { _fun0022_ip = 104; continue _fun0022 }
case 105:
                var1 = false;
case 104:
                var5 = var1;
case 102:
                var1 = null;
                if(!(var1 != var7)) { _fun0022_ip = 106; continue _fun0022 }
case 107:
                var1 = _closure1_slot16;
                if(!(var8 === var1)) { _fun0022_ip = 108; continue _fun0022 }
case 109:
                var1 = _closure1_slot17;
                if(!(var6 === var1)) { _fun0022_ip = 26; continue _fun0022 }
case 108:
                var1 = _closure1_slot16;
                var3 = var8 !== var1;
                if(!var3) { _fun0022_ip = 18; continue _fun0022 }
case 64:
                var9 = _closure1_slot10;
                var1 = var9.getChannelId;
                var1 = var1.bind(var9)();
                var3 = var7 !== var1;
case 18:
                var1 = var5;
                if(!var3) { _fun0022_ip = 110; continue _fun0022 }
case 111:
                var9 = _closure1_slot22;
                var3 = _closure1_slot14;
                var7 = var3.DEFAULT;
                var3 = undefined;
                var3 = var9.bind(var3)(var7, var8);
                if(var3) { _fun0022_ip = 112; continue _fun0022 }
case 113:
                var3 = var5;
case 112:
                var1 = var3;
                _fun0022_ip = 110; continue _fun0022;
case 26:
                var9 = _closure1_slot15;
                var7 = var9.delete;
                var3 = _closure1_slot14;
                var3 = var3.DEFAULT;
                var3 = var7.bind(var9)(var3);
                if(var3) { _fun0022_ip = 114; continue _fun0022 }
case 115:
                var3 = var5;
case 114:
                var1 = var3;
                _fun0022_ip = 110; continue _fun0022;
case 106:
                var3 = _closure1_slot16;
                if(!(var8 === var3)) { _fun0022_ip = 116; continue _fun0022 }
case 117:
                var3 = _closure1_slot17;
                if(!(var6 !== var3)) { _fun0022_ip = 118; continue _fun0022 }
case 116:
                var7 = _closure1_slot22;
                var3 = _closure1_slot14;
                var6 = var3.DEFAULT;
                var3 = undefined;
                var3 = var7.bind(var3)(var6, var8);
                if(var3) { _fun0022_ip = 119; continue _fun0022 }
case 120:
                var3 = var5;
case 119:
                _fun0022_ip = 121; continue _fun0022;
case 118:
                var7 = _closure1_slot15;
                var6 = var7.delete;
                var4 = _closure1_slot14;
                var4 = var4.DEFAULT;
                var4 = var6.bind(var7)(var4);
                if(var4) { _fun0022_ip = 122; continue _fun0022 }
case 123:
                var4 = var5;
case 122:
                var3 = var4;
case 121:
                var1 = var3;
case 110:
                if(var1) { _fun0022_ip = 76; continue _fun0022 }
case 124:
                var1 = var2;
case 76:
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