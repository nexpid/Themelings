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
    var10 = 2;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
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
    var11 = var6[var11];
    var11 = var13.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var11 = -var11;
    var9['marginBottom'] = var11;
    var4['buttonContainer'] = var9;
    var9 = {};
    var11 = 'center';
    var9['textAlignVertical'] = var11;
    var13 = {};
    var11 = -2;
    var13['translateY'] = var11;
    var11 = new Array(1);
    var11[0] = var13;
    var9['transform'] = var11;
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
            var9 = var2.isPremiumUser;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0002_ip = 39; continue _fun0002 }
 37:
            var9 = false;
 39:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var2 = _closure1_slot14;
            var7 = var2.bind(var5)();
            _closure2_slot2 = var7;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var3 = var4.bind(var5)(var2);
            var2 = var3.useVirtualCurrencyData;
            var3 = var2.bind(var3)(var10, var9);
            var2 = var3.enabled;
            var14 = var3.price;
            var9 = var3.canAfford;
            _closure2_slot3 = var9;
            var3 = 17;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useNavigation;
            var11 = var3.bind(var4)();
            _closure2_slot4 = var11;
            var8 = _closure1_slot4;
            var4 = var8.useCallback;
            var3 = new Array(3);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var1;
            var1 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var4 = var6.hideActionSheet;
                var4 = var4.bind(var6)();
                var4 = 18;
                var4 = var2[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.pushLazy;
                var4 = _closure1_slot0;
                var3 = 20;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 19;
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
                        var4 = 18;
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
                        var2 = 23;
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
                        var5 = 20;
                        var5 = var2[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = 22;
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
                        var3 = 20;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 21;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var3 = {};
                        var2 = 'ORB_BADGE_COLLECTED_MODAL';
                        var3['modalKey'] = var2;
                        var7 = function onPressViewBadge() {
                            var3 = _closure2_slot4;
                            var2 = var3.navigate;
                            var1 = _closure1_slot10;
                            var1 = var1.YOU;
                            var1 = var2.bind(var3)(var1);
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
            var8 = var4.bind(var8)(var1, var3);
            var1 = null;
            if(!(var1 != var14)) { _fun0002_ip = 470; continue _fun0002 }
 192:
            if(!var2) { _fun0002_ip = 470; continue _fun0002 }
 198:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 15;
            var4 = var11[var2];
            var4 = var3.bind(var5)(var4);
            var12 = var4.intl;
            var10 = var12.format;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var4 = var2.lOtBOD;
            var2 = {};
            var14 = var14.amount;
            var2['orbPrice'] = var14;
            var13 = function orbIconHook() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 24;
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
                    var5 = var6.INTERACTIVE_ACTIVE;
                    _fun0004_ip = 108; continue _fun0004;
 102:
                    var5 = var6.WHITE;
 108:
                    var1['color'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var2['orbIconHook'] = var13;
            var10 = var10.bind(var12)(var4, var2);
            var4 = _closure1_slot11;
            var2 = 25;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var11 = var7.orbsButtonText;
            var2['style'] = var11;
            var11 = 'text-md/semibold';
            var2['variant'] = var11;
            var11 = 'interactive-active';
            if(!var9) { _fun0002_ip = 337; continue _fun0002 }
 333:
            var11 = 'white';
 337:
            var2['color'] = var11;
            var2['children'] = var10;
            var10 = var4.bind(var5)(var3, var2);
            var4 = _closure1_slot11;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.buttonContainer;
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 26;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.BaseTextButton;
            var6 = {};
            var11 = false;
            var6['loading'] = var11;
            var6['textElement'] = var10;
            var6['onPress'] = var8;
            var8 = !var9;
            var6['disabled'] = var8;
            var8 = 'lg';
            var6['size'] = var8;
            var8 = 'secondary';
            if(!var9) { _fun0002_ip = 441; continue _fun0002 }
 437:
            var8 = 'primary';
 441:
            var6['variant'] = var8;
            var8 = true;
            var6['grow'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 470:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var4 = 42;
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
            var21 = var2.onBuy;
            var23 = var2.condensed;
            var2 = _closure1_slot14;
            var5 = undefined;
            var15 = var2.bind(var5)();
            var7 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 27;
            var2 = var17[var2];
            var3 = var7.bind(var5)(var2);
            var2 = var3.useCurrentUser;
            var4 = var2.bind(var3)();
            var2 = 28;
            var2 = var17[var2];
            var3 = var7.bind(var5)(var2);
            var2 = var3.useProductPurchaseState;
            var2 = var2.bind(var3)(var12);
            var9 = var2.isPurchased;
            var25 = var2.isPartiallyOwnedBundle;
            var2 = 29;
            var2 = var17[var2];
            var13 = var7.bind(var5)(var2);
            var10 = var13.useStateFromStoresArray;
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
            var6 = var10.bind(var13)(var6, var2, var3);
            var3 = _closure1_slot3;
            var2 = 1;
            var3 = var3.bind(var5)(var6, var2);
            var2 = 0;
            var6 = var3[var2];
            var18 = _closure1_slot1;
            var2 = 30;
            var2 = var17[var2];
            var3 = var18.bind(var5)(var2);
            var2 = var3.canUseCollectibles;
            var20 = var2.bind(var3)(var4);
            var4 = 31;
            var2 = var17[var4];
            var3 = var7.bind(var5)(var2);
            var2 = var3.isPremiumCollectiblesProduct;
            var2 = var2.bind(var3)(var12);
            var3 = var17[var4];
            var10 = var7.bind(var5)(var3);
            var3 = var10.isFreeCollectiblesProduct;
            var3 = var3.bind(var10)(var12);
            var4 = var17[var4];
            var10 = var7.bind(var5)(var4);
            var4 = var10.isOrbsExclusiveCollectiblesProduct;
            var16 = var4.bind(var10)(var12);
            var4 = 32;
            var4 = var17[var4];
            var10 = var7.bind(var5)(var4);
            var4 = var10.useFetchVirtualCurrencyBalance;
            var4 = var4.bind(var10)();
            var19 = var4.balance;
            var4 = 16;
            var4 = var17[var4];
            var10 = var7.bind(var5)(var4);
            var4 = var10.useVirtualCurrencyData;
            var4 = var4.bind(var10)(var12, var20);
            var10 = var4.canAfford;
            var4 = 33;
            var4 = var17[var4];
            var14 = var7.bind(var5)(var4);
            var13 = var14.useHandleUseNow;
            var4 = {};
            var4['product'] = var12;
            var4 = var13.bind(var14)(var4);
            var13 = var4.handleUseNow;
            var14 = var4.isApplying;
            var4 = 34;
            var4 = var17[var4];
            var18 = var18.bind(var5)(var4);
            var4 = {};
            var4['product'] = var12;
            var4['analyticsLocations'] = var11;
            var4['onBuy'] = var21;
            var4 = var18.bind(var5)(var4);
            var26 = var4.handleBuyNow;
            var28 = var4.isBuying;
            var4 = 35;
            var4 = var17[var4];
            var17 = var7.bind(var5)(var4);
            var7 = var17.useHandleClaim;
            var4 = {};
            var4['product'] = var12;
            var4 = var7.bind(var17)(var4);
            var4 = var4.handleClaim;
            var7 = !var2;
            if(!var7) { _fun0005_ip = 463; continue _fun0005 }
 460:
            var7 = !var3;
 463:
            if(!var7) { _fun0005_ip = 469; continue _fun0005 }
 466:
            var7 = !var16;
 469:
            if(!var7) { _fun0005_ip = 513; continue _fun0005 }
 472:
            var18 = var12.type;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 36;
            var17 = var22[var17];
            var17 = var21.bind(var5)(var17);
            var17 = var17.CollectiblesItemType;
            var17 = var17.BUNDLE;
            var7 = var18 !== var17;
 513:
            if(!var7) { _fun0005_ip = 557; continue _fun0005 }
 516:
            var18 = var12.type;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 36;
            var17 = var22[var17];
            var17 = var21.bind(var5)(var17);
            var17 = var17.CollectiblesItemType;
            var17 = var17.EXTERNAL_SKU;
            var7 = var18 !== var17;
 557:
            if(var9) { _fun0005_ip = 1474; continue _fun0005 }
 563:
            if(!var2) { _fun0005_ip = 612; continue _fun0005 }
 566:
            if(var20) { _fun0005_ip = 612; continue _fun0005 }
 569:
            if(var3) { _fun0005_ip = 612; continue _fun0005 }
 572:
            var18 = _closure1_slot11;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 38;
            var9 = var21[var9];
            var9 = var17.bind(var5)(var9);
            var17 = var9.UnlockWithNitroButton;
            var9 = {};
            var9 = var18.bind(var5)(var17, var9);
            return var9;
 612:
            if(var3) { _fun0005_ip = 1364; continue _fun0005 }
 618:
            if(!var2) { _fun0005_ip = 627; continue _fun0005 }
 621:
            if(var20) { _fun0005_ip = 1364; continue _fun0005 }
 627:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 39;
            var9 = var2[var9];
            var18 = var3.bind(var5)(var9);
            var17 = var18.match;
            var9 = var12.type;
            var21 = var17.bind(var18)(var9);
            var18 = var21.with;
            var29 = 36;
            var9 = var2[var29];
            var9 = var3.bind(var5)(var9);
            var9 = var9.CollectiblesItemType;
            var17 = var9.BUNDLE;
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
            var21 = var18.bind(var21)(var17, var9);
            var18 = var21.with;
            var9 = var2[var29];
            var9 = var3.bind(var5)(var9);
            var9 = var9.CollectiblesItemType;
            var17 = var9.PROFILE_EFFECT;
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
            var21 = var18.bind(var21)(var17, var9);
            var18 = var21.with;
            var9 = var2[var29];
            var9 = var3.bind(var5)(var9);
            var9 = var9.CollectiblesItemType;
            var17 = var9.NAMEPLATE;
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
            var17 = var18.bind(var21)(var17, var9);
            var9 = var17.with;
            var2 = var2[var29];
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
            var3 = var9.bind(var17)(var3, var2);
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
            var27 = var2.bind(var3)(var1);
            var3 = _closure1_slot12;
            var2 = _closure1_slot13;
            var1 = {};
            var17 = !var16;
            if(!var17) { _fun0005_ip = 1076; continue _fun0005 }
 863:
            var21 = _closure1_slot11;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 40;
            var9 = var22[var9];
            var9 = var18.bind(var5)(var9);
            var18 = var9.TextWithIOSLinkWorkaround;
            var9 = {};
            if(var23) { _fun0005_ip = 906; continue _fun0005 }
 898:
            var22 = var15.disclaimer;
            _fun0005_ip = 912; continue _fun0005;
 906:
            var22 = var15.disclaimerCondensed;
 912:
            var9['style'] = var22;
            var22 = 'text-xs/normal';
            if(!var23) { _fun0005_ip = 931; continue _fun0005 }
 925:
            var22 = 'text-xxs/normal';
 931:
            var9['variant'] = var22;
            var22 = 'interactive-active';
            var9['color'] = var22;
            var23 = var12.type;
            var24 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var29];
            var22 = var24.bind(var5)(var22);
            var22 = var22.CollectiblesItemType;
            var22 = var22.EXTERNAL_SKU;
            var22 = var23 !== var22;
            if(!var22) { _fun0005_ip = 1066; continue _fun0005 }
 986:
            var24 = _closure1_slot0;
            var31 = _closure1_slot2;
            var23 = 15;
            var29 = var31[var23];
            var29 = var24.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.format;
            var23 = var31[var23];
            var23 = var24.bind(var5)(var23);
            var23 = var23.t;
            var24 = var23.iIglwM;
            var23 = {};
            var23['buyButtonLabel'] = var27;
            var31 = _closure1_slot8;
            var31 = var31.PAID_TERMS;
            var23['paidServiceTermURL'] = var31;
            var22 = var29.bind(var30)(var24, var23);
 1066:
            var9['children'] = var22;
            var17 = var21.bind(var5)(var18, var9);
 1076:
            var9 = new Array(4);
            var9[0] = var17;
            var17 = var10;
            if(!var17) { _fun0005_ip = 1121; continue _fun0005 }
 1090:
            var22 = _closure1_slot11;
            var21 = _closure1_slot16;
            var18 = {};
            var18['product'] = var12;
            var18['isPremiumUser'] = var20;
            var18['balance'] = var19;
            var17 = var22.bind(var5)(var21, var18);
 1121:
            var9[1] = var17;
            var16 = !var16;
            if(!var16) { _fun0005_ip = 1307; continue _fun0005 }
 1134:
            var21 = _closure1_slot12;
            var18 = _closure1_slot5;
            var17 = {};
            var22 = var15.buttonContainer;
            var17['style'] = var22;
            var24 = _closure1_slot11;
            var23 = _closure1_slot0;
            var29 = _closure1_slot2;
            var22 = 41;
            var22 = var29[var22];
            var22 = var23.bind(var5)(var22);
            var23 = var22.Button;
            var22 = {};
            var22['loading'] = var28;
            var22['text'] = var27;
            var22['onPress'] = var26;
            var22['disabled'] = var25;
            var27 = 'primary';
            var25 = var27;
            if(!var10) { _fun0005_ip = 1217; continue _fun0005 }
 1213:
            var25 = 'secondary';
 1217:
            var22['variant'] = var25;
            var25 = 'lg';
            var22['size'] = var25;
            var25 = true;
            var22['grow'] = var25;
            var23 = var24.bind(var5)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var23 = var7;
            if(!var7) { _fun0005_ip = 1293; continue _fun0005 }
 1256:
            var26 = _closure1_slot11;
            var25 = _closure1_slot15;
            var24 = {};
            var24['product'] = var12;
            var24['analyticsLocations'] = var11;
            if(!var10) { _fun0005_ip = 1283; continue _fun0005 }
 1279:
            var27 = 'secondary';
 1283:
            var24['variant'] = var27;
            var23 = var26.bind(var5)(var25, var24);
 1293:
            var22[1] = var23;
            var17['children'] = var22;
            var16 = var21.bind(var5)(var18, var17);
 1307:
            var9[2] = var16;
            var10 = !var10;
            if(!var10) { _fun0005_ip = 1348; continue _fun0005 }
 1317:
            var18 = _closure1_slot11;
            var17 = _closure1_slot16;
            var16 = {};
            var16['product'] = var12;
            var16['isPremiumUser'] = var20;
            var16['balance'] = var19;
            var10 = var18.bind(var5)(var17, var16);
 1348:
            var9[3] = var10;
            var1['children'] = var9;
            var1 = var3.bind(var5)(var2, var1);
            return var1;
 1364:
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 37;
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
 1474:
            var2 = var12.type;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 36;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.EXTERNAL_SKU;
            var1 = var2 !== var1;
            if(!var1) { _fun0005_ip = 1698; continue _fun0005 }
 1521:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var15.buttonContainer;
            var2['style'] = var6;
            var10 = _closure1_slot11;
            var9 = _closure1_slot1;
            var18 = _closure1_slot2;
            var6 = 37;
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
            if(!var7) { _fun0005_ip = 1684; continue _fun0005 }
 1658:
            var10 = _closure1_slot11;
            var9 = _closure1_slot15;
            var8 = {};
            var8['product'] = var12;
            var8['analyticsLocations'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 1684:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1698:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();