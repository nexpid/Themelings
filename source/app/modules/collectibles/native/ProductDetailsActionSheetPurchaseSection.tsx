// app/modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var14 = 0;
    var4 = var6[var14];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var10 = 3;
    var4 = var6[var10];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MarketingURLs;
    var _closure1_slot8 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MainTabsNavigatorScreens;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 9;
    var15 = var6[var11];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var15;
    var15 = var6[var11];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var9['paddingHorizontal'] = var15;
    var15 = var6[var11];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var9['paddingBottom'] = var15;
    var15 = var6[var11];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var9['paddingTop'] = var15;
    var15 = 'absolute';
    var9['position'] = var15;
    var9['bottom'] = var14;
    var9['left'] = var14;
    var9['right'] = var14;
    var4['container'] = var9;
    var9 = {};
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9['borderRadius'] = var14;
    var4['button'] = var9;
    var9 = {};
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9['gap'] = var14;
    var4['purchaseSection'] = var9;
    var9 = {};
    var14 = 0.5;
    var9['opacity'] = var14;
    var4['disclaimer'] = var9;
    var9 = {};
    var14 = 40;
    var9['height'] = var14;
    var4['unlockWithNitroButton'] = var9;
    var9 = {};
    var14 = 'row';
    var9['flexDirection'] = var14;
    var11 = var6[var11];
    var11 = var13.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var9['gap'] = var11;
    var4['buttonContainer'] = var9;
    var9 = {};
    var11 = 'center';
    var9['textAlignVertical'] = var11;
    var4['orbsButtonText'] = var9;
    var9 = {};
    var11 = {};
    var11['translateY'] = var10;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = {};
    var11['translateX'] = var12;
    var10[1] = var11;
    var9['transform'] = var10;
    var4['orbsIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
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
            var3 = _closure1_slot11;
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
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 12;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var3);
                var5 = var6.hideActionSheet;
                var3 = _closure1_slot0;
                var2 = 13;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.PRODUCT_DETAILS_ACTION_SHEET_KEY;
                var2 = var5.bind(var6)(var2);
                var2 = 14;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openShopGiftModal;
                var2 = {};
                var6 = _closure2_slot0;
                var2['product'] = var6;
                var5 = _closure2_slot1;
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
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
    var _closure1_slot14 = var4;
    var4 = function VCButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.balance;
            var _closure2_slot0 = var10;
            var11 = var1.product;
            var _closure2_slot1 = var11;
            var4 = var1.isPremiumUser;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var4 = false;
case 7:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var1 = _closure1_slot13;
            var6 = var1.bind(var5)();
            _closure2_slot2 = var6;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 16;
            var1 = var8[var1];
            var3 = var7.bind(var5)(var1);
            var1 = var3.useVirtualCurrencyData;
            var1 = var1.bind(var3)(var11, var4);
            var3 = var1.enabled;
            var17 = var1.price;
            var1 = var1.canAfford;
            var4 = 17;
            var4 = var8[var4];
            var8 = var7.bind(var5)(var4);
            var7 = var8.useProductDisableState;
            var4 = var11.skuId;
            var4 = var7.bind(var8)(var4);
            var9 = var4.isDisabled;
            if(var9) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var9 = !var1;
