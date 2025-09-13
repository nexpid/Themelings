// app/modules/collectibles/native/PurchaseSection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
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
    var4 = var11.bind(var1)(var4);
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
    var10 = 9;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['button'] = var9;
    var10 = 0.5;
    var9 = {'opacity': 0.5, 'marginTop': 4};
    var4['disclaimer'] = var9;
    var9 = {};
    var9['opacity'] = var10;
    var4['disclaimerCondensed'] = var9;
    var9 = {};
    var10 = 40;
    var9['height'] = var10;
    var4['unlockWithNitroButton'] = var9;
    var9 = {'flexDirection': 'row', 'gap': 12};
    var4['buttonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = function GiftButton(arg1) {
        var1 = arg1;
        var2 = var1.product;
        var _closure2_slot0 = var2;
        var1 = var1.analyticsLocations;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot10;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 10;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {'size': 'md', 'variant': 'primary'};
        var11 = 'md';
        var6 = 11;
        var6 = var9[var6];
        var6 = var8.bind(var3)(var6);
        var7 = var6.GiftIcon;
        var6 = {};
        var6['size'] = var11;
        var11 = _closure1_slot1;
        var10 = 9;
        var10 = var9[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.colors;
        var10 = var10.WHITE;
        var6['color'] = var10;
        var6 = var4.bind(var3)(var7, var6);
        var1['icon'] = var6;
        var5 = function onPress() {
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
        var1['onPress'] = var5;
        var5 = 15;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.PEjaCw;
        var5 = var6.bind(var7)(var5);
        var1['accessibilityLabel'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/PurchaseSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var12 = var2.product;
            var _closure2_slot0 = var12;
            var11 = var2.analyticsLocations;
            var18 = var2.onBuy;
            var19 = var2.condensed;
            var2 = _closure1_slot13;
            var5 = undefined;
            var15 = var2.bind(var5)();
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 16;
            var2 = var17[var2];
            var3 = var16.bind(var5)(var2);
            var2 = var3.useCurrentUser;
            var4 = var2.bind(var3)();
            var2 = 17;
            var2 = var17[var2];
            var3 = var16.bind(var5)(var2);
            var2 = var3.useProductPurchaseState;
            var2 = var2.bind(var3)(var12);
            var10 = var2.isPurchased;
            var20 = var2.isPartiallyOwnedBundle;
            var2 = 18;
            var2 = var17[var2];
            var9 = var16.bind(var5)(var2);
            var7 = var9.useStateFromStoresArray;
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
            var6 = var7.bind(var9)(var6, var2, var3);
            var3 = _closure1_slot3;
            var2 = 1;
            var3 = var3.bind(var5)(var6, var2);
            var2 = 0;
            var6 = var3[var2];
            var7 = _closure1_slot1;
            var2 = 19;
            var2 = var17[var2];
            var3 = var7.bind(var5)(var2);
            var2 = var3.canUseCollectibles;
            var2 = var2.bind(var3)(var4);
            var4 = 20;
            var3 = var17[var4];
            var9 = var16.bind(var5)(var3);
            var3 = var9.isPremiumCollectiblesProduct;
            var3 = var3.bind(var9)(var12);
            var4 = var17[var4];
            var9 = var16.bind(var5)(var4);
            var4 = var9.isFreeCollectiblesProduct;
            var9 = var4.bind(var9)(var12);
            var4 = 21;
            var4 = var17[var4];
            var14 = var16.bind(var5)(var4);
            var13 = var14.useHandleUseNow;
            var4 = {};
            var4['product'] = var12;
            var4 = var13.bind(var14)(var4);
            var13 = var4.handleUseNow;
            var14 = var4.isApplying;
            var4 = 22;
            var4 = var17[var4];
            var7 = var7.bind(var5)(var4);
            var4 = {};
            var4['product'] = var12;
            var4['analyticsLocations'] = var11;
            var4['onBuy'] = var18;
            var4 = var7.bind(var5)(var4);
            var22 = var4.handleBuyNow;
            var26 = var4.isBuying;
            var4 = 23;
            var4 = var17[var4];
            var18 = var16.bind(var5)(var4);
            var7 = var18.useHandleClaim;
            var4 = {};
            var4['product'] = var12;
            var4 = var7.bind(var18)(var4);
            var4 = var4.handleClaim;
            var7 = 24;
            var7 = var17[var7];
            var16 = var16.bind(var5)(var7);
            var7 = var16.useNavigation;
            var7 = var7.bind(var16)();
            var _closure2_slot1 = var7;
            var18 = _closure1_slot4;
            var17 = var18.useCallback;
            var16 = new Array(2);
            var16[0] = var7;
            var16[1] = var12;
            var7 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var4 = var6.hideActionSheet;
                var4 = var4.bind(var6)();
                var4 = 25;
                var4 = var2[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.pushLazy;
                var4 = _closure1_slot0;
                var3 = 27;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 26;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var2 = _closure2_slot0;
                var2 = var2.skuId;
                var3['skuId'] = var2;
                var2 = function onCheckoutSuccess() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 25;
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
                        if(!(var5 !== var2)) { _fun0002_ip = 147; continue _fun0002 }
 69:
                        var2 = _closure2_slot0;
                        var5 = var2.skuId;
                        var2 = _closure1_slot7;
                        var2 = var2.FRACTIONAL_PREMIUM;
                        if(!(var5 !== var2)) { _fun0002_ip = 238; continue _fun0002 }
 96:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 29;
                        var2 = var6[var2];
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.open;
                        var2 = {};
                        var7 = _closure2_slot0;
                        var2['product'] = var7;
                        var7 = true;
                        var2['useCategoryImage'] = var7;
                        var2 = var5.bind(var6)(var2);
                        _fun0002_ip = 238; continue _fun0002;
 147:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = var2[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.pushLazy;
                        var4 = _closure1_slot0;
                        var3 = 27;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 28;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var3 = {};
                        var2 = 'ORB_BADGE_COLLECTED_MODAL';
                        var3['modalKey'] = var2;
                        var7 = function onPressViewBadge() {
                            var3 = _closure2_slot1;
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
            var24 = var17.bind(var18)(var7, var16);
            var7 = !var3;
            if(!var7) { _fun0001_ip = 445; continue _fun0001 }
 442:
            var7 = !var9;
 445:
            if(!var7) { _fun0001_ip = 489; continue _fun0001 }
 448:
            var17 = var12.type;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 30;
            var16 = var21[var16];
            var16 = var18.bind(var5)(var16);
            var16 = var16.CollectiblesItemType;
            var16 = var16.BUNDLE;
            var7 = var17 !== var16;
 489:
            if(!var7) { _fun0001_ip = 533; continue _fun0001 }
 492:
            var17 = var12.type;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 30;
            var16 = var21[var16];
            var16 = var18.bind(var5)(var16);
            var16 = var16.CollectiblesItemType;
            var16 = var16.EXTERNAL_SKU;
            var7 = var17 !== var16;
 533:
            if(var10) { _fun0001_ip = 1333; continue _fun0001 }
 539:
            if(!var3) { _fun0001_ip = 588; continue _fun0001 }
 542:
            if(var2) { _fun0001_ip = 588; continue _fun0001 }
 545:
            if(var9) { _fun0001_ip = 588; continue _fun0001 }
 548:
            var17 = _closure1_slot10;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 32;
            var10 = var18[var10];
            var10 = var16.bind(var5)(var10);
            var16 = var10.UnlockWithNitroButton;
            var10 = {};
            var10 = var17.bind(var5)(var16, var10);
            return var10;
 588:
            if(var9) { _fun0001_ip = 1223; continue _fun0001 }
 594:
            if(!var3) { _fun0001_ip = 603; continue _fun0001 }
 597:
            if(var2) { _fun0001_ip = 1223; continue _fun0001 }
 603:
            var27 = _closure1_slot0;
            var25 = _closure1_slot2;
            var2 = 33;
            var2 = var25[var2];
            var9 = var27.bind(var5)(var2);
            var3 = var9.match;
            var2 = var12.type;
            var10 = var3.bind(var9)(var2);
            var9 = var10.with;
            var21 = 30;
            var2 = var25[var21];
            var2 = var27.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var3 = var2.BUNDLE;
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
                var1 = var1.V1AWw8;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var3, var2);
            var9 = var10.with;
            var2 = var25[var21];
            var2 = var27.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var3 = var2.PROFILE_EFFECT;
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
                var1 = var1.kAeDcH;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var3, var2);
            var9 = var10.with;
            var2 = var25[var21];
            var2 = var27.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var3 = var2.NAMEPLATE;
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
                var1 = var1.H3vhqa;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var3, var2);
            var9 = var10.with;
            var2 = var25[var21];
            var2 = var27.bind(var5)(var2);
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
            var23 = var2.bind(var3)(var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var10 = _closure1_slot5;
            var9 = {};
            var16 = var15.buttonContainer;
            var9['style'] = var16;
            var18 = _closure1_slot10;
            var17 = _closure1_slot1;
            var16 = 31;
            var16 = var25[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var28 = var15.button;
            var16['style'] = var28;
            var16['loading'] = var26;
            var16['text'] = var23;
            var26 = var12.type;
            var25 = var25[var21];
            var25 = var27.bind(var5)(var25);
            var25 = var25.CollectiblesItemType;
            var25 = var25.EXTERNAL_SKU;
            if(!(var26 === var25)) { _fun0001_ip = 920; continue _fun0001 }
 917:
            var22 = var24;
 920:
            var16['onPress'] = var22;
            var16['disabled'] = var20;
            var17 = var18.bind(var5)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var17 = var7;
            if(!var7) { _fun0001_ip = 974; continue _fun0001 }
 948:
            var22 = _closure1_slot10;
            var20 = _closure1_slot14;
            var18 = {};
            var18['product'] = var12;
            var18['analyticsLocations'] = var11;
            var17 = var22.bind(var5)(var20, var18);
 974:
            var16[1] = var17;
            var9['children'] = var16;
            var10 = var3.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var17 = _closure1_slot10;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 34;
            var10 = var18[var10];
            var10 = var16.bind(var5)(var10);
            var16 = var10.TextWithIOSLinkWorkaround;
            var10 = {};
            if(var19) { _fun0001_ip = 1039; continue _fun0001 }
 1031:
            var18 = var15.disclaimer;
            _fun0001_ip = 1045; continue _fun0001;
 1039:
            var18 = var15.disclaimerCondensed;
 1045:
            var10['style'] = var18;
            var18 = 'text-xs/normal';
            if(!var19) { _fun0001_ip = 1064; continue _fun0001 }
 1058:
            var18 = 'text-xxs/normal';
 1064:
            var10['variant'] = var18;
            var18 = 'interactive-active';
            var10['color'] = var18;
            var19 = var12.type;
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var21];
            var18 = var20.bind(var5)(var18);
            var18 = var18.CollectiblesItemType;
            var18 = var18.EXTERNAL_SKU;
            var18 = var19 !== var18;
            if(!var18) { _fun0001_ip = 1197; continue _fun0001 }
 1119:
            var20 = _closure1_slot0;
            var24 = _closure1_slot2;
            var19 = 15;
            var21 = var24[var19];
            var21 = var20.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.format;
            var19 = var24[var19];
            var19 = var20.bind(var5)(var19);
            var19 = var19.t;
            var20 = var19.iIglwM;
            var19 = {};
            var19['buyButtonLabel'] = var23;
            var23 = _closure1_slot8;
            var23 = var23.PAID_TERMS;
            var19['paidServiceTermURL'] = var23;
            var18 = var21.bind(var22)(var20, var19);
 1197:
            var10['children'] = var18;
            var10 = var17.bind(var5)(var16, var10);
            var9[1] = var10;
            var1['children'] = var9;
            var1 = var3.bind(var5)(var2, var1);
            return var1;
 1223:
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 31;
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
 1333:
            var2 = var12.type;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 30;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.EXTERNAL_SKU;
            var1 = var2 !== var1;
            if(!var1) { _fun0001_ip = 1557; continue _fun0001 }
 1380:
            var4 = _closure1_slot11;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var15.buttonContainer;
            var2['style'] = var6;
            var10 = _closure1_slot10;
            var9 = _closure1_slot1;
            var18 = _closure1_slot2;
            var6 = 31;
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
            if(!var7) { _fun0001_ip = 1543; continue _fun0001 }
 1517:
            var10 = _closure1_slot10;
            var9 = _closure1_slot14;
            var8 = {};
            var8['product'] = var12;
            var8['analyticsLocations'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 1543:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1557:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();