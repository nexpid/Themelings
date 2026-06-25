// app/modules/frames/panel/native/QuestActivityButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function QuestActivityButtonInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.quest;
            var _closure2_slot0 = var5;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var1 = var7[var1];
            var3 = var6.bind(var4)(var1);
            var1 = var3.useQuestCompletionDetails;
            var1 = var1.bind(var3)(var5);
            var1 = var1.completedRatio;
            var3 = 12;
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var7.bind(var8)(var6, var3);
            var _closure2_slot1 = var9;
            var10 = _closure1_slot3;
            var8 = var10.useCallback;
            var3 = var5.id;
            var6 = new Array(2);
            var6[0] = var3;
            var11 = var5.userStatus;
            var7 = null;
            var13 = var7 == var11;
            var3 = undefined;
            if(var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var11.enrolledAt;
case 2:
            var6[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.userStatus;
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var4.enrolledAt;
case 4:
                    if(!(var3 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 16;
                    var4 = var2[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 15;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 17;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var3['questId'] = var2;
                    var2 = 'QuestProgressBottomSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 13;
                    var4 = var3[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.pushLazy;
                    var8 = _closure1_slot0;
                    var4 = 15;
                    var4 = var3[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = 14;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var8.bind(var1)(var4, var3);
                    var3 = {};
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var3['questId'] = var7;
                    var2 = _closure1_slot16;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 8:
                    return var1;
                }
            };
            var19 = var8.bind(var10)(var3, var6);
            var3 = global;
            var3 = var3.Math;
            var6 = var3.PI;
            var3 = 2;
            var6 = var3 * var6;
            var3 = 14.3;
            var16 = var6 * var3;
            _closure2_slot2 = var16;
            var6 = var7 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = var5.userStatus;
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var3 = var6.enrolledAt;
case 9:
            var6 = var7 != var3;
            var3 = 0;
            if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var1;
case 12:
            _closure2_slot3 = var3;
            var6 = var7 == var5;
            var1 = undefined;
            if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var5.userStatus;
            var10 = var7 == var6;
            var1 = undefined;
            if(var10) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var1 = var6.enrolledAt;
case 14:
            var11 = var7 != var1;
            if(!var11) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var6 = var7 == var5;
            var1 = undefined;
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var5 = var5.userStatus;
            var6 = var7 == var5;
            var1 = undefined;
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var1 = var5.completedAt;
case 19:
            var11 = var7 != var1;
case 17:
            _closure2_slot4 = var11;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var10 = var5[var1];
            var13 = var6.bind(var4)(var10);
            var10 = var13.useSharedValue;
            var21 = var10.bind(var13)(var3);
            _closure2_slot5 = var21;
            var5 = var5[var1];
            var6 = var6.bind(var4)(var5);
            var5 = var6.useSharedValue;
            var8 = 0;
            if(!var11) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var8 = 1;
case 22:
            var14 = var5.bind(var6)(var8);
            _closure2_slot6 = var14;
            var6 = _closure1_slot3;
            var5 = var6.useRef;
            var18 = var5.bind(var6)(var7);
            _closure2_slot7 = var18;
            var5 = _closure1_slot13;
            var17 = var5.bind(var4)();
            _closure2_slot8 = var17;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = var13[var1];
            var7 = var10.bind(var4)(var5);
            var6 = var7.useAnimatedStyle;
            var5 = function I() {
                var1 = {};
                var3 = _closure2_slot6;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['shadowOpacity'] = var2;
                return var1;
            };
            var8 = {};
            var8['glowOpacity'] = var14;
            var5['__closure'] = var8;
            var8 = 4459043613798.0;
            var5['__workletHash'] = var8;
            var8 = _closure1_slot14;
            var5['__initData'] = var8;
            var6 = var6.bind(var7)(var5);
            var15 = _closure1_slot3;
            var8 = var15.useMemo;
            var5 = var17.confetti;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var1 = {};
                var2 = _closure2_slot8;
                var5 = var2.confetti;
                var6 = var1;
                var2 = copyDataProperties(var6, var5);
                var4 = _closure1_slot11;
                var3 = 'width';
                var1[2] = var4;
                var3 = _closure1_slot11;
                var2 = 'height';
                var1[1] = var3;
                var2 = {};
                var3 = 1.6;
                var2['scale'] = var3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = 'transform';
                var1[1] = var3;
                return var1;
            };
            var8 = var8.bind(var15)(var5, var7);
            var5 = var13[var1];
            var15 = var10.bind(var4)(var5);
            var7 = var15.useAnimatedProps;
            var5 = function E() {
                var1 = {};
                var3 = _closure2_slot2;
                var4 = _closure2_slot5;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var2 = var3 * var2;
                var2 = var3 - var2;
                var1['strokeDashoffset'] = var2;
                return var1;
            };
            var20 = {};
            var20['circumference'] = var16;
            var20['animatedProgress'] = var21;
            var5['__closure'] = var20;
            var20 = 3373122453897.0;
            var5['__workletHash'] = var20;
            var20 = _closure1_slot15;
            var5['__initData'] = var20;
            var15 = var7.bind(var15)(var5);
            var20 = _closure1_slot3;
            var7 = var20.useEffect;
            var5 = new Array(3);
            var5[0] = var21;
            var5[1] = var3;
            var5[2] = var9;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = var3.set;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 18;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.withTiming;
                    var4 = _closure2_slot3;
                    var1 = {};
                    var8 = _closure2_slot1;
                    var7 = 500;
                    if(!var8) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var7 = 0;
case 24:
                    var1['duration'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.cancelAnimation;
                        var2 = _closure2_slot5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var3 = var7.bind(var20)(var3, var5);
            var7 = _closure1_slot3;
            var5 = var7.useEffect;
            var3 = new Array(3);
            var3[0] = var14;
            var3[1] = var11;
            var3[2] = var9;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0004_ip = 26; continue _fun0004 }
case 28:
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 18;
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
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var2 = var3.play;
                    var2 = var2.bind(var3)();
                    _fun0004_ip = 29; continue _fun0004;
case 26:
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot7;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 29; continue _fun0004 }
case 31:
                    var1 = var2.reset;
                    var1 = var1.bind(var2)();
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var3 = _closure1_slot10;
            var24 = _closure1_slot1;
            var1 = var13[var1];
            var1 = var24.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = var17.container;
            var5 = new Array(3);
            var5[0] = var7;
            var7 = var17.completionGlow;
            var5[1] = var7;
            var5[2] = var6;
            var1['style'] = var5;
            var5 = 'box-none';
            var1['pointerEvents'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot4;
            var5 = {};
            var5['style'] = var8;
            var11 = 'none';
            var5['pointerEvents'] = var11;
            var14 = _closure1_slot9;
            var8 = 19;
            var8 = var13[var8];
            var9 = var24.bind(var4)(var8);
            var8 = {};
            var8['ref'] = var18;
            var18 = 20;
            var18 = var13[var18];
            var18 = var10.bind(var4)(var18);
            var8['source'] = var18;
            var18 = false;
            var8['autoPlay'] = var18;
            var8['loop'] = var18;
            var8 = var14.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var17.buttonWrapper;
            var6['style'] = var9;
            var18 = _closure1_slot9;
            var9 = 21;
            var9 = var13[var9];
            var14 = var24.bind(var4)(var9);
            var9 = {};
            var20 = 22;
            var20 = var13[var20];
            var20 = var24.bind(var4)(var20);
            var9['icon'] = var20;
            var9['onPress'] = var19;
            var19 = 23;
            var20 = var13[var19];
            var20 = var10.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var13[var19];
            var19 = var10.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.JALI2K;
            var19 = var20.bind(var21)(var19);
            var9['accessibilityLabel'] = var19;
            var9 = var18.bind(var4)(var14, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            var6['pointerEvents'] = var11;
            var9 = var17.canvas;
            var6['style'] = var9;
            var19 = _closure1_slot9;
            var9 = 8;
            var14 = var13[var9];
            var14 = var10.bind(var4)(var14);
            var18 = var14.Svg;
            var14 = {};
            var20 = _closure1_slot11;
            var14['height'] = var20;
            var20 = _closure1_slot11;
            var14['width'] = var20;
            var22 = _closure1_slot9;
            var20 = var13[var9];
            var20 = var10.bind(var4)(var20);
            var21 = var20.Circle;
            var20 = {'cx': 16, 'cy': 16, 'r': 14.3, 'fill': 'none', 'stroke': null, 'strokeWidth': 3.4};
            var23 = 10;
            var23 = var13[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.unsafe_rawColors;
            var23 = var23.OPACITY_32;
            var20['stroke'] = var23;
            var20['strokeDasharray'] = var16;
            var20 = var22.bind(var4)(var21, var20);
            var14['children'] = var20;
            var14 = var19.bind(var4)(var18, var14);
            var6['children'] = var14;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            var6['pointerEvents'] = var11;
            var11 = var17.canvas;
            var6['style'] = var11;
            var11 = _closure1_slot9;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Svg;
            var9 = {};
            var13 = _closure1_slot11;
            var9['height'] = var13;
            var13 = _closure1_slot11;
            var9['width'] = var13;
            var14 = _closure1_slot9;
            var13 = _closure1_slot12;
            var12 = {'cx': 16, 'cy': 16, 'r': 14.3, 'fill': 'none', 'stroke': null, 'strokeWidth': 3.4};
            var17 = var17.progressPath;
            var17 = var17.color;
            var12['stroke'] = var17;
            var12['strokeDasharray'] = var16;
            var12['animatedProps'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestVariants;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 32;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var13.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Circle;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'relative', 'width': 32, 'height': 32, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['container'] = var10;
    var10 = {'shadowOffset': null, 'shadowRadius': 12, 'shadowOpacity': 0, 'elevation': 4, 'shadowColor': '#30C77399'};
    var11 = {'width': 0, 'height': 0};
    var10['shadowOffset'] = var11;
    var4['completionGlow'] = var10;
    var10 = {};
    var11 = 'absolute';
    var10['position'] = var11;
    var14 = {};
    var12 = '-90deg';
    var14['rotate'] = var12;
    var12 = new Array(1);
    var12[0] = var14;
    var10['transform'] = var12;
    var4['canvas'] = var10;
    var10 = {};
    var12 = 10;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_POSITIVE;
    var10['color'] = var12;
    var4['progressPath'] = var10;
    var10 = {'position': 'absolute', 'borderRadius': 16, 'overflow': 'hidden'};
    var4['buttonWrapper'] = var10;
    var10 = {};
    var10['position'] = var11;
    var4['confetti'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function QuestActivityButtonTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function QuestActivityButtonTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = 'QUEST_ACTIVITY_UNENROLLED_MODAL_KEY';
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function QuestActivityButton(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var6 = var2.applicationId;
            var _closure2_slot0 = var6;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 12;
            var3 = var8[var4];
            var5 = undefined;
            var11 = var7.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var1 = _closure1_slot6;
                var1 = var1.quests;
                return var1;
            };
            var13 = var10.bind(var11)(var9, var3);
            var _closure2_slot1 = var13;
            var3 = var8[var4];
            var12 = var7.bind(var5)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var3;
            var9 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.autoEnroll;
                return var1;
            };
            var9 = var11.bind(var12)(var10, var9);
            var _closure2_slot2 = var9;
            var12 = _closure1_slot3;
            var11 = var12.useMemo;
            var10 = new Array(2);
            var10[0] = var13;
            var10[1] = var6;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getEligibleQuestsForApplicationId;
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = true;
                var3 = var4.bind(var5)(var3, var2, var1);
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.config;
                    var3 = var1.features;
                    var2 = var3.includes;
                    var1 = _closure1_slot8;
                    var1 = var1.MOBILE_ACTIVITY_QUEST;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var11.bind(var12)(var6, var10);
            var _closure2_slot3 = var6;
            var4 = var8[var4];
            var8 = var7.bind(var5)(var4);
            var7 = var8.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.isDismissed;
                    var5 = _closure2_slot3;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    var4 = _closure2_slot3;
                    var1 = var4.id;
case 32:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var4, var3);
            var _closure2_slot4 = var8;
            var7 = _closure1_slot3;
            var4 = var7.useEffect;
            var3 = new Array(3);
            var3[0] = var6;
            var3[1] = var9;
            var3[2] = var8;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = null;
                    var1 = var3 == var1;
                    if(var1) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                    var2 = _closure2_slot3;
                    var4 = var2.userStatus;
                    var5 = var3 == var4;
                    var2 = undefined;
                    if(var5) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var2 = var4.enrolledAt;
case 36:
                    var1 = var3 != var2;
case 34:
                    if(var1) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var1 = _closure2_slot2;
case 38:
                    if(var1) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var1 = _closure2_slot4;
case 40:
                    if(var1) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 13;
                    var3 = var2[var3];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.pushLazy;
                    var7 = _closure1_slot0;
                    var3 = 15;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 14;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot3;
                    var6 = var6.id;
                    var2['questId'] = var6;
                    var1 = _closure1_slot16;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1, var3);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var4 = _closure1_slot9;
            var3 = _closure1_slot17;
            var2 = {};
            var2['quest'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 44:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/panel/native/QuestActivityButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();