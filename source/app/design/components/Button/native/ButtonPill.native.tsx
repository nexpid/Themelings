// app/design/components/Button/native/ButtonPill.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function PillWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var12 = var2.children;
            var17 = var2.variant;
            var14 = var2.style;
            var10 = var2.pressed;
            var1 = var2.shiny;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var21 = var2.expressiveRiveRef;
            var22 = var2.expressivePressState;
            var3 = var2.size;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var6 = var5[var2];
            var9 = var8.bind(var4)(var6);
            var6 = var9.useButtonPillStyles;
            var13 = var6.bind(var9)(var17, var10);
            var2 = var5[var2];
            var6 = var8.bind(var4)(var2);
            var2 = var6.useGradientPillStyles;
            var18 = var2.bind(var6)(var17);
            var16 = 8;
            var2 = var5[var16];
            var6 = var8.bind(var4)(var2);
            var2 = var6.useThemeContext;
            var2 = var2.bind(var6)();
            var25 = var2.theme;
            var2 = _closure1_slot14;
            var23 = var2.bind(var4)(var17, var3);
            var6 = 9;
            var2 = var5[var6];
            var11 = var8.bind(var4)(var2);
            var10 = var11.useToken;
            var3 = _closure1_slot1;
            var2 = 6;
            var9 = var5[var2];
            var9 = var3.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT;
            var9 = var10.bind(var11)(var9);
            var10 = new Array(3);
            var10[0] = var9;
            var9 = var5[var6];
            var15 = var8.bind(var4)(var9);
            var11 = var15.useToken;
            var9 = var5[var2];
            var9 = var3.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2;
            var9 = var11.bind(var15)(var9);
            var10[1] = var9;
            var6 = var5[var6];
            var9 = var8.bind(var4)(var6);
            var8 = var9.useToken;
            var6 = var5[var2];
            var6 = var3.bind(var4)(var6);
            var6 = var6.colors;
            var6 = var6.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT;
            var6 = var8.bind(var9)(var6);
            var10[2] = var6;
            var6 = var5[var2];
            var6 = var3.bind(var4)(var6);
            var6 = var6.unsafe_rawColors;
            var6 = var6.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS;
            var15 = new Array(3);
            var15[0] = var6;
            var6 = var5[var2];
            var6 = var3.bind(var4)(var6);
            var6 = var6.unsafe_rawColors;
            var6 = var6.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2;
            var15[1] = var6;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var2 = var2.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS;
            var15[2] = var2;
            var11 = null;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ButtonShine;
            var1 = {};
            var1['variant'] = var17;
            var11 = var3.bind(var4)(var2, var1);
