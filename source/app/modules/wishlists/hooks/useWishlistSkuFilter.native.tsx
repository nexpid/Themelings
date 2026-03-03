// app/modules/wishlists/hooks/useWishlistSkuFilter.native.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.WishlistRecommendationReason;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SKUProductLines;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/hooks/useWishlistSkuFilter.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useWishlistSkuFilter(arg1) {
        var4 = arg1;
        var1 = var4.wishlistAndRecommendations;
        var _closure2_slot0 = var1;
        var3 = var4.skusToUserAndReason;
        var _closure2_slot1 = var3;
        var9 = var4.userId;
        var _closure2_slot2 = var9;
        var6 = var4.numItems;
        var _closure2_slot3 = var6;
        var5 = _closure1_slot0;
        var7 = var5.useMemo;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.productLine;
                var1 = _closure1_slot2;
                var1 = var1.COLLECTIBLES;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var7.bind(var5)(var1, var4);
        var _closure2_slot4 = var7;
        var1 = {};
        var8 = var5.useMemo;
        var4 = new Array(3);
        var4[0] = var7;
        var4[1] = var9;
        var4[2] = var3;
        var3 = function() {
            var3 = _closure2_slot4;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot1;
                    var1 = var3.id;
                    var4 = var4[var1];
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure2_slot1;
                    var3 = var3.id;
                    var3 = var4[var3];
                    var2 = _closure2_slot2;
                    var3 = var3[var2];
                    var2 = _closure1_slot1;
                    var2 = var2.WISHLIST;
                    var1 = var3 === var2;
case 2:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = var1.length;
            return var1;
        };
        var3 = var8.bind(var5)(var3, var4);
        var1['totalUnownedWishlistItemCount'] = var3;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            var4 = _closure2_slot4;
            var3 = var4.slice;
            var2 = _closure2_slot3;
            var1 = 0;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['slicedWishlistAndRecommendations'] = var2;
        return var1;
    };
    var3['useWishlistSkuFilter'] = var2;
    return var1;
})();