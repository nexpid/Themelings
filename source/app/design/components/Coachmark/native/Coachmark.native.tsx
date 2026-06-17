// app/design/components/Coachmark/native/Coachmark.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var4 = function Coachmark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var12 = var3.targetMeasurements;
            var11 = var3.surfaceMeasurements;
            var38 = var3.title;
            var40 = var3.description;
            var1 = var3.offsetY;
            var19 = 0;
            var4 = undefined;
            var13 = 0;
            if(!(var4 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = var1;
case 2:
            var34 = var3.graphic;
            var _closure2_slot0 = var34;
            var27 = var3.imgSource;
            var _closure2_slot1 = var27;
            var6 = var3.position;
            var14 = var3.onDismiss;
            var37 = var3.buttonLabel;
            var39 = var3.buttonVariant;
            var36 = var3.onButtonPress;
            var26 = var3.gradientColor;
            var1 = var3.experimental_withBlurBackground;
            var2 = var3.renderImgComponent;
            var _closure2_slot2 = var2;
            var18 = var3.enterExitAnimatedStyles;
            var3 = _closure1_slot14;
            var17 = var3.bind(var4)();
            var _closure2_slot3 = var17;
            var8 = _closure1_slot6;
            var3 = var8.useRef;
            var22 = null;
            var25 = var3.bind(var8)(var22);
            var _closure2_slot4 = var25;
            var8 = _closure1_slot6;
            var3 = var8.useState;
            var9 = var3.bind(var8)(var22);
            var8 = _closure1_slot5;
            var3 = 2;
            var3 = var8.bind(var4)(var9, var3);
            var21 = var3[var19];
            var15 = 1;
            var3 = var3[var15];
            var _closure2_slot5 = var3;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var9 = 8;
            var9 = var8[var9];
            var10 = var3.bind(var4)(var9);
            var9 = -8;
            var44 = var9 + var13;
            var49 = undefined;
            var48 = var21;
            var47 = var11;
            var46 = var12;
            var45 = var6;
            var11 = var49[var10](var48, var47, var46, var45, var44, var43);
            var10 = var11.adjustmentX;
            var9 = var11.tooltipX;
            var11 = var11.tooltipY;
            var13 = _closure1_slot0;
            var12 = 5;
            var12 = var8[var12];
            var16 = var13.bind(var4)(var12);
            var12 = var16.useSharedValue;
            var20 = var12.bind(var16)(var19);
            var _closure2_slot6 = var20;
            var24 = _closure1_slot6;
            var23 = var24.useCallback;
            var16 = new Array(1);
            var16[0] = var20;
            var12 = function() {
                var3 = _closure2_slot6;
                var2 = var3.set;
                var1 = 1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var30 = var23.bind(var24)(var12, var16);
            var24 = _closure1_slot6;
            var23 = var24.useCallback;
            var16 = new Array(1);
            var16[0] = var20;
            var12 = function() {
                var3 = _closure2_slot6;
                var2 = var3.set;
                var1 = 0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var28 = var23.bind(var24)(var12, var16);
            var12 = 9;
            var12 = var8[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.useButtonPressAnimationProps;
            var23 = var12.bind(var13)(var20);
            var16 = var23.style;
            var13 = _closure1_slot4;
            var12 = _closure1_slot3;
            var12 = var13.bind(var4)(var23, var12);
            var24 = _closure1_slot6;
            var23 = var24.useMemo;
            var13 = new Array(4);
            var13[0] = var34;
            var13[1] = var27;
            var13[2] = var2;
            var13[3] = var17;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var8 = null;
                    if(!(var8 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot2;
                    var1 = var8 != var1;
                    var2 = null;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = var3.bind(var1)();
case 6:
                    var1 = _closure2_slot1;
                    if(!(var8 != var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot9;
                    var3 = {};
                    var1 = _closure2_slot1;
                    var3['source'] = var1;
                    var1 = _closure2_slot3;
                    var1 = var1.image;
                    var3['style'] = var1;
                    var1 = undefined;
                    var2 = var5.bind(var1)(var4, var3);
case 8:
                    var3 = var8 == var2;
                    var1 = null;
                    if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var6 = _closure2_slot3;
                    var6 = var6.bottomMargin;
                    var3['style'] = var6;
                    var3['children'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 10:
                    return var1;
case 4:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot7;
                    var2 = {};
                    var1 = _closure2_slot3;
                    var1 = var1.bottomMargin;
                    var2['style'] = var1;
                    var7 = _closure1_slot10;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.Graphic;
                    var5 = {};
                    var13 = _closure2_slot0;
                    var14 = var5;
                    var9 = copyDataProperties(var14, var13);
                    var9 = {};
                    var10 = _closure1_slot15;
                    var11 = _closure2_slot0;
                    var11 = var11.aspectRatio;
                    var12 = var8 != var11;
                    var8 = '1/1';
                    if(!var12) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var8 = var11;
case 12:
                    var8 = var10[var8];
                    var9['maxHeight'] = var8;
                    var8 = 'style';
                    var5[7] = var9;
                    var5 = var7.bind(var1)(var6, var5);
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var27 = var23.bind(var24)(var2, var13);
            var2 = 11;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = 'Coachmark';
            var13 = var3.bind(var4)(var2);
            var8 = _closure1_slot11;
            var3 = _closure1_slot12;
            var2 = {};
            var24 = _closure1_slot7;
            var23 = {};
            var23['ref'] = var25;
            var25 = 'alert';
            var23['accessibilityRole'] = var25;
            var25 = var17.center;
            var23['style'] = var25;
            var35 = true;
            var23['accessible'] = var35;
            var25 = function onLayout() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setAccessibilityFocus;
                var2 = {};
                var5 = _closure2_slot4;
                var2['ref'] = var5;
                var5 = 100;
                var2['delay'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var23['onLayout'] = var25;
            var25 = new Array(2);
            var25[0] = var27;
            var31 = _closure1_slot11;
            var29 = _closure1_slot7;
            var27 = {};
            var33 = undefined;
            if(!var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var33 = var17.textGap;
case 14:
            var32 = new Array(2);
            var32[0] = var33;
            var33 = undefined;
            if(!var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var34 = var22 == var34;
            var33 = undefined;
            if(!var34) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var33 = var17.textOnlyPadding;
case 16:
            var32[1] = var33;
            var27['style'] = var32;
            var34 = _closure1_slot10;
            var33 = _closure1_slot0;
            var32 = _closure1_slot2;
            var41 = 13;
            var32 = var32[var41];
            var32 = var33.bind(var4)(var32);
            var33 = var32.Text;
            var32 = {};
            var42 = var17.text;
            var32['style'] = var42;
            var42 = 'heading-md/bold';
            if(!var13) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var42 = 'text-md/semibold';
case 19:
            var32['variant'] = var42;
            var42 = 'mobile-text-heading-primary';
            var32['color'] = var42;
            var32['children'] = var38;
            var33 = var34.bind(var4)(var33, var32);
            var32 = new Array(2);
            var32[0] = var33;
            var38 = _closure1_slot10;
            var34 = _closure1_slot0;
            var33 = _closure1_slot2;
            var33 = var33[var41];
            var33 = var34.bind(var4)(var33);
            var34 = var33.Text;
            var33 = {};
            var41 = var17.text;
            var33['style'] = var41;
            var41 = 'text-sm/medium';
            var33['variant'] = var41;
            var41 = 'text-default';
            if(!var13) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var41 = 'text-subtle';
case 21:
            var33['color'] = var41;
            var33['children'] = var40;
            var33 = var38.bind(var4)(var34, var33);
            var32[1] = var33;
            var27['children'] = var32;
            var27 = var31.bind(var4)(var29, var27);
            var25[1] = var27;
            var23['children'] = var25;
            var24 = var8.bind(var4)(var24, var23);
            var23 = new Array(3);
            var23[0] = var24;
            var25 = var22 != var37;
            var24 = null;
            if(!var25) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var25 = var22 != var36;
            var24 = null;
            if(!var25) { _fun0001_ip = 23; continue _fun0001 }
case 25:
            var29 = _closure1_slot11;
            var27 = _closure1_slot12;
            var25 = {};
            var33 = _closure1_slot10;
            var32 = _closure1_slot7;
            var31 = {};
            var34 = var17.buttonSpacing;
            var31['style'] = var34;
            var32 = var33.bind(var4)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var34 = _closure1_slot10;
            var33 = _closure1_slot0;
            var38 = _closure1_slot2;
            var32 = 14;
            var32 = var38[var32];
            var32 = var33.bind(var4)(var32);
            var33 = var32.Button;
            if(var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var32 = {};
            var40 = var22 != var39;
            var38 = 'secondary';
            if(!var40) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var38 = var39;
case 28:
            var32['variant'] = var38;
            var38 = 'lg';
            if(!var13) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var38 = 'sm';
case 30:
            var32['size'] = var38;
            var32['text'] = var37;
            var32['onPress'] = var36;
            var32['grow'] = var35;
            _fun0001_ip = 32; continue _fun0001;
case 26:
            var35 = {'variant': 'secondary-overlay', 'size': 'lg', 'text': null, 'onPress': null, 'grow': true};
            var35['text'] = var37;
            var35['onPress'] = var36;
            var32 = var35;
case 32:
            var32 = var34.bind(var4)(var33, var32);
            var31[1] = var32;
            var25['children'] = var31;
            var24 = var29.bind(var4)(var27, var25);
case 23:
            var23[1] = var24;
            var27 = _closure1_slot10;
            var25 = _closure1_slot8;
            var24 = {};
            var29 = 'button';
            var24['accessibilityRole'] = var29;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var32 = 15;
            var33 = var31[var32];
            var33 = var29.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var31[var32];
            var32 = var29.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.cpT0Cq;
            var32 = var33.bind(var34)(var32);
            var24['accessibilityLabel'] = var32;
            var32 = var17.closeButton;
            var24['style'] = var32;
            var24['onPress'] = var14;
            var24['onPressIn'] = var30;
            var24['onPressOut'] = var28;
            var30 = _closure1_slot10;
            var28 = 16;
            var28 = var31[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.XSmallIcon;
            if(var13) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var28 = {};
            _fun0001_ip = 35; continue _fun0001;
case 33:
            var31 = {};
            var32 = 'xs';
            var31['size'] = var32;
            var33 = _closure1_slot1;
            var34 = _closure1_slot2;
            var32 = 7;
            var32 = var34[var32];
            var32 = var33.bind(var4)(var32);
            var32 = var32.colors;
            var32 = var32.ICON_STRONG;
            var31['color'] = var32;
            var28 = var31;
case 35:
            var28 = var30.bind(var4)(var29, var28);
            var24['children'] = var28;
            var24 = var27.bind(var4)(var25, var24);
            var23[2] = var24;
            var2['children'] = var23;
            var8 = var8.bind(var4)(var3, var2);
            if(var1) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var24 = var17.bodyContainer;
            var23 = new Array(2);
            var23[0] = var24;
            var24 = var17.bodyBgColor;
            var23[1] = var24;
            var1['style'] = var23;
            var23 = null;
            if(!var13) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var13 = var22 != var26;
            var23 = null;
            if(!var13) { _fun0001_ip = 38; continue _fun0001 }
case 40:
            var25 = _closure1_slot10;
            var24 = _closure1_slot0;
            var28 = _closure1_slot2;
            var13 = 18;
            var13 = var28[var13];
            var13 = var24.bind(var4)(var13);
            var24 = var13.ExpressiveGradient;
            var13 = {};
            var27 = var17.gradient;
            var13['style'] = var27;
            var13['color'] = var26;
            var27 = _closure1_slot1;
            var26 = 7;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.colors;
            var26 = var26.MOBILE_COACHMARK_BACKGROUND_DEFAULT;
            var13['backgroundColor'] = var26;
            var23 = var25.bind(var4)(var24, var13);
case 38:
            var13 = new Array(2);
            var13[0] = var23;
            var13[1] = var8;
            var1['children'] = var13;
            var13 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 41; continue _fun0001;
case 36:
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 17;
            var1 = var23[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BackgroundBlurView;
            var1 = {};
            var23 = var17.bodyContainer;
            var1['style'] = var23;
            var23 = 'dark';
            var1['blurTheme'] = var23;
            var1['pressed'] = var20;
            var1['children'] = var8;
            var13 = var3.bind(var4)(var2, var1);
case 41:
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = function onLayout(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot5;
                var2 = {};
                var4 = var1.layout;
                var4 = var4.width;
                var2['width'] = var4;
                var1 = var1.layout;
                var1 = var1.height;
                var2['height'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onLayout'] = var5;
            var8 = var17.container;
            var5 = new Array(3);
            var5[0] = var8;
            var23 = _closure1_slot0;
            var8 = _closure1_slot2;
            var20 = 19;
            var8 = var8[var20];
            var23 = var23.bind(var4)(var8);
            var8 = var23.isIOS;
            var23 = var8.bind(var23)();
            var8 = undefined;
            if(!var23) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var8 = var17.shadow;
case 42:
            var5[1] = var8;
            var8 = {};
            var21 = var22 != var21;
            var19 = 0;
            if(!var21) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var19 = var15;
case 44:
            var8['opacity'] = var19;
            var8['top'] = var11;
            var8['left'] = var9;
            var5[2] = var8;
            var1['style'] = var5;
            var19 = 'bottom';
            var8 = var19 === var6;
            if(!var8) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var11 = _closure1_slot10;
            var9 = _closure1_slot16;
            var5 = {};
            var5['position'] = var19;
            var5['adjustmentX'] = var10;
            var8 = var11.bind(var4)(var9, var5);
case 46:
            var5 = new Array(3);
            var5[0] = var8;
            var11 = _closure1_slot10;
            var9 = _closure1_slot13;
            var8 = {};
            var48 = var8;
            var47 = var12;
            var12 = copyDataProperties(var48, var47);
            var12 = 'onAccessibilityEscape';
            var8[11] = var14;
            var19 = false;
            var12 = 'accessible';
            var8[11] = var19;
            var12 = 'onPress';
            var8[11] = var14;
            var12 = var17.body;
            var14 = new Array(2);
            var14[0] = var12;
            var19 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var20];
            var19 = var19.bind(var4)(var12);
            var12 = var19.isAndroid;
            var12 = var12.bind(var19)();
            if(var12) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var12 = new Array(0);
            _fun0001_ip = 50; continue _fun0001;
case 48:
            var19 = var17.shadow;
            var17 = new Array(2);
            var17[0] = var19;
            var17[1] = var18;
            var12 = var17;
case 50:
            var48 = var14;
            var47 = var12;
            var46 = var15;
            var12 = arraySpread(var48, var47, var46);
            var14[11] = var16;
            var12 = var12 + var15;
            var12 = 'style';
            var8[11] = var14;
            var12 = 'children';
            var8[11] = var13;
            var8 = var11.bind(var4)(var9, var8);
            var5[1] = var8;
            var11 = 'top';
            var6 = var11 === var6;
            if(!var6) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var9 = _closure1_slot10;
            var8 = _closure1_slot16;
            var7 = {};
            var7['position'] = var11;
            var7['adjustmentX'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 51:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var1 = ['style'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var15 = 1;
    var5 = var7[var15];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.View;
    var _closure1_slot7 = var8;
    var9 = var5.Pressable;
    var _closure1_slot8 = var9;
    var5 = var5.Image;
    var _closure1_slot9 = var5;
    var16 = 4;
    var5 = var7[var16];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot10 = var8;
    var8 = var5.jsxs;
    var _closure1_slot11 = var8;
    var5 = var5.Fragment;
    var _closure1_slot12 = var5;
    var5 = 5;
    var5 = var7[var5];
    var8 = var12.bind(var1)(var5);
    var5 = var8.createAnimatedComponent;
    var5 = var5.bind(var8)(var9);
    var _closure1_slot13 = var5;
    var5 = 6;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var13 = 'absolute';
    var10 = {'position': 'absolute', 'alignItems': 'center'};
    var5['container'] = var10;
    var10 = {};
    var11 = 7;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.shadows;
    var19 = var14.SHADOW_BUTTON_OVERLAY;
    var20 = var10;
    var14 = copyDataProperties(var20, var19);
    var5['shadow'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.modules;
    var14 = var14.mobile;
    var14 = var14.COACHMARK_BODY_WIDTH;
    var10['width'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10['borderRadius'] = var14;
    var14 = 'hidden';
    var10['overflow'] = var14;
    var10['zIndex'] = var15;
    var5['body'] = var10;
    var10 = {};
    var10['gap'] = var16;
    var5['textGap'] = var10;
    var10 = {};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_24;
    var10['paddingHorizontal'] = var16;
    var5['textOnlyPadding'] = var10;
    var10 = {};
    var10['borderWidth'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.MOBILE_COACHMARK_BORDER_DEFAULT;
    var10['borderColor'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.MOBILE_COACHMARK_BACKGROUND_DEFAULT;
    var10['backgroundColor'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var10['borderRadius'] = var15;
    var5['bodyBgColor'] = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var10['borderRadius'] = var15;
    var10['overflow'] = var14;
    var5['gradient'] = var10;
    var10 = {'padding': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var10['padding'] = var14;
    var5['bodyContainer'] = var10;
    var10 = {'alignItems': 'center', 'justifyContent': 'center'};
    var5['center'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.modules;
    var14 = var14.mobile;
    var14 = var14.COACHMARK_BUTTON_SPACING;
    var10['height'] = var14;
    var5['buttonSpacing'] = var10;
    var10 = {'maxWidth': 200, 'textAlign': 'center'};
    var5['text'] = var10;
    var10 = {'alignItems': 'center', 'zIndex': 0};
    var5['cursorContainer'] = var10;
    var10 = {'height': 8, 'width': 8, 'borderRadius': null, 'borderWidth': 2, 'backgroundColor': 'transparent'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10['borderRadius'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_TEXT_ACTIVE;
    var10['borderColor'] = var14;
    var5['cursorHead'] = var10;
    var10 = {'width': 2, 'height': 16};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_TEXT_ACTIVE;
    var10['backgroundColor'] = var14;
    var5['cursorSpine'] = var10;
    var10 = {'height': 40, 'width': 40};
    var5['image'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.modules;
    var14 = var14.mobile;
    var14 = var14.COACHMARK_BUTTON_SPACING;
    var10['marginBottom'] = var14;
    var5['bottomMargin'] = var10;
    var10 = {};
    var10['position'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.modules;
    var13 = var13.mobile;
    var13 = var13.COACHMARK_BUTTON_SPACING;
    var10['top'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.modules;
    var11 = var11.mobile;
    var11 = var11.COACHMARK_BUTTON_SPACING;
    var10['right'] = var11;
    var5['closeButton'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot14 = var5;
    var5 = {'21/9': 90, '16/9': 90, '6/4': 60, '2/1': 40, '1/1': 40};
    var _closure1_slot15 = var5;
    var5 = function Cursor(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.position;
            var8 = var1.adjustmentX;
            var1 = _closure1_slot14;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var1 = 'top';
            var3 = var1 === var2;
            var10 = 'column';
            if(!var3) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var10 = 'column-reverse';
case 53:
            var1 = {};
            var2 = -6;
            if(var3) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var1['marginBottom'] = var2;
            var7 = var1;
            _fun0003_ip = 57; continue _fun0003;
case 55:
            var1['marginTop'] = var2;
            var7 = var1;
case 57:
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var11 = var9.cursorContainer;
            var5 = new Array(3);
            var5[0] = var11;
            var5[1] = var7;
            var7 = {};
            var7['flexDirection'] = var10;
            var8 = -var8;
            var7['left'] = var8;
            var5[2] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot10;
            var7 = _closure1_slot7;
            var5 = {};
            var10 = var9.cursorHead;
            var5['style'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var9.cursorSpine;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Coachmark/native/Coachmark.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['Coachmark'] = var4;
    var2 = function CoachmarkContainer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 20;
            var1 = var1[var7];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useThemeContext;
            var1 = var1.bind(var2)();
            var1 = var1.theme;
            var2 = var8.experimental_withBlurBackground;
            var6 = 'dark';
            if(var2) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var6 = var1;
case 58:
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var6;
            var7 = _closure1_slot10;
            var6 = _closure1_slot17;
            var5 = {};
            var10 = var5;
            var9 = var8;
            var8 = copyDataProperties(var10, var9);
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['CoachmarkContainer'] = var2;
    return var1;
})();