case 9:
            _closure2_slot3 = var9;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 18;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useNavigation;
            var12 = var1.bind(var4)();
            _closure2_slot4 = var12;
            var4 = _closure1_slot1;
            var1 = 19;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.analyticsLocations;
            _closure2_slot5 = var1;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var4 = new Array(4);
            var4[0] = var12;
            var4[1] = var11;
            var4[2] = var10;
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
                var4 = 20;
                var4 = var2[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.pushLazy;
                var4 = _closure1_slot0;
                var3 = 22;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 21;
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
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var10 = var1.entitlements;
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 20;
                        var2 = var1[var4];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.popWithKey;
                        var2 = 'ORB_CHECKOUT_MODAL';
                        var2 = var5.bind(var6)(var2);
                        var2 = _closure2_slot1;
                        var5 = var2.skuId;
                        var2 = _closure1_slot7;
                        var2 = var2.ORB_PROFILE_BADGE;
                        if(!(var5 !== var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var2 = _closure2_slot1;
                        var5 = var2.skuId;
                        var2 = _closure1_slot7;
                        var2 = var2.FRACTIONAL_PREMIUM;
                        if(!(var5 !== var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 25;
                        var2 = var6[var2];
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.open;
                        var2 = {'product': null, 'useCategoryImage': true, 'showOrbBalancePill': true};
                        var9 = _closure2_slot1;
                        var2['product'] = var9;
                        var8 = _closure2_slot0;
                        var2['orbBalancePriorToPurchase'] = var8;
                        var2 = var5.bind(var6)(var2);
                        _fun0003_ip = 15; continue _fun0003;
case 13:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 12;
                        var5 = var2[var5];
                        var9 = var6.bind(var1)(var5);
                        var8 = var9.openLazy;
                        var6 = _closure1_slot0;
                        var5 = 22;
                        var5 = var2[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = 24;
                        var5 = var2[var5];
                        var2 = var2.paths;
                        var6 = var6.bind(var1)(var5, var2);
                        var5 = {};
                        var2 = 0;
                        var11 = var10[var2];
                        var2 = null;
                        var12 = var2 == var11;
                        var10 = undefined;
                        if(var12) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                        var10 = var11.consumed;
case 16:
                        var2 = var2 != var10;
                        if(!var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                        var2 = var10;
case 18:
                        var5['consumed'] = var2;
                        var2 = function onPressExplorePerks() {
                            var4 = _closure2_slot4;
                            var3 = var4.navigate;
                            var2 = _closure1_slot9;
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
                            var2 = _closure1_slot9;
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
                        var2 = var8.bind(var9)(var6, var2, var5);
                        _fun0003_ip = 15; continue _fun0003;
case 11:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = var2[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.pushLazy;
                        var4 = _closure1_slot0;
                        var3 = 22;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 23;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var3 = {};
                        var2 = 'ORB_BADGE_COLLECTED_MODAL';
                        var3['modalKey'] = var2;
                        var7 = function onPressViewBadge() {
                            var4 = _closure2_slot4;
                            var3 = var4.navigate;
                            var1 = _closure1_slot10;
                            var2 = var1.YOU;
                            var1 = {};
                            var5 = true;
                            var1['showOrbsBadgeCoachmark'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var3['onPressViewBadge'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
case 15:
                        return var1;
                    }
                };
                var3['onCheckoutSuccess'] = var2;
                var2 = 'ORB_CHECKOUT_MODAL';
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var8 = var7.bind(var8)(var1, var4);
            var1 = null;
            if(!(var1 != var17)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            if(!var3) { _fun0002_ip = 20; continue _fun0002 }
case 22:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var13 = 15;
            var3 = var7[var13];
            var3 = var4.bind(var5)(var3);
            var12 = var3.intl;
            var11 = var12.format;
            var3 = var7[var13];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var10 = var3.lOtBOI;
            var3 = {};
            var15 = var17.amount;
            var3['orbPrice'] = var15;
            var14 = function orbIconHook() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 26;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.OrbsIcon;
                    var1 = {};
                    var7 = _closure2_slot2;
                    var7 = var7.orbsIcon;
                    var1['style'] = var7;
                    var7 = 'sm';
                    var1['size'] = var7;
                    var5 = _closure2_slot3;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 9;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.colors;
                    if(var5) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var5 = var6.WHITE;
                    _fun0004_ip = 25; continue _fun0004;
case 23:
                    var5 = var6.INTERACTIVE_TEXT_ACTIVE;
case 25:
                    var1['color'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var3['orbIconHook'] = var14;
            var12 = var11.bind(var12)(var10, var3);
            var10 = _closure1_slot11;
            var3 = 27;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {};
            var7 = var6.orbsButtonText;
            var3['style'] = var7;
            var7 = 'text-md/semibold';
            var3['variant'] = var7;
            var7 = 'white';
            if(!var9) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var7 = 'interactive-text-active';
case 26:
            var3['color'] = var7;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var14 = var11[var13];
            var14 = var7.bind(var5)(var14);
            var16 = var14.intl;
            var15 = var16.formatToPlainString;
            var13 = var11[var13];
            var13 = var7.bind(var5)(var13);
            var13 = var13.t;
            var14 = var13.yi41qQ;
            var13 = {};
            var17 = var17.amount;
            var13['orbPrice'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var3['accessibilityLabel'] = var13;
            var3['children'] = var12;
            var10 = var10.bind(var5)(var4, var3);
            var4 = _closure1_slot11;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var6.buttonContainer;
            var2['style'] = var6;
            var6 = 28;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.BaseTextButton;
            var6 = {};
            var11 = false;
            var6['loading'] = var11;
            var6['textElement'] = var10;
            var6['onPress'] = var8;
            var6['disabled'] = var9;
            var8 = 'lg';
            var6['size'] = var8;
            var8 = 'primary';
            if(!var9) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var8 = 'secondary';
case 28:
            var6['variant'] = var8;
            var8 = true;
            var6['grow'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 20:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = function PurchaseDisclaimer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = var1.product;
            var11 = var1.buyButtonLabel;
            var1 = _closure1_slot13;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var3 = _closure1_slot11;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 29;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.TextWithIOSLinkWorkaround;
            var1 = {'style': null, 'variant': 'text-xxs/normal', 'color': 'interactive-text-active'};
            var6 = var6.disclaimer;
            var1['style'] = var6;
            var6 = var5.type;
            var5 = 30;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.EXTERNAL_SKU;
            var5 = var6 !== var5;
            if(!var5) { _fun0005_ip = 30; continue _fun0005 }
case 31:
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
            var10 = _closure1_slot8;
            var10 = var10.PAID_TERMS;
            var6['paidServiceTermURL'] = var10;
            var5 = var8.bind(var9)(var7, var6);
case 30:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function ProductDetailsActionSheetPurchaseSectionTsx1(){const{bottomSheet,screenHeight,maxHeight}=this.__closure;const animatedSheetOffset=bottomSheet.animatedPosition!=null?bottomSheet.animatedPosition.get()-screenHeight+maxHeight:0;return{transform:[{translateY:-animatedSheetOffset}]};}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = 50;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var16 = var1.product;
            var _closure2_slot0 = var16;
            var15 = var1.analyticsLocations;
            var13 = var1.onBuy;
            var1 = var1.onHeightChange;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot13;
            var19 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 31;
            var3 = var1[var3];
            var5 = var2.bind(var4)(var3);
            var3 = var5.useCurrentUser;
            var7 = var3.bind(var5)();
            var3 = 32;
            var3 = var1[var3];
            var5 = var2.bind(var4)(var3);
            var3 = var5.useProductPurchaseState;
            var3 = var3.bind(var5)(var16);
            var5 = var3.isPurchased;
            var33 = var3.isPartiallyOwnedBundle;
            var3 = 33;
            var3 = var1[var3];
            var11 = var2.bind(var4)(var3);
            var10 = var11.useStateFromStoresArray;
            var3 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var3;
            var6 = new Array(1);
            var6[0] = var16;
            var3 = function() {
                var1 = _closure1_slot6;
                var3 = var1.isClaiming;
                var1 = _closure2_slot0;
                var2 = var1.skuId;
                var1 = new Array(1);
                var2 = var3 === var2;
                var1[0] = var2;
                return var1;
            };
            var9 = var10.bind(var11)(var9, var3, var6);
            var6 = _closure1_slot3;
            var3 = 1;
            var6 = var6.bind(var4)(var9, var3);
            var3 = 0;
            var10 = var6[var3];
            var9 = _closure1_slot1;
            var3 = 34;
            var3 = var1[var3];
            var6 = var9.bind(var4)(var3);
            var3 = var6.canUseCollectibles;
            var27 = var3.bind(var6)(var7);
            var11 = 35;
            var3 = var1[var11];
            var6 = var2.bind(var4)(var3);
            var3 = var6.isPremiumCollectiblesProduct;
            var6 = var3.bind(var6)(var16);
            var3 = var1[var11];
            var7 = var2.bind(var4)(var3);
            var3 = var7.isFreeCollectiblesProduct;
            var7 = var3.bind(var7)(var16);
            var3 = 36;
            var3 = var1[var3];
            var14 = var2.bind(var4)(var3);
            var3 = var14.isOrbsExclusiveProduct;
            var22 = var3.bind(var14)(var16);
            var3 = 37;
            var3 = var1[var3];
            var14 = var2.bind(var4)(var3);
            var3 = var14.useFetchVirtualCurrencyBalance;
            var3 = var3.bind(var14)();
            var26 = var3.balance;
            var3 = 38;
            var3 = var1[var3];
            var17 = var9.bind(var4)(var3);
            var14 = var17.useConfig;
            var3 = {};
            var18 = 'ProductDetailsActionSheetPurchaseSection';
            var3['location'] = var18;
            var20 = var14.bind(var17)(var3);
            var3 = 16;
            var3 = var1[var3];
            var14 = var2.bind(var4)(var3);
            var3 = var14.useVirtualCurrencyData;
            var3 = var3.bind(var14)(var16, var27);
            var21 = var3.canAfford;
            var3 = 39;
            var3 = var1[var3];
            var17 = var2.bind(var4)(var3);
            var14 = var17.useHandleUseNow;
            var3 = {};
            var3['product'] = var16;
            var3 = var14.bind(var17)(var3);
            var17 = var3.handleUseNow;
            var18 = var3.isApplying;
            var3 = 40;
            var3 = var1[var3];
            var9 = var9.bind(var4)(var3);
            var3 = {};
            var3['product'] = var16;
            var3['analyticsLocations'] = var15;
            var3['onBuy'] = var13;
            var3 = var9.bind(var4)(var3);
            var34 = var3.handleBuyNow;
            var35 = var3.isBuying;
            var3 = 41;
            var3 = var1[var3];
            var13 = var2.bind(var4)(var3);
            var9 = var13.useHandleClaim;
            var3 = {};
            var3['product'] = var16;
            var3 = var9.bind(var13)(var3);
            var9 = var3.handleClaim;
            var3 = var1[var11];
            var13 = var2.bind(var4)(var3);
            var3 = var13.getDefaultPriceSetAssignmentPurchaseType;
            var3 = var3.bind(var13)(var27);
            var1 = var1[var11];
            var2 = var2.bind(var4)(var1);
            var1 = var2.extractPriceByPurchaseTypes;
            var13 = var1.bind(var2)(var16, var3);
            var1 = var6;
            if(var1) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var1 = var7;
case 32:
            if(var1) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var1 = var22;
case 34:
            if(var1) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var3 = var16.type;
            var14 = _closure1_slot0;
            var23 = _closure1_slot2;
            var2 = 30;
            var2 = var23[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.EXTERNAL_SKU;
            var1 = var3 === var2;
case 36:
            if(var1) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var11];
            var11 = var3.bind(var4)(var2);
            var3 = var11.shouldHideGiftingForCurrency;
            var2 = null;
            var14 = var2 == var13;
            var2 = undefined;
            if(var14) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var2 = var13.currency;
case 40:
            var1 = var3.bind(var11)(var2);
case 38:
            var11 = !var1;
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 42;
            var1 = var13[var1];
            var3 = var2.bind(var4)(var1);
            var1 = {};
            var32 = true;
            var1['ignoreKeyboard'] = var32;
            var1 = var3.bind(var4)(var1);
            var29 = var1.height;
            _closure2_slot2 = var29;
            var1 = 43;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var28 = var1.maximum;
            _closure2_slot3 = var28;
            var1 = 44;
            var1 = var13[var1];
            var3 = var2.bind(var4)(var1);
            var1 = {'includeCustomKeyboardHeight': false, 'includeKeyboardHeight': true};
            var1 = var3.bind(var4)(var1);
            var23 = var1.insets;
            var14 = _closure1_slot0;
            var1 = 45;
            var1 = var13[var1];
            var3 = var14.bind(var4)(var1);
            var1 = var3.useBottomSheet;
            var30 = var1.bind(var3)();
            _closure2_slot4 = var30;
            var1 = 46;
            var3 = var13[var1];
            var24 = var14.bind(var4)(var3);
            var14 = var24.useAnimatedStyle;
            var3 = function h() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var2 = _closure2_slot4;
                    var5 = var2.animatedPosition;
                    var2 = null;
                    var5 = var2 != var5;
                    var2 = 0;
                    if(!var5) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var5 = _closure2_slot4;
                    var6 = var5.animatedPosition;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var5 = _closure2_slot2;
                    var5 = var6 - var5;
                    var4 = _closure2_slot3;
                    var2 = var5 + var4;
case 42:
                    var2 = -var2;
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var25 = {};
            var25['bottomSheet'] = var30;
            var25['screenHeight'] = var29;
            var25['maxHeight'] = var28;
            var3['__closure'] = var25;
            var25 = 2578721850733.0;
            var3['__workletHash'] = var25;
            var25 = _closure1_slot17;
            var3['__initData'] = var25;
            var14 = var14.bind(var24)(var3);
            var3 = _closure1_slot11;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var24 = var19.container;
            var13 = new Array(3);
            var13[0] = var24;
            var13[1] = var14;
            var14 = {};
            var23 = var23.bottom;
            var24 = null;
            if(!(var24 == var23)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var25 = _closure1_slot1;
            var28 = _closure1_slot2;
            var24 = 9;
            var24 = var28[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.spacing;
            var23 = var24.PX_16;
case 44:
            var14['paddingBottom'] = var23;
            var13[2] = var14;
            var1['style'] = var13;
            var8 = function onLayout(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    var3 = _closure2_slot1;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var2 = var1.height;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onLayout'] = var8;
            if(var5) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            if(!var6) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            if(var27) { _fun0006_ip = 50; continue _fun0006 }
case 52:
            if(var7) { _fun0006_ip = 50; continue _fun0006 }
case 53:
            var13 = _closure1_slot11;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 48;
            var5 = var14[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.UnlockWithNitroButton;
            var5 = {};
            var5 = var13.bind(var4)(var8, var5);
            _fun0006_ip = 54; continue _fun0006;
case 50:
            if(var7) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            if(!var6) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            if(var27) { _fun0006_ip = 55; continue _fun0006 }
case 57:
            var8 = var16.type;
            var13 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 30;
            var7 = var7[var6];
            var7 = var13.bind(var4)(var7);
            var7 = var7.CollectiblesItemType;
            var7 = var7.BUNDLE;
            if(!(var8 !== var7)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var8 = var16.type;
            var13 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var13.bind(var4)(var7);
            var7 = var7.CollectiblesItemType;
            var7 = var7.PROFILE_EFFECT;
            if(!(var8 !== var7)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var8 = var16.type;
            var13 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var13.bind(var4)(var7);
            var7 = var7.CollectiblesItemType;
            var7 = var7.NAMEPLATE;
            if(!(var8 !== var7)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var7 = var16.type;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var6 = var6.CollectiblesItemType;
            var6 = var6.AVATAR_DECORATION;
            var6 = 15;
            var7 = var14[var6];
            var7 = var13.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.AQ0Veg;
            var23 = var7.bind(var8)(var6);
            _fun0006_ip = 65; continue _fun0006;
case 63:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 15;
            var7 = var14[var6];
            var7 = var13.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.H3vhqU;
            var23 = var7.bind(var8)(var6);
case 65:
            _fun0006_ip = 66; continue _fun0006;
case 61:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 15;
            var7 = var14[var6];
            var7 = var13.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.kAeDcK;
            var23 = var7.bind(var8)(var6);
case 66:
            _fun0006_ip = 67; continue _fun0006;
case 59:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 15;
            var7 = var14[var6];
            var7 = var13.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.V1AWw0;
            var23 = var7.bind(var8)(var6);
case 67:
            var14 = !var22;
            var8 = _closure1_slot12;
            var7 = _closure1_slot5;
            var6 = {};
            var13 = var19.purchaseSection;
            var6['style'] = var13;
            var24 = var14;
            if(!var14) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var24 = !var20;
case 68:
            if(!var24) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var28 = _closure1_slot11;
            var25 = _closure1_slot16;
            var13 = {};
            var13['product'] = var16;
            var13['buyButtonLabel'] = var23;
            var24 = var28.bind(var4)(var25, var13);
case 70:
            var13 = new Array(5);
            var13[0] = var24;
            var24 = var21;
            if(!var24) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var29 = _closure1_slot11;
            var28 = _closure1_slot15;
            var25 = {};
            var25['product'] = var16;
            var25['isPremiumUser'] = var27;
            var25['balance'] = var26;
            var24 = var29.bind(var4)(var28, var25);
case 72:
            var13[1] = var24;
            var22 = !var22;
            if(!var22) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var28 = _closure1_slot12;
            var25 = _closure1_slot5;
            var24 = {};
            var29 = var19.buttonContainer;
            var24['style'] = var29;
            var31 = _closure1_slot11;
            var30 = _closure1_slot0;
            var36 = _closure1_slot2;
            var29 = 49;
            var29 = var36[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.Button;
            var29 = {};
            var29['loading'] = var35;
            var29['text'] = var23;
            var29['onPress'] = var34;
            var29['disabled'] = var33;
            var34 = 'primary';
            var33 = var34;
            if(!var21) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var33 = 'secondary';
case 76:
            var29['variant'] = var33;
            var33 = 'lg';
            var29['size'] = var33;
            var29['grow'] = var32;
            var30 = var31.bind(var4)(var30, var29);
            var29 = new Array(2);
            var29[0] = var30;
            var30 = var11;
            if(!var11) { _fun0006_ip = 78; continue _fun0006 }
case 79:
            var33 = _closure1_slot11;
            var32 = _closure1_slot14;
            var31 = {};
            var31['product'] = var16;
            var31['analyticsLocations'] = var15;
            if(!var21) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var34 = 'secondary';
case 80:
            var31['variant'] = var34;
            var30 = var33.bind(var4)(var32, var31);
case 78:
            var29[1] = var30;
            var24['children'] = var29;
            var22 = var28.bind(var4)(var25, var24);
case 74:
            var13[2] = var22;
            var21 = !var21;
            if(!var21) { _fun0006_ip = 82; continue _fun0006 }
case 83:
            var25 = _closure1_slot11;
            var24 = _closure1_slot15;
            var22 = {};
            var22['product'] = var16;
            var22['isPremiumUser'] = var27;
            var22['balance'] = var26;
            var21 = var25.bind(var4)(var24, var22);
case 82:
            var13[3] = var21;
            if(!var14) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var14 = var20;
case 84:
            if(!var14) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            var22 = _closure1_slot11;
            var21 = _closure1_slot16;
            var20 = {};
            var20['product'] = var16;
            var20['buyButtonLabel'] = var23;
            var14 = var22.bind(var4)(var21, var20);
case 86:
            var13[4] = var14;
            var6['children'] = var13;
            var5 = var8.bind(var4)(var7, var6);
            _fun0006_ip = 54; continue _fun0006;
case 55:
            var8 = _closure1_slot11;
            var7 = _closure1_slot1;
            var22 = _closure1_slot2;
            var6 = 47;
            var6 = var22[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var13 = var19.button;
            var6['style'] = var13;
            var21 = _closure1_slot0;
            var13 = 15;
            var14 = var22[var13];
            var14 = var21.bind(var4)(var14);
            var20 = var14.intl;
            var14 = var20.string;
            var13 = var22[var13];
            var13 = var21.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.zp6caO;
            var13 = var14.bind(var20)(var13);
            var6['text'] = var13;
            var6['loading'] = var10;
            var6['onPress'] = var9;
            var5 = var8.bind(var4)(var7, var6);
            _fun0006_ip = 54; continue _fun0006;
case 48:
            var7 = var16.type;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 30;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.CollectiblesItemType;
            var6 = var6.EXTERNAL_SKU;
            var6 = var7 !== var6;
            if(!var6) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var9 = _closure1_slot12;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var19.buttonContainer;
            var7['style'] = var10;
            var14 = _closure1_slot11;
            var13 = _closure1_slot1;
            var22 = _closure1_slot2;
            var10 = 47;
            var10 = var22[var10];
            var13 = var13.bind(var4)(var10);
            var10 = {};
            var19 = var19.button;
            var10['style'] = var19;
            var10['loading'] = var18;
            var21 = _closure1_slot0;
            var18 = 15;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.MAS7uK;
            var18 = var19.bind(var20)(var18);
            var10['text'] = var18;
            var10['onPress'] = var17;
            var13 = var14.bind(var4)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            if(!var11) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            var14 = _closure1_slot11;
            var13 = _closure1_slot14;
            var12 = {};
            var12['product'] = var16;
            var12['analyticsLocations'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 90:
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 88:
            var5 = var6;
case 54:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();