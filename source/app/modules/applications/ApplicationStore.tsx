// app/modules/applications/ApplicationStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            var9 = _closure1_slot16;
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
            var7 = _closure1_slot16;
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
    var1 = function addApplication(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
            var1 = null;
            var6 = var2;
            if(!(var1 != var4)) { _fun0005_ip = 84; continue _fun0005 }
 71:
            var1 = var4.mergeFromApplicationUpdate;
            var6 = var1.bind(var4)(var2);
 84:
            var5 = _closure1_slot8;
            var4 = var5.set;
            var1 = var2.id;
            var1 = var4.bind(var5)(var1, var6);
            var5 = _closure1_slot10;
            var4 = var5.set;
            var7 = var2.name;
            var1 = var7.toLowerCase;
            var1 = var1.bind(var7)();
            var1 = var4.bind(var5)(var1, var6);
            var5 = _closure1_slot15;
            var4 = var2.aliases;
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var5 = var7.bind(var1)();
            var4 = var5.done;
            if(var4) { _fun0005_ip = 208; continue _fun0005 }
 163:
            var10 = var5.value;
            var9 = _closure1_slot10;
            var8 = var9.set;
            var4 = var10.toLowerCase;
            var4 = var4.bind(var10)();
            var4 = var8.bind(var9)(var4, var6);
            var8 = var7.bind(var1)();
            var4 = var8.done;
            var5 = var8;
            if(!var4) { _fun0005_ip = 163; continue _fun0005 }
 208:
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
 0:
            var1 = arg1;
            var3 = var1.userId;
            var5 = var1.applicationId;
            var1 = _closure1_slot13;
            var1 = var1.botUserIdToAppUsage;
            var4 = var1[var3];
            var1 = _closure1_slot13;
            var2 = var1.botUserIdToAppUsage;
            var1 = null;
            if(!(var1 != var4)) { _fun0006_ip = 65; continue _fun0006 }
 46:
            var1 = {};
            var1['applicationId'] = var5;
            var4 = var4.lastUsedMs;
            var1['lastUsedMs'] = var4;
            _fun0006_ip = 96; continue _fun0006;
 65:
            var4 = {};
            var4['applicationId'] = var5;
            var5 = global;
            var6 = var5.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var4['lastUsedMs'] = var5;
            var1 = var4;
 96:
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
            if(!var3) { _fun0006_ip = 224; continue _fun0006 }
 179:
            var11 = var10[var4];
            var3 = _closure1_slot5;
            var3 = var3.bind(var1)(var11, var9);
            var12 = var3[var6];
            var11 = var3[var8];
            var3 = var5.set;
            var3 = var3.bind(var5)(var12, var11);
            var4 = var4 + 1;
            var3 = var10.length;
            if(var4 < var3) { _fun0006_ip = 179; continue _fun0006 }
 224:
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
            if(!var2) { _fun0006_ip = 323; continue _fun0006 }
 285:
            if(!(var3 >= var4)) { _fun0006_ip = 311; continue _fun0006 }
 289:
            var2 = var5[var3];
            var8 = var2[var6];
            var2 = _closure1_slot13;
            var2 = var2.botUserIdToAppUsage;
            var2 = delete var2[var8];
 311:
            var3 = var3 + 1;
            var2 = var5.length;
            if(var3 < var2) { _fun0006_ip = 285; continue _fun0006 }
 323:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var8 = function handleEntitlementsFetched(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
            if(var2) { _fun0007_ip = 122; continue _fun0007 }
 44:
            var2 = var4.value;
            var2 = var2.sku;
            var11 = var5 == var2;
            var10 = undefined;
            if(var11) { _fun0007_ip = 69; continue _fun0007 }
 64:
            var10 = var2.application;
 69:
            if(!(var5 != var10)) { _fun0007_ip = 104; continue _fun0007 }
 73:
            var10 = _closure1_slot17;
            var12 = _closure1_slot6;
            var11 = var12.createFromServer;
            var2 = var2.application;
            var2 = var11.bind(var12)(var2);
            var2 = var10.bind(var8)(var2);
            var3 = true;
 104:
            var11 = var7.bind(var8)();
            var2 = var11.done;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0007_ip = 44; continue _fun0007 }
 122:
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
 0:
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
                var6 = _closure1_slot3;
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
 0:
                var10 = arg1;
                var1 = null;
                if(!(var1 != var10)) { _fun0009_ip = 158; continue _fun0009 }
 12:
                var1 = var10.botUserIdToAppUsage;
                var2 = 'object';
                var1 = typeof var1;
                if(!(var2 === var1)) { _fun0009_ip = 158; continue _fun0009 }
 32:
                var8 = var10.botUserIdToAppUsage;
                var3 = 0;
                var2 = 'number';
                var1 = 'string';
                for(var5 in var8)
 59:
                {
 68:
                    var13 = var5;
                    var11 = var10.botUserIdToAppUsage;
                    var11 = var11[var13];
                    var15 = var11.applicationId;
                    var14 = var11.lastUsedMs;
                    var11 = typeof var15;
                    var11 = var1 === var11;
                    if(!var11) { _fun0009_ip = 111; continue _fun0009 }
 102:
                    var12 = var15.length;
                    var11 = var12 > var3;
 111:
                    if(!var11) { _fun0009_ip = 121; continue _fun0009 }
 114:
                    var12 = typeof var14;
                    var11 = var2 === var12;
 121:
                    if(!var11) { _fun0009_ip = 128; continue _fun0009 }
 124:
                    var11 = var14 > var3;
 128:
                    if(!var11) { _fun0009_ip = 59; continue _fun0009 }
 131:
                    var11 = _closure1_slot13;
                    var12 = var11.botUserIdToAppUsage;
                    var11 = {};
                    var11['applicationId'] = var15;
                    var11['lastUsedMs'] = var14;
                    var12[var13] = var11;
                    _fun0009_ip = 59; continue _fun0009;
                }
 158:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(13);
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
        var7 = 'getApplications';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getGuildApplication';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var7 = arg1;
                var6 = arg2;
                var1 = null;
                if(!(var1 != var7)) { _fun0010_ip = 96; continue _fun0010 }
 12:
                var2 = _closure1_slot15;
                var3 = _closure1_slot8;
                var1 = var3.values;
                var1 = var1.bind(var3)();
                var5 = undefined;
                var4 = var2.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                if(var1) { _fun0010_ip = 96; continue _fun0010 }
 54:
                var1 = var3.value;
                var2 = var1.guildId;
                if(!(var2 === var7)) { _fun0010_ip = 77; continue _fun0010 }
 68:
                var2 = var1.type;
                if(!(var2 !== var6)) { _fun0010_ip = 94; continue _fun0010 }
 77:
                var8 = var4.bind(var5)();
                var2 = var8.done;
                var3 = var8;
                if(var2) { _fun0010_ip = 96; continue _fun0010 }
 92:
                _fun0010_ip = 54; continue _fun0010;
 94:
                return var1;
 96:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getGuildApplicationIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var5 = arg1;
                var3 = null;
                if(!(var3 != var5)) { _fun0011_ip = 36; continue _fun0011 }
 9:
                var4 = _closure1_slot9;
                var1 = var4.get;
                var1 = var1.bind(var4)(var5);
                if(!(var3 == var1)) { _fun0011_ip = 34; continue _fun0011 }
 30:
                var1 = _closure1_slot7;
 34:
                _fun0011_ip = 43; continue _fun0011;
 36:
                var1 = _closure1_slot7;
 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0012_ip = 13; continue _fun0012 }
 9:
                var1 = undefined;
                return var1;
 13:
                var2 = _closure1_slot8;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getApplicationByName';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0013_ip = 13; continue _fun0013 }
 9:
                var1 = undefined;
                return var1;
 13:
                var1 = var2.toLowerCase;
                var4 = var1.bind(var2)();
                var3 = _closure1_slot10;
                var1 = var3.has;
                var3 = var1.bind(var3)(var4);
                var1 = undefined;
                if(!var3) { _fun0013_ip = 59; continue _fun0013 }
 45:
                var3 = _closure1_slot10;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
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
        var1[8] = var5;
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
        var1[9] = var5;
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
        var1[10] = var5;
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
        var1[11] = var5;
        var5 = {};
        var7 = 'getAppIdForBotUserId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0014_ip = 13; continue _fun0014 }
 9:
                var2 = undefined;
                return var2;
 13:
                var2 = _closure1_slot13;
                var2 = var2.botUserIdToAppUsage;
                var2 = var2[var3];
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0014_ip = 44; continue _fun0014 }
 39:
                var1 = var2.applicationId;
 44:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[12] = var5;
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
 0:
            var1 = arg1;
            var3 = var1.applications;
            var2 = _closure1_slot15;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0015_ip = 88; continue _fun0015 }
 35:
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
            if(!var2) { _fun0015_ip = 35; continue _fun0015 }
 88:
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
 0:
            var1 = arg1;
            var2 = var1.applicationIds;
            var1 = _closure1_slot15;
            var6 = undefined;
            var5 = var1.bind(var6)(var2);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = true;
            var1 = false;
            if(var2) { _fun0016_ip = 92; continue _fun0016 }
 39:
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
            if(!var2) { _fun0016_ip = 39; continue _fun0016 }
 92:
            return var1;
        }
    };
    var2['APPLICATIONS_FETCH'] = var9;
    var9 = function handleApplicationsFetchSuccess(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var3 = var1.applications;
            var2 = _closure1_slot15;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0017_ip = 79; continue _fun0017 }
 35:
            var8 = var3.value;
            var6 = _closure1_slot17;
            var7 = _closure1_slot6;
            var2 = var7.createFromServer;
            var2 = var2.bind(var7)(var8);
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0017_ip = 35; continue _fun0017 }
 79:
            return var1;
        }
    };
    var2['APPLICATIONS_FETCH_SUCCESS'] = var9;
    var9 = function handleApplicationsFetchFail(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
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
            if(var2) { _fun0018_ip = 95; continue _fun0018 }
 42:
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
            if(!var2) { _fun0018_ip = 42; continue _fun0018 }
 95:
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
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var6 = var1.applications;
            var4 = new Array(0);
            var3 = _closure1_slot15;
            var1 = undefined;
            var7 = var3.bind(var1)(var6);
            var6 = var7.bind(var1)();
            var3 = var6.done;
            if(var3) { _fun0019_ip = 103; continue _fun0019 }
 44:
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
            if(!var3) { _fun0019_ip = 44; continue _fun0019 }
 103:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
        }
    };
    var2['GUILD_APPLICATIONS_FETCH_SUCCESS'] = var8;
    var8 = function handleFetchPayments(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
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
            if(var2) { _fun0020_ip = 154; continue _fun0020 }
 65:
            var2 = var3.value;
            var2 = var2.sku;
            var8 = var4 == var2;
            var10 = undefined;
            if(var8) { _fun0020_ip = 90; continue _fun0020 }
 85:
            var10 = var2.application;
 90:
            var2 = var4 == var10;
            if(var2) { _fun0020_ip = 112; continue _fun0020 }
 97:
            var9 = var1.has;
            var8 = var10.id;
            var2 = var9.bind(var1)(var8);
 112:
            if(var2) { _fun0020_ip = 139; continue _fun0020 }
 115:
            var8 = _closure1_slot17;
            var9 = _closure1_slot6;
            var2 = var9.createFromServer;
            var2 = var2.bind(var9)(var10);
            var2 = var8.bind(var6)(var2);
 139:
            var8 = var5.bind(var6)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0020_ip = 65; continue _fun0020 }
 154:
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        }
    };
    var2['BILLING_PAYMENTS_FETCH_SUCCESS'] = var8;
    var8 = function handleUpdatePayment(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var2 = var1.payment;
            var5 = var2.sku;
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0021_ip = 33; continue _fun0021 }
 28:
            var3 = var5.application;
 33:
            if(!(var4 != var3)) { _fun0021_ip = 77; continue _fun0021 }
 37:
            var3 = _closure1_slot17;
            var5 = _closure1_slot6;
            var4 = var5.createFromServer;
            var2 = var2.sku;
            var2 = var2.application;
            var2 = var4.bind(var5)(var2);
            var2 = var3.bind(var1)(var2);
            return var1;
 77:
            var1 = false;
            return var1;
        }
    };
    var2['PAYMENT_UPDATE'] = var8;
    var8 = function handleResolveInvite(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var1 = var1.invite;
            var3 = var1.target_application;
            var2 = null;
            if(!(var2 != var3)) { _fun0022_ip = 58; continue _fun0022 }
 21:
            var3 = _closure1_slot17;
            var4 = _closure1_slot6;
            var2 = var4.createFromServer;
            var1 = var1.target_application;
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
 58:
            var1 = false;
            return var1;
        }
    };
    var2['INVITE_RESOLVE_SUCCESS'] = var8;
    var8 = function handleGiftCodeResolveSuccess(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var2 = var1.giftCode;
            var5 = var2.store_listing;
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0023_ip = 39; continue _fun0023 }
 28:
            var5 = var5.sku;
            var3 = var5.application;
 39:
            if(!(var4 != var3)) { _fun0023_ip = 89; continue _fun0023 }
 43:
            var3 = _closure1_slot17;
            var5 = _closure1_slot6;
            var4 = var5.createFromServer;
            var2 = var2.store_listing;
            var2 = var2.sku;
            var2 = var2.application;
            var2 = var4.bind(var5)(var2);
            var2 = var3.bind(var1)(var2);
            return var1;
 89:
            var1 = false;
            return var1;
        }
    };
    var2['GIFT_CODE_RESOLVE_SUCCESS'] = var8;
    var8 = function handleLibraryApplicationsFetch(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var1 = arg1;
            var3 = var1.libraryApplications;
            var2 = _closure1_slot15;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0024_ip = 84; continue _fun0024 }
 35:
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
            if(!var2) { _fun0024_ip = 35; continue _fun0024 }
 84:
            return var1;
        }
    };
    var2['LIBRARY_FETCH_SUCCESS'] = var8;
    var8 = function handleStoreListingFetch(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var1 = arg1;
            var1 = var1.storeListing;
            var2 = var1.sku;
            var3 = var2.application;
            var2 = null;
            if(!(var2 != var3)) { _fun0025_ip = 68; continue _fun0025 }
 26:
            var3 = _closure1_slot17;
            var4 = _closure1_slot6;
            var2 = var4.createFromServer;
            var1 = var1.sku;
            var1 = var1.application;
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
 68:
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
 0:
                    var1 = arg1;
                    var3 = var1.attachments;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0026_ip = 32; continue _fun0026 }
 15:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                            var1 = arg1;
                            var3 = var1.application;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0027_ip = 48; continue _fun0027 }
 14:
                            var3 = _closure1_slot17;
                            var4 = _closure1_slot6;
                            var2 = var4.createFromServer;
                            var1 = var1.application;
                            var2 = var2.bind(var4)(var1);
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 48:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
 32:
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
 0:
            var1 = arg1;
            var1 = var1.userProfile;
            var4 = var1.user;
            var1 = var1.application;
            var2 = var4.bot;
            if(!var2) { _fun0028_ip = 34; continue _fun0028 }
 28:
            var3 = null;
            var2 = var3 != var1;
 34:
            if(!var2) { _fun0028_ip = 71; continue _fun0028 }
 37:
            var3 = _closure1_slot19;
            var2 = {};
            var4 = var4.id;
            var2['userId'] = var4;
            var1 = var1.id;
            var2['applicationId'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 71:
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_PROFILE_FETCH_SUCCESS'] = var8;
    var8 = function handleAppDMOpen(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var3 = var1.botUserId;
            var2 = _closure1_slot13;
            var2 = var2.botUserIdToAppUsage;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 != var4)) { _fun0029_ip = 84; continue _fun0029 }
 32:
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
 84:
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
 0:
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
                if(!(var3 != var5)) { _fun0030_ip = 88; continue _fun0030 }
 54:
                var3 = _closure1_slot19;
                var2 = {};
                var5 = var5.id;
                var2['userId'] = var5;
                var4 = var4.application;
                var4 = var4.id;
                var2['applicationId'] = var4;
                var2 = var3.bind(var1)(var2);
 88:
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
 0:
                var1 = arg1;
                var3 = var1.application;
                var2 = null;
                if(!(var2 != var3)) { _fun0031_ip = 48; continue _fun0031 }
 14:
                var3 = _closure1_slot17;
                var4 = _closure1_slot6;
                var2 = var4.createFromServer;
                var1 = var1.application;
                var2 = var2.bind(var4)(var1);
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 48:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS'] = var8;
    var8 = function handleOAuth2TokenCreate(arg1) {
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
    var2['OAUTH2_TOKEN_CREATE'] = var8;
    var4 = function handleRobloxsubgameApplicationFetchSuccess(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var1 = arg1;
            var3 = var1.application;
            var1 = null;
            if(!(var1 != var3)) { _fun0032_ip = 28; continue _fun0032 }
 14:
            var2 = _closure1_slot17;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 28:
            var1 = undefined;
            return var1;
        }
    };
    var2['ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS'] = var4;
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