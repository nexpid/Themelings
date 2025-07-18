// app/utils/ProcessUtils.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                if(var1) { _fun0002_ip = 64; continue _fun0002 }
 51:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var5);
                _fun0002_ip = 102; continue _fun0002;
 64:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot3;
                var7 = var7.bind(var5)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
 102:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = _closure1_slot5;
                var7 = null;
                var4 = var7 == var4;
                var6 = undefined;
                if(var4) { _fun0002_ip = 137; continue _fun0002 }
 127:
                var3 = _closure1_slot5;
                var6 = var3.SystemResourceManager;
 137:
                var _closure3_slot1 = var6;
                var3 = var7 == var6;
                if(var3) { _fun0002_ip = 158; continue _fun0002 }
 148:
                var4 = var6.getCpuCoreCount;
                var3 = var7 == var4;
 158:
                if(var3) { _fun0002_ip = 179; continue _fun0002 }
 161:
                var4 = var6.getCpuCoreCount;
                var3 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2['cpuCoreCount'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var3 = var4.bind(var6)(var3);
 179:
                var3 = global;
                var4 = var3.setInterval;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure3_slot1;
                        var5 = null;
                        var3 = var5 == var3;
                        if(var3) { _fun0003_ip = 32; continue _fun0003 }
 18:
                        var4 = _closure3_slot1;
                        var4 = var4.getCurrentCpuUsagePercent;
                        var3 = var5 == var4;
 32:
                        if(var3) { _fun0003_ip = 57; continue _fun0003 }
 35:
                        var6 = _closure3_slot1;
                        var4 = var6.getCurrentCpuUsagePercent;
                        var3 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var4 = arg1;
                                var3 = _closure3_slot0;
                                var1 = 0;
                                var5 = var4 >= var1;
                                var1 = undefined;
                                var2 = undefined;
                                if(!var5) { _fun0004_ip = 26; continue _fun0004 }
 23:
                                var2 = var4;
 26:
                                var3['cpuPercentage'] = var2;
                                return var1;
                            }
                        };
                        var3 = var4.bind(var6)(var3);
 57:
                        var3 = _closure3_slot1;
                        var3 = var5 == var3;
                        if(var3) { _fun0003_ip = 82; continue _fun0003 }
 68:
                        var4 = _closure3_slot1;
                        var4 = var4.getCumulativeCpuUsage;
                        var3 = var5 == var4;
 82:
                        if(var3) { _fun0003_ip = 107; continue _fun0003 }
 85:
                        var6 = _closure3_slot1;
                        var4 = var6.getCumulativeCpuUsage;
                        var3 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var3 = arg1;
                                var1 = 0;
                                if(!(var3 >= var1)) { _fun0005_ip = 51; continue _fun0005 }
 9:
                                var2 = _closure3_slot0;
                                var1 = {};
                                var1['usage'] = var3;
                                var3 = global;
                                var4 = var3.performance;
                                var3 = var4.now;
                                var3 = var3.bind(var4)();
                                var1['sampleTime'] = var3;
                                var2['cumulativeCpuUsage'] = var1;
 51:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var4.bind(var6)(var3);
 107:
                        var3 = _closure3_slot1;
                        var3 = var5 == var3;
                        if(var3) { _fun0003_ip = 132; continue _fun0003 }
 118:
                        var4 = _closure3_slot1;
                        var4 = var4.getCurrentMemoryUsageKb;
                        var3 = var5 == var4;
 132:
                        if(var3) { _fun0003_ip = 157; continue _fun0003 }
 135:
                        var3 = _closure3_slot1;
                        var2 = var3.getCurrentMemoryUsageKb;
                        var1 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var4 = arg1;
                                var3 = _closure3_slot0;
                                var1 = 0;
                                var5 = var4 >= var1;
                                var1 = undefined;
                                var2 = undefined;
                                if(!var5) { _fun0006_ip = 26; continue _fun0006 }
 23:
                                var2 = var4;
 26:
                                var3['memory'] = var2;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
 157:
                        var1 = undefined;
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
        var1 = new Array(8);
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
        var7 = 'getMemoryUsageElectronProcessTypeDetails';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
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
        var1[5] = var5;
        var5 = {};
        var7 = 'getMemoryUsageElectronRenderer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getMemoryUsageElectronRendererUsedHeapSize';
        var5['key'] = var7;
        var6 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
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