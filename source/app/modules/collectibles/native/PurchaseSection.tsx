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
    var4 = var4.MarketingURLs;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MainTabsNavigatorScreens;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
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
    var _closure1_slot13 = var4;
    var4 = function useVCData(arg1, arg2) {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 10;
        var3 = var8[var3];
        var6 = undefined;
        var5 = var7.bind(var6)(var3);
        var4 = var5.isVirtualCurrencyEnabled;
        var3 = {};
        var9 = 'useVCData';
        var3['location'] = var9;
        var3 = var4.bind(var5)(var3);
        var5 = var3.enabled;
        var _closure2_slot0 = var5;
        var3 = 11;
        var3 = var8[var3];
        var9 = var7.bind(var6)(var3);
        var4 = var9.getProductOrbPrice;
        var3 = {};
        var10 = arg1;
        var3['product'] = var10;
        var10 = arg2;
        var3['isPremiumUser'] = var10;
        var4 = var4.bind(var9)(var3);
        var _closure2_slot1 = var4;
        var3 = 12;
        var3 = var8[var3];
        var6 = var7.bind(var6)(var3);
        var3 = var6.useFetchVirtualCurrencyBalance;
        var3 = var3.bind(var6)();
        var3 = var3.balance;
        var _closure2_slot2 = var3;
        var7 = _closure1_slot4;
        var6 = var7.useMemo;
        var2 = new Array(3);
        var2[0] = var4;
        var2[1] = var3;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot1;
                var4 = null;
                var3 = var4 != var1;
                var1 = null;
                if(!var3) { _fun0001_ip = 58; continue _fun0001 }
 18:
                var3 = _closure2_slot2;
                var3 = var4 != var3;
                var1 = null;
                if(!var3) { _fun0001_ip = 58; continue _fun0001 }
 31:
                var3 = _closure2_slot0;
                var1 = null;
                if(!var3) { _fun0001_ip = 58; continue _fun0001 }
 40:
                var3 = _closure2_slot1;
                var3 = var3.amount;
                var2 = _closure2_slot2;
                var1 = var3 <= var2;
 58:
                return var1;
            }
        };
        var2 = var6.bind(var7)(var1, var2);
        var1 = {};
        var1['enabled'] = var5;
        var1['price'] = var4;
        var1['balance'] = var3;
        var1['canAfford'] = var2;
        return var1;
    };
    var _closure1_slot14 = var4;
    var4 = function GiftButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.product;
            var _closure2_slot0 = var2;
            var2 = var1.analyticsLocations;
            var _closure2_slot1 = var2;
            var10 = var1.variant;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0002_ip = 40; continue _fun0002 }
 36:
            var10 = 'primary';
 40:
            var3 = _closure1_slot10;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.IconButton;
            var1 = {};
            var7 = 'lg';
            var1['size'] = var7;
            var1['variant'] = var10;
            var7 = 14;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.GiftIcon;
            var7 = {};
            var9 = 'md';
            var7['size'] = var9;
            var9 = 'primary';
            if(!(var9 !== var10)) { _fun0002_ip = 156; continue _fun0002 }
 123:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 9;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.TEXT_PRIMARY;
            _fun0002_ip = 187; continue _fun0002;
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
                var1 = 15;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var3);
                var5 = var6.hideActionSheet;
                var3 = _closure1_slot0;
                var2 = 16;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.PRODUCT_DETAIL_ACTION_SHEET_KEY;
                var2 = var5.bind(var6)(var2);
                var2 = 17;
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
            var5 = 18;
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
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = var2.product;
            var _closure2_slot0 = var1;
            var3 = var2.isPremiumUser;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0003_ip = 29; continue _fun0003 }
 27:
            var3 = false;
 29:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var2 = _closure1_slot13;
            var7 = var2.bind(var5)();
            _closure2_slot1 = var7;
            var2 = _closure1_slot14;
            var3 = var2.bind(var5)(var1, var3);
            var2 = var3.enabled;
            var14 = var3.price;
            var9 = var3.canAfford;
            _closure2_slot2 = var9;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 19;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useNavigation;
            var10 = var3.bind(var4)();
            _closure2_slot3 = var10;
            var8 = _closure1_slot4;
            var4 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var1;
            var1 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
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
                var2 = _closure2_slot0;
                var2 = var2.skuId;
                var3['skuId'] = var2;
                var2 = function onCheckoutSuccess() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 20;
                        var2 = var1[var4];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.popWithKey;
                        var2 = 'ORB_CHECKOUT_MODAL';
                        var2 = var5.bind(var6)(var2);
                        var2 = _closure2_slot0;
                        var5 = var2.skuId;
                        var2 = _closure1_slot7;
                        var2 = var2.ORB_PROFILE_BADGE;
                        if(!(var5 !== var2)) { _fun0004_ip = 147; continue _fun0004 }
 69:
                        var2 = _closure2_slot0;
                        var5 = var2.skuId;
                        var2 = _closure1_slot7;
                        var2 = var2.FRACTIONAL_PREMIUM;
                        if(!(var5 !== var2)) { _fun0004_ip = 238; continue _fun0004 }
 96:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 24;
                        var2 = var6[var2];
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.open;
                        var2 = {};
                        var7 = _closure2_slot0;
                        var2['product'] = var7;
                        var7 = true;
                        var2['useCategoryImage'] = var7;
                        var2 = var5.bind(var6)(var2);
                        _fun0004_ip = 238; continue _fun0004;
 147:
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
                            var3 = _closure2_slot3;
                            var2 = var3.navigate;
                            var1 = _closure1_slot9;
                            var1 = var1.YOU;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3['onPressViewBadge'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
 238:
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
            if(!(var1 != var14)) { _fun0003_ip = 442; continue _fun0003 }
 164:
            if(!var2) { _fun0003_ip = 442; continue _fun0003 }
 170:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 18;
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 25;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.OrbsIcon;
                    var1 = {};
                    var7 = _closure2_slot1;
                    var7 = var7.orbsIcon;
                    var1['style'] = var7;
                    var7 = 'sm';
                    var1['size'] = var7;
                    var5 = _closure2_slot2;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 9;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.colors;
                    if(var5) { _fun0005_ip = 102; continue _fun0005 }
 94:
                    var5 = var6.INTERACTIVE_ACTIVE;
                    _fun0005_ip = 108; continue _fun0005;
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
            var4 = _closure1_slot10;
            var2 = 26;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var11 = var7.orbsButtonText;
            var2['style'] = var11;
            var11 = 'text-md/semibold';
            var2['variant'] = var11;
            var11 = 'interactive-active';
            if(!var9) { _fun0003_ip = 309; continue _fun0003 }
 305:
            var11 = 'white';
 309:
            var2['color'] = var11;
            var2['children'] = var10;
            var10 = var4.bind(var5)(var3, var2);
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.buttonContainer;
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 27;
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
            if(!var9) { _fun0003_ip = 413; continue _fun0003 }
 409:
            var8 = 'primary';
 413:
            var6['variant'] = var8;
            var8 = true;
            var6['grow'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 442:
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var12 = var2.product;
            var _closure2_slot0 = var12;
            var11 = var2.analyticsLocations;
            var18 = var2.onBuy;
            var20 = var2.condensed;
            var2 = _closure1_slot13;
            var5 = undefined;
            var15 = var2.bind(var5)();
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 28;
            var2 = var16[var2];
            var3 = var7.bind(var5)(var2);
            var2 = var3.useCurrentUser;
            var4 = var2.bind(var3)();
            var2 = 29;
            var2 = var16[var2];
            var3 = var7.bind(var5)(var2);
            var2 = var3.useProductPurchaseState;
            var2 = var2.bind(var3)(var12);
            var9 = var2.isPurchased;
            var23 = var2.isPartiallyOwnedBundle;
            var2 = 30;
            var2 = var16[var2];
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
            var17 = _closure1_slot1;
            var2 = 31;
            var2 = var16[var2];
            var3 = var17.bind(var5)(var2);
            var2 = var3.canUseCollectibles;
            var19 = var2.bind(var3)(var4);
            var3 = 32;
            var2 = var16[var3];
            var4 = var7.bind(var5)(var2);
            var2 = var4.isPremiumCollectiblesProduct;
            var2 = var2.bind(var4)(var12);
            var3 = var16[var3];
            var4 = var7.bind(var5)(var3);
            var3 = var4.isFreeCollectiblesProduct;
            var3 = var3.bind(var4)(var12);
            var4 = _closure1_slot14;
            var4 = var4.bind(var5)(var12, var19);
            var10 = var4.canAfford;
            var4 = 33;
            var4 = var16[var4];
            var14 = var7.bind(var5)(var4);
            var13 = var14.useHandleUseNow;
            var4 = {};
            var4['product'] = var12;
            var4 = var13.bind(var14)(var4);
            var13 = var4.handleUseNow;
            var14 = var4.isApplying;
            var4 = 34;
            var4 = var16[var4];
            var17 = var17.bind(var5)(var4);
            var4 = {};
            var4['product'] = var12;
            var4['analyticsLocations'] = var11;
            var4['onBuy'] = var18;
            var4 = var17.bind(var5)(var4);
            var24 = var4.handleBuyNow;
            var26 = var4.isBuying;
            var4 = 35;
            var4 = var16[var4];
            var16 = var7.bind(var5)(var4);
            var7 = var16.useHandleClaim;
            var4 = {};
            var4['product'] = var12;
            var4 = var7.bind(var16)(var4);
            var4 = var4.handleClaim;
            var7 = !var2;
            if(!var7) { _fun0006_ip = 401; continue _fun0006 }
 398:
            var7 = !var3;
 401:
            if(!var7) { _fun0006_ip = 445; continue _fun0006 }
 404:
            var17 = var12.type;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 36;
            var16 = var21[var16];
            var16 = var18.bind(var5)(var16);
            var16 = var16.CollectiblesItemType;
            var16 = var16.BUNDLE;
            var7 = var17 !== var16;
 445:
            if(!var7) { _fun0006_ip = 489; continue _fun0006 }
 448:
            var17 = var12.type;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 36;
            var16 = var21[var16];
            var16 = var18.bind(var5)(var16);
            var16 = var16.CollectiblesItemType;
            var16 = var16.EXTERNAL_SKU;
            var7 = var17 !== var16;
 489:
            if(var9) { _fun0006_ip = 1368; continue _fun0006 }
 495:
            if(!var2) { _fun0006_ip = 544; continue _fun0006 }
 498:
            if(var19) { _fun0006_ip = 544; continue _fun0006 }
 501:
            if(var3) { _fun0006_ip = 544; continue _fun0006 }
 504:
            var17 = _closure1_slot10;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 38;
            var9 = var18[var9];
            var9 = var16.bind(var5)(var9);
            var16 = var9.UnlockWithNitroButton;
            var9 = {};
            var9 = var17.bind(var5)(var16, var9);
            return var9;
 544:
            if(var3) { _fun0006_ip = 1258; continue _fun0006 }
 550:
            if(!var2) { _fun0006_ip = 559; continue _fun0006 }
 553:
            if(var19) { _fun0006_ip = 1258; continue _fun0006 }
 559:
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 39;
            var2 = var18[var2];
            var9 = var16.bind(var5)(var2);
            var3 = var9.match;
            var2 = var12.type;
            var17 = var3.bind(var9)(var2);
            var9 = var17.with;
            var22 = 36;
            var2 = var18[var22];
            var2 = var16.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var3 = var2.BUNDLE;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 18;
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
            var17 = var9.bind(var17)(var3, var2);
            var9 = var17.with;
            var2 = var18[var22];
            var2 = var16.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var3 = var2.PROFILE_EFFECT;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 18;
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
            var17 = var9.bind(var17)(var3, var2);
            var9 = var17.with;
            var2 = var18[var22];
            var2 = var16.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var3 = var2.NAMEPLATE;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 18;
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
            var17 = var9.bind(var17)(var3, var2);
            var9 = var17.with;
            var2 = var18[var22];
            var2 = var16.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var3 = var2.AVATAR_DECORATION;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 18;
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
                var1 = 18;
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
            var25 = var2.bind(var3)(var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var17 = _closure1_slot10;
            var9 = 40;
            var9 = var18[var9];
            var9 = var16.bind(var5)(var9);
            var16 = var9.TextWithIOSLinkWorkaround;
            var9 = {};
            if(var20) { _fun0006_ip = 821; continue _fun0006 }
 813:
            var18 = var15.disclaimer;
            _fun0006_ip = 827; continue _fun0006;
 821:
            var18 = var15.disclaimerCondensed;
 827:
            var9['style'] = var18;
            var18 = 'text-xs/normal';
            if(!var20) { _fun0006_ip = 846; continue _fun0006 }
 840:
            var18 = 'text-xxs/normal';
 846:
            var9['variant'] = var18;
            var18 = 'interactive-active';
            var9['color'] = var18;
            var20 = var12.type;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var22];
            var18 = var21.bind(var5)(var18);
            var18 = var18.CollectiblesItemType;
            var18 = var18.EXTERNAL_SKU;
            var18 = var20 !== var18;
            if(!var18) { _fun0006_ip = 979; continue _fun0006 }
 901:
            var21 = _closure1_slot0;
            var28 = _closure1_slot2;
            var20 = 18;
            var22 = var28[var20];
            var22 = var21.bind(var5)(var22);
            var27 = var22.intl;
            var22 = var27.format;
            var20 = var28[var20];
            var20 = var21.bind(var5)(var20);
            var20 = var20.t;
            var21 = var20.iIglwM;
            var20 = {};
            var20['buyButtonLabel'] = var25;
            var28 = _closure1_slot8;
            var28 = var28.PAID_TERMS;
            var20['paidServiceTermURL'] = var28;
            var18 = var22.bind(var27)(var21, var20);
 979:
            var9['children'] = var18;
            var16 = var17.bind(var5)(var16, var9);
            var9 = new Array(4);
            var9[0] = var16;
            var16 = var10;
            if(!var16) { _fun0006_ip = 1029; continue _fun0006 }
 1003:
            var20 = _closure1_slot10;
            var18 = _closure1_slot16;
            var17 = {};
            var17['product'] = var12;
            var17['isPremiumUser'] = var19;
            var16 = var20.bind(var5)(var18, var17);
 1029:
            var9[1] = var16;
            var18 = _closure1_slot11;
            var17 = _closure1_slot5;
            var16 = {};
            var20 = var15.buttonContainer;
            var16['style'] = var20;
            var22 = _closure1_slot10;
            var21 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = 41;
            var20 = var27[var20];
            var20 = var21.bind(var5)(var20);
            var21 = var20.Button;
            var20 = {};
            var20['loading'] = var26;
            var20['text'] = var25;
            var20['onPress'] = var24;
            var20['disabled'] = var23;
            var25 = 'primary';
            var23 = var25;
            if(!var10) { _fun0006_ip = 1116; continue _fun0006 }
 1112:
            var23 = 'secondary';
 1116:
            var20['variant'] = var23;
            var23 = 'lg';
            var20['size'] = var23;
            var23 = true;
            var20['grow'] = var23;
            var21 = var22.bind(var5)(var21, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var21 = var7;
            if(!var7) { _fun0006_ip = 1192; continue _fun0006 }
 1155:
            var24 = _closure1_slot10;
            var23 = _closure1_slot15;
            var22 = {};
            var22['product'] = var12;
            var22['analyticsLocations'] = var11;
            if(!var10) { _fun0006_ip = 1182; continue _fun0006 }
 1178:
            var25 = 'secondary';
 1182:
            var22['variant'] = var25;
            var21 = var24.bind(var5)(var23, var22);
 1192:
            var20[1] = var21;
            var16['children'] = var20;
            var16 = var18.bind(var5)(var17, var16);
            var9[2] = var16;
            var10 = !var10;
            if(!var10) { _fun0006_ip = 1242; continue _fun0006 }
 1216:
            var18 = _closure1_slot10;
            var17 = _closure1_slot16;
            var16 = {};
            var16['product'] = var12;
            var16['isPremiumUser'] = var19;
            var10 = var18.bind(var5)(var17, var16);
 1242:
            var9[3] = var10;
            var1['children'] = var9;
            var1 = var3.bind(var5)(var2, var1);
            return var1;
 1258:
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 37;
            var1 = var18[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var9 = var15.button;
            var1['style'] = var9;
            var17 = _closure1_slot0;
            var9 = 18;
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
 1368:
            var2 = var12.type;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 36;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.EXTERNAL_SKU;
            var1 = var2 !== var1;
            if(!var1) { _fun0006_ip = 1592; continue _fun0006 }
 1415:
            var4 = _closure1_slot11;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var15.buttonContainer;
            var2['style'] = var6;
            var10 = _closure1_slot10;
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
            var14 = 18;
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
            if(!var7) { _fun0006_ip = 1578; continue _fun0006 }
 1552:
            var10 = _closure1_slot10;
            var9 = _closure1_slot15;
            var8 = {};
            var8['product'] = var12;
            var8['analyticsLocations'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 1578:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1592:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();