// app/modules/libdiscore/libdiscoreExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var10;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot4;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = _closure1_slot12;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 92; continue _fun0001;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 71; continue _fun0001 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot4;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var4 = global;
    var8 = var4.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var5 = var10[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var10[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var10[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var10[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var10[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var5 = var5.ensureValidMode;
    var _closure1_slot8 = var5;
    var7 = new Array(0);
    var _closure1_slot9 = var7;
    var5 = var4.Symbol;
    var4 = 'unknown';
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
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
            var3 = _closure1_slot10;
            var4['cachedConfig'] = var3;
            var3 = _closure1_slot9;
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
 0:
                var3 = this;
                var1 = var3.getCachedConfig;
                var2 = var1.bind(var3)();
                var4 = undefined;
                var1 = null;
                if(!(var4 !== var2)) { _fun0003_ip = 77; continue _fun0003 }
 21:
                var6 = var2.treatmentId;
                var4 = 0;
                var4 = var6 <= var4;
                var1 = null;
                if(var4) { _fun0003_ip = 77; continue _fun0003 }
 38:
                var6 = var3.id;
                var5 = var2.treatmentId;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = ':';
                var1 = var4.bind(var3)(var6, var2, var5);
 77:
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
 0:
                var1 = this;
                var4 = var1.cachedConfig;
                var3 = _closure1_slot10;
                if(!(var4 === var3)) { _fun0004_ip = 112; continue _fun0004 }
 20:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 6;
                var3 = var3[var5];
                var4 = undefined;
                var6 = var6.bind(var4)(var3);
                var3 = var6.isLibdiscoreLoaded;
                var3 = var3.bind(var6)();
                if(var3) { _fun0004_ip = 63; continue _fun0004 }
 55:
                var1['cachedConfig'] = var4;
                _fun0004_ip = 112; continue _fun0004;
 63:
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
 112:
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
            var1 = this;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var1.inner;
            var2 = null;
            var3 = var2 != var3;
            var2 = 'experiment must be set before calling getCurrentConfig';
            var2 = var4.bind(var5)(var3, var2);
            var3 = var1.inner;
            var2 = var3.getCurrentConfig;
            var1 = {};
            var4 = 'default';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var5 = function(arg1) {
        var4 = function LibdiscoreBridgedStoreExperiment(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arguments[2];
                var6 = this;
                var5 = undefined;
                if(!(var2 === var5)) { _fun0005_ip = 16; continue _fun0005 }
 12:
                var2 = 'Kv';
 16:
                var3 = _closure1_slot6;
                var4 = _closure2_slot0;
                var3 = var3.bind(var5)(var6, var4);
                var3 = _closure1_slot11;
                var1 = new Array(1);
                var7 = arg1;
                var1[0] = var7;
                var1 = var3.bind(var5)(var6, var4, var1);
                var3 = arg2;
                var1['storeName'] = var3;
                var1['type'] = var2;
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
        var1 = 'getCachedBridgedStoreMode';
        var5['key'] = var1;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = this;
                var1 = var2.getCachedConfig;
                var4 = var1.bind(var2)();
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                var1 = undefined;
                if(var5) { _fun0006_ip = 32; continue _fun0006 }
 26:
                var1 = var4.treatmentId;
 32:
                var2 = var2 != var1;
                var4 = -1;
                if(!var2) { _fun0006_ip = 48; continue _fun0006 }
 45:
                var4 = var1;
 48:
                var1 = 1;
                if(!(var1 !== var4)) { _fun0006_ip = 74; continue _fun0006 }
 55:
                var2 = 'libdiscore';
                var1 = 2;
                if(!(var1 !== var4)) { _fun0006_ip = 80; continue _fun0006 }
 68:
                var2 = 'typescript';
                _fun0006_ip = 80; continue _fun0006;
 74:
                var2 = 'typescript-libdiscore-dual-read';
 80:
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = this;
                var1 = var2.getCachedBridgedStoreMode;
                var9 = var1.bind(var2)();
                var3 = 'typescript';
                var1 = null;
                if(!(var3 !== var9)) { _fun0007_ip = 72; continue _fun0007 }
 23:
                var15 = var2.type;
                var13 = var2.storeName;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var16 = '';
                var14 = 'Store[';
                var12 = ',';
                var10 = ']';
                var11 = var9;
                var1 = var16[var6](var15, var14, var13, var12, var11, var10, var9);
 72:
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
            var1 = new Array(3);
            var2 = {'treatmentId': 0, 'label': 'Use typescript as the source of truth'};
            var1[0] = var2;
            var2 = {'treatmentId': 1, 'label': 'Typescript <-> libdiscore Dual Read, Typescript is the source of truth'};
            var1[1] = var2;
            var2 = {'treatmentId': 2, 'label': 'Use libdiscore as the source of truth'};
            var1[2] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var13 = var5.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function LibdiscoreTelemetryExperiment(arg1) {
            var6 = this;
            var2 = 0;
            var10 = 0;
            var7 = copyRestArgs(var10);
            var3 = _closure1_slot6;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot11;
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
            var1 = new Array(4);
            var2 = {'treatmentId': 0, 'label': 'Disabled'};
            var1[0] = var2;
            var2 = {'treatmentId': 1, 'label': 'Enabled (1% sample rate)'};
            var1[1] = var2;
            var2 = {'treatmentId': 2, 'label': 'Enabled (5% sample rate)'};
            var1[2] = var2;
            var2 = {'treatmentId': 3, 'label': 'Enabled (100% sample rate)'};
            var1[3] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMetricsSampleRate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = this;
                var1 = var2.getCachedConfig;
                var1 = var1.bind(var2)();
                var2 = null;
                var2 = var2 == var1;
                var3 = undefined;
                if(var2) { _fun0008_ip = 30; continue _fun0008 }
 24:
                var3 = var1.treatmentId;
 30:
                var1 = 1;
                if(!(var1 !== var3)) { _fun0008_ip = 69; continue _fun0008 }
 37:
                var2 = 2;
                if(!(var2 !== var3)) { _fun0008_ip = 57; continue _fun0008 }
 44:
                var2 = 3;
                if(!(var2 !== var3)) { _fun0008_ip = 55; continue _fun0008 }
 51:
                var2 = 0;
                return var2;
 55:
                return var1;
 57:
                var1 = 0.05;
                return var1;
 69:
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = this;
                var1 = var3.getMetricsSampleRate;
                var5 = var1.bind(var3)();
                var1 = 0;
                var1 = var1 !== var5;
                if(!var1) { _fun0009_ip = 84; continue _fun0009 }
 24:
                var2 = 1;
                var2 = var2 === var5;
                if(var2) { _fun0009_ip = 81; continue _fun0009 }
 34:
                var4 = var3.emissionsCount;
                var3 = var3.MAX_EMISSIONS_PER_APP_LAUNCH;
                var4 = var4 >= var3;
                var3 = !var4;
                if(var4) { _fun0009_ip = 78; continue _fun0009 }
 56:
                var4 = global;
                var6 = var4.Math;
                var4 = var6.random;
                var4 = var4.bind(var6)();
                var3 = var4 < var5;
 78:
                var2 = var3;
 81:
                var1 = var2;
 84:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var11 = var2.bind(var1)(var4);
    var2 = var13.prototype;
    var4 = Object.create(var2, {constructor: {value: var13}});
    var16 = '2025-05_libdiscore_notestore_v2';
    var15 = 'NoteStore';
    var17 = var4;
    var2 = new var17[var13](var16, var15, var14);
    var6 = var2 instanceof Object ? var2 : var4;
    var2 = var13.prototype;
    var4 = Object.create(var2, {constructor: {value: var13}});
    var16 = '2025-07_libdiscore_guildstore_v2';
    var15 = 'GuildStore';
    var17 = var4;
    var2 = new var17[var13](var16, var15, var14);
    var5 = var2 instanceof Object ? var2 : var4;
    var2 = var13.prototype;
    var4 = Object.create(var2, {constructor: {value: var13}});
    var16 = '2025-08_libdiscore_guildrolestore';
    var15 = 'GuildRoleStore';
    var14 = 'Kkv';
    var17 = var4;
    var2 = new var17[var13](var16, var15, var14, var13);
    var4 = var2 instanceof Object ? var2 : var4;
    var2 = var11.prototype;
    var8 = Object.create(var2, {constructor: {value: var11}});
    var16 = '2025-07_libdiscore_telemetry';
    var17 = var8;
    var2 = new var17[var11](var16, var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var8 = 8;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/libdiscore/libdiscoreExperiments.tsx';
    var8 = var9.bind(var10)(var8);
    var3['ALL_LIBDISCORE_EXPERIMENTS'] = var7;
    var3['NoteStoreExperiment'] = var6;
    var3['GuildStoreExperiment'] = var5;
    var3['GuildRoleStoreExperiment'] = var4;
    var3['TelemetryExperiment'] = var2;
    return var1;
})();