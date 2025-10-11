// app/modules/user_settings/native/core/SettingsNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function LeftAlignedHeaderTitle(arg1) {
        var1 = arg1;
        var8 = var1.title;
        var1 = _closure1_slot13;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot5;
        var1 = {'accessible': true, 'accessibilityRole': 'header'};
        var6 = var6.headerContainer;
        var1['style'] = var6;
        var7 = _closure1_slot10;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 11;
        var5 = var9[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'lineClamp': 1, 'variant': 'heading-lg/bold', 'color': 'header-primary', 'maxFontSizeMultiplier': 2};
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var8 = var4.AnalyticsPages;
    var _closure1_slot8 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.MIN_HEADER_HEIGHT;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.createNativeStackNavigator;
    var4 = var4.bind(var8)();
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var12;
    var12 = 10;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var14;
    var4['statusBarSpacer'] = var10;
    var10 = {};
    var14 = '100%';
    var10['width'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var10['paddingHorizontal'] = var12;
    var4['headerContainer'] = var10;
    var10 = {};
    var12 = -8;
    var10['marginLeft'] = var12;
    var4['backButton'] = var10;
    var10 = {};
    var10['height'] = var11;
    var4['backButtoniOS'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot13;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var _closure2_slot0 = var9;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 12;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useRoute;
            var2 = var1.bind(var2)();
            var5 = var2.params;
            var1 = null;
            var6 = var1 == var5;
            var11 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var5.screen;
case 2:
            if(!(var1 == var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot9;
            var11 = var5.OVERVIEW;
case 4:
            var _closure2_slot1 = var11;
            var6 = var2.params;
            var7 = var1 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var6.params;
case 6:
            var _closure2_slot2 = var5;
            var5 = var2.params;
            var6 = var1 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var5.onClose;
case 8:
            var5 = var1 != var2;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var2;
case 10:
            var _closure2_slot3 = var1;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var2 = 13;
            var5 = var23[var2];
            var7 = var22.bind(var4)(var5);
            var5 = var7.useYouBarEnabled;
            var6 = 'NativeSettings';
            var20 = var5.bind(var7)(var6);
            var _closure2_slot4 = var20;
            var2 = var23[var2];
            var5 = var22.bind(var4)(var2);
            var2 = var5.useYouBarBackButtonBadgeEnabled;
            var2 = var2.bind(var5)(var6);
            var _closure2_slot5 = var2;
            var3 = var23[var3];
            var5 = var22.bind(var4)(var3);
            var3 = var5.useNavigation;
            var3 = var3.bind(var5)();
            var _closure2_slot6 = var3;
            var3 = 14;
            var3 = var23[var3];
            var6 = var22.bind(var4)(var3);
            var5 = var6.useCommonTriggerPoint;
            var3 = 15;
            var3 = var23[var3];
            var3 = var22.bind(var4)(var3);
            var3 = var3.OpenUserSettingsTriggerPoint;
            var3 = var5.bind(var6)(var3);
            var8 = _closure1_slot4;
            var6 = var8.useEffect;
            var5 = new Array(1);
            var5[0] = var11;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackUserSettingsPaneViewed;
                var2 = {};
                var5 = _closure2_slot1;
                var2['destinationPane'] = var5;
                var5 = {};
                var6 = _closure1_slot8;
                var6 = var6.USER_SETTINGS;
                var5['page'] = var6;
                var2['source'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var6.bind(var8)(var3, var5);
            var5 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure2_slot3;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var2 = _closure2_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 12:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var5.bind(var8)(var1, var3);
            var1 = 17;
            var1 = var23[var1];
            var6 = var22.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var1 = var5.bind(var6)(var3, var1);
            var5 = var8.useState;
            var3 = false;
            var6 = var5.bind(var8)(var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var5 = var5.bind(var4)(var6, var3);
            var3 = 1;
            var3 = var5[var3];
            var _closure2_slot7 = var3;
            var5 = var8.useLayoutEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var5.bind(var8)(var1, var3);
            var6 = _closure1_slot1;
            var1 = 18;
            var3 = var23[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 19;
            var3 = var23[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.USER_SETTINGS;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var10 = var8.useMemo;
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getSettingScreens;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var14 = var10.bind(var8)(var7, var3);
            var10 = var8.useLayoutEffect;
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var10.bind(var8)(var7, var3);
            var3 = 22;
            var3 = var23[var3];
            var7 = var22.bind(var4)(var3);
            var3 = var7.useGlobalStatusIndicatorState;
            var10 = var3.bind(var7)();
            var13 = var8.useEffect;
            var7 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.validate;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var13.bind(var8)(var7, var3);
            var3 = 24;
            var3 = var23[var3];
            var7 = var22.bind(var4)(var3);
            var3 = var7.useAccessibilityNativeStackOptions;
            var19 = var3.bind(var7)();
            var3 = 25;
            var3 = var23[var3];
            var7 = var22.bind(var4)(var3);
            var3 = var7.useAccessibilityNativeStackFocusTracking;
            var3 = var3.bind(var7)();
            var18 = var3.beforeRemove;
            var15 = var3.transitionStart;
            var3 = 26;
            var3 = var23[var3];
            var13 = var22.bind(var4)(var3);
            var7 = var13.useToken;
            var3 = 10;
            var3 = var23[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BG_BASE_SECONDARY;
            var3 = var7.bind(var13)(var3);
            var _closure2_slot8 = var3;
            var7 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var1 = _closure2_slot5;
                    if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 31;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var1 = var3.getRenderModalBackImage;
                    var1 = var1.bind(var3)(var4);
                    _fun0003_ip = 16; continue _fun0003;
case 14:
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var1 = _closure2_slot0;
                            var1 = var1.backButton;
                            var5 = new Array(2);
                            var5[0] = var1;
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 27;
                            var6 = var6[var1];
                            var1 = undefined;
                            var9 = var9.bind(var1)(var6);
                            var6 = var9.isAndroid;
                            var9 = var6.bind(var9)();
                            var6 = null;
                            if(var9) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                            var7 = _closure2_slot0;
                            var6 = var7.backButtoniOS;
case 17:
                            var5[1] = var6;
                            var2['style'] = var5;
                            var5 = false;
                            var2['collapsable'] = var5;
                            var7 = _closure1_slot10;
                            var13 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 28;
                            var5 = var11[var5];
                            var5 = var13.bind(var1)(var5);
                            var6 = var5.PressableOpacity;
                            var5 = {};
                            var9 = function onPress() {
                                var2 = _closure3_slot0;
                                var1 = var2.goBack;
                                var1 = var1.bind(var2)();
                                return var1;
                            };
                            var5['onPress'] = var9;
                            var9 = 29;
                            var10 = var11[var9];
                            var10 = var13.bind(var1)(var10);
                            var12 = var10.intl;
                            var10 = var12.string;
                            var9 = var11[var9];
                            var9 = var13.bind(var1)(var9);
                            var9 = var9.t;
                            var9 = var9.13/7kZ;
                            var9 = var10.bind(var12)(var9);
                            var5['accessibilityLabel'] = var9;
                            var10 = {};
                            var9 = _closure1_slot1;
                            var12 = 10;
                            var12 = var11[var12];
                            var12 = var9.bind(var1)(var12);
                            var12 = var12.radii;
                            var12 = var12.round;
                            var10['borderRadius'] = var12;
                            var5['style'] = var10;
                            var10 = _closure1_slot10;
                            var8 = 30;
                            var8 = var11[var8];
                            var9 = var9.bind(var1)(var8);
                            var8 = {};
                            var11 = true;
                            var8['includeNotificationsCount'] = var11;
                            var8 = var10.bind(var1)(var9, var8);
                            var5['children'] = var8;
                            var5 = var7.bind(var1)(var6, var5);
                            var2['children'] = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
case 16:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var3);
            var _closure2_slot9 = var2;
            var7 = var8.useMemo;
            var3 = function() {
                var1 = {};
                var2 = function transitionEnd(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var2 = var1.closing;
                        var4 = _closure1_slot7;
                        var3 = var4.getState;
                        var4 = var3.bind(var4)();
                        var3 = var4.isActive;
                        var4 = var4.query;
                        if(!var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                        var2 = var3;
case 19:
                        if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                        var3 = '';
                        var2 = var3 === var4;
case 21:
                        if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                        var3 = _closure1_slot7;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = false;
                        var1['isActive'] = var4;
                        var1 = var2.bind(var3)(var1);
case 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['transitionEnd'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var16 = var7.bind(var8)(var3, var2);
            var7 = var8.useMemo;
            var3 = function() {
                var1 = {};
                var2 = function transitionEnd(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var1 = var1.closing;
                        if(!var1) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                        var4 = _closure1_slot7;
                        var3 = var4.getField;
                        var2 = 'selected';
                        var3 = var3.bind(var4)(var2);
                        var2 = null;
                        var1 = var2 != var3;
case 25:
                        if(!var1) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        var3 = _closure1_slot7;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = null;
                        var1['selected'] = var4;
                        var1 = var2.bind(var3)(var1);
case 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['transitionEnd'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var8)(var3, var2);
            var _closure2_slot10 = var2;
            var3 = _closure1_slot11;
            var1 = var23[var1];
            var1 = var22.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot10;
            var5 = 32;
            var5 = var23[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var6 = 33;
            var6 = var23[var6];
            var6 = var22.bind(var4)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {};
            var10 = var10.isVisible;
            var6['top'] = var10;
            var9 = var9.statusBarSpacer;
            var6['style'] = var9;
            var9 = function onAccessibilityAction(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'escape';
                    var1 = var1 === var2;
                    if(!var1) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var3 = _closure2_slot6;
                    var2 = var3.canGoBack;
                    var1 = var2.bind(var3)();
case 29:
                    if(!var1) { _fun0007_ip = 31; continue _fun0007 }
case 25:
                    var2 = _closure2_slot6;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onAccessibilityAction'] = var9;
            var10 = {};
            var9 = 'escape';
            var10['name'] = var9;
            var9 = 29;
            var13 = var23[var9];
            var13 = var22.bind(var4)(var13);
            var21 = var13.intl;
            var13 = var21.string;
            var9 = var23[var9];
            var9 = var22.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.13/7kZ;
            var9 = var13.bind(var21)(var9);
            var10['label'] = var9;
            var9 = new Array(1);
            var9[0] = var10;
            var6['accessibilityActions'] = var9;
            var9 = _closure1_slot12;
            var10 = var9.Navigator;
            var9 = {};
            var13 = 'settings-navigator';
            var9['id'] = var13;
            var13 = {'fullScreenGestureEnabled': true, 'headerTitle': null, 'headerTitleAlign': 'center'};
            if(var20) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var20 = 31;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.renderGenericTitle;
            _fun0001_ip = 34; continue _fun0001;
case 32:
            var20 = function(arg1) {
                var1 = arg1;
                var1 = var1.children;
                var4 = _closure1_slot10;
                var3 = _closure1_slot14;
                var2 = {};
                var2['title'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
case 34:
            var13['headerTitle'] = var20;
            var25 = var13;
            var24 = var19;
            var19 = copyDataProperties(var25, var24);
            var9['screenOptions'] = var13;
            var13 = {};
            var13['beforeRemove'] = var18;
            var13['transitionStart'] = var15;
            var9['screenListeners'] = var13;
            var9['initialRouteName'] = var11;
            var15 = _closure1_slot10;
            var11 = _closure1_slot12;
            var13 = var11.Screen;
            var11 = {};
            var17 = _closure1_slot9;
            var17 = var17.OVERVIEW;
            var11['name'] = var17;
            var17 = function options(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.navigation;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 29;
                    var3 = var8[var2];
                    var4 = undefined;
                    var3 = var7.bind(var4)(var3);
                    var6 = var3.intl;
                    var3 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var4)(var2);
                    var2 = var2.t;
                    var2 = var2.3D5yo6;
                    var2 = var3.bind(var6)(var2);
                    var1['title'] = var2;
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var4)(var5);
                    var1['headerLeft'] = var2;
                    var2 = _closure2_slot4;
                    var2 = !var2;
                    if(!var2) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var2 = undefined;
case 35:
                    var1['headerBackVisible'] = var2;
                    var2 = {};
                    var3 = _closure2_slot8;
                    var2['backgroundColor'] = var3;
                    var1['contentStyle'] = var2;
                    return var1;
                }
            };
            var11['options'] = var17;
            var11['listeners'] = var16;
            var16 = function getComponent() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 34;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                return var1;
            };
            var11['getComponent'] = var16;
            var13 = var15.bind(var4)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var13 = var14.map;
            var12 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var7 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var4 = undefined;
                    if(var2) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                    var4 = var7;
case 37:
                    var _closure3_slot0 = var4;
                    var7 = undefined;
                    if(var2) { _fun0009_ip = 24; continue _fun0009 }
case 39:
                    var8 = var3().value;
                    var3 = var1;
                    var3 = var3 === var5;
                    var7 = undefined;
                    var2 = var3;
                    if(var3) { _fun0009_ip = 24; continue _fun0009 }
case 14:
                    var7 = var8;
                    var2 = var3;
case 24:
                    var _closure3_slot1 = var7;
                    if(var2) { _fun0009_ip = 40; continue _fun0009 }
case 18:
                    var1.return();
case 40:
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot12;
                    var2 = var1.Screen;
                    var1 = {};
                    var8 = var7.route;
                    var1['name'] = var8;
                    var8 = function options(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            var6 = var1.navigation;
                            var1 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 20;
                            var2 = var3[var2];
                            var3 = undefined;
                            var7 = var4.bind(var3)(var2);
                            var5 = var7.getSettingTitle;
                            var4 = _closure3_slot0;
                            var4 = var5.bind(var7)(var4);
                            var1['title'] = var4;
                            var4 = _closure2_slot9;
                            var4 = var4.bind(var3)(var6);
                            var1['headerLeft'] = var4;
                            var4 = _closure2_slot4;
                            var4 = !var4;
                            if(!var4) { _fun0010_ip = 23; continue _fun0010 }
case 41:
                            var4 = undefined;
case 23:
                            var1['headerBackVisible'] = var4;
                            var4 = {};
                            var5 = _closure2_slot8;
                            var4['backgroundColor'] = var5;
                            var1['contentStyle'] = var4;
                            var4 = false;
                            var1['headerBackTitleVisible'] = var4;
                            var2 = _closure3_slot1;
                            var4 = var2.navigationOptions;
                            var2 = null;
                            var5 = var2 == var4;
                            var3 = undefined;
                            if(var5) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                            var3 = var4.headerShadowVisible;
case 42:
                            var2 = var2 == var3;
                            if(var2) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                            var2 = var3;
case 44:
                            var1['headerShadowVisible'] = var2;
                            return var1;
                        }
                    };
                    var1['options'] = var8;
                    var6 = function getComponent() {
                        var3 = _closure3_slot1;
                        var1 = var3.getComponent;
                        var1 = var1.bind(var3)();
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 35;
                        var3 = var5[var3];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var3);
                        var3 = null;
                        var3 = var3 != var1;
                        var7 = _closure3_slot0;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var2 = '[Settings Navigator] Invalid component for setting: ';
                        var2 = var6.bind(var2)(var7);
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var1['getComponent'] = var6;
                    var9 = _closure2_slot1;
                    var8 = var7.route;
                    var7 = undefined;
                    if(!(var9 === var8)) { _fun0009_ip = 10; continue _fun0009 }
case 46:
                    var7 = _closure2_slot2;
case 10:
                    var1['initialParams'] = var7;
                    var6 = _closure2_slot10;
                    var1['listeners'] = var6;
                    var1 = var3.bind(var5)(var2, var1, var4);
                    return var1;
                }
            };
            var12 = var13.bind(var14)(var12);
            var11[1] = var12;
            var9['children'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/core/SettingsNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();