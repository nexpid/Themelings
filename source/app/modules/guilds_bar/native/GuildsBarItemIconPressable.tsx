// app/modules/guilds_bar/native/GuildsBarItemIconPressable.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.Image;
    var11 = var4.Pressable;
    var14 = 2;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var13 = var4.GUILD_ITEM_SIZE;
    var15 = var4.GUILD_ITEM_PADDING;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 4;
    var8 = var6[var4];
    var10 = var12.bind(var1)(var8);
    var8 = var10.createAnimatedComponent;
    var8 = var8.bind(var10)(var11);
    var _closure1_slot4 = var8;
    var4 = var6[var4];
    var8 = var12.bind(var1)(var4);
    var4 = var8.createAnimatedComponent;
    var4 = var4.bind(var8)(var9);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 6;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_ACCENT;
    var10['backgroundColor'] = var16;
    var4['iconBackground'] = var10;
    var10 = {};
    var10['marginTop'] = var15;
    var10['width'] = var13;
    var10['height'] = var13;
    var13 = var13 / var14;
    var10['borderRadius'] = var13;
    var13 = 'center';
    var10['justifyContent'] = var13;
    var10['alignItems'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var13;
    var4['icon'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['color'] = var13;
    var4['iconColor'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_360;
    var10['color'] = var13;
    var4['iconColorActive'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.ICON_SECONDARY;
    var10['color'] = var11;
    var4['iconColorDesaturated'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var8 = 'function GuildsBarItemIconPressableTsx1(){const{stylesClientThemeOverride,styles,withTiming,active,desaturated,timingStandard}=this.__closure;var _stylesClientThemeOve,_stylesClientThemeOve2;const defaultBackgroundColor=(_stylesClientThemeOve=(_stylesClientThemeOve2=stylesClientThemeOverride)===null||_stylesClientThemeOve2===void 0?void 0:_stylesClientThemeOve2.backgroundColor)!==null&&_stylesClientThemeOve!==void 0?_stylesClientThemeOve:styles.icon.backgroundColor;return{backgroundColor:withTiming(active.get()?desaturated?styles.iconColorDesaturated.color:styles.iconColorActive.color:defaultBackgroundColor,timingStandard)};}';
    var4['code'] = var8;
    var _closure1_slot7 = var4;
    var4 = {};
    var8 = 'function GuildsBarItemIconPressableTsx2(){const{withTiming,active,styles,desaturated,timingNone,timingStandard}=this.__closure;return{tintColor:withTiming(active.get()?styles.iconColor.color:desaturated?styles.iconColorDesaturated.color:styles.iconColorActive.color,active.get()?timingNone:timingStandard)};}';
    var4['code'] = var8;
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarItemIconPresable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.iconSource;
            var20 = var2.desaturated;
            var4 = undefined;
            if(!(var20 === var4)) { _fun0001_ip = 25; continue _fun0001 }
 23:
            var20 = false;
 25:
            var _closure2_slot0 = var20;
            var10 = var2.onPress;
            var11 = var2.onLayout;
            var12 = var2.accessibilityLabel;
            var15 = var2.style;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot6;
            var13 = var2.bind(var4)();
            _closure2_slot1 = var13;
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var2 = 7;
            var2 = var19[var2];
            var6 = var18.bind(var4)(var2);
            var3 = var6.useClientThemesOverride;
            var2 = var13.iconBackground;
            var16 = var3.bind(var6)(var2);
            _closure2_slot2 = var16;
            var2 = 4;
            var3 = var19[var2];
            var7 = var18.bind(var4)(var3);
            var6 = var7.useSharedValue;
            var3 = false;
            var21 = var6.bind(var7)(var3);
            _closure2_slot3 = var21;
            var14 = _closure1_slot2;
            var7 = var14.useCallback;
            var6 = new Array(1);
            var6[0] = var21;
            var3 = function() {
                var3 = _closure2_slot3;
                var2 = var3.set;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var7.bind(var14)(var3, var6);
            var7 = var14.useCallback;
            var6 = new Array(1);
            var6[0] = var21;
            var3 = function() {
                var3 = _closure2_slot3;
                var2 = var3.set;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var14)(var3, var6);
            var3 = var19[var2];
            var14 = var18.bind(var4)(var3);
            var7 = var14.useAnimatedStyle;
            var3 = function b() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    var2 = var1 == var2;
                    var7 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0002_ip = 29; continue _fun0002 }
 20:
                    var2 = _closure2_slot2;
                    var5 = var2.backgroundColor;
 29:
                    if(!(var1 == var5)) { _fun0002_ip = 47; continue _fun0002 }
 33:
                    var1 = _closure2_slot1;
                    var1 = var1.icon;
                    var5 = var1.backgroundColor;
 47:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 8;
                    var3 = var6[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.withTiming;
                    var9 = _closure2_slot3;
                    var6 = var9.get;
                    var6 = var6.bind(var9)();
                    if(!var6) { _fun0002_ip = 131; continue _fun0002 }
 93:
                    var6 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    if(var6) { _fun0002_ip = 117; continue _fun0002 }
 104:
                    var6 = var8.iconColorActive;
                    var6 = var6.color;
                    _fun0002_ip = 128; continue _fun0002;
 117:
                    var8 = var8.iconColorDesaturated;
                    var6 = var8.color;
 128:
                    var5 = var6;
 131:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.timingStandard;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var23 = {};
            var23['stylesClientThemeOverride'] = var16;
            var23['styles'] = var13;
            var22 = 8;
            var17 = var19[var22];
            var17 = var18.bind(var4)(var17);
            var17 = var17.withTiming;
            var23['withTiming'] = var17;
            var23['active'] = var21;
            var23['desaturated'] = var20;
            var17 = 9;
            var24 = var19[var17];
            var24 = var18.bind(var4)(var24);
            var24 = var24.timingStandard;
            var23['timingStandard'] = var24;
            var3['__closure'] = var23;
            var23 = 3906808140956.0;
            var3['__workletHash'] = var23;
            var23 = _closure1_slot7;
            var3['__initData'] = var23;
            var14 = var7.bind(var14)(var3);
            var2 = var19[var2];
            var3 = var18.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function I() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 8;
                    var2 = var4[var2];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.withTiming;
                    var7 = _closure2_slot3;
                    var3 = var7.get;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0003_ip = 88; continue _fun0003 }
 51:
                    var3 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    if(var3) { _fun0003_ip = 75; continue _fun0003 }
 62:
                    var3 = var7.iconColorActive;
                    var3 = var3.color;
                    _fun0003_ip = 86; continue _fun0003;
 75:
                    var7 = var7.iconColorDesaturated;
                    var3 = var7.color;
 86:
                    _fun0003_ip = 103; continue _fun0003;
 88:
                    var7 = _closure2_slot1;
                    var7 = var7.iconColor;
                    var3 = var7.color;
 103:
                    var7 = _closure2_slot3;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 9;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    if(var2) { _fun0003_ip = 147; continue _fun0003 }
 139:
                    var2 = var6.timingStandard;
                    _fun0003_ip = 153; continue _fun0003;
 147:
                    var2 = var6.timingNone;
 153:
                    var2 = var4.bind(var5)(var3, var2);
                    var1['tintColor'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var22 = var19[var22];
            var22 = var18.bind(var4)(var22);
            var22 = var22.withTiming;
            var7['withTiming'] = var22;
            var7['active'] = var21;
            var7['styles'] = var13;
            var7['desaturated'] = var20;
            var20 = var19[var17];
            var20 = var18.bind(var4)(var20);
            var20 = var20.timingNone;
            var7['timingNone'] = var20;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.timingStandard;
            var7['timingStandard'] = var17;
            var1['__closure'] = var7;
            var7 = 10433579876797.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot8;
            var1['__initData'] = var7;
            var7 = var2.bind(var3)(var1);
            var3 = _closure1_slot3;
            var2 = _closure1_slot4;
            var1 = {};
            var17 = var13.icon;
            var13 = new Array(4);
            var13[0] = var17;
            var13[1] = var16;
            var13[2] = var15;
            var13[3] = var14;
            var1['style'] = var13;
            var13 = 'button';
            var1['accessibilityRole'] = var13;
            var1['accessibilityLabel'] = var12;
            var1['onLayout'] = var11;
            var1['onPress'] = var10;
            var1['onPressIn'] = var9;
            var1['onPressOut'] = var6;
            var6 = _closure1_slot5;
            var5 = {};
            var5['source'] = var8;
            var5['style'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarItemIconPressable.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();