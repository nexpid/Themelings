// app/design/components/Navigator/native/Navigator.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function NavigationStack(arg1) {
        var1 = arg1;
        var8 = var1.screens;
        var _closure2_slot0 = var8;
        var33 = var1.onWillFocus;
        var _closure2_slot1 = var33;
        var6 = var1.onDidFocus;
        var _closure2_slot2 = var6;
        var10 = var1.initialRouteName;
        var11 = var1.detachInactiveScreens;
        var21 = var1.gestureResponseDistance;
        var _closure2_slot3 = var21;
        var22 = var1.gestureDirection;
        var _closure2_slot4 = var22;
        var16 = var1.headerTitleAlign;
        var _closure2_slot5 = var16;
        var20 = var1.cardOverlayEnabled;
        var _closure2_slot6 = var20;
        var19 = var1.cardShadowEnabled;
        var _closure2_slot7 = var19;
        var18 = var1.cardStyle;
        var _closure2_slot8 = var18;
        var29 = var1.headerStyle;
        var _closure2_slot9 = var29;
        var2 = var1.viewStyle;
        var _closure2_slot10 = var2;
        var25 = var1.headerLeftContainerStyle;
        var _closure2_slot11 = var25;
        var26 = var1.headerTitleContainerStyle;
        var _closure2_slot12 = var26;
        var24 = var1.headerRightContainerStyle;
        var _closure2_slot13 = var24;
        var15 = var1.headerStatusBarHeight;
        var _closure2_slot14 = var15;
        var17 = var1.headerBackTitle;
        var _closure2_slot15 = var17;
        var23 = var1.hideTitle;
        var _closure2_slot16 = var23;
        var3 = var1.disableHeaderAnimation;
        var _closure2_slot17 = var3;
        var1 = _closure1_slot7;
        var4 = undefined;
        var30 = var1.bind(var4)();
        var _closure2_slot18 = var30;
        var12 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 7;
        var1 = var9[var1];
        var7 = var12.bind(var4)(var1);
        var1 = var7.useStyles;
        var27 = var1.bind(var7)();
        var _closure2_slot19 = var27;
        var1 = 8;
        var1 = var9[var1];
        var14 = var12.bind(var4)(var1);
        var13 = var14.useToken;
        var7 = _closure1_slot1;
        var1 = 5;
        var1 = var9[var1];
        var1 = var7.bind(var4)(var1);
        var1 = var1.colors;
        var1 = var1.NAVIGATOR_HEADER_TINT;
        var28 = var13.bind(var14)(var1);
        var _closure2_slot20 = var28;
        var1 = 6;
        var1 = var9[var1];
        var12 = var12.bind(var4)(var1);
        var1 = var12.useNavigatorShouldCrossfade;
        var31 = var1.bind(var12)();
        var _closure2_slot21 = var31;
        var13 = _closure1_slot4;
        var12 = var13.useState;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.createStackNavigator;
            var1 = var1.bind(var2)();
            return var1;
        };
        var13 = var12.bind(var13)(var1);
        var12 = _closure1_slot3;
        var1 = 1;
        var12 = var12.bind(var4)(var13, var1);
        var1 = 0;
        var1 = var12[var1];
        var _closure2_slot22 = var1;
        var12 = 10;
        var12 = var9[var12];
        var12 = var7.bind(var4)(var12);
        var12 = var12.bind(var4)();
        var14 = var12.top;
        var _closure2_slot23 = var14;
        var32 = _closure1_slot4;
        var13 = var32.useCallback;
        var12 = new Array(2);
        var12[0] = var33;
        var12[1] = var6;
        var6 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = {};
            var3 = function focus() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0001_ip = 31; continue _fun0001 }
 13:
                    var3 = _closure2_slot1;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['focus'] = var3;
            var2 = function transitionEnd(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.data;
                    var1 = var1.closing;
                    if(var1) { _fun0002_ip = 30; continue _fun0002 }
 17:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var1 = var2 == var3;
 30:
                    if(var1) { _fun0002_ip = 54; continue _fun0002 }
 33:
                    var3 = _closure2_slot2;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['transitionEnd'] = var2;
            return var1;
        };
        var6 = var13.bind(var32)(var6, var12);
        var _closure2_slot24 = var6;
        var13 = _closure1_slot4;
        var12 = var13.useCallback;
        var6 = new Array(22);
        var6[0] = var31;
        var31 = var30.navbar;
        var6[1] = var31;
        var31 = var30.headerLeftContainerStyle;
        var6[2] = var31;
        var30 = var30.headerRightContainerStyle;
        var6[3] = var30;
        var6[4] = var29;
        var6[5] = var28;
        var28 = var27.headerTitle;
        var6[6] = var28;
        var27 = var27.headerBackTitleStyle;
        var6[7] = var27;
        var6[8] = var26;
        var6[9] = var25;
        var6[10] = var24;
        var6[11] = var23;
        var6[12] = var22;
        var6[13] = var21;
        var6[14] = var20;
        var6[15] = var19;
        var6[16] = var18;
        var6[17] = var17;
        var6[18] = var16;
        var6[19] = var15;
        var6[20] = var14;
        var6[21] = var3;
        var3 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var3 = var1.navigation;
                var1 = var3.getState;
                var1 = var1.bind(var3)();
                var7 = null;
                var3 = var7 == var1;
                var5 = undefined;
                var8 = undefined;
                if(var3) { _fun0003_ip = 40; continue _fun0003 }
 34:
                var8 = var1.routes;
 40:
                if(!(var7 == var8)) { _fun0003_ip = 48; continue _fun0003 }
 44:
                var8 = new Array(0);
 48:
                var1 = {};
                var6 = _closure2_slot21;
                var3 = undefined;
                if(!var6) { _fun0003_ip = 66; continue _fun0003 }
 62:
                var3 = 'screen';
 66:
                var1['headerMode'] = var3;
                var3 = _closure2_slot18;
                var6 = var3.navbar;
                var3 = new Array(2);
                var3[0] = var6;
                var6 = _closure2_slot9;
                var3[1] = var6;
                var1['headerStyle'] = var3;
                var3 = _closure2_slot20;
                var1['headerTintColor'] = var3;
                var3 = _closure2_slot19;
                var6 = var3.headerTitle;
                var1['headerTitleStyle'] = var6;
                var3 = var3.headerBackTitleStyle;
                var1['headerBackTitleStyle'] = var3;
                var6 = false;
                var1['headerTitleAllowFontScaling'] = var6;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 11;
                var9 = var11[var9];
                var10 = var10.bind(var5)(var9);
                var9 = var10.isAndroid;
                var10 = var9.bind(var10)();
                var9 = undefined;
                if(var10) { _fun0003_ip = 207; continue _fun0003 }
 181:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 7;
                var10 = var12[var10];
                var10 = var11.bind(var5)(var10);
                var9 = var10.renderBackImage;
 207:
                var1['headerBackImage'] = var9;
                var1['headerBackTitleVisible'] = var6;
                var6 = 'center';
                var9 = new Array(2);
                var10 = {'maxWidth': '60%', 'alignItems': 'center'};
                var9[0] = var10;
                var10 = _closure2_slot12;
                var9[1] = var10;
                var1['headerTitleContainerStyle'] = var9;
                var9 = _closure2_slot18;
                var11 = var9.headerLeftContainerStyle;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = _closure2_slot11;
                var10[1] = var11;
                var1['headerLeftContainerStyle'] = var10;
                var10 = var9.headerRightContainerStyle;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = _closure2_slot13;
                var9[1] = var10;
                var1['headerRightContainerStyle'] = var9;
                var10 = _closure2_slot16;
                var9 = undefined;
                if(!var10) { _fun0003_ip = 328; continue _fun0003 }
 323:
                var9 = function() {
                    var1 = undefined;
                    return var1;
                };
 328:
                var1['headerTitle'] = var9;
                var9 = _closure2_slot4;
                var1['gestureDirection'] = var9;
                var9 = _closure2_slot3;
                var1['gestureResponseDistance'] = var9;
                var9 = _closure2_slot6;
                var1['cardOverlayEnabled'] = var9;
                var9 = _closure2_slot7;
                var1['cardShadowEnabled'] = var9;
                var9 = _closure2_slot8;
                var1['cardStyle'] = var9;
                var9 = _closure2_slot15;
                if(!(var7 == var9)) { _fun0003_ip = 457; continue _fun0003 }
 386:
                var10 = var8.length;
                var9 = 1;
                var8 = undefined;
                if(!(var9 === var10)) { _fun0003_ip = 455; continue _fun0003 }
 400:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 12;
                var10 = var13[var9];
                var10 = var12.bind(var5)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var5)(var9);
                var9 = var9.t;
                var9 = var9.13/7kZ;
                var8 = var10.bind(var11)(var9);
 455:
                _fun0003_ip = 461; continue _fun0003;
 457:
                var8 = _closure2_slot15;
 461:
                var1['headerBackTitle'] = var8;
                var8 = _closure2_slot5;
                var8 = var7 != var8;
                if(!var8) { _fun0003_ip = 481; continue _fun0003 }
 477:
                var6 = _closure2_slot5;
 481:
                var1['headerTitleAlign'] = var6;
                var6 = _closure2_slot14;
                if(!(var7 == var6)) { _fun0003_ip = 500; continue _fun0003 }
 494:
                var6 = _closure2_slot23;
                _fun0003_ip = 504; continue _fun0003;
 500:
                var6 = _closure2_slot14;
 504:
                var1['headerStatusBarHeight'] = var6;
                var6 = _closure2_slot21;
                if(var6) { _fun0003_ip = 550; continue _fun0003 }
 516:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 9;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.CardStyleInterpolators;
                var6 = var6.forHorizontalIOS;
                _fun0003_ip = 555; continue _fun0003;
 550:
                var6 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.current;
                    var1 = {};
                    var2 = {};
                    var5 = var3.progress;
                    var4 = var5.interpolate;
                    var3 = {};
                    var6 = [0, 1];
                    var3['inputRange'] = var6;
                    var6 = [0, 1];
                    var3['outputRange'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var2['opacity'] = var3;
                    var1['cardStyle'] = var2;
                    return var1;
                };
 555:
                var1['cardStyleInterpolator'] = var6;
                var6 = _closure2_slot17;
                if(var6) { _fun0003_ip = 615; continue _fun0003 }
 567:
                var4 = _closure2_slot21;
                if(var4) { _fun0003_ip = 581; continue _fun0003 }
 574:
                var2 = function(arg1) {
                    var1 = arg1;
                    var6 = var1.current;
                    var5 = var1.next;
                    var4 = var1.layouts;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.HeaderStyleInterpolators;
                    var2 = var3.forUIKit;
                    var1 = {};
                    var1['current'] = var6;
                    var1['next'] = var5;
                    var1['layouts'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.leftButtonStyle;
                    var2 = var1.titleStyle;
                    var2 = var2.transform;
                    var3['transform'] = var2;
                    var3 = var1.rightButtonStyle;
                    var2 = var1.titleStyle;
                    var2 = var2.transform;
                    var3['transform'] = var2;
                    return var1;
                };
                _fun0003_ip = 613; continue _fun0003;
 581:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.HeaderStyleInterpolators;
                var2 = var4.forFade;
 613:
                _fun0003_ip = 647; continue _fun0003;
 615:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.HeaderStyleInterpolators;
                var2 = var3.forNoAnimation;
 647:
                var1['headerStyleInterpolator'] = var2;
                return var1;
            }
        };
        var6 = var12.bind(var13)(var3, var6);
        var3 = _closure1_slot6;
        var2 = var1.Navigator;
        var1 = {};
        var1['detachInactiveScreens'] = var11;
        var1['initialRouteName'] = var10;
        var1['screenOptions'] = var6;
        var6 = 13;
        var6 = var9[var6];
        var7 = var7.bind(var4)(var6);
        var6 = var7.keys;
        var7 = var6.bind(var7)(var8);
        var6 = var7.map;
        var5 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var5 = arg1;
                var6 = {};
                var2 = _closure2_slot0;
                var10 = var2[var5];
                var11 = var6;
                var2 = copyDataProperties(var11, var10);
                var _closure3_slot0 = var6;
                var2 = var6.fullscreen;
                if(var2) { _fun0004_ip = 50; continue _fun0004 }
 38:
                var4 = var6.customNavbar;
                var3 = null;
                var2 = var3 != var4;
 50:
                var3 = _closure2_slot16;
                if(!var3) { _fun0004_ip = 68; continue _fun0004 }
 57:
                var3 = function() {
                    var1 = undefined;
                    return var1;
                };
                var6['headerTitle'] = var3;
 68:
                if(!var2) { _fun0004_ip = 89; continue _fun0004 }
 71:
                var2 = true;
                var6['headerTransparent'] = var2;
                var2 = 'float';
                var6['headerMode'] = var2;
 89:
                var4 = _closure1_slot6;
                var2 = _closure2_slot22;
                var3 = var2.Screen;
                var2 = {};
                var2['name'] = var5;
                var8 = var6.initialParams;
                var2['initialParams'] = var8;
                var7 = _closure2_slot24;
                var2['listeners'] = var7;
                var2['options'] = var6;
                var1 = function children(arg1) {
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.NavigatorScreen;
                    var1 = {};
                    var5 = _closure3_slot0;
                    var1['screen'] = var5;
                    var7 = arg1;
                    var8 = var1;
                    var5 = copyDataProperties(var8, var7);
                    var6 = _closure2_slot10;
                    var5 = 'viewStyle';
                    var1[var5] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2['children'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function WrappedNavigationStack(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var9 = var3.initialRouteName;
            var1 = var3.initialRouteStack;
            var _closure2_slot0 = var1;
            var10 = var3.initialRouteState;
            var6 = var3.onStateChange;
            var14 = var3.navigationTheme;
            var2 = {'initialRouteName': 0, 'initialRouteStack': 0, 'initialRouteState': 0, 'onStateChange': 0, 'navigationTheme': 0};
            var11 = null;
            var20 = var2;
            var19 = null;
            var1 = silentSetPrototypeOf(var20, var19);
            var12 = 0;
            var20 = {};
            var19 = var3;
            var18 = var2;
            var8 = copyDataProperties(var20, var19, var18);
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 15;
            var3 = var16[var1];
            var4 = undefined;
            var13 = var2.bind(var4)(var3);
            var3 = var13.createNavigationContainerRef;
            var15 = var3.bind(var13)();
            var _closure2_slot1 = var15;
            var17 = _closure1_slot4;
            var13 = var17.useState;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var2 = var1 != var2;
                    var1 = undefined;
                    if(!var2) { _fun0006_ip = 32; continue _fun0006 }
 18:
                    var2 = {};
                    var3 = _closure2_slot0;
                    var2['routes'] = var3;
                    var1 = var2;
 32:
                    return var1;
                }
            };
            var17 = var13.bind(var17)(var3);
            var13 = _closure1_slot3;
            var3 = 1;
            var3 = var13.bind(var4)(var17, var3);
            var12 = var3[var12];
            var13 = _closure1_slot1;
            var3 = 16;
            var3 = var16[var3];
            var3 = var13.bind(var4)(var3);
            var17 = var3.bind(var4)();
            var3 = 17;
            var3 = var16[var3];
            var13 = var2.bind(var4)(var3);
            var3 = var13.useNavigationTheme;
            var13 = var3.bind(var13)(var17);
            var3 = _closure1_slot6;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.NavigationContainer;
            var1 = {};
            var1['ref'] = var15;
            if(!(var11 != var14)) { _fun0005_ip = 228; continue _fun0005 }
 225:
            var13 = var14;
 228:
            var1['theme'] = var13;
            if(!(var11 == var10)) { _fun0005_ip = 251; continue _fun0005 }
 236:
            var13 = var11 != var12;
            var11 = undefined;
            if(!var13) { _fun0005_ip = 248; continue _fun0005 }
 245:
            var11 = var12;
 248:
            var10 = var11;
 251:
            var1['initialState'] = var10;
            var7 = function onReady() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.routingInstrumentation;
                var3 = var4.registerNavigationContainer;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onReady'] = var7;
            var1['onStateChange'] = var6;
            var6 = true;
            var1['independent'] = var6;
            var7 = _closure1_slot6;
            var6 = _closure1_slot8;
            var5 = {};
            var5['initialRouteName'] = var9;
            var20 = var5;
            var19 = var8;
            var8 = copyDataProperties(var20, var19);
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var12 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var16 = var12.absoluteFillObject;
    var17 = var9;
    var10 = copyDataProperties(var17, var16);
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var14 = var13.BACKGROUND_MOBILE_SECONDARY;
    var13 = 'backgroundColor';
    var9[var13] = var14;
    var4['container'] = var9;
    var9 = {};
    var12 = var12.hairlineWidth;
    var9['borderBottomWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOBILE_SECONDARY;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_TERTIARY;
    var9['borderBottomColor'] = var10;
    var10 = 'transparent';
    var9['shadowColor'] = var10;
    var4['navbar'] = var9;
    var9 = {'backgroundColor': 'transparent', 'borderBottomColor': 'transparent'};
    var4['fullscreen'] = var9;
    var9 = {'paddingLeft': 16, 'marginRight': 4294967280};
    var4['headerLeftContainerStyle'] = var9;
    var9 = {'paddingRight': 16, 'marginLeft': 4294967280};
    var4['headerRightContainerStyle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Navigator/native/Navigator.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useNavigatorScreens(arg1, arg2) {
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useNavigatorScreens'] = var4;
    var4 = function useAccessibilityNativeStackOptions() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useNavigatorShouldCrossfade;
        var5 = var3.bind(var4)();
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = undefined;
                if(!var2) { _fun0007_ip = 26; continue _fun0007 }
 12:
                var2 = {};
                var3 = 'fade';
                var2['animation'] = var3;
                var1 = var2;
 26:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useAccessibilityNativeStackOptions'] = var4;
    var2 = function Navigator(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var5 = arg1;
            var6 = var5.useContainer;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0008_ip = 17; continue _fun0008 }
 15:
            var6 = true;
 17:
            var1 = var5.android_blockParentGestures;
            if(!(var1 === var4)) { _fun0008_ip = 29; continue _fun0008 }
 27:
            var1 = false;
 29:
            var9 = var5.containerStyle;
            var3 = {'useContainer': 0, 'android_blockParentGestures': 0, 'containerStyle': 0};
            var12 = null;
            var13 = var3;
            var2 = silentSetPrototypeOf(var13, var12);
            var13 = {};
            var12 = var5;
            var11 = var3;
            var8 = copyDataProperties(var13, var12, var11);
            var2 = _closure1_slot7;
            var7 = var2.bind(var4)();
            if(var1) { _fun0008_ip = 90; continue _fun0008 }
 84:
            var3 = _closure1_slot5;
            _fun0008_ip = 110; continue _fun0008;
 90:
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 19;
            var1 = var10[var1];
            var3 = var2.bind(var4)(var1);
 110:
            var2 = _closure1_slot6;
            var1 = {};
            var10 = var7.container;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var9;
            var1['style'] = var7;
            var7 = _closure1_slot6;
            if(var6) { _fun0008_ip = 150; continue _fun0008 }
 144:
            var6 = _closure1_slot8;
            _fun0008_ip = 154; continue _fun0008;
 150:
            var6 = _closure1_slot9;
 154:
            var5 = {};
            var13 = var5;
            var12 = var8;
            var8 = copyDataProperties(var13, var12);
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var3['Navigator'] = var2;
    return var1;
})();