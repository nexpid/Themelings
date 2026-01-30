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
        var2 = var15.bind(var1)(var2);
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
                var2 = arg1;
                var12 = var2.product;
                var16 = var2.onPress;
                var26 = var2.unpublishedAt;
                var11 = var2.collectibleProductState;
                var15 = var2.solidBackground;
                var10 = var2.preferVCPrice;
                var9 = var2.isDisabled;
                var4 = undefined;
                if(!(var9 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var9 = false;
case 4:
                var3 = var2.cardWidth;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var2 = _closure1_slot8;
                var25 = var2.bind(var4)();
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 6;
                var2 = var8[var2];
                var14 = var5.bind(var4)(var2);
                var13 = var14.useStateFromStores;
                var2 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.isThemeDark;
                    var1 = _closure1_slot5;
                    var1 = var1.theme;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var14 = var13.bind(var14)(var7, var2);
                var2 = 8;
                var2 = var8[var2];
                var7 = var5.bind(var4)(var2);
                var2 = var7.useDefaultVariantIndex;
                var7 = var2.bind(var7)(var12);
                var2 = 9;
                var2 = var8[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.getSelectedProduct;
                var8 = var2.bind(var5)(var12, var7);
                var18 = null;
                if(!(var18 == var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var20 = {};
                var2 = 150;
                var20['width'] = var2;
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var2 = {};
                var2['width'] = var3;
                var20 = var2;
case 8:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 10;
                var2 = var7[var2];
                var3 = var5.bind(var4)(var2);
                var2 = var3.useCurrentUser;
                var13 = var2.bind(var3)();
                var2 = 11;
                var2 = var7[var2];
                var17 = var5.bind(var4)(var2);
                var3 = var17.useMobileWishlistOwnerExperiment;
                var2 = 'CollectiblesShopCardInternalV2';
                var2 = var3.bind(var17)(var2);
                var17 = var2.showWishlistButtonInProductCard;
                var2 = 12;
                var2 = var7[var2];
                var3 = var5.bind(var4)(var2);
                var2 = var3.isWishlistableCollectiblesProduct;
                var2 = var2.bind(var3)(var8);
                var3 = 13;
                var3 = var7[var3];
                var7 = var5.bind(var4)(var3);
                var5 = var7.useWishlistButtonState;
                var3 = {};
                var3['currentUser'] = var13;
                var8 = var8.skuId;
                var3['skuId'] = var8;
                var3 = var5.bind(var7)(var3);
                var24 = var3.isWishlisted;
                _closure2_slot0 = var24;
                var22 = var3.isBusy;
                var23 = var3.handleToggle;
                _closure2_slot1 = var23;
                if(!var17) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var3 = 'purchased';
                var3 = var3 === var11;
                var17 = !var3;
case 9:
                var21 = !var2;
                var2 = var17;
                if(!var17) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var2 = !var21;
case 11:
                if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var2 = !var22;
case 13:
                _closure2_slot2 = var2;
                var5 = _closure1_slot3;
                var7 = var5.useMemo;
                var3 = new Array(2);
                var3[0] = var2;
                var3[1] = var24;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var8 = undefined;
                        var1 = undefined;
                        if(!var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var3 = {};
                        var4 = 'toggleWishlist';
                        var3['name'] = var4;
                        var2 = _closure2_slot0;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 14;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.t;
                        if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var2 = var4.8DkMEQ;
                        var2 = var5.bind(var6)(var2);
                        _fun0003_ip = 19; continue _fun0003;
case 17:
                        var4 = var4.yr9TTf;
                        var2 = var5.bind(var6)(var4);
case 19:
                        var3['label'] = var2;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1 = var2;
case 15:
                        return var1;
                    }
                };
                var13 = var7.bind(var5)(var2, var3);
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var23;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = var1.actionName;
                        var1 = 'toggleWishlist';
                        if(!(var1 === var2)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 20:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 15;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var27 = var25.card;
                var19 = new Array(2);
                var19[0] = var27;
                var19[1] = var20;
                var1['style'] = var19;
                var1['onPress'] = var16;
                var16 = 0.8;
                var1['activeOpacity'] = var16;
                var16 = 'button';
                var1['accessibilityRole'] = var16;
                var1['accessibilityActions'] = var13;
                var1['onAccessibilityAction'] = var5;
                var5 = 16;
                var5 = var8[var5];
                var7 = var7.bind(var4)(var5);
                var5 = var7.shouldShowLimitedTimeBadge;
                var19 = var5.bind(var7)(var26);
                var5 = 'nitroClaim';
                var16 = var5 === var11;
                if(var19) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                if(var16) { _fun0002_ip = 22; continue _fun0002 }
case 24:
                var7 = null;
                if(!var17) { _fun0002_ip = 25; continue _fun0002 }
case 22:
                var13 = _closure1_slot7;
                var8 = _closure1_slot4;
                var5 = {};
                var20 = var25.topRowOverlay;
                var5['style'] = var20;
                if(var19) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                var18 = null;
                if(!var16) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                var20 = _closure1_slot6;
                var19 = _closure1_slot0;
                var27 = _closure1_slot2;
                var16 = 18;
                var16 = var27[var16];
                var16 = var19.bind(var4)(var16);
                var19 = var16.NitroWheelIcon;
                var16 = {};
                var27 = 'mobile-text-heading-primary';
                var16['color'] = var27;
                var18 = var20.bind(var4)(var19, var16);
case 28:
                _fun0002_ip = 30; continue _fun0002;
case 26:
                var20 = _closure1_slot6;
                var19 = _closure1_slot1;
                var27 = _closure1_slot2;
                var16 = 17;
                var16 = var27[var16];
                var19 = var19.bind(var4)(var16);
                var16 = {};
                var16['unpublishedAt'] = var26;
                var26 = var25.badge;
                var16['style'] = var26;
                var18 = var20.bind(var4)(var19, var16);
case 30:
                var16 = new Array(2);
                var16[0] = var18;
                if(!var17) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var20 = _closure1_slot6;
                var19 = _closure1_slot0;
                var26 = _closure1_slot2;
                var18 = 19;
                var18 = var26[var18];
                var18 = var19.bind(var4)(var18);
                var19 = var18.WishlistButtonBase;
                var18 = {};
                var25 = var25.wishlistButton;
                var18['style'] = var25;
                var18['isWishlisted'] = var24;
                var18['onPress'] = var23;
                var18['busy'] = var22;
                var18['disabled'] = var21;
                var21 = true;
                var18['accessibilityHidden'] = var21;
                var17 = var20.bind(var4)(var19, var18);
case 31:
                var16[1] = var17;
                var5['children'] = var16;
                var7 = var13.bind(var4)(var8, var5);
case 25:
                var5 = new Array(3);
                var5[0] = var7;
                var13 = _closure1_slot6;
                var8 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 20;
                var7 = var16[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['solidBackground'] = var15;
                var7['product'] = var12;
                var7['isDarkTheme'] = var14;
                var14 = 'purchased';
                var14 = var14 === var11;
                if(var14) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var15 = 'partiallyOwnedBundle';
                var14 = var15 === var11;
case 33:
                var7['isPurchased'] = var14;
                var7['isDisabled'] = var9;
                var7 = var13.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot6;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 21;
                var6 = var13[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6['product'] = var12;
                var6['collectibleProductState'] = var11;
                var6['preferVCPrice'] = var10;
                var6['isDisabled'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot9 = var6;
        var6 = var9.memo;
        var5 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var14 = var2.product;
                var _closure2_slot0 = var14;
                var11 = var2.unpublishedAt;
                var10 = var2.solidBackground;
                var9 = var2.preferVCPrice;
                var7 = var2.cardWidth;
                var4 = undefined;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = 8;
                var2 = var19[var2];
                var3 = var15.bind(var4)(var2);
                var2 = var3.useDefaultVariantIndex;
                var2 = var2.bind(var3)(var14);
                var _closure2_slot1 = var2;
                var3 = 9;
                var3 = var19[var3];
                var6 = var15.bind(var4)(var3);
                var3 = var6.getSelectedProduct;
                var18 = var3.bind(var6)(var14, var2);
                var3 = _closure1_slot1;
                var6 = 22;
                var6 = var19[var6];
                var6 = var3.bind(var4)(var6);
                var6 = var6.bind(var4)();
                var13 = var6.analyticsLocations;
                var _closure2_slot2 = var13;
                var12 = _closure1_slot3;
                var8 = var12.useCallback;
                var6 = new Array(3);
                var6[0] = var13;
                var6[1] = var14;
                var6[2] = var2;
                var2 = function() {
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 23;
                    var3 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.hideActionSheet;
                    var3 = var3.bind(var5)();
                    var3 = _closure1_slot0;
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openProductDetailsActionSheet;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['product'] = var6;
                    var6 = _closure2_slot1;
                    var2['initialVariantIndex'] = var6;
                    var5 = _closure2_slot2;
                    var2['analyticsLocations'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var13 = var8.bind(var12)(var2, var6);
                var2 = 25;
                var2 = var19[var2];
                var8 = var15.bind(var4)(var2);
                var6 = var8.useTrackProductCardImpression;
                var2 = var14.skuId;
                var2 = var6.bind(var8)(var2);
                var6 = var2.handleCardVisibilityChange;
                var2 = 10;
                var2 = var19[var2];
                var8 = var15.bind(var4)(var2);
                var2 = var8.useCurrentUser;
                var8 = var2.bind(var8)();
                var2 = 26;
                var2 = var19[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.canUseCollectibles;
                var3 = var2.bind(var3)(var8);
                var2 = 27;
                var2 = var19[var2];
                var8 = var15.bind(var4)(var2);
                var2 = var8.useProductPurchaseState;
                var2 = var2.bind(var8)(var18);
                var16 = var2.isPurchased;
                var _closure2_slot3 = var16;
                var17 = var2.isPartiallyOwnedBundle;
                var _closure2_slot4 = var17;
                var2 = 28;
                var2 = var19[var2];
                var12 = var15.bind(var4)(var2);
                var8 = var12.useProductDisableState;
                var2 = var18.skuId;
                var2 = var8.bind(var12)(var2);
                var8 = var2.isDisabled;
                var12 = 16;
                var2 = var19[var12];
                var20 = var15.bind(var4)(var2);
                var2 = var20.isPremiumCollectiblesProduct;
                var2 = var2.bind(var20)(var18);
                var12 = var19[var12];
                var15 = var15.bind(var4)(var12);
                var12 = var15.isFreeCollectiblesProduct;
                var12 = var12.bind(var15)(var18);
                var15 = var2;
                if(!var2) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var15 = !var3;
case 35:
                if(!var15) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var15 = !var12;
case 37:
                _closure2_slot5 = var15;
                var18 = var12;
                if(var18) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                if(!var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var2 = var3;
case 41:
                var18 = var2;
case 39:
                _closure2_slot6 = var18;
                var12 = _closure1_slot3;
                var3 = var12.useMemo;
                var2 = new Array(4);
                var2[0] = var18;
                var2[1] = var17;
                var2[2] = var16;
                var2[3] = var15;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure2_slot3;
                        var2 = true;
                        if(!(var3 !== var2)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                        var3 = _closure2_slot4;
                        if(!(var3 !== var2)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                        var3 = _closure2_slot5;
                        if(!(var3 !== var2)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                        var1 = _closure2_slot6;
                        if(!(var1 !== var2)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                        var1 = null;
                        return var1;
case 49:
                        var1 = 'nitroClaim';
                        return var1;
case 47:
                        var1 = 'nitroUpsell';
                        return var1;
case 45:
                        var1 = 'partiallyOwnedBundle';
                        return var1;
case 43:
                        var1 = 'purchased';
                        return var1;
                    }
                };
                var12 = var3.bind(var12)(var1, var2);
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 29;
                var1 = var15[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['onChange'] = var6;
                var6 = _closure1_slot9;
                var5 = {};
                var5['product'] = var14;
                var5['onPress'] = var13;
                var5['collectibleProductState'] = var12;
                var5['unpublishedAt'] = var11;
                var5['solidBackground'] = var10;
                var5['preferVCPrice'] = var9;
                var5['isDisabled'] = var8;
                var5['cardWidth'] = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5 = var6.bind(var9)(var5);
        var6 = 30;
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