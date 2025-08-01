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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 344; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var1 = function getTimeSafe(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 117; continue _fun0005 }
 12: // try_start_0
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
 53: // try_end0
            return var1;
 55: // catch_target0
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
 117:
            var1 = 10000000000000.0;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var2 = function getComparator(arg1) {
        var1 = arg1;
        var4 = _closure1_slot17;
        var2 = var1.dueAt;
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var1 = var1.savedAt;
        var1 = var4.bind(var3)(var1);
        var1 = var2 - var1;
        return var1;
    };
    var _closure1_slot18 = var2;
    var1 = function isChannelRelevant(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot13;
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0006_ip = 40; continue _fun0006 }
 29:
            var3 = var2.size;
            var2 = 0;
            var1 = var3 > var2;
 40:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var _closure1_slot20 = var1;
    var1 = function upsertSavedMessage(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot20;
            var4 = var3.saveData;
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var5 = _closure1_slot8;
            var4 = var5.get;
            var4 = var4.bind(var5)(var7);
            var6 = null;
            if(!(var6 == var4)) { _fun0007_ip = 64; continue _fun0007 }
 43:
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            _closure1_slot10 = var4;
 64:
            var5 = _closure1_slot8;
            var4 = var5.set;
            var4 = var4.bind(var5)(var7, var3);
            var4 = var3.saveData;
            var4 = var4.messageId;
            var5 = var3.saveData;
            var9 = var5.channelId;
            var7 = _closure1_slot13;
            var5 = var7.get;
            var8 = var5.bind(var7)(var9);
            if(!(var6 == var8)) { _fun0007_ip = 147; continue _fun0007 }
 119:
            var5 = global;
            var5 = var5.Set;
            var7 = var5.prototype;
            var7 = Object.create(var7, {constructor: {value: var5}});
            var12 = var7;
            var5 = new var12[var5](var11);
            var8 = var5 instanceof Object ? var5 : var7;
 147:
            var5 = var8.add;
            var5 = var5.bind(var8)(var4);
            var7 = _closure1_slot13;
            var5 = var7.set;
            var5 = var5.bind(var7)(var9, var8);
            var5 = var3.message;
            if(!(var6 == var5)) { _fun0007_ip = 195; continue _fun0007 }
 181:
            var7 = _closure1_slot12;
            var5 = var7.add;
            var5 = var5.bind(var7)(var4);
 195:
            var5 = var3.saveData;
            var5 = var5.dueAt;
            if(!(var6 != var5)) { _fun0007_ip = 255; continue _fun0007 }
 211:
            var5 = global;
            var5 = var5.Date;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var12 = var6;
            var5 = new var12[var5](var11);
            var5 = var5 instanceof Object ? var5 : var6;
            var3 = var3.saveData;
            var3 = var3.dueAt;
            if(!(!(var5 > var3))) { _fun0007_ip = 271; continue _fun0007 }
 255:
            var5 = _closure1_slot11;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
            _fun0007_ip = 285; continue _fun0007;
 271:
            var3 = _closure1_slot11;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
 285:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function nullifyMessageObject(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var5 = var1.messageId;
            var3 = var1.channelId;
            var4 = _closure1_slot20;
            var2 = {};
            var2['messageId'] = var5;
            var2['channelId'] = var3;
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var5 = _closure1_slot8;
            var2 = var5.get;
            var5 = var2.bind(var5)(var4);
            var2 = null;
            var6 = var2 == var5;
            if(var6) { _fun0008_ip = 65; continue _fun0008 }
 60:
            var3 = var5.message;
 65:
            if(!(var2 != var3)) { _fun0008_ip = 106; continue _fun0008 }
 69:
            var3 = {};
            var8 = var3;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var3['message'] = var2;
            var2 = _closure1_slot8;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
            var1 = true;
            return var1;
 106:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var10 = function handleGuild() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = _closure1_slot12;
            var2 = var1.size;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0009_ip = 42; continue _fun0009 }
 21:
            var3 = _closure1_slot9;
            var2 = !var3;
            if(var3) { _fun0009_ip = 39; continue _fun0009 }
 31:
            var3 = true;
            _closure1_slot9 = var3;
            var2 = undefined;
 39:
            var1 = var2;
 42:
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
    var12 = 6;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var15 = var12.SecondaryIndexMap;
    var12 = var15.prototype;
    var13 = Object.create(var12, {constructor: {value: var15}});
    var18 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
            if(!(var2 == var4)) { _fun0010_ip = 97; continue _fun0010 }
 66:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.SavedMessageSortTypes;
            var2 = var2.BOOKMARK;
            _fun0010_ip = 126; continue _fun0010;
 97:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.SavedMessageSortTypes;
            var2 = var3.REMINDER;
 126:
            var1[1] = var2;
            return var1;
        }
    };
    var17 = function(arg1) {
        var1 = arg1;
        var3 = var1.saveData;
        var2 = _closure1_slot18;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var19 = var13;
    var12 = new var19[var15](var18, var17, var16);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot8 = var12;
    var _closure1_slot9 = var11;
    var _closure1_slot10 = var9;
    var9 = var4.Set;
    var11 = var9.prototype;
    var11 = Object.create(var11, {constructor: {value: var9}});
    var19 = var11;
    var9 = new var19[var9](var18);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot11 = var9;
    var9 = var4.Set;
    var11 = var9.prototype;
    var11 = Object.create(var11, {constructor: {value: var9}});
    var19 = var11;
    var9 = new var19[var9](var18);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot12 = var9;
    var4 = var4.Map;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var19 = var9;
    var4 = new var19[var4](var18);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function SavedMessagesStore() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
                var1 = _closure1_slot14;
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
            var3 = _closure1_slot8;
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
            var3 = _closure1_slot8;
            var2 = var3.get;
            var5 = _closure1_slot20;
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
            var3 = _closure1_slot8;
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
            var3 = _closure1_slot8;
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
            var1 = _closure1_slot11;
            var1 = var1.size;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasOverdueReminder';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
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
            var2 = _closure1_slot8;
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
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getLastChanged';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isMessageBookmarked';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = _closure1_slot8;
                var2 = var3.get;
                var5 = _closure1_slot20;
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
                if(!var1) { _fun0012_ip = 69; continue _fun0012 }
 53:
                var2 = var2.saveData;
                var2 = var2.dueAt;
                var1 = var3 == var2;
 69:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isMessageReminder';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var3 = _closure1_slot8;
                var2 = var3.get;
                var5 = _closure1_slot20;
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
                if(!var1) { _fun0013_ip = 69; continue _fun0013 }
 53:
                var2 = var2.saveData;
                var2 = var2.dueAt;
                var1 = var3 != var2;
 69:
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
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var4['POST_CONNECTION_OPEN'] = var11;
    var11 = function handleLogout() {
        var2 = true;
        _closure1_slot9 = var2;
        var3 = _closure1_slot8;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot13;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot12;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var11;
    var11 = function handleUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var3 = var1.savedMessages;
            var1 = false;
            _closure1_slot9 = var1;
            var2 = _closure1_slot8;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot13;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot12;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot15;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0014_ip = 112; continue _fun0014 }
 83:
            var6 = _closure1_slot21;
            var2 = var3.value;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0014_ip = 83; continue _fun0014 }
 112:
            return var1;
        }
    };
    var4['SAVED_MESSAGES_UPDATE'] = var11;
    var11 = function handleCreate(arg1) {
        var1 = arg1;
        var3 = var1.savedMessage;
        var2 = _closure1_slot21;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['SAVED_MESSAGE_CREATE'] = var11;
    var11 = function handleDelete(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var6 = var1.savedMessageData;
            var1 = _closure1_slot20;
            var2 = undefined;
            var9 = var1.bind(var2)(var6);
            var3 = _closure1_slot8;
            var1 = var3.get;
            var5 = var1.bind(var3)(var9);
            var3 = null;
            var7 = var3 == var5;
            var1 = false;
            if(var7) { _fun0015_ip = 157; continue _fun0015 }
 48:
            var8 = _closure1_slot8;
            var7 = var8.delete;
            var7 = var7.bind(var8)(var9);
            var6 = var6.messageId;
            var8 = _closure1_slot13;
            var7 = var8.get;
            var5 = var5.saveData;
            var5 = var5.channelId;
            var5 = var7.bind(var8)(var5);
            if(!(var3 != var5)) { _fun0015_ip = 106; continue _fun0015 }
 96:
            var3 = var5.delete;
            var3 = var3.bind(var5)(var6);
 106:
            var5 = _closure1_slot12;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var6);
            var5 = _closure1_slot11;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var6);
            var3 = global;
            var5 = var3.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            _closure1_slot10 = var3;
            var1 = undefined;
 157:
            return var1;
        }
    };
    var4['SAVED_MESSAGE_DELETE'] = var11;
    var11 = function handleMessageDelete(arg1) {
        var1 = arg1;
        var4 = var1.id;
        var1 = var1.channelId;
        var3 = _closure1_slot22;
        var2 = {};
        var2['messageId'] = var4;
        var2['channelId'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var4['MESSAGE_DELETE'] = var11;
    var11 = function handleMessageDeleteBulk(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var3 = var1.ids;
            var6 = var1.channelId;
            var2 = _closure1_slot15;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0016_ip = 79; continue _fun0016 }
 40:
            var7 = _closure1_slot22;
            var2 = {};
            var8 = var3.value;
            var2['messageId'] = var8;
            var2['channelId'] = var6;
            var2 = var7.bind(var1)(var2);
            var7 = var4.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0016_ip = 40; continue _fun0016 }
 79:
            return var1;
        }
    };
    var4['MESSAGE_DELETE_BULK'] = var11;
    var11 = function handleMessageUpdate(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var8 = var1.message;
            var1 = var8.id;
            var6 = null;
            if(!(var6 != var1)) { _fun0017_ip = 176; continue _fun0017 }
 22:
            var1 = var8.channel_id;
            if(!(var6 != var1)) { _fun0017_ip = 176; continue _fun0017 }
 34:
            var4 = _closure1_slot20;
            var3 = {};
            var1 = var8.id;
            var3['messageId'] = var1;
            var1 = var8.channel_id;
            var3['channelId'] = var1;
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = _closure1_slot8;
            var3 = var4.get;
            var3 = var3.bind(var4)(var5);
            var7 = var6 == var3;
            var4 = undefined;
            if(var7) { _fun0017_ip = 96; continue _fun0017 }
 91:
            var4 = var3.message;
 96:
            if(!(var6 != var4)) { _fun0017_ip = 172; continue _fun0017 }
 100:
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
            var3 = _closure1_slot8;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
 172:
            var1 = false;
            return var1;
 176:
            var1 = false;
            return var1;
        }
    };
    var4['MESSAGE_UPDATE'] = var11;
    var4['GUILD_CREATE'] = var10;
    var4['GUILD_UPDATE'] = var10;
    var4['GUILD_DELETE'] = var10;
    var11 = function handleChannelCreate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var1 = _closure1_slot12;
            var2 = var1.size;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0018_ip = 78; continue _fun0018 }
 29:
            var4 = _closure1_slot9;
            var2 = !var4;
            if(var4) { _fun0018_ip = 75; continue _fun0018 }
 39:
            var5 = _closure1_slot19;
            var3 = var3.id;
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = !var5;
            var3 = !var3;
            if(!var5) { _fun0018_ip = 72; continue _fun0018 }
 64:
            var5 = true;
            _closure1_slot9 = var5;
            var3 = undefined;
 72:
            var2 = var3;
 75:
            var1 = var2;
 78:
            return var1;
        }
    };
    var4['CHANNEL_CREATE'] = var11;
    var11 = function handleChannelUpdates(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var2 = var1.channels;
            var1 = _closure1_slot12;
            var3 = var1.size;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0019_ip = 118; continue _fun0019 }
 27:
            var1 = _closure1_slot9;
            if(var1) { _fun0019_ip = 114; continue _fun0019 }
 34:
            var1 = _closure1_slot15;
            var7 = undefined;
            var6 = var1.bind(var7)(var2);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var5 = true;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0019_ip = 112; continue _fun0019 }
 66:
            var9 = _closure1_slot19;
            var2 = var4.value;
            var2 = var2.id;
            var2 = var9.bind(var7)(var2);
            if(!var2) { _fun0019_ip = 94; continue _fun0019 }
 88:
            _closure1_slot9 = var5;
            var3 = true;
 94:
            var10 = var6.bind(var7)();
            var2 = var10.done;
            var4 = var10;
            var1 = var3;
            if(!var2) { _fun0019_ip = 66; continue _fun0019 }
 112:
            return var1;
 114:
            var1 = false;
            return var1;
 118:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_UPDATES'] = var11;
    var11 = function handleChannelDelete(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var1 = _closure1_slot12;
            var2 = var1.size;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0020_ip = 78; continue _fun0020 }
 29:
            var4 = _closure1_slot9;
            var2 = !var4;
            if(var4) { _fun0020_ip = 75; continue _fun0020 }
 39:
            var5 = _closure1_slot19;
            var3 = var3.id;
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = !var5;
            var3 = !var3;
            if(!var5) { _fun0020_ip = 72; continue _fun0020 }
 64:
            var5 = true;
            _closure1_slot9 = var5;
            var3 = undefined;
 72:
            var2 = var3;
 75:
            var1 = var2;
 78:
            return var1;
        }
    };
    var4['CHANNEL_DELETE'] = var11;
    var11 = function handleGuildMemberUpdate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var3 = var1.user;
            var1 = _closure1_slot12;
            var2 = var1.size;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0021_ip = 94; continue _fun0021 }
 29:
            var4 = _closure1_slot9;
            var2 = !var4;
            if(var4) { _fun0021_ip = 91; continue _fun0021 }
 39:
            var5 = var3.id;
            var4 = _closure1_slot7;
            var3 = var4.getCurrentUser;
            var7 = var3.bind(var4)();
            var3 = null;
            var8 = var3 == var7;
            var3 = undefined;
            if(var8) { _fun0021_ip = 73; continue _fun0021 }
 68:
            var3 = var7.id;
 73:
            var3 = var5 === var3;
            if(!var3) { _fun0021_ip = 88; continue _fun0021 }
 80:
            var5 = true;
            _closure1_slot9 = var5;
            var3 = undefined;
 88:
            var2 = var3;
 91:
            var1 = var2;
 94:
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
        var3 = _closure1_slot11;
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