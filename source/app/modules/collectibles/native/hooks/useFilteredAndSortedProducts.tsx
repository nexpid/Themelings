// app/modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var3 = arg1;
        var1 = var3.products;
        var _closure2_slot0 = var1;
        var6 = var3.maxProducts;
        var _closure2_slot1 = var6;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var4 = 1;
        var5 = var8[var4];
        var4 = undefined;
        var9 = var7.bind(var4)(var5);
        var5 = var9.useBadBundleFilter;
        var11 = var5.bind(var9)();
        var _closure2_slot2 = var11;
        var5 = 2;
        var5 = var8[var5];
        var9 = var7.bind(var4)(var5);
        var5 = var9.useAndroidUnsyncedFilter;
        var10 = var5.bind(var9)();
        var _closure2_slot3 = var10;
        var5 = _closure1_slot2;
        var9 = var5.useMemo;
        var3 = new Array(3);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var1;
        var1 = function() {
            var3 = _closure2_slot2;
            var4 = _closure2_slot3;
            var1 = _closure2_slot0;
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var3 = var9.bind(var5)(var1, var3);
        var1 = 3;
        var1 = var8[var1];
        var4 = var7.bind(var4)(var1);
        var1 = var4.usePurchasedProductsSort;
        var7 = var1.bind(var4)(var3);
        var _closure2_slot4 = var7;
        var1 = {};
        var1['filteredProducts'] = var3;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 19; continue _fun0001 }
 13:
                var1 = _closure2_slot4;
                _fun0001_ip = 40; continue _fun0001;
 19:
                var5 = _closure2_slot4;
                var4 = var5.slice;
                var3 = _closure2_slot1;
                var2 = 0;
                var1 = var4.bind(var5)(var2, var3);
 40:
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