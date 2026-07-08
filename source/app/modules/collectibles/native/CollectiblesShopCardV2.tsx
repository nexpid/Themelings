// app/modules/collectibles/native/CollectiblesShopCardV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var14 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var14;
        var _closure1_slot2 = var8;
        var1 = function CollectiblesShopCardV2Inner(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var7 = var2.product;
                var _closure2_slot0 = var7;
                var18 = var2.unpublishedAt;
                var17 = var2.solidBackground;
                var16 = var2.preferVCPrice;
                var14 = var2.cardWidth;
                var13 = var2.cardStyle;
                var12 = var2.hideWishlistButton;
                var11 = var2.hidePrice;
                var3 = var2.onPress;
                var10 = var2.disableBundleStaticBackground;
                var9 = var2.muteBundleStaticBackground;
                var5 = undefined;
                var _closure2_slot4 = var5;
                var _closure2_slot5 = var5;
                var _closure2_slot6 = var5;
                var _closure2_slot7 = var5;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 7;
                var4 = var8[var4];
                var15 = var6.bind(var5)(var4);
                var4 = var15.useDefaultVariantIndex;
                var19 = var4.bind(var15)(var7);
                var _closure2_slot1 = var19;
                var4 = 8;
                var4 = var8[var4];
                var15 = var6.bind(var5)(var4);
                var4 = var15.getSelectedProduct;
                var24 = var4.bind(var15)(var7, var19);
                var15 = _closure1_slot1;
                var4 = 15;
                var4 = var8[var4];
                var4 = var15.bind(var5)(var4);
                var4 = var4.bind(var5)();
                var20 = var4.analyticsLocations;
                var _closure2_slot2 = var20;
                var4 = 30;
                var4 = var8[var4];
                var6 = var6.bind(var5)(var4);
                var4 = var6.useCollectiblesAnalyticsContext;
                var4 = var4.bind(var6)();
                var _closure2_slot3 = var4;
                var15 = _closure1_slot3;
                var8 = var15.useCallback;
                var6 = new Array(4);
                var6[0] = var20;
                var6[1] = var7;
                var6[2] = var19;
                var6[3] = var4;
                var4 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 31;
                        var3 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.hideActionSheet;
                        var3 = var3.bind(var5)();
                        var3 = _closure1_slot0;
                        var2 = 32;
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
                        if(!var7) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                        var5 = _closure2_slot3;
case 2:
                        var2['shopAnalyticsContext'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var20 = var8.bind(var15)(var4, var6);
                var4 = null;
                if(!(var4 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var20 = var3;
case 4:
                var21 = _closure1_slot0;
                var25 = _closure1_slot2;
                var3 = 33;
                var3 = var25[var3];
                var6 = var21.bind(var5)(var3);
                var4 = var6.useIsShopCardImpressionMobileEnabled;
                var3 = 'CollectiblesShopCardV2';
                var3 = var4.bind(var6)(var3);
                var4 = 34;
                var4 = var25[var4];
                var8 = var21.bind(var5)(var4);
                var6 = var8.useTrackProductCardImpression;
                var4 = var7.skuId;
                var4 = var6.bind(var8)(var4);
                var8 = var4.handleCardVisibilityChange;
                var4 = 10;
                var4 = var25[var4];
                var6 = var21.bind(var5)(var4);
                var4 = var6.useCurrentUser;
                var15 = var4.bind(var6)();
                var6 = _closure1_slot1;
                var4 = 35;
                var4 = var25[var4];
                var6 = var6.bind(var5)(var4);
                var4 = var6.canUseCollectibles;
                var6 = var4.bind(var6)(var15);
                var4 = 36;
                var4 = var25[var4];
                var15 = var21.bind(var5)(var4);
                var4 = var15.useProductPurchaseState;
                var4 = var4.bind(var15)(var24);
                var22 = var4.isPurchased;
                _closure2_slot4 = var22;
                var23 = var4.isPartiallyOwnedBundle;
                _closure2_slot5 = var23;
                var4 = 37;
                var4 = var25[var4];
                var19 = var21.bind(var5)(var4);
                var15 = var19.useProductDisableState;
                var4 = var24.skuId;
                var4 = var15.bind(var19)(var4);
                var15 = var4.isDisabled;
                var19 = 22;
                var4 = var25[var19];
                var26 = var21.bind(var5)(var4);
                var4 = var26.isPremiumCollectiblesProduct;
                var4 = var4.bind(var26)(var24);
                var19 = var25[var19];
                var21 = var21.bind(var5)(var19);
                var19 = var21.isFreeCollectiblesProduct;
                var19 = var19.bind(var21)(var24);
                var21 = var4;
                if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var21 = !var6;
case 6:
                if(!var21) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var21 = !var19;
case 8:
                _closure2_slot6 = var21;
                var24 = var19;
                if(var24) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                if(!var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var4 = var6;
case 12:
                var24 = var4;
case 10:
                _closure2_slot7 = var24;
                var19 = _closure1_slot3;
                var6 = var19.useMemo;
                var4 = new Array(4);
                var4[0] = var24;
                var4[1] = var23;
                var4[2] = var22;
                var4[3] = var21;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot4;
                        var2 = true;
                        if(!(var3 !== var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var3 = _closure2_slot5;
                        if(!(var3 !== var2)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var3 = _closure2_slot6;
                        if(!(var3 !== var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var1 = _closure2_slot7;
                        if(!(var1 !== var2)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var1 = null;
                        return var1;
case 20:
                        var1 = 'nitroClaim';
                        return var1;
case 18:
                        var1 = 'nitroUpsell';
                        return var1;
case 16:
                        var1 = 'partiallyOwnedBundle';
                        return var1;
case 14:
                        var1 = 'purchased';
                        return var1;
                    }
                };
                var19 = var6.bind(var19)(var1, var4);
                var6 = _closure1_slot7;
                var4 = _closure1_slot10;
                var1 = {};
                var1['product'] = var7;
                var1['onPress'] = var20;
                var1['collectibleProductState'] = var19;
                var1['unpublishedAt'] = var18;
                var1['solidBackground'] = var17;
                var1['preferVCPrice'] = var16;
                var1['isDisabled'] = var15;
                var1['cardWidth'] = var14;
                var1['cardStyle'] = var13;
                var1['hideWishlistButton'] = var12;
                var1['hidePrice'] = var11;
                var1['isShopCardImpressionEnabled'] = var3;
                var1['disableBundleStaticBackground'] = var10;
                var1['muteBundleStaticBackground'] = var9;
                var6 = var6.bind(var5)(var4, var1);
                var1 = var6;
                if(var3) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var4 = _closure1_slot7;
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 38;
                var2 = var9[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var2['onChange'] = var8;
                var7 = var7.skuId;
                var2['resetKey'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 22:
                return var1;
            }
        };
        var _closure1_slot11 = var1;
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
        var15 = 1;
        var2 = var8[var15];
        var2 = var7.bind(var1)(var2);
        var4 = var2.PixelRatio;
        var2 = var2.View;
        var _closure1_slot4 = var2;
        var2 = 2;
        var2 = var8[var2];
        var2 = var14.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 3;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var2 = var2.ShopCtaEnum;
        var _closure1_slot6 = var2;
        var2 = 4;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var6 = var2.jsx;
        var _closure1_slot7 = var6;
        var2 = var2.jsxs;
        var _closure1_slot8 = var2;
        var2 = var4.getFontScale;
        var4 = var2.bind(var4)();
        var2 = 1.78;
        var2 = var4 >= var2;
        var4 = 170;
        if(!var2) { _fun0001_ip = 24; continue _fun0001 }
case 25:
        var4 = 302;
case 24:
        var2 = 5;
        var2 = var8[var2];
        var11 = var7.bind(var1)(var2);
        var10 = var11.createStyles;
        var6 = {};
        var12 = {'position': 'relative', 'height': null, 'width': 150, 'display': 'flex', 'borderWidth': 1, 'borderColor': null, 'borderRadius': null, 'overflow': 'hidden'};
        var12['height'] = var4;
        var2 = 150;
        var13 = 6;
        var16 = var8[var13];
        var16 = var14.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BORDER_SUBTLE;
        var12['borderColor'] = var16;
        var16 = var8[var13];
        var16 = var14.bind(var1)(var16);
        var16 = var16.radii;
        var16 = var16.sm;
        var12['borderRadius'] = var16;
        var6['card'] = var12;
        var12 = {'position': 'absolute', 'top': 6, 'left': 6, 'right': 6, 'zIndex': 2, 'display': 'flex', 'flexDirection': 'row', 'gap': 4, 'justifyContent': 'space-between', 'alignItems': 'flex-start'};
        var6['topRowOverlay'] = var12;
        var12 = {};
        var12['flexShrink'] = var15;
        var6['badge'] = var12;
        var12 = {};
        var16 = var8[var13];
        var16 = var14.bind(var1)(var16);
        var16 = var16.space;
        var16 = var16.PX_4;
        var12['paddingHorizontal'] = var16;
        var16 = 1.5;
        var12['paddingVertical'] = var16;
        var16 = var8[var13];
        var16 = var14.bind(var1)(var16);
        var16 = var16.radii;
        var16 = var16.round;
        var12['borderRadius'] = var16;
        var12['flexShrink'] = var15;
        var6['badgePill'] = var12;
        var12 = {};
        var15 = 'uppercase';
        var12['textTransform'] = var15;
        var6['badgeOverrideText'] = var12;
        var12 = {};
        var15 = var8[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.WHITE;
        var12['backgroundColor'] = var15;
        var6['badgePillDarkMode'] = var12;
        var12 = {};
        var13 = var8[var13];
        var13 = var14.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BADGE_BACKGROUND_BRAND;
        var12['backgroundColor'] = var13;
        var6['badgePillLightMode'] = var12;
        var12 = {'marginLeft': 'auto', 'flexShrink': 0};
        var6['wishlistButton'] = var12;
        var6 = var10.bind(var11)(var6);
        var _closure1_slot9 = var6;
        var6 = function CollectiblesShopCardInternalV2(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var13 = var1.product;
                var2 = var1.onPress;
                var _closure2_slot0 = var2;
                var24 = var1.unpublishedAt;
                var12 = var1.collectibleProductState;
                var19 = var1.solidBackground;
                var11 = var1.preferVCPrice;
                var10 = var1.isDisabled;
                var4 = undefined;
                if(!(var10 === var4)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var10 = false;
case 26:
                var15 = var1.cardWidth;
                var35 = var1.cardStyle;
                var3 = var1.hideWishlistButton;
                if(!(var3 === var4)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var3 = false;
case 28:
                var9 = var1.hidePrice;
                if(!(var9 === var4)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var9 = false;
case 30:
                var5 = var1.isShopCardImpressionEnabled;
                if(!(var5 === var4)) { _fun0005_ip = 32; continue _fun0005 }
case 3:
                var5 = false;
case 32:
                var17 = var1.disableBundleStaticBackground;
                var16 = var1.muteBundleStaticBackground;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var1 = _closure1_slot9;
                var30 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var8 = var2.bind(var4)(var1);
                var1 = var8.useDefaultVariantIndex;
                var18 = var1.bind(var8)(var13);
                var8 = 8;
                var1 = var7[var8];
                var14 = var2.bind(var4)(var1);
                var1 = var14.getSelectedProduct;
                var21 = var1.bind(var14)(var13, var18);
                _closure2_slot1 = var21;
                var1 = 9;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useTrackShopCardImpression;
                var34 = var1.bind(var2)(var13, var21, var5);
                var7 = null;
                if(!(var7 == var15)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                var36 = {};
                var1 = 150;
                var36['width'] = var1;
                _fun0005_ip = 35; continue _fun0005;
case 33:
                var1 = {};
                var1['width'] = var15;
                var36 = var1;
case 35:
                var5 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 10;
                var1 = var14[var1];
                var2 = var5.bind(var4)(var1);
                var1 = var2.useCurrentUser;
                var22 = var1.bind(var2)();
                var1 = 11;
                var1 = var14[var1];
                var2 = var5.bind(var4)(var1);
                var1 = var2.isWishlistableCollectiblesProduct;
                var1 = var1.bind(var2)(var21);
                var25 = _closure1_slot1;
                var2 = 12;
                var2 = var14[var2];
                var2 = var25.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var26 = var2.shouldShowWishlistNUXActionSheet;
                _closure2_slot2 = var26;
                var2 = var2.showWishlistNUXActionSheet;
                _closure2_slot3 = var2;
                var23 = _closure1_slot3;
                var20 = var23.useCallback;
                var18 = new Array(3);
                var18[0] = var26;
                var18[1] = var2;
                var18[2] = var21;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                        var3 = _closure2_slot3;
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 36:
                        var1 = undefined;
                        return var1;
                    }
                };
                var20 = var20.bind(var23)(var2, var18);
                var23 = 13;
                var2 = var14[var23];
                var2 = var5.bind(var4)(var2);
                var26 = var2.intl;
                var18 = var26.string;
                var2 = var14[var23];
                var2 = var5.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.F8FvUy;
                var2 = var18.bind(var26)(var2);
                _closure2_slot4 = var2;
                var27 = _closure1_slot3;
                var26 = var27.useCallback;
                var18 = new Array(1);
                var18[0] = var2;
                var2 = function() {
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
                var18 = var26.bind(var27)(var2, var18);
                var2 = 15;
                var2 = var14[var2];
                var2 = var25.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var27 = var2.analyticsLocations;
                var2 = 16;
                var2 = var14[var2];
                var26 = var5.bind(var4)(var2);
                var25 = var26.useTrackShopCardClick;
                var2 = {};
                var2['product'] = var13;
                var2['analyticsLocations'] = var27;
                var25 = var25.bind(var26)(var2);
                _closure2_slot5 = var25;
                var2 = 17;
                var2 = var14[var2];
                var14 = var5.bind(var4)(var2);
                var5 = var14.useWishlistButtonState;
                var2 = {};
                var22 = var22.id;
                var2['userId'] = var22;
                var21 = var21.skuId;
                var2['skuId'] = var21;
                var2['onAddSuccess'] = var20;
                var2['onError'] = var18;
                var2 = var5.bind(var14)(var2);
                var29 = var2.isWishlisted;
                _closure2_slot6 = var29;
                var27 = var2.isBusy;
                var28 = var2.handleToggle;
                _closure2_slot7 = var28;
                var2 = 'purchased';
                var18 = var2 === var12;
                var2 = var18;
                if(var18) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var2 = var3;
case 38:
                var21 = !var2;
                var26 = !var1;
                var1 = var21;
                if(!var21) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var1 = !var26;
case 40:
                if(!var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                var1 = !var27;
case 42:
                _closure2_slot8 = var1;
                var5 = _closure1_slot3;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var29;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure2_slot8;
                        var8 = undefined;
                        var1 = undefined;
                        if(!var3) { _fun0007_ip = 44; continue _fun0007 }
case 45:
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
                        if(var2) { _fun0007_ip = 46; continue _fun0007 }
case 29:
                        var2 = var4["8DkMEQ"];
                        var2 = var5.bind(var6)(var2);
                        _fun0007_ip = 2; continue _fun0007;
case 46:
                        var4 = var4.yr9TTf;
                        var2 = var5.bind(var6)(var4);
case 2:
                        var3['label'] = var2;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1 = var2;
case 44:
                        return var1;
                    }
                };
                var20 = var3.bind(var5)(var1, var2);
                var5 = _closure1_slot3;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var28;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = var1.actionName;
                        var1 = 'toggleWishlist';
                        if(!(var1 === var2)) { _fun0008_ip = 47; continue _fun0008 }
case 36:
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 47:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var3.bind(var5)(var1, var2);
                var22 = _closure1_slot0;
                var31 = _closure1_slot2;
                var1 = 18;
                var1 = var31[var1];
                var3 = var22.bind(var4)(var1);
                var2 = var3.useIsProfileFramesEarlyAccessPhase;
                var1 = 'CollectiblesShopCardV2';
                var14 = var2.bind(var3)(var1);
                var1 = 19;
                var1 = var31[var1];
                var33 = var22.bind(var4)(var1);
                var3 = var33.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.isThemeDark;
                    var1 = _closure1_slot5;
                    var1 = var1.theme;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var33 = var3.bind(var33)(var2, var1);
                var3 = _closure1_slot8;
                var1 = 21;
                var1 = var31[var1];
                var1 = var22.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var1['ref'] = var34;
                var37 = var30.card;
                var34 = new Array(3);
                var34[0] = var37;
                var34[1] = var36;
                var34[2] = var35;
                var1['style'] = var34;
                var32 = function onPress() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = _closure2_slot5;
                        var1 = _closure1_slot6;
                        var3 = var1.OPEN_DETAILS;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0009_ip = 48; continue _fun0009 }
case 21:
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var1)();
case 48:
                        return var1;
                    }
                };
                var1['onPress'] = var32;
                var32 = 0.8;
                var1['activeOpacity'] = var32;
                var32 = 'button';
                var1['accessibilityRole'] = var32;
                var1['accessibilityActions'] = var20;
                var1['onAccessibilityAction'] = var5;
                var5 = 22;
                var5 = var31[var5];
                var20 = var22.bind(var4)(var5);
                var5 = var20.shouldShowLimitedTimeBadge;
                var5 = var5.bind(var20)(var24);
                var34 = var13.badgeOverride;
                var8 = var31[var8];
                var20 = var22.bind(var4)(var8);
                var8 = var20.getProductType;
                var20 = var8.bind(var20)(var13);
                var8 = 23;
                var8 = var31[var8];
                var8 = var22.bind(var4)(var8);
                var8 = var8.CollectiblesItemType;
                var8 = var8.PROFILE_FRAME;
                var8 = var20 === var8;
                if(!var8) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var8 = var14;
case 49:
                var14 = var13.hideBadge;
                var22 = null;
                if(var14) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                if(var8) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                if(!(var7 == var34)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                if(var5) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var8 = 'nitroClaim';
                var5 = null;
                if(!(var8 === var12)) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                var20 = _closure1_slot7;
                var14 = _closure1_slot0;
                var31 = _closure1_slot2;
                var8 = 24;
                var8 = var31[var8];
                var8 = var14.bind(var4)(var8);
                var14 = var8.NitroWheelIcon;
                var8 = {};
                var31 = 'mobile-text-heading-primary';
                var8['color'] = var31;
                var5 = var20.bind(var4)(var14, var8);
case 59:
                _fun0005_ip = 61; continue _fun0005;
case 57:
                var20 = _closure1_slot7;
                var14 = _closure1_slot1;
                var31 = _closure1_slot2;
                var8 = 26;
                var8 = var31[var8];
                var14 = var14.bind(var4)(var8);
                var8 = {};
                var8['unpublishedAt'] = var24;
                var24 = var30.badge;
                var8['style'] = var24;
                var5 = var20.bind(var4)(var14, var8);
case 61:
                _fun0005_ip = 62; continue _fun0005;
case 55:
                var20 = _closure1_slot7;
                var14 = _closure1_slot4;
                var8 = {};
                var31 = var30.badgePill;
                var24 = new Array(2);
                var24[0] = var31;
                if(var33) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                var31 = var30.badgePillLightMode;
                _fun0005_ip = 65; continue _fun0005;
case 63:
                var31 = var30.badgePillDarkMode;
case 65:
                var24[1] = var31;
                var8['style'] = var24;
                var32 = _closure1_slot7;
                var31 = _closure1_slot0;
                var35 = _closure1_slot2;
                var24 = 25;
                var24 = var35[var24];
                var24 = var31.bind(var4)(var24);
                var31 = var24.Text;
                var24 = {'variant': 'text-xs/bold', 'color': null, 'allowFontScaling': false, 'style': null, 'lineClamp': 1};
                var35 = 'text-overlay-light';
                if(!var33) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                var35 = 'text-overlay-dark';
case 66:
                var24['color'] = var35;
                var35 = var30.badgeOverrideText;
                var24['style'] = var35;
                var24['children'] = var34;
                var24 = var32.bind(var4)(var31, var24);
                var8['children'] = var24;
                var5 = var20.bind(var4)(var14, var8);
case 62:
                _fun0005_ip = 68; continue _fun0005;
case 53:
                var20 = _closure1_slot7;
                var14 = _closure1_slot4;
                var8 = {};
                var31 = var30.badgePill;
                var24 = new Array(2);
                var24[0] = var31;
                if(var33) { _fun0005_ip = 69; continue _fun0005 }
case 70:
                var31 = var30.badgePillLightMode;
                _fun0005_ip = 71; continue _fun0005;
case 69:
                var31 = var30.badgePillDarkMode;
case 71:
                var24[1] = var31;
                var8['style'] = var24;
                var24 = _closure1_slot0;
                var32 = _closure1_slot2;
                var31 = var32[var23];
                var31 = var24.bind(var4)(var31);
                var34 = var31.intl;
                var31 = var34.string;
                var23 = var32[var23];
                var23 = var24.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23["1m6qcO"];
                var23 = var31.bind(var34)(var23);
                var8['accessibilityLabel'] = var23;
                var31 = _closure1_slot7;
                var23 = 24;
                var23 = var32[var23];
                var23 = var24.bind(var4)(var23);
                var24 = var23.NitroWheelIcon;
                var23 = {};
                var32 = 'xs';
                var23['size'] = var32;
                var32 = 'white';
                if(!var33) { _fun0005_ip = 72; continue _fun0005 }
case 73:
                var32 = 'black';
case 72:
                var23['color'] = var32;
                var23 = var31.bind(var4)(var24, var23);
                var8['children'] = var23;
                var5 = var20.bind(var4)(var14, var8);
case 68:
                var22 = var5;
case 51:
                if(!(var7 == var22)) { _fun0005_ip = 74; continue _fun0005 }
case 75:
                var7 = null;
                if(!var21) { _fun0005_ip = 76; continue _fun0005 }
case 74:
                var14 = _closure1_slot8;
                var8 = _closure1_slot4;
                var5 = {};
                var20 = var30.topRowOverlay;
                var5['style'] = var20;
                var20 = new Array(2);
                var20[0] = var22;
                if(!var21) { _fun0005_ip = 77; continue _fun0005 }
case 78:
                var24 = _closure1_slot7;
                var23 = _closure1_slot0;
                var31 = _closure1_slot2;
                var22 = 27;
                var22 = var31[var22];
                var22 = var23.bind(var4)(var22);
                var23 = var22.WishlistButtonBase;
                var22 = {};
                var30 = var30.wishlistButton;
                var22['style'] = var30;
                var22['isWishlisted'] = var29;
                var22['onPress'] = var28;
                var22['busy'] = var27;
                var22['disabled'] = var26;
                var26 = true;
                var22['accessibilityHidden'] = var26;
                var22['onTrackPress'] = var25;
                var21 = var24.bind(var4)(var23, var22);
case 77:
                var20[1] = var21;
                var5['children'] = var20;
                var7 = var14.bind(var4)(var8, var5);
case 76:
                var5 = new Array(3);
                var5[0] = var7;
                var14 = _closure1_slot7;
                var8 = _closure1_slot1;
                var20 = _closure1_slot2;
                var7 = 28;
                var7 = var20[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['solidBackground'] = var19;
                var7['product'] = var13;
                if(var18) { _fun0005_ip = 79; continue _fun0005 }
case 80:
                var19 = 'partiallyOwnedBundle';
                var18 = var19 === var12;
case 79:
                var7['isPurchased'] = var18;
                var7['isDisabled'] = var10;
                var7['disableBundleStaticBackground'] = var17;
                var7['muteBundleStaticBackground'] = var16;
                var7['cardWidth'] = var15;
                var7 = var14.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 29;
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
        var _closure1_slot10 = var6;
        var6 = var9.memo;
        var5 = function CollectiblesShopCardV2(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var2 != var1)) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                var12 = {};
                var5 = undefined;
                var11 = var2;
                var10 = undefined;
                var9 = copyDataProperties(var12, var11, var10);
                var7 = _closure1_slot3;
                var4 = var7.useMemo;
                var1 = var9.product;
                var1 = var1.skuId;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 39;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.v4;
                    var2 = var2.bind(var3)();
                    var1['cardId'] = var2;
                    return var1;
                };
                var7 = var4.bind(var7)(var1, var3);
                var4 = _closure1_slot7;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 30;
                var1 = var8[var1];
                var1 = var3.bind(var5)(var1);
                var3 = var1.CollectiblesAnalyticsProvider;
                var1 = {};
                var1['newValue'] = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot11;
                var6 = {};
                var12 = var6;
                var11 = var9;
                var9 = copyDataProperties(var12, var11);
                var6 = var8.bind(var5)(var7, var6);
                var1['children'] = var6;
                var1 = var4.bind(var5)(var3, var1);
                return var1;
case 81:
                var11 = "Cannot destructure 'undefined' or 'null'.";
                var12 = var2;
                var1 = throwTypeError(var12, var11);
                var1 = undefined;
                throw var1;
            }
        };
        var5 = var6.bind(var9)(var5);
        var6 = 40;
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