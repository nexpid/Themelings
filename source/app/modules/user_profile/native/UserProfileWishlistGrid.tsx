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
            var1 = arg1;
            var6 = var1.shouldShowMRNotice;
            var1 = _closure1_slot14;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useThemeContext;
            var1 = var1.bind(var3)();
            var3 = var1.theme;
            var1 = 12;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isThemeDark;
            var1 = var1.bind(var2)(var3);
            var14 = 'mobile-text-heading-primary';
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = 'always-white';
case 2:
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 13;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 14;
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
                var5 = _closure1_slot10;
                var5 = var5.FEATURED_PAGE;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var19 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot12;
            var2 = _closure1_slot13;
            var1 = {};
            var7 = _closure1_slot4;
            var5 = {};
            var8 = var13.emptyState;
            var5['style'] = var8;
            var10 = _closure1_slot11;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var11 = 15;
            var8 = var20[var11];
            var8 = var23.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-lg/semibold', 'color': null, 'accessibilityRole': 'header'};
            var8['color'] = var14;
            var18 = 16;
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
            var14 = _closure1_slot11;
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
            var14 = _closure1_slot11;
            var10 = _closure1_slot4;
            var9 = {};
            var15 = var13.emptyStateCta;
            var9['style'] = var15;
            var17 = _closure1_slot11;
            var15 = 17;
            var15 = var20[var15];
            var15 = var23.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {'size': 'md', 'variant': 'secondary'};
            var24 = _closure1_slot11;
            var21 = 18;
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
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot12;
            var8 = _closure1_slot4;
            var7 = {};
            var14 = var13.disclaimer;
            var10 = new Array(2);
            var10[0] = var14;
            var13 = var13.disclaimerBottom;
            var10[1] = var13;
            var7['style'] = var10;
            var15 = _closure1_slot11;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 19;
            var10 = var14[var10];
            var10 = var17.bind(var4)(var10);
            var13 = var10.CircleInformationIcon;
            var10 = {};
            var16 = 'sm';
            var10['size'] = var16;
            var13 = var15.bind(var4)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var13 = _closure1_slot11;
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
case 4:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isCollectiblesWishlistItemRecord;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isSKUWishlistItemRecord;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CollectiblesMobileShopScreen;
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot11 = var8;
    var8 = var5.jsxs;
    var _closure1_slot12 = var8;
    var5 = var5.Fragment;
    var _closure1_slot13 = var5;
    var5 = 9;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var13 = 'center';
    var11 = 10;
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
    var10 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'gap': 16};
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
    var13 = var13.PX_8;
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
    var _closure1_slot14 = var5;
    var5 = 30;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileWishlistGrid.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function UserProfileWishlistGrid(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var20 = var1.wishlistId;
            var _closure2_slot0 = var20;
            var1 = var1.backgroundColor;
            var _closure2_slot1 = var1;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var1 = _closure1_slot14;
            var15 = var1.bind(var5)();
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 20;
            var3 = var1[var3];
            var4 = var6.bind(var5)(var3);
            var3 = var4.useUserProfileAnalyticsContext;
            var3 = var3.bind(var4)();
            var18 = var3.context;
            var _closure2_slot2 = var18;
            var4 = _closure1_slot1;
            var3 = 21;
            var3 = var1[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var11 = var3.analyticsLocations;
            var _closure2_slot3 = var11;
            var13 = 22;
            var3 = var1[var13];
            var9 = var6.bind(var5)(var3);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var4;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getWishlist;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var8.bind(var9)(var7, var3);
            var _closure2_slot4 = var3;
            var7 = var1[var13];
            var10 = var6.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var8 = new Array(1);
            var8[0] = var4;
            var7 = function() {
                var3 = _closure1_slot5;
                var2 = var3.isFetching;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var9.bind(var10)(var8, var7);
            var8 = var1[var13];
            var10 = var6.bind(var5)(var8);
            var9 = var10.useStateFromStores;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getError;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var9.bind(var10)(var8, var4);
            var1 = var1[var13];
            var10 = var6.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var1;
            var6 = new Array(2);
            var6[0] = var3;
            var6[1] = var20;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var5 = _closure1_slot9;
                    var4 = var5.getWishlistSettings;
                    var3 = _closure2_slot4;
                    var3 = var3.userId;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 6:
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var8, var1, var6);
            var1 = null;
            var8 = var1 == var6;
            var10 = undefined;
            if(var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var10 = var6.visibility;
case 8:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = 23;
            var8 = var6[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.WishlistVisibility;
            var8 = var8.PRIVATE;
            var8 = var10 === var8;
            var6 = var6[var13];
            var14 = var9.bind(var5)(var6);
            var10 = var14.useStateFromStores;
            var6 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var10.bind(var14)(var9, var6);
            var10 = var1 == var6;
            var9 = undefined;
            if(var10) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var9 = var6.id;
case 10:
            var10 = var1 == var3;
            var6 = undefined;
            if(var10) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = var3.userId;
case 12:
            var9 = var9 === var6;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var13];
            var16 = var10.bind(var5)(var6);
            var14 = var16.useStateFromStores;
            var6 = _closure1_slot8;
            var13 = new Array(1);
            var13[0] = var6;
            var10 = new Array(1);
            var10[0] = var3;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 7:
                    var4 = _closure1_slot8;
                    var3 = var4.getUser;
                    var2 = _closure2_slot4;
                    var2 = var2.userId;
                    var1 = var3.bind(var4)(var2);
case 14:
                    return var1;
                }
            };
            var6 = var14.bind(var16)(var13, var6, var10);
            var13 = var1 == var6;
            var10 = undefined;
            if(var13) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var10 = var6.nsfwAllowed;
case 15:
            var6 = false;
            var10 = var6 === var10;
            var16 = _closure1_slot0;
            var6 = _closure1_slot2;
            var21 = 16;
            var13 = var6[var21];
            var13 = var16.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var6 = var6[var21];
            var6 = var16.bind(var5)(var6);
            var6 = var6.t;
            if(var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var16 = var6.d78ChW;
            var19 = var13.bind(var14)(var16);
            _fun0002_ip = 19; continue _fun0002;
case 17:
            var6 = var6.RX7D9h;
            var19 = var13.bind(var14)(var6);
case 19:
            var16 = _closure1_slot3;
            var14 = var16.useMemo;
            var13 = new Array(1);
            var13[0] = var3;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var3 = _closure2_slot4;
                    var5 = var3.items;
                    var4 = var5.filter;
                    var3 = _closure1_slot6;
                    var1 = var4.bind(var5)(var3);
case 20:
                    if(!(var2 == var1)) { _fun0005_ip = 22; continue _fun0005 }
case 6:
                    var1 = new Array(0);
case 22:
                    return var1;
                }
            };
            var16 = var14.bind(var16)(var6, var13);
            var17 = _closure1_slot3;
            var14 = var17.useMemo;
            var13 = new Array(1);
            var13[0] = var3;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    var4 = var1 == var2;
                    var2 = undefined;
                    if(var4) { _fun0006_ip = 23; continue _fun0006 }
