// app/modules/user_settings/core/native/SettingsNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function LeftAlignedHeaderTitle(arg1) {
        var1 = arg1;
        var5 = var1.title;
        var2 = _closure1_slot13;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 10;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Heading;
        var1 = {'lineClamp': 1, 'variant': 'redesign/heading-18/bold', 'color': 'mobile-text-heading-primary', 'maxFontSizeMultiplier': 2};
        var6 = var6.headerContainer;
        var1['style'] = var6;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
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
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.createNativeStackNavigator;
    var4 = var4.bind(var8)();
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_ACTIONSHEET_BACKGROUND;
    var10['backgroundColor'] = var13;
    var4['statusBarSpacer'] = var10;
    var10 = {};
    var13 = '100%';
    var10['width'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['marginTop'] = var13;
    var4['headerContainer'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10['marginTop'] = var11;
    var4['backButton'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot13;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var _closure2_slot0 = var10;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 11;
            var1 = var1[var2];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useRoute;
            var3 = var1.bind(var3)();
            var5 = var3.params;
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
            var6 = var3.params;
            var7 = var1 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var6.params;
case 6:
            var _closure2_slot2 = var5;
            var5 = var3.params;
            var6 = var1 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var5.onClose;
case 8:
            var5 = var1 != var3;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var3;
case 10:
            var _closure2_slot3 = var1;
            var7 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 12;
            var3 = var21[var3];
            var6 = var7.bind(var4)(var3);
            var5 = var6.useYouBarEnabled;
            var3 = 'NativeSettings';
            var20 = var5.bind(var6)(var3);
            var _closure2_slot4 = var20;
            var2 = var21[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot5 = var2;
            var2 = 13;
            var2 = var21[var2];
            var5 = var7.bind(var4)(var2);
            var3 = var5.useCommonTriggerPoint;
            var2 = 14;
            var2 = var21[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.OpenUserSettingsTriggerPoint;
            var2 = var3.bind(var5)(var2);
            var22 = _closure1_slot4;
            var5 = var22.useEffect;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
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
            var2 = var5.bind(var22)(var2, var3);
            var3 = var22.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
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
            var1 = var3.bind(var22)(var1, var2);
            var1 = 16;
            var1 = var21[var1];
            var5 = var7.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            var2 = var22.useState;
            var9 = false;
            var5 = var2.bind(var22)(var9);
            var3 = _closure1_slot3;
            var2 = 2;
            var2 = var3.bind(var4)(var5, var2);
            var16 = 1;
            var2 = var2[var16];
            var _closure2_slot6 = var2;
            var3 = var22.useLayoutEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure2_slot6;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var22)(var1, var2);
            var6 = _closure1_slot1;
            var1 = 17;
            var2 = var21[var1];
            var3 = var6.bind(var4)(var2);
            var2 = 18;
            var2 = var21[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.USER_SETTINGS;
            var2 = var3.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var8 = var22.useMemo;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getSettingScreens;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var14 = var8.bind(var22)(var3, var2);
            var8 = var22.useLayoutEffect;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var8.bind(var22)(var3, var2);
            var2 = 21;
            var2 = var21[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useGlobalStatusIndicatorState;
            var13 = var2.bind(var3)();
            var8 = var22.useEffect;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.validate;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var8.bind(var22)(var3, var2);
            var2 = 23;
            var2 = var21[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useAccessibilityNativeStackOptions;
            var19 = var2.bind(var3)();
            var2 = 24;
            var2 = var21[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useAccessibilityNativeStackFocusTracking;
            var2 = var2.bind(var3)();
            var18 = var2.beforeRemove;
            var15 = var2.transitionStart;
            var2 = {};
            var8 = 25;
            var3 = var21[var8];
            var25 = var7.bind(var4)(var3);
            var24 = var25.useToken;
            var3 = 9;
            var23 = var21[var3];
            var23 = var6.bind(var4)(var23);
            var23 = var23.colors;
            var23 = var23.MOBILE_ACTIONSHEET_BACKGROUND;
            var23 = var24.bind(var25)(var23);
            var2['backgroundColor'] = var23;
            var2['borderTopWidth'] = var16;
            var8 = var21[var8];
            var16 = var7.bind(var4)(var8);
            var8 = var16.useToken;
            var3 = var21[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BORDER_SUBTLE;
            var3 = var8.bind(var16)(var3);
            var2['borderTopColor'] = var3;
            var _closure2_slot7 = var2;
            var8 = var22.useCallback;
            var3 = new Array(2);
            var3[0] = var20;
            var2 = var10.backButton;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = _closure2_slot4;
                    if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var1 = function() {
                        var4 = _closure1_slot10;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 29;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = _closure3_slot0;
                        var1['navigation'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    _fun0003_ip = 16; continue _fun0003;
case 14:
                    var1 = function() {
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot5;
                        var2 = {};
                        var1 = false;
                        var2['collapsable'] = var1;
                        var1 = _closure2_slot0;
                        var1 = var1.backButton;
                        var2['style'] = var1;
                        var7 = _closure1_slot10;
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var1 = 26;
                        var5 = var11[var1];
                        var1 = undefined;
                        var5 = var9.bind(var1)(var5);
                        var6 = var5.PressableOpacity;
                        var5 = {};
                        var8 = function onPress() {
                            var2 = _closure3_slot0;
                            var1 = var2.goBack;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var5['onPress'] = var8;
                        var8 = 27;
                        var12 = var11[var8];
                        var12 = var9.bind(var1)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var8 = var11[var8];
                        var8 = var9.bind(var1)(var8);
                        var8 = var8.t;
                        var8 = var8["13/7kX"];
                        var8 = var12.bind(var13)(var8);
                        var5['accessibilityLabel'] = var8;
                        var8 = 28;
                        var12 = var11[var8];
                        var12 = var9.bind(var1)(var12);
                        var12 = var12.BACK_ICON_WITH_BADGE_HIT_SLOP;
                        var5['hitSlop'] = var12;
                        var10 = _closure1_slot10;
                        var8 = var11[var8];
                        var8 = var9.bind(var1)(var8);
                        var9 = var8.SettingsLeftIconWithBadge;
                        var8 = {};
                        var11 = _closure3_slot0;
                        var8['navigation'] = var11;
                        var8 = var10.bind(var1)(var9, var8);
                        var5['children'] = var8;
                        var5 = var7.bind(var1)(var6, var5);
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
case 16:
                    return var1;
                }
            };
            var2 = var8.bind(var22)(var2, var3);
            var _closure2_slot8 = var2;
            var8 = var22.useMemo;
            var3 = function() {
                var1 = {};
                var2 = function transitionEnd(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var2 = var1.closing;
                        var4 = _closure1_slot7;
                        var3 = var4.getState;
                        var4 = var3.bind(var4)();
                        var3 = var4.isActive;
                        var4 = var4.query;
                        if(!var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var2 = var3;
case 17:
                        if(!var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var3 = '';
                        var2 = var3 === var4;
case 19:
                        if(!var2) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var3 = _closure1_slot7;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = false;
                        var1['isActive'] = var4;
                        var1 = var2.bind(var3)(var1);
case 21:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['transitionEnd'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var16 = var8.bind(var22)(var3, var2);
            var8 = var22.useMemo;
            var3 = function() {
                var1 = {};
                var2 = function transitionEnd(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var1 = var1.closing;
                        if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                        var4 = _closure1_slot7;
                        var3 = var4.getField;
                        var2 = 'selected';
                        var3 = var3.bind(var4)(var2);
                        var2 = null;
                        var1 = var2 != var3;
case 23:
                        if(!var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                        var3 = _closure1_slot7;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = null;
                        var1['selected'] = var4;
                        var1 = var2.bind(var3)(var1);
case 25:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['transitionEnd'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var8.bind(var22)(var3, var2);
            var _closure2_slot9 = var2;
            var2 = 30;
            var2 = var21[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useAutoSettingsSearchSessionAnalytics;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot11;
            var1 = var21[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var8 = _closure1_slot10;
            var5 = 31;
            var5 = var21[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var6 = 32;
            var6 = var21[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {};
            var13 = var13.isVisible;
            var6['top'] = var13;
            var10 = var10.statusBarSpacer;
            var6['style'] = var10;
            var6['accessible'] = var9;
            var9 = function onAccessibilityEscape() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var2 = _closure2_slot5;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
case 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onAccessibilityEscape'] = var9;
            var9 = _closure1_slot12;
            var10 = var9.Navigator;
            var9 = {};
            var13 = 'settings-navigator';
            var9['id'] = var13;
            var13 = {'fullScreenGestureEnabled': true, 'headerTitle': null, 'headerTitleAlign': 'center'};
            if(var20) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var20 = 33;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.renderGenericTitle;
            _fun0001_ip = 31; continue _fun0001;
case 29:
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
case 31:
            var13['headerTitle'] = var20;
            var27 = var13;
            var26 = var19;
            var19 = copyDataProperties(var27, var26);
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
                var1 = arg1;
                var5 = var1.navigation;
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 27;
                var3 = var8[var2];
                var4 = undefined;
                var3 = var7.bind(var4)(var3);
                var6 = var3.intl;
                var3 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2["3D5yo/"];
                var2 = var3.bind(var6)(var2);
                var1['title'] = var2;
                var3 = _closure2_slot8;
                var3 = var3.bind(var4)(var5);
                var1['headerLeft'] = var3;
                var3 = false;
                var1['headerBackVisible'] = var3;
                var1['headerShadowVisible'] = var3;
                var2 = _closure2_slot7;
                var1['contentStyle'] = var2;
                return var1;
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var7 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var4 = undefined;
                    if(var2) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var4 = var7;
case 32:
                    var _closure3_slot0 = var4;
                    var7 = undefined;
                    if(var2) { _fun0007_ip = 22; continue _fun0007 }
case 34:
                    var8 = var3().value;
                    var3 = var1;
                    var3 = var3 === var5;
                    var7 = undefined;
                    var2 = var3;
                    if(var3) { _fun0007_ip = 22; continue _fun0007 }
case 35:
                    var7 = var8;
                    var2 = var3;
case 22:
                    var _closure3_slot1 = var7;
                    if(var2) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var1.return();
case 36:
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot12;
                    var2 = var1.Screen;
                    var1 = {};
                    var8 = var7.route;
                    var1['name'] = var8;
                    var8 = function options(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = arg1;
                            var6 = var1.navigation;
                            var1 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 19;
                            var2 = var3[var2];
                            var3 = undefined;
                            var7 = var4.bind(var3)(var2);
                            var5 = var7.getSettingTitle;
                            var4 = _closure3_slot0;
                            var4 = var5.bind(var7)(var4);
                            var1['title'] = var4;
                            var5 = _closure2_slot8;
                            var5 = var5.bind(var3)(var6);
                            var1['headerLeft'] = var5;
                            var5 = false;
                            var1['headerBackVisible'] = var5;
                            var4 = _closure2_slot7;
                            var1['contentStyle'] = var4;
                            var2 = _closure3_slot1;
                            var4 = var2.navigationOptions;
                            var2 = null;
                            var5 = var2 == var4;
                            if(var5) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                            var3 = var4.headerShadowVisible;
case 38:
                            var2 = var2 == var3;
                            if(var2) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                            var2 = var3;
case 40:
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
                    if(!(var9 === var8)) { _fun0007_ip = 10; continue _fun0007 }
case 42:
                    var7 = _closure2_slot2;
case 10:
                    var1['initialParams'] = var7;
                    var6 = _closure2_slot9;
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
    var4 = 'modules/user_settings/core/native/SettingsNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();