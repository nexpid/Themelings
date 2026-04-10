// app/modules/wishlists/hooks/useWishlistGiftableItems.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SKUProductLines;
    var8 = var4.Set;
    var9 = var5.COLLECTIBLES;
    var4 = new Array(2);
    var4[0] = var9;
    var5 = var5.PREMIUM;
    var4[1] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var13 = var5;
    var12 = var4;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot1 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/wishlists/hooks/useWishlistGiftableItems.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['GIFTABLE_PRODUCT_LINES'] = var4;
    var2 = function useWishlistGiftableItems(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var2 = null;
                var4 = var2 == var1;
                var1 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var5 = var3.items;
                var4 = var5.filter;
                var3 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure1_slot1;
                        var3 = var4.has;
                        var1 = var2.skuProductLine;
                        var1 = var3.bind(var4)(var1);
                        if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var2 = var2.isOwned;
                        var1 = !var2;
case 4:
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var3);
case 2:
                if(!(var2 == var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var1 = new Array(0);
case 6:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useWishlistGiftableItems'] = var2;
    return var1;
})();