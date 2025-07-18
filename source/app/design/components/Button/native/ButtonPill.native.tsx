// app/design/components/Button/native/ButtonPill.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var10 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function PillWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.children;
            var2 = var1.variant;
            var14 = var1.style;
            var10 = var1.pressed;
            var1 = var1.shiny;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 38; continue _fun0001 }
 36:
            var1 = false;
 38:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 7;
            var4 = var9[var3];
            var8 = var6.bind(var5)(var4);
            var4 = var8.useButtonPillStyles;
            var13 = var4.bind(var8)(var2, var10);
            var3 = var9[var3];
            var4 = var6.bind(var5)(var3);
            var3 = var4.useGradientPillStyles;
            var18 = var3.bind(var4)(var2);
            var4 = 8;
            var3 = var9[var4];
            var15 = var6.bind(var5)(var3);
            var11 = var15.useToken;
            var8 = _closure1_slot1;
            var3 = 6;
            var10 = var9[var3];
            var10 = var8.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT;
            var10 = var11.bind(var15)(var10);
            var16 = new Array(3);
            var16[0] = var10;
            var10 = var9[var4];
            var15 = var6.bind(var5)(var10);
            var11 = var15.useToken;
            var10 = var9[var3];
            var10 = var8.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2;
            var10 = var11.bind(var15)(var10);
            var16[1] = var10;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useToken;
            var3 = var9[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT;
            var3 = var4.bind(var6)(var3);
            var16[2] = var3;
            var11 = null;
            if(!var1) { _fun0001_ip = 286; continue _fun0001 }
 244:
            var4 = _closure1_slot7;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 9;
            var1 = var6[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.ButtonShine;
            var1 = {};
            var1['variant'] = var2;
            var11 = var4.bind(var5)(var3, var1);
 286:
            var1 = 'experimental_premium-primary';
            if(!(var1 !== var2)) { _fun0001_ip = 370; continue _fun0001 }
 296:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.View;
            var1 = {};
            var4 = new Array(2);
            var4[0] = var14;
            var4[1] = var13;
            var1['style'] = var4;
            var4 = new Array(2);
            var4[0] = var12;
            var4[1] = var11;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 557; continue _fun0001;
 370:
            var4 = _closure1_slot8;
            var3 = _closure1_slot9;
            var2 = {};
            var15 = _closure1_slot7;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 10;
            var6 = var10[var6];
            var9 = var8.bind(var5)(var6);
            var6 = {};
            var17 = {'x': 0, 'y': 0};
            var6['start'] = var17;
            var17 = {'x': 1, 'y': 0};
            var6['end'] = var17;
            var17 = new Array(3);
            var17[0] = var14;
            var17[1] = var18;
            var18 = _closure1_slot6;
            var18 = var18.absoluteFill;
            var17[2] = var18;
            var6['style'] = var17;
            var6['colors'] = var16;
            var9 = var15.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = _closure1_slot8;
            var7 = 11;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
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
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 557:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var5 = function BasicButtonPill(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var8 = var1.children;
            var11 = var1.style;
            var7 = var1.pressed;
            var10 = var1.variant;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0002_ip = 34; continue _fun0002 }
 30:
            var10 = 'primary';
 34:
            var2 = var1.size;
            if(!(var2 === var4)) { _fun0002_ip = 72; continue _fun0002 }
 43:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 4;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var2 = var3.DEFAULT_BUTTON_SIZE;
 72:
            var6 = var1.shiny;
            if(!(var6 === var4)) { _fun0002_ip = 84; continue _fun0002 }
 82:
            var6 = false;
 84:
            var1 = _closure1_slot14;
            var9 = var1.bind(var4)(var10, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot17;
            var1 = {};
            var1['variant'] = var10;
            var12 = var9.pill;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var1['style'] = var10;
            var1['pressed'] = var7;
            var1['shiny'] = var6;
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
 0:
            var2 = arg1;
            var19 = var2.children;
            var7 = var2.style;
            var5 = var2.pressed;
            var16 = var2.variant;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0003_ip = 36; continue _fun0003 }
 32:
            var16 = 'primary';
 36:
            var13 = var2.size;
            if(!(var13 === var4)) { _fun0003_ip = 74; continue _fun0003 }
 45:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var13 = var3.DEFAULT_BUTTON_SIZE;
 74:
            var6 = var2.loading;
            if(!(var6 === var4)) { _fun0003_ip = 86; continue _fun0003 }
 84:
            var6 = false;
 86:
            var _closure2_slot0 = var6;
            var14 = var2.loaderSize;
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
            var3 = var2.bind(var3)(var6);
            var2 = _closure1_slot3;
            var8 = 2;
            var12 = var2.bind(var4)(var3, var8);
            var3 = 0;
            var9 = var12[var3];
            var2 = 1;
            var12 = var12[var2];
            _closure2_slot2 = var12;
            var18 = _closure1_slot4;
            var17 = var18.useEffect;
            var12 = new Array(1);
            var12[0] = var6;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 42; continue _fun0004 }
 18:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
 42:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0004_ip = 90; continue _fun0004 }
 49:
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
                    _fun0004_ip = 103; continue _fun0004;
 90:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
 103:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var17.bind(var18)(var1, var12);
            var1 = _closure1_slot20;
            var6 = var1.bind(var4)(var6, var13);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var6, var8);
            var21 = var1[var3];
            var12 = var1[var2];
            var3 = _closure1_slot8;
            var2 = _closure1_slot17;
            var1 = {};
            var1['variant'] = var16;
            var8 = var11.pill;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['pressed'] = var5;
            var18 = _closure1_slot7;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 11;
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
            if(!var9) { _fun0003_ip = 447; continue _fun0003 }
 394:
            var12 = _closure1_slot7;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 12;
            var10 = var17[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Ellipsis;
            var10 = {};
            var10['variant'] = var16;
            if(!(var15 != var14)) { _fun0003_ip = 437; continue _fun0003 }
 434:
            var13 = var14;
 437:
            var10['size'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 447:
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
 0:
            var14 = arg1;
            var _closure2_slot0 = var14;
            var4 = _closure1_slot4;
            var3 = var4.useContext;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 13;
            var1 = var7[var1];
            var10 = undefined;
            var1 = var6.bind(var10)(var1);
            var1 = var1.AccessibilityPreferencesContext;
            var1 = var3.bind(var4)(var1);
            var1 = var1.reducedMotion;
            var12 = var1.enabled;
            var _closure2_slot1 = var12;
            var7 = 12;
            var3 = 'lg';
            var1 = arg2;
            if(!(var3 === var1)) { _fun0005_ip = 87; continue _fun0005 }
 84:
            var7 = 18;
 87:
            var _closure2_slot2 = var7;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 11;
            var1 = var11[var8];
            var4 = var9.bind(var10)(var1);
            var3 = var4.useAnimatedStyle;
            var1 = function o() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var9 = 14;
                    var1 = var1[var9];
                    var8 = undefined;
                    var7 = var2.bind(var8)(var1);
                    var6 = var7.withSpring;
                    var1 = _closure2_slot0;
                    var5 = 1;
                    if(!var1) { _fun0006_ip = 45; continue _fun0006 }
 43:
                    var5 = 0;
 45:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var12 = 15;
                    var1 = var1[var12];
                    var1 = var2.bind(var8)(var1);
                    var2 = var1.SUBTLE_SPRING;
                    var1 = 'animate-always';
                    var7 = var6.bind(var7)(var5, var2, var1);
                    var1 = _closure2_slot1;
                    var2 = {};
                    if(var1) { _fun0006_ip = 195; continue _fun0006 }
 93:
                    var2['opacity'] = var7;
                    var5 = {};
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var9];
                    var10 = var6.bind(var8)(var1);
                    var9 = var10.withSpring;
                    var1 = _closure2_slot0;
                    var6 = 0;
                    if(!var1) { _fun0006_ip = 144; continue _fun0006 }
 130:
                    var11 = _closure2_slot2;
                    var1 = -1;
                    var6 = var1 * var11;
 144:
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
                    _fun0006_ip = 269; continue _fun0006;
 195:
                    var5 = _closure2_slot0;
                    var3 = var7;
                    if(var5) { _fun0006_ip = 241; continue _fun0006 }
 205:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 11;
                    var5 = var9[var5];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.withDelay;
                    var4 = _closure1_slot10;
                    var3 = var5.bind(var6)(var4, var7);
 241:
                    var2['opacity'] = var3;
                    var4 = {};
                    var3 = 0;
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2['transform'] = var3;
                    var1 = var2;
 269:
                    return var1;
                }
            };
            var6 = {};
            var15 = 14;
            var13 = var11[var15];
            var13 = var9.bind(var10)(var13);
            var13 = var13.withSpring;
            var6['withSpring'] = var13;
            var6['loading'] = var14;
            var13 = 15;
            var16 = var11[var13];
            var16 = var9.bind(var10)(var16);
            var16 = var16.SUBTLE_SPRING;
            var6['SUBTLE_SPRING'] = var16;
            var6['useReducedMotion'] = var12;
            var16 = var11[var8];
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
            var3 = var11[var8];
            var4 = var9.bind(var10)(var3);
            var3 = var4.useAnimatedStyle;
            var2 = function s() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var10 = 14;
                    var1 = var1[var10];
                    var9 = undefined;
                    var8 = var2.bind(var9)(var1);
                    var7 = var8.withSpring;
                    var1 = _closure2_slot0;
                    var3 = 0;
                    var6 = 0;
                    if(!var1) { _fun0007_ip = 47; continue _fun0007 }
 44:
                    var6 = 1;
 47:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var13 = 15;
                    var1 = var1[var13];
                    var1 = var2.bind(var9)(var1);
                    var2 = var1.SUBTLE_SPRING;
                    var1 = 'animate-always';
                    var8 = var7.bind(var8)(var6, var2, var1);
                    var1 = _closure2_slot1;
                    var2 = {};
                    if(var1) { _fun0007_ip = 187; continue _fun0007 }
 95:
                    var2['opacity'] = var8;
                    var6 = {};
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var10];
                    var11 = var7.bind(var9)(var1);
                    var10 = var11.withSpring;
                    var1 = _closure2_slot0;
                    var7 = 0;
                    if(var1) { _fun0007_ip = 136; continue _fun0007 }
 132:
                    var7 = _closure2_slot2;
 136:
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
                    _fun0007_ip = 259; continue _fun0007;
 187:
                    var6 = _closure2_slot0;
                    var4 = var8;
                    if(!var6) { _fun0007_ip = 233; continue _fun0007 }
 197:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 11;
                    var6 = var10[var6];
                    var7 = var7.bind(var9)(var6);
                    var6 = var7.withDelay;
                    var5 = _closure1_slot10;
                    var4 = var6.bind(var7)(var5, var8);
 233:
                    var2['opacity'] = var4;
                    var4 = {};
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2['transform'] = var3;
                    var1 = var2;
 259:
                    return var1;
                }
            };
            var6 = {};
            var15 = var11[var15];
            var15 = var9.bind(var10)(var15);
            var15 = var15.withSpring;
            var6['withSpring'] = var15;
            var6['loading'] = var14;
            var13 = var11[var13];
            var13 = var9.bind(var10)(var13);
            var13 = var13.SUBTLE_SPRING;
            var6['SUBTLE_SPRING'] = var13;
            var6['useReducedMotion'] = var12;
            var8 = var11[var8];
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
    var7 = native4;
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
 0:
            var2 = arg2;
            var3 = {};
            var1 = 'sm';
            if(!(var1 !== var2)) { _fun0008_ip = 220; continue _fun0008 }
 16:
            var1 = 'md';
            if(!(var1 !== var2)) { _fun0008_ip = 129; continue _fun0008 }
 24:
            var1 = 'lg';
            if(!(var1 === var2)) { _fun0008_ip = 309; continue _fun0008 }
 35:
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var8 = var7[var4];
            var5 = undefined;
            var8 = var6.bind(var5)(var8);
            var8 = var8.LARGE_BUTTON_HEIGHT;
            var1['minHeight'] = var8;
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.LARGE_BUTTON_HEIGHT;
            var1['minWidth'] = var8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.LARGE_BUTTON_HORIZONTAL_PADDING;
            var1['paddingHorizontal'] = var4;
            var2 = _closure1_slot13;
            var1['paddingVertical'] = var2;
            var3 = var1;
            _fun0008_ip = 309; continue _fun0008;
 129:
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var8 = var7[var4];
            var5 = undefined;
            var8 = var6.bind(var5)(var8);
            var8 = var8.MEDIUM_BUTTON_HEIGHT;
            var1['minHeight'] = var8;
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.MEDIUM_BUTTON_HEIGHT;
            var1['minWidth'] = var8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.MEDIUM_BUTTON_HORIZONTAL_PADDING;
            var1['paddingHorizontal'] = var4;
            var2 = _closure1_slot12;
            var1['paddingVertical'] = var2;
            var3 = var1;
            _fun0008_ip = 309; continue _fun0008;
 220:
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var8 = var7[var4];
            var5 = undefined;
            var8 = var6.bind(var5)(var8);
            var8 = var8.SMALL_BUTTON_HEIGHT;
            var1['minHeight'] = var8;
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.SMALL_BUTTON_HEIGHT;
            var1['minWidth'] = var8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.SMALL_BUTTON_HORIZONTAL_PADDING;
            var1['paddingHorizontal'] = var4;
            var2 = _closure1_slot11;
            var1['paddingVertical'] = var2;
            var3 = var1;
 309:
            var1 = {};
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 4;
            var5 = var7[var5];
            var6 = undefined;
            var5 = var8.bind(var6)(var5);
            var5 = var5.BUTTON_BORDER_WIDTH;
            var2['borderWidth'] = var5;
            var5 = _closure1_slot1;
            var4 = 6;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.radii;
            var4 = var4.round;
            var2['borderRadius'] = var4;
            var10 = var2;
            var9 = var3;
            var3 = copyDataProperties(var10, var9);
            var1['pill'] = var2;
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
    var7 = 16;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'design/components/Button/native/ButtonPill.native.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function ButtonPill(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var3 = var2.loading;
            var1 = null;
            if(!(var1 != var3)) { _fun0009_ip = 48; continue _fun0009 }
 15:
            var5 = _closure1_slot7;
            var4 = _closure1_slot19;
            var3 = {};
            var7 = var3;
            var6 = var2;
            var1 = copyDataProperties(var7, var6);
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3);
            _fun0009_ip = 79; continue _fun0009;
 48:
            var5 = _closure1_slot7;
            var4 = _closure1_slot18;
            var3 = {};
            var7 = var3;
            var6 = var2;
            var2 = copyDataProperties(var7, var6);
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 79:
            return var1;
        }
    };
    var3['ButtonPill'] = var6;
    var3['BasicButtonPill'] = var5;
    var3['LoadingButtonPill'] = var4;
    var3['useLoadingStyles'] = var2;
    return var1;
})();