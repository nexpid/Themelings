// app/modules/applications/ApplicationStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
            var9 = _closure1_slot16;
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
            var7 = _closure1_slot16;
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
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var1 = function addApplication(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot8;
            var4 = var5.get;
            var1 = var2.id;
            var4 = var4.bind(var5)(var1);
            var7 = _closure1_slot11;
            var6 = var7.set;
            var5 = var2.id;
            var1 = global;
            var8 = var1.Date;
            var1 = var8.now;
            var1 = var1.bind(var8)();
            var1 = var6.bind(var7)(var5, var1);
            var7 = null;
            var6 = var2;
            if(!(var7 != var4)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var1 = var4.mergeFromApplicationUpdate;
            var6 = var1.bind(var4)(var2);
case 39:
            var5 = _closure1_slot8;
            var4 = var5.set;
            var1 = var2.id;
            var1 = var4.bind(var5)(var1, var6);
            var5 = _closure1_slot10;
            var4 = var5.set;
            var8 = var2.name;
            var1 = var8.toLowerCase;
            var1 = var1.bind(var8)();
            var1 = var4.bind(var5)(var1, var6);
            var5 = _closure1_slot15;
            var4 = var2.aliases;
            var1 = undefined;
            var8 = var5.bind(var1)(var4);
            var5 = var8.bind(var1)();
            var4 = var5.done;
            if(var4) { _fun0005_ip = 41; continue _fun0005 }
case 18:
            var11 = var5.value;
            var10 = _closure1_slot10;
            var9 = var10.set;
            var4 = var11.toLowerCase;
            var4 = var4.bind(var11)();
            var4 = var9.bind(var10)(var4, var6);
            var9 = var8.bind(var1)();
            var4 = var9.done;
            var5 = var9;
            if(!var4) { _fun0005_ip = 18; continue _fun0005 }
case 41:
            var4 = var2.linkedGames;
            if(!(var7 != var4)) { _fun0005_ip = 31; continue _fun0005 }
case 42:
            var5 = _closure1_slot15;
            var4 = var2.linkedGames;
            var6 = var5.bind(var1)(var4);
            var5 = var6.bind(var1)();
            var4 = var5.done;
            if(var4) { _fun0005_ip = 31; continue _fun0005 }
case 43:
            var9 = var5.value;
            var4 = var9.application;
            if(!(var7 != var4)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var8 = _closure1_slot17;
            var10 = var9.application;
            var4 = _closure1_slot6;
            var4 = var10 instanceof var4;
            if(var4) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var11 = _closure1_slot6;
            var10 = var11.createFromServer;
            var4 = var9.application;
            var4 = var10.bind(var11)(var4);
            _fun0005_ip = 48; continue _fun0005;
case 46:
            var4 = var9.application;
case 48:
            var4 = var8.bind(var1)(var4);
case 44:
            var8 = var6.bind(var1)();
            var4 = var8.done;
            var5 = var8;
            if(!var4) { _fun0005_ip = 43; continue _fun0005 }
case 31:
            var4 = _closure1_slot12;
            var3 = var4.delete;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function updateApplication(arg1) {
        var3 = _closure1_slot17;
        var4 = _closure1_slot6;
        var2 = var4.createFromServer;
        var1 = arg1;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function handleAppWithBot(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userId;
            var5 = var1.applicationId;
            var1 = _closure1_slot13;
            var1 = var1.botUserIdToAppUsage;
            var4 = var1[var3];
            var1 = _closure1_slot13;
            var2 = var1.botUserIdToAppUsage;
            var1 = null;
            if(!(var1 != var4)) { _fun0006_ip = 49; continue _fun0006 }
case 6:
            var1 = {};
            var1['applicationId'] = var5;
            var4 = var4.lastUsedMs;
            var1['lastUsedMs'] = var4;
            _fun0006_ip = 15; continue _fun0006;
case 49:
            var4 = {};
            var4['applicationId'] = var5;
            var5 = global;
            var6 = var5.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var4['lastUsedMs'] = var5;
            var1 = var4;
case 15:
            var2[var3] = var1;
            var2 = global;
            var1 = var2.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var15 = var3;
            var1 = new var15[var1](var14);
            var5 = var1 instanceof Object ? var1 : var3;
            var4 = var2.Object;
            var3 = var4.entries;
            var1 = _closure1_slot13;
            var1 = var1.botUserIdToAppUsage;
            var10 = var3.bind(var4)(var1);
            var1 = var10.length;
            var6 = 0;
            var3 = var6 < var1;
            var1 = undefined;
            var9 = 2;
            var8 = 1;
            var4 = 0;
            if(!var3) { _fun0006_ip = 50; continue _fun0006 }
case 20:
            var11 = var10[var4];
            var3 = _closure1_slot5;
            var3 = var3.bind(var1)(var11, var9);
            var12 = var3[var6];
            var11 = var3[var8];
            var3 = var5.set;
            var3 = var3.bind(var5)(var12, var11);
            var4 = var4 + 1;
            var3 = var10.length;
            if(var4 < var3) { _fun0006_ip = 20; continue _fun0006 }
case 50:
            var4 = var2.Array;
            var3 = var4.from;
            var2 = var5.entries;
            var2 = var2.bind(var5)();
            var4 = var3.bind(var4)(var2);
            var3 = var4.sort;
            var2 = function(arg1, arg2) {
                var1 = arg2;
                var3 = 1;
                var1 = var1[var3];
                var2 = var1.lastUsedMs;
                var1 = arg1;
                var1 = var1[var3];
                var1 = var1.lastUsedMs;
                var1 = var2 - var1;
                return var1;
            };
            var5 = var3.bind(var4)(var2);
            var2 = var5.length;
            var2 = var6 < var2;
            var4 = 10;
            var3 = 0;
            if(!var2) { _fun0006_ip = 12; continue _fun0006 }
case 51:
            if(!(var3 >= var4)) { _fun0006_ip = 44; continue _fun0006 }
case 29:
            var2 = var5[var3];
            var8 = var2[var6];
            var2 = _closure1_slot13;
            var2 = var2.botUserIdToAppUsage;
            var2 = delete var2[var8];
case 44:
            var3 = var3 + 1;
            var2 = var5.length;
            if(var3 < var2) { _fun0006_ip = 51; continue _fun0006 }
case 12:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var8 = function handleEntitlementsFetched(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.entitlements;
            var1 = _closure1_slot15;
            var8 = undefined;
            var7 = var1.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var5 = null;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var2 = var4.value;
            var2 = var2.sku;
            var11 = var5 == var2;
            var10 = undefined;
            if(var11) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var10 = var2.application;
case 54:
            if(!(var5 != var10)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var10 = _closure1_slot17;
            var12 = _closure1_slot6;
            var11 = var12.createFromServer;
            var2 = var2.application;
            var2 = var11.bind(var12)(var2);
            var2 = var10.bind(var8)(var2);
            var3 = true;
case 56:
            var11 = var7.bind(var8)();
            var2 = var11.done;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0007_ip = 53; continue _fun0007 }
case 52:
            return var1;
        }
    };
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = new Array(0);
    var _closure1_slot7 = var7;
    var7 = var2.Map;
    var9 = var7.prototype;
    var9 = Object.create(var9, {constructor: {value: var7}});
    var14 = var9;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot8 = var7;
    var7 = var2.Map;
    var9 = var7.prototype;
    var9 = Object.create(var9, {constructor: {value: var7}});
    var14 = var9;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot9 = var7;
    var7 = var2.Map;
    var9 = var7.prototype;
    var9 = Object.create(var9, {constructor: {value: var7}});
    var14 = var9;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot10 = var7;
    var7 = var2.Map;
    var9 = var7.prototype;
    var9 = Object.create(var9, {constructor: {value: var7}});
    var14 = var9;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot11 = var7;
    var2 = var2.Map;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var14 = var7;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot12 = var2;
    var2 = {};
    var7 = {};
    var2['botUserIdToAppUsage'] = var7;
    var _closure1_slot13 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ApplicationStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 54; continue _fun0008 }
case 58:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 59; continue _fun0008;
case 54:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 59:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var10 = arg1;
                var1 = null;
                if(!(var1 != var10)) { _fun0009_ip = 19; continue _fun0009 }
case 60:
                var1 = var10.botUserIdToAppUsage;
                var2 = 'object';
                var1 = typeof var1;
                if(!(var2 === var1)) { _fun0009_ip = 19; continue _fun0009 }
case 61:
                var8 = var10.botUserIdToAppUsage;
                var3 = 0;
                var2 = 'number';
                var1 = 'string';
                for(var5 in var8)
case 62:
                {
case 63:
                    var13 = var5;
                    var11 = var10.botUserIdToAppUsage;
                    var11 = var11[var13];
                    var15 = var11.applicationId;
                    var14 = var11.lastUsedMs;
                    var11 = typeof var15;
                    var11 = var1 === var11;
                    if(!var11) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                    var12 = var15.length;
                    var11 = var12 > var3;
case 64:
                    if(!var11) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                    var12 = typeof var14;
                    var11 = var2 === var12;
case 66:
                    if(!var11) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var11 = var14 > var3;
case 68:
                    if(!var11) { _fun0009_ip = 62; continue _fun0009 }
case 70:
                    var11 = _closure1_slot13;
                    var12 = var11.botUserIdToAppUsage;
                    var11 = {};
                    var11['applicationId'] = var15;
                    var11['lastUsedMs'] = var14;
                    var12[var13] = var11;
                    _fun0009_ip = 62; continue _fun0009;
                }
case 19:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = '_getAllApplications';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var4 = _closure1_slot8;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGuildApplication';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var7 = arg1;
                var6 = arg2;
                var1 = null;
                if(!(var1 != var7)) { _fun0010_ip = 15; continue _fun0010 }
case 60:
                var2 = _closure1_slot15;
                var3 = _closure1_slot8;
                var1 = var3.values;
                var1 = var1.bind(var3)();
                var5 = undefined;
                var4 = var2.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                if(var1) { _fun0010_ip = 15; continue _fun0010 }
case 71:
                var1 = var3.value;
                var2 = var1.guildId;
                if(!(var2 === var7)) { _fun0010_ip = 72; continue _fun0010 }
case 63:
                var2 = var1.type;
                if(!(var2 !== var6)) { _fun0010_ip = 73; continue _fun0010 }
case 72:
                var8 = var4.bind(var5)();
                var2 = var8.done;
                var3 = var8;
                if(var2) { _fun0010_ip = 15; continue _fun0010 }
case 74:
                _fun0010_ip = 71; continue _fun0010;
case 73:
                return var1;
case 15:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getGuildApplicationIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = arg1;
                var3 = null;
                if(!(var3 != var5)) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                var4 = _closure1_slot9;
                var1 = var4.get;
                var1 = var1.bind(var4)(var5);
                if(!(var3 == var1)) { _fun0011_ip = 77; continue _fun0011 }
case 7:
                var1 = _closure1_slot7;
case 77:
                _fun0011_ip = 78; continue _fun0011;
case 75:
                var1 = _closure1_slot7;
case 78:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0012_ip = 79; continue _fun0012 }
case 76:
                var1 = undefined;
                return var1;
case 79:
                var2 = _closure1_slot8;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getApplicationByName';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0013_ip = 79; continue _fun0013 }
case 76:
                var1 = undefined;
                return var1;
case 79:
                var1 = var2.toLowerCase;
                var4 = var1.bind(var2)();
                var3 = _closure1_slot10;
                var1 = var3.has;
                var3 = var1.bind(var3)(var4);
                var1 = undefined;
                if(!var3) { _fun0013_ip = 62; continue _fun0013 }
case 80:
                var3 = _closure1_slot10;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 62:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getApplicationLastUpdated';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot11;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isFetchingApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = true;
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'didFetchingApplicationFail';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = false;
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getFetchingOrFailedFetchingIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var4 = _closure1_slot12;
            var1 = var4.keys;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getAppIdForBotUserId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0014_ip = 79; continue _fun0014 }
case 76:
                var2 = undefined;
                return var2;
case 79:
                var2 = _closure1_slot13;
                var2 = var2.botUserIdToAppUsage;
                var2 = var2[var3];
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0014_ip = 53; continue _fun0014 }
case 81:
                var1 = var2.applicationId;
