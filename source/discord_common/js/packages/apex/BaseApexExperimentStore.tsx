// discord_common/js/packages/apex/BaseApexExperimentStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var6;
        var1 = function _toPropertyKey(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var7 = arg1;
                var4 = 'object';
                var1 = typeof var7;
                var2 = var7;
                if(!(var4 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var2 = var7;
                if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                var1 = global;
                var3 = var1.Symbol;
                var3 = var3.toPrimitive;
                var6 = var7[var3];
                var5 = undefined;
                if(!(var5 === var6)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var3 = var1.String;
                var2 = var3.bind(var5)(var7);
                _fun0002_ip = 2; continue _fun0002;
case 5:
                var5 = var6.call;
                var3 = 'string';
                var5 = var5.bind(var6)(var7, var3);
                var3 = typeof var5;
                var2 = var5;
                if(!(var4 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 7:
                var4 = var1.TypeError;
                var1 = var4.prototype;
                var3 = Object.create(var1, {constructor: {value: var4}});
                var9 = '@@toPrimitive must return a primitive value.';
                var10 = var3;
                var1 = new var10[var4](var9, var8);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
case 2:
                var4 = 'symbol';
                var3 = typeof var2;
                var1 = var2;
                if(!(var4 !== var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var1 = '' + var2;
case 8:
                return var1;
            }
        };
        var _closure1_slot24 = var1;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 10:
                if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var2 = var3.@@iterator;
case 12:
                if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
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
                if(!var7) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var7 = var3.constructor;
case 22:
                var10 = var9;
                if(!var7) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var7 = var3.constructor;
                var10 = var7.name;
case 24:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0003_ip = 26; continue _fun0003 }
case 28:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0003_ip = 31; continue _fun0003 }
case 29:
                var9 = _closure1_slot26;
                var7 = var9.bind(var8)(var3, var8);
case 31:
                _fun0003_ip = 32; continue _fun0003;
case 26:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 32:
                var6 = var7;
                _fun0003_ip = 18; continue _fun0003;
case 20:
                var7 = _closure1_slot26;
                var6 = var7.bind(var8)(var3, var8);
case 18:
                var4 = var6;
                if(var4) { _fun0003_ip = 16; continue _fun0003 }
case 33:
                var7 = var5.TypeError;
                var5 = var7.prototype;
                var6 = Object.create(var5, {constructor: {value: var7}});
                var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var14 = var6;
                var5 = new var14[var7](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
case 16:
                if(!var4) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                _closure2_slot0 = var4;
case 34:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0004_ip = 36; continue _fun0004 }
case 37:
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
                        _fun0004_ip = 38; continue _fun0004;
case 36:
                        var2 = {};
                        var3 = true;
                        var2['done'] = var3;
                        var1 = var2;
case 38:
                        return var1;
                    }
                };
                return var1;
case 14:
                var1 = var2.call;
                var3 = var1.bind(var2)(var3);
                var2 = var3.next;
                var1 = var2.bind;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var _closure1_slot25 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0005_ip = 4; continue _fun0005 }
case 39:
                var2 = var4.length;
                var1 = var3 > var2;
case 4:
                var2 = undefined;
                if(!var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var2 = var4.length;
case 40:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0005_ip = 42; continue _fun0005 }
case 12:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0005_ip = 12; continue _fun0005 }
case 42:
                return var1;
            }
        };
        var _closure1_slot26 = var1;
        var1 = function _isNativeReflectConstruct() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
case 43: // try_start_0
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
case 42: // try_end0
                _fun0006_ip = 44; continue _fun0006;
case 45: // catch_target0
                CatchBlockStart(arg_register=1);
case 44:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot27 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot27 = var1;
        var1 = function _getHash(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot23;
                var1 = var1[var4];
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 46; continue _fun0007 }
case 37:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 11;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.v3;
                var2 = var2.bind(var5)(var4);
                var3 = _closure1_slot23;
                var3[var4] = var2;
                var1 = var2;
