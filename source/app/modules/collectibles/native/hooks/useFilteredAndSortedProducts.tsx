// app/modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFilteredAndSortedProducts(arg1) {
        var2 = arg1;
        var11 = var2.products;
        var _closure2_slot0 = var11;
        var5 = var2.maxProducts;
        var _closure2_slot1 = var5;
        var10 = var2.bypassAndroidUnsyncedFilter;
        var _closure2_slot2 = var10;
        var6 = var2.screen;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 3;
        var2 = var8[var2];
        var3 = undefined;
        var9 = var7.bind(var3)(var2);
        var2 = var9.useBadBundleFilter;
        var13 = var2.bind(var9)();
        var _closure2_slot3 = var13;
        var2 = 4;
        var2 = var8[var2];
        var9 = var7.bind(var3)(var2);
        var2 = var9.useAndroidUnsyncedFilter;
        var12 = var2.bind(var9)();
        var _closure2_slot4 = var12;
        var2 = function usePriceFilter(arg1) {
            var3 = _closure1_slot5;
            var4 = var3.ORBS;
            var3 = arg1;
            var6 = var3 === var4;
            var _closure3_slot0 = var6;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var7 = undefined;
            var9 = var4.bind(var7)(var3);
            var5 = var9.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var9)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 7;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.canUseShopDiscounts;
            var5 = var3.bind(var4)(var5);
            var _closure3_slot1 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure3_slot0;
                    var1 = var4;
                    if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getProductOrbPrice;
                        var1 = {};
                        var4 = arg1;
                        var1['product'] = var4;
                        var4 = _closure3_slot1;
                        var1['hasShopDiscount'] = var4;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var2 = var2.bind(var3)(var6);
        var _closure2_slot5 = var2;
        var4 = _closure1_slot3;
        var9 = var4.useMemo;
        var6 = new Array(5);
        var6[0] = var13;
        var6[1] = var12;
        var6[2] = var11;
        var6[3] = var10;
        var6[4] = var2;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot2;
                if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure2_slot4;
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var3 = function(arg1) {
                    var1 = arg1;
                    return var1;
                };
case 6:
                var4 = new Array(3);
                var4[0] = var3;
                var3 = _closure2_slot3;
                var4[1] = var3;
                var3 = _closure2_slot5;
                var4[2] = var3;
                var3 = var4.reduce;
                var2 = _closure2_slot0;
                var1 = function(arg1, arg2) {
                    var3 = arg2;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            }
        };
        var6 = var9.bind(var4)(var2, var6);
        var2 = 5;
        var2 = var8[var2];
        var3 = var7.bind(var3)(var2);
        var2 = var3.usePurchasedProductsSort;
        var6 = var2.bind(var3)(var6);
        var _closure2_slot6 = var6;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var3)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var1 = _closure2_slot6;
                _fun0003_ip = 9; continue _fun0003;
case 7:
                var5 = _closure2_slot6;
                var4 = var5.slice;
                var3 = _closure2_slot1;
                var2 = 0;
                var1 = var4.bind(var5)(var2, var3);
case 9:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useFilteredAndSortedProducts'] = var2;
    return var1;
})();