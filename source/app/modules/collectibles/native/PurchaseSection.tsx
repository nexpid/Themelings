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
    var15 = var6[var11];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_SECONDARY;
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
    var15 = var15.PX_4;
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
    var9 = {'opacity': 0.5, 'marginTop': null, 'marginBottom': 20};
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var9['marginTop'] = var14;
    var4['disclaimer'] = var9;
    var9 = {'opacity': 0.5, 'marginBottom': 20};
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
    var4 = {};
    var7 = 'function PurchaseSectionTsx1(){const{bottomSheet,screenHeight,maxHeight}=this.__closure;const animatedSheetOffset=bottomSheet.animatedPosition!=null?bottomSheet.animatedPosition.get()-screenHeight+maxHeight:0;return{transform:[{translateY:-animatedSheetOffset}]};}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = 48;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/PurchaseSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var2 = var1.product;
            var _closure2_slot0 = var2;
            var16 = var1.analyticsLocations;
            var _closure2_slot1 = var16;
            var15 = var1.onBuy;
            var3 = var1.condensed;
            var _closure2_slot2 = var3;
            var1 = var1.onHeightChange;
            var _closure2_slot3 = var1;
            var4 = undefined;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var1 = _closure1_slot14;
            var6 = var1.bind(var4)();
            var _closure2_slot4 = var6;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 28;
            var1 = var8[var1];
            var3 = var11.bind(var4)(var1);
            var1 = var3.useCurrentUser;
            var7 = var1.bind(var3)();
            var1 = 29;
            var1 = var8[var1];
            var3 = var11.bind(var4)(var1);
            var1 = var3.useProductPurchaseState;
            var1 = var1.bind(var3)(var2);
            var3 = var1.isPurchased;
            var _closure2_slot5 = var3;
            var1 = var1.isPartiallyOwnedBundle;
            var _closure2_slot6 = var1;
            var1 = 30;
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
            var _closure2_slot7 = var1;
            var13 = _closure1_slot1;
            var1 = 31;
            var1 = var8[var1];
            var3 = var13.bind(var4)(var1);
            var1 = var3.canUseCollectibles;
            var14 = var1.bind(var3)(var7);
            var _closure2_slot8 = var14;
            var7 = 32;
            var1 = var8[var7];
            var3 = var11.bind(var4)(var1);
            var1 = var3.isPremiumCollectiblesProduct;
            var1 = var1.bind(var3)(var2);
            var _closure2_slot9 = var1;
            var3 = var8[var7];
            var10 = var11.bind(var4)(var3);
            var3 = var10.isFreeCollectiblesProduct;
            var10 = var3.bind(var10)(var2);
            var _closure2_slot10 = var10;
            var3 = var8[var7];
            var12 = var11.bind(var4)(var3);
            var3 = var12.isOrbsExclusiveCollectiblesProduct;
            var3 = var3.bind(var12)(var2);
            var _closure2_slot11 = var3;
            var12 = 33;
            var12 = var8[var12];
            var17 = var11.bind(var4)(var12);
            var12 = var17.useFetchVirtualCurrencyBalance;
            var12 = var12.bind(var17)();
            var12 = var12.balance;
            var _closure2_slot12 = var12;
            var12 = 16;
            var12 = var8[var12];
            var17 = var11.bind(var4)(var12);
            var12 = var17.useVirtualCurrencyData;
            var12 = var12.bind(var17)(var2, var14);
            var12 = var12.canAfford;
            var _closure2_slot13 = var12;
            var12 = 34;
            var12 = var8[var12];
            var18 = var11.bind(var4)(var12);
            var17 = var18.useHandleUseNow;
            var12 = {};
            var12['product'] = var2;
            var12 = var17.bind(var18)(var12);
            var17 = var12.handleUseNow;
            var _closure2_slot14 = var17;
            var12 = var12.isApplying;
            var _closure2_slot15 = var12;
            var12 = 35;
            var12 = var8[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['product'] = var2;
            var12['analyticsLocations'] = var16;
            var12['onBuy'] = var15;
            var12 = var13.bind(var4)(var12);
            var13 = var12.handleBuyNow;
            var _closure2_slot16 = var13;
            var12 = var12.isBuying;
            var _closure2_slot17 = var12;
            var12 = 36;
            var12 = var8[var12];
            var15 = var11.bind(var4)(var12);
            var13 = var15.useHandleClaim;
            var12 = {};
            var12['product'] = var2;
            var12 = var13.bind(var15)(var12);
            var12 = var12.handleClaim;
            var _closure2_slot18 = var12;
            var12 = var8[var7];
            var13 = var11.bind(var4)(var12);
            var12 = var13.getDefaultPriceSetAssignmentPurchaseType;
            var12 = var12.bind(var13)(var14);
            var8 = var8[var7];
            var11 = var11.bind(var4)(var8);
            var8 = var11.extractPriceByPurchaseTypes;
            var8 = var8.bind(var11)(var2, var12);
            if(var1) { _fun0005_ip = 595; continue _fun0005 }
 592:
            var1 = var10;
 595:
            if(var1) { _fun0005_ip = 601; continue _fun0005 }
 598:
            var1 = var3;
 601:
            if(var1) { _fun0005_ip = 645; continue _fun0005 }
 604:
            var10 = var2.type;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 37;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.BUNDLE;
            var1 = var10 === var3;
 645:
            if(var1) { _fun0005_ip = 689; continue _fun0005 }
 648:
            var3 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 37;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.EXTERNAL_SKU;
            var1 = var3 === var2;
 689:
            if(var1) { _fun0005_ip = 737; continue _fun0005 }
 692:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var7 = var3.bind(var4)(var2);
            var3 = var7.shouldHideGiftingForCurrency;
            var2 = null;
            var10 = var2 == var8;
            var2 = undefined;
            if(var10) { _fun0005_ip = 732; continue _fun0005 }
 726:
            var2 = var8.currency;
 732:
            var1 = var3.bind(var7)(var2);
 737:
            var1 = !var1;
            _closure2_slot19 = var1;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 38;
            var1 = var10[var1];
            var3 = var2.bind(var4)(var1);
            var1 = {};
            var7 = true;
            var1['ignoreKeyboard'] = var7;
            var1 = var3.bind(var4)(var1);
            var14 = var1.height;
            _closure2_slot20 = var14;
            var1 = 39;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var13 = var1.maximum;
            _closure2_slot21 = var13;
            var1 = 40;
            var1 = var10[var1];
            var3 = var2.bind(var4)(var1);
            var1 = {'includeCustomKeyboardHeight': false, 'includeKeyboardHeight': true};
            var1 = var3.bind(var4)(var1);
            var8 = var1.insets;
            var7 = _closure1_slot0;
            var1 = 41;
            var1 = var10[var1];
            var3 = var7.bind(var4)(var1);
            var1 = var3.useBottomSheet;
            var15 = var1.bind(var3)();
            _closure2_slot22 = var15;
            var1 = 42;
            var3 = var10[var1];
            var11 = var7.bind(var4)(var3);
            var7 = var11.useAnimatedStyle;
            var3 = function C() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = {};
                    var3 = {};
                    var2 = _closure2_slot22;
                    var5 = var2.animatedPosition;
                    var2 = null;
                    var5 = var2 != var5;
                    var2 = 0;
                    if(!var5) { _fun0006_ip = 63; continue _fun0006 }
 28:
                    var5 = _closure2_slot22;
                    var6 = var5.animatedPosition;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var5 = _closure2_slot20;
                    var5 = var6 - var5;
                    var4 = _closure2_slot21;
                    var2 = var5 + var4;
 63:
                    var2 = -var2;
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['bottomSheet'] = var15;
            var12['screenHeight'] = var14;
            var12['maxHeight'] = var13;
            var3['__closure'] = var12;
            var12 = 6373010349557.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot17;
            var3['__initData'] = var12;
            var7 = var7.bind(var11)(var3);
            var3 = _closure1_slot11;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var10 = var6.container;
            var6 = new Array(3);
            var6[0] = var10;
            var6[1] = var7;
            var7 = {};
            var8 = var8.bottom;
            var10 = null;
            if(!(var10 == var8)) { _fun0005_ip = 1039; continue _fun0005 }
 1009:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 9;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.spacing;
            var8 = var9.PX_16;
 1039:
            var7['paddingBottom'] = var8;
            var6[2] = var7;
            var1['style'] = var6;
            var6 = function onLayout(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 44; continue _fun0007 }
 13:
                    var3 = _closure2_slot3;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var2 = var1.height;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onLayout'] = var6;
            var5 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0008_ip = 1109; continue _fun0008 }
 15:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0008_ip = 81; continue _fun0008 }
 22:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0008_ip = 81; continue _fun0008 }
 29:
                    var2 = _closure2_slot10;
                    if(var2) { _fun0008_ip = 81; continue _fun0008 }
 36:
                    var5 = _closure1_slot11;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 44;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.UnlockWithNitroButton;
                    var2 = {};
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 81:
                    var2 = _closure2_slot10;
                    if(var2) { _fun0008_ip = 982; continue _fun0008 }
 91:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0008_ip = 108; continue _fun0008 }
 98:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0008_ip = 982; continue _fun0008 }
 108:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 45;
                    var5 = var2[var4];
                    var4 = undefined;
                    var7 = var3.bind(var4)(var5);
                    var6 = var7.match;
                    var5 = _closure2_slot0;
                    var5 = var5.type;
                    var8 = var6.bind(var7)(var5);
                    var7 = var8.with;
                    var14 = 37;
                    var5 = var2[var14];
                    var5 = var3.bind(var4)(var5);
                    var5 = var5.CollectiblesItemType;
                    var6 = var5.BUNDLE;
                    var5 = function() {
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
                    var8 = var7.bind(var8)(var6, var5);
                    var7 = var8.with;
                    var5 = var2[var14];
                    var5 = var3.bind(var4)(var5);
                    var5 = var5.CollectiblesItemType;
                    var6 = var5.PROFILE_EFFECT;
                    var5 = function() {
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
                    var8 = var7.bind(var8)(var6, var5);
                    var7 = var8.with;
                    var5 = var2[var14];
                    var5 = var3.bind(var4)(var5);
                    var5 = var5.CollectiblesItemType;
                    var6 = var5.NAMEPLATE;
                    var5 = function() {
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
                    var6 = var7.bind(var8)(var6, var5);
                    var5 = var6.with;
                    var2 = var2[var14];
                    var2 = var3.bind(var4)(var2);
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
                    var3 = var5.bind(var6)(var3, var2);
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
                    var19 = var2.bind(var3)(var1);
                    var3 = _closure1_slot12;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var5 = _closure2_slot11;
                    var6 = !var5;
                    if(!var6) { _fun0008_ip = 586; continue _fun0008 }
 357:
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 46;
                    var5 = var9[var5];
                    var5 = var7.bind(var4)(var5);
                    var7 = var5.TextWithIOSLinkWorkaround;
                    var5 = {};
                    var9 = _closure2_slot2;
                    var10 = _closure2_slot4;
                    if(var9) { _fun0008_ip = 408; continue _fun0008 }
 400:
                    var9 = var10.disclaimer;
                    _fun0008_ip = 414; continue _fun0008;
 408:
                    var9 = var10.disclaimerCondensed;
 414:
                    var5['style'] = var9;
                    var10 = _closure2_slot2;
                    var9 = 'text-xs/normal';
                    if(!var10) { _fun0008_ip = 437; continue _fun0008 }
 431:
                    var9 = 'text-xxs/normal';
 437:
                    var5['variant'] = var9;
                    var9 = 'interactive-active';
                    var5['color'] = var9;
                    var9 = _closure2_slot0;
                    var10 = var9.type;
                    var13 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var14];
                    var9 = var13.bind(var4)(var9);
                    var9 = var9.CollectiblesItemType;
                    var9 = var9.EXTERNAL_SKU;
                    var9 = var10 !== var9;
                    if(!var9) { _fun0008_ip = 576; continue _fun0008 }
 496:
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var10 = 15;
                    var14 = var16[var10];
                    var14 = var13.bind(var4)(var14);
                    var15 = var14.intl;
                    var14 = var15.format;
                    var10 = var16[var10];
                    var10 = var13.bind(var4)(var10);
                    var10 = var10.t;
                    var13 = var10.iIglwM;
                    var10 = {};
                    var10['buyButtonLabel'] = var19;
                    var16 = _closure1_slot8;
                    var16 = var16.PAID_TERMS;
                    var10['paidServiceTermURL'] = var16;
                    var9 = var14.bind(var15)(var13, var10);
 576:
                    var5['children'] = var9;
                    var6 = var8.bind(var4)(var7, var5);
 586:
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot5;
                    var6 = {};
                    var9 = _closure2_slot4;
                    var9 = var9.purchaseButtonsWrapper;
                    var6['style'] = var9;
                    var10 = _closure2_slot13;
                    if(!var10) { _fun0008_ip = 668; continue _fun0008 }
 625:
                    var14 = _closure1_slot11;
                    var13 = _closure1_slot16;
                    var9 = {};
                    var15 = _closure2_slot0;
                    var9['product'] = var15;
                    var15 = _closure2_slot8;
                    var9['isPremiumUser'] = var15;
                    var15 = _closure2_slot12;
                    var9['balance'] = var15;
                    var10 = var14.bind(var4)(var13, var9);
 668:
                    var9 = new Array(3);
                    var9[0] = var10;
                    var10 = _closure2_slot11;
                    var10 = !var10;
                    if(!var10) { _fun0008_ip = 895; continue _fun0008 }
 689:
                    var15 = _closure1_slot12;
                    var14 = _closure1_slot5;
                    var13 = {};
                    var16 = _closure2_slot4;
                    var16 = var16.buttonContainer;
                    var13['style'] = var16;
                    var18 = _closure1_slot11;
                    var17 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var16 = 47;
                    var16 = var20[var16];
                    var16 = var17.bind(var4)(var16);
                    var17 = var16.Button;
                    var16 = {};
                    var20 = _closure2_slot17;
                    var16['loading'] = var20;
                    var16['text'] = var19;
                    var19 = _closure2_slot16;
                    var16['onPress'] = var19;
                    var19 = _closure2_slot6;
                    var16['disabled'] = var19;
                    var20 = _closure2_slot13;
                    var21 = 'primary';
                    var19 = var21;
                    if(!var20) { _fun0008_ip = 792; continue _fun0008 }
 788:
                    var19 = 'secondary';
 792:
                    var16['variant'] = var19;
                    var19 = 'lg';
                    var16['size'] = var19;
                    var19 = true;
                    var16['grow'] = var19;
                    var17 = var18.bind(var4)(var17, var16);
                    var16 = new Array(2);
                    var16[0] = var17;
                    var17 = _closure2_slot19;
                    if(!var17) { _fun0008_ip = 881; continue _fun0008 }
 832:
                    var20 = _closure1_slot11;
                    var19 = _closure1_slot15;
                    var18 = {};
                    var22 = _closure2_slot0;
                    var18['product'] = var22;
                    var22 = _closure2_slot1;
                    var18['analyticsLocations'] = var22;
                    var22 = _closure2_slot13;
                    if(!var22) { _fun0008_ip = 871; continue _fun0008 }
 867:
                    var21 = 'secondary';
 871:
                    var18['variant'] = var21;
                    var17 = var20.bind(var4)(var19, var18);
 881:
                    var16[1] = var17;
                    var13['children'] = var16;
                    var10 = var15.bind(var4)(var14, var13);
 895:
                    var9[1] = var10;
                    var10 = _closure2_slot13;
                    var10 = !var10;
                    if(!var10) { _fun0008_ip = 952; continue _fun0008 }
 909:
                    var14 = _closure1_slot11;
                    var13 = _closure1_slot16;
                    var12 = {};
                    var15 = _closure2_slot0;
                    var12['product'] = var15;
                    var15 = _closure2_slot8;
                    var12['isPremiumUser'] = var15;
                    var15 = _closure2_slot12;
                    var12['balance'] = var15;
                    var10 = var14.bind(var4)(var13, var12);
 952:
                    var9[2] = var10;
                    var6['children'] = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 982:
                    var4 = _closure1_slot11;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 43;
                    var1 = var9[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot4;
                    var6 = var6.button;
                    var1['style'] = var6;
                    var8 = _closure1_slot0;
                    var5 = 15;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.zp6caG;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var5 = _closure2_slot7;
                    var1['loading'] = var5;
                    var5 = _closure2_slot18;
                    var1['onPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 1109:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 37;
                    var1 = var4[var1];
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.EXTERNAL_SKU;
                    var1 = var2 !== var1;
                    if(!var1) { _fun0008_ip = 1366; continue _fun0008 }
 1165:
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var10 = _closure2_slot4;
                    var6 = var10.buttonContainer;
                    var2['style'] = var6;
                    var9 = _closure1_slot11;
                    var7 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var6 = 43;
                    var6 = var15[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = {};
                    var10 = var10.button;
                    var6['style'] = var10;
                    var10 = _closure2_slot15;
                    var6['loading'] = var10;
                    var14 = _closure1_slot0;
                    var10 = 15;
                    var12 = var15[var10];
                    var12 = var14.bind(var5)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var10 = var15[var10];
                    var10 = var14.bind(var5)(var10);
                    var10 = var10.t;
                    var10 = var10.MAS7uL;
                    var10 = var12.bind(var13)(var10);
                    var6['text'] = var10;
                    var10 = _closure2_slot14;
                    var6['onPress'] = var10;
                    var7 = var9.bind(var5)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = _closure2_slot19;
                    if(!var7) { _fun0008_ip = 1352; continue _fun0008 }
 1318:
                    var10 = _closure1_slot11;
                    var9 = _closure1_slot15;
                    var8 = {};
                    var12 = _closure2_slot0;
                    var8['product'] = var12;
                    var11 = _closure2_slot1;
                    var8['analyticsLocations'] = var11;
                    var7 = var10.bind(var5)(var9, var8);
 1352:
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 1366:
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