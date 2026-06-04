// app/modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGetOrFetchStorefrontPricesForApplicationId(arg1) {
        var2 = arg1;
        var5 = var2.applicationId;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchStorefrontPricesForApplicationId;
                var1 = {};
                var4 = _closure2_slot0;
                var1['applicationId'] = var4;
                var1 = var2.bind(var3)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useGetOrFetchStorefrontPricesForApplicationId'] = var4;
    var2 = function useGetOrFetchStorefrontPricesForSkuIds(arg1) {
        var2 = arg1;
        var5 = var2.skuIds;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot0;
                var2 = var1.length;
                var1 = 0;
                if(!(var1 !== var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchStorefrontPricesForSkuIds;
                var1 = {};
                var4 = _closure2_slot0;
                var1['skuIds'] = var4;
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useGetOrFetchStorefrontPricesForSkuIds'] = var2;
    return var1;
})();