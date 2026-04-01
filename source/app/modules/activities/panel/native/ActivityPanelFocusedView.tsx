// app/modules/activities/panel/native/ActivityPanelFocusedView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var4 = function useBaseActivityPanelFocusedView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.context;
            var3 = undefined;
            var _closure2_slot1 = var3;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 13;
            var1 = var7[var1];
            var1 = var5.bind(var3)(var1);
            var3 = var1.bind(var3)();
            var _closure2_slot0 = var3;
            var5 = _closure1_slot3;
            var1 = var5.useContext;
            var1 = var1.bind(var5)(var6);
            var1 = var1.wrapperDimensions;
            var5 = var1.isLandscape;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var1.isWindowLandscape;
            var5 = !var6;
case 2:
            var6 = var1.isLandscape;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var1.isWindowLandscape;
case 4:
            _closure2_slot1 = var6;
            var1 = {};
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot11;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var5 = _closure1_slot12;
case 8:
            var1['portraitSafeAreasConfig'] = var5;
            var5 = _closure1_slot3;
            var4 = var5.useMemo;
            var7 = var3.right;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var1 = {};
                    var2 = {};
                    var4 = false;
                    var2['disable'] = var4;
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.max;
                    var3 = _closure2_slot0;
                    var4 = var3.right;
                    var3 = 64;
                    var3 = var5.bind(var6)(var3, var4);
                    var2['override'] = var3;
                    var1['right'] = var2;
                    _fun0002_ip = 11; continue _fun0002;
case 9:
                    var1 = _closure1_slot13;
