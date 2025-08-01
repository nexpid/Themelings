// app/modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/useRecentlyActiveChannelsEnabled.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isRecentlyActiveChannelsEnabled() {
        var3 = _closure1_slot2;
        var2 = var3.get;
        var1 = 'enable_recently_active';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isRecentlyActiveChannelsEnabled'] = var4;
    var2 = function useRecentlyActiveChannelsEnabled() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 'enable_recently_active';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useRecentlyActiveChannelsEnabled'] = var2;
    return var1;
})();