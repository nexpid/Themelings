// app/design/components/Button/native/ButtonHooks.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var12;
    var8 = function useProfileThemedButtonStyles(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var6.bind(var3)(var4);
        var3 = var4.useThemeContext;
        var3 = var3.bind(var4)();
        var6 = var3.primaryColor;
        var _closure2_slot1 = var6;
        var7 = var3.theme;
        var _closure2_slot2 = var7;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var2 = 'primary';
                if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = 'secondary';
                if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = 'tertiary';
                if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                return var1;
case 8:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 6;
                var2 = var2[var9];
                var3 = undefined;
                var7 = var4.bind(var3)(var2);
                var4 = var7.isThemeLight;
                var2 = _closure2_slot2;
                var2 = var4.bind(var7)(var2);
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var10 = 5;
                var4 = var4[var10];
                var8 = var7.bind(var3)(var4);
                var7 = var8.setColorOpacity;
                if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var4 = 'white';
                var2 = 0.1;
                var11 = var7.bind(var8)(var4, var2);
                _fun0001_ip = 12; continue _fun0001;
case 10:
                var4 = _closure2_slot1;
                var2 = 0.4;
                var11 = var7.bind(var8)(var4, var2);
case 12:
                var2 = {};
                var4 = new Array(2);
                var4[0] = var11;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var9 = var8.bind(var3)(var7);
                var8 = var9.isThemeLight;
                var7 = _closure2_slot2;
                var7 = var8.bind(var9)(var7);
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var10 = var9.bind(var3)(var8);
                if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var9 = var10.setColorOpacity;
                var8 = 'white';
                var7 = 0.2;
                var7 = var9.bind(var10)(var8, var7);
                _fun0001_ip = 15; continue _fun0001;
case 13:
                var9 = var10.darkenColor;
                var8 = 0.3;
                var7 = var9.bind(var10)(var11, var8);
case 15:
                var4[1] = var7;
                var2['backgroundColor'] = var4;
                var7 = _closure1_slot4;
                var4 = new Array(2);
                var4[0] = var7;
                var5 = _closure1_slot4;
                var4[1] = var5;
                var2['borderColor'] = var4;
                var2['color'] = var3;
                return var2;
case 6:
                var2 = {};
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var9 = 6;
                var4 = var3[var9];
                var3 = undefined;
                var8 = var7.bind(var3)(var4);
                var7 = var8.isThemeLight;
                var4 = _closure2_slot2;
                var4 = var7.bind(var8)(var4);
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var10 = 5;
                var7 = var7[var10];
                var12 = var8.bind(var3)(var7);
                var8 = var12.setColorOpacity;
                var11 = 'white';
                if(var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var4 = 0.24;
                var7 = var8.bind(var12)(var11, var4);
                _fun0001_ip = 18; continue _fun0001;
case 16:
                var4 = 0.72;
                var7 = var8.bind(var12)(var11, var4);
case 18:
                var4 = new Array(2);
                var4[0] = var7;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var9 = var8.bind(var3)(var7);
                var8 = var9.isThemeLight;
                var7 = _closure2_slot2;
                var7 = var8.bind(var9)(var7);
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var10 = var9.bind(var3)(var8);
                var9 = var10.setColorOpacity;
                if(var7) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                var7 = 0.34;
                var7 = var9.bind(var10)(var11, var7);
                _fun0001_ip = 21; continue _fun0001;
case 19:
                var8 = 0.62;
                var7 = var9.bind(var10)(var11, var8);
case 21:
                var4[1] = var7;
                var2['backgroundColor'] = var4;
                var7 = _closure1_slot4;
                var4 = new Array(2);
                var4[0] = var7;
                var5 = _closure1_slot4;
                var4[1] = var5;
                var2['borderColor'] = var4;
                var2['color'] = var3;
                return var2;
case 4:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 4;
                var3 = var7[var3];
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                var3 = var3.unsafe_rawColors;
                var3 = var3.WHITE_500;
                var4 = _closure1_slot0;
                var2 = 5;
                var8 = var7[var2];
                var10 = var4.bind(var5)(var8);
                var9 = var10.getContrastingColor;
                var8 = _closure2_slot1;
                var6 = {};
                var6['base'] = var3;
                var11 = var7[var2];
                var11 = var4.bind(var5)(var11);
                var11 = var11.WCAGContrastRatios;
                var11 = var11.HighContrastText;
                var6['contrastRatio'] = var11;
                var6 = var9.bind(var10)(var8, var6);
                var2 = var7[var2];
                var5 = var4.bind(var5)(var2);
                var4 = var5.darkenColor;
                var2 = 0.5;
                var5 = var4.bind(var5)(var6, var2);
                var2 = {};
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var2['backgroundColor'] = var4;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var2['borderColor'] = var4;
                var2['color'] = var3;
                return var2;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var8;
    var5 = function useButtonTextColorStyles(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot12;
            var3 = undefined;
            var5 = var4.bind(var3)(var2);
            var1 = _closure1_slot8;
            var2 = var1.bind(var3)(var2);
            var1 = {};
            var4 = null;
            var6 = var4 == var5;
            if(var6) { _fun0002_ip = 7; continue _fun0002 }
case 22:
            var3 = var5.color;
case 7:
            if(!(var4 != var3)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var2 = var3;
case 23:
            var1['color'] = var2;
            return var1;
        }
    };
    var _closure1_slot13 = var5;
    var4 = function useButtonScaleStyles(arg1, arg2, arg3) {
        var6 = arg1;
        var12 = arg2;
        var11 = arg3;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var12;
        var _closure2_slot2 = var11;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var10 = 8;
        var2 = var9[var10];
        var7 = undefined;
        var3 = var8.bind(var7)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function n() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 > var1;
                var2 = 1;
                if(!var1) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var4 = _closure2_slot1;
                var1 = var4.get;
                var3 = var1.bind(var4)();
                var1 = _closure2_slot2;
                var3 = var3 - var1;
                var1 = var4.get;
                var1 = var1.bind(var4)();
                var2 = var3 / var1;
case 25:
                var1 = {};
                var3 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 9;
                var6 = var9[var4];
                var4 = undefined;
                var7 = var8.bind(var4)(var6);
                var6 = var7.withSpring;
                var10 = 8;
                var10 = var9[var10];
                var12 = var8.bind(var4)(var10);
                var11 = var12.interpolate;
                var10 = _closure2_slot0;
                var5 = var10.get;
                var10 = var5.bind(var10)();
                var5 = [1];
                var5[1] = var2;
                var2 = [0, 1];
                var5 = var11.bind(var12)(var10, var2, var5);
                var2 = 10;
                var2 = var9[var2];
                var2 = var8.bind(var4)(var2);
                var4 = var2.ON_PRESS_SPRING;
                var2 = 'animate-always';
                var2 = var6.bind(var7)(var5, var4, var2);
                var3['scale'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            }
        };
        var5 = {};
        var5['width'] = var12;
        var5['scaleAmountInPx'] = var11;
        var11 = 9;
        var11 = var9[var11];
        var11 = var8.bind(var7)(var11);
        var11 = var11.withSpring;
        var5['withSpring'] = var11;
        var10 = var9[var10];
        var10 = var8.bind(var7)(var10);
        var10 = var10.interpolate;
        var5['interpolate'] = var10;
        var5['pressed'] = var6;
        var6 = 10;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.ON_PRESS_SPRING;
        var5['ON_PRESS_SPRING'] = var6;
        var1['__closure'] = var5;
        var5 = 17256006845494.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot11;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot14 = var4;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var6);
    var1 = 0;
    var7 = var12[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var7);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var12[var6];
    var6 = var11.bind(var1)(var6);
    var6 = var6.Platform;
    var9 = 'rgba(0,0,0,0.01)';
    var _closure1_slot4 = var9;
    var6 = 2;
    var7 = var12[var6];
    var14 = var11.bind(var1)(var7);
    var10 = var14.experimental_createToken;
    var7 = function() {
        var1 = '#161CBB';
        return var1;
    };
    var7 = var10.bind(var14)(var7);
    var _closure1_slot5 = var7;
    var7 = var12[var6];
    var14 = var11.bind(var1)(var7);
    var10 = var14.experimental_createToken;
    var7 = function() {
        var1 = '#1318A0';
        return var1;
    };
    var7 = var10.bind(var14)(var7);
    var _closure1_slot6 = var7;
    var7 = {};
    var10 = 4;
    var14 = var12[var10];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_BUTTON_PRIMARY_TEXT;
    var7['primary'] = var14;
    var14 = var12[var10];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.WHITE_500;
    var7['experimental_welcome-secondary'] = var14;
    var14 = var12[var10];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_BUTTON_SECONDARY_TEXT;
    var7['secondary'] = var14;
    var14 = var12[var10];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_BUTTON_TERTIARY_TEXT;
    var7['tertiary'] = var14;
    var14 = var12[var10];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_BUTTON_DESTRUCTIVE_TEXT;
    var7['destructive'] = var14;
    var14 = var12[var10];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_BUTTON_ACTIVE_TEXT;
    var7['active'] = var14;
    var14 = var12[var10];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_BUTTON_PRIMARY_OVERLAY_TEXT;
    var7['primary-overlay'] = var14;
    var14 = var12[var10];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_BUTTON_SECONDARY_OVERLAY_TEXT;
    var7['secondary-overlay'] = var14;
    var14 = var12[var10];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_BUTTON_SELECTED_TEXT;
    var7['deprecated_selected'] = var14;
    var14 = var12[var10];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var7['experimental_premium-primary'] = var14;
    var10 = var12[var10];
    var10 = var13.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.BRAND_500;
    var7['experimental_premium-secondary'] = var10;
    var _closure1_slot7 = var7;
    var7 = function useForegroundColor(arg1) {
        var3 = _closure1_slot7;
        var2 = arg1;
        var3 = var3[var2];
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var1 = var2.useToken;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var _closure1_slot8 = var7;
    var6 = var12[var6];
    var13 = var11.bind(var1)(var6);
    var10 = var13.createStyleProperties;
    var6 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = 'primary';
            if(!(var1 !== var2)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var1 = 'secondary';
            if(!(var1 !== var2)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var1 = 'tertiary';
            if(!(var1 !== var2)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var1 = 'destructive';
            if(!(var1 !== var2)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var1 = 'active';
            if(!(var1 !== var2)) { _fun0004_ip = 35; continue _fun0004 }
case 25:
            var1 = 'experimental_premium-secondary';
            if(!(var1 !== var2)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = 'primary-overlay';
            if(!(var1 !== var2)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var1 = 'secondary-overlay';
            if(!(var1 !== var2)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var1 = 'deprecated_selected';
            if(!(var1 !== var2)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var1 = 'experimental_welcome-secondary';
            if(!(var1 !== var2)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var1 = 'experimental_premium-primary';
            if(!(var1 !== var2)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var1 = undefined;
            return var1;
case 45:
            var1 = {};
            var3 = _closure1_slot4;
            var1['backgroundInactive'] = var3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 4;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
            var1['backgroundPressed'] = var3;
            var3 = _closure1_slot4;
            var1['borderInactive'] = var3;
            var2 = _closure1_slot4;
            var1['borderPressed'] = var2;
            return var1;
case 43:
            var1 = {};
            var3 = _closure1_slot5;
            var1['backgroundInactive'] = var3;
            var3 = _closure1_slot6;
            var1['backgroundPressed'] = var3;
            var3 = _closure1_slot4;
            var1['borderInactive'] = var3;
            var2 = _closure1_slot4;
            var1['borderPressed'] = var2;
            return var1;
case 41:
            var1 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 4;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.REDESIGN_BUTTON_SELECTED_BACKGROUND;
            var1['backgroundInactive'] = var7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_SELECTED_PRESSED_BACKGROUND;
            var1['backgroundPressed'] = var3;
            var3 = _closure1_slot4;
            var1['borderInactive'] = var3;
            var2 = _closure1_slot4;
            var1['borderPressed'] = var2;
            return var1;
case 39:
            var1 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 4;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.REDESIGN_BUTTON_SECONDARY_OVERLAY_BACKGROUND;
            var1['backgroundInactive'] = var7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_SECONDARY_OVERLAY_PRESSED_BACKGROUND;
            var1['backgroundPressed'] = var3;
            var3 = _closure1_slot4;
            var1['borderInactive'] = var3;
            var2 = _closure1_slot4;
            var1['borderPressed'] = var2;
            return var1;
case 36:
            var1 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 4;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.REDESIGN_BUTTON_PRIMARY_OVERLAY_BACKGROUND;
            var1['backgroundInactive'] = var7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_PRIMARY_OVERLAY_PRESSED_BACKGROUND;
            var1['backgroundPressed'] = var3;
            var3 = _closure1_slot4;
            var1['borderInactive'] = var3;
            var2 = _closure1_slot4;
            var1['borderPressed'] = var2;
            return var1;
case 35:
            var1 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 4;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.REDESIGN_BUTTON_ACTIVE_BACKGROUND;
            var1['backgroundInactive'] = var7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_ACTIVE_PRESSED_BACKGROUND;
            var1['backgroundPressed'] = var3;
            var3 = _closure1_slot4;
            var1['borderInactive'] = var3;
            var2 = _closure1_slot4;
            var1['borderPressed'] = var2;
            return var1;
case 33:
            var1 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 4;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.REDESIGN_BUTTON_DESTRUCTIVE_BACKGROUND;
            var1['backgroundInactive'] = var7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_DESTRUCTIVE_PRESSED_BACKGROUND;
            var1['backgroundPressed'] = var3;
            var3 = _closure1_slot4;
            var1['borderInactive'] = var3;
            var2 = _closure1_slot4;
            var1['borderPressed'] = var2;
            return var1;
case 31:
            var1 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 4;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            var1['backgroundInactive'] = var7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND;
            var1['backgroundPressed'] = var3;
            var3 = _closure1_slot4;
            var1['borderInactive'] = var3;
            var2 = _closure1_slot4;
            var1['borderPressed'] = var2;
            return var1;
case 29:
            var1 = {};
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 4;
            var6 = var5[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var6);
            var6 = var6.colors;
            var6 = var6.REDESIGN_BUTTON_SECONDARY_BACKGROUND;
            var1['backgroundInactive'] = var6;
            var6 = var5[var2];
            var6 = var4.bind(var3)(var6);
            var6 = var6.colors;
            var6 = var6.REDESIGN_BUTTON_SECONDARY_PRESSED_BACKGROUND;
            var1['backgroundPressed'] = var6;
            var6 = var5[var2];
            var6 = var4.bind(var3)(var6);
            var6 = var6.colors;
            var6 = var6.REDESIGN_BUTTON_SECONDARY_BORDER;
            var1['borderInactive'] = var6;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.colors;
            var2 = var2.REDESIGN_BUTTON_SECONDARY_PRESSED_BORDER;
            var1['borderPressed'] = var2;
            return var1;
case 27:
            var1 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 4;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.REDESIGN_BUTTON_PRIMARY_BACKGROUND;
            var1['backgroundInactive'] = var7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND;
            var1['backgroundPressed'] = var3;
            var3 = _closure1_slot4;
            var1['borderInactive'] = var3;
            var2 = _closure1_slot4;
            var1['borderPressed'] = var2;
            return var1;
        }
    };
    var6 = var10.bind(var13)(var6);
    var _closure1_slot9 = var6;
    var10 = {};
    var13 = 'function ButtonHooksNativeTsx1(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}';
    var10['code'] = var13;
    var _closure1_slot10 = var10;
    var10 = {};
    var13 = "function ButtonHooksNativeTsx2(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}";
    var10['code'] = var13;
    var _closure1_slot11 = var10;
    var10 = 15;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'design/components/Button/native/ButtonHooks.native.tsx';
    var10 = var11.bind(var12)(var10);
    var3['SAFE_TRANSPARENT_COLOR'] = var9;
    var3['useProfileThemedButtonStyles'] = var8;
    var3['useForegroundColor'] = var7;
    var3['useButtonColorStyles'] = var6;
    var3['useButtonTextColorStyles'] = var5;
    var5 = function useIconTintStyles(arg1) {
        var1 = {};
        var4 = _closure1_slot13;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var2 = var2.color;
        var1['tintColor'] = var2;
        return var1;
    };
    var3['useIconTintStyles'] = var5;
    var5 = function useGradientPillStyles(arg1) {
        var1 = {};
        var4 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var2 = var2.borderInactive;
        var1['borderColor'] = var2;
        return var1;
    };
    var3['useGradientPillStyles'] = var5;
    var5 = function useButtonPillStyles(arg1, arg2) {
        var3 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var6;
        var2 = _closure1_slot12;
        var9 = undefined;
        var12 = var2.bind(var9)(var3);
        var _closure2_slot1 = var12;
        var2 = _closure1_slot9;
        var11 = var2.bind(var9)(var3);
        var _closure2_slot2 = var11;
        var8 = _closure1_slot0;
        var10 = _closure1_slot2;
        var7 = 8;
        var2 = var10[var7];
        var3 = var8.bind(var9)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function s() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = null;
                var2 = var1 == var2;
                var5 = undefined;
                var12 = undefined;
                if(var2) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var2 = _closure2_slot1;
                var12 = var2.backgroundColor;
case 47:
                if(!(var1 == var12)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var4 = _closure2_slot2;
                var6 = var4.backgroundInactive;
                var2 = new Array(2);
                var2[0] = var6;
                var4 = var4.backgroundPressed;
                var2[1] = var4;
                var12 = var2;
case 49:
                var2 = _closure2_slot1;
                var2 = var1 == var2;
                var6 = undefined;
                if(var2) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var2 = _closure2_slot1;
                var6 = var2.borderColor;
case 51:
                if(!(var1 == var6)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var2 = _closure2_slot2;
                var4 = var2.borderInactive;
                var1 = new Array(2);
                var1[0] = var4;
                var2 = var2.borderPressed;
                var1[1] = var2;
                var6 = var1;
case 53:
                var1 = {};
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var8 = var7[var2];
                var11 = var4.bind(var5)(var8);
                var10 = var11.interpolateColor;
                var3 = _closure2_slot0;
                var8 = var3.get;
                var9 = var8.bind(var3)();
                var8 = [0, 1];
                var8 = var10.bind(var11)(var9, var8, var12);
                var1['backgroundColor'] = var8;
                var2 = var7[var2];
                var5 = var4.bind(var5)(var2);
                var4 = var5.interpolateColor;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = [0, 1];
                var2 = var4.bind(var5)(var3, var2, var6);
                var1['borderColor'] = var2;
                return var1;
            }
        };
        var5 = {};
        var5['themedStyles'] = var12;
        var5['colors'] = var11;
        var7 = var10[var7];
        var7 = var8.bind(var9)(var7);
        var7 = var7.interpolateColor;
        var5['interpolateColor'] = var7;
        var5['pressed'] = var6;
        var1['__closure'] = var5;
        var5 = 2383933325137.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot10;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useButtonPillStyles'] = var5;
    var3['useButtonScaleStyles'] = var4;
    var4 = function useButtonPressAnimationProps(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var6 = arguments[1];
            var11 = arguments[2];
            var9 = arguments[3];
            var8 = arguments[4];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var6 = 8;
case 55:
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var12 = 8;
            var3 = var3[var12];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useSharedValue;
            var10 = 0;
            var4 = var3.bind(var4)(var10);
            var3 = null;
            if(!(var3 != var1)) { _fun0006_ip = 57; continue _fun0006 }
case 51:
            var4 = var1;
case 57:
            _closure2_slot3 = var4;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var12];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useSharedValue;
            var3 = var1.bind(var3)(var10);
            _closure2_slot4 = var3;
            var1 = {};
            var13 = _closure1_slot3;
            var12 = var13.useCallback;
            var10 = new Array(2);
            var10[0] = var4;
            var10[1] = var9;
            var9 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var2 = 1;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var12.bind(var13)(var9, var10);
            var1['onPressIn'] = var9;
            var12 = _closure1_slot3;
            var10 = var12.useCallback;
            var9 = new Array(2);
            var9[0] = var4;
            var9[1] = var8;
            var8 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 60; continue _fun0008 }
case 47:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var10.bind(var12)(var8, var9);
            var1['onPressOut'] = var8;
            var10 = _closure1_slot3;
            var9 = var10.useCallback;
            var8 = new Array(2);
            var8[0] = var3;
            var8[1] = var11;
            var7 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure2_slot4;
                    var4 = var5.set;
                    var2 = var3.nativeEvent;
                    var2 = var2.layout;
                    var2 = var2.width;
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var7, var8);
            var1['onLayout'] = var7;
            var2 = _closure1_slot14;
            var2 = var2.bind(var5)(var4, var3, var6);
            var1['style'] = var2;
            return var1;
        }
    };
    var3['useButtonPressAnimationProps'] = var4;
    var2 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var8 = arg1;
            var7 = arguments[1];
            var6 = arguments[2];
            var _closure2_slot0 = var8;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0010_ip = 56; continue _fun0010 }
case 63:
            var7 = false;
case 56:
            var _closure2_slot1 = var7;
            if(!(var6 === var5)) { _fun0010_ip = 64; continue _fun0010 }
case 5:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var6 = var2.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
case 64:
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var5;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 12;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useFontScale;
            var5 = var3.bind(var4)();
            _closure2_slot3 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 13;
                    var2 = var1[var4];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var2);
                    var2 = var5.getIconSize;
                    var8 = 11;
                    var1 = var1[var8];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.MEDIUM_BUTTON_ICON_SIZE;
                    var5 = var2.bind(var5)(var1);
                    var6 = _closure2_slot0;
                    var2 = 'sm';
                    if(!(var2 !== var6)) { _fun0011_ip = 53; continue _fun0011 }
case 65:
                    var2 = 'lg';
                    if(!(var2 === var6)) { _fun0011_ip = 12; continue _fun0011 }
case 52:
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = var2[var4];
                    var9 = var10.bind(var7)(var6);
                    var6 = var9.getIconSize;
                    var2 = var2[var8];
                    var2 = var10.bind(var7)(var2);
                    var2 = var2.LARGE_BUTTON_ICON_SIZE;
                    var5 = var6.bind(var9)(var2);
                    _fun0011_ip = 12; continue _fun0011;
case 53:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = var2[var4];
                    var6 = var9.bind(var7)(var4);
                    var4 = var6.getIconSize;
                    var2 = var2[var8];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.SMALL_BUTTON_ICON_SIZE;
                    var5 = var4.bind(var6)(var2);
case 12:
                    var4 = _closure2_slot1;
                    var2 = var5;
                    if(!var4) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                    var6 = _closure2_slot3;
                    var4 = 1;
                    var2 = var5;
                    if(!(var6 > var4)) { _fun0011_ip = 66; continue _fun0011 }
case 68:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 14;
                    var4 = var3[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.TextStyleSheet;
                    var3 = var3[var8];
                    var7 = var6.bind(var7)(var3);
                    var6 = var7.getButtonDefaultTextVariant;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4[var3];
                    var6 = var3.fontSize;
                    var3 = null;
                    var2 = var5;
                    if(!(var3 != var2)) { _fun0011_ip = 66; continue _fun0011 }
case 69:
                    var2 = var5;
                    if(!(var3 != var6)) { _fun0011_ip = 66; continue _fun0011 }
case 70:
                    var3 = global;
                    var8 = var3.Math;
                    var7 = var8.min;
                    var4 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var1 = var7.bind(var8)(var4, var1);
                    var4 = var3.Math;
                    var3 = var4.max;
                    var1 = var6 * var1;
                    var2 = var3.bind(var4)(var5, var1);
case 66:
                    var1 = {};
                    var1['width'] = var2;
                    var1['height'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useIconSizeStyles'] = var2;
    return var1;
})();