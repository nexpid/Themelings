// app/modules/nuf/native/components/NewUserModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BackHandler;
    var _closure1_slot5 = var7;
    var4 = var4.NativeModules;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.createNativeStackNavigator;
    var4 = var4.bind(var7)();
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'borderBottomWidth': 0, 'backgroundColor': null, 'shadowColor': 'transparent'};
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var10;
    var4['header'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/components/NewUserModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NewUserModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.initialRouteName;
            var11 = var1.initialOnboardingStepIndex;
            var1 = _closure1_slot10;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var _closure2_slot0 = var1;
            var12 = _closure1_slot4;
            var1 = var12.useState;
            var1 = var1.bind(var12)(var11);
            var10 = _closure1_slot3;
            var8 = 2;
            var2 = var10.bind(var4)(var1, var8);
            var6 = 0;
            var1 = var2[var6];
            var _closure2_slot1 = var1;
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot2 = var2;
            var2 = var12.useState;
            var2 = var2.bind(var12)(var11);
            var2 = var10.bind(var4)(var2, var8);
            var11 = var2[var6];
            var _closure2_slot3 = var11;
            var2 = var2[var3];
            var _closure2_slot4 = var2;
            var2 = var12.useRef;
            var6 = null;
            var2 = var2.bind(var12)(var6);
            var _closure2_slot5 = var2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 10;
            var8 = var3[var8];
            var10 = var2.bind(var4)(var8);
            var8 = var10.useAccessibilityNativeStackOptions;
            var8 = var8.bind(var10)();
            var _closure2_slot6 = var8;
            var10 = var12.useCallback;
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var1;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.getNextOnboardingStep;
                    var3 = null;
                    var4 = var3 != var2;
                    if(!var4) { _fun0002_ip = 46; continue _fun0002 }
 43:
                    var4 = var2;
 46:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot1;
                    var4 = var5.bind(var6)(var4, var3, var2);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            var6 = var1.lastShownStepIndex;
                            var5 = var1.onboardingStepIndex;
                            var3 = var1.continueNavigation;
                            var4 = _closure2_slot2;
                            var1 = undefined;
                            var4 = var4.bind(var1)(var5);
                            var4 = _closure2_slot4;
                            var4 = var4.bind(var1)(var6);
                            if(!var3) { _fun0003_ip = 62; continue _fun0003 }
 47:
                            var3 = _closure2_slot5;
                            var4 = var3.current;
                            var3 = null;
                            if(!(var3 == var4)) { _fun0003_ip = 120; continue _fun0003 }
 62:
                            var6 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var4 = 12;
                            var4 = var8[var4];
                            var6 = var6.bind(var1)(var4);
                            var4 = var6.popWithKey;
                            var7 = _closure1_slot0;
                            var3 = 13;
                            var3 = var8[var3];
                            var3 = var7.bind(var1)(var3);
                            var3 = var3.NEW_USER_MODAL_KEY;
                            var3 = var4.bind(var6)(var3);
                            _fun0003_ip = 164; continue _fun0003;
 120:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 11;
                            var3 = var6[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.continueToNextStep;
                            var2 = _closure2_slot5;
                            var2 = var2.current;
                            var2 = var3.bind(var4)(var5, var2);
 164:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var10 = var10.bind(var12)(var1, var8);
            var _closure2_slot7 = var10;
            var1 = 14;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useFocusEffect;
            var11 = var12.useCallback;
            var8 = function() {
                var5 = _closure1_slot5;
                var4 = var5.addEventListener;
                var3 = 'hardwareBackPress';
                var2 = function() {
                    var1 = _closure1_slot6;
                    var2 = var1.MinimizeApp;
                    var1 = var2.minimizeApp;
                    var1 = var1.bind(var2)();
                    var1 = true;
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var11.bind(var12)(var8, var1);
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var1 = _closure1_slot9;
            var2 = var1.Navigator;
            var1 = {};
            var8 = function screenOptions(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.navigation;
                    var1 = _closure2_slot5;
                    var1['current'] = var3;
                    var1 = {'headerStyle': null, 'headerShadowVisible': false, 'title': '', 'headerLeft': null, 'headerRight': null, 'fullScreenGestureEnabled': false};
                    var3 = _closure2_slot0;
                    var3 = var3.header;
                    var1['headerStyle'] = var3;
                    var3 = false;
                    var5 = function headerLeft() {
                        var1 = null;
                        return var1;
                    };
                    var1['headerLeft'] = var5;
                    var4 = function headerRight() {
                        var1 = null;
                        return var1;
                    };
                    var1['headerRight'] = var4;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 15;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.isAndroid;
                    var5 = var4.bind(var5)();
                    var4 = 'card';
                    if(!var5) { _fun0004_ip = 128; continue _fun0004 }
 122:
                    var4 = 'transparentModal';
 128:
                    var1['presentation'] = var4;
                    var4 = 'slide_from_right';
                    var1['animation'] = var4;
                    var1['headerBackVisible'] = var3;
                    var7 = _closure2_slot6;
                    var8 = var1;
                    var2 = copyDataProperties(var8, var7);
                    return var1;
                }
            };
            var1['screenOptions'] = var8;
            var8 = var6 != var7;
            var12 = 'choose-avatar';
            var6 = var12;
            if(!var8) { _fun0001_ip = 290; continue _fun0001 }
 287:
            var6 = var7;
 290:
            var1['initialRouteName'] = var6;
            var8 = _closure1_slot7;
            var6 = _closure1_slot9;
            var7 = var6.Screen;
            var5 = {};
            var11 = 'enable-notification';
            var5['name'] = var11;
            var11 = function getComponent() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.RedesignNotificationScreen;
                return var1;
            };
            var5['getComponent'] = var11;
            var11 = {};
            var11['onComplete'] = var10;
            var5['initialParams'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(4);
            var5[0] = var7;
            var11 = var6.Screen;
            var7 = {};
            var7['name'] = var12;
            var12 = function getComponent() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                return var1;
            };
            var7['getComponent'] = var12;
            var12 = function options() {
                var1 = {};
                var2 = function headerRight(arg1) {
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = arg1;
                    var8 = var1;
                    var5 = copyDataProperties(var8, var7);
                    var6 = function onPress() {
                        var3 = _closure2_slot7;
                        var2 = function handleChooseAvatarSkip(arg1) {
                            var1 = arg1;
                            var _closure6_slot0 = var1;
                            var4 = _closure1_slot4;
                            var3 = var4.lazy;
                            var1 = function() {
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var2 = 8;
                                var2 = var1[var2];
                                var4 = undefined;
                                var3 = var3.bind(var4)(var2);
                                var2 = 7;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var6 = var3.bind(var4)(var1);
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.openAlert;
                            var3 = _closure1_slot7;
                            var2 = {};
                            var7 = function onConfirm() {
                                var3 = _closure6_slot0;
                                var2 = undefined;
                                var1 = true;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var2['onConfirm'] = var7;
                            var3 = var3.bind(var1)(var6, var2);
                            var2 = 'skip-avatar-upload';
                            var2 = var4.bind(var5)(var2, var3);
                            return var1;
                        };
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var5 = 'onPress';
                    var1[var5] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerRight'] = var2;
                return var1;
            };
            var7['options'] = var12;
            var12 = {};
            var12['onComplete'] = var10;
            var7['initialParams'] = var12;
            var7 = var8.bind(var4)(var11, var7);
            var5[1] = var7;
            var11 = var6.Screen;
            var7 = {};
            var12 = 'contact-sync';
            var7['name'] = var12;
            var13 = {};
            var12 = false;
            var13['headerShown'] = var12;
            var7['options'] = var13;
            var13 = function getComponent() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ContactSyncOnboardingModal;
                return var1;
            };
            var7['getComponent'] = var13;
            var13 = {};
            var13['onComplete'] = var10;
            var7['initialParams'] = var13;
            var7 = var8.bind(var4)(var11, var7);
            var5[2] = var7;
            var7 = var6.Screen;
            var6 = {};
            var11 = 'discoverability';
            var6['name'] = var11;
            var11 = {};
            var11['headerShown'] = var12;
            var6['options'] = var11;
            var9 = function getComponent() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                return var1;
            };
            var6['getComponent'] = var9;
            var9 = {};
            var9['onComplete'] = var10;
            var6['initialParams'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();