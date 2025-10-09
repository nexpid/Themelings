// app/modules/libdiscore/libdiscoreExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var13;
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
            var1 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var5 = var13[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var13[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var13[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var13[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var13[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var13[var5];
    var5 = var12.bind(var1)(var5);
    var5 = var5.ensureValidMode;
    var _closure1_slot8 = var5;
    var10 = new Array(0);
    var _closure1_slot9 = var10;
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
                var3 = _closure1_slot10;
                if(!(var4 === var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 6;
                var3 = var3[var5];
                var4 = undefined;
                var6 = var6.bind(var4)(var3);
                var3 = var6.isLibdiscoreLoaded;
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
                var1 = 7;
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
    var9 = var4.bind(var1)();
    var4 = function(arg1) {
        var4 = function LibdiscoreWrapperSimpleExperiment(arg1, arg2) {
            var5 = this;
            var2 = _closure1_slot6;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot11;
            var1 = new Array(1);
            var6 = arg1;
            var1[0] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            var2 = arg2;
            var1['label'] = var2;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var1 = var2.getCachedConfig;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                var3 = var2.treatmentId;
                var2 = 1;
                var1 = var2 === var3;
case 20:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var9);
    var4 = function(arg1) {
        var4 = function LibdiscoreBridgedStoreExperiment(arg1, arg2, arg3, arg4) {
            var5 = this;
            var2 = _closure1_slot6;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot11;
            var1 = new Array(2);
            var6 = arg1;
            var1[0] = var6;
            var6 = arg4;
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            var2 = arg2;
            var1['storeName'] = var2;
            var2 = arg3;
            var1['type'] = var2;
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var1 = var2.getCachedConfig;
                var4 = var1.bind(var2)();
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                var1 = undefined;
                if(var5) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                var1 = var4.treatmentId;
case 22:
                var2 = var2 != var1;
                var4 = -1;
                if(!var2) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                var4 = var1;
case 24:
                var1 = 1;
                if(!(var1 !== var4)) { _fun0007_ip = 9; continue _fun0007 }
case 16:
                var2 = 'libdiscore';
                var1 = 2;
                if(!(var1 !== var4)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                var2 = 'typescript';
                _fun0007_ip = 26; continue _fun0007;
case 9:
                var2 = 'typescript-libdiscore-dual-read';
case 26:
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var1 = var2.getCachedBridgedStoreMode;
                var9 = var1.bind(var2)();
                var3 = 'typescript';
                var1 = null;
                if(!(var3 !== var9)) { _fun0008_ip = 10; continue _fun0008 }
case 28:
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
case 10:
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
    var15 = var4.bind(var1)(var9);
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var1 = var2.getCachedConfig;
                var1 = var1.bind(var2)();
                var2 = null;
                var2 = var2 == var1;
                var3 = undefined;
                if(var2) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                var3 = var1.treatmentId;
case 29:
                var1 = 1;
                if(!(var1 !== var3)) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                var2 = 2;
                if(!(var2 !== var3)) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                var2 = 3;
                if(!(var2 !== var3)) { _fun0009_ip = 16; continue _fun0009 }
case 2:
                var2 = 0;
                return var2;
case 16:
                return var1;
case 33:
                var1 = 0.05;
                return var1;
case 31:
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = this;
                var1 = var3.getMetricsSampleRate;
                var5 = var1.bind(var3)();
                var1 = 0;
                var1 = var1 !== var5;
                if(!var1) { _fun0010_ip = 35; continue _fun0010 }
case 30:
                var2 = 1;
                var2 = var2 === var5;
                if(var2) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                var4 = var3.emissionsCount;
                var3 = var3.MAX_EMISSIONS_PER_APP_LAUNCH;
                var4 = var4 >= var3;
                var3 = !var4;
                if(var4) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                var4 = global;
                var6 = var4.Math;
                var4 = var6.random;
                var4 = var4.bind(var6)();
                var3 = var4 < var5;
case 38:
                var2 = var3;
case 36:
                var1 = var2;
case 35:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var11 = var2.bind(var1)(var9);
    var2 = var15.prototype;
    var4 = Object.create(var2, {constructor: {value: var15}});
    var18 = '2025-09-libdiscore-migrate-guildstore';
    var17 = 'GuildStore';
    var16 = 'Kv';
    var19 = var4;
    var2 = new var19[var15](var18, var17, var16, var15);
    var7 = var2 instanceof Object ? var2 : var4;
    var2 = var15.prototype;
    var4 = Object.create(var2, {constructor: {value: var15}});
    var18 = '2025-09-libdiscore-guildrolestore';
    var17 = 'GuildRoleStore';
    var14 = 'Kkv';
    var19 = var4;
    var16 = var14;
    var2 = new var19[var15](var18, var17, var16, var15);
    var6 = var2 instanceof Object ? var2 : var4;
    var2 = var15.prototype;
    var4 = Object.create(var2, {constructor: {value: var15}});
    var18 = '2025-09-libdiscore-rawguildemojistore';
    var17 = 'RawGuildEmojiStore';
    var19 = var4;
    var2 = new var19[var15](var18, var17, var16, var15);
    var5 = var2 instanceof Object ? var2 : var4;
    var2 = var11.prototype;
    var4 = Object.create(var2, {constructor: {value: var11}});
    var18 = '2025-09-libdiscore-telemetry';
    var19 = var4;
    var2 = new var19[var11](var18, var17);
    var4 = var2 instanceof Object ? var2 : var4;
    var2 = var8.prototype;
    var11 = Object.create(var2, {constructor: {value: var8}});
    var18 = '2025-10-defer-load-late-lazy-cache';
    var17 = 'Allow react to render before lazy cache is loaded';
    var19 = var11;
    var2 = new var19[var8](var18, var17, var16);
    var2 = var2 instanceof Object ? var2 : var11;
    var11 = 8;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/libdiscore/libdiscoreExperiments.tsx';
    var11 = var12.bind(var13)(var11);
    var3['ALL_LIBDISCORE_EXPERIMENTS'] = var10;
    var3['LibdiscoreCachedExperiment'] = var9;
    var3['LibdiscoreWrapperSimpleExperiment'] = var8;
    var3['GuildStoreExperiment'] = var7;
    var3['GuildRoleStoreExperiment'] = var6;
    var3['GuildEmojiStoreExperiment'] = var5;
    var3['TelemetryExperiment'] = var4;
    var3['DelayLoadLateLazyCacheExperiment'] = var2;
    return var1;
})();