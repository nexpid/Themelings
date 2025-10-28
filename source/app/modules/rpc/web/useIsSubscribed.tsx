// app/modules/rpc/web/useIsSubscribed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/web/useIsSubscribed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsSubscribed(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot2;
        var3 = var4.useSyncExternalStore;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.listenIsSubscribed;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.isSubscribed;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = var4.bind(var5)(var3, var2);
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsSubscribed'] = var2;
    return var1;
})();