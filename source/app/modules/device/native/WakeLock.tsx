// app/modules/device/native/WakeLock.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function useWakeLock(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if(var2) { _fun0001_ip = 67; continue _fun0001 }
 37:
                var2 = _closure1_slot4;
                var5 = var2.ScreenWakeLockManager;
                var4 = var5.requestLock;
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var2);
                _fun0001_ip = 105; continue _fun0001;
 67:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.requestLock;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
 105:
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isAndroid;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0002_ip = 67; continue _fun0002 }
 37:
                        var3 = _closure1_slot4;
                        var5 = var3.ScreenWakeLockManager;
                        var4 = var5.releaseLock;
                        var3 = _closure2_slot0;
                        var3 = var4.bind(var5)(var3);
                        _fun0002_ip = 105; continue _fun0002;
 67:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 3;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.releaseLock;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
 105:
                        return var1;
                    }
                };
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NativeModules;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/device/native/WakeLock.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function WakeLock(arg1) {
        var1 = arg1;
        var3 = var1.wakeLockKey;
        var2 = _closure1_slot5;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        var1 = null;
        return var1;
    };
    var3['default'] = var4;
    var3['useWakeLock'] = var2;
    return var1;
})();