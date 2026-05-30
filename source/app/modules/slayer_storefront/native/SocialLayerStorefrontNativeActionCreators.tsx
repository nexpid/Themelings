// app/modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 'social-layer-storefront-product-details-native-modal';
    var3['SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY'] = var4;
    var4 = 'social-layer-storefront-native-gift-modal';
    var3['SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY'] = var4;
    var4 = 'social-layer-storefront-self-purchase-success-native-modal';
    var3['SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY'] = var4;
    var4 = 'social-layer-storefront-gift-purchase-success-native-modal';
    var3['SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY'] = var4;
    var4 = function openSocialLayerStorefrontProductDetailsModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.getIsEligibleForSocialLayerStorefrontMobilePurchasing;
            var2 = {};
            var6 = 'social_layer_storefront_product_details_modal';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 2;
            var5 = var2[var5];
            var6 = var4.bind(var1)(var5);
            var5 = var6.fetchSocialLayerStorefrontConfig;
            var5 = var5.bind(var6)();
            var5 = _closure1_slot1;
            var3 = 3;
            var3 = var2[var3];
            var7 = var5.bind(var1)(var3);
            var6 = var7.pushLazy;
            var3 = 5;
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
            var9 = 'social-layer-storefront-product-details-native-modal';
            var12 = var7;
            var8 = var4;
            var2 = var12[var6](var11, var10, var9, var8, var7);
case 2:
            return var1;
        }
    };
    var3['openSocialLayerStorefrontProductDetailsModal'] = var4;
    var4 = function closeSocialLayerStorefrontProductDetailsModal() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.popWithKey;
        var2 = 'social-layer-storefront-product-details-native-modal';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['closeSocialLayerStorefrontProductDetailsModal'] = var4;
    var4 = function openSocialLayerStorefrontGiftModal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.getIsEligibleForSocialLayerStorefrontMobilePurchasing;
            var2 = {};
            var6 = 'social_layer_storefront_gift_modal';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 3:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 3;
            var4 = var2[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var4 = _closure1_slot0;
            var3 = 5;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 6;
            var3 = var2[var3];
            var2 = var2.paths;
            var4 = var4.bind(var1)(var3, var2);
            var3 = arg1;
            var2 = 'social-layer-storefront-native-gift-modal';
            var2 = var5.bind(var6)(var4, var3, var2);
case 4:
            return var1;
        }
    };
    var3['openSocialLayerStorefrontGiftModal'] = var4;
    var4 = function closeSocialLayerStorefrontGiftModal() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.popWithKey;
        var2 = 'social-layer-storefront-native-gift-modal';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['closeSocialLayerStorefrontGiftModal'] = var4;
    var4 = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.openLazy;
        var1 = {};
        var4 = function importer() {
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 5;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 8;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.then;
            var1 = function(arg1) {
                var2 = arg1;
                var2 = var2.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
                var _closure4_slot0 = var2;
                var1 = function(arg1) {
                    var4 = _closure1_slot3;
                    var3 = _closure4_slot0;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var6 = var2;
                    var1 = copyDataProperties(var6, var5);
                    var5 = arg1;
                    var6 = var2;
                    var1 = copyDataProperties(var6, var5);
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['importer'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['openSocialLayerStorefrontProductSelfPurchaseSuccessModal'] = var4;
    var2 = function openSocialLayerStorefrontProductGiftPurchaseSuccessModal(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.openLazy;
        var1 = {};
        var4 = function importer() {
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 5;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 8;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.then;
            var1 = function(arg1) {
                var2 = arg1;
                var2 = var2.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
                var _closure4_slot0 = var2;
                var1 = function(arg1) {
                    var4 = _closure1_slot3;
                    var3 = _closure4_slot0;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var6 = var2;
                    var1 = copyDataProperties(var6, var5);
                    var5 = arg1;
                    var6 = var2;
                    var1 = copyDataProperties(var6, var5);
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['importer'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['openSocialLayerStorefrontProductGiftPurchaseSuccessModal'] = var2;
    return var1;
})();