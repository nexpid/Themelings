// app/modules/app_launcher/native/AppLauncherKeyboard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var13 = 2;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.KEYBOARD_ANIMATION_CONFIG;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var8 = var4.Fragment;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 7;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderTopLeftRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderTopRightRadius'] = var14;
    var4['onboardingRoundingView'] = var10;
    var10 = {'borderWidth': 2, 'borderBottomWidth': 0, 'borderColor': null, 'borderBottomColor': 'transparent'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BRAND;
    var10['borderColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderTopLeftRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderTopRightRadius'] = var14;
    var4['onboardingHeader'] = var10;
    var10 = {};
    var10['borderWidth'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var10['borderColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderTopLeftRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10['borderTopRightRadius'] = var11;
    var4['onboardingNavigatorContent'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function AppLauncherKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function AppLauncherKeyboardTsx2(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev)return;runOnJS(handleOnboardingParamChange)(i,showOnboarding);}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function AppLauncherKeyboard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var17 = var2.context;
            var _closure2_slot0 = var17;
            var16 = var2.chatInputRef;
            var _closure2_slot1 = var16;
            var26 = var2.onClose;
            var _closure2_slot2 = var26;
            var6 = var2.transitionState;
            var _closure2_slot3 = var6;
            var13 = var2.entrypoint;
            var32 = _closure1_slot0;
            var24 = _closure1_slot2;
            var2 = 8;
            var2 = var24[var2];
            var4 = undefined;
            var3 = var32.bind(var4)(var2);
            var2 = var3.useDefaultAppLauncherWidth;
            var10 = var2.bind(var3)(var13);
            var25 = _closure1_slot3;
            var3 = var25.useRef;
            var2 = 9;
            var2 = var24[var2];
            var2 = var32.bind(var4)(var2);
            var2 = var2.AppLauncherKeyboardCloseReason;
            var2 = var2.DISMISSED;
            var11 = var3.bind(var25)(var2);
            var _closure2_slot4 = var11;
            var2 = var25.useRef;
            var20 = var2.bind(var25)(var4);
            var _closure2_slot5 = var20;
            var2 = _closure1_slot11;
            var15 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var3 = 10;
            var3 = var24[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var22 = var3.maximum;
            var3 = var3.minimum;
            var _closure2_slot6 = var3;
            var7 = var25.useRef;
            var5 = global;
            var9 = var5.Date;
            var5 = var9.now;
            var5 = var5.bind(var9)();
            var5 = var7.bind(var25)(var5);
            var _closure2_slot7 = var5;
            var7 = var25.useRef;
            var5 = false;
            var5 = var7.bind(var25)(var5);
            var _closure2_slot8 = var5;
            var5 = 11;
            var5 = var24[var5];
            var7 = var32.bind(var4)(var5);
            var5 = var7.useIsScreenReaderEnabled;
            var21 = var5.bind(var7)();
            var _closure2_slot9 = var21;
            var5 = 12;
            var5 = var24[var5];
            var7 = var2.bind(var4)(var5);
            var5 = {};
            var9 = var17.channel;
            var9 = var9.id;
            var5['channelId'] = var9;
            var5 = var7.bind(var4)(var5);
            var9 = var5.visibleContent;
            var _closure2_slot10 = var9;
            var7 = null;
            var14 = var7 != var9;
            var _closure2_slot11 = var14;
            var31 = 13;
            var5 = var24[var31];
            var18 = var32.bind(var4)(var5);
            var12 = var18.useSharedValue;
            var5 = -1;
            var19 = var12.bind(var18)(var5);
            var _closure2_slot12 = var19;
            var5 = var24[var31];
            var18 = var32.bind(var4)(var5);
            var12 = var18.useSharedValue;
            var5 = 0;
            var18 = var12.bind(var18)(var5);
            var5 = var25.useRef;
            var23 = var5.bind(var25)(var7);
            var _closure2_slot13 = var23;
            var12 = var25.useCallback;
            var7 = new Array(1);
            var7[0] = var23;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot13;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure2_slot13;
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var3 = var4;
case 2:
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var3.expandActionSheet;
                    var2 = var2.bind(var3)();
case 4:
                    return var1;
                }
            };
            var12 = var12.bind(var25)(var5, var7);
            var27 = var25.useCallback;
            var7 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg2;
                    if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = 1;
                    var2 = arg1;
                    var1 = var3 === var2;
case 6:
                    if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure1_slot6;
                    var1 = var1.TAKE_ACTION;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = new Array(0);
            var30 = var27.bind(var25)(var7, var5);
            var _closure2_slot14 = var30;
            var27 = var25.useEffect;
            var7 = new Array(3);
            var7[0] = var14;
            var7[1] = var19;
            var7[2] = var30;
            var5 = function() {
                var4 = _closure2_slot14;
                var3 = _closure2_slot12;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot11;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5 = var27.bind(var25)(var5, var7);
            var5 = var24[var31];
            var28 = var32.bind(var4)(var5);
            var27 = var28.useAnimatedReaction;
            var7 = function C() {
                var2 = _closure2_slot12;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = {};
            var5['bottomSheetIndex'] = var19;
            var7['__closure'] = var5;
            var5 = 15587451723262.0;
            var7['__workletHash'] = var5;
            var5 = _closure1_slot12;
            var7['__initData'] = var5;
            var5 = function f(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var1 = arg2;
                    if(!(var4 !== var1)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var6 = var2.bind(var3)(var1);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot14;
                    var2 = var5.bind(var6)(var2);
                    var1 = _closure2_slot11;
                    var1 = var2.bind(var3)(var4, var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = {};
            var31 = var24[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.runOnJS;
            var29['runOnJS'] = var31;
            var29['handleOnboardingParamChange'] = var30;
            var29['showOnboarding'] = var14;
            var5['__closure'] = var29;
            var29 = 14003176039781.0;
            var5['__workletHash'] = var29;
            var29 = _closure1_slot13;
            var5['__initData'] = var29;
            var5 = var27.bind(var28)(var7, var5);
            var27 = var25.useLayoutEffect;
            var7 = new Array(1);
            var7[0] = var6;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot3;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if(!(var4 === var3)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure1_slot6;
                    var2 = var2.USER_DISMISS;
                    var2 = var3.bind(var1)(var2);
case 12:
                    return var1;
                }
            };
            var5 = var27.bind(var25)(var5, var7);
            var7 = var25.useCallback;
            var5 = new Array(4);
            var5[0] = var9;
            var5[1] = var17;
            var5[2] = var3;
            var5[3] = var14;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot9;
                    var2 = {};
                    var7 = _closure1_slot8;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 16;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.BottomSheetBackdrop;
                    var5 = {};
                    var14 = arg1;
                    var15 = var5;
                    var8 = copyDataProperties(var15, var14);
                    var9 = 'collapse';
                    var8 = 'pressBehavior';
                    var5[7] = var9;
                    var6 = var7.bind(var1)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = _closure2_slot11;
                    if(!var6) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                    var9 = _closure1_slot8;
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var7 = 17;
                    var7 = var13[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var12 = _closure2_slot0;
                    var7['context'] = var12;
                    var12 = _closure2_slot10;
                    var7['visibleContent'] = var12;
                    var12 = _closure1_slot0;
                    var10 = 18;
                    var10 = var13[var10];
                    var12 = var12.bind(var1)(var10);
                    var10 = var12.isAndroid;
                    var12 = var10.bind(var12)();
                    var10 = 0;
                    if(var12) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                    var10 = _closure2_slot6;
case 16:
                    var7['bottomOffset'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
case 14:
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var5 = var7.bind(var25)(var3, var5);
            var9 = var25.useCallback;
            var7 = new Array(1);
            var7[0] = var20;
            var3 = function(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = arg3;
                    var2 = 1;
                    var1 = arg1;
                    if(!(var2 !== var1)) { _fun0007_ip = 18; continue _fun0007 }
case 6:
                    var1 = arg2;
                    if(!(var2 === var1)) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 16;
                    var3 = var2[var6];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.ANIMATION_SOURCE;
                    var3 = var3.KEYBOARD;
                    if(!(var4 !== var3)) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.ANIMATION_SOURCE;
                    var3 = var3.GESTURE;
                    if(!(var4 !== var3)) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.ANIMATION_SOURCE;
                    var3 = var3.USER;
                    if(!(var4 === var3)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var3 = _closure2_slot5;
                    var6 = var3.current;
                    _fun0007_ip = 26; continue _fun0007;
case 24:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.AppLauncherBottomSheetExpandReason;
                    var6 = var3.OTHER;
case 26:
                    _fun0007_ip = 27; continue _fun0007;
case 22:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.AppLauncherBottomSheetExpandReason;
                    var6 = var3.GESTURE;
case 27:
                    _fun0007_ip = 28; continue _fun0007;
case 20:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.AppLauncherBottomSheetExpandReason;
                    var6 = var3.KEYBOARD;
case 28:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 19;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.trackWithMetadata;
                    var1 = _closure1_slot5;
                    var3 = var1.APP_LAUNCHER_EXPANDED;
                    var1 = {};
                    var1['reason'] = var6;
                    var1 = var4.bind(var5)(var3, var1);
                    var1 = _closure2_slot5;
                    var1['current'] = var2;
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var9.bind(var25)(var3, var7);
            var7 = var25.useCallback;
            var3 = new Array(4);
            var3[0] = var16;
            var3[1] = var21;
            var3[2] = var11;
            var3[3] = var26;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var1 = var1.current;
                    if(var1) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 19;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.trackWithMetadata;
                    var1 = _closure1_slot5;
                    var3 = var1.APP_LAUNCHER_CLOSED;
                    var1 = {};
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var7 = var6.bind(var7)();
                    var6 = _closure2_slot7;
                    var6 = var6.current;
                    var6 = var7 - var6;
                    var1['time_spent'] = var6;
                    var6 = _closure2_slot4;
                    var6 = var6.current;
                    var1['reason'] = var6;
                    var1 = var4.bind(var5)(var3, var1);
case 29:
                    var3 = _closure2_slot8;
                    var1 = true;
                    var3['current'] = var1;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 14;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var3 = _closure1_slot6;
                    var3 = var3.USER_DISMISS;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0008_ip = 14; continue _fun0008 }
case 31:
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var1)();
case 14:
                    var3 = _closure2_slot9;
                    if(!var3) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = var3.openSystemKeyboard;
                    var2 = var2.bind(var3)();
case 32:
                    return var1;
                }
            };
            var7 = var7.bind(var25)(var1, var3);
            var3 = _closure1_slot8;
            var1 = 20;
            var1 = var24[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['ref'] = var23;
            var23 = _closure1_slot7;
            var1['animationConfigs'] = var23;
            var1['animatedIndex'] = var19;
            var1['animatedPosition'] = var18;
            var1['chatInputRef'] = var16;
            var1['forceMaxHeight'] = var21;
            var1['onAnimate'] = var9;
            var1['onClose'] = var7;
            var1['transitionState'] = var6;
            var1['backdropComponent'] = var5;
            var5 = var14;
            if(var14) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 21;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.AppLauncherEntrypoint;
            var6 = var6.VOICE;
            var5 = var13 === var6;
case 34:
            var1['disableHeaderRoundingAnimation'] = var5;
            var5 = var14;
            if(!var14) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var5 = var15.onboardingRoundingView;
case 36:
            var1['roundingViewStyle'] = var5;
            var5 = var14;
            if(!var14) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var5 = var15.onboardingHeader;
case 38:
            var1['headerStyle'] = var5;
            var5 = true;
            var1['isAppsKeyboard'] = var5;
            var6 = _closure1_slot0;
            var21 = _closure1_slot2;
            var5 = 21;
            var5 = var21[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.AppLauncherEntrypoint;
            var5 = var5.VOICE;
            var5 = var13 !== var5;
            var1['rendersHandle'] = var5;
            var1['width'] = var10;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var9 = {};
            var23 = 'relative';
            var9['position'] = var23;
            var9['height'] = var22;
            var5['style'] = var9;
            var9 = _closure1_slot1;
            var8 = 22;
            var8 = var21[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['bottomSheetExpandReasonRef'] = var20;
            var8['bottomSheetIndex'] = var19;
            var8['bottomSheetPosition'] = var18;
            var8['context'] = var17;
            var8['chatInputRef'] = var16;
            if(!var14) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var14 = var15.onboardingNavigatorContent;
case 40:
            var8['contentStyle'] = var14;
            var8['entrypoint'] = var13;
            var8['expandBottomSheet'] = var12;
            var8['keyboardCloseReasonRef'] = var11;
            var8['width'] = var10;
            var8 = var7.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/AppLauncherKeyboard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();