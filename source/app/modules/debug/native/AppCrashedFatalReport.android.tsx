// app/modules/debug/native/AppCrashedFatalReport.android.tsx
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
    var4 = var4.NativeModules;
    var4 = var4.CrashReportingManager;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/debug/native/AppCrashedFatalReport.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function init() {
        var2 = _closure1_slot0;
        var1 = var2.initializeManager;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var3['init'] = var2;
    return var1;
})();