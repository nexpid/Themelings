// app/modules/gif_picker/native/GIFPickerItemView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = function(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg2;
            var1 = {};
            var2 = {};
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var9 = 4;
            var4 = var4[var9];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var4 = var4.GIF_PICKER_GUTTER_SPACING;
            var2['paddingBottom'] = var4;
            var4 = 0;
            var6 = 0;
            if(!(var4 !== var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var10.bind(var5)(var7);
            var10 = var7.GIF_PICKER_GUTTER_SPACING;
            var7 = 2;
            var6 = var10 / var7;
case 2:
            var2['paddingLeft'] = var6;
            var6 = arg1;
            var7 = 1;
            var6 = var6 - var7;
            var4 = 0;
            if(!(var8 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var5)(var6);
            var8 = var6.GIF_PICKER_GUTTER_SPACING;
            var6 = 2;
            var4 = var8 / var6;
case 4:
            var2['paddingRight'] = var4;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 5;
            var8 = var6[var3];
            var8 = var4.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.xs;
            var2['borderRadius'] = var8;
            var8 = arg3;
            var2['width'] = var8;
            var8 = arg4;
            var2['height'] = var8;
            var2['flex'] = var7;
            var1['container'] = var2;
            var2 = {};
            var8 = var6[var3];
            var8 = var4.bind(var5)(var8);
            var8 = var8.colors;
            var8 = var8.BORDER_SUBTLE;
            var2['backgroundColor'] = var8;
            var8 = var6[var3];
            var8 = var4.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.xs;
            var2['borderRadius'] = var8;
            var2['flex'] = var7;
            var1['gifImage'] = var2;
            var2 = {};
            var7 = 2;
            var2['borderWidth'] = var7;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BRAND;
            var2['borderColor'] = var3;
            var1['gifImageSelected'] = var2;
            return var1;
        }
    };
    var2 = var5.bind(var9)(var2);
    var _closure1_slot6 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        var1 = arg1;
        var9 = var1.width;
        var8 = var1.height;
        var11 = var1.columns;
        var10 = var1.columnIndex;
        var2 = _closure1_slot6;
        var4 = undefined;
        var12 = undefined;
        var6 = var12[var2](var11, var10, var9, var8, var7);
        var3 = _closure1_slot5;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var6.container;
        var1['style'] = var5;
        var5 = {};
        var6 = var6.gifImage;
        var5['style'] = var6;
        var5 = var3.bind(var4)(var2, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var5.bind(var8)(var2);
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/gif_picker/native/GIFPickerItemView.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GIFPickerItemView(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = var3.onPressGIF;
            var _closure2_slot0 = var2;
            var9 = var3.item;
            var _closure2_slot1 = var9;
            var12 = var3.index;
            var _closure2_slot2 = var12;
            var17 = var3.columns;
            var16 = var3.columnIndex;
            var15 = var3.width;
            var14 = var3.height;
            var10 = var3.selected;
            var3 = _closure1_slot6;
            var4 = undefined;
            var18 = undefined;
            var11 = var18[var3](var17, var16, var15, var14, var13);
            var8 = _closure1_slot3;
            var6 = var8.useCallback;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var12;
            var3[2] = var2;
            var2 = function() {
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.dismissGlobalKeyboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var7 = var6.bind(var8)(var2, var3);
            var6 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 7;
                var3 = var4[var1];
                var1 = undefined;
                var9 = var5.bind(var1)(var3);
                var8 = var9.openLazy;
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var2 = 8;
                var5 = var4[var2];
                var2 = var4.paths;
                var13 = var6.bind(var1)(var5, var2);
                var6 = {};
                var2 = _closure2_slot1;
                var6['item'] = var2;
                var12 = 'GIFPickerItemActionSheet';
                var10 = 'stack';
                var14 = var9;
                var11 = var6;
                var2 = var14[var8](var13, var12, var11, var10, var9);
                var2 = 6;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.dismissGlobalKeyboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var6 = var6.bind(var8)(var2, var3);
            var3 = var8.useMemo;
            var2 = new Array(2);
            var2[0] = var12;
            var12 = var9.src;
            var2[1] = var12;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = var1.src;
                    var2 = var3.split;
                    var1 = '/';
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.pop;
                    var5 = var1.bind(var2)();
                    var2 = null;
                    var3 = var2 == var5;
                    var7 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = var5.split;
                    var3 = '.';
                    var4 = var4.bind(var5)(var3);
                    var3 = 0;
                    var1 = var4[var3];
case 6:
                    if(!(var2 == var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var4 = var8[var2];
                    var4 = var3.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.t;
                    var3 = var2["5iIGZI"];
                    var2 = {};
                    var7 = _closure2_slot2;
                    var6 = 1;
                    var6 = var7 + var6;
                    var2['index'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 8:
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 11;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var12 = var11.container;
            var1['style'] = var12;
            var12 = 'button';
            var1['accessibilityRole'] = var12;
            var1['accessibilityLabel'] = var8;
            var8 = null;
            var12 = var8 != var10;
            var8 = undefined;
            if(!var12) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var12 = {};
            var12['selected'] = var10;
            var8 = var12;
case 10:
            var1['accessibilityState'] = var8;
            var1['onPress'] = var7;
            var1['onLongPress'] = var6;
            var7 = _closure1_slot5;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 12;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var8 = true;
            if(!(var8 !== var10)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = var11.gifImage;
            _fun0002_ip = 14; continue _fun0002;
case 12:
            var12 = var11.gifImage;
            var10 = new Array(2);
            var10[0] = var12;
            var11 = var11.gifImageSelected;
            var10[1] = var11;
            var8 = var10;
case 14:
            var5['style'] = var8;
            var8 = {};
            var9 = var9.src;
            var8['uri'] = var9;
            var5['source'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['GIFPickerItemPlaceholder'] = var2;
    return var1;
})();