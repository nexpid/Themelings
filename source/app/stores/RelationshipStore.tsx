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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
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
            var9 = _closure1_slot27;
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
            var7 = _closure1_slot27;
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
    var _closure1_slot26 = var1;
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
case 0:
            var4 = arg1;
            var7 = arg2;
            var3 = _closure1_slot11;
            var2 = var3.get;
            var6 = var2.bind(var3)(var4);
            if(!(var6 !== var7)) { _fun0005_ip = 39; continue _fun0005 }
case 7:
            var2 = null;
            if(!(var2 != var6)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var5 = _closure1_slot24;
            var3 = var5.get;
            var5 = var3.bind(var5)(var6);
            if(!(var2 != var5)) { _fun0005_ip = 40; continue _fun0005 }
case 42:
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
case 40:
            var5 = _closure1_slot11;
            var3 = var5.set;
            var3 = var3.bind(var5)(var4, var7);
            var5 = _closure1_slot24;
            var3 = var5.get;
            var3 = var3.bind(var5)(var7);
            if(!(var2 == var3)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
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
            _fun0005_ip = 18; continue _fun0005;
case 43:
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
case 18:
            var2 = _closure1_slot28;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 39:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function removeRelationship(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot11;
            var2 = var3.get;
            var6 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var6)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var5 = _closure1_slot11;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
            var5 = _closure1_slot24;
            var3 = var5.get;
            var3 = var3.bind(var5)(var6);
            if(!(var2 != var3)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
case 47:
            var2 = _closure1_slot28;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 45:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function recountPending() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
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
            if(var8) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var2 = var7.size;
case 49:
            var8 = var4 != var2;
            var4 = 0;
            var7 = 0;
            if(!var8) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var7 = var2;
case 51:
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
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 55; continue _fun0008;
case 53:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 55:
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
case 0:
                var5 = arg1;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                var4 = _closure1_slot11;
                var3 = var4.get;
                var3 = var3.bind(var4)(var5);
                var2 = _closure1_slot10;
                var2 = var2.FRIEND;
                var1 = var3 === var2;
case 56:
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
case 0:
                var4 = arg1;
                var3 = this;
                var1 = var3.isBlocked;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0010_ip = 58; continue _fun0010 }
case 33:
                var2 = var3.isIgnored;
                var1 = var2.bind(var3)(var4);
case 58:
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
case 0:
                var4 = arg1;
                var3 = this;
                var1 = var3.isBlockedForMessage;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0011_ip = 58; continue _fun0011 }
case 33:
                var2 = var3.isIgnoredForMessage;
                var1 = var2.bind(var3)(var4);
case 58:
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
case 0:
                var5 = arg1;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0012_ip = 56; continue _fun0012 }
case 57:
                var4 = _closure1_slot11;
                var3 = var4.get;
                var3 = var3.bind(var4)(var5);
                var2 = _closure1_slot10;
                var2 = var2.BLOCKED;
                var1 = var3 === var2;
case 56:
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
case 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.author;
                var5 = null;
                if(!(var5 != var2)) { _fun0013_ip = 59; continue _fun0013 }
case 60:
                var7 = _closure1_slot11;
                var6 = var7.get;
                var4 = var1.author;
                var4 = var4.id;
                var4 = var6.bind(var7)(var4);
                var2 = _closure1_slot10;
                var2 = var2.BLOCKED;
                if(!(var4 !== var2)) { _fun0013_ip = 61; continue _fun0013 }
case 59:
                var2 = _closure1_slot8;
                var4 = var1 instanceof var2;
                var2 = var3.isBlocked;
                if(var4) { _fun0013_ip = 62; continue _fun0013 }
case 63:
                var6 = var1.interaction_metadata;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0013_ip = 64; continue _fun0013 }
case 52:
                var6 = var6.user;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0013_ip = 64; continue _fun0013 }
case 65:
                var4 = var6.id;
case 64:
                var4 = var2.bind(var3)(var4);
                if(!var4) { _fun0013_ip = 66; continue _fun0013 }
case 67:
                var4 = true;
                return var4;
case 62:
                var4 = var1.interactionMetadata;
                var7 = var5 == var4;
                var1 = undefined;
                if(var7) { _fun0013_ip = 68; continue _fun0013 }
case 69:
                var4 = var4.user;
                var5 = var5 == var4;
                var1 = undefined;
                if(var5) { _fun0013_ip = 68; continue _fun0013 }
case 70:
                var1 = var4.id;
