// app/hooks/useMountEffect.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'hooks/useMountEffect.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useMountEffect(arg1) {
        var4 = _closure1_slot0;
        var3 = var4.useRef;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var3 = var4.useEffect;
        var2 = function() {
            var2 = _closure2_slot0;
            var1 = var2.current;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['default'] = var4;
    var4 = function useMountLayoutEffect(arg1) {
        var4 = _closure1_slot0;
        var3 = var4.useRef;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var3 = var4.useLayoutEffect;
        var2 = function() {
            var2 = _closure2_slot0;
            var1 = var2.current;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['useMountLayoutEffect'] = var4;
    var2 = function useUnmountEffect(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var4 = _closure1_slot0;
        var2 = var4.useRef;
        var2 = var2.bind(var4)(var3);
        var _closure2_slot1 = var2;
        var3 = var4.useEffect;
        var2 = function() {
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var3 = var4.useEffect;
        var2 = function() {
            var1 = function() {
                var2 = _closure2_slot1;
                var1 = var2.current;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['useUnmountEffect'] = var2;
    return var1;
})();