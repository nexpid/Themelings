// app/components_native/AppContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var11 = require;
        var14 = metroImportDefault;
        var10 = exports;
        var12 = dependencyMap;
        var1 = global;
        var _closure1_slot0 = var1;
        var5 = var11;
        var _closure1_slot1 = var11;
        var4 = var14;
        var _closure1_slot2 = var14;
        var2 = var10;
        var6 = var12;
        var _closure1_slot3 = var12;
        var1 = function GestureWrapper(arg1) {
            var1 = arg1;
            var5 = var1.children;
            var2 = _closure1_slot12;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var _closure2_slot0 = var10;
            var2 = _closure1_slot1;
            var7 = _closure1_slot3;
            var6 = 9;
            var6 = var7[var6];
            var8 = var2.bind(var4)(var6);
            var6 = var8.useIsScreenLandscape;
            var11 = var6.bind(var8)();
            var _closure2_slot1 = var11;
            var9 = _closure1_slot5;
            var8 = var9.useMemo;
            var6 = new Array(2);
            var6[0] = var11;
            var6[1] = var10;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = var1.flex;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var4 = _closure2_slot1;
                    var2 = undefined;
                    if(!var4) { _fun0002_ip = 39; continue _fun0002 }
 29:
                    var3 = _closure2_slot0;
                    var2 = var3.rootBackgroundColor;
 39:
                    var1[1] = var2;
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var3, var6);
            var3 = _closure1_slot10;
            var1 = 10;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.GestureHandlerRootView;
            var1 = {};
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot15 = var1;
        var1 = function handleNavigationOnReady() {
            var4 = _closure1_slot2;
            var6 = _closure1_slot3;
            var1 = 11;
            var3 = var6[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.flush;
            var3 = var3.bind(var4)();
            var5 = _closure1_slot1;
            var3 = 12;
            var3 = var6[var3];
            var3 = var5.bind(var1)(var3);
            var4 = var3.ComponentDispatch;
            var3 = var4.dispatch;
            var2 = _closure1_slot9;
            var2 = var2.NAVIGATOR_READY;
            var2 = var3.bind(var4)(var2);
            var2 = 13;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var4 = var2.routingInstrumentation;
            var3 = var4.registerNavigationContainer;
            var2 = 14;
            var2 = var6[var2];
            var5 = var5.bind(var1)(var2);
            var2 = var5.getRootNavigationRef;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure1_slot16 = var1;
        var1 = function AppNavigationContainer(arg1) {
            var2 = arg1;
            var5 = var2.children;
            var3 = _closure1_slot2;
            var11 = _closure1_slot3;
            var2 = 20;
            var2 = var11[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.bind(var4)();
            var6 = _closure1_slot5;
            var2 = var6.useRef;
            var2 = var2.bind(var6)(var4);
            var _closure2_slot0 = var2;
            var9 = _closure1_slot5;
            var7 = var9.useCallback;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var5)) { _fun0003_ip = 373; continue _fun0003 }
 44:
                    var4 = var5.isReady;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0003_ip = 373; continue _fun0003 }
 60:
                    var4 = var5.getCurrentRoute;
                    var6 = var4.bind(var5)();
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var8 = 21;
                    var4 = var4[var8];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.coerceMessagesRoute;
                    var4 = var4.bind(var5)(var6);
                    if(!(var3 == var4)) { _fun0003_ip = 133; continue _fun0003 }
 105:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var7 = var7.bind(var1)(var5);
                    var5 = var7.coerceGuildsRoute;
                    var4 = var5.bind(var7)(var6);
 133:
                    var7 = var3 != var4;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var9 = var5.bind(var1)(var4);
                    var8 = var9.coerceChannelRoute;
                    var5 = _closure2_slot0;
                    var5 = var5.current;
                    var5 = var8.bind(var9)(var5);
                    var5 = var3 != var5;
                    if(!var5) { _fun0003_ip = 187; continue _fun0003 }
 184:
                    var5 = var7;
 187:
                    if(!var5) { _fun0003_ip = 230; continue _fun0003 }
 190:
                    var7 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var5 = 22;
                    var5 = var8[var5];
                    var8 = var7.bind(var1)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot8;
                    var5 = var5.NAV_DRAWER_OPENED;
                    var5 = var7.bind(var8)(var5);
 230:
                    var4 = _closure2_slot0;
                    var4['current'] = var6;
                    var5 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var4 = 18;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = true;
                    var6 = var5.bind(var1)(var6, var4);
                    var5 = _closure1_slot4;
                    var4 = 2;
                    var5 = var5.bind(var1)(var6, var4);
                    var4 = 0;
                    var7 = var5[var4];
                    var4 = 1;
                    var6 = var5[var4];
                    var3 = var3 != var6;
                    if(!var3) { _fun0003_ip = 319; continue _fun0003 }
 301:
                    var5 = _closure1_slot7;
                    var4 = var5.getChannelId;
                    var4 = var4.bind(var5)();
                    var3 = var6 !== var4;
 319:
                    if(!var3) { _fun0003_ip = 373; continue _fun0003 }
 322:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 19;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.selectChannel;
                    var3 = {};
                    var3['guildId'] = var7;
                    var3['channelId'] = var6;
                    var6 = 'Navigation Fix';
                    var3['source'] = var6;
                    var3 = var4.bind(var5)(var3);
 373:
                    var2 = _closure1_slot6;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var2 = new Array(0);
            var7 = var7.bind(var9)(var6, var2);
            var10 = _closure1_slot5;
            var9 = var10.useMemo;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 23;
                    var1 = var4[var1];
                    var7 = undefined;
                    var1 = var3.bind(var7)(var1);
                    var1 = var1.bind(var7)();
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = var3.bind(var7)(var2);
                    var3 = var4.log;
                    var5 = null;
                    var2 = var5 == var1;
                    var6 = undefined;
                    if(var2) { _fun0004_ip = 84; continue _fun0004 }
 58:
                    var8 = var1.routes;
                    var2 = 0;
                    var2 = var8[var2];
                    var5 = var5 == var2;
                    var6 = undefined;
                    if(var5) { _fun0004_ip = 84; continue _fun0004 }
 79:
                    var6 = var2.name;
 84:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var2 = 'Initial Screen: ';
                    var2 = var5.bind(var2)(var6);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = new Array(0);
            var6 = var9.bind(var10)(var6, var2);
            var10 = _closure1_slot5;
            var9 = var10.useRef;
            var2 = true;
            var2 = var9.bind(var10)(var2);
            var _closure2_slot1 = var2;
            var10 = _closure1_slot5;
            var9 = var10.useEffect;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    if(var3) { _fun0005_ip = 55; continue _fun0005 }
 17:
                    var3 = global;
                    var6 = var3.setTimeout;
                    var5 = undefined;
                    var4 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 14;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getRootNavigationRef;
                            var4 = var3.bind(var4)();
                            var3 = null;
                            if(!(var3 != var4)) { _fun0006_ip = 125; continue _fun0006 }
 41:
                            var3 = var4.isReady;
                            var3 = var3.bind(var4)();
                            if(!var3) { _fun0006_ip = 125; continue _fun0006 }
 54:
                            var3 = var4.getState;
                            var3 = var3.bind(var4)();
                            var6 = var3.routes;
                            var5 = var6.filter;
                            var3 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.name;
                                var1 = 'modal';
                                var1 = var1 === var2;
                                return var1;
                            };
                            var3 = var5.bind(var6)(var3);
                            var5 = _closure1_slot2;
                            var6 = _closure1_slot3;
                            var2 = 23;
                            var2 = var6[var2];
                            var2 = var5.bind(var1)(var2);
                            var3 = var2.bind(var1)(var3);
                            var2 = var4.reset;
                            var2 = var2.bind(var4)(var3);
 125:
                            return var1;
                        }
                    };
                    var3 = 0;
                    var3 = var6.bind(var5)(var4, var3);
                    var _closure3_slot0 = var3;
                    var2 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var2;
 55:
                    var2 = _closure2_slot1;
                    var1 = false;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var9.bind(var10)(var2, var1);
            var10 = _closure1_slot1;
            var1 = 25;
            var1 = var11[var1];
            var2 = var10.bind(var4)(var1);
            var1 = var2.useNavigationTheme;
            var9 = var1.bind(var2)(var3);
            var3 = _closure1_slot10;
            var1 = 26;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.NavigationContainer;
            var1 = {};
            var1['theme'] = var9;
            var9 = 14;
            var9 = var11[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.getRootNavigationRef;
            var9 = var9.bind(var10)();
            var1['ref'] = var9;
            var8 = _closure1_slot16;
            var1['onReady'] = var8;
            var1['onStateChange'] = var7;
            var1['initialState'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot17 = var1;
        var1 = function ShareNavigationContainer(arg1) {
            var1 = arg1;
            var5 = var1.children;
            var3 = _closure1_slot2;
            var7 = _closure1_slot3;
            var2 = 20;
            var2 = var7[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var8 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var3 = 25;
            var3 = var7[var3];
            var6 = var2.bind(var4)(var3);
            var3 = var6.useNavigationTheme;
            var6 = var3.bind(var6)(var8);
            var3 = _closure1_slot10;
            var1 = 26;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.NavigationContainer;
            var1 = {};
            var1['theme'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot18 = var1;
        var1 = function AppNavigationContainerOrEmpty(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var2 = var1.children;
                var4 = var1.appEntryKey;
                var1 = 'main';
                if(!(var1 !== var4)) { _fun0007_ip = 60; continue _fun0007 }
 22:
                var3 = 'share';
                var1 = var2;
                if(!(var3 === var4)) { _fun0007_ip = 58; continue _fun0007 }
 33:
                var6 = _closure1_slot10;
                var5 = _closure1_slot18;
                var4 = {};
                var4['children'] = var2;
                var3 = undefined;
                var1 = var6.bind(var3)(var5, var4);
 58:
                _fun0007_ip = 85; continue _fun0007;
 60:
                var5 = _closure1_slot10;
                var4 = _closure1_slot17;
                var3 = {};
                var3['children'] = var2;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
 85:
                return var1;
            }
        };
        var _closure1_slot19 = var1;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var10, var1, var7);
        var1 = 0;
        var7 = var12[var1];
        var1 = undefined;
        var7 = var14.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var13 = 1;
        var8 = var12[var13];
        var7 = metroImportAll;
        var7 = var7.bind(var1)(var8);
        var _closure1_slot5 = var7;
        var7 = 2;
        var7 = var12[var7];
        var7 = var11.bind(var1)(var7);
        var7 = var7.handleHistoryStoreNavigationChange;
        var _closure1_slot6 = var7;
        var7 = 3;
        var7 = var12[var7];
        var7 = var14.bind(var1)(var7);
        var _closure1_slot7 = var7;
        var7 = 4;
        var7 = var12[var7];
        var7 = var11.bind(var1)(var7);
        var8 = var7.AnalyticEvents;
        var _closure1_slot8 = var8;
        var7 = var7.ComponentActions;
        var _closure1_slot9 = var7;
        var7 = 5;
        var7 = var12[var7];
        var7 = var11.bind(var1)(var7);
        var8 = var7.jsx;
        var _closure1_slot10 = var8;
        var7 = var7.jsxs;
        var _closure1_slot11 = var7;
        var7 = 6;
        var7 = var12[var7];
        var9 = var11.bind(var1)(var7);
        var8 = var9.createStyles;
        var7 = {};
        var10 = {};
        var10['flex'] = var13;
        var7['flex'] = var10;
        var10 = {};
        var13 = 7;
        var13 = var12[var13];
        var13 = var14.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.ANDROID_NAVIGATION_BAR_BACKGROUND;
        var10['backgroundColor'] = var13;
        var7['rootBackgroundColor'] = var10;
        var7 = var8.bind(var9)(var7);
        var _closure1_slot12 = var7;
        var7 = 8;
        var8 = var12[var7];
        var10 = var11.bind(var1)(var8);
        var9 = var10.configureReanimatedLogger;
        var8 = {};
        var7 = var12[var7];
        var7 = var11.bind(var1)(var7);
        var7 = var7.ReanimatedLogLevel;
        var7 = var7.error;
        var8['level'] = var7;
        var7 = false;
        var8['strict'] = var7;
        var8 = var9.bind(var10)(var8);
 396: // try_start_0
        var9 = var5;
        var10 = var6;
        var8 = 15;
        var8 = var10[var8];
        var9 = var9.bind(var1)(var8);
        var8 = var9.enableFreeze;
        var8 = var8.bind(var9)();
 424: // try_end0
        _fun0001_ip = 428; continue _fun0001;
 426: // catch_target0
        CatchBlockStart(arg_register=7);
 428:
        var8 = 16;
        var8 = var6[var8];
        var10 = var5.bind(var1)(var8);
        var9 = var10.setDesignConfig;
        var8 = {};
        var11 = 17;
        var11 = var6[var11];
        var11 = var5.bind(var1)(var11);
        var11 = var11.useTrackNavigatorScreenImpression;
        var8['useTrackNavigatorScreenImpression'] = var11;
        var8 = var9.bind(var10)(var8);
        var _closure1_slot13 = var7;
        var7 = {};
        var8 = 'function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}';
        var7['code'] = var8;
        var _closure1_slot14 = var7;
        var7 = var4;
        var4 = 45;
        var4 = var6[var4];
        var7 = var7.bind(var1)(var4);
        var4 = var7.profiledRootComponent;
        var3 = function AppContainer(arg1) {
            var1 = arg1;
            var52 = var1.children;
            var17 = var1.appEntryKey;
            var51 = _closure1_slot1;
            var50 = _closure1_slot3;
            var1 = 27;
            var1 = var50[var1];
            var4 = undefined;
            var3 = var51.bind(var4)(var1);
            var2 = var3.useRequestGatewaySocket;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var1 = 'AppContainer:';
            var1 = var5.bind(var1)(var17);
            var1 = var2.bind(var3)(var1);
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure1_slot13;
                    if(var3) { _fun0008_ip = 115; continue _fun0008 }
 12:
                    var3 = _closure1_slot0;
                    var7 = var3.RNScreensTurboModule;
                    var _closure3_slot0 = var7;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.runOnUI;
                    var1 = function e() {
                        var2 = _closure1_slot0;
                        var1 = _closure3_slot0;
                        var2['RNScreensTurboModule'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var6 = {};
                    var6['RNScreensTurboModule'] = var7;
                    var1['__closure'] = var6;
                    var6 = 8891274578898.0;
                    var1['__workletHash'] = var6;
                    var6 = _closure1_slot14;
                    var1['__initData'] = var6;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var3)();
                    var1 = true;
                    _closure1_slot13 = var1;
 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot10;
            var48 = _closure1_slot2;
            var5 = 28;
            var1 = var50[var5];
            var2 = var48.bind(var4)(var1);
            var1 = {};
            var5 = var50[var5];
            var5 = var51.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.AppContainer;
            var1['profile'] = var5;
            var7 = _closure1_slot10;
            var5 = 29;
            var5 = var50[var5];
            var5 = var51.bind(var4)(var5);
            var6 = var5.ReanimatedScreenProvider;
            var5 = {};
            var10 = _closure1_slot10;
            var8 = 30;
            var8 = var50[var8];
            var8 = var51.bind(var4)(var8);
            var9 = var8.RootThemeContextProvider;
            var8 = {};
            var13 = _closure1_slot10;
            var11 = 31;
            var11 = var50[var11];
            var12 = var48.bind(var4)(var11);
            var11 = {};
            var16 = _closure1_slot10;
            var15 = _closure1_slot19;
            var14 = {};
            var14['appEntryKey'] = var17;
            var19 = _closure1_slot10;
            var17 = 32;
            var17 = var50[var17];
            var17 = var51.bind(var4)(var17);
            var18 = var17.WebViewContextProvider;
            var17 = {};
            var22 = _closure1_slot10;
            var20 = 33;
            var20 = var50[var20];
            var20 = var51.bind(var4)(var20);
            var21 = var20.Router;
            var20 = {};
            var23 = 34;
            var23 = var50[var23];
            var24 = var48.bind(var4)(var23);
            var23 = var24.getHistory;
            var23 = var23.bind(var24)();
            var20['history'] = var23;
            var25 = _closure1_slot10;
            var24 = _closure1_slot15;
            var23 = {};
            var26 = 35;
            var26 = var50[var26];
            var27 = var48.bind(var4)(var26);
            var26 = {};
            var30 = _closure1_slot10;
            var28 = 36;
            var28 = var50[var28];
            var28 = var51.bind(var4)(var28);
            var29 = var28.PortalProvider;
            var28 = {};
            var33 = _closure1_slot10;
            var31 = 37;
            var31 = var50[var31];
            var31 = var48.bind(var4)(var31);
            var32 = var31.Component;
            var31 = {};
            var36 = _closure1_slot10;
            var34 = 38;
            var34 = var50[var34];
            var34 = var51.bind(var4)(var34);
            var35 = var34.PortalKeyboardContextProvider;
            var34 = {};
            var39 = _closure1_slot11;
            var37 = 39;
            var37 = var50[var37];
            var38 = var48.bind(var4)(var37);
            var37 = {};
            var42 = _closure1_slot10;
            var40 = 40;
            var40 = var50[var40];
            var41 = var48.bind(var4)(var40);
            var40 = {};
            var41 = var42.bind(var4)(var41, var40);
            var40 = new Array(2);
            var40[0] = var41;
            var43 = _closure1_slot10;
            var49 = 41;
            var41 = var50[var49];
            var41 = var51.bind(var4)(var41);
            var42 = var41.SafeAreaProvider;
            var41 = {};
            var44 = 42;
            var44 = var50[var44];
            var45 = var48.bind(var4)(var44);
            var44 = {};
            var46 = new Array(4);
            var46[0] = var52;
            var52 = _closure1_slot10;
            var49 = var50[var49];
            var49 = var51.bind(var4)(var49);
            var51 = var49.SafeAreaReporter;
            var49 = {};
            var49 = var52.bind(var4)(var51, var49);
            var46[1] = var49;
            var52 = _closure1_slot10;
            var49 = 43;
            var49 = var50[var49];
            var51 = var48.bind(var4)(var49);
            var49 = {};
            var49 = var52.bind(var4)(var51, var49);
            var46[2] = var49;
            var49 = _closure1_slot10;
            var47 = 44;
            var47 = var50[var47];
            var48 = var48.bind(var4)(var47);
            var47 = {};
            var47 = var49.bind(var4)(var48, var47);
            var46[3] = var47;
            var44['children'] = var46;
            var44 = var39.bind(var4)(var45, var44);
            var41['children'] = var44;
            var41 = var43.bind(var4)(var42, var41);
            var40[1] = var41;
            var37['children'] = var40;
            var37 = var39.bind(var4)(var38, var37);
            var34['children'] = var37;
            var34 = var36.bind(var4)(var35, var34);
            var31['children'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var28['children'] = var31;
            var28 = var30.bind(var4)(var29, var28);
            var26['children'] = var28;
            var26 = var25.bind(var4)(var27, var26);
            var23['children'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3 = var4.bind(var7)(var3);
        var4 = 46;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/AppContainer.tsx';
        var4 = var5.bind(var6)(var4);
        var2['default'] = var3;
        return var1;
    }
})();