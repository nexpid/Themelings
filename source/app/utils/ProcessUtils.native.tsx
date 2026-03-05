// app/utils/ProcessUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function getHermesInstrumentedStatsSummary() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = undefined;
            var6 = undefined;
            var4 = undefined;
            var3 = undefined;
            var5 = global;
            var7 = var5.globalThis;
            var9 = var7.HermesInternal;
            var8 = null;
            if(!(var8 != var9)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = 'object';
            var10 = typeof var9;
            if(!(var7 === var10)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var9 = var9.getInstrumentedStats;
            var6 = var9;
            var10 = 'function';
            var9 = typeof var9;
            if(!(var10 !== var9)) { _fun0002_ip = 9; continue _fun0002 }
case 6:
            return var1;
case 9: // try_start_0
            var6 = var6.bind(var1)();
            var4 = var6;
            if(!(var8 != var6)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var4;
            var6 = typeof var6;
            if(!(var7 === var6)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            var6 = var5.Object;
            var5 = var6.entries;
            var6 = var5.bind(var6)(var4);
            var5 = var6.filter;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var8 = undefined;
                    var3 = undefined;
                    var4 = undefined;
                    var7 = var6().value;
                    var9 = var2;
                    var9 = var9 === var8;
                    var3 = var9;
                    if(var9) { _fun0003_ip = 13; continue _fun0003 }
case 7:
                    var4 = var7;
case 13:
                    var4 = undefined;
                    var7 = var3;
                    if(var7) { _fun0003_ip = 14; continue _fun0003 }
case 8:
                    var6 = var6().value;
                    var7 = var2;
                    var7 = var7 === var8;
                    var3 = var7;
                    if(var7) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var4 = var6;
case 14:
                    var5 = var4;
                    var4 = var3;
                    if(var4) { _fun0003_ip = 5; continue _fun0003 }
case 16:
                    var2.return();
case 5:
                    var6 = var5;
                    var7 = 'number';
                    var6 = typeof var6;
                    var6 = var7 === var6;
                    var4 = var6;
                    if(!var6) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var6 = global;
                    var7 = var6.Number;
                    var6 = var7.isFinite;
                    var4 = var6.bind(var7)(var5);
case 17:
                    return var4;
case 19:
                    CatchBlockStart(arg_register=0);
                    if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var2.return();
case 20:
                    throw var1;
                }
            };
            var7 = var5.bind(var6)(var4);
            var6 = var7.slice;
            var4 = 0;
            var5 = 6;
            var6 = var6.bind(var7)(var4, var5);
            var5 = var6.map;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var7 = undefined;
                    var2 = var2 === var7;
                    var5 = undefined;
                    if(var2) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var5 = var4;
case 22:
                    var4 = undefined;
                    if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 13:
                    var6 = var3().value;
                    var3 = var1;
                    var3 = var3 === var7;
                    var4 = undefined;
                    var2 = var3;
                    if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 24:
                    var4 = var6;
                    var2 = var3;
case 15:
                    if(var2) { _fun0004_ip = 25; continue _fun0004 }
case 14:
                    var1.return();
case 25:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = '=';
                    var1 = var3.bind(var2)(var5, var1, var4);
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2);
            var3 = var2;
            var2 = var2.length;
            var4 = var2 > var4;
            var2 = undefined;
            if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var5 = var3;
            var4 = var5.join;
            var3 = ', ';
            var2 = var4.bind(var5)(var3);
case 26: // try_end0
            return var2;
case 10:
            return var1;
case 28: // catch_target0
            CatchBlockStart(arg_register=1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ProcessUtils;
    var2 = function(arg1) {
        var4 = function ProcessUtilsIOS() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = this;
                var1 = _closure1_slot0;
                var4 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var4);
                var1 = _closure1_slot3;
                var11 = var1.bind(var5)(var4);
                var4 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var5)();
                if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 24:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var5);
                _fun0005_ip = 29; continue _fun0005;
case 9:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot3;
                var7 = var7.bind(var5)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 29:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = false;
                var1['shouldCollectHermesInstrumentedStats'] = var4;
                var4 = _closure1_slot5;
                var7 = null;
                var4 = var7 == var4;
                var6 = undefined;
                if(var4) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var3 = _closure1_slot5;
                var6 = var3.SystemResourceManager;
case 30:
                var _closure3_slot1 = var6;
                var3 = var7 == var6;
                if(var3) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var4 = var6.getCpuCoreCount;
                var3 = var7 == var4;
