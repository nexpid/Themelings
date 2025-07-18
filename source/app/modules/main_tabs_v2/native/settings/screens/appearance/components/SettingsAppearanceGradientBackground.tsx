// app/modules/main_tabs_v2/native/settings/screens/appearance/components/SettingsAppearanceGradientBackground.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var8 = native3;
        var3 = native6;
        var6 = native7;
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
        var9 = 0;
        var7 = var6[var9];
        var4 = native4;
        var1 = undefined;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot3 = var7;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.StyleSheet;
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
        var10 = var6[var4];
        var12 = var5.bind(var1)(var10);
        var11 = var12.processColor;
        var10 = 'rgba(0, 0, 0, 0)';
        var10 = var11.bind(var12)(var10);
        var11 = null;
        var11 = var11 != var10;
        if(!var11) { _fun0001_ip = 178; continue _fun0001 }
 175:
        var9 = var10;
 178:
        var4 = var6[var4];
        var10 = var8.bind(var1)(var4);
        var8 = var10.createAnimatedComponent;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.LinearGradientNativeComponent;
        var4 = var8.bind(var10)(var4);
        var _closure1_slot7 = var4;
        var4 = {};
        var8 = new Array(2);
        var8[0] = var9;
        var8[1] = var9;
        var4['colors'] = var8;
        var8 = new Array(0);
        var4['locations'] = var8;
        var8 = {'x': 0, 'y': 0};
        var4['startPoint'] = var8;
        var8 = {'x': 0, 'y': 0};
        var4['endPoint'] = var8;
        var _closure1_slot8 = var4;
        var4 = {};
        var8 = 'function SettingsAppearanceGradientBackgroundTsx1(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(_,i){return interpolate(tweener.get(),[0,1],[colorsPrev[i].stop/100,colorsCurrent[i].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}';
        var4['code'] = var8;
        var _closure1_slot9 = var4;
        var4 = var7.memo;
        var2 = function SettingsAppearanceGradientBackground(arg1) {
            var3 = arg1;
            var2 = var3.isDimmed;
            var _closure2_slot0 = var2;
            var8 = var3.themes;
            var _closure2_slot1 = var8;
            var6 = var3.themeIndex;
            var _closure2_slot2 = var6;
            var7 = _closure1_slot3;
            var4 = var7.useMemo;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var6;
            var3[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var1);
                    var5 = var6.convertThemesToAnimatedThemes;
                    var4 = _closure2_slot1;
                    var8 = _closure2_slot0;
                    var3 = undefined;
                    if(!var8) { _fun0002_ip = 57; continue _fun0002 }
 47:
                    var8 = _closure1_slot5;
                    var3 = var8.BACKGROUND_GRADIENT_DARK_OPACITY;
 57:
                    var8 = _closure2_slot0;
                    var2 = undefined;
                    if(!var8) { _fun0002_ip = 76; continue _fun0002 }
 66:
                    var7 = _closure1_slot5;
                    var2 = var7.BACKGROUND_GRADIENT_LIGHT_OPACITY;
 76:
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1 = _closure2_slot2;
                    var1 = var2[var1];
                    return var1;
                }
            };
            var3 = var4.bind(var7)(var2, var3);
            var2 = function useThemeStateTracker(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var8 = arg1;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.useLaunchWelcomeSystemTheme;
                    var7 = var2.bind(var3)();
                    var3 = var8.theme;
                    var2 = 'system';
                    if(!(var2 === var3)) { _fun0003_ip = 56; continue _fun0003 }
 53:
                    var8 = var7;
 56:
                    var _closure3_slot0 = var8;
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 4;
                    var3 = var9[var2];
                    var11 = var5.bind(var6)(var3);
                    var10 = var11.useSharedValue;
                    var3 = {};
                    var3['themePrev'] = var8;
                    var3['themeCurrent'] = var8;
                    var3 = var10.bind(var11)(var3);
                    var _closure3_slot1 = var3;
                    var2 = var9[var2];
                    var6 = var5.bind(var6)(var2);
                    var5 = var6.useSharedValue;
                    var2 = 0;
                    var2 = var5.bind(var6)(var2);
                    var _closure3_slot2 = var2;
                    var6 = _closure1_slot3;
                    var5 = var6.useEffect;
                    var4 = new Array(4);
                    var4[0] = var8;
                    var4[1] = var3;
                    var4[2] = var2;
                    var4[3] = var7;
                    var1 = function() {
                        var4 = _closure3_slot1;
                        var3 = var4.set;
                        var2 = {};
                        var6 = _closure3_slot1;
                        var5 = var6.get;
                        var5 = var5.bind(var6)();
                        var5 = var5.themeCurrent;
                        var2['themePrev'] = var5;
                        var5 = _closure3_slot0;
                        var2['themeCurrent'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure3_slot2;
                        var3 = var4.set;
                        var2 = 0;
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure3_slot2;
                        var3 = var4.set;
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 7;
                        var2 = var8[var1];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var2);
                        var6 = var7.withTiming;
                        var2 = 8;
                        var2 = var8[var2];
                        var2 = var5.bind(var1)(var2);
                        var5 = var2.timingStandard;
                        var2 = 1;
                        var2 = var6.bind(var7)(var2, var5);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = {};
                    var1['themeState'] = var3;
                    var1['tweener'] = var2;
                    return var1;
                }
            };
            var4 = undefined;
            var2 = var2.bind(var4)(var3);
            var12 = var2.themeState;
            var _closure2_slot3 = var12;
            var11 = var2.tweener;
            var _closure2_slot4 = var11;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 4;
            var2 = var10[var8];
            var6 = var9.bind(var4)(var2);
            var3 = var6.useSharedValue;
            var2 = {'width': 0, 'height': 0};
            var13 = var3.bind(var6)(var2);
            var _closure2_slot5 = var13;
            var6 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = var1.nativeEvent;
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = {};
                var5 = var4.layout;
                var5 = var5.width;
                var1['width'] = var5;
                var4 = var4.layout;
                var4 = var4.height;
                var1['height'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var7 = var6.bind(var7)(var2, var3);
            var2 = var10[var8];
            var3 = var9.bind(var4)(var2);
            var2 = var3.useAnimatedProps;
            var1 = function P() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var8 = var1.width;
                    var4 = var1.height;
                    var7 = 0;
                    if(!(var7 !== var8)) { _fun0004_ip = 349; continue _fun0004 }
 37:
                    if(!(var7 !== var4)) { _fun0004_ip = 349; continue _fun0004 }
 44:
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = var1.themePrev;
                    var5 = var3.colors;
                    var _closure3_slot0 = var5;
                    var14 = var3.angle;
                    var1 = var1.themeCurrent;
                    var3 = var1.colors;
                    var _closure3_slot1 = var3;
                    var3 = var1.angle;
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 4;
                    var11 = var10[var6];
                    var6 = undefined;
                    var13 = var12.bind(var6)(var11);
                    var12 = var13.interpolate;
                    var11 = _closure2_slot4;
                    var9 = var11.get;
                    var11 = var9.bind(var11)();
                    var9 = new Array(2);
                    var9[0] = var14;
                    var9[1] = var3;
                    var3 = [0, 1];
                    var9 = var12.bind(var13)(var11, var3, var9);
                    var3 = 90;
                    var3 = var3 - var9;
                    var9 = _closure1_slot1;
                    var1 = 9;
                    var1 = var10[var1];
                    var1 = var9.bind(var6)(var1);
                    var6 = var1.bind(var6)(var3, var8, var4);
                    var1 = {};
                    var9 = var5.map;
                    var3 = function(arg1, arg2) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var8 = arg2;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 4;
                            var2 = var6[var1];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var2);
                            var2 = var3.processColor;
                            var1 = var6[var1];
                            var7 = var5.bind(var4)(var1);
                            var6 = var7.interpolateColor;
                            var4 = _closure2_slot4;
                            var1 = var4.get;
                            var5 = var1.bind(var4)();
                            var4 = _closure3_slot0;
                            var4 = var4[var8];
                            var9 = var4.hex;
                            var4 = new Array(2);
                            var4[0] = var9;
                            var1 = _closure3_slot1;
                            var1 = var1[var8];
                            var1 = var1.hex;
                            var4[1] = var1;
                            var1 = [0, 1];
                            var1 = var6.bind(var7)(var5, var1, var4);
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            var3 = var1 != var2;
                            var1 = 0;
                            if(!var3) { _fun0005_ip = 142; continue _fun0005 }
 139:
                            var1 = var2;
 142:
                            return var1;
                        }
                    };
                    var3 = var9.bind(var5)(var3);
                    var1['colors'] = var3;
                    var3 = var5.map;
                    var2 = function(arg1, arg2) {
                        var7 = arg2;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.interpolate;
                        var2 = _closure2_slot4;
                        var1 = var2.get;
                        var3 = var1.bind(var2)();
                        var2 = _closure3_slot0;
                        var2 = var2[var7];
                        var2 = var2.stop;
                        var6 = 100;
                        var8 = var2 / var6;
                        var2 = new Array(2);
                        var2[0] = var8;
                        var1 = _closure3_slot1;
                        var1 = var1[var7];
                        var1 = var1.stop;
                        var1 = var1 / var6;
                        var2[1] = var1;
                        var1 = [0, 1];
                        var1 = var4.bind(var5)(var3, var1, var2);
                        return var1;
                    };
                    var2 = var3.bind(var5)(var2);
                    var1['locations'] = var2;
                    var2 = {};
                    var5 = 2;
                    var9 = var8 / var5;
                    var3 = var6[var7];
                    var3 = var9 + var3;
                    var3 = var3 / var8;
                    var2['x'] = var3;
                    var10 = var4 / var5;
                    var3 = 1;
                    var9 = var6[var3];
                    var9 = var10 - var9;
                    var9 = var9 / var4;
                    var2['y'] = var9;
                    var1['startPoint'] = var2;
                    var2 = {};
                    var9 = var8 / var5;
                    var7 = var6[var7];
                    var7 = var9 - var7;
                    var7 = var7 / var8;
                    var2['x'] = var7;
                    var5 = var4 / var5;
                    var3 = var6[var3];
                    var3 = var5 + var3;
                    var3 = var3 / var4;
                    var2['y'] = var3;
                    var1['endPoint'] = var2;
                    return var1;
 349:
                    var1 = _closure1_slot8;
                    return var1;
                }
            };
            var6 = {};
            var6['gradientSize'] = var13;
            var13 = _closure1_slot8;
            var6['animatedLinearGradientLoadingProps'] = var13;
            var6['themeState'] = var12;
            var12 = var10[var8];
            var12 = var9.bind(var4)(var12);
            var12 = var12.interpolate;
            var6['interpolate'] = var12;
            var6['tweener'] = var11;
            var12 = _closure1_slot1;
            var11 = 9;
            var11 = var10[var11];
            var11 = var12.bind(var4)(var11);
            var6['getGradientStartPoint'] = var11;
            var11 = var10[var8];
            var11 = var9.bind(var4)(var11);
            var11 = var11.processColor;
            var6['processColor'] = var11;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.interpolateColor;
            var6['interpolateColor'] = var8;
            var1['__closure'] = var6;
            var6 = 5151435414824.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot9;
            var1['__initData'] = var6;
            var6 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot7;
            var1 = {};
            var8 = _closure1_slot4;
            var8 = var8.absoluteFill;
            var1['style'] = var8;
            var1['onLayout'] = var7;
            var14 = _closure1_slot8;
            var15 = var1;
            var5 = copyDataProperties(var15, var14);
            var5 = 'animatedProps';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var4.bind(var7)(var2);
        var4 = 10;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/settings/screens/appearance/components/SettingsAppearanceGradientBackground.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();