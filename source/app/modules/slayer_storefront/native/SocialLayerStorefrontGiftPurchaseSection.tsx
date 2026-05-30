// app/modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function SocialLayerStorefrontGiftPurchaseSection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var18 = var2.skuId;
            var _closure2_slot0 = var18;
            var10 = var2.sku;
            var _closure2_slot1 = var10;
            var12 = var2.isPurchaseDisabled;
            var1 = var2.giftOptions;
            var _closure2_slot2 = var1;
            var3 = var2.giftingOrigin;
            var _closure2_slot3 = var3;
            var5 = var2.analyticsLocations;
            var _closure2_slot4 = var5;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.insets;
            var3 = _closure1_slot11;
            var2 = var2.bottom;
            var15 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var2 = 10;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.useGetOrFetchApplication;
            var14 = null;
            var8 = var14 == var10;
            var2 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var10.applicationId;
case 2:
            var13 = var3.bind(var7)(var2);
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var11 = var3.bind(var4)(var2);
            var8 = var11.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getUser;
                var1 = _closure2_slot2;
                var1 = var1.recipient_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var8.bind(var11)(var3, var2);
            _closure2_slot5 = var2;
            var3 = _closure1_slot1;
            var2 = 12;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.v4;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var3.bind(var4)(var2);
            _closure2_slot6 = var7;
            var11 = _closure1_slot4;
            var8 = var11.useMemo;
            var3 = new Array(6);
            var3[0] = var5;
            var3[1] = var18;
            var16 = var14 == var10;
            var2 = undefined;
            if(var16) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var10.type;
