// app/modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function UserProfileWishlistSuggestionsGridContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var12 = var2.userId;
            var11 = var2.wishlistId;
            var _closure2_slot0 = var11;
            var9 = var2.containerWidth;
            var8 = var2.maxWidth;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 8;
            var7 = var4[var3];
            var5 = undefined;
            var14 = var6.bind(var5)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot4;
                    var3 = var4.getWishlist;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var10 = var13.bind(var14)(var10, var7);
            var3 = var4[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var13 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var13;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var4 = _closure1_slot4;
                    var3 = var4.getLastFetchedAt;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var7 = var6.bind(var7)(var3, var1);
            var3 = _closure1_slot1;
            var1 = 9;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = {};
            var3['userId'] = var12;
            var3['wishlist'] = var10;
            var1 = null;
            var6 = var1 == var11;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var1 != var7;
case 4:
            var3['hasFetchedWishlist'] = var6;
            var4 = var4.bind(var5)(var3);
            var3 = var4.isVisible;
            var7 = var4.isDismissible;
            var6 = var4.markAsDismissed;
            var1 = null;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot7;
            var3 = _closure1_slot12;
            var2 = {};
            var2['userId'] = var12;
            var2['wishlistId'] = var11;
            var2['wishlist'] = var10;
            var2['containerWidth'] = var9;
            var2['maxWidth'] = var8;
            var2['isDismissible'] = var7;
            var2['markAsDismissed'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function WishlistSuggestionsGridContents(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.userId;
            var7 = var1.wishlistId;
            var15 = var1.wishlist;
            var6 = var1.containerWidth;
            var4 = var1.maxWidth;
            var17 = var1.isDismissible;
            var27 = var1.markAsDismissed;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var5 = undefined;
            var3 = var2.bind(var5)(var1);
            var1 = 'UserProfileWishlistSuggestionsGridContent';
            var24 = var3.bind(var5)(var1);
            var1 = _closure1_slot10;
            var23 = var1.bind(var5)();
            var1 = 11;
            var1 = var11[var1];
            var3 = var2.bind(var5)(var1);
            var1 = {'minCardSize': 80, 'maxCardSize': 120};
            var1['containerWidth'] = var6;
            var1['maxWidth'] = var4;
            var6 = _closure1_slot5;
            var4 = _closure1_slot9;
            var4 = var6 + var4;
            var21 = 1;
            var4 = var4 + var21;
            var1['sidePadding'] = var4;
            var4 = _closure1_slot6;
            var1['gap'] = var4;
            var1 = var3.bind(var5)(var1);
            var13 = var1.cardWidth;
            var1 = 12;
            var1 = var11[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var14 = var1.analyticsLocations;
            var1 = 13;
            var1 = var11[var1];
            var2 = var2.bind(var5)(var1);
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.v4;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var2.bind(var5)(var1);
            var6 = _closure1_slot0;
            var4 = 15;
            var1 = var11[var4];
            var3 = var6.bind(var5)(var1);
            var2 = var3.useAddToWishlistGridItems;
            var1 = {};
            var1['userId'] = var8;
            var1['wishlist'] = var15;
            var1['numWishlistItemsToRecommend'] = var4;
            var4 = 9;
            var1['maxWishlistItemsToShow'] = var4;
            var4 = 16;
            var4 = var11[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.WishlistFetchSource;
            var4 = var4.USER_PROFILE;
            var1['source'] = var4;
            var1 = var2.bind(var3)(var1);
            var16 = var1.items;
            var3 = var16.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var4 = _closure1_slot7;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var2 = 17;
            var2 = var22[var2];
            var2 = var19.bind(var5)(var2);
            var3 = var2.WishlistAnalyticsProvider;
            var2 = {};
            var6 = {};
            var6['impressionSessionId'] = var9;
            var9 = 'user_profile_wishlist_suggestions_grid';
            var6['surface'] = var9;
            var6['wishlistOwnerId'] = var8;
            var6['wishlistId'] = var7;
            var6['analyticsLocations'] = var14;
            var2['newValue'] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var23.container;
            var6['style'] = var9;
            var18 = _closure1_slot8;
            var12 = _closure1_slot3;
            var9 = {};
            var11 = var23.headerRow;
            var9['style'] = var11;
            var20 = _closure1_slot7;
            var11 = 18;
            var11 = var22[var11];
            var11 = var19.bind(var5)(var11);
            var19 = var11.Text;
            var11 = {};
            var22 = 'header';
            var11['accessibilityRole'] = var22;
            var22 = 'text-sm/semibold';
            if(!var24) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var22 = 'text-sm/medium';
case 10:
            var11['variant'] = var22;
            var22 = 'text-default';
            if(!var24) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var22 = 'text-strong';
case 12:
            var11['color'] = var22;
            var11['lineClamp'] = var21;
            var25 = _closure1_slot0;
            var21 = _closure1_slot2;
            var26 = 19;
            var22 = var21[var26];
            var22 = var25.bind(var5)(var22);
            var24 = var22.intl;
            var22 = var24.string;
            var21 = var21[var26];
            var21 = var25.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21["+GB8Kt"];
            var21 = var22.bind(var24)(var21);
            var11['children'] = var21;
            var11 = var20.bind(var5)(var19, var11);
            var19 = new Array(2);
            var19[0] = var11;
            var22 = _closure1_slot7;
            var21 = _closure1_slot3;
            var20 = {};
            var11 = !var17;
            if(!var11) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var11 = var23.hiddenDismissButton;
case 14:
            var20['style'] = var11;
            var11 = 'none';
            if(!var17) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var11 = 'auto';
case 16:
            var20['pointerEvents'] = var11;
            var11 = !var17;
            var20['accessibilityElementsHidden'] = var11;
            var11 = 'no-hide-descendants';
            if(!var17) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var11 = 'auto';
case 18:
            var20['importantForAccessibility'] = var11;
            var25 = _closure1_slot7;
            var29 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 20;
            var11 = var17[var11];
            var11 = var29.bind(var5)(var11);
            var24 = var11.IconButton;
            var23 = {'size': 'sm', 'variant': 'icon-only'};
            var11 = 'sm';
            var31 = _closure1_slot7;
            var28 = 21;
            var28 = var17[var28];
            var28 = var29.bind(var5)(var28);
            var30 = var28.XSmallIcon;
            var28 = {};
            var28['size'] = var11;
            var11 = _closure1_slot1;
            var32 = 5;
            var32 = var17[var32];
            var32 = var11.bind(var5)(var32);
            var32 = var32.colors;
            var32 = var32.CONTROL_ICON_ONLY_ICON_DEFAULT;
            var28['color'] = var32;
            var28 = var31.bind(var5)(var30, var28);
            var23['icon'] = var28;
            var23['onPress'] = var27;
            var27 = var17[var26];
            var27 = var29.bind(var5)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var17[var26];
            var26 = var29.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.WAI6xu;
            var26 = var27.bind(var28)(var26);
            var23['accessibilityLabel'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var20['children'] = var23;
            var20 = var22.bind(var5)(var21, var20);
            var19[1] = var20;
            var9['children'] = var19;
            var12 = var18.bind(var5)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot7;
            var10 = 22;
            var10 = var17[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var10['items'] = var16;
            var10['wishlist'] = var15;
            var10['analyticsLocations'] = var14;
            var10['cardSize'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var7 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PROFILE_SIDE_PADDING;
    var _closure1_slot5 = var7;
    var4 = var4.WISHLIST_SUGGESTION_CARD_GAP;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var11 = 5;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.space;
    var14 = var4.PX_16;
    var _closure1_slot9 = var14;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_24;
    var9['marginTop'] = var15;
    var9['padding'] = var14;
    var9['borderWidth'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['borderColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var9['background'] = var13;
    var4['container'] = var9;
    var9 = {'width': '100%', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_12;
    var9['marginBottom'] = var11;
    var4['headerRow'] = var9;
    var9 = {};
    var9['opacity'] = var10;
    var4['hiddenDismissButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileWishlistSuggestionsGrid(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.useIsMobileWishlistSuggestionsEnabled;
            var1 = 'user_profile_wishlist_suggestions_grid';
            var3 = var3.bind(var4)(var1);
            var1 = null;
            if(!var3) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var4 = _closure1_slot7;
            var3 = _closure1_slot11;
            var2 = {};
            var7 = arg1;
            var8 = var2;
            var6 = copyDataProperties(var8, var7);
            var1 = var4.bind(var5)(var3, var2);
case 20:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();