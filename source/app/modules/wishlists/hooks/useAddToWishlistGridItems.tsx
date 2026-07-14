// app/modules/wishlists/hooks/useAddToWishlistGridItems.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/hooks/useAddToWishlistGridItems.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAddToWishlistGridItems(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.userId;
            var5 = var1.wishlist;
            var _closure2_slot0 = var5;
            var12 = var1.numWishlistItemsToRecommend;
            var7 = var1.maxWishlistItemsToShow;
            var8 = undefined;
            if(!(var7 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var12;
case 2:
            var _closure2_slot1 = var7;
            var11 = var1.source;
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var8;
            var _closure2_slot4 = var8;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 2;
            var1 = var9[var1];
            var10 = var6.bind(var8)(var1);
            var2 = var10.useRecommendationsForSingleUser;
            var1 = {};
            var1['userId'] = var13;
            var1['numItems'] = var12;
            var1['source'] = var11;
            var1 = var2.bind(var10)(var1);
            var10 = var1.recommendations;
            _closure2_slot2 = var10;
            var2 = var1.status;
            var1 = 3;
            var1 = var9[var1];
            var8 = var6.bind(var8)(var1);
            var6 = var8.useIsNitroWishlistingEnabled;
            var1 = 'add_to_wishlist_grid_suggested_nitro';
            var1 = var6.bind(var8)(var1);
            var9 = _closure1_slot2;
            var8 = var9.useMemo;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Set;
                    var1 = _closure2_slot0;
                    var2 = null;
                    var5 = var2 == var1;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot0;
                    var6 = var4.items;
                    var5 = var6.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.skuId;
                        return var1;
                    };
                    var1 = var5.bind(var6)(var4);
case 4:
                    if(!(var2 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = new Array(0);
case 6:
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var8 = var2;
                    var7 = var1;
                    var1 = new var8[var3](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var5, var6);
            _closure2_slot3 = var9;
            var8 = var1;
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var9.has;
            var1 = _closure1_slot3;
            var1 = var1.TIER_2;
            var1 = var5.bind(var9)(var1);
            var8 = !var1;
case 8:
            _closure2_slot4 = var8;
            var1 = {};
            var6 = _closure1_slot2;
            var5 = var6.useMemo;
            var4 = new Array(4);
            var4[0] = var10;
            var4[1] = var9;
            var4[2] = var8;
            var4[3] = var7;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure2_slot2;
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var3 = _closure2_slot3;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = {};
                        var2 = arg1;
                        var1['sku'] = var2;
                        var2 = 'recommendation';
                        var1['itemSource'] = var2;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = var4.unshift;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 4;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.createNitroSuggestedSku;
                    var5 = var5.bind(var6)();
                    var2['sku'] = var5;
                    var5 = 'takeover';
                    var2['itemSource'] = var5;
                    var2 = var3.bind(var4)(var2);
case 10:
                    var3 = var4.slice;
                    var2 = _closure2_slot1;
                    var1 = 0;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var4);
            var1['items'] = var3;
            var1['status'] = var2;
            return var1;
        }
    };
    var3['useAddToWishlistGridItems'] = var2;
    return var1;
})();