case 53:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'ApplicationStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = 8;
    var2 = var5[var2];
    var13 = var6.bind(var1)(var2);
    var2 = {};
    var9 = function handleLogout() {
        var3 = _closure1_slot8;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot9;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot10;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot11;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot12;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleOverlayInitialize(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.applications;
            var2 = _closure1_slot15;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0015_ip = 82; continue _fun0015 }
case 83:
            var9 = var3.value;
            var6 = _closure1_slot17;
            var2 = _closure1_slot6;
            var7 = var2.prototype;
            var7 = Object.create(var7, {constructor: {value: var2}});
            var10 = var7;
            var2 = new var10[var2](var9, var8);
            var2 = var2 instanceof Object ? var2 : var7;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0015_ip = 83; continue _fun0015 }
case 82:
            return var1;
        }
    };
    var2['OVERLAY_INITIALIZE'] = var9;
    var9 = function handleApplicationFetch(arg1) {
        var1 = arg1;
        var5 = var1.applicationId;
        var3 = _closure1_slot12;
        var2 = var3.get;
        var2 = var2.bind(var3)(var5);
        var4 = _closure1_slot12;
        var3 = var4.set;
        var1 = true;
        var3 = var3.bind(var4)(var5, var1);
        var1 = var1 !== var2;
        return var1;
    };
    var2['APPLICATION_FETCH'] = var9;
    var9 = function handleApplicationFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.application;
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['APPLICATION_FETCH_SUCCESS'] = var9;
    var9 = function handleApplicationFetchFail(arg1) {
        var1 = arg1;
        var5 = var1.applicationId;
        var3 = _closure1_slot12;
        var2 = var3.get;
        var2 = var2.bind(var3)(var5);
        var4 = _closure1_slot12;
        var3 = var4.set;
        var1 = false;
        var3 = var3.bind(var4)(var5, var1);
        var1 = var1 !== var2;
        return var1;
    };
    var2['APPLICATION_FETCH_FAIL'] = var9;
    var9 = function handleApplicationsFetch(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var2 = var1.applicationIds;
            var1 = _closure1_slot15;
            var6 = undefined;
            var5 = var1.bind(var6)(var2);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = true;
            var1 = false;
            if(var2) { _fun0016_ip = 74; continue _fun0016 }
case 81:
            var10 = var3.value;
            var8 = _closure1_slot12;
            var2 = var8.get;
            var2 = var2.bind(var8)(var10);
            var9 = _closure1_slot12;
            var8 = var9.set;
            var8 = var8.bind(var9)(var10, var4);
            var1 = var4 !== var2;
            var9 = var5.bind(var6)();
            var2 = var9.done;
            var3 = var9;
            if(!var2) { _fun0016_ip = 81; continue _fun0016 }
case 74:
            return var1;
        }
    };
    var2['APPLICATIONS_FETCH'] = var9;
    var9 = function handleApplicationsFetchSuccess(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = var1.applications;
            var2 = _closure1_slot15;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0017_ip = 84; continue _fun0017 }
