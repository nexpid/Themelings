// app/hooks/useInterval.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.useEffect;
    var _closure1_slot2 = var7;
    var4 = var4.useRef;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'hooks/useInterval.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useInterval(arg1, arg2) {
        var3 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var5;
        var7 = _closure1_slot3;
        var1 = undefined;
        var6 = var7.bind(var1)(var3);
        var _closure2_slot2 = var6;
        var6 = null;
        var6 = var7.bind(var1)(var6);
        var _closure2_slot3 = var6;
        var4 = _closure1_slot2;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var2 = _closure2_slot2;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var4.bind(var1)(var3, var6);
        var3 = new Array(1);
        var3[0] = var5;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot1;
                var4 = null;
                if(!(var4 === var3)) { _fun0001_ip = 62; continue _fun0001 }
 15:
                var3 = _closure2_slot3;
                var3 = var3.current;
                if(!(var4 !== var3)) { _fun0001_ip = 58; continue _fun0001 }
 28:
                var3 = global;
                var7 = var3.clearInterval;
                var3 = _closure2_slot3;
                var6 = var3.current;
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var3['current'] = var4;
 58:
                var3 = undefined;
                return var3;
 62:
                var3 = _closure2_slot3;
                var4 = global;
                var6 = var4.setInterval;
                var5 = _closure2_slot1;
                var4 = undefined;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = _closure2_slot2;
                    var4 = var3.current;
                    var2 = null;
                    var4 = var2 != var4;
                    var2 = 'Missing callback';
                    var2 = var5.bind(var1)(var4, var2);
                    var2 = var3.current;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var2 = var6.bind(var4)(var2, var5);
                var3['current'] = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearInterval;
                    var1 = _closure2_slot3;
                    var2 = var1.current;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var1)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();