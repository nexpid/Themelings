// app/stores/RelationshipStore.tsx
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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
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
            var9 = _closure1_slot27;
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
            var7 = _closure1_slot27;
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
    var _closure1_slot26 = var1;
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
    var _closure1_slot27 = var1;
    var1 = function resetUserIdLists() {
        var3 = _closure1_slot23;
        var1 = undefined;
        var3['friends'] = var1;
        var3 = _closure1_slot23;
        var3['blocked'] = var1;
        var3 = _closure1_slot23;
        var3['ignored'] = var1;
        var2 = _closure1_slot23;
        var2['blockedOrIgnored'] = var1;
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function upsertRelationship(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var7 = arg2;
            var3 = _closure1_slot11;
            var2 = var3.get;
            var6 = var2.bind(var3)(var4);
            if(!(var6 !== var7)) { _fun0005_ip = 173; continue _fun0005 }
 30:
            var2 = null;
            if(!(var2 != var6)) { _fun0005_ip = 64; continue _fun0005 }
 36:
            var5 = _closure1_slot24;
            var3 = var5.get;
            var5 = var3.bind(var5)(var6);
            if(!(var2 != var5)) { _fun0005_ip = 64; continue _fun0005 }
 54:
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
 64:
            var5 = _closure1_slot11;
            var3 = var5.set;
            var3 = var3.bind(var5)(var4, var7);
            var5 = _closure1_slot24;
            var3 = var5.get;
            var3 = var3.bind(var5)(var7);
            if(!(var2 == var3)) { _fun0005_ip = 153; continue _fun0005 }
 97:
            var6 = _closure1_slot24;
            var5 = var6.set;
            var2 = global;
            var9 = var2.Set;
            var2 = new Array(1);
            var2[0] = var4;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var12 = var8;
            var11 = var2;
            var2 = new var12[var9](var11, var10);
            var2 = var2 instanceof Object ? var2 : var8;
            var2 = var5.bind(var6)(var7, var2);
            _fun0005_ip = 163; continue _fun0005;
 153:
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
 163:
            var2 = _closure1_slot28;
            var1 = undefined;
            var1 = var2.bind(var1)();
 173:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function removeRelationship(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot11;
            var2 = var3.get;
            var6 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var6)) { _fun0006_ip = 78; continue _fun0006 }
 26:
            var5 = _closure1_slot11;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
            var5 = _closure1_slot24;
            var3 = var5.get;
            var3 = var3.bind(var5)(var6);
            if(!(var2 != var3)) { _fun0006_ip = 68; continue _fun0006 }
 58:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
 68:
            var2 = _closure1_slot28;
            var1 = undefined;
            var1 = var2.bind(var1)();
 78:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function recountPending() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = _closure1_slot14;
            var1 = var1.size;
            _closure1_slot21 = var1;
            var1 = _closure1_slot16;
            var1 = var1.size;
            _closure1_slot22 = var1;
            var1 = global;
            var6 = var1.Math;
            var5 = var6.max;
            var4 = _closure1_slot24;
            var2 = var4.get;
            var1 = _closure1_slot10;
            var1 = var1.PENDING_INCOMING;
            var7 = var2.bind(var4)(var1);
            var4 = null;
            var8 = var4 == var7;
            var1 = undefined;
            var2 = undefined;
            if(var8) { _fun0007_ip = 84; continue _fun0007 }
 79:
            var2 = var7.size;
 84:
            var8 = var4 != var2;
            var4 = 0;
            var7 = 0;
            if(!var8) { _fun0007_ip = 98; continue _fun0007 }
 95:
            var7 = var2;
 98:
            var2 = _closure1_slot21;
            var7 = var7 - var2;
            var2 = _closure1_slot22;
            var2 = var7 - var2;
            var2 = var5.bind(var6)(var2, var4);
            _closure1_slot20 = var2;
            var2 = _closure1_slot18;
            var2 = var2 + 1;
            _closure1_slot18 = var2;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var8 = 0;
    var9 = var6[var8];
    var1 = undefined;
    var9 = var7.bind(var1)(var9);
    var _closure1_slot2 = var9;
    var9 = 1;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 5;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 7;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 8;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.RelationshipTypes;
    var _closure1_slot10 = var9;
    var9 = var2.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot11 = var9;
    var9 = {};
    var _closure1_slot12 = var9;
    var9 = {};
    var _closure1_slot13 = var9;
    var9 = var2.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot14 = var9;
    var9 = var2.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot15 = var9;
    var9 = var2.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot16 = var9;
    var9 = {};
    var _closure1_slot17 = var9;
    var _closure1_slot18 = var8;
    var9 = {};
    var _closure1_slot19 = var9;
    var _closure1_slot20 = var8;
    var _closure1_slot21 = var8;
    var _closure1_slot22 = var8;
    var8 = {};
    var8['friends'] = var1;
    var8['blocked'] = var1;
    var8['ignored'] = var1;
    var8['blockedOrIgnored'] = var1;
    var _closure1_slot23 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot24 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function RelationshipStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
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
            var2 = var3.waitFor;
            var1 = _closure1_slot9;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(28);
        var1[0] = var5;
        var5 = {};
        var7 = 'isFriend';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = arg1;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0009_ip = 43; continue _fun0009 }
 12:
                var4 = _closure1_slot11;
                var3 = var4.get;
                var3 = var3.bind(var4)(var5);
                var2 = _closure1_slot10;
                var2 = var2.FRIEND;
                var1 = var3 === var2;
 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isBlockedOrIgnored';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var1 = var3.isBlocked;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0010_ip = 31; continue _fun0010 }
 20:
                var2 = var3.isIgnored;
                var1 = var2.bind(var3)(var4);
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isBlockedOrIgnoredForMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var1 = var3.isBlockedForMessage;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0011_ip = 31; continue _fun0011 }
 20:
                var2 = var3.isIgnoredForMessage;
                var1 = var2.bind(var3)(var4);
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isBlocked';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var5 = arg1;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0012_ip = 43; continue _fun0012 }
 12:
                var4 = _closure1_slot11;
                var3 = var4.get;
                var3 = var3.bind(var4)(var5);
                var2 = _closure1_slot10;
                var2 = var2.BLOCKED;
                var1 = var3 === var2;
 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isBlockedForMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.author;
                var5 = null;
                if(!(var5 != var2)) { _fun0013_ip = 60; continue _fun0013 }
 18:
                var7 = _closure1_slot11;
                var6 = var7.get;
                var4 = var1.author;
                var4 = var4.id;
                var4 = var6.bind(var7)(var4);
                var2 = _closure1_slot10;
                var2 = var2.BLOCKED;
                if(!(var4 !== var2)) { _fun0013_ip = 176; continue _fun0013 }
 60:
                var2 = _closure1_slot8;
                var4 = var1 instanceof var2;
                var2 = var3.isBlocked;
                if(var4) { _fun0013_ip = 126; continue _fun0013 }
 80:
                var6 = var1.interaction_metadata;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0013_ip = 114; continue _fun0013 }
 95:
                var6 = var6.user;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0013_ip = 114; continue _fun0013 }
 109:
                var4 = var6.id;
 114:
                var4 = var2.bind(var3)(var4);
                if(!var4) { _fun0013_ip = 168; continue _fun0013 }
 122:
                var4 = true;
                return var4;
 126:
                var4 = var1.interactionMetadata;
                var7 = var5 == var4;
                var1 = undefined;
                if(var7) { _fun0013_ip = 160; continue _fun0013 }
 141:
                var4 = var4.user;
                var5 = var5 == var4;
                var1 = undefined;
                if(var5) { _fun0013_ip = 160; continue _fun0013 }
 155:
                var1 = var4.id;
 160:
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0013_ip = 172; continue _fun0013 }
 168:
                var1 = false;
                return var1;
 172:
                var1 = true;
                return var1;
 176:
                var1 = true;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isIgnored';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var5 = arg1;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0014_ip = 63; continue _fun0014 }
 12:
                var4 = _closure1_slot11;
                var2 = var4.get;
                var4 = var2.bind(var4)(var5);
                var2 = _closure1_slot10;
                var2 = var2.BLOCKED;
                var2 = var4 !== var2;
                if(!var2) { _fun0014_ip = 60; continue _fun0014 }
 46:
                var4 = _closure1_slot15;
                var3 = var4.has;
                var2 = var3.bind(var4)(var5);
 60:
                var1 = var2;
 63:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isIgnoredForMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.author;
                var5 = null;
                if(!(var5 != var2)) { _fun0015_ip = 43; continue _fun0015 }
 18:
                var4 = var3.isIgnored;
                var2 = var1.author;
                var2 = var2.id;
                var2 = var4.bind(var3)(var2);
                if(var2) { _fun0015_ip = 159; continue _fun0015 }
 43:
                var2 = _closure1_slot8;
                var4 = var1 instanceof var2;
                var2 = var3.isIgnored;
                if(var4) { _fun0015_ip = 109; continue _fun0015 }
 63:
                var6 = var1.interaction_metadata;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0015_ip = 97; continue _fun0015 }
 78:
                var6 = var6.user;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0015_ip = 97; continue _fun0015 }
 92:
                var4 = var6.id;
 97:
                var4 = var2.bind(var3)(var4);
                if(!var4) { _fun0015_ip = 151; continue _fun0015 }
 105:
                var4 = true;
                return var4;
 109:
                var4 = var1.interactionMetadata;
                var7 = var5 == var4;
                var1 = undefined;
                if(var7) { _fun0015_ip = 143; continue _fun0015 }
 124:
                var4 = var4.user;
                var5 = var5 == var4;
                var1 = undefined;
                if(var5) { _fun0015_ip = 143; continue _fun0015 }
 138:
                var1 = var4.id;
 143:
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0015_ip = 155; continue _fun0015 }
 151:
                var1 = false;
                return var1;
 155:
                var1 = true;
                return var1;
 159:
                var1 = true;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isUnfilteredPendingIncoming';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var5 = _closure1_slot11;
                var2 = var5.get;
                var2 = var2.bind(var5)(var4);
                var1 = _closure1_slot10;
                var1 = var1.PENDING_INCOMING;
                var1 = var2 === var1;
                if(!var1) { _fun0016_ip = 54; continue _fun0016 }
 40:
                var2 = var3.isSpam;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
 54:
                if(!var1) { _fun0016_ip = 71; continue _fun0016 }
 57:
                var2 = var3.isIgnored;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
 71:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getPendingCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getSpamCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getPendingIgnoredCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getOutgoingCount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var3 = _closure1_slot24;
                var2 = var3.get;
                var1 = _closure1_slot10;
                var1 = var1.PENDING_OUTGOING;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0017_ip = 43; continue _fun0017 }
 38:
                var2 = var3.size;
 43:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0017_ip = 55; continue _fun0017 }
 52:
                var1 = var2;
 55:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getFriendCount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var3 = _closure1_slot24;
                var2 = var3.get;
                var1 = _closure1_slot10;
                var1 = var1.FRIEND;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0018_ip = 43; continue _fun0018 }
 38:
                var2 = var3.size;
 43:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0018_ip = 55; continue _fun0018 }
 52:
                var1 = var2;
 55:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getRelationshipCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.size;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getMutableRelationships';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'isSpam';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot14;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getRelationshipType';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var4 = _closure1_slot11;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0019_ip = 36; continue _fun0019 }
 26:
                var2 = _closure1_slot10;
                var1 = var2.NONE;
 36:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getNickname';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getSince';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot13;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getSinces';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getFriendIDs';
        var5['key'] = var7;
        var7 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var2 = _closure1_slot23;
                var2 = var2.friends;
                var6 = null;
                if(!(var6 == var2)) { _fun0020_ip = 79; continue _fun0020 }
 19:
                var3 = _closure1_slot23;
                var2 = global;
                var5 = var2.Array;
                var4 = var5.from;
                var8 = _closure1_slot24;
                var7 = var8.get;
                var2 = _closure1_slot10;
                var2 = var2.FRIEND;
                var2 = var7.bind(var8)(var2);
                if(!(var6 == var2)) { _fun0020_ip = 68; continue _fun0020 }
 64:
                var2 = new Array(0);
 68:
                var2 = var4.bind(var5)(var2);
                var3['friends'] = var2;
 79:
                var1 = _closure1_slot23;
                var1 = var1.friends;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'getBlockedIDs';
        var5['key'] = var7;
        var7 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var2 = _closure1_slot23;
                var2 = var2.blocked;
                var6 = null;
                if(!(var6 == var2)) { _fun0021_ip = 79; continue _fun0021 }
 19:
                var3 = _closure1_slot23;
                var2 = global;
                var5 = var2.Array;
                var4 = var5.from;
                var8 = _closure1_slot24;
                var7 = var8.get;
                var2 = _closure1_slot10;
                var2 = var2.BLOCKED;
                var2 = var7.bind(var8)(var2);
                if(!(var6 == var2)) { _fun0021_ip = 68; continue _fun0021 }
 64:
                var2 = new Array(0);
 68:
                var2 = var4.bind(var5)(var2);
                var3['blocked'] = var2;
 79:
                var1 = _closure1_slot23;
                var1 = var1.blocked;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'getIgnoredIDs';
        var5['key'] = var7;
        var7 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot23;
                var4 = var3.ignored;
                var3 = null;
                if(!(var3 == var4)) { _fun0022_ip = 84; continue _fun0022 }
 28:
                var3 = _closure1_slot23;
                var4 = global;
                var6 = var4.Array;
                var5 = var6.from;
                var7 = _closure1_slot15;
                var4 = var7.values;
                var4 = var4.bind(var7)();
                var5 = var5.bind(var6)(var4);
                var4 = var5.filter;
                var2 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.isIgnored;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var3['ignored'] = var2;
 84:
                var1 = _closure1_slot23;
                var1 = var1.ignored;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'getBlockedOrIgnoredIDs';
        var5['key'] = var7;
        var7 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var2 = _closure1_slot23;
                var2 = var2.blockedOrIgnored;
                var3 = null;
                if(!(var3 == var2)) { _fun0023_ip = 170; continue _fun0023 }
 22:
                var2 = global;
                var6 = var2.Set;
                var9 = _closure1_slot15;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var10 = var5;
                var4 = new var10[var6](var9, var8);
                var6 = var4 instanceof Object ? var4 : var5;
                var7 = _closure1_slot24;
                var5 = var7.get;
                var4 = _closure1_slot10;
                var4 = var4.BLOCKED;
                var4 = var5.bind(var7)(var4);
                if(!(var3 != var4)) { _fun0023_ip = 135; continue _fun0023 }
 82:
                var3 = _closure1_slot26;
                var7 = undefined;
                var5 = var3.bind(var7)(var4);
                var4 = var5.bind(var7)();
                var3 = var4.done;
                if(var3) { _fun0023_ip = 135; continue _fun0023 }
 105:
                var8 = var4.value;
                var3 = var6.add;
                var3 = var3.bind(var6)(var8);
                var8 = var5.bind(var7)();
                var3 = var8.done;
                var4 = var8;
                if(!var3) { _fun0023_ip = 105; continue _fun0023 }
 135:
                var3 = _closure1_slot23;
                var5 = var2.Array;
                var4 = var5.from;
                var2 = var6.values;
                var2 = var2.bind(var6)();
                var2 = var4.bind(var5)(var2);
                var3['blockedOrIgnored'] = var2;
 170:
                var1 = _closure1_slot23;
                var1 = var1.blockedOrIgnored;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'getOriginApplicationId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot17;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'isStranger';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var2 = arg1;
                var3 = _closure1_slot19;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 != var4)) { _fun0024_ip = 79; continue _fun0024 }
 20:
                var3 = _closure1_slot19;
                var3 = var3[var2];
                var4 = var3.expiry;
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var3 = var3.bind(var5)();
                if(!(!(var4 < var3))) { _fun0024_ip = 71; continue _fun0024 }
 55:
                var3 = _closure1_slot19;
                var3 = var3[var2];
                var3 = var3.isStranger;
                return var3;
 71:
                var1 = _closure1_slot19;
                var1 = delete var1[var2];
 79:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[27] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'RelationshipStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen(arg1) {
        var3 = _closure1_slot11;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot24;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = {};
        _closure1_slot12 = var1;
        var1 = {};
        _closure1_slot13 = var1;
        var3 = _closure1_slot15;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot14;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot16;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot28;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = {};
        _closure1_slot17 = var3;
        var3 = {};
        _closure1_slot19 = var3;
        var3 = arg1;
        var5 = var3.relationships;
        var4 = var5.forEach;
        var3 = function(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var2 = arg1;
                var6 = _closure1_slot29;
                var5 = var2.id;
                var4 = var2.type;
                var1 = undefined;
                var4 = var6.bind(var1)(var5, var4);
                var4 = var2.nickname;
                var5 = null;
                if(!(var5 != var4)) { _fun0025_ip = 59; continue _fun0025 }
 40:
                var7 = _closure1_slot12;
                var6 = var2.id;
                var4 = var2.nickname;
                var7[var6] = var4;
 59:
                var4 = var2.since;
                if(!(var5 != var4)) { _fun0025_ip = 88; continue _fun0025 }
 69:
                var7 = _closure1_slot13;
                var6 = var2.id;
                var4 = var2.since;
                var7[var6] = var4;
 88:
                var4 = var2.is_spam_request;
                if(!var4) { _fun0025_ip = 116; continue _fun0025 }
 97:
                var7 = _closure1_slot14;
                var6 = var7.add;
                var4 = var2.id;
                var4 = var6.bind(var7)(var4);
 116:
                var4 = var2.origin_application_id;
                if(!(var5 != var4)) { _fun0025_ip = 145; continue _fun0025 }
 126:
                var6 = _closure1_slot17;
                var5 = var2.id;
                var4 = var2.origin_application_id;
                var6[var5] = var4;
 145:
                var4 = var2.user_ignored;
                if(!var4) { _fun0025_ip = 211; continue _fun0025 }
 154:
                var6 = _closure1_slot15;
                var5 = var6.add;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var5 = var2.type;
                var4 = _closure1_slot10;
                var4 = var4.PENDING_INCOMING;
                if(!(var5 === var4)) { _fun0025_ip = 211; continue _fun0025 }
 192:
                var4 = _closure1_slot16;
                var3 = var4.add;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
 211:
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3);
        var2 = _closure1_slot31;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleOverlayInitialize(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var3 = _closure1_slot11;
            var1 = var3.clear;
            var1 = var1.bind(var3)();
            var3 = _closure1_slot24;
            var1 = var3.clear;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot26;
            var1 = arg1;
            var3 = var1.relationships;
            var1 = undefined;
            var8 = var4.bind(var1)(var3);
            var4 = var8.bind(var1)();
            var3 = var4.done;
            var7 = 2;
            var6 = 0;
            var5 = 1;
            if(var3) { _fun0026_ip = 119; continue _fun0026 }
 71:
            var9 = var4.value;
            var3 = _closure1_slot7;
            var3 = var3.bind(var1)(var9, var7);
            var10 = _closure1_slot29;
            var9 = var3[var6];
            var3 = var3[var5];
            var3 = var10.bind(var1)(var9, var3);
            var9 = var8.bind(var1)();
            var3 = var9.done;
            var4 = var9;
            if(!var3) { _fun0026_ip = 71; continue _fun0026 }
 119:
            var2 = _closure1_slot31;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['OVERLAY_INITIALIZE'] = var9;
    var9 = function handleRelationshipAdd(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var5 = arg1;
            var4 = _closure1_slot11;
            var3 = var4.get;
            var1 = var5.relationship;
            var1 = var1.id;
            var6 = var3.bind(var4)(var1);
            var7 = _closure1_slot29;
            var1 = var5.relationship;
            var4 = var1.id;
            var1 = var5.relationship;
            var3 = var1.type;
            var1 = undefined;
            var3 = var7.bind(var1)(var4, var3);
            var3 = var5.relationship;
            var3 = var3.nickname;
            var4 = null;
            if(!(var4 != var3)) { _fun0027_ip = 128; continue _fun0027 }
 83:
            var3 = {};
            var9 = _closure1_slot12;
            var10 = var3;
            var7 = copyDataProperties(var10, var9);
            var7 = var5.relationship;
            var8 = var7.id;
            var7 = var5.relationship;
            var7 = var7.nickname;
            var3[var8] = var7;
            _closure1_slot12 = var3;
 128:
            var3 = var5.relationship;
            var3 = var3.since;
            if(!(var4 != var3)) { _fun0027_ip = 189; continue _fun0027 }
 144:
            var3 = {};
            var9 = _closure1_slot13;
            var10 = var3;
            var7 = copyDataProperties(var10, var9);
            var7 = var5.relationship;
            var8 = var7.id;
            var7 = var5.relationship;
            var7 = var7.since;
            var3[var8] = var7;
            _closure1_slot13 = var3;
 189:
            var3 = var5.relationship;
            var3 = var3.originApplicationId;
            if(!(var4 != var3)) { _fun0027_ip = 250; continue _fun0027 }
 205:
            var3 = {};
            var9 = _closure1_slot17;
            var10 = var3;
            var4 = copyDataProperties(var10, var9);
            var4 = var5.relationship;
            var7 = var4.id;
            var4 = var5.relationship;
            var4 = var4.originApplicationId;
            var3[var7] = var4;
            _closure1_slot17 = var3;
 250:
            var3 = var5.relationship;
            var3 = var3.isSpamRequest;
            var7 = _closure1_slot14;
            if(var3) { _fun0027_ip = 292; continue _fun0027 }
 269:
            var4 = var7.delete;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
            _fun0027_ip = 313; continue _fun0027;
 292:
            var4 = var7.add;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
 313:
            var3 = var5.relationship;
            var3 = var3.userIgnored;
            var7 = _closure1_slot15;
            if(var3) { _fun0027_ip = 383; continue _fun0027 }
 332:
            var4 = var7.delete;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
            var8 = _closure1_slot16;
            var4 = var8.delete;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var8)(var3);
            _fun0027_ip = 506; continue _fun0027;
 383:
            var4 = var7.add;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
            var3 = var5.relationship;
            var4 = var3.type;
            var3 = _closure1_slot10;
            var3 = var3.PENDING_INCOMING;
            if(!(var4 !== var3)) { _fun0027_ip = 481; continue _fun0027 }
 429:
            var3 = var5.relationship;
            var4 = var3.type;
            var3 = _closure1_slot10;
            var3 = var3.FRIEND;
            if(!(var4 === var3)) { _fun0027_ip = 506; continue _fun0027 }
 454:
            var7 = _closure1_slot16;
            var4 = var7.delete;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
            _fun0027_ip = 506; continue _fun0027;
 481:
            var7 = _closure1_slot16;
            var4 = var7.add;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
 506:
            var3 = _closure1_slot31;
            var3 = var3.bind(var1)();
            var3 = var5.relationship;
            var4 = var3.type;
            var3 = _closure1_slot10;
            var3 = var3.FRIEND;
            var3 = var4 === var3;
            if(!var3) { _fun0027_ip = 556; continue _fun0027 }
 542:
            var4 = _closure1_slot10;
            var4 = var4.PENDING_OUTGOING;
            var3 = var6 === var4;
 556:
            if(!var3) { _fun0027_ip = 614; continue _fun0027 }
 559:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 9;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'FRIEND_REQUEST_ACCEPTED';
            var2['type'] = var6;
            var5 = var5.relationship;
            var5 = var5.user;
            var2['user'] = var5;
            var2 = var3.bind(var4)(var2);
 614:
            return var1;
        }
    };
    var2['RELATIONSHIP_ADD'] = var9;
    var9 = function handleRelationshipRemove(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot30;
            var1 = var3.relationship;
            var4 = var1.id;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var5 = _closure1_slot12;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = var5[var4];
            var5 = null;
            if(!(var5 != var4)) { _fun0028_ip = 85; continue _fun0028 }
 53:
            var6 = {};
            var7 = _closure1_slot12;
            var8 = var6;
            var4 = copyDataProperties(var8, var7);
            _closure1_slot12 = var6;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = delete var6[var4];
 85:
            var6 = _closure1_slot13;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = var6[var4];
            if(!(var5 != var4)) { _fun0028_ip = 140; continue _fun0028 }
 108:
            var6 = {};
            var7 = _closure1_slot13;
            var8 = var6;
            var4 = copyDataProperties(var8, var7);
            _closure1_slot13 = var6;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = delete var6[var4];
 140:
            var6 = _closure1_slot17;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = var6[var4];
            if(!(var5 != var4)) { _fun0028_ip = 195; continue _fun0028 }
 163:
            var5 = {};
            var7 = _closure1_slot17;
            var8 = var5;
            var4 = copyDataProperties(var8, var7);
            _closure1_slot17 = var5;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = delete var5[var4];
 195:
            var4 = var3.relationship;
            var4 = var4.userIgnored;
            if(var4) { _fun0028_ip = 235; continue _fun0028 }
 210:
            var6 = _closure1_slot15;
            var5 = var6.delete;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = var5.bind(var6)(var4);
 235:
            var6 = _closure1_slot16;
            var5 = var6.delete;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot14;
            var4 = var5.delete;
            var3 = var3.relationship;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var2 = _closure1_slot31;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['RELATIONSHIP_REMOVE'] = var9;
    var9 = function handleRelationshipUpdate(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var3 = var1.relationship;
            var6 = _closure1_slot29;
            var5 = var3.id;
            var4 = var3.type;
            var1 = undefined;
            var4 = var6.bind(var1)(var5, var4);
            var4 = var3.since;
            var5 = null;
            if(!(var5 != var4)) { _fun0029_ip = 67; continue _fun0029 }
 46:
            var7 = _closure1_slot13;
            var6 = var3.id;
            var4 = var3.since;
            var7[var6] = var4;
            _fun0029_ip = 80; continue _fun0029;
 67:
            var6 = _closure1_slot13;
            var4 = var3.id;
            var4 = delete var6[var4];
 80:
            var4 = var3.nickname;
            if(!(var5 != var4)) { _fun0029_ip = 111; continue _fun0029 }
 90:
            var7 = _closure1_slot12;
            var6 = var3.id;
            var4 = var3.nickname;
            var7[var6] = var4;
            _fun0029_ip = 124; continue _fun0029;
 111:
            var6 = _closure1_slot12;
            var4 = var3.id;
            var4 = delete var6[var4];
 124:
            var4 = var3.isSpamRequest;
            var7 = _closure1_slot14;
            if(var4) { _fun0029_ip = 154; continue _fun0029 }
 137:
            var6 = var7.delete;
            var4 = var3.id;
            var4 = var6.bind(var7)(var4);
            _fun0029_ip = 169; continue _fun0029;
 154:
            var6 = var7.add;
            var4 = var3.id;
            var4 = var6.bind(var7)(var4);
 169:
            var6 = _closure1_slot19;
            var4 = var3.id;
            var4 = var6[var4];
            if(!(var5 != var4)) { _fun0029_ip = 199; continue _fun0029 }
 186:
            var6 = _closure1_slot19;
            var4 = var3.id;
            var4 = delete var6[var4];
 199:
            var4 = var3.originApplicationId;
            if(!(var5 != var4)) { _fun0029_ip = 230; continue _fun0029 }
 209:
            var6 = _closure1_slot17;
            var5 = var3.id;
            var4 = var3.originApplicationId;
            var6[var5] = var4;
            _fun0029_ip = 243; continue _fun0029;
 230:
            var5 = _closure1_slot17;
            var4 = var3.id;
            var4 = delete var5[var4];
 243:
            var4 = var3.userIgnored;
            var6 = _closure1_slot15;
            if(var4) { _fun0029_ip = 292; continue _fun0029 }
 256:
            var5 = var6.delete;
            var4 = var3.id;
            var4 = var5.bind(var6)(var4);
            var7 = _closure1_slot16;
            var5 = var7.delete;
            var4 = var3.id;
            var4 = var5.bind(var7)(var4);
            _fun0029_ip = 345; continue _fun0029;
 292:
            var5 = var6.add;
            var4 = var3.id;
            var4 = var5.bind(var6)(var4);
            var5 = var3.type;
            var4 = _closure1_slot10;
            var4 = var4.PENDING_INCOMING;
            if(!(var5 === var4)) { _fun0029_ip = 345; continue _fun0029 }
 326:
            var5 = _closure1_slot16;
            var4 = var5.add;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
 345:
            var2 = _closure1_slot31;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['RELATIONSHIP_UPDATE'] = var9;
    var9 = function handlePendingIncomingRemoved() {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var4 = _closure1_slot26;
            var3 = _closure1_slot11;
            var1 = var3.keys;
            var3 = var1.bind(var3)();
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.bind(var1)();
            var3 = var4.done;
            if(var3) { _fun0030_ip = 132; continue _fun0030 }
 39:
            var6 = var4.value;
            var7 = _closure1_slot11;
            var3 = var7.get;
            var7 = var3.bind(var7)(var6);
            var3 = _closure1_slot10;
            var3 = var3.PENDING_INCOMING;
            if(!(var7 === var3)) { _fun0030_ip = 117; continue _fun0030 }
 72:
            var3 = _closure1_slot30;
            var3 = var3.bind(var1)(var6);
            var7 = _closure1_slot14;
            var3 = var7.delete;
            var3 = var3.bind(var7)(var6);
            var7 = _closure1_slot16;
            var3 = var7.delete;
            var3 = var3.bind(var7)(var6);
            var3 = _closure1_slot19;
            var3 = delete var3[var6];
 117:
            var6 = var5.bind(var1)();
            var3 = var6.done;
            var4 = var6;
            if(!var3) { _fun0030_ip = 39; continue _fun0030 }
 132:
            var2 = _closure1_slot31;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['RELATIONSHIP_PENDING_INCOMING_REMOVED'] = var9;
    var4 = function handleUpdateStrangerStatus(arg1) {
        var4 = arg1;
        var3 = _closure1_slot19;
        var2 = var4.userId;
        var1 = {};
        var5 = global;
        var6 = var5.Date;
        var5 = var6.now;
        var6 = var5.bind(var6)();
        var5 = 300000;
        var5 = var6 + var5;
        var1['expiry'] = var5;
        var4 = var4.isStranger;
        var1['isStranger'] = var4;
        var3[var2] = var1;
        var1 = undefined;
        return var1;
    };
    var2['UPDATE_STRANGER_STATUS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/RelationshipStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();