case 46:
                return var1;
            }
        };
        var _closure1_slot28 = var1;
        var7 = global;
        var10 = var7.Object;
        var9 = var10.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var4);
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
        var9 = var4.Logger;
        var4 = var9.prototype;
        var10 = Object.create(var4, {constructor: {value: var9}});
        var4 = 'ApexExperimentStore';
        var15 = var10;
        var14 = var4;
        var9 = new var15[var9](var14, var13);
        var9 = var9 instanceof Object ? var9 : var10;
        var _closure1_slot11 = var9;
        var9 = var7.window;
        var9 = var9.TextEncoder;
        var11 = null;
        var9 = var11 != var9;
        if(!var9) { _fun0001_ip = 35; continue _fun0001 }
case 47:
        var10 = var7.window;
        var10 = var10.TextDecoder;
        var9 = var11 != var10;
case 35:
        if(var9) { _fun0001_ip = 48; continue _fun0001 }
case 49:
        var9 = 9;
        var9 = var6[var9];
        var9 = var5.bind(var1)(var9);
case 48:
        var9 = 10;
        var9 = var6[var9];
        var9 = var5.bind(var1)(var9);
        var9 = var9.UnitType;
        var10 = var9.User;
        var9 = new Array(1);
        var9[0] = var10;
        var _closure1_slot12 = var9;
        var9 = {};
        var10 = {};
        var9['user'] = var10;
        var10 = {};
        var9['guild'] = var10;
        var _closure1_slot13 = var9;
        var9 = {};
        var _closure1_slot14 = var9;
        var9 = {};
        var _closure1_slot15 = var9;
        var9 = {};
        var _closure1_slot16 = var9;
        var9 = {};
        var _closure1_slot17 = var9;
        var9 = var7.Set;
        var10 = var9.prototype;
        var10 = Object.create(var10, {constructor: {value: var9}});
        var15 = var10;
        var9 = new var15[var9](var14);
        var9 = var9 instanceof Object ? var9 : var10;
        var _closure1_slot18 = var9;
        var7 = var7.Set;
        var9 = var7.prototype;
        var9 = Object.create(var9, {constructor: {value: var7}});
        var15 = var9;
        var7 = new var15[var7](var14);
        var7 = var7 instanceof Object ? var7 : var9;
        var _closure1_slot19 = var7;
        var7 = 'apexTrackedExposures';
        var _closure1_slot20 = var7;
        var7 = 604800000;
        var _closure1_slot21 = var7;
        var7 = {};
        var _closure1_slot22 = var7;
        var7 = {};
        var _closure1_slot23 = var7;
        var7 = 13;
        var7 = var6[var7];
        var7 = var8.bind(var1)(var7);
        var7 = var7.PersistedStore;
        var2 = function(arg1) {
            var4 = function BaseApexExperimentStore(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
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
                    var1 = _closure1_slot27;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var1 = var8.apply;
                    var1 = var1.bind(var8)(var4, var9);
                    _fun0008_ip = 52; continue _fun0008;
case 50:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var1 = var6.bind(var7)(var8, var9, var5);
case 52:
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
case 0:
                    var1 = arg1;
                    var10 = arg2;
                    var4 = this;
                    var2 = null;
                    var2 = var2 != var1;
                    if(!var2) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                    var5 = var1.version;
                    var3 = 1;
                    var2 = var3 === var5;
case 53:
                    if(!var2) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var3 = var1.clientOverrides;
                    _closure1_slot15 = var3;
                    var1 = var1.evaluatedExperiments;
                    _closure1_slot13 = var1;
case 55:
                    var1 = {};
                    _closure1_slot16 = var1;
                    var8 = var10;
                    var1 = undefined;
                    var2 = true;
                    for(var5 in var8)
case 57:
                    {
case 58:
                        var13 = var5;
                        var11 = _closure1_slot28;
                        var15 = var11.bind(var1)(var13);
                        var14 = var10[var13];
                        var12 = _closure1_slot16;
                        var11 = {};
                        var11['hashedName'] = var15;
                        var11['variantId'] = var14;
                        var11['isOverride'] = var2;
                        var12[var13] = var11;
                        _fun0009_ip = 57; continue _fun0009;
                    }
case 9:
                    var2 = var4.loadTrackedExposures;
                    var2 = var2.bind(var4)();
                    _closure1_slot22 = var2;
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(33);
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
case 0:
                    var26 = arg1;
                    var25 = null;
                    if(!(var25 != var26)) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                    var23 = _closure1_slot12;
                    var1 = var23.length;
                    var22 = 0;
                    var1 = var22 < var1;
                    var21 = undefined;
                    var20 = 10;
                    var19 = 5;
                    var18 = 1;
                    var17 = 2;
                    var16 = 3;
                    var15 = 4;
                    var14 = 0;
                    var13 = undefined;
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
                    if(!var1) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                    var27 = var23[var14];
                    var28 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var20];
                    var1 = var28.bind(var21)(var1);
                    var1 = var1.UnitTypeToKind;
                    var39 = var1[var27];
                    var1 = var26.assignments;
                    var62 = var1[var27];
                    var38 = var13;
                    var37 = var12;
                    var36 = var11;
                    var35 = var10;
                    var34 = var9;
                    var33 = var8;
                    var32 = var7;
                    var31 = var6;
                    var30 = var5;
                    var29 = var4;
                    var28 = var3;
                    var27 = var2;
                    if(!(var25 != var62)) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                    var38 = var13;
                    var37 = var12;
                    var36 = var11;
                    var35 = var10;
                    var34 = var9;
                    var33 = var8;
                    var32 = var7;
                    var31 = var6;
                    var30 = var5;
                    var29 = var4;
                    var28 = var3;
                    var27 = var2;
                    if(!(var25 != var39)) { _fun0010_ip = 63; continue _fun0010 }
case 65:
                    var1 = _closure1_slot13;
                    var61 = var1[var39];
                    var59 = var62;
                    var55 = var12;
                    var54 = var11;
                    var53 = var10;
                    var52 = var9;
                    var51 = var8;
                    var50 = var7;
                    var49 = var6;
                    var48 = var5;
                    var47 = var4;
                    var46 = var3;
                    var45 = var2;
                    var38 = var61;
                    var37 = var55;
                    var36 = var54;
                    var35 = var53;
                    var34 = var52;
                    var33 = var51;
                    var32 = var50;
                    var31 = var49;
                    var30 = var48;
                    var29 = var47;
                    var28 = var46;
                    var27 = var45;
                    for(var56 in var59)
case 66:
                    {
                        var37 = var55;
                        var36 = var54;
                        var35 = var53;
                        var34 = var52;
                        var33 = var51;
                        var32 = var50;
                        var38 = var61;
                        var31 = var49;
                        var30 = var48;
                        var29 = var47;
                        var28 = var46;
                        var27 = var45;
case 67:
                        var44 = var56;
                        var39 = _closure1_slot19;
                        var1 = var39.add;
                        var1 = var1.bind(var39)(var44);
                        var1 = var62[var44];
                        var43 = var1.evaluation_id;
                        var42 = var1.assignments;
                        var41 = {};
                        var39 = var25 != var43;
                        var1 = undefined;
                        if(!var39) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                        var1 = var43;
case 68:
                        var41['evaluationId'] = var1;
                        var1 = {};
                        var41['assignments'] = var1;
                        var61[var44] = var41;
                        var1 = _closure1_slot25;
                        var40 = var1.bind(var21)(var42);
                        var39 = var40.bind(var21)();
                        var1 = var39.done;
                        var55 = var44;
                        var54 = var43;
                        var53 = var42;
                        var52 = var41;
                        var51 = var39;
                        var50 = var40;
                        var39 = var51;
                        if(var1) { _fun0010_ip = 66; continue _fun0010 }
case 70:
                        var63 = var39.value;
                        var1 = _closure1_slot4;
                        var1 = var1.bind(var21)(var63, var19);
                        var49 = var1[var22];
                        var48 = var1[var18];
                        var47 = var1[var17];
                        var46 = var1[var16];
                        var45 = var1[var15];
                        if(!(var47 == var25)) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                        var47 = 0;
case 71:
                        var63 = var41.assignments;
                        var1 = {};
                        var1['hashedName'] = var49;
                        var1['variantId'] = var48;
                        var1['trackedVariantId'] = var45;
                        var65 = _closure1_slot0;
                        var64 = _closure1_slot2;
                        var64 = var64[var20];
                        var64 = var65.bind(var21)(var64);
                        var64 = var64.ExperimentFlags;
                        var64 = var64.IsOverride;
                        var64 = var47 & var64;
                        var64 = !var64;
                        var64 = !var64;
                        var1['isOverride'] = var64;
                        var1['revision'] = var46;
                        var63[var49] = var1;
                        var63 = var40.bind(var21)();
                        var1 = var63.done;
                        var55 = var44;
                        var54 = var43;
                        var53 = var42;
                        var52 = var41;
                        var51 = var63;
                        var50 = var40;
                        var39 = var51;
                        if(var1) { _fun0010_ip = 66; continue _fun0010 }
case 73:
                        _fun0010_ip = 70; continue _fun0010;
                    }
case 63:
                    var14 = var14 + 1;
                    var1 = var23.length;
                    var13 = var38;
                    var12 = var37;
                    var11 = var36;
                    var10 = var35;
                    var9 = var34;
                    var8 = var33;
                    var7 = var32;
                    var6 = var31;
                    var5 = var30;
                    var4 = var29;
                    var3 = var28;
                    var2 = var27;
                    if(var14 < var1) { _fun0010_ip = 62; continue _fun0010 }
case 61:
                    var1 = true;
                    return var1;
case 59:
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
                var7 = _closure1_slot28;
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
                var1 = _closure1_slot24;
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
case 0:
                    var3 = this;
                    var1 = arg1;
                    if(var1) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                    var1 = var3.clearAllServerAssignments;
                    var1 = var1.bind(var3)();
case 74:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var5 = var4.Storage;
                    var4 = var5.remove;
                    var2 = _closure1_slot20;
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
case 0:
                    var1 = arg1;
                    var4 = this;
                    var5 = _closure1_slot14;
                    var3 = var1.name;
                    var5[var3] = var1;
                    var3 = _closure1_slot16;
                    var2 = var1.name;
                    var3 = var3[var2];
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 46; continue _fun0012 }
case 76:
                    var3 = var4.trackExposureSuppression;
                    var2 = var1.name;
                    var1 = 'cookie_override';
                    var1 = var3.bind(var4)(var2, var1);
