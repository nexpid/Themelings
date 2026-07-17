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
    var4 = var5.bind(var1)(var4);
    var4 = var4.transformSKUToCollectiblesItem;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/CollectiblesWishlistItemCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesWishlistItemCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var4 = var6.sku;
            var _closure2_slot0 = var4;
            var8 = var6.isOwned;
            var5 = undefined;
            if(!(var8 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = false;
case 2:
            var10 = var6.source;
            var9 = var6.wishlistOwnerId;
            var _closure2_slot1 = var9;
            var7 = var6.size;
            var _closure2_slot2 = var7;
            var3 = {'sku': 0, 'isOwned': 0, 'source': 0, 'wishlistOwnerId': 0, 'size': 0};
            var1 = null;
            var21 = var3;
            var20 = null;
            var2 = silentSetPrototypeOf(var21, var20);
            var21 = {};
            var20 = var6;
            var19 = var3;
            var6 = copyDataProperties(var21, var20, var19);
            var _closure2_slot3 = var5;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 4;
            var3 = var14[var3];
            var15 = var13.bind(var5)(var3);
            var12 = var15.useIsProfileFrameGiftingEnabled;
            var3 = 'CollectiblesWishlistItemCard';
            var3 = var12.bind(var15)(var3);
            var12 = 5;
            var12 = var14[var12];
            var17 = var13.bind(var5)(var12);
            var16 = var17.useStateFromStores;
            var12 = _closure1_slot5;
            var15 = new Array(1);
            var15[0] = var12;
            var18 = var4.id;
            var12 = new Array(2);
            var12[0] = var18;
            var12[1] = var9;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot5;
                    var4 = var5.hasSentGift;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 4:
                    return var1;
                }
            };
            var9 = var16.bind(var17)(var15, var9, var12);
            var12 = 6;
            var12 = var14[var12];
            var13 = var13.bind(var5)(var12);
            var12 = var13.getProductNameAndTypeFromSku;
            var12 = var12.bind(var13)(var4);
            var15 = _closure1_slot3;
            var14 = var15.useMemo;
            var13 = new Array(1);
            var13[0] = var4;
            var4 = function() {
                var3 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var14.bind(var15)(var4, var13);
            _closure2_slot3 = var4;
            var14 = var15.useCallback;
            var13 = new Array(2);
            var13[0] = var4;
            var13[1] = var7;
            var11 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    var2 = var1 == var2;
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 5:
                    var5 = _closure1_slot6;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.CollectiblesPreview;
                    var2 = {};
                    var7 = _closure2_slot3;
                    var2['collectiblesItemData'] = var7;
                    var6 = _closure2_slot2;
                    var2['size'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 6:
                    return var1;
                }
            };
            var11 = var14.bind(var15)(var11, var13);
            var13 = var1 == var4;
            var14 = undefined;
            if(var13) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var14 = var4.type;
case 7:
            var13 = 'single';
            if(!(var13 === var14)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var4.item;
            var13 = var4.type;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 8;
            var4 = var15[var4];
            var4 = var14.bind(var5)(var4);
            var4 = var4.CollectiblesItemType;
            var4 = var4.PROFILE_FRAME;
            if(!(var13 === var4)) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var1 = null;
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 9:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 9;
            var2 = var13[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['accessibilityLabel'] = var12;
            var2['renderPreview'] = var11;
            var2['source'] = var10;
            if(var8) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var8 = var9;
case 13:
            var2['isOwned'] = var8;
            var2['size'] = var7;
            var21 = var2;
            var20 = var6;
            var6 = copyDataProperties(var21, var20);
            var1 = var4.bind(var5)(var3, var2);
case 12:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();