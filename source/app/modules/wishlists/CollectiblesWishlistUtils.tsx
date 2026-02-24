// app/modules/wishlists/CollectiblesWishlistUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/CollectiblesWishlistUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getProductNameAndTypeFromItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.skuName;
            var3 = var1.bundleItems;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.bundleItems;
            var3 = var3.length;
            var7 = 0;
            if(!(!(var3 > var7))) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = var1.collectiblesItem;
            if(!(var2 != var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var1.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 1;
            var2 = var2[var8];
            var6 = undefined;
            var2 = var4.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var2 = var4.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var2 = var4.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            return var5;
case 11:
            var3 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 0;
            var4 = var9[var2];
            var4 = var3.bind(var6)(var4);
            var8 = var4.intl;
            var4 = var8.formatToPlainString;
            var2 = var9[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.eVNt6E;
            var2 = {};
            var2['itemName'] = var5;
            var2 = var4.bind(var8)(var3, var2);
            return var2;
case 9:
            var3 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 0;
            var4 = var9[var2];
            var4 = var3.bind(var6)(var4);
            var8 = var4.intl;
            var4 = var8.formatToPlainString;
            var2 = var9[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.x/MGWy;
            var2 = {};
            var2['itemName'] = var5;
            var2 = var4.bind(var8)(var3, var2);
            return var2;
case 7:
            var2 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 0;
            var3 = var8[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var8[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.IQQYef;
            var1 = {};
            var1['itemName'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 5:
            return var5;
case 4:
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var3 = var1[var7];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var1[var7];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1./l2CAE;
            var1 = {};
            var1['itemName'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getProductNameAndTypeFromItem'] = var4;
    var2 = function isWishlistableCollectiblesProduct(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.isPremiumCollectiblesProduct;
            var1 = var1.bind(var4)(var3);
            var1 = !var1;
            if(!var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = var3.type;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.EXTERNAL_SKU;
            var1 = var3 !== var2;
case 13:
            return var1;
        }
    };
    var3['isWishlistableCollectiblesProduct'] = var2;
    return var1;
})();