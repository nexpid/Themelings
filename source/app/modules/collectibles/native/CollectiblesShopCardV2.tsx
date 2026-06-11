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
        if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = 302;
case 2:
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
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var13 = var1.product;
                var2 = var1.onPress;
                var _closure2_slot0 = var2;
                var23 = var1.unpublishedAt;
                var12 = var1.collectibleProductState;
                var18 = var1.solidBackground;
                var11 = var1.preferVCPrice;
                var10 = var1.isDisabled;
                var4 = undefined;
                if(!(var10 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var10 = false;
case 4:
                var2 = var1.cardWidth;
                var34 = var1.cardStyle;
                var3 = var1.hideWishlistButton;
                if(!(var3 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = false;
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
                var16 = var1.disableBundleStaticBackground;
                var15 = var1.muteBundleStaticBackground;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var1 = _closure1_slot9;
                var29 = var1.bind(var4)();
                var5 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 7;
                var1 = var14[var1];
                var8 = var5.bind(var4)(var1);
                var1 = var8.useDefaultVariantIndex;
                var19 = var1.bind(var8)(var13);
                var8 = 8;
                var1 = var14[var8];
                var17 = var5.bind(var4)(var1);
                var1 = var17.getSelectedProduct;
                var20 = var1.bind(var17)(var13, var19);
                _closure2_slot1 = var20;
                var1 = 9;
                var1 = var14[var1];
                var5 = var5.bind(var4)(var1);
                var1 = var5.useTrackShopCardImpression;
                var33 = var1.bind(var5)(var13, var20, var7);
                var7 = null;
                if(!(var7 == var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var35 = {};
                var1 = 150;
                var35['width'] = var1;
                _fun0002_ip = 14; continue _fun0002;
case 12:
                var1 = {};
                var1['width'] = var2;
                var35 = var1;
case 14:
                var5 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 10;
                var1 = var14[var1];
                var2 = var5.bind(var4)(var1);
                var1 = var2.useCurrentUser;
                var21 = var1.bind(var2)();
                var1 = 11;
                var1 = var14[var1];
                var2 = var5.bind(var4)(var1);
                var1 = var2.isWishlistableCollectiblesProduct;
                var1 = var1.bind(var2)(var20);
                var24 = _closure1_slot1;
                var2 = 12;
                var2 = var14[var2];
                var2 = var24.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var22 = var2.shouldShowWishlistNUXActionSheet;
                _closure2_slot2 = var22;
                var2 = var2.showWishlistNUXActionSheet;
                _closure2_slot3 = var2;
                var26 = _closure1_slot3;
                var19 = var26.useCallback;
                var17 = new Array(3);
                var17[0] = var22;
                var17[1] = var2;
                var17[2] = var20;
                var2 = function() {
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
                var19 = var19.bind(var26)(var2, var17);
                var22 = 13;
                var2 = var14[var22];
                var2 = var5.bind(var4)(var2);
                var25 = var2.intl;
                var17 = var25.string;
                var2 = var14[var22];
                var2 = var5.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.F8FvUy;
                var2 = var17.bind(var25)(var2);
                _closure2_slot4 = var2;
                var25 = var26.useCallback;
                var17 = new Array(1);
                var17[0] = var2;
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
                var17 = var25.bind(var26)(var2, var17);
                var2 = 15;
                var2 = var14[var2];
                var2 = var24.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var26 = var2.analyticsLocations;
                var2 = 16;
                var2 = var14[var2];
                var25 = var5.bind(var4)(var2);
                var24 = var25.useTrackShopCardClick;
                var2 = {};
                var2['product'] = var13;
                var2['analyticsLocations'] = var26;
                var24 = var24.bind(var25)(var2);
                _closure2_slot5 = var24;
                var2 = 17;
                var2 = var14[var2];
                var14 = var5.bind(var4)(var2);
                var5 = var14.useWishlistButtonState;
                var2 = {};
                var21 = var21.id;
                var2['userId'] = var21;
                var20 = var20.skuId;
                var2['skuId'] = var20;
                var2['onAddSuccess'] = var19;
                var2['onError'] = var17;
                var2 = var5.bind(var14)(var2);
                var28 = var2.isWishlisted;
                _closure2_slot6 = var28;
                var26 = var2.isBusy;
                var27 = var2.handleToggle;
                _closure2_slot7 = var27;
                var2 = 'purchased';
                var17 = var2 === var12;
                var2 = var17;
                if(var17) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var2 = var3;
case 17:
                var20 = !var2;
                var25 = !var1;
                var1 = var20;
                if(!var20) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var1 = !var25;
case 19:
                if(!var1) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var1 = !var26;
case 21:
                _closure2_slot8 = var1;
                var5 = _closure1_slot3;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var28;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot8;
                        var8 = undefined;
                        var1 = undefined;
                        if(!var3) { _fun0004_ip = 23; continue _fun0004 }
case 24:
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
                        if(var2) { _fun0004_ip = 25; continue _fun0004 }
case 7:
                        var2 = var4["8DkMEQ"];
                        var2 = var5.bind(var6)(var2);
                        _fun0004_ip = 26; continue _fun0004;
case 25:
                        var4 = var4.yr9TTf;
                        var2 = var5.bind(var6)(var4);
case 26:
                        var3['label'] = var2;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1 = var2;
case 23:
                        return var1;
                    }
                };
                var19 = var3.bind(var5)(var1, var2);
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var27;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = var1.actionName;
                        var1 = 'toggleWishlist';
                        if(!(var1 === var2)) { _fun0005_ip = 27; continue _fun0005 }
case 15:
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var3.bind(var5)(var1, var2);
                var21 = _closure1_slot0;
                var30 = _closure1_slot2;
                var1 = 18;
                var1 = var30[var1];
                var3 = var21.bind(var4)(var1);
                var2 = var3.useIsProfileFramesEarlyAccessPhase;
                var1 = 'CollectiblesShopCardV2';
                var14 = var2.bind(var3)(var1);
                var1 = 19;
                var1 = var30[var1];
                var32 = var21.bind(var4)(var1);
                var3 = var32.useStateFromStores;
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
                var32 = var3.bind(var32)(var2, var1);
                var3 = _closure1_slot8;
                var1 = 21;
                var1 = var30[var1];
                var1 = var21.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var1['ref'] = var33;
                var36 = var29.card;
                var33 = new Array(3);
                var33[0] = var36;
                var33[1] = var35;
                var33[2] = var34;
                var1['style'] = var33;
                var31 = function onPress() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = _closure2_slot5;
                        var1 = _closure1_slot6;
                        var3 = var1.OPEN_DETAILS;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var1)();
case 28:
                        return var1;
                    }
                };
                var1['onPress'] = var31;
                var31 = 0.8;
                var1['activeOpacity'] = var31;
                var31 = 'button';
                var1['accessibilityRole'] = var31;
                var1['accessibilityActions'] = var19;
                var1['onAccessibilityAction'] = var5;
                var5 = 22;
                var5 = var30[var5];
                var19 = var21.bind(var4)(var5);
                var5 = var19.shouldShowLimitedTimeBadge;
                var5 = var5.bind(var19)(var23);
                var33 = var13.badgeOverride;
                var8 = var30[var8];
                var19 = var21.bind(var4)(var8);
                var8 = var19.getProductType;
                var19 = var8.bind(var19)(var13);
                var8 = 23;
                var8 = var30[var8];
                var8 = var21.bind(var4)(var8);
                var8 = var8.CollectiblesItemType;
                var8 = var8.PROFILE_FRAME;
                var8 = var19 === var8;
                if(!var8) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                var8 = var14;
case 30:
                var14 = var13.hideBadge;
                var21 = null;
                if(var14) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                if(var8) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                if(!(var7 == var33)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                if(var5) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                var8 = 'nitroClaim';
                var5 = null;
                if(!(var8 === var12)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                var19 = _closure1_slot7;
                var14 = _closure1_slot0;
                var30 = _closure1_slot2;
                var8 = 24;
                var8 = var30[var8];
                var8 = var14.bind(var4)(var8);
                var14 = var8.NitroWheelIcon;
                var8 = {};
                var30 = 'mobile-text-heading-primary';
                var8['color'] = var30;
                var5 = var19.bind(var4)(var14, var8);
case 40:
                _fun0002_ip = 42; continue _fun0002;
case 38:
                var19 = _closure1_slot7;
                var14 = _closure1_slot1;
                var30 = _closure1_slot2;
                var8 = 26;
                var8 = var30[var8];
                var14 = var14.bind(var4)(var8);
                var8 = {};
                var8['unpublishedAt'] = var23;
                var23 = var29.badge;
                var8['style'] = var23;
                var5 = var19.bind(var4)(var14, var8);
case 42:
                _fun0002_ip = 43; continue _fun0002;
case 36:
                var19 = _closure1_slot7;
                var14 = _closure1_slot4;
                var8 = {};
                var30 = var29.badgePill;
                var23 = new Array(2);
                var23[0] = var30;
                if(var32) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                var30 = var29.badgePillLightMode;
                _fun0002_ip = 46; continue _fun0002;
case 44:
                var30 = var29.badgePillDarkMode;
case 46:
                var23[1] = var30;
                var8['style'] = var23;
                var31 = _closure1_slot7;
                var30 = _closure1_slot0;
                var34 = _closure1_slot2;
                var23 = 25;
                var23 = var34[var23];
                var23 = var30.bind(var4)(var23);
                var30 = var23.Text;
                var23 = {'variant': 'text-xs/bold', 'color': null, 'allowFontScaling': false, 'style': null, 'lineClamp': 1};
                var34 = 'white';
                if(!var32) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                var34 = 'black';
case 47:
                var23['color'] = var34;
                var34 = var29.badgeOverrideText;
                var23['style'] = var34;
                var23['children'] = var33;
                var23 = var31.bind(var4)(var30, var23);
                var8['children'] = var23;
                var5 = var19.bind(var4)(var14, var8);
case 43:
                _fun0002_ip = 49; continue _fun0002;
case 34:
                var19 = _closure1_slot7;
                var14 = _closure1_slot4;
                var8 = {};
                var30 = var29.badgePill;
                var23 = new Array(2);
                var23[0] = var30;
                if(var32) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                var30 = var29.badgePillLightMode;
                _fun0002_ip = 52; continue _fun0002;
case 50:
                var30 = var29.badgePillDarkMode;
case 52:
                var23[1] = var30;
                var8['style'] = var23;
                var23 = _closure1_slot0;
                var31 = _closure1_slot2;
                var30 = var31[var22];
                var30 = var23.bind(var4)(var30);
                var33 = var30.intl;
                var30 = var33.string;
                var22 = var31[var22];
                var22 = var23.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22["1m6qcO"];
                var22 = var30.bind(var33)(var22);
                var8['accessibilityLabel'] = var22;
                var30 = _closure1_slot7;
                var22 = 24;
                var22 = var31[var22];
                var22 = var23.bind(var4)(var22);
                var23 = var22.NitroWheelIcon;
                var22 = {};
                var31 = 'xs';
                var22['size'] = var31;
                var31 = 'white';
                if(!var32) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                var31 = 'black';
case 53:
                var22['color'] = var31;
                var22 = var30.bind(var4)(var23, var22);
                var8['children'] = var22;
                var5 = var19.bind(var4)(var14, var8);
case 49:
                var21 = var5;
case 32:
                if(!(var7 == var21)) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                var7 = null;
                if(!var20) { _fun0002_ip = 57; continue _fun0002 }
case 55:
                var14 = _closure1_slot8;
                var8 = _closure1_slot4;
                var5 = {};
                var19 = var29.topRowOverlay;
                var5['style'] = var19;
                var19 = new Array(2);
                var19[0] = var21;
                if(!var20) { _fun0002_ip = 58; continue _fun0002 }
case 59:
                var23 = _closure1_slot7;
                var22 = _closure1_slot0;
                var30 = _closure1_slot2;
                var21 = 27;
                var21 = var30[var21];
                var21 = var22.bind(var4)(var21);
                var22 = var21.WishlistButtonBase;
                var21 = {};
                var29 = var29.wishlistButton;
                var21['style'] = var29;
                var21['isWishlisted'] = var28;
                var21['onPress'] = var27;
                var21['busy'] = var26;
                var21['disabled'] = var25;
                var25 = true;
                var21['accessibilityHidden'] = var25;
                var21['onTrackPress'] = var24;
                var20 = var23.bind(var4)(var22, var21);
case 58:
                var19[1] = var20;
                var5['children'] = var19;
                var7 = var14.bind(var4)(var8, var5);
case 57:
                var5 = new Array(3);
                var5[0] = var7;
                var14 = _closure1_slot7;
                var8 = _closure1_slot1;
                var19 = _closure1_slot2;
                var7 = 28;
                var7 = var19[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['solidBackground'] = var18;
                var7['product'] = var13;
                if(var17) { _fun0002_ip = 60; continue _fun0002 }
case 61:
                var18 = 'partiallyOwnedBundle';
                var17 = var18 === var12;
case 60:
                var7['isPurchased'] = var17;
                var7['isDisabled'] = var10;
                var7['disableBundleStaticBackground'] = var16;
                var7['muteBundleStaticBackground'] = var15;
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
        var6 = function CollectiblesShopCardV2Inner(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var20 = var2.product;
                var _closure2_slot0 = var20;
                var17 = var2.unpublishedAt;
                var16 = var2.solidBackground;
                var15 = var2.preferVCPrice;
                var13 = var2.cardWidth;
                var12 = var2.cardStyle;
                var11 = var2.hideWishlistButton;
                var10 = var2.hidePrice;
                var3 = var2.onPress;
                var9 = var2.disableBundleStaticBackground;
                var8 = var2.muteBundleStaticBackground;
                var5 = undefined;
                var _closure2_slot4 = var5;
                var _closure2_slot5 = var5;
                var _closure2_slot6 = var5;
                var _closure2_slot7 = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 7;
                var4 = var7[var4];
                var14 = var6.bind(var5)(var4);
                var4 = var14.useDefaultVariantIndex;
                var18 = var4.bind(var14)(var20);
                var _closure2_slot1 = var18;
                var4 = 8;
                var4 = var7[var4];
                var14 = var6.bind(var5)(var4);
                var4 = var14.getSelectedProduct;
                var24 = var4.bind(var14)(var20, var18);
                var14 = _closure1_slot1;
                var4 = 15;
                var4 = var7[var4];
                var4 = var14.bind(var5)(var4);
                var4 = var4.bind(var5)();
                var19 = var4.analyticsLocations;
                var _closure2_slot2 = var19;
                var4 = 30;
                var4 = var7[var4];
                var6 = var6.bind(var5)(var4);
                var4 = var6.useCollectiblesAnalyticsContext;
                var4 = var4.bind(var6)();
                var _closure2_slot3 = var4;
                var14 = _closure1_slot3;
                var7 = var14.useCallback;
                var6 = new Array(4);
                var6[0] = var19;
                var6[1] = var20;
                var6[2] = var18;
                var6[3] = var4;
                var4 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                        if(!var7) { _fun0008_ip = 26; continue _fun0008 }
case 11:
                        var5 = _closure2_slot3;
case 26:
                        var2['shopAnalyticsContext'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var19 = var7.bind(var14)(var4, var6);
                var4 = null;
                if(!(var4 != var3)) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                var19 = var3;
case 62:
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
                var7 = var21.bind(var5)(var4);
                var6 = var7.useTrackProductCardImpression;
                var4 = var20.skuId;
                var4 = var6.bind(var7)(var4);
                var7 = var4.handleCardVisibilityChange;
                var4 = 10;
                var4 = var25[var4];
                var6 = var21.bind(var5)(var4);
                var4 = var6.useCurrentUser;
                var14 = var4.bind(var6)();
                var6 = _closure1_slot1;
                var4 = 35;
                var4 = var25[var4];
                var6 = var6.bind(var5)(var4);
                var4 = var6.canUseCollectibles;
                var6 = var4.bind(var6)(var14);
                var4 = 36;
                var4 = var25[var4];
                var14 = var21.bind(var5)(var4);
                var4 = var14.useProductPurchaseState;
                var4 = var4.bind(var14)(var24);
                var22 = var4.isPurchased;
                _closure2_slot4 = var22;
                var23 = var4.isPartiallyOwnedBundle;
                _closure2_slot5 = var23;
                var4 = 37;
                var4 = var25[var4];
                var18 = var21.bind(var5)(var4);
                var14 = var18.useProductDisableState;
                var4 = var24.skuId;
                var4 = var14.bind(var18)(var4);
                var14 = var4.isDisabled;
                var18 = 22;
                var4 = var25[var18];
                var26 = var21.bind(var5)(var4);
                var4 = var26.isPremiumCollectiblesProduct;
                var4 = var4.bind(var26)(var24);
                var18 = var25[var18];
                var21 = var21.bind(var5)(var18);
                var18 = var21.isFreeCollectiblesProduct;
                var18 = var18.bind(var21)(var24);
                var21 = var4;
                if(!var4) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                var21 = !var6;
case 64:
                if(!var21) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                var21 = !var18;
case 66:
                _closure2_slot6 = var21;
                var24 = var18;
                if(var24) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                if(!var4) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                var4 = var6;
case 70:
                var24 = var4;
case 68:
                _closure2_slot7 = var24;
                var18 = _closure1_slot3;
                var6 = var18.useMemo;
                var4 = new Array(4);
                var4[0] = var24;
                var4[1] = var23;
                var4[2] = var22;
                var4[3] = var21;
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure2_slot4;
                        var2 = true;
                        if(!(var3 !== var2)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                        var3 = _closure2_slot5;
                        if(!(var3 !== var2)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                        var3 = _closure2_slot6;
                        if(!(var3 !== var2)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                        var1 = _closure2_slot7;
                        if(!(var1 !== var2)) { _fun0009_ip = 78; continue _fun0009 }
case 29:
                        var1 = null;
                        return var1;
case 78:
                        var1 = 'nitroClaim';
                        return var1;
case 76:
                        var1 = 'nitroUpsell';
                        return var1;
case 74:
                        var1 = 'partiallyOwnedBundle';
                        return var1;
case 72:
                        var1 = 'purchased';
                        return var1;
                    }
                };
                var18 = var6.bind(var18)(var1, var4);
                var6 = _closure1_slot7;
                var4 = _closure1_slot10;
                var1 = {};
                var1['product'] = var20;
                var1['onPress'] = var19;
                var1['collectibleProductState'] = var18;
                var1['unpublishedAt'] = var17;
                var1['solidBackground'] = var16;
                var1['preferVCPrice'] = var15;
                var1['isDisabled'] = var14;
                var1['cardWidth'] = var13;
                var1['cardStyle'] = var12;
                var1['hideWishlistButton'] = var11;
                var1['hidePrice'] = var10;
                var1['isShopCardImpressionEnabled'] = var3;
                var1['disableBundleStaticBackground'] = var9;
                var1['muteBundleStaticBackground'] = var8;
                var6 = var6.bind(var5)(var4, var1);
                var1 = var6;
                if(var3) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                var4 = _closure1_slot7;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 38;
                var2 = var8[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var2['onChange'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 79:
                return var1;
            }
        };
        var _closure1_slot11 = var6;
        var6 = var9.memo;
        var5 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var2 != var1)) { _fun0010_ip = 23; continue _fun0010 }
case 81:
                var12 = {};
                var5 = undefined;
                var11 = var2;
                var10 = undefined;
                var11 = copyDataProperties(var12, var11, var10);
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 39;
                var1 = var9[var1];
                var3 = var3.bind(var5)(var1);
                var1 = function() {
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 40;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.v4;
                    var2 = var2.bind(var3)();
                    var1['cardId'] = var2;
                    return var1;
                };
                var7 = var3.bind(var5)(var1);
                var4 = _closure1_slot7;
                var3 = _closure1_slot0;
                var1 = 30;
                var1 = var9[var1];
                var1 = var3.bind(var5)(var1);
                var3 = var1.CollectiblesAnalyticsProvider;
                var1 = {};
                var1['newValue'] = var7;
                var7 = _closure1_slot11;
                var6 = {};
                var12 = var6;
                var8 = copyDataProperties(var12, var11);
                var6 = var4.bind(var5)(var7, var6);
                var1['children'] = var6;
                var1 = var4.bind(var5)(var3, var1);
                return var1;
case 23:
                var11 = "Cannot destructure 'undefined' or 'null'.";
                var12 = var2;
                var1 = throwTypeError(var12, var11);
                var1 = undefined;
                throw var1;
            }
        };
        var5 = var6.bind(var9)(var5);
        var6 = 41;
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