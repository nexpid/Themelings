// app/modules/saved_messages/SavedMessagesStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
            var9 = _closure1_slot17;
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
            var7 = _closure1_slot17;
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
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var1 = function getTimeSafe(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var2 = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41: // try_start_0
            var1 = global;
            var4 = var1.Date;
            var7 = var2;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var8 = var3;
            var1 = new var8[var4](var7, var6);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = var3.getTime;
            var1 = var1.bind(var3)();
case 42: // try_end0
            return var1;
case 8: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = global;
            var3 = var1.Error;
            var5 = var2;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var2 = 'Invalid date given (';
            var1 = ')';
            var7 = var4.bind(var2)(var5, var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
case 40:
            var1 = _closure1_slot8;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var2 = function getComparator(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = var2.dueAt;
            var1 = null;
            if(!(var1 == var3)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var3 = _closure1_slot8;
            var5 = _closure1_slot18;
            var4 = var2.savedAt;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var3 - var1;
            _fun0006_ip = 45; continue _fun0006;
case 43:
            var4 = _closure1_slot18;
            var3 = var2.dueAt;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 45:
            return var1;
        }
    };
    var _closure1_slot19 = var2;
    var1 = function isChannelRelevant(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot14;
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var3 = var2.size;
            var2 = 0;
            var1 = var3 > var2;
case 46:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function getSavedMessageKey(arg1) {
        var1 = arg1;
        var5 = var1.channelId;
        var4 = var1.messageId;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = '-';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function upsertSavedMessage(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot21;
            var4 = var3.saveData;
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var5 = _closure1_slot9;
            var4 = var5.get;
            var4 = var4.bind(var5)(var7);
            var6 = null;
            if(!(var6 == var4)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            _closure1_slot11 = var4;
case 48:
            var5 = _closure1_slot9;
            var4 = var5.set;
            var4 = var4.bind(var5)(var7, var3);
            var4 = var3.saveData;
            var4 = var4.messageId;
            var5 = var3.saveData;
            var9 = var5.channelId;
            var7 = _closure1_slot14;
            var5 = var7.get;
            var8 = var5.bind(var7)(var9);
            if(!(var6 == var8)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
            var5 = global;
            var5 = var5.Set;
            var7 = var5.prototype;
            var7 = Object.create(var7, {constructor: {value: var5}});
            var12 = var7;
            var5 = new var12[var5](var11);
            var8 = var5 instanceof Object ? var5 : var7;
case 50:
            var5 = var8.add;
            var5 = var5.bind(var8)(var4);
            var7 = _closure1_slot14;
            var5 = var7.set;
            var5 = var5.bind(var7)(var9, var8);
            var5 = var3.message;
            if(!(var6 == var5)) { _fun0008_ip = 24; continue _fun0008 }
case 52:
            var7 = _closure1_slot13;
            var5 = var7.add;
            var5 = var5.bind(var7)(var4);
case 24:
            var5 = var3.saveData;
            var5 = var5.dueAt;
            if(!(var6 != var5)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var5 = global;
            var5 = var5.Date;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var12 = var6;
            var5 = new var12[var5](var11);
            var5 = var5 instanceof Object ? var5 : var6;
            var3 = var3.saveData;
            var3 = var3.dueAt;
            if(!(!(var5 > var3))) { _fun0008_ip = 55; continue _fun0008 }
case 53:
            var5 = _closure1_slot12;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
            _fun0008_ip = 56; continue _fun0008;
case 55:
            var3 = _closure1_slot12;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
case 56:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function nullifyMessageObject(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var5 = var1.messageId;
            var3 = var1.channelId;
            var4 = _closure1_slot21;
            var2 = {};
            var2['messageId'] = var5;
            var2['channelId'] = var3;
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var5 = _closure1_slot9;
            var2 = var5.get;
            var5 = var2.bind(var5)(var4);
            var2 = null;
            var6 = var2 == var5;
            if(var6) { _fun0009_ip = 45; continue _fun0009 }
case 57:
            var3 = var5.message;
case 45:
            if(!(var2 != var3)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var3 = {};
            var8 = var3;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var3['message'] = var2;
            var2 = _closure1_slot9;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
            var1 = true;
            return var1;
case 58:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var10 = function handleGuild() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = _closure1_slot13;
            var2 = var1.size;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0010_ip = 60; continue _fun0010 }
case 61:
            var3 = _closure1_slot10;
            var2 = !var3;
            if(var3) { _fun0010_ip = 62; continue _fun0010 }
case 63:
            var3 = true;
            _closure1_slot10 = var3;
            var2 = undefined;
case 62:
            var1 = var2;
case 60:
            return var1;
        }
    };
    var4 = global;
    var13 = var4.Object;
    var12 = var13.defineProperty;
    var9 = {};
    var11 = true;
    var9['value'] = var11;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var9);
    var9 = 0;
    var12 = var7[var9];
    var1 = undefined;
    var12 = var8.bind(var1)(var12);
    var _closure1_slot2 = var12;
    var12 = 1;
    var12 = var7[var12];
    var12 = var8.bind(var1)(var12);
    var _closure1_slot3 = var12;
    var12 = 2;
    var12 = var7[var12];
    var12 = var8.bind(var1)(var12);
    var _closure1_slot4 = var12;
    var12 = 3;
    var12 = var7[var12];
    var12 = var8.bind(var1)(var12);
    var _closure1_slot5 = var12;
    var12 = 4;
    var12 = var7[var12];
    var12 = var8.bind(var1)(var12);
    var _closure1_slot6 = var12;
    var12 = 5;
    var12 = var7[var12];
    var12 = var8.bind(var1)(var12);
    var _closure1_slot7 = var12;
    var12 = 10000000000000.0;
    var _closure1_slot8 = var12;
    var12 = 6;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var15 = var12.SecondaryIndexMap;
    var12 = var15.prototype;
    var13 = Object.create(var12, {constructor: {value: var15}});
    var18 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var2 = var1.saveData;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 7;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.SavedMessageSortTypes;
            var4 = var1.ALL;
            var1 = new Array(2);
            var1[0] = var4;
            var4 = var2.dueAt;
            var2 = null;
            if(!(var2 == var4)) { _fun0011_ip = 64; continue _fun0011 }
case 65:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.SavedMessageSortTypes;
            var2 = var2.BOOKMARK;
            _fun0011_ip = 66; continue _fun0011;
case 64:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.SavedMessageSortTypes;
            var2 = var3.REMINDER;
case 66:
            var1[1] = var2;
            return var1;
        }
    };
    var17 = function(arg1) {
        var1 = arg1;
        var3 = var1.saveData;
        var2 = _closure1_slot19;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var19 = var13;
    var12 = new var19[var15](var18, var17, var16);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot9 = var12;
    var _closure1_slot10 = var11;
    var _closure1_slot11 = var9;
    var9 = var4.Set;
    var11 = var9.prototype;
    var11 = Object.create(var11, {constructor: {value: var9}});
    var19 = var11;
    var9 = new var19[var9](var18);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot12 = var9;
    var9 = var4.Set;
    var11 = var9.prototype;
    var11 = Object.create(var11, {constructor: {value: var9}});
    var19 = var11;
    var9 = new var19[var9](var18);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot13 = var9;
    var4 = var4.Map;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var19 = var9;
    var4 = new var19[var4](var18);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function SavedMessagesStore() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0012_ip = 59; continue _fun0012 }
case 67:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0012_ip = 68; continue _fun0012;
case 59:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 68:
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
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSavedMessages';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot9;
            var2 = var3.values;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.SavedMessageSortTypes;
            var1 = var1.ALL;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSavedMessage';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot9;
            var2 = var3.get;
            var5 = _closure1_slot21;
            var4 = {};
            var1 = arg1;
            var4['channelId'] = var1;
            var1 = arg2;
            var4['messageId'] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getMessageBookmarks';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot9;
            var2 = var3.values;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.SavedMessageSortTypes;
            var1 = var1.BOOKMARK;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getMessageReminders';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot9;
            var2 = var3.values;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.SavedMessageSortTypes;
            var1 = var1.REMINDER;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getOverdueMessageReminderCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            var1 = var1.size;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasOverdueReminder';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getSavedMessageCount';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot9;
            var1 = var2.size;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getIsStale';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getLastChanged';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isMessageBookmarked';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = _closure1_slot9;
                var2 = var3.get;
                var5 = _closure1_slot21;
                var4 = {};
                var1 = arg1;
                var4['channelId'] = var1;
                var1 = arg2;
                var4['messageId'] = var1;
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var2 = var2.bind(var3)(var1);
                var3 = null;
                var1 = var3 != var2;
                if(!var1) { _fun0013_ip = 59; continue _fun0013 }
case 42:
                var2 = var2.saveData;
                var2 = var2.dueAt;
                var1 = var3 == var2;
case 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isMessageReminder';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = _closure1_slot9;
                var2 = var3.get;
                var5 = _closure1_slot21;
                var4 = {};
                var1 = arg1;
                var4['channelId'] = var1;
                var1 = arg2;
                var4['messageId'] = var1;
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var2 = var2.bind(var3)(var1);
                var3 = null;
                var1 = var3 != var2;
                if(!var1) { _fun0014_ip = 59; continue _fun0014 }
case 42:
                var2 = var2.saveData;
                var2 = var2.dueAt;
                var1 = var3 != var2;
case 59:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'SavedMessagesStore';
    var9['displayName'] = var4;
    var4 = 10;
    var4 = var7[var4];
    var18 = var8.bind(var1)(var4);
    var4 = {};
    var11 = function handlePostConnectionOpen() {
        var1 = true;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var4['POST_CONNECTION_OPEN'] = var11;
    var11 = function handleLogout() {
        var2 = true;
        _closure1_slot10 = var2;
        var3 = _closure1_slot9;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot14;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot13;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var11;
    var11 = function handleUpdate(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.savedMessages;
            var1 = false;
            _closure1_slot10 = var1;
            var2 = _closure1_slot9;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot14;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot13;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot16;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0015_ip = 69; continue _fun0015 }
case 70:
            var6 = _closure1_slot22;
            var2 = var3.value;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0015_ip = 70; continue _fun0015 }
case 69:
            return var1;
        }
    };
    var4['SAVED_MESSAGES_UPDATE'] = var11;
    var11 = function handleCreate(arg1) {
        var1 = arg1;
        var3 = var1.savedMessage;
        var2 = _closure1_slot22;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['SAVED_MESSAGE_CREATE'] = var11;
    var11 = function handleDelete(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var6 = var1.savedMessageData;
            var1 = _closure1_slot21;
            var2 = undefined;
            var9 = var1.bind(var2)(var6);
            var3 = _closure1_slot9;
            var1 = var3.get;
            var5 = var1.bind(var3)(var9);
            var3 = null;
            var7 = var3 == var5;
            var1 = false;
            if(var7) { _fun0016_ip = 71; continue _fun0016 }
case 72:
            var8 = _closure1_slot9;
            var7 = var8.delete;
            var7 = var7.bind(var8)(var9);
            var6 = var6.messageId;
            var8 = _closure1_slot14;
            var7 = var8.get;
            var5 = var5.saveData;
            var5 = var5.channelId;
            var5 = var7.bind(var8)(var5);
            if(!(var3 != var5)) { _fun0016_ip = 58; continue _fun0016 }
case 15:
            var3 = var5.delete;
            var3 = var3.bind(var5)(var6);
case 58:
            var5 = _closure1_slot13;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var6);
            var5 = _closure1_slot12;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var6);
            var3 = global;
            var5 = var3.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            _closure1_slot11 = var3;
            var1 = undefined;
case 71:
            return var1;
        }
    };
    var4['SAVED_MESSAGE_DELETE'] = var11;
    var11 = function handleMessageDelete(arg1) {
        var1 = arg1;
        var4 = var1.id;
        var1 = var1.channelId;
        var3 = _closure1_slot23;
        var2 = {};
        var2['messageId'] = var4;
        var2['channelId'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var4['MESSAGE_DELETE'] = var11;
    var11 = function handleMessageDeleteBulk(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = var1.ids;
            var6 = var1.channelId;
            var2 = _closure1_slot16;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0017_ip = 73; continue _fun0017 }
case 46:
            var7 = _closure1_slot23;
            var2 = {};
            var8 = var3.value;
            var2['messageId'] = var8;
            var2['channelId'] = var6;
            var2 = var7.bind(var1)(var2);
            var7 = var4.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0017_ip = 46; continue _fun0017 }
case 73:
            return var1;
        }
    };
    var4['MESSAGE_DELETE_BULK'] = var11;
    var11 = function handleMessageUpdate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var8 = var1.message;
            var1 = var8.id;
            var6 = null;
            if(!(var6 != var1)) { _fun0018_ip = 74; continue _fun0018 }