case 21:
                    var3 = _closure2_slot4;
                    var5 = var3.items;
                    var4 = var5.some;
                    var3 = _closure1_slot7;
                    var2 = var4.bind(var5)(var3);
case 23:
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 24; continue _fun0006 }
case 22:
                    var1 = var2;
case 24:
                    return var1;
                }
            };
            var6 = var14.bind(var17)(var6, var13);
            var22 = _closure1_slot3;
            var17 = var22.useCallback;
            var14 = function(arg1) {
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 13;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 14;
                var9 = var8[var6];
                var9 = var7.bind(var1)(var9);
                var10 = var9.USER_PROFILE_WISHLIST;
                var9 = new Array(1);
                var9[0] = var10;
                var2['analyticsLocations'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.USER_PROFILE_WISHLIST;
                var2['analyticsSource'] = var6;
                var6 = arg1;
                var2['initialProductSkuId'] = var6;
                var5 = _closure1_slot10;
                var5 = var5.SHOP_ALL;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13 = new Array(0);
            var13 = var17.bind(var22)(var14, var13);
            _closure2_slot5 = var13;
            var17 = _closure1_slot3;
            var14 = var17.useCallback;
            var13 = new Array(3);
            var13[0] = var20;
            var13[1] = var18;
            var13[2] = var11;
            var11 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var4 = var2[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.openLazy;
                var4 = _closure1_slot0;
                var3 = 26;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 25;
                var3 = var2[var3];
                var2 = var2.paths;
                var11 = var4.bind(var1)(var3, var2);
                var4 = {};
                var3 = _closure2_slot0;
                var4['wishlistId'] = var3;
                var3 = _closure2_slot2;
                var4['analyticsContext'] = var3;
                var2 = _closure2_slot3;
                var4['analyticsLocations'] = var2;
                var10 = 'EditWishlistActionSheet';
                var8 = 'stack';
                var12 = var7;
                var9 = var4;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var27 = var14.bind(var17)(var11, var13);
            var17 = _closure1_slot3;
            var14 = var17.useCallback;
            var13 = function() {
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 13;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 14;
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
                var5 = _closure1_slot10;
                var5 = var5.FEATURED_PAGE;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var11 = new Array(0);
            var25 = var14.bind(var17)(var13, var11);
            if(!var7) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            if(!(var1 != var3)) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            if(!(var1 == var4)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            if(!(var1 != var3)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var4 = var16.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var24 = var16.length;
            var7 = _closure1_slot12;
            var4 = _closure1_slot13;
            var3 = {};
            if(!var9) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            if(var8) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var8 = var10;
case 36:
            var9 = var8;
case 34:
            if(!var9) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var11 = _closure1_slot12;
            var10 = _closure1_slot4;
            var8 = {};
            var14 = var15.disclaimer;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = var15.disclaimerTop;
            var13[1] = var14;
            var8['style'] = var13;
            var18 = _closure1_slot11;
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 19;
            var13 = var20[var13];
            var13 = var17.bind(var5)(var13);
            var14 = var13.CircleInformationIcon;
            var13 = {};
            var22 = 'sm';
            var13['size'] = var22;
            var14 = var18.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var18 = _closure1_slot11;
            var14 = 15;
            var14 = var20[var14];
            var14 = var17.bind(var5)(var14);
            var17 = var14.Text;
            var14 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var14['children'] = var19;
            var14 = var18.bind(var5)(var17, var14);
            var13[1] = var14;
            var8['children'] = var13;
            var9 = var11.bind(var5)(var10, var8);
case 38:
            var8 = new Array(4);
            var8[0] = var9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot4;
            var9 = {};
            var13 = var15.headerRow;
            var9['style'] = var13;
            var18 = _closure1_slot11;
            var29 = _closure1_slot0;
            var26 = _closure1_slot2;
            var14 = 15;
            var13 = var26[var14];
            var13 = var29.bind(var5)(var13);
            var17 = var13.Text;
            var13 = {'variant': 'text-sm/semibold', 'color': 'text-muted'};
            var19 = var26[var21];
            var19 = var29.bind(var5)(var19);
            var23 = var19.intl;
            var22 = var23.formatToPlainString;
            var19 = var26[var21];
            var19 = var29.bind(var5)(var19);
            var19 = var19.t;
            var20 = var19.r6Y1Lg;
            var19 = {};
            var19['count'] = var24;
            var19 = var22.bind(var23)(var20, var19);
            var13['children'] = var19;
            var17 = var18.bind(var5)(var17, var13);
            var13 = new Array(2);
            var13[0] = var17;
            var20 = _closure1_slot12;
            var19 = _closure1_slot4;
            var17 = {};
            var18 = var15.headerButtons;
            var17['style'] = var18;
            var24 = _closure1_slot11;
            var18 = 17;
            var18 = var26[var18];
            var18 = var29.bind(var5)(var18);
            var23 = var18.Button;
            var22 = {'size': 'sm', 'variant': 'secondary'};
            var18 = 'sm';
            var31 = _closure1_slot11;
            var28 = 18;
            var28 = var26[var28];
            var28 = var29.bind(var5)(var28);
            var30 = var28.PlusMediumIcon;
            var28 = {};
            var32 = 'xs';
            var28['size'] = var32;
            var28 = var31.bind(var5)(var30, var28);
            var22['icon'] = var28;
            var28 = var26[var21];
            var28 = var29.bind(var5)(var28);
            var31 = var28.intl;
            var30 = var31.string;
            var28 = var26[var21];
            var28 = var29.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.SDUwM0;
            var28 = var30.bind(var31)(var28);
            var22['text'] = var28;
            var22['onPress'] = var25;
            var23 = var24.bind(var5)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var25 = _closure1_slot11;
            var23 = 27;
            var23 = var26[var23];
            var23 = var29.bind(var5)(var23);
            var24 = var23.IconButton;
            var23 = {'size': 'sm', 'variant': 'secondary'};
            var31 = _closure1_slot11;
            var28 = 28;
            var28 = var26[var28];
            var28 = var29.bind(var5)(var28);
            var30 = var28.PencilIcon;
            var28 = {};
            var28['size'] = var18;
            var33 = _closure1_slot1;
            var32 = 10;
            var32 = var26[var32];
            var32 = var33.bind(var5)(var32);
            var32 = var32.colors;
            var32 = var32.CONTROL_SECONDARY_TEXT_DEFAULT;
            var28['color'] = var32;
            var28 = var31.bind(var5)(var30, var28);
            var23['icon'] = var28;
            var23['onPress'] = var27;
            var27 = var26[var21];
            var27 = var29.bind(var5)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var26[var21];
            var26 = var29.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.bt75uw;
            var26 = var27.bind(var28)(var26);
            var23['accessibilityLabel'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var22[1] = var23;
            var17['children'] = var22;
            var17 = var20.bind(var5)(var19, var17);
            var13[1] = var17;
            var9['children'] = var13;
            var9 = var11.bind(var5)(var10, var9);
            var8[1] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot4;
            var9 = {};
            var13 = var15.itemsContainer;
            var9['style'] = var13;
            var13 = var16.map;
            var12 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot11;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 29;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['item'] = var1;
                var6 = function onPress() {
                    var3 = _closure2_slot5;
                    var1 = _closure3_slot0;
                    var2 = var1.skuId;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onPress'] = var6;
                var6 = _closure2_slot1;
                var2['backgroundColor'] = var6;
                var1 = var1.skuId;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var12 = var13.bind(var16)(var12);
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var8[2] = var9;
            var9 = var6;
            if(!var9) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var12 = _closure1_slot12;
            var11 = _closure1_slot4;
            var10 = {};
            var16 = var15.disclaimer;
            var13 = new Array(2);
            var13[0] = var16;
            var15 = var15.disclaimerBottom;
            var13[1] = var15;
            var10['style'] = var13;
            var16 = _closure1_slot11;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 19;
            var13 = var17[var13];
            var13 = var20.bind(var5)(var13);
            var15 = var13.CircleInformationIcon;
            var13 = {};
            var13['size'] = var18;
            var15 = var16.bind(var5)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var16 = _closure1_slot11;
            var14 = var17[var14];
            var14 = var20.bind(var5)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var18 = var17[var21];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.G82rnT;
            var17 = var18.bind(var19)(var17);
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 40:
            var8[3] = var9;
            var3['children'] = var8;
            var3 = var7.bind(var5)(var4, var3);
            return var3;
case 32:
            var4 = _closure1_slot11;
            var3 = _closure1_slot15;
            var2 = {};
            var2['shouldShowMRNotice'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 30:
            return var1;
case 28:
            return var1;
case 27:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['WishlistEmptyState'] = var2;
    return var1;
})();