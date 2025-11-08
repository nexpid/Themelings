// app/design/components/Card/native/Card.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function getCardBackgroundToken(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 'primary';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'secondary';
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'transparent';
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = undefined;
            return var1;
case 6:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.unsafe_rawColors;
            var1 = var1.TRANSPARENT;
            return var1;
case 4:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.CARD_SECONDARY_BG;
            return var1;
case 2:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.CARD_PRIMARY_BG;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var2 = function Card(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var9 = var5.start;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var9 = true;
case 8:
            var8 = var5.end;
            if(!(var8 === var4)) { _fun0002_ip = 7; continue _fun0002 }
case 10:
            var8 = true;
case 7:
            var7 = var5.shadow;
            if(!(var7 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = 'none';
case 11:
            var6 = var5.border;
            if(!(var6 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var6 = 'faint';
case 13:
            var3 = var5.variant;
            if(!(var3 === var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = 'primary';
case 15:
            var2 = {'start': 0, 'end': 0, 'shadow': 0, 'border': 0, 'variant': 0};
            var10 = null;
            var17 = var2;
            var16 = null;
            var1 = silentSetPrototypeOf(var17, var16);
            var17 = {};
            var16 = var5;
            var15 = var2;
            var5 = copyDataProperties(var17, var16, var15);
            var2 = _closure1_slot10;
            var18 = undefined;
            var17 = var9;
            var16 = var8;
            var15 = var3;
            var14 = var7;
            var13 = var6;
            var2 = var18[var2](var17, var16, var15, var14, var13, var12);
            var6 = var2.spacing;
            var7 = new Array(3);
            var7[0] = var6;
            var6 = var5.style;
            var7[1] = var6;
            var2 = var2.card;
            var7[2] = var2;
            var2 = 'onPress';
            var2 = var2 in var5;
            var6 = var3;
            if(!var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = var5.onPress;
            if(!(var10 == var2)) { _fun0002_ip = 19; continue _fun0002 }
case 17:
            var11 = _closure1_slot7;
            var3 = _closure1_slot6;
            var2 = {};
            var17 = var2;
            var16 = var5;
            var12 = copyDataProperties(var17, var16);
            var12 = 'style';
            var2[var12] = var7;
            var2 = var11.bind(var4)(var3, var2);
            return var2;
case 19:
            var11 = var5.accessibilityRole;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var5 = var3.bind(var4)(var5, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot13;
            var1 = {};
            var12 = var10 != var11;
            var10 = 'button';
            if(!var12) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var10 = var11;
case 20:
            var1['accessibilityRole'] = var10;
            var17 = var1;
            var16 = var5;
            var5 = copyDataProperties(var17, var16);
            var5 = 'start';
            var1[var5] = var9;
            var5 = 'end';
            var1[var5] = var8;
            var5 = 'style';
            var1[var5] = var7;
            var5 = 'variant';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var1 = function PressableCard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.isAndroid;
            var1 = var1.bind(var5)();
            if(var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = function PressableCardiOS(arg1) {
                var7 = arg1;
                var6 = var7.children;
                var8 = var7.style;
                var5 = var7.variant;
                var9 = var7.onPressIn;
                var _closure3_slot0 = var9;
                var3 = var7.onPressOut;
                var _closure3_slot1 = var3;
                var1 = var7.start;
                var1 = var7.end;
                var4 = {'children': 0, 'style': 0, 'variant': 0, 'onPressIn': 0, 'onPressOut': 0, 'start': 0, 'end': 0};
                var20 = null;
                var21 = var4;
                var1 = silentSetPrototypeOf(var21, var20);
                var12 = 0;
                var21 = {};
                var20 = var7;
                var19 = var4;
                var7 = copyDataProperties(var21, var20, var19);
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var17 = 4;
                var10 = var14[var17];
                var4 = undefined;
                var11 = var13.bind(var4)(var10);
                var10 = var11.useSharedValue;
                var16 = var10.bind(var11)(var12);
                var _closure3_slot2 = var16;
                var12 = _closure1_slot5;
                var11 = var12.useCallback;
                var10 = new Array(2);
                var10[0] = var16;
                var10[1] = var9;
                var9 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = _closure3_slot2;
                        var3 = var4.set;
                        var2 = 1;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
case 24:
                        var1 = undefined;
                        return var1;
                    }
                };
                var10 = var11.bind(var12)(var9, var10);
                var12 = _closure1_slot5;
                var11 = var12.useCallback;
                var9 = new Array(2);
                var9[0] = var16;
                var9[1] = var3;
                var3 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = _closure3_slot2;
                        var3 = var4.set;
                        var2 = 0;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                        var3 = _closure3_slot1;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
case 26:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var11.bind(var12)(var3, var9);
                var3 = _closure1_slot9;
                var3 = var3.bind(var4)(var5);
                var15 = var3.backgroundColor;
                var _closure3_slot3 = var15;
                var12 = var3.backgroundColorPressed;
                var _closure3_slot4 = var12;
                var3 = var14[var17];
                var5 = var13.bind(var4)(var3);
                var3 = var5.useAnimatedStyle;
                var2 = function f() {
                    var1 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var2);
                    var5 = var6.withSpring;
                    var2 = 4;
                    var2 = var8[var2];
                    var11 = var7.bind(var3)(var2);
                    var10 = var11.interpolateColor;
                    var9 = _closure3_slot2;
                    var4 = var9.get;
                    var9 = var4.bind(var9)();
                    var12 = _closure3_slot3;
                    var4 = new Array(2);
                    var4[0] = var12;
                    var2 = _closure3_slot4;
                    var4[1] = var2;
                    var2 = [0, 1];
                    var4 = var10.bind(var11)(var9, var2, var4);
                    var2 = 10;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var3 = var2.ON_PRESS_SPRING;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['backgroundColor'] = var2;
                    return var1;
                };
                var11 = {};
                var18 = 9;
                var18 = var14[var18];
                var18 = var13.bind(var4)(var18);
                var18 = var18.withSpring;
                var11['withSpring'] = var18;
                var17 = var14[var17];
                var17 = var13.bind(var4)(var17);
                var17 = var17.interpolateColor;
                var11['interpolateColor'] = var17;
                var11['pressed'] = var16;
                var11['backgroundColor'] = var15;
                var11['backgroundColorPressed'] = var12;
                var12 = 10;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.ON_PRESS_SPRING;
                var11['ON_PRESS_SPRING'] = var12;
                var2['__closure'] = var11;
                var11 = 14943431549291.0;
                var2['__workletHash'] = var11;
                var11 = _closure1_slot11;
                var2['__initData'] = var11;
                var5 = var3.bind(var5)(var2);
                var3 = _closure1_slot7;
                var2 = _closure1_slot8;
                var1 = {};
                var21 = var1;
                var20 = var7;
                var7 = copyDataProperties(var21, var20);
                var7 = 'onPressIn';
                var1[var7] = var10;
                var7 = 'onPressOut';
                var1[var7] = var9;
                var7 = new Array(2);
                var7[0] = var8;
                var7[1] = var5;
                var5 = 'style';
                var1[var5] = var7;
                var7 = 130;
                var5 = 'unstable_pressDelay';
                var1[var5] = var7;
                var5 = 'children';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var1.bind(var3)(var4);
            _fun0003_ip = 28; continue _fun0003;
case 22:
            var2 = function PressableCardAndroid(arg1) {
                var4 = arg1;
                var6 = var4.children;
                var9 = var4.start;
                var _closure3_slot0 = var9;
                var8 = var4.end;
                var _closure3_slot1 = var8;
                var3 = {'children': 0, 'start': 0, 'end': 0};
                var11 = null;
                var12 = var3;
                var1 = silentSetPrototypeOf(var12, var11);
                var12 = {};
                var11 = var4;
                var10 = var3;
                var5 = copyDataProperties(var12, var11, var10);
                var7 = _closure1_slot5;
                var4 = var7.useMemo;
                var3 = new Array(2);
                var3[0] = var9;
                var3[1] = var8;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = {};
                        var3 = _closure3_slot0;
                        if(var3) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                        var3 = _closure3_slot1;
                        var2 = 0;
                        if(!var3) { _fun0006_ip = 13; continue _fun0006 }
case 29:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 5;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var3 = var3.radii;
                        var2 = var3.lg;
case 13:
                        var1['cornerRadius'] = var2;
                        return var1;
                    }
                };
                var7 = var4.bind(var7)(var2, var3);
                var4 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.AnimatedPressableHighlight;
                var1 = {};
                var1['androidRippleConfig'] = var7;
                var12 = var1;
                var11 = var5;
                var5 = copyDataProperties(var12, var11);
                var5 = 'children';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var4);
case 28:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = ['accessibilityRole'];
    var _closure1_slot3 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var9 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var9);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot6 = var9;
    var9 = var4.Pressable;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var8.bind(var1)(var4);
    var4 = var8.createAnimatedComponent;
    var4 = var4.bind(var8)(var9);
    var _closure1_slot8 = var4;
    var4 = 7;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyleProperties;
    var8 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot12;
            var5 = undefined;
            var3 = var2.bind(var5)(var6);
            var2 = 'primary';
            if(!(var2 !== var6)) { _fun0007_ip = 31; continue _fun0007 }
case 10:
            var2 = 'secondary';
            if(!(var2 !== var6)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var4 = 'transparent';
            var2 = undefined;
            if(!(var4 === var6)) { _fun0007_ip = 34; continue _fun0007 }
case 26:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 5;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.unsafe_rawColors;
            var2 = var4.TRANSPARENT;
            _fun0007_ip = 34; continue _fun0007;
case 32:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var2 = var4.CARD_SECONDARY_PRESSED_BG;
            _fun0007_ip = 34; continue _fun0007;
case 31:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var2 = var1.CARD_PRIMARY_PRESSED_BG;
case 34:
            var1 = {};
            var1['backgroundColor'] = var3;
            var1['backgroundColorPressed'] = var2;
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot9 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2, arg3, arg4, arg5) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var8 = arg1;
            var9 = arg2;
            var6 = arg5;
            var2 = _closure1_slot12;
            var10 = undefined;
            var1 = arg3;
            var4 = var2.bind(var10)(var1);
            var2 = null;
            var3 = 'none';
            var1 = null;
            if(!(var3 !== var6)) { _fun0008_ip = 35; continue _fun0008 }
case 11:
            var7 = 'subtle';
            if(!(var7 !== var6)) { _fun0008_ip = 36; continue _fun0008 }
case 14:
            var7 = 'strong';
            if(!(var7 !== var6)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
            var7 = 'faint';
            if(!(var7 !== var6)) { _fun0008_ip = 39; continue _fun0008 }
case 4:
            var1 = undefined;
            _fun0008_ip = 35; continue _fun0008;
case 39:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 5;
            var7 = var12[var7];
            var7 = var11.bind(var10)(var7);
            var7 = var7.colors;
            var1 = var7.BORDER_FAINT;
            _fun0008_ip = 35; continue _fun0008;
case 37:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 5;
            var7 = var12[var7];
            var7 = var11.bind(var10)(var7);
            var7 = var7.colors;
            var1 = var7.BORDER_STRONG;
            _fun0008_ip = 35; continue _fun0008;
case 36:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 5;
            var7 = var12[var7];
            var7 = var11.bind(var10)(var7);
            var7 = var7.colors;
            var1 = var7.BORDER_SUBTLE;
case 35:
            var7 = var4;
            if(!(var2 != var1)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
            var7 = var1;
case 40:
            var1 = {};
            var2 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 6;
            var11 = var13[var11];
            var13 = var12.bind(var10)(var11);
            var12 = var13.createCardShadowToken;
            var11 = arg4;
            var15 = var12.bind(var13)(var11);
            var16 = var2;
            var11 = copyDataProperties(var16, var15);
            var12 = undefined;
            if(!var8) { _fun0008_ip = 42; continue _fun0008 }
case 43:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 5;
            var11 = var14[var11];
            var11 = var13.bind(var10)(var11);
            var11 = var11.radii;
            var12 = var11.lg;
case 42:
            var11 = 'borderTopStartRadius';
            var2[var11] = var12;
            var11 = undefined;
            if(!var8) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 5;
            var8 = var13[var8];
            var8 = var12.bind(var10)(var8);
            var8 = var8.radii;
            var11 = var8.lg;
case 44:
            var8 = 'borderTopEndRadius';
            var2[var8] = var11;
            var11 = undefined;
            if(!var9) { _fun0008_ip = 46; continue _fun0008 }
case 47:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 5;
            var8 = var13[var8];
            var8 = var12.bind(var10)(var8);
            var8 = var8.radii;
            var11 = var8.lg;
case 46:
            var8 = 'borderBottomStartRadius';
            var2[var8] = var11;
            var8 = undefined;
            if(!var9) { _fun0008_ip = 48; continue _fun0008 }
case 49:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 5;
            var5 = var11[var5];
            var5 = var9.bind(var10)(var5);
            var5 = var5.radii;
            var8 = var5.lg;
case 48:
            var5 = 'borderBottomEndRadius';
            var2[var5] = var8;
            var5 = 'borderColor';
            var2[var5] = var7;
            var5 = 0;
            if(!(var3 !== var6)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
            var5 = 1;
case 50:
            var3 = 'borderWidth';
            var2[var3] = var5;
            var3 = 'backgroundColor';
            var2[var3] = var4;
            var1['card'] = var2;
            var2 = {};
            var3 = 16;
            var2['padding'] = var3;
            var1['spacing'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = "function CardNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};}";
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Card/native/Card.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['Card'] = var2;
    var3['InternalCard'] = var2;
    return var1;
})();