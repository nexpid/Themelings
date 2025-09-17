// app/modules/user_settings/native/two_way_link/useConnectRetry.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/two_way_link/useConnectRetry.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useConnectRetry(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = var3.getState;
                var1 = var1.bind(var3)();
                var1 = var1.routes;
                var4 = var1.findIndex;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.name;
                    var1 = _closure2_slot1;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var4.bind(var1)(var3);
                var3 = 0;
                if(!(!(var4 >= var3))) { _fun0001_ip = 65; continue _fun0001 }
 49:
                var5 = _closure2_slot0;
                var3 = var5.popToTop;
                var3 = var3.bind(var5)();
                _fun0001_ip = 96; continue _fun0001;
 65:
                var3 = _closure2_slot0;
                var2 = var3.pop;
                var1 = var1.length;
                var4 = var1 - var4;
                var1 = 1;
                var1 = var4 - var1;
                var1 = var2.bind(var3)(var1);
 96:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useConnectRetry'] = var2;
    return var1;
})();