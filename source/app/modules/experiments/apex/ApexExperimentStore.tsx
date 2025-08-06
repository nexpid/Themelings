// app/modules/experiments/apex/ApexExperimentStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _toPropertyKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var4 = 'object';
            var1 = typeof var7;
            var2 = var7;
            if(!(var4 === var1)) { _fun0001_ip = 119; continue _fun0001 }
 17:
            var2 = var7;
            if(!var2) { _fun0001_ip = 119; continue _fun0001 }
 23:
            var1 = global;
            var3 = var1.Symbol;
            var3 = var3.toPrimitive;
            var6 = var7[var3];
            var5 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 60; continue _fun0001 }
 47:
            var3 = var1.String;
            var2 = var3.bind(var5)(var7);
            _fun0001_ip = 119; continue _fun0001;
 60:
            var5 = var6.call;
            var3 = 'string';
            var5 = var5.bind(var6)(var7, var3);
            var3 = typeof var5;
            var2 = var5;
            if(!(var4 === var3)) { _fun0001_ip = 119; continue _fun0001 }
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
            if(!(var4 !== var3)) { _fun0001_ip = 136; continue _fun0001 }
 133:
            var1 = '' + var2;
 136:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
            var9 = _closure1_slot24;
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
            var7 = _closure1_slot24;
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
    var _closure1_slot23 = var1;
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
    var _closure1_slot24 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
            _fun0005_ip = 74; continue _fun0005;
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot21;
            var1 = var1[var4];
            var2 = null;
            if(!(var2 == var1)) { _fun0006_ip = 64; continue _fun0006 }
 20:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 12;
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
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
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
    var9 = 7;
    var4 = var6[var9];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var7 = var8.bind(var1)(var4);
    var4 = var7.prototype;
    var10 = Object.create(var4, {constructor: {value: var7}});
    var4 = 'ApexExperimentStore';
    var14 = var10;
    var13 = var4;
    var7 = new var14[var7](var13, var12);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.UnitType;
    var10 = var7.User;
    var7 = new Array(1);
    var7[0] = var10;
    var _closure1_slot13 = var7;
    var7 = {};
    var10 = {};
    var7['user'] = var10;
    var10 = {};
    var7['guild'] = var10;
    var _closure1_slot14 = var7;
    var7 = {};
    var _closure1_slot15 = var7;
    var7 = {};
    var _closure1_slot16 = var7;
    var7 = {};
    var _closure1_slot17 = var7;
    var7 = {};
    var _closure1_slot18 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.Millis;
    var7 = var7.DAY;
    var7 = var9 * var7;
    var _closure1_slot19 = var7;
    var7 = {};
    var _closure1_slot20 = var7;
    var7 = {};
    var _closure1_slot21 = var7;
    var7 = 17;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.PersistedStore;
    var2 = function(arg1) {
        var4 = function ApexExperimentStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = this;
                var1 = _closure1_slot5;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 13;
                var7 = var8[var1];
                var7 = var9.bind(var4)(var7);
                var10 = new Array(3);
                var10[0] = var7;
                var7 = {};
                var9 = function CONNECTION_OPEN(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.processExperimentsMessage;
                    var1 = arg1;
                    var1 = var1.apexExperiments;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['CONNECTION_OPEN'] = var9;
                var9 = function CONNECTION_OPEN_STATE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.processExperimentsMessage;
                    var1 = arg1;
                    var1 = var1.apexExperiments;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['CONNECTION_OPEN_STATE_UPDATE'] = var9;
                var9 = function APEX_EXPERIMENT_OVERRIDE_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleApexExperimentOverrideCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['APEX_EXPERIMENT_OVERRIDE_CREATE'] = var9;
                var9 = function APEX_EXPERIMENT_OVERRIDE_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleApexExperimentOverrideDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['APEX_EXPERIMENT_OVERRIDE_DELETE'] = var9;
                var9 = function APEX_EXPERIMENT_OVERRIDE_CLEAR() {
                    var2 = _closure3_slot0;
                    var1 = var2.clearAllOverrides;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7['APEX_EXPERIMENT_OVERRIDE_CLEAR'] = var9;
                var9 = function APEX_EXPERIMENT_CLEAR_SERVER_ASSIGNMENTS() {
                    var2 = _closure3_slot0;
                    var1 = var2.clearAllServerAssignments;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7['APEX_EXPERIMENT_CLEAR_SERVER_ASSIGNMENTS'] = var9;
                var9 = function APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleApexExperimentsMetadataFetchSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS'] = var9;
                var9 = function LOGOUT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleLogout;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['LOGOUT'] = var9;
                var10[1] = var7;
                var7 = _closure1_slot0;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var1 = var1.DispatchBand;
                var1 = var1.Early;
                var10[2] = var1;
                var1 = _closure1_slot8;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot7;
                var1 = _closure1_slot25;
                var1 = var1.bind(var4)();
                if(var1) { _fun0007_ip = 217; continue _fun0007 }
 204:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0007_ip = 251; continue _fun0007;
 217:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 251:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var5 = var4.waitFor;
                var2 = _closure1_slot10;
                var2 = var5.bind(var4)(var2);
                var2 = null;
                var2 = var2 != var1;
                if(!var2) { _fun0008_ip = 46; continue _fun0008 }
 33:
                var6 = var1.version;
                var5 = 1;
                var2 = var5 === var6;
 46:
                if(!var2) { _fun0008_ip = 69; continue _fun0008 }
 49:
                var2 = var1.clientOverrides;
                _closure1_slot16 = var2;
                var1 = var1.evaluatedExperiments;
                _closure1_slot14 = var1;
 69:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var2);
                var2 = var5.getBuildOverrideExperiments;
                var10 = var2.bind(var5)();
                var2 = {};
                _closure1_slot17 = var2;
                var8 = var10;
                var2 = true;
                for(var5 in var8)
 120:
                {
 129:
                    var13 = var5;
                    var11 = _closure1_slot26;
                    var14 = var11.bind(var1)(var13);
                    var12 = _closure1_slot17;
                    var11 = {};
                    var11['hashedName'] = var14;
                    var14 = var10[var13];
                    var11['variantId'] = var14;
                    var11['isOverride'] = var2;
                    var12[var13] = var11;
                    _fun0008_ip = 120; continue _fun0008;
                }
 172:
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
            var3 = _closure1_slot14;
            var1['evaluatedExperiments'] = var3;
            var2 = _closure1_slot16;
            var1['clientOverrides'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'processExperimentsMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var24 = arg1;
                var23 = null;
                if(!(var23 != var24)) { _fun0009_ip = 621; continue _fun0009 }
 12:
                var21 = _closure1_slot13;
                var1 = var21.length;
                var20 = 0;
                var2 = var20 < var1;
                var1 = undefined;
                var19 = 10;
                var18 = 4;
                var17 = 1;
                var16 = 2;
                var15 = 3;
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
                if(!var2) { _fun0009_ip = 619; continue _fun0009 }
 77:
                var25 = var21[var14];
                var26 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var19];
                var2 = var26.bind(var1)(var2);
                var2 = var2.UnitTypeToKind;
                var36 = var2[var25];
                var2 = var24.assignments;
                var58 = var2[var25];
                var35 = var13;
                var34 = var12;
                var33 = var11;
                var32 = var10;
                var31 = var9;
                var30 = var8;
                var29 = var7;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                var25 = var3;
                if(!(var23 != var58)) { _fun0009_ip = 571; continue _fun0009 }
 158:
                var35 = var13;
                var34 = var12;
                var33 = var11;
                var32 = var10;
                var31 = var9;
                var30 = var8;
                var29 = var7;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                var25 = var3;
                if(!(var23 != var36)) { _fun0009_ip = 571; continue _fun0009 }
 198:
                var2 = _closure1_slot14;
                var57 = var2[var36];
                var55 = var58;
                var51 = var12;
                var50 = var11;
                var49 = var10;
                var48 = var9;
                var47 = var8;
                var46 = var7;
                var45 = var6;
                var44 = var5;
                var43 = var4;
                var42 = var3;
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
                    var2 = var58[var41];
                    var40 = var2.evaluation_id;
                    var39 = var2.assignments;
                    var38 = {};
                    var36 = var23 != var40;
                    var2 = undefined;
                    if(!var36) { _fun0009_ip = 361; continue _fun0009 }
 358:
                    var2 = var40;
 361:
                    var38['evaluationId'] = var2;
                    var2 = {};
                    var38['assignments'] = var2;
                    var57[var41] = var38;
                    var2 = _closure1_slot23;
                    var37 = var2.bind(var1)(var39);
                    var36 = var37.bind(var1)();
                    var2 = var36.done;
                    var51 = var41;
                    var50 = var40;
                    var49 = var39;
                    var48 = var38;
                    var47 = var36;
                    var46 = var37;
                    var36 = var47;
                    if(var2) { _fun0009_ip = 283; continue _fun0009 }
 422:
                    var59 = var36.value;
                    var2 = _closure1_slot4;
                    var2 = var2.bind(var1)(var59, var18);
                    var45 = var2[var20];
                    var44 = var2[var17];
                    var43 = var2[var16];
                    var42 = var2[var15];
                    if(!(var43 == var23)) { _fun0009_ip = 459; continue _fun0009 }
 457:
                    var43 = 0;
 459:
                    var59 = var38.assignments;
                    var2 = {};
                    var2['hashedName'] = var45;
                    var2['variantId'] = var44;
                    var61 = _closure1_slot0;
                    var60 = _closure1_slot2;
                    var60 = var60[var19];
                    var60 = var61.bind(var1)(var60);
                    var60 = var60.ExperimentFlags;
                    var60 = var60.IsOverride;
                    var60 = var43 & var60;
                    var60 = !var60;
                    var60 = !var60;
                    var2['isOverride'] = var60;
                    var2['revision'] = var42;
                    var59[var45] = var2;
                    var59 = var37.bind(var1)();
                    var2 = var59.done;
                    var51 = var41;
                    var50 = var40;
                    var49 = var39;
                    var48 = var38;
                    var47 = var59;
                    var46 = var37;
                    var36 = var47;
                    if(var2) { _fun0009_ip = 283; continue _fun0009 }
 566:
                    _fun0009_ip = 422; continue _fun0009;
                }
 571:
                var14 = var14 + 1;
                var2 = var21.length;
                var13 = var35;
                var12 = var34;
                var11 = var33;
                var10 = var32;
                var9 = var31;
                var8 = var30;
                var7 = var29;
                var6 = var28;
                var5 = var27;
                var4 = var26;
                var3 = var25;
                if(var14 < var2) { _fun0009_ip = 77; continue _fun0009 }
 619:
                return var1;
 621:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleApexExperimentOverrideCreate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var5 = this;
            var4 = {};
            var10 = _closure1_slot16;
            var11 = var4;
            var1 = copyDataProperties(var11, var10);
            var7 = var2.experimentName;
            var6 = {};
            var9 = _closure1_slot26;
            var8 = var2.experimentName;
            var1 = undefined;
            var8 = var9.bind(var1)(var8);
            var6['hashedName'] = var8;
            var8 = var2.variantId;
            var6['variantId'] = var8;
            var8 = true;
            var6['isOverride'] = var8;
            var4[var7] = var6;
            _closure1_slot16 = var4;
            var4 = var5.trackExposureSuppression;
            var3 = var2.experimentName;
            var2 = 'client_override';
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleApexExperimentOverrideDelete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = _closure1_slot16;
            var1 = arg1;
            var1 = var1.experimentName;
            var2 = var5[var1];
            var4 = _closure1_slot3;
            var6 = new Array(1);
            var6[0] = var1;
            var2 = var6.map;
            var1 = _closure1_slot22;
            var2 = var2.bind(var6)(var1);
            var1 = undefined;
            var2 = var4.bind(var1)(var5, var2);
            _closure1_slot16 = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleApexExperimentsMetadataFetchSuccess';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = {};
            var8 = _closure1_slot18;
            var9 = var2;
            var3 = copyDataProperties(var9, var8);
            var3 = global;
            var5 = var3.Object;
            var4 = var5.fromEntries;
            var3 = arg1;
            var7 = var3.experiments;
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
        var1[5] = var5;
        var5 = {};
        var7 = 'getExperimentsMetadata';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getClientOverrides';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getExperimentClientOverride';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot16;
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = this;
                var1 = arg1;
                var1 = var1.isSwitchingAccount;
                if(var1) { _fun0010_ip = 25; continue _fun0010 }
 15:
                var1 = var3.clearAllServerAssignments;
                var1 = var1.bind(var3)();
 25:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var5 = var2.Storage;
                var4 = var5.remove;
                var2 = 'apexTrackedExposures';
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var5 = _closure1_slot15;
                var3 = var1.name;
                var5[var3] = var1;
                var3 = _closure1_slot17;
                var2 = var1.name;
                var3 = var3[var2];
                var2 = null;
                if(!(var2 != var3)) { _fun0011_ip = 64; continue _fun0011 }
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
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getAssignment';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var6 = arg3;
                var5 = this;
                var1 = _closure1_slot16;
                var1 = var1[var6];
                var2 = null;
                if(!(var2 == var1)) { _fun0012_ip = 31; continue _fun0012 }
 23:
                var3 = _closure1_slot17;
                var1 = var3[var6];
 31:
                if(!(var2 == var1)) { _fun0012_ip = 54; continue _fun0012 }
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
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = _closure1_slot26;
                var3 = undefined;
                var2 = arg3;
                var2 = var4.bind(var3)(var2);
                var4 = _closure1_slot14;
                var1 = arg1;
                var4 = var4[var1];
                var1 = arg2;
                var1 = var4[var1];
                var4 = null;
                if(!(var4 == var1)) { _fun0013_ip = 43; continue _fun0013 }
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
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var2 = _closure1_slot14;
                var1 = arg1;
                var2 = var2[var1];
                var1 = arg2;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0014_ip = 38; continue _fun0014 }
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var6 = arg3;
                var1 = _closure1_slot16;
                var2 = var1[var6];
                var1 = null;
                if(!(var1 == var2)) { _fun0015_ip = 28; continue _fun0015 }
 20:
                var4 = _closure1_slot17;
                var2 = var4[var6];
 28:
                if(!(var1 == var2)) { _fun0015_ip = 114; continue _fun0015 }
 32:
                var5 = _closure1_slot14;
                var4 = arg1;
                var5 = var5[var4];
                var4 = arg2;
                var4 = var5[var4];
                if(!(var1 != var4)) { _fun0015_ip = 95; continue _fun0015 }
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
                _fun0015_ip = 112; continue _fun0015;
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
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var12 = arg2;
                var11 = arg3;
                var10 = arg4;
                var4 = this;
                var6 = _closure1_slot26;
                var3 = global;
                var1 = var3.HermesInternal;
                var9 = var1.concat;
                var21 = '';
                var7 = '|';
                var18 = arg5;
                var16 = arg6;
                var20 = var12;
                var19 = var7;
                var17 = var7;
                var15 = var7;
                var14 = var11;
                var5 = var21[var9](var20, var19, var18, var17, var16, var15, var14, var13);
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var4.shouldTrackExposure;
                var5 = var5.bind(var4)(var6);
                if(!var5) { _fun0016_ip = 94; continue _fun0016 }
 86:
                var7 = 'user';
                var5 = var7 === var10;
 94:
                if(!var5) { _fun0016_ip = 201; continue _fun0016 }
 97:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 16;
                var5 = var8[var5];
                var9 = var7.bind(var1)(var5);
                var8 = var9.track;
                var5 = _closure1_slot11;
                var7 = var5.EXPERIMENT_USER_EVALUATION_EXPOSED;
                var5 = {};
                var13 = arg1;
                var5['evaluation_id'] = var13;
                var5['experiment'] = var12;
                var5['exposure_location'] = var11;
                var5['unit_type'] = var10;
                var5 = var8.bind(var9)(var7, var5);
                var5 = _closure1_slot20;
                var7 = var3.Date;
                var3 = var7.now;
                var3 = var3.bind(var7)();
                var5[var6] = var3;
                var3 = var4.saveTrackedExposures;
                var2 = _closure1_slot20;
                var2 = var3.bind(var4)(var2);
 201:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'trackCommonTriggerPointExposures';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
                var7 = 16;
                var6 = global;
                var5 = '';
                var4 = '|';
                if(var2) { _fun0017_ip = 222; continue _fun0017 }
 65:
                var17 = var3.value;
                var13 = _closure1_slot26;
                var2 = var6.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var5)(var17, var4, var12);
                var14 = var13.bind(var1)(var2);
                var2 = var11.shouldTrackExposure;
                var2 = var2.bind(var11)(var14);
                if(!var2) { _fun0017_ip = 204; continue _fun0017 }
 111:
                var13 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var16 = var13.bind(var1)(var2);
                var15 = var16.track;
                var2 = _closure1_slot11;
                var13 = var2.EXPERIMENT_USER_EVALUATION_EXPOSED;
                var2 = {};
                var2['evaluation_id'] = var17;
                var2['exposure_location'] = var12;
                var2['unit_type'] = var9;
                var2 = var15.bind(var16)(var13, var2);
                var13 = _closure1_slot20;
                var15 = var6.Date;
                var2 = var15.now;
                var2 = var2.bind(var15)();
                var13[var14] = var2;
                var13 = var11.saveTrackedExposures;
                var2 = _closure1_slot20;
                var2 = var13.bind(var11)(var2);
 204:
                var13 = var8.bind(var1)();
                var2 = var13.done;
                var3 = var13;
                if(!var2) { _fun0017_ip = 65; continue _fun0017 }
 222:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'trackExposureSuppression';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var5 = arg1;
                var2 = _closure1_slot15;
                var3 = var2[var5];
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0018_ip = 36; continue _fun0018 }
 23:
                var4 = var3.kind;
                var3 = 'user';
                var2 = var3 === var4;
 36:
                if(!var2) { _fun0018_ip = 108; continue _fun0018 }
 39:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var1 = _closure1_slot11;
                var2 = var1.EXPERIMENT_USER_EXPOSURE_SUPPRESSED;
                var1 = {};
                var1['experiment'] = var5;
                var5 = 'user';
                var1['unit_type'] = var5;
                var5 = arg2;
                var1['suppression_source'] = var5;
                var1 = var3.bind(var4)(var2, var1);
 108:
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
            var5 = _closure1_slot14;
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
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var3 = _closure1_slot20;
                var1 = arg1;
                var4 = var3[var1];
                var1 = null;
                var1 = var1 == var4;
                if(var1) { _fun0019_ip = 52; continue _fun0019 }
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
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var3 = this;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var4 = var1.Storage;
                var2 = var4.get;
                var1 = 'apexTrackedExposures';
                var1 = var2.bind(var4)(var1);
                var2 = null;
                if(!(var2 != var1)) { _fun0020_ip = 162; continue _fun0020 }
 56:
                var4 = var1.version;
                var2 = 1;
                if(!(var2 === var4)) { _fun0020_ip = 162; continue _fun0020 }
 69:
                var1 = var1.exposures;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var11 = var2.bind(var4)();
                var9 = var1;
                var4 = false;
                var2 = false;
                for(var6 in var9)
 107:
                {
                    var2 = var4;
 119:
                    var13 = var6;
                    var14 = var1[var13];
                    var15 = var11 - var14;
                    var14 = _closure1_slot19;
                    if(!(var15 > var14)) { _fun0020_ip = 107; continue _fun0020 }
 138:
                    var13 = delete var1[var13];
                    var4 = true;
                    _fun0020_ip = 107; continue _fun0020;
                }
 146:
                if(!var2) { _fun0020_ip = 160; continue _fun0020 }
 149:
                var2 = var3.saveTrackedExposures;
                var2 = var2.bind(var3)(var1);
 160:
                return var1;
 162:
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
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var1 = arg1;
 3: // try_start_0
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = {};
                var5 = 1;
                var2['version'] = var5;
                var2['exposures'] = var1;
                var1 = 'apexTrackedExposures';
                var1 = var3.bind(var4)(var1, var2);
 66: // try_end0
                _fun0021_ip = 151; continue _fun0021;
 68: // catch_target0
                CatchBlockStart(arg_register=4);
                var4 = _closure1_slot12;
                var3 = var4.error;
                var2 = 'Error saving tracked exposures';
                var2 = var3.bind(var4)(var2, var5);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var1 = _closure1_slot11;
                var2 = var1.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                var1 = {'module': 'discord_app', 'call': 'ApexExperimentStore.saveTrackedExposures'};
                var1 = var3.bind(var4)(var2, var1);
 151:
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
            _closure1_slot14 = var2;
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
            _closure1_slot16 = var1;
            var1 = {};
            _closure1_slot17 = var1;
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
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/apex/ApexExperimentStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();