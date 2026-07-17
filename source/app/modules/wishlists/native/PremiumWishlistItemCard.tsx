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
            var10 = var5.sku;
            var8 = var5.source;
            var7 = var5.wishlistOwnerId;
            var6 = var5.size;
            var _closure2_slot0 = var6;
            var4 = {'sku': 0, 'source': 0, 'wishlistOwnerId': 0, 'size': 0};
            var3 = null;
            var16 = var4;
            var15 = null;
            var1 = silentSetPrototypeOf(var16, var15);
            var16 = {};
            var15 = var5;
            var14 = var4;
            var5 = copyDataProperties(var16, var15, var14);
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 4;
            var9 = var9[var4];
            var4 = undefined;
            var13 = var11.bind(var4)(var9);
            var12 = var13.useStateFromStores;
            var9 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var9;
            var9 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var12.bind(var13)(var11, var9);
            var9 = var3 == var12;
            var3 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var12.id;
case 2:
            var7 = var3 === var7;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 5;
            var3 = var11[var3];
            var11 = var9.bind(var4)(var3);
            var9 = var11.isPremium;
            var13 = _closure1_slot5;
            var3 = var10.id;
            var3 = var13[var3];
            var7 = var9.bind(var11)(var12, var3);
case 4:
            var11 = _closure1_slot3;
            var9 = var11.useCallback;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.PremiumSKUPreview;
                var1 = {};
                var5 = _closure2_slot0;
                var1['size'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var9 = var9.bind(var11)(var2, var3);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 7;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = var10.name;
            var1['accessibilityLabel'] = var10;
            var1['renderPreview'] = var9;
            var1['source'] = var8;
            var1['isOwned'] = var7;
            var1['size'] = var6;
            var16 = var1;
            var15 = var5;
            var5 = copyDataProperties(var16, var15);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();