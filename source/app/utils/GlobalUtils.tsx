// app/utils/GlobalUtils.tsx
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
    var4 = 'utils/GlobalUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function assertNever(arg1) {
        var1 = global;
        var3 = var1.Error;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var2 = 'Unhandled value: ';
        var1 = arg1;
        var5 = var4.bind(var2)(var1);
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        throw var1;
    };
    var3['assertNever'] = var4;
    var4 = function isNotNullish(arg1) {
        var2 = null;
        var1 = arg1;
        var1 = var2 != var1;
        return var1;
    };
    var3['isNotNullish'] = var4;
    var2 = function isIn(arg1, arg2) {
        var3 = arg2;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isIn'] = var2;
    return var1;
})();