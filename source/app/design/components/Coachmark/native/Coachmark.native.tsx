// app/design/components/Coachmark/native/Coachmark.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var4 = function Coachmark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var10 = var3.targetMeasurements;
            var9 = var3.surfaceMeasurements;
            var38 = var3.title;
            var30 = var3.description;
            var11 = var3.offsetY;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 41; continue _fun0001 }
 39:
            var11 = 0;
 41:
            var23 = var3.imgSource;
            var _closure2_slot0 = var23;
            var6 = var3.position;
            var14 = var3.onDismiss;
            var35 = var3.buttonLabel;
            var37 = var3.buttonVariant;
            var34 = var3.onButtonPress;
            var1 = var3.experimental_withBlurBackground;
            var2 = var3.renderImgComponent;
            var _closure2_slot1 = var2;
            var18 = var3.enterExitAnimatedStyles;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var3 = _closure1_slot14;
            var17 = var3.bind(var4)();
            _closure2_slot2 = var17;
            var8 = _closure1_slot6;
            var3 = var8.useRef;
            var22 = null;
            var24 = var3.bind(var8)(var22);
            _closure2_slot3 = var24;
            var8 = _closure1_slot6;
            var3 = var8.useState;
            var12 = var3.bind(var8)(var22);
            var8 = _closure1_slot5;
            var3 = 2;
            var3 = var8.bind(var4)(var12, var3);
            var19 = 0;
            var21 = var3[var19];
            var15 = 1;
            var3 = var3[var15];
            _closure2_slot4 = var3;
            var8 = _closure1_slot1;
            var31 = _closure1_slot2;
            var3 = 8;
            var3 = var31[var3];
            var8 = var8.bind(var4)(var3);
            var3 = -8;
            var40 = var3 + var11;
            var45 = undefined;
            var44 = var21;
            var43 = var9;
            var42 = var10;
            var41 = var6;
            var3 = var45[var8](var44, var43, var42, var41, var40, var39);
            var10 = var3.adjustmentX;
            var9 = var3.tooltipX;
            var11 = var3.tooltipY;
            var27 = _closure1_slot0;
            var3 = 5;
            var3 = var31[var3];
            var8 = var27.bind(var4)(var3);
            var3 = var8.useSharedValue;
            var20 = var3.bind(var8)(var19);
            _closure2_slot5 = var20;
            var13 = _closure1_slot6;
            var12 = var13.useCallback;
            var8 = new Array(1);
            var8[0] = var20;
            var3 = function() {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = 1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var28 = var12.bind(var13)(var3, var8);
            var13 = _closure1_slot6;
            var12 = var13.useCallback;
            var8 = new Array(1);
            var8[0] = var20;
            var3 = function() {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = 0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var26 = var12.bind(var13)(var3, var8);
            var3 = 9;
            var3 = var31[var3];
            var8 = var27.bind(var4)(var3);
            var3 = var8.useButtonPressAnimationProps;
            var12 = var3.bind(var8)(var20);
            var16 = var12.style;
            var8 = _closure1_slot4;
            var3 = _closure1_slot3;
            var12 = var8.bind(var4)(var12, var3);
            var13 = _closure1_slot6;
            var8 = var13.useMemo;
            var3 = new Array(3);
            var3[0] = var23;
            var3[1] = var2;
            var3[2] = var17;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var2;
                    var2 = null;
                    if(!var3) { _fun0002_ip = 28; continue _fun0002 }
 18:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var2 = var4.bind(var3)();
 28:
                    var3 = _closure2_slot0;
                    if(!(var1 != var3)) { _fun0002_ip = 79; continue _fun0002 }
 36:
                    var7 = _closure1_slot10;
                    var5 = _closure1_slot9;
                    var4 = {};
                    var3 = _closure2_slot0;
                    var4['source'] = var3;
                    var3 = _closure2_slot2;
                    var3 = var3.image;
                    var4['style'] = var3;
                    var3 = undefined;
                    var2 = var7.bind(var3)(var5, var4);
 79:
                    var3 = var1 == var2;
                    var1 = null;
                    if(var3) { _fun0002_ip = 127; continue _fun0002 }
 88:
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var6 = _closure2_slot2;
                    var6 = var6.bottomMargin;
                    var3['style'] = var6;
                    var3['children'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 127:
                    return var1;
                }
            };
            var25 = var8.bind(var13)(var2, var3);
            var8 = _closure1_slot11;
            var3 = _closure1_slot12;
            var2 = {};
            var23 = _closure1_slot7;
            var13 = {};
            var13['ref'] = var24;
            var24 = 'alert';
            var13['accessibilityRole'] = var24;
            var24 = var17.center;
            var13['style'] = var24;
            var33 = true;
            var13['accessible'] = var33;
            var24 = function onLayout() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setAccessibilityFocus;
                var2 = {};
                var5 = _closure2_slot3;
                var2['ref'] = var5;
                var5 = 100;
                var2['delay'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13['onLayout'] = var24;
            var24 = new Array(3);
            var24[0] = var25;
            var36 = _closure1_slot10;
            var25 = 11;
            var29 = var31[var25];
            var29 = var27.bind(var4)(var29);
            var32 = var29.Text;
            var29 = {'style': null, 'variant': 'heading-md/bold', 'color': 'header-primary'};
            var39 = var17.text;
            var29['style'] = var39;
            var29['children'] = var38;
            var29 = var36.bind(var4)(var32, var29);
            var24[1] = var29;
            var29 = _closure1_slot10;
            var25 = var31[var25];
            var25 = var27.bind(var4)(var25);
            var27 = var25.Text;
            var25 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var31 = var17.text;
            var25['style'] = var31;
            var25['children'] = var30;
            var25 = var29.bind(var4)(var27, var25);
            var24[2] = var25;
            var13['children'] = var24;
            var23 = var8.bind(var4)(var23, var13);
            var13 = new Array(3);
            var13[0] = var23;
            var24 = var22 != var35;
            var23 = null;
            if(!var24) { _fun0001_ip = 820; continue _fun0001 }
 639:
            var24 = var22 != var34;
            var23 = null;
            if(!var24) { _fun0001_ip = 820; continue _fun0001 }
 651:
            var27 = _closure1_slot11;
            var25 = _closure1_slot12;
            var24 = {};
            var31 = _closure1_slot10;
            var30 = _closure1_slot7;
            var29 = {};
            var32 = var17.buttonSpacing;
            var29['style'] = var32;
            var30 = var31.bind(var4)(var30, var29);
            var29 = new Array(2);
            var29[0] = var30;
            var32 = _closure1_slot10;
            var31 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 12;
            var30 = var36[var30];
            var30 = var31.bind(var4)(var30);
            var31 = var30.Button;
            if(var1) { _fun0001_ip = 771; continue _fun0001 }
 728:
            var30 = {};
            var38 = var22 != var37;
            var36 = 'secondary';
            if(!var38) { _fun0001_ip = 744; continue _fun0001 }
 741:
            var36 = var37;
 744:
            var30['variant'] = var36;
            var36 = 'lg';
            var30['size'] = var36;
            var30['text'] = var35;
            var30['onPress'] = var34;
            var30['grow'] = var33;
            _fun0001_ip = 800; continue _fun0001;
 771:
            var33 = {'variant': 'secondary-overlay', 'size': 'lg', 'text': null, 'onPress': null, 'grow': true};
            var33['text'] = var35;
            var33['onPress'] = var34;
            var30 = var33;
 800:
            var30 = var32.bind(var4)(var31, var30);
            var29[1] = var30;
            var24['children'] = var29;
            var23 = var27.bind(var4)(var25, var24);
 820:
            var13[1] = var23;
            var25 = _closure1_slot10;
            var24 = _closure1_slot8;
            var23 = {};
            var27 = 'button';
            var23['accessibilityRole'] = var27;
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var30 = 13;
            var31 = var29[var30];
            var31 = var27.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var29[var30];
            var30 = var27.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.cpT0Cg;
            var30 = var31.bind(var32)(var30);
            var23['accessibilityLabel'] = var30;
            var30 = var17.closeButton;
            var23['style'] = var30;
            var23['onPress'] = var14;
            var23['onPressIn'] = var28;
            var23['onPressOut'] = var26;
            var28 = _closure1_slot10;
            var26 = 14;
            var26 = var29[var26];
            var26 = var27.bind(var4)(var26);
            var27 = var26.XSmallIcon;
            var26 = {};
            var26 = var28.bind(var4)(var27, var26);
            var23['children'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var13[2] = var23;
            var2['children'] = var13;
            var8 = var8.bind(var4)(var3, var2);
            var3 = _closure1_slot10;
            if(var1) { _fun0001_ip = 1032; continue _fun0001 }
 986:
            var2 = _closure1_slot7;
            var1 = {};
            var23 = var17.bodyContainer;
            var13 = new Array(2);
            var13[0] = var23;
            var23 = var17.bodyBgColor;
            var13[1] = var23;
            var1['style'] = var13;
            var1['children'] = var8;
            var13 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 1094; continue _fun0001;
 1032:
            var2 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 15;
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
 1094:
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = function onLayout(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot4;
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
            var20 = 16;
            var8 = var8[var20];
            var23 = var23.bind(var4)(var8);
            var8 = var23.isIOS;
            var23 = var8.bind(var23)();
            var8 = undefined;
            if(!var23) { _fun0001_ip = 1168; continue _fun0001 }
 1162:
            var8 = var17.shadow;
 1168:
            var5[1] = var8;
            var8 = {};
            var21 = var22 != var21;
            var19 = 0;
            if(!var21) { _fun0001_ip = 1186; continue _fun0001 }
 1183:
            var19 = var15;
 1186:
            var8['opacity'] = var19;
            var8['top'] = var11;
            var8['left'] = var9;
            var5[2] = var8;
            var1['style'] = var5;
            var19 = 'bottom';
            var8 = var19 === var6;
            if(!var8) { _fun0001_ip = 1242; continue _fun0001 }
 1217:
            var11 = _closure1_slot10;
            var9 = _closure1_slot15;
            var5 = {};
            var5['position'] = var19;
            var5['adjustmentX'] = var10;
            var8 = var11.bind(var4)(var9, var5);
 1242:
            var5 = new Array(3);
            var5[0] = var8;
            var11 = _closure1_slot10;
            var9 = _closure1_slot13;
            var8 = {};
            var44 = var8;
            var43 = var12;
            var12 = copyDataProperties(var44, var43);
            var12 = 'onAccessibilityEscape';
            var8[var12] = var14;
            var19 = false;
            var12 = 'accessible';
            var8[var12] = var19;
            var12 = 'onPress';
            var8[var12] = var14;
            var12 = var17.body;
            var14 = new Array(2);
            var14[0] = var12;
            var19 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var20];
            var19 = var19.bind(var4)(var12);
            var12 = var19.isAndroid;
            var12 = var12.bind(var19)();
            if(var12) { _fun0001_ip = 1347; continue _fun0001 }
 1341:
            var12 = new Array(0);
            _fun0001_ip = 1368; continue _fun0001;
 1347:
            var19 = var17.shadow;
            var17 = new Array(2);
            var17[0] = var19;
            var17[1] = var18;
            var12 = var17;
 1368:
            var44 = var14;
            var43 = var12;
            var42 = var15;
            var12 = arraySpread(var44, var43, var42);
            var14[var12] = var16;
            var12 = var12 + var15;
            var12 = 'style';
            var8[var12] = var14;
            var12 = 'children';
            var8[var12] = var13;
            var8 = var11.bind(var4)(var9, var8);
            var5[1] = var8;
            var11 = 'top';
            var6 = var11 === var6;
            if(!var6) { _fun0001_ip = 1454; continue _fun0001 }
 1429:
            var9 = _closure1_slot10;
            var8 = _closure1_slot15;
            var7 = {};
            var7['position'] = var11;
            var7['adjustmentX'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1454:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var4;
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
    var5 = 1;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var8 = var7[var5];
    var5 = native4;
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
    var5 = 4;
    var5 = var7[var5];
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
    var16 = var14.SHADOW_BUTTON_OVERLAY;
    var17 = var10;
    var14 = copyDataProperties(var17, var16);
    var5['shadow'] = var10;
    var10 = {'width': 260, 'borderRadius': null, 'overflow': 'hidden', 'zIndex': 1};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10['borderRadius'] = var14;
    var5['body'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.COACHMARK_BG;
    var10['backgroundColor'] = var14;
    var5['bodyBgColor'] = var10;
    var10 = {'padding': 16, 'alignItems': 'center', 'justifyContent': 'center'};
    var5['bodyContainer'] = var10;
    var10 = {'alignItems': 'center', 'justifyContent': 'center'};
    var5['center'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
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
    var14 = var14.INTERACTIVE_ACTIVE;
    var10['borderColor'] = var14;
    var5['cursorHead'] = var10;
    var10 = {'width': 2, 'height': 16};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_ACTIVE;
    var10['backgroundColor'] = var14;
    var5['cursorSpine'] = var10;
    var10 = {'height': 40, 'width': 40};
    var5['image'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10['marginBottom'] = var14;
    var5['bottomMargin'] = var10;
    var10 = {};
    var10['position'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['top'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var10['right'] = var11;
    var5['closeButton'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot14 = var5;
    var5 = function Cursor(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var2 = var1.position;
            var8 = var1.adjustmentX;
            var1 = _closure1_slot14;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var1 = 'top';
            var3 = var1 === var2;
            var10 = 'column';
            if(!var3) { _fun0003_ip = 48; continue _fun0003 }
 42:
            var10 = 'column-reverse';
 48:
            var1 = {};
            var2 = -6;
            if(var3) { _fun0003_ip = 68; continue _fun0003 }
 59:
            var1['marginBottom'] = var2;
            var7 = var1;
            _fun0003_ip = 75; continue _fun0003;
 68:
            var1['marginTop'] = var2;
            var7 = var1;
 75:
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
    var _closure1_slot15 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Coachmark/native/Coachmark.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['Coachmark'] = var4;
    var2 = function CoachmarkContainer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var8 = arg1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useThemeContext;
            var1 = var1.bind(var2)();
            var1 = var1.theme;
            var2 = var8.experimental_withBlurBackground;
            var6 = 'dark';
            if(var2) { _fun0004_ip = 59; continue _fun0004 }
 56:
            var6 = var1;
 59:
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 18;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var6;
            var7 = _closure1_slot10;
            var6 = _closure1_slot16;
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