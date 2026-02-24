// app/modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx
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
    var4 = var4.useSlayerStorefrontDevOverrideStore;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSlayerStorefrontDevApplicationIdOverride() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = undefined;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.overrideApplicationId;
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            var3 = null;
            var3 = var3 != var2;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useSlayerStorefrontDevApplicationIdOverride'] = var2;
    return var1;
})();