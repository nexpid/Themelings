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
        var _closure1_slot25 = var1;
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
                var2 = var3["@@iterator"];
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
                var9 = _closure1_slot27;
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
                var7 = _closure1_slot27;
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
        var _closure1_slot26 = var1;
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
        var _closure1_slot27 = var1;
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
                _closure1_slot28 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot28 = var1;
        var1 = function _getHash(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot24;
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
                var3 = _closure1_slot24;
                var3[var4] = var2;
                var1 = var2;
case 46:
                return var1;
            }
        };
        var _closure1_slot29 = var1;
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
        var16 = var10;
        var15 = var4;
        var9 = new var16[var9](var15, var14);
        var9 = var9 instanceof Object ? var9 : var10;
        var _closure1_slot11 = var9;
        var9 = var7.window;
        var10 = 'undefined';
        var9 = typeof var9;
        var9 = var10 === var9;
        if(var9) { _fun0001_ip = 47; continue _fun0001 }
case 48:
        var10 = var7.window;
        var10 = var10.TextEncoder;
        var12 = null;
        var10 = var12 != var10;
        if(!var10) { _fun0001_ip = 49; continue _fun0001 }
case 50:
        var11 = var7.window;
        var11 = var11.TextDecoder;
        var10 = var12 != var11;
case 49:
        var9 = var10;
case 47:
        if(var9) { _fun0001_ip = 51; continue _fun0001 }
case 52:
        var9 = 9;
        var9 = var6[var9];
        var9 = var5.bind(var1)(var9);
case 51:
        var10 = 10;
        var9 = var6[var10];
        var9 = var5.bind(var1)(var9);
        var9 = var9.UnitType;
        var11 = var9.User;
        var9 = new Array(2);
        var9[0] = var11;
        var10 = var6[var10];
        var10 = var5.bind(var1)(var10);
        var10 = var10.UnitType;
        var10 = var10.Installation;
        var9[1] = var10;
        var _closure1_slot12 = var9;
        var9 = {};
        var10 = {};
        var9['user'] = var10;
        var10 = {};
        var9['guild'] = var10;
        var10 = {};
        var9['installation'] = var10;
        var _closure1_slot13 = var9;
        var9 = {};
        var _closure1_slot14 = var9;
        var9 = {};
        var _closure1_slot15 = var9;
        var9 = {};
        var _closure1_slot16 = var9;
        var9 = {};
        var _closure1_slot17 = var9;
        var9 = {};
        var _closure1_slot18 = var9;
        var9 = var7.Set;
        var10 = var9.prototype;
        var10 = Object.create(var10, {constructor: {value: var9}});
        var16 = var10;
        var9 = new var16[var9](var15);
        var9 = var9 instanceof Object ? var9 : var10;
        var _closure1_slot19 = var9;
        var7 = var7.Set;
        var9 = var7.prototype;
        var9 = Object.create(var9, {constructor: {value: var7}});
        var16 = var9;
        var7 = new var16[var7](var15);
        var7 = var7 instanceof Object ? var7 : var9;
        var _closure1_slot20 = var7;
        var7 = 'apexTrackedExposures';
        var _closure1_slot21 = var7;
        var7 = 604800000;
        var _closure1_slot22 = var7;
        var7 = {};
        var _closure1_slot23 = var7;
        var7 = {};
        var _closure1_slot24 = var7;
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
                    var1 = _closure1_slot28;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                    var1 = var8.apply;
                    var1 = var1.bind(var8)(var4, var9);
                    _fun0008_ip = 55; continue _fun0008;
case 53:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var1 = var6.bind(var7)(var8, var9, var5);
case 55:
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
                    var9 = arg2;
                    var4 = this;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0009_ip = 41; continue _fun0009 }
case 56:
                    var10 = var1.version;
                    var3 = 3;
                    if(!(var3 !== var10)) { _fun0009_ip = 19; continue _fun0009 }
case 41:
                    var2 = var2 != var1;
                    if(!var2) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var10 = var1.version;
                    var3 = 2;
                    var2 = var3 === var10;
case 57:
                    if(!var2) { _fun0009_ip = 2; continue _fun0009 }
case 59:
                    var2 = var1.clientOverrides;
                    _closure1_slot15 = var2;
                    var2 = {};
                    var15 = var1.evaluatedExperiments;
                    var16 = var2;
                    var10 = copyDataProperties(var16, var15);
                    var11 = {};
                    var10 = 'installation';
                    var2[9] = var11;
                    _closure1_slot13 = var2;
                    _fun0009_ip = 2; continue _fun0009;
case 19:
                    var3 = var1.clientOverrides;
                    _closure1_slot15 = var3;
                    var1 = var1.evaluatedExperiments;
                    _closure1_slot13 = var1;
case 2:
                    var1 = {};
                    _closure1_slot17 = var1;
                    var7 = var9;
                    var1 = undefined;
                    for(var2 in var7)
case 60:
                    {
case 61:
                        var12 = var2;
                        var10 = _closure1_slot29;
                        var14 = var10.bind(var1)(var12);
                        var13 = var9[var12];
                        var11 = _closure1_slot17;
                        var10 = {'hashedName': null, 'variantId': null, 'isOverride': true, 'exposureTrackingEnabled': false, 'useAsEligibility': false};
                        var10['hashedName'] = var14;
                        var10['variantId'] = var13;
                        var11[var12] = var10;
                        _fun0009_ip = 60; continue _fun0009;
                    }
