// app/modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var9;
    var5 = function goBack() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getRootNavigationRef;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 81; continue _fun0001 }
 41:
            var2 = var3.canGoBack;
            var2 = var2.bind(var3)();
            if(var2) { _fun0001_ip = 71; continue _fun0001 }
 54:
            var4 = var3.navigate;
            var2 = 'guilds';
            var2 = var4.bind(var3)(var2);
            _fun0001_ip = 81; continue _fun0001;
 71:
            var2 = var3.goBack;
            var2 = var2.bind(var3)();
 81:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var6 = function Notifications(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var14 = var2.style;
            var15 = var2.nestedInLaunchPad;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0002_ip = 24; continue _fun0002 }
 22:
            var15 = false;
 24:
            var18 = var2.inNestedNavigator;
            if(!(var18 === var4)) { _fun0002_ip = 36; continue _fun0002 }
 34:
            var18 = false;
 36:
            var2 = _closure1_slot9;
            var11 = var2.bind(var4)();
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 21;
            var2 = var16[var5];
            var3 = var6.bind(var4)(var2);
            var2 = 22;
            var2 = var16[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.NOTIFICATIONS;
            var2 = var3.bind(var4)(var2);
            var8 = var2.analyticsLocations;
            var7 = _closure1_slot3;
            var6 = var7.useLayoutEffect;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
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
                var2 = _closure1_slot11;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = true;
                return var1;
            };
            var1 = new Array(0);
            var3 = var3.bind(var6)(var2, var1);
            var13 = _closure1_slot0;
            var1 = 24;
            var1 = var16[var1];
            var2 = var13.bind(var4)(var1);
            var1 = var2.useNavigatorBackPressHandler;
            var1 = var1.bind(var2)(var3);
            var3 = _closure1_slot7;
            var1 = 25;
            var1 = var16[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var6 = 1;
            var1['zIndex'] = var6;
            var7 = _closure1_slot7;
            var5 = var16[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.AnalyticsLocationProvider;
            var5 = {};
            var5['value'] = var8;
            var10 = _closure1_slot8;
            var9 = _closure1_slot4;
            var8 = {};
            var17 = var11.container;
            var11 = new Array(2);
            var11[0] = var17;
            var11[1] = var14;
            var8['style'] = var11;
            var17 = _closure1_slot7;
            var14 = _closure1_slot10;
            var11 = {};
            var11['nestedInLaunchPad'] = var15;
            var11['inNestedNavigator'] = var18;
            var14 = var17.bind(var4)(var14, var11);
            var11 = new Array(2);
            var11[0] = var14;
            var14 = _closure1_slot7;
            var12 = 26;
            var12 = var16[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.NotificationCenterForYou;
            var12 = {};
            var12['nestedInLaunchPad'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var6;
    var4 = function ThemedNotifications(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var12 = arg1;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 27;
            var2 = var11[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var10 = var2.bind(var4)();
            var2 = 28;
            var2 = var11[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var7 = var2.top;
            var _closure2_slot0 = var7;
            var2 = 8;
            var2 = var11[var2];
            var2 = var6.bind(var4)(var2);
            var8 = var2.bind(var4)();
            var _closure2_slot1 = var8;
            var2 = _closure1_slot9;
            var13 = var2.bind(var4)();
            var _closure2_slot2 = var13;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var13;
            var2[1] = var8;
            var2[2] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    if(var1) { _fun0004_ip = 22; continue _fun0004 }
 14:
                    var1 = var2.containerOuter;
                    _fun0004_ip = 54; continue _fun0004;
 22:
                    var3 = var2.containerOuterTablet;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var4 = _closure2_slot0;
                    var3['paddingTop'] = var4;
                    var2[1] = var3;
                    var1 = var2;
 54:
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var7 = _closure1_slot0;
            var1 = 29;
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
            var8 = _closure1_slot7;
            var5 = 30;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var13 = true;
            var5['absolute'] = var13;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var6 = 31;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ThemeContextProvider;
            var6 = {};
            var6['gradient'] = var10;
            var11 = _closure1_slot7;
            var10 = _closure1_slot12;
            var9 = {};
            var17 = var9;
            var16 = var12;
            var13 = copyDataProperties(var17, var16);
            var12 = var12.route;
            var14 = null;
            var15 = var14 == var12;
            var13 = undefined;
            if(var15) { _fun0003_ip = 306; continue _fun0003 }
 285:
            var12 = var12.params;
            var14 = var14 == var12;
            var13 = undefined;
            if(var14) { _fun0003_ip = 306; continue _fun0003 }
 300:
            var13 = var12.inNestedNavigator;
 306:
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
    var _closure1_slot13 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var10 = var9[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var11 = var7.bind(var1)(var10);
    var _closure1_slot3 = var11;
    var16 = 1;
    var7 = var9[var16];
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
    var12 = var8.bind(var1)(var7);
    var10 = var12.createStyles;
    var7 = {};
    var13 = {};
    var13['flex'] = var16;
    var7['containerOuter'] = var13;
    var13 = {};
    var14 = 6;
    var17 = var9[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BG_BASE_TERTIARY;
    var13['backgroundColor'] = var17;
    var17 = var9[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_8;
    var13['paddingHorizontal'] = var17;
    var13['flex'] = var16;
    var7['containerOuterTablet'] = var13;
    var13 = {};
    var17 = var9[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BG_BASE_PRIMARY;
    var13['backgroundColor'] = var17;
    var13['flexGrow'] = var16;
    var7['container'] = var13;
    var13 = {'zIndex': 100, 'width': '100%', 'marginBottom': 12};
    var7['header'] = var13;
    var16 = 'center';
    var13 = {'height': 56, 'marginHorizontal': 16, 'flexDirection': 'row', 'alignItems': 'center'};
    var7['headerTitle'] = var13;
    var13 = {'flexDirection': 'row', 'gap': 12};
    var7['actionButtons'] = var13;
    var13 = {};
    var17 = var9[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var13['marginRight'] = var17;
    var17 = var9[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_32;
    var13['height'] = var17;
    var17 = var9[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_32;
    var13['width'] = var17;
    var13['alignItems'] = var16;
    var13['justifyContent'] = var16;
    var16 = var9[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var13['borderRadius'] = var16;
    var7['headerClose'] = var13;
    var13 = {'flex': 1, 'marginTop': 2};
    var7['headerText'] = var13;
    var13 = {'left': 0, 'bottom': 0, 'height': 1, 'width': '100%', 'position': 'absolute'};
    var14 = var9[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MODIFIER_ACCENT;
    var13['backgroundColor'] = var14;
    var7['headerBorder'] = var13;
    var7 = var10.bind(var12)(var7);
    var _closure1_slot9 = var7;
    var10 = var11.memo;
    var7 = function HeaderInner(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var11 = var2.nestedInLaunchPad;
            var20 = var2.inNestedNavigator;
            var2 = _closure1_slot9;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var14 = var2.bind(var4)();
            var2 = 9;
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
            var2 = 10;
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
            var1 = 11;
            var1 = var10[var1];
            var3 = var7.bind(var4)(var1);
            var2 = var3.useYouBarBackButtonBadgeEnabled;
            var1 = 'Notifications';
            var21 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = _closure1_slot7;
            var5 = 12;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.SafeAreaPaddingView;
            var5 = {};
            var10 = !var11;
            if(!var10) { _fun0005_ip = 235; continue _fun0005 }
 232:
            var10 = !var14;
 235:
            var5['top'] = var10;
            var10 = null;
            if(var11) { _fun0005_ip = 822; continue _fun0005 }
 247:
            var13 = _closure1_slot8;
            var12 = _closure1_slot4;
            var11 = {};
            var15 = var9.headerTitle;
            var11['style'] = var15;
            if(var14) { _fun0005_ip = 278; continue _fun0005 }
 270:
            var15 = null;
            if(!var20) { _fun0005_ip = 564; continue _fun0005 }
 278:
            var17 = _closure1_slot7;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var14 = 13;
            var14 = var28[var14];
            var14 = var27.bind(var4)(var14);
            var16 = var14.PressableOpacity;
            var14 = {};
            var24 = var9.headerClose;
            var14['style'] = var24;
            var24 = 14;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.13/7kZ;
            var24 = var25.bind(var26)(var24);
            var14['accessibilityLabel'] = var24;
            var24 = _closure1_slot11;
            var14['onPress'] = var24;
            var26 = _closure1_slot7;
            if(var20) { _fun0005_ip = 453; continue _fun0005 }
 386:
            var24 = _closure1_slot0;
            var28 = _closure1_slot2;
            var20 = 17;
            var20 = var28[var20];
            var20 = var24.bind(var4)(var20);
            var24 = var20.XSmallIcon;
            var20 = {};
            var27 = _closure1_slot1;
            var25 = 6;
            var25 = var28[var25];
            var25 = var27.bind(var4)(var25);
            var25 = var25.colors;
            var25 = var25.INTERACTIVE_NORMAL;
            var20['color'] = var25;
            var20 = var26.bind(var4)(var24, var20);
            _fun0005_ip = 554; continue _fun0005;
 453:
            if(var21) { _fun0005_ip = 523; continue _fun0005 }
 456:
            var24 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 16;
            var21 = var28[var21];
            var21 = var24.bind(var4)(var21);
            var24 = var21.ArrowLargeLeftIcon;
            var21 = {};
            var27 = _closure1_slot1;
            var25 = 6;
            var25 = var28[var25];
            var25 = var27.bind(var4)(var25);
            var25 = var25.colors;
            var25 = var25.INTERACTIVE_NORMAL;
            var21['color'] = var25;
            var21 = var26.bind(var4)(var24, var21);
            _fun0005_ip = 551; continue _fun0005;
 523:
            var25 = _closure1_slot1;
            var27 = _closure1_slot2;
            var24 = 15;
            var24 = var27[var24];
            var25 = var25.bind(var4)(var24);
            var24 = {};
            var21 = var26.bind(var4)(var25, var24);
 551:
            var20 = var21;
 554:
            var14['children'] = var20;
            var15 = var17.bind(var4)(var16, var14);
 564:
            var14 = new Array(3);
            var14[0] = var15;
            var17 = _closure1_slot7;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var15 = 18;
            var15 = var26[var15];
            var15 = var25.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'color': 'header-primary', 'variant': 'heading-lg/bold', 'style': null, 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
            var20 = var9.headerText;
            var15['style'] = var20;
            var20 = 14;
            var21 = var26[var20];
            var21 = var25.bind(var4)(var21);
            var24 = var21.intl;
            var21 = var24.string;
            var20 = var26[var20];
            var20 = var25.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.HcoRu7;
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
            if(!var18) { _fun0005_ip = 754; continue _fun0005 }
 713:
            var21 = _closure1_slot7;
            var20 = _closure1_slot1;
            var24 = _closure1_slot2;
            var18 = 19;
            var18 = var24[var18];
            var20 = var20.bind(var4)(var18);
            var18 = {};
            var18['ref'] = var23;
            var18['onOpen'] = var22;
            var19 = var21.bind(var4)(var20, var18);
 754:
            var18 = new Array(2);
            var18[0] = var19;
            var21 = _closure1_slot7;
            var20 = _closure1_slot1;
            var22 = _closure1_slot2;
            var19 = 20;
            var19 = var22[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var19 = var21.bind(var4)(var20, var19);
            var18[1] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[2] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 822:
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
    var7 = var10.bind(var11)(var7);
    var _closure1_slot10 = var7;
    var7 = 32;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['goBack'] = var5;
    var3['ThemedNotifications'] = var4;
    var2 = function ThemedNotificationsModal() {
        var4 = _closure1_slot7;
        var3 = _closure1_slot13;
        var2 = {};
        var1 = true;
        var2['inNestedNavigator'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['ThemedNotificationsModal'] = var2;
    return var1;
})();