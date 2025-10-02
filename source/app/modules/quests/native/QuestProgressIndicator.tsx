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
        var2 = {'height': '100%', 'width': '100%'};
        var1['image'] = var2;
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
        var3 = var3.CARD_PRIMARY_BG;
        var2['backgroundColor'] = var3;
        var1['opacityMask'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function QuestProgressIndicatorTsx1(){const{styles,glowOpacity}=this.__closure;return{...styles.completionGlow,shadowOpacity:glowOpacity.get()};}';
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
            var18 = var2.quest;
            var9 = var2.size;
            var20 = var2.progress;
            var _closure2_slot0 = var20;
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
            var17 = var2.withAnimation;
            var6 = var2.onPress;
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
            var28 = var2[var9];
            var2 = {'x-sm': 40, 'sm': 64, 'md': 70, 'md-lg': 100, 'lg': 128};
            var19 = var2[var9];
            _closure2_slot3 = var19;
            var39 = 1;
            var2 = {'x-sm': 1.6, 'sm': 1, 'md': 1.4, 'md-lg': 1.5, 'lg': 1.6};
            var2 = var2[var9];
            _closure2_slot4 = var2;
            var31 = 2;
            var10 = var19 / var31;
            var9 = var28 / var31;
            var30 = var10 - var9;
            var9 = global;
            var9 = var9.Math;
            var9 = var9.PI;
            var9 = var31 * var9;
            var27 = var9 * var30;
            _closure2_slot5 = var27;
            var9 = _closure1_slot13;
            var16 = var9.bind(var4)(var19);
            _closure2_slot6 = var16;
            var9 = var3[var8];
            var10 = var7.bind(var4)(var9);
            var9 = var10.useSharedValue;
            var23 = var9.bind(var10)(var20);
            _closure2_slot7 = var23;
            var3 = var3[var8];
            var9 = var7.bind(var4)(var3);
            var7 = var9.useSharedValue;
            var37 = 0;
            var3 = 0;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = 0.7;
case 6:
            var21 = var7.bind(var9)(var3);
            _closure2_slot8 = var21;
            var7 = var18.userStatus;
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
            var3 = var39;
case 10:
            var7 = var7.bind(var10)(var3);
            _closure2_slot10 = var7;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = var3[var8];
            var24 = var10.bind(var4)(var14);
            var22 = var24.useAnimatedStyle;
            var14 = function b() {
                var1 = {};
                var3 = _closure2_slot6;
                var4 = var3.completionGlow;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var3 = _closure2_slot10;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 'shadowOpacity';
                var1[var2] = var3;
                return var1;
            };
            var25 = {};
            var25['styles'] = var16;
            var25['glowOpacity'] = var7;
            var14['__closure'] = var25;
            var25 = 6810183053526.0;
            var14['__workletHash'] = var25;
            var25 = _closure1_slot14;
            var14['__initData'] = var25;
            var14 = var22.bind(var24)(var14);
            var22 = var3[var8];
            var25 = var10.bind(var4)(var22);
            var24 = var25.useAnimatedProps;
            var22 = function D() {
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
            var26 = {};
            var26['circumference'] = var27;
            var26['animatedProgress'] = var23;
            var22['__closure'] = var26;
            var26 = 17281152506254.0;
            var22['__workletHash'] = var26;
            var26 = _closure1_slot15;
            var22['__initData'] = var26;
            var26 = var24.bind(var25)(var22);
            var3 = var3[var8];
            var22 = var10.bind(var4)(var3);
            var10 = var22.useAnimatedStyle;
            var3 = function G() {
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
            var24 = {};
            var24['underlayOpacity'] = var21;
            var24['styles'] = var16;
            var3['__closure'] = var24;
            var24 = 4427598698568.0;
            var3['__workletHash'] = var24;
            var24 = _closure1_slot16;
            var3['__initData'] = var24;
            var10 = var10.bind(var22)(var3);
            var3 = _closure1_slot4;
            var22 = new Array(3);
            var22[0] = var23;
            var22[1] = var20;
            var22[2] = var5;
            var20 = function() {
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
            var20 = var3.bind(var4)(var20, var22);
            var20 = new Array(2);
            var20[0] = var21;
            var20[1] = var11;
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
            var11 = var3.bind(var4)(var11, var20);
            var11 = _closure1_slot5;
            var22 = var11.bind(var4)(var12);
            _closure2_slot11 = var22;
            var20 = _closure1_slot3;
            var21 = var16.confetti;
            var11 = new Array(3);
            var11[0] = var21;
            var11[1] = var2;
            var11[2] = var19;
            var2 = function() {
                var1 = {};
                var2 = _closure2_slot6;
                var5 = var2.confetti;
                var6 = var1;
                var2 = copyDataProperties(var6, var5);
                var4 = _closure2_slot3;
                var2 = 'width';
                var1[var2] = var4;
                var4 = _closure2_slot3;
                var2 = 'height';
                var1[var2] = var4;
                var2 = {};
                var3 = _closure2_slot4;
                var2['scale'] = var3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = 'transform';
                var1[var2] = var3;
                return var1;
            };
            var21 = var20.bind(var4)(var2, var11);
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
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
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
case 20:
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
case 21:
                    var1 = var2.reset;
                    var1 = var1.bind(var2)();
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            if(!(var12 != var6)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.PressableOpacity;
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var1 = _closure1_slot6;
            var3 = var1.Fragment;
case 24:
            var2 = _closure1_slot9;
            var1 = {};
            if(!(var12 != var6)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var5 = {};
            var5['onPress'] = var6;
            _fun0001_ip = 27; continue _fun0001;
case 25:
            var5 = {};
case 27:
            var42 = var1;
            var41 = var5;
            var5 = copyDataProperties(var42, var41);
            var7 = _closure1_slot10;
            var9 = _closure1_slot1;
            var29 = _closure1_slot2;
            var5 = var29[var8];
            var5 = var9.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var20 = var16.wrapper;
            var11 = new Array(2);
            var11[0] = var20;
            var11[1] = var14;
            var5['style'] = var11;
            var25 = _closure1_slot9;
            var8 = var29[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.View;
            var8 = {};
            var8['style'] = var10;
            var9 = var25.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var10 = _closure1_slot7;
            var9 = {};
            var11 = var16.container;
            var9['style'] = var11;
            var24 = _closure1_slot0;
            var23 = 5;
            var11 = var29[var23];
            var11 = var24.bind(var4)(var11);
            var14 = var11.Svg;
            var11 = {};
            var11['height'] = var19;
            var11['width'] = var19;
            var20 = var16.canvas;
            var11['style'] = var20;
            var20 = var29[var23];
            var20 = var24.bind(var4)(var20);
            var32 = var20.Defs;
            var20 = {};
            var33 = var29[var23];
            var33 = var24.bind(var4)(var33);
            var34 = var33.LinearGradient;
            var33 = {'id': 'underlayGradient', 'x1': '0', 'y1': '0.5', 'x2': '1', 'y2': '0.5'};
            var38 = '0';
            var40 = '1';
            var35 = var29[var23];
            var35 = var24.bind(var4)(var35);
            var36 = var35.Stop;
            var35 = {};
            var35['offset'] = var38;
            var38 = _closure1_slot11;
            var37 = var38[var37];
            var35['stopColor'] = var37;
            var36 = var25.bind(var4)(var36, var35);
            var35 = new Array(2);
            var35[0] = var36;
            var36 = var29[var23];
            var36 = var24.bind(var4)(var36);
            var37 = var36.Stop;
            var36 = {};
            var36['offset'] = var40;
            var38 = var38[var39];
            var36['stopColor'] = var38;
            var36 = var25.bind(var4)(var37, var36);
            var35[1] = var36;
            var33['children'] = var35;
            var33 = var7.bind(var4)(var34, var33);
            var20['children'] = var33;
            var32 = var25.bind(var4)(var32, var20);
            var20 = new Array(3);
            var20[0] = var32;
            var23 = var29[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.Circle;
            var23 = {};
            var29 = var19 / var31;
            var23['cx'] = var29;
            var29 = var19 / var31;
            var23['cy'] = var29;
            var23['r'] = var30;
            var29 = 'none';
            var23['fill'] = var29;
            var32 = 'url(#underlayGradient)';
            var23['stroke'] = var32;
            var23['strokeWidth'] = var28;
            var23 = var25.bind(var4)(var24, var23);
            var20[1] = var23;
            var24 = _closure1_slot12;
            var23 = {};
            var32 = var19 / var31;
            var23['cx'] = var32;
            var31 = var19 / var31;
            var23['cy'] = var31;
            var23['r'] = var30;
            var23['fill'] = var29;
            var29 = var16.progressPath;
            var29 = var29.color;
            var23['stroke'] = var29;
            var23['strokeWidth'] = var28;
            var23['strokeDasharray'] = var27;
            var27 = 'round';
            var23['strokeLinecap'] = var27;
            var23['animatedProps'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var20[2] = var23;
            var11['children'] = var20;
            var14 = var7.bind(var4)(var14, var11);
            var11 = new Array(3);
            var11[0] = var14;
            var12 = null;
            if(!var13) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var20 = _closure1_slot9;
            var14 = _closure1_slot1;
            var23 = _closure1_slot2;
            var13 = 11;
            var13 = var23[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['ref'] = var22;
            var13['style'] = var21;
            var22 = _closure1_slot0;
            var21 = 12;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var13['source'] = var21;
            var21 = false;
            var13['autoPlay'] = var21;
            var13['loop'] = var21;
            var12 = var20.bind(var4)(var14, var13);
case 28:
            var11[1] = var12;
            var14 = _closure1_slot9;
            var13 = _closure1_slot7;
            var12 = {};
            var16 = var16.imageContainer;
            var12['style'] = var16;
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 13;
            var15 = var20[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['quest'] = var18;
            var18 = 0.78;
            var20 = var18 * var19;
            var15['height'] = var20;
            var18 = var18 * var19;
            var15['width'] = var18;
            var15['withAnimation'] = var17;
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
            var1[var5] = var6;
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