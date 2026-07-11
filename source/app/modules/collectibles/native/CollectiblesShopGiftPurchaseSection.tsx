// app/modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function CollectiblesShopGiftPurchaseSection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.product;
            var _closure2_slot0 = var14;
            var15 = var1.isPurchaseDisabled;
            var6 = var1.giftOptions;
            var _closure2_slot1 = var6;
            var3 = var1.baseAnalyticsFields;
            var _closure2_slot2 = var3;
            var1 = var1.giftingOrigin;
            var _closure2_slot3 = var1;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 11;
            var1 = var17[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.insets;
            var5 = _closure1_slot15;
            var1 = var1.bottom;
            var10 = var5.bind(var4)(var1);
            var7 = _closure1_slot0;
            var1 = 12;
            var1 = var17[var1];
            var1 = var7.bind(var4)(var1);
            var8 = var1.GiftingBadgeExperiment;
            var5 = var8.useConfig;
            var1 = {};
            var12 = 'CollectiblesShopGiftPurchaseSection';
            var1['location'] = var12;
            var1 = var5.bind(var8)(var1);
            var5 = var1.enabled;
            var1 = 13;
            var1 = var17[var1];
            var12 = var7.bind(var4)(var1);
            var8 = var12.useStateFromStoresObject;
            var1 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var9 = _closure1_slot6;
                    var8 = var9.getNextTier;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 14;
                    var5 = var7[var3];
                    var2 = undefined;
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.BadgeId;
                    var5 = var5.GIFTING;
                    var5 = var8.bind(var9)(var5);
                    var1['nextTier'] = var5;
                    var9 = _closure1_slot6;
                    var8 = var9.getRemainingToNextTier;
                    var5 = var7[var3];
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.BadgeId;
                    var5 = var5.GIFTING;
                    var5 = var8.bind(var9)(var5);
                    var1['giftsToNextTier'] = var5;
                    var5 = _closure1_slot6;
                    var4 = var5.getSingleRequirementProgress;
                    var3 = var7[var3];
                    var3 = var6.bind(var2)(var3);
                    var3 = var3.BadgeId;
                    var3 = var3.GIFTING;
                    var3 = var4.bind(var5)(var3);
                    var4 = null;
                    var4 = var4 == var3;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = var3.current;
case 2:
                    var1['badgeProgress'] = var2;
                    return var1;
                }
            };
            var1 = var8.bind(var12)(var7, var1);
            var13 = var1.nextTier;
            var16 = var1.giftsToNextTier;
            var1 = var1.badgeProgress;
            var _closure2_slot4 = var1;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var1 = _closure1_slot16;
            var1 = var1.NOT_STARTED;
            var8 = var7.bind(var8)(var1);
            var7 = _closure1_slot3;
            var1 = 2;
            var7 = var7.bind(var4)(var8, var1);
            var1 = 0;
            var12 = var7[var1];
            var _closure2_slot5 = var12;
            var1 = 1;
            var1 = var7[var1];
            var _closure2_slot6 = var1;
            var1 = 15;
            var1 = var17[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.analyticsLocations;
            var8 = _closure1_slot7;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.orderRecord;
                return var1;
            };
            var8 = var8.bind(var4)(var1);
            var1 = 16;
            var1 = var17[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)(var8, var6);
            var1 = 17;
            var1 = var17[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['product'] = var14;
            var1['analyticsLocations'] = var7;
            var14 = null;
            var17 = var14 == var8;
            var7 = undefined;
            if(var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var8.id;
case 4:
            var1['orderId'] = var7;
            var1['analyticsData'] = var3;
            var3 = function onPurchaseComplete() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = var1.recipient_id;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var5 = _closure2_slot3;
                    var3 = _closure1_slot10;
                    var3 = var3.USER_PROFILE_WISHLIST;
                    var3 = var5 !== var3;
                    if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure2_slot3;
                    var4 = _closure1_slot10;
                    var4 = var4.DM_CHANNEL_WISHLIST;
                    var3 = var5 !== var4;
case 8:
                    var1 = var3;
case 6:
                    if(var1) { _fun0003_ip = 3; continue _fun0003 }
case 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.dispatch;
                    var1 = {};
                    var5 = 'WISHLIST_GIFT_SENT';
                    var1['type'] = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.skuId;
                    var1['skuId'] = var5;
                    var5 = _closure2_slot1;
                    var5 = var5.recipient_id;
                    var1['recipientId'] = var5;
                    var1 = var3.bind(var4)(var1);
case 3:
                    var5 = _closure2_slot6;
                    var1 = _closure1_slot16;
                    var4 = var1.SUCCEEDED;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 19;
                    var4 = var6[var4];
                    var7 = var5.bind(var1)(var4);
                    var4 = var7.pop;
                    var4 = var4.bind(var7)();
                    var4 = 20;
                    var4 = var6[var4];
                    var7 = var5.bind(var1)(var4);
                    var5 = var7.openLazy;
                    var4 = {};
                    var8 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 22;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 21;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure5_slot0 = var2;
                            var1 = function(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    var4 = _closure1_slot13;
                                    var3 = _closure5_slot0;
                                    var2 = {};
                                    var5 = _closure2_slot1;
                                    var5 = var5.gift_style;
                                    var7 = null;
                                    if(!(var7 == var5)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                                    var6 = _closure1_slot11;
                                    var5 = var6.STANDARD_BOX;
case 11:
                                    var2['giftStyle'] = var5;
                                    var1 = _closure2_slot4;
                                    var2['giftBadgeProgress'] = var1;
                                    var8 = arg1;
                                    var9 = var2;
                                    var1 = copyDataProperties(var9, var8);
                                    var1 = undefined;
                                    var1 = var4.bind(var1)(var3, var2);
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4['importer'] = var8;
                    var4 = var5.bind(var7)(var4);
                    var5 = _closure1_slot0;
                    var4 = 23;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isIOS;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 24;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.track;
                    var3 = _closure1_slot8;
                    var3 = var3.PAYMENT_FLOW_SUCCEEDED;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
case 13:
                    return var1;
                }
            };
            var1['onPurchaseComplete'] = var3;
            var3 = function onPurchaseError() {
                var5 = _closure2_slot6;
                var1 = _closure1_slot16;
                var4 = var1.FAILED;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 24;
                var4 = var6[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.track;
                var3 = _closure1_slot8;
                var3 = var3.PAYMENT_FLOW_FAILED;
                var2 = _closure2_slot2;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1['onPurchaseError'] = var3;
            var3 = function onPurchasePending() {
                var1 = undefined;
                return var1;
            };
            var1['onPurchasePending'] = var3;
            var3 = {};
            var7 = true;
            var3['isGift'] = var7;
            var3['options'] = var6;
            var1['giftParams'] = var3;
            var1 = var2.bind(var4)(var1);
            _closure2_slot7 = var1;
            var6 = _closure1_slot4;
            var3 = var6.useEffect;
            var2 = function() {
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = _closure2_slot5;
                        var3 = _closure1_slot16;
                        var3 = var3.SUCCEEDED;
                        if(!(var4 !== var3)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 24;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.track;
                        var2 = _closure1_slot8;
                        var2 = var2.PAYMENT_FLOW_CANCELED;
                        var1 = _closure2_slot2;
                        var1 = var3.bind(var4)(var2, var1);
case 15:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var10.container;
            var1['style'] = var6;
            var6 = null;
            if(!var5) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = var14 != var13;
            var6 = null;
            if(!var5) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 25;
            var5 = var17[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['giftsToNextTier'] = var16;
            var16 = var13.name;
            var17 = var14 != var16;
            var14 = '';
            if(!var17) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var14 = var16;
case 20:
            var5['nextTierName'] = var14;
            var13 = var13.simple_icon_url;
            var5['nextTierIcon'] = var13;
            var6 = var8.bind(var4)(var7, var5);
case 17:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 26;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.TextWithIOSLinkWorkaround;
            var6 = {};
            var16 = 'text-xs/normal';
            var6['variant'] = var16;
            var10 = var10.disclaimer;
            var6['style'] = var10;
            var10 = 27;
            var16 = var14[var10];
            var16 = var13.bind(var4)(var16);
            var19 = var16.intl;
            var18 = var19.format;
            var16 = var14[var10];
            var16 = var13.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.rsEdd2;
            var16 = {};
            var20 = var14[var10];
            var20 = var13.bind(var4)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var20 = var14[var10];
            var20 = var13.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.ouo4FK;
            var20 = var21.bind(var22)(var20);
            var16['buyButtonLabel'] = var20;
            var20 = _closure1_slot9;
            var20 = var20.PAID_TERMS;
            var16['paidServiceTermURL'] = var20;
            var20 = _closure1_slot9;
            var20 = var20.PAID_TERMS_VIRTUAL_GOODS;
            var16['virtualGoodsURL'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var6['children'] = var16;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot13;
            var6 = 28;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var6['disabled'] = var15;
            var11 = _closure1_slot16;
            var11 = var11.PURCHASING;
            var11 = var12 === var11;
            var6['loading'] = var11;
            var11 = 'active';
            var6['variant'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.ouo4FK;
            var10 = var11.bind(var12)(var10);
            var6['text'] = var10;
            var9 = function onPress() {
                var4 = _closure2_slot6;
                var1 = _closure1_slot16;
                var3 = var1.PURCHASING;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot7;
                var2 = var2.bind(var1)();
                return var1;
            };
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useNativeCheckoutStore;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var4 = var4.MarketingURLs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GiftingOrigin;
    var _closure1_slot10 = var7;
    var4 = var4.PremiumGiftStyles;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PaymentGateways;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 10;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var8 = var7.PX_12;
        var7 = arg1;
        var7 = var8 + var7;
        var2['paddingBottom'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_12;
        var2['paddingTop'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_8;
        var2['gap'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.shadows;
        var9 = var3.SHADOW_TOP_HIGH;
        var10 = var2;
        var3 = copyDataProperties(var10, var9);
        var1['container'] = var2;
        var2 = {};
        var3 = true;
        var2['includeFontPadding'] = var3;
        var1['disclaimer'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'not_started';
    var4['NOT_STARTED'] = var7;
    var7 = 'purchasing';
    var4['PURCHASING'] = var7;
    var7 = 'succeeded';
    var4['SUCCEEDED'] = var7;
    var7 = 'failed';
    var4['FAILED'] = var7;
    var _closure1_slot16 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function WrappedCollectiblesShopGiftPurchaseSection(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var5 = var2.product;
            var15 = var2.isPurchaseDisabled;
            var14 = var2.giftOptions;
            var13 = var2.baseAnalyticsFields;
            var12 = var2.giftingOrigin;
            var7 = var2.onGiftModalDismiss;
            var _closure2_slot0 = var7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 29;
            var2 = var10[var2];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var6 = var2.GiftACOMOrderExperiment;
            var3 = var6.useConfig;
            var2 = {};
            var16 = 'WrappedCollectiblesShopGiftPurchaseSection';
            var2['location'] = var16;
            var2 = var3.bind(var6)(var2);
            var2 = var2.enabled;
            var3 = 30;
            var3 = var10[var3];
            var11 = var8.bind(var4)(var3);
            var6 = var11.useAndroidShopOrdersEnabled;
            var3 = {};
            var3['location'] = var16;
            var3 = var6.bind(var11)(var3);
            var6 = 23;
            var6 = var10[var6];
            var8 = var8.bind(var4)(var6);
            var6 = var8.isIOS;
            var8 = var6.bind(var8)();
            var6 = _closure1_slot12;
            if(var8) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var17 = var6.GOOGLE;
            _fun0006_ip = 24; continue _fun0006;
case 22:
            var17 = var6.APPLE_ADVANCED_COMMERCE;
case 24:
            var6 = _closure1_slot12;
            var6 = var6.APPLE_ADVANCED_COMMERCE;
            var16 = var17 === var6;
            if(!var16) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var16 = var2;
case 25:
            if(var16) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var2 = _closure1_slot12;
            var2 = var2.GOOGLE;
            var2 = var17 === var2;
            if(!var2) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var2 = var3;
case 29:
            var16 = var2;
case 27:
            var6 = _closure1_slot4;
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.closeShopGiftModal;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)();
case 31:
                    return var1;
                }
            };
            var10 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 32;
            var1 = var18[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.NativePaymentContextProvider;
            var1 = {};
            var6 = new Array(0);
            var1['skuIDs'] = var6;
            var11 = null;
            var1['activeSubscription'] = var11;
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var6 = 33;
            var6 = var18[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['paymentGateway'] = var17;
            var6['orderRequired'] = var16;
            var17 = var5.skuId;
            var16 = new Array(1);
            var16[0] = var17;
            var6['skuIds'] = var16;
            var16 = true;
            var6['isGift'] = var16;
            var6['activeSubscription'] = var11;
            var6['onOrderRetryCancellation'] = var10;
            var11 = _closure1_slot13;
            var10 = _closure1_slot17;
            var9 = {};
            var9['product'] = var5;
            var9['isPurchaseDisabled'] = var15;
            var9['giftOptions'] = var14;
            var9['baseAnalyticsFields'] = var13;
            var9['giftingOrigin'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var5 = var5.skuId;
            var5 = var8.bind(var4)(var7, var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();