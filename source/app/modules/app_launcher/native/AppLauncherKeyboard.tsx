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
    var14 = var14.unsafe_rawColors;
    var14 = var14.BRAND_500;
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
    var13 = var13.unsafe_rawColors;
    var13 = var13.BRAND_500;
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
    var8 = 'function AppLauncherKeyboardTsx1(){const{animatedSheetIndex}=this.__closure;return animatedSheetIndex.get();}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function AppLauncherKeyboardTsx2(i,prev){const{runOnJS,handleOnboardingParamChange,showOnboarding}=this.__closure;if(i===prev)return;runOnJS(handleOnboardingParamChange)(i,showOnboarding);}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function AppLauncherKeyboard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var20 = var2.context;
            var _closure2_slot0 = var20;
            var16 = var2.chatInputRef;
            var _closure2_slot1 = var16;
            var1 = var2.onClose;
            var _closure2_slot2 = var1;
            var12 = var2.transitionState;
            var _closure2_slot3 = var12;
            var8 = var2.entrypoint;
            var _closure2_slot4 = var8;
            var27 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 8;
            var2 = var17[var2];
            var4 = undefined;
            var3 = var27.bind(var4)(var2);
            var2 = var3.useDefaultAppLauncherWidth;
            var6 = var2.bind(var3)(var8);
            var _closure2_slot5 = var6;
            var18 = _closure1_slot3;
            var3 = var18.useRef;
            var2 = 9;
            var2 = var17[var2];
            var2 = var27.bind(var4)(var2);
            var2 = var2.AppLauncherKeyboardCloseReason;
            var2 = var2.DISMISSED;
            var19 = var3.bind(var18)(var2);
            var _closure2_slot6 = var19;
            var2 = var18.useRef;
            var3 = var2.bind(var18)(var4);
            var _closure2_slot7 = var3;
            var2 = _closure1_slot11;
            var10 = var2.bind(var4)();
            var _closure2_slot8 = var10;
            var2 = _closure1_slot1;
            var9 = 10;
            var9 = var17[var9];
            var9 = var2.bind(var4)(var9);
            var9 = var9.bind(var4)();
            var11 = var9.maximum;
            var _closure2_slot9 = var11;
            var11 = var9.minimum;
            var _closure2_slot10 = var11;
            var13 = var18.useRef;
            var9 = global;
            var14 = var9.Date;
            var9 = var14.now;
            var9 = var9.bind(var14)();
            var9 = var13.bind(var18)(var9);
            var _closure2_slot11 = var9;
            var13 = var18.useRef;
            var9 = false;
            var9 = var13.bind(var18)(var9);
            var _closure2_slot12 = var9;
            var9 = 11;
            var9 = var17[var9];
            var13 = var27.bind(var4)(var9);
            var9 = var13.useIsScreenReaderEnabled;
            var15 = var9.bind(var13)();
            var _closure2_slot13 = var15;
            var9 = 12;
            var9 = var17[var9];
            var13 = var2.bind(var4)(var9);
            var9 = {};
            var14 = var20.channel;
            var14 = var14.id;
            var9['channelId'] = var14;
            var9 = var13.bind(var4)(var9);
            var21 = var9.visibleContent;
            var _closure2_slot14 = var21;
            var9 = null;
            var9 = var9 != var21;
            var _closure2_slot15 = var9;
            var14 = var18.useContext;
            var13 = 13;
            var13 = var17[var13];
            var13 = var27.bind(var4)(var13);
            var13 = var13.PortalKeyboardContext;
            var13 = var14.bind(var18)(var13);
            var24 = var13.animatedSheetIndex;
            var _closure2_slot16 = var24;
            var13 = var13.bottomSheetRefs;
            var13 = var13.apps;
            var _closure2_slot17 = var13;
            var22 = var18.useCallback;
            var14 = new Array(1);
            var14[0] = var13;
            var13 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot17;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0002_ip = 36; continue _fun0002 }
 20:
                    var4 = _closure2_slot17;
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var3 = var4;
 36:
                    if(var2) { _fun0002_ip = 49; continue _fun0002 }
 39:
                    var2 = var3.expand;
                    var2 = var2.bind(var3)();
 49:
                    return var1;
                }
            };
            var13 = var22.bind(var18)(var13, var14);
            var _closure2_slot18 = var13;
            var22 = var18.useCallback;
            var14 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg2;
                    if(!var1) { _fun0003_ip = 16; continue _fun0003 }
 6:
                    var3 = 1;
                    var2 = arg1;
                    var1 = var3 === var2;
 16:
                    if(!var1) { _fun0003_ip = 59; continue _fun0003 }
 19:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure1_slot6;
                    var1 = var1.TAKE_ACTION;
                    var1 = var2.bind(var3)(var1);
 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = new Array(0);
            var25 = var22.bind(var18)(var14, var13);
            var _closure2_slot19 = var25;
            var22 = var18.useEffect;
            var14 = new Array(3);
            var14[0] = var9;
            var14[1] = var24;
            var14[2] = var25;
            var13 = function() {
                var4 = _closure2_slot19;
                var3 = _closure2_slot16;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot15;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var13 = var22.bind(var18)(var13, var14);
            var26 = 15;
            var13 = var17[var26];
            var23 = var27.bind(var4)(var13);
            var22 = var23.useAnimatedReaction;
            var14 = function f() {
                var2 = _closure2_slot16;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = {};
            var13['animatedSheetIndex'] = var24;
            var14['__closure'] = var13;
            var13 = 1623124878014.0;
            var14['__workletHash'] = var13;
            var13 = _closure1_slot12;
            var14['__initData'] = var13;
            var13 = function E(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = arg1;
                    var1 = arg2;
                    if(!(var4 !== var1)) { _fun0004_ip = 62; continue _fun0004 }
 10:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var1 = var3[var1];
                    var3 = undefined;
                    var6 = var2.bind(var3)(var1);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot19;
                    var2 = var5.bind(var6)(var2);
                    var1 = _closure2_slot15;
                    var1 = var2.bind(var3)(var4, var1);
 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var24 = {};
            var26 = var17[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.runOnJS;
            var24['runOnJS'] = var26;
            var24['handleOnboardingParamChange'] = var25;
            var24['showOnboarding'] = var9;
            var13['__closure'] = var24;
            var24 = 14003176039781.0;
            var13['__workletHash'] = var24;
            var24 = _closure1_slot13;
            var13['__initData'] = var24;
            var13 = var22.bind(var23)(var14, var13);
            var22 = var18.useLayoutEffect;
            var14 = new Array(1);
            var14[0] = var12;
            var13 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure2_slot3;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if(!(var4 === var3)) { _fun0005_ip = 83; continue _fun0005 }
 48:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure1_slot6;
                    var2 = var2.USER_DISMISS;
                    var2 = var3.bind(var1)(var2);
 83:
                    return var1;
                }
            };
            var13 = var22.bind(var18)(var13, var14);
            var14 = var18.useCallback;
            var13 = new Array(4);
            var13[0] = var21;
            var13[1] = var20;
            var13[2] = var11;
            var13[3] = var9;
            var11 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot9;
                    var2 = {};
                    var7 = _closure1_slot8;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 17;
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
                    var5[var8] = var9;
                    var6 = var7.bind(var1)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = _closure2_slot15;
                    if(!var6) { _fun0006_ip = 182; continue _fun0006 }
 94:
                    var9 = _closure1_slot8;
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var7 = 18;
                    var7 = var13[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var12 = _closure2_slot0;
                    var7['context'] = var12;
                    var12 = _closure2_slot14;
                    var7['visibleContent'] = var12;
                    var12 = _closure1_slot0;
                    var10 = 19;
                    var10 = var13[var10];
                    var12 = var12.bind(var1)(var10);
                    var10 = var12.isAndroid;
                    var12 = var10.bind(var12)();
                    var10 = 0;
                    if(var12) { _fun0006_ip = 171; continue _fun0006 }
 167:
                    var10 = _closure2_slot10;
 171:
                    var7['bottomOffset'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
 182:
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var11 = var14.bind(var18)(var11, var13);
            var14 = var18.useCallback;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = arg3;
                    var2 = 1;
                    var1 = arg1;
                    if(!(var2 !== var1)) { _fun0007_ip = 312; continue _fun0007 }
 16:
                    var1 = arg2;
                    if(!(var2 === var1)) { _fun0007_ip = 312; continue _fun0007 }
 26:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 17;
                    var3 = var2[var6];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.ANIMATION_SOURCE;
                    var3 = var3.KEYBOARD;
                    if(!(var4 !== var3)) { _fun0007_ip = 218; continue _fun0007 }
 70:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.ANIMATION_SOURCE;
                    var3 = var3.GESTURE;
                    if(!(var4 !== var3)) { _fun0007_ip = 184; continue _fun0007 }
 103:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.ANIMATION_SOURCE;
                    var3 = var3.USER;
                    if(!(var4 === var3)) { _fun0007_ip = 150; continue _fun0007 }
 136:
                    var3 = _closure2_slot7;
                    var6 = var3.current;
                    _fun0007_ip = 182; continue _fun0007;
 150:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.AppLauncherBottomSheetExpandReason;
                    var6 = var3.OTHER;
 182:
                    _fun0007_ip = 216; continue _fun0007;
 184:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.AppLauncherBottomSheetExpandReason;
                    var6 = var3.GESTURE;
 216:
                    _fun0007_ip = 250; continue _fun0007;
 218:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.AppLauncherBottomSheetExpandReason;
                    var6 = var3.KEYBOARD;
 250:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 20;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.trackWithMetadata;
                    var1 = _closure1_slot5;
                    var3 = var1.APP_LAUNCHER_EXPANDED;
                    var1 = {};
                    var1['reason'] = var6;
                    var1 = var4.bind(var5)(var3, var1);
                    var1 = _closure2_slot7;
                    var1['current'] = var2;
 312:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var14.bind(var18)(var3, var13);
            var13 = var18.useCallback;
            var3 = new Array(4);
            var3[0] = var16;
            var3[1] = var15;
            var3[2] = var19;
            var3[3] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot12;
                    var1 = var1.current;
                    if(var1) { _fun0008_ip = 113; continue _fun0008 }
 15:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 20;
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
                    var6 = _closure2_slot11;
                    var6 = var6.current;
                    var6 = var7 - var6;
                    var1['time_spent'] = var6;
                    var6 = _closure2_slot6;
                    var6 = var6.current;
                    var1['reason'] = var6;
                    var1 = var4.bind(var5)(var3, var1);
 113:
                    var3 = _closure2_slot12;
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
                    if(!(var3 != var4)) { _fun0008_ip = 183; continue _fun0008 }
 175:
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var1)();
 183:
                    var3 = _closure2_slot13;
                    if(!var3) { _fun0008_ip = 209; continue _fun0008 }
 190:
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = var3.openSystemKeyboard;
                    var2 = var2.bind(var3)();
 209:
                    return var1;
                }
            };
            var13 = var13.bind(var18)(var1, var3);
            var3 = _closure1_slot8;
            var1 = 21;
            var1 = var17[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var17 = _closure1_slot7;
            var1['animationConfigs'] = var17;
            var1['chatInputRef'] = var16;
            var1['forceMaxHeight'] = var15;
            var1['onAnimate'] = var14;
            var1['onClose'] = var13;
            var1['transitionState'] = var12;
            var1['backdropComponent'] = var11;
            var11 = var9;
            if(var9) { _fun0001_ip = 844; continue _fun0001 }
 808:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 22;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.AppLauncherEntrypoint;
            var12 = var12.VOICE;
            var11 = var8 === var12;
 844:
            var1['disableHeaderRoundingAnimation'] = var11;
            var11 = var9;
            if(!var9) { _fun0001_ip = 861; continue _fun0001 }
 855:
            var11 = var10.onboardingRoundingView;
 861:
            var1['roundingViewStyle'] = var11;
            if(!var9) { _fun0001_ip = 875; continue _fun0001 }
 869:
            var9 = var10.onboardingHeader;
 875:
            var1['headerStyle'] = var9;
            var9 = 'apps';
            var1['refKey'] = var9;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 22;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.AppLauncherEntrypoint;
            var7 = var7.VOICE;
            var7 = var8 !== var7;
            var1['rendersHandle'] = var7;
            var1['width'] = var6;
            var5 = function children() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var5 = {};
                    var6 = 'relative';
                    var5['position'] = var6;
                    var6 = _closure2_slot9;
                    var5['height'] = var6;
                    var2['style'] = var5;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 23;
                    var5 = var5[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = {};
                    var8 = _closure2_slot7;
                    var5['bottomSheetExpandReasonRef'] = var8;
                    var8 = _closure2_slot0;
                    var5['context'] = var8;
                    var8 = _closure2_slot1;
                    var5['chatInputRef'] = var8;
                    var8 = _closure2_slot15;
                    if(!var8) { _fun0009_ip = 105; continue _fun0009 }
 95:
                    var9 = _closure2_slot8;
                    var8 = var9.onboardingNavigatorContent;
 105:
                    var5['contentStyle'] = var8;
                    var8 = _closure2_slot4;
                    var5['entrypoint'] = var8;
                    var8 = _closure2_slot18;
                    var5['expandBottomSheet'] = var8;
                    var8 = _closure2_slot6;
                    var5['keyboardCloseReasonRef'] = var8;
                    var7 = _closure2_slot5;
                    var5['width'] = var7;
                    var5 = var4.bind(var1)(var6, var5);
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/AppLauncherKeyboard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();