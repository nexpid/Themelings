// app/modules/wishlists/native/WishlistItemCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SKUProductLines;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/WishlistItemCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WishlistItemCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var9 = var4.sku;
            var8 = var4.isOwned;
            var7 = var4.source;
            var6 = var4.wishlistOwnerId;
            var3 = {'sku': 0, 'isOwned': 0, 'source': 0, 'wishlistOwnerId': 0};
            var2 = null;
            var15 = var3;
            var14 = null;
            var1 = silentSetPrototypeOf(var15, var14);
            var15 = {};
            var14 = var4;
            var13 = var3;
            var5 = copyDataProperties(var15, var14, var13);
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 3;
            var3 = var4[var3];
            var4 = undefined;
            var11 = var10.bind(var4)(var3);
            var10 = var11.useIsEligibleForSocialLayerStorefrontMobilePurchasing;
            var3 = {};
            var12 = 'wishlist_item_card';
            var3['location'] = var12;
            var3 = var10.bind(var11)(var3);
            var11 = var9.productLine;
            var10 = _closure1_slot3;
            var10 = var10.COLLECTIBLES;
            if(!(var10 !== var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot3;
            var10 = var10.PREMIUM;
            if(!(var10 !== var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = _closure1_slot3;
            var10 = var10.SOCIAL_LAYER_GAME_ITEM;
            if(!(var10 !== var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            return var2;
case 6:
            var2 = null;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = _closure1_slot4;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var10 = var10.bind(var4)(var3);
            var3 = {};
            var3['sku'] = var9;
            var3['isOwned'] = var8;
            var3['source'] = var7;
            var3['wishlistOwnerId'] = var6;
            var15 = var3;
            var14 = var5;
            var12 = copyDataProperties(var15, var14);
            var2 = var11.bind(var4)(var10, var3);
case 8:
            return var2;
case 4:
            var10 = _closure1_slot4;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 5;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['sku'] = var9;
            var2['source'] = var7;
            var2['wishlistOwnerId'] = var6;
            var15 = var2;
            var14 = var5;
            var11 = copyDataProperties(var15, var14);
            var2 = var10.bind(var4)(var3, var2);
            return var2;
case 2:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 4;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['sku'] = var9;
            var1['isOwned'] = var8;
            var1['source'] = var7;
            var1['wishlistOwnerId'] = var6;
            var15 = var1;
            var14 = var5;
            var5 = copyDataProperties(var15, var14);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();