case 32:
                if(var3) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var4 = var6.getCpuCoreCount;
                var3 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2['cpuCoreCount'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var3 = var4.bind(var6)(var3);
case 34:
                var3 = global;
                var4 = var3.setInterval;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure3_slot1;
                        var5 = null;
                        var3 = var5 == var3;
                        if(var3) { _fun0006_ip = 13; continue _fun0006 }
case 36:
                        var4 = _closure3_slot1;
                        var4 = var4.getCurrentCpuUsagePercent;
                        var3 = var5 == var4;
case 13:
                        if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                        var6 = _closure3_slot1;
                        var4 = var6.getCurrentCpuUsagePercent;
                        var3 = function(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var4 = arg1;
                                var3 = _closure3_slot0;
                                var1 = 0;
                                var5 = var4 >= var1;
                                var1 = undefined;
                                var2 = undefined;
                                if(!var5) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                                var2 = var4;
case 39:
                                var3['cpuPercentage'] = var2;
                                return var1;
                            }
                        };
                        var3 = var4.bind(var6)(var3);
case 37:
                        var3 = _closure3_slot1;
                        var3 = var5 == var3;
                        if(var3) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                        var4 = _closure3_slot1;
                        var4 = var4.getCumulativeCpuUsage;
                        var3 = var5 == var4;
case 41:
                        if(var3) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                        var6 = _closure3_slot1;
                        var4 = var6.getCumulativeCpuUsage;
                        var3 = function(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var3 = arg1;
                                var1 = 0;
                                if(!(var3 >= var1)) { _fun0008_ip = 24; continue _fun0008 }
case 45:
                                var2 = _closure3_slot0;
                                var1 = {};
                                var1['usage'] = var3;
                                var3 = global;
                                var4 = var3.performance;
                                var3 = var4.now;
                                var3 = var3.bind(var4)();
                                var1['sampleTime'] = var3;
                                var2['cumulativeCpuUsage'] = var1;
case 24:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var4.bind(var6)(var3);
case 43:
                        var3 = _closure3_slot1;
                        var3 = var5 == var3;
                        if(var3) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                        var4 = _closure3_slot1;
                        var4 = var4.getCurrentMemoryUsageKb;
                        var3 = var5 == var4;
case 46:
                        if(var3) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                        var4 = _closure3_slot1;
                        var3 = var4.getCurrentMemoryUsageKb;
                        var2 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                var4 = arg1;
                                var3 = _closure3_slot0;
                                var1 = 0;
                                var5 = var4 >= var1;
                                var1 = undefined;
                                var2 = undefined;
                                if(!var5) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                                var2 = var4;
case 39:
                                var3['memory'] = var2;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
case 48:
                        var3 = _closure3_slot0;
                        var4 = var3.shouldCollectHermesInstrumentedStats;
                        var1 = undefined;
                        var2 = undefined;
                        if(!var4) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                        var4 = _closure1_slot7;
                        var2 = var4.bind(var1)();
case 50:
                        var3['hermesInstrumentedStatsSummary'] = var2;
                        return var1;
                    }
                };
                var2 = 1000;
                var2 = var4.bind(var5)(var3, var2);
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
        var1 = 'getProcessUptime';
        var5['key'] = var1;
        var1 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(28);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCumulativeCPUUsage';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.cumulativeCpuUsage;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCurrentCPUUsagePercent';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.cpuPercentage;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCurrentMemoryUsageKB';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.memory;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'setShouldCollectHermesInstrumentedStats';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var3['shouldCollectHermesInstrumentedStats'] = var4;
                var1 = undefined;
                var2 = undefined;
                if(!var4) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                var4 = _closure1_slot7;
                var2 = var4.bind(var1)();
case 52:
                var3['hermesInstrumentedStatsSummary'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getCurrentHermesInstrumentedStatsSummary';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = this;
                var2 = var1.shouldCollectHermesInstrumentedStats;
                if(var2) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                var2 = undefined;
                return var2;
case 54:
                var1 = var1.hermesInstrumentedStatsSummary;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'enablePerfMemoryHooks';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'disablePerfMemoryHooks';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getPerfAttributedMemory';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getPerfAttributedMemoryCallstacks';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getPerfAttributedMemoryStats';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'startCPUProfiling';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'stopCPUProfiling';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = null;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'enablePAMemoryProfiler';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'disablePAMemoryProfiler';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getPerfAttributedPAMemory';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getPerfAttributedPAMemoryCallstacks';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getPartitionAllocatorStats';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'enableProfilingV8Heap';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'disableProfilingV8Heap';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getProfilerV8MemoryCallstacks';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getMemoryUsageDetails';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = this;
            var2 = var2.memory;
            var1[0] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getMemoryUsageElectronRenderer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'getMemoryPrivateUsageElectronRenderer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'getMemoryUsageElectronRendererUsedHeapSize';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'getMemoryHeapStats';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'getBlinkMemoryInfo';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'getMemoryUsageElectronProcessTypeDetails';
        var5['key'] = var7;
        var6 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var6;
        var1[27] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ProcessUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();