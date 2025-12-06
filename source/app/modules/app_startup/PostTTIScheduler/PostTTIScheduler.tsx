// app/modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var3, var4, var5);
    var4 = {};
    var5 = function resolve() {
        var1 = undefined;
        return var1;
    };
    var4['resolve'] = var5;
    var _closure1_slot0 = var4;
    var5 = var1.Promise;
    var1 = var5.prototype;
    var4 = Object.create(var1, {constructor: {value: var5}});
    var10 = function(arg1) {
        var2 = _closure1_slot0;
        var1 = arg1;
        var2['resolve'] = var1;
        var1 = undefined;
        return var1;
    };
    var11 = var4;
    var1 = new var11[var5](var10, var9);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot1 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_startup/PostTTIScheduler/PostTTIScheduler.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function schedulePostTTIEvent(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot1;
        var2 = var3.then;
        var1 = function() {
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['schedulePostTTIEvent'] = var4;
    var2 = function notifyAboutTTI() {
        var3 = _closure1_slot0;
        var2 = var3.resolve;
        var1 = null;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['notifyAboutTTI'] = var2;
    return var1;
})();