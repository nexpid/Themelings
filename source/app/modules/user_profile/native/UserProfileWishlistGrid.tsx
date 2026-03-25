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
            var4 = undefined;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot21;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
            var2 = var7[var2];
            var5 = var3.bind(var4)(var2);
            var2 = var5.useThemeContext;
            var2 = var2.bind(var5)();
            var5 = var2.theme;
            var2 = 18;
            var2 = var7[var2];
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
            var2 = 19;
            var2 = var20[var2];
            var3 = var23.bind(var4)(var2);
            var2 = var3.useUserProfileAnalyticsContext;
            var2 = var2.bind(var3)();
            var7 = var2.trackUserProfileWishlistAction;
            _closure2_slot0 = var7;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure1_slot13;
                var1 = var1.PRESS_ADD_WISHLIST_ITEM;
                var2['action'] = var1;
                var1 = global;
                var6 = var1.Set;
                var1 = _closure1_slot15;
                var4 = var1.COLLECTIBLES;
                var1 = new Array(1);
                var1[0] = var4;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var11 = var4;
                var10 = var1;
                var1 = new var11[var6](var10, var9);
                var1 = var1 instanceof Object ? var1 : var4;
                var2['productLines'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 20;
                var2 = var8[var2];
                var3 = var7.bind(var1)(var2);
                var2 = var3.hideAllActionSheets;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = 21;
                var2 = var8[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var6 = 22;
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
                var5 = _closure1_slot16;
                var5 = var5.FEATURED_PAGE;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var19 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot19;
            var2 = _closure1_slot20;
            var1 = {};
            var7 = _closure1_slot5;
            var5 = {};
            var8 = var13.emptyState;
            var5['style'] = var8;
            var10 = _closure1_slot18;
            var11 = 23;
            var8 = var20[var11];
            var8 = var23.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': null, 'accessibilityRole': 'header'};
            var8['color'] = var14;
            var18 = 24;
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
            var14 = _closure1_slot18;
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
            var15 = var15["/X1ny6"];
            var15 = var16.bind(var17)(var15);
            var9['children'] = var15;
            var9 = var14.bind(var4)(var10, var9);
            var8[1] = var9;
            var14 = _closure1_slot18;
            var10 = _closure1_slot5;
            var9 = {};
            var15 = var13.emptyStateCta;
            var9['style'] = var15;
            var17 = _closure1_slot18;
            var15 = 25;
            var15 = var20[var15];
            var15 = var23.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {'size': 'md', 'variant': 'secondary'};
            var24 = _closure1_slot18;
            var21 = 26;
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
            var9 = _closure1_slot19;
            var8 = _closure1_slot5;
            var7 = {};
            var14 = var13.disclaimer;
            var10 = new Array(2);
            var10[0] = var14;
            var13 = var13.disclaimerBottom;
            var10[1] = var13;
            var7['style'] = var10;
            var15 = _closure1_slot18;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 27;
            var10 = var14[var10];
            var10 = var17.bind(var4)(var10);
            var13 = var10.CircleInformationIcon;
            var10 = {};
            var16 = 'sm';
            var10['size'] = var16;
            var13 = var15.bind(var4)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var13 = _closure1_slot18;
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
    var _closure1_slot22 = var2;
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
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isCollectiblesWishlistItemRecord;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isSKUWishlistItemRecord;
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.TrackUserProfileWishlistActions;
    var _closure1_slot13 = var8;
    var5 = var5.UserProfileSections;
    var _closure1_slot14 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SKUProductLines;
    var _closure1_slot15 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CollectiblesMobileShopScreen;
    var _closure1_slot16 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GiftingOrigin;
    var _closure1_slot17 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot18 = var8;
    var8 = var5.jsxs;
    var _closure1_slot19 = var8;
    var5 = var5.Fragment;
    var _closure1_slot20 = var5;
    var5 = 15;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var13 = 'center';
    var11 = 16;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
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
    var _closure1_slot21 = var5;
    var5 = 43;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileWishlistGrid.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function UserProfileWishlistGrid(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var9 = var1.wishlistId;
            var _closure2_slot0 = var9;
            var6 = var1.containerWidth;
            var4 = var1.maxWidth;
            var18 = var1.isVisible;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var1 = _closure1_slot21;
            var15 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 28;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['containerWidth'] = var6;
            var1['maxWidth'] = var4;
            var1 = var3.bind(var5)(var1);
            var3 = var1.cardWidth;
            var _closure2_slot1 = var3;
            var4 = var1.rowWidth;
            var1 = null;
            var3 = var1 != var4;
            var20 = undefined;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = {};
            var3['width'] = var4;
            var20 = var3;
case 6:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 19;
            var3 = var8[var3];
            var4 = var10.bind(var5)(var3);
            var3 = var4.useUserProfileAnalyticsContext;
            var3 = var3.bind(var4)();
            var23 = var3.context;
            _closure2_slot2 = var23;
            var16 = var3.trackUserProfileWishlistAction;
            _closure2_slot3 = var16;
            var4 = _closure1_slot1;
            var3 = 29;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var11 = var3.analyticsLocations;
            _closure2_slot4 = var11;
            var6 = 30;
            var3 = var8[var6];
            var13 = var10.bind(var5)(var3);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var4;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getWishlist;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var12.bind(var13)(var7, var3);
            _closure2_slot5 = var3;
            var7 = var8[var6];
            var14 = var10.bind(var5)(var7);
            var13 = var14.useStateFromStores;
            var12 = new Array(1);
            var12[0] = var4;
            var7 = function() {
                var3 = _closure1_slot8;
                var2 = var3.isFetching;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var13.bind(var14)(var12, var7);
            var12 = var8[var6];
            var14 = var10.bind(var5)(var12);
            var13 = var14.useStateFromStores;
            var12 = new Array(1);
            var12[0] = var4;
            var4 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getError;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var13.bind(var14)(var12, var4);
            var8 = var8[var6];
            var14 = var10.bind(var5)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot12;
            var12 = new Array(1);
            var12[0] = var8;
            var10 = new Array(2);
            var10[0] = var3;
            var10[1] = var9;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure1_slot12;
                    var4 = var5.getWishlistSettings;
                    var3 = _closure2_slot5;
                    var3 = var3.userId;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 8:
                    return var1;
                }
            };
            var8 = var13.bind(var14)(var12, var8, var10);
            var10 = var1 == var8;
            var13 = undefined;
            if(var10) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var13 = var8.visibility;
case 10:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 31;
            var8 = var10[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.WishlistVisibility;
            var8 = var8.PRIVATE;
            var8 = var13 === var8;
            var10 = var10[var6];
            var14 = var12.bind(var5)(var10);
            var13 = var14.useStateFromStores;
            var10 = _closure1_slot11;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var13.bind(var14)(var12, var10);
            var13 = var1 == var10;
            var12 = undefined;
            if(var13) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var12 = var10.id;
case 12:
            var13 = var1 == var3;
            var10 = undefined;
            if(var13) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var10 = var3.userId;
case 14:
            var13 = var12 === var10;
            _closure2_slot6 = var13;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var6];
            var21 = var12.bind(var5)(var10);
            var19 = var21.useStateFromStores;
            var10 = _closure1_slot11;
            var14 = new Array(1);
            var14[0] = var10;
            var12 = new Array(1);
            var12[0] = var3;
            var10 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 16; continue _fun0004 }
case 9:
                    var4 = _closure1_slot11;
                    var3 = var4.getUser;
                    var2 = _closure2_slot5;
                    var2 = var2.userId;
                    var1 = var3.bind(var4)(var2);
case 16:
                    return var1;
                }
            };
            var26 = var19.bind(var21)(var14, var10, var12);
            _closure2_slot7 = var26;
            var10 = var1 == var26;
            var12 = undefined;
            if(var10) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var12 = var26.nsfwAllowed;
