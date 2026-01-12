// app/modules/premium/game_server/utils/regionResponseToRegion.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/premium/game_server/utils/regionResponseToRegion.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function regionResponseToRegion(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.name;
        var1['name'] = var3;
        var3 = var2.country_code;
        var1['countryCode'] = var3;
        var3 = var2.ping_url;
        var1['pingUrl'] = var3;
        var2 = var2.enabled;
        var1['enabled'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();