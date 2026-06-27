// app/modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot4 = var7;
    var4 = var4.PaymentGateways;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SocialLayerStorefrontGiftModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.skuId;
            var _closure2_slot0 = var9;
            var7 = var1.analyticsLocations;
            var16 = var1.lockedRecipientUser;
            var15 = var1.onGiftModalDismiss;
            var14 = var1.giftingOrigin;
            var _closure2_slot1 = var14;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var6 = undefined;
            var11 = var2.bind(var6)(var1);
            var8 = var11.useStateFromStores;
            var1 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var1;
            var4 = new Array(1);
            var4[0] = var9;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var8.bind(var11)(var5, var1, var4);
            var _closure2_slot2 = var18;
            var8 = _closure1_slot1;
            var1 = 5;
            var1 = var3[var1];
            var4 = var8.bind(var6)(var1);
            var1 = new Array(1);
            var22 = 0;
            var24 = var1;
            var23 = var7;
            var7 = arraySpread(var24, var23, var22);
            var5 = 6;
            var5 = var3[var5];
            var5 = var8.bind(var6)(var5);
            var5 = var5.SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
            var1[6] = var5;
            var5 = 1;
            var5 = var7 + var5;
            var1 = var4.bind(var6)(var1);
            var17 = var1.analyticsLocations;
            var _closure2_slot3 = var17;
            var1 = 7;
            var1 = var3[var1];
            var2 = var2.bind(var6)(var1);
            var1 = var2.isIOS;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot5;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var20 = var1.GOOGLE;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var20 = var1.APPLE_ADVANCED_COMMERCE;
case 4:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var1 = var2.bind(var6)(var1);
            var4 = var1.OTPACOMOrderExperiment;
            var2 = var4.useConfig;
            var1 = {};
            var5 = 'SocialLayerStorefrontGiftModal';
            var1['location'] = var5;
            var1 = var2.bind(var4)(var1);
            var12 = var1.enabled;
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var6)(var1);
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 10;
                    var2 = var9[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var8 = _closure2_slot3;
                    var2['location_stack'] = var8;
                    var8 = _closure1_slot0;
                    var6 = 11;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY;
                    var2['type'] = var6;
                    var6 = _closure2_slot0;
                    var2['sku_id'] = var6;
                    var8 = _closure2_slot2;
                    var6 = null;
                    var8 = var6 == var8;
                    var6 = undefined;
                    if(var8) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var7 = _closure2_slot2;
                    var6 = var7.applicationId;
case 5:
                    var2['application_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1 = var2.bind(var6)(var1);
            var11 = null;
            var2 = var11 == var18;
            var1 = null;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.isSocialLayerStorefrontGiftingSupported;
            var2 = var2.bind(var3)();
            var5 = _closure1_slot6;
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = _closure1_slot1;
            var21 = _closure1_slot2;
            var2 = 13;
            var2 = var21[var2];
            var3 = var3.bind(var6)(var2);
            var2 = {};
            var2['onDismiss'] = var15;
            var19 = _closure1_slot0;
            var4 = 14;
            var7 = var21[var4];
            var7 = var19.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var21[var4];
            var4 = var19.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.JCFN/y;
            var4 = var7.bind(var8)(var4);
            var2['title'] = var4;
            var2 = var5.bind(var6)(var3, var2);
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var4 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 15;
            var3 = var19[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.NativePaymentContextProvider;
            var3 = {};
            var7 = new Array(0);
            var3['skuIDs'] = var7;
            var3['activeSubscription'] = var11;
            var8 = _closure1_slot1;
            var7 = 16;
            var7 = var19[var7];
            var8 = var8.bind(var6)(var7);
            var7 = {};
            var7['paymentGateway'] = var20;
            if(!var12) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var19 = _closure1_slot5;
            var19 = var19.APPLE_ADVANCED_COMMERCE;
            var12 = var20 === var19;
case 12:
            var7['orderRequired'] = var12;
            var12 = new Array(1);
            var12[0] = var9;
            var7['skuIds'] = var12;
            var12 = true;
            var7['isGift'] = var12;
            var7['activeSubscription'] = var11;
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 11;
            var11 = var19[var11];
            var11 = var12.bind(var6)(var11);
            var11 = var11.closeSocialLayerStorefrontGiftModal;
            var7['onOrderRetryCancellation'] = var11;
            var12 = _closure1_slot6;
            var11 = _closure1_slot1;
            var10 = 17;
            var10 = var19[var10];
            var11 = var11.bind(var6)(var10);
            var10 = {};
            var10['skuId'] = var9;
            var18 = var18.applicationId;
            var10['applicationId'] = var18;
            var10['analyticsLocations'] = var17;
            var10['lockedRecipientUser'] = var16;
            var10['onGiftModalDismiss'] = var15;
            var10['giftingOrigin'] = var14;
            var14 = function validateRecipient() {
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.resolve;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10['validateRecipient'] = var14;
            var14 = function renderProductDetails() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot2;
                var1['sku'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var10['renderProductDetails'] = var14;
            var13 = function renderPurchaseSection(arg1) {
                var1 = arg1;
                var7 = var1.isPurchaseDisabled;
                var6 = var1.giftOptions;
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var8 = _closure2_slot0;
                var1['skuId'] = var8;
                var8 = _closure2_slot2;
                var1['sku'] = var8;
                var1['isPurchaseDisabled'] = var7;
                var1['giftOptions'] = var6;
                var6 = _closure2_slot1;
                var1['giftingOrigin'] = var6;
                var5 = _closure2_slot3;
                var1['analyticsLocations'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var10['renderPurchaseSection'] = var13;
            var10 = var12.bind(var6)(var11, var10);
            var7['children'] = var10;
            var7 = var5.bind(var6)(var8, var7, var9);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 11:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();