// app/modules/activities/panel/native/ActivityPanelController.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var7;
    var2 = function BaseActivityPanelController(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.children;
            var1 = var2.context;
            var7 = var2.orientationLockStateForApp;
            var15 = var2.mode;
            var _closure2_slot0 = var15;
            var8 = var2.hasConnectedActivity;
            var17 = var2.connectedActivityAppId;
            var _closure2_slot1 = var17;
            var20 = var2.currentApp;
            var12 = var2.updateActivityPanelMode;
            var _closure2_slot2 = var12;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var19 = _closure1_slot1;
            var10 = _closure1_slot3;
            var6 = 15;
            var6 = var10[var6];
            var6 = var19.bind(var4)(var6);
            var6 = var6.bind(var4)();
            var9 = 16;
            var9 = var10[var9];
            var9 = var19.bind(var4)(var9);
            var18 = var9.bind(var4)();
            var16 = _closure1_slot0;
            var9 = 12;
            var11 = var10[var9];
            var14 = var16.bind(var4)(var11);
            var13 = var14.useSharedValue;
            var11 = {'x': 4294967295, 'y': 4294967295};
            var13 = var13.bind(var14)(var11);
            var _closure2_slot3 = var13;
            var11 = 17;
            var11 = var10[var11];
            var11 = var19.bind(var4)(var11);
            var14 = var11.bind(var4)(var6);
            var _closure2_slot4 = var14;
            var9 = var10[var9];
            var21 = var16.bind(var4)(var9);
            var11 = var21.useSharedValue;
            var9 = _closure1_slot16;
            var9 = var11.bind(var21)(var9);
            var _closure2_slot5 = var9;
            var21 = _closure1_slot5;
            var11 = var21.useRef;
            var11 = var11.bind(var21)(var15);
            var _closure2_slot6 = var11;
            var11 = 18;
            var11 = var10[var11];
            var11 = var19.bind(var4)(var11);
            var11 = var11.bind(var4)();
            var _closure2_slot7 = var11;
            var22 = 19;
            var10 = var10[var22];
            var16 = var16.bind(var4)(var10);
            var10 = var16.getIsTabletActivitySurface;
            var16 = var10.bind(var16)();
            var _closure2_slot8 = var16;
            var10 = null;
            var21 = var7;
            if(!(var10 == var21)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = _closure1_slot0;
            var10 = _closure1_slot3;
            var10 = var10[var22];
            var19 = var19.bind(var4)(var10);
            var10 = var19.getDefaultOrientationLockState;
            var21 = var10.bind(var19)(var20);
case 2:
            _closure2_slot9 = var21;
            var10 = _closure1_slot17;
            var25 = var6.top;
            var27 = undefined;
            var26 = var18;
            var24 = var21;
            var23 = var16;
            var10 = var27[var10](var26, var25, var24, var23, var22);
            _closure2_slot10 = var10;
            var18 = _closure1_slot5;
            var6 = var18.useRef;
            var6 = var6.bind(var18)(var17);
            _closure2_slot11 = var6;
            var19 = _closure1_slot0;
            var20 = _closure1_slot3;
            var6 = 20;
            var6 = var20[var6];
            var18 = var19.bind(var4)(var6);
            var6 = var18.useIsVoicePanelFullscreen;
            var6 = var6.bind(var18)();
            var22 = _closure1_slot1;
            var18 = 21;
            var18 = var20[var18];
            var18 = var22.bind(var4)(var18);
            var18 = var18.bind(var4)();
            var18 = 22;
            var18 = var20[var18];
            var20 = var19.bind(var4)(var18);
            var19 = var20.useNavigatorBackPressHandler;
            var18 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var1 = _closure1_slot14;
                    var1 = var1.PANEL;
                    var1 = var4 === var1;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot2;
                    var2 = _closure1_slot14;
                    var3 = var2.PIP;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = true;
case 4:
                    return var1;
                }
            };
            var18 = var19.bind(var20)(var18);
            var20 = _closure1_slot5;
            var19 = var20.useEffect;
            var18 = new Array(6);
            var18[0] = var17;
            var18[1] = var21;
            var18[2] = var15;
            var21 = var10.isWindowLandscape;
            var18[3] = var21;
            var18[4] = var16;
            var18[5] = var12;
            var16 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    if(!(var3 != var2)) { _fun0003_ip = 8; continue _fun0003 }