case 17:
            var10 = false;
            var10 = var10 === var12;
            var22 = _closure1_slot0;
            var12 = _closure1_slot2;
            var21 = 24;
            var14 = var12[var21];
            var14 = var22.bind(var5)(var14);
            var19 = var14.intl;
            var14 = var19.string;
            var12 = var12[var21];
            var12 = var22.bind(var5)(var12);
            var12 = var12.t;
            if(var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var22 = var12.d78ChW;
            var22 = var14.bind(var19)(var22);
            _fun0002_ip = 21; continue _fun0002;
case 19:
            var12 = var12.RX7D9h;
            var22 = var14.bind(var19)(var12);
case 21:
            var24 = _closure1_slot4;
            var19 = var24.useMemo;
            var14 = new Array(1);
            var14[0] = var3;
            var12 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var3 = _closure2_slot5;
                    var5 = var3.items;
                    var4 = var5.filter;
                    var3 = _closure1_slot9;
                    var1 = var4.bind(var5)(var3);
case 22:
                    if(!(var2 == var1)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var1 = new Array(0);
case 24:
                    return var1;
                }
            };
            var19 = var19.bind(var24)(var12, var14);
            _closure2_slot8 = var19;
            var12 = _closure1_slot0;
            var24 = _closure1_slot2;
            var6 = var24[var6];
            var27 = var12.bind(var5)(var6);
            var25 = var27.useStateFromStoresArray;
            var6 = _closure1_slot7;
            var14 = new Array(1);
            var14[0] = var6;
            var12 = new Array(2);
            var12[0] = var19;
            var12[1] = var26;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot7;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var4 = _closure2_slot8;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var4 = _closure1_slot7;
                        var3 = var4.hasSentGift;
                        var1 = arg1;
                        var2 = var1.skuId;
                        var1 = _closure2_slot7;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.skuId;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0006_ip = 28; continue _fun0006;