case 68:
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0013_ip = 71; continue _fun0013 }
case 66:
                var1 = false;
                return var1;
case 71:
                var1 = true;
                return var1;
case 61:
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
case 0:
                var5 = arg1;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0014_ip = 72; continue _fun0014 }
case 57:
                var4 = _closure1_slot11;
                var2 = var4.get;
                var4 = var2.bind(var4)(var5);
                var2 = _closure1_slot10;
                var2 = var2.BLOCKED;
                var2 = var4 !== var2;
                if(!var2) { _fun0014_ip = 59; continue _fun0014 }
case 6:
                var4 = _closure1_slot15;
                var3 = var4.has;
                var2 = var3.bind(var4)(var5);
case 59:
                var1 = var2;
case 72:
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
case 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.author;
                var5 = null;
                if(!(var5 != var2)) { _fun0015_ip = 56; continue _fun0015 }
case 60:
                var4 = var3.isIgnored;
                var2 = var1.author;
                var2 = var2.id;
                var2 = var4.bind(var3)(var2);
                if(var2) { _fun0015_ip = 73; continue _fun0015 }
case 56:
                var2 = _closure1_slot8;
                var4 = var1 instanceof var2;
                var2 = var3.isIgnored;
                if(var4) { _fun0015_ip = 65; continue _fun0015 }
case 72:
                var6 = var1.interaction_metadata;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0015_ip = 44; continue _fun0015 }
case 45:
                var6 = var6.user;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0015_ip = 44; continue _fun0015 }
case 74:
                var4 = var6.id;
case 44:
                var4 = var2.bind(var3)(var4);
                if(!var4) { _fun0015_ip = 75; continue _fun0015 }
case 55:
                var4 = true;
                return var4;
case 65:
                var4 = var1.interactionMetadata;
                var7 = var5 == var4;
                var1 = undefined;
                if(var7) { _fun0015_ip = 76; continue _fun0015 }
case 77:
                var4 = var4.user;
                var5 = var5 == var4;
                var1 = undefined;
                if(var5) { _fun0015_ip = 76; continue _fun0015 }
case 78:
                var1 = var4.id;
case 76:
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0015_ip = 70; continue _fun0015 }
case 75:
                var1 = false;
                return var1;
case 70:
                var1 = true;
                return var1;
case 73:
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
case 0:
                var4 = arg1;
                var3 = this;
                var5 = _closure1_slot11;
                var2 = var5.get;
                var2 = var2.bind(var5)(var4);
                var1 = _closure1_slot10;
                var1 = var1.PENDING_INCOMING;
                var1 = var2 === var1;
                if(!var1) { _fun0016_ip = 42; continue _fun0016 }
case 79:
                var2 = var3.isSpam;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
case 42:
                if(!var1) { _fun0016_ip = 80; continue _fun0016 }
case 81:
                var2 = var3.isIgnored;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
case 80:
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
case 0:
                var3 = _closure1_slot24;
                var2 = var3.get;
                var1 = _closure1_slot10;
                var1 = var1.PENDING_OUTGOING;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0017_ip = 56; continue _fun0017 }
case 82:
                var2 = var3.size;
case 56:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0017_ip = 8; continue _fun0017 }
case 83:
                var1 = var2;
case 8:
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
case 0:
                var3 = _closure1_slot24;
                var2 = var3.get;
                var1 = _closure1_slot10;
                var1 = var1.FRIEND;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0018_ip = 56; continue _fun0018 }
case 82:
                var2 = var3.size;
case 56:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0018_ip = 8; continue _fun0018 }
case 83:
                var1 = var2;
case 8:
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
case 0:
                var4 = _closure1_slot11;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0019_ip = 41; continue _fun0019 }
case 46:
                var2 = _closure1_slot10;
                var1 = var2.NONE;
case 41:
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
case 0:
                var2 = _closure1_slot23;
                var2 = var2.friends;
                var6 = null;
                if(!(var6 == var2)) { _fun0020_ip = 50; continue _fun0020 }
case 84:
                var3 = _closure1_slot23;
                var2 = global;
                var5 = var2.Array;
                var4 = var5.from;
                var8 = _closure1_slot24;
                var7 = var8.get;
                var2 = _closure1_slot10;
                var2 = var2.FRIEND;
                var2 = var7.bind(var8)(var2);
                if(!(var6 == var2)) { _fun0020_ip = 47; continue _fun0020 }
case 40:
                var2 = new Array(0);
