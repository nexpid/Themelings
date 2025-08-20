// discord_common/js/packages/apex/BaseApexExperimentStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var6;
        var1 = function _toPropertyKey(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var7 = arg1;
                var4 = 'object';
                var1 = typeof var7;
                var2 = var7;
                if(!(var4 === var1)) { _fun0002_ip = 119; continue _fun0002 }
 17:
                var2 = var7;
                if(!var2) { _fun0002_ip = 119; continue _fun0002 }
 23:
                var1 = global;
                var3 = var1.Symbol;
                var3 = var3.toPrimitive;
                var6 = var7[var3];
                var5 = undefined;
                if(!(var5 === var6)) { _fun0002_ip = 60; continue _fun0002 }
 47:
                var3 = var1.String;
                var2 = var3.bind(var5)(var7);
                _fun0002_ip = 119; continue _fun0002;
 60:
                var5 = var6.call;
                var3 = 'string';
                var5 = var5.bind(var6)(var7, var3);
                var3 = typeof var5;
                var2 = var5;
                if(!(var4 === var3)) { _fun0002_ip = 119; continue _fun0002 }
 85:
                var4 = var1.TypeError;
                var1 = var4.prototype;
                var3 = Object.create(var1, {constructor: {value: var4}});
                var9 = '@@toPrimitive must return a primitive value.';
                var10 = var3;
                var1 = new var10[var4](var9, var8);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
 119:
                var4 = 'symbol';
                var3 = typeof var2;
                var1 = var2;
                if(!(var4 !== var3)) { _fun0002_ip = 136; continue _fun0002 }
 133:
                var1 = '' + var2;
 136:
                return var1;
            }
        };
        var _closure1_slot22 = var1;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0003_ip = 46; continue _fun0003 }
 30:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
 46:
                if(var2) { _fun0003_ip = 55; continue _fun0003 }
 49:
                var2 = var3.@@iterator;
 55:
                if(var2) { _fun0003_ip = 343; continue _fun0003 }
 61:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0003_ip = 323; continue _fun0003 }
 86:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0003_ip = 283; continue _fun0003 }
 96:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0003_ip = 270; continue _fun0003 }
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
                if(!var7) { _fun0003_ip = 163; continue _fun0003 }
 158:
                var7 = var3.constructor;
 163:
                var10 = var9;
                if(!var7) { _fun0003_ip = 179; continue _fun0003 }
 169:
                var7 = var3.constructor;
                var10 = var7.name;
 179:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0003_ip = 249; continue _fun0003 }
 187:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0003_ip = 249; continue _fun0003 }
 195:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0003_ip = 234; continue _fun0003 }
 205:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0003_ip = 247; continue _fun0003 }
 234:
                var9 = _closure1_slot24;
                var7 = var9.bind(var8)(var3, var8);
 247:
                _fun0003_ip = 265; continue _fun0003;
 249:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
 265:
                var6 = var7;
                _fun0003_ip = 283; continue _fun0003;
 270:
                var7 = _closure1_slot24;
                var6 = var7.bind(var8)(var3, var8);
 283:
                var4 = var6;
                if(var4) { _fun0003_ip = 323; continue _fun0003 }
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
                if(!var4) { _fun0003_ip = 330; continue _fun0003 }
 326:
                _closure2_slot0 = var4;
 330:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0004_ip = 56; continue _fun0004 }
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
                        _fun0004_ip = 67; continue _fun0004;
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0005_ip = 23; continue _fun0005 }
 14:
                var2 = var4.length;
                var1 = var3 > var2;
 23:
                var2 = undefined;
                if(!var1) { _fun0005_ip = 33; continue _fun0005 }
 28:
                var2 = var4.length;
 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0005_ip = 70; continue _fun0005 }
 55:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0005_ip = 55; continue _fun0005 }
 70:
                return var1;
            }
        };
        var _closure1_slot24 = var1;
        var1 = function _isNativeReflectConstruct() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                _fun0006_ip = 74; continue _fun0006;
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
        var1 = function _getHash(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arg1;
                var1 = _closure1_slot21;
                var1 = var1[var4];
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 64; continue _fun0007 }
 20:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 11;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.v3;
                var2 = var2.bind(var5)(var4);
                var3 = _closure1_slot21;
                var3[var4] = var2;
                var1 = var2;
 64:
                return var1;
            }
        };
        var _closure1_slot26 = var1;
        var9 = global;
        var10 = var9.Object;
        var7 = var10.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var10)(var3, var1, var4);
        var1 = 0;
        var4 = var6[var1];
        var1 = undefined;
        var4 = var8.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.WebAnalyticsEvents;
        var _closure1_slot10 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.Logger;
        var4 = var7.prototype;
        var10 = Object.create(var4, {constructor: {value: var7}});
        var4 = 'ApexExperimentStore';
        var15 = var10;
        var14 = var4;
        var7 = new var15[var7](var14, var13);
        var7 = var7 instanceof Object ? var7 : var10;
        var _closure1_slot11 = var7;
        var7 = var9.window;
        var7 = var7.TextEncoder;
        var10 = null;
        var7 = var10 != var7;
        if(!var7) { _fun0001_ip = 326; continue _fun0001 }
 310:
        var9 = var9.window;
        var9 = var9.TextDecoder;
        var7 = var10 != var9;
 326:
        if(var7) { _fun0001_ip = 341; continue _fun0001 }
 329:
        var7 = 9;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
 341:
        var7 = 10;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var7 = var7.UnitType;
        var9 = var7.User;
        var7 = new Array(1);
        var7[0] = var9;
        var _closure1_slot12 = var7;
        var7 = {};
        var9 = {};
        var7['user'] = var9;
        var9 = {};
        var7['guild'] = var9;
        var _closure1_slot13 = var7;
        var7 = {};
        var _closure1_slot14 = var7;
        var7 = {};
        var _closure1_slot15 = var7;
        var7 = {};
        var _closure1_slot16 = var7;
        var7 = {};
        var _closure1_slot17 = var7;
        var7 = 'apexTrackedExposures';
        var _closure1_slot18 = var7;
        var7 = 604800000;
        var _closure1_slot19 = var7;
        var7 = {};
        var _closure1_slot20 = var7;
        var7 = {};
        var _closure1_slot21 = var7;
        var7 = 13;
        var7 = var6[var7];
        var7 = var8.bind(var1)(var7);
        var7 = var7.PersistedStore;
        var2 = function(arg1) {
            var4 = function BaseApexExperimentStore(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = this;
                    var12 = 0;
                    var1 = copyRestArgs(var12);
                    var7 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var1;
                    var10 = 0;
                    var1 = arraySpread(var12, var11, var10);
                    var1 = _closure1_slot8;
                    var8 = var1.bind(var3)(var2);
                    var2 = _closure1_slot7;
                    var1 = _closure1_slot25;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0008_ip = 84; continue _fun0008 }
 71:
                    var1 = var8.apply;
                    var1 = var1.bind(var8)(var4, var9);
                    _fun0008_ip = 118; continue _fun0008;
 84:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var1 = var6.bind(var7)(var8, var9, var5);
 118:
                    var1 = var2.bind(var3)(var4, var1);
                    var2 = function() {
                        var1 = global;
                        var2 = var1.Promise;
                        var1 = var2.resolve;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1['track'] = var2;
                    var2 = 'unset';
                    var1['surface'] = var2;
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot9;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot6;
            var5 = {};
            var1 = 'loadStoredState';
            var5['key'] = var1;
            var1 = function value(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var10 = arg2;
                    var4 = this;
                    var2 = null;
                    var2 = var2 != var1;
                    if(!var2) { _fun0009_ip = 31; continue _fun0009 }
 18:
                    var5 = var1.version;
                    var3 = 1;
                    var2 = var3 === var5;
 31:
                    if(!var2) { _fun0009_ip = 57; continue _fun0009 }
 34:
                    var3 = var1.clientOverrides;
                    _closure1_slot15 = var3;
                    var1 = var1.evaluatedExperiments;
                    _closure1_slot13 = var1;
 57:
                    var1 = {};
                    _closure1_slot16 = var1;
                    var8 = var10;
                    var1 = undefined;
                    var2 = true;
                    for(var5 in var8)
 81:
                    {
 90:
                        var13 = var5;
                        var11 = _closure1_slot26;
                        var14 = var11.bind(var1)(var13);
                        var12 = _closure1_slot16;
                        var11 = {};
                        var11['hashedName'] = var14;
                        var14 = var10[var13];
                        var11['variantId'] = var14;
                        var11['isOverride'] = var2;
                        var12[var13] = var11;
                        _fun0009_ip = 81; continue _fun0009;
                    }
 133:
                    var2 = var4.loadTrackedExposures;
                    var2 = var2.bind(var4)();
                    _closure1_slot20 = var2;
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(27);
            var1[0] = var5;
            var5 = {};
            var7 = 'getState';
            var5['key'] = var7;
            var7 = function value() {
                var1 = {};
                var2 = 1;
                var1['version'] = var2;
                var3 = _closure1_slot13;
                var1['evaluatedExperiments'] = var3;
                var2 = _closure1_slot15;
                var1['clientOverrides'] = var2;
                return var1;
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'setExperimentAssignments';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var24 = arg1;
                    var23 = null;
                    if(!(var23 != var24)) { _fun0010_ip = 623; continue _fun0010 }
 12:
                    var21 = _closure1_slot12;
                    var1 = var21.length;
                    var20 = 0;
                    var1 = var20 < var1;
                    var19 = undefined;
                    var18 = 10;
                    var17 = 4;
                    var16 = 1;
                    var15 = 2;
                    var14 = 3;
                    var13 = 0;
                    var12 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if(!var1) { _fun0010_ip = 619; continue _fun0010 }
 77:
                    var25 = var21[var13];
                    var26 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var18];
                    var1 = var26.bind(var19)(var1);
                    var1 = var1.UnitTypeToKind;
                    var36 = var1[var25];
                    var1 = var24.assignments;
                    var58 = var1[var25];
                    var35 = var12;
                    var34 = var11;
                    var33 = var10;
                    var32 = var9;
                    var31 = var8;
                    var30 = var7;
                    var29 = var6;
                    var28 = var5;
                    var27 = var4;
                    var26 = var3;
                    var25 = var2;
                    if(!(var23 != var58)) { _fun0010_ip = 571; continue _fun0010 }
 158:
                    var35 = var12;
                    var34 = var11;
                    var33 = var10;
                    var32 = var9;
                    var31 = var8;
                    var30 = var7;
                    var29 = var6;
                    var28 = var5;
                    var27 = var4;
                    var26 = var3;
                    var25 = var2;
                    if(!(var23 != var36)) { _fun0010_ip = 571; continue _fun0010 }
 198:
                    var1 = _closure1_slot13;
                    var57 = var1[var36];
                    var55 = var58;
                    var51 = var11;
                    var50 = var10;
                    var49 = var9;
                    var48 = var8;
                    var47 = var7;
                    var46 = var6;
                    var45 = var5;
                    var44 = var4;
                    var43 = var3;
                    var42 = var2;
                    var35 = var57;
                    var34 = var51;
                    var33 = var50;
                    var32 = var49;
                    var31 = var48;
                    var30 = var47;
                    var29 = var46;
                    var28 = var45;
                    var27 = var44;
                    var26 = var43;
                    var25 = var42;
                    for(var52 in var55)
 283:
                    {
                        var34 = var51;
                        var33 = var50;
                        var32 = var49;
                        var31 = var48;
                        var30 = var47;
                        var29 = var46;
                        var35 = var57;
                        var28 = var45;
                        var27 = var44;
                        var26 = var43;
                        var25 = var42;
 328:
                        var41 = var52;
                        var1 = var58[var41];
                        var40 = var1.evaluation_id;
                        var39 = var1.assignments;
                        var38 = {};
                        var36 = var23 != var40;
                        var1 = undefined;
                        if(!var36) { _fun0010_ip = 361; continue _fun0010 }
 358:
                        var1 = var40;
 361:
                        var38['evaluationId'] = var1;
                        var1 = {};
                        var38['assignments'] = var1;
                        var57[var41] = var38;
                        var1 = _closure1_slot23;
                        var37 = var1.bind(var19)(var39);
                        var36 = var37.bind(var19)();
                        var1 = var36.done;
                        var51 = var41;
                        var50 = var40;
                        var49 = var39;
                        var48 = var38;
                        var47 = var36;
                        var46 = var37;
                        var36 = var47;
                        if(var1) { _fun0010_ip = 283; continue _fun0010 }
 422:
                        var59 = var36.value;
                        var1 = _closure1_slot4;
                        var1 = var1.bind(var19)(var59, var17);
                        var45 = var1[var20];
                        var44 = var1[var16];
                        var43 = var1[var15];
                        var42 = var1[var14];
                        if(!(var43 == var23)) { _fun0010_ip = 459; continue _fun0010 }
 457:
                        var43 = 0;
 459:
                        var59 = var38.assignments;
                        var1 = {};
                        var1['hashedName'] = var45;
                        var1['variantId'] = var44;
                        var61 = _closure1_slot0;
                        var60 = _closure1_slot2;
                        var60 = var60[var18];
                        var60 = var61.bind(var19)(var60);
                        var60 = var60.ExperimentFlags;
                        var60 = var60.IsOverride;
                        var60 = var43 & var60;
                        var60 = !var60;
                        var60 = !var60;
                        var1['isOverride'] = var60;
                        var1['revision'] = var42;
                        var59[var45] = var1;
                        var59 = var37.bind(var19)();
                        var1 = var59.done;
                        var51 = var41;
                        var50 = var40;
                        var49 = var39;
                        var48 = var38;
                        var47 = var59;
                        var46 = var37;
                        var36 = var47;
                        if(var1) { _fun0010_ip = 283; continue _fun0010 }
 566:
                        _fun0010_ip = 422; continue _fun0010;
                    }
 571:
                    var13 = var13 + 1;
                    var1 = var21.length;
                    var12 = var35;
                    var11 = var34;
                    var10 = var33;
                    var9 = var32;
                    var8 = var31;
                    var7 = var30;
                    var6 = var29;
                    var5 = var28;
                    var4 = var27;
                    var3 = var26;
                    var2 = var25;
                    if(var13 < var1) { _fun0010_ip = 77; continue _fun0010 }
 619:
                    var1 = true;
                    return var1;
 623:
                    var1 = false;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'createOverride';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                var5 = arg1;
                var4 = this;
                var3 = {};
                var8 = _closure1_slot15;
                var9 = var3;
                var1 = copyDataProperties(var9, var8);
                var6 = {};
                var7 = _closure1_slot26;
                var1 = undefined;
                var7 = var7.bind(var1)(var5);
                var6['hashedName'] = var7;
                var7 = arg2;
                var6['variantId'] = var7;
                var7 = true;
                var6['isOverride'] = var7;
                var3[var5] = var6;
                _closure1_slot15 = var3;
                var3 = var4.trackExposureSuppression;
                var2 = 'client_override';
                var2 = var3.bind(var4)(var5, var2);
                return var1;
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'deleteOverride';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var1 = arg1;
                var5 = _closure1_slot15;
                var2 = var5[var1];
                var4 = _closure1_slot3;
                var6 = new Array(1);
                var6[0] = var1;
                var2 = var6.map;
                var1 = _closure1_slot22;
                var2 = var2.bind(var6)(var1);
                var1 = undefined;
                var2 = var4.bind(var1)(var5, var2);
                _closure1_slot15 = var2;
                return var1;
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'setExperimentsMetadata';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var7 = arg1;
                var2 = {};
                var8 = _closure1_slot17;
                var9 = var2;
                var3 = copyDataProperties(var9, var8);
                var3 = global;
                var5 = var3.Object;
                var4 = var5.fromEntries;
                var6 = var7.map;
                var3 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.name;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                };
                var3 = var6.bind(var7)(var3);
                var8 = var4.bind(var5)(var3);
                var9 = var2;
                var3 = copyDataProperties(var9, var8);
                _closure1_slot17 = var2;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'getExperimentsMetadata';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot17;
                return var1;
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'getClientOverrides';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot15;
                return var1;
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'getExperimentClientOverride';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = _closure1_slot15;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var5['value'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'handleLogout';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = this;
                    var1 = arg1;
                    if(var1) { _fun0011_ip = 19; continue _fun0011 }
 9:
                    var1 = var3.clearAllServerAssignments;
                    var1 = var1.bind(var3)();
 19:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var5 = var4.Storage;
                    var4 = var5.remove;
                    var2 = _closure1_slot18;
                    var2 = var4.bind(var5)(var2);
                    var2 = var3.clearAllTrackedExposures;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'registerExperiment';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = arg1;
                    var4 = this;
                    var5 = _closure1_slot14;
                    var3 = var1.name;
                    var5[var3] = var1;
                    var3 = _closure1_slot16;
                    var2 = var1.name;
                    var3 = var3[var2];
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 64; continue _fun0012 }
 41:
                    var3 = var4.trackExposureSuppression;
                    var2 = var1.name;
                    var1 = 'cookie_override';
                    var1 = var3.bind(var4)(var2, var1);
 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = 'getRegisteredExperiments';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot14;
                return var1;
            };
            var5['value'] = var7;
            var1[11] = var5;
            var5 = {};
            var7 = 'getAssignment';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var6 = arg3;
                    var5 = this;
                    var1 = _closure1_slot15;
                    var1 = var1[var6];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0013_ip = 31; continue _fun0013 }
 23:
                    var3 = _closure1_slot16;
                    var1 = var3[var6];
 31:
                    if(!(var2 == var1)) { _fun0013_ip = 54; continue _fun0013 }
 35:
                    var4 = var5.getServerAssignment;
                    var3 = arg1;
                    var2 = arg2;
                    var1 = var4.bind(var5)(var3, var2, var6);
 54:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[12] = var5;
            var5 = {};
            var7 = 'getServerAssignment';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var4 = _closure1_slot26;
                    var3 = undefined;
                    var2 = arg3;
                    var2 = var4.bind(var3)(var2);
                    var4 = _closure1_slot13;
                    var1 = arg1;
                    var4 = var4[var1];
                    var1 = arg2;
                    var1 = var4[var1];
                    var4 = null;
                    if(!(var4 == var1)) { _fun0014_ip = 43; continue _fun0014 }
 41:
                    return var3;
 43:
                    var1 = var1.assignments;
                    var1 = var1[var2];
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[13] = var5;
            var5 = {};
            var7 = 'getEvaluation';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = _closure1_slot13;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = arg2;
                    var2 = var2[var1];
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0015_ip = 38; continue _fun0015 }
 32:
                    var1 = var2.evaluationId;
 38:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[14] = var5;
            var5 = {};
            var7 = 'getEvaluationAndAssignment';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var6 = arg3;
                    var1 = _closure1_slot15;
                    var2 = var1[var6];
                    var1 = null;
                    if(!(var1 == var2)) { _fun0016_ip = 28; continue _fun0016 }
 20:
                    var4 = _closure1_slot16;
                    var2 = var4[var6];
 28:
                    if(!(var1 == var2)) { _fun0016_ip = 114; continue _fun0016 }
 32:
                    var5 = _closure1_slot13;
                    var4 = arg1;
                    var5 = var5[var4];
                    var4 = arg2;
                    var4 = var5[var4];
                    if(!(var1 != var4)) { _fun0016_ip = 95; continue _fun0016 }
 54:
                    var5 = var4.evaluationId;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var4 = var4.assignments;
                    var5 = _closure1_slot26;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var6);
                    var3 = var4[var3];
                    var1[1] = var3;
                    _fun0016_ip = 112; continue _fun0016;
 95:
                    var3 = new Array(2);
                    var4 = undefined;
                    var3[0] = var4;
                    var3[1] = var4;
                    var1 = var3;
 112:
                    return var1;
 114:
                    var1 = new Array(2);
                    var3 = undefined;
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[15] = var5;
            var5 = {};
            var7 = 'trackExperimentExposure';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4, arg5, arg6) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var11 = arg2;
                    var10 = arg3;
                    var5 = arg4;
                    var4 = this;
                    var7 = _closure1_slot26;
                    var3 = global;
                    var1 = var3.HermesInternal;
                    var12 = var1.concat;
                    var20 = '';
                    var8 = '|';
                    var17 = arg5;
                    var15 = arg6;
                    var19 = var11;
                    var18 = var8;
                    var16 = var8;
                    var14 = var8;
                    var13 = var10;
                    var6 = var20[var12](var19, var18, var17, var16, var15, var14, var13, var12);
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var7 = var4.shouldTrackExposure;
                    var7 = var7.bind(var4)(var6);
                    if(!var7) { _fun0017_ip = 94; continue _fun0017 }
 86:
                    var8 = 'user';
                    var7 = var8 === var5;
 94:
                    if(!var7) { _fun0017_ip = 191; continue _fun0017 }
 97:
                    var9 = var4.track;
                    var7 = _closure1_slot10;
                    var8 = var7.EXPERIMENT_USER_EVALUATION_EXPOSED;
                    var7 = {};
                    var12 = arg1;
                    var7['evaluation_id'] = var12;
                    var7['experiment'] = var11;
                    var7['exposure_location'] = var10;
                    var7['unit_type'] = var5;
                    var5 = {};
                    var10 = true;
                    var5['flush'] = var10;
                    var5 = var9.bind(var4)(var8, var7, var5);
                    var5 = _closure1_slot20;
                    var7 = var3.Date;
                    var3 = var7.now;
                    var3 = var3.bind(var7)();
                    var5[var6] = var3;
                    var3 = var4.saveTrackedExposures;
                    var2 = _closure1_slot20;
                    var2 = var3.bind(var4)(var2);
 191:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[16] = var5;
            var5 = {};
            var7 = 'trackCommonTriggerPointExposures';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var12 = arg1;
                    var11 = this;
                    var3 = _closure1_slot23;
                    var1 = var11.evaluationIds;
                    var9 = 'user';
                    var2 = var1.bind(var11)(var9);
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var3 = var8.bind(var1)();
                    var2 = var3.done;
                    var7 = true;
                    var6 = global;
                    var5 = '';
                    var4 = '|';
                    if(var2) { _fun0018_ip = 212; continue _fun0018 }
 64:
                    var2 = var3.value;
                    var14 = _closure1_slot26;
                    var13 = var6.HermesInternal;
                    var13 = var13.concat;
                    var13 = var13.bind(var5)(var2, var4, var12);
                    var14 = var14.bind(var1)(var13);
                    var13 = var11.shouldTrackExposure;
                    var13 = var13.bind(var11)(var14);
                    if(!var13) { _fun0018_ip = 194; continue _fun0018 }
 110:
                    var16 = var11.track;
                    var13 = _closure1_slot10;
                    var15 = var13.EXPERIMENT_USER_EVALUATION_EXPOSED;
                    var13 = {};
                    var13['evaluation_id'] = var2;
                    var13['exposure_location'] = var12;
                    var13['unit_type'] = var9;
                    var2 = {};
                    var2['flush'] = var7;
                    var2 = var16.bind(var11)(var15, var13, var2);
                    var13 = _closure1_slot20;
                    var15 = var6.Date;
                    var2 = var15.now;
                    var2 = var2.bind(var15)();
                    var13[var14] = var2;
                    var13 = var11.saveTrackedExposures;
                    var2 = _closure1_slot20;
                    var2 = var13.bind(var11)(var2);
 194:
                    var13 = var8.bind(var1)();
                    var2 = var13.done;
                    var3 = var13;
                    if(!var2) { _fun0018_ip = 64; continue _fun0018 }
 212:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[17] = var5;
            var5 = {};
            var7 = 'trackExposureSuppression';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var1 = arg1;
                    var5 = this;
                    var3 = _closure1_slot14;
                    var4 = var3[var1];
                    var3 = null;
                    var3 = var3 != var4;
                    if(!var3) { _fun0019_ip = 39; continue _fun0019 }
 26:
                    var6 = var4.kind;
                    var4 = 'user';
                    var3 = var4 === var6;
 39:
                    if(!var3) { _fun0019_ip = 99; continue _fun0019 }
 42:
                    var4 = var5.track;
                    var2 = _closure1_slot10;
                    var3 = var2.EXPERIMENT_USER_EXPOSURE_SUPPRESSED;
                    var2 = {};
                    var2['experiment'] = var1;
                    var1 = 'user';
                    var2['unit_type'] = var1;
                    var1 = arg2;
                    var2['suppression_source'] = var1;
                    var1 = {};
                    var6 = true;
                    var1['flush'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
 99:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[18] = var5;
            var5 = {};
            var7 = 'evaluationIds';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = global;
                var4 = var2.Object;
                var3 = var4.values;
                var5 = _closure1_slot13;
                var2 = arg1;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.evaluationId;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[19] = var5;
            var5 = {};
            var7 = 'shouldTrackExposure';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var3 = _closure1_slot20;
                    var1 = arg1;
                    var4 = var3[var1];
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0020_ip = 52; continue _fun0020 }
 23:
                    var3 = global;
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var3 = var3 - var4;
                    var2 = _closure1_slot19;
                    var1 = var3 > var2;
 52:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[20] = var5;
            var5 = {};
            var7 = 'loadTrackedExposures';
            var5['key'] = var7;
            var7 = function value() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var3 = this;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var4 = var1.Storage;
                    var2 = var4.get;
                    var1 = _closure1_slot18;
                    var1 = var2.bind(var4)(var1);
                    var2 = null;
                    if(!(var2 != var1)) { _fun0021_ip = 160; continue _fun0021 }
 54:
                    var4 = var1.version;
                    var2 = 1;
                    if(!(var2 === var4)) { _fun0021_ip = 160; continue _fun0021 }
 67:
                    var1 = var1.exposures;
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var11 = var2.bind(var4)();
                    var9 = var1;
                    var4 = false;
                    var2 = false;
                    for(var6 in var9)
 105:
                    {
                        var2 = var4;
 117:
                        var13 = var6;
                        var14 = var1[var13];
                        var15 = var11 - var14;
                        var14 = _closure1_slot19;
                        if(!(var15 > var14)) { _fun0021_ip = 105; continue _fun0021 }
 136:
                        var13 = delete var1[var13];
                        var4 = true;
                        _fun0021_ip = 105; continue _fun0021;
                    }
 144:
                    if(!var2) { _fun0021_ip = 158; continue _fun0021 }
 147:
                    var2 = var3.saveTrackedExposures;
                    var2 = var2.bind(var3)(var1);
 158:
                    return var1;
 160:
                    var1 = {};
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[21] = var5;
            var5 = {};
            var7 = 'saveTrackedExposures';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var5 = this;
                    var6 = arg1;
 6: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.Storage;
                    var3 = var4.set;
                    var2 = _closure1_slot18;
                    var1 = {};
                    var7 = 1;
                    var1['version'] = var7;
                    var1['exposures'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
 67: // try_end0
                    _fun0022_ip = 149; continue _fun0022;
 69: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var4 = _closure1_slot11;
                    var3 = var4.error;
                    var2 = 'Error saving tracked exposures';
                    var2 = var3.bind(var4)(var2, var6);
                    var4 = var5.track;
                    var1 = _closure1_slot10;
                    var3 = var1.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                    var2 = {};
                    var1 = var5.surface;
                    var2['module'] = var1;
                    var1 = 'ApexExperimentStore.saveTrackedExposures';
                    var2['call'] = var1;
                    var1 = {};
                    var6 = true;
                    var1['flush'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
 149:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[22] = var5;
            var5 = {};
            var7 = 'clearAllServerAssignments';
            var5['key'] = var7;
            var7 = function value() {
                var2 = {};
                var1 = {};
                var2['user'] = var1;
                var1 = {};
                var2['guild'] = var1;
                _closure1_slot13 = var2;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[23] = var5;
            var5 = {};
            var7 = 'clearAllOverrides';
            var5['key'] = var7;
            var7 = function value() {
                var1 = {};
                _closure1_slot15 = var1;
                var1 = {};
                _closure1_slot16 = var1;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[24] = var5;
            var5 = {};
            var7 = 'clearAllTrackedExposures';
            var5['key'] = var7;
            var7 = function value() {
                var1 = {};
                _closure1_slot20 = var1;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[25] = var5;
            var5 = {};
            var7 = 'getHash';
            var5['key'] = var7;
            var6 = function value(arg1) {
                var3 = _closure1_slot26;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var5['value'] = var6;
            var1[26] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var2 = var2.bind(var1)(var7);
        var2['displayName'] = var4;
        var2['persistKey'] = var4;
        var4 = 14;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = '../discord_common/js/packages/apex/BaseApexExperimentStore.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();