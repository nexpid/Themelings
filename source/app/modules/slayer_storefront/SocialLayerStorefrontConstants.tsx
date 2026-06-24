// app/modules/slayer_storefront/SocialLayerStorefrontConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var3 = exports;
        var7 = dependencyMap;
        var5 = global;
        var8 = var5.Object;
        var4 = var8.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var8)(var3, var1, var2);
        var1 = 0;
        var2 = var7[var1];
        var1 = undefined;
        var2 = var6.bind(var1)(var2);
        var2 = var2.Environments;
        var4 = var5.window;
        var4 = var4.GLOBAL_ENV;
        var9 = var4.RELEASE_CHANNEL;
        var8 = var2.STAGING;
        var4 = '1193841000108531764';
        if(!(var9 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = '1438570979889512448';
case 2:
        var5 = var5.window;
        var5 = var5.GLOBAL_ENV;
        var8 = var5.RELEASE_CHANNEL;
        var5 = var2.STAGING;
        var2 = '1400977487940292751';
        if(!(var8 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var2 = null;
case 4:
        var5 = 1;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/slayer_storefront/SocialLayerStorefrontConstants.tsx';
        var5 = var6.bind(var7)(var5);
        var3['STOREFRONT_MARKETING_GUILD_ID'] = var4;
        var3['STOREFRONT_MARKETING_GUILD_ID_TEST'] = var2;
        var2 = 'Social Layer Claim Purchased Item Modal';
        var3['SOCIAL_LAYER_CLAIM_PURCHASED_ITEM_MODAL_TYPE'] = var2;
        var2 = 'Social Layer Gift Code Claim Modal';
        var3['SOCIAL_LAYER_GIFT_CODE_CLAIM_MODAL_TYPE'] = var2;
        var2 = 'Social Layer Storefront Product Details Modal';
        var3['SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_TYPE'] = var2;
        var2 = 3;
        var3['GAME_SHOP_ANNOUNCEMENT_MODAL_VERSION'] = var2;
        var2 = 14;
        var3['SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM'] = var2;
        var2 = function getChannelsGameShopPrefix(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/channels/';
            var2 = arg1;
            var1 = '/game-shop';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['getChannelsGameShopPrefix'] = var2;
        return var1;
    }
})();