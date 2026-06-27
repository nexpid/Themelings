// app/modules/collectibles/native/CollectiblesShopGiftModal.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopGiftModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesShopGiftModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.skuId;
            var _closure2_slot0 = var1;
            var4 = var2.analyticsLocations;
            var11 = var2.lockedRecipientUser;
            var10 = var2.onGiftModalDismiss;
            var _closure2_slot1 = var10;
            var9 = var2.giftingOrigin;
            var _closure2_slot2 = var9;
            var6 = undefined;
            var _closure2_slot5 = var6;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var12 = var2.GiftingBadgeExperiment;
            var5 = var12.useConfig;
            var2 = {};
            var14 = 'CollectiblesShopGiftModal';
            var2['location'] = var14;
            var2 = var5.bind(var12)(var2);
            var2 = var2.enabled;
            var _closure2_slot3 = var2;
            var14 = _closure1_slot3;
            var12 = var14.useEffect;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 5;
                    var1 = var6[var1];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var1);
                    var2 = var3.fetchBadge;
                    var1 = 6;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.BadgeId;
                    var1 = var1.GIFTING;
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var12.bind(var14)(var2, var5);
            var2 = 7;
            var2 = var8[var2];
            var12 = var3.bind(var6)(var2);
            var5 = var12.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var5.bind(var12)(var3, var1, var2);
            var _closure2_slot4 = var14;
            var5 = _closure1_slot1;
            var1 = 8;
            var1 = var8[var1];
            var2 = var5.bind(var6)(var1);
            var1 = new Array(1);
            var20 = 0;
            var22 = var1;
            var21 = var4;
            var4 = arraySpread(var22, var21, var20);
            var3 = 9;
            var3 = var8[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.COLLECTIBLES_MOBILE_GIFT_MODAL;
            var1[3] = var3;
            var3 = 1;
            var3 = var4 + var3;
            var1 = var2.bind(var6)(var1);
            var12 = var1.analyticsLocations;
            var1 = null;
            var3 = var1 == var14;
            var2 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var14.skuId;
case 4:
            _closure2_slot5 = var2;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var4 = undefined;
                    var6 = var3.bind(var4)(var1);
                    var5 = var6.isNullOrEmpty;
                    var3 = _closure2_slot5;
                    var3 = var5.bind(var6)(var3);
                    if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 11;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.validateCollectiblesRecipient;
                    var2 = _closure2_slot5;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    _fun0003_ip = 8; continue _fun0003;
case 6:
                    var2 = global;
                    var4 = var2.Promise;
                    var3 = var4.resolve;
                    var2 = false;
                    var1 = var3.bind(var4)(var2);
case 8:
                    return var1;
                }
            };
            var8 = var4.bind(var5)(var2, var3);
            var2 = var1 == var14;
            var1 = null;
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.isCollectibleGiftingSupported;
            var2 = var2.bind(var3)();
            var5 = _closure1_slot6;
            var4 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = 13;
            var2 = var15[var2];
            var3 = var4.bind(var6)(var2);
            var2 = {};
            var2['onDismiss'] = var10;
            var19 = _closure1_slot0;
            var16 = 14;
            var17 = var15[var16];
            var17 = var19.bind(var6)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var15[var16];
            var16 = var19.bind(var6)(var16);
            var16 = var16.t;
            var16 = var16.JCFN/y;
            var16 = var17.bind(var18)(var16);
            var2['title'] = var16;
            var2 = var5.bind(var6)(var3, var2);
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var3 = 15;
            var3 = var15[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var14 = var14.skuId;
            var3['skuId'] = var14;
            var13 = _closure1_slot5;
            var3['applicationId'] = var13;
            var3['analyticsLocations'] = var12;
            var3['lockedRecipientUser'] = var11;
            var3['onGiftModalDismiss'] = var10;
            var3['giftingOrigin'] = var9;
            var3['validateRecipient'] = var8;
            var8 = function renderProductDetails(arg1) {
                var1 = arg1;
                var6 = var1.recipientUser;
                var5 = var1.isValidRecipient;
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = _closure2_slot4;
                var1['product'] = var7;
                var1['recipientUser'] = var6;
                var1['isValidRecipient'] = var5;
                var5 = true;
                var1['isGift'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['renderProductDetails'] = var8;
            var7 = function renderPurchaseSection(arg1) {
                var1 = arg1;
                var8 = var1.isPurchaseDisabled;
                var7 = var1.giftOptions;
                var6 = var1.baseAnalyticsFields;
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var9 = _closure2_slot4;
                var1['product'] = var9;
                var1['isPurchaseDisabled'] = var8;
                var1['giftOptions'] = var7;
                var1['baseAnalyticsFields'] = var6;
                var6 = _closure2_slot2;
                var1['giftingOrigin'] = var6;
                var5 = _closure2_slot1;
                var1['onGiftModalDismiss'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['renderPurchaseSection'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 13:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();