case 75:
            var1 = var8.channel_id;
            if(!(var6 != var1)) { _fun0018_ip = 74; continue _fun0018 }
case 76:
            var4 = _closure1_slot21;
            var3 = {};
            var1 = var8.id;
            var3['messageId'] = var1;
            var1 = var8.channel_id;
            var3['channelId'] = var1;
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = _closure1_slot9;
            var3 = var4.get;
            var3 = var3.bind(var4)(var5);
            var7 = var6 == var3;
            var4 = undefined;
            if(var7) { _fun0018_ip = 15; continue _fun0018 }
case 77:
            var4 = var3.message;
case 15:
            if(!(var6 != var4)) { _fun0018_ip = 78; continue _fun0018 }
case 79:
            var4 = {};
            var11 = var4;
            var10 = var3;
            var6 = copyDataProperties(var11, var10);
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 8;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.updateMessageRecord;
            var3 = var3.message;
            var3 = var6.bind(var7)(var3, var8);
            var4['message'] = var3;
            var3 = _closure1_slot9;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
case 78:
            var1 = false;
            return var1;
case 74:
            var1 = false;
            return var1;
        }
    };
    var4['MESSAGE_UPDATE'] = var11;
    var4['GUILD_CREATE'] = var10;
    var4['GUILD_UPDATE'] = var10;
    var4['GUILD_DELETE'] = var10;
    var11 = function handleChannelCreate(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var1 = _closure1_slot13;
            var2 = var1.size;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0019_ip = 80; continue _fun0019 }
