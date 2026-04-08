// app/modules/auth/native/components/Auth.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var12;
        var _closure1_slot2 = var7;
        var1 = function getInitialAuthScreen() {
            var1 = _closure1_slot7;
            var1 = var1.WELCOME;
            return var1;
        };
        var _closure1_slot16 = var1;
        var1 = function NavigatorWithCaptchaHook() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 12;
                var2 = var12[var2];
                var4 = undefined;
                var3 = var11.bind(var4)(var2);
                var2 = var3.useIsHCaptchaModalOpenTracking;
                var2 = var2.bind(var3)();
                var7 = _closure1_slot1;
                var2 = 13;
                var2 = var12[var2];
                var2 = var7.bind(var4)(var2);
                var6 = var2.bind(var4)();
                var2 = _closure1_slot14;
                var22 = var2.bind(var4)();
                var5 = _closure1_slot4;
                var3 = var5.useState;
                var2 = _closure1_slot16;
                var2 = var2.bind(var4)();
                var3 = var3.bind(var5)(var2);
                var2 = _closure1_slot3;
                var8 = 2;
                var2 = var2.bind(var4)(var3, var8);
                var13 = 0;
                var26 = var2[var13];
                var3 = 1;
                var2 = var2[var3];
                var _closure2_slot0 = var2;
                var9 = _closure1_slot4;
                var5 = var9.useState;
                var2 = false;
                var5 = var5.bind(var9)(var2);
                var2 = _closure1_slot3;
                var2 = var2.bind(var4)(var5, var8);
                var20 = var2[var13];
                var10 = var2[var3];
                var _closure2_slot1 = var10;
                var2 = 14;
                var2 = var12[var2];
                var5 = var11.bind(var4)(var2);
                var3 = var5.useKeyboardState;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.height;
                    return var1;
                };
                var16 = var3.bind(var5)(var2);
                var2 = 200;
                var18 = var16 > var2;
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var6 = arg1;
                        var4 = _closure2_slot0;
                        var3 = null;
                        var7 = var3 == var6;
                        var1 = undefined;
                        var5 = undefined;
                        if(var7) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                        var7 = var6.routes;
                        var6 = var6.index;
                        var6 = var7[var6];
                        var7 = var3 == var6;
                        var5 = undefined;
                        if(var7) { _fun0003_ip = 2; continue _fun0003 }
case 4:
                        var5 = var6.name;
case 2:
                        var6 = var3 != var5;
                        var3 = null;
                        if(!var6) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                        var3 = var5;