case 47:
                var2 = var4.bind(var5)(var2);
                var3['friends'] = var2;
case 50:
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
case 0:
                var2 = _closure1_slot23;
                var2 = var2.blocked;
                var6 = null;
                if(!(var6 == var2)) { _fun0021_ip = 50; continue _fun0021 }
case 84:
                var3 = _closure1_slot23;
                var2 = global;
                var5 = var2.Array;
                var4 = var5.from;
                var8 = _closure1_slot24;
                var7 = var8.get;
                var2 = _closure1_slot10;
                var2 = var2.BLOCKED;
                var2 = var7.bind(var8)(var2);
                if(!(var6 == var2)) { _fun0021_ip = 47; continue _fun0021 }
case 40:
                var2 = new Array(0);
case 47:
                var2 = var4.bind(var5)(var2);
                var3['blocked'] = var2;
case 50:
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
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot23;
                var4 = var3.ignored;
                var3 = null;
                if(!(var3 == var4)) { _fun0022_ip = 49; continue _fun0022 }
case 38:
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
case 49:
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
case 0:
                var2 = _closure1_slot23;
                var2 = var2.blockedOrIgnored;
                var3 = null;
                if(!(var3 == var2)) { _fun0023_ip = 85; continue _fun0023 }
case 86:
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
                if(!(var3 != var4)) { _fun0023_ip = 87; continue _fun0023 }
case 88:
                var3 = _closure1_slot26;
                var7 = undefined;
                var5 = var3.bind(var7)(var4);
                var4 = var5.bind(var7)();
                var3 = var4.done;
                if(var3) { _fun0023_ip = 87; continue _fun0023 }
case 55:
                var8 = var4.value;
                var3 = var6.add;
                var3 = var3.bind(var6)(var8);
                var8 = var5.bind(var7)();
                var3 = var8.done;
                var4 = var8;
                if(!var3) { _fun0023_ip = 55; continue _fun0023 }
case 87:
                var3 = _closure1_slot23;
                var5 = var2.Array;
                var4 = var5.from;
                var2 = var6.values;
                var2 = var2.bind(var6)();
                var2 = var4.bind(var5)(var2);
                var3['blockedOrIgnored'] = var2;
case 85:
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
case 0:
                var2 = arg1;
                var3 = _closure1_slot19;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 != var4)) { _fun0024_ip = 50; continue _fun0024 }
case 33:
                var3 = _closure1_slot19;
                var3 = var3[var2];
                var4 = var3.expiry;
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var3 = var3.bind(var5)();
                if(!(!(var4 < var3))) { _fun0024_ip = 80; continue _fun0024 }
case 8:
                var3 = _closure1_slot19;
                var3 = var3[var2];
                var3 = var3.isStranger;
                return var3;
case 80:
                var1 = _closure1_slot19;
                var1 = delete var1[var2];
case 50:
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
case 0:
                var2 = arg1;
                var6 = _closure1_slot29;
                var5 = var2.id;
                var4 = var2.type;
                var1 = undefined;
                var4 = var6.bind(var1)(var5, var4);
                var4 = var2.nickname;
                var5 = null;
                if(!(var5 != var4)) { _fun0025_ip = 89; continue _fun0025 }
case 79:
                var7 = _closure1_slot12;
                var6 = var2.id;
                var4 = var2.nickname;
                var7[var6] = var4;
case 89:
                var4 = var2.since;
                if(!(var5 != var4)) { _fun0025_ip = 90; continue _fun0025 }
case 53:
                var7 = _closure1_slot13;
                var6 = var2.id;
                var4 = var2.since;
                var7[var6] = var4;
case 90:
                var4 = var2.is_spam_request;
                if(!var4) { _fun0025_ip = 91; continue _fun0025 }
case 44:
                var7 = _closure1_slot14;
                var6 = var7.add;
                var4 = var2.id;
                var4 = var6.bind(var7)(var4);
case 91:
                var4 = var2.origin_application_id;
                if(!(var5 != var4)) { _fun0025_ip = 92; continue _fun0025 }
case 62:
                var6 = _closure1_slot17;
                var5 = var2.id;
                var4 = var2.origin_application_id;
                var6[var5] = var4;
case 92:
                var4 = var2.user_ignored;
                if(!var4) { _fun0025_ip = 93; continue _fun0025 }
case 94:
                var6 = _closure1_slot15;
                var5 = var6.add;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var5 = var2.type;
                var4 = _closure1_slot10;
                var4 = var4.PENDING_INCOMING;
                if(!(var5 === var4)) { _fun0025_ip = 93; continue _fun0025 }
