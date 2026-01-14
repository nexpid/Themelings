// app/modules/activities/panel/native/ActivityPanelPIPView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var8;
    var4 = function useBaseActivityPanelPIPView() {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 15;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var5.bind(var3)(var1);
        var3 = var1.bind(var3)();
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var6 = var3.right;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = {};
                var2 = {};
                var3 = false;
                var2['disable'] = var3;
                var3 = global;
                var6 = var3.Math;
                var5 = var6.max;
                var4 = _closure1_slot14;
                var7 = _closure2_slot0;
                var3 = null;
                var9 = var3 == var7;
                var7 = undefined;
                if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var8 = _closure2_slot0;
                var7 = var8.right;
case 2:
                var8 = var3 != var7;
                var3 = 0;
                if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = var7;
case 4:
                var3 = var5.bind(var6)(var4, var3);
                var2['override'] = var3;
                var1['right'] = var2;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['landscapeSafeAreasConfig'] = var2;
        return var1;
    };
    var _closure1_slot24 = var4;
    var2 = function BaseActivityPanelPIPView(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var18 = var2.children;
            var22 = var2.transitionState;
            var _closure2_slot0 = var22;
            var21 = var2.transitionCleanUp;
            var _closure2_slot1 = var21;
            var19 = var2.pipOrientationLockState;
            var14 = var2.hasActivity;
            var12 = var2.context;
            var2 = _closure1_slot20;
            var4 = undefined;
            var17 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 16;
            var2 = var11[var2];
            var7 = var6.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var23 = var5.bind(var7)(var3, var2);
            var _closure2_slot2 = var23;
            var9 = _closure1_slot1;
            var2 = 17;
            var2 = var11[var2];
            var2 = var9.bind(var4)(var2);
            var28 = var2.bind(var4)();
            var _closure2_slot3 = var28;
            var2 = 15;
            var2 = var11[var2];
            var2 = var9.bind(var4)(var2);
            var27 = var2.bind(var4)();
            var _closure2_slot4 = var27;
            var3 = _closure1_slot3;
            var2 = var3.useContext;
            var2 = var2.bind(var3)(var12);
            var3 = var2.wrapperOffset;
            var _closure2_slot5 = var3;
            var13 = var2.setMode;
            var _closure2_slot6 = var13;
            var5 = var2.pipState;
            var _closure2_slot7 = var5;
            var26 = var2.pipAvoidanceSpecs;
            var _closure2_slot8 = var26;
            var10 = var2.wrapperDimensions;
            var2 = 18;
            var2 = var11[var2];
            var8 = var6.bind(var4)(var2);
            var7 = var8.useLockedWebView;
            var2 = {};
            var2['transitionState'] = var22;
            var2['context'] = var12;
            var2 = var7.bind(var8)(var2);
            var24 = var2.shown;
            var _closure2_slot9 = var24;
            var16 = var2.renderWebView;
            var12 = _closure1_slot3;
            var8 = var12.useEffect;
            var7 = new Array(1);
            var7[0] = var3;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = _closure2_slot5;
                var2 = {};
                var5 = false;
                var2['gestureActive'] = var5;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var8.bind(var12)(var2, var7);
            var7 = _closure1_slot6;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.shouldDisableSafeAreas;
                var1 = var1.bind(var2)();
                return var1;
            };
            var25 = var7.bind(var4)(var2);
            var _closure2_slot10 = var25;
            var8 = 20;
            var2 = var11[var8];
            var12 = var6.bind(var4)(var2);
            var7 = var12.useAnimatedStyle;
            var2 = function W() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var2 = var1.x;
                    var6 = var1.y;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 21;
                    var1 = var4[var1];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var1);
                    var3 = var5.getClampedPIPPosition;
                    var1 = {};
                    var1['pipX'] = var2;
                    var1['pipY'] = var6;
                    var6 = _closure1_slot10;
                    var6 = var6.width;
                    var1['width'] = var6;
                    var6 = _closure1_slot10;
                    var6 = var6.height;
                    var1['height'] = var6;
                    var6 = _closure2_slot3;
                    var1['windowDimensions'] = var6;
                    var6 = _closure2_slot4;
                    var1['safeArea'] = var6;
                    var7 = _closure2_slot8;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var6 = var6.bottom;
                    var1['bottomAvoidanceRegion'] = var6;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var6 = var6.top;
                    var1['topAvoidanceRegion'] = var6;
                    var7 = _closure2_slot5;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var7 = var6.gestureActive;
                    var6 = undefined;
                    if(!var7) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var8 = _closure2_slot5;
                    var7 = var8.get;
                    var6 = var7.bind(var8)();
