// app/modules/wishlists/native/CollectiblesWishlistItemCard.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/CollectiblesWishlistItemCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesWishlistItemCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var7 = var4.item;
            var _closure2_slot0 = var7;
            var9 = var4.source;
            var6 = var4.isOwned;
            var3 = {'item': 0, 'source': 0, 'isOwned': 0};
            var8 = null;
            var17 = var3;
            var16 = null;
            var1 = silentSetPrototypeOf(var17, var16);
            var17 = {};
            var16 = var4;
            var15 = var3;
            var5 = copyDataProperties(var17, var16, var15);
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 2;
            var3 = var12[var3];
            var4 = undefined;
            var10 = var10.bind(var4)(var3);
            var3 = var10.getProductNameAndTypeFromItem;
            var11 = var3.bind(var10)(var7);
            var13 = _closure1_slot3;
            var10 = var13.useCallback;
            var14 = var7.bundleItems;
            var3 = new Array(3);
            var3[0] = var14;
            var14 = var7.collectiblesItem;
            var3[1] = var14;
            var14 = var7.sku;
            var3[2] = var14;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.bundleItems;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot0;
                    var2 = var2.collectiblesItem;
                    if(!(var1 == var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot0;
                    var2 = var2.sku;
                    var2 = var1 != var2;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot4;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 3;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.sku;
                    var2['sku'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 6:
                    _fun0002_ip = 8; continue _fun0002;
case 4:
                    var5 = _closure1_slot4;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 3;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.CollectiblesPreview;
                    var2 = {};
                    var6 = {};
                    var8 = 'single';
                    var6['type'] = var8;
                    var8 = _closure2_slot0;
                    var8 = var8.collectiblesItem;
                    var6['item'] = var8;
                    var2['collectiblesItemData'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 8:
                    _fun0002_ip = 9; continue _fun0002;
case 2:
                    var5 = _closure1_slot4;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 3;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.CollectiblesPreview;
                    var2 = {};
                    var6 = {};
                    var8 = 'bundle';
                    var6['type'] = var8;
                    var7 = _closure2_slot0;
                    var7 = var7.bundleItems;
                    var6['items'] = var7;
                    var2['collectiblesItemData'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 9:
                    return var1;
                }
            };
            var10 = var10.bind(var13)(var2, var3);
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var1 = 4;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['accessibilityLabel'] = var11;
            var1['renderPreview'] = var10;
            var1['source'] = var9;
            if(!(var8 == var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var7.isOwned;
case 10:
            var1['isOwned'] = var6;
            var17 = var1;
            var16 = var5;
            var5 = copyDataProperties(var17, var16);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();