case 46:
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
case 0:
                    var6 = arg3;
                    var5 = this;
                    var1 = _closure1_slot15;
                    var1 = var1[var6];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0013_ip = 53; continue _fun0013 }
case 4:
                    var3 = _closure1_slot16;
                    var1 = var3[var6];
case 53:
                    if(!(var2 == var1)) { _fun0013_ip = 77; continue _fun0013 }
case 78:
                    var4 = var5.getServerAssignment;
                    var3 = arg1;
                    var2 = arg2;
                    var1 = var4.bind(var5)(var3, var2, var6);
case 77:
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
case 0:
                    var4 = _closure1_slot28;
                    var3 = undefined;
                    var2 = arg3;
                    var2 = var4.bind(var3)(var2);
                    var4 = _closure1_slot13;
                    var1 = arg1;
                    var4 = var4[var1];
                    var1 = arg2;
                    var1 = var4[var1];
                    var4 = null;
                    if(!(var4 == var1)) { _fun0014_ip = 79; continue _fun0014 }
case 76:
                    return var3;
case 79:
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
case 0:
                    var2 = _closure1_slot13;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = arg2;
                    var2 = var2[var1];
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0015_ip = 80; continue _fun0015 }
case 81:
                    var1 = var2.evaluationId;
case 80:
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
case 0:
                    var6 = arg3;
                    var1 = _closure1_slot15;
                    var2 = var1[var6];
                    var1 = null;
                    if(!(var1 == var2)) { _fun0016_ip = 41; continue _fun0016 }