case 62:
                    var2 = var4.loadTrackedExposures;
                    var2 = var2.bind(var4)();
                    _closure1_slot23 = var2;
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(44);
            var1[0] = var5;
            var5 = {};
            var7 = 'getState';
            var5['key'] = var7;
            var7 = function value() {
                var1 = {};
                var2 = 3;
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
            var7 = function value(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var28 = arg1;
                    var3 = arg2;
                    var2 = this;
                    var1 = null;
                    if(!(var1 == var28)) { _fun0010_ip = 63; continue _fun0010 }
case 56:
                    if(!(var1 != var3)) { _fun0010_ip = 64; continue _fun0010 }
case 63:
                    var4 = var2.clearSessionOverrides;
                    var4 = var4.bind(var2)();
                    if(!(var1 != var28)) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                    var26 = _closure1_slot12;
                    var4 = var26.length;
                    var25 = 0;
                    var4 = var25 < var4;
                    var24 = undefined;
                    var23 = 10;
                    var22 = 5;
                    var21 = 1;
                    var20 = 2;
                    var19 = 3;
                    var18 = 4;
                    var17 = 0;
                    var16 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    if(!var4) { _fun0010_ip = 65; continue _fun0010 }
case 67:
                    var29 = var26[var17];
                    var30 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var23];
                    var4 = var30.bind(var24)(var4);
                    var4 = var4.UnitTypeToKind;
                    var41 = var4[var29];
                    var4 = var28.assignments;
                    var64 = var4[var29];
                    var40 = var16;
                    var39 = var15;
                    var38 = var14;
                    var37 = var13;
                    var36 = var12;
                    var35 = var11;
                    var34 = var10;
                    var33 = var9;
                    var32 = var8;
                    var31 = var7;
                    var30 = var6;
                    var29 = var5;
                    if(!(var1 != var64)) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var40 = var16;
                    var39 = var15;
                    var38 = var14;
                    var37 = var13;
                    var36 = var12;
                    var35 = var11;
                    var34 = var10;
                    var33 = var9;
                    var32 = var8;
                    var31 = var7;
                    var30 = var6;
                    var29 = var5;
                    if(!(var1 != var41)) { _fun0010_ip = 68; continue _fun0010 }
case 70:
                    var4 = _closure1_slot13;
                    var63 = var4[var41];
                    var61 = var64;
                    var57 = var15;
                    var56 = var14;
                    var55 = var13;
                    var54 = var12;
                    var53 = var11;
                    var52 = var10;
                    var51 = var9;
                    var50 = var8;
                    var49 = var7;
                    var48 = var6;
                    var47 = var5;
                    var40 = var63;
                    var39 = var57;
                    var38 = var56;
                    var37 = var55;
                    var36 = var54;
                    var35 = var53;
                    var34 = var52;
                    var33 = var51;
                    var32 = var50;
                    var31 = var49;
                    var30 = var48;
                    var29 = var47;
                    for(var58 in var61)
case 71:
                    {
                        var39 = var57;
                        var38 = var56;
                        var37 = var55;
                        var36 = var54;
                        var35 = var53;
                        var34 = var52;
                        var40 = var63;
                        var33 = var51;
                        var32 = var50;
                        var31 = var49;
                        var30 = var48;
                        var29 = var47;
case 72:
                        var46 = var58;
                        var41 = _closure1_slot20;
                        var4 = var41.add;
                        var4 = var4.bind(var41)(var46);
                        var4 = var64[var46];
                        var45 = var4.evaluation_id;
                        var44 = var4.assignments;
                        var43 = {};
                        var41 = var1 != var45;
                        var4 = undefined;
                        if(!var41) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                        var4 = var45;
case 73:
                        var43['evaluationId'] = var4;
                        var4 = {};
                        var43['assignments'] = var4;
                        var63[var46] = var43;
                        var4 = _closure1_slot26;
                        var42 = var4.bind(var24)(var44);
                        var41 = var42.bind(var24)();
                        var4 = var41.done;
                        var57 = var46;
                        var56 = var45;
                        var55 = var44;
                        var54 = var43;
                        var53 = var41;
                        var52 = var42;
                        var41 = var53;
                        if(var4) { _fun0010_ip = 71; continue _fun0010 }
case 75:
                        var65 = var41.value;
                        var4 = _closure1_slot4;
                        var4 = var4.bind(var24)(var65, var22);
                        var51 = var4[var25];
                        var50 = var4[var21];
                        var49 = var4[var20];
                        var48 = var4[var19];
                        var47 = var4[var18];
                        if(!(var49 == var1)) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                        var49 = 0;
case 76:
                        var65 = var43.assignments;
                        var4 = {};
                        var4['hashedName'] = var51;
                        var4['variantId'] = var50;
                        var4['trackedVariantId'] = var47;
                        var67 = _closure1_slot0;
                        var66 = _closure1_slot2;
                        var68 = var66[var23];
                        var68 = var67.bind(var24)(var68);
                        var68 = var68.ExperimentFlags;
                        var68 = var68.IsOverride;
                        var68 = var49 & var68;
                        var68 = !var68;
                        var68 = !var68;
                        var4['isOverride'] = var68;
                        var4['revision'] = var48;
                        var68 = var66[var23];
                        var68 = var67.bind(var24)(var68);
                        var68 = var68.ExperimentFlags;
                        var68 = var68.ExposureTrackingEnabled;
                        var68 = var49 & var68;
                        var68 = !var68;
                        var68 = !var68;
                        var4['exposureTrackingEnabled'] = var68;
                        var66 = var66[var23];
                        var66 = var67.bind(var24)(var66);
                        var66 = var66.ExperimentFlags;
                        var66 = var66.UseAsEligibility;
                        var66 = var49 & var66;
                        var66 = !var66;
                        var66 = !var66;
                        var4['useAsEligibility'] = var66;
                        var65[var51] = var4;
                        var65 = var42.bind(var24)();
                        var4 = var65.done;
                        var57 = var46;
                        var56 = var45;
                        var55 = var44;
                        var54 = var43;
                        var53 = var65;
                        var52 = var42;
                        var41 = var53;
                        if(var4) { _fun0010_ip = 71; continue _fun0010 }
case 78:
                        _fun0010_ip = 75; continue _fun0010;
                    }
case 68:
                    var17 = var17 + 1;
                    var4 = var26.length;
                    var16 = var40;
                    var15 = var39;
                    var14 = var38;
                    var13 = var37;
                    var12 = var36;
                    var11 = var35;
                    var10 = var34;
                    var9 = var33;
                    var8 = var32;
                    var7 = var31;
                    var6 = var30;
                    var5 = var29;
                    if(var17 < var4) { _fun0010_ip = 67; continue _fun0010 }
case 65:
                    if(!(var1 != var3)) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                    var1 = var2.setGuildExperimentAssignments;
                    var1 = var1.bind(var2)(var3);
case 79:
                    var1 = true;
                    return var1;
case 64:
                    var1 = false;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'setGuildExperimentAssignments';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure1_slot13;
                    var18 = var1.guild;
                    var1 = global;
                    var2 = var1.Object;
                    var1 = var2.entries;
                    var17 = null;
                    if(!(var17 == var3)) { _fun0011_ip = 81; continue _fun0011 }
case 58:
                    var3 = {};
case 81:
                    var16 = var1.bind(var2)(var3);
                    var1 = var16.length;
                    var15 = 0;
                    var2 = var15 < var1;
                    var1 = undefined;
                    var14 = 10;
                    var13 = 5;
                    var12 = 1;
                    var11 = 2;
                    var10 = 3;
                    var9 = 4;
                    var8 = 0;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    if(!var2) { _fun0011_ip = 82; continue _fun0011 }
case 83:
                    var20 = var16[var8];
                    var2 = _closure1_slot4;
                    var20 = var2.bind(var1)(var20, var11);
                    var2 = var20[var15];
                    var20 = var20[var12];
                    var23 = var20.evaluation_id;
                    var20 = var20.assignments;
                    var22 = {};
                    var24 = var17 != var23;
                    var21 = undefined;
                    if(!var24) { _fun0011_ip = 84; continue _fun0011 }
case 8:
                    var21 = var23;
case 84:
                    var22['evaluationId'] = var21;
                    var21 = {};
                    var22['assignments'] = var21;
                    var18[var2] = var22;
                    var2 = _closure1_slot26;
                    var21 = var2.bind(var1)(var20);
                    var20 = var21.bind(var1)();
                    var2 = var20.done;
                    if(var2) { _fun0011_ip = 85; continue _fun0011 }
case 24:
                    var23 = var20.value;
                    var2 = _closure1_slot4;
                    var2 = var2.bind(var1)(var23, var13);
                    var27 = var2[var15];
                    var26 = var2[var12];
                    var25 = var2[var11];
                    var24 = var2[var10];
                    var23 = var2[var9];
                    if(!(var25 == var17)) { _fun0011_ip = 86; continue _fun0011 }
case 87:
                    var25 = 0;
case 86:
                    var28 = {};
                    var28['hashedName'] = var27;
                    var28['variantId'] = var26;
                    var28['trackedVariantId'] = var23;
                    var29 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var30 = var2[var14];
                    var30 = var29.bind(var1)(var30);
                    var30 = var30.ExperimentFlags;
                    var30 = var30.IsOverride;
                    var30 = var25 & var30;
                    var30 = !var30;
                    var30 = !var30;
                    var28['isOverride'] = var30;
                    var28['revision'] = var24;
                    var30 = var2[var14];
                    var30 = var29.bind(var1)(var30);
                    var30 = var30.ExperimentFlags;
                    var30 = var30.ExposureTrackingEnabled;
                    var30 = var25 & var30;
                    var30 = !var30;
                    var30 = !var30;
                    var28['exposureTrackingEnabled'] = var30;
                    var2 = var2[var14];
                    var2 = var29.bind(var1)(var2);
                    var2 = var2.ExperimentFlags;
                    var2 = var2.UseAsEligibility;
                    var2 = var25 & var2;
                    var2 = !var2;
                    var2 = !var2;
                    var28['useAsEligibility'] = var2;
                    var2 = var22.assignments;
                    var2[var27] = var28;
                    var28 = var21.bind(var1)();
                    var2 = var28.done;
                    var5 = var25;
                    var20 = var28;
                    var7 = var27;
                    var6 = var26;
                    var4 = var24;
                    var3 = var23;
                    if(!var2) { _fun0011_ip = 24; continue _fun0011 }
case 85:
                    var8 = var8 + 1;
                    var2 = var16.length;
                    if(var8 < var2) { _fun0011_ip = 83; continue _fun0011 }
case 82:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[3] = var5;
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
                var7 = _closure1_slot29;
                var1 = undefined;
                var7 = var7.bind(var1)(var5);
                var6['hashedName'] = var7;
                var7 = arg2;
                var6['variantId'] = var7;
                var7 = true;
                var6['isOverride'] = var7;
                var7 = false;
                var6['exposureTrackingEnabled'] = var7;
                var3[4] = var6;
                _closure1_slot15 = var3;
                var3 = var4.trackExposureSuppression;
                var2 = 'client_override';
                var2 = var3.bind(var4)(var5, var2);
                return var1;
            };
            var5['value'] = var7;
            var1[4] = var5;
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
                var1 = _closure1_slot25;
                var2 = var2.bind(var6)(var1);
                var1 = undefined;
                var2 = var4.bind(var1)(var5, var2);
                _closure1_slot15 = var2;
                return var1;
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'createSessionOverride';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                var5 = arg1;
                var3 = {};
                var7 = _closure1_slot16;
                var8 = var3;
                var1 = copyDataProperties(var8, var7);
                var4 = {};
                var6 = _closure1_slot29;
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var4['hashedName'] = var6;
                var6 = arg2;
                var4['variantId'] = var6;
                var6 = true;
                var4['isOverride'] = var6;
                var6 = false;
                var4['exposureTrackingEnabled'] = var6;
                var3[4] = var4;
                _closure1_slot16 = var3;
                return var1;
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'deleteSessionOverride';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var1 = arg1;
                var5 = _closure1_slot16;
                var2 = var5[var1];
                var4 = _closure1_slot3;
                var6 = new Array(1);
                var6[0] = var1;
                var2 = var6.map;
                var1 = _closure1_slot25;
                var2 = var2.bind(var6)(var1);
                var1 = undefined;
                var2 = var4.bind(var1)(var5, var2);
                _closure1_slot16 = var2;
                return var1;
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'setExperimentsMetadata';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var7 = arg1;
                var2 = {};
                var8 = _closure1_slot18;
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
                _closure1_slot18 = var2;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'getExperimentsMetadata';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot18;
                return var1;
            };
            var5['value'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'getClientOverrides';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot15;
                return var1;
            };
            var5['value'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = 'getSessionOverrides';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot16;
                return var1;
            };
            var5['value'] = var7;
            var1[11] = var5;
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
            var1[12] = var5;
            var5 = {};
            var7 = 'getExperimentSessionOverride';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = _closure1_slot16;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var5['value'] = var7;
            var1[13] = var5;
            var5 = {};
            var7 = 'handleLogout';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = this;
                    var1 = arg1;
                    if(var1) { _fun0012_ip = 88; continue _fun0012 }
