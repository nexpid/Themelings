// app/modules/libdiscore/libdiscoreExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var15 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var16;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot4;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = _closure1_slot14;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot4;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
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
    var4 = global;
    var8 = var4.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var5 = var16[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var16[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var16[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var17 = 3;
    var5 = var16[var17];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var7 = 4;
    var5 = var16[var7];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var16[var5];
    var5 = var15.bind(var1)(var5);
    var5 = var5.ensureValidMode;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var16[var5];
    var8 = var6.bind(var1)(var5);
    var5 = var8.prototype;
    var6 = Object.create(var5, {constructor: {value: var8}});
    var20 = 'libdiscoreExperiments';
    var21 = var6;
    var5 = new var21[var8](var20, var19);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot9 = var5;
    var13 = new Array(0);
    var _closure1_slot10 = var13;
    var5 = var4.Symbol;
    var4 = 'unknown';
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = function() {
        var4 = _closure1_slot7;
        var3 = function LibdiscoreCachedExperiment(arg1) {
            var4 = this;
            var5 = _closure1_slot6;
            var3 = _closure2_slot0;
            var1 = undefined;
            var3 = var5.bind(var1)(var4, var3);
            var3 = arg1;
            var4['id'] = var3;
            var3 = null;
            var4['inner'] = var3;
            var3 = _closure1_slot11;
            var4['cachedConfig'] = var3;
            var3 = _closure1_slot10;
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getEnabledFeatureName';
        var1['key'] = var2;
        var2 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = this;
                var1 = var3.getCachedConfig;
                var2 = var1.bind(var3)();
                var4 = undefined;
                var1 = null;
                if(!(var4 !== var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var6 = var2.treatmentId;
                var4 = 0;
                var4 = var6 <= var4;
                var1 = null;
                if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 3:
                var6 = var3.id;
                var5 = var2.treatmentId;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = ':';
                var1 = var4.bind(var3)(var6, var2, var5);
case 11:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'getCachedConfig';
        var1['key'] = var6;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = this;
                var4 = var1.cachedConfig;
                var3 = _closure1_slot11;
                if(!(var4 === var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 7;
                var3 = var3[var5];
                var4 = undefined;
                var6 = var6.bind(var4)(var3);
                var3 = var6.isLibdiscoreInitialized;
                var3 = var3.bind(var6)();
                if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var1['cachedConfig'] = var4;
                _fun0004_ip = 13; continue _fun0004;
case 15:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getExperimentCacher;
                var4 = var2.bind(var3)();
                var3 = var4.getConfig;
                var2 = var1.id;
                var2 = var3.bind(var4)(var2);
                var1['cachedConfig'] = var2;
case 13:
                var1 = var1.cachedConfig;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'setExperiment';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['inner'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getCurrentConfig';
        var1['key'] = var6;
        var5 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var5 = undefined;
                var4 = var3.bind(var5)(var1);
                var3 = var2.inner;
                var1 = null;
                var3 = var1 != var3;
                var1 = 'experiment must be set before calling getCurrentConfig';
                var1 = var4.bind(var5)(var3, var1);
                var3 = var2.inner;
                var1 = 'getCurrentConfig';
                var1 = var1 in var3;
                var4 = var2.inner;
                if(var1) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var2 = var4.getConfig;
                var1 = {};
                var3 = 'default';
                var1['location'] = var3;
                var1 = var2.bind(var4)(var1);
                _fun0005_ip = 19; continue _fun0005;
case 17:
                var3 = var4.getCurrentConfig;
                var2 = {};
                var5 = 'default';
                var2['location'] = var5;
                var1 = var3.bind(var4)(var2);
case 19:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var12 = var4.bind(var1)();
    var4 = function(arg1) {
        var4 = function LibdiscoreWrapperSimpleExperiment(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arguments[2];
                var6 = this;
                var5 = undefined;
                if(!(var2 === var5)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                var2 = false;
case 20:
                var3 = _closure1_slot6;
                var4 = _closure2_slot0;
                var3 = var3.bind(var5)(var6, var4);
                var3 = _closure1_slot13;
                var1 = new Array(1);
                var7 = arg1;
                var1[0] = var7;
                var1 = var3.bind(var5)(var6, var4, var1);
                var3 = arg2;
                var1['label'] = var3;
                var1['defaultValue'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'getLabel';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var1 = var1.label;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getTreatments';
        var5['key'] = var7;
        var7 = function value() {
            var2 = {};
            var1 = 0;
            var2['treatmentId'] = var1;
            var1 = new Array(2);
            var1[0] = var2;
            var2 = {};
            var3 = 1;
            var2['treatmentId'] = var3;
            var1[1] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCachedEnabled';
        var5['key'] = var7;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var1 = var2.getCachedConfig;
                var1 = var1.bind(var2)();
                var3 = null;
                if(!(var3 != var1)) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                var4 = var1.treatmentId;
                var3 = -1;
                if(!(var3 !== var4)) { _fun0007_ip = 22; continue _fun0007 }
case 24:
                var3 = var1.treatmentId;
                var1 = 1;
                var1 = var1 === var3;
                _fun0007_ip = 25; continue _fun0007;
case 22:
                var1 = var2.defaultValue;
case 25:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var11 = var4.bind(var1)(var12);
    var4 = function(arg1) {
        var4 = function LibdiscoreBridgedStoreExperiment(arg1, arg2, arg3) {
            var5 = this;
            var2 = _closure1_slot6;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot13;
            var1 = new Array(2);
            var6 = arg1;
            var1[0] = var6;
            var6 = arg3;
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            var2 = arg2;
            var1['storeName'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'getCachedBridgedStoreMode';
        var5['key'] = var1;
        var1 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var1 = var2.getCachedConfig;
                var4 = var1.bind(var2)();
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                var1 = undefined;
                if(var5) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                var1 = var4.treatmentId;
case 26:
                var2 = var2 != var1;
                var4 = -1;
                if(!var2) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                var4 = var1;
case 28:
                var1 = 1;
                if(!(var1 !== var4)) { _fun0008_ip = 30; continue _fun0008 }
case 16:
                var2 = 'libdiscore';
                var1 = 2;
                if(!(var1 !== var4)) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                var2 = 'typescript';
                _fun0008_ip = 31; continue _fun0008;
case 30:
                var2 = 'typescript-libdiscore-dual-read';
case 31:
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)(var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getEnabledFeatureName';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var1 = var2.getCachedBridgedStoreMode;
                var7 = var1.bind(var2)();
                var3 = 'typescript';
                var1 = null;
                if(!(var3 !== var7)) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                var11 = var2.storeName;
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var12 = 'BridgedStore[';
                var10 = ',';
                var8 = ']';
                var9 = var7;
                var1 = var12[var5](var11, var10, var9, var8, var7);
case 33:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getLabel';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var4 = var1.storeName;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = "libdiscore '";
            var1 = "' Migration";
            var1 = var3.bind(var2)(var4, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getTreatments';
        var5['key'] = var7;
        var6 = function value() {
            var2 = {};
            var1 = 0;
            var2['treatmentId'] = var1;
            var1 = new Array(3);
            var1[0] = var2;
            var2 = {};
            var3 = 1;
            var2['treatmentId'] = var3;
            var1[1] = var2;
            var2 = {};
            var3 = 2;
            var2['treatmentId'] = var3;
            var1[2] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var12);
    var4 = function(arg1) {
        var4 = function LibdiscoreTelemetryExperiment(arg1) {
            var6 = this;
            var2 = 0;
            var10 = 0;
            var7 = copyRestArgs(var10);
            var3 = _closure1_slot6;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot13;
            var1 = new Array(0);
            var10 = var1;
            var9 = var7;
            var8 = 0;
            var7 = arraySpread(var10, var9, var8);
            var1 = var3.bind(var4)(var6, var5, var1);
            var3 = 5;
            var1['MAX_EMISSIONS_PER_APP_LAUNCH'] = var3;
            var1['emissionsCount'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'getLabel';
        var5['key'] = var1;
        var1 = function value() {
            var1 = 'libdiscore Telemetry';
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getTreatments';
        var5['key'] = var7;
        var7 = function value() {
            var2 = {};
            var1 = 0;
            var2['treatmentId'] = var1;
            var1 = new Array(4);
            var1[0] = var2;
            var2 = {};
            var3 = 1;
            var2['treatmentId'] = var3;
            var1[1] = var2;
            var2 = {};
            var3 = 2;
            var2['treatmentId'] = var3;
            var1[2] = var2;
            var2 = {};
            var3 = 3;
            var2['treatmentId'] = var3;
            var1[3] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMetricsSampleRate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = this;
                var1 = var2.getCachedConfig;
                var1 = var1.bind(var2)();
                var2 = null;
                var2 = var2 == var1;
                var3 = undefined;
                if(var2) { _fun0010_ip = 35; continue _fun0010 }
case 36:
                var3 = var1.treatmentId;
case 35:
                var1 = 1;
                if(!(var1 !== var3)) { _fun0010_ip = 37; continue _fun0010 }
case 38:
                var2 = 2;
                if(!(var2 !== var3)) { _fun0010_ip = 39; continue _fun0010 }
case 40:
                var2 = 3;
                if(!(var2 !== var3)) { _fun0010_ip = 16; continue _fun0010 }
case 2:
                var2 = 0;
                return var2;
case 16:
                return var1;
case 39:
                var1 = 0.05;
                return var1;
case 37:
                var1 = 0.01;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'didEmit';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.emissionsCount;
            var1 = var1 + 1;
            var2['emissionsCount'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'shouldCollectMetrics';
        var5['key'] = var7;
        var6 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = this;
                var1 = var3.getMetricsSampleRate;
                var5 = var1.bind(var3)();
                var1 = 0;
                var1 = var1 !== var5;
                if(!var1) { _fun0011_ip = 41; continue _fun0011 }
case 36:
                var2 = 1;
                var2 = var2 === var5;
                if(var2) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                var4 = var3.emissionsCount;
                var3 = var3.MAX_EMISSIONS_PER_APP_LAUNCH;
                var4 = var4 >= var3;
                var3 = !var4;
                if(var4) { _fun0011_ip = 44; continue _fun0011 }
case 25:
                var4 = global;
                var6 = var4.Math;
                var4 = var6.random;
                var4 = var4.bind(var6)();
                var3 = var4 < var5;
case 44:
                var2 = var3;
case 42:
                var1 = var2;
case 41:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var6 = var4.bind(var1)(var12);
    var4 = var9.prototype;
    var5 = Object.create(var4, {constructor: {value: var9}});
    var20 = '2026-01-libdiscore-batch-store-refactor';
    var19 = 'batch-store-refactor';
    var21 = var5;
    var4 = new var21[var9](var20, var19, var18);
    var10 = var4 instanceof Object ? var4 : var5;
    var4 = var6.prototype;
    var5 = Object.create(var4, {constructor: {value: var6}});
    var20 = '2025-09-libdiscore-telemetry';
    var21 = var5;
    var4 = new var21[var6](var20, var19);
    var9 = var4 instanceof Object ? var4 : var5;
    var4 = var11.prototype;
    var5 = Object.create(var4, {constructor: {value: var11}});
    var20 = '2025-11-defer-load-late-lazy-cache';
    var19 = 'Allow react to render before lazy cache is loaded';
    var21 = var5;
    var4 = new var21[var11](var20, var19, var18);
    var8 = var4 instanceof Object ? var4 : var5;
    var4 = function(arg1) {
        var4 = function LibdiscoreCustomTreatmentsExperiment(arg1, arg2, arg3) {
            var5 = this;
            var2 = _closure1_slot6;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot13;
            var1 = new Array(1);
            var6 = arg1;
            var1[0] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            var2 = arg2;
            var1['label'] = var2;
            var2 = arg3;
            var1['treatmentCount'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'getLabel';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var1 = var1.label;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getTreatments';
        var5['key'] = var7;
        var6 = function value() {
            var1 = global;
            var4 = var1.Array;
            var3 = var4.from;
            var2 = {};
            var1 = this;
            var1 = var1.treatmentCount;
            var2['length'] = var1;
            var1 = function(arg1, arg2) {
                var1 = {};
                var2 = arg2;
                var1['treatmentId'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var14 = var4.bind(var1)(var12);
    var4 = var14.prototype;
    var5 = Object.create(var4, {constructor: {value: var14}});
    var20 = '2026-01-android-rmle';
    var19 = 'Android Pull Mode Rendering';
    var21 = var5;
    var18 = var7;
    var4 = new var21[var14](var20, var19, var18, var17);
    var7 = var4 instanceof Object ? var4 : var5;
    var4 = var14.prototype;
    var5 = Object.create(var4, {constructor: {value: var14}});
    var20 = '2026-02-android-fresco-cache';
    var19 = 'Android Fresco Cache';
    var21 = var5;
    var18 = var17;
    var4 = new var21[var14](var20, var19, var18, var17);
    var6 = var4 instanceof Object ? var4 : var5;
    var4 = var11.prototype;
    var5 = Object.create(var4, {constructor: {value: var11}});
    var20 = '2026-02-android-chat-mosaic-shared-pool';
    var19 = 'Android Chat Mosaic Shared Pool';
    var21 = var5;
    var4 = new var21[var11](var20, var19, var18);
    var5 = var4 instanceof Object ? var4 : var5;
    var4 = var11.prototype;
    var14 = Object.create(var4, {constructor: {value: var11}});
    var20 = '2026-03-mobile-hermes-occupancy-target';
    var19 = 'Android Hermes Occupancy Target';
    var21 = var14;
    var4 = new var21[var11](var20, var19, var18);
    var4 = var4 instanceof Object ? var4 : var14;
    var14 = false;
    var _closure1_slot12 = var14;
    var14 = 9;
    var14 = var16[var14];
    var16 = var15.bind(var1)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = 'modules/libdiscore/libdiscoreExperiments.tsx';
    var14 = var15.bind(var16)(var14);
    var3['ALL_LIBDISCORE_EXPERIMENTS'] = var13;
    var3['LibdiscoreCachedExperiment'] = var12;
    var3['LibdiscoreWrapperSimpleExperiment'] = var11;
    var3['LibdiscoreBatchStoreRefactorExperiment'] = var10;
    var3['TelemetryExperiment'] = var9;
    var3['DelayLoadLateLazyCacheHoldoutExperiment'] = var8;
    var3['AndroidPullModeRenderingExperiment'] = var7;
    var3['AndroidFrescoCacheExperiment'] = var6;
    var3['AndroidChatMosaicSharedPoolExperiment'] = var5;
    var3['AndroidHermesOccupancyTargetExperiment'] = var4;
    var4 = function isExperimentSyncDisabled() {
        var1 = _closure1_slot12;
        return var1;
    };
    var3['isExperimentSyncDisabled'] = var4;
    var2 = function clearLibdiscoreExperimentCache() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 7;
            var3 = var1[var4];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.isLibdiscoreInitialized;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0012_ip = 45; continue _fun0012 }
case 3:
            var6 = _closure1_slot9;
            var5 = var6.info;
            var3 = 'Clearing libdiscore experiment cache and disabling sync';
            var3 = var5.bind(var6)(var3);
            var3 = true;
            _closure1_slot12 = var3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var3 = var3.bind(var1)(var2);
            var2 = var3.getExperimentCacher;
            var3 = var2.bind(var3)();
            var2 = var3.clearCache;
            var2 = var2.bind(var3)();
case 45:
            return var1;
        }
    };
    var3['clearLibdiscoreExperimentCache'] = var2;
    return var1;
})();