case 26:
                    var1 = new Array(0);
case 28:
                    return var1;
                }
            };
            var6 = var25.bind(var27)(var14, var6, var12);
            _closure2_slot9 = var6;
            var25 = _closure1_slot4;
            var14 = var25.useMemo;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var1 = global;
                var3 = var1.Set;
                var4 = _closure2_slot9;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var25 = var14.bind(var25)(var6, var12);
            _closure2_slot10 = var25;
            var27 = _closure1_slot4;
            var14 = var27.useMemo;
            var12 = new Array(2);
            var12[0] = var3;
            var12[1] = var13;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    var4 = var1 == var2;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 29; continue _fun0007 }
case 23:
                    var4 = _closure2_slot5;
                    var6 = var4.items;
                    var5 = var6.some;
                    var4 = _closure1_slot10;
                    var2 = var5.bind(var6)(var4);
case 29:
                    if(!var2) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var2 = _closure2_slot6;
case 24:
                    var1 = var1 != var2;
                    if(!var1) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            var6 = var14.bind(var27)(var6, var12);
            var14 = _closure1_slot1;
            var12 = 32;
            var12 = var24[var12];
            var14 = var14.bind(var5)(var12);
            var12 = {};
            var12['wishlistId'] = var9;
            var12['onAction'] = var16;
            var24 = var1 == var3;
            var27 = undefined;
            if(var24) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var24 = var3.getProductLines;
            var27 = var24.bind(var3)();
case 32:
            var28 = var1 != var27;
            var24 = null;
            if(!var28) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var24 = var27;
case 34:
            var12['productLines'] = var24;
            var12['isVisible'] = var18;
            var12 = var14.bind(var5)(var12);
            var24 = _closure1_slot4;
            var18 = var24.useCallback;
            var12 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                            var3 = _closure2_slot3;
                            var2 = {};
                            var6 = _closure1_slot13;
                            var6 = var6.WISHLIST_ITEM_CLICKED;
                            var2['action'] = var6;
                            var6 = _closure2_slot0;
                            var2['wishlistId'] = var6;
                            var6 = var5.skuId;
                            var2['skuId'] = var6;
                            var6 = global;
                            var9 = var6.Set;
                            var7 = var5.skuProductLine;
                            var6 = new Array(1);
                            var6[0] = var7;
                            var7 = var9.prototype;
                            var7 = Object.create(var7, {constructor: {value: var9}});
                            var18 = var7;
                            var17 = var6;
                            var6 = new var18[var9](var17, var16);
                            var6 = var6 instanceof Object ? var6 : var7;
                            var2['productLines'] = var6;
                            var9 = undefined;
                            var2 = var3.bind(var9)(var2);
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 33;
                            var2 = var6[var2];
                            var3 = var3.bind(var9)(var2);
                            var2 = var3.getRootNavigationRef;
                            var6 = var2.bind(var3)();
                            var3 = null;
                            if(!(var3 != var6)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                            var2 = var6.isReady;
                            var2 = var2.bind(var6)();
                            if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 38:
                            var6 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var2 = 34;
                            var2 = var14[var2];
                            var7 = var6.bind(var9)(var2);
                            var6 = var7.open;
                            var2 = {};
                            var10 = 'WISHLIST_ITEM_PRESS_ERROR';
                            var2['key'] = var10;
                            var13 = _closure1_slot0;
                            var10 = 24;
                            var11 = var14[var10];
                            var11 = var13.bind(var9)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var9)(var10);
                            var10 = var10.t;
                            var10 = var10.rTU7/z;
                            var10 = var11.bind(var12)(var10);
                            var2['content'] = var10;
                            var2 = var6.bind(var7)(var2);
                            _fun0008_ip = 41; continue _fun0008;
