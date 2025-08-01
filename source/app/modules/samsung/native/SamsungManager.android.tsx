// app/modules/samsung/native/SamsungManager.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var _closure1_slot0 = var2;
    var2 = {};
    var7 = function checkIfOAuthRequest(arg1) {
        var1 = _closure1_slot0;
        var3 = var1.Samsung;
        var2 = var3.checkIfOAuthRequest;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['checkIfOAuthRequest'] = var7;
    var7 = function showConnectionDisclaimer() {
        var1 = _closure1_slot0;
        var2 = var1.Samsung;
        var1 = var2.showConnectionDisclaimer;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['showConnectionDisclaimer'] = var7;
    var7 = function getAccountUrlAndAuthCode() {
        var1 = _closure1_slot0;
        var2 = var1.Samsung;
        var1 = var2.getAccountUrlAndAuthCode;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getAccountUrlAndAuthCode'] = var7;
    var4 = function finishSamsungAuthorization(arg1, arg2, arg3) {
        var1 = _closure1_slot0;
        var5 = var1.Samsung;
        var4 = var5.finishSamsungAuthorization;
        var3 = arg1;
        var2 = arg2;
        var1 = arg3;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var2['finishSamsungAuthorization'] = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/samsung/native/SamsungManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();