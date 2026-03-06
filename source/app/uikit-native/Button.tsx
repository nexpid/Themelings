// app/uikit-native/Button.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var19 = metroImportDefault;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var19;
    var _closure1_slot2 = var15;
    var1 = function getButtonColorsToTextStyles(arg1) {
        var2 = arg1;
        var1 = {};
        var4 = _closure1_slot13;
        var5 = var4.BRAND;
        var4 = var2.textBrand;
        var1[var5] = var4;
        var4 = _closure1_slot13;
        var5 = var4.RED;
        var4 = var2.textRed;
        var1[var5] = var4;
        var4 = _closure1_slot13;
        var5 = var4.GREEN;
        var4 = var2.textGreen;
        var1[var5] = var4;
        var4 = _closure1_slot13;
        var5 = var4.PRIMARY;
        var4 = var2.textPrimary;
        var1[var5] = var4;
        var4 = _closure1_slot13;
        var5 = var4.TRANSPARENT;
        var4 = var2.textTransparent;
        var1[var5] = var4;
        var4 = _closure1_slot13;
        var5 = var4.GREY;
        var4 = var2.textGrey;
        var1[var5] = var4;
        var4 = _closure1_slot13;
        var5 = var4.LIGHTGREY;
        var4 = var2.textLightgrey;
        var1[var5] = var4;
        var4 = _closure1_slot13;
        var5 = var4.WHITE;
        var4 = var2.textWhite;
        var1[var5] = var4;
        var3 = _closure1_slot13;
        var3 = var3.LINK;
        var2 = var2.textLink;
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function getButtonSizesToTextStyles(arg1) {
        var2 = arg1;
        var1 = {};
        var4 = _closure1_slot15;
        var5 = var4.XSMALL;
        var4 = var2.textXsmall;
        var1[var5] = var4;
        var4 = _closure1_slot15;
        var5 = var4.SMALL;
        var4 = var2.textSmall;
        var1[var5] = var4;
        var4 = _closure1_slot15;
        var5 = var4.MEDIUM;
        var4 = var2.textMedium;
        var1[var5] = var4;
        var3 = _closure1_slot15;
        var3 = var3.LARGE;
        var2 = var2.textLarge;
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function getButtonLooksToTextStyles(arg1) {
        var2 = arg1;
        var1 = {};
        var4 = _closure1_slot12;
        var5 = var4.FILLED;
        var4 = var2.textFilled;
        var1[var5] = var4;
        var4 = _closure1_slot12;
        var5 = var4.LINK;
        var4 = var2.textLink;
        var1[var5] = var4;
        var3 = _closure1_slot12;
        var3 = var3.OUTLINED;
        var2 = var2.textOutlined;
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function getTextStyles(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var9 = var1.color;
            var8 = var1.look;
            var3 = var1.size;
            var6 = var1.disabled;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var2 = var5.text;
            var1 = new Array(5);
            var1[0] = var2;
            var7 = _closure1_slot16;
            var7 = var7.bind(var4)(var5);
            var7 = var7[var9];
            var1[1] = var7;
            var7 = _closure1_slot18;
            var7 = var7.bind(var4)(var5);
            var7 = var7[var8];
            var1[2] = var7;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var5.textDefault;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var6 = var5.textDisabled;
case 6:
            var1[3] = var6;
            var2 = _closure1_slot17;
            var2 = var2.bind(var4)(var5);
            var2 = var2[var3];
            var1[4] = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var6 = function getButtonStyles(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var12 = var1.color;
            var15 = var1.size;
            var11 = var1.look;
            var3 = var1.disabled;
            var6 = undefined;
            if(!(var3 === var6)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var3 = false;
case 2:
            var9 = var1.shrink;
            if(!(var9 === var6)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var9 = false;
case 7:
            var5 = var1.pressed;
            if(!(var5 === var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var5 = false;
case 9:
            var8 = var1.darkenOnPress;
            if(!(var8 === var6)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var8 = false;
case 11:
            var2 = var1.style;
            var1 = _closure1_slot14;
            if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var17 = var1.DEFAULT;
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var17 = var1.DISABLED;
case 15:
            var16 = var12;
            if(!var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 9;
            var1 = var10[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var16 = var12;
            if(var1) { _fun0002_ip = 16; continue _fun0002 }
case 18:
            var1 = global;
            var1 = var1.HermesInternal;
            var10 = var1.concat;
            var3 = '';
            var1 = 'Dark';
            var16 = var10.bind(var3)(var12, var1);
case 16:
            var3 = var4.button;
            var1 = new Array(7);
            var1[0] = var3;
            var3 = null;
            if(!var9) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var3 = var4.buttonShrink;
case 19:
            var1[1] = var3;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 10;
            var10 = var12[var3];
            var14 = var9.bind(var6)(var10);
            var13 = var14.getClass;
            var10 = 'button';
            var22 = var14;
            var21 = var4;
            var20 = var10;
            var19 = var16;
            var18 = var17;
            var13 = var22[var13](var21, var20, var19, var18, var17);
            var1[2] = var13;
            var13 = var12[var3];
            var14 = var9.bind(var6)(var13);
            var13 = var14.getClass;
            var13 = var13.bind(var14)(var4, var10, var15);
            var1[3] = var13;
            var3 = var12[var3];
            var9 = var9.bind(var6)(var3);
            var3 = var9.getClass;
            var3 = var3.bind(var9)(var4, var10, var11);
            var1[4] = var3;
            var3 = undefined;
            if(var8) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 9;
            var7 = var9[var7];
            var8 = var8.bind(var6)(var7);
            var7 = var8.isAndroid;
            var7 = var7.bind(var8)();
            var3 = undefined;
            if(var7) { _fun0002_ip = 21; continue _fun0002 }
case 23:
            var3 = undefined;
            if(!var5) { _fun0002_ip = 21; continue _fun0002 }
case 24:
            var3 = var4.faded;
case 21:
            var1[5] = var3;
            var1[6] = var2;
            return var1;
        }
    };
    var _closure1_slot20 = var6;
    var5 = function ButtonText(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = var1.children;
            var14 = var1.color;
            var13 = var1.look;
            var12 = var1.size;
            var11 = var1.disabled;
            var8 = var1.style;
            var1 = _closure1_slot11;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var2 = 'function';
            var1 = typeof var6;
            if(!(var2 === var1)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var3 = _closure1_slot8;
            var2 = _closure1_slot9;
            var1 = {};
            var4 = {};
            var15 = _closure1_slot19;
            var9 = {};
            var9['color'] = var14;
            var9['look'] = var13;
            var9['size'] = var12;
            var9['disabled'] = var11;
            var15 = var15.bind(var5)(var9, var10);
            var9 = new Array(2);
            var9[0] = var15;
            var9[1] = var8;
            var4['style'] = var9;
            var4 = var6.bind(var5)(var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 27; continue _fun0003;
case 25:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.LegacyText;
            var2 = {'maxFontSizeMultiplier': 2, 'numberOfLines': 1};
            var9 = _closure1_slot19;
            var7 = {};
            var7['color'] = var14;
            var7['look'] = var13;
            var7['size'] = var12;
            var7['disabled'] = var11;
            var9 = var9.bind(var5)(var7, var10);
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 27:
            return var1;
        }
    };
    var _closure1_slot21 = var5;
    var4 = function getRedesignVariant(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot13;
            var3 = var3.GREEN;
            if(!(var3 !== var2)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var3 = _closure1_slot13;
            var3 = var3.RED;
            if(!(var3 !== var2)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var3 = _closure1_slot13;
            var3 = var3.GREY;
            if(!(var3 !== var2)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var3 = _closure1_slot13;
            var3 = var3.LIGHTGREY;
            if(!(var3 !== var2)) { _fun0004_ip = 32; continue _fun0004 }
case 34:
            var3 = _closure1_slot13;
            var3 = var3.TRANSPARENT;
            if(!(var3 !== var2)) { _fun0004_ip = 32; continue _fun0004 }
case 35:
            var1 = _closure1_slot13;
            var1 = var1.WHITE;
            if(!(var1 !== var2)) { _fun0004_ip = 4; continue _fun0004 }
case 36:
            var1 = 'primary';
            return var1;
case 4:
            var1 = 'primary-overlay';
            return var1;
case 32:
            var1 = 'secondary';
            return var1;
case 30:
            var1 = 'destructive';
            return var1;
case 28:
            var1 = 'active';
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var2 = function getRedesignSize(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot15;
            var3 = var3.LARGE;
            if(!(var3 !== var2)) { _fun0005_ip = 37; continue _fun0005 }
case 29:
            var3 = _closure1_slot15;
            var3 = var3.MEDIUM;
            if(!(var3 !== var2)) { _fun0005_ip = 38; continue _fun0005 }
case 31:
            var3 = _closure1_slot15;
            var3 = var3.SMALL;
            if(!(var3 !== var2)) { _fun0005_ip = 39; continue _fun0005 }
case 33:
            var1 = _closure1_slot15;
            var1 = var1.XSMALL;
            if(!(var1 !== var2)) { _fun0005_ip = 39; continue _fun0005 }
case 34:
            var1 = undefined;
            return var1;
case 39:
            var1 = 'sm';
            return var1;
case 38:
            var1 = 'md';
            return var1;
case 37:
            var1 = 'lg';
            return var1;
        }
    };
    var _closure1_slot23 = var2;
    var12 = function Button(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = var3.look;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var4 = _closure1_slot12;
            var2 = var4.FILLED;
case 40:
            var _closure2_slot0 = var2;
            var25 = var3.color;
            if(!(var25 === var5)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var4 = _closure1_slot13;
            var25 = var4.BRAND;
case 42:
            var _closure2_slot1 = var25;
            var23 = var3.size;
            if(!(var23 === var5)) { _fun0006_ip = 44; continue _fun0006 }
case 12:
            var4 = _closure1_slot15;
            var23 = var4.MEDIUM;
case 44:
            var _closure2_slot2 = var23;
            var24 = var3.text;
            var _closure2_slot3 = var24;
            var9 = var3.shrink;
            if(!(var9 === var5)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var9 = false;
case 45:
            var _closure2_slot4 = var9;
            var11 = var3.disabled;
            if(!(var11 === var5)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var11 = false;
case 47:
            var _closure2_slot5 = var11;
            var13 = var3.loading;
            if(!(var13 === var5)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var13 = false;
case 49:
            var _closure2_slot6 = var13;
            var41 = var3.loadingColorDark;
            if(!(var41 === var5)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.unsafe_rawColors;
            var41 = var4.WHITE;
case 51:
            var _closure2_slot7 = var41;
            var40 = var3.loadingColorLight;
            if(!(var40 === var5)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.unsafe_rawColors;
            var40 = var4.PRIMARY_500;
case 53:
            var _closure2_slot8 = var40;
            var42 = var3.textStyle;
            var _closure2_slot9 = var42;
            var6 = var3.style;
            var _closure2_slot10 = var6;
            var33 = var3.accessibilityRole;
            if(!(var33 === var5)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var33 = 'button';
case 55:
            var21 = var3.accessibilityLabel;
            var20 = var3.accessibilityHint;
            var4 = var3.accessibilityState;
            var _closure2_slot11 = var4;
            var19 = var3.accessibilityActions;
            var18 = var3.onAccessibilityAction;
            var31 = var3.accessibilityValue;
            var39 = var3.darkenOnPress;
            var _closure2_slot12 = var39;
            var10 = var3.renderIcon;
            var12 = var3.renderRightIcon;
            var26 = var3.renderShine;
            var27 = var3.renderLinearGradient;
            var7 = var3.testID;
            var17 = var3.onPress;
            var16 = var3.onPressIn;
            var15 = var3.onPressOut;
            var14 = var3.onTouchStart;
            var30 = var3.onTouchEnd;
            var29 = var3.onLongPress;
            var38 = var3.foregroundRipple;
            var _closure2_slot13 = var38;
            var37 = var3.cornerRadius;
            var _closure2_slot14 = var37;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var3 = _closure1_slot11;
            var3 = var3.bind(var5)();
            _closure2_slot15 = var3;
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var8 = 12;
            var8 = var36[var8];
            var28 = var35.bind(var5)(var8);
            var8 = var28.useThemeContext;
            var8 = var8.bind(var28)();
            var8 = var8.theme;
            _closure2_slot16 = var8;
            var34 = _closure1_slot3;
            var32 = var34.useMemo;
            var28 = new Array(10);
            var28[0] = var25;
            var28[1] = var11;
            var28[2] = var13;
            var28[3] = var2;
            var28[4] = var23;
            var28[5] = var24;
            var28[6] = var42;
            var28[7] = var41;
            var28[8] = var40;
            var28[9] = var8;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var5 = _closure1_slot8;
                    if(var1) { _fun0007_ip = 44; continue _fun0007 }
case 41:
                    var4 = _closure1_slot21;
                    var3 = {};
                    var1 = _closure2_slot1;
                    var3['color'] = var1;
                    var1 = _closure2_slot0;
                    var3['look'] = var1;
                    var1 = _closure2_slot2;
                    var3['size'] = var1;
                    var1 = _closure2_slot5;
                    var3['disabled'] = var1;
                    var1 = _closure2_slot9;
                    var3['style'] = var1;
                    var1 = _closure2_slot3;
                    var3['children'] = var1;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3);
                    _fun0007_ip = 57; continue _fun0007;
case 44:
                    var4 = _closure1_slot4;
                    var3 = {};
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 12;
                    var6 = var6[var2];
                    var2 = undefined;
                    var9 = var8.bind(var2)(var6);
                    var8 = var9.isThemeDark;
                    var6 = _closure2_slot16;
                    var6 = var8.bind(var9)(var6);
                    if(var6) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                    var6 = _closure2_slot8;
                    _fun0007_ip = 49; continue _fun0007;
case 58:
                    var6 = _closure2_slot7;
case 49:
                    var3['color'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
case 57:
                    return var1;
                }
            };
            var8 = var32.bind(var34)(var8, var28);
            var34 = _closure1_slot3;
            var32 = var34.useMemo;
            var28 = new Array(2);
            var28[0] = var11;
            var28[1] = var4;
            var4 = function() {
                var1 = {};
                var4 = _closure2_slot11;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var3 = _closure2_slot5;
                var2 = 'disabled';
                var1[var2] = var3;
                return var1;
            };
            var32 = var32.bind(var34)(var4, var28);
            var34 = _closure1_slot3;
            var28 = var34.useCallback;
            var4 = new Array(8);
            var4[0] = var25;
            var4[1] = var39;
            var4[2] = var23;
            var4[3] = var2;
            var4[4] = var11;
            var4[5] = var9;
            var4[6] = var6;
            var4[7] = var3;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.pressed;
                var4 = _closure1_slot20;
                var3 = {};
                var5 = _closure2_slot1;
                var3['color'] = var5;
                var5 = _closure2_slot2;
                var3['size'] = var5;
                var5 = _closure2_slot5;
                var3['disabled'] = var5;
                var5 = _closure2_slot0;
                var3['look'] = var5;
                var5 = _closure2_slot4;
                var3['shrink'] = var5;
                var3['pressed'] = var2;
                var2 = _closure2_slot12;
                var3['darkenOnPress'] = var2;
                var2 = _closure2_slot10;
                var3['style'] = var2;
                var2 = _closure2_slot15;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var4 = var28.bind(var34)(var3, var4);
            var34 = _closure1_slot3;
            var28 = var34.useMemo;
            var3 = new Array(2);
            var3[0] = var38;
            var3[1] = var37;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = {};
                    var1 = _closure2_slot13;
                    var2['foreground'] = var1;
                    var5 = _closure2_slot14;
                    var1 = null;
                    var5 = var1 != var5;
                    var1 = 3;
                    if(!var5) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var1 = _closure2_slot14;
case 60:
                    var2['cornerRadius'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var28 = var28.bind(var34)(var1, var3);
            var34 = _closure1_slot3;
            var3 = var34.useContext;
            var1 = 13;
            var1 = var36[var1];
            var1 = var35.bind(var5)(var1);
            var1 = var1.RedesignCompatContext;
            var1 = var3.bind(var34)(var1);
            if(!var1) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var1 = _closure1_slot12;
            var1 = var1.LINK;
            if(!(var2 === var1)) { _fun0006_ip = 64; continue _fun0006 }
case 62:
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var1['accessibilityRole'] = var33;
            var1['accessibilityState'] = var32;
            var1['accessibilityLabel'] = var21;
            var1['accessibilityHint'] = var20;
            var1['accessibilityActions'] = var19;
            var1['onAccessibilityAction'] = var18;
            var1['accessibilityValue'] = var31;
            var1['onPress'] = var17;
            var1['onPressIn'] = var16;
            var1['onPressOut'] = var15;
            var1['onTouchStart'] = var14;
            var1['onTouchEnd'] = var30;
            var1['onLongPress'] = var29;
            var29 = var11;
            if(var11) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var29 = var13;
case 65:
            var1['disabled'] = var29;
            var1['android_ripple'] = var28;
            var1['testID'] = var7;
            var1['style'] = var4;
            var7 = null;
            var28 = var7 == var27;
            var4 = undefined;
            if(var28) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var4 = var27.bind(var5)();
case 67:
            var28 = var7 != var4;
            var27 = null;
            if(!var28) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            var27 = var4;
case 69:
            var4 = new Array(5);
            var4[0] = var27;
            var27 = var7 == var10;
            var28 = undefined;
            if(var27) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            var28 = var10.bind(var5)();
case 71:
            var29 = var7 != var28;
            var27 = null;
            if(!var29) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var27 = var28;
case 73:
            var4[1] = var27;
            var4[2] = var8;
            var8 = var7 == var12;
            var27 = undefined;
            if(var8) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            var27 = var12.bind(var5)();
case 75:
            var28 = var7 != var27;
            var8 = null;
            if(!var28) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var8 = var27;
case 77:
            var4[3] = var8;
            var27 = var7 == var26;
            var8 = undefined;
            if(var27) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            var8 = var26.bind(var5)();
case 79:
            var26 = var7 != var8;
            var7 = null;
            if(!var26) { _fun0006_ip = 81; continue _fun0006 }
case 82:
            var7 = var8;
case 81:
            var4[4] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0006_ip = 83; continue _fun0006;
case 64:
            var4 = _closure1_slot8;
            var3 = _closure1_slot6;
            var2 = {};
            var2['style'] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var26 = _closure1_slot2;
            var6 = 14;
            var6 = var26[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Button;
            var6 = {};
            var6['text'] = var24;
            var24 = _closure1_slot22;
            var24 = var24.bind(var5)(var25);
            var6['variant'] = var24;
            var22 = _closure1_slot23;
            var22 = var22.bind(var5)(var23);
            var6['size'] = var22;
            var6['accessibilityLabel'] = var21;
            var6['accessibilityHint'] = var20;
            var6['accessibilityActions'] = var19;
            var6['onAccessibilityAction'] = var18;
            var6['onPress'] = var17;
            var6['onPressIn'] = var16;
            var6['onPressOut'] = var15;
            var6['onTouchStart'] = var14;
            if(var11) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var11 = var13;
case 84:
            var6['disabled'] = var11;
            var11 = null;
            var13 = var11 == var10;
            var14 = undefined;
            if(var13) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            var14 = var10.bind(var5)();
case 86:
            if(!(var11 == var14)) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var15 = var11 == var12;
            var13 = undefined;
            if(var15) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            var13 = var12.bind(var5)();
case 90:
            var14 = var13;
case 88:
            var15 = var11 != var14;
            var13 = null;
            if(!var15) { _fun0006_ip = 92; continue _fun0006 }
case 93:
            var13 = var14;
case 92:
            var6['icon'] = var13;
            var13 = var11 != var10;
            var10 = 'start';
            if(var13) { _fun0006_ip = 94; continue _fun0006 }
case 95:
            var12 = var11 != var12;
            var11 = undefined;
            if(!var12) { _fun0006_ip = 96; continue _fun0006 }
case 97:
            var11 = 'end';
case 96:
            var10 = var11;
case 94:
            var6['iconPosition'] = var10;
            var9 = !var9;
            var6['grow'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 83:
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var15[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var21 = 1;
    var7 = var15[var21];
    var7 = var14.bind(var1)(var7);
    var8 = var7.ActivityIndicator;
    var _closure1_slot4 = var8;
    var8 = var7.Pressable;
    var _closure1_slot5 = var8;
    var7 = var7.View;
    var _closure1_slot6 = var7;
    var7 = 2;
    var7 = var15[var7];
    var7 = var14.bind(var1)(var7);
    var7 = var7.getThemedRippleConfig;
    var _closure1_slot7 = var7;
    var11 = 3;
    var7 = var15[var11];
    var7 = var14.bind(var1)(var7);
    var22 = var7.Fonts;
    var7 = 4;
    var7 = var15[var7];
    var7 = var14.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot8 = var8;
    var8 = var7.Fragment;
    var _closure1_slot9 = var8;
    var7 = var7.jsxs;
    var _closure1_slot10 = var7;
    var7 = 5;
    var7 = var15[var7];
    var9 = var14.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'flexDirection': 'row', 'flexGrow': 1, 'justifyContent': 'center', 'alignItems': 'center', 'alignSelf': 'stretch', 'borderRadius': 3};
    var7['button'] = var10;
    var10 = {'flexGrow': 0, 'alignSelf': 'flex-start', 'paddingHorizontal': 10};
    var7['buttonShrink'] = var10;
    var10 = {};
    var18 = 6;
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BRAND;
    var10['backgroundColor'] = var16;
    var7['buttonBrandDefault'] = var10;
    var10 = {};
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BRAND_600;
    var10['backgroundColor'] = var16;
    var7['buttonBrandDarkDefault'] = var10;
    var10 = {};
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.RED_400;
    var10['backgroundColor'] = var16;
    var7['buttonRedDefault'] = var10;
    var10 = {};
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.RED_500;
    var10['backgroundColor'] = var16;
    var7['buttonRedDarkDefault'] = var10;
    var10 = {};
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.CONTROL_CONNECTED_BACKGROUND_DEFAULT;
    var10['backgroundColor'] = var16;
    var7['buttonGreenDefault'] = var10;
    var10 = {};
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.GREEN_500;
    var10['backgroundColor'] = var16;
    var7['buttonGreenDarkDefault'] = var10;
    var10 = {};
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_500;
    var10['backgroundColor'] = var16;
    var7['buttonGreyDarkDefault'] = var10;
    var10 = {};
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_500;
    var10['backgroundColor'] = var16;
    var7['buttonLightgreyDefault'] = var10;
    var10 = {};
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_500;
    var10['backgroundColor'] = var16;
    var7['buttonLightgreyDarkDefault'] = var10;
    var10 = {};
    var17 = 7;
    var16 = var15[var17];
    var24 = var14.bind(var1)(var16);
    var23 = var24.hexWithOpacity;
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BRAND_500;
    var20 = 0.5;
    var16 = var23.bind(var24)(var16, var20);
    var10['backgroundColor'] = var16;
    var7['buttonBrandDisabled'] = var10;
    var10 = {};
    var16 = var15[var17];
    var24 = var14.bind(var1)(var16);
    var23 = var24.hexWithOpacity;
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BRAND_600;
    var16 = var23.bind(var24)(var16, var20);
    var10['backgroundColor'] = var16;
    var7['buttonBrandDarkDisabled'] = var10;
    var10 = {};
    var16 = var15[var17];
    var24 = var14.bind(var1)(var16);
    var23 = var24.hexWithOpacity;
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.RED_400;
    var16 = var23.bind(var24)(var16, var20);
    var10['backgroundColor'] = var16;
    var7['buttonRedDisabled'] = var10;
    var10 = {};
    var16 = var15[var17];
    var24 = var14.bind(var1)(var16);
    var23 = var24.hexWithOpacity;
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.RED_500;
    var16 = var23.bind(var24)(var16, var20);
    var10['backgroundColor'] = var16;
    var7['buttonRedDarkDisabled'] = var10;
    var10 = {};
    var16 = var15[var17];
    var24 = var14.bind(var1)(var16);
    var23 = var24.hexWithOpacity;
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.GREEN_360;
    var16 = var23.bind(var24)(var16, var20);
    var10['backgroundColor'] = var16;
    var7['buttonGreenDisabled'] = var10;
    var10 = {};
    var16 = var15[var17];
    var24 = var14.bind(var1)(var16);
    var23 = var24.hexWithOpacity;
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.GREEN_500;
    var16 = var23.bind(var24)(var16, var20);
    var10['backgroundColor'] = var16;
    var7['buttonGreenDarkDisabled'] = var10;
    var10 = {};
    var16 = var15[var17];
    var24 = var14.bind(var1)(var16);
    var23 = var24.hexWithOpacity;
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_500;
    var16 = var23.bind(var24)(var16, var20);
    var10['backgroundColor'] = var16;
    var7['buttonGreyDarkDisabled'] = var10;
    var10 = {};
    var16 = var15[var17];
    var24 = var14.bind(var1)(var16);
    var23 = var24.hexWithOpacity;
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_500;
    var16 = var23.bind(var24)(var16, var20);
    var10['backgroundColor'] = var16;
    var7['buttonLightgreyDisabled'] = var10;
    var10 = {};
    var16 = var15[var17];
    var24 = var14.bind(var1)(var16);
    var23 = var24.hexWithOpacity;
    var16 = var15[var18];
    var16 = var19.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_500;
    var16 = var23.bind(var24)(var16, var20);
    var10['backgroundColor'] = var16;
    var7['buttonLightgreyDarkDisabled'] = var10;
    var10 = {};
    var16 = 'transparent';
    var10['backgroundColor'] = var16;
    var7['buttonTransparentDefault'] = var10;
    var10 = {};
    var10['backgroundColor'] = var16;
    var7['buttonTransparentDarkDefault'] = var10;
    var10 = {};
    var10['backgroundColor'] = var16;
    var7['buttonTransparentDisabled'] = var10;
    var10 = {};
    var10['backgroundColor'] = var16;
    var7['buttonTransparentDarkDisabled'] = var10;
    var10 = {};
    var23 = var15[var18];
    var23 = var19.bind(var1)(var23);
    var23 = var23.colors;
    var23 = var23.WHITE;
    var10['backgroundColor'] = var23;
    var7['buttonWhiteDefault'] = var10;
    var10 = {};
    var17 = var15[var17];
    var24 = var14.bind(var1)(var17);
    var23 = var24.hexWithOpacity;
    var17 = var15[var18];
    var17 = var19.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.WHITE;
    var17 = var23.bind(var24)(var17, var20);
    var10['backgroundColor'] = var17;
    var7['buttonWhiteDisabled'] = var10;
    var10 = {};
    var7['buttonFilled'] = var10;
    var10 = {};
    var7['buttonLink'] = var10;
    var10 = {};
    var7['buttonLinkDefault'] = var10;
    var10 = {'backgroundColor': 'transparent', 'borderWidth': 1, 'borderStyle': 'solid'};
    var17 = 8;
    var23 = var15[var17];
    var23 = var14.bind(var1)(var23);
    var23 = var23.BUTTON_OUTLINED_BORDER;
    var10['borderColor'] = var23;
    var7['buttonOutlined'] = var10;
    var10 = {};
    var23 = 24;
    var10['minHeight'] = var23;
    var7['buttonXsmall'] = var10;
    var10 = {};
    var23 = 32;
    var10['minHeight'] = var23;
    var7['buttonSmall'] = var10;
    var10 = {};
    var23 = 40;
    var10['minHeight'] = var23;
    var7['buttonMedium'] = var10;
    var10 = {};
    var23 = 46;
    var10['minHeight'] = var23;
    var7['buttonLarge'] = var10;
    var10 = {};
    var23 = var15[var18];
    var23 = var19.bind(var1)(var23);
    var23 = var23.colors;
    var23 = var23.WHITE;
    var10['color'] = var23;
    var22 = var22.PRIMARY_SEMIBOLD;
    var10['fontFamily'] = var22;
    var10['flexShrink'] = var21;
    var7['text'] = var10;
    var10 = {};
    var22 = 12;
    var10['fontSize'] = var22;
    var7['textXsmall'] = var10;
    var10 = {};
    var22 = 14;
    var10['fontSize'] = var22;
    var7['textSmall'] = var10;
    var10 = {};
    var10['fontSize'] = var22;
    var7['textMedium'] = var10;
    var10 = {};
    var22 = 20;
    var10['fontSize'] = var22;
    var7['textLarge'] = var10;
    var10 = {};
    var22 = 0.6;
    var10['opacity'] = var22;
    var7['textDisabled'] = var10;
    var10 = {};
    var10['opacity'] = var21;
    var7['textDefault'] = var10;
    var10 = {};
    var21 = var15[var18];
    var21 = var19.bind(var1)(var21);
    var21 = var21.colors;
    var21 = var21.WHITE;
    var10['color'] = var21;
    var7['textBrand'] = var10;
    var10 = {};
    var21 = var15[var18];
    var21 = var19.bind(var1)(var21);
    var21 = var21.colors;
    var21 = var21.WHITE;
    var10['color'] = var21;
    var7['textRed'] = var10;
    var10 = {};
    var21 = var15[var18];
    var21 = var19.bind(var1)(var21);
    var21 = var21.colors;
    var21 = var21.WHITE;
    var10['color'] = var21;
    var7['textGreen'] = var10;
    var10 = {};
    var21 = var15[var18];
    var21 = var19.bind(var1)(var21);
    var21 = var21.colors;
    var21 = var21.WHITE;
    var10['color'] = var21;
    var7['textGrey'] = var10;
    var10 = {};
    var21 = var15[var18];
    var21 = var19.bind(var1)(var21);
    var21 = var21.colors;
    var21 = var21.WHITE;
    var10['color'] = var21;
    var7['textLightgrey'] = var10;
    var10 = {};
    var21 = var15[var18];
    var21 = var19.bind(var1)(var21);
    var21 = var21.colors;
    var21 = var21.WHITE;
    var10['color'] = var21;
    var7['textWhite'] = var10;
    var10 = {};
    var7['textFilled'] = var10;
    var10 = {};
    var21 = var15[var17];
    var21 = var14.bind(var1)(var21);
    var21 = var21.DARK_PRIMARY_100_LIGHT_PRIMARY_500;
    var10['color'] = var21;
    var7['textOutlined'] = var10;
    var10 = {};
    var10['opacity'] = var20;
    var7['faded'] = var10;
    var10 = {};
    var20 = var15[var18];
    var20 = var19.bind(var1)(var20);
    var20 = var20.colors;
    var20 = var20.WHITE;
    var10['backgroundColor'] = var20;
    var7['buttonWhiteDarkDefault'] = var10;
    var10 = {};
    var18 = var15[var18];
    var18 = var19.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_LINK;
    var10['color'] = var18;
    var7['textLink'] = var10;
    var10 = {};
    var18 = var15[var17];
    var18 = var14.bind(var1)(var18);
    var18 = var18.DARK_PRIMARY_100_LIGHT_PRIMARY_500;
    var10['backgroundColor'] = var18;
    var7['buttonPrimaryDefault'] = var10;
    var10 = {};
    var18 = var15[var17];
    var18 = var14.bind(var1)(var18);
    var18 = var18.DARK_PRIMARY_100_LIGHT_PRIMARY_500;
    var10['backgroundColor'] = var18;
    var7['buttonPrimaryDarkDefault'] = var10;
    var10 = {};
    var18 = var15[var17];
    var18 = var14.bind(var1)(var18);
    var18 = var18.DARK_PRIMARY_500_LIGHT_PRIMARY_430;
    var10['backgroundColor'] = var18;
    var7['buttonGreyDefault'] = var10;
    var10 = {};
    var18 = var15[var17];
    var18 = var14.bind(var1)(var18);
    var18 = var18.DARK_PRIMARY_500_LIGHT_PRIMARY_100;
    var10['color'] = var18;
    var7['textPrimary'] = var10;
    var10 = {};
    var18 = var15[var17];
    var18 = var14.bind(var1)(var18);
    var18 = var18.DARK_PRIMARY_100_LIGHT_PRIMARY_500;
    var10['color'] = var18;
    var7['textTransparent'] = var10;
    var10 = {};
    var18 = var15[var17];
    var18 = var14.bind(var1)(var18);
    var18 = var18.BUTTON_PRIMARY_DISABLED_BACKGROUND;
    var10['backgroundColor'] = var18;
    var7['buttonPrimaryDisabled'] = var10;
    var10 = {};
    var18 = var15[var17];
    var18 = var14.bind(var1)(var18);
    var18 = var18.BUTTON_PRIMARY_DISABLED_BACKGROUND;
    var10['backgroundColor'] = var18;
    var7['buttonPrimaryDarkDisabled'] = var10;
    var10 = {};
    var17 = var15[var17];
    var17 = var14.bind(var1)(var17);
    var17 = var17.BUTTON_GREY_DISABLED_BACKGROUND;
    var10['backgroundColor'] = var17;
    var7['buttonGreyDisabled'] = var10;
    var10 = var8.bind(var9)(var7);
    var _closure1_slot11 = var10;
    var9 = {};
    var7 = 'filled';
    var9['FILLED'] = var7;
    var7 = 'link';
    var9['LINK'] = var7;
    var8 = 'outlined';
    var9['OUTLINED'] = var8;
    var _closure1_slot12 = var9;
    var8 = {};
    var17 = 'brand';
    var8['BRAND'] = var17;
    var17 = 'red';
    var8['RED'] = var17;
    var17 = 'green';
    var8['GREEN'] = var17;
    var17 = 'primary';
    var8['PRIMARY'] = var17;
    var8['TRANSPARENT'] = var16;
    var16 = 'grey';
    var8['GREY'] = var16;
    var16 = 'lightgrey';
    var8['LIGHTGREY'] = var16;
    var16 = 'white';
    var8['WHITE'] = var16;
    var8['LINK'] = var7;
    var _closure1_slot13 = var8;
    var7 = {};
    var16 = 'Default';
    var7['DEFAULT'] = var16;
    var16 = 'Disabled';
    var7['DISABLED'] = var16;
    var _closure1_slot14 = var7;
    var7 = {};
    var16 = 'xsmall';
    var7['XSMALL'] = var16;
    var16 = 'small';
    var7['SMALL'] = var16;
    var16 = 'medium';
    var7['MEDIUM'] = var16;
    var16 = 'large';
    var7['LARGE'] = var16;
    var _closure1_slot15 = var7;
    var12['Looks'] = var9;
    var12['Colors'] = var8;
    var12['Sizes'] = var7;
    var13 = 15;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'uikit-native/Button.tsx';
    var13 = var14.bind(var15)(var13);
    var3['default'] = var12;
    var3['BUTTON_CORNER_RADIUS'] = var11;
    var3['useButtonStyles'] = var10;
    var3['ButtonLooks'] = var9;
    var3['ButtonColors'] = var8;
    var3['ButtonSizes'] = var7;
    var3['getButtonStyles'] = var6;
    var3['ButtonText'] = var5;
    var3['getRedesignVariant'] = var4;
    var3['getRedesignSize'] = var2;
    return var1;
})();