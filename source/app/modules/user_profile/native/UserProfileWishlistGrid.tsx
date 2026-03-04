// app/modules/user_profile/native/UserProfileWishlistGrid.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var2 = function WishlistEmptyState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.shouldShowMRNotice;
            var7 = var2.onNavigateAway;
            var _closure2_slot0 = var7;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot18;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 15;
            var2 = var8[var2];
            var5 = var3.bind(var4)(var2);
            var2 = var5.useThemeContext;
            var2 = var2.bind(var5)();
            var5 = var2.theme;
            var2 = 16;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isThemeDark;
            var2 = var2.bind(var3)(var5);
            var14 = 'mobile-text-heading-primary';
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = 'always-white';
case 2:
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 17;
            var2 = var20[var2];
            var3 = var23.bind(var4)(var2);
            var2 = var3.useUserProfileAnalyticsContext;
            var2 = var2.bind(var3)();
            var8 = var2.trackUserProfileWishlistAction;
            _closure2_slot1 = var8;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = {};
                    var1 = _closure1_slot12;
                    var1 = var1.PRESS_ADD_WISHLIST_ITEM;
                    var3['action'] = var1;
                    var1 = global;
                    var7 = var1.Set;
                    var1 = _closure1_slot13;
                    var6 = var1.COLLECTIBLES;
                    var1 = new Array(1);
                    var1[0] = var6;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {constructor: {value: var7}});
                    var11 = var6;
                    var10 = var1;
                    var1 = new var11[var7](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var6;
                    var3['productLines'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)();
case 4:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 18;
                    var2 = var8[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openCollectiblesShopMobile;
                    var2 = {};
                    var7 = _closure1_slot1;
                    var6 = 19;
                    var9 = var8[var6];
                    var9 = var7.bind(var1)(var9);
                    var9 = var9.USER_PROFILE_WISHLIST;
                    var2['analyticsSource'] = var9;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.USER_PROFILE_WISHLIST;
                    var6 = new Array(1);
                    var6[0] = var7;
                    var2['analyticsLocations'] = var6;
                    var5 = _closure1_slot14;
                    var5 = var5.FEATURED_PAGE;
                    var2['screen'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot17;
            var1 = {};
            var7 = _closure1_slot5;
            var5 = {};
            var8 = var13.emptyState;
            var5['style'] = var8;
            var10 = _closure1_slot15;
            var11 = 20;
            var8 = var20[var11];
            var8 = var23.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': null, 'accessibilityRole': 'header'};
            var8['color'] = var14;
            var18 = 21;
            var14 = var20[var18];
            var14 = var23.bind(var4)(var14);
            var16 = var14.intl;
            var15 = var16.string;
            var14 = var20[var18];
            var14 = var23.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.HGnLLT;
            var14 = var15.bind(var16)(var14);
            var8['children'] = var14;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var14 = _closure1_slot15;
            var9 = var20[var11];
            var9 = var23.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-sm/normal', 'color': 'mobile-text-heading-primary'};
            var15 = var13.emptyStateText;
            var9['style'] = var15;
            var15 = var20[var18];
            var15 = var23.bind(var4)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var20[var18];
            var15 = var23.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15./X1ny6;
            var15 = var16.bind(var17)(var15);
            var9['children'] = var15;
            var9 = var14.bind(var4)(var10, var9);
            var8[1] = var9;
            var14 = _closure1_slot15;
            var10 = _closure1_slot5;
            var9 = {};
            var15 = var13.emptyStateCta;
            var9['style'] = var15;
            var17 = _closure1_slot15;
            var15 = 22;
            var15 = var20[var15];
            var15 = var23.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {'size': 'md', 'variant': 'secondary'};
            var24 = _closure1_slot15;
            var21 = 23;
            var21 = var20[var21];
            var21 = var23.bind(var4)(var21);
            var22 = var21.PlusMediumIcon;
            var21 = {};
            var25 = 'xs';
            var21['size'] = var25;
            var21 = var24.bind(var4)(var22, var21);
            var15['icon'] = var21;
            var21 = var20[var18];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var18];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.SDUwM0;
            var20 = var21.bind(var22)(var20);
            var15['text'] = var20;
            var15['onPress'] = var19;
            var15 = var17.bind(var4)(var16, var15);
            var9['children'] = var15;
            var9 = var14.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot16;
            var8 = _closure1_slot5;
            var7 = {};
            var14 = var13.disclaimer;
            var10 = new Array(2);
            var10[0] = var14;
            var13 = var13.disclaimerBottom;
            var10[1] = var13;
            var7['style'] = var10;
            var15 = _closure1_slot15;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 24;
            var10 = var14[var10];
            var10 = var17.bind(var4)(var10);
            var13 = var10.CircleInformationIcon;
            var10 = {};
            var16 = 'sm';
            var10['size'] = var16;
            var13 = var15.bind(var4)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var13 = _closure1_slot15;
            var11 = var14[var11];
            var11 = var17.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.G82rnT;
            var14 = var15.bind(var16)(var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 6:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isCollectiblesWishlistItemRecord;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isSKUWishlistItemRecord;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TrackUserProfileWishlistActions;
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SKUProductLines;
    var _closure1_slot13 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CollectiblesMobileShopScreen;
    var _closure1_slot14 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot15 = var8;
    var8 = var5.jsxs;
    var _closure1_slot16 = var8;
    var5 = var5.Fragment;
    var _closure1_slot17 = var5;
    var5 = 13;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var13 = 'center';
    var11 = 14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['marginBottom'] = var14;
    var5['headerRow'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['gap'] = var14;
    var5['headerButtons'] = var10;
    var10 = {'width': '100%', 'alignItems': 'center'};
    var5['gridWrapper'] = var10;
    var10 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'gap': 16, 'justifyContent': 'flex-start'};
    var5['itemsContainer'] = var10;
    var10 = {};
    var10['alignItems'] = var13;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_48;
    var10['paddingVertical'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_32;
    var10['paddingHorizontal'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['gap'] = var14;
    var5['emptyState'] = var10;
    var10 = {};
    var10['textAlign'] = var13;
    var5['emptyStateText'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var10['marginTop'] = var13;
    var5['emptyStateCta'] = var10;
    var10 = {'padding': null, 'gap': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'borderWidth': 1};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['padding'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var10['borderColor'] = var13;
    var5['disclaimer'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['marginBottom'] = var13;
    var5['disclaimerTop'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['marginTop'] = var11;
    var5['disclaimerBottom'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot18 = var5;
    var5 = 38;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileWishlistGrid.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function UserProfileWishlistGrid(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var10 = var1.wishlistId;
            var _closure2_slot0 = var10;
            var7 = var1.containerWidth;
            var4 = var1.maxWidth;
            var19 = var1.isVisible;
            var6 = var1.onNavigateAway;
            var _closure2_slot1 = var6;
            var27 = var1.onGiftModalDismiss;
            var _closure2_slot2 = var27;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var1 = _closure1_slot18;
            var16 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 25;
            var1 = var8[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['containerWidth'] = var7;
            var1['maxWidth'] = var4;
            var1 = var3.bind(var5)(var1);
            var3 = var1.cardWidth;
            var _closure2_slot3 = var3;
            var4 = var1.rowWidth;
            var1 = null;
            var3 = var1 != var4;
            var21 = undefined;
            if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = {};
            var3['width'] = var4;
            var21 = var3;
case 8:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 17;
            var3 = var7[var3];
            var4 = var9.bind(var5)(var3);
            var3 = var4.useUserProfileAnalyticsContext;
            var3 = var3.bind(var4)();
            var24 = var3.context;
            _closure2_slot4 = var24;
            var17 = var3.trackUserProfileWishlistAction;
            _closure2_slot5 = var17;
            var4 = _closure1_slot1;
            var3 = 26;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var12 = var3.analyticsLocations;
            _closure2_slot6 = var12;
            var13 = 27;
            var3 = var7[var13];
            var14 = var9.bind(var5)(var3);
            var11 = var14.useStateFromStores;
            var4 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var4;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getWishlist;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var11.bind(var14)(var8, var3);
            _closure2_slot7 = var3;
            var8 = var7[var13];
            var15 = var9.bind(var5)(var8);
            var14 = var15.useStateFromStores;
            var11 = new Array(1);
            var11[0] = var4;
            var8 = function() {
                var3 = _closure1_slot7;
                var2 = var3.isFetching;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var14.bind(var15)(var11, var8);
            var11 = var7[var13];
            var15 = var9.bind(var5)(var11);
            var14 = var15.useStateFromStores;
            var11 = new Array(1);
            var11[0] = var4;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getError;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var14.bind(var15)(var11, var4);
            var7 = var7[var13];
            var15 = var9.bind(var5)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot11;
            var11 = new Array(1);
            var11[0] = var7;
            var9 = new Array(2);
            var9[0] = var3;
            var9[1] = var10;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var5 = _closure1_slot11;
                    var4 = var5.getWishlistSettings;
                    var3 = _closure2_slot7;
                    var3 = var3.userId;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 10:
                    return var1;
                }
            };
            var7 = var14.bind(var15)(var11, var7, var9);
            var9 = var1 == var7;
            var14 = undefined;
            if(var9) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var14 = var7.visibility;
case 12:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = 28;
            var9 = var7[var9];
            var9 = var11.bind(var5)(var9);
            var9 = var9.WishlistVisibility;
            var9 = var9.PRIVATE;
            var9 = var14 === var9;
            var7 = var7[var13];
            var15 = var11.bind(var5)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot10;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var14.bind(var15)(var11, var7);
            var14 = var1 == var7;
            var11 = undefined;
            if(var14) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var11 = var7.id;
case 14:
            var14 = var1 == var3;
            var7 = undefined;
            if(var14) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var7 = var3.userId;
case 16:
            var14 = var11 === var7;
            _closure2_slot8 = var14;
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var13];
            var20 = var11.bind(var5)(var7);
            var15 = var20.useStateFromStores;
            var7 = _closure1_slot10;
            var13 = new Array(1);
            var13[0] = var7;
            var11 = new Array(1);
            var11[0] = var3;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0005_ip = 18; continue _fun0005 }
case 11:
                    var4 = _closure1_slot10;
                    var3 = var4.getUser;
                    var2 = _closure2_slot7;
                    var2 = var2.userId;
                    var1 = var3.bind(var4)(var2);
case 18:
                    return var1;
                }
            };
            var26 = var15.bind(var20)(var13, var7, var11);
            _closure2_slot9 = var26;
            var7 = var1 == var26;
            var11 = undefined;
            if(var7) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var11 = var26.nsfwAllowed;
case 19:
            var7 = false;
            var11 = var7 === var11;
            var20 = _closure1_slot0;
            var7 = _closure1_slot2;
            var22 = 21;
            var13 = var7[var22];
            var13 = var20.bind(var5)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var7 = var7[var22];
            var7 = var20.bind(var5)(var7);
            var7 = var7.t;
            if(var9) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var20 = var7.d78ChW;
            var23 = var13.bind(var15)(var20);
            _fun0003_ip = 23; continue _fun0003;
case 21:
            var7 = var7.RX7D9h;
            var23 = var13.bind(var15)(var7);
case 23:
            var20 = _closure1_slot4;
            var15 = var20.useMemo;
            var13 = new Array(1);
            var13[0] = var3;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var3 = _closure2_slot7;
                    var5 = var3.items;
                    var4 = var5.filter;
                    var3 = _closure1_slot8;
                    var1 = var4.bind(var5)(var3);
case 24:
                    if(!(var2 == var1)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var1 = new Array(0);
case 26:
                    return var1;
                }
            };
            var20 = var15.bind(var20)(var7, var13);
            var25 = _closure1_slot4;
            var15 = var25.useMemo;
            var13 = new Array(1);
            var13[0] = var3;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    var4 = var1 == var2;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 28; continue _fun0007 }
case 25:
                    var3 = _closure2_slot7;
                    var5 = var3.items;
                    var4 = var5.some;
                    var3 = _closure1_slot9;
                    var2 = var4.bind(var5)(var3);
case 28:
                    var1 = var1 != var2;
                    if(!var1) { _fun0007_ip = 29; continue _fun0007 }
case 26:
                    var1 = var2;
case 29:
                    return var1;
                }
            };
            var7 = var15.bind(var25)(var7, var13);
            var15 = _closure1_slot1;
            var25 = _closure1_slot2;
            var13 = 29;
            var13 = var25[var13];
            var15 = var15.bind(var5)(var13);
            var13 = {};
            var13['wishlistId'] = var10;
            var13['onAction'] = var17;
            var25 = var1 == var3;
            var28 = undefined;
            if(var25) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var25 = var3.getProductLines;
            var28 = var25.bind(var3)();
case 30:
            var29 = var1 != var28;
            var25 = null;
            if(!var29) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var25 = var28;
case 32:
            var13['productLines'] = var25;
            var13['isVisible'] = var19;
            var13 = var15.bind(var5)(var13);
            var25 = _closure1_slot4;
            var19 = var25.useCallback;
            var13 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            StartGenerator();
                            var3 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                            var6 = _closure2_slot5;
                            var5 = {};
                            var7 = _closure1_slot12;
                            var7 = var7.WISHLIST_ITEM_CLICKED;
                            var5['action'] = var7;
                            var7 = _closure2_slot0;
                            var5['wishlistId'] = var7;
                            var7 = var3.skuId;
                            var5['skuId'] = var7;
                            var7 = global;
                            var9 = var7.Set;
                            var8 = var3.skuProductLine;
                            var7 = new Array(1);
                            var7[0] = var8;
                            var8 = var9.prototype;
                            var8 = Object.create(var8, {constructor: {value: var9}});
                            var16 = var8;
                            var15 = var7;
                            var7 = new var16[var9](var15, var14);
                            var7 = var7 instanceof Object ? var7 : var8;
                            var5['productLines'] = var7;
                            var9 = undefined;
                            var5 = var6.bind(var9)(var5);
                            var5 = _closure2_slot8;
                            if(var5) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                            var5 = _closure2_slot9;
                            var6 = null;
                            if(!(var6 != var5)) { _fun0008_ip = 36; continue _fun0008 }
case 38:
                            var5 = var3.isOwned;
                            if(var5) { _fun0008_ip = 36; continue _fun0008 }
case 39:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 18;
                            var5 = var8[var5];
                            var8 = var7.bind(var9)(var5);
                            var7 = var8.maybeFetchCollectiblesProduct;
                            var5 = var3.skuId;
                            var5 = var7.bind(var8)(var5);
                            SaveGenerator(address=192);
case 40:
                            return var5;
case 41:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                            if(var7) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                            var10 = _closure1_slot6;
                            var8 = var10.getProduct;
                            var7 = var3.skuId;
                            var10 = var8.bind(var10)(var7);
                            if(!(var6 != var10)) { _fun0008_ip = 36; continue _fun0008 }
case 44:
                            var7 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 30;
                            var6 = var12[var6];
                            var8 = var7.bind(var9)(var6);
                            var7 = var8.openShopGiftModal;
                            var6 = {};
                            var6['product'] = var10;
                            var11 = _closure1_slot1;
                            var10 = 19;
                            var10 = var12[var10];
                            var10 = var11.bind(var9)(var10);
                            var11 = var10.USER_PROFILE_WISHLIST;
                            var10 = new Array(1);
                            var10[0] = var11;
                            var6['analyticsLocations'] = var10;
                            var10 = _closure2_slot9;
                            var6['lockedRecipientUser'] = var10;
                            var10 = _closure2_slot2;
                            var6['onGiftModalDismiss'] = var10;
                            var6 = var7.bind(var8)(var6);
                            var6 = undefined;
                            return var6;
case 42:
                            return var5;
case 36:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var6 = 18;
                            var5 = var5[var6];
                            var7 = var7.bind(var9)(var5);
                            var5 = var7.isCollectiblesShopOpen;
                            var5 = var5.bind(var7)();
                            if(var5) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                            var7 = _closure2_slot1;
                            var5 = null;
                            if(!(var5 != var7)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                            var2 = _closure2_slot1;
                            var2 = var2.bind(var9)();
case 47:
                            var5 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var2 = var11[var6];
                            var7 = var5.bind(var9)(var2);
                            var5 = var7.openCollectiblesShopMobile;
                            var2 = {};
                            var10 = _closure1_slot1;
                            var8 = 19;
                            var12 = var11[var8];
                            var12 = var10.bind(var9)(var12);
                            var13 = var12.USER_PROFILE_WISHLIST;
                            var12 = new Array(1);
                            var12[0] = var13;
                            var2['analyticsLocations'] = var12;
                            var8 = var11[var8];
                            var8 = var10.bind(var9)(var8);
                            var8 = var8.USER_PROFILE_WISHLIST;
                            var2['analyticsSource'] = var8;
                            var8 = var3.skuId;
                            var2['initialProductSkuId'] = var8;
                            var8 = _closure1_slot14;
                            var8 = var8.SHOP_ALL;
                            var2['screen'] = var8;
                            var2 = var5.bind(var7)(var2);
                            return var9;
case 45:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var6 = var5.bind(var9)(var2);
                            var5 = var6.maybeFetchCollectiblesProduct;
                            var2 = var3.skuId;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=528);
case 49:
                            return var2;
case 50:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                            var6 = _closure1_slot6;
                            var5 = var6.getProduct;
                            var3 = var3.skuId;
                            var8 = var5.bind(var6)(var3);
                            var3 = null;
                            if(!(var3 == var8)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 32;
                            var3 = var6[var3];
                            var5 = var5.bind(var9)(var3);
                            var3 = var5.hideAllActionSheets;
                            var3 = var3.bind(var5)();
                            var3 = undefined;
                            _fun0008_ip = 55; continue _fun0008;
case 53:
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 31;
                            var5 = var10[var5];
                            var7 = var6.bind(var9)(var5);
                            var6 = var7.openProductDetailsActionSheet;
                            var5 = {};
                            var5['product'] = var8;
                            var8 = _closure1_slot1;
                            var4 = 19;
                            var4 = var10[var4];
                            var4 = var8.bind(var9)(var4);
                            var8 = var4.USER_PROFILE_WISHLIST;
                            var4 = new Array(1);
                            var4[0] = var8;
                            var5['analyticsLocations'] = var4;
                            var4 = 'stack';
                            var4 = var6.bind(var7)(var5, var4);
                            var3 = undefined;
case 55:
                            return var3;
case 51:
                            return var2;
case 34:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var15 = var13.bind(var5)();
            var13 = new Array(6);
            var13[0] = var10;
            var13[1] = var17;
            var13[2] = var6;
            var13[3] = var27;
            var13[4] = var14;
            var13[5] = var26;
            var13 = var19.bind(var25)(var15, var13);
            _closure2_slot10 = var13;
            var19 = _closure1_slot4;
            var15 = var19.useCallback;
            var13 = new Array(5);
            var13[0] = var10;
            var13[1] = var24;
            var13[2] = var12;
            var13[3] = var17;
            var13[4] = var3;
            var12 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = _closure2_slot5;
                    var3 = {};
                    var1 = _closure1_slot12;
                    var1 = var1.PRESS_EDIT_WISHLIST;
                    var3['action'] = var1;
                    var1 = _closure2_slot0;
                    var3['wishlistId'] = var1;
                    var6 = _closure2_slot7;
                    var1 = null;
                    var7 = var1 == var6;
                    var1 = undefined;
                    var6 = undefined;
                    if(var7) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var8 = _closure2_slot7;
                    var7 = var8.getProductLines;
                    var6 = var7.bind(var8)();
case 56:
                    var3['productLines'] = var6;
                    var3 = var5.bind(var1)(var3);
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 32;
                    var5 = var3[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 34;
                    var4 = var3[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 33;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var12 = var5.bind(var1)(var4, var3);
                    var4 = {};
                    var3 = _closure2_slot0;
                    var4['wishlistId'] = var3;
                    var3 = _closure2_slot4;
                    var4['analyticsContext'] = var3;
                    var2 = _closure2_slot6;
                    var4['analyticsLocations'] = var2;
                    var11 = 'EditWishlistActionSheet';
                    var9 = 'stack';
                    var13 = var7;
                    var10 = var4;
                    var2 = var13[var6](var12, var11, var10, var9, var8);
                    return var1;
                }
            };
            var29 = var15.bind(var19)(var12, var13);
            var15 = _closure1_slot4;
            var13 = var15.useCallback;
            var12 = new Array(3);
            var12[0] = var17;
            var12[1] = var10;
            var12[2] = var6;
            var10 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure2_slot5;
                    var3 = {};
                    var1 = _closure1_slot12;
                    var1 = var1.PRESS_ADD_WISHLIST_ITEM;
                    var3['action'] = var1;
                    var1 = _closure2_slot0;
                    var3['wishlistId'] = var1;
                    var1 = global;
                    var7 = var1.Set;
                    var1 = _closure1_slot13;
                    var6 = var1.COLLECTIBLES;
                    var1 = new Array(1);
                    var1[0] = var6;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {constructor: {value: var7}});
                    var11 = var6;
                    var10 = var1;
                    var1 = new var11[var7](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var6;
                    var3['productLines'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0010_ip = 58; continue _fun0010 }
case 3:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 58:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 18;
                    var2 = var8[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openCollectiblesShopMobile;
                    var2 = {};
                    var7 = _closure1_slot1;
                    var6 = 19;
                    var9 = var8[var6];
                    var9 = var7.bind(var1)(var9);
                    var9 = var9.USER_PROFILE_WISHLIST;
                    var2['analyticsSource'] = var9;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.USER_PROFILE_WISHLIST;
                    var6 = new Array(1);
                    var6[0] = var7;
                    var2['analyticsLocations'] = var6;
                    var5 = _closure1_slot14;
                    var5 = var5.FEATURED_PAGE;
                    var2['screen'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var27 = var13.bind(var15)(var10, var12);
            if(!var8) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            if(!(var1 != var3)) { _fun0003_ip = 61; continue _fun0003 }
case 59:
            if(!(var1 == var4)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            if(!(var1 != var3)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var4 = var20.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var28 = var20.length;
            var8 = _closure1_slot16;
            var4 = _closure1_slot17;
            var3 = {};
            var10 = var14;
            if(!var14) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            if(var9) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var9 = var11;
case 70:
            var10 = var9;
case 68:
            if(!var10) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var12 = _closure1_slot16;
            var11 = _closure1_slot5;
            var9 = {};
            var15 = var16.disclaimer;
            var13 = new Array(2);
            var13[0] = var15;
            var15 = var16.disclaimerTop;
            var13[1] = var15;
            var9['style'] = var13;
            var19 = _closure1_slot15;
            var17 = _closure1_slot0;
            var24 = _closure1_slot2;
            var13 = 24;
            var13 = var24[var13];
            var13 = var17.bind(var5)(var13);
            var15 = var13.CircleInformationIcon;
            var13 = {};
            var25 = 'sm';
            var13['size'] = var25;
            var15 = var19.bind(var5)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var19 = _closure1_slot15;
            var15 = 20;
            var15 = var24[var15];
            var15 = var17.bind(var5)(var15);
            var17 = var15.Text;
            var15 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var15['children'] = var23;
            var15 = var19.bind(var5)(var17, var15);
            var13[1] = var15;
            var9['children'] = var13;
            var10 = var12.bind(var5)(var11, var9);
case 72:
            var9 = new Array(4);
            var9[0] = var10;
            var12 = _closure1_slot16;
            var11 = _closure1_slot5;
            var10 = {};
            var13 = var16.headerRow;
            var10['style'] = var13;
            var19 = _closure1_slot15;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = 20;
            var13 = var23[var15];
            var13 = var24.bind(var5)(var13);
            var17 = var13.Text;
            var13 = {'variant': 'text-sm/semibold', 'color': 'text-muted'};
            var25 = var23[var22];
            var25 = var24.bind(var5)(var25);
            var26 = var25.intl;
            var25 = var26.formatToPlainString;
            var23 = var23[var22];
            var23 = var24.bind(var5)(var23);
            var23 = var23.t;
            var24 = var23.r6Y1Lg;
            var23 = {};
            var23['count'] = var28;
            var23 = var25.bind(var26)(var24, var23);
            var13['children'] = var23;
            var17 = var19.bind(var5)(var17, var13);
            var13 = new Array(2);
            var13[0] = var17;
            if(!var14) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var23 = _closure1_slot16;
            var19 = _closure1_slot5;
            var17 = {};
            var24 = var16.headerButtons;
            var17['style'] = var24;
            var26 = _closure1_slot15;
            var31 = _closure1_slot0;
            var28 = _closure1_slot2;
            var24 = 22;
            var24 = var28[var24];
            var24 = var31.bind(var5)(var24);
            var25 = var24.Button;
            var24 = {'size': 'sm', 'variant': 'secondary'};
            var34 = 'sm';
            var33 = _closure1_slot15;
            var30 = 23;
            var30 = var28[var30];
            var30 = var31.bind(var5)(var30);
            var32 = var30.PlusMediumIcon;
            var30 = {};
            var35 = 'xs';
            var30['size'] = var35;
            var30 = var33.bind(var5)(var32, var30);
            var24['icon'] = var30;
            var30 = var28[var22];
            var30 = var31.bind(var5)(var30);
            var33 = var30.intl;
            var32 = var33.string;
            var30 = var28[var22];
            var30 = var31.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.SDUwM0;
            var30 = var32.bind(var33)(var30);
            var24['text'] = var30;
            var24['onPress'] = var27;
            var25 = var26.bind(var5)(var25, var24);
            var24 = new Array(2);
            var24[0] = var25;
            var27 = _closure1_slot15;
            var25 = 35;
            var25 = var28[var25];
            var25 = var31.bind(var5)(var25);
            var26 = var25.IconButton;
            var25 = {'size': 'sm', 'variant': 'secondary'};
            var33 = _closure1_slot15;
            var30 = 36;
            var30 = var28[var30];
            var30 = var31.bind(var5)(var30);
            var32 = var30.PencilIcon;
            var30 = {};
            var30['size'] = var34;
            var35 = _closure1_slot1;
            var34 = 14;
            var34 = var28[var34];
            var34 = var35.bind(var5)(var34);
            var34 = var34.colors;
            var34 = var34.CONTROL_SECONDARY_TEXT_DEFAULT;
            var30['color'] = var34;
            var30 = var33.bind(var5)(var32, var30);
            var25['icon'] = var30;
            var25['onPress'] = var29;
            var29 = var28[var22];
            var29 = var31.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var28[var22];
            var28 = var31.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.bt75uw;
            var28 = var29.bind(var30)(var28);
            var25['accessibilityLabel'] = var28;
            var25 = var27.bind(var5)(var26, var25);
            var24[1] = var25;
            var17['children'] = var24;
            var14 = var23.bind(var5)(var19, var17);
case 74:
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot15;
            var11 = _closure1_slot5;
            var10 = {};
            var13 = var16.gridWrapper;
            var10['style'] = var13;
            var17 = _closure1_slot15;
            var14 = _closure1_slot5;
            var13 = {};
            var23 = var16.itemsContainer;
            var19 = new Array(2);
            var19[0] = var23;
            var19[1] = var21;
            var13['style'] = var19;
            var19 = var20.map;
            var18 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot15;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 37;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['item'] = var1;
                var6 = function onPress() {
                    var3 = _closure2_slot10;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onPress'] = var6;
                var6 = _closure2_slot3;
                var2['size'] = var6;
                var1 = var1.skuId;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var18 = var19.bind(var20)(var18);
            var13['children'] = var18;
            var13 = var17.bind(var5)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[2] = var10;
            var10 = var7;
            if(!var10) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var13 = _closure1_slot16;
            var12 = _closure1_slot5;
            var11 = {};
            var17 = var16.disclaimer;
            var14 = new Array(2);
            var14[0] = var17;
            var16 = var16.disclaimerBottom;
            var14[1] = var16;
            var11['style'] = var14;
            var17 = _closure1_slot15;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 24;
            var14 = var18[var14];
            var14 = var21.bind(var5)(var14);
            var16 = var14.CircleInformationIcon;
            var14 = {};
            var19 = 'sm';
            var14['size'] = var19;
            var16 = var17.bind(var5)(var16, var14);
            var14 = new Array(2);
            var14[0] = var16;
            var17 = _closure1_slot15;
            var15 = var18[var15];
            var15 = var21.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var19 = var18[var22];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.G82rnT;
            var18 = var19.bind(var20)(var18);
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
case 76:
            var9[3] = var10;
            var3['children'] = var9;
            var3 = var8.bind(var5)(var4, var3);
            return var3;
case 66:
            var4 = _closure1_slot15;
            var3 = _closure1_slot19;
            var2 = {};
            var2['shouldShowMRNotice'] = var7;
            var2['onNavigateAway'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 64:
            return var1;
case 62:
            return var1;
case 61:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['WishlistEmptyState'] = var2;
    return var1;
})();