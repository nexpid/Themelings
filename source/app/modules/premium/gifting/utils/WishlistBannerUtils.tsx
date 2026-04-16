// app/modules/premium/gifting/utils/WishlistBannerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var4 = function getBannerMode(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.totalUnownedWishlistItemCount;
            var2 = var3.wishlistInDmLength;
            var3 = var3.displayItems;
            if(!(!(var1 >= var2))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 0;
            if(!(!(var1 > var2))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var3.length;
            if(!(var1 > var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3.every;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.item;
                    var5 = var1.source;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 3;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var1 = var1.WishlistItemSource;
                    var1 = var1.POPULAR;
                    var1 = var5 === var1;
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure1_slot3;
                    var1 = var2.bind(var3)(var4);
case 8:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 6:
            var1 = _closure1_slot4;
            var1 = var1.SHOP_ONLY;
            _fun0001_ip = 11; continue _fun0001;
case 10:
            var2 = _closure1_slot4;
            var1 = var2.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY;
case 11:
            _fun0001_ip = 12; continue _fun0001;
case 4:
            var2 = _closure1_slot4;
            var1 = var2.MIXED;
case 12:
            _fun0001_ip = 13; continue _fun0001;
case 2:
            var2 = _closure1_slot4;
            var1 = var2.FULL_WISHLIST;
case 13:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var12 = true;
    var5['value'] = var12;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 0;
    var5 = var9[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var5 = var5.useMemo;
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.isSKUWishlistItemRecord;
    var _closure1_slot3 = var5;
    var6 = {};
    var5 = 'FULL_WISHLIST';
    var6['FULL_WISHLIST'] = var5;
    var5 = 'MIXED';
    var6['MIXED'] = var5;
    var5 = 'SHOP_ONLY';
    var6['SHOP_ONLY'] = var5;
    var5 = 'SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY';
    var6['SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY'] = var5;
    var _closure1_slot4 = var6;
    var5 = {};
    var7 = {};
    var11 = 2;
    var10 = var9[var11];
    var10 = var8.bind(var1)(var10);
    var14 = var10.intl;
    var13 = var14.string;
    var10 = var9[var11];
    var10 = var8.bind(var1)(var10);
    var10 = var10.t;
    var10 = var10["7lZ31J"];
    var10 = var13.bind(var14)(var10);
    var7['title'] = var10;
    var10 = function getSubtitle(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.BjEX38;
        var1 = {};
        var5 = arg1;
        var1['username'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7['getSubtitle'] = var10;
    var10 = false;
    var7['showIcons'] = var10;
    var5['FULL_WISHLIST'] = var7;
    var7 = {};
    var13 = var9[var11];
    var13 = var8.bind(var1)(var13);
    var15 = var13.intl;
    var14 = var15.string;
    var13 = var9[var11];
    var13 = var8.bind(var1)(var13);
    var13 = var13.t;
    var13 = var13.pWG4ze;
    var13 = var14.bind(var15)(var13);
    var7['title'] = var13;
    var13 = function getSubtitle(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.dIDKgi;
        var1 = {};
        var5 = arg1;
        var1['username'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7['getSubtitle'] = var13;
    var7['showIcons'] = var12;
    var5['MIXED'] = var7;
    var7 = {};
    var12 = var9[var11];
    var12 = var8.bind(var1)(var12);
    var14 = var12.intl;
    var13 = var14.string;
    var12 = var9[var11];
    var12 = var8.bind(var1)(var12);
    var12 = var12.t;
    var12 = var12.SK5rmi;
    var12 = var13.bind(var14)(var12);
    var7['title'] = var12;
    var12 = function getSubtitle(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.wyMp1j;
        var1 = {};
        var5 = arg1;
        var1['username'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7['getSubtitle'] = var12;
    var7['showIcons'] = var10;
    var5['SHOP_ONLY'] = var7;
    var7 = {};
    var12 = var9[var11];
    var12 = var8.bind(var1)(var12);
    var13 = var12.intl;
    var12 = var13.string;
    var11 = var9[var11];
    var11 = var8.bind(var1)(var11);
    var11 = var11.t;
    var11 = var11.BCi1gT;
    var11 = var12.bind(var13)(var11);
    var7['title'] = var11;
    var11 = function getSubtitle(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 2;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.BjEX38;
        var1 = {};
        var5 = arg1;
        var1['username'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7['getSubtitle'] = var11;
    var7['showIcons'] = var10;
    var5['SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY'] = var7;
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/premium/gifting/utils/WishlistBannerUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['BannerMode'] = var6;
    var3['BANNER_CONFIG_MOBILE'] = var5;
    var3['getBannerMode'] = var4;
    var2 = function useWishlistBannerConfig(arg1) {
        var4 = arg1;
        var7 = var4.totalUnownedWishlistItemCount;
        var _closure2_slot0 = var7;
        var3 = var4.wishlistInDmLength;
        var _closure2_slot1 = var3;
        var2 = var4.displayItems;
        var _closure2_slot2 = var2;
        var5 = var4.recipientName;
        var _closure2_slot3 = var5;
        var4 = _closure1_slot2;
        var6 = new Array(3);
        var6[0] = var7;
        var6[1] = var3;
        var6[2] = var2;
        var3 = undefined;
        var2 = function() {
            var3 = _closure1_slot5;
            var2 = {};
            var4 = _closure2_slot0;
            var2['totalUnownedWishlistItemCount'] = var4;
            var4 = _closure2_slot1;
            var2['wishlistInDmLength'] = var4;
            var1 = _closure2_slot2;
            var2['displayItems'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var6 = var4.bind(var3)(var2, var6);
        var _closure2_slot4 = var6;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot4;
                var1 = _closure1_slot4;
                var1 = var1.FULL_WISHLIST;
                if(!(var1 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var1 = _closure1_slot4;
                var1 = var1.MIXED;
                if(!(var1 !== var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 2;
                var4 = var9[var3];
                var7 = undefined;
                var4 = var8.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var9[var3];
                var3 = var8.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.BCi1gT;
                var3 = var4.bind(var5)(var3);
                var1['title'] = var3;
                var3 = false;
                var1['showIcons'] = var3;
                return var1;
case 16:
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 2;
                var5 = var9[var3];
                var4 = undefined;
                var5 = var8.bind(var4)(var5);
                var7 = var5.intl;
                var5 = var7.formatToPlainString;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3.dIDKgi;
                var3 = {};
                var8 = _closure2_slot3;
                var3['username'] = var8;
                var3 = var5.bind(var7)(var4, var3);
                var1['title'] = var3;
                var3 = true;
                var1['showIcons'] = var3;
                return var1;
case 14:
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 2;
                var4 = var8[var2];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2.YcL/Vr;
                var2 = {};
                var6 = _closure2_slot3;
                var2['username'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                var1['title'] = var2;
                var2 = false;
                var1['showIcons'] = var2;
                return var1;
            }
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useWishlistBannerConfig'] = var2;
    return var1;
})();