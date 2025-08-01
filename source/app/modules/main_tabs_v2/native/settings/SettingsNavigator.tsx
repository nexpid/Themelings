// app/modules/main_tabs_v2/native/settings/SettingsNavigator.tsx
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.clearSelectedSearchResult;
    var _closure1_slot6 = var8;
    var8 = var4.getIsSettingSearchActive;
    var _closure1_slot7 = var8;
    var8 = var4.getSelectedSearchResult;
    var _closure1_slot8 = var8;
    var8 = var4.getSettingSearchQuery;
    var _closure1_slot9 = var8;
    var4 = var4.setIsSettingSearchActive;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticsPages;
    var _closure1_slot11 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.createNativeStackNavigator;
    var4 = var4.bind(var8)();
    var _closure1_slot15 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var11 = 8;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var11;
    var4['statusBarSpacer'] = var10;
    var10 = {};
    var11 = 24;
    var10['marginRight'] = var11;
    var4['headerLeftSpacer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot16;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useRoute;
            var2 = var1.bind(var2)();
            var3 = var2.params;
            var1 = null;
            var5 = var1 == var3;
            var13 = undefined;
            if(var5) { _fun0001_ip = 68; continue _fun0001 }
 62:
            var13 = var3.screen;
 68:
            if(!(var1 == var13)) { _fun0001_ip = 82; continue _fun0001 }
 72:
            var3 = _closure1_slot12;
            var13 = var3.OVERVIEW;
 82:
            var _closure2_slot0 = var13;
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
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 10;
            var2 = var20[var2];
            var5 = var19.bind(var4)(var2);
            var3 = var5.useCommonTriggerPoint;
            var2 = 11;
            var2 = var20[var2];
            var2 = var19.bind(var4)(var2);
            var2 = var2.OpenUserSettingsTriggerPoint;
            var2 = var3.bind(var5)(var2);
            var8 = _closure1_slot4;
            var5 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackPaneViewed;
                var2 = {};
                var5 = _closure2_slot0;
                var2['destinationPane'] = var5;
                var5 = {};
                var6 = _closure1_slot11;
                var6 = var6.USER_SETTINGS;
                var5['page'] = var6;
                var2['source'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var5.bind(var8)(var2, var3);
            var3 = var8.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
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
            var1 = var3.bind(var8)(var1, var2);
            var1 = 13;
            var1 = var20[var1];
            var5 = var19.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var1 = var1.locale;
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            var3 = var8.useState;
            var2 = false;
            var5 = var3.bind(var8)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot3 = var2;
            var3 = var8.useLayoutEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var8)(var1, var2);
            var6 = _closure1_slot1;
            var1 = 14;
            var2 = var20[var1];
            var3 = var6.bind(var4)(var2);
            var2 = 15;
            var2 = var20[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.USER_SETTINGS;
            var2 = var3.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var7 = var8.useMemo;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getSettingScreens;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var14 = var7.bind(var8)(var3, var2);
            var7 = var8.useLayoutEffect;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var8)(var3, var2);
            var2 = 18;
            var2 = var20[var2];
            var3 = var19.bind(var4)(var2);
            var2 = var3.useGlobalStatusIndicatorState;
            var10 = var2.bind(var3)();
            var7 = var8.useEffect;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.validate;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var8)(var3, var2);
            var2 = 20;
            var2 = var20[var2];
            var3 = var19.bind(var4)(var2);
            var2 = var3.useAccessibilityNativeStackOptions;
            var17 = var2.bind(var3)();
            var2 = 21;
            var2 = var20[var2];
            var7 = var19.bind(var4)(var2);
            var3 = var7.useToken;
            var2 = 8;
            var2 = var20[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.BG_BASE_SECONDARY;
            var2 = var3.bind(var7)(var2);
            var _closure2_slot4 = var2;
            var3 = _closure1_slot14;
            var1 = var20[var1];
            var1 = var19.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var8 = _closure1_slot13;
            var5 = 22;
            var5 = var20[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 23;
            var6 = var20[var6];
            var6 = var19.bind(var4)(var6);
            var7 = var6.SafeAreaPaddingView;
            var6 = {};
            var10 = var10.isVisible;
            var6['top'] = var10;
            var9 = var9.statusBarSpacer;
            var6['style'] = var9;
            var11 = _closure1_slot15;
            var10 = var11.Navigator;
            var9 = {};
            var16 = 'settings-navigator';
            var9['id'] = var16;
            var16 = {'fullScreenGestureEnabled': true, 'headerTitle': null, 'headerTitleAlign': 'center'};
            var18 = 24;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.renderGenericTitle;
            var16['headerTitle'] = var18;
            var22 = var16;
            var21 = var17;
            var17 = copyDataProperties(var22, var21);
            var9['screenOptions'] = var16;
            var9['initialRouteName'] = var13;
            var13 = var11.Screen;
            var11 = {};
            var15 = _closure1_slot12;
            var15 = var15.OVERVIEW;
            var11['name'] = var15;
            var15 = function options(arg1) {
                var1 = arg1;
                var4 = var1.navigation;
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 25;
                var7 = var6[var2];
                var3 = undefined;
                var7 = var5.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.3D5yo6;
                var2 = var7.bind(var8)(var2);
                var1['title'] = var2;
                var2 = 24;
                var2 = var6[var2];
                var3 = var5.bind(var3)(var2);
                var2 = var3.getRenderModalBackImage;
                var2 = var2.bind(var3)(var4);
                var1['headerLeft'] = var2;
                var2 = {};
                var3 = _closure2_slot4;
                var2['backgroundColor'] = var3;
                var1['contentStyle'] = var2;
                return var1;
            };
            var11['options'] = var15;
            var15 = {};
            var16 = function transitionEnd(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.data;
                    var1 = var1.closing;
                    if(!var1) { _fun0003_ip = 30; continue _fun0003 }
 17:
                    var3 = _closure1_slot7;
                    var2 = undefined;
                    var1 = var3.bind(var2)();
 30:
                    if(!var1) { _fun0003_ip = 54; continue _fun0003 }
 33:
                    var3 = _closure1_slot9;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var2 = '';
                    var1 = var2 === var3;
 54:
                    if(!var1) { _fun0003_ip = 73; continue _fun0003 }
 57:
                    var3 = _closure1_slot10;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var15['transitionEnd'] = var16;
            var11['listeners'] = var15;
            var15 = function getComponent() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                return var1;
            };
            var11['getComponent'] = var15;
            var13 = var8.bind(var4)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var13 = var14.map;
            var12 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var6 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var4 = undefined;
                    if(var2) { _fun0004_ip = 29; continue _fun0004 }
 26:
                    var4 = var6;
 29:
                    var _closure3_slot0 = var4;
                    var6 = undefined;
                    if(var2) { _fun0004_ip = 63; continue _fun0004 }
 38:
                    var8 = var3().value;
                    var3 = var1;
                    var3 = var3 === var5;
                    var6 = undefined;
                    var2 = var3;
                    if(var3) { _fun0004_ip = 63; continue _fun0004 }
 57:
                    var6 = var8;
                    var2 = var3;
 63:
                    var _closure3_slot1 = var6;
                    if(var2) { _fun0004_ip = 73; continue _fun0004 }
 70:
                    var1.return();
 73:
                    var3 = _closure1_slot13;
                    var1 = _closure1_slot15;
                    var2 = var1.Screen;
                    var1 = {};
                    var8 = var6.route;
                    var1['name'] = var8;
                    var8 = function options(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = arg1;
                            var6 = var1.navigation;
                            var1 = {};
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 16;
                            var2 = var7[var2];
                            var3 = undefined;
                            var9 = var5.bind(var3)(var2);
                            var8 = var9.getSettingTitle;
                            var4 = _closure3_slot0;
                            var4 = var8.bind(var9)(var4);
                            var1['title'] = var4;
                            var4 = 24;
                            var4 = var7[var4];
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.getRenderModalBackImage;
                            var4 = var4.bind(var5)(var6);
                            var1['headerLeft'] = var4;
                            var4 = {};
                            var5 = _closure2_slot4;
                            var4['backgroundColor'] = var5;
                            var1['contentStyle'] = var4;
                            var4 = false;
                            var1['headerBackTitleVisible'] = var4;
                            var2 = _closure3_slot1;
                            var4 = var2.navigationOptions;
                            var2 = null;
                            var5 = var2 == var4;
                            if(var5) { _fun0005_ip = 138; continue _fun0005 }
 132:
                            var3 = var4.headerShadowVisible;
 138:
                            var2 = var2 == var3;
                            if(var2) { _fun0005_ip = 148; continue _fun0005 }
 145:
                            var2 = var3;
 148:
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
                        var3 = 27;
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
                    if(!(var10 === var9)) { _fun0004_ip = 148; continue _fun0004 }
 144:
                    var6 = _closure2_slot1;
 148:
                    var1['initialParams'] = var6;
                    var6 = {};
                    var7 = function transitionEnd(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.data;
                            var1 = var1.closing;
                            if(!var1) { _fun0006_ip = 36; continue _fun0006 }
 17:
                            var3 = _closure1_slot8;
                            var2 = undefined;
                            var3 = var3.bind(var2)();
                            var2 = null;
                            var1 = var2 != var3;
 36:
                            if(!var1) { _fun0006_ip = 52; continue _fun0006 }
 39:
                            var2 = _closure1_slot6;
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
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/SettingsNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();