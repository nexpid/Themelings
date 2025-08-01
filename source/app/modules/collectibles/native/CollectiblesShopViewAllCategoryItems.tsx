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
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var13;
    var11 = 5;
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
    var _closure1_slot9 = var4;
    var4 = function HeaderWithAdaptiveBackButtonColor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.category;
            var7 = var1.backgroundUrl;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useDominantColorsFromImage;
            var7 = var2.bind(var3)(var7);
            var3 = _closure1_slot1;
            var2 = 7;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var6.styles;
            var2 = var3.bind(var4)(var2);
            var3 = var2.backgroundColors;
            var5 = null;
            if(!(var5 != var7)) { _fun0001_ip = 101; continue _fun0001 }
 90:
            var8 = var7.length;
            var2 = 0;
            if(!(!(var8 > var2))) { _fun0001_ip = 127; continue _fun0001 }
 101:
            var8 = var5 == var3;
            var5 = undefined;
            if(var8) { _fun0001_ip = 125; continue _fun0001 }
 110:
            var8 = var3.label;
            var3 = var8.toHexString;
            var5 = var3.bind(var8)();
 125:
            _fun0001_ip = 184; continue _fun0001;
 127:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 8;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isDark;
            var3 = var2.bind(var3)();
            var2 = 'rgba(30, 30, 30, 0.8)';
            if(!var3) { _fun0001_ip = 181; continue _fun0001 }
 175:
            var2 = 'rgba(255, 255, 255, 0.8)';
 181:
            var5 = var2;
 184:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var6.logo;
            var1['logo'] = var6;
            var1['buttonColor'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function CollectiblesShopViewAllCategoryItemsTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var17 = var1.category;
            var _closure2_slot0 = var17;
            var8 = var1.analyticsContext;
            var _closure2_slot1 = var8;
            var1 = _closure1_slot9;
            var4 = undefined;
            var21 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var1 = var6.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var1 = var3.height;
            var _closure2_slot2 = var1;
            var13 = var3.width;
            var7 = _closure1_slot3;
            var5 = var7.useMemo;
            var9 = var17.mobileBg;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var1;
            var1 = var17.banner;
            var3[2] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getCollectiblesAssetURL;
                    var1 = _closure2_slot0;
                    var2 = var1.mobileBg;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 60; continue _fun0003 }
 50:
                    var1 = _closure2_slot0;
                    var2 = var1.banner;
 60:
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['size'] = var5;
                    var5 = 'webp';
                    var1['format'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var24 = var5.bind(var7)(var1, var3);
            var1 = 7;
            var1 = var10[var1];
            var3 = var6.bind(var4)(var1);
            var1 = var17.styles;
            var1 = var3.bind(var4)(var1);
            var25 = var1.backgroundColors;
            var1 = 12;
            var3 = var10[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 13;
            var3 = var10[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.COLLECTIBLES_SHOP_INDEX_PAGE;
            var3 = new Array(1);
            var3[0] = var6;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var _closure2_slot3 = var5;
            var3 = global;
            var12 = var3.Math;
            var9 = var12.floor;
            var6 = _closure1_slot0;
            var3 = 14;
            var3 = var10[var3];
            var3 = var6.bind(var4)(var3);
            var14 = var3.COLLECTIBLES_SHOP_CARD_WIDTH;
            var18 = 15;
            var3 = var10[var18];
            var3 = var6.bind(var4)(var3);
            var3 = var3.SHOP_CARD_GAP;
            var3 = var14 + var3;
            var3 = var13 / var3;
            var15 = var9.bind(var12)(var3);
            var3 = 16;
            var3 = var10[var3];
            var13 = var6.bind(var4)(var3);
            var12 = var13.useFilteredAndSortedProducts;
            var3 = {};
            var9 = var17.products;
            var3['products'] = var9;
            var9 = 'CollectiblesShopViewAllCategoryItems';
            var3['location'] = var9;
            var3 = var12.bind(var13)(var3);
            var16 = var3.filteredProducts;
            var19 = 17;
            var3 = var10[var19];
            var13 = var6.bind(var4)(var3);
            var12 = var13.useSharedValue;
            var3 = 0;
            var22 = var12.bind(var13)(var3);
            var _closure2_slot4 = var22;
            var13 = var7.useCallback;
            var12 = new Array(1);
            var12[0] = var22;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
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
                    if(!var7) { _fun0004_ip = 76; continue _fun0004 }
 73:
                    var2 = 1;
 76:
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var14 = var13.bind(var7)(var3, var12);
            var3 = var10[var19];
            var13 = var6.bind(var4)(var3);
            var12 = var13.useAnimatedStyle;
            var3 = function _() {
                var1 = {};
                var3 = _closure2_slot4;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var20 = {};
            var20['borderOpacity'] = var22;
            var3['__closure'] = var20;
            var20 = 2446209469388.0;
            var3['__workletHash'] = var20;
            var20 = _closure1_slot11;
            var3['__initData'] = var20;
            var22 = var12.bind(var13)(var3);
            var3 = 19;
            var3 = var10[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useMobileShopAdaptiveBackButtonColorEnabled;
            var12 = var3.bind(var6)(var9);
            var6 = var7.useEffect;
            var20 = null;
            var3 = var20 == var8;
            var9 = undefined;
            if(var3) { _fun0002_ip = 492; continue _fun0002 }
 486:
            var9 = var8.sessionId;
 492:
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var5;
            var9 = var17.name;
            var3[2] = var9;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot6;
                    var3 = var2.COLLECTIBLES_SHOP_VIEWED;
                    var2 = {};
                    var8 = _closure2_slot3;
                    var2['location_stack'] = var8;
                    var9 = _closure2_slot1;
                    var8 = null;
                    var9 = var8 == var9;
                    var8 = undefined;
                    if(var9) { _fun0005_ip = 79; continue _fun0005 }
 69:
                    var9 = _closure2_slot1;
                    var8 = var9.sessionId;
 79:
                    var2['page_session_id'] = var8;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 13;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.COLLECTIBLES_SHOP;
                    var2['source'] = var7;
                    var7 = 'index';
                    var2['page_type'] = var7;
                    var6 = _closure2_slot0;
                    var6 = var6.name;
                    var2['category'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot7;
            var13 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = var23[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var5 = 21;
            var5 = var23[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.CollectiblesAnalyticsProvider;
            var5 = {};
            var7 = {};
            var28 = var7;
            var27 = var8;
            var8 = copyDataProperties(var28, var27);
            var9 = var17.name;
            var8 = 'pageCategory';
            var7[var8] = var9;
            var5['newValue'] = var7;
            var9 = _closure1_slot8;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var21.rootContainer;
            var7['style'] = var10;
            var10 = 22;
            var10 = var23[var10];
            var10 = var13.bind(var4)(var10);
            var13 = var10.CollectiblesProgressiveImage;
            var10 = {};
            var23 = {};
            var23['uri'] = var24;
            var10['source'] = var23;
            var23 = _closure1_slot5;
            var23 = var23.absoluteFill;
            var10['style'] = var23;
            var13 = var3.bind(var4)(var13, var10);
            var10 = new Array(4);
            var10[0] = var13;
            var23 = _closure1_slot7;
            if(var12) { _fun0002_ip = 766; continue _fun0002 }
 696:
            var13 = _closure1_slot1;
            var26 = _closure1_slot2;
            var12 = 9;
            var12 = var26[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var26 = var17.logo;
            var12['logo'] = var26;
            var26 = var20 == var25;
            var20 = undefined;
            if(var26) { _fun0002_ip = 753; continue _fun0002 }
 738:
            var26 = var25.label;
            var25 = var26.toHexString;
            var20 = var25.bind(var26)();
 753:
            var12['buttonColor'] = var20;
            var12 = var23.bind(var4)(var13, var12);
            _fun0002_ip = 788; continue _fun0002;
 766:
            var20 = _closure1_slot10;
            var13 = {};
            var13['category'] = var17;
            var13['backgroundUrl'] = var24;
            var12 = var23.bind(var4)(var20, var13);
 788:
            var10[1] = var12;
            var13 = _closure1_slot7;
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
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();