case 4:
            var3[2] = var2;
            var16 = var14 == var10;
            var2 = undefined;
            if(var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var10.productLine;
case 6:
            var3[3] = var2;
            var16 = var14 == var10;
            var2 = undefined;
            if(var16) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var10.applicationId;
case 8:
            var3[4] = var2;
            var3[5] = var7;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {'is_gift': true, 'location_stack': null, 'payment_type': 'sku'};
                    var3 = _closure2_slot4;
                    var1['location_stack'] = var3;
                    var3 = _closure2_slot0;
                    var1['sku_id'] = var3;
                    var3 = _closure2_slot1;
                    var5 = null;
                    var6 = var5 == var3;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var6 = _closure2_slot1;
                    var4 = var6.type;
case 10:
                    var1['sku_type'] = var4;
                    var4 = _closure2_slot1;
                    var6 = var5 == var4;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var6 = _closure2_slot1;
                    var4 = var6.productLine;
case 12:
                    var1['sku_product_line'] = var4;
                    var4 = _closure2_slot1;
                    var4 = var5 == var4;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = _closure2_slot1;
                    var3 = var4.applicationId;
case 14:
                    var1['application_id'] = var3;
                    var2 = _closure2_slot6;
                    var1['load_id'] = var2;
                    return var1;
                }
            };
            var2 = var8.bind(var11)(var2, var3);
            _closure2_slot7 = var2;
            var11 = _closure1_slot4;
            var8 = var11.useState;
            var3 = false;
            var11 = var8.bind(var11)(var3);
            var8 = _closure1_slot3;
            var3 = 2;
            var8 = var8.bind(var4)(var11, var3);
            var3 = 0;
            var11 = var8[var3];
            var3 = 1;
            var3 = var8[var3];
            _closure2_slot8 = var3;
            var16 = _closure1_slot4;
            var8 = var16.useRef;
            var3 = 'not_started';
            var3 = var8.bind(var16)(var3);
            _closure2_slot9 = var3;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 14;
            var3 = var17[var3];
            var19 = var16.bind(var4)(var3);
            var8 = var19.useUnmountEffect;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = 'pending';
                    if(!(var2 === var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 15;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.track;
                    var2 = _closure1_slot7;
                    var2 = var2.PAYMENT_FLOW_CANCELED;
                    var1 = _closure2_slot7;
                    var1 = var3.bind(var4)(var2, var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var19)(var3);
            var19 = _closure1_slot4;
            var8 = var19.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = 'pending';
                    if(!(var2 === var3)) { _fun0004_ip = 18; continue _fun0004 }
case 17:
                    var3 = _closure2_slot9;
                    var2 = 'failed';
                    var3['current'] = var2;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 15;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.track;
                    var2 = _closure1_slot7;
                    var3 = var2.PAYMENT_FLOW_FAILED;
                    var2 = _closure2_slot7;
                    var2 = var4.bind(var5)(var3, var2);
case 18:
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var3 = var8.bind(var19)(var2, var3);
            _closure2_slot10 = var3;
            var19 = _closure1_slot4;
            var8 = var19.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var2 = true;
                var1['isGift'] = var2;
                var2 = _closure2_slot2;
                var1['options'] = var2;
                return var1;
            };
            var8 = var8.bind(var19)(var1, var2);
            var2 = _closure1_slot1;
            var1 = 16;
            var1 = var17[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['skuId'] = var18;
            var1['sku'] = var10;
            var1['giftParams'] = var8;
            var1['analyticsLoadId'] = var7;
            var1['analyticsLocations'] = var5;
            var5 = function onPurchaseComplete() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var1 = 'succeeded';
                    var2['current'] = var1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot7;
                    var4 = var3.PAYMENT_FLOW_SUCCEEDED;
                    var3 = _closure2_slot7;
                    var3 = var5.bind(var6)(var4, var3);
                    var4 = _closure2_slot8;
                    var3 = false;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot2;
                    var3 = var3.recipient_id;
                    var8 = null;
                    var3 = var8 == var3;
                    if(var3) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var5 = _closure2_slot3;
                    var4 = _closure1_slot8;
                    var4 = var4.USER_PROFILE_WISHLIST;
                    var4 = var5 !== var4;
                    if(!var4) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var6 = _closure2_slot3;
                    var5 = _closure1_slot8;
                    var5 = var5.DM_CHANNEL_WISHLIST;
                    var4 = var6 !== var5;
case 21:
                    var3 = var4;
case 19:
                    if(var3) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 17;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'WISHLIST_GIFT_SENT';
                    var3['type'] = var6;
                    var6 = _closure2_slot0;
                    var3['skuId'] = var6;
                    var6 = _closure2_slot2;
                    var6 = var6.recipient_id;
                    var3['recipientId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 23:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 18;
                    var3 = var3[var6];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openSocialLayerStorefrontProductGiftPurchaseSuccessModal;
                    var3 = {};
                    var9 = _closure2_slot0;
                    var3['skuId'] = var9;
                    var9 = _closure2_slot1;
                    var10 = var8 == var9;
                    var9 = undefined;
                    if(var10) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var10 = _closure2_slot1;
                    var9 = var10.orbsReward;
case 25:
                    var10 = var8 != var9;
                    var8 = undefined;
                    if(!var10) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var8 = var9;
case 27:
                    var3['orbsReward'] = var8;
                    var8 = _closure2_slot5;
                    var3['recipient'] = var8;
                    var7 = _closure2_slot4;
                    var3['analyticsLocations'] = var7;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.then;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.closeSocialLayerStorefrontGiftModal;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1['onPurchaseComplete'] = var5;
            var1['onPurchaseError'] = var3;
            var3 = function onPurchasePending() {
                var1 = undefined;
                return var1;
            };
            var1['onPurchasePending'] = var3;
            var1 = var2.bind(var4)(var1);
            _closure2_slot11 = var1;
            var1 = 19;
            var2 = var17[var1];
            var2 = var16.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var17[var1];
            var1 = var16.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ouo4FK;
            var10 = var2.bind(var3)(var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var15.container;
            var1['style'] = var5;
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var5 = {};
            var15 = var15.legalCopy;
            var5['style'] = var15;
            var15 = 20;
            var15 = var17[var15];
            var16 = var16.bind(var4)(var15);
            var15 = var16.getMobileFinePrintMessageForApplication;
            var17 = var14 != var13;
            var14 = undefined;
            if(!var17) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var14 = var13;
case 29:
            var13 = {};
            var17 = true;
            var13['shouldAppendDisclaimer'] = var17;
            var15 = var15.bind(var16)(var14, var10, var13);
            var14 = var15.map;
            var13 = function(arg1, arg2) {
                var5 = _closure1_slot9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.TextWithIOSLinkWorkaround;
                var2 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var13 = var14.bind(var15)(var13);
            var5['children'] = var13;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 22;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var13 = 'active';
            var6['variant'] = var13;
            var6['disabled'] = var12;
            var6['loading'] = var11;
            var6['text'] = var10;
            var9 = function onPress() {
                var3 = _closure2_slot9;
                var1 = 'pending';
                var3['current'] = var1;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 15;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.track;
                var3 = _closure1_slot7;
                var4 = var3.PAYMENT_FLOW_STARTED;
                var3 = _closure2_slot7;
                var3 = var5.bind(var6)(var4, var3);
                var4 = _closure2_slot8;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot11;
                var4 = var3.bind(var1)();
                var3 = var4.catch;
                var2 = _closure2_slot10;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GiftingOrigin;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 8;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var8 = var7.PX_12;
        var7 = arg1;
        var7 = var8 + var7;
        var2['paddingBottom'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['paddingTop'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_8;
        var2['gap'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.shadows;
        var9 = var7.SHADOW_TOP_HIGH;
        var10 = var2;
        var7 = copyDataProperties(var10, var9);
        var1['container'] = var2;
        var2 = {'display': 'flex', 'flexDirection': 'column'};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_4;
        var2['gap'] = var3;
        var1['legalCopy'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SocialLayerStorefrontGiftPurchaseSectionWrapper(arg1) {
        var1 = arg1;
        var13 = var1.skuId;
        var12 = var1.sku;
        var11 = var1.isPurchaseDisabled;
        var10 = var1.giftOptions;
        var9 = var1.giftingOrigin;
        var8 = var1.analyticsLocations;
        var4 = _closure1_slot9;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 23;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.NativePaymentContextProvider;
        var1 = {};
        var6 = new Array(0);
        var1['skuIDs'] = var6;
        var6 = null;
        var1['activeSubscription'] = var6;
        var7 = _closure1_slot9;
        var6 = _closure1_slot12;
        var5 = {};
        var5['skuId'] = var13;
        var5['sku'] = var12;
        var5['isPurchaseDisabled'] = var11;
        var5['giftOptions'] = var10;
        var5['giftingOrigin'] = var9;
        var5['analyticsLocations'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();