case 89:
                    var1 = var3.clearUserServerAssignments;
                    var1 = var1.bind(var3)();
                    var1 = var3.clearSessionOverrides;
                    var1 = var1.bind(var3)();
case 88:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var5 = var4.Storage;
                    var4 = var5.remove;
                    var2 = _closure1_slot21;
                    var2 = var4.bind(var5)(var2);
                    var2 = var3.clearAllTrackedExposures;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[14] = var5;
            var5 = {};
            var7 = 'registerExperiment';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var4 = this;
                    var5 = _closure1_slot14;
                    var3 = var1.name;
                    var5[var3] = var1;
                    var3 = _closure1_slot17;
                    var2 = var1.name;
                    var3 = var3[var2];
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 46; continue _fun0013 }
case 90:
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
            var1[15] = var5;
            var5 = {};
            var7 = 'getRegisteredExperiments';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot14;
                return var1;
            };
            var5['value'] = var7;
            var1[16] = var5;
            var5 = {};
            var7 = 'getAssignment';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var6 = arg3;
                    var5 = this;
                    var1 = var5.getOverride;
                    var1 = var1.bind(var5)(var6);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0014_ip = 91; continue _fun0014 }
case 4:
                    var4 = var5.getServerAssignment;
                    var3 = arg1;
                    var2 = arg2;
                    var1 = var4.bind(var5)(var3, var2, var6);