case 11:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1['landscapeSafeAreasConfig'] = var2;
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var2 = function BaseActivityPanelFocusedView(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var14 = var2.children;
            var10 = var2.header;
            var25 = var2.transitionState;
            var _closure2_slot0 = var25;
            var21 = var2.transitionCleanUp;
            var _closure2_slot1 = var21;
            var6 = var2.updateActivityPanelModeToPIP;
            var _closure2_slot2 = var6;
            var15 = var2.hasActivity;
            var8 = var2.context;
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 14;
            var2 = var16[var2];
            var4 = undefined;
            var9 = var7.bind(var4)(var2);
            var5 = var9.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var19 = var5.bind(var9)(var3, var2);
            var _closure2_slot3 = var19;
            var2 = _closure1_slot19;
            var20 = var2.bind(var4)();
            var _closure2_slot4 = var20;
            var11 = _closure1_slot1;
            var2 = 15;
            var2 = var16[var2];
            var2 = var11.bind(var4)(var2);
            var22 = var2.bind(var4)();
            var _closure2_slot5 = var22;
            var2 = 13;
            var2 = var16[var2];
            var2 = var11.bind(var4)(var2);
            var26 = var2.bind(var4)();
            var _closure2_slot6 = var26;
            var3 = _closure1_slot3;
            var2 = var3.useContext;
            var2 = var2.bind(var3)(var8);
            var13 = var2.wrapperDimensions;
            var _closure2_slot7 = var13;
            var24 = var2.wrapperOffset;
            var _closure2_slot8 = var24;
            var2 = 16;
            var2 = var16[var2];
            var5 = var7.bind(var4)(var2);
            var3 = var5.useLockedWebView;
            var2 = {};
            var2['transitionState'] = var25;
            var2['context'] = var8;
            var2 = var3.bind(var5)(var2);
            var23 = var2.shown;
            var _closure2_slot9 = var23;
            var17 = var2.renderWebView;
            var2 = 17;
            var2 = var16[var2];
            var2 = var11.bind(var4)(var2);
            var18 = var2.bind(var4)();
            var _closure2_slot10 = var18;
            var2 = 12;
            var2 = var16[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.radii;
            var27 = var2.lg;
            var _closure2_slot11 = var27;
            var9 = 18;
            var2 = var16[var9];
            var5 = var7.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function _() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var1 = var1.isWindowLandscape;
                    var2 = 0;
                    if(var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var2 = _closure2_slot11;
case 12:
                    var1 = _closure1_slot15;
                    var3 = 0;
                    if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var4 = _closure2_slot10;
                    var1 = var4.get;
                    var3 = var1.bind(var4)();
case 14:
                    var1 = _closure2_slot5;
                    var4 = var1.width;
                    var1 = var1.height;
                    var3 = var1 - var3;
                    var1 = _closure2_slot7;
                    var7 = var1.isWindowLandscape;
                    var1 = 0;
                    if(var7) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var7 = _closure2_slot6;
                    var1 = var7.top;
case 16:
                    var3 = var3 - var1;
                    var7 = _closure2_slot9;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    if(var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var1 = _closure2_slot5;
                    var14 = var1.height;
                    _fun0004_ip = 20; continue _fun0004;
case 18:
                    var7 = _closure2_slot8;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var14 = var1.y;
case 20:
                    var1 = function() {
                        var1 = function ActivityPanelFocusedViewTsx2() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var2 = arguments[0];
                                var1 = undefined;
                                if(!(var2 === var1)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                                var2 = false;
case 21:
                                if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                                var4 = _closure2_slot0;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 19;
                                var3 = var6[var3];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.TransitionStates;
                                var3 = var3.YEETED;
                                var2 = var4 === var3;
case 23:
                                if(!var2) { _fun0005_ip = 25; continue _fun0005 }
case 9:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 18;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.runOnJS;
                                var2 = _closure2_slot1;
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.bind(var1)();
case 25:
                                return var1;
                            }
                        };
                        var3 = {};
                        var2 = _closure2_slot0;
                        var3['transitionState'] = var2;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 19;
                        var5 = var8[var5];
                        var6 = undefined;
                        var5 = var7.bind(var6)(var5);
                        var5 = var5.TransitionStates;
                        var3['TransitionStates'] = var5;
                        var5 = 18;
                        var5 = var8[var5];
                        var5 = var7.bind(var6)(var5);
                        var5 = var5.runOnJS;
                        var3['runOnJS'] = var5;
                        var4 = _closure2_slot1;
                        var3['transitionCleanUp'] = var4;
                        var1['__closure'] = var3;
                        var3 = 2890456430056.0;
                        var1['__workletHash'] = var3;
                        var2 = _closure1_slot21;
                        var1['__initData'] = var2;
                        return var1;
                    };
                    var17 = undefined;
                    var13 = var1.bind(var17)();
                    var1 = _closure2_slot3;
                    var15 = 0;
                    if(!var1) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var7 = _closure2_slot9;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var15 = 0;
                    if(!var1) { _fun0004_ip = 26; continue _fun0004 }
case 28:
                    var7 = _closure2_slot8;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var7 = var1.y;
                    var1 = _closure2_slot5;
                    var1 = var1.height;
                    var7 = var7 / var1;
                    var1 = 1;
                    var15 = var1 - var7;
case 26:
                    var1 = {};
                    var8 = _closure2_slot3;
                    var7 = 1;
                    if(!var8) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 20;
                    var8 = var11[var8];
                    var12 = var10.bind(var17)(var8);
                    var11 = var12.withTiming;
                    var10 = _closure1_slot18;
                    var16 = _closure2_slot9;
                    var8 = var16.get;
                    var16 = var8.bind(var16)();
                    var18 = 'animate-always';
                    var8 = var18;
                    if(!var16) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var19 = _closure2_slot8;
                    var16 = var19.get;
                    var16 = var16.bind(var19)();
                    var16 = var16.gestureActive;
                    var8 = var18;
                    if(!var16) { _fun0004_ip = 31; continue _fun0004 }
case 33:
                    var8 = 'animate-never';
case 31:
                    var24 = var12;
                    var23 = var15;
                    var22 = var10;
                    var21 = var8;
                    var20 = var13;
                    var7 = var24[var11](var23, var22, var21, var20, var19);
case 29:
                    var1['opacity'] = var7;
                    var8 = {};
                    var10 = _closure2_slot3;
                    var7 = 0;
                    if(var10) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 21;
                    var10 = var12[var10];
                    var12 = var11.bind(var17)(var10);
                    var11 = var12.withSpring;
                    var15 = _closure2_slot8;
                    var10 = var15.get;
                    var10 = var10.bind(var15)();
                    var10 = var10.gestureActive;
                    if(!var10) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var15 = _closure2_slot0;
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var10 = 19;
                    var10 = var18[var10];
                    var10 = var16.bind(var17)(var10);
                    var10 = var10.TransitionStates;
                    var10 = var10.YEETED;
                    if(!(var15 === var10)) { _fun0004_ip = 38; continue _fun0004 }
case 36:
                    var10 = _closure1_slot9;
                    _fun0004_ip = 39; continue _fun0004;
case 38:
                    var10 = _closure1_slot8;
case 39:
                    var21 = 'animate-always';
                    var24 = var12;
                    var23 = var14;
                    var22 = var10;
                    var20 = var13;
                    var7 = var24[var11](var23, var22, var21, var20, var19);
case 34:
                    var8['translateY'] = var7;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var1['transform'] = var7;
                    var7 = _closure2_slot7;
                    var7 = var7.isWindowLandscape;
                    var5 = 0;
                    if(var7) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var6 = _closure2_slot6;
                    var5 = var6.top;
case 40:
                    var1['top'] = var5;
                    var1['width'] = var4;
                    var1['height'] = var3;
                    var1['borderTopStartRadius'] = var2;
                    var1['borderTopEndRadius'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['wrapperDimensions'] = var13;
            var8['lg'] = var27;
            var27 = _closure1_slot15;
            var8['IS_IOS'] = var27;
            var8['animatedKeyboardHeight'] = var18;
            var8['windowDimensions'] = var22;
            var8['safeArea'] = var26;
            var8['shown'] = var23;
            var8['wrapperOffset'] = var24;
            var8['transitionState'] = var25;
            var25 = 19;
            var25 = var16[var25];
            var25 = var7.bind(var4)(var25);
            var25 = var25.TransitionStates;
            var8['TransitionStates'] = var25;
            var25 = var16[var9];
            var25 = var7.bind(var4)(var25);
            var25 = var25.runOnJS;
            var8['runOnJS'] = var25;
            var8['transitionCleanUp'] = var21;
            var8['reduceMotion'] = var19;
            var19 = 20;
            var19 = var16[var19];
            var19 = var7.bind(var4)(var19);
            var19 = var19.withTiming;
            var8['withTiming'] = var19;
            var19 = _closure1_slot18;
            var8['REDUCED_MOTION_TIMING'] = var19;
            var21 = 21;
            var19 = var16[var21];
            var19 = var7.bind(var4)(var19);
            var19 = var19.withSpring;
            var8['withSpring'] = var19;
            var19 = _closure1_slot8;
            var8['ACTIVITY_LAYOUT_PHYSICS_GESTURE'] = var19;
            var19 = _closure1_slot9;
            var8['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = var19;
            var2['__closure'] = var8;
            var8 = 14941136536014.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot20;
            var2['__initData'] = var8;
            var2 = var3.bind(var5)(var2);
            var _closure2_slot12 = var2;
            var3 = var16[var9];
            var8 = var7.bind(var4)(var3);
            var5 = var8.useAnimatedStyle;
            var3 = function T() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.gestureActive;
                    if(var2) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var3 = _closure2_slot9;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var5 = 0;
                    if(!var2) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var5 = 1;
case 44:
                    _fun0006_ip = 2; continue _fun0006;
case 42:
                    var3 = _closure2_slot8;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.y;
                    var1 = _closure2_slot5;
                    var1 = var1.height;
                    var2 = var2 / var1;
                    var1 = 1;
                    var5 = var1 - var2;
case 2:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 21;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.withSpring;
                    var2 = _closure1_slot9;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var19 = {};
            var19['wrapperOffset'] = var24;
            var19['shown'] = var23;
            var19['windowDimensions'] = var22;
            var21 = var16[var21];
            var21 = var7.bind(var4)(var21);
            var21 = var21.withSpring;
            var19['withSpring'] = var21;
            var21 = _closure1_slot9;
            var19['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = var21;
            var3['__closure'] = var19;
            var19 = 8351375063373.0;
            var3['__workletHash'] = var19;
            var19 = _closure1_slot22;
            var3['__initData'] = var19;
            var21 = var5.bind(var8)(var3);
            var8 = _closure1_slot3;
            var5 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var20.wrapper;
            var3[1] = var2;
            var2 = function() {
                var1 = _closure2_slot4;
                var3 = var1.wrapper;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = _closure2_slot12;
                var1[1] = var2;
                return var1;
            };
            var19 = var5.bind(var8)(var2, var3);
            var2 = var16[var9];
            var5 = var7.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function A() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure1_slot15;
                    var3 = 0;
                    if(!var1) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var2 = _closure2_slot10;
                    var1 = var2.get;
                    var3 = var1.bind(var2)();
case 46:
                    var1 = {};
                    var2 = _closure2_slot7;
                    var4 = var2.width;
                    var1['width'] = var4;
                    var2 = var2.height;
                    var2 = var2 - var3;
                    var1['height'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var22 = _closure1_slot15;
            var8['IS_IOS'] = var22;
            var8['animatedKeyboardHeight'] = var18;
            var8['wrapperDimensions'] = var13;
            var2['__closure'] = var8;
            var8 = 10029372697959.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot23;
            var2['__initData'] = var8;
            var13 = var3.bind(var5)(var2);
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var18 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot17;
            var1 = 22;
            var1 = var16[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var5 = _closure1_slot14;
            var5 = var5.DARK;
            var1['theme'] = var5;
            var8 = _closure1_slot16;
            var5 = var16[var9];
            var5 = var11.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var22 = var20.shade;
            var20 = new Array(2);
            var20[0] = var22;
            var20[1] = var21;
            var5['style'] = var20;
            var20 = 'none';
            var5['pointerEvents'] = var20;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot17;
            var6 = 23;
            var6 = var16[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.AccessibilityViewAnimated;
            var6 = {'style': null, 'nativeID': 'activity-panel-focused-view', 'accessibilityViewIsModal': true};
            var6['style'] = var19;
            var6['onAccessibilityEscape'] = var18;
            var12 = _closure1_slot16;
            var9 = var16[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.View;
            var9 = {};
            var9['style'] = var13;
            var13 = null;
            if(!var17) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var13 = null;
            if(!var15) { _fun0003_ip = 48; continue _fun0003 }
case 50:
            var13 = var14;
case 48:
            var9['children'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot25 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var9 = var8[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var9 = var6.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var15 = var6.StyleSheet;
    var6 = 2;
    var6 = var8[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ActivityLayoutMode;
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.ACTIVITY_LAYOUT_PHYSICS_GESTURE;
    var _closure1_slot8 = var10;
    var10 = var6.ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
    var _closure1_slot9 = var10;
    var6 = var6.ActivityPanelModes;
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG;
    var _closure1_slot11 = var10;
    var10 = var6.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot12 = var10;
    var6 = var6.DEFAULT_LANDSCAPE_PILLERBOX_CONFIG;
    var _closure1_slot13 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ThemeTypes;
    var _closure1_slot14 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.IS_IOS;
    var _closure1_slot15 = var6;
    var6 = 10;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.jsx;
    var _closure1_slot16 = var10;
    var6 = var6.jsxs;
    var _closure1_slot17 = var6;
    var6 = {};
    var10 = 300;
    var6['duration'] = var10;
    var _closure1_slot18 = var6;
    var6 = 11;
    var6 = var8[var6];
    var11 = var7.bind(var1)(var6);
    var10 = var11.createStyles;
    var6 = {};
    var12 = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
    var13 = 12;
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var12['backgroundColor'] = var16;
    var6['wrapper'] = var12;
    var12 = {};
    var18 = var15.absoluteFillObject;
    var19 = var12;
    var15 = copyDataProperties(var19, var18);
    var13 = var8[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var14 = var13.BLACK;
    var13 = 'backgroundColor';
    var12[12] = var14;
    var6['shade'] = var12;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot19 = var6;
    var6 = {};
    var10 = "function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}";
    var6['code'] = var10;
    var _closure1_slot20 = var6;
    var6 = {};
    var10 = 'function ActivityPanelFocusedViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}';
    var6['code'] = var10;
    var _closure1_slot21 = var6;
    var6 = {};
    var10 = 'function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}';
    var6['code'] = var10;
    var _closure1_slot22 = var6;
    var6 = {};
    var10 = 'function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};}';
    var6['code'] = var10;
    var _closure1_slot23 = var6;
    var6 = var9.memo;
    var5 = function(arg1) {
        var2 = arg1;
        var12 = var2.transitionState;
        var _closure2_slot0 = var12;
        var11 = var2.transitionCleanUp;
        var _closure2_slot1 = var11;
        var4 = _closure1_slot0;
        var10 = _closure1_slot2;
        var3 = 14;
        var3 = var10[var3];
        var5 = undefined;
        var8 = var4.bind(var5)(var3);
        var7 = var8.useStateFromStoresObject;
        var3 = _closure1_slot6;
        var6 = new Array(2);
        var6[0] = var3;
        var3 = _closure1_slot5;
        var6[1] = var3;
        var4 = function() {
            var3 = _closure1_slot6;
            var1 = var3.getConnectedActivityLocation;
            var5 = var1.bind(var3)();
            var1 = var3.getSelfEmbeddedActivityForLocation;
            var3 = var1.bind(var3)(var5);
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 24;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var1 = var4.getEmbeddedActivityLocationChannelId;
            var5 = var1.bind(var4)(var5);
            var1 = {};
            var4 = _closure1_slot5;
            var2 = var4.getChannel;
            var2 = var2.bind(var4)(var5);
            var1['channel'] = var2;
            var2 = null;
            var2 = var2 != var3;
            var1['hasActivity'] = var2;
            return var1;
        };
        var3 = new Array(0);
        var3 = var7.bind(var8)(var6, var4, var3);
        var7 = var3.channel;
        var _closure2_slot2 = var7;
        var9 = var3.hasActivity;
        var _closure2_slot3 = var9;
        var4 = _closure1_slot24;
        var3 = {};
        var8 = _closure1_slot1;
        var6 = 25;
        var6 = var10[var6];
        var6 = var8.bind(var5)(var6);
        var3['context'] = var6;
        var3 = var4.bind(var5)(var3);
        var6 = var3.portraitSafeAreasConfig;
        var _closure2_slot4 = var6;
        var5 = var3.landscapeSafeAreasConfig;
        var _closure2_slot5 = var5;
        var10 = _closure1_slot3;
        var8 = var10.useMemo;
        var4 = function() {
            var4 = _closure1_slot16;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 26;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3 = new Array(0);
        var8 = var8.bind(var10)(var4, var3);
        var _closure2_slot6 = var8;
        var13 = _closure1_slot3;
        var10 = var13.useCallback;
        var4 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 27;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.updateActivityPanelMode;
            var2 = _closure1_slot10;
            var2 = var2.PIP;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = new Array(0);
        var10 = var10.bind(var13)(var4, var3);
        var _closure2_slot7 = var10;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(8);
        var2[0] = var12;
        var2[1] = var11;
        var2[2] = var10;
        var2[3] = var9;
        var2[4] = var8;
        var2[5] = var7;
        var2[6] = var6;
        var2[7] = var5;
        var1 = function() {
            var4 = _closure1_slot16;
            var3 = _closure1_slot25;
            var2 = {};
            var1 = _closure2_slot0;
            var2['transitionState'] = var1;
            var1 = _closure2_slot1;
            var2['transitionCleanUp'] = var1;
            var1 = _closure2_slot7;
            var2['updateActivityPanelModeToPIP'] = var1;
            var1 = _closure2_slot3;
            var2['hasActivity'] = var1;
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 25;
            var5 = var10[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var2['context'] = var5;
            var5 = _closure2_slot6;
            var2['header'] = var5;
            var7 = _closure1_slot16;
            var5 = 28;
            var5 = var10[var5];
            var6 = var6.bind(var1)(var5);
            var5 = {};
            var10 = _closure2_slot2;
            var5['channel'] = var10;
            var9 = _closure1_slot7;
            var9 = var9.FOCUSED;
            var5['layoutMode'] = var9;
            var9 = _closure2_slot4;
            var5['portraitSafeAreasConfig'] = var9;
            var8 = _closure2_slot5;
            var5['landscapeSafeAreasConfig'] = var8;
            var5 = var7.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var5 = var6.bind(var9)(var5);
    var6 = 29;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/panel/native/ActivityPanelFocusedView.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['useBaseActivityPanelFocusedView'] = var4;
    var3['BaseActivityPanelFocusedView'] = var2;
    return var1;
})();