case 40:
                            var2 = _closure2_slot6;
                            if(var2) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                            var2 = _closure2_slot7;
                            if(!(var3 != var2)) { _fun0008_ip = 42; continue _fun0008 }
case 44:
                            var2 = var5.isOwned;
                            if(var2) { _fun0008_ip = 42; continue _fun0008 }
case 45:
                            var7 = _closure2_slot10;
                            var6 = var7.has;
                            var2 = var5.skuId;
                            var2 = var6.bind(var7)(var2);
                            if(var2) { _fun0008_ip = 42; continue _fun0008 }
case 46:
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var2 = 20;
                            var2 = var12[var2];
                            var6 = var11.bind(var9)(var2);
                            var2 = var6.hideAllActionSheets;
                            var2 = var2.bind(var6)();
                            var6 = _closure1_slot0;
                            var2 = 21;
                            var2 = var12[var2];
                            var13 = var6.bind(var9)(var2);
                            var7 = var13.openCollectiblesShopMobile;
                            var2 = {};
                            var10 = 22;
                            var14 = var12[var10];
                            var14 = var11.bind(var9)(var14);
                            var15 = var14.USER_PROFILE_WISHLIST;
                            var14 = new Array(1);
                            var14[0] = var15;
                            var2['analyticsLocations'] = var14;
                            var14 = var12[var10];
                            var14 = var11.bind(var9)(var14);
                            var14 = var14.USER_PROFILE_WISHLIST;
                            var2['analyticsSource'] = var14;
                            var14 = _closure1_slot16;
                            var14 = var14.FEATURED_PAGE;
                            var2['screen'] = var14;
                            var14 = function onNavigateAway() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 35;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = {};
                                var5 = _closure2_slot7;
                                var5 = var5.id;
                                var2['userId'] = var5;
                                var4 = _closure1_slot14;
                                var4 = var4.WISHLIST;
                                var2['initialSection'] = var4;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2['onNavigateAway'] = var14;
                            var2 = var7.bind(var13)(var2);
                            var2 = 36;
                            var2 = var12[var2];
                            var7 = var6.bind(var9)(var2);
                            var6 = var7.openShopGiftModal;
                            var2 = {};
                            var13 = var5.skuId;
                            var2['skuId'] = var13;
                            var10 = var12[var10];
                            var10 = var11.bind(var9)(var10);
                            var11 = var10.USER_PROFILE_WISHLIST;
                            var10 = new Array(1);
                            var10[0] = var11;
                            var2['analyticsLocations'] = var10;
                            var8 = _closure2_slot7;
                            var2['lockedRecipientUser'] = var8;
                            var8 = _closure1_slot17;
                            var8 = var8.USER_PROFILE_WISHLIST;
                            var2['giftingOrigin'] = var8;
                            var2 = var6.bind(var7)(var2);
                            var2 = undefined;
                            return var2;