case 91:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[17] = var5;
            var5 = {};
            var7 = 'getServerAssignment';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var4 = _closure1_slot29;
                    var3 = undefined;
                    var2 = arg3;
                    var2 = var4.bind(var3)(var2);
                    var4 = _closure1_slot13;
                    var1 = arg1;
                    var4 = var4[var1];
                    var1 = arg2;
                    var1 = var4[var1];
                    var4 = null;
                    if(!(var4 == var1)) { _fun0015_ip = 92; continue _fun0015 }
case 90:
                    return var3;
case 92:
                    var1 = var1.assignments;
                    var1 = var1[var2];
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[18] = var5;
            var5 = {};
            var7 = 'getEvaluation';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure1_slot13;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = arg2;
                    var2 = var2[var1];
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0016_ip = 93; continue _fun0016 }
case 94:
                    var1 = var2.evaluationId;
case 93:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[19] = var5;
            var5 = {};
            var7 = 'getEvaluationAndAssignmentInner';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var6 = arg3;
                    var2 = this;
                    var1 = var2.getOverride;
                    var2 = var1.bind(var2)(var6);
                    var1 = null;
                    if(!(var1 == var2)) { _fun0017_ip = 95; continue _fun0017 }
case 4:
                    var5 = _closure1_slot13;
                    var4 = arg1;
                    var5 = var5[var4];
                    var4 = arg2;
                    var4 = var5[var4];
                    if(!(var1 != var4)) { _fun0017_ip = 96; continue _fun0017 }
case 57:
                    var5 = var4.evaluationId;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var4 = var4.assignments;
                    var5 = _closure1_slot29;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var6);
                    var3 = var4[var3];
                    var1[1] = var3;
                    _fun0017_ip = 97; continue _fun0017;
case 96:
                    var3 = new Array(2);
                    var4 = undefined;
                    var3[0] = var4;
                    var3[1] = var4;
                    var1 = var3;
case 97:
                    return var1;
case 95:
                    var1 = new Array(2);
                    var3 = undefined;
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[20] = var5;
            var5 = {};
            var7 = 'getEvaluationAndAssignment';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var8 = arg1;
                    var13 = arg3;
                    var12 = arg4;
                    var11 = this;
                    var2 = var11.getEvaluationAndAssignmentInner;
                    var1 = arg2;
                    var3 = var2.bind(var11)(var8, var1, var13);
                    var2 = _closure1_slot4;
                    var5 = undefined;
                    var9 = 2;
                    var2 = var2.bind(var5)(var3, var9);
                    var6 = 0;
                    var3 = var2[var6];
                    var4 = 1;
                    var2 = var2[var4];
                    var7 = 'guild';
                    if(!(var7 === var8)) { _fun0018_ip = 98; continue _fun0018 }
