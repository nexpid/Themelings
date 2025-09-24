// app/modules/libdiscore/timerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var8 = function flushDelayLogs() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot5;
            var3 = var1.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0001_ip = 161; continue _fun0001 }
 21:
            var5 = _closure1_slot4;
            var4 = var5.warn;
            var1 = _closure1_slot5;
            var8 = var1.length;
            var6 = global;
            var1 = var6.HermesInternal;
            var7 = var1.concat;
            var3 = '[libdiscore.timers] Flushing ';
            var1 = ' delay logs';
            var3 = var7.bind(var3)(var8, var1);
            var1 = _closure1_slot5;
            var1 = var4.bind(var5)(var3, var1);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var1 = _closure1_slot3;
            var3 = var1.LIBDISCORE_SLOW_TIMERS;
            var1 = {};
            var8 = var6.JSON;
            var7 = var8.stringify;
            var6 = _closure1_slot5;
            var6 = var7.bind(var8)(var6);
            var1['delay_reports'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = new Array(0);
            _closure1_slot5 = var1;
 161:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot7 = var8;
    var1 = function onTimersDelayCallback(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot5;
            var3 = var4.push;
            var2 = {};
            var5 = arg1;
            var2['timerId'] = var5;
            var5 = arg2;
            var2['expectedDelay'] = var5;
            var5 = arg3;
            var2['actualDelay'] = var5;
            var5 = arg4;
            var2['executionTime'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot5;
            var3 = var2.length;
            var2 = 10;
            if(!(!(var3 >= var2))) { _fun0002_ip = 87; continue _fun0002 }
 75:
            var3 = _closure1_slot6;
            var2 = undefined;
            var2 = var3.bind(var2)();
            _fun0002_ip = 97; continue _fun0002;
 87:
            var2 = _closure1_slot7;
            var1 = undefined;
            var1 = var2.bind(var1)();
 97:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var10 = var7.bind(var1)(var4);
    var4 = var10.prototype;
    var9 = Object.create(var4, {constructor: {value: var10}});
    var13 = 'libdiscore.timers';
    var14 = var9;
    var4 = new var14[var10](var13, var12);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot4 = var4;
    var4 = new Array(0);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = 5000;
    var4 = var7.bind(var1)(var8, var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/libdiscore/timerUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function setupLibdiscoreTimersMonitor() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.setTimersMonitorCallback;
        var2 = _closure1_slot8;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setupLibdiscoreTimersMonitor'] = var2;
    return var1;
})();