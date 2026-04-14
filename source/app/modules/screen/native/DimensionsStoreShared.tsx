// app/modules/screen/native/DimensionsStoreShared.tsx
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
    var2 = 'modules/screen/native/DimensionsStoreShared.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = ['main', 'share'];
    var3['APP_ENTRY_KEYS'] = var2;
    var2 = function createEmptyPerAppEntryDimensionsState() {
        var1 = {'fontScale': 1, 'screenIsLandscape': false};
        var2 = {'width': 0, 'height': 0};
        var1['windowDimensions'] = var2;
        var2 = {'width': 0, 'height': 0};
        var1['windowDimensionsIgnoringKeyboard'] = var2;
        return var1;
    };
    var3['createEmptyPerAppEntryDimensionsState'] = var2;
    return var1;
})();