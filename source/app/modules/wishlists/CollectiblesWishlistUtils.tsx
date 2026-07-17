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
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/CollectiblesWishlistUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getProductNameAndTypeFromSku(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.name;
            var1 = var1.tenantMetadata;
            var2 = null;
            var3 = var2 == var1;
            var7 = undefined;
            var4 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var1.collectibles;
            var2 = var2 == var1;
            var4 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = var1.type;
case 2:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 0;
            var1 = var1[var5];
            var1 = var3.bind(var7)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var1 !== var4)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var7)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.PROFILE_EFFECT;
            if(!(var1 !== var4)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var7)(var1);
            var1 = var1.CollectiblesItemType;
            var3 = var1.NAMEPLATE;
            var1 = var6;
            if(!(var3 === var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 1;
            var5 = var9[var3];
            var5 = var4.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var3 = var9[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3.YFOwHj;
            var3 = {};
            var3['product'] = var6;
            var1 = var5.bind(var8)(var4, var3);
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 1;
            var5 = var9[var3];
            var5 = var4.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var3 = var9[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3.eR7moP;
            var3 = {};
            var3['product'] = var6;
            var1 = var5.bind(var8)(var4, var3);
            _fun0001_ip = 9; continue _fun0001;
case 5:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 1;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.lvBzLi;
            var2 = {};
            var2['product'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 9:
            return var1;
        }
    };
    var3['getProductNameAndTypeFromSku'] = var4;
    var2 = function isWishlistableCollectiblesProduct(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.isPremiumCollectiblesProduct;
            var1 = var1.bind(var2)(var3);
            var1 = !var1;
            if(!var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var5 = var3.type;
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 0;
            var2 = var2[var8];
            var2 = var7.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.EXTERNAL_SKU;
            var2 = var5 !== var2;
            if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var3.type;
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.PROFILE_FRAME;
            var3 = var5 === var3;
            if(!var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 3;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.getIsProfileFrameGiftingEnabled;
            var4 = 'isWishlistableCollectiblesProduct';
            var4 = var5.bind(var6)(var4);
            var3 = !var4;
case 15:
            var2 = !var3;
case 13:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var3['isWishlistableCollectiblesProduct'] = var2;
    return var1;
})();