// app/modules/wishlists/native/PremiumWishlistItemCard.tsx
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
    var4 = var4.PremiumSubscriptionSKUToPremiumType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/PremiumWishlistItemCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumWishlistItemCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var9 = var5.item;
            var7 = var5.source;
            var6 = var5.wishlistOwnerId;
            var4 = {'item': 0, 'source': 0, 'wishlistOwnerId': 0};
            var3 = null;
            var15 = var4;
            var14 = null;
            var1 = silentSetPrototypeOf(var15, var14);
            var15 = {};
            var14 = var5;
            var13 = var4;
            var5 = copyDataProperties(var15, var14, var13);
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 4;
            var8 = var8[var4];
            var4 = undefined;
            var12 = var10.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var11.bind(var12)(var10, var8);
            var8 = var3 == var11;
            var3 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var11.id;
case 2:
            var6 = var3 === var6;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 5;
            var3 = var10[var3];
            var10 = var8.bind(var4)(var3);
            var8 = var10.isPremium;
            var12 = _closure1_slot5;
            var3 = var9.skuId;
            var3 = var12[var3];
            var6 = var8.bind(var10)(var11, var3);
case 4:
            var10 = _closure1_slot3;
            var8 = var10.useCallback;
            var3 = function() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.PremiumSKUPreview;
                var1 = {};
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2 = new Array(0);
            var8 = var8.bind(var10)(var3, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 7;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var9 = var9.sku;
            var9 = var9.name;
            var1['accessibilityLabel'] = var9;
            var1['renderPreview'] = var8;
            var1['source'] = var7;
            var1['isOwned'] = var6;
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