case 95:
                var4 = _closure1_slot16;
                var3 = var4.add;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
case 93:
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
case 0:
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
            if(var3) { _fun0026_ip = 96; continue _fun0026 }
case 80:
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
            if(!var3) { _fun0026_ip = 80; continue _fun0026 }
case 96:
            var2 = _closure1_slot31;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['OVERLAY_INITIALIZE'] = var9;
    var9 = function handleRelationshipAdd(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
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
            if(!(var4 != var3)) { _fun0027_ip = 97; continue _fun0027 }
case 98:
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
case 97:
            var3 = var5.relationship;
            var3 = var3.since;
            if(!(var4 != var3)) { _fun0027_ip = 99; continue _fun0027 }
case 100:
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
case 99:
            var3 = var5.relationship;
            var3 = var3.originApplicationId;
            if(!(var4 != var3)) { _fun0027_ip = 101; continue _fun0027 }
case 26:
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
case 101:
            var3 = var5.relationship;
            var3 = var3.isSpamRequest;
            var7 = _closure1_slot14;
            if(var3) { _fun0027_ip = 102; continue _fun0027 }
case 103:
            var4 = var7.delete;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
            _fun0027_ip = 104; continue _fun0027;
case 102:
            var4 = var7.add;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
case 104:
            var3 = var5.relationship;
            var3 = var3.userIgnored;
            var7 = _closure1_slot15;
            if(var3) { _fun0027_ip = 105; continue _fun0027 }
case 106:
            var4 = var7.delete;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
            var8 = _closure1_slot16;
            var4 = var8.delete;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var8)(var3);
            _fun0027_ip = 107; continue _fun0027;
case 105:
            var4 = var7.add;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
            var3 = var5.relationship;
            var4 = var3.type;
            var3 = _closure1_slot10;
            var3 = var3.PENDING_INCOMING;
            if(!(var4 !== var3)) { _fun0027_ip = 108; continue _fun0027 }
case 109:
            var3 = var5.relationship;
            var4 = var3.type;
            var3 = _closure1_slot10;
            var3 = var3.FRIEND;
            if(!(var4 === var3)) { _fun0027_ip = 107; continue _fun0027 }
case 110:
            var7 = _closure1_slot16;
            var4 = var7.delete;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
            _fun0027_ip = 107; continue _fun0027;
case 108:
            var7 = _closure1_slot16;
            var4 = var7.add;
            var3 = var5.relationship;
            var3 = var3.id;
            var3 = var4.bind(var7)(var3);
case 107:
            var3 = _closure1_slot31;
            var3 = var3.bind(var1)();
            var3 = var5.relationship;
            var4 = var3.type;
            var3 = _closure1_slot10;
            var3 = var3.FRIEND;
            var3 = var4 === var3;
            if(!var3) { _fun0027_ip = 111; continue _fun0027 }
case 112:
            var4 = _closure1_slot10;
            var4 = var4.PENDING_OUTGOING;
            var3 = var6 === var4;
case 111:
            if(!var3) { _fun0027_ip = 113; continue _fun0027 }
