// app/hooks/usePrevious.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.useRef;
    var _closure1_slot0 = var7;
    var4 = var4.useEffect;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'hooks/usePrevious.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function usePrevious(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var5 = undefined;
        var1 = null;
        var1 = var4.bind(var5)(var1);
        var _closure2_slot1 = var1;
        var4 = _closure1_slot1;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1 = var1.current;
        return var1;
    };
    var3['default'] = var4;
    var2 = function usePreviousWhen(arg1) {
        var1 = arg1;
        var7 = var1.value;
        var _closure2_slot0 = var7;
        var6 = var1.shouldUpdate;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var5 = undefined;
        var1 = null;
        var1 = var4.bind(var5)(var1);
        var _closure2_slot2 = var1;
        var4 = _closure1_slot1;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot2;
                var1 = _closure2_slot0;
                var2['current'] = var1;
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1 = var1.current;
        return var1;
    };
    var3['usePreviousWhen'] = var2;
    return var1;
})();