// app/modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 5;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function openSocialLayerStorefrontProductDetailsModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.getIsEligibleForSocialLayerStorefrontMobilePurchasing;
            var2 = {};
            var6 = 'social_layer_storefront_product_details_embed_accept';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 1;
            var4 = var2[var4];
            var7 = var5.bind(var1)(var4);
            var6 = var7.pushLazy;
            var4 = _closure1_slot0;
            var3 = 3;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 2;
            var3 = var2[var3];
            var2 = var2.paths;
            var11 = var4.bind(var1)(var3, var2);
            var4 = {};
            var2 = 'modal';
            var4['presentation'] = var2;
            var10 = arg1;
            var9 = 'social-layer-storefront-product-details-modal';
            var12 = var7;
            var8 = var4;
            var2 = var12[var6](var11, var10, var9, var8, var7);
case 2:
            return var1;
        }
    };
    var3['openSocialLayerStorefrontProductDetailsModal'] = var4;
    var2 = function openSocialLayerStorefrontGiftModal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.getIsEligibleForSocialLayerStorefrontMobilePurchasing;
            var2 = {};
            var6 = 'social_layer_storefront_gift_modal';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 1;
            var4 = var2[var4];
            var7 = var5.bind(var1)(var4);
            var6 = var7.pushLazy;
            var4 = _closure1_slot0;
            var3 = 3;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 4;
            var3 = var2[var3];
            var2 = var2.paths;
            var11 = var4.bind(var1)(var3, var2);
            var4 = {};
            var2 = 'modal';
            var4['presentation'] = var2;
            var10 = arg1;
            var9 = 'social-layer-storefront-gift-modal';
            var12 = var7;
            var8 = var4;
            var2 = var12[var6](var11, var10, var9, var8, var7);
case 2:
            return var1;
        }
    };
    var3['openSocialLayerStorefrontGiftModal'] = var2;
    return var1;
})();