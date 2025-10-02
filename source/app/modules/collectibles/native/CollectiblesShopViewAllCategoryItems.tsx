// app/modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var4 = var4.StyleSheet;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var13;
    var11 = 6;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var14;
    var4['rootContainer'] = var10;
    var10 = {};
    var10['height'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_ACCENT;
    var10['backgroundColor'] = var11;
    var4['border'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function CollectiblesShopViewAllCategoryItemsTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.category;
            var _closure2_slot0 = var17;
            var8 = var1.analyticsContext;
            var _closure2_slot1 = var8;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot10;
            var21 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var1 = var3.height;
            var _closure2_slot2 = var1;
            var12 = var3.width;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var7 = var17.mobileBg;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var1;
            var7 = var17.catalogBannerAsset;
            var20 = null;
            var9 = var20 == var7;
            var1 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var7.static;
case 2:
            var3[2] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getCollectiblesAssetURL;
                    var2 = _closure2_slot0;
                    var2 = var2.mobileBg;
                    var7 = null;
                    if(!(var7 == var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure2_slot0;
                    var6 = var6.catalogBannerAsset;
                    var7 = var7 == var6;
                    var1 = undefined;
                    if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = var6.static;
case 6:
                    var2 = var1;
case 4:
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['size'] = var5;
                    var5 = 'webp';
                    var1['format'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var25 = var5.bind(var6)(var1, var3);
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var5 = var7.bind(var4)(var1);
            var1 = var17.styles;
            var1 = var5.bind(var4)(var1);
            var23 = var1.backgroundColors;
            var1 = 10;
            var5 = var3[var1];
            var6 = var7.bind(var4)(var5);
            var5 = 11;
            var5 = var3[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.COLLECTIBLES_SHOP_INDEX_PAGE;
            var5 = new Array(1);
            var5[0] = var7;
            var5 = var6.bind(var4)(var5);
            var5 = var5.analyticsLocations;
            _closure2_slot3 = var5;
            var6 = global;
            var10 = var6.Math;
            var9 = var10.floor;
            var6 = _closure1_slot0;
            var7 = 12;
            var7 = var3[var7];
            var7 = var6.bind(var4)(var7);
            var13 = var7.COLLECTIBLES_SHOP_CARD_WIDTH;
            var18 = 13;
            var7 = var3[var18];
            var7 = var6.bind(var4)(var7);
            var7 = var7.SHOP_CARD_GAP;
            var7 = var13 + var7;
            var7 = var12 / var7;
            var15 = var9.bind(var10)(var7);
            var7 = 14;
            var7 = var3[var7];
            var10 = var6.bind(var4)(var7);
            var9 = var10.useFilteredAndSortedProducts;
            var7 = {};
            var12 = var17.products;
            var7['products'] = var12;
            var7 = var9.bind(var10)(var7);
            var16 = var7.filteredProducts;
            var19 = 15;
            var7 = var3[var19];
            var10 = var6.bind(var4)(var7);
            var9 = var10.useSharedValue;
            var7 = 0;
            var12 = var9.bind(var10)(var7);
            _closure2_slot4 = var12;
            var7 = _closure1_slot3;
            var13 = var7.useCallback;
            var10 = new Array(1);
            var10[0] = var12;
            var9 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var2);
                    var5 = var6.withSpring;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.contentOffset;
                    var7 = var2.y;
                    var2 = 5;
                    var7 = var7 > var2;
                    var2 = 0;
                    if(!var7) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = 1;
case 8:
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var14 = var13.bind(var7)(var9, var10);
            var3 = var3[var19];
            var9 = var6.bind(var4)(var3);
            var6 = var9.useAnimatedStyle;
            var3 = function h() {
                var1 = {};
                var3 = _closure2_slot4;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var10 = {};
            var10['borderOpacity'] = var12;
            var3['__closure'] = var10;
            var10 = 2446209469388.0;
            var3['__workletHash'] = var10;
            var10 = _closure1_slot11;
            var3['__initData'] = var10;
            var22 = var6.bind(var9)(var3);
            var6 = var7.useEffect;
            var3 = var20 == var8;
            var9 = undefined;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var8.sessionId;
case 10:
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var5;
            var9 = var17.name;
            var3[2] = var9;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var6 = var8.track;
                    var2 = _closure1_slot7;
                    var4 = var2.COLLECTIBLES_SHOP_VIEWED;
                    var3 = {};
                    var2 = _closure2_slot3;
                    var3['location_stack'] = var2;
                    var2 = _closure2_slot1;
                    var9 = null;
                    var10 = var9 == var2;
                    var2 = undefined;
                    if(var10) { _fun0004_ip = 12; continue _fun0004 }
case 7:
                    var10 = _closure2_slot1;
                    var2 = var10.sessionId;
case 12:
                    var3['page_session_id'] = var2;
                    var11 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var10 = 11;
                    var10 = var2[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.COLLECTIBLES_SHOP;
                    var3['source'] = var10;
                    var10 = 'index';
                    var3['page_type'] = var10;
                    var10 = _closure2_slot0;
                    var10 = var10.name;
                    var3['category'] = var10;
                    var3 = var6.bind(var8)(var4, var3);
                    var3 = _closure1_slot0;
                    var8 = 18;
                    var2 = var2[var8];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackShopPerf;
                    var2 = {'sessionId': null, 'checkpoint': null, 'tab': null, 'isFullScreen': true, 'unpublishedCategoriesShown': false, 'cacheDisabled': false};
                    var6 = _closure2_slot1;
                    var9 = var9 == var6;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var7 = _closure2_slot1;
                    var6 = var7.sessionId;
case 13:
                    var2['sessionId'] = var6;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.CollectiblesShopPerfCheckpoint;
                    var6 = var6.SHOP_MOUNTED;
                    var2['checkpoint'] = var6;
                    var5 = _closure1_slot6;
                    var5 = var5.SHOP_ALL;
                    var2['tab'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot8;
            var12 = _closure1_slot0;
            var24 = _closure1_slot2;
            var1 = var24[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var5 = 19;
            var5 = var24[var5];
            var5 = var12.bind(var4)(var5);
            var6 = var5.CollectiblesAnalyticsProvider;
            var5 = {};
            var7 = {};
            var27 = var7;
            var26 = var8;
            var8 = copyDataProperties(var27, var26);
            var9 = var17.name;
            var8 = 'pageCategory';
            var7[var8] = var9;
            var5['newValue'] = var7;
            var9 = _closure1_slot9;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var21.rootContainer;
            var7['style'] = var10;
            var10 = 20;
            var10 = var24[var10];
            var10 = var12.bind(var4)(var10);
            var12 = var10.CollectiblesProgressiveImage;
            var10 = {};
            var13 = {};
            var13['uri'] = var25;
            var10['source'] = var13;
            var13 = _closure1_slot5;
            var13 = var13.absoluteFill;
            var10['style'] = var13;
            var12 = var3.bind(var4)(var12, var10);
            var10 = new Array(4);
            var10[0] = var12;
            var13 = _closure1_slot1;
            var12 = 21;
            var12 = var24[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var24 = var17.logo;
            var12['logo'] = var24;
            var24 = var20 == var23;
            var20 = undefined;
            if(var24) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var24 = var23.label;
            var23 = var24.toHexString;
            var20 = var23.bind(var24)();
case 15:
            var12['buttonColor'] = var20;
            var12 = var3.bind(var4)(var13, var12);
            var10[1] = var12;
            var13 = _closure1_slot8;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var19 = var11[var19];
            var19 = var12.bind(var4)(var19);
            var20 = var19.View;
            var19 = {};
            var23 = var21.border;
            var21 = new Array(2);
            var21[0] = var23;
            var21[1] = var22;
            var19['style'] = var21;
            var19 = var13.bind(var4)(var20, var19);
            var10[2] = var19;
            var11 = var11[var18];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['category'] = var17;
            var11['products'] = var16;
            var11['column'] = var15;
            var11['onScroll'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[3] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();