case 47:
            var4 = _closure1_slot10;
            var2 = !var4;
            if(var4) { _fun0019_ip = 81; continue _fun0019 }
case 62:
            var5 = _closure1_slot20;
            var3 = var3.id;
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = !var5;
            var3 = !var3;
            if(!var5) { _fun0019_ip = 3; continue _fun0019 }
case 48:
            var5 = true;
            _closure1_slot10 = var5;
            var3 = undefined;
case 3:
            var2 = var3;
case 81:
            var1 = var2;
case 80:
            return var1;
        }
    };
    var4['CHANNEL_CREATE'] = var11;
    var11 = function handleChannelUpdates(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channels;
            var1 = _closure1_slot13;
            var3 = var1.size;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0020_ip = 82; continue _fun0020 }
case 83:
            var1 = _closure1_slot10;
            if(var1) { _fun0020_ip = 84; continue _fun0020 }
case 76:
            var1 = _closure1_slot16;
            var7 = undefined;
            var6 = var1.bind(var7)(var2);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var5 = true;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0020_ip = 69; continue _fun0020 }
case 65:
            var9 = _closure1_slot20;
            var2 = var4.value;
            var2 = var2.id;
            var2 = var9.bind(var7)(var2);
            if(!var2) { _fun0020_ip = 85; continue _fun0020 }