case 4:
            var3 = _closure1_slot8;
            var2 = _closure1_slot9;
            var1 = 'experimental_premium-primary';
            if(!(var1 !== var17)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 'experimental_premium-basic';
            if(!(var1 !== var17)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var1 = {};
            var5 = 'expressive';
            var6 = var5 === var17;
            if(!var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = _closure1_slot7;
            var8 = _closure1_slot5;
            var5 = {};
            var19 = _closure1_slot6;
            var20 = var19.absoluteFill;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = var23.expressivePill;
            var19[1] = var20;
            var5['style'] = var19;
            var20 = _closure1_slot7;
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var16 = var26[var16];
            var16 = var24.bind(var4)(var16);
            var19 = var16.ExpressiveButtonRive;
            var16 = {'withReducedMotion': 'short-loop', 'ref': null, 'fit': 'layout'};
            var16['ref'] = var21;
            var21 = 13;
            var21 = var26[var21];
            var24 = var24.bind(var4)(var21);
            var21 = var24.isThemeLight;
            var24 = var21.bind(var24)(var25);
            var21 = 'Mobile Expressive Button Dark Mode';
            if(!var24) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var21 = 'Mobile Expressive Button Lightmode';
case 11:
            var16['artboard'] = var21;
            var21 = {};
            var24 = var23.expressiveRiveFill;
            var24 = var24.color;
            var21['buttonColor'] = var24;
            var23 = var23.expressivePill;
            var23 = var23.borderRadius;
            var21['cornerRadius'] = var23;
            var28 = var21;
            var27 = var22;
            var22 = copyDataProperties(var28, var27);
            var16['dataBinding'] = var21;
            var16 = var20.bind(var4)(var19, var16);
            var5['children'] = var16;
            var6 = var9.bind(var4)(var8, var5);
case 9:
            var5 = new Array(2);
            var5[0] = var6;
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 12;
            var6 = var16[var6];
            var6 = var8.bind(var4)(var6);
            var8 = var6.View;
            var6 = {};
            var16 = new Array(2);
            var16[0] = var14;
            var16[1] = var13;
            var6['style'] = var16;
            var16 = new Array(2);
            var16[0] = var12;
            var16[1] = var11;
            var6['children'] = var16;
            var6 = var9.bind(var4)(var8, var6);
            var5[1] = var6;
            var1['children'] = var5;
            _fun0001_ip = 13; continue _fun0001;
case 6:
            var5 = {};
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 11;
            var6 = var16[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var16 = {'x': 0, 'y': 0};
            var6['start'] = var16;
            var16 = {'x': 1, 'y': 0};
            var6['end'] = var16;
            var16 = new Array(3);
            var16[0] = var14;
            var16[1] = var18;
            var18 = _closure1_slot6;
            var18 = var18.absoluteFill;
            var16[2] = var18;
            var6['style'] = var16;
            var16 = 'experimental_premium-basic';
            if(!(var16 === var17)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = var15;
case 14:
            var6['colors'] = var10;
            var8 = var9.bind(var4)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 12;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var10 = new Array(2);
            var10[0] = var14;
            var10[1] = var13;
            var7['style'] = var10;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
case 13:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var5 = function BasicButtonPill(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.children;
            var13 = var1.style;
            var11 = var1.pressed;
            var14 = var1.variant;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var14 = 'primary';
case 16:
            var12 = var1.size;
            if(!(var12 === var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var12 = var2.DEFAULT_BUTTON_SIZE;
case 18:
            var10 = var1.shiny;
            if(!(var10 === var4)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var10 = false;
case 20:
            var7 = var1.expressiveRiveRef;
            var6 = var1.expressivePressState;
            var1 = _closure1_slot14;
            var9 = var1.bind(var4)(var14, var12);
            var3 = _closure1_slot7;
            var2 = _closure1_slot17;
            var1 = {};
            var1['variant'] = var14;
            var1['size'] = var12;
            var14 = var9.pill;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var1['style'] = var12;
            var1['pressed'] = var11;
            var1['shiny'] = var10;
            var1['expressiveRiveRef'] = var7;
            var1['expressivePressState'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var9.childContainer;
            var5['style'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var4 = function LoadingButtonPill(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var19 = var2.children;
            var17 = var2.style;
            var7 = var2.pressed;
            var16 = var2.variant;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0003_ip = 3; continue _fun0003 }
case 22:
            var16 = 'primary';
case 3:
            var13 = var2.size;
            if(!(var13 === var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 4;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var13 = var3.DEFAULT_BUTTON_SIZE;
case 23:
            var8 = var2.loading;
            if(!(var8 === var4)) { _fun0003_ip = 25; continue _fun0003 }
case 20:
            var8 = false;
case 25:
            var _closure2_slot0 = var8;
            var14 = var2.loaderSize;
            var6 = var2.expressiveRiveRef;
            var5 = var2.expressivePressState;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var2 = _closure1_slot14;
            var11 = var2.bind(var4)(var16, var13);
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var15 = null;
            var2 = var2.bind(var3)(var15);
            _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var3 = var2.bind(var3)(var8);
            var2 = _closure1_slot3;
            var12 = 2;
            var18 = var2.bind(var4)(var3, var12);
            var3 = 0;
            var9 = var18[var3];
            var2 = 1;
            var18 = var18[var2];
            _closure2_slot2 = var18;
            var21 = _closure1_slot4;
            var20 = var21.useEffect;
            var18 = new Array(1);
            var18[0] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 26:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var3 = _closure2_slot1;
                    var2 = global;
                    var6 = var2.setTimeout;
                    var5 = undefined;
                    var4 = function() {
                        var3 = _closure2_slot2;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 500;
                    var2 = var6.bind(var5)(var4, var2);
                    var3['current'] = var2;
                    _fun0004_ip = 30; continue _fun0004;
case 28:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var20.bind(var21)(var1, var18);
            var1 = _closure1_slot20;
            var8 = var1.bind(var4)(var8, var13);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var8, var12);
            var21 = var1[var3];
            var12 = var1[var2];
            var3 = _closure1_slot8;
            var2 = _closure1_slot17;
            var1 = {};
            var1['variant'] = var16;
            var1['size'] = var13;
            var18 = var11.pill;
            var8 = new Array(2);
            var8[0] = var18;
            var8[1] = var17;
            var1['style'] = var8;
            var1['pressed'] = var7;
            var1['expressiveRiveRef'] = var6;
            var1['expressivePressState'] = var5;
            var18 = _closure1_slot7;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 12;
            var5 = var17[var6];
            var5 = var7.bind(var4)(var5);
            var8 = var5.View;
            var5 = {};
            var22 = var11.childContainer;
            var20 = new Array(2);
            var20[0] = var22;
            var20[1] = var21;
            var5['style'] = var20;
            var5['children'] = var19;
            var8 = var18.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot7;
            var6 = var17[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var17 = var11.ellipsis;
            var11 = new Array(2);
            var11[0] = var17;
            var11[1] = var12;
            var6['style'] = var11;
            if(!var9) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var12 = _closure1_slot7;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 14;
            var10 = var17[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Ellipsis;
            var10 = {};
            var10['variant'] = var16;
            if(!(var15 != var14)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var13 = var14;
case 33:
            var10['size'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 31:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var2 = function useLoadingStyles(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var14 = arg1;
            var _closure2_slot0 = var14;
            var4 = _closure1_slot4;
            var3 = var4.useContext;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 15;
            var1 = var7[var1];
            var10 = undefined;
            var1 = var6.bind(var10)(var1);
            var1 = var1.AccessibilityPreferencesContext;
            var1 = var3.bind(var4)(var1);
            var1 = var1.reducedMotion;
            var12 = var1.enabled;
            var _closure2_slot1 = var12;
            var11 = 12;
            var3 = 'lg';
            var1 = arg2;
            var7 = var11;
            if(!(var3 === var1)) { _fun0005_ip = 28; continue _fun0005 }
case 35:
            var7 = 18;
case 28:
            var _closure2_slot2 = var7;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = var8[var11];
            var4 = var9.bind(var10)(var1);
            var3 = var4.useAnimatedStyle;
            var1 = function o() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var9 = 16;
                    var1 = var1[var9];
                    var8 = undefined;
                    var7 = var2.bind(var8)(var1);
                    var6 = var7.withSpring;
                    var1 = _closure2_slot0;
                    var5 = 1;
                    if(!var1) { _fun0006_ip = 24; continue _fun0006 }
case 19:
                    var5 = 0;
case 24:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var12 = 17;
                    var1 = var1[var12];
                    var1 = var2.bind(var8)(var1);
                    var2 = var1.SUBTLE_SPRING;
                    var1 = 'animate-always';
                    var7 = var6.bind(var7)(var5, var2, var1);
                    var1 = _closure2_slot1;
                    var2 = {};
                    if(var1) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                    var2['opacity'] = var7;
                    var5 = {};
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var9];
                    var10 = var6.bind(var8)(var1);
                    var9 = var10.withSpring;
                    var1 = _closure2_slot0;
                    var6 = 0;
                    if(!var1) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var11 = _closure2_slot2;
                    var1 = -1;
                    var6 = var1 * var11;
case 38:
                    var11 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var12];
                    var1 = var11.bind(var8)(var1);
                    var1 = var1.SUBTLE_SPRING;
                    var1 = var9.bind(var10)(var6, var1);
                    var5['translateY'] = var1;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var2['transform'] = var1;
                    var1 = var2;
                    _fun0006_ip = 40; continue _fun0006;
case 36:
                    var5 = _closure2_slot0;
                    var3 = var7;
                    if(var5) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 12;
                    var5 = var9[var5];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.withDelay;
                    var4 = _closure1_slot10;
                    var3 = var5.bind(var6)(var4, var7);
case 41:
                    var2['opacity'] = var3;
                    var4 = {};
                    var3 = 0;
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2['transform'] = var3;
                    var1 = var2;
case 40:
                    return var1;
                }
            };
            var6 = {};
            var15 = 16;
            var13 = var8[var15];
            var13 = var9.bind(var10)(var13);
            var13 = var13.withSpring;
            var6['withSpring'] = var13;
            var6['loading'] = var14;
            var13 = 17;
            var16 = var8[var13];
            var16 = var9.bind(var10)(var16);
            var16 = var16.SUBTLE_SPRING;
            var6['SUBTLE_SPRING'] = var16;
            var6['useReducedMotion'] = var12;
            var16 = var8[var11];
            var16 = var9.bind(var10)(var16);
            var16 = var16.withDelay;
            var6['withDelay'] = var16;
            var16 = _closure1_slot10;
            var6['FADE_DELAY'] = var16;
            var6['offsetY'] = var7;
            var1['__closure'] = var6;
            var6 = 9388603334085.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot15;
            var1['__initData'] = var6;
            var3 = var3.bind(var4)(var1);
            var1 = new Array(2);
            var1[0] = var3;
            var3 = var8[var11];
            var4 = var9.bind(var10)(var3);
            var3 = var4.useAnimatedStyle;
            var2 = function l() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var10 = 16;
                    var1 = var1[var10];
                    var9 = undefined;
                    var8 = var2.bind(var9)(var1);
                    var7 = var8.withSpring;
                    var1 = _closure2_slot0;
                    var3 = 0;
                    var6 = 0;
                    if(!var1) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var6 = 1;
case 43:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var13 = 17;
                    var1 = var1[var13];
                    var1 = var2.bind(var9)(var1);
                    var2 = var1.SUBTLE_SPRING;
                    var1 = 'animate-always';
                    var8 = var7.bind(var8)(var6, var2, var1);
                    var1 = _closure2_slot1;
                    var2 = {};
                    if(var1) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    var2['opacity'] = var8;
                    var6 = {};
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var10];
                    var11 = var7.bind(var9)(var1);
                    var10 = var11.withSpring;
                    var1 = _closure2_slot0;
                    var7 = 0;
                    if(var1) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var7 = _closure2_slot2;
case 47:
                    var12 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var13];
                    var1 = var12.bind(var9)(var1);
                    var1 = var1.SUBTLE_SPRING;
                    var1 = var10.bind(var11)(var7, var1);
                    var6['translateY'] = var1;
                    var1 = new Array(1);
                    var1[0] = var6;
                    var2['transform'] = var1;
                    var1 = var2;
                    _fun0007_ip = 49; continue _fun0007;
case 45:
                    var6 = _closure2_slot0;
                    var4 = var8;
                    if(!var6) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 12;
                    var6 = var10[var6];
                    var7 = var7.bind(var9)(var6);
                    var6 = var7.withDelay;
                    var5 = _closure1_slot10;
                    var4 = var6.bind(var7)(var5, var8);
case 50:
                    var2['opacity'] = var4;
                    var4 = {};
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2['transform'] = var3;
                    var1 = var2;
case 49:
                    return var1;
                }
            };
            var6 = {};
            var15 = var8[var15];
            var15 = var9.bind(var10)(var15);
            var15 = var15.withSpring;
            var6['withSpring'] = var15;
            var6['loading'] = var14;
            var13 = var8[var13];
            var13 = var9.bind(var10)(var13);
            var13 = var13.SUBTLE_SPRING;
            var6['SUBTLE_SPRING'] = var13;
            var6['useReducedMotion'] = var12;
            var8 = var8[var11];
            var8 = var9.bind(var10)(var8);
            var8 = var8.withDelay;
            var6['withDelay'] = var8;
            var8 = _closure1_slot10;
            var6['FADE_DELAY'] = var8;
            var6['offsetY'] = var7;
            var2['__closure'] = var6;
            var6 = 8255420825872.0;
            var2['__workletHash'] = var6;
            var5 = _closure1_slot16;
            var2['__initData'] = var5;
            var2 = var3.bind(var4)(var2);
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var10 = var9[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.View;
    var _closure1_slot5 = var10;
    var7 = var7.StyleSheet;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.jsx;
    var _closure1_slot7 = var10;
    var10 = var7.jsxs;
    var _closure1_slot8 = var10;
    var7 = var7.Fragment;
    var _closure1_slot9 = var7;
    var7 = 300;
    var _closure1_slot10 = var7;
    var7 = 4;
    var10 = var9[var7];
    var13 = var8.bind(var1)(var10);
    var12 = var13.getButtonPadding;
    var10 = var9[var7];
    var10 = var8.bind(var1)(var10);
    var11 = var10.SMALL_BUTTON_HEIGHT;
    var10 = var9[var7];
    var10 = var8.bind(var1)(var10);
    var10 = var10.SMALL_BUTTON_ICON_SIZE;
    var10 = var12.bind(var13)(var11, var10);
    var _closure1_slot11 = var10;
    var10 = var9[var7];
    var13 = var8.bind(var1)(var10);
    var12 = var13.getButtonPadding;
    var10 = var9[var7];
    var10 = var8.bind(var1)(var10);
    var11 = var10.MEDIUM_BUTTON_HEIGHT;
    var10 = var9[var7];
    var10 = var8.bind(var1)(var10);
    var10 = var10.MEDIUM_BUTTON_ICON_SIZE;
    var10 = var12.bind(var13)(var11, var10);
    var _closure1_slot12 = var10;
    var10 = var9[var7];
    var12 = var8.bind(var1)(var10);
    var11 = var12.getButtonPadding;
    var10 = var9[var7];
    var10 = var8.bind(var1)(var10);
    var10 = var10.LARGE_BUTTON_HEIGHT;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.LARGE_BUTTON_ICON_SIZE;
    var7 = var11.bind(var12)(var10, var7);
    var _closure1_slot13 = var7;
    var7 = 5;
    var7 = var9[var7];
    var11 = var8.bind(var1)(var7);
    var10 = var11.createStyles;
    var7 = function(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg2;
            var8 = {};
            var1 = 'sm';
            if(!(var1 !== var2)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            var1 = 'md';
            if(!(var1 !== var2)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var1 = 'lg';
            if(!(var1 === var2)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var9 = var7[var4];
            var5 = undefined;
            var9 = var6.bind(var5)(var9);
            var9 = var9.LARGE_BUTTON_HEIGHT;
            var1['minHeight'] = var9;
            var9 = var7[var4];
            var9 = var6.bind(var5)(var9);
            var9 = var9.LARGE_BUTTON_HEIGHT;
            var1['minWidth'] = var9;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.LARGE_BUTTON_HORIZONTAL_PADDING;
            var1['paddingHorizontal'] = var4;
            var3 = _closure1_slot13;
            var1['paddingVertical'] = var3;
            var8 = var1;
            _fun0008_ip = 56; continue _fun0008;
case 54:
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var9 = var7[var4];
            var5 = undefined;
            var9 = var6.bind(var5)(var9);
            var9 = var9.MEDIUM_BUTTON_HEIGHT;
            var1['minHeight'] = var9;
            var9 = var7[var4];
            var9 = var6.bind(var5)(var9);
            var9 = var9.MEDIUM_BUTTON_HEIGHT;
            var1['minWidth'] = var9;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.MEDIUM_BUTTON_HORIZONTAL_PADDING;
            var1['paddingHorizontal'] = var4;
            var3 = _closure1_slot12;
            var1['paddingVertical'] = var3;
            var8 = var1;
            _fun0008_ip = 56; continue _fun0008;
case 52:
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var9 = var7[var4];
            var5 = undefined;
            var9 = var6.bind(var5)(var9);
            var9 = var9.SMALL_BUTTON_HEIGHT;
            var1['minHeight'] = var9;
            var9 = var7[var4];
            var9 = var6.bind(var5)(var9);
            var9 = var9.SMALL_BUTTON_HEIGHT;
            var1['minWidth'] = var9;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.SMALL_BUTTON_HORIZONTAL_PADDING;
            var1['paddingHorizontal'] = var4;
            var3 = _closure1_slot11;
            var1['paddingVertical'] = var3;
            var8 = var1;
case 56:
            var1 = 'lg';
            if(!(var1 !== var2)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.modules;
            var1 = var1.button;
            var4 = var1.BORDER_RADIUS;
            _fun0008_ip = 60; continue _fun0008;
case 58:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.modules;
            var1 = var1.button;
            var4 = var1.BORDER_RADIUS_LG;
case 60:
            var1 = {};
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
            var7 = 'hidden';
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 4;
            var9 = var6[var5];
            var5 = undefined;
            var9 = var10.bind(var5)(var9);
            var9 = var9.BUTTON_BORDER_WIDTH;
            var2['borderWidth'] = var9;
            var2['borderRadius'] = var4;
            var12 = var2;
            var11 = var8;
            var8 = copyDataProperties(var12, var11);
            var1['pill'] = var2;
            var2 = {};
            var2['overflow'] = var7;
            var2['borderRadius'] = var4;
            var1['expressivePill'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var3 = 6;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT;
            var2['color'] = var3;
            var1['expressiveRiveFill'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexGrow': 1, 'maxWidth': '100%'};
            var1['childContainer'] = var2;
            var2 = {'position': 'absolute', 'height': '100%', 'width': '100%', 'justifyContent': 'center', 'alignItems': 'center'};
            var1['ellipsis'] = var2;
            return var1;
        }
    };
    var7 = var10.bind(var11)(var7);
    var _closure1_slot14 = var7;
    var7 = {};
    var10 = "function ButtonPillNativeTsx1(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}";
    var7['code'] = var10;
    var _closure1_slot15 = var7;
    var7 = {};
    var10 = "function ButtonPillNativeTsx2(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition):opacityTransition,transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}";
    var7['code'] = var10;
    var _closure1_slot16 = var7;
    var7 = 18;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'design/components/Button/native/ButtonPill.native.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function ButtonPill(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var3 = var2.loading;
            var1 = null;
            if(!(var1 != var3)) { _fun0009_ip = 61; continue _fun0009 }
case 62:
            var5 = _closure1_slot7;
            var4 = _closure1_slot19;
            var3 = {};
            var7 = var3;
            var6 = var2;
            var1 = copyDataProperties(var7, var6);
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3);
            _fun0009_ip = 63; continue _fun0009;
case 61:
            var5 = _closure1_slot7;
            var4 = _closure1_slot18;
            var3 = {};
            var7 = var3;
            var6 = var2;
            var2 = copyDataProperties(var7, var6);
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 63:
            return var1;
        }
    };
    var3['ButtonPill'] = var6;
    var3['BasicButtonPill'] = var5;
    var3['LoadingButtonPill'] = var4;
    var3['useLoadingStyles'] = var2;
    return var1;
})();