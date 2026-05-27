// app/modules/wishlists/native/CollectiblesWishlistItemCard.tsx
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
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/CollectiblesWishlistItemCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesWishlistItemCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = var5.item;
            var _closure2_slot0 = var4;
            var8 = var5.source;
            var7 = var5.wishlistOwnerId;
            var _closure2_slot1 = var7;
            var3 = {'item': 0, 'source': 0, 'wishlistOwnerId': 0};
            var1 = null;
            var17 = var3;
            var16 = null;
            var2 = silentSetPrototypeOf(var17, var16);
            var17 = {};
            var16 = var5;
            var15 = var3;
            var6 = copyDataProperties(var17, var16, var15);
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 3;
            var3 = var12[var3];
            var5 = undefined;
            var13 = var11.bind(var5)(var3);
            var10 = var13.useIsProfileFrameGiftingEnabled;
            var3 = 'CollectiblesWishlistItemCard';
            var3 = var10.bind(var13)(var3);
            var10 = 4;
            var10 = var12[var10];
            var13 = var11.bind(var5)(var10);
            var12 = var13.useStateFromStores;
            var10 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var10;
            var14 = var4.skuId;
            var10 = new Array(2);
            var10[0] = var14;
            var10[1] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot4;
                    var4 = var5.hasSentGift;
                    var3 = _closure2_slot0;
                    var3 = var3.skuId;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var10 = var12.bind(var13)(var11, var7, var10);
            var7 = var4.isOwned;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var10;
case 4:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 5;
            var10 = var12[var10];
            var11 = var11.bind(var5)(var10);
            var10 = var11.getProductNameAndTypeFromItem;
            var10 = var10.bind(var11)(var4);
            var13 = _closure1_slot3;
            var12 = var13.useCallback;
            var14 = var4.bundleItems;
            var11 = new Array(3);
            var11[0] = var14;
            var14 = var4.collectiblesItem;
            var11[1] = var14;
            var14 = var4.sku;
            var11[2] = var14;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.bundleItems;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = _closure2_slot0;
                    var2 = var2.collectiblesItem;
                    if(!(var1 == var2)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = _closure2_slot0;
                    var2 = var2.sku;
                    var2 = var1 != var2;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var5 = _closure1_slot5;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.sku;
                    var2['sku'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 10:
                    _fun0003_ip = 12; continue _fun0003;
case 8:
                    var5 = _closure1_slot5;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
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
case 12:
                    _fun0003_ip = 13; continue _fun0003;
case 6:
                    var5 = _closure1_slot5;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
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
case 13:
                    return var1;
                }
            };
            var9 = var12.bind(var13)(var9, var11);
            var4 = var4.collectiblesItem;
            var12 = var1 == var4;
            var11 = undefined;
            if(var12) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = var4.type;
case 14:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 7;
            var4 = var13[var4];
            var4 = var12.bind(var5)(var4);
            var4 = var4.CollectiblesItemType;
            var4 = var4.PROFILE_FRAME;
            if(!(var11 === var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = null;
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 16:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 8;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['accessibilityLabel'] = var10;
            var2['renderPreview'] = var9;
            var2['source'] = var8;
            var2['isOwned'] = var7;
            var17 = var2;
            var16 = var6;
            var6 = copyDataProperties(var17, var16);
            var1 = var4.bind(var5)(var3, var2);
case 18:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();