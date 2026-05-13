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
        var7 = var7.unsafe_rawColors;
        var7 = var7.GREEN_300;
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
            var2 = arg1;
            var19 = var2.quest;
            var9 = var2.size;
            var21 = var2.progress;
            var _closure2_slot0 = var21;
            var11 = var2.loading;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = false;
case 2:
            var _closure2_slot1 = var11;
            var13 = var2.hasConfetti;
            if(!(var13 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = false;
case 4:
            var18 = var2.withAnimation;
            var6 = var2.onPress;
            var17 = var2.accessibilityLabel;
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
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var2 = var3[var2];
            var10 = var7.bind(var4)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var5 = var8.bind(var10)(var5, var2);
            _closure2_slot2 = var5;
            var8 = 4;
            var2 = {'x-sm': 3, 'sm': 3, 'md': 3, 'md-lg': 4, 'lg': 6};
            var29 = var2[var9];
            var2 = {'x-sm': 40, 'sm': 64, 'md': 70, 'md-lg': 100, 'lg': 128};
            var20 = var2[var9];
            _closure2_slot3 = var20;
            var40 = 1;
            var2 = {'x-sm': 1.6, 'sm': 1, 'md': 1.4, 'md-lg': 1.5, 'lg': 1.6};
            var2 = var2[var9];
            _closure2_slot4 = var2;
            var32 = 2;
            var10 = var20 / var32;
            var9 = var29 / var32;
            var31 = var10 - var9;
            var9 = global;
            var9 = var9.Math;
            var9 = var9.PI;
            var9 = var32 * var9;
            var28 = var9 * var31;
            _closure2_slot5 = var28;
            var9 = _closure1_slot13;
            var16 = var9.bind(var4)(var20);
            _closure2_slot6 = var16;
            var9 = var3[var8];
            var10 = var7.bind(var4)(var9);
            var9 = var10.useSharedValue;
            var24 = var9.bind(var10)(var21);
            _closure2_slot7 = var24;
            var3 = var3[var8];
            var9 = var7.bind(var4)(var3);
            var7 = var9.useSharedValue;
            var38 = 0;
            var3 = 0;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = 0.7;
case 6:
            var22 = var7.bind(var9)(var3);
            _closure2_slot8 = var22;
            var7 = var19.userStatus;
            var12 = null;
            var9 = var12 == var7;
            var3 = undefined;
            if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var7.completedAt;
case 8:
            var9 = var12 != var3;
            _closure2_slot9 = var9;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var10 = var7.bind(var4)(var3);
            var7 = var10.useSharedValue;
            var3 = 0;
            if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var40;
case 10:
            var7 = var7.bind(var10)(var3);
            _closure2_slot10 = var7;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = var3[var8];
            var25 = var10.bind(var4)(var14);
            var23 = var25.useAnimatedStyle;
            var14 = function I() {
                var1 = {};
                var3 = _closure2_slot10;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['shadowOpacity'] = var2;
                return var1;
            };
            var26 = {};
            var26['glowOpacity'] = var7;
            var14['__closure'] = var26;
            var26 = 17183837725505.0;
            var14['__workletHash'] = var26;
            var26 = _closure1_slot14;
            var14['__initData'] = var26;
            var14 = var23.bind(var25)(var14);
            var23 = var3[var8];
            var26 = var10.bind(var4)(var23);
            var25 = var26.useAnimatedProps;
            var23 = function G() {
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
            var27 = {};
            var27['circumference'] = var28;
            var27['animatedProgress'] = var24;
            var23['__closure'] = var27;
            var27 = 17281152506254.0;
            var23['__workletHash'] = var27;
            var27 = _closure1_slot15;
            var23['__initData'] = var27;
            var27 = var25.bind(var26)(var23);
            var3 = var3[var8];
            var23 = var10.bind(var4)(var3);
            var10 = var23.useAnimatedStyle;
            var3 = function M() {
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
            var25 = {};
            var25['underlayOpacity'] = var22;
            var25['styles'] = var16;
            var3['__closure'] = var25;
            var25 = 4427598698568.0;
            var3['__workletHash'] = var25;
            var25 = _closure1_slot16;
            var3['__initData'] = var25;
            var10 = var10.bind(var23)(var3);
            var3 = _closure1_slot4;
            var23 = new Array(3);
            var23[0] = var24;
            var23[1] = var21;
            var23[2] = var5;
            var21 = function() {
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
            var21 = var3.bind(var4)(var21, var23);
            var21 = new Array(2);
            var21[0] = var22;
            var21[1] = var11;
            var11 = function() {
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
            var11 = var3.bind(var4)(var11, var21);
            var11 = _closure1_slot5;
            var23 = var11.bind(var4)(var12);
            _closure2_slot11 = var23;
            var21 = _closure1_slot3;
            var22 = var16.confetti;
            var11 = new Array(3);
            var11[0] = var22;
            var11[1] = var2;
            var11[2] = var20;
            var2 = function() {
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
            var22 = var21.bind(var4)(var2, var11);
            var2 = new Array(3);
            var2[0] = var9;
            var2[1] = var7;
            var2[2] = var5;
            var1 = function() {
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
            var1 = var3.bind(var4)(var1, var2);
            if(!(var12 != var6)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.PressableOpacity;
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var1 = _closure1_slot6;
            var3 = var1.Fragment;
case 23:
            var2 = _closure1_slot9;
            var1 = {};
            if(!(var12 != var6)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = {};
            var5['onPress'] = var6;
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var5 = {};
case 26:
            var43 = var1;
            var42 = var5;
            var5 = copyDataProperties(var43, var42);
            var7 = _closure1_slot10;
            var9 = _closure1_slot1;
            var30 = _closure1_slot2;
            var5 = var30[var8];
            var5 = var9.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var21 = var16.wrapper;
            var11 = new Array(3);
            var11[0] = var21;
            var21 = var16.completionGlow;
            var11[1] = var21;
            var11[2] = var14;
            var5['style'] = var11;
            var26 = _closure1_slot9;
            var8 = var30[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.View;
            var8 = {};
            var8['style'] = var10;
            var9 = var26.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var10 = _closure1_slot7;
            var9 = {};
            var11 = var16.container;
            var9['style'] = var11;
            var25 = _closure1_slot0;
            var24 = 5;
            var11 = var30[var24];
            var11 = var25.bind(var4)(var11);
            var14 = var11.Svg;
            var11 = {};
            var11['height'] = var20;
            var11['width'] = var20;
            var21 = var16.canvas;
            var11['style'] = var21;
            var21 = var30[var24];
            var21 = var25.bind(var4)(var21);
            var33 = var21.Defs;
            var21 = {};
            var34 = var30[var24];
            var34 = var25.bind(var4)(var34);
            var35 = var34.LinearGradient;
            var34 = {'id': 'underlayGradient', 'x1': '0', 'y1': '0.5', 'x2': '1', 'y2': '0.5'};
            var39 = '0';
            var41 = '1';
            var36 = var30[var24];
            var36 = var25.bind(var4)(var36);
            var37 = var36.Stop;
            var36 = {};
            var36['offset'] = var39;
            var39 = _closure1_slot11;
            var38 = var39[var38];
            var36['stopColor'] = var38;
            var37 = var26.bind(var4)(var37, var36);
            var36 = new Array(2);
            var36[0] = var37;
            var37 = var30[var24];
            var37 = var25.bind(var4)(var37);
            var38 = var37.Stop;
            var37 = {};
            var37['offset'] = var41;
            var39 = var39[var40];
            var37['stopColor'] = var39;
            var37 = var26.bind(var4)(var38, var37);
            var36[1] = var37;
            var34['children'] = var36;
            var34 = var7.bind(var4)(var35, var34);
            var21['children'] = var34;
            var33 = var26.bind(var4)(var33, var21);
            var21 = new Array(3);
            var21[0] = var33;
            var24 = var30[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.Circle;
            var24 = {};
            var30 = var20 / var32;
            var24['cx'] = var30;
            var30 = var20 / var32;
            var24['cy'] = var30;
            var24['r'] = var31;
            var30 = 'none';
            var24['fill'] = var30;
            var33 = 'url(#underlayGradient)';
            var24['stroke'] = var33;
            var24['strokeWidth'] = var29;
            var24 = var26.bind(var4)(var25, var24);
            var21[1] = var24;
            var25 = _closure1_slot12;
            var24 = {};
            var33 = var20 / var32;
            var24['cx'] = var33;
            var32 = var20 / var32;
            var24['cy'] = var32;
            var24['r'] = var31;
            var24['fill'] = var30;
            var30 = var16.progressPath;
            var30 = var30.color;
            var24['stroke'] = var30;
            var24['strokeWidth'] = var29;
            var24['strokeDasharray'] = var28;
            var28 = 'round';
            var24['strokeLinecap'] = var28;
            var24['animatedProps'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var21[2] = var24;
            var11['children'] = var21;
            var14 = var7.bind(var4)(var14, var11);
            var11 = new Array(3);
            var11[0] = var14;
            var12 = null;
            if(!var13) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var21 = _closure1_slot9;
            var14 = _closure1_slot1;
            var24 = _closure1_slot2;
            var13 = 11;
            var13 = var24[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['ref'] = var23;
            var13['style'] = var22;
            var23 = _closure1_slot0;
            var22 = 12;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var13['source'] = var22;
            var22 = false;
            var13['autoPlay'] = var22;
            var13['loop'] = var22;
            var12 = var21.bind(var4)(var14, var13);
case 27:
            var11[1] = var12;
            var14 = _closure1_slot9;
            var13 = _closure1_slot7;
            var12 = {};
            var16 = var16.imageContainer;
            var12['style'] = var16;
            var16 = _closure1_slot1;
            var21 = _closure1_slot2;
            var15 = 13;
            var15 = var21[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['quest'] = var19;
            var19 = 0.78;
            var21 = var19 * var20;
            var15['height'] = var21;
            var19 = var19 * var20;
            var15['width'] = var19;
            var15['withAnimation'] = var18;
            var15['accessibilityLabelPrefix'] = var17;
            var15 = var14.bind(var4)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[2] = var12;
            var9['children'] = var11;
            var9 = var7.bind(var4)(var10, var9);
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
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestProgressIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();