case 6:
                    var2 = _closure2_slot1;
                    if(!(var3 == var2)) { _fun0003_ip = 4; continue _fun0003 }
case 9:
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    if(!(var3 == var2)) { _fun0003_ip = 10; continue _fun0003 }
case 4:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot14;
                    var3 = var3.LAUNCHING_WITH_ORIENTATION_CHANGE;
                    var3 = var4 === var3;
                    if(!var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 23;
                    var4 = var6[var4];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var4);
                    var4 = _closure2_slot10;
                    var5 = var4.isWindowLandscape;
                    var4 = _closure2_slot9;
                    var3 = var6.bind(var7)(var5, var4);
case 11:
                    if(!var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var4 = _closure2_slot2;
                    var2 = _closure1_slot14;
                    var3 = var2.PANEL;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0003_ip = 13; continue _fun0003;
case 10:
                    var4 = _closure2_slot2;
                    var2 = _closure1_slot14;
                    var3 = var2.DISCONNECTED;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0003_ip = 13; continue _fun0003;
case 8:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var3 = 23;
                    var3 = var4[var3];
                    var4 = undefined;
                    var6 = var5.bind(var4)(var3);
                    var3 = _closure2_slot10;
                    var5 = var3.isWindowLandscape;
                    var3 = _closure2_slot9;
                    var3 = var6.bind(var4)(var5, var3);
                    if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = _closure2_slot8;
                    if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 17:
                    var5 = _closure2_slot2;
                    var3 = _closure1_slot14;
                    var3 = var3.LAUNCHING_WITH_ORIENTATION_CHANGE;
                    var3 = var5.bind(var4)(var3);
                    _fun0003_ip = 13; continue _fun0003;
case 15:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot14;
                    var2 = var2.PANEL;
                    var2 = var3.bind(var4)(var2);
case 13:
                    var2 = _closure2_slot11;
                    var1 = _closure2_slot1;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var19.bind(var20)(var16, var18);
            var20 = _closure1_slot5;
            var19 = var20.useEffect;
            var18 = new Array(2);
            var18[0] = var15;
            var18[1] = var9;
            var16 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot14;
                    var3 = var3.PANEL;
                    var3 = var4 === var3;
                    if(!var3) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var4 = _closure2_slot6;
                    var5 = var4.current;
                    var4 = _closure1_slot14;
                    var4 = var4.PANEL;
                    var3 = var5 !== var4;
case 4:
                    if(!var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 24;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.dismissKeyboard;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot5;
                    var3 = var4.set;
                    var2 = _closure1_slot16;
                    var2 = var3.bind(var4)(var2);
case 18:
                    var2 = _closure2_slot6;
                    var1 = _closure2_slot0;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var19.bind(var20)(var16, var18);
            var16 = {};
            var16['isConnected'] = var8;
            var16['selectedMode'] = var15;
            var16['isVoicePanelFullscreen'] = var6;
            var16['applicationId'] = var17;
            var16['orientationLockStateForApp'] = var7;
            var7 = function useActivityOrientationState(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var10 = var1.isConnected;
                    var _closure3_slot0 = var10;
                    var9 = var1.selectedMode;
                    var _closure3_slot1 = var9;
                    var4 = var1.isVoicePanelFullscreen;
                    var _closure3_slot2 = var4;
                    var11 = var1.applicationId;
                    var8 = var1.orientationLockStateForApp;
                    var1 = undefined;
                    var _closure3_slot3 = var1;
                    var3 = null;
                    if(!(var3 == var8)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var3 = _closure1_slot11;
                    var8 = var3.UNLOCKED;
case 20:
                    _closure3_slot3 = var8;
                    var7 = _closure1_slot5;
                    var6 = var7.useLayoutEffect;
                    var5 = new Array(5);
                    var5[0] = var11;
                    var5[1] = var10;
                    var5[2] = var9;
                    var5[3] = var8;
                    var5[4] = var4;
                    var4 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = _closure3_slot2;
                            if(var1) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                            var4 = _closure3_slot1;
                            var3 = _closure1_slot14;
                            var3 = var3.PANEL;
                            if(!(var4 !== var3)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                            var4 = _closure3_slot1;
                            var3 = _closure1_slot14;
                            var3 = var3.LAUNCHING_WITH_ORIENTATION_CHANGE;
                            if(!(var4 === var3)) { _fun0006_ip = 26; continue _fun0006 }
case 24:
                            var3 = _closure3_slot0;
                            if(!var3) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var3 = 14;
                            var3 = var4[var3];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var3);
                            var2 = _closure3_slot3;
                            var2 = var3.bind(var4)(var2);
                            _fun0006_ip = 22; continue _fun0006;
case 26:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.restoreDefaultOrientation;
                            var1 = var1.bind(var2)();
case 22:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var6.bind(var7)(var4, var5);
                    var5 = _closure1_slot5;
                    var4 = var5.useLayoutEffect;
                    var3 = function() {
                        var1 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.restoreDefaultOrientation;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        return var1;
                    };
                    var2 = new Array(0);
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var7 = var7.bind(var4)(var16);
            var7 = {};
            var7['isActivityConnected'] = var8;
            if(!var8) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var16 = _closure1_slot14;
            var16 = var16.PANEL;
            var8 = var15 === var16;
case 28:
            var7['isActivityFocused'] = var8;
            var7['isVoicePanelFullscreen'] = var6;
            var6 = function useSafeAreaLock(arg1) {
                var2 = arg1;
                var7 = var2.isActivityConnected;
                var _closure3_slot0 = var7;
                var6 = var2.isActivityFocused;
                var _closure3_slot1 = var6;
                var5 = var2.isVoicePanelFullscreen;
                var _closure3_slot2 = var5;
                var4 = _closure1_slot5;
                var3 = var4.useId;
                var8 = var3.bind(var4)();
                var _closure3_slot3 = var8;
                var4 = _closure1_slot5;
                var3 = var4.useLayoutEffect;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = _closure3_slot2;
                        var1 = undefined;
                        if(var2) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        if(!var3) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                        var4 = _closure1_slot8;
                        var3 = var4.getState;
                        var5 = var3.bind(var4)();
                        var4 = var5.requestSafeAreaDisableLock;
                        var3 = {};
                        var7 = _closure3_slot3;
                        var3['key'] = var7;
                        var6 = _closure3_slot1;
                        var3['lockEnabled'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var2 = function() {
                            var2 = _closure1_slot8;
                            var1 = var2.getState;
                            var3 = var1.bind(var2)();
                            var2 = var3.requestSafeAreaDisableLock;
                            var1 = {};
                            var4 = _closure3_slot3;
                            var1['key'] = var4;
                            var4 = false;
                            var1['lockEnabled'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
case 32:
                        return var2;
case 30:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var6 = var6.bind(var4)(var7);
            var6 = function useAppFreeze(arg1) {
                var11 = arg1;
                var _closure3_slot0 = var11;
                var14 = _closure1_slot0;
                var15 = _closure1_slot3;
                var1 = 11;
                var4 = var15[var1];
                var1 = undefined;
                var5 = var14.bind(var1)(var4);
                var4 = var5.useIsActivityPanelFullscreen;
                var8 = var4.bind(var5)();
                var _closure3_slot1 = var8;
                var6 = _closure1_slot5;
                var5 = var6.useState;
                var4 = false;
                var6 = var5.bind(var6)(var4);
                var5 = _closure1_slot4;
                var4 = 2;
                var5 = var5.bind(var1)(var6, var4);
                var4 = 0;
                var7 = var5[var4];
                var _closure3_slot2 = var7;
                var4 = 1;
                var12 = var5[var4];
                var _closure3_slot3 = var12;
                var5 = _closure1_slot5;
                var4 = var5.useId;
                var6 = var4.bind(var5)();
                var _closure3_slot4 = var6;
                var13 = 12;
                var4 = var15[var13];
                var10 = var14.bind(var1)(var4);
                var9 = var10.useAnimatedReaction;
                var5 = function l() {
                    var2 = _closure3_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var1 = var1.gestureActive;
                    return var1;
                };
                var4 = {};
                var4['wrapperOffset'] = var11;
                var5['__closure'] = var4;
                var4 = 5299695936442.0;
                var5['__workletHash'] = var4;
                var4 = _closure1_slot18;
                var5['__initData'] = var4;
                var4 = function s(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = arg1;
                        var1 = arg2;
                        if(!(var3 !== var1)) { _fun0008_ip = 34; continue _fun0008 }
case 23:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 12;
                        var1 = var2[var1];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var1);
                        var4 = var5.runOnJS;
                        var1 = _closure3_slot3;
                        var1 = var4.bind(var5)(var1);
                        var1 = var1.bind(var2)(var3);
case 34:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = {};
                var13 = var15[var13];
                var13 = var14.bind(var1)(var13);
                var13 = var13.runOnJS;
                var11['runOnJS'] = var13;
                var11['setWrapperGestureInProgress'] = var12;
                var4['__closure'] = var11;
                var11 = 5831467313798.0;
                var4['__workletHash'] = var11;
                var11 = _closure1_slot19;
                var4['__initData'] = var11;
                var4 = var9.bind(var10)(var5, var4);
                var5 = _closure1_slot5;
                var4 = var5.useEffect;
                var3 = new Array(3);
                var3[0] = var8;
                var3[1] = var7;
                var3[2] = var6;
                var2 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure1_slot7;
                        var1 = var2.getState;
                        var3 = var1.bind(var2)();
                        var2 = var3.requestFreezeLock;
                        var1 = {};
                        var5 = _closure3_slot1;
                        if(!var5) { _fun0009_ip = 35; continue _fun0009 }
case 36:
                        var5 = _closure3_slot2;
case 35:
                        var1['lockEnabled'] = var5;
                        var4 = _closure3_slot4;
                        var1['key'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = function() {
                            var2 = _closure1_slot7;
                            var1 = var2.getState;
                            var3 = var1.bind(var2)();
                            var2 = var3.requestFreezeLock;
                            var1 = {};
                            var4 = false;
                            var1['lockEnabled'] = var4;
                            var4 = _closure3_slot4;
                            var1['key'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var6 = var6.bind(var4)(var9);
            var8 = _closure1_slot5;
            var7 = var8.useMemo;
            var6 = new Array(7);
            var6[0] = var15;
            var6[1] = var14;
            var6[2] = var13;
            var6[3] = var12;
            var6[4] = var11;
            var6[5] = var10;
            var6[6] = var9;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['mode'] = var3;
                var3 = _closure2_slot2;
                var1['setMode'] = var3;
                var3 = _closure2_slot10;
                var1['wrapperDimensions'] = var3;
                var3 = _closure2_slot3;
                var1['pipState'] = var3;
                var3 = _closure2_slot4;
                var1['pipAvoidanceSpecs'] = var3;
                var3 = _closure2_slot5;
                var1['wrapperOffset'] = var3;
                var2 = _closure2_slot7;
                var1['useActivityWebViewLock'] = var2;
                return var1;
            };
            var6 = var7.bind(var8)(var3, var6);
            var3 = _closure1_slot15;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.OrientationLockState;
    var _closure1_slot11 = var8;
    var8 = var5.ACTIVITY_PORTRAIT_ASPECT_RATIO;
    var _closure1_slot12 = var8;
    var5 = var5.ACTIVITY_LANDSCAPE_ASPECT_RATIO;
    var _closure1_slot13 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ActivityPanelModes;
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot15 = var5;
    var5 = {'x': 0, 'y': 0, 'gestureActive': false};
    var _closure1_slot16 = var5;
    var5 = 10;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.cachedFunction;
    var5 = function(arg1, arg2, arg3, arg4) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var4 = arg2;
            var8 = arg3;
            var1 = arg4;
            var6 = var2.width;
            var5 = var2.height;
            var2 = var6 > var5;
            var7 = _closure1_slot11;
            var7 = var7.LANDSCAPE;
            if(!(var7 !== var8)) { _fun0010_ip = 37; continue _fun0010 }
case 38:
            var7 = _closure1_slot11;
            var7 = var7.PORTRAIT;
            if(!(var7 !== var8)) { _fun0010_ip = 39; continue _fun0010 }
case 40:
            var7 = _closure1_slot11;
            var7 = var7.UNLOCKED;
            var7 = {};
            var7['width'] = var6;
            var8 = var5;
            if(var2) { _fun0010_ip = 41; continue _fun0010 }
case 42:
            var8 = var5 - var4;
case 41:
            var7['height'] = var8;
            var7['isLandscape'] = var2;
            var7['isWindowLandscape'] = var2;
            return var7;
case 39:
            if(!var1) { _fun0010_ip = 43; continue _fun0010 }
case 44:
            if(var2) { _fun0010_ip = 45; continue _fun0010 }
case 43:
            var7 = {};
            var8 = global;
            var10 = var8.Math;
            var9 = var10.min;
            var9 = var9.bind(var10)(var6, var5);
            var7['width'] = var9;
            var9 = var8.Math;
            var8 = var9.max;
            var8 = var8.bind(var9)(var5, var6);
            var8 = var8 - var4;
            var7['height'] = var8;
            var8 = false;
            var7['isLandscape'] = var8;
            var7['isWindowLandscape'] = var8;
            _fun0010_ip = 46; continue _fun0010;
case 45:
            var8 = {};
            var9 = _closure1_slot12;
            var9 = var5 * var9;
            var8['width'] = var9;
            var8['height'] = var5;
            var9 = false;
            var8['isLandscape'] = var9;
            var8['isWindowLandscape'] = var2;
            var7 = var8;
case 46:
            return var7;
case 37:
            if(!var1) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            if(var2) { _fun0010_ip = 47; continue _fun0010 }
case 49:
            var1 = {};
            var1['width'] = var6;
            var3 = _closure1_slot13;
            var3 = var6 * var3;
            var3 = var3 - var4;
            var1['height'] = var3;
            var3 = true;
            var1['isLandscape'] = var3;
            var1['isWindowLandscape'] = var2;
            _fun0010_ip = 2; continue _fun0010;
case 47:
            var2 = {};
            var3 = global;
            var7 = var3.Math;
            var4 = var7.max;
            var4 = var4.bind(var7)(var6, var5);
            var2['width'] = var4;
            var4 = var3.Math;
            var3 = var4.min;
            var3 = var3.bind(var4)(var5, var6);
            var2['height'] = var3;
            var3 = true;
            var2['isLandscape'] = var3;
            var2['isWindowLandscape'] = var3;
            var1 = var2;
case 2:
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot17 = var5;
    var5 = {};
    var8 = 'function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}';
    var5['code'] = var8;
    var _closure1_slot18 = var5;
    var5 = {};
    var8 = 'function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}';
    var5['code'] = var8;
    var _closure1_slot19 = var5;
    var5 = 32;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/panel/native/ActivityPanelController.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ActivityPanelController(arg1) {
        var2 = arg1;
        var5 = var2.children;
        var3 = _closure1_slot0;
        var8 = _closure1_slot3;
        var2 = 25;
        var2 = var8[var2];
        var4 = undefined;
        var10 = var3.bind(var4)(var2);
        var9 = var10.useStateFromStoresObject;
        var2 = _closure1_slot10;
        var7 = new Array(2);
        var7[0] = var2;
        var2 = _closure1_slot6;
        var7[1] = var2;
        var3 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure1_slot10;
                var1 = var2.getActivityPanelMode;
                var8 = var1.bind(var2)();
                var1 = var2.getConnectedActivityLocation;
                var10 = var1.bind(var2)();
                var1 = var2.getSelfEmbeddedActivityForLocation;
                var7 = var1.bind(var2)(var10);
                var4 = null;
                var1 = var4 == var7;
                var2 = undefined;
                var5 = undefined;
                if(var1) { _fun0011_ip = 27; continue _fun0011 }
case 50:
                var5 = var7.applicationId;
case 27:
                var1 = var4 != var5;
                var6 = undefined;
                if(!var1) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                var9 = _closure1_slot6;
                var1 = var9.getApplication;
                var6 = var1.bind(var9)(var5);
case 51:
                var9 = _closure1_slot0;
                var11 = _closure1_slot3;
                var1 = 26;
                var1 = var11[var1];
                var9 = var9.bind(var2)(var1);
                var1 = var9.getEmbeddedActivityLocationChannelId;
                var9 = var1.bind(var9)(var10);
                var1 = {};
                var1['mode'] = var8;
                var10 = var4 == var9;
                var8 = undefined;
                if(var10) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                var11 = _closure1_slot1;
                var12 = _closure1_slot3;
                var10 = 27;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var10 = var10.bind(var2)(var9);
                var8 = undefined;
                if(var10) { _fun0011_ip = 53; continue _fun0011 }
case 55:
                var8 = var9;
case 53:
                var1['connectedActivityInTextChannelId'] = var8;
                var7 = var4 != var7;
                var1['hasConnectedActivity'] = var7;
                var1['connectedActivityAppId'] = var5;
                var1['currentApp'] = var6;
                var4 = var4 == var5;
                var2 = undefined;
                if(var4) { _fun0011_ip = 37; continue _fun0011 }
case 56:
                var4 = _closure1_slot10;
                var3 = var4.getOrientationLockStateForApp;
                var2 = var3.bind(var4)(var5);
case 37:
                var1['orientationLockStateForApp'] = var2;
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var9.bind(var10)(var7, var3, var2);
        var11 = var2.mode;
        var _closure2_slot0 = var11;
        var14 = var2.connectedActivityInTextChannelId;
        var _closure2_slot1 = var14;
        var10 = var2.hasConnectedActivity;
        var9 = var2.connectedActivityAppId;
        var7 = var2.currentApp;
        var12 = var2.orientationLockStateForApp;
        var13 = _closure1_slot5;
        var3 = var13.useEffect;
        var2 = new Array(2);
        var2[0] = var11;
        var2[1] = var14;
        var1 = function() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = _closure2_slot0;
                var3 = _closure1_slot14;
                var3 = var3.PANEL;
                if(!(var4 === var3)) { _fun0012_ip = 57; continue _fun0012 }
case 58:
                var4 = _closure1_slot9;
                var3 = var4.getChannel;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var1);
                var4 = undefined;
                if(!(var4 !== var1)) { _fun0012_ip = 57; continue _fun0012 }
case 59:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 28;
                var3 = var5[var3];
                var7 = var6.bind(var4)(var3);
                var6 = var7.selectChannel;
                var3 = {};
                var8 = var1.guild_id;
                var3['guildId'] = var8;
                var8 = var1.id;
                var3['channelId'] = var8;
                var3 = var6.bind(var7)(var3);
                var3 = _closure1_slot0;
                var2 = 29;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.transitionToChannel;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
case 57:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var13)(var1, var2);
        var3 = _closure1_slot15;
        var2 = _closure1_slot20;
        var1 = {};
        var14 = _closure1_slot1;
        var13 = 30;
        var13 = var8[var13];
        var13 = var14.bind(var4)(var13);
        var1['context'] = var13;
        var1['orientationLockStateForApp'] = var12;
        var1['mode'] = var11;
        var1['hasConnectedActivity'] = var10;
        var1['connectedActivityAppId'] = var9;
        var1['currentApp'] = var7;
        var7 = _closure1_slot2;
        var6 = 31;
        var6 = var8[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.updateActivityPanelMode;
        var1['updateActivityPanelMode'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['BaseActivityPanelController'] = var2;
    return var1;
})();