case 86:
            _closure1_slot10 = var5;
            var3 = true;
case 85:
            var10 = var6.bind(var7)();
            var2 = var10.done;
            var4 = var10;
            var1 = var3;
            if(!var2) { _fun0020_ip = 65; continue _fun0020 }
case 69:
            return var1;
case 84:
            var1 = false;
            return var1;
case 82:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_UPDATES'] = var11;
    var11 = function handleChannelDelete(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var1 = _closure1_slot13;
            var2 = var1.size;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0021_ip = 80; continue _fun0021 }
case 47:
            var4 = _closure1_slot10;
            var2 = !var4;
            if(var4) { _fun0021_ip = 81; continue _fun0021 }
case 62:
            var5 = _closure1_slot20;
            var3 = var3.id;
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = !var5;
            var3 = !var3;
            if(!var5) { _fun0021_ip = 3; continue _fun0021 }
case 48:
            var5 = true;
            _closure1_slot10 = var5;
            var3 = undefined;
case 3:
            var2 = var3;
case 81:
            var1 = var2;
case 80:
            return var1;
        }
    };
    var4['CHANNEL_DELETE'] = var11;
    var11 = function handleGuildMemberUpdate(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var3 = var1.user;
            var1 = _closure1_slot13;
            var2 = var1.size;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0022_ip = 85; continue _fun0022 }
case 47:
            var4 = _closure1_slot10;
            var2 = !var4;
            if(var4) { _fun0022_ip = 77; continue _fun0022 }
case 62:
            var5 = var3.id;
            var4 = _closure1_slot7;
            var3 = var4.getCurrentUser;
            var7 = var3.bind(var4)();
            var3 = null;
            var8 = var3 == var7;
            var3 = undefined;
            if(var8) { _fun0022_ip = 87; continue _fun0022 }
case 88:
            var3 = var7.id;
case 87:
            var3 = var5 === var3;
            if(!var3) { _fun0022_ip = 86; continue _fun0022 }
case 89:
            var5 = true;
            _closure1_slot10 = var5;
            var3 = undefined;
case 86:
            var2 = var3;
case 77:
            var1 = var2;
case 85:
            return var1;
        }
    };
    var4['GUILD_MEMBER_UPDATE'] = var11;
    var4['GUILD_ROLE_CREATE'] = var10;
    var4['GUILD_ROLE_UPDATE'] = var10;
    var4['GUILD_ROLE_DELETE'] = var10;
    var5 = function handleMessageReminderDue(arg1) {
        var1 = arg1;
        var1 = var1.savedMessage;
        var3 = _closure1_slot12;
        var2 = var3.add;
        var1 = var1.saveData;
        var1 = var1.messageId;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['MESSAGE_REMINDER_DUE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var19 = var5;
    var17 = var4;
    var4 = new var19[var9](var18, var17, var16);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/saved_messages/SavedMessagesStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getComparator'] = var2;
    return var1;
})();