case 83:
            var8 = var3.value;
            var6 = _closure1_slot17;
            var7 = _closure1_slot6;
            var2 = var7.createFromServer;
            var2 = var2.bind(var7)(var8);
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0017_ip = 83; continue _fun0017 }
case 84:
            return var1;
        }
    };
    var2['APPLICATIONS_FETCH_SUCCESS'] = var9;
    var9 = function handleApplicationsFetchFail(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var2 = var1.applicationIds;
            var1 = _closure1_slot15;
            var6 = undefined;
            var5 = var1.bind(var6)(var2);
            var1 = var5.bind(var6)();
            var2 = var1.done;
            var4 = false;
            var3 = var1;
            var1 = false;
            if(var2) { _fun0018_ip = 85; continue _fun0018 }
case 86:
            var10 = var3.value;
            var8 = _closure1_slot12;
            var2 = var8.get;
            var2 = var2.bind(var8)(var10);
            var9 = _closure1_slot12;
            var8 = var9.set;
            var8 = var8.bind(var9)(var10, var4);
            var1 = var4 !== var2;
            var9 = var5.bind(var6)();
            var2 = var9.done;
            var3 = var9;
            if(!var2) { _fun0018_ip = 86; continue _fun0018 }
case 85:
            return var1;
        }
    };
    var2['APPLICATIONS_FETCH_FAIL'] = var9;
    var9 = function handleUpdateApplication(arg1) {
        var1 = arg1;
        var3 = var1.application;
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['APPLICATION_UPDATE'] = var9;
    var2['APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS'] = var8;
    var2['ENTITLEMENTS_FETCH_FOR_USER_SUCCESS'] = var8;
    var2['ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS'] = var8;
    var8 = function handleGuildApplicationsFetchSuccess(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var6 = var1.applications;
            var4 = new Array(0);
            var3 = _closure1_slot15;
            var1 = undefined;
            var7 = var3.bind(var1)(var6);
            var6 = var7.bind(var1)();
            var3 = var6.done;
            if(var3) { _fun0019_ip = 87; continue _fun0019 }
case 53:
            var10 = var6.value;
            var8 = var4.push;
            var3 = var10.id;
            var3 = var8.bind(var4)(var3);
            var8 = _closure1_slot17;
            var9 = _closure1_slot6;
            var3 = var9.createFromServer;
            var3 = var3.bind(var9)(var10);
            var3 = var8.bind(var1)(var3);
            var8 = var7.bind(var1)();
            var3 = var8.done;
            var6 = var8;
            if(!var3) { _fun0019_ip = 53; continue _fun0019 }
case 87:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
        }
    };
    var2['GUILD_APPLICATIONS_FETCH_SUCCESS'] = var8;
    var8 = function handleFetchPayments(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var3 = var1.payments;
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var12 = var2;
            var1 = new var12[var1](var11);
            var1 = var1 instanceof Object ? var1 : var2;
            var2 = _closure1_slot15;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = null;
            if(var2) { _fun0020_ip = 88; continue _fun0020 }
case 49:
            var2 = var3.value;
            var2 = var2.sku;
            var8 = var4 == var2;
            var10 = undefined;
            if(var8) { _fun0020_ip = 89; continue _fun0020 }
case 90:
            var10 = var2.application;
case 89:
            var2 = var4 == var10;
            if(var2) { _fun0020_ip = 91; continue _fun0020 }
case 92:
            var9 = var1.has;
            var8 = var10.id;
            var2 = var9.bind(var1)(var8);
case 91:
            if(var2) { _fun0020_ip = 93; continue _fun0020 }
case 94:
            var8 = _closure1_slot17;
            var9 = _closure1_slot6;
            var2 = var9.createFromServer;
            var2 = var2.bind(var9)(var10);
            var2 = var8.bind(var6)(var2);
case 93:
            var8 = var5.bind(var6)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0020_ip = 49; continue _fun0020 }
