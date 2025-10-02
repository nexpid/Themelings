// app/design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function useBlurTheme(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.useThemeContext;
            var1 = var1.bind(var3)();
            var1 = var1.theme;
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function useBlurStyle(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot3;
            var4 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = 'ultra-thin';
                    var2 = 'light';
                    if(!(var2 === var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = 'default';
case 4:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1, var3);
            var3 = null;
            if(!(var3 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function useBlurTintRgba(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot3;
            var4 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = 'light';
                    if(!(var1 !== var2)) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.hexToRgbaString;
                    var1 = _closure1_slot8;
                    var1 = var2.bind(var3)(var1);
                    _fun0005_ip = 10; continue _fun0005;
case 8:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 4;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.hexToRgbaString;
                    var2 = _closure1_slot6;
                    var1 = var3.bind(var4)(var2);
case 10:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1, var3);
            var3 = null;
            if(!(var3 != var2)) { _fun0004_ip = 6; continue _fun0004 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function useBlurFallback(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var4 = var5.useToken;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var1 = var3.bind(var6)(var1);
            var1 = var1.colors;
            var3 = var1.BLUR_FALLBACK;
            var1 = arg1;
            var1 = var4.bind(var5)(var3, var1);
            var3 = null;
            if(!(var3 != var2)) { _fun0006_ip = 11; continue _fun0006 }
case 12:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var8 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StyleSheet;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.unsafe_rawColors;
    var9 = var4.BLACK_500;
    var4 = 4;
    var7 = var6[var4];
    var8 = var5.bind(var1)(var7);
    var7 = var8.hexWithOpacity;
    var7 = var7.bind(var8)(var9, var10);
    var _closure1_slot6 = var7;
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var8 = var10.hexWithOpacity;
    var7 = 0.2;
    var7 = var8.bind(var10)(var9, var7);
    var _closure1_slot7 = var7;
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var8 = var10.hexWithOpacity;
    var7 = 0.4;
    var7 = var8.bind(var10)(var9, var7);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.hexWithOpacity;
    var4 = 0.5;
    var4 = var7.bind(var8)(var9, var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = "function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}";
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = "function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,blurTint,blurTintPressed,ON_PRESS_SPRING}=this.__closure;return{blurTintRgba:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[blurTint,blurTintPressed]),ON_PRESS_SPRING,'animate-always')};}";
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.fileFinishedImporting;
    var4 = 'design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx';
    var4 = var7.bind(var8)(var4);
    var4 = 7;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var7 = var7.BlurTheme;
    var3['BlurTheme'] = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BlurStyle;
    var3['BlurStyle'] = var4;
    var4 = function BackgroundBlurFill(arg1) {
        var1 = arg1;
        var6 = var1.style;
        var11 = var1.blurTheme;
        var8 = var1.blurStyle;
        var10 = var1.blurAmount;
        var3 = var1.blurTintRgba;
        var2 = var1.android_fallbackColor;
        var7 = var1.android_blurTargetViewNativeId;
        var1 = _closure1_slot13;
        var9 = _closure1_slot12;
        var4 = undefined;
        var12 = var9.bind(var4)(var11);
        var11 = var1.bind(var4)(var12, var8);
        var1 = _closure1_slot14;
        var9 = var1.bind(var4)(var12, var3);
        var1 = _closure1_slot15;
        var8 = var1.bind(var4)(var12, var2);
        var3 = _closure1_slot5;
        var2 = _closure1_slot1;
        var13 = _closure1_slot2;
        var1 = 7;
        var1 = var13[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['blurTheme'] = var12;
        var1['blurStyle'] = var11;
        var1['blurAmount'] = var10;
        var1['blurTintRgba'] = var9;
        var1['android_fallbackColor'] = var8;
        var1['android_blurTargetViewNativeId'] = var7;
        var5 = _closure1_slot4;
        var7 = var5.absoluteFill;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['BackgroundBlurFill'] = var4;
    var4 = function BackgroundBlurFillAnimated(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var6 = var1.style;
            var12 = var1.blurTheme;
            var9 = var1.blurStyle;
            var11 = var1.blurAmount;
            var3 = var1.blurTintRgba;
            var2 = var1.android_fallbackColor;
            var8 = var1.android_blurTargetViewNativeId;
            var7 = var1.animatedProps;
            var1 = _closure1_slot13;
            var10 = _closure1_slot12;
            var4 = undefined;
            var13 = var10.bind(var4)(var12);
            var12 = var1.bind(var4)(var13, var9);
            var1 = _closure1_slot14;
            var10 = var1.bind(var4)(var13, var3);
            var1 = _closure1_slot15;
            var9 = var1.bind(var4)(var13, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 8;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['blurTheme'] = var13;
            var1['blurStyle'] = var12;
            var1['blurAmount'] = var11;
            var1['blurTintRgba'] = var10;
            var1['android_fallbackColor'] = var9;
            var1['android_blurTargetViewNativeId'] = var8;
            var5 = _closure1_slot4;
            var8 = var5.absoluteFill;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var6;
            var1['style'] = var5;
            var5 = null;
            var5 = var5 != var7;
            if(!var5) { _fun0007_ip = 13; continue _fun0007 }
case 14:
            var6 = {};
            var6['animatedProps'] = var7;
            var5 = var6;
case 13:
            var16 = var1;
            var15 = var5;
            var5 = copyDataProperties(var16, var15);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['BackgroundBlurFillAnimated'] = var4;
    var2 = function BackgroundBlurFillWithPress(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var9 = var5.style;
            var3 = var5.blurTheme;
            var18 = var5.pressed;
            var _closure2_slot0 = var18;
            var4 = {'style': 0, 'blurTheme': 0, 'pressed': 0};
            var24 = null;
            var25 = var4;
            var2 = silentSetPrototypeOf(var25, var24);
            var25 = {};
            var24 = var5;
            var23 = var4;
            var7 = copyDataProperties(var25, var24, var23);
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot12;
            var11 = var2.bind(var4)(var3);
            var2 = _closure1_slot13;
            var10 = var2.bind(var4)(var11, var4);
            var2 = 'light';
            var2 = var2 === var11;
            if(var2) { _fun0008_ip = 15; continue _fun0008 }
case 16:
            var17 = _closure1_slot8;
            _fun0008_ip = 17; continue _fun0008;
case 15:
            var17 = _closure1_slot6;
case 17:
            _closure2_slot1 = var17;
            if(var2) { _fun0008_ip = 18; continue _fun0008 }
case 19:
            var16 = _closure1_slot9;
            _fun0008_ip = 20; continue _fun0008;
case 18:
            var16 = _closure1_slot7;
case 20:
            _closure2_slot2 = var16;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 6;
            var2 = var12[var5];
            var14 = var15.bind(var4)(var2);
            var13 = var14.useToken;
            var2 = _closure1_slot1;
            var3 = 3;
            var8 = var12[var3];
            var8 = var2.bind(var4)(var8);
            var8 = var8.colors;
            var8 = var8.BLUR_FALLBACK;
            var21 = var13.bind(var14)(var8, var11);
            _closure2_slot3 = var21;
            var5 = var12[var5];
            var8 = var15.bind(var4)(var5);
            var5 = var8.useToken;
            var3 = var12[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BLUR_FALLBACK_PRESSED;
            var14 = var5.bind(var8)(var3, var11);
            _closure2_slot4 = var14;
            var3 = 7;
            var3 = var12[var3];
            var5 = var15.bind(var4)(var3);
            var3 = var5.isBlurDisabled;
            var5 = var3.bind(var5)(var7);
            _closure2_slot5 = var5;
            var19 = 9;
            var3 = var12[var19];
            var8 = var15.bind(var4)(var3);
            var7 = var8.useAnimatedStyle;
            var3 = function p() {
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 10;
                var2 = var8[var2];
                var3 = undefined;
                var6 = var7.bind(var3)(var2);
                var5 = var6.withSpring;
                var2 = 9;
                var2 = var8[var2];
                var11 = var7.bind(var3)(var2);
                var10 = var11.interpolateColor;
                var9 = _closure2_slot0;
                var4 = var9.get;
                var9 = var4.bind(var9)();
                var12 = _closure2_slot3;
                var4 = new Array(2);
                var4[0] = var12;
                var2 = _closure2_slot4;
                var4[1] = var2;
                var2 = [0, 1];
                var4 = var10.bind(var11)(var9, var2, var4);
                var2 = 11;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var3 = var2.ON_PRESS_SPRING;
                var2 = 'animate-always';
                var2 = var5.bind(var6)(var4, var3, var2);
                var1['backgroundColor'] = var2;
                return var1;
            };
            var13 = {};
            var20 = 10;
            var22 = var12[var20];
            var22 = var15.bind(var4)(var22);
            var22 = var22.withSpring;
            var13['withSpring'] = var22;
            var22 = var12[var19];
            var22 = var15.bind(var4)(var22);
            var22 = var22.interpolateColor;
            var13['interpolateColor'] = var22;
            var13['pressed'] = var18;
            var13['fallbackColor'] = var21;
            var13['fallbackColorPressed'] = var14;
            var14 = 11;
            var21 = var12[var14];
            var21 = var15.bind(var4)(var21);
            var21 = var21.ON_PRESS_SPRING;
            var13['ON_PRESS_SPRING'] = var21;
            var3['__closure'] = var13;
            var13 = 10497618157620.0;
            var3['__workletHash'] = var13;
            var13 = _closure1_slot10;
            var3['__initData'] = var13;
            var8 = var7.bind(var8)(var3);
            var3 = var12[var19];
            var7 = var15.bind(var4)(var3);
            var3 = var7.useAnimatedProps;
            var1 = function T() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot5;
                    var8 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0009_ip = 21; continue _fun0009 }
case 22:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 10;
                    var5 = var9[var5];
                    var7 = var4.bind(var8)(var5);
                    var6 = var7.withSpring;
                    var5 = 9;
                    var5 = var9[var5];
                    var12 = var4.bind(var8)(var5);
                    var11 = var12.interpolateColor;
                    var10 = _closure2_slot0;
                    var5 = var10.get;
                    var10 = var5.bind(var10)();
                    var13 = _closure2_slot1;
                    var5 = new Array(2);
                    var5[0] = var13;
                    var3 = _closure2_slot2;
                    var5[1] = var3;
                    var3 = [0, 1];
                    var5 = var11.bind(var12)(var10, var3, var5);
                    var3 = 11;
                    var3 = var9[var3];
                    var3 = var4.bind(var8)(var3);
                    var4 = var3.ON_PRESS_SPRING;
                    var3 = 'animate-always';
                    var2 = var6.bind(var7)(var5, var4, var3);
case 21:
                    var1['blurTintRgba'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['shouldUseFallback'] = var5;
            var20 = var12[var20];
            var20 = var15.bind(var4)(var20);
            var20 = var20.withSpring;
            var13['withSpring'] = var20;
            var19 = var12[var19];
            var19 = var15.bind(var4)(var19);
            var19 = var19.interpolateColor;
            var13['interpolateColor'] = var19;
            var13['pressed'] = var18;
            var13['blurTint'] = var17;
            var13['blurTintPressed'] = var16;
            var14 = var12[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.ON_PRESS_SPRING;
            var13['ON_PRESS_SPRING'] = var14;
            var1['__closure'] = var13;
            var13 = 3902745666351.0;
            var1['__workletHash'] = var13;
            var13 = _closure1_slot11;
            var1['__initData'] = var13;
            var7 = var3.bind(var7)(var1);
            var3 = _closure1_slot5;
            var1 = 8;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['blurTheme'] = var11;
            var1['blurStyle'] = var10;
            var6 = _closure1_slot4;
            var10 = var6.absoluteFill;
            var6 = new Array(3);
            var6[0] = var10;
            var6[1] = var9;
            if(var5) { _fun0008_ip = 23; continue _fun0008 }
case 24:
            var8 = {};
case 23:
            var6[2] = var8;
            var1['style'] = var6;
            var5 = !var5;
            if(!var5) { _fun0008_ip = 25; continue _fun0008 }
case 26:
            var6 = {};
            var6['animatedProps'] = var7;
            var5 = var6;
case 25:
            var25 = var1;
            var24 = var5;
            var5 = copyDataProperties(var25, var24);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['BackgroundBlurFillWithPress'] = var2;
    return var1;
})();