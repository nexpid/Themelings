// app/modules/rpc/helpers/transformApplication.tsx
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
    var2 = 'modules/rpc/helpers/transformApplication.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function transformApplication(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.name;
        var1['name'] = var3;
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.icon;
        var1['icon'] = var3;
        var3 = var2.coverImage;
        var1['cover_image'] = var3;
        var2 = var2.type;
        var1['type'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();