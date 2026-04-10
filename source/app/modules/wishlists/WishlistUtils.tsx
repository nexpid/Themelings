// app/modules/wishlists/WishlistUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isCollectiblesWishlistItemRecord;
    var _closure1_slot2 = var4;
    var4 = 2;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isPremiumWishlistItemRecord;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SKUProductLines;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/WishlistUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function wishlistItemFromSKU(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = var4.productLine;
            var1 = _closure1_slot5;
            var1 = var1.PREMIUM;
            if(!(var3 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var4.productLine;
            var1 = _closure1_slot5;
            var3 = var1.COLLECTIBLES;
            var1 = null;
            if(!(var5 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var3 = var5.fromSKU;
            var1 = var3.bind(var5)(var4);
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var3 = _closure1_slot3;
            var2 = var3.fromSKU;
            var1 = var2.bind(var3)(var4);
case 6:
            return var1;
        }
    };
    var3['wishlistItemFromSKU'] = var4;
    var4 = function isEligibleWishlistItemOnMobile(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot2;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = _closure1_slot4;
            var1 = var2.bind(var3)(var4);
case 7:
            return var1;
        }
    };
    var3['isEligibleWishlistItemOnMobile'] = var4;
    var2 = function buildReorderedWishlistData(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var1 = arg2;
            var4 = arg3;
            var8 = arg4;
            if(!(!(var4 < var8))) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var2 = 1;
            var2 = var8 - var2;
            var3 = var1[var2];
            var2 = null;
            var9 = var2 == var3;
            var6 = undefined;
            if(var9) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var6 = var3.skuId;
case 11:
            var9 = var2 != var6;
            var3 = null;
            if(!var9) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = var6;
case 13:
            var6 = var1[var8];
            var9 = var2 == var6;
            var5 = undefined;
            if(var9) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var5 = var6.skuId;
case 15:
            var6 = var2 != var5;
            var2 = null;
            if(!var6) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = var5;
case 17:
            _fun0003_ip = 19; continue _fun0003;
case 9:
            var6 = var1[var8];
            var5 = null;
            var11 = var5 == var6;
            var10 = undefined;
            if(var11) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var10 = var6.skuId;
case 20:
            var11 = var5 != var10;
            var6 = null;
            if(!var11) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var6 = var10;
case 22:
            var10 = 1;
            var10 = var8 + var10;
            var10 = var1[var10];
            var11 = var5 == var10;
            var9 = undefined;
            if(var11) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var9 = var10.skuId;
case 24:
            var10 = var5 != var9;
            var5 = null;
            if(!var10) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var5 = var9;
case 26:
            var2 = var5;
            var3 = var6;
case 19:
            var6 = new Array(0);
            var5 = 0;
            var14 = var6;
            var13 = var1;
            var12 = 0;
            var1 = arraySpread(var14, var13, var12);
            var1 = var6.splice;
            var10 = 1;
            var9 = var1.bind(var6)(var4, var10);
            var4 = _closure1_slot0;
            var1 = undefined;
            var1 = var4.bind(var1)(var9, var10);
            var4 = var1[var5];
            var1 = var6.splice;
            var1 = var1.bind(var6)(var8, var5, var4);
            var1 = {};
            var5 = var7.set;
            var4 = 'items';
            var4 = var5.bind(var7)(var4, var6);
            var1['newWishlistData'] = var4;
            var1['previousSkuId'] = var3;
            var1['nextSkuId'] = var2;
            return var1;
        }
    };
    var3['buildReorderedWishlistData'] = var2;
    return var1;
})();