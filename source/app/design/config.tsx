// app/design/config.tsx
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
    var4 = {};
    var1 = function getDefaultLinkInterceptor() {
        var1 = undefined;
        return var1;
    };
    var4['getDefaultLinkInterceptor'] = var1;
    var1 = function useTrackNavigatorScreenImpression() {
        var1 = undefined;
        return var1;
    };
    var4['useTrackNavigatorScreenImpression'] = var1;
    var _closure1_slot0 = var4;
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/config.tsx';
    var5 = var6.bind(var7)(var5);
    var3['designConfig'] = var4;
    var2 = function setDesignConfig(arg1) {
        var1 = global;
        var4 = var1.Object;
        var3 = var4.assign;
        var2 = _closure1_slot0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['setDesignConfig'] = var2;
    return var1;
})();