case 37:
                    var4 = _closure1_slot16;
                    var2 = var4[var6];
case 41:
                    if(!(var1 == var2)) { _fun0016_ip = 82; continue _fun0016 }
case 81:
                    var5 = _closure1_slot13;
                    var4 = arg1;
                    var5 = var5[var4];
                    var4 = arg2;
                    var4 = var5[var4];
                    if(!(var1 != var4)) { _fun0016_ip = 83; continue _fun0016 }
case 77:
                    var5 = var4.evaluationId;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var4 = var4.assignments;
                    var5 = _closure1_slot28;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var6);
                    var3 = var4[var3];
                    var1[1] = var3;
                    _fun0016_ip = 84; continue _fun0016;
case 83:
                    var3 = new Array(2);
                    var4 = undefined;
                    var3[0] = var4;
                    var3[1] = var4;
                    var1 = var3;
case 84:
                    return var1;
case 82:
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
case 0:
                    var12 = arg2;
                    var11 = arg3;
                    var10 = arg4;
                    var5 = arg6;
                    var4 = this;
                    var7 = _closure1_slot28;
                    var3 = global;
                    var1 = var3.HermesInternal;
                    var9 = var1.concat;
                    var21 = '';
                    var6 = '|';
                    var18 = arg5;
                    var20 = var12;
                    var19 = var6;
                    var17 = var6;
                    var16 = var5;
                    var15 = var6;
                    var14 = var11;
                    var6 = var21[var9](var20, var19, var18, var17, var16, var15, var14, var13);
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var7 = var4.shouldTrackExposure;
                    var7 = var7.bind(var4)(var6);
                    if(!var7) { _fun0017_ip = 85; continue _fun0017 }
