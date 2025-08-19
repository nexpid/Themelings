// app/modules/main_tabs_v2/native/settings/SettingsNavigator.tsx
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
        var8 = var1.title;
        var1 = _closure1_slot17;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var3 = _closure1_slot14;
        var2 = _closure1_slot5;
        var1 = {'accessible': true, 'accessibilityRole': 'header'};
        var6 = var9.headerContainer;
        var1['style'] = var6;
        var7 = _closure1_slot14;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 10;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'lineClamp': 1, 'variant': 'heading-lg/bold', 'color': 'header-primary', 'style': null, 'maxFontSizeMultiplier': 2};
        var9 = var9.headerText;
        var5['style'] = var9;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var13 = 2;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
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
    var8 = var4.AnalyticsPages;
    var _closure1_slot12 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.createNativeStackNavigator;
    var4 = var4.bind(var8)();
    var _closure1_slot16 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var11 = 9;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var14;
    var4['statusBarSpacer'] = var10;
    var10 = {};
    var14 = 24;
    var10['marginRight'] = var14;
    var4['headerLeftSpacer'] = var10;
    var10 = {};
    var10['marginTop'] = var13;
    var4['headerText'] = var10;
    var10 = {};
    var13 = '100%';
    var10['width'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10['paddingHorizontal'] = var11;
    var4['headerContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot17;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useRoute;
            var2 = var1.bind(var2)();
            var3 = var2.params;
            var1 = null;
            var5 = var1 == var3;
            var11 = undefined;
            if(var5) { _fun0001_ip = 68; continue _fun0001 }
 62:
            var11 = var3.screen;
 68:
            if(!(var1 == var11)) { _fun0001_ip = 82; continue _fun0001 }
 72:
            var3 = _closure1_slot13;
            var11 = var3.OVERVIEW;
 82:
            var _closure2_slot0 = var11;
            var5 = var2.params;
            var6 = var1 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 107; continue _fun0001 }
 101:
            var3 = var5.params;
 107:
            var _closure2_slot1 = var3;
            var3 = var2.params;
            var5 = var1 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 132; continue _fun0001 }
 126:
            var2 = var3.onClose;
 132:
            var3 = var1 != var2;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 144; continue _fun0001 }
 141:
            var1 = var2;
 144:
            var _closure2_slot2 = var1;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 12;
            var3 = var13[var2];
            var6 = var7.bind(var4)(var3);
            var3 = var6.useYouBarEnabled;
            var5 = 'NativeSettings';
            var19 = var3.bind(var6)(var5);
            var _closure2_slot3 = var19;
            var2 = var13[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useYouBarBackButtonBadgeEnabled;
            var2 = var2.bind(var3)(var5);
            var _closure2_slot4 = var2;
            var3 = 13;
            var3 = var13[var3];
            var6 = var7.bind(var4)(var3);
            var5 = var6.useCommonTriggerPoint;
            var3 = 14;
            var3 = var13[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.OpenUserSettingsTriggerPoint;
            var3 = var5.bind(var6)(var3);
            var20 = _closure1_slot4;
            var6 = var20.useEffect;
            var5 = new Array(1);
            var5[0] = var11;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackPaneViewed;
                var2 = {};
                var5 = _closure2_slot0;
                var2['destinationPane'] = var5;
                var5 = {};
                var6 = _closure1_slot12;
                var6 = var6.USER_SETTINGS;
                var5['page'] = var6;
                var2['source'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var6.bind(var20)(var3, var5);
            var5 = var20.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                        var2 = _closure2_slot2;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var5.bind(var20)(var1, var3);
            var1 = 16;
            var1 = var13[var1];
            var6 = var7.bind(var4)(var1);
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
            var5 = var20.useState;
            var3 = false;
            var6 = var5.bind(var20)(var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var5 = var5.bind(var4)(var6, var3);
            var3 = 1;
            var3 = var5[var3];
            var _closure2_slot5 = var3;
            var5 = var20.useLayoutEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure2_slot5;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var5.bind(var20)(var1, var3);
            var6 = _closure1_slot1;
            var1 = 17;
            var3 = var13[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 18;
            var3 = var13[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.USER_SETTINGS;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var10 = var20.useMemo;
            var8 = function() {
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
            var3 = new Array(0);
            var14 = var10.bind(var20)(var8, var3);
            var10 = var20.useLayoutEffect;
            var8 = function() {
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
            var3 = new Array(0);
            var3 = var10.bind(var20)(var8, var3);
            var3 = 21;
            var3 = var13[var3];
            var8 = var7.bind(var4)(var3);
            var3 = var8.useGlobalStatusIndicatorState;
            var10 = var3.bind(var8)();
            var15 = var20.useEffect;
            var8 = function() {
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
            var3 = new Array(0);
            var3 = var15.bind(var20)(var8, var3);
            var3 = 23;
            var3 = var13[var3];
            var8 = var7.bind(var4)(var3);
            var3 = var8.useAccessibilityNativeStackOptions;
            var18 = var3.bind(var8)();
            var3 = 24;
            var3 = var13[var3];
            var8 = var7.bind(var4)(var3);
            var3 = var8.useAccessibilityNativeStackFocusTracking;
            var3 = var3.bind(var8)();
            var17 = var3.beforeRemove;
            var15 = var3.transitionStart;
            var3 = 25;
            var3 = var13[var3];
            var21 = var7.bind(var4)(var3);
            var8 = var21.useToken;
            var3 = 9;
            var3 = var13[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BG_BASE_SECONDARY;
            var3 = var8.bind(var21)(var3);
            var _closure2_slot6 = var3;
            var8 = var20.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var1 = _closure2_slot4;
                    if(var1) { _fun0003_ip = 57; continue _fun0003 }
 19:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 30;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var1 = var3.getRenderModalBackImage;
                    var1 = var1.bind(var3)(var4);
                    _fun0003_ip = 64; continue _fun0003;
 57:
                    var1 = function() {
                        var4 = _closure1_slot14;
                        var9 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var1 = 26;
                        var1 = var11[var1];
                        var3 = undefined;
                        var2 = var9.bind(var3)(var1);
                        var1 = {};
                        var7 = _closure1_slot14;
                        var14 = _closure1_slot0;
                        var5 = 27;
                        var5 = var11[var5];
                        var5 = var14.bind(var3)(var5);
                        var6 = var5.PressableOpacity;
                        var5 = {};
                        var10 = function onPress() {
                            var2 = _closure3_slot0;
                            var1 = var2.goBack;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var5['onPress'] = var10;
                        var10 = 28;
                        var12 = var11[var10];
                        var12 = var14.bind(var3)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var10 = var11[var10];
                        var10 = var14.bind(var3)(var10);
                        var10 = var10.t;
                        var10 = var10.13/7kZ;
                        var10 = var12.bind(var13)(var10);
                        var5['accessibilityLabel'] = var10;
                        var10 = _closure1_slot14;
                        var8 = 29;
                        var8 = var11[var8];
                        var9 = var9.bind(var3)(var8);
                        var8 = {};
                        var11 = true;
                        var8['includeNotificationsCount'] = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var5['children'] = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var1['children'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
 64:
                    return var1;
                }
            };
            var2 = var8.bind(var20)(var2, var3);
            var _closure2_slot7 = var2;
            var3 = _closure1_slot15;
            var1 = var13[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var8 = _closure1_slot14;
            var5 = 31;
            var5 = var13[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot14;
            var6 = 32;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {};
            var10 = var10.isVisible;
            var6['top'] = var10;
            var9 = var9.statusBarSpacer;
            var6['style'] = var9;
            var9 = _closure1_slot16;
            var10 = var9.Navigator;
            var9 = {};
            var13 = 'settings-navigator';
            var9['id'] = var13;
            var13 = {};
            var20 = true;
            var13['fullScreenGestureEnabled'] = var20;
            var20 = undefined;
            if(!var19) { _fun0001_ip = 848; continue _fun0001 }
 822:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var21 = 30;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var20 = var21.renderHeader;
 848:
            var13['header'] = var20;
            if(var19) { _fun0001_ip = 883; continue _fun0001 }
 855:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 30;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.renderGenericTitle;
            _fun0001_ip = 890; continue _fun0001;
 883:
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
 890:
            var13['headerTitle'] = var19;
            var19 = 'center';
            var13['headerTitleAlign'] = var19;
            var25 = var13;
            var24 = var18;
            var18 = copyDataProperties(var25, var24);
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.navigation;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 28;
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
                    var2 = _closure2_slot7;
                    var2 = var2.bind(var4)(var5);
                    var1['headerLeft'] = var2;
                    var2 = _closure2_slot3;
                    var2 = !var2;
                    if(!var2) { _fun0004_ip = 104; continue _fun0004 }
 102:
                    var2 = undefined;
 104:
                    var1['headerBackVisible'] = var2;
                    var2 = {};
                    var3 = _closure2_slot6;
                    var2['backgroundColor'] = var3;
                    var1['contentStyle'] = var2;
                    return var1;
                }
            };
            var11['options'] = var16;
            var16 = {};
            var17 = function transitionEnd(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.data;
                    var1 = var1.closing;
                    if(!var1) { _fun0005_ip = 30; continue _fun0005 }
 17:
                    var3 = _closure1_slot8;
                    var2 = undefined;
                    var1 = var3.bind(var2)();
 30:
                    if(!var1) { _fun0005_ip = 54; continue _fun0005 }
 33:
                    var3 = _closure1_slot10;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var2 = '';
                    var1 = var2 === var3;
 54:
                    if(!var1) { _fun0005_ip = 73; continue _fun0005 }
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
                var1 = 33;
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var6 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var4 = undefined;
                    if(var2) { _fun0006_ip = 29; continue _fun0006 }
 26:
                    var4 = var6;
 29:
                    var _closure3_slot0 = var4;
                    var6 = undefined;
                    if(var2) { _fun0006_ip = 63; continue _fun0006 }
 38:
                    var8 = var3().value;
                    var3 = var1;
                    var3 = var3 === var5;
                    var6 = undefined;
                    var2 = var3;
                    if(var3) { _fun0006_ip = 63; continue _fun0006 }
 57:
                    var6 = var8;
                    var2 = var3;
 63:
                    var _closure3_slot1 = var6;
                    if(var2) { _fun0006_ip = 73; continue _fun0006 }
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
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                            var4 = _closure2_slot7;
                            var4 = var4.bind(var3)(var6);
                            var1['headerLeft'] = var4;
                            var4 = _closure2_slot3;
                            var4 = !var4;
                            if(!var4) { _fun0007_ip = 87; continue _fun0007 }
 85:
                            var4 = undefined;
 87:
                            var1['headerBackVisible'] = var4;
                            var4 = {};
                            var5 = _closure2_slot6;
                            var4['backgroundColor'] = var5;
                            var1['contentStyle'] = var4;
                            var4 = false;
                            var1['headerBackTitleVisible'] = var4;
                            var2 = _closure3_slot1;
                            var4 = var2.navigationOptions;
                            var2 = null;
                            var5 = var2 == var4;
                            var3 = undefined;
                            if(var5) { _fun0007_ip = 143; continue _fun0007 }
 137:
                            var3 = var4.headerShadowVisible;
 143:
                            var2 = var2 == var3;
                            if(var2) { _fun0007_ip = 153; continue _fun0007 }
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
                        var3 = 34;
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
                    var10 = _closure2_slot0;
                    var9 = var6.route;
                    var6 = undefined;
                    if(!(var10 === var9)) { _fun0006_ip = 148; continue _fun0006 }
 144:
                    var6 = _closure2_slot1;
 148:
                    var1['initialParams'] = var6;
                    var6 = {};
                    var7 = function transitionEnd(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.data;
                            var1 = var1.closing;
                            if(!var1) { _fun0008_ip = 36; continue _fun0008 }
 17:
                            var3 = _closure1_slot9;
                            var2 = undefined;
                            var3 = var3.bind(var2)();
                            var2 = null;
                            var1 = var2 != var3;
 36:
                            if(!var1) { _fun0008_ip = 52; continue _fun0008 }
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
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/SettingsNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();