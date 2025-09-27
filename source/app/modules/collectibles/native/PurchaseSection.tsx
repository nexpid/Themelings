// app/modules/collectibles/native/PurchaseSection.tsx
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
    var1 = 0;
    var4 = var6[var1];
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
    var7 = var4.jsxs;
    var _closure1_slot12 = var7;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 9;
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9['borderRadius'] = var14;
    var4['button'] = var9;
    var9 = {};
    var14 = 0.5;
    var9['opacity'] = var14;
    var15 = var6[var11];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var9['marginTop'] = var15;
    var4['disclaimer'] = var9;
    var9 = {};
    var9['opacity'] = var14;
    var4['disclaimerCondensed'] = var9;
    var9 = {};
    var14 = 40;
    var9['height'] = var14;
    var4['unlockWithNitroButton'] = var9;
    var9 = {};
    var14 = 'row';
    var9['flexDirection'] = var14;
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9['gap'] = var14;
    var4['buttonContainer'] = var9;
    var9 = {};
    var14 = 'column';
    var9['flexDirection'] = var14;
    var11 = var6[var11];
    var11 = var13.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var9['gap'] = var11;
    var4['purchaseButtonsWrapper'] = var9;
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
    var _closure1_slot14 = var4;
    var4 = function GiftButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.product;
            var _closure2_slot0 = var2;
            var2 = var1.analyticsLocations;
            var _closure2_slot1 = var2;
            var10 = var1.variant;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 40; continue _fun0001 }
 36:
            var10 = 'primary';
 40:
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
            if(!(var9 !== var10)) { _fun0001_ip = 156; continue _fun0001 }
 123:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 9;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.TEXT_PRIMARY;
            _fun0001_ip = 187; continue _fun0001;
 156:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 9;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.colors;
            var9 = var10.WHITE;
 187:
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
                var2 = var2.PRODUCT_DETAIL_ACTION_SHEET_KEY;
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
            var5 = var5.PEjaCw;
            var5 = var6.bind(var7)(var5);
            var1['accessibilityLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = function VCButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.balance;
            var _closure2_slot0 = var1;
            var10 = var2.product;
            var _closure2_slot1 = var10;
            var7 = var2.isPremiumUser;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0002_ip = 39; continue _fun0002 }
 37:
            var7 = false;
 39:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var3 = _closure1_slot14;
            var6 = var3.bind(var5)();
            _closure2_slot2 = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 16;
            var3 = var9[var3];
            var4 = var8.bind(var5)(var3);
            var3 = var4.useVirtualCurrencyData;
            var4 = var3.bind(var4)(var10, var7);
            var3 = var4.enabled;
            var17 = var4.price;
            var4 = var4.canAfford;
            var7 = 17;
            var7 = var9[var7];
            var9 = var8.bind(var5)(var7);
            var8 = var9.useProductDisableState;
            var7 = var10.skuId;
            var7 = var8.bind(var9)(var7);
            var9 = var7.isDisabled;
            if(var9) { _fun0002_ip = 156; continue _fun0002 }
 153:
            var9 = !var4;
 156:
            _closure2_slot3 = var9;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 18;
            var4 = var8[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.useNavigation;
            var11 = var4.bind(var7)();
            _closure2_slot4 = var11;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var4 = new Array(3);
            var4[0] = var11;
            var4[1] = var10;
            var4[2] = var1;
            var1 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var4 = var6.hideActionSheet;
                var4 = var4.bind(var6)();
                var4 = 19;
                var4 = var2[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.pushLazy;
                var4 = _closure1_slot0;
                var3 = 21;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 20;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var2 = _closure2_slot1;
                var2 = var2.skuId;
                var3['skuId'] = var2;
                var2 = function onCheckoutSuccess(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var10 = var1.entitlements;
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 19;
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
                        if(!(var5 !== var2)) { _fun0003_ip = 315; continue _fun0003 }
 83:
                        var2 = _closure2_slot1;
                        var5 = var2.skuId;
                        var2 = _closure1_slot7;
                        var2 = var2.FRACTIONAL_PREMIUM;
                        if(!(var5 !== var2)) { _fun0003_ip = 176; continue _fun0003 }
 107:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 24;
                        var2 = var6[var2];
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.open;
                        var2 = {'product': null, 'useCategoryImage': true, 'showOrbBalancePill': true};
                        var9 = _closure2_slot1;
                        var2['product'] = var9;
                        var8 = _closure2_slot0;
                        var2['orbBalancePriorToPurchase'] = var8;
                        var2 = var5.bind(var6)(var2);
                        _fun0003_ip = 404; continue _fun0003;
 176:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 12;
                        var5 = var2[var5];
                        var9 = var6.bind(var1)(var5);
                        var8 = var9.openLazy;
                        var6 = _closure1_slot0;
                        var5 = 21;
                        var5 = var2[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = 23;
                        var5 = var2[var5];
                        var2 = var2.paths;
                        var6 = var6.bind(var1)(var5, var2);
                        var5 = {};
                        var2 = 0;
                        var11 = var10[var2];
                        var2 = null;
                        var12 = var2 == var11;
                        var10 = undefined;
                        if(var12) { _fun0003_ip = 261; continue _fun0003 }
 255:
                        var10 = var11.consumed;
 261:
                        var2 = var2 != var10;
                        if(!var2) { _fun0003_ip = 271; continue _fun0003 }
 268:
                        var2 = var10;
 271:
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
                        _fun0003_ip = 404; continue _fun0003;
 315:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = var2[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.pushLazy;
                        var4 = _closure1_slot0;
                        var3 = 21;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 22;
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
 404:
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
            if(!(var1 != var17)) { _fun0002_ip = 580; continue _fun0002 }
 241:
            if(!var3) { _fun0002_ip = 580; continue _fun0002 }
 247:
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
            var10 = var3.lOtBOD;
            var3 = {};
            var15 = var17.amount;
            var3['orbPrice'] = var15;
            var14 = function orbIconHook() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 25;
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
                    if(var5) { _fun0004_ip = 102; continue _fun0004 }
 94:
                    var5 = var6.WHITE;
                    _fun0004_ip = 108; continue _fun0004;
 102:
                    var5 = var6.INTERACTIVE_ACTIVE;
 108:
                    var1['color'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var3['orbIconHook'] = var14;
            var12 = var11.bind(var12)(var10, var3);
            var10 = _closure1_slot11;
            var3 = 26;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.Text;
            var3 = {};
            var7 = var6.orbsButtonText;
            var3['style'] = var7;
            var7 = 'text-md/semibold';
            var3['variant'] = var7;
            var7 = 'white';
            if(!var9) { _fun0002_ip = 386; continue _fun0002 }
 380:
            var7 = 'interactive-active';
 386:
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
            var14 = var13.yi41qa;
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
            var6 = 27;
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
            if(!var9) { _fun0002_ip = 551; continue _fun0002 }
 547:
            var8 = 'secondary';
 551:
            var6['variant'] = var8;
            var8 = true;
            var6['grow'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 580:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/PurchaseSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var12 = var2.product;
            var _closure2_slot0 = var12;
            var11 = var2.analyticsLocations;
            var18 = var2.onBuy;
            var21 = var2.condensed;
            var2 = _closure1_slot14;
            var5 = undefined;
            var15 = var2.bind(var5)();
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 28;
            var2 = var7[var2];
            var3 = var10.bind(var5)(var2);
            var2 = var3.useCurrentUser;
            var4 = var2.bind(var3)();
            var2 = 29;
            var2 = var7[var2];
            var3 = var10.bind(var5)(var2);
            var2 = var3.useProductPurchaseState;
            var2 = var2.bind(var3)(var12);
            var9 = var2.isPurchased;
            var29 = var2.isPartiallyOwnedBundle;
            var2 = 30;
            var2 = var7[var2];
            var14 = var10.bind(var5)(var2);
            var13 = var14.useStateFromStoresArray;
            var2 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var2;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                var1 = _closure1_slot6;
                var3 = var1.isClaiming;
                var1 = _closure2_slot0;
                var2 = var1.skuId;
                var1 = new Array(1);
                var2 = var3 === var2;
                var1[0] = var2;
                return var1;
            };
            var6 = var13.bind(var14)(var6, var2, var3);
            var3 = _closure1_slot3;
            var2 = 1;
            var3 = var3.bind(var5)(var6, var2);
            var2 = 0;
            var6 = var3[var2];
            var16 = _closure1_slot1;
            var2 = 31;
            var2 = var7[var2];
            var3 = var16.bind(var5)(var2);
            var2 = var3.canUseCollectibles;
            var24 = var2.bind(var3)(var4);
            var17 = 32;
            var2 = var7[var17];
            var3 = var10.bind(var5)(var2);
            var2 = var3.isPremiumCollectiblesProduct;
            var2 = var2.bind(var3)(var12);
            var3 = var7[var17];
            var4 = var10.bind(var5)(var3);
            var3 = var4.isFreeCollectiblesProduct;
            var3 = var3.bind(var4)(var12);
            var4 = var7[var17];
            var13 = var10.bind(var5)(var4);
            var4 = var13.isOrbsExclusiveCollectiblesProduct;
            var20 = var4.bind(var13)(var12);
            var4 = 33;
            var4 = var7[var4];
            var13 = var10.bind(var5)(var4);
            var4 = var13.useFetchVirtualCurrencyBalance;
            var4 = var4.bind(var13)();
            var23 = var4.balance;
            var4 = 16;
            var4 = var7[var4];
            var13 = var10.bind(var5)(var4);
            var4 = var13.useVirtualCurrencyData;
            var4 = var4.bind(var13)(var12, var24);
            var19 = var4.canAfford;
            var4 = 34;
            var4 = var7[var4];
            var14 = var10.bind(var5)(var4);
            var13 = var14.useHandleUseNow;
            var4 = {};
            var4['product'] = var12;
            var4 = var13.bind(var14)(var4);
            var13 = var4.handleUseNow;
            var14 = var4.isApplying;
            var4 = 35;
            var4 = var7[var4];
            var16 = var16.bind(var5)(var4);
            var4 = {};
            var4['product'] = var12;
            var4['analyticsLocations'] = var11;
            var4['onBuy'] = var18;
            var4 = var16.bind(var5)(var4);
            var30 = var4.handleBuyNow;
            var32 = var4.isBuying;
            var4 = 36;
            var4 = var7[var4];
            var18 = var10.bind(var5)(var4);
            var16 = var18.useHandleClaim;
            var4 = {};
            var4['product'] = var12;
            var4 = var16.bind(var18)(var4);
            var4 = var4.handleClaim;
            var16 = var7[var17];
            var18 = var10.bind(var5)(var16);
            var16 = var18.getDefaultPriceSetAssignmentPurchaseType;
            var16 = var16.bind(var18)(var24);
            var7 = var7[var17];
            var10 = var10.bind(var5)(var7);
            var7 = var10.extractPriceByPurchaseTypes;
            var18 = var7.bind(var10)(var12, var16);
            var7 = var2;
            if(var7) { _fun0005_ip = 504; continue _fun0005 }
 501:
            var7 = var3;
 504:
            if(var7) { _fun0005_ip = 510; continue _fun0005 }
 507:
            var7 = var20;
 510:
            if(var7) { _fun0005_ip = 554; continue _fun0005 }
 513:
            var16 = var12.type;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var10 = 37;
            var10 = var25[var10];
            var10 = var22.bind(var5)(var10);
            var10 = var10.CollectiblesItemType;
            var10 = var10.BUNDLE;
            var7 = var16 === var10;
 554:
            if(var7) { _fun0005_ip = 598; continue _fun0005 }
 557:
            var16 = var12.type;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var10 = 37;
            var10 = var25[var10];
            var10 = var22.bind(var5)(var10);
            var10 = var10.CollectiblesItemType;
            var10 = var10.EXTERNAL_SKU;
            var7 = var16 === var10;
 598:
            if(var7) { _fun0005_ip = 646; continue _fun0005 }
 601:
            var16 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var17];
            var17 = var16.bind(var5)(var10);
            var16 = var17.shouldHideGiftingForCurrency;
            var10 = null;
            var22 = var10 == var18;
            var10 = undefined;
            if(var22) { _fun0005_ip = 641; continue _fun0005 }
 635:
            var10 = var18.currency;
 641:
            var7 = var16.bind(var17)(var10);
 646:
            var7 = !var7;
            if(var9) { _fun0005_ip = 1604; continue _fun0005 }
 655:
            if(!var2) { _fun0005_ip = 704; continue _fun0005 }
 658:
            if(var24) { _fun0005_ip = 704; continue _fun0005 }
 661:
            if(var3) { _fun0005_ip = 704; continue _fun0005 }
 664:
            var16 = _closure1_slot11;
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 39;
            var9 = var17[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.UnlockWithNitroButton;
            var9 = {};
            var9 = var16.bind(var5)(var10, var9);
            return var9;
 704:
            if(var3) { _fun0005_ip = 1494; continue _fun0005 }
 710:
            if(!var2) { _fun0005_ip = 719; continue _fun0005 }
 713:
            if(var24) { _fun0005_ip = 1494; continue _fun0005 }
 719:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 40;
            var9 = var2[var9];
            var16 = var3.bind(var5)(var9);
            var10 = var16.match;
            var9 = var12.type;
            var17 = var10.bind(var16)(var9);
            var16 = var17.with;
            var25 = 37;
            var9 = var2[var25];
            var9 = var3.bind(var5)(var9);
            var9 = var9.CollectiblesItemType;
            var10 = var9.BUNDLE;
            var9 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.V1AWw8;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var16.bind(var17)(var10, var9);
            var16 = var17.with;
            var9 = var2[var25];
            var9 = var3.bind(var5)(var9);
            var9 = var9.CollectiblesItemType;
            var10 = var9.PROFILE_EFFECT;
            var9 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.kAeDcH;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var16.bind(var17)(var10, var9);
            var16 = var17.with;
            var9 = var2[var25];
            var9 = var3.bind(var5)(var9);
            var9 = var9.CollectiblesItemType;
            var10 = var9.NAMEPLATE;
            var9 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.H3vhqa;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var16.bind(var17)(var10, var9);
            var9 = var10.with;
            var2 = var2[var25];
            var2 = var3.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var3 = var2.AVATAR_DECORATION;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.AQ0Ven;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var9.bind(var10)(var3, var2);
            var2 = var3.otherwise;
            var1 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.AQ0Ven;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var31 = var2.bind(var3)(var1);
            var3 = _closure1_slot12;
            var2 = _closure1_slot13;
            var1 = {};
            var10 = !var20;
            if(!var10) { _fun0005_ip = 1168; continue _fun0005 }
 955:
            var17 = _closure1_slot11;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 41;
            var9 = var18[var9];
            var9 = var16.bind(var5)(var9);
            var16 = var9.TextWithIOSLinkWorkaround;
            var9 = {};
            if(var21) { _fun0005_ip = 998; continue _fun0005 }
 990:
            var18 = var15.disclaimer;
            _fun0005_ip = 1004; continue _fun0005;
 998:
            var18 = var15.disclaimerCondensed;
 1004:
            var9['style'] = var18;
            var18 = 'text-xs/normal';
            if(!var21) { _fun0005_ip = 1023; continue _fun0005 }
 1017:
            var18 = 'text-xxs/normal';
 1023:
            var9['variant'] = var18;
            var18 = 'interactive-active';
            var9['color'] = var18;
            var21 = var12.type;
            var22 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var25];
            var18 = var22.bind(var5)(var18);
            var18 = var18.CollectiblesItemType;
            var18 = var18.EXTERNAL_SKU;
            var18 = var21 !== var18;
            if(!var18) { _fun0005_ip = 1158; continue _fun0005 }
 1078:
            var22 = _closure1_slot0;
            var27 = _closure1_slot2;
            var21 = 15;
            var25 = var27[var21];
            var25 = var22.bind(var5)(var25);
            var26 = var25.intl;
            var25 = var26.format;
            var21 = var27[var21];
            var21 = var22.bind(var5)(var21);
            var21 = var21.t;
            var22 = var21.iIglwM;
            var21 = {};
            var21['buyButtonLabel'] = var31;
            var27 = _closure1_slot8;
            var27 = var27.PAID_TERMS;
            var21['paidServiceTermURL'] = var27;
            var18 = var25.bind(var26)(var22, var21);
 1158:
            var9['children'] = var18;
            var10 = var17.bind(var5)(var16, var9);
 1168:
            var9 = new Array(2);
            var9[0] = var10;
            var17 = _closure1_slot12;
            var16 = _closure1_slot5;
            var10 = {};
            var18 = var15.purchaseButtonsWrapper;
            var10['style'] = var18;
            var21 = var19;
            if(!var21) { _fun0005_ip = 1233; continue _fun0005 }
 1202:
            var25 = _closure1_slot11;
            var22 = _closure1_slot16;
            var18 = {};
            var18['product'] = var12;
            var18['isPremiumUser'] = var24;
            var18['balance'] = var23;
            var21 = var25.bind(var5)(var22, var18);
 1233:
            var18 = new Array(3);
            var18[0] = var21;
            var20 = !var20;
            if(!var20) { _fun0005_ip = 1423; continue _fun0005 }
 1250:
            var25 = _closure1_slot12;
            var22 = _closure1_slot5;
            var21 = {};
            var26 = var15.buttonContainer;
            var21['style'] = var26;
            var28 = _closure1_slot11;
            var27 = _closure1_slot0;
            var33 = _closure1_slot2;
            var26 = 42;
            var26 = var33[var26];
            var26 = var27.bind(var5)(var26);
            var27 = var26.Button;
            var26 = {};
            var26['loading'] = var32;
            var26['text'] = var31;
            var26['onPress'] = var30;
            var26['disabled'] = var29;
            var31 = 'primary';
            var29 = var31;
            if(!var19) { _fun0005_ip = 1333; continue _fun0005 }
 1329:
            var29 = 'secondary';
 1333:
            var26['variant'] = var29;
            var29 = 'lg';
            var26['size'] = var29;
            var29 = true;
            var26['grow'] = var29;
            var27 = var28.bind(var5)(var27, var26);
            var26 = new Array(2);
            var26[0] = var27;
            var27 = var7;
            if(!var7) { _fun0005_ip = 1409; continue _fun0005 }
 1372:
            var30 = _closure1_slot11;
            var29 = _closure1_slot15;
            var28 = {};
            var28['product'] = var12;
            var28['analyticsLocations'] = var11;
            if(!var19) { _fun0005_ip = 1399; continue _fun0005 }
 1395:
            var31 = 'secondary';
 1399:
            var28['variant'] = var31;
            var27 = var30.bind(var5)(var29, var28);
 1409:
            var26[1] = var27;
            var21['children'] = var26;
            var20 = var25.bind(var5)(var22, var21);
 1423:
            var18[1] = var20;
            var19 = !var19;
            if(!var19) { _fun0005_ip = 1464; continue _fun0005 }
 1433:
            var22 = _closure1_slot11;
            var21 = _closure1_slot16;
            var20 = {};
            var20['product'] = var12;
            var20['isPremiumUser'] = var24;
            var20['balance'] = var23;
            var19 = var22.bind(var5)(var21, var20);
 1464:
            var18[2] = var19;
            var10['children'] = var18;
            var10 = var17.bind(var5)(var16, var10);
            var9[1] = var10;
            var1['children'] = var9;
            var1 = var3.bind(var5)(var2, var1);
            return var1;
 1494:
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 38;
            var1 = var18[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var9 = var15.button;
            var1['style'] = var9;
            var17 = _closure1_slot0;
            var9 = 15;
            var10 = var18[var9];
            var10 = var17.bind(var5)(var10);
            var16 = var10.intl;
            var10 = var16.string;
            var9 = var18[var9];
            var9 = var17.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.zp6caG;
            var9 = var10.bind(var16)(var9);
            var1['text'] = var9;
            var1['loading'] = var6;
            var1['onPress'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            return var1;
 1604:
            var2 = var12.type;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 37;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.EXTERNAL_SKU;
            var1 = var2 !== var1;
            if(!var1) { _fun0005_ip = 1828; continue _fun0005 }
 1651:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var15.buttonContainer;
            var2['style'] = var6;
            var10 = _closure1_slot11;
            var9 = _closure1_slot1;
            var18 = _closure1_slot2;
            var6 = 38;
            var6 = var18[var6];
            var9 = var9.bind(var5)(var6);
            var6 = {};
            var15 = var15.button;
            var6['style'] = var15;
            var6['loading'] = var14;
            var17 = _closure1_slot0;
            var14 = 15;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.MAS7uL;
            var14 = var15.bind(var16)(var14);
            var6['text'] = var14;
            var6['onPress'] = var13;
            var9 = var10.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            if(!var7) { _fun0005_ip = 1814; continue _fun0005 }
 1788:
            var10 = _closure1_slot11;
            var9 = _closure1_slot15;
            var8 = {};
            var8['product'] = var12;
            var8['analyticsLocations'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 1814:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1828:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();