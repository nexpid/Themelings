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
            var8 = var4.item;
            var7 = var4.source;
            var1 = null;
            var3 = Object.create(var1);
            var2 = 0;
            var3['item'] = var2;
            var3['source'] = var2;
            var11 = {};
            var10 = var4;
            var9 = var3;
            var6 = copyDataProperties(var11, var10, var9);
            var4 = var8.skuProductLine;
            var3 = _closure1_slot2;
            var3 = var3.COLLECTIBLES;
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
            var2['item'] = var8;
            var2['source'] = var7;
            var11 = var2;
            var10 = var6;
            var6 = copyDataProperties(var11, var10);
            var1 = var5.bind(var4)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();