case 42:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 21;
                            var2 = var2[var7];
                            var6 = var6.bind(var9)(var2);
                            var2 = var6.isCollectiblesShopOpen;
                            var2 = var2.bind(var6)();
                            if(var2) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                            var6 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var2 = var12[var7];
                            var8 = var6.bind(var9)(var2);
                            var6 = var8.openCollectiblesShopMobile;
                            var2 = {};
                            var11 = _closure1_slot1;
                            var10 = 22;
                            var13 = var12[var10];
                            var13 = var11.bind(var9)(var13);
                            var14 = var13.USER_PROFILE_WISHLIST;
                            var13 = new Array(1);
                            var13[0] = var14;
                            var2['analyticsLocations'] = var13;
                            var10 = var12[var10];
                            var10 = var11.bind(var9)(var10);
                            var10 = var10.USER_PROFILE_WISHLIST;
                            var2['analyticsSource'] = var10;
                            var10 = var5.skuId;
                            var2['initialProductSkuId'] = var10;
                            var10 = _closure1_slot16;
                            var10 = var10.SHOP_ALL;
                            var2['screen'] = var10;
                            var2 = var6.bind(var8)(var2);
case 41:
                            return var9;
case 47:
                            var8 = _closure1_slot6;
                            var6 = var8.getProduct;
                            var2 = var5.skuId;
                            var8 = var6.bind(var8)(var2);
                            if(!(var3 == var8)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var7 = var6.bind(var9)(var2);
                            var6 = var7.maybeFetchCollectiblesProduct;
                            var2 = var5.skuId;
                            var2 = var6.bind(var7)(var2);
                            SaveGenerator(address=769);
case 51:
                            return var2;
case 52:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                            var7 = _closure1_slot6;
                            var6 = var7.getProduct;
                            var5 = var5.skuId;
                            var8 = var6.bind(var7)(var5);
case 49:
                            if(!(var3 == var8)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 20;
                            var3 = var6[var3];
                            var5 = var5.bind(var9)(var3);
                            var3 = var5.hideAllActionSheets;
                            var3 = var3.bind(var5)();
                            var3 = undefined;
                            _fun0008_ip = 57; continue _fun0008;
case 55:
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 37;
                            var5 = var10[var5];
                            var7 = var6.bind(var9)(var5);
                            var6 = var7.openProductDetailsActionSheet;
                            var5 = {};
                            var5['product'] = var8;
                            var8 = _closure1_slot1;
                            var4 = 22;
                            var4 = var10[var4];
                            var4 = var8.bind(var9)(var4);
                            var8 = var4.USER_PROFILE_WISHLIST;
                            var4 = new Array(1);
                            var4[0] = var8;
                            var5['analyticsLocations'] = var4;
                            var4 = 'stack';
                            var4 = var6.bind(var7)(var5, var4);
                            var3 = undefined;
case 57:
                            return var3;
case 53:
                            return var2;
case 36:
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
            var14 = var12.bind(var5)();
            var12 = new Array(5);
            var12[0] = var9;
            var12[1] = var16;
            var12[2] = var13;
            var12[3] = var26;
            var12[4] = var25;
            var12 = var18.bind(var24)(var14, var12);
            _closure2_slot11 = var12;
            var18 = _closure1_slot4;
            var14 = var18.useCallback;
            var12 = new Array(5);
            var12[0] = var9;
            var12[1] = var23;
            var12[2] = var11;
            var12[3] = var16;
            var12[4] = var3;
            var11 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = _closure2_slot3;
                    var3 = {};
                    var1 = _closure1_slot13;
                    var1 = var1.PRESS_EDIT_WISHLIST;
                    var3['action'] = var1;
                    var1 = _closure2_slot0;
                    var3['wishlistId'] = var1;
                    var6 = _closure2_slot5;
                    var1 = null;
                    var7 = var1 == var6;
                    var1 = undefined;
                    var6 = undefined;
                    if(var7) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var8 = _closure2_slot5;
                    var7 = var8.getProductLines;
                    var6 = var7.bind(var8)();
case 58:
                    var3['productLines'] = var6;
                    var3 = var5.bind(var1)(var3);
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 20;
                    var5 = var3[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 39;
                    var4 = var3[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 38;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var12 = var5.bind(var1)(var4, var3);
                    var4 = {};
                    var3 = _closure2_slot0;
                    var4['wishlistId'] = var3;
                    var3 = _closure2_slot2;
                    var4['analyticsContext'] = var3;
                    var2 = _closure2_slot4;
                    var4['analyticsLocations'] = var2;
                    var11 = 'EditWishlistActionSheet';
                    var9 = 'stack';
                    var13 = var7;
                    var10 = var4;
                    var2 = var13[var6](var12, var11, var10, var9, var8);
                    return var1;
                }
            };
            var28 = var14.bind(var18)(var11, var12);
            var14 = _closure1_slot4;
            var12 = var14.useCallback;
            var11 = new Array(2);
            var11[0] = var16;
            var11[1] = var9;
            var9 = function() {
                var3 = _closure2_slot3;
                var2 = {};
                var4 = _closure1_slot13;
                var4 = var4.PRESS_ADD_WISHLIST_ITEM;
                var2['action'] = var4;
                var1 = _closure2_slot0;
                var2['wishlistId'] = var1;
                var1 = global;
                var6 = var1.Set;
                var1 = _closure1_slot15;
                var4 = var1.COLLECTIBLES;
                var1 = new Array(1);
                var1[0] = var4;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var11 = var4;
                var10 = var1;
                var1 = new var11[var6](var10, var9);
                var1 = var1 instanceof Object ? var1 : var4;
                var2['productLines'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 20;
                var2 = var8[var2];
                var3 = var7.bind(var1)(var2);
                var2 = var3.hideAllActionSheets;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = 21;
                var2 = var8[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var6 = 22;
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
                var5 = _closure1_slot16;
                var5 = var5.FEATURED_PAGE;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var26 = var12.bind(var14)(var9, var11);
            if(!var7) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            if(!(var1 != var3)) { _fun0002_ip = 62; continue _fun0002 }
case 60:
            if(!(var1 == var4)) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            if(!(var1 != var3)) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var4 = var19.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var27 = var19.length;
            var7 = _closure1_slot19;
            var4 = _closure1_slot20;
            var3 = {};
            var9 = var13;
            if(!var13) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            if(var8) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var8 = var10;
case 71:
            var9 = var8;
case 69:
            if(!var9) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var11 = _closure1_slot19;
            var10 = _closure1_slot5;
            var8 = {};
            var14 = var15.disclaimer;
            var12 = new Array(2);
            var12[0] = var14;
            var14 = var15.disclaimerTop;
            var12[1] = var14;
            var8['style'] = var12;
            var18 = _closure1_slot18;
            var16 = _closure1_slot0;
            var23 = _closure1_slot2;
            var12 = 27;
            var12 = var23[var12];
            var12 = var16.bind(var5)(var12);
            var14 = var12.CircleInformationIcon;
            var12 = {};
            var24 = 'sm';
            var12['size'] = var24;
            var14 = var18.bind(var5)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var18 = _closure1_slot18;
            var14 = 23;
            var14 = var23[var14];
            var14 = var16.bind(var5)(var14);
            var16 = var14.Text;
            var14 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var14['children'] = var22;
            var14 = var18.bind(var5)(var16, var14);
            var12[1] = var14;
            var8['children'] = var12;
            var9 = var11.bind(var5)(var10, var8);
case 73:
            var8 = new Array(4);
            var8[0] = var9;
            var11 = _closure1_slot19;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var15.headerRow;
            var9['style'] = var12;
            var18 = _closure1_slot18;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = 23;
            var12 = var22[var14];
            var12 = var23.bind(var5)(var12);
            var16 = var12.Text;
            var12 = {'variant': 'text-sm/semibold', 'color': 'text-muted'};
            var24 = var22[var21];
            var24 = var23.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.formatToPlainString;
            var22 = var22[var21];
            var22 = var23.bind(var5)(var22);
            var22 = var22.t;
            var23 = var22.r6Y1Lg;
            var22 = {};
            var22['count'] = var27;
            var22 = var24.bind(var25)(var23, var22);
            var12['children'] = var22;
            var16 = var18.bind(var5)(var16, var12);
            var12 = new Array(2);
            var12[0] = var16;
            if(!var13) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var22 = _closure1_slot19;
            var18 = _closure1_slot5;
            var16 = {};
            var23 = var15.headerButtons;
            var16['style'] = var23;
            var25 = _closure1_slot18;
            var30 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = 25;
            var23 = var27[var23];
            var23 = var30.bind(var5)(var23);
            var24 = var23.Button;
            var23 = {'size': 'sm', 'variant': 'secondary'};
            var33 = 'sm';
            var32 = _closure1_slot18;
            var29 = 26;
            var29 = var27[var29];
            var29 = var30.bind(var5)(var29);
            var31 = var29.PlusMediumIcon;
            var29 = {};
            var34 = 'xs';
            var29['size'] = var34;
            var29 = var32.bind(var5)(var31, var29);
            var23['icon'] = var29;
            var29 = var27[var21];
            var29 = var30.bind(var5)(var29);
            var32 = var29.intl;
            var31 = var32.string;
            var29 = var27[var21];
            var29 = var30.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.SDUwM0;
            var29 = var31.bind(var32)(var29);
            var23['text'] = var29;
            var23['onPress'] = var26;
            var24 = var25.bind(var5)(var24, var23);
            var23 = new Array(2);
            var23[0] = var24;
            var26 = _closure1_slot18;
            var24 = 40;
            var24 = var27[var24];
            var24 = var30.bind(var5)(var24);
            var25 = var24.IconButton;
            var24 = {'size': 'sm', 'variant': 'secondary'};
            var32 = _closure1_slot18;
            var29 = 41;
            var29 = var27[var29];
            var29 = var30.bind(var5)(var29);
            var31 = var29.PencilIcon;
            var29 = {};
            var29['size'] = var33;
            var34 = _closure1_slot1;
            var33 = 16;
            var33 = var27[var33];
            var33 = var34.bind(var5)(var33);
            var33 = var33.colors;
            var33 = var33.CONTROL_SECONDARY_TEXT_DEFAULT;
            var29['color'] = var33;
            var29 = var32.bind(var5)(var31, var29);
            var24['icon'] = var29;
            var24['onPress'] = var28;
            var28 = var27[var21];
            var28 = var30.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var27[var21];
            var27 = var30.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27.bt75uw;
            var27 = var28.bind(var29)(var27);
            var24['accessibilityLabel'] = var27;
            var24 = var26.bind(var5)(var25, var24);
            var23[1] = var24;
            var16['children'] = var23;
            var13 = var22.bind(var5)(var18, var16);
case 75:
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var8[1] = var9;
            var11 = _closure1_slot18;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var15.gridWrapper;
            var9['style'] = var12;
            var16 = _closure1_slot18;
            var13 = _closure1_slot5;
            var12 = {};
            var22 = var15.itemsContainer;
            var18 = new Array(2);
            var18[0] = var22;
            var18[1] = var20;
            var12['style'] = var18;
            var18 = var19.map;
            var17 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 42;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['item'] = var1;
                    var6 = function onPress() {
                        var3 = _closure2_slot11;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['onPress'] = var6;
                    var6 = _closure2_slot1;
                    var2['size'] = var6;
                    var8 = _closure2_slot7;
                    var6 = null;
                    var8 = var6 == var8;
                    var6 = undefined;
                    if(var8) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                    var7 = _closure2_slot7;
                    var6 = var7.id;
case 77:
                    var2['wishlistOwnerId'] = var6;
                    var1 = var1.skuId;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var17 = var18.bind(var19)(var17);
            var12['children'] = var17;
            var12 = var16.bind(var5)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var8[2] = var9;
            var9 = var6;
            if(!var9) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            var12 = _closure1_slot19;
            var11 = _closure1_slot5;
            var10 = {};
            var16 = var15.disclaimer;
            var13 = new Array(2);
            var13[0] = var16;
            var15 = var15.disclaimerBottom;
            var13[1] = var15;
            var10['style'] = var13;
            var16 = _closure1_slot18;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 27;
            var13 = var17[var13];
            var13 = var20.bind(var5)(var13);
            var15 = var13.CircleInformationIcon;
            var13 = {};
            var18 = 'sm';
            var13['size'] = var18;
            var15 = var16.bind(var5)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var16 = _closure1_slot18;
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
case 79:
            var8[3] = var9;
            var3['children'] = var8;
            var3 = var7.bind(var5)(var4, var3);
            return var3;
case 67:
            var4 = _closure1_slot18;
            var3 = _closure1_slot22;
            var2 = {};
            var2['shouldShowMRNotice'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 65:
            return var1;
case 63:
            return var1;
case 62:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['WishlistEmptyState'] = var2;
    return var1;
})();