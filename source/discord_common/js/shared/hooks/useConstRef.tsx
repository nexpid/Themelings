// discord_common/js/shared/hooks/useConstRef.tsx
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
    var4 = '../discord_common/js/shared/hooks/useConstRef.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useConstRef(arg1) {
        var2 = arg1;
        var3 = _closure1_slot0;
        var1 = var3.useRef;
        var1 = var1.bind(var3)(var2);
        var1['current'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();