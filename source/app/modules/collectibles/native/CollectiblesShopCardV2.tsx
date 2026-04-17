// app/modules/collectibles/native/CollectiblesShopCardV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var15 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var15;
        var _closure1_slot2 = var8;
        var1 = global;
        var6 = var1.Object;
        var4 = var6.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var6)(var3, var1, var2);
        var1 = 0;
        var4 = var8[var1];
        var2 = metroImportAll;
        var1 = undefined;
        var9 = var2.bind(var1)(var4);
        var _closure1_slot3 = var9;
        var13 = 1;
        var2 = var8[var13];
        var2 = var7.bind(var1)(var2);
        var4 = var2.PixelRatio;
        var2 = var2.View;
        var _closure1_slot4 = var2;
        var2 = 2;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var2 = var2.ShopCtaEnum;
        var _closure1_slot5 = var2;
        var2 = 3;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var6 = var2.jsx;
        var _closure1_slot6 = var6;
        var2 = var2.jsxs;
        var _closure1_slot7 = var2;
        var2 = var4.getFontScale;
        var4 = var2.bind(var4)();
        var2 = 1.78;
        var2 = var4 >= var2;
        var4 = 170;
        if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = 302;
case 2:
        var2 = 4;
        var2 = var8[var2];
        var11 = var7.bind(var1)(var2);
        var10 = var11.createStyles;
        var6 = {};
        var12 = {'position': 'relative', 'height': null, 'width': 150, 'display': 'flex', 'borderWidth': 1, 'borderRadius': null, 'overflow': 'hidden'};
        var12['height'] = var4;
        var2 = 150;
        var14 = 5;
        var16 = var8[var14];
        var16 = var15.bind(var1)(var16);
        var16 = var16.radii;
        var16 = var16.sm;
        var12['borderRadius'] = var16;
        var14 = var8[var14];
        var14 = var15.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BORDER_SUBTLE;
        var12['borderColor'] = var14;
        var6['card'] = var12;
        var12 = {'position': 'absolute', 'top': 6, 'left': 6, 'right': 6, 'zIndex': 2, 'display': 'flex', 'flexDirection': 'row', 'gap': 4, 'justifyContent': 'space-between', 'alignItems': 'flex-start'};
        var6['topRowOverlay'] = var12;
        var12 = {};
        var12['flexShrink'] = var13;
        var6['badge'] = var12;
        var12 = {'marginLeft': 'auto', 'flexShrink': 0};
        var6['wishlistButton'] = var12;
        var6 = var10.bind(var11)(var6);
        var _closure1_slot8 = var6;
        var6 = function CollectiblesShopCardInternalV2(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var13 = var1.product;
                var2 = var1.onPress;
                var _closure2_slot0 = var2;
                var27 = var1.unpublishedAt;
                var12 = var1.collectibleProductState;
                var15 = var1.solidBackground;
                var11 = var1.preferVCPrice;
                var10 = var1.isDisabled;
                var4 = undefined;
                if(!(var10 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var10 = false;
case 4:
                var3 = var1.cardWidth;
                var20 = var1.cardStyle;
                var2 = var1.hideWishlistButton;
                if(!(var2 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = false;
case 6:
                var9 = var1.hidePrice;
                if(!(var9 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var9 = false;
case 8:
                var7 = var1.isShopCardImpressionEnabled;
                if(!(var7 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var7 = false;
case 10:
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var1 = _closure1_slot8;
                var26 = var1.bind(var4)();
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 6;
                var1 = var8[var1];
                var14 = var5.bind(var4)(var1);
                var1 = var14.useDefaultVariantIndex;
                var17 = var1.bind(var14)(var13);
                var1 = 7;
                var1 = var8[var1];
                var14 = var5.bind(var4)(var1);
                var1 = var14.getSelectedProduct;
                var22 = var1.bind(var14)(var13, var17);
                _closure2_slot1 = var22;
                var1 = 8;
                var1 = var8[var1];
                var5 = var5.bind(var4)(var1);
                var1 = var5.useTrackShopCardImpression;
                var19 = var1.bind(var5)(var13, var22, var7);
                var18 = null;
                if(!(var18 == var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var28 = {};
                var1 = 150;
                var28['width'] = var1;
                _fun0002_ip = 14; continue _fun0002;
case 12:
                var1 = {};
                var1['width'] = var3;
                var28 = var1;
case 14:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var3 = var5.bind(var4)(var1);
                var1 = var3.useCurrentUser;
                var23 = var1.bind(var3)();
                var1 = 10;
                var1 = var7[var1];
                var8 = var5.bind(var4)(var1);
                var3 = var8.useMobileWishlistOwnerExperiment;
                var1 = 'CollectiblesShopCardInternalV2';
                var1 = var3.bind(var8)(var1);
                var17 = var1.showWishlistButtonInProductCard;
                var1 = 11;
                var1 = var7[var1];
                var3 = var5.bind(var4)(var1);
                var1 = var3.isWishlistableCollectiblesProduct;
                var1 = var1.bind(var3)(var22);
                var21 = _closure1_slot1;
                var3 = 12;
                var3 = var7[var3];
                var3 = var21.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var24 = var3.shouldShowWishlistNUXActionSheet;
                _closure2_slot2 = var24;
                var3 = var3.showWishlistNUXActionSheet;
                _closure2_slot3 = var3;
                var25 = _closure1_slot3;
                var14 = var25.useCallback;
                var8 = new Array(3);
                var8[0] = var24;
                var8[1] = var3;
                var8[2] = var22;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var3 = _closure2_slot3;
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 15:
                        var1 = undefined;
                        return var1;
                    }
                };
                var14 = var14.bind(var25)(var3, var8);
                var3 = 13;
                var8 = var7[var3];
                var8 = var5.bind(var4)(var8);
                var24 = var8.intl;
                var8 = var24.string;
                var3 = var7[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.F8FvUy;
                var3 = var8.bind(var24)(var3);
                _closure2_slot4 = var3;
                var24 = var25.useCallback;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var5 = 'WISHLIST_ERROR';
                    var2['key'] = var5;
                    var5 = _closure2_slot4;
                    var2['content'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var8 = var24.bind(var25)(var3, var8);
                var3 = 15;
                var3 = var7[var3];
                var3 = var21.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var25 = var3.analyticsLocations;
                var3 = 16;
                var3 = var7[var3];
                var24 = var5.bind(var4)(var3);
                var21 = var24.useTrackShopCardClick;
                var3 = {};
                var3['product'] = var13;
                var3['analyticsLocations'] = var25;
                var21 = var21.bind(var24)(var3);
                _closure2_slot5 = var21;
                var3 = 17;
                var3 = var7[var3];
                var7 = var5.bind(var4)(var3);
                var5 = var7.useWishlistButtonState;
                var3 = {};
                var23 = var23.id;
                var3['userId'] = var23;
                var22 = var22.skuId;
                var3['skuId'] = var22;
                var3['onAddSuccess'] = var14;
                var3['onError'] = var8;
                var3 = var5.bind(var7)(var3);
                var25 = var3.isWishlisted;
                _closure2_slot6 = var25;
                var23 = var3.isBusy;
                var24 = var3.handleToggle;
                _closure2_slot7 = var24;
                if(!var17) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var3 = 'purchased';
                var3 = var3 === var12;
                var17 = !var3;
case 17:
                if(!var17) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var17 = !var2;
case 19:
                var22 = !var1;
                var1 = var17;
                if(!var17) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var1 = !var22;
case 21:
                if(!var1) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var1 = !var23;
case 23:
                _closure2_slot8 = var1;
                var5 = _closure1_slot3;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var25;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot8;
                        var8 = undefined;
                        var1 = undefined;
                        if(!var3) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                        var3 = {};
                        var4 = 'toggleWishlist';
                        var3['name'] = var4;
                        var2 = _closure2_slot6;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 13;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.t;
                        if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 7:
                        var2 = var4["8DkMEQ"];
                        var2 = var5.bind(var6)(var2);
                        _fun0004_ip = 28; continue _fun0004;
case 27:
                        var4 = var4.yr9TTf;
                        var2 = var5.bind(var6)(var4);
case 28:
                        var3['label'] = var2;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1 = var2;
case 25:
                        return var1;
                    }
                };
                var14 = var3.bind(var5)(var1, var2);
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var24;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = var1.actionName;
                        var1 = 'toggleWishlist';
                        if(!(var1 === var2)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 18;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var1['ref'] = var19;
                var29 = var26.card;
                var19 = new Array(3);
                var19[0] = var29;
                var19[1] = var28;
                var19[2] = var20;
                var1['style'] = var19;
                var16 = function onPress() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = _closure2_slot5;
                        var1 = _closure1_slot5;
                        var3 = var1.OPEN_DETAILS;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0006_ip = 31; continue _fun0006 }
case 29:
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var1)();
case 31:
                        return var1;
                    }
                };
                var1['onPress'] = var16;
                var16 = 0.8;
                var1['activeOpacity'] = var16;
                var16 = 'button';
                var1['accessibilityRole'] = var16;
                var1['accessibilityActions'] = var14;
                var1['onAccessibilityAction'] = var5;
                var5 = 19;
                var5 = var8[var5];
                var7 = var7.bind(var4)(var5);
                var5 = var7.shouldShowLimitedTimeBadge;
                var19 = var5.bind(var7)(var27);
                var5 = 'nitroClaim';
                var16 = var5 === var12;
                if(var19) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                if(var16) { _fun0002_ip = 32; continue _fun0002 }
case 34:
                var7 = null;
                if(!var17) { _fun0002_ip = 35; continue _fun0002 }
case 32:
                var14 = _closure1_slot7;
                var8 = _closure1_slot4;
                var5 = {};
                var20 = var26.topRowOverlay;
                var5['style'] = var20;
                if(var19) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                var18 = null;
                if(!var16) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                var20 = _closure1_slot6;
                var19 = _closure1_slot0;
                var28 = _closure1_slot2;
                var16 = 21;
                var16 = var28[var16];
                var16 = var19.bind(var4)(var16);
                var19 = var16.NitroWheelIcon;
                var16 = {};
                var28 = 'mobile-text-heading-primary';
                var16['color'] = var28;
                var18 = var20.bind(var4)(var19, var16);
case 38:
                _fun0002_ip = 40; continue _fun0002;
case 36:
                var20 = _closure1_slot6;
                var19 = _closure1_slot1;
                var28 = _closure1_slot2;
                var16 = 20;
                var16 = var28[var16];
                var19 = var19.bind(var4)(var16);
                var16 = {};
                var16['unpublishedAt'] = var27;
                var27 = var26.badge;
                var16['style'] = var27;
                var18 = var20.bind(var4)(var19, var16);
case 40:
                var16 = new Array(2);
                var16[0] = var18;
                if(!var17) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                var20 = _closure1_slot6;
                var19 = _closure1_slot0;
                var27 = _closure1_slot2;
                var18 = 22;
                var18 = var27[var18];
                var18 = var19.bind(var4)(var18);
                var19 = var18.WishlistButtonBase;
                var18 = {};
                var26 = var26.wishlistButton;
                var18['style'] = var26;
                var18['isWishlisted'] = var25;
                var18['onPress'] = var24;
                var18['busy'] = var23;
                var18['disabled'] = var22;
                var22 = true;
                var18['accessibilityHidden'] = var22;
                var18['onTrackPress'] = var21;
                var17 = var20.bind(var4)(var19, var18);
case 41:
                var16[1] = var17;
                var5['children'] = var16;
                var7 = var14.bind(var4)(var8, var5);
case 35:
                var5 = new Array(3);
                var5[0] = var7;
                var14 = _closure1_slot6;
                var8 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 23;
                var7 = var16[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['solidBackground'] = var15;
                var7['product'] = var13;
                var15 = 'purchased';
                var15 = var15 === var12;
                if(var15) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                var16 = 'partiallyOwnedBundle';
                var15 = var16 === var12;
case 43:
                var7['isPurchased'] = var15;
                var7['isDisabled'] = var10;
                var7 = var14.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot6;
                var7 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 24;
                var6 = var14[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6['product'] = var13;
                var6['collectibleProductState'] = var12;
                var6['preferVCPrice'] = var11;
                var6['isDisabled'] = var10;
                var6['hidePrice'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot9 = var6;
        var6 = function CollectiblesShopCardV2Inner(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var18 = var2.product;
                var _closure2_slot0 = var18;
                var15 = var2.unpublishedAt;
                var14 = var2.solidBackground;
                var13 = var2.preferVCPrice;
                var11 = var2.cardWidth;
                var10 = var2.cardStyle;
                var9 = var2.hideWishlistButton;
                var8 = var2.hidePrice;
                var3 = var2.onPress;
                var5 = undefined;
                var _closure2_slot4 = var5;
                var _closure2_slot5 = var5;
                var _closure2_slot6 = var5;
                var _closure2_slot7 = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 6;
                var4 = var7[var4];
                var12 = var6.bind(var5)(var4);
                var4 = var12.useDefaultVariantIndex;
                var16 = var4.bind(var12)(var18);
                var _closure2_slot1 = var16;
                var4 = 7;
                var4 = var7[var4];
                var12 = var6.bind(var5)(var4);
                var4 = var12.getSelectedProduct;
                var22 = var4.bind(var12)(var18, var16);
                var12 = _closure1_slot1;
                var4 = 15;
                var4 = var7[var4];
                var4 = var12.bind(var5)(var4);
                var4 = var4.bind(var5)();
                var17 = var4.analyticsLocations;
                var _closure2_slot2 = var17;
                var4 = 25;
                var4 = var7[var4];
                var6 = var6.bind(var5)(var4);
                var4 = var6.useCollectiblesAnalyticsContext;
                var4 = var4.bind(var6)();
                var _closure2_slot3 = var4;
                var12 = _closure1_slot3;
                var7 = var12.useCallback;
                var6 = new Array(4);
                var6[0] = var17;
                var6[1] = var18;
                var6[2] = var16;
                var6[3] = var4;
                var4 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 26;
                        var3 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.hideActionSheet;
                        var3 = var3.bind(var5)();
                        var3 = _closure1_slot0;
                        var2 = 27;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openProductDetailsActionSheet;
                        var2 = {};
                        var5 = _closure2_slot0;
                        var2['product'] = var5;
                        var5 = _closure2_slot1;
                        var2['initialVariantIndex'] = var5;
                        var5 = _closure2_slot2;
                        var2['analyticsLocations'] = var5;
                        var7 = _closure2_slot3;
                        var5 = null;
                        var7 = var5 != var7;
                        var5 = undefined;
                        if(!var7) { _fun0008_ip = 28; continue _fun0008 }
case 11:
                        var5 = _closure2_slot3;
case 28:
                        var2['shopAnalyticsContext'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var17 = var7.bind(var12)(var4, var6);
                var4 = null;
                if(!(var4 != var3)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var17 = var3;
case 45:
                var19 = _closure1_slot0;
                var23 = _closure1_slot2;
                var3 = 28;
                var3 = var23[var3];
                var6 = var19.bind(var5)(var3);
                var4 = var6.useIsShopCardImpressionMobileEnabled;
                var3 = 'CollectiblesShopCardV2';
                var3 = var4.bind(var6)(var3);
                var4 = 29;
                var4 = var23[var4];
                var7 = var19.bind(var5)(var4);
                var6 = var7.useTrackProductCardImpression;
                var4 = var18.skuId;
                var4 = var6.bind(var7)(var4);
                var7 = var4.handleCardVisibilityChange;
                var4 = 9;
                var4 = var23[var4];
                var6 = var19.bind(var5)(var4);
                var4 = var6.useCurrentUser;
                var12 = var4.bind(var6)();
                var6 = _closure1_slot1;
                var4 = 30;
                var4 = var23[var4];
                var6 = var6.bind(var5)(var4);
                var4 = var6.canUseCollectibles;
                var6 = var4.bind(var6)(var12);
                var4 = 31;
                var4 = var23[var4];
                var12 = var19.bind(var5)(var4);
                var4 = var12.useProductPurchaseState;
                var4 = var4.bind(var12)(var22);
                var20 = var4.isPurchased;
                _closure2_slot4 = var20;
                var21 = var4.isPartiallyOwnedBundle;
                _closure2_slot5 = var21;
                var4 = 32;
                var4 = var23[var4];
                var16 = var19.bind(var5)(var4);
                var12 = var16.useProductDisableState;
                var4 = var22.skuId;
                var4 = var12.bind(var16)(var4);
                var12 = var4.isDisabled;
                var16 = 19;
                var4 = var23[var16];
                var24 = var19.bind(var5)(var4);
                var4 = var24.isPremiumCollectiblesProduct;
                var4 = var4.bind(var24)(var22);
                var16 = var23[var16];
                var19 = var19.bind(var5)(var16);
                var16 = var19.isFreeCollectiblesProduct;
                var16 = var16.bind(var19)(var22);
                var19 = var4;
                if(!var4) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var19 = !var6;
case 47:
                if(!var19) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var19 = !var16;
case 49:
                _closure2_slot6 = var19;
                var22 = var16;
                if(var22) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                if(!var4) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var4 = var6;
case 53:
                var22 = var4;
case 51:
                _closure2_slot7 = var22;
                var16 = _closure1_slot3;
                var6 = var16.useMemo;
                var4 = new Array(4);
                var4[0] = var22;
                var4[1] = var21;
                var4[2] = var20;
                var4[3] = var19;
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure2_slot4;
                        var2 = true;
                        if(!(var3 !== var2)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                        var3 = _closure2_slot5;
                        if(!(var3 !== var2)) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                        var3 = _closure2_slot6;
                        if(!(var3 !== var2)) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                        var1 = _closure2_slot7;
                        if(!(var1 !== var2)) { _fun0009_ip = 61; continue _fun0009 }
case 29:
                        var1 = null;
                        return var1;
case 61:
                        var1 = 'nitroClaim';
                        return var1;
case 59:
                        var1 = 'nitroUpsell';
                        return var1;
case 57:
                        var1 = 'partiallyOwnedBundle';
                        return var1;
case 55:
                        var1 = 'purchased';
                        return var1;
                    }
                };
                var16 = var6.bind(var16)(var1, var4);
                var6 = _closure1_slot6;
                var4 = _closure1_slot9;
                var1 = {};
                var1['product'] = var18;
                var1['onPress'] = var17;
                var1['collectibleProductState'] = var16;
                var1['unpublishedAt'] = var15;
                var1['solidBackground'] = var14;
                var1['preferVCPrice'] = var13;
                var1['isDisabled'] = var12;
                var1['cardWidth'] = var11;
                var1['cardStyle'] = var10;
                var1['hideWishlistButton'] = var9;
                var1['hidePrice'] = var8;
                var1['isShopCardImpressionEnabled'] = var3;
                var6 = var6.bind(var5)(var4, var1);
                var1 = var6;
                if(var3) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                var4 = _closure1_slot6;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 33;
                var2 = var8[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var2['onChange'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 62:
                return var1;
            }
        };
        var _closure1_slot10 = var6;
        var6 = var9.memo;
        var5 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var2 != var1)) { _fun0010_ip = 25; continue _fun0010 }
case 64:
                var12 = {};
                var5 = undefined;
                var11 = var2;
                var10 = undefined;
                var11 = copyDataProperties(var12, var11, var10);
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 34;
                var1 = var9[var1];
                var3 = var3.bind(var5)(var1);
                var1 = function() {
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 35;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.v4;
                    var2 = var2.bind(var3)();
                    var1['cardId'] = var2;
                    return var1;
                };
                var7 = var3.bind(var5)(var1);
                var4 = _closure1_slot6;
                var3 = _closure1_slot0;
                var1 = 25;
                var1 = var9[var1];
                var1 = var3.bind(var5)(var1);
                var3 = var1.CollectiblesAnalyticsProvider;
                var1 = {};
                var1['newValue'] = var7;
                var7 = _closure1_slot10;
                var6 = {};
                var12 = var6;
                var8 = copyDataProperties(var12, var11);
                var6 = var4.bind(var5)(var7, var6);
                var1['children'] = var6;
                var1 = var4.bind(var5)(var3, var1);
                return var1;
case 25:
                var11 = "Cannot destructure 'undefined' or 'null'.";
                var12 = var2;
                var1 = throwTypeError(var12, var11);
                var1 = undefined;
                throw var1;
            }
        };
        var5 = var6.bind(var9)(var5);
        var6 = 36;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/collectibles/native/CollectiblesShopCardV2.tsx';
        var6 = var7.bind(var8)(var6);
        var3['default'] = var5;
        var3['COLLECTIBLES_SHOP_CARD_HEIGHT'] = var4;
        var3['COLLECTIBLES_SHOP_CARD_WIDTH'] = var2;
        var2 = 180;
        var3['COLLECTIBLES_SHOP_CARD_MAX_WIDTH'] = var2;
        var2 = 16;
        var3['COLLECTIBLES_SHOP_CARD_GAP'] = var2;
        return var1;
    }
})();