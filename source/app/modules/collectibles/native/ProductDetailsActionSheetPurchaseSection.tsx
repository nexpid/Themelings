// app/modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot7 = var7;
    var4 = var4.ShopCtaEnum;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MarketingURLs;
    var _closure1_slot9 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MainTabsNavigatorScreens;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingTop'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['gap'] = var13;
    var4['purchaseSection'] = var9;
    var9 = {};
    var13 = 0.75;
    var9['opacity'] = var13;
    var4['disclaimer'] = var9;
    var9 = {};
    var13 = 'row';
    var9['flexDirection'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var9['gap'] = var11;
    var4['buttonContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['orbsButtonLabel'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var4['orbsButtonText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = function GiftButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.product;
            var _closure2_slot0 = var2;
            var2 = var1.analyticsLocations;
            var _closure2_slot1 = var2;
            var10 = var1.variant;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = 'primary';
case 2:
            var1 = var1.onTrackPress;
            var _closure2_slot2 = var1;
            var3 = _closure1_slot12;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.IconButton;
            var1 = {};
            var7 = 'lg';
            var1['size'] = var7;
            var1['variant'] = var10;
            var7 = 11;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.GiftIcon;
            var7 = {};
            var9 = 'md';
            var7['size'] = var9;
            var9 = 'primary';
            if(!(var9 !== var10)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 9;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.TEXT_STRONG;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.colors;
            var9 = var10.WHITE;
case 6:
            var7['color'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var1['icon'] = var7;
            var6 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot8;
                    var2 = var1.SEND_AS_GIFT;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 7:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var3 = var4[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.hideActionSheet;
                    var3 = _closure1_slot0;
                    var2 = 13;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.PRODUCT_DETAILS_ACTION_SHEET_KEY;
                    var2 = var6.bind(var7)(var2);
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openShopGiftModal;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.skuId;
                    var2['skuId'] = var6;
                    var5 = _closure2_slot1;
                    var2['analyticsLocations'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 15;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.PEjaCx;
            var5 = var6.bind(var7)(var5);
            var1['accessibilityLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = function VCButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var12 = var1.balance;
            var _closure2_slot0 = var12;
            var13 = var1.product;
            var _closure2_slot1 = var13;
            var3 = var1.isPremiumUser;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0003_ip = 9; continue _fun0003 }
case 7:
            var3 = false;
case 9:
            var1 = var1.onTrackPress;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var1 = _closure1_slot14;
            var6 = var1.bind(var5)();
            _closure2_slot3 = var6;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 16;
            var1 = var7[var1];
            var2 = var4.bind(var5)(var1);
            var1 = var2.useVirtualCurrencyData;
            var1 = var1.bind(var2)(var13, var3);
            var2 = var1.enabled;
            var16 = var1.price;
            var1 = var1.canAfford;
            var3 = 17;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useProductDisableState;
            var3 = var13.skuId;
            var3 = var4.bind(var7)(var3);
            var9 = var3.isDisabled;
            if(var9) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var9 = !var1;
case 10:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 18;
            var1 = var7[var1];
            var10 = var4.bind(var5)(var1);
            var3 = var10.useOrbsRedeemShortText;
            var1 = 'collectibles_shop_product_details';
            var3 = var3.bind(var10)(var1);
            var1 = 19;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useNavigation;
            var14 = var1.bind(var4)();
            _closure2_slot4 = var14;
            var4 = _closure1_slot1;
            var1 = 20;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.analyticsLocations;
            _closure2_slot5 = var1;
            var10 = _closure1_slot4;
            var7 = var10.useCallback;
            var4 = new Array(4);
            var4[0] = var14;
            var4[1] = var13;
            var4[2] = var12;
            var4[3] = var1;
            var1 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var4 = var6.hideActionSheet;
                var4 = var4.bind(var6)();
                var4 = 21;
                var4 = var2[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.pushLazy;
                var4 = _closure1_slot0;
                var3 = 23;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 22;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot1;
                var7 = var7.skuId;
                var3['skuId'] = var7;
                var2 = _closure2_slot5;
                var3['analyticsLocations'] = var2;
                var2 = function onCheckoutSuccess(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var11 = var1.entitlements;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var4 = var2[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.fetchCollectiblesPurchases;
                        var4 = var4.bind(var5)();
                        var5 = _closure1_slot1;
                        var4 = 21;
                        var2 = var2[var4];
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.popWithKey;
                        var2 = 'ORB_CHECKOUT_MODAL';
                        var2 = var5.bind(var6)(var2);
                        var2 = _closure2_slot1;
                        var5 = var2.skuId;
                        var2 = _closure1_slot7;
                        var2 = var2.ORB_PROFILE_BADGE;
                        if(!(var5 !== var2)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                        var2 = _closure2_slot1;
                        var5 = var2.skuId;
                        var2 = _closure1_slot7;
                        var2 = var2.FRACTIONAL_PREMIUM;
                        if(!(var5 !== var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 27;
                        var2 = var6[var2];
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.open;
                        var2 = {'product': null, 'useCategoryImage': true, 'showOrbBalancePill': true};
                        var9 = _closure2_slot1;
                        var2['product'] = var9;
                        var9 = _closure2_slot0;
                        var2['orbBalancePriorToPurchase'] = var9;
                        var2 = var5.bind(var6)(var2);
                        _fun0004_ip = 16; continue _fun0004;
case 14:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 12;
                        var5 = var2[var5];
                        var10 = var6.bind(var1)(var5);
                        var9 = var10.openLazy;
                        var6 = _closure1_slot0;
                        var5 = 23;
                        var5 = var2[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = 26;
                        var5 = var2[var5];
                        var2 = var2.paths;
                        var6 = var6.bind(var1)(var5, var2);
                        var5 = {};
                        var2 = 0;
                        var12 = var11[var2];
                        var2 = null;
                        var13 = var2 == var12;
                        var11 = undefined;
                        if(var13) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var11 = var12.consumed;
case 17:
                        var2 = var2 != var11;
                        if(!var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var2 = var11;
case 19:
                        var5['consumed'] = var2;
                        var2 = function onPressExplorePerks() {
                            var4 = _closure2_slot4;
                            var3 = var4.navigate;
                            var2 = _closure1_slot10;
                            var2 = var2.PREMIUM;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            return var1;
                        };
                        var5['onPressExplorePerks'] = var2;
                        var2 = function onPressViewCredits() {
                            var4 = _closure2_slot4;
                            var3 = var4.navigate;
                            var2 = _closure1_slot10;
                            var2 = var2.PREMIUM_MANAGE_PLAN;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            return var1;
                        };
                        var5['onPressViewCredits'] = var2;
                        var2 = 'FractionalNitroCollectedActionSheet';
                        var2 = var9.bind(var10)(var6, var2, var5);
                        _fun0004_ip = 16; continue _fun0004;
case 12:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = var2[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.pushLazy;
                        var4 = _closure1_slot0;
                        var3 = 23;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 25;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var3 = {};
                        var2 = 'ORB_BADGE_COLLECTED_MODAL';
                        var3['modalKey'] = var2;
                        var8 = function onPressViewBadge() {
                            var4 = _closure2_slot4;
                            var3 = var4.navigate;
                            var1 = _closure1_slot11;
                            var2 = var1.YOU;
                            var1 = {};
                            var5 = true;
                            var1['showOrbsBadgeCoachmark'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var3['onPressViewBadge'] = var8;
                        var7 = _closure2_slot0;
                        var3['orbBalancePriorToPurchase'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
case 16:
                        return var1;
                    }
                };
                var3['onCheckoutSuccess'] = var2;
                var2 = 'ORB_CHECKOUT_MODAL';
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var1 = var7.bind(var10)(var1, var4);
            _closure2_slot6 = var1;
            var1 = null;
            if(!(var1 != var16)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            if(!var2) { _fun0003_ip = 21; continue _fun0003 }
case 23:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var2 = var4.bind(var5)(var2);
            var4 = var2.colors;
            if(var9) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var2 = var4.WHITE;
            _fun0003_ip = 26; continue _fun0003;
case 24:
            var2 = var4.INTERACTIVE_TEXT_ACTIVE;
case 26:
            _closure2_slot7 = var2;
            var2 = 'white';
            if(!var9) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = 'interactive-text-active';
case 27:
            _closure2_slot8 = var2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 15;
            var2 = var2[var10];
            var2 = var4.bind(var5)(var2);
            var7 = var2.intl;
            var4 = var7.format;
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var12.bind(var5)(var2);
            var2 = var2.t;
            if(var3) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var3 = var2.lOtBOI;
            _fun0003_ip = 31; continue _fun0003;
case 29:
            var3 = var2.JC15qj;
case 31:
            var2 = {};
            var12 = var16.amount;
            var2['orbPrice'] = var12;
            var12 = function orbIconHook() {
                var5 = _closure1_slot12;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 28;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.OrbsIcon;
                var2 = {};
                var1 = 'sm';
                var2['size'] = var1;
                var1 = _closure2_slot7;
                var2['color'] = var1;
                var1 = 'orbs-icon';
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var2['orbIconHook'] = var12;
            var3 = var4.bind(var7)(var3, var2);
            var2 = global;
            var4 = var2.Array;
            var2 = var4.isArray;
            var2 = var2.bind(var4)(var3);
            var13 = var3;
            if(var2) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var2 = new Array(1);
            var2[0] = var3;
            var13 = var2;
case 32:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var6.orbsButtonLabel;
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var10];
            var12 = var7.bind(var5)(var12);
            var15 = var12.intl;
            var14 = var15.formatToPlainString;
            var10 = var11[var10];
            var10 = var7.bind(var5)(var10);
            var10 = var10.t;
            var12 = var10.yi41qQ;
            var10 = {};
            var16 = var16.amount;
            var10['orbPrice'] = var16;
            var10 = var14.bind(var15)(var12, var10);
            var2['accessibilityLabel'] = var10;
            var12 = var13.map;
            var10 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var4 = typeof var2;
                    var1 = 'string';
                    if(!(var1 !== var4)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var3 = 'number';
                    var1 = var2;
                    if(!(var3 === var4)) { _fun0005_ip = 13; continue _fun0005 }
case 34:
                    var6 = _closure1_slot12;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 29;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.Text;
                    var3 = {};
                    var8 = _closure2_slot3;
                    var8 = var8.orbsButtonText;
                    var3['style'] = var8;
                    var8 = 'text-md/semibold';
                    var3['variant'] = var8;
                    var7 = _closure2_slot8;
                    var3['color'] = var7;
                    var3['children'] = var2;
                    var2 = arg2;
                    var1 = var6.bind(var5)(var4, var3, var2);
case 13:
                    return var1;
                }
            };
            var10 = var12.bind(var13)(var10);
            var2['children'] = var10;
            var10 = var4.bind(var5)(var3, var2);
            var2 = {};
            var6 = var6.buttonContainer;
            var2['style'] = var6;
            var6 = 30;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.BaseTextButton;
            var6 = {};
            var11 = false;
            var6['loading'] = var11;
            var6['textElement'] = var10;
            var8 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 7; continue _fun0006 }
case 8:
                    var4 = _closure2_slot2;
                    var2 = _closure1_slot8;
                    var3 = var2.BUY_WITH_ORBS;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 7:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var6['onPress'] = var8;
            var6['disabled'] = var9;
            var8 = 'lg';
            var6['size'] = var8;
            var8 = 'primary';
            if(!var9) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var8 = 'secondary';
case 36:
            var6['variant'] = var8;
            var8 = true;
            var6['grow'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 21:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var4 = function PurchaseDisclaimer(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var5 = var1.product;
            var11 = var1.buyButtonLabel;
            var1 = _closure1_slot14;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var3 = _closure1_slot12;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 31;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.TextWithIOSLinkWorkaround;
            var1 = {'style': null, 'variant': 'text-xxs/normal', 'color': 'interactive-text-active'};
            var6 = var6.disclaimer;
            var1['style'] = var6;
            var6 = var5.type;
            var5 = 32;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.EXTERNAL_SKU;
            var5 = var6 !== var5;
            if(!var5) { _fun0007_ip = 14; continue _fun0007 }
case 38:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 15;
            var8 = var12[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.iIglwJ;
            var6 = {};
            var6['buyButtonLabel'] = var11;
            var10 = _closure1_slot9;
            var10 = var10.PAID_TERMS;
            var6['paidServiceTermURL'] = var10;
            var5 = var8.bind(var9)(var7, var6);
case 14:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var4 = 47;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var2 = var1.product;
            var _closure2_slot0 = var2;
            var16 = var1.analyticsLocations;
            var _closure2_slot1 = var16;
            var15 = var1.onBuy;
            var1 = var1.onTrackPress;
            var _closure2_slot2 = var1;
            var4 = undefined;
            var _closure2_slot18 = var4;
            var1 = _closure1_slot14;
            var6 = var1.bind(var4)();
            var _closure2_slot3 = var6;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 33;
            var1 = var8[var1];
            var3 = var11.bind(var4)(var1);
            var1 = var3.useCurrentUser;
            var7 = var1.bind(var3)();
            var1 = 34;
            var1 = var8[var1];
            var3 = var11.bind(var4)(var1);
            var1 = var3.useProductPurchaseState;
            var1 = var1.bind(var3)(var2);
            var3 = var1.isPurchased;
            var _closure2_slot4 = var3;
            var1 = var1.isPartiallyOwnedBundle;
            var _closure2_slot5 = var1;
            var1 = 35;
            var1 = var8[var1];
            var13 = var11.bind(var4)(var1);
            var12 = var13.useStateFromStoresArray;
            var1 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var1;
            var3 = new Array(1);
            var3[0] = var2;
            var1 = function() {
                var1 = _closure1_slot6;
                var3 = var1.isClaiming;
                var1 = _closure2_slot0;
                var2 = var1.skuId;
                var1 = new Array(1);
                var2 = var3 === var2;
                var1[0] = var2;
                return var1;
            };
            var10 = var12.bind(var13)(var10, var1, var3);
            var3 = _closure1_slot3;
            var1 = 1;
            var3 = var3.bind(var4)(var10, var1);
            var1 = 0;
            var1 = var3[var1];
            var _closure2_slot6 = var1;
            var13 = _closure1_slot1;
            var1 = 36;
            var1 = var8[var1];
            var3 = var13.bind(var4)(var1);
            var1 = var3.canUseCollectibles;
            var14 = var1.bind(var3)(var7);
            var _closure2_slot7 = var14;
            var7 = 37;
            var1 = var8[var7];
            var3 = var11.bind(var4)(var1);
            var1 = var3.isPremiumCollectiblesProduct;
            var1 = var1.bind(var3)(var2);
            var _closure2_slot8 = var1;
            var3 = var8[var7];
            var10 = var11.bind(var4)(var3);
            var3 = var10.isFreeCollectiblesProduct;
            var10 = var3.bind(var10)(var2);
            var _closure2_slot9 = var10;
            var3 = 38;
            var3 = var8[var3];
            var12 = var11.bind(var4)(var3);
            var3 = var12.isOrbsExclusiveProduct;
            var3 = var3.bind(var12)(var2);
            var _closure2_slot10 = var3;
            var12 = 39;
            var12 = var8[var12];
            var17 = var11.bind(var4)(var12);
            var12 = var17.useFetchVirtualCurrencyBalance;
            var12 = var12.bind(var17)();
            var12 = var12.balance;
            var _closure2_slot11 = var12;
            var12 = 16;
            var12 = var8[var12];
            var17 = var11.bind(var4)(var12);
            var12 = var17.useVirtualCurrencyData;
            var12 = var12.bind(var17)(var2, var14);
            var12 = var12.canAfford;
            var _closure2_slot12 = var12;
            var12 = 40;
            var12 = var8[var12];
            var18 = var11.bind(var4)(var12);
            var17 = var18.useHandleUseNow;
            var12 = {};
            var12['product'] = var2;
            var12 = var17.bind(var18)(var12);
            var17 = var12.handleUseNow;
            var _closure2_slot13 = var17;
            var12 = var12.isApplying;
            var _closure2_slot14 = var12;
            var12 = 41;
            var12 = var8[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['product'] = var2;
            var12['analyticsLocations'] = var16;
            var12['onBuy'] = var15;
            var12 = var13.bind(var4)(var12);
            var13 = var12.handleBuyNow;
            var _closure2_slot15 = var13;
            var12 = var12.isBuying;
            var _closure2_slot16 = var12;
            var12 = 42;
            var12 = var8[var12];
            var15 = var11.bind(var4)(var12);
            var13 = var15.useHandleClaim;
            var12 = {};
            var12['product'] = var2;
            var12 = var13.bind(var15)(var12);
            var12 = var12.handleClaim;
            var _closure2_slot17 = var12;
            var12 = var8[var7];
            var13 = var11.bind(var4)(var12);
            var12 = var13.getDefaultPriceSetAssignmentPurchaseType;
            var12 = var12.bind(var13)(var14);
            var8 = var8[var7];
            var11 = var11.bind(var4)(var8);
            var8 = var11.extractPriceByPurchaseTypes;
            var8 = var8.bind(var11)(var2, var12);
            var1 = !var1;
            if(!var1) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            var1 = !var10;
case 39:
            if(!var1) { _fun0008_ip = 41; continue _fun0008 }
case 42:
            var1 = !var3;
case 41:
            if(!var1) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var3 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 32;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.EXTERNAL_SKU;
            var1 = var3 !== var2;
case 43:
            if(!var1) { _fun0008_ip = 45; continue _fun0008 }
case 46:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var7 = var3.bind(var4)(var2);
            var3 = var7.shouldHideGiftingForCurrency;
            var2 = null;
            var10 = var2 == var8;
            var2 = undefined;
            if(var10) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            var2 = var8.currency;
case 47:
            var2 = var3.bind(var7)(var2);
            var1 = !var2;
case 45:
            if(!var1) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 43;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isCollectibleGiftingSupported;
            var1 = var2.bind(var3)();
case 49:
            _closure2_slot18 = var1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 44;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var8 = var1.bottom;
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var6.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var10 = null;
            if(!(var10 == var8)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 9;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.spacing;
            var8 = var9.PX_16;
case 51:
            var7['paddingBottom'] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var5 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0009_ip = 55; continue _fun0009 }
case 57:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0009_ip = 55; continue _fun0009 }
case 3:
                    var4 = _closure1_slot12;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 46;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.UnlockWithNitroButton;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['onTrackPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
case 55:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0009_ip = 58; continue _fun0009 }
case 60:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 32;
                    var1 = var1[var5];
                    var4 = undefined;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.BUNDLE;
                    if(!(var2 !== var1)) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.PROFILE_EFFECT;
                    if(!(var2 !== var1)) { _fun0009_ip = 39; continue _fun0009 }
case 64:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.NAMEPLATE;
                    if(!(var2 !== var1)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.AVATAR_DECORATION;
                    if(!(var2 !== var1)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.PROFILE_FRAME;
                    if(!(var2 !== var1)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var2 = var6[var1];
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.AQ0Veg;
                    var12 = var2.bind(var3)(var1);
                    _fun0009_ip = 71; continue _fun0009;
case 69:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var2 = var6[var1];
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.BlSW1e;
                    var12 = var2.bind(var3)(var1);
case 71:
                    _fun0009_ip = 72; continue _fun0009;
case 67:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var2 = var6[var1];
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.AQ0Veg;
                    var12 = var2.bind(var3)(var1);
case 72:
                    _fun0009_ip = 73; continue _fun0009;
case 65:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var2 = var6[var1];
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.H3vhqU;
                    var12 = var2.bind(var3)(var1);
case 73:
                    _fun0009_ip = 74; continue _fun0009;
case 39:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var2 = var6[var1];
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.kAeDcK;
                    var12 = var2.bind(var3)(var1);
case 74:
                    _fun0009_ip = 75; continue _fun0009;
case 62:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var2 = var6[var1];
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.V1AWw0;
                    var12 = var2.bind(var3)(var1);
case 75:
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var5 = _closure2_slot3;
                    var5 = var5.purchaseSection;
                    var1['style'] = var5;
                    var6 = _closure2_slot12;
                    if(!var6) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                    var9 = _closure1_slot12;
                    var8 = _closure1_slot16;
                    var5 = {};
                    var13 = _closure2_slot0;
                    var5['product'] = var13;
                    var13 = _closure2_slot7;
                    var5['isPremiumUser'] = var13;
                    var13 = _closure2_slot11;
                    var5['balance'] = var13;
                    var13 = _closure2_slot2;
                    var5['onTrackPress'] = var13;
                    var6 = var9.bind(var4)(var8, var5);
case 76:
                    var5 = new Array(4);
                    var5[0] = var6;
                    var6 = _closure2_slot10;
                    var6 = !var6;
                    if(!var6) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                    var13 = _closure1_slot13;
                    var9 = _closure1_slot5;
                    var8 = {};
                    var14 = _closure2_slot3;
                    var14 = var14.buttonContainer;
                    var8['style'] = var14;
                    var16 = _closure1_slot12;
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var14 = 45;
                    var14 = var17[var14];
                    var14 = var15.bind(var4)(var14);
                    var15 = var14.Button;
                    var14 = {};
                    var17 = _closure2_slot16;
                    var14['loading'] = var17;
                    var14['text'] = var12;
                    var17 = function onPress() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var3 = _closure2_slot2;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0010_ip = 7; continue _fun0010 }
case 8:
                            var4 = _closure2_slot2;
                            var2 = _closure1_slot8;
                            var3 = var2.BUY_WITH_FIAT;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
case 7:
                            var2 = _closure2_slot15;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            return var1;
                        }
                    };
                    var14['onPress'] = var17;
                    var17 = _closure2_slot5;
                    var14['disabled'] = var17;
                    var18 = _closure2_slot12;
                    var19 = 'primary';
                    var17 = var19;
                    if(!var18) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                    var17 = 'secondary';
case 80:
                    var14['variant'] = var17;
                    var17 = 'lg';
                    var14['size'] = var17;
                    var17 = true;
                    var14['grow'] = var17;
                    var15 = var16.bind(var4)(var15, var14);
                    var14 = new Array(2);
                    var14[0] = var15;
                    var15 = _closure2_slot18;
                    if(!var15) { _fun0009_ip = 82; continue _fun0009 }
case 83:
                    var18 = _closure1_slot12;
                    var17 = _closure1_slot15;
                    var16 = {};
                    var20 = _closure2_slot0;
                    var16['product'] = var20;
                    var20 = _closure2_slot1;
                    var16['analyticsLocations'] = var20;
                    var20 = _closure2_slot12;
                    if(!var20) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                    var19 = 'secondary';
case 84:
                    var16['variant'] = var19;
                    var19 = _closure2_slot2;
                    var16['onTrackPress'] = var19;
                    var15 = var18.bind(var4)(var17, var16);
case 82:
                    var14[1] = var15;
                    var8['children'] = var14;
                    var6 = var13.bind(var4)(var9, var8);
case 78:
                    var5[1] = var6;
                    var6 = _closure2_slot12;
                    var6 = !var6;
                    if(!var6) { _fun0009_ip = 86; continue _fun0009 }
case 87:
                    var13 = _closure1_slot12;
                    var9 = _closure1_slot16;
                    var8 = {};
                    var14 = _closure2_slot0;
                    var8['product'] = var14;
                    var14 = _closure2_slot7;
                    var8['isPremiumUser'] = var14;
                    var14 = _closure2_slot11;
                    var8['balance'] = var14;
                    var14 = _closure2_slot2;
                    var8['onTrackPress'] = var14;
                    var6 = var13.bind(var4)(var9, var8);
case 86:
                    var5[2] = var6;
                    var6 = _closure2_slot10;
                    var6 = !var6;
                    if(!var6) { _fun0009_ip = 88; continue _fun0009 }
case 89:
                    var9 = _closure1_slot12;
                    var8 = _closure1_slot17;
                    var7 = {};
                    var13 = _closure2_slot0;
                    var7['product'] = var13;
                    var7['buyButtonLabel'] = var12;
                    var6 = var9.bind(var4)(var8, var7);
case 88:
                    var5[3] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 58:
                    var4 = _closure1_slot12;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 45;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.Button;
                    var1 = {};
                    var5 = 15;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.zp6caO;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var5 = _closure2_slot6;
                    var1['loading'] = var5;
                    var5 = function onPress() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure2_slot2;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0011_ip = 7; continue _fun0011 }
case 8:
                            var4 = _closure2_slot2;
                            var2 = _closure1_slot8;
                            var3 = var2.ADD_TO_COLLECTION;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
case 7:
                            var2 = _closure2_slot17;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            return var1;
                        }
                    };
                    var1['onPress'] = var5;
                    var5 = 'lg';
                    var1['size'] = var5;
                    var5 = true;
                    var1['grow'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
case 53:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 32;
                    var1 = var4[var1];
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.EXTERNAL_SKU;
                    var1 = var2 !== var1;
                    if(!var1) { _fun0009_ip = 90; continue _fun0009 }
case 91:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var6 = _closure2_slot3;
                    var6 = var6.buttonContainer;
                    var2['style'] = var6;
                    var9 = _closure1_slot12;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var6 = 45;
                    var6 = var16[var6];
                    var6 = var15.bind(var5)(var6);
                    var7 = var6.Button;
                    var6 = {};
                    var12 = _closure2_slot14;
                    var6['loading'] = var12;
                    var12 = 15;
                    var13 = var16[var12];
                    var13 = var15.bind(var5)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var16[var12];
                    var12 = var15.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12.MAS7uK;
                    var12 = var13.bind(var14)(var12);
                    var6['text'] = var12;
                    var10 = function onPress() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var3 = _closure2_slot2;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0012_ip = 7; continue _fun0012 }
case 8:
                            var4 = _closure2_slot2;
                            var2 = _closure1_slot8;
                            var3 = var2.USE_NOW;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
case 7:
                            var2 = _closure2_slot13;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            return var1;
                        }
                    };
                    var6['onPress'] = var10;
                    var10 = 'lg';
                    var6['size'] = var10;
                    var10 = true;
                    var6['grow'] = var10;
                    var7 = var9.bind(var5)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = _closure2_slot18;
                    if(!var7) { _fun0009_ip = 92; continue _fun0009 }
case 93:
                    var10 = _closure1_slot12;
                    var9 = _closure1_slot15;
                    var8 = {};
                    var12 = _closure2_slot0;
                    var8['product'] = var12;
                    var12 = _closure2_slot1;
                    var8['analyticsLocations'] = var12;
                    var11 = _closure2_slot2;
                    var8['onTrackPress'] = var11;
                    var7 = var10.bind(var5)(var9, var8);
case 92:
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 90:
                    return var1;
                }
            };
            var5 = var5.bind(var4)();
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();