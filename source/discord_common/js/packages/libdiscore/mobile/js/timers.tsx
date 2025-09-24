// discord_common/js/packages/libdiscore/mobile/js/timers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var6 = function setTimeout(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg2;
            var2 = global;
            var4 = var2.Math;
            var3 = var4.max;
            var2 = null;
            var5 = var2 != var1;
            var2 = 0;
            if(!var5) { _fun0001_ip = 30; continue _fun0001 }
 27:
            var2 = var1;
 30:
            var1 = 4;
            var4 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot3;
            var1 = var3.registerTimeout;
            var1 = var1.bind(var3)(var4);
            var4 = _closure1_slot2;
            var3 = var4.set;
            var2 = arg1;
            var2 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot5 = var6;
    var5 = function setInterval(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg2;
            var2 = global;
            var4 = var2.Math;
            var3 = var4.max;
            var2 = null;
            var5 = var2 != var1;
            var2 = 0;
            if(!var5) { _fun0002_ip = 30; continue _fun0002 }
 27:
            var2 = var1;
 30:
            var1 = 4;
            var4 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot3;
            var1 = var3.registerInterval;
            var1 = var1.bind(var3)(var4);
            var4 = _closure1_slot2;
            var3 = var4.set;
            var2 = arg1;
            var2 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function clearTimeout(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0003_ip = 29; continue _fun0003 }
 12:
            var4 = _closure1_slot2;
            var2 = var4.delete;
            var1 = var2.bind(var4)(var3);
 29:
            if(!var1) { _fun0003_ip = 50; continue _fun0003 }
 32:
            var2 = _closure1_slot3;
            var1 = var2.clear;
            var1 = var1.bind(var2)(var3);
 50:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var7 = global;
    var12 = var7.Object;
    var11 = var12.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var10);
    var1 = 0;
    var10 = var9[var1];
    var1 = undefined;
    var10 = var8.bind(var1)(var10);
    var10 = var10.typedGlobal;
    var12 = var10.LIBDISCORE_JSI;
    var _closure1_slot0 = var12;
    var10 = null;
    var _closure1_slot1 = var10;
    var11 = {'slowExecutionThresholdMillis': 500, 'delayedExecutionThresholdMillis': 5000};
    var10 = function onSlowTimer(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot1;
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 35; continue _fun0004 }
 13:
            var6 = _closure1_slot1;
            var11 = undefined;
            var10 = arg1;
            var9 = arg2;
            var8 = arg3;
            var7 = arg4;
            var1 = var11[var6](var10, var9, var8, var7, var6);
 35:
            var1 = undefined;
            return var1;
        }
    };
    var11['onSlowTimer'] = var10;
    var7 = var7.Map;
    var10 = var7.prototype;
    var10 = Object.create(var10, {constructor: {value: var7}});
    var16 = var10;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot2 = var7;
    var10 = var12.makeTimerManager;
    var7 = function expirationCallback(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot2;
            var2 = var3.get;
            var2 = var2.bind(var3)(var4);
            if(!var2) { _fun0005_ip = 49; continue _fun0005 }
 23:
            var3 = arg2;
            if(!var3) { _fun0005_ip = 43; continue _fun0005 }
 29:
            var3 = _closure1_slot2;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var4);
 43:
            var1 = undefined;
            var1 = var2.bind(var1)();
 49:
            var1 = undefined;
            return var1;
        }
    };
    var7 = var10.bind(var12)(var7, var11);
    var _closure1_slot3 = var7;
    var _closure1_slot4 = var4;
    var7 = 1;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = '../discord_common/js/packages/libdiscore/mobile/js/timers.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function setTimersMonitorCallback(arg1) {
        var1 = arg1;
        _closure1_slot1 = var1;
        var1 = undefined;
        return var1;
    };
    var3['setTimersMonitorCallback'] = var7;
    var3['setTimeout'] = var6;
    var3['setInterval'] = var5;
    var3['clearTimeout'] = var4;
    var3['clearInterval'] = var4;
    var4 = function registerTimerPolyfills() {
        var2 = global;
        var4 = var2.window;
        var3 = _closure1_slot5;
        var4['setTimeout'] = var3;
        var4 = var2.window;
        var3 = _closure1_slot6;
        var4['setInterval'] = var3;
        var4 = var2.window;
        var3 = _closure1_slot7;
        var4['clearTimeout'] = var3;
        var2 = var2.window;
        var1 = _closure1_slot4;
        var2['clearInterval'] = var1;
        var1 = undefined;
        return var1;
    };
    var3['registerTimerPolyfills'] = var4;
    var2 = function keepAliveWorkaround() {
        var3 = _closure1_slot0;
        var2 = var3.runtimeExecutorDemo;
        var1 = 5000;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['keepAliveWorkaround'] = var2;
    return var1;
})();