case 42:
                    var7 = null;
                    if(!(var7 == var12)) { _fun0018_ip = 99; continue _fun0018 }
case 100:
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 10;
                    var8 = var14[var8];
                    var8 = var10.bind(var5)(var8);
                    var12 = var8.LOGGED_OUT_USER_ID_SENTINEL;
case 99:
                    var10 = var11.getEvaluationAndAssignmentInner;
                    var8 = 'user';
                    var8 = var10.bind(var11)(var8, var12, var13);
                    var1 = _closure1_slot4;
                    var1 = var1.bind(var5)(var8, var9);
                    var6 = var1[var6];
                    var6 = var1[var4];
                    if(!(var7 != var6)) { _fun0018_ip = 101; continue _fun0018 }
case 60:
                    var1 = var6.isOverride;
                    if(var1) { _fun0018_ip = 102; continue _fun0018 }
case 61:
                    var1 = var6.useAsEligibility;
                    if(var1) { _fun0018_ip = 103; continue _fun0018 }
case 104:
                    var1 = new Array(2);
                    var1[0] = var5;
                    var1[1] = var5;
                    _fun0018_ip = 70; continue _fun0018;
case 103:
                    if(!(var7 != var2)) { _fun0018_ip = 87; continue _fun0018 }
case 105:
                    var4 = var2.variantId;
                    if(!(var7 == var4)) { _fun0018_ip = 106; continue _fun0018 }
case 27:
                    var4 = new Array(2);
                    var4[0] = var5;
                    var4[1] = var5;
                    _fun0018_ip = 107; continue _fun0018;
case 106:
                    var7 = new Array(2);
                    var7[0] = var3;
                    var7[1] = var2;
                    var4 = var7;
case 107:
                    _fun0018_ip = 108; continue _fun0018;
case 87:
                    var7 = new Array(2);
                    var7[0] = var5;
                    var7[1] = var5;
                    var4 = var7;
case 108:
                    var1 = var4;
case 70:
                    _fun0018_ip = 109; continue _fun0018;
case 102:
                    var4 = new Array(2);
                    var4[0] = var3;
                    var4[1] = var6;
                    var1 = var4;
case 109:
                    _fun0018_ip = 20; continue _fun0018;
case 101:
                    var4 = new Array(2);
                    var4[0] = var5;
                    var4[1] = var5;
                    var1 = var4;
case 20:
                    return var1;