case 5:
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot1;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1 = new Array(0);
                var23 = var3.bind(var5)(var2, var1);
                var3 = _closure1_slot10;
                var2 = _closure1_slot9;
                var1 = {};
                var8 = _closure1_slot8;
                var5 = 15;
                var5 = var12[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var9 = 16;
                var9 = var12[var9];
                var9 = var11.bind(var4)(var9);
                var5['backgroundImageSource'] = var9;
                var19 = true;
                var5['backgroundImageCover'] = var19;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var9 = _closure1_slot8;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                if(var6) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var6 = 18;
                var6 = var11[var6];
                var6 = var8.bind(var4)(var6);
                var7 = var6.Navigator;
                var6 = {};
                var12 = _closure1_slot11;
                var6['screens'] = var12;
                var12 = var22.transparent;
                var6['viewStyle'] = var12;
                var12 = var22.transparent;
                var6['containerStyle'] = var12;
                var12 = 20;
                var14 = var11[var12];
                var14 = var8.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var12 = var11[var12];
                var12 = var8.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["13/7kX"];
                var12 = var14.bind(var15)(var12);
                var6['headerBackTitle'] = var12;
                var12 = _closure1_slot16;
                var12 = var12.bind(var4)();
                var6['initialRouteName'] = var12;
                var12 = _closure1_slot5;
                var12 = var12.dismiss;
                var6['onWillFocus'] = var12;
                var12 = {};
                var12['borderBottomWidth'] = var13;
                var6['headerStyle'] = var12;
                var6 = var9.bind(var4)(var7, var6);
                _fun0002_ip = 9; continue _fun0002;
case 7:
                var7 = 17;
                var7 = var11[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.WideAuthScrollContext;
                var8 = var7.Provider;
                var7 = {};
                var7['value'] = var10;
                var12 = _closure1_slot8;
                var11 = _closure1_slot6;
                var10 = {};
                var14 = var22.wideOuterContainer;
                var13 = new Array(2);
                var13[0] = var14;
                var24 = null;
                var14 = null;
                if(!var18) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var15 = {};
                var15['paddingBottom'] = var16;
                var14 = var15;
case 10:
                var13[1] = var14;
                var10['style'] = var13;
                var15 = _closure1_slot8;
                var14 = _closure1_slot6;
                var13 = {};
                var17 = var22.wideCard;
                var16 = new Array(3);
                var16[0] = var17;
                var25 = var24 != var26;
                var17 = null;
                if(!var25) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var25 = {};
                var27 = _closure1_slot13;
                var28 = var27[var26];
                var29 = var24 != var28;
                var27 = 520;
                if(!var29) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var27 = var28;
case 14:
                var25['height'] = var27;
                var17 = var25;
case 12:
                var16[1] = var17;
                var17 = null;
                if(!var18) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var17 = {'maxHeight': '100%', 'height': '100%', 'marginTop': 32, 'borderBottomLeftRadius': 0, 'borderBottomRightRadius': 0};
case 16:
                var16[2] = var17;
                var13['style'] = var16;
                var18 = _closure1_slot8;
                var17 = _closure1_slot0;
                var25 = _closure1_slot2;
                var16 = 18;
                var16 = var25[var16];
                var16 = var17.bind(var4)(var16);
                var17 = var16.Navigator;
                var16 = {'screens': null, 'containerStyle': null, 'viewStyle': null, 'headerStatusBarHeight': 0, 'cardOverlayEnabled': false, 'cardShadowEnabled': false};
                var25 = _closure1_slot12;
                var16['screens'] = var25;
                var25 = var22.cardContainer;
                var16['containerStyle'] = var25;
                var25 = _closure1_slot7;
                var25 = var25.WELCOME;
                var24 = null;
                if(!(var26 === var25)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var24 = var22.transparent;
case 18:
                var16['viewStyle'] = var24;
                var24 = _closure1_slot16;
                var24 = var24.bind(var4)();
                var16['initialRouteName'] = var24;
                var24 = _closure1_slot5;
                var24 = var24.dismiss;
                var16['onWillFocus'] = var24;
                var16['onStateChange'] = var23;
                if(var20) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var20 = var22.wideHeaderFlat;
                _fun0002_ip = 22; continue _fun0002;
case 20:
                var20 = var22.wideHeader;
case 22:
                var16['headerStyle'] = var20;
                var20 = {};
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var22 = 19;
                var22 = var24[var22];
                var23 = var23.bind(var4)(var22);
                var22 = var23.isAndroid;
                var23 = var22.bind(var23)();
                var22 = 20;
                if(!var23) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var24 = _closure1_slot1;
                var25 = _closure1_slot2;
                var23 = 11;
                var23 = var25[var23];
                var23 = var24.bind(var4)(var23);
                var23 = var23.spacing;
                var22 = var23.PX_12;
case 23:
                var20['paddingLeft'] = var22;
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 11;
                var24 = var23[var21];
                var24 = var22.bind(var4)(var24);
                var24 = var24.spacing;
                var24 = var24.PX_24;
                var20['paddingTop'] = var24;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.spacing;
                var21 = var21.PX_16;
                var20['paddingBottom'] = var21;
                var16['headerLeftContainerStyle'] = var20;
                var16['disableHeaderAnimation'] = var19;
                var16 = var18.bind(var4)(var17, var16);
                var13['children'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var10['children'] = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7['children'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 9:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot17 = var1;
        var2 = global;
        var9 = var2.Object;
        var8 = var9.defineProperty;
        var5 = {};
        var1 = true;
        var5['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var5);
        var14 = 0;
        var5 = var7[var14];
        var1 = undefined;
        var5 = var12.bind(var1)(var5);
        var _closure1_slot3 = var5;
        var5 = 1;
        var8 = var7[var5];
        var5 = metroImportAll;
        var8 = var5.bind(var1)(var8);
        var _closure1_slot4 = var8;
        var5 = 2;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var9 = var5.Keyboard;
        var _closure1_slot5 = var9;
        var13 = var5.StyleSheet;
        var5 = var5.View;
        var _closure1_slot6 = var5;
        var5 = 3;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.AuthStates;
        var _closure1_slot7 = var5;
        var9 = 4;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var10 = var9.jsx;
        var _closure1_slot8 = var10;
        var10 = var9.Fragment;
        var _closure1_slot9 = var10;
        var9 = var9.jsxs;
        var _closure1_slot10 = var9;
        var9 = 5;
        var9 = var7[var9];
        var10 = var6.bind(var1)(var9);
        var9 = var10.getAllAuthScreens;
        var15 = var9.bind(var10)();
        var _closure1_slot11 = var15;
        var10 = var2.Object;
        var9 = var10.fromEntries;
        var11 = var2.Object;
        var2 = var11.entries;
        var15 = var2.bind(var11)(var15);
        var11 = var15.map;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = var4[Symbol.iterator];
                var4 = var1().next;
                var3 = var4().value;
                var2 = var1;
                var7 = undefined;
                var2 = var2 === var7;
                var8 = undefined;
                if(var2) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var8 = var3;
case 25:
                var3 = undefined;
                if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var5 = var4().value;
                var4 = var1;
                var4 = var4 === var7;
                var3 = undefined;
                var2 = var4;
                if(var4) { _fun0004_ip = 27; continue _fun0004 }
case 29:
                var3 = var5;
                var2 = var4;
case 27:
                var _closure2_slot0 = var3;
                if(var2) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var1.return();
case 30:
                var1 = new Array(2);
                var1[0] = var8;
                var2 = {};
                var11 = var2;
                var10 = var3;
                var4 = copyDataProperties(var11, var10);
                var5 = var3.fullscreen;
                var4 = null;
                if(!var5) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var4 = {'fullscreen': false, 'headerTransparent': false};
case 32:
                var11 = var2;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = _closure1_slot7;
                var6 = var4.MFA;
                var4 = null;
                if(!(var8 !== var6)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                var6 = _closure1_slot7;
                var6 = var6.WELCOME;
                var4 = null;
                if(!(var8 !== var6)) { _fun0004_ip = 34; continue _fun0004 }
case 36:
                var6 = {};
                var9 = function headerLeft(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var5 = arg1;
                        var6 = function backImage() {
                            var4 = _closure1_slot8;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 6;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.HeaderBackImage;
                            var1 = {};
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var1 = _closure2_slot0;
                        var3 = var1.headerLeft;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                        var7 = _closure1_slot8;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 7;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var3 = var1.BackButtonWithTracking;
                        var1 = {};
                        var10 = var1;
                        var9 = var5;
                        var8 = copyDataProperties(var10, var9);
                        var8 = 'backImage';
                        var1[7] = var6;
                        var1 = var7.bind(var4)(var3, var1);
                        _fun0005_ip = 39; continue _fun0005;
case 37:
                        var4 = _closure2_slot0;
                        var3 = var4.headerLeft;
                        var2 = {};
                        var10 = var2;
                        var9 = var5;
                        var5 = copyDataProperties(var10, var9);
                        var5 = 'backImage';
                        var2[4] = var6;
                        var1 = var3.bind(var4)(var2);
case 39:
                        return var1;
                    }
                };
                var6['headerLeft'] = var9;
                var4 = var6;
case 34:
                var11 = var2;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = global;
                var9 = var4.Set;
                var4 = _closure1_slot7;
                var6 = var4.REGISTER_IDENTITY;
                var4 = new Array(3);
                var4[0] = var6;
                var6 = _closure1_slot7;
                var6 = var6.LOGIN;
                var4[1] = var6;
                var6 = _closure1_slot7;
                var6 = var6.AGE_GATE_UNDERAGE;
                var4[2] = var6;
                var6 = var9.prototype;
                var6 = Object.create(var6, {constructor: {value: var9}});
                var12 = var6;
                var11 = var4;
                var4 = new var12[var9](var11, var10);
                var6 = var4 instanceof Object ? var4 : var6;
                var4 = var6.has;
                var4 = var4.bind(var6)(var8);
                var3 = null;
                if(!var4) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                var4 = {};
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 8;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.CardStyleInterpolators;
                var5 = var5.forFadeFromCenter;
                var4['cardStyleInterpolator'] = var5;
                var3 = var4;
case 40:
                var11 = var2;
                var10 = var3;
                var3 = copyDataProperties(var11, var10);
                var1[1] = var2;
                return var1;
            }
        };
        var2 = var11.bind(var15)(var2);
        var2 = var9.bind(var10)(var2);
        var _closure1_slot12 = var2;
        var2 = {};
        var11 = var5.LOGIN;
        var9 = 9;
        var9 = var7[var9];
        var10 = var6.bind(var1)(var9);
        var9 = var10.isMetaQuest;
        var15 = var9.bind(var10)();
        var9 = 600;
        var10 = var9;
        if(!var15) { _fun0001_ip = 42; continue _fun0001 }
case 43:
        var10 = 540;
case 42:
        var2[10] = var10;
        var5 = var5.MFA;
        var2[4] = var9;
        var _closure1_slot13 = var2;
        var2 = 10;
        var2 = var7[var2];
        var9 = var6.bind(var1)(var2);
        var5 = var9.createStyles;
        var2 = {};
        var10 = {};
        var11 = 'transparent';
        var10['backgroundColor'] = var11;
        var2['transparent'] = var10;
        var10 = {'flex': 1, 'position': 'relative', 'backgroundColor': 'transparent'};
        var2['cardContainer'] = var10;
        var10 = {'flex': 1, 'justifyContent': 'center'};
        var2['wideOuterContainer'] = var10;
        var10 = {'backgroundColor': 'transparent', 'borderRadius': null, 'maxWidth': 480, 'alignSelf': 'center', 'width': '100%', 'maxHeight': '90%', 'overflow': 'hidden', 'height': 520};
        var11 = 11;
        var15 = var7[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.lg;
        var10['borderRadius'] = var15;
        var2['wideCard'] = var10;
        var10 = {};
        var10['borderBottomWidth'] = var14;
        var14 = var7[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BACKGROUND_BASE_LOW;
        var10['backgroundColor'] = var14;
        var2['wideHeaderFlat'] = var10;
        var10 = {};
        var13 = var13.hairlineWidth;
        var10['borderBottomWidth'] = var13;
        var13 = var7[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BORDER_SUBTLE;
        var10['borderBottomColor'] = var13;
        var11 = var7[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.colors;
        var11 = var11.BACKGROUND_BASE_LOW;
        var10['backgroundColor'] = var11;
        var2['wideHeader'] = var10;
        var2 = var5.bind(var9)(var2);
        var _closure1_slot14 = var2;
        var5 = var8.createContext;
        var2 = function() {
            var1 = undefined;
            return var1;
        };
        var2 = var5.bind(var8)(var2);
        var _closure1_slot15 = var2;
        var5 = var8.memo;
        var4 = function Auth() {
            var6 = _closure1_slot4;
            var4 = var6.useEffect;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.initialize;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.terminate;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var6)(var3, var2);
            var6 = _closure1_slot4;
            var4 = var6.useLayoutEffect;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var6)(var3, var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 23;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var2 = var2.bind(var3)(var4);
            var _closure2_slot0 = var2;
            var6 = _closure1_slot4;
            var3 = var6.useCallback;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getTrackRegTransition;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = new Array(0);
            var6 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot8;
            var1 = _closure1_slot15;
            var2 = var1.Provider;
            var1 = {};
            var6 = var6.bind(var4)();
            var1['value'] = var6;
            var7 = _closure1_slot8;
            var6 = _closure1_slot17;
            var5 = {};
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = var5.bind(var8)(var4);
        var5 = 24;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/auth/native/components/Auth.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var3['TrackRegistrationContext'] = var2;
        return var1;
    }
})();