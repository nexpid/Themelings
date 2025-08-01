// app/utils/web/WindowIdUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function getWindowId(arg1) {
        var1 = arg1;
        var1 = var1.__DISCORD_WINDOW_ID;
        return var1;
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 1;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/web/WindowIdUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getWindowId'] = var4;
    var4 = function setupWindowId(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.uniqueId;
        var1 = 'window-';
        var1 = var2.bind(var3)(var1);
        var2 = arg1;
        var2['__DISCORD_WINDOW_ID'] = var1;
        return var1;
    };
    var3['setupWindowId'] = var4;
    var2 = function getMainWindowId() {
        var3 = _closure1_slot2;
        var1 = global;
        var2 = var1.window;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['getMainWindowId'] = var2;
    return var1;
})();