case 88:
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        }
    };
    var2['BILLING_PAYMENTS_FETCH_SUCCESS'] = var8;
    var8 = function handleUpdatePayment(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var2 = var1.payment;
            var5 = var2.sku;
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0021_ip = 37; continue _fun0021 }
case 38:
            var3 = var5.application;
case 37:
            if(!(var4 != var3)) { _fun0021_ip = 72; continue _fun0021 }
case 95:
            var3 = _closure1_slot17;
            var5 = _closure1_slot6;
            var4 = var5.createFromServer;
            var2 = var2.sku;
            var2 = var2.application;
            var2 = var4.bind(var5)(var2);
            var2 = var3.bind(var1)(var2);
            return var1;
case 72:
            var1 = false;
            return var1;
        }
    };
    var2['PAYMENT_UPDATE'] = var8;
    var8 = function handleResolveInvite(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var1 = var1.invite;
            var3 = var1.target_application;
            var2 = null;
            if(!(var2 != var3)) { _fun0022_ip = 96; continue _fun0022 }
case 97:
            var3 = _closure1_slot17;
            var4 = _closure1_slot6;
            var2 = var4.createFromServer;
            var1 = var1.target_application;
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
case 96:
            var1 = false;
            return var1;
        }
    };
    var2['INVITE_RESOLVE_SUCCESS'] = var8;
    var8 = function handleGiftCodeResolveSuccess(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var2 = var1.giftCode;
            var5 = var2.store_listing;
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0023_ip = 81; continue _fun0023 }
case 38:
            var5 = var5.sku;
            var3 = var5.application;
