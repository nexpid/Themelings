// app/modules/wishlists/CollectiblesWishlistUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function formatProductNameAndType(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = arg2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 1;
            var2 = var2[var7];
            var6 = undefined;
            var2 = var4.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var4.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var4.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            return var5;
case 6:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 2;
            var4 = var8[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.YFOwHj;
            var2 = {};
            var2['product'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 4:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 2;
            var4 = var8[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.eR7moP;
            var2 = {};
            var2['product'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 2:
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 2;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.lvBzLi;
            var1 = {};
            var1['product'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.isCollectiblesWishlistItemRecord;
    var _closure1_slot2 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/CollectiblesWishlistUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getProductNameAndTypeFromSku(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot3;
            var3 = var1.name;
            var5 = var1.tenantMetadata;
            var6 = null;
            var7 = var6 == var5;
            var2 = undefined;
            var1 = undefined;
            if(var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = var5.collectibles;
            var6 = var6 == var5;
            var1 = undefined;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var1 = var5.type;
case 8:
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        }
    };
    var3['getProductNameAndTypeFromSku'] = var4;
    var4 = function getProductNameAndTypeFromItem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot2;
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = undefined;
            if(!var5) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var6 = var1.collectiblesItem;
            var5 = null;
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var5 = var6.type;
case 13:
            var3 = var5;
case 11:
            var2 = _closure1_slot3;
            var1 = var1.skuName;
            var1 = var2.bind(var4)(var1, var3);
            return var1;
        }
    };
    var3['getProductNameAndTypeFromItem'] = var4;
    var2 = function isWishlistableCollectiblesProduct(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var1 = var5[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.isPremiumCollectiblesProduct;
            var1 = var1.bind(var2)(var3);
            var1 = !var1;
            if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var5 = var3.type;
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 1;
            var2 = var2[var8];
            var2 = var7.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.EXTERNAL_SKU;
            var2 = var5 !== var2;
            if(!var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var5 = var3.type;
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_FRAME;
            var3 = var5 === var3;
            if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 4;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.getIsProfileFrameGiftingEnabled;
            var4 = 'isWishlistableCollectiblesProduct';
            var4 = var5.bind(var6)(var4);
            var3 = !var4;
case 19:
            var2 = !var3;
case 17:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var3['isWishlistableCollectiblesProduct'] = var2;
    return var1;
})();