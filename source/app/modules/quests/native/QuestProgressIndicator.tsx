// app/modules/quests/native/QuestProgressIndicator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = 0;
    var7 = var6[var4];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var9 = var7.useMemo;
    var _closure1_slot3 = var9;
    var9 = var7.useEffect;
    var _closure1_slot4 = var9;
    var7 = var7.useRef;
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var7 = var8.bind(var1)(var4);
    var _closure1_slot6 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot9 = var9;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = ['#666777', '#535564'];
    var _closure1_slot11 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var8.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Circle;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        var4 = arg1;
        var1 = {};
        var2 = {};
        var3 = 'relative';
        var2['position'] = var3;
        var1['wrapper'] = var2;
        var2 = {'position': 'relative', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'zIndex': 1};
        var1['container'] = var2;
        var2 = {'shadowOffset': null, 'shadowRadius': 20, 'shadowOpacity': 0, 'elevation': 4, 'shadowColor': '#30C77399'};
        var3 = {'width': 0, 'height': 0};
        var2['shadowOffset'] = var3;
        var1['completionGlow'] = var2;
        var2 = {};
        var5 = {};
        var3 = '-90deg';
        var5['rotate'] = var3;
        var3 = new Array(1);
        var3[0] = var5;
        var2['transform'] = var3;
        var1['canvas'] = var2;
        var2 = {};
        var3 = 'absolute';
        var2['position'] = var3;
        var3 = 0.78;
        var5 = var3 * var4;
        var2['height'] = var5;
        var3 = var3 * var4;
        var2['width'] = var3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 7;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.round;
        var2['borderRadius'] = var7;
        var7 = 'hidden';
        var2['overflow'] = var7;
        var1['imageContainer'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.STATUS_POSITIVE;
        var2['color'] = var7;
        var1['progressPath'] = var2;
        var2 = {'position': 'absolute', 'pointerEvents': 'none'};
        var1['confetti'] = var2;
        var2 = {'backgroundColor': null, 'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'zIndex': 2};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.CARD_BACKGROUND_DEFAULT;
        var2['backgroundColor'] = var3;
        var1['opacityMask'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function QuestProgressIndicatorTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function QuestProgressIndicatorTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function QuestProgressIndicatorTsx3(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function QuestProgressIndicator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var20 = var1.quest;
            var5 = var1.size;
            var7 = var1.progress;
            var _closure2_slot0 = var7;
            var23 = var1.loading;
            var4 = undefined;
            if(!(var23 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var23 = false;
case 2:
            var _closure2_slot1 = var23;
            var14 = var1.hasConfetti;
            if(!(var14 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = false;
case 4:
            var19 = var1.withAnimation;
            var6 = var1.onPress;
            var18 = var1.accessibilityLabel;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var11 = var10.bind(var4)(var1);
            var8 = var11.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var8.bind(var11)(var2, var1);
            _closure2_slot2 = var11;
            var8 = 4;
            var1 = {'x-sm': 3, 'sm': 3, 'md': 3, 'md-lg': 4, 'lg': 6};
            var30 = var1[var5];
            var1 = 100;
            var2 = {'x-sm': 40, 'sm': 64, 'md': 70, 'md-lg': 100, 'lg': 128};
            var21 = var2[var5];
            _closure2_slot3 = var21;
            var41 = 1;
            var2 = {'x-sm': 1.6, 'sm': 1, 'md': 1.4, 'md-lg': 1.5, 'lg': 1.6};
            var5 = var2[var5];
            _closure2_slot4 = var5;
            var33 = 2;
            var12 = var21 / var33;
            var2 = var30 / var33;
            var32 = var12 - var2;
            var2 = global;
            var12 = var2.Math;
            var12 = var12.PI;
            var12 = var33 * var12;
            var29 = var12 * var32;
            _closure2_slot5 = var29;
            var12 = _closure1_slot13;
            var17 = var12.bind(var4)(var21);
            _closure2_slot6 = var17;
            var12 = var9[var8];
            var13 = var10.bind(var4)(var12);
            var12 = var13.useSharedValue;
            var24 = var12.bind(var13)(var7);
            _closure2_slot7 = var24;
            var9 = var9[var8];
            var12 = var10.bind(var4)(var9);
            var10 = var12.useSharedValue;
            var39 = 0;
            var9 = 0;
            if(!var23) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = 0.7;
case 6:
            var25 = var10.bind(var12)(var9);
            _closure2_slot8 = var25;
            var10 = var20.userStatus;
            var13 = null;
            var12 = var13 == var10;
            var9 = undefined;
            if(var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var10.completedAt;
case 8:
            var22 = var13 != var9;
            _closure2_slot9 = var22;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var12 = var10.bind(var4)(var9);
            var10 = var12.useSharedValue;
            var9 = 0;
            if(!var22) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var41;
case 10:
            var15 = var10.bind(var12)(var9);
            _closure2_slot10 = var15;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = var9[var8];
            var27 = var10.bind(var4)(var12);
            var26 = var27.useAnimatedStyle;
            var12 = function T() {
                var1 = {};
                var3 = _closure2_slot10;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['shadowOpacity'] = var2;
                return var1;
            };
            var28 = {};
            var28['glowOpacity'] = var15;
            var12['__closure'] = var28;
            var28 = 17183837725505.0;
            var12['__workletHash'] = var28;
            var28 = _closure1_slot14;
            var12['__initData'] = var28;
            var12 = var26.bind(var27)(var12);
            var26 = var9[var8];
            var28 = var10.bind(var4)(var26);
            var27 = var28.useAnimatedProps;
            var26 = function D() {
                var1 = {};
                var3 = _closure2_slot5;
                var4 = _closure2_slot7;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var2 = var3 * var2;
                var2 = var3 - var2;
                var1['strokeDashoffset'] = var2;
                return var1;
            };
            var31 = {};
            var31['circumference'] = var29;
            var31['animatedProgress'] = var24;
            var26['__closure'] = var31;
            var31 = 17281152506254.0;
            var26['__workletHash'] = var31;
            var31 = _closure1_slot15;
            var26['__initData'] = var31;
            var28 = var27.bind(var28)(var26);
            var9 = var9[var8];
            var26 = var10.bind(var4)(var9);
            var10 = var26.useAnimatedStyle;
            var9 = function M() {
                var1 = {};
                var4 = _closure2_slot8;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['opacity'] = var3;
                var2 = _closure2_slot6;
                var5 = var2.opacityMask;
                var6 = var1;
                var2 = copyDataProperties(var6, var5);
                return var1;
            };
            var27 = {};
            var27['underlayOpacity'] = var25;
            var27['styles'] = var17;
            var9['__closure'] = var27;
            var27 = 4427598698568.0;
            var9['__workletHash'] = var27;
            var27 = _closure1_slot16;
            var9['__initData'] = var27;
            var10 = var10.bind(var26)(var9);
            var9 = _closure1_slot4;
            var26 = new Array(3);
            var26[0] = var24;
            var26[1] = var7;
            var26[2] = var11;
            var24 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var2 = var3.set;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.withTiming;
                    var4 = _closure2_slot0;
                    var1 = {};
                    var8 = _closure2_slot2;
                    var7 = 500;
                    if(!var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var7 = 0;
case 12:
                    var1['duration'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.cancelAnimation;
                        var2 = _closure2_slot7;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var24 = var9.bind(var4)(var24, var26);
            var24 = new Array(2);
            var24[0] = var25;
            var24[1] = var23;
            var23 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 9;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withTiming;
                    var1 = _closure2_slot1;
                    var4 = 0;
                    if(!var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var4 = 0.7;
case 13:
                    var1 = {};
                    var7 = 500;
                    var1['duration'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.cancelAnimation;
                        var2 = _closure2_slot8;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var23 = var9.bind(var4)(var23, var24);
            var23 = _closure1_slot5;
            var24 = var23.bind(var4)(var13);
            _closure2_slot11 = var24;
            var25 = _closure1_slot3;
            var26 = var17.confetti;
            var23 = new Array(3);
            var23[0] = var26;
            var23[1] = var5;
            var23[2] = var21;
            var5 = function() {
                var1 = {};
                var2 = _closure2_slot6;
                var5 = var2.confetti;
                var6 = var1;
                var2 = copyDataProperties(var6, var5);
                var4 = _closure2_slot3;
                var2 = 'width';
                var1[1] = var4;
                var4 = _closure2_slot3;
                var2 = 'height';
                var1[1] = var4;
                var2 = {};
                var3 = _closure2_slot4;
                var2['scale'] = var3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = 'transform';
                var1[1] = var3;
                return var1;
            };
            var23 = var25.bind(var4)(var5, var23);
            var5 = new Array(3);
            var5[0] = var22;
            var5[1] = var15;
            var5[2] = var11;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0004_ip = 15; continue _fun0004 }
case 17:
                    var4 = _closure2_slot10;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var5 = var5[var2];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.withTiming;
                    var5 = {};
                    var2 = 500;
                    var5['duration'] = var2;
                    var2 = 1;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot11;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var2 = var3.play;
                    var2 = var2.bind(var3)();
                    _fun0004_ip = 18; continue _fun0004;
case 15:
                    var4 = _closure2_slot10;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot11;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 18; continue _fun0004 }
case 20:
                    var1 = var2.reset;
                    var1 = var1.bind(var2)();
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var4)(var3, var5);
            if(!(var13 != var6)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 10;
            var3 = var9[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.PressableOpacity;
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var5 = _closure1_slot6;
            var3 = var5.Fragment;
case 23:
            var5 = var2.Math;
            var2 = var5.round;
            var1 = var1 * var7;
            var11 = var2.bind(var5)(var1);
            var2 = _closure1_slot9;
            var1 = {};
            if(!(var13 != var6)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = {};
            var5['onPress'] = var6;
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var5 = {};
case 26:
            var44 = var1;
            var43 = var5;
            var5 = copyDataProperties(var44, var43);
            var7 = _closure1_slot10;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {'style': null, 'accessible': true, 'accessibilityRole': 'progressbar'};
            var15 = var17.wrapper;
            var9 = new Array(3);
            var9[0] = var15;
            var15 = var17.completionGlow;
            var9[1] = var15;
            var9[2] = var12;
            var5['style'] = var9;
            var9 = var18;
            if(!(var13 == var9)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var15 = _closure1_slot0;
            var26 = _closure1_slot2;
            var12 = 11;
            var22 = var26[var12];
            var22 = var15.bind(var4)(var22);
            var25 = var22.intl;
            var22 = var25.formatToPlainString;
            var12 = var26[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var15 = var12.Gj8Jqn;
            var12 = {};
            var12['percent'] = var11;
            var9 = var22.bind(var25)(var15, var12);
case 27:
            var5['accessibilityLabel'] = var9;
            var9 = {'min': 0, 'max': 100};
            var9['now'] = var11;
            var5['accessibilityValue'] = var9;
            var27 = _closure1_slot9;
            var9 = _closure1_slot1;
            var31 = _closure1_slot2;
            var8 = var31[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.View;
            var8 = {};
            var8['style'] = var10;
            var9 = var27.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot7;
            var9 = {};
            var12 = var17.container;
            var9['style'] = var12;
            var26 = _closure1_slot0;
            var25 = 5;
            var12 = var31[var25];
            var12 = var26.bind(var4)(var12);
            var15 = var12.Svg;
            var12 = {};
            var12['height'] = var21;
            var12['width'] = var21;
            var22 = var17.canvas;
            var12['style'] = var22;
            var22 = var31[var25];
            var22 = var26.bind(var4)(var22);
            var34 = var22.Defs;
            var22 = {};
            var35 = var31[var25];
            var35 = var26.bind(var4)(var35);
            var36 = var35.LinearGradient;
            var35 = {'id': 'underlayGradient', 'x1': '0', 'y1': '0.5', 'x2': '1', 'y2': '0.5'};
            var40 = '0';
            var42 = '1';
            var37 = var31[var25];
            var37 = var26.bind(var4)(var37);
            var38 = var37.Stop;
            var37 = {};
            var37['offset'] = var40;
            var40 = _closure1_slot11;
            var39 = var40[var39];
            var37['stopColor'] = var39;
            var38 = var27.bind(var4)(var38, var37);
            var37 = new Array(2);
            var37[0] = var38;
            var38 = var31[var25];
            var38 = var26.bind(var4)(var38);
            var39 = var38.Stop;
            var38 = {};
            var38['offset'] = var42;
            var40 = var40[var41];
            var38['stopColor'] = var40;
            var38 = var27.bind(var4)(var39, var38);
            var37[1] = var38;
            var35['children'] = var37;
            var35 = var11.bind(var4)(var36, var35);
            var22['children'] = var35;
            var34 = var27.bind(var4)(var34, var22);
            var22 = new Array(3);
            var22[0] = var34;
            var25 = var31[var25];
            var25 = var26.bind(var4)(var25);
            var26 = var25.Circle;
            var25 = {};
            var31 = var21 / var33;
            var25['cx'] = var31;
            var31 = var21 / var33;
            var25['cy'] = var31;
            var25['r'] = var32;
            var31 = 'none';
            var25['fill'] = var31;
            var34 = 'url(#underlayGradient)';
            var25['stroke'] = var34;
            var25['strokeWidth'] = var30;
            var25 = var27.bind(var4)(var26, var25);
            var22[1] = var25;
            var26 = _closure1_slot12;
            var25 = {};
            var34 = var21 / var33;
            var25['cx'] = var34;
            var33 = var21 / var33;
            var25['cy'] = var33;
            var25['r'] = var32;
            var25['fill'] = var31;
            var31 = var17.progressPath;
            var31 = var31.color;
            var25['stroke'] = var31;
            var25['strokeWidth'] = var30;
            var25['strokeDasharray'] = var29;
            var29 = 'round';
            var25['strokeLinecap'] = var29;
            var25['animatedProps'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var22[2] = var25;
            var12['children'] = var22;
            var15 = var11.bind(var4)(var15, var12);
            var12 = new Array(3);
            var12[0] = var15;
            var13 = null;
            if(!var14) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var22 = _closure1_slot9;
            var15 = _closure1_slot1;
            var25 = _closure1_slot2;
            var14 = 12;
            var14 = var25[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var14['ref'] = var24;
            var14['style'] = var23;
            var24 = _closure1_slot0;
            var23 = 13;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var14['source'] = var23;
            var23 = false;
            var14['autoPlay'] = var23;
            var14['loop'] = var23;
            var13 = var22.bind(var4)(var15, var14);
case 29:
            var12[1] = var13;
            var15 = _closure1_slot9;
            var14 = _closure1_slot7;
            var13 = {};
            var17 = var17.imageContainer;
            var13['style'] = var17;
            var17 = _closure1_slot1;
            var22 = _closure1_slot2;
            var16 = 14;
            var16 = var22[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['quest'] = var20;
            var20 = 0.78;
            var22 = var20 * var21;
            var16['height'] = var22;
            var20 = var20 * var21;
            var16['width'] = var20;
            var16['withAnimation'] = var19;
            var16['accessibilityLabelPrefix'] = var18;
            var16 = var15.bind(var4)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'children';
            var1[4] = var6;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestProgressIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();