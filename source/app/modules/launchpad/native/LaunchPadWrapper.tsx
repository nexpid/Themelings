// app/modules/launchpad/native/LaunchPadWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.Pressable;
    var _closure1_slot6 = var7;
    var7 = var4.TouchableOpacity;
    var _closure1_slot7 = var7;
    var4 = var4.StyleSheet;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LaunchPadTypes;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot10 = var7;
    var4 = var4.ComponentActions;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': '100%', 'width': '100%'};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingTop'] = var12;
    var4['modalWrapper'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'width': '100%'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['height'] = var10;
    var4['a11yDismiss'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/LaunchPadWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function LaunchPadWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.launchPadType;
            var _closure2_slot0 = var8;
            var15 = var2.gestureState;
            var3 = var2.launchPadShown;
            var19 = var2.launchPadSharedState;
            var14 = var2.launchPadPullTabState;
            var13 = var2.updaters;
            var _closure2_slot1 = var13;
            var2 = _closure1_slot14;
            var4 = undefined;
            var21 = var2.bind(var4)();
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var7 = var6.bind(var4)(var2);
            var2 = {};
            var2['launchPadSharedState'] = var19;
            var2['launchPadShown'] = var3;
            var2['gestureState'] = var15;
            var2 = var7.bind(var4)(var2);
            var9 = var2.launchPadCoverStyles;
            var10 = var2.launchPadStyles;
            var2 = 11;
            var2 = var5[var2];
            var2 = var6.bind(var4)(var2);
            var20 = var2.bind(var4)(var3);
            var _closure2_slot2 = var20;
            var12 = _closure1_slot4;
            var7 = var12.useRef;
            var2 = !var20;
            var2 = var7.bind(var12)(var2);
            var _closure2_slot3 = var2;
            var11 = var12.useState;
            var7 = {};
            var17 = var11.bind(var12)(var7);
            var11 = _closure1_slot3;
            var7 = 2;
            var11 = var11.bind(var4)(var17, var7);
            var7 = 1;
            var7 = var11[var7];
            var _closure2_slot4 = var7;
            var17 = var12.useEffect;
            var11 = new Array(1);
            var11[0] = var20;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    if(var3) { _fun0002_ip = 54; continue _fun0002 }
 12:
                    var3 = global;
                    var6 = var3.setTimeout;
                    var5 = undefined;
                    var4 = function() {
                        var3 = _closure2_slot3;
                        var2 = true;
                        var3['current'] = var2;
                        var3 = _closure2_slot4;
                        var1 = undefined;
                        var2 = {};
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = 1000;
                    var3 = var6.bind(var5)(var4, var3);
                    var _closure3_slot0 = var3;
                    var2 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var2;
 54:
                    var2 = _closure2_slot3;
                    var1 = false;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var17.bind(var12)(var7, var11);
            var17 = var12.useCallback;
            var11 = new Array(1);
            var11[0] = var13;
            var7 = function() {
                var3 = _closure2_slot1;
                var2 = var3.setLaunchPadPosition;
                var1 = 0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var17.bind(var12)(var7, var11);
            var _closure2_slot5 = var22;
            var17 = var12.useEffect;
            var11 = new Array(1);
            var11[0] = var20;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0003_ip = 55; continue _fun0003 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.track;
                    var1 = _closure1_slot10;
                    var1 = var1.LAUNCHPAD_OPENED;
                    var1 = var2.bind(var3)(var1);
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var17.bind(var12)(var7, var11);
            var17 = var12.useEffect;
            var11 = new Array(2);
            var11[0] = var8;
            var11[1] = var20;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot9;
                    var3 = var3.PULL_TAB;
                    if(!(var4 === var3)) { _fun0004_ip = 117; continue _fun0004 }
 24:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 13;
                    var3 = var5[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.setLaunchPadPullTabExclusionRect;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0004_ip = 149; continue _fun0004 }
 63:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 14;
                    var3 = var7[var2];
                    var4 = var5.bind(var6)(var3);
                    var3 = var4.triggerHapticFeedback;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 149; continue _fun0004;
 117:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.clearLaunchPadPullTabExclusionRect;
                    var1 = var1.bind(var2)();
 149:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var17.bind(var12)(var7, var11);
            var11 = var12.useEffect;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.clearLaunchPadPullTabExclusionRect;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var3 = var11.bind(var12)(var3, var7);
            var3 = 15;
            var3 = var5[var3];
            var7 = var6.bind(var4)(var3);
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0005_ip = 20; continue _fun0005 }
 10:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
 20:
                    var1 = _closure2_slot2;
                    return var1;
                }
            };
            var3 = var7.bind(var4)(var3);
            var1 = function useLaunchPadComponentDispatchListeners(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var3 = var7[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.addRouteChangeListener;
                    var3 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.setLaunchPadPosition;
                        var1 = 0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    var _closure4_slot0 = var3;
                    var11 = function showLaunchPad() {
                        var3 = _closure3_slot0;
                        var2 = var3.setLaunchPadShown;
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.setLaunchPadPosition;
                        var1 = 1;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var _closure4_slot1 = var11;
                    var5 = function hideLaunchPad() {
                        var3 = _closure3_slot0;
                        var2 = var3.setLaunchPadShown;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.setLaunchPadPosition;
                        var1 = 0;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var _closure4_slot2 = var5;
                    var4 = _closure1_slot0;
                    var3 = 9;
                    var8 = var7[var3];
                    var8 = var4.bind(var6)(var8);
                    var10 = var8.ComponentDispatch;
                    var9 = var10.subscribe;
                    var2 = _closure1_slot11;
                    var8 = var2.LAUNCH_PAD_SHOW;
                    var8 = var9.bind(var10)(var8, var11);
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.ComponentDispatch;
                    var3 = var4.subscribe;
                    var2 = var2.LAUNCH_PAD_HIDE;
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var3 = _closure4_slot0;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 9;
                        var7 = var6[var4];
                        var7 = var5.bind(var1)(var7);
                        var10 = var7.ComponentDispatch;
                        var9 = var10.unsubscribe;
                        var3 = _closure1_slot11;
                        var8 = var3.LAUNCH_PAD_SHOW;
                        var7 = _closure4_slot1;
                        var7 = var9.bind(var10)(var8, var7);
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var5 = var4.ComponentDispatch;
                        var4 = var5.unsubscribe;
                        var3 = var3.LAUNCH_PAD_HIDE;
                        var2 = _closure4_slot2;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var1 = var1.bind(var4)(var13);
            var1 = 16;
            var1 = var5[var1];
            var1 = var6.bind(var4)(var1);
            var18 = var1.bind(var4)(var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = _closure1_slot8;
            var7 = var7.absoluteFill;
            var1['style'] = var7;
            var7 = 'box-none';
            var1['pointerEvents'] = var7;
            var7 = _closure1_slot12;
            var11 = 17;
            var5 = var5[var11];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var5['style'] = var9;
            var9 = 'none';
            var5['pointerEvents'] = var9;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = _closure1_slot9;
            var7 = var6.PULL_TAB;
            var6 = null;
            if(!(var8 === var7)) { _fun0001_ip = 538; continue _fun0001 }
 486:
            var12 = _closure1_slot12;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var7 = 18;
            var7 = var17[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['gestureState'] = var15;
            var7['launchPadSharedState'] = var19;
            var7['launchPadPullTabState'] = var14;
            var7['updaters'] = var13;
            var6 = var12.bind(var4)(var8, var7);
 538:
            var5[1] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var6['style'] = var10;
            if(!var20) { _fun0001_ip = 579; continue _fun0001 }
 577:
            var9 = undefined;
 579:
            var6['pointerEvents'] = var9;
            var11 = _closure1_slot13;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 19;
            var9 = var17[var9];
            var9 = var14.bind(var4)(var9);
            var10 = var9.AccessibilityView;
            var9 = {};
            var12 = 'launch-pad';
            var9['nativeID'] = var12;
            var12 = var21.modalWrapper;
            var9['style'] = var12;
            var9['onAccessibilityEscape'] = var22;
            var9['accessibilityViewIsModal'] = var20;
            var15 = _closure1_slot12;
            var13 = _closure1_slot6;
            var12 = {};
            var23 = 'button';
            var12['accessibilityRole'] = var23;
            var23 = 20;
            var24 = var17[var23];
            var24 = var14.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var17[var23];
            var23 = var14.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.WAI6xs;
            var23 = var24.bind(var25)(var23);
            var12['accessibilityLabel'] = var23;
            var12['onPress'] = var22;
            var21 = var21.a11yDismiss;
            var12['style'] = var21;
            var13 = var15.bind(var4)(var13, var12);
            var12 = new Array(3);
            var12[0] = var13;
            var21 = _closure1_slot7;
            var13 = {'accessible': false, 'aria-hidden': true};
            var13['onPress'] = var22;
            var22 = _closure1_slot8;
            var22 = var22.absoluteFillObject;
            var13['style'] = var22;
            var13 = var15.bind(var4)(var21, var13);
            var12[1] = var13;
            var13 = 21;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Freeze;
            var13 = {};
            var17 = !var20;
            if(!var17) { _fun0001_ip = 815; continue _fun0001 }
 812:
            var17 = var18;
 815:
            var13['freeze'] = var17;
            var18 = _closure1_slot12;
            var17 = _closure1_slot1;
            var21 = _closure1_slot2;
            var16 = 22;
            var16 = var21[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['visible'] = var20;
            var16['sharedState'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();