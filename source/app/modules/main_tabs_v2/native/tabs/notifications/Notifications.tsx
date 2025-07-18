// app/modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var17 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var9;
    var5 = function goBack() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getRootNavigationRef;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 51; continue _fun0001 }
 41:
            var2 = var3.goBack;
            var2 = var2.bind(var3)();
 51:
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var6 = function Notifications(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var14 = var2.style;
            var16 = var2.nestedInLaunchPad;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0002_ip = 24; continue _fun0002 }
 22:
            var16 = false;
 24:
            var19 = var2.inNestedNavigator;
            if(!(var19 === var4)) { _fun0002_ip = 36; continue _fun0002 }
 34:
            var19 = false;
 36:
            var _closure2_slot0 = var4;
            var2 = _closure1_slot11;
            var11 = var2.bind(var4)();
            var6 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 21;
            var2 = var17[var5];
            var3 = var6.bind(var4)(var2);
            var2 = 22;
            var2 = var17[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.NOTIFICATIONS;
            var2 = var3.bind(var4)(var2);
            var8 = var2.analyticsLocations;
            var13 = _closure1_slot0;
            var2 = 9;
            var2 = var17[var2];
            var6 = var13.bind(var4)(var2);
            var3 = var6.useSharedValue;
            var2 = 0;
            var20 = var3.bind(var6)(var2);
            _closure2_slot0 = var20;
            var7 = _closure1_slot3;
            var6 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var20;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 23;
                    var5 = var5[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = arg1;
                    var5 = var5.nativeEvent;
                    var5 = var5.contentOffset;
                    var8 = var5.y;
                    var5 = 5;
                    var8 = var8 > var5;
                    var5 = 0;
                    if(!var8) { _fun0003_ip = 76; continue _fun0003 }
 73:
                    var5 = 1;
 76:
                    var2 = _closure1_slot10;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var15 = var6.bind(var7)(var2, var3);
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
                var2 = _closure1_slot14;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = true;
                return var1;
            };
            var1 = new Array(0);
            var3 = var3.bind(var6)(var2, var1);
            var1 = 25;
            var1 = var17[var1];
            var2 = var13.bind(var4)(var1);
            var1 = var2.useNavigatorBackPressHandler;
            var1 = var1.bind(var2)(var3);
            var3 = _closure1_slot8;
            var1 = 26;
            var1 = var17[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.LayerScope;
            var1 = {};
            var6 = 1;
            var1['zIndex'] = var6;
            var7 = _closure1_slot8;
            var5 = var17[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.AnalyticsLocationProvider;
            var5 = {};
            var5['value'] = var8;
            var10 = _closure1_slot9;
            var9 = _closure1_slot4;
            var8 = {};
            var18 = var11.container;
            var11 = new Array(2);
            var11[0] = var18;
            var11[1] = var14;
            var8['style'] = var11;
            var18 = _closure1_slot8;
            var14 = _closure1_slot13;
            var11 = {};
            var11['borderOpacity'] = var20;
            var11['nestedInLaunchPad'] = var16;
            var11['inNestedNavigator'] = var19;
            var14 = var18.bind(var4)(var14, var11);
            var11 = new Array(2);
            var11[0] = var14;
            var14 = _closure1_slot8;
            var12 = 27;
            var12 = var17[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.NotificationCenterForYou;
            var12 = {};
            var12['nestedInLaunchPad'] = var16;
            var12['onScroll'] = var15;
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
    var _closure1_slot15 = var6;
    var4 = function ThemedNotifications(arg1) {
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 28;
        var2 = var11[var2];
        var4 = undefined;
        var6 = var7.bind(var4)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot5;
            var1 = var1.gradientPreset;
            return var1;
        };
        var10 = var5.bind(var6)(var3, var2);
        var6 = _closure1_slot1;
        var2 = 29;
        var2 = var11[var2];
        var2 = var6.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var8 = var2.top;
        var _closure2_slot0 = var8;
        var2 = 10;
        var2 = var11[var2];
        var2 = var6.bind(var4)(var2);
        var12 = var2.bind(var4)();
        var _closure2_slot1 = var12;
        var2 = _closure1_slot11;
        var13 = var2.bind(var4)();
        var _closure2_slot2 = var13;
        var5 = _closure1_slot3;
        var3 = var5.useMemo;
        var2 = new Array(3);
        var2[0] = var13;
        var2[1] = var12;
        var2[2] = var8;
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
        var1 = 30;
        var1 = var11[var1];
        var3 = var7.bind(var4)(var1);
        var2 = var3.useTrackTabPerformance;
        var1 = _closure1_slot6;
        var1 = var1.NOTIFICATIONS;
        var1 = var2.bind(var3)(var1);
        var3 = _closure1_slot9;
        var2 = _closure1_slot4;
        var1 = {};
        var1['style'] = var5;
        var8 = _closure1_slot8;
        var5 = 31;
        var5 = var11[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var12 = true;
        var5['absolute'] = var12;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot8;
        var6 = 32;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.ThemeContextProvider;
        var6 = {};
        var6['gradient'] = var10;
        var11 = _closure1_slot8;
        var10 = _closure1_slot15;
        var9 = {};
        var14 = arg1;
        var15 = var9;
        var12 = copyDataProperties(var15, var14);
        var9 = var11.bind(var4)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var4;
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
    var7 = native4;
    var1 = undefined;
    var11 = var7.bind(var1)(var10);
    var _closure1_slot3 = var11;
    var14 = 1;
    var7 = var9[var14];
    var7 = var8.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var17.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.MainTabsNavigatorScreens;
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ContentDismissActionType;
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.jsx;
    var _closure1_slot8 = var10;
    var7 = var7.jsxs;
    var _closure1_slot9 = var7;
    var7 = {'overshootClamping': true, 'stiffness': 20, 'damping': 15, 'mass': 0.03};
    var _closure1_slot10 = var7;
    var7 = 6;
    var7 = var9[var7];
    var12 = var8.bind(var1)(var7);
    var10 = var12.createStyles;
    var7 = {};
    var13 = {};
    var13['flex'] = var14;
    var7['containerOuter'] = var13;
    var13 = {};
    var16 = 7;
    var15 = var9[var16];
    var15 = var17.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_TERTIARY;
    var13['backgroundColor'] = var15;
    var15 = var9[var16];
    var15 = var17.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var13['paddingHorizontal'] = var15;
    var13['flex'] = var14;
    var7['containerOuterTablet'] = var13;
    var13 = {};
    var15 = var9[var16];
    var15 = var17.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_PRIMARY;
    var13['backgroundColor'] = var15;
    var13['flexGrow'] = var14;
    var7['container'] = var13;
    var14 = 12;
    var13 = {'zIndex': 100, 'width': '100%', 'marginBottom': 12};
    var7['header'] = var13;
    var15 = 16;
    var18 = 'center';
    var13 = {'height': 56, 'marginHorizontal': 16, 'flexDirection': 'row', 'alignItems': 'center'};
    var7['headerTitle'] = var13;
    var13 = {'flexDirection': 'row', 'gap': 12};
    var7['actionButtons'] = var13;
    var13 = {};
    var19 = var9[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_16;
    var13['marginRight'] = var19;
    var19 = var9[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_32;
    var13['height'] = var19;
    var19 = var9[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_32;
    var13['width'] = var19;
    var13['alignItems'] = var18;
    var13['justifyContent'] = var18;
    var18 = var9[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.lg;
    var13['borderRadius'] = var18;
    var18 = var9[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND;
    var13['backgroundColor'] = var18;
    var7['headerClose'] = var13;
    var13 = {'flex': 1, 'marginTop': 2};
    var7['headerText'] = var13;
    var13 = {'left': 0, 'bottom': 0, 'height': 1, 'width': '100%', 'position': 'absolute'};
    var16 = var9[var16];
    var16 = var17.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MODIFIER_ACCENT;
    var13['backgroundColor'] = var16;
    var7['headerBorder'] = var13;
    var13 = {};
    var13['marginHorizontal'] = var15;
    var7['tabBar'] = var13;
    var13 = {};
    var13['marginHorizontal'] = var14;
    var7['tabBarLaunchPad'] = var13;
    var13 = {};
    var14 = 8;
    var13['marginRight'] = var14;
    var7['closeButton'] = var13;
    var7 = var10.bind(var12)(var7);
    var _closure1_slot11 = var7;
    var7 = {};
    var10 = 'function NotificationsTsx1(){const{borderOpacity}=this.__closure;var _borderOpacity$get,_borderOpacity;return{opacity:(_borderOpacity$get=(_borderOpacity=borderOpacity)===null||_borderOpacity===void 0?void 0:_borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}';
    var7['code'] = var10;
    var _closure1_slot12 = var7;
    var10 = var11.memo;
    var7 = function HeaderInner(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var10 = var2.borderOpacity;
            var _closure2_slot0 = var10;
            var13 = var2.nestedInLaunchPad;
            var22 = var2.inNestedNavigator;
            var2 = _closure1_slot11;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var11 = 9;
            var2 = var12[var11];
            var5 = var7.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function f() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var2 = null;
                    var5 = var2 == var3;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 33; continue _fun0006 }
 20:
                    var5 = _closure2_slot0;
                    var4 = var5.get;
                    var3 = var4.bind(var5)();
 33:
                    var4 = var2 != var3;
                    var2 = 1;
                    if(!var4) { _fun0006_ip = 46; continue _fun0006 }
 43:
                    var2 = var3;
 46:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['borderOpacity'] = var10;
            var2['__closure'] = var8;
            var8 = 1814658099812.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot12;
            var2['__initData'] = var8;
            var10 = var3.bind(var5)(var2);
            var3 = _closure1_slot1;
            var2 = 10;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var16 = var2.bind(var4)();
            var2 = 11;
            var2 = var12[var2];
            var8 = var3.bind(var4)(var2);
            var5 = var8.useExperiment;
            var2 = {};
            var14 = 'NativeNotifications';
            var2['location'] = var14;
            var2 = var5.bind(var8)(var2);
            var20 = var2.enabled;
            var5 = _closure1_slot3;
            var2 = var5.useRef;
            var21 = null;
            var25 = var2.bind(var5)(var21);
            var2 = 12;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var8 = var2.bind(var4)(var25);
            var _closure2_slot1 = var8;
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure2_slot1;
                var1 = _closure1_slot7;
                var2 = var1.TAKE_ACTION;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var24 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = _closure1_slot8;
            var5 = 13;
            var5 = var12[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.SafeAreaPaddingView;
            var5 = {};
            var12 = !var13;
            if(!var12) { _fun0005_ip = 287; continue _fun0005 }
 284:
            var12 = !var16;
 287:
            var5['top'] = var12;
            var12 = null;
            if(var13) { _fun0005_ip = 795; continue _fun0005 }
 299:
            var15 = _closure1_slot9;
            var14 = _closure1_slot4;
            var13 = {};
            var17 = var9.headerTitle;
            var13['style'] = var17;
            if(var16) { _fun0005_ip = 330; continue _fun0005 }
 322:
            var17 = null;
            if(!var22) { _fun0005_ip = 537; continue _fun0005 }
 330:
            var19 = _closure1_slot8;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var16 = 14;
            var16 = var29[var16];
            var16 = var28.bind(var4)(var16);
            var18 = var16.PressableOpacity;
            var16 = {};
            var23 = var9.headerClose;
            var16['style'] = var23;
            var23 = 15;
            var26 = var29[var23];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var23 = var29[var23];
            var23 = var28.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.13/7kZ;
            var23 = var26.bind(var27)(var23);
            var16['accessibilityLabel'] = var23;
            var23 = _closure1_slot14;
            var16['onPress'] = var23;
            var26 = _closure1_slot8;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            if(var22) { _fun0005_ip = 466; continue _fun0005 }
 446:
            var22 = 17;
            var22 = var28[var22];
            var22 = var27.bind(var4)(var22);
            var23 = var22.XSmallIcon;
            _fun0005_ip = 484; continue _fun0005;
 466:
            var22 = 16;
            var22 = var28[var22];
            var22 = var27.bind(var4)(var22);
            var23 = var22.ArrowSmallLeftIcon;
 484:
            var22 = {};
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var27 = 7;
            var27 = var29[var27];
            var27 = var28.bind(var4)(var27);
            var27 = var27.colors;
            var27 = var27.WHITE;
            var22['color'] = var27;
            var22 = var26.bind(var4)(var23, var22);
            var16['children'] = var22;
            var17 = var19.bind(var4)(var18, var16);
 537:
            var16 = new Array(3);
            var16[0] = var17;
            var19 = _closure1_slot8;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var17 = 18;
            var17 = var28[var17];
            var17 = var27.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'color': 'header-primary', 'variant': 'heading-lg/bold', 'style': null, 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
            var22 = var9.headerText;
            var17['style'] = var22;
            var22 = 15;
            var23 = var28[var22];
            var23 = var27.bind(var4)(var23);
            var26 = var23.intl;
            var23 = var26.string;
            var22 = var28[var22];
            var22 = var27.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.HcoRu7;
            var22 = var23.bind(var26)(var22);
            var17['children'] = var22;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var19 = _closure1_slot9;
            var18 = _closure1_slot4;
            var17 = {};
            var22 = var9.actionButtons;
            var17['style'] = var22;
            var21 = null;
            if(!var20) { _fun0005_ip = 727; continue _fun0005 }
 686:
            var23 = _closure1_slot8;
            var22 = _closure1_slot1;
            var26 = _closure1_slot2;
            var20 = 19;
            var20 = var26[var20];
            var22 = var22.bind(var4)(var20);
            var20 = {};
            var20['ref'] = var25;
            var20['onOpen'] = var24;
            var21 = var23.bind(var4)(var22, var20);
 727:
            var20 = new Array(2);
            var20[0] = var21;
            var23 = _closure1_slot8;
            var22 = _closure1_slot1;
            var24 = _closure1_slot2;
            var21 = 20;
            var21 = var24[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21 = var23.bind(var4)(var22, var21);
            var20[1] = var21;
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[2] = var17;
            var13['children'] = var16;
            var12 = var15.bind(var4)(var14, var13);
 795:
            var5['children'] = var12;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var11 = var9.headerBorder;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = var10.bind(var11)(var7);
    var _closure1_slot13 = var7;
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
        var4 = _closure1_slot8;
        var3 = _closure1_slot16;
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