// app/modules/collectibles/hooks/useGetProductsFromSkus.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useCallback;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useGetProductsFromSkus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGetProductsFromSkus() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 2;
        var3 = var4[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var3);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var1 = _closure1_slot4;
            var1 = var1.products;
            return var1;
        };
        var5 = var6.bind(var7)(var5, var3);
        var _closure2_slot0 = var5;
        var3 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            var6 = arg1;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var5 = var6.map;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var1 = arg1;
                    var2 = var2.bind(var3)(var1);
                    var4 = null;
                    var1 = var2;
                    if(!(var4 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = var2.variantGroupStoreListingId;
                    var1 = var2;
                    if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                    var4 = _closure1_slot4;
                    var3 = var4.getProductByStoreListingId;
                    var2 = var2.variantGroupStoreListingId;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var2);
            var2 = var5.filter;
            var1 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var2 = var2.bind(var5)(var1);
            var1 = 'storeListingId';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();