case 114:
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
case 113:
            return var1;
        }
    };
    var2['RELATIONSHIP_ADD'] = var9;
    var9 = function handleRelationshipRemove(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
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
            if(!(var5 != var4)) { _fun0028_ip = 115; continue _fun0028 }
case 116:
            var6 = {};
            var7 = _closure1_slot12;
            var8 = var6;
            var4 = copyDataProperties(var8, var7);
            _closure1_slot12 = var6;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = delete var6[var4];
case 115:
            var6 = _closure1_slot13;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = var6[var4];
            if(!(var5 != var4)) { _fun0028_ip = 117; continue _fun0028 }
case 118:
            var6 = {};
            var7 = _closure1_slot13;
            var8 = var6;
            var4 = copyDataProperties(var8, var7);
            _closure1_slot13 = var6;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = delete var6[var4];
case 117:
            var6 = _closure1_slot17;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = var6[var4];
            if(!(var5 != var4)) { _fun0028_ip = 24; continue _fun0028 }
case 18:
            var5 = {};
            var7 = _closure1_slot17;
            var8 = var5;
            var4 = copyDataProperties(var8, var7);
            _closure1_slot17 = var5;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = delete var5[var4];
case 24:
            var4 = var3.relationship;
            var4 = var4.userIgnored;
            if(var4) { _fun0028_ip = 119; continue _fun0028 }
case 120:
            var6 = _closure1_slot15;
            var5 = var6.delete;
            var4 = var3.relationship;
            var4 = var4.id;
            var4 = var5.bind(var6)(var4);
case 119:
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
case 0:
            var1 = arg1;
            var3 = var1.relationship;
            var6 = _closure1_slot29;
            var5 = var3.id;
            var4 = var3.type;
            var1 = undefined;
            var4 = var6.bind(var1)(var5, var4);
            var4 = var3.since;
            var5 = null;
            if(!(var5 != var4)) { _fun0029_ip = 34; continue _fun0029 }
case 6:
            var7 = _closure1_slot13;
            var6 = var3.id;
            var4 = var3.since;
            var7[var6] = var4;
            _fun0029_ip = 63; continue _fun0029;
case 34:
            var6 = _closure1_slot13;
            var4 = var3.id;
            var4 = delete var6[var4];
case 63:
            var4 = var3.nickname;
            if(!(var5 != var4)) { _fun0029_ip = 121; continue _fun0029 }
case 122:
            var7 = _closure1_slot12;
            var6 = var3.id;
            var4 = var3.nickname;
            var7[var6] = var4;
            _fun0029_ip = 77; continue _fun0029;
case 121:
            var6 = _closure1_slot12;
            var4 = var3.id;
            var4 = delete var6[var4];
case 77:
            var4 = var3.isSpamRequest;
            var7 = _closure1_slot14;
            if(var4) { _fun0029_ip = 94; continue _fun0029 }
case 123:
            var6 = var7.delete;
            var4 = var3.id;
            var4 = var6.bind(var7)(var4);
            _fun0029_ip = 21; continue _fun0029;
case 94:
            var6 = var7.add;
            var4 = var3.id;
            var4 = var6.bind(var7)(var4);
case 21:
            var6 = _closure1_slot19;
            var4 = var3.id;
            var4 = var6[var4];
            if(!(var5 != var4)) { _fun0029_ip = 124; continue _fun0029 }
case 125:
            var6 = _closure1_slot19;
            var4 = var3.id;
            var4 = delete var6[var4];
case 124:
            var4 = var3.originApplicationId;
            if(!(var5 != var4)) { _fun0029_ip = 126; continue _fun0029 }
case 127:
            var6 = _closure1_slot17;
            var5 = var3.id;
            var4 = var3.originApplicationId;
            var6[var5] = var4;
            _fun0029_ip = 128; continue _fun0029;
case 126:
            var5 = _closure1_slot17;
            var4 = var3.id;
            var4 = delete var5[var4];
case 128:
            var4 = var3.userIgnored;
            var6 = _closure1_slot15;
            if(var4) { _fun0029_ip = 102; continue _fun0029 }
case 129:
            var5 = var6.delete;
            var4 = var3.id;
            var4 = var5.bind(var6)(var4);
            var7 = _closure1_slot16;
            var5 = var7.delete;
            var4 = var3.id;
            var4 = var5.bind(var7)(var4);
            _fun0029_ip = 130; continue _fun0029;
case 102:
            var5 = var6.add;
            var4 = var3.id;
            var4 = var5.bind(var6)(var4);
            var5 = var3.type;
            var4 = _closure1_slot10;
            var4 = var4.PENDING_INCOMING;
            if(!(var5 === var4)) { _fun0029_ip = 130; continue _fun0029 }
case 31:
            var5 = _closure1_slot16;
            var4 = var5.add;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
case 130:
            var2 = _closure1_slot31;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['RELATIONSHIP_UPDATE'] = var9;
    var9 = function handlePendingIncomingRemoved() {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var4 = _closure1_slot26;
            var3 = _closure1_slot11;
            var1 = var3.keys;
            var3 = var1.bind(var3)();
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.bind(var1)();
            var3 = var4.done;
            if(var3) { _fun0030_ip = 131; continue _fun0030 }
case 132:
            var6 = var4.value;
            var7 = _closure1_slot11;
            var3 = var7.get;
            var7 = var3.bind(var7)(var6);
            var3 = _closure1_slot10;
            var3 = var3.PENDING_INCOMING;
            if(!(var7 === var3)) { _fun0030_ip = 133; continue _fun0030 }
case 5:
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
case 133:
            var6 = var5.bind(var1)();
            var3 = var6.done;
            var4 = var6;
            if(!var3) { _fun0030_ip = 132; continue _fun0030 }
case 131:
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