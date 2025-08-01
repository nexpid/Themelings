// app/modules/gif_picker/native/GIFPickerCategoriesPage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        var8 = arg1;
        var1 = {};
        var2 = {};
        var2['height'] = var8;
        var3 = 'row';
        var2['flexDirection'] = var3;
        var9 = _closure1_slot0;
        var6 = _closure1_slot2;
        var7 = 5;
        var4 = var6[var7];
        var5 = undefined;
        var4 = var9.bind(var5)(var4);
        var4 = var4.GIF_PICKER_GUTTER_SPACING;
        var2['gap'] = var4;
        var4 = var6[var7];
        var4 = var9.bind(var5)(var4);
        var4 = var4.GIF_PICKER_GUTTER_SPACING;
        var2['paddingBottom'] = var4;
        var1['item'] = var2;
        var2 = {};
        var4 = _closure1_slot1;
        var3 = 6;
        var10 = var6[var3];
        var10 = var4.bind(var5)(var10);
        var10 = var10.colors;
        var10 = var10.BACKGROUND_MODIFIER_ACCENT;
        var2['backgroundColor'] = var10;
        var7 = var6[var7];
        var7 = var9.bind(var5)(var7);
        var7 = var7.GIF_PICKER_GUTTER_SPACING;
        var7 = var8 - var7;
        var2['height'] = var7;
        var3 = var6[var3];
        var3 = var4.bind(var5)(var3);
        var3 = var3.radii;
        var3 = var3.xs;
        var2['borderRadius'] = var3;
        var3 = 1;
        var2['flex'] = var3;
        var1['placeholder'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function GIFPickerCategoriesPage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.columns;
            var _closure2_slot0 = var16;
            var7 = var1.favoritesCategory;
            var _closure2_slot1 = var7;
            var12 = var1.inActionSheet;
            var5 = var1.onSelectCategory;
            var _closure2_slot2 = var5;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var2 = 2;
            if(!(!(var16 > var2))) { _fun0001_ip = 101; continue _fun0001 }
 66:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
            var10 = var1 / var2;
            _fun0001_ip = 130; continue _fun0001;
 101:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var10 = var1.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
 130:
            _closure2_slot3 = var10;
            var2 = _closure1_slot7;
            var15 = var2.bind(var4)(var10);
            _closure2_slot4 = var15;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 7;
            var6 = var9[var6];
            var8 = var2.bind(var4)(var6);
            var6 = {};
            var11 = false;
            var6['hasCategories'] = var11;
            var6 = var8.bind(var4)(var6);
            var11 = var6.safeAreaBottomKeyboardAware;
            var8 = _closure1_slot0;
            var6 = 8;
            var6 = var9[var6];
            var17 = var8.bind(var4)(var6);
            var14 = var17.useStateFromStoresObject;
            var6 = _closure1_slot5;
            var13 = new Array(1);
            var13[0] = var6;
            var6 = function() {
                var1 = {};
                var3 = _closure1_slot5;
                var2 = var3.getTrendingCategories;
                var2 = var2.bind(var3)();
                var1['trendingCategories'] = var2;
                return var1;
            };
            var6 = var14.bind(var17)(var13, var6);
            var6 = var6.trendingCategories;
            _closure2_slot5 = var6;
            var14 = _closure1_slot3;
            var17 = var14.useMemo;
            var13 = new Array(3);
            var13[0] = var16;
            var13[1] = var7;
            var13[2] = var6;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var15 = _closure2_slot5;
                    var8 = new Array(0);
                    var3 = 0;
                    var16 = var8;
                    var14 = 0;
                    var1 = arraySpread(var16, var15, var14);
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 47; continue _fun0002 }
 32:
                    var2 = var8.unshift;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var8)(var1);
 47:
                    var2 = new Array(0);
                    var7 = global;
                    var12 = var7.Math;
                    var11 = var12.max;
                    var10 = var8.length;
                    var13 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 5;
                    var1 = var1[var5];
                    var4 = undefined;
                    var1 = var13.bind(var4)(var1);
                    var1 = var1.DEFAULT_CATEGORY_ROWS;
                    var1 = var11.bind(var12)(var10, var1);
                    var1 = var3 < var1;
                    var3 = 0;
                    if(!var1) { _fun0002_ip = 197; continue _fun0002 }
 115:
                    var11 = var2.push;
                    var12 = var8.slice;
                    var1 = _closure2_slot0;
                    var10 = var3 + var1;
                    var10 = var12.bind(var8)(var3, var10);
                    var10 = var11.bind(var2)(var10);
                    var3 = var3 + var1;
                    var12 = var7.Math;
                    var11 = var12.max;
                    var10 = var8.length;
                    var13 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var13.bind(var4)(var1);
                    var1 = var1.DEFAULT_CATEGORY_ROWS;
                    var1 = var11.bind(var12)(var10, var1);
                    if(var3 < var1) { _fun0002_ip = 115; continue _fun0002 }
 197:
                    var1 = {};
                    var1['data'] = var2;
                    var3 = var2.length;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['sections'] = var2;
                    return var1;
                }
            };
            var7 = var17.bind(var14)(var7, var13);
            var17 = var7.data;
            _closure2_slot6 = var17;
            var7 = var7.sections;
            var18 = var14.useEffect;
            var13 = new Array(1);
            var13[0] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot5;
                    var2 = var1.length;
                    var1 = 0;
                    if(!(var1 === var2)) { _fun0003_ip = 53; continue _fun0003 }
 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchTrending;
                    var1 = var1.bind(var2)();
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var18.bind(var14)(var6, var13);
            var13 = var14.useCallback;
            var6 = new Array(4);
            var6[0] = var16;
            var6[1] = var17;
            var6[2] = var5;
            var6[3] = var15;
            var5 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot6;
                    var1 = arg2;
                    var9 = var2[var1];
                    var5 = new Array(0);
                    var1 = _closure2_slot0;
                    var8 = 0;
                    var2 = var8 < var1;
                    var7 = 10;
                    var4 = undefined;
                    var3 = null;
                    if(!var2) { _fun0004_ip = 170; continue _fun0004 }
 44:
                    var14 = var9[var8];
                    var10 = var5.push;
                    if(!(var3 == var14)) { _fun0004_ip = 111; continue _fun0004 }
 57:
                    var12 = _closure1_slot6;
                    var11 = _closure1_slot4;
                    var2 = {};
                    var13 = _closure2_slot4;
                    var15 = var13.item;
                    var13 = new Array(2);
                    var13[0] = var15;
                    var15 = _closure2_slot4;
                    var15 = var15.placeholder;
                    var13[1] = var15;
                    var2['style'] = var13;
                    var2 = var12.bind(var4)(var11, var2, var8);
                    _fun0004_ip = 154; continue _fun0004;
 111:
                    var13 = _closure1_slot6;
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var7];
                    var12 = var12.bind(var4)(var11);
                    var11 = {};
                    var11['item'] = var14;
                    var14 = _closure2_slot2;
                    var11['onSelectCategory'] = var14;
                    var2 = var13.bind(var4)(var12, var11, var8);
 154:
                    var2 = var10.bind(var5)(var2);
                    var8 = var8 + 1;
                    var2 = _closure2_slot0;
                    if(var8 < var2) { _fun0004_ip = 44; continue _fun0004 }
 170:
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot4;
                    var1 = {};
                    var6 = _closure2_slot4;
                    var6 = var6.item;
                    var1['style'] = var6;
                    var6 = false;
                    var1['collapsable'] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var5 = var13.bind(var14)(var5, var6);
            var13 = var14.useMemo;
            var6 = new Array(3);
            var6[0] = var10;
            var6[1] = var16;
            var6[2] = var15;
            var3 = function() {
                var1 = {};
                var2 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 11;
                var3 = var7[var3];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var3 = var3.FastestListPropsPlaceholderType;
                var3 = var3.SHAPE;
                var2['type'] = var3;
                var3 = 'rect';
                var2['shape'] = var3;
                var3 = _closure2_slot0;
                var2['shapeCount'] = var3;
                var3 = 5;
                var8 = var7[var3];
                var8 = var6.bind(var5)(var8);
                var8 = var8.GIF_PICKER_GUTTER_SPACING;
                var2['spaceGap'] = var8;
                var8 = _closure2_slot4;
                var8 = var8.placeholder;
                var8 = var8.borderRadius;
                var2['borderRadius'] = var8;
                var8 = _closure2_slot4;
                var8 = var8.placeholder;
                var8 = var8.backgroundColor;
                var2['colorHex'] = var8;
                var4 = _closure2_slot3;
                var3 = var7[var3];
                var3 = var6.bind(var5)(var3);
                var3 = var3.GIF_PICKER_GUTTER_SPACING;
                var3 = var4 - var3;
                var2['height'] = var3;
                var3 = 'top';
                var2['verticalAlignment'] = var3;
                var1['sectionItem'] = var2;
                return var1;
            };
            var6 = var13.bind(var14)(var3, var6);
            var3 = _closure1_slot6;
            var1 = 12;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var13 = 13;
            var13 = var9[var13];
            var14 = var8.bind(var4)(var13);
            var13 = var14.getCustomKeyboardHeight;
            var13 = var13.bind(var14)();
            var1['estimatedListSize'] = var13;
            var1['inActionSheet'] = var12;
            var1['insetEnd'] = var11;
            var1['itemSize'] = var10;
            var1['sections'] = var7;
            var1['placeholderConfig'] = var6;
            var1['renderItem'] = var5;
            var5 = 14;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.ffgJrq;
            var5 = var6.bind(var7)(var5);
            var1['accessibilityLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gif_picker/native/GIFPickerCategoriesPage.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();