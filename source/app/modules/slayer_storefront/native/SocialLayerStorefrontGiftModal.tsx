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
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SocialLayerStorefrontGiftModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.skuId;
            var _closure2_slot0 = var13;
            var11 = var1.analyticsLocations;
            var10 = var1.lockedRecipientUser;
            var9 = var1.onGiftModalDismiss;
            var8 = var1.giftingOrigin;
            var _closure2_slot1 = var8;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var6 = undefined;
            var12 = var2.bind(var6)(var1);
            var5 = var12.useStateFromStores;
            var1 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var1;
            var2 = new Array(1);
            var2[0] = var13;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var5.bind(var12)(var4, var1, var2);
            var _closure2_slot2 = var12;
            var2 = _closure1_slot1;
            var1 = 5;
            var1 = var3[var1];
            var4 = var2.bind(var6)(var1);
            var1 = new Array(1);
            var19 = 0;
            var21 = var1;
            var20 = var11;
            var11 = arraySpread(var21, var20, var19);
            var5 = 6;
            var5 = var3[var5];
            var5 = var2.bind(var6)(var5);
            var5 = var5.SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
            var1[10] = var5;
            var5 = 1;
            var5 = var11 + var5;
            var1 = var4.bind(var6)(var1);
            var11 = var1.analyticsLocations;
            var _closure2_slot3 = var11;
            var1 = 7;
            var1 = var3[var1];
            var2 = var2.bind(var6)(var1);
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 8;
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
                    var6 = 9;
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
                    if(var8) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = _closure2_slot2;
                    var6 = var7.applicationId;
case 2:
                    var2['application_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1 = var2.bind(var6)(var1);
            var1 = null;
            var2 = var1 == var12;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.isSocialLayerStorefrontGiftingSupported;
            var2 = var2.bind(var3)();
            var5 = _closure1_slot5;
            var4 = _closure1_slot1;
            var14 = _closure1_slot2;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = 11;
            var2 = var14[var2];
            var3 = var4.bind(var6)(var2);
            var2 = {};
            var2['onDismiss'] = var9;
            var18 = _closure1_slot0;
            var15 = 12;
            var16 = var14[var15];
            var16 = var18.bind(var6)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var14[var15];
            var15 = var18.bind(var6)(var15);
            var15 = var15.t;
            var15 = var15.JCFN/y;
            var15 = var16.bind(var17)(var15);
            var2['title'] = var15;
            var2 = var5.bind(var6)(var3, var2);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var3 = 13;
            var3 = var14[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var3['skuId'] = var13;
            var12 = var12.applicationId;
            var3['applicationId'] = var12;
            var3['analyticsLocations'] = var11;
            var3['lockedRecipientUser'] = var10;
            var3['onGiftModalDismiss'] = var9;
            var3['giftingOrigin'] = var8;
            var8 = function validateRecipient() {
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.resolve;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3['validateRecipient'] = var8;
            var8 = function renderProductDetails() {
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot2;
                var1['sku'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['renderProductDetails'] = var8;
            var7 = function renderPurchaseSection(arg1) {
                var1 = arg1;
                var7 = var1.isPurchaseDisabled;
                var6 = var1.giftOptions;
                var4 = _closure1_slot5;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
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
            var3['renderPurchaseSection'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 8:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();