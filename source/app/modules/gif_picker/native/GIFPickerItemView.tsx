// app/modules/gif_picker/native/GIFPickerItemView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
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
    var2 = native4;
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
 0:
            var8 = arg2;
            var1 = {};
            var2 = {};
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 4;
            var3 = var3[var9];
            var6 = undefined;
            var3 = var5.bind(var6)(var3);
            var3 = var3.GIF_PICKER_GUTTER_SPACING;
            var2['paddingBottom'] = var3;
            var5 = 0;
            var3 = 0;
            if(!(var5 !== var8)) { _fun0001_ip = 81; continue _fun0001 }
 51:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var10.bind(var6)(var7);
            var10 = var7.GIF_PICKER_GUTTER_SPACING;
            var7 = 2;
            var3 = var10 / var7;
 81:
            var2['paddingLeft'] = var3;
            var7 = arg1;
            var3 = 1;
            var7 = var7 - var3;
            var5 = 0;
            if(!(var8 !== var7)) { _fun0001_ip = 132; continue _fun0001 }
 102:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var6)(var7);
            var8 = var7.GIF_PICKER_GUTTER_SPACING;
            var7 = 2;
            var5 = var8 / var7;
 132:
            var2['paddingRight'] = var5;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 5;
            var8 = var7[var4];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.xs;
            var2['borderRadius'] = var8;
            var8 = arg3;
            var2['width'] = var8;
            var8 = arg4;
            var2['height'] = var8;
            var2['flex'] = var3;
            var1['container'] = var2;
            var2 = {};
            var8 = var7[var4];
            var8 = var5.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BACKGROUND_MODIFIER_ACCENT;
            var2['backgroundColor'] = var8;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.radii;
            var4 = var4.xs;
            var2['borderRadius'] = var4;
            var2['flex'] = var3;
            var1['gifImage'] = var2;
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
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/gif_picker/native/GIFPickerItemView.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default(arg1) {
        var2 = arg1;
        var1 = var2.onPressGIF;
        var _closure2_slot0 = var1;
        var8 = var2.item;
        var _closure2_slot1 = var8;
        var1 = var2.index;
        var _closure2_slot2 = var1;
        var15 = var2.columns;
        var14 = var2.columnIndex;
        var13 = var2.width;
        var12 = var2.height;
        var2 = _closure1_slot6;
        var4 = undefined;
        var16 = undefined;
        var7 = var16[var2](var15, var14, var13, var12, var11);
        var9 = _closure1_slot3;
        var3 = var9.useMemo;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = var8.src;
        var2[1] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                if(var3) { _fun0002_ip = 70; continue _fun0002 }
 50:
                var4 = var5.split;
                var3 = '.';
                var4 = var4.bind(var5)(var3);
                var3 = 0;
                var1 = var4[var3];
 70:
                if(!(var2 == var1)) { _fun0002_ip = 152; continue _fun0002 }
 74:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 6;
                var4 = var8[var2];
                var4 = var3.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var8[var2];
                var2 = var3.bind(var7)(var2);
                var2 = var2.t;
                var3 = var2.5iIGZG;
                var2 = {};
                var7 = _closure2_slot2;
                var6 = 1;
                var6 = var7 + var6;
                var2['index'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 152:
                return var1;
            }
        };
        var10 = var3.bind(var9)(var1, var2);
        var3 = _closure1_slot5;
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 7;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var11 = var7.container;
        var1['style'] = var11;
        var11 = 'button';
        var1['accessibilityRole'] = var11;
        var1['accessibilityLabel'] = var10;
        var6 = function onPress() {
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1['onPress'] = var6;
        var6 = _closure1_slot1;
        var5 = 8;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var7 = var7.gifImage;
        var5['style'] = var7;
        var7 = {};
        var8 = var8.src;
        var7['uri'] = var8;
        var5['source'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['GIFPickerItemPlaceholder'] = var2;
    return var1;
})();