case 98:
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[21] = var5;
            var5 = {};
            var7 = 'trackExperimentExposure';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var13 = arg2;
                    var12 = arg3;
                    var6 = arg4;
                    var11 = arg5;
                    var10 = arg6;
                    var9 = arg7;
                    var5 = this;
                    var _closure3_slot0 = var5;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var _closure3_slot2 = var13;
                    var _closure3_slot3 = var12;
                    var _closure3_slot4 = var6;
                    var _closure3_slot5 = var11;
                    var _closure3_slot6 = var10;
                    var _closure3_slot7 = var9;
                    var4 = _closure1_slot29;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var24 = '';
                    var3 = '|';
                    var14 = '|1';
                    var23 = var13;
                    var22 = var3;
                    var21 = var11;
                    var20 = var3;
                    var19 = var10;
                    var18 = var3;
                    var17 = var12;
                    var16 = var3;
                    var15 = var9;
                    var3 = var24[var8](var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = 'user';
                    if(!(var3 !== var6)) { _fun0019_ip = 110; continue _fun0019 }
case 111:
                    var3 = 'installation';
                    if(!(var3 !== var6)) { _fun0019_ip = 103; continue _fun0019 }
case 112:
                    var3 = 'guild';
                    if(!(var3 === var6)) { _fun0019_ip = 113; continue _fun0019 }
case 114:
                    var6 = var5.withExposureTracking;
                    var3 = function() {
                        var5 = _closure3_slot0;
                        var4 = var5.track;
                        var2 = _closure1_slot10;
                        var3 = var2.EXPERIMENT_GUILD_EVALUATION_EXPOSED;
                        var2 = {};
                        var6 = _closure3_slot1;
                        var2['evaluation_id'] = var6;
                        var6 = _closure3_slot7;
                        var2['guild_id'] = var6;
                        var6 = _closure3_slot2;
                        var2['experiment'] = var6;
                        var6 = _closure3_slot3;
                        var2['exposure_location'] = var6;
                        var6 = _closure3_slot4;
                        var2['unit_type'] = var6;
                        var6 = _closure3_slot6;
                        var2['tracked_variation_id'] = var6;
                        var1 = _closure3_slot5;
                        var2['revision'] = var1;
                        var1 = {};
                        var6 = true;
                        var1['flush'] = var6;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var3 = var6.bind(var5)(var4, var3);
                    _fun0019_ip = 113; continue _fun0019;
case 103:
                    var6 = var5.withExposureTracking;
                    var3 = function() {
                        var5 = _closure3_slot0;
                        var4 = var5.track;
                        var2 = _closure1_slot10;
                        var3 = var2.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED;
                        var2 = {};
                        var6 = _closure3_slot1;
                        var2['evaluation_id'] = var6;
                        var6 = _closure3_slot7;
                        var2['installation_id'] = var6;
                        var6 = _closure3_slot2;
                        var2['experiment'] = var6;
                        var6 = _closure3_slot3;
                        var2['exposure_location'] = var6;
                        var6 = _closure3_slot4;
                        var2['unit_type'] = var6;
                        var1 = _closure3_slot6;
                        var2['tracked_variation_id'] = var1;
                        var1 = {};
                        var6 = true;
                        var1['flush'] = var6;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var3 = var6.bind(var5)(var4, var3);
                    _fun0019_ip = 113; continue _fun0019;
case 110:
                    var3 = var5.withExposureTracking;
                    var2 = function() {
                        var5 = _closure3_slot0;
                        var4 = var5.track;
                        var2 = _closure1_slot10;
                        var3 = var2.EXPERIMENT_USER_EVALUATION_EXPOSED;
                        var2 = {};
                        var6 = _closure3_slot1;
                        var2['evaluation_id'] = var6;
                        var6 = _closure3_slot2;
                        var2['experiment'] = var6;
                        var6 = _closure3_slot3;
                        var2['exposure_location'] = var6;
                        var6 = _closure3_slot4;
                        var2['unit_type'] = var6;
                        var1 = _closure3_slot6;
                        var2['tracked_variation_id'] = var1;
                        var1 = {};
                        var6 = true;
                        var1['flush'] = var6;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var2 = var3.bind(var5)(var4, var2);
case 113:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[22] = var5;
            var5 = {};
            var7 = 'trackCommonTriggerPointExposures';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var6 = this;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var6;
                    var8 = function _loop(arg1) {
                        var8 = arg1;
                        var _closure4_slot0 = var8;
                        var5 = _closure1_slot29;
                        var7 = _closure3_slot0;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var6 = var1.concat;
                        var4 = '';
                        var1 = '|';
                        var4 = var6.bind(var4)(var8, var1, var7);
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = _closure3_slot1;
                        var3 = var4.withExposureTracking;
                        var2 = function() {
                            var5 = _closure3_slot1;
                            var4 = var5.track;
                            var2 = _closure1_slot10;
                            var3 = var2.EXPERIMENT_USER_EVALUATION_EXPOSED;
                            var2 = {};
                            var6 = _closure4_slot0;
                            var2['evaluation_id'] = var6;
                            var1 = _closure3_slot0;
                            var2['exposure_location'] = var1;
                            var1 = 'user';
                            var2['unit_type'] = var1;
                            var1 = {};
                            var6 = true;
                            var1['flush'] = var6;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var5, var2);
                        return var1;
                    };
                    var5 = _closure1_slot26;
                    var4 = var6.evaluationsWithUnitIds;
                    var1 = 'user';
                    var4 = var4.bind(var6)(var1);
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var5 = var7.bind(var1)();
                    var4 = var5.done;
                    if(var4) { _fun0020_ip = 115; continue _fun0020 }
case 116:
                    var4 = var5.value;
                    var4 = var4.evaluationId;
                    var4 = var8.bind(var1)(var4);
                    var9 = var7.bind(var1)();
                    var4 = var9.done;
                    var5 = var9;
                    if(!var4) { _fun0020_ip = 116; continue _fun0020 }
case 115:
                    var5 = function _loop2(arg1, arg2) {
                        var8 = arg1;
                        var _closure4_slot0 = var8;
                        var1 = arg2;
                        var _closure4_slot1 = var1;
                        var5 = _closure1_slot29;
                        var7 = _closure3_slot0;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var6 = var1.concat;
                        var4 = '';
                        var1 = '|';
                        var4 = var6.bind(var4)(var8, var1, var7);
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = _closure3_slot1;
                        var3 = var4.withExposureTracking;
                        var2 = function() {
                            var5 = _closure3_slot1;
                            var4 = var5.track;
                            var1 = _closure1_slot10;
                            var3 = var1.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED;
                            var2 = {};
                            var7 = _closure4_slot0;
                            var2['evaluation_id'] = var7;
                            var6 = _closure3_slot0;
                            var2['exposure_location'] = var6;
                            var6 = 'installation';
                            var2['unit_type'] = var6;
                            var1 = _closure4_slot1;
                            var2['installation_id'] = var1;
                            var1 = {};
                            var6 = true;
                            var1['flush'] = var6;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var5, var2);
                        return var1;
                    };
                    var3 = _closure1_slot26;
                    var4 = var6.evaluationsWithUnitIds;
                    var2 = 'installation';
                    var2 = var4.bind(var6)(var2);
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.bind(var1)();
                    var2 = var3.done;
                    if(var2) { _fun0020_ip = 117; continue _fun0020 }
case 118:
                    var2 = var3.value;
                    var6 = var2.evaluationId;
                    var2 = var2.unitId;
                    var2 = var5.bind(var1)(var6, var2);
                    var6 = var4.bind(var1)();
                    var2 = var6.done;
                    var3 = var6;
                    if(!var2) { _fun0020_ip = 118; continue _fun0020 }
case 117:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[23] = var5;
            var5 = {};
            var7 = 'withExposureTracking';
            var5['key'] = var7;
            var7 = function withExposureTracking(arg1, arg2) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var5 = arg1;
                    var3 = this;
                    var1 = var3.shouldTrackExposure;
                    var1 = var1.bind(var3)(var5);
                    if(!var1) { _fun0021_ip = 44; continue _fun0021 }
case 63:
                    var2 = arg2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var4 = _closure1_slot23;
                    var2 = global;
                    var6 = var2.Date;
                    var2 = var6.now;
                    var2 = var2.bind(var6)();
                    var4[var5] = var2;
                    var2 = var3.saveTrackedExposures;
                    var1 = _closure1_slot23;
                    var1 = var2.bind(var3)(var1);
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[24] = var5;
            var5 = {};
            var7 = 'trackExposureSuppression';
            var5['key'] = var7;
            var7 = function trackExposureSuppression(arg1, arg2) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var7 = arg1;
                    var1 = arg2;
                    var5 = this;
                    var3 = _closure1_slot14;
                    var6 = var3[var7];
                    var4 = null;
                    if(!(var4 != var6)) { _fun0022_ip = 71; continue _fun0022 }
case 119:
                    var8 = var6.kind;
                    var3 = 'user';
                    if(!(var3 !== var8)) { _fun0022_ip = 120; continue _fun0022 }
case 121:
                    var8 = var6.kind;
                    var3 = 'installation';
                    if(!(var3 !== var8)) { _fun0022_ip = 122; continue _fun0022 }
case 123:
                    var8 = var6.kind;
                    var3 = 'guild';
                    if(!(var3 === var8)) { _fun0022_ip = 71; continue _fun0022 }
case 44:
                    var3 = global;
                    var9 = var3.Object;
                    var8 = var9.keys;
                    var3 = _closure1_slot13;
                    var3 = var3.guild;
                    var8 = var8.bind(var9)(var3);
                    var3 = 0;
                    var3 = var8[var3];
                    if(!(var4 != var3)) { _fun0022_ip = 71; continue _fun0022 }
case 124:
                    var10 = var5.track;
                    var8 = _closure1_slot10;
                    var9 = var8.EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED;
                    var8 = {};
                    var8['experiment'] = var7;
                    var11 = var6.kind;
                    var8['unit_type'] = var11;
                    var8['suppression_source'] = var1;
                    var8['guild_id'] = var3;
                    var3 = {};
                    var11 = true;
                    var3['flush'] = var11;
                    var3 = var10.bind(var5)(var9, var8, var3);
                    _fun0022_ip = 71; continue _fun0022;
case 122:
                    var3 = global;
                    var9 = var3.Object;
                    var8 = var9.keys;
                    var3 = _closure1_slot13;
                    var3 = var3.installation;
                    var8 = var8.bind(var9)(var3);
                    var3 = 0;
                    var3 = var8[var3];
                    if(!(var4 != var3)) { _fun0022_ip = 71; continue _fun0022 }
case 125:
                    var9 = var5.track;
                    var4 = _closure1_slot10;
                    var8 = var4.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED;
                    var4 = {};
                    var4['experiment'] = var7;
                    var10 = var6.kind;
                    var4['unit_type'] = var10;
                    var4['suppression_source'] = var1;
                    var4['installation_id'] = var3;
                    var3 = {};
                    var10 = true;
                    var3['flush'] = var10;
                    var3 = var9.bind(var5)(var8, var4, var3);
                    _fun0022_ip = 71; continue _fun0022;
case 120:
                    var4 = var5.track;
                    var2 = _closure1_slot10;
                    var3 = var2.EXPERIMENT_USER_EXPOSURE_SUPPRESSED;
                    var2 = {};
                    var2['experiment'] = var7;
                    var6 = var6.kind;
                    var2['unit_type'] = var6;
                    var2['suppression_source'] = var1;
                    var1 = {};
                    var6 = true;
                    var1['flush'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[25] = var5;
            var5 = {};
            var7 = 'evaluationIds';
            var5['key'] = var7;
            var7 = function evaluationIds(arg1) {
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
            var1[26] = var5;
            var5 = {};
            var7 = 'evaluationsWithUnitIds';
            var5['key'] = var7;
            var7 = function evaluationsWithUnitIds(arg1) {
                var2 = global;
                var4 = var2.Object;
                var3 = var4.entries;
                var5 = _closure1_slot13;
                var2 = arg1;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var1 = var4().value;
                        var1 = var2;
                        var6 = undefined;
                        var3 = var1 === var6;
                        var1 = undefined;
                        if(var3) { _fun0023_ip = 13; continue _fun0023 }
case 126:
                        var5 = var4().value;
                        var4 = var2;
                        var4 = var4 === var6;
                        var1 = undefined;
                        var3 = var4;
                        if(var4) { _fun0023_ip = 13; continue _fun0023 }
case 92:
                        var1 = var5;
                        var3 = var4;
case 13:
                        if(var3) { _fun0023_ip = 12; continue _fun0023 }
case 127:
                        var2.return();
case 12:
                        var2 = var1.evaluationId;
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var5 = arg1;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var3 = var5().value;
                        var2 = var1;
                        var7 = undefined;
                        var4 = var2 === var7;
                        var2 = undefined;
                        if(var4) { _fun0024_ip = 128; continue _fun0024 }
case 126:
                        var2 = var3;
case 128:
                        var3 = undefined;
                        if(var4) { _fun0024_ip = 129; continue _fun0024 }
case 94:
                        var6 = var5().value;
                        var5 = var1;
                        var5 = var5 === var7;
                        var3 = undefined;
                        var4 = var5;
                        if(var5) { _fun0024_ip = 129; continue _fun0024 }
case 59:
                        var3 = var6;
                        var4 = var5;
case 129:
                        if(var4) { _fun0024_ip = 130; continue _fun0024 }
case 5:
                        var1.return();
case 130:
                        var1 = {};
                        var3 = var3.evaluationId;
                        var1['evaluationId'] = var3;
                        var1['unitId'] = var2;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[27] = var5;
            var5 = {};
            var7 = 'shouldTrackExposure';
            var5['key'] = var7;
            var7 = function shouldTrackExposure(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = _closure1_slot23;
                    var1 = arg1;
                    var4 = var3[var1];
                    var1 = null;
                    var1 = var1 == var4;
                    if(var1) { _fun0025_ip = 127; continue _fun0025 }
case 4:
                    var3 = global;
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var3 = var3 - var4;
                    var2 = _closure1_slot22;
                    var1 = var3 > var2;
case 127:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[28] = var5;
            var5 = {};
            var7 = 'loadTrackedExposures';
            var5['key'] = var7;
            var7 = function loadTrackedExposures() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
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
                    var1 = _closure1_slot21;
                    var1 = var2.bind(var4)(var1);
                    var2 = null;
                    if(!(var2 != var1)) { _fun0026_ip = 131; continue _fun0026 }
case 132:
                    var4 = var1.version;
                    var2 = 2;
                    if(!(var2 === var4)) { _fun0026_ip = 131; continue _fun0026 }
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
case 133:
                    {
                        var2 = var4;
case 134:
                        var13 = var6;
                        var14 = var1[var13];
                        var15 = var11 - var14;
                        var14 = _closure1_slot22;
                        if(!(var15 > var14)) { _fun0026_ip = 133; continue _fun0026 }
case 8:
                        var13 = delete var1[var13];
                        var4 = true;
                        _fun0026_ip = 133; continue _fun0026;
                    }
case 135:
                    if(!var2) { _fun0026_ip = 23; continue _fun0026 }
case 136:
                    var2 = var3.saveTrackedExposures;
                    var2 = var2.bind(var3)(var1);
case 23:
                    return var1;
case 131:
                    var1 = {};
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[29] = var5;
            var5 = {};
            var7 = 'saveTrackedExposures';
            var5['key'] = var7;
            var7 = function saveTrackedExposures(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var5 = this;
                    var6 = arg1;
case 137: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.Storage;
                    var3 = var4.set;
                    var2 = _closure1_slot21;
                    var1 = {};
                    var7 = 2;
                    var1['version'] = var7;
                    var1['exposures'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
case 38: // try_end0
                    _fun0027_ip = 138; continue _fun0027;
case 139: // catch_target0
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
case 138:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[30] = var5;
            var5 = {};
            var7 = 'clearForTests';
            var5['key'] = var7;
            var7 = function clearForTests() {
                var2 = this;
                var1 = var2.clearAllServerAssignments;
                var1 = var1.bind(var2)();
                var1 = var2.clearAllOverrides;
                var1 = var1.bind(var2)();
                var1 = var2.clearAllTrackedExposures;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot19;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                var2 = _closure1_slot20;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[31] = var5;
            var5 = {};
            var7 = 'clearAllServerAssignments';
            var5['key'] = var7;
            var7 = function clearAllServerAssignments() {
                var2 = {};
                var1 = {};
                var2['user'] = var1;
                var1 = {};
                var2['guild'] = var1;
                var1 = {};
                var2['installation'] = var1;
                _closure1_slot13 = var2;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[32] = var5;
            var5 = {};
            var7 = 'clearUserServerAssignments';
            var5['key'] = var7;
            var7 = function clearUserServerAssignments() {
                var2 = {};
                var1 = {};
                var2['user'] = var1;
                var1 = {};
                var2['guild'] = var1;
                var3 = _closure1_slot13;
                var3 = var3.installation;
                var2['installation'] = var3;
                _closure1_slot13 = var2;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[33] = var5;
            var5 = {};
            var7 = 'clearAllOverrides';
            var5['key'] = var7;
            var7 = function clearAllOverrides() {
                var1 = {};
                _closure1_slot15 = var1;
                var1 = {};
                _closure1_slot16 = var1;
                var1 = {};
                _closure1_slot17 = var1;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[34] = var5;
            var5 = {};
            var7 = 'clearSessionOverrides';
            var5['key'] = var7;
            var7 = function clearSessionOverrides() {
                var1 = {};
                _closure1_slot16 = var1;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[35] = var5;
            var5 = {};
            var7 = 'clearAllTrackedExposures';
            var5['key'] = var7;
            var7 = function clearAllTrackedExposures() {
                var1 = {};
                _closure1_slot23 = var1;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[36] = var5;
            var5 = {};
            var7 = 'getHash';
            var5['key'] = var7;
            var7 = function getHash(arg1) {
                var3 = _closure1_slot29;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[37] = var5;
            var5 = {};
            var7 = 'handleFetchStart';
            var5['key'] = var7;
            var7 = function handleFetchStart(arg1) {
                var3 = _closure1_slot19;
                var2 = var3.add;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[38] = var5;
            var5 = {};
            var7 = 'handleFetchSuccess';
            var5['key'] = var7;
            var7 = function handleFetchSuccess(arg1, arg2) {
                var4 = arg1;
                var3 = this;
                var5 = _closure1_slot19;
                var2 = var5.delete;
                var2 = var2.bind(var5)(var4);
                var2 = _closure1_slot20;
                var1 = var2.add;
                var1 = var1.bind(var2)(var4);
                var2 = var3.setExperimentAssignments;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[39] = var5;
            var5 = {};
            var7 = 'handleFetchFailure';
            var5['key'] = var7;
            var7 = function handleFetchFailure(arg1) {
                var3 = arg1;
                var4 = _closure1_slot19;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
                var2 = _closure1_slot20;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var7;
            var1[40] = var5;
            var5 = {};
            var7 = 'isFetching';
            var5['key'] = var7;
            var7 = function isFetching(arg1) {
                var3 = _closure1_slot19;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[41] = var5;
            var5 = {};
            var7 = 'hasLoaded';
            var5['key'] = var7;
            var7 = function hasLoaded(arg1) {
                var3 = _closure1_slot20;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[42] = var5;
            var5 = {};
            var7 = 'getOverride';
            var5['key'] = var7;
            var6 = function getOverride(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure1_slot16;
                    var1 = var1[var3];
                    var4 = null;
                    if(!(var4 == var1)) { _fun0028_ip = 41; continue _fun0028 }
case 37:
                    var5 = _closure1_slot15;
                    var1 = var5[var3];
case 41:
                    if(!(var4 == var1)) { _fun0028_ip = 140; continue _fun0028 }
case 94:
                    var2 = _closure1_slot17;
                    var1 = var2[var3];
case 140:
                    return var1;
                }
            };
            var5['value'] = var6;
            var1[43] = var5;
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