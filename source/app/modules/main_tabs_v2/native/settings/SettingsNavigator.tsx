// app/modules/main_tabs_v2/native/settings/SettingsNavigator.tsx
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
        var1 = _closure1_slot17;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot14;
        var2 = _closure1_slot5;
        var1 = {'accessible': true, 'accessibilityRole': 'header'};
        var6 = var6.headerContainer;
        var1['style'] = var6;
        var7 = _closure1_slot14;
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
    var _closure1_slot18 = var1;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.clearSelectedSearchResult;
    var _closure1_slot7 = var8;
    var8 = var4.getIsSettingSearchActive;
    var _closure1_slot8 = var8;
    var8 = var4.getSelectedSearchResult;
    var _closure1_slot9 = var8;
    var8 = var4.getSettingSearchQuery;
    var _closure1_slot10 = var8;
    var4 = var4.setIsSettingSearchActive;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.MIN_HEADER_HEIGHT;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticsPages;
    var _closure1_slot12 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.createNativeStackNavigator;
    var4 = var4.bind(var8)();
    var _closure1_slot16 = var4;
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
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot17;
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
            if(var6) { _fun0001_ip = 72; continue _fun0001 }
 66:
            var11 = var5.screen;
 72:
            if(!(var1 == var11)) { _fun0001_ip = 86; continue _fun0001 }
 76:
            var5 = _closure1_slot13;
            var11 = var5.OVERVIEW;
 86:
            var _closure2_slot1 = var11;
            var6 = var2.params;
            var7 = var1 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 111; continue _fun0001 }
 105:
            var5 = var6.params;
 111:
            var _closure2_slot2 = var5;
            var5 = var2.params;
            var6 = var1 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 136; continue _fun0001 }
 130:
            var2 = var5.onClose;
 136:
            var5 = var1 != var2;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 148; continue _fun0001 }
 145:
            var1 = var2;
 148:
            var _closure2_slot3 = var1;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var2 = 13;
            var5 = var22[var2];
            var7 = var21.bind(var4)(var5);
            var5 = var7.useYouBarEnabled;
            var6 = 'NativeSettings';
            var19 = var5.bind(var7)(var6);
            var _closure2_slot4 = var19;
            var2 = var22[var2];
            var5 = var21.bind(var4)(var2);
            var2 = var5.useYouBarBackButtonBadgeEnabled;
            var2 = var2.bind(var5)(var6);
            var _closure2_slot5 = var2;
            var3 = var22[var3];
            var5 = var21.bind(var4)(var3);
            var3 = var5.useNavigation;
            var3 = var3.bind(var5)();
            var _closure2_slot6 = var3;
            var3 = 14;
            var3 = var22[var3];
            var6 = var21.bind(var4)(var3);
            var5 = var6.useCommonTriggerPoint;
            var3 = 15;
            var3 = var22[var3];
            var3 = var21.bind(var4)(var3);
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
                var3 = var4.trackPaneViewed;
                var2 = {};
                var5 = _closure2_slot1;
                var2['destinationPane'] = var5;
                var5 = {};
                var6 = _closure1_slot12;
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
 0:
                        var3 = _closure2_slot3;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                        var2 = _closure2_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var5.bind(var8)(var1, var3);
            var1 = 17;
            var1 = var22[var1];
            var6 = var21.bind(var4)(var1);
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
            var3 = var22[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 19;
            var3 = var22[var3];
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
            var3 = var22[var3];
            var7 = var21.bind(var4)(var3);
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
            var3 = var22[var3];
            var7 = var21.bind(var4)(var3);
            var3 = var7.useAccessibilityNativeStackOptions;
            var18 = var3.bind(var7)();
            var3 = 25;
            var3 = var22[var3];
            var7 = var21.bind(var4)(var3);
            var3 = var7.useAccessibilityNativeStackFocusTracking;
            var3 = var3.bind(var7)();
            var17 = var3.beforeRemove;
            var15 = var3.transitionStart;
            var3 = 26;
            var3 = var22[var3];
            var13 = var21.bind(var4)(var3);
            var7 = var13.useToken;
            var3 = 10;
            var3 = var22[var3];
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
 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var1 = _closure2_slot5;
                    if(var1) { _fun0003_ip = 57; continue _fun0003 }
 19:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 31;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var1 = var3.getRenderModalBackImage;
                    var1 = var1.bind(var3)(var4);
                    _fun0003_ip = 64; continue _fun0003;
 57:
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var4 = _closure1_slot14;
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
                            if(var9) { _fun0004_ip = 80; continue _fun0004 }
 70:
                            var7 = _closure2_slot0;
                            var6 = var7.backButtoniOS;
 80:
                            var5[1] = var6;
                            var2['style'] = var5;
                            var5 = false;
                            var2['collapsable'] = var5;
                            var7 = _closure1_slot14;
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
                            var10 = _closure1_slot14;
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
 64:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var3);
            var _closure2_slot9 = var2;
            var3 = _closure1_slot15;
            var1 = var22[var1];
            var1 = var21.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot14;
            var5 = 32;
            var5 = var22[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot14;
            var6 = 33;
            var6 = var22[var6];
            var6 = var21.bind(var4)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {};
            var10 = var10.isVisible;
            var6['top'] = var10;
            var9 = var9.statusBarSpacer;
            var6['style'] = var9;
            var9 = function onAccessibilityAction(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'escape';
                    var1 = var1 === var2;
                    if(!var1) { _fun0005_ip = 42; continue _fun0005 }
 25:
                    var3 = _closure2_slot6;
                    var2 = var3.canGoBack;
                    var1 = var2.bind(var3)();
 42:
                    if(!var1) { _fun0005_ip = 62; continue _fun0005 }
 45:
                    var2 = _closure2_slot6;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onAccessibilityAction'] = var9;
            var10 = {};
            var9 = 'escape';
            var10['name'] = var9;
            var9 = 29;
            var13 = var22[var9];
            var13 = var21.bind(var4)(var13);
            var20 = var13.intl;
            var13 = var20.string;
            var9 = var22[var9];
            var9 = var21.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.13/7kZ;
            var9 = var13.bind(var20)(var9);
            var10['label'] = var9;
            var9 = new Array(1);
            var9[0] = var10;
            var6['accessibilityActions'] = var9;
            var9 = _closure1_slot16;
            var10 = var9.Navigator;
            var9 = {};
            var13 = 'settings-navigator';
            var9['id'] = var13;
            var13 = {'fullScreenGestureEnabled': true, 'headerTitle': null, 'headerTitleAlign': 'center'};
            if(var19) { _fun0001_ip = 970; continue _fun0001 }
 942:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 31;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.renderGenericTitle;
            _fun0001_ip = 977; continue _fun0001;
 970:
            var19 = function(arg1) {
                var1 = arg1;
                var1 = var1.children;
                var4 = _closure1_slot14;
                var3 = _closure1_slot18;
                var2 = {};
                var2['title'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
 977:
            var13['headerTitle'] = var19;
            var24 = var13;
            var23 = var18;
            var18 = copyDataProperties(var24, var23);
            var9['screenOptions'] = var13;
            var13 = {};
            var13['beforeRemove'] = var17;
            var13['transitionStart'] = var15;
            var9['screenListeners'] = var13;
            var9['initialRouteName'] = var11;
            var15 = _closure1_slot14;
            var11 = _closure1_slot16;
            var13 = var11.Screen;
            var11 = {};
            var16 = _closure1_slot13;
            var16 = var16.OVERVIEW;
            var11['name'] = var16;
            var16 = function options(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
                    if(!var2) { _fun0006_ip = 104; continue _fun0006 }
 102:
                    var2 = undefined;
 104:
                    var1['headerBackVisible'] = var2;
                    var2 = {};
                    var3 = _closure2_slot8;
                    var2['backgroundColor'] = var3;
                    var1['contentStyle'] = var2;
                    return var1;
                }
            };
            var11['options'] = var16;
            var16 = {};
            var17 = function transitionEnd(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.data;
                    var1 = var1.closing;
                    if(!var1) { _fun0007_ip = 30; continue _fun0007 }
 17:
                    var3 = _closure1_slot8;
                    var2 = undefined;
                    var1 = var3.bind(var2)();
 30:
                    if(!var1) { _fun0007_ip = 54; continue _fun0007 }
 33:
                    var3 = _closure1_slot10;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var2 = '';
                    var1 = var2 === var3;
 54:
                    if(!var1) { _fun0007_ip = 73; continue _fun0007 }
 57:
                    var3 = _closure1_slot11;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var16['transitionEnd'] = var17;
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var6 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var4 = undefined;
                    if(var2) { _fun0008_ip = 29; continue _fun0008 }
 26:
                    var4 = var6;
 29:
                    var _closure3_slot0 = var4;
                    var6 = undefined;
                    if(var2) { _fun0008_ip = 63; continue _fun0008 }
 38:
                    var8 = var3().value;
                    var3 = var1;
                    var3 = var3 === var5;
                    var6 = undefined;
                    var2 = var3;
                    if(var3) { _fun0008_ip = 63; continue _fun0008 }
 57:
                    var6 = var8;
                    var2 = var3;
 63:
                    var _closure3_slot1 = var6;
                    if(var2) { _fun0008_ip = 73; continue _fun0008 }
 70:
                    var1.return();
 73:
                    var3 = _closure1_slot14;
                    var1 = _closure1_slot16;
                    var2 = var1.Screen;
                    var1 = {};
                    var8 = var6.route;
                    var1['name'] = var8;
                    var8 = function options(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
                            if(!var4) { _fun0009_ip = 87; continue _fun0009 }
 85:
                            var4 = undefined;
 87:
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
                            if(var5) { _fun0009_ip = 143; continue _fun0009 }
 137:
                            var3 = var4.headerShadowVisible;
 143:
                            var2 = var2 == var3;
                            if(var2) { _fun0009_ip = 153; continue _fun0009 }
 150:
                            var2 = var3;
 153:
                            var1['headerShadowVisible'] = var2;
                            return var1;
                        }
                    };
                    var1['options'] = var8;
                    var8 = function getComponent() {
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
                    var1['getComponent'] = var8;
                    var10 = _closure2_slot1;
                    var9 = var6.route;
                    var6 = undefined;
                    if(!(var10 === var9)) { _fun0008_ip = 148; continue _fun0008 }
 144:
                    var6 = _closure2_slot2;
 148:
                    var1['initialParams'] = var6;
                    var6 = {};
                    var7 = function transitionEnd(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.data;
                            var1 = var1.closing;
                            if(!var1) { _fun0010_ip = 36; continue _fun0010 }
 17:
                            var3 = _closure1_slot9;
                            var2 = undefined;
                            var3 = var3.bind(var2)();
                            var2 = null;
                            var1 = var2 != var3;
 36:
                            if(!var1) { _fun0010_ip = 52; continue _fun0010 }
 39:
                            var2 = _closure1_slot7;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
 52:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6['transitionEnd'] = var7;
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
    var4 = 'modules/main_tabs_v2/native/settings/SettingsNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();