case 81:
            if(!(var4 != var3)) { _fun0023_ip = 98; continue _fun0023 }
case 78:
            var3 = _closure1_slot17;
            var5 = _closure1_slot6;
            var4 = var5.createFromServer;
            var2 = var2.store_listing;
            var2 = var2.sku;
            var2 = var2.application;
            var2 = var4.bind(var5)(var2);
            var2 = var3.bind(var1)(var2);
            return var1;
case 98:
            var1 = false;
            return var1;
        }
    };
    var2['GIFT_CODE_RESOLVE_SUCCESS'] = var8;
    var8 = function handleLibraryApplicationsFetch(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var3 = var1.libraryApplications;
            var2 = _closure1_slot15;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0024_ip = 39; continue _fun0024 }
case 83:
            var2 = var3.value;
            var6 = _closure1_slot17;
            var8 = _closure1_slot6;
            var7 = var8.createFromServer;
            var2 = var2.application;
            var2 = var7.bind(var8)(var2);
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0024_ip = 83; continue _fun0024 }
case 39:
            return var1;
        }
    };
    var2['LIBRARY_FETCH_SUCCESS'] = var8;
    var8 = function handleStoreListingFetch(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var1 = var1.storeListing;
            var2 = var1.sku;
            var3 = var2.application;
            var2 = null;
            if(!(var2 != var3)) { _fun0025_ip = 63; continue _fun0025 }
case 99:
            var3 = _closure1_slot17;
            var4 = _closure1_slot6;
            var2 = var4.createFromServer;
            var1 = var1.sku;
            var1 = var1.application;
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
case 63:
            var1 = false;
            return var1;
        }
    };
    var2['STORE_LISTING_FETCH_SUCCESS'] = var8;
    var8 = function handleLoadMessages(arg1) {
        var1 = arg1;
        var3 = var1.messages;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = function mergeApplicationsFromMessage(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.attachments;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0026_ip = 61; continue _fun0026 }
case 100:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.application;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0027_ip = 101; continue _fun0027 }
case 36:
                            var3 = _closure1_slot17;
                            var4 = _closure1_slot6;
                            var2 = var4.createFromServer;
                            var1 = var1.application;
                            var2 = var2.bind(var4)(var1);
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 101:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var8;
    var8 = function handleFetchAppRecommendationsSuccess(arg1) {
        var1 = arg1;
        var3 = var1.recommendations;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.items;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot17;
                var4 = _closure1_slot6;
                var2 = var4.createFromServer;
                var1 = arg1;
                var1 = var1.application;
                var2 = var2.bind(var4)(var1);
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS'] = var8;
    var8 = function handleProfileFetchSuccess(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var1 = var1.userProfile;
            var4 = var1.user;
            var1 = var1.application;
            var2 = var4.bot;
            if(!var2) { _fun0028_ip = 77; continue _fun0028 }
case 38:
            var3 = null;
            var2 = var3 != var1;
case 77:
            if(!var2) { _fun0028_ip = 40; continue _fun0028 }
case 95:
            var3 = _closure1_slot19;
            var2 = {};
            var4 = var4.id;
            var2['userId'] = var4;
            var1 = var1.id;
            var2['applicationId'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 40:
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_PROFILE_FETCH_SUCCESS'] = var8;
    var8 = function handleAppDMOpen(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var3 = var1.botUserId;
            var2 = _closure1_slot13;
            var2 = var2.botUserIdToAppUsage;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 != var4)) { _fun0029_ip = 39; continue _fun0029 }
case 61:
            var1 = _closure1_slot13;
            var2 = var1.botUserIdToAppUsage;
            var1 = {};
            var7 = var1;
            var6 = var4;
            var4 = copyDataProperties(var7, var6);
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var5 = var4.bind(var5)();
            var4 = 'lastUsedMs';
            var1[var4] = var5;
            var2[var3] = var1;
case 39:
            var1 = undefined;
            return var1;
        }
    };
    var2['APP_DM_OPEN'] = var8;
    var8 = function handleAuthorizedAppsUpdate(arg1) {
        var1 = arg1;
        var3 = var1.tokens;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var4 = arg1;
                var5 = _closure1_slot17;
                var6 = _closure1_slot6;
                var3 = var6.createFromServer;
                var1 = var4.application;
                var3 = var3.bind(var6)(var1);
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var4.application;
                var5 = var3.bot;
                var3 = null;
                if(!(var3 != var5)) { _fun0030_ip = 82; continue _fun0030 }
case 71:
                var3 = _closure1_slot19;
                var2 = {};
                var5 = var5.id;
                var2['userId'] = var5;
                var4 = var4.application;
                var4 = var4.id;
                var2['applicationId'] = var4;
                var2 = var3.bind(var1)(var2);
case 82:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['USER_AUTHORIZED_APPS_UPDATE'] = var8;
    var8 = function handleNotificationCenterItemsSuccess(arg1) {
        var1 = arg1;
        var3 = var1.items;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var1 = arg1;
                var3 = var1.application;
                var2 = null;
                if(!(var2 != var3)) { _fun0031_ip = 101; continue _fun0031 }
case 36:
                var3 = _closure1_slot17;
                var4 = _closure1_slot6;
                var2 = var4.createFromServer;
                var1 = var1.application;
                var2 = var2.bind(var4)(var1);
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 101:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS'] = var8;
    var4 = function handleOAuth2TokenCreate(arg1) {
        var1 = arg1;
        var4 = var1.application;
        var3 = _closure1_slot17;
        var2 = _closure1_slot6;
        var1 = var2.createFromServer;
        var2 = var1.bind(var2)(var4);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['OAUTH2_TOKEN_CREATE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var7](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/ApplicationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();