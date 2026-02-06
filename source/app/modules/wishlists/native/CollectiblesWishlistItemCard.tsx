// app/modules/wishlists/native/CollectiblesWishlistItemCard.tsx
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/CollectiblesWishlistItemCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesWishlistItemCard(arg1) {
        var4 = arg1;
        var6 = var4.item;
        var _closure2_slot0 = var6;
        var10 = var4.onPress;
        var8 = var4.backgroundColor;
        var _closure2_slot1 = var8;
        var7 = var4.width;
        var3 = {'item': 0, 'onPress': 0, 'backgroundColor': 0, 'width': 0};
        var13 = null;
        var14 = var3;
        var1 = silentSetPrototypeOf(var14, var13);
        var14 = {};
        var13 = var4;
        var12 = var3;
        var5 = copyDataProperties(var14, var13, var12);
        var9 = _closure1_slot2;
        var4 = var9.useCallback;
        var11 = var6.sku;
        var3 = new Array(2);
        var3[0] = var11;
        var3[1] = var8;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var2 = var1.sku;
                var1 = null;
                var2 = var1 == var2;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot3;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure2_slot0;
                var7 = var7.sku;
                var2['sku'] = var7;
                var6 = _closure2_slot1;
                var2['backgroundColor'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 2:
                return var1;
            }
        };
        var9 = var4.bind(var9)(var2, var3);
        var4 = _closure1_slot3;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 3;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['onPress'] = var10;
        var1['renderPreview'] = var9;
        var1['backgroundColor'] = var8;
        var1['width'] = var7;
        var6 = var6.isOwned;
        var1['isOwned'] = var6;
        var14 = var1;
        var13 = var5;
        var5 = copyDataProperties(var14, var13);
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();