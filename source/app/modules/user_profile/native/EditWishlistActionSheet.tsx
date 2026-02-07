// app/modules/user_profile/native/EditWishlistActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isCollectiblesWishlistItemRecord;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TrackUserProfileWishlistActions;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_BACKGROUND_COLOR;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var11 = 11;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var4['container'] = var9;
    var9 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_48;
    var9['paddingTop'] = var13;
    var4['loadingContainer'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['marginBottom'] = var13;
    var4['toggleRow'] = var9;
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'gap': 16};
    var4['itemsContainer'] = var9;
    var9 = {};
    var13 = 'relative';
    var9['position'] = var13;
    var4['itemWrapper'] = var9;
    var9 = {};
    var13 = 'absolute';
    var9['position'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['top'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['right'] = var11;
    var9['zIndex'] = var10;
    var4['deleteButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/EditWishlistActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditWishlistActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.wishlistId;
            var _closure2_slot0 = var6;
            var2 = var1.analyticsContext;
            var _closure2_slot1 = var2;
            var1 = var1.analyticsLocations;
            var _closure2_slot2 = var1;
            var4 = undefined;
            var _closure2_slot10 = var4;
            var3 = _closure1_slot15;
            var16 = var3.bind(var4)();
            var _closure2_slot3 = var16;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var8 = var5.bind(var4)(var3);
            var3 = var8.useCardLayout;
            var3 = var3.bind(var8)();
            var3 = var3.cardWidth;
            var _closure2_slot4 = var3;
            var3 = 13;
            var3 = var7[var3];
            var9 = var5.bind(var4)(var3);
            var8 = var9.useToken;
            var3 = _closure1_slot12;
            var3 = var8.bind(var9)(var3);
            var _closure2_slot5 = var3;
            var3 = 14;
            var8 = var7[var3];
            var12 = var5.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var8;
            var9 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getWishlist;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var11.bind(var12)(var10, var9);
            var _closure2_slot6 = var12;
            var9 = var7[var3];
            var11 = var5.bind(var4)(var9);
            var10 = var11.useStateFromStores;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot7;
                var2 = var3.isFetching;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var10.bind(var11)(var9, var8);
            var3 = var7[var3];
            var8 = var5.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot9;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = _closure1_slot10;
            var5[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var4 = var1 != var2;
                    if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot10;
                    var4 = var5.getWishlistSettings;
                    var3 = var2.id;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5, var3);
            var _closure2_slot7 = var5;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var3 = true;
            var9 = var7.bind(var8)(var3);
            var7 = _closure1_slot3;
            var3 = 2;
            var7 = var7.bind(var4)(var9, var3);
            var13 = 0;
            var24 = var7[var13];
            var _closure2_slot8 = var24;
            var3 = 1;
            var3 = var7[var3];
            var _closure2_slot9 = var3;
            var7 = var8.useEffect;
            var11 = null;
            var9 = var11 == var5;
            var3 = undefined;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5.visibility;
case 4:
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var5 = _closure2_slot7;
                    var3 = var5.visibility;
case 6:
                    if(!(var4 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot7;
                    var4 = var2.visibility;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 15;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.WishlistVisibility;
                    var2 = var2.PUBLIC;
                    var2 = var4 === var2;
                    var2 = var3.bind(var1)(var2);
case 8:
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var5);
            var5 = _closure1_slot4;
            var8 = var5.useMemo;
            var7 = new Array(1);
            var7[0] = var12;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var3 = _closure2_slot6;
                    var5 = var3.items;
                    var4 = var5.filter;
                    var3 = _closure1_slot8;
                    var1 = var4.bind(var5)(var3);
case 10:
                    if(!(var2 == var1)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var1 = new Array(0);
case 12:
                    return var1;
                }
            };
            var19 = var8.bind(var5)(var3, var7);
            var7 = var5.useCallback;
            var3 = new Array(5);
            var3[0] = var6;
            var3[1] = var24;
            var3[2] = var12;
            var3[3] = var2;
            var3[4] = var1;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.WishlistVisibility;
                    if(var3) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var8 = var2.PUBLIC;
                    _fun0005_ip = 16; continue _fun0005;
case 14:
                    var8 = var2.PRIVATE;
case 16:
                    var3 = _closure2_slot9;
                    var7 = _closure2_slot8;
                    var2 = !var7;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 16;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateWishlistVisibility;
                    var9 = _closure2_slot0;
                    var2 = var2.bind(var3)(var9, var8);
                    var3 = _closure1_slot0;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackUserProfileWishlistAction;
                    var2 = {};
                    var11 = _closure2_slot1;
                    var12 = var2;
                    var8 = copyDataProperties(var12, var11);
                    var10 = _closure2_slot2;
                    var8 = 'analyticsLocations';
                    var2[var8] = var10;
                    var8 = 'wishlistId';
                    var2[var8] = var9;
                    var6 = _closure1_slot11;
                    if(var7) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var7 = var6.WISHLIST_TOGGLE_PUBLIC;
                    _fun0005_ip = 19; continue _fun0005;
case 17:
                    var7 = var6.WISHLIST_TOGGLE_PRIVATE;
case 19:
                    var6 = 'action';
                    var2[var6] = var7;
                    var7 = _closure2_slot6;
                    var6 = null;
                    var7 = var6 == var7;
                    var6 = undefined;
                    if(var7) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var7 = _closure2_slot6;
                    var5 = var7.getProductLines;
                    var6 = var5.bind(var7)();
case 20:
                    var5 = 'productLines';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var23 = var7.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var1;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.removeSkuFromWishlist;
                var4 = _closure2_slot0;
                var3 = _closure2_slot2;
                var2 = arg1;
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            _closure2_slot10 = var1;
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var29 = _closure1_slot2;
            var1 = 18;
            var1 = var29[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'scrollable': true, 'startExpanded': true};
            var28 = _closure1_slot0;
            var25 = 19;
            var5 = var29[var25];
            var5 = var28.bind(var4)(var5);
            var7 = var5.intl;
            var6 = var7.string;
            var5 = var29[var25];
            var5 = var28.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.OEgx/4;
            var5 = var6.bind(var7)(var5);
            var1['title'] = var5;
            var5 = 20;
            var5 = var29[var5];
            var5 = var28.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var9 = _closure1_slot14;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = var16.container;
            var7['style'] = var10;
            var10 = {};
            var18 = var16.toggleRow;
            var10['style'] = var18;
            var18 = 21;
            var18 = var29[var18];
            var18 = var28.bind(var4)(var18);
            var20 = var18.TableRowGroup;
            var18 = {};
            var21 = 22;
            var21 = var29[var21];
            var21 = var28.bind(var4)(var21);
            var22 = var21.TableSwitchRow;
            var21 = {};
            var26 = var29[var25];
            var26 = var28.bind(var4)(var26);
            var30 = var26.intl;
            var27 = var30.string;
            var26 = var29[var25];
            var26 = var28.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.b2nFyA;
            var26 = var27.bind(var30)(var26);
            var21['label'] = var26;
            var26 = var29[var25];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var29[var25];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.dw58pE;
            var25 = var26.bind(var27)(var25);
            var21['subLabel'] = var25;
            var21['value'] = var24;
            var21['onValueChange'] = var23;
            var21 = var3.bind(var4)(var22, var21);
            var18['children'] = var21;
            var18 = var3.bind(var4)(var20, var18);
            var10['children'] = var18;
            var18 = var3.bind(var4)(var8, var10);
            var10 = new Array(2);
            var10[0] = var18;
            if(!var14) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            if(!(var11 != var12)) { _fun0001_ip = 24; continue _fun0001 }
case 22:
            var12 = var19.length;
            var11 = null;
            if(!(var13 !== var12)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var14 = _closure1_slot13;
            var13 = _closure1_slot6;
            var12 = {};
            var18 = var16.itemsContainer;
            var12['style'] = var18;
            var18 = var19.map;
            var17 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot14;
                var4 = _closure1_slot6;
                var3 = {};
                var10 = _closure2_slot3;
                var2 = var10.itemWrapper;
                var3['style'] = var2;
                var8 = _closure1_slot13;
                var17 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 23;
                var6 = var15[var2];
                var2 = undefined;
                var7 = var17.bind(var2)(var6);
                var6 = {};
                var6['item'] = var1;
                var13 = _closure2_slot5;
                var6['backgroundColor'] = var13;
                var12 = _closure2_slot4;
                var6['width'] = var12;
                var12 = true;
                var6['accessibilityHidden'] = var12;
                var7 = var8.bind(var2)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var10 = var10.deleteButton;
                var7['style'] = var10;
                var12 = _closure1_slot0;
                var9 = 24;
                var9 = var15[var9];
                var9 = var12.bind(var2)(var9);
                var10 = var9.IconButton;
                var9 = {'variant': 'primary-overlay', 'size': 'sm'};
                var16 = 'sm';
                var13 = 25;
                var13 = var15[var13];
                var13 = var12.bind(var2)(var13);
                var14 = var13.TrashIcon;
                var13 = {};
                var13['size'] = var16;
                var16 = 11;
                var16 = var15[var16];
                var16 = var17.bind(var2)(var16);
                var16 = var16.colors;
                var16 = var16.ICON_FEEDBACK_CRITICAL;
                var13['color'] = var16;
                var13 = var8.bind(var2)(var14, var13);
                var9['icon'] = var13;
                var11 = function onPress() {
                    var3 = _closure2_slot10;
                    var1 = _closure3_slot0;
                    var2 = var1.skuId;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var9['onPress'] = var11;
                var11 = 19;
                var13 = var15[var11];
                var13 = var12.bind(var2)(var13);
                var14 = var13.intl;
                var13 = var14.formatToPlainString;
                var11 = var15[var11];
                var11 = var12.bind(var2)(var11);
                var11 = var11.t;
                var12 = var11.IBBF8/;
                var11 = {};
                var15 = var1.skuName;
                var11['productName'] = var15;
                var11 = var13.bind(var14)(var12, var11);
                var9['accessibilityLabel'] = var11;
                var9 = var8.bind(var2)(var10, var9);
                var7['children'] = var9;
                var7 = var8.bind(var2)(var4, var7);
                var6[1] = var7;
                var3['children'] = var6;
                var1 = var1.skuId;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var17 = var18.bind(var19)(var17);
            var12['children'] = var17;
            var11 = var14.bind(var4)(var13, var12);
case 25:
            _fun0001_ip = 27; continue _fun0001;
case 24:
            var14 = _closure1_slot13;
            var13 = _closure1_slot6;
            var12 = {};
            var16 = var16.loadingContainer;
            var12['style'] = var16;
            var16 = _closure1_slot5;
            var15 = {};
            var15 = var14.bind(var4)(var16, var15);
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 27:
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();