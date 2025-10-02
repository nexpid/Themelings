// app/lib/SystemResources.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot5;
        var3 = function SystemResources() {
            var3 = this;
            var5 = _closure1_slot4;
            var4 = _closure2_slot3;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 3;
            var7 = var5[var4];
            var7 = var6.bind(var1)(var7);
            var7 = var7.Histogram;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var11 = var8;
            var7 = new var11[var7](var10);
            var7 = var7 instanceof Object ? var7 : var8;
            var3['cpuHistogram'] = var7;
            var4 = var5[var4];
            var4 = var6.bind(var1)(var4);
            var4 = var4.Histogram;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var11 = var6;
            var4 = new var11[var4](var10);
            var4 = var4 instanceof Object ? var4 : var6;
            var3['memoryHistogram'] = var4;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.getCumulativeCPUUsage;
            var2 = var2.bind(var4)();
            var3['startCPU'] = var2;
            var2 = var3.startCPU;
            var3['lastCPU'] = var2;
            var2 = null;
            var3['lastBattery'] = var2;
            return var1;
        };
        var _closure2_slot3 = var3;
        var5 = {};
        var2 = 'getStats';
        var5['key'] = var2;
        var2 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = this;
                var3 = var1.cpuHistogram;
                var2 = var3.getReport;
                var9 = var2.bind(var3)();
                var3 = var1.memoryHistogram;
                var2 = var3.getReport;
                var2 = var2.bind(var3)();
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 4;
                var3 = var5[var3];
                var6 = undefined;
                var4 = var4.bind(var6)(var3);
                var3 = var4.getCumulativeCPUUsage;
                var5 = var3.bind(var4)();
                var3 = var1.startCPU;
                var10 = null;
                var4 = var10 == var3;
                var3 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var10 == var5;
                var3 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var6 = var5.usage;
                var4 = var1.startCPU;
                var4 = var4.usage;
                var6 = var6 - var4;
                var4 = 100;
                var4 = var4 * var6;
                var5 = var5.sampleTime;
                var1 = var1.startCPU;
                var1 = var1.sampleTime;
                var5 = var5 - var1;
                var1 = 1000;
                var1 = var5 / var1;
                var3 = var4 / var1;
