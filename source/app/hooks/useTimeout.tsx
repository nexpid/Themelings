// app/hooks/useTimeout.tsx
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
    var7 = var4.useEffect;
    var _closure1_slot0 = var7;
    var4 = var4.useRef;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'hooks/useTimeout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2) {
        var3 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot1;
        var1 = undefined;
        var5 = var5.bind(var1)(var3);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot0;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = function() {
            var2 = _closure2_slot2;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var4.bind(var1)(var3, var7);
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var5;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure2_slot1;
                var3 = null;
                if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = undefined;
                return var3;
case 2:
                var3 = global;
                var5 = var3.setTimeout;
                var4 = _closure2_slot1;
                var3 = undefined;
                var2 = function() {
                    var2 = _closure2_slot2;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var5.bind(var3)(var2, var4);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
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