case 6:
                    var1['positionOffset'] = var6;
                    var6 = _closure2_slot10;
                    var1['disableHorizontalSafeAreas'] = var6;
                    var1 = var3.bind(var5)(var1);
                    var9 = var1.x;
                    var13 = var1.y;
                    var3 = _closure2_slot9;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = _closure2_slot2;
case 8:
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = 0.5;
                    if(!(var2 < var1)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var1 = 0;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 14; continue _fun0003 }
case 12:
                    var1 = _closure2_slot3;
                    var2 = var1.width;
                    var1 = global;
                    var6 = var1.Math;
                    var5 = var6.max;
                    var1 = _closure2_slot4;
                    var3 = var1.right;
                    var1 = _closure1_slot17;
                    var1 = var5.bind(var6)(var3, var1);
                    var1 = var2 + var1;
                    _fun0003_ip = 15; continue _fun0003;
case 14:
                    var2 = _closure1_slot10;
                    var3 = var2.width;
                    var2 = global;
                    var7 = var2.Math;
                    var6 = var7.max;
                    var2 = _closure2_slot4;
                    var5 = var2.right;
                    var2 = _closure1_slot17;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3 + var2;
                    var1 = -var2;
case 15:
                    var9 = var1;
case 10:
                    var1 = function() {
                        var1 = function ActivityPanelPIPViewTsx2() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var2 = arguments[0];
                                var1 = undefined;
                                if(!(var2 === var1)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                                var2 = false;
case 16:
                                if(!var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                                var4 = _closure2_slot0;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 22;
                                var3 = var6[var3];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.TransitionStates;
                                var3 = var3.YEETED;
                                var2 = var4 === var3;
case 18:
                                if(!var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 20;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.runOnJS;
                                var2 = _closure2_slot1;
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.bind(var1)();
case 20:
                                return var1;
                            }
                        };
                        var3 = {};
                        var2 = _closure2_slot0;
                        var3['transitionState'] = var2;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 22;
                        var5 = var8[var5];
                        var6 = undefined;
                        var5 = var7.bind(var6)(var5);
                        var5 = var5.TransitionStates;
                        var3['TransitionStates'] = var5;
                        var5 = 20;
                        var5 = var8[var5];
                        var5 = var7.bind(var6)(var5);
                        var5 = var5.runOnJS;
                        var3['runOnJS'] = var5;
                        var4 = _closure2_slot1;
                        var3['transitionCleanUp'] = var4;
                        var1['__closure'] = var3;
                        var3 = 5141562491372.0;
                        var1['__workletHash'] = var3;
                        var2 = _closure1_slot22;
                        var1['__initData'] = var2;
                        return var1;
                    };
                    var10 = var1.bind(var4)();
                    var1 = {};
                    var5 = _closure2_slot2;
                    var3 = 1;
                    var2 = var3;
                    if(!var5) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 23;
                    var5 = var7[var5];
                    var8 = var6.bind(var4)(var5);
                    var7 = var8.withTiming;
                    var6 = _closure2_slot9;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = 0;
                    if(!var5) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var6 = var3;
case 24:
                    var16 = _closure1_slot19;
                    var15 = 'animate-always';
                    var18 = var8;
                    var17 = var6;
                    var14 = var10;
                    var2 = var18[var7](var17, var16, var15, var14, var13);
case 22:
                    var1['opacity'] = var2;
                    var3 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 24;
                    var2 = var2[var7];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot5;
                    var2 = var8.get;
                    var2 = var2.bind(var8)();
                    var2 = var2.gestureActive;
                    if(var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var2 = _closure1_slot13;
                    _fun0003_ip = 28; continue _fun0003;
case 26:
                    var2 = _closure1_slot12;
case 28:
                    var8 = 'animate-always';
                    var2 = var5.bind(var6)(var13, var2, var8);
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.withSpring;
                    var13 = _closure2_slot5;
                    var5 = var13.get;
                    var5 = var5.bind(var13)();
                    var5 = var5.gestureActive;
                    if(var5) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var5 = _closure1_slot13;
                    _fun0003_ip = 31; continue _fun0003;
case 29:
                    var5 = _closure1_slot12;
case 31:
                    var11 = _closure2_slot2;
                    var4 = undefined;
                    if(var11) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var4 = var10;
case 32:
                    var18 = var7;
                    var17 = var9;
                    var16 = var5;
                    var15 = var8;
                    var14 = var4;
                    var4 = var18[var6](var17, var16, var15, var14, var13);
                    var3['translateX'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var20['pipState'] = var5;
            var29 = 21;
            var29 = var11[var29];
            var29 = var6.bind(var4)(var29);
            var29 = var29.getClampedPIPPosition;
            var20['getClampedPIPPosition'] = var29;
            var29 = _closure1_slot10;
            var20['ACTIVITY_PIP_SIZE'] = var29;
            var20['windowDimensions'] = var28;
            var20['safeArea'] = var27;
            var20['pipAvoidanceSpecs'] = var26;
            var20['wrapperOffset'] = var3;
            var20['disableHorizontalSafeAreas'] = var25;
            var20['shown'] = var24;
            var20['reduceMotion'] = var23;
            var23 = _closure1_slot17;
            var20['PIP_WINDOW_OFFSET'] = var23;
            var20['transitionState'] = var22;
            var22 = 22;
            var22 = var11[var22];
            var22 = var6.bind(var4)(var22);
            var22 = var22.TransitionStates;
            var20['TransitionStates'] = var22;
            var22 = var11[var8];
            var22 = var6.bind(var4)(var22);
            var22 = var22.runOnJS;
            var20['runOnJS'] = var22;
            var20['transitionCleanUp'] = var21;
            var21 = 23;
            var21 = var11[var21];
            var21 = var6.bind(var4)(var21);
            var21 = var21.withTiming;
            var20['withTiming'] = var21;
            var21 = _closure1_slot19;
            var20['REDUCED_MOTION_TIMING'] = var21;
            var21 = 24;
            var21 = var11[var21];
            var21 = var6.bind(var4)(var21);
            var21 = var21.withSpring;
            var20['withSpring'] = var21;
            var21 = _closure1_slot12;
            var20['ACTIVITY_LAYOUT_PHYSICS_GESTURE'] = var21;
            var21 = _closure1_slot13;
            var20['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = var21;
            var2['__closure'] = var20;
            var20 = 8039199265160.0;
            var2['__workletHash'] = var20;
            var20 = _closure1_slot21;
            var2['__initData'] = var20;
            var12 = var7.bind(var12)(var2);
            var2 = 25;
            var2 = var11[var2];
            var7 = var9.bind(var4)(var2);
            var2 = {};
            var20 = _closure1_slot10;
            var20 = var20.width;
            var2['pipWidth'] = var20;
            var20 = _closure1_slot10;
            var20 = var20.height;
            var2['pipHeight'] = var20;
            var2['pipOrientationLockState'] = var19;
            var10 = var10.isLandscape;
            var2['isLandscape'] = var10;
            var2 = var7.bind(var4)(var2);
            var20 = var2.width;
            var _closure2_slot11 = var20;
            var2 = var2.height;
            var _closure2_slot12 = var2;
            var19 = _closure1_slot3;
            var10 = var19.useMemo;
            var7 = new Array(2);
            var7[0] = var20;
            var7[1] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot11;
                var1['width'] = var3;
                var2 = _closure2_slot12;
                var1['height'] = var2;
                var2 = 'none';
                var1['pointerEvents'] = var2;
                return var1;
            };
            var19 = var10.bind(var19)(var2, var7);
            var10 = _closure1_slot3;
            var7 = var10.useCallback;
            var2 = function J() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.runOnJS;
                var3 = _closure2_slot6;
                var3 = var4.bind(var5)(var3);
                var2 = _closure1_slot11;
                var2 = var2.PANEL;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = {};
            var20 = var11[var8];
            var20 = var6.bind(var4)(var20);
            var20 = var20.runOnJS;
            var1['runOnJS'] = var20;
            var1['setMode'] = var13;
            var20 = _closure1_slot11;
            var1['ActivityPanelModes'] = var20;
            var2['__closure'] = var1;
            var1 = 2951177166574.0;
            var2['__workletHash'] = var1;
            var1 = _closure1_slot23;
            var2['__initData'] = var1;
            var1 = new Array(1);
            var1[0] = var13;
            var10 = var7.bind(var10)(var2, var1);
            var7 = 26;
            var1 = var11[var7];
            var2 = var9.bind(var4)(var1);
            var1 = {};
            var13 = true;
            var1['panGestureEnabled'] = var13;
            var1['onTapGestureStart'] = var10;
            var7 = var11[var7];
            var7 = var6.bind(var4)(var7);
            var7 = var7.MorphablePanelModes;
            var7 = var7.PIP;
            var1['mode'] = var7;
            var1['pipState'] = var5;
            var1['wrapperOffset'] = var3;
            var3 = false;
            var1['disableHorizontalSafeAreas'] = var3;
            var10 = var2.bind(var4)(var1);
            var3 = _closure1_slot18;
            var1 = 27;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var5 = _closure1_slot16;
            var5 = var5.DARK;
            var1['theme'] = var5;
            var7 = _closure1_slot18;
            var5 = 28;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var10;
            var10 = _closure1_slot18;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.View;
            var8 = {};
            var13 = var17.wrapper;
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var8['style'] = var11;
            var13 = _closure1_slot18;
            var12 = _closure1_slot4;
            var11 = {};
            var17 = var17.mask;
            var11['style'] = var17;
            var16 = !var16;
            if(var16) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var16 = !var14;
case 34:
            var14 = !var16;
            if(var16) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var17 = _closure1_slot18;
            var16 = _closure1_slot4;
            var15 = {};
            var15['style'] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 36:
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
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
    var6 = var6.View;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var15.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var15.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var15.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var15.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ActivityLayoutMode;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var13 = var6.ACTIVITY_PIP_SIZE;
    var _closure1_slot10 = var13;
    var10 = var6.ActivityPanelModes;
    var _closure1_slot11 = var10;
    var10 = var6.ACTIVITY_LAYOUT_PHYSICS_GESTURE;
    var _closure1_slot12 = var10;
    var10 = var6.ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
    var _closure1_slot13 = var10;
    var6 = var6.LANDSCAPE_IFRAME_HORIZONTAL_MARGIN;
    var _closure1_slot14 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot15 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ThemeTypes;
    var _closure1_slot16 = var6;
    var6 = 10;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.PIP_WINDOW_OFFSET;
    var _closure1_slot17 = var6;
    var6 = 11;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.jsx;
    var _closure1_slot18 = var6;
    var6 = {};
    var10 = 300;
    var6['duration'] = var10;
    var _closure1_slot19 = var6;
    var6 = 12;
    var10 = var8[var6];
    var11 = var7.bind(var1)(var10);
    var10 = var11.generateBoxShadowStyle;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS;
    var16 = var10.bind(var11)(var6);
    var6 = 13;
    var6 = var8[var6];
    var11 = var7.bind(var1)(var6);
    var10 = var11.createStyles;
    var6 = {};
    var12 = {};
    var14 = 14;
    var17 = var8[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var12['borderRadius'] = var17;
    var20 = var12;
    var19 = var13;
    var17 = copyDataProperties(var20, var19);
    var20 = var12;
    var19 = var16;
    var16 = copyDataProperties(var20, var19);
    var6['wrapper'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
    var16 = var8[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var12['borderRadius'] = var16;
    var14 = var8[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var12['backgroundColor'] = var14;
    var20 = var12;
    var19 = var13;
    var13 = copyDataProperties(var20, var19);
    var6['mask'] = var12;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot20 = var6;
    var6 = {};
    var10 = "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}";
    var6['code'] = var10;
    var _closure1_slot21 = var6;
    var6 = {};
    var10 = 'function ActivityPanelPIPViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}';
    var6['code'] = var10;
    var _closure1_slot22 = var6;
    var6 = {};
    var10 = 'function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}';
    var6['code'] = var10;
    var _closure1_slot23 = var6;
    var6 = var9.memo;
    var5 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var5 = var2.transitionState;
            var _closure2_slot0 = var5;
            var6 = var2.transitionCleanUp;
            var _closure2_slot1 = var6;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 16;
            var3 = var3[var9];
            var10 = var7.bind(var4)(var3);
            var8 = var10.useStateFromStoresObject;
            var3 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var4 = _closure1_slot8;
                var1 = var4.getConnectedActivityLocation;
                var3 = var1.bind(var4)();
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 29;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.getEmbeddedActivityLocationChannelId;
                var2 = var2.bind(var5)(var3);
                var1['channelId'] = var2;
                var2 = var4.getSelfEmbeddedActivityForLocation;
                var2 = var2.bind(var4)(var3);
                var1['activity'] = var2;
                return var1;
            };
            var3 = var8.bind(var10)(var7, var3);
            var7 = var3.channelId;
            var _closure2_slot2 = var7;
            var10 = var3.activity;
            var _closure2_slot3 = var10;
            var3 = null;
            var7 = var3 == var10;
            var3 = undefined;
            if(var7) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var3 = var10.applicationId;
case 38:
            _closure2_slot4 = var3;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = var3[var9];
            var13 = var8.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var4 = _closure1_slot8;
                    var3 = var4.getPipOrientationLockStateForApp;
                    var2 = _closure2_slot4;
                    var1 = var3.bind(var4)(var2);
case 40:
                    return var1;
                }
            };
            var7 = var12.bind(var13)(var11, var7);
            _closure2_slot5 = var7;
            var3 = var3[var9];
            var11 = var8.bind(var4)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var11)(var8, var3);
            _closure2_slot6 = var9;
            var3 = _closure1_slot24;
            var3 = var3.bind(var4)();
            var8 = var3.landscapeSafeAreasConfig;
            _closure2_slot7 = var8;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(6);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var7;
            var2[4] = var6;
            var2[5] = var5;
            var1 = function() {
                var4 = _closure1_slot18;
                var3 = _closure1_slot25;
                var2 = {};
                var1 = _closure2_slot0;
                var2['transitionState'] = var1;
                var1 = _closure2_slot1;
                var2['transitionCleanUp'] = var1;
                var1 = _closure2_slot5;
                var2['pipOrientationLockState'] = var1;
                var5 = _closure2_slot3;
                var1 = null;
                var1 = var1 != var5;
                var2['hasActivity'] = var1;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 30;
                var5 = var10[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var2['context'] = var5;
                var7 = _closure1_slot18;
                var5 = 31;
                var5 = var10[var5];
                var6 = var6.bind(var1)(var5);
                var5 = {};
                var10 = _closure2_slot6;
                var5['channel'] = var10;
                var10 = _closure1_slot9;
                var10 = var10.PIP;
                var5['layoutMode'] = var10;
                var9 = _closure1_slot15;
                var5['portraitSafeAreasConfig'] = var9;
                var8 = _closure2_slot7;
                var5['landscapeSafeAreasConfig'] = var8;
                var5 = var7.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var5 = var6.bind(var9)(var5);
    var6 = 32;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/panel/native/ActivityPanelPIPView.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['useBaseActivityPanelPIPView'] = var4;
    var3['BaseActivityPanelPIPView'] = var2;
    return var1;
})();