// app/modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function isActivitiesAllowed() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.isTablet;
        var1 = !var1;
        return var1;
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsActivitiesEnabledForCurrentPlatform() {
        var2 = _closure1_slot2;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var3['useIsActivitiesEnabledForCurrentPlatform'] = var4;
    var2 = function getIsActivitiesEnabledForCurrentPlatform() {
        var2 = _closure1_slot2;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var3['getIsActivitiesEnabledForCurrentPlatform'] = var2;
    return var1;
})();