case 86:
                    var8 = 'user';
                    var7 = var8 === var10;
case 85:
                    if(!var7) { _fun0017_ip = 87; continue _fun0017 }
case 88:
                    var9 = var4.track;
                    var7 = _closure1_slot10;
                    var8 = var7.EXPERIMENT_USER_EVALUATION_EXPOSED;
                    var7 = {};
                    var13 = arg1;
                    var7['evaluation_id'] = var13;
                    var7['experiment'] = var12;
                    var7['exposure_location'] = var11;
                    var7['unit_type'] = var10;
                    var7['tracked_variation_id'] = var5;
                    var5 = {};
                    var10 = true;
                    var5['flush'] = var10;
                    var5 = var9.bind(var4)(var8, var7, var5);
                    var5 = _closure1_slot22;
                    var7 = var3.Date;
                    var3 = var7.now;
                    var3 = var3.bind(var7)();
                    var5[var6] = var3;
                    var3 = var4.saveTrackedExposures;
                    var2 = _closure1_slot22;
                    var2 = var3.bind(var4)(var2);
case 87:
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
case 0:
                    var12 = arg1;
                    var11 = this;
                    var3 = _closure1_slot25;
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
                    if(var2) { _fun0018_ip = 89; continue _fun0018 }
case 46:
                    var2 = var3.value;
                    var14 = _closure1_slot28;
                    var13 = var6.HermesInternal;
                    var13 = var13.concat;
                    var13 = var13.bind(var5)(var2, var4, var12);
                    var14 = var14.bind(var1)(var13);
                    var13 = var11.shouldTrackExposure;
                    var13 = var13.bind(var11)(var14);
                    if(!var13) { _fun0018_ip = 90; continue _fun0018 }
case 21:
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
                    var13 = _closure1_slot22;
                    var15 = var6.Date;
                    var2 = var15.now;
                    var2 = var2.bind(var15)();
                    var13[var14] = var2;
                    var13 = var11.saveTrackedExposures;
                    var2 = _closure1_slot22;
                    var2 = var13.bind(var11)(var2);
case 90:
                    var13 = var8.bind(var1)();
                    var2 = var13.done;
                    var3 = var13;
                    if(!var2) { _fun0018_ip = 46; continue _fun0018 }
case 89:
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
case 0:
                    var1 = arg1;
                    var5 = this;
                    var3 = _closure1_slot14;
                    var4 = var3[var1];
                    var3 = null;
                    var3 = var3 != var4;
                    if(!var3) { _fun0019_ip = 91; continue _fun0019 }
case 92:
                    var6 = var4.kind;
                    var4 = 'user';
                    var3 = var4 === var6;
