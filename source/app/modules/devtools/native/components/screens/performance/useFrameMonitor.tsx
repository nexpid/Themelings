// app/modules/devtools/native/components/screens/performance/useFrameMonitor.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/performance/useFrameMonitor.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFrameMonitor(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var7 = _closure1_slot3;
        var5 = var7.useState;
        var4 = false;
        var6 = var5.bind(var7)(var4);
        var5 = _closure1_slot2;
        var4 = undefined;
        var3 = 2;
        var5 = var5.bind(var4)(var6, var3);
        var3 = 0;
        var4 = var5[var3];
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot1 = var3;
        var5 = var7.useRef;
        var3 = null;
        var3 = var5.bind(var7)(var3);
        var _closure2_slot2 = var3;
        var3 = var7.useRef;
        var3 = var3.bind(var7)(var2);
        var _closure2_slot3 = var3;
        var5 = var7.useEffect;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var2 = _closure2_slot3;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var5.bind(var7)(var2, var3);
        var5 = var7.useCallback;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot2;
                var3 = var1.current;
                var1 = null;
                if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var3.stop;
                var1 = var1.bind(var3)();
case 2:
                var4 = _closure2_slot2;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.startFrameMonitor;
                var3 = var3.bind(var5)();
                var4['current'] = var3;
                var3 = _closure2_slot1;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var2 = new Array(0);
        var3 = var5.bind(var7)(var3, var2);
        var6 = var7.useCallback;
        var5 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot2;
                var3 = var2.current;
                var4 = null;
                if(!(var4 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                var2 = _closure2_slot2;
                var2['current'] = var4;
                var2 = var3.stop;
                var3 = var2.bind(var3)();
                var5 = _closure2_slot1;
                var4 = undefined;
                var2 = false;
                var2 = var5.bind(var4)(var2);
                var2 = _closure2_slot3;
                var1 = var2.current;
                var1 = var1.bind(var2)(var3);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var6.bind(var7)(var5, var2);
        var6 = var7.useEffect;
        var5 = function() {
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var3 = var4.stop;
                    var3 = var3.bind(var4)();
case 2:
                    var1 = _closure2_slot2;
                    var1['current'] = var2;
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var1 = new Array(0);
        var1 = var6.bind(var7)(var5, var1);
        var1 = {};
        var1['monitoring'] = var4;
        var1['start'] = var3;
        var1['stop'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();