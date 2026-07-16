// app/modules/slayer_storefront/SocialLayerStorefrontConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var3 = exports;
        var8 = dependencyMap;
        var6 = global;
        var9 = var6.Object;
        var5 = var9.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var9)(var3, var1, var4);
        var1 = 0;
        var4 = var8[var1];
        var1 = undefined;
        var4 = var7.bind(var1)(var4);
        var4 = var4.Environments;
        var5 = var6.window;
        var5 = var5.GLOBAL_ENV;
        var10 = var5.RELEASE_CHANNEL;
        var9 = var4.STAGING;
        var5 = '1193841000108531764';
        if(!(var10 === var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var5 = '1438570979889512448';
case 2:
        var6 = var6.window;
        var6 = var6.GLOBAL_ENV;
        var9 = var6.RELEASE_CHANNEL;
        var6 = var4.STAGING;
        var4 = '1400977487940292751';
        if(!(var9 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var4 = null;
case 4:
        var6 = /^\/(?:channels\/\d+\/)?game-shop(?:\/|$)/;
        var _closure1_slot0 = var6;
        var6 = 1;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/slayer_storefront/SocialLayerStorefrontConstants.tsx';
        var6 = var7.bind(var8)(var6);
        var3['STOREFRONT_MARKETING_GUILD_ID'] = var5;
        var3['STOREFRONT_MARKETING_GUILD_ID_TEST'] = var4;
        var4 = 'Social Layer Claim Purchased Item Modal';
        var3['SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL_TYPE'] = var4;
        var4 = 'Social Layer Gift Code Claim Modal';
        var3['SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL_TYPE'] = var4;
        var4 = 'Social Layer Storefront Product Details Modal';
        var3['SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_TYPE'] = var4;
        var4 = '1346069614634864772';
        var3['MARVEL_RIVALS_APPLICATION_ID'] = var4;
        var4 = 3;
        var3['GAME_SHOP_ANNOUNCEMENT_MODAL_VERSION'] = var4;
        var4 = 14;
        var3['SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM'] = var4;
        var4 = function getChannelsGameShopPrefix(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/channels/';
            var2 = arg1;
            var1 = '/game-shop';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['getChannelsGameShopPrefix'] = var4;
        var2 = function isGameShopPath(arg1) {
            var3 = _closure1_slot0;
            var2 = var3.test;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['isGameShopPath'] = var2;
        return var1;
    }
})();