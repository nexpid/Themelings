// app/modules/wishlists/native/WishlistItemCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SKUProductLines;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/WishlistItemCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WishlistItemCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var9 = var4.item;
            var8 = var4.source;
            var7 = var4.wishlistOwnerId;
            var3 = {'item': 0, 'source': 0, 'wishlistOwnerId': 0};
            var12 = var3;
            var11 = null;
            var2 = silentSetPrototypeOf(var12, var11);
            var12 = {};
            var11 = var4;
            var10 = var3;
            var6 = copyDataProperties(var12, var11, var10);
            var4 = var9.skuProductLine;
            var3 = _closure1_slot2;
            var3 = var3.COLLECTIBLES;
            var1 = null;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['item'] = var9;
            var2['source'] = var8;
            var2['wishlistOwnerId'] = var7;
            var12 = var2;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var1 = var5.bind(var4)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();