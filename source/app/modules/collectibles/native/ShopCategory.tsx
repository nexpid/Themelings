// app/modules/collectibles/native/ShopCategory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var9;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var9[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.Image;
    var _closure1_slot4 = var5;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot7 = var5;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.COLLECTIBLES_SHOP_CARD_HEIGHT;
    var5 = 100;
    var6 = var5 + var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.COLLECTIBLES_SHOP_CARD_HEIGHT;
    var5 = var5 + var4;
    var15 = 6;
    var4 = var9[var15];
    var11 = var8.bind(var1)(var4);
    var10 = var11.createStyles;
    var7 = {};
    var12 = {};
    var13 = 7;
    var4 = var9[var13];
    var4 = var14.bind(var1)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_16;
    var12['marginTop'] = var4;
    var4 = 24;
    var12['marginBottom'] = var4;
    var12['height'] = var6;
    var7['categoryContainer'] = var12;
    var12 = {};
    var16 = var9[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var12['marginTop'] = var16;
    var12['marginBottom'] = var4;
    var12['height'] = var5;
    var7['categoryContainerV2'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'flex-end', 'alignItems': 'center', 'marginBottom': 16, 'marginHorizontal': 16, 'borderRadius': null, 'overflow': 'hidden', 'borderWidth': 1, 'height': 84, 'padding': 20};
    var16 = var9[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var12['borderRadius'] = var16;
    var7['categoryHeader'] = var12;
    var12 = {};
    var16 = var9[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_660;
    var12['borderColor'] = var16;
    var7['categoryHeaderBorderDark'] = var12;
    var12 = {};
    var16 = var9[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_TERTIARY;
    var12['borderColor'] = var16;
    var7['categoryHeaderBorderLight'] = var12;
    var12 = {'resizeMode': 'cover', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'position': 'absolute'};
    var7['imageBackground'] = var12;
    var12 = {};
    var16 = var9[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.REDESIGN_BUTTON_SECONDARY_OVERLAY_BACKGROUND;
    var12['backgroundColor'] = var16;
    var12['padding'] = var15;
    var13 = var9[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var12['borderRadius'] = var13;
    var7['viewAllIcon'] = var12;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot9 = var7;
    var7 = function Spacing() {
        var4 = _closure1_slot7;
        var3 = _closure1_slot5;
        var2 = {};
        var1 = {};
        var5 = 10;
        var1['width'] = var5;
        var2['style'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot10 = var7;
    var7 = function HeaderAndFooterSpacing() {
        var4 = _closure1_slot7;
        var3 = _closure1_slot5;
        var2 = {};
        var1 = {};
        var5 = 16;
        var1['width'] = var5;
        var2['style'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot11 = var7;
    var7 = 23;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/collectibles/native/ShopCategory.tsx';
    var7 = var8.bind(var9)(var7);
    var3['CATEGORY_CONTAINER_HEIGHT'] = var6;
    var3['CATEGORY_CONTAINER_HEIGHT_V2'] = var5;
    var3['CATEGORY_CONTAINER_BOTTOM_MARGIN'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.index;
            var9 = var1.item;
            var _closure2_slot0 = var9;
            var19 = var1.isDarkTheme;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.analyticsLocations;
            var _closure2_slot1 = var1;
            var3 = _closure1_slot0;
            var2 = 9;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var7.useMobileShopCardV2Enabled;
            var12 = 'ShopCategory';
            var10 = var2.bind(var7)(var12);
            var _closure2_slot2 = var10;
            var2 = _closure1_slot9;
            var18 = var2.bind(var4)();
            var17 = 10;
            var2 = var5[var17];
            var7 = var3.bind(var4)(var2);
            var2 = var7.useNavigation;
            var2 = var2.bind(var7)();
            var _closure2_slot3 = var2;
            var11 = var9.products;
            var _closure2_slot4 = var11;
            var2 = var9.unpublishedAt;
            var _closure2_slot5 = var2;
            var2 = 11;
            var2 = var5[var2];
            var8 = var3.bind(var4)(var2);
            var7 = var8.useFilteredAndSortedProducts;
            var2 = {};
            var2['products'] = var11;
            var2['location'] = var12;
            var2 = var7.bind(var8)(var2);
            var20 = var2.sortedProducts;
            var2 = 12;
            var2 = var5[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var7 = var2.width;
            var2 = 13;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.getCollectiblesAssetURL;
            var8 = null;
            var2 = var8 == var9;
            var3 = undefined;
            if(var2) { _fun0001_ip = 257; continue _fun0001 }
 251:
            var3 = var9.mobileBanner;
 257:
            if(!(var8 == var3)) { _fun0001_ip = 279; continue _fun0001 }
 261:
            var12 = var8 == var9;
            var2 = undefined;
            if(var12) { _fun0001_ip = 276; continue _fun0001 }
 270:
            var2 = var9.banner;
 276:
            var3 = var2;
 279:
            var2 = {};
            var2['size'] = var7;
            var7 = 'webp';
            var2['format'] = var7;
            var26 = var5.bind(var6)(var3, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 14;
            var5 = var2[var5];
            var7 = var3.bind(var4)(var5);
            var6 = var7.useCollectiblesShopDeepLinkProps;
            var5 = {};
            var5['products'] = var20;
            var5 = var6.bind(var7)(var5);
            var13 = var5.productIndex;
            var12 = var5.initialProductSkuId;
            _closure2_slot6 = var12;
            var6 = _closure1_slot3;
            var5 = var6.useRef;
            var22 = var5.bind(var6)(var8);
            var21 = 15;
            var2 = var2[var21];
            var7 = var3.bind(var4)(var2);
            var6 = var7.useScrollToInitialIndexOnce;
            var3 = {};
            var2 = var8 != var13;
            if(!var2) { _fun0001_ip = 402; continue _fun0001 }
 396:
            var5 = 0;
            var2 = var13 > var5;
 402:
            var3['shouldScroll'] = var2;
            var3['initialScrollIndex'] = var13;
            var3['flashListRef'] = var22;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var21 = var5[var21];
            var21 = var2.bind(var4)(var21);
            var21 = var21.INITIAL_SCROLL_DELAY_MS;
            var3['afterMs'] = var21;
            var3 = var6.bind(var7)(var3);
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var11;
            var3[2] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    var2 = var1 != var2;
                    var5 = null;
                    if(!var2) { _fun0002_ip = 42; continue _fun0002 }
 18:
                    var6 = _closure2_slot4;
                    var3 = var6.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var1 = _closure2_slot6;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var5 = var3.bind(var6)(var2);
 42:
                    if(!(var1 != var5)) { _fun0002_ip = 124; continue _fun0002 }
 46:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 16;
                    var2 = var6[var2];
                    var3 = undefined;
                    var7 = var7.bind(var3)(var2);
                    var2 = var7.hideActionSheet;
                    var2 = var2.bind(var7)();
                    var2 = _closure1_slot0;
                    var1 = 17;
                    var1 = var6[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.openProductDetailActionSheet;
                    var1 = {};
                    var1['product'] = var5;
                    var4 = _closure2_slot1;
                    var1['analyticsLocations'] = var4;
                    var1 = var2.bind(var3)(var1);
 124:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var3);
            var1 = 18;
            var3 = var5[var1];
            var6 = var2.bind(var4)(var3);
            var3 = var6.useCollectiblesAnalyticsContext;
            var3 = var3.bind(var6)();
            _closure2_slot7 = var3;
            var3 = _closure1_slot7;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesAnalyticsProvider;
            var1 = {};
            var5 = {};
            var5['categoryPosition'] = var16;
            var1['newValue'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot5;
            var5 = {};
            if(var10) { _fun0001_ip = 568; continue _fun0001 }
 560:
            var10 = var18.categoryContainer;
            _fun0001_ip = 574; continue _fun0001;
 568:
            var10 = var18.categoryContainerV2;
 574:
            var5['style'] = var10;
            var23 = _closure1_slot8;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 19;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.PressableOpacity;
            var10 = {'style': null, 'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8, 'androidRippleConfig': null, 'hitSlop': 8};
            var21 = var18.categoryHeader;
            var12 = new Array(2);
            var12[0] = var21;
            if(var19) { _fun0001_ip = 647; continue _fun0001 }
 639:
            var19 = var18.categoryHeaderBorderLight;
            _fun0001_ip = 653; continue _fun0001;
 647:
            var19 = var18.categoryHeaderBorderDark;
 653:
            var12[1] = var19;
            var10['style'] = var12;
            var19 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 20;
            var12 = var25[var21];
            var12 = var19.bind(var4)(var12);
            var27 = var12.intl;
            var24 = var27.formatToPlainString;
            var12 = var25[var21];
            var12 = var19.bind(var4)(var12);
            var12 = var12.t;
            var19 = var12.hEsdAw;
            var12 = {};
            var28 = var9.name;
            var12['category'] = var28;
            var12 = var24.bind(var27)(var19, var12);
            var10['accessibilityLabel'] = var12;
            var12 = {};
            var24 = _closure1_slot1;
            var19 = 7;
            var19 = var25[var19];
            var19 = var24.bind(var4)(var19);
            var19 = var19.radii;
            var19 = var19.lg;
            var12['radius'] = var19;
            var10['androidRippleConfig'] = var12;
            var12 = function onPress() {
                var6 = _closure2_slot0;
                var4 = _closure2_slot3;
                var3 = var4.push;
                var1 = _closure1_slot6;
                var2 = var1.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS;
                var1 = {};
                var1['category'] = var6;
                var5 = _closure2_slot7;
                var1['analyticsContext'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var10['onPress'] = var12;
            var12 = var8 != var26;
            if(!var12) { _fun0001_ip = 832; continue _fun0001 }
 795:
            var24 = _closure1_slot7;
            var19 = _closure1_slot4;
            var8 = {};
            var25 = {};
            var25['uri'] = var26;
            var8['source'] = var25;
            var25 = var18.imageBackground;
            var8['style'] = var25;
            var12 = var24.bind(var4)(var19, var8);
 832:
            var8 = new Array(2);
            var8[0] = var12;
            var12 = _closure1_slot7;
            var25 = _closure1_slot5;
            var24 = {};
            var18 = var18.viewAllIcon;
            var24['style'] = var18;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var26 = 21;
            var26 = var19[var26];
            var26 = var18.bind(var4)(var26);
            var27 = var26.ChevronSmallRightIcon;
            var26 = {'size': 'sm', 'color': 'white'};
            var26 = var12.bind(var4)(var27, var26);
            var24['children'] = var26;
            var24 = var12.bind(var4)(var25, var24);
            var8[1] = var24;
            var10['children'] = var8;
            var8 = var9.storeListingId;
            var10 = var23.bind(var4)(var11, var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var10 = 22;
            var10 = var19[var10];
            var10 = var18.bind(var4)(var10);
            var11 = var10.FlashList;
            var10 = {};
            var10['ref'] = var22;
            var22 = true;
            var10['horizontal'] = var22;
            var22 = var19[var21];
            var22 = var18.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var19[var21];
            var21 = var18.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.pWG4zc;
            var21 = var22.bind(var23)(var21);
            var10['accessibilityLabel'] = var21;
            var10['data'] = var20;
            var15 = function renderItem(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.item;
                    var7 = var2.index;
                    var5 = _closure1_slot7;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 18;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.CollectiblesAnalyticsProvider;
                    var2 = {};
                    var6 = {};
                    var6['tilePosition'] = var7;
                    var2['newValue'] = var6;
                    var7 = _closure1_slot1;
                    var6 = _closure2_slot2;
                    var10 = _closure1_slot2;
                    if(var6) { _fun0003_ip = 89; continue _fun0003 }
 80:
                    var6 = 4;
                    var6 = var10[var6];
                    _fun0003_ip = 96; continue _fun0003;
 89:
                    var9 = 5;
                    var6 = var10[var9];
 96:
                    var7 = var7.bind(var4)(var6);
                    var6 = {};
                    var6['product'] = var1;
                    var8 = _closure2_slot5;
                    var6['unpublishedAt'] = var8;
                    var6 = var5.bind(var4)(var7, var6);
                    var2['children'] = var6;
                    var6 = var1.items;
                    var1 = 0;
                    var6 = var6[var1];
                    var1 = null;
                    var7 = var1 == var6;
                    var1 = undefined;
                    if(var7) { _fun0003_ip = 155; continue _fun0003 }
 150:
                    var1 = var6.id;
 155:
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var10['renderItem'] = var15;
            var15 = 4;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.COLLECTIBLES_SHOP_CARD_WIDTH;
            var15 = var15 + var17;
            var10['estimatedItemSize'] = var15;
            var15 = false;
            var10['showsHorizontalScrollIndicator'] = var15;
            var15 = _closure1_slot11;
            var10['ListHeaderComponent'] = var15;
            var10['ListFooterComponent'] = var15;
            var14 = _closure1_slot10;
            var10['ItemSeparatorComponent'] = var14;
            var10['initialScrollIndex'] = var13;
            var15 = var9.storeListingId;
            var9 = global;
            var9 = var9.HermesInternal;
            var14 = var9.concat;
            var13 = 'category-flashlist-';
            var9 = '-';
            var9 = var14.bind(var13)(var16, var9, var15);
            var9 = var12.bind(var4)(var11, var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ShopCategory'] = var2;
    return var1;
})();