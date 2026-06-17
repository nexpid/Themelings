// app/modules/devtools/native/components/screens/performance/useMountTimer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/performance/useMountTimer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMountTimer() {
        var5 = _closure1_slot1;
        var3 = var5.useState;
        var4 = null;
        var7 = var3.bind(var5)(var4);
        var6 = _closure1_slot0;
        var3 = undefined;
        var1 = 2;
        var7 = var6.bind(var3)(var7, var1);
        var6 = 0;
        var3 = var7[var6];
        var1 = 1;
        var1 = var7[var1];
        var _closure2_slot0 = var1;
        var1 = var5.useRef;
        var1 = var1.bind(var5)(var6);
        var _closure2_slot1 = var1;
        var1 = var5.useRef;
        var1 = var1.bind(var5)(var6);
        var _closure2_slot2 = var1;
        var1 = var5.useRef;
        var1 = var1.bind(var5)(var4);
        var _closure2_slot3 = var1;
        var1 = {};
        var1['run'] = var3;
        var6 = var5.useCallback;
        var4 = function(arg1) {
            var3 = _closure2_slot1;
            var4 = var3.current;
            var1 = 1;
            var1 = var4 + var1;
            var3['current'] = var1;
            var3 = _closure2_slot3;
            var3['current'] = var1;
            var4 = _closure2_slot2;
            var3 = global;
            var5 = var3.performance;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            var4['current'] = var3;
            var3 = _closure2_slot0;
            var2 = {};
            var2['batchKey'] = var1;
            var1 = arg1;
            var2['params'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = new Array(0);
        var3 = var6.bind(var5)(var4, var3);
        var1['begin'] = var3;
        var6 = var5.useCallback;
        var4 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot3;
                var5 = var1.current;
                var4 = null;
                var3 = arg1;
                var1 = null;
                if(!(var3 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot3;
                var3['current'] = var4;
                var3 = global;
                var4 = var3.performance;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var2 = _closure2_slot2;
                var2 = var2.current;
                var1 = var3 - var2;
case 2:
                return var1;
            }
        };
        var3 = new Array(0);
        var3 = var6.bind(var5)(var4, var3);
        var1['measure'] = var3;
        var4 = var5.useCallback;
        var3 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot3;
                var3 = var2.current;
                var2 = arg1;
                if(!(var2 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure2_slot3;
                var1 = null;
                var2['current'] = var1;
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var1['cancel'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();