// app/modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var9;
    var5 = function goBack() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getRootNavigationRef;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.canGoBack;
            var2 = var2.bind(var3)();
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3.navigate;
            var2 = 'guilds';
            var2 = var4.bind(var3)(var2);
            _fun0001_ip = 2; continue _fun0001;
case 4:
            var2 = var3.goBack;
            var2 = var2.bind(var3)();
case 2:
            return var1;
        }
    };
    var _closure1_slot16 = var5;
    var6 = function Notifications(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var13 = var2.style;
            var16 = var2.nestedInLaunchPad;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var16 = false;
case 6:
            var18 = var2.inNestedNavigator;
            if(!(var18 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var18 = false;
case 8:
            var2 = _closure1_slot9;
            var11 = var2.bind(var4)();
            var6 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 22;
            var2 = var17[var5];
            var3 = var6.bind(var4)(var2);
            var2 = 23;
            var2 = var17[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.NOTIFICATIONS;
            var2 = var3.bind(var4)(var2);
            var8 = var2.analyticsLocations;
            var7 = _closure1_slot3;
            var6 = var7.useLayoutEffect;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var6.bind(var7)(var3, var2);
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var2 = function() {
                var2 = _closure1_slot16;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = true;
                return var1;
            };
            var1 = new Array(0);
            var3 = var3.bind(var6)(var2, var1);
            var14 = _closure1_slot0;
            var1 = 25;
            var1 = var17[var1];
            var2 = var14.bind(var4)(var1);
            var1 = var2.useNavigatorBackPressHandler;
            var1 = var1.bind(var2)(var3);
            var3 = _closure1_slot7;
            var1 = 26;
            var1 = var17[var1];
            var1 = var14.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var6 = 1;
            var1['zIndex'] = var6;
            var7 = _closure1_slot7;
            var5 = var17[var5];
            var5 = var14.bind(var4)(var5);
            var6 = var5.AnalyticsLocationProvider;
            var5 = {};
            var5['value'] = var8;
            var10 = _closure1_slot8;
            var9 = _closure1_slot4;
            var8 = {};
            var15 = var11.container;
            var11 = new Array(2);
            var11[0] = var15;
            var11[1] = var13;
            var8['style'] = var11;
            var15 = _closure1_slot7;
            var13 = _closure1_slot12;
            var11 = {};
            var11['nestedInLaunchPad'] = var16;
            var11['inNestedNavigator'] = var18;
            var13 = var15.bind(var4)(var13, var11);
            var11 = new Array(3);
            var11[0] = var13;
            var15 = _closure1_slot7;
            var13 = 27;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.NotificationCenterForYou;
            var13 = {};
            var13['nestedInLaunchPad'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var11[1] = var13;
            var12 = _closure1_slot13;
            var11[2] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var6;
    var4 = function ThemedNotifications(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var12 = arg1;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 29;
            var2 = var11[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var10 = var2.bind(var4)();
            var2 = 30;
            var2 = var11[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var6 = var2.top;
            var _closure2_slot0 = var6;
            var2 = 10;
            var2 = var11[var2];
            var2 = var3.bind(var4)(var2);
            var7 = var2.bind(var4)();
            var _closure2_slot1 = var7;
            var2 = _closure1_slot9;
            var8 = var2.bind(var4)();
            var _closure2_slot2 = var8;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    if(var1) { _fun0004_ip = 7; continue _fun0004 }
case 10:
                    var1 = var2.containerOuter;
                    _fun0004_ip = 5; continue _fun0004;
case 7:
                    var3 = var2.containerOuterTablet;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var4 = _closure2_slot0;
                    var3['paddingTop'] = var4;
                    var2[1] = var3;
                    var1 = var2;
case 5:
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var7 = _closure1_slot0;
            var1 = 31;
            var1 = var11[var1];
            var3 = var7.bind(var4)(var1);
            var2 = var3.useTrackTabPerformance;
            var1 = _closure1_slot5;
            var1 = var1.NOTIFICATIONS;
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var5;
            var6 = _closure1_slot14;
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var6 = 32;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ThemeContextProvider;
            var6 = {};
            var6['gradient'] = var10;
            var11 = _closure1_slot7;
            var10 = _closure1_slot17;
            var9 = {};
            var17 = var9;
            var16 = var12;
            var13 = copyDataProperties(var17, var16);
            var12 = var12.route;
            var14 = null;
            var15 = var14 == var12;
            var13 = undefined;
            if(var15) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var12 = var12.params;
            var14 = var14 == var12;
            var13 = undefined;
            if(var14) { _fun0003_ip = 11; continue _fun0003 }
case 13:
            var13 = var12.inNestedNavigator;
case 11:
            var12 = 'inNestedNavigator';
            var9[var12] = var13;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var1 = global;
    var13 = var1.Object;
    var10 = var13.defineProperty;
    var7 = {};
    var11 = true;
    var7['value'] = var11;
    var1 = '__esModule';
    var1 = var10.bind(var13)(var3, var1, var7);
    var1 = 0;
    var10 = var9[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var14 = var7.bind(var1)(var10);
    var _closure1_slot3 = var14;
    var18 = 1;
    var7 = var9[var18];
    var7 = var8.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.MainTabsNavigatorScreens;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ContentDismissActionType;
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.jsx;
    var _closure1_slot7 = var10;
    var7 = var7.jsxs;
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var9[var7];
    var15 = var8.bind(var1)(var7);
    var13 = var15.createStyles;
    var7 = {};
    var16 = {};
    var16['flex'] = var18;
    var7['containerOuter'] = var16;
    var16 = {};
    var17 = 6;
    var19 = var9[var17];
    var19 = var12.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_BASE_LOWEST;
    var16['backgroundColor'] = var19;
    var19 = var9[var17];
    var19 = var12.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_8;
    var16['paddingHorizontal'] = var19;
    var16['flex'] = var18;
    var7['containerOuterTablet'] = var16;
    var16 = {};
    var19 = var9[var17];
    var19 = var12.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_BASE_LOW;
    var16['backgroundColor'] = var19;
    var16['flexGrow'] = var18;
    var7['container'] = var16;
    var18 = 'center';
    var16 = {'height': 56, 'marginHorizontal': 16, 'flexDirection': 'row', 'alignItems': 'center'};
    var7['headerTitle'] = var16;
    var16 = {'flexDirection': 'row', 'gap': 12};
    var7['actionButtons'] = var16;
    var16 = {};
    var19 = var9[var17];
    var19 = var12.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_16;
    var16['marginRight'] = var19;
    var19 = var9[var17];
    var19 = var12.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_32;
    var16['height'] = var19;
    var19 = var9[var17];
    var19 = var12.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_32;
    var16['width'] = var19;
    var16['alignItems'] = var18;
    var16['justifyContent'] = var18;
    var18 = var9[var17];
    var18 = var12.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.lg;
    var16['borderRadius'] = var18;
    var7['headerClose'] = var16;
    var16 = {'flex': 1, 'marginTop': 2};
    var7['headerText'] = var16;
    var16 = {'left': 0, 'bottom': 0, 'height': 1, 'width': '100%', 'position': 'absolute'};
    var17 = var9[var17];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_SUBTLE;
    var16['backgroundColor'] = var17;
    var7['headerBorder'] = var16;
    var7 = var13.bind(var15)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var9[var7];
    var13 = var12.bind(var1)(var7);
    var7 = {};
    var7 = var10.bind(var1)(var13, var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var9[var7];
    var13 = var12.bind(var1)(var7);
    var7 = {};
    var7 = var10.bind(var1)(var13, var7);
    var _closure1_slot11 = var7;
    var13 = var14.memo;
    var7 = function HeaderInner(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var11 = var2.nestedInLaunchPad;
            var20 = var2.inNestedNavigator;
            var2 = _closure1_slot9;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 10;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var14 = var2.bind(var4)();
            var2 = 11;
            var2 = var10[var2];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useExperiment;
            var2 = {};
            var8 = 'NativeNotifications';
            var2['location'] = var8;
            var2 = var5.bind(var7)(var2);
            var18 = var2.enabled;
            var5 = _closure1_slot3;
            var2 = var5.useRef;
            var19 = null;
            var23 = var2.bind(var5)(var19);
            var2 = 12;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var7 = var2.bind(var4)(var23);
            var _closure2_slot0 = var7;
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure2_slot0;
                var1 = _closure1_slot6;
                var2 = var1.TAKE_ACTION;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var22 = var3.bind(var5)(var1, var2);
            var7 = _closure1_slot0;
            var1 = 13;
            var1 = var10[var1];
            var3 = var7.bind(var4)(var1);
            var2 = var3.useYouBarEnabled;
            var1 = 'Notifications';
            var21 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = _closure1_slot7;
            var5 = 14;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.SafeAreaPaddingView;
            var5 = {};
            var10 = !var11;
            if(!var10) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            var10 = !var14;
case 14:
            var5['top'] = var10;
            var10 = null;
            if(var11) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var13 = _closure1_slot8;
            var12 = _closure1_slot4;
            var11 = {};
            var15 = var9.headerTitle;
            var11['style'] = var15;
            if(var14) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var15 = null;
            if(!var20) { _fun0005_ip = 20; continue _fun0005 }
case 18:
            var17 = _closure1_slot7;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var14 = 15;
            var14 = var28[var14];
            var14 = var27.bind(var4)(var14);
            var16 = var14.PressableOpacity;
            var14 = {};
            var24 = var9.headerClose;
            var14['style'] = var24;
            var24 = 16;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.13/7kX;
            var24 = var25.bind(var26)(var24);
            var14['accessibilityLabel'] = var24;
            var24 = _closure1_slot16;
            var14['onPress'] = var24;
            if(var20) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var25 = _closure1_slot7;
            var24 = _closure1_slot0;
            var28 = _closure1_slot2;
            var20 = 18;
            var20 = var28[var20];
            var20 = var24.bind(var4)(var20);
            var24 = var20.XSmallIcon;
            var20 = {};
            var27 = _closure1_slot1;
            var26 = 6;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.colors;
            var26 = var26.INTERACTIVE_TEXT_DEFAULT;
            var20['color'] = var26;
            var20 = var25.bind(var4)(var24, var20);
            _fun0005_ip = 23; continue _fun0005;
case 21:
            if(var21) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var25 = _closure1_slot7;
            var24 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 17;
            var21 = var28[var21];
            var21 = var24.bind(var4)(var21);
            var24 = var21.ArrowLargeLeftIcon;
            var21 = {};
            var27 = _closure1_slot1;
            var26 = 6;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.colors;
            var26 = var26.INTERACTIVE_TEXT_DEFAULT;
            var21['color'] = var26;
            var21 = var25.bind(var4)(var24, var21);
            _fun0005_ip = 26; continue _fun0005;
case 24:
            var21 = _closure1_slot10;
case 26:
            var20 = var21;
case 23:
            var14['children'] = var20;
            var15 = var17.bind(var4)(var16, var14);
case 20:
            var14 = new Array(3);
            var14[0] = var15;
            var17 = _closure1_slot7;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var15 = 19;
            var15 = var26[var15];
            var15 = var25.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'color': 'mobile-text-heading-primary', 'variant': 'heading-lg/bold', 'style': null, 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
            var20 = var9.headerText;
            var15['style'] = var20;
            var20 = 16;
            var21 = var26[var20];
            var21 = var25.bind(var4)(var21);
            var24 = var21.intl;
            var21 = var24.string;
            var20 = var26[var20];
            var20 = var25.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.HcoRu0;
            var20 = var21.bind(var24)(var20);
            var15['children'] = var20;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var17 = _closure1_slot8;
            var16 = _closure1_slot4;
            var15 = {};
            var20 = var9.actionButtons;
            var15['style'] = var20;
            var19 = null;
            if(!var18) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var21 = _closure1_slot7;
            var20 = _closure1_slot1;
            var24 = _closure1_slot2;
            var18 = 20;
            var18 = var24[var18];
            var20 = var20.bind(var4)(var18);
            var18 = {};
            var18['ref'] = var23;
            var18['onOpen'] = var22;
            var19 = var21.bind(var4)(var20, var18);
case 27:
            var18 = new Array(2);
            var18[0] = var19;
            var19 = _closure1_slot11;
            var18[1] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[2] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 16:
            var5['children'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = var9.headerBorder;
            var9 = new Array(1);
            var9[0] = var10;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = var13.bind(var14)(var7);
    var _closure1_slot12 = var7;
    var7 = 21;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var13 = var7.TTIFirstContentfulPaint;
    var7 = {};
    var14 = 'notifications';
    var7['label'] = var14;
    var7 = var10.bind(var1)(var13, var7);
    var _closure1_slot13 = var7;
    var7 = 28;
    var7 = var9[var7];
    var12 = var12.bind(var1)(var7);
    var7 = {};
    var7['absolute'] = var11;
    var7 = var10.bind(var1)(var12, var7);
    var _closure1_slot14 = var7;
    var7 = {};
    var7['inNestedNavigator'] = var11;
    var7 = var10.bind(var1)(var4, var7);
    var _closure1_slot15 = var7;
    var7 = 33;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['goBack'] = var5;
    var3['ThemedNotifications'] = var4;
    var2 = function ThemedNotificationsModal() {
        var1 = _closure1_slot15;
        return var1;
    };
    var3['ThemedNotificationsModal'] = var2;
    return var1;
})();