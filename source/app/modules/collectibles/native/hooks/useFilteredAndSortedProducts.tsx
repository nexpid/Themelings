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
    var4 = function usePriceFilter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot5;
            var4 = var3.ORBS;
            var3 = arg1;
            var6 = var3 === var4;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 6;
            var3 = var5[var3];
            var8 = undefined;
            var7 = var4.bind(var8)(var3);
            var5 = var7.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var5.bind(var7)(var4, var3);
            var3 = null;
            var5 = var3 != var7;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 7;
            var3 = var9[var3];
            var4 = var4.bind(var8)(var3);
            var3 = var4.canUseCollectibles;
            var5 = var3.bind(var4)(var7);
case 2:
            var _closure2_slot1 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure2_slot0;
                    var1 = var4;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
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
                        var4 = _closure2_slot1;
                        var1['isPremiumUser'] = var4;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var1 = arg1;
        var11 = var1.products;
        var _closure2_slot0 = var11;
        var6 = var1.maxProducts;
        var _closure2_slot1 = var6;
        var10 = var1.bypassAndroidUnsyncedFilter;
        var _closure2_slot2 = var10;
        var5 = var1.screen;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 3;
        var1 = var8[var1];
        var4 = undefined;
        var9 = var7.bind(var4)(var1);
        var1 = var9.useBadBundleFilter;
        var13 = var1.bind(var9)();
        var _closure2_slot3 = var13;
        var1 = 4;
        var1 = var8[var1];
        var9 = var7.bind(var4)(var1);
        var1 = var9.useAndroidUnsyncedFilter;
        var12 = var1.bind(var9)();
        var _closure2_slot4 = var12;
        var1 = _closure1_slot6;
        var1 = var1.bind(var4)(var5);
        var _closure2_slot5 = var1;
        var5 = _closure1_slot3;
        var9 = var5.useMemo;
        var3 = new Array(5);
        var3[0] = var13;
        var3[1] = var12;
        var3[2] = var11;
        var3[3] = var10;
        var3[4] = var1;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot2;
                if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var3 = _closure2_slot4;
                _fun0003_ip = 8; continue _fun0003;
case 6:
                var3 = function(arg1) {
                    var1 = arg1;
                    return var1;
                };
case 8:
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
        var3 = var9.bind(var5)(var1, var3);
        var1 = 5;
        var1 = var8[var1];
        var4 = var7.bind(var4)(var1);
        var1 = var4.usePurchasedProductsSort;
        var7 = var1.bind(var4)(var3);
        var _closure2_slot6 = var7;
        var1 = {};
        var1['filteredProducts'] = var3;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var3)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var1 = _closure2_slot6;
                _fun0004_ip = 11; continue _fun0004;
case 9:
                var5 = _closure2_slot6;
                var4 = var5.slice;
                var3 = _closure2_slot1;
                var2 = 0;
                var1 = var4.bind(var5)(var2, var3);
case 11:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['sortedProducts'] = var2;
        return var1;
    };
    var3['useFilteredAndSortedProducts'] = var2;
    return var1;
})();