case 91:
                    if(!var3) { _fun0019_ip = 93; continue _fun0019 }
case 94:
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
case 93:
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
case 0:
                    var3 = _closure1_slot22;
                    var1 = arg1;
                    var4 = var3[var1];
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0020_ip = 95; continue _fun0020 }
case 4:
                    var3 = global;
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var3 = var3 - var4;
                    var2 = _closure1_slot21;
                    var1 = var3 > var2;
case 95:
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
case 0:
                    var3 = this;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var4 = var1.Storage;
                    var2 = var4.get;
                    var1 = _closure1_slot20;
                    var1 = var2.bind(var4)(var1);
                    var2 = null;
                    if(!(var2 != var1)) { _fun0021_ip = 96; continue _fun0021 }
case 77:
                    var4 = var1.version;
                    var2 = 2;
                    if(!(var2 === var4)) { _fun0021_ip = 96; continue _fun0021 }
case 38:
                    var1 = var1.exposures;
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var11 = var2.bind(var4)();
                    var9 = var1;
                    var4 = false;
                    var2 = false;
                    for(var6 in var9)
case 97:
                    {
                        var2 = var4;
case 98:
                        var13 = var6;
                        var14 = var1[var13];
                        var15 = var11 - var14;
                        var14 = _closure1_slot21;
                        if(!(var15 > var14)) { _fun0021_ip = 97; continue _fun0021 }
case 8:
                        var13 = delete var1[var13];
                        var4 = true;
                        _fun0021_ip = 97; continue _fun0021;
                    }
case 99:
                    if(!var2) { _fun0021_ip = 23; continue _fun0021 }
case 100:
                    var2 = var3.saveTrackedExposures;
                    var2 = var2.bind(var3)(var1);
case 23:
                    return var1;
case 96:
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
case 0:
                    var5 = this;
                    var6 = arg1;
case 101: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.Storage;
                    var3 = var4.set;
                    var2 = _closure1_slot20;
                    var1 = {};
                    var7 = 2;
                    var1['version'] = var7;
                    var1['exposures'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
case 38: // try_end0
                    _fun0022_ip = 102; continue _fun0022;
case 103: // catch_target0
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
case 102:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[22] = var5;
            var5 = {};
            var7 = 'clearForTests';
            var5['key'] = var7;
            var7 = function value() {
                var2 = this;
                var1 = var2.clearAllServerAssignments;
                var1 = var1.bind(var2)();
                var1 = var2.clearAllOverrides;
                var1 = var1.bind(var2)();
                var1 = var2.clearAllTrackedExposures;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot18;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                var2 = _closure1_slot19;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[23] = var5;
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
            var1[24] = var5;
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
            var1[25] = var5;
            var5 = {};
            var7 = 'clearAllTrackedExposures';
            var5['key'] = var7;
            var7 = function value() {
                var1 = {};
                _closure1_slot22 = var1;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[26] = var5;
            var5 = {};
            var7 = 'getHash';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var3 = _closure1_slot28;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[27] = var5;
            var5 = {};
            var7 = 'handleFetchStart';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var3 = _closure1_slot18;
                var2 = var3.add;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[28] = var5;
            var5 = {};
            var7 = 'handleFetchSuccess';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                var4 = arg1;
                var3 = this;
                var5 = _closure1_slot18;
                var2 = var5.delete;
                var2 = var2.bind(var5)(var4);
                var2 = _closure1_slot19;
                var1 = var2.add;
                var1 = var1.bind(var2)(var4);
                var2 = var3.setExperimentAssignments;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[29] = var5;
            var5 = {};
            var7 = 'handleFetchFailure';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var3 = arg1;
                var4 = _closure1_slot18;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
                var2 = _closure1_slot19;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[30] = var5;
            var5 = {};
            var7 = 'isFetching';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var3 = _closure1_slot18;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[31] = var5;
            var5 = {};
            var7 = 'hasLoaded';
            var5['key'] = var7;
            var6 = function value(arg1) {
                var3 = _closure1_slot19;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var6;
            var1[32] = var5;
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