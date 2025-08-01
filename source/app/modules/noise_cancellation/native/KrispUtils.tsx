// app/modules/noise_cancellation/native/KrispUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/noise_cancellation/native/KrispUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getKrispModel() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.resolve;
        var1 = null;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getKrispModel'] = var4;
    var4 = function setKrispSuppressionLevel() {
        var1 = undefined;
        return var1;
    };
    var3['setKrispSuppressionLevel'] = var4;
    var2 = function setKrispModelOverride() {
        var1 = undefined;
        return var1;
    };
    var3['setKrispModelOverride'] = var2;
    return var1;
})();