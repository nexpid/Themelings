// app/modules/screen/useIsScreenLandscape.native.tsx
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
    var4 = function SCREEN_IS_LANDSCAPE_GETTER(arg1) {
        var1 = arg1;
        var1 = var1.screenIsLandscape;
        return var1;
    };
    var _closure1_slot1 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen/useIsScreenLandscape.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getIsScreenLandscape() {
        var2 = _closure1_slot0;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.screenIsLandscape;
        return var1;
    };
    var3['getIsScreenLandscape'] = var4;
    var2 = function useIsScreenLandscape() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useIsScreenLandscape'] = var2;
    return var1;
})();