case 2:
                var1 = {};
                var4 = var9.percentiles;
                var8 = 25;
                var4 = var4[var8];
                var1['client_performance_cpu_percentile25'] = var4;
                var4 = var9.percentiles;
                var7 = 50;
                var4 = var4[var7];
                var1['client_performance_cpu_percentile50'] = var4;
                var4 = var9.percentiles;
                var6 = 75;
                var4 = var4[var6];
                var1['client_performance_cpu_percentile75'] = var4;
                var4 = var9.percentiles;
                var5 = 90;
                var4 = var4[var5];
                var1['client_performance_cpu_percentile90'] = var4;
                var11 = var9.percentiles;
                var4 = 95;
                var11 = var11[var4];
                var1['client_performance_cpu_percentile95'] = var11;
                if(!(var10 == var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var3 = var9.mean;
case 5:
                var1['client_performance_cpu_mean'] = var3;
                var3 = var2.percentiles;
                var3 = var3[var8];
                var1['client_performance_memory_percentile25'] = var3;
                var3 = var2.percentiles;
                var3 = var3[var7];
                var1['client_performance_memory_percentile50'] = var3;
                var3 = var2.percentiles;
                var3 = var3[var6];
                var1['client_performance_memory_percentile75'] = var3;
                var3 = var2.percentiles;
                var3 = var3[var5];
                var1['client_performance_memory_percentile90'] = var3;
                var3 = var2.percentiles;
                var3 = var3[var4];
                var1['client_performance_memory_percentile95'] = var3;
                var3 = var2.min;
                var1['client_performance_memory_min'] = var3;
                var3 = var2.max;
                var1['client_performance_memory_max'] = var3;
                var2 = var2.mean;
                var1['client_performance_memory_mean'] = var2;
                return var1;
            }
        };
        var5['value'] = var2;
        var2 = new Array(5);
        var2[0] = var5;
        var5 = {};
        var7 = 'takeSample';
        var5['key'] = var7;
        var7 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = this;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var8 = 4;
                var5 = var3[var8];
                var1 = undefined;
                var7 = var4.bind(var1)(var5);
                var5 = var7.getCumulativeCPUUsage;
                var5 = var5.bind(var7)();
                var3 = var3[var8];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getCurrentMemoryUsageKB;
                var4 = var3.bind(var4)();
                var3 = null;
                if(!(var3 == var5)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var7 = var7.bind(var1)(var6);
                var6 = var7.getCurrentCPUUsagePercent;
                var8 = var6.bind(var7)();
                if(!(var3 != var8)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var7 = var2.cpuHistogram;
                var6 = var7.addSample;
                var6 = var6.bind(var7)(var8);
                _fun0002_ip = 9; continue _fun0002;
case 7:
                var6 = var2.lastCPU;
                var8 = var3 != var6;
                var6 = true;
                if(!var8) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var9 = var5.sampleTime;
                var8 = var2.lastCPU;
                var8 = var8.sampleTime;
                var11 = var9 - var8;
                var6 = false;
                var8 = 1;
                if(!(var11 >= var8)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                var9 = var5.usage;
                var8 = var2.lastCPU;
                var8 = var8.usage;
                var12 = var9 - var8;
                var10 = var2.cpuHistogram;
                var9 = var10.addSample;
                var8 = 1000;
                var8 = var11 / var8;
                var12 = var12 / var8;
                var8 = 100;
                var8 = var12 * var8;
                var8 = var9.bind(var10)(var8, var11);
                var6 = true;
case 11:
                if(!var6) { _fun0002_ip = 9; continue _fun0002 }
case 14:
                var2['lastCPU'] = var5;
case 9:
                if(!(var3 != var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var3 = var2.memoryHistogram;
                var2 = var3.addSample;
                var2 = var2.bind(var3)(var4);
case 15:
                return var1;
            }
        };
        var5['value'] = var7;
        var2[1] = var5;
        var5 = {};
        var7 = 'getCurrentBattery';
        var5['key'] = var7;
        var8 = _closure1_slot3;
        var1 = undefined;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getDeviceState;
                    var2 = {};
                    var5 = false;
                    var2['fallback'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=56);
case 19:
                    return var2;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var3 = var2.batteryLevel;
case 23: // try_end0
                    return var3;
case 21:
                    return var2;
case 24: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = null;
                    return var2;
case 17:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot2 = var7;
        var7 = function getCurrentBattery() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var2[2] = var5;
        var5 = {};
        var7 = 'setLastBattery';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var2 = var3.getCurrentBattery;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=24);
case 27:
                    return var2;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var3['lastBattery'] = var2;
                    var3 = undefined;
                    return var3;
case 29:
                    return var2;
case 25:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot1 = var7;
        var7 = function setLastBattery() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var2[3] = var5;
        var5 = {};
        var7 = 'getBatteryLevelStats';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                    var2 = var6.getCurrentBattery;
                    var2 = var2.bind(var6)();
                    SaveGenerator(address=27);
case 33:
                    return var2;
case 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var3 = var6.lastBattery;
                    var5 = null;
                    if(!(var5 != var3)) { _fun0005_ip = 7; continue _fun0005 }
case 37:
                    if(!(var5 != var2)) { _fun0005_ip = 7; continue _fun0005 }
case 38:
                    var3 = {};
                    var4 = var6.lastBattery;
                    var3['startBattery'] = var4;
                    var3['currentBattery'] = var2;
                    var4 = global;
                    var9 = var4.Math;
                    var8 = var9.round;
                    var4 = var6.lastBattery;
                    var4 = var2 - var4;
                    var7 = 1000;
                    var4 = var7 * var4;
                    var4 = var8.bind(var9)(var4);
                    var4 = var4 / var7;
                    var3['batteryUsageRounded'] = var4;
                    _fun0005_ip = 39; continue _fun0005;
case 7:
                    var4 = {};
                    var6 = var6.lastBattery;
                    var4['startBattery'] = var6;
                    var4['currentBattery'] = var2;
                    var4['batteryUsageRounded'] = var5;
                    var3 = var4;
case 39:
                    return var3;
case 35:
                    return var2;
case 31:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var6 = function getBatteryLevelStats() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var2[4] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/SystemResources.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();