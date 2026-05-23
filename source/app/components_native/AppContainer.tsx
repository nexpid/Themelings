// app/components_native/AppContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
            var2 = _closure1_slot14;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var _closure2_slot0 = var10;
            var2 = _closure1_slot1;
            var7 = _closure1_slot3;
            var6 = 10;
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
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.flex;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var4 = _closure2_slot1;
                    var2 = undefined;
                    if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = var3.rootBackgroundColor;
case 2:
                    var1[1] = var2;
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var3, var6);
            var3 = _closure1_slot12;
            var1 = 11;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.GestureHandlerRootView;
            var1 = {};
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot17 = var1;
        var1 = function handleNavigationOnReady() {
            var4 = _closure1_slot2;
            var7 = _closure1_slot3;
            var1 = 12;
            var3 = var7[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.flush;
            var3 = var3.bind(var4)();
            var6 = _closure1_slot1;
            var3 = 13;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var5 = var3.ComponentDispatch;
            var4 = var5.dispatch;
            var3 = _closure1_slot10;
            var3 = var3.NAVIGATOR_READY;
            var3 = var4.bind(var5)(var3);
            var3 = 14;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var5 = var3.routingInstrumentation;
            var4 = var5.registerNavigationContainer;
            var3 = 15;
            var3 = var7[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getRootNavigationRef;
            var3 = var3.bind(var6)();
            var3 = var4.bind(var5)(var3);
            var2 = _closure1_slot7;
            var2 = var2.bind(var1)();
            return var1;
        };
        var _closure1_slot18 = var1;
        var1 = function AppNavigationContainer(arg1) {
            var2 = arg1;
            var5 = var2.children;
            var3 = _closure1_slot2;
            var11 = _closure1_slot3;
            var2 = 22;
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
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var5)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var4 = var5.isReady;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                    var4 = var5.getCurrentRoute;
                    var6 = var4.bind(var5)();
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var9 = 20;
                    var4 = var4[var9];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.coerceMessagesRoute;
                    var4 = var4.bind(var5)(var6);
                    if(!(var3 == var4)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var9];
                    var7 = var7.bind(var1)(var5);
                    var5 = var7.coerceGuildsRoute;
                    var4 = var5.bind(var7)(var6);
case 7:
                    var7 = var3 != var4;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var9];
                    var10 = var5.bind(var1)(var4);
                    var8 = var10.coerceChannelRoute;
                    var5 = _closure2_slot0;
                    var5 = var5.current;
                    var5 = var8.bind(var10)(var5);
                    var5 = var3 != var5;
                    if(!var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var5 = var7;
case 9:
                    if(!var5) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var7 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var5 = 23;
                    var5 = var8[var5];
                    var8 = var7.bind(var1)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot9;
                    var5 = var5.NAV_DRAWER_OPENED;
                    var5 = var7.bind(var8)(var5);
case 11:
                    var4 = _closure2_slot0;
                    var4['current'] = var6;
                    var5 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var4 = 19;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = true;
                    var7 = var5.bind(var1)(var6, var4);
                    var5 = _closure1_slot4;
                    var4 = 2;
                    var5 = var5.bind(var1)(var7, var4);
                    var4 = 0;
                    var8 = var5[var4];
                    var4 = 1;
                    var7 = var5[var4];
                    if(!(var3 != var7)) { _fun0003_ip = 4; continue _fun0003 }
case 13:
                    var5 = _closure1_slot8;
                    var4 = var5.getChannelId;
                    var4 = var4.bind(var5)();
                    if(!(var7 !== var4)) { _fun0003_ip = 4; continue _fun0003 }
case 14:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var9];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.coerceChannelRoute;
                    var4 = var4.bind(var5)(var6);
                    var3 = var3 != var4;
                    if(!var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var4 = var4.params;
                    var3 = var4.showCreateThread;
case 15:
                    if(var3) { _fun0003_ip = 4; continue _fun0003 }
case 17:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 21;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.transitionTo;
                    var4 = _closure1_slot11;
                    var3 = var4.CHANNEL;
                    var4 = var3.bind(var4)(var8, var7);
                    var3 = {'openChannel': true, 'navigationReplace': false};
                    var3 = var5.bind(var6)(var4, var3);
case 4:
                    var2 = _closure1_slot7;
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
case 0:
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 24;
                    var1 = var4[var1];
                    var7 = undefined;
                    var1 = var3.bind(var7)(var1);
                    var1 = var1.bind(var7)();
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = var3.bind(var7)(var2);
                    var3 = var4.log;
                    var5 = null;
                    var2 = var5 == var1;
                    var6 = undefined;
                    if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var8 = var1.routes;
                    var2 = 0;
                    var2 = var8[var2];
                    var5 = var5 == var2;
                    var6 = undefined;
                    if(var5) { _fun0004_ip = 18; continue _fun0004 }
case 20:
                    var6 = var2.name;
case 18:
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
case 0:
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    if(var3) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var3 = global;
                    var6 = var3.setTimeout;
                    var5 = undefined;
                    var4 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 15;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getRootNavigationRef;
                            var4 = var3.bind(var4)();
                            var3 = null;
                            if(!(var3 != var4)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                            var3 = var4.isReady;
                            var3 = var3.bind(var4)();
                            if(!var3) { _fun0006_ip = 23; continue _fun0006 }
case 25:
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
                            var2 = 24;
                            var2 = var6[var2];
                            var2 = var5.bind(var1)(var2);
                            var3 = var2.bind(var1)(var3);
                            var2 = var4.reset;
                            var2 = var2.bind(var4)(var3);
case 23:
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
case 21:
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
            var1 = 26;
            var1 = var11[var1];
            var2 = var10.bind(var4)(var1);
            var1 = var2.useNavigationTheme;
            var9 = var1.bind(var2)(var3);
            var3 = _closure1_slot12;
            var1 = 27;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.NavigationContainer;
            var1 = {};
            var1['theme'] = var9;
            var9 = 15;
            var9 = var11[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.getRootNavigationRef;
            var9 = var9.bind(var10)();
            var1['ref'] = var9;
            var8 = _closure1_slot18;
            var1['onReady'] = var8;
            var1['onStateChange'] = var7;
            var1['initialState'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot19 = var1;
        var1 = function ShareNavigationContainer(arg1) {
            var1 = arg1;
            var5 = var1.children;
            var3 = _closure1_slot2;
            var7 = _closure1_slot3;
            var2 = 22;
            var2 = var7[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var8 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var3 = 26;
            var3 = var7[var3];
            var6 = var2.bind(var4)(var3);
            var3 = var6.useNavigationTheme;
            var6 = var3.bind(var6)(var8);
            var3 = _closure1_slot12;
            var1 = 27;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.NavigationContainer;
            var1 = {};
            var1['theme'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot20 = var1;
        var1 = function AppNavigationContainerOrEmpty(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var1 = var2.children;
                var4 = var2.appEntryKey;
                var2 = 'main';
                if(!(var2 !== var4)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                var2 = 'share';
                if(!(var2 !== var4)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                var5 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 28;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.assertNever;
                var2 = var2.bind(var3)(var4);
                return var2;
case 28:
                var5 = _closure1_slot12;
                var4 = _closure1_slot20;
                var3 = {};
                var3['children'] = var1;
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var3);
                return var2;
case 26:
                var4 = _closure1_slot12;
                var3 = _closure1_slot19;
                var2 = {};
                var2['children'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var _closure1_slot21 = var1;
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
        var7 = var7.NativeModules;
        var _closure1_slot6 = var7;
        var7 = 3;
        var7 = var12[var7];
        var7 = var11.bind(var1)(var7);
        var7 = var7.handleHistoryStoreNavigationChange;
        var _closure1_slot7 = var7;
        var7 = 4;
        var7 = var12[var7];
        var7 = var14.bind(var1)(var7);
        var _closure1_slot8 = var7;
        var7 = 5;
        var7 = var12[var7];
        var7 = var11.bind(var1)(var7);
        var8 = var7.AnalyticEvents;
        var _closure1_slot9 = var8;
        var8 = var7.ComponentActions;
        var _closure1_slot10 = var8;
        var7 = var7.Routes;
        var _closure1_slot11 = var7;
        var7 = 6;
        var7 = var12[var7];
        var7 = var11.bind(var1)(var7);
        var8 = var7.jsx;
        var _closure1_slot12 = var8;
        var7 = var7.jsxs;
        var _closure1_slot13 = var7;
        var7 = 7;
        var7 = var12[var7];
        var9 = var11.bind(var1)(var7);
        var8 = var9.createStyles;
        var7 = {};
        var10 = {};
        var10['flex'] = var13;
        var7['flex'] = var10;
        var10 = {};
        var13 = 8;
        var13 = var12[var13];
        var13 = var14.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.ANDROID_NAVIGATION_BAR_BACKGROUND;
        var10['backgroundColor'] = var13;
        var7['rootBackgroundColor'] = var10;
        var7 = var8.bind(var9)(var7);
        var _closure1_slot14 = var7;
        var7 = 9;
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
case 30: // try_start_0
        var9 = var5;
        var10 = var6;
        var8 = 16;
        var8 = var10[var8];
        var9 = var9.bind(var1)(var8);
        var8 = var9.enableFreeze;
        var8 = var8.bind(var9)();
case 31: // try_end0
        _fun0001_ip = 32; continue _fun0001;
case 33: // catch_target0
        CatchBlockStart(arg_register=7);
case 32:
        var8 = 17;
        var8 = var6[var8];
        var10 = var5.bind(var1)(var8);
        var9 = var10.setDesignConfig;
        var8 = {};
        var11 = 18;
        var11 = var6[var11];
        var11 = var5.bind(var1)(var11);
        var11 = var11.useTrackNavigatorScreenImpression;
        var8['useTrackNavigatorScreenImpression'] = var11;
        var8 = var9.bind(var10)(var8);
        var _closure1_slot15 = var7;
        var7 = {};
        var8 = 'function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}';
        var7['code'] = var8;
        var _closure1_slot16 = var7;
        var7 = var4;
        var4 = 49;
        var4 = var6[var4];
        var7 = var7.bind(var1)(var4);
        var4 = var7.profiledRootComponent;
        var3 = function AppContainer(arg1) {
            var2 = arg1;
            var6 = var2.children;
            var _closure2_slot0 = var6;
            var7 = var2.appEntryKey;
            var _closure2_slot1 = var7;
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var3 = 29;
            var3 = var4[var3];
            var4 = undefined;
            var8 = var5.bind(var4)(var3);
            var5 = var8.useRequestGatewaySocket;
            var3 = global;
            var3 = var3.HermesInternal;
            var9 = var3.concat;
            var3 = 'AppContainer:';
            var3 = var9.bind(var3)(var7);
            var3 = var5.bind(var8)(var3);
            var9 = _closure1_slot5;
            var8 = var9.useEffect;
            var5 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot15;
                    if(var3) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var3 = _closure1_slot0;
                    var7 = var3.RNScreensTurboModule;
                    var _closure3_slot0 = var7;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var3 = 9;
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
                    var6 = _closure1_slot16;
                    var1['__initData'] = var6;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var3)();
                    var1 = true;
                    _closure1_slot15 = var1;
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var8.bind(var9)(var5, var3);
            var9 = _closure1_slot5;
            var8 = var9.useEffect;
            var5 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 30;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                    var4 = _closure1_slot6;
                    var3 = var4.SplashScreenManager;
case 36:
                    if(!var3) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var2 = _closure1_slot6;
                    var3 = var2.SplashScreenManager;
                    var2 = var3.hideSplashScreen;
                    var2 = var2.bind(var3)();
case 38:
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var8.bind(var9)(var5, var3);
            var3 = function useManaContextProviderValue() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 48;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useRiveRendererExperiment;
                var3 = 'AppContainer';
                var3 = var4.bind(var5)(var3);
                var _closure3_slot0 = var3;
                var6 = _closure1_slot5;
                var5 = var6.useMemo;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = new Array(0);
                        var2 = _closure3_slot0;
                        if(!var2) { _fun0010_ip = 29; continue _fun0010 }
case 40:
                        var3 = var1.push;
                        var2 = 'rive-mobile-renderer';
                        var2 = var3.bind(var1)(var2);
case 29:
                        return var1;
                    }
                };
                var5 = var5.bind(var6)(var3, var4);
                var _closure3_slot1 = var5;
                var4 = _closure1_slot5;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var1 = {};
                    var2 = {};
                    var3 = _closure3_slot1;
                    var2['enabledExperiments'] = var3;
                    var1['experiments'] = var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var5 = var3.bind(var4)();
            var _closure2_slot2 = var5;
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                var4 = _closure1_slot12;
                var48 = _closure1_slot2;
                var50 = _closure1_slot3;
                var5 = 31;
                var1 = var50[var5];
                var3 = undefined;
                var2 = var48.bind(var3)(var1);
                var1 = {};
                var51 = _closure1_slot1;
                var5 = var50[var5];
                var5 = var51.bind(var3)(var5);
                var5 = var5.Profiles;
                var5 = var5.AppContainer;
                var1['profile'] = var5;
                var7 = _closure1_slot12;
                var5 = 32;
                var5 = var50[var5];
                var5 = var51.bind(var3)(var5);
                var6 = var5.ReanimatedScreenProvider;
                var5 = {};
                var10 = _closure1_slot12;
                var8 = 33;
                var8 = var50[var8];
                var8 = var51.bind(var3)(var8);
                var9 = var8.RootThemeContextProvider;
                var8 = {};
                var13 = _closure1_slot12;
                var11 = 34;
                var11 = var50[var11];
                var11 = var51.bind(var3)(var11);
                var12 = var11.ManaContextProvider;
                var11 = {};
                var14 = _closure2_slot2;
                var11['value'] = var14;
                var16 = _closure1_slot12;
                var14 = 35;
                var14 = var50[var14];
                var15 = var48.bind(var3)(var14);
                var14 = {};
                var19 = _closure1_slot12;
                var17 = 36;
                var17 = var50[var17];
                var17 = var51.bind(var3)(var17);
                var17 = var17.AppEntryKeyContext;
                var18 = var17.Provider;
                var17 = {};
                var23 = _closure2_slot1;
                var17['value'] = var23;
                var22 = _closure1_slot12;
                var21 = _closure1_slot21;
                var20 = {};
                var20['appEntryKey'] = var23;
                var25 = _closure1_slot12;
                var23 = 37;
                var23 = var50[var23];
                var23 = var51.bind(var3)(var23);
                var24 = var23.WebViewContextProvider;
                var23 = {};
                var28 = _closure1_slot12;
                var26 = 38;
                var26 = var50[var26];
                var26 = var51.bind(var3)(var26);
                var27 = var26.Router;
                var26 = {};
                var29 = 39;
                var29 = var50[var29];
                var30 = var48.bind(var3)(var29);
                var29 = var30.getHistory;
                var29 = var29.bind(var30)();
                var26['history'] = var29;
                var31 = _closure1_slot12;
                var30 = _closure1_slot17;
                var29 = {};
                var32 = 40;
                var32 = var50[var32];
                var33 = var48.bind(var3)(var32);
                var32 = {};
                var36 = _closure1_slot12;
                var34 = 41;
                var34 = var50[var34];
                var34 = var51.bind(var3)(var34);
                var35 = var34.PortalProvider;
                var34 = {};
                var39 = _closure1_slot12;
                var37 = 42;
                var37 = var50[var37];
                var37 = var48.bind(var3)(var37);
                var38 = var37.Component;
                var37 = {};
                var42 = _closure1_slot13;
                var40 = 43;
                var40 = var50[var40];
                var41 = var48.bind(var3)(var40);
                var40 = {};
                var45 = _closure1_slot12;
                var43 = 44;
                var43 = var50[var43];
                var44 = var48.bind(var3)(var43);
                var43 = {};
                var44 = var45.bind(var3)(var44, var43);
                var43 = new Array(2);
                var43[0] = var44;
                var49 = 45;
                var44 = var50[var49];
                var44 = var51.bind(var3)(var44);
                var45 = var44.SafeAreaProvider;
                var44 = {};
                var52 = _closure2_slot0;
                var46 = new Array(4);
                var46[0] = var52;
                var52 = _closure1_slot12;
                var49 = var50[var49];
                var49 = var51.bind(var3)(var49);
                var51 = var49.SafeAreaReporter;
                var49 = {};
                var49 = var52.bind(var3)(var51, var49);
                var46[1] = var49;
                var52 = _closure1_slot12;
                var49 = 46;
                var49 = var50[var49];
                var51 = var48.bind(var3)(var49);
                var49 = {};
                var49 = var52.bind(var3)(var51, var49);
                var46[2] = var49;
                var49 = _closure1_slot12;
                var47 = 47;
                var47 = var50[var47];
                var48 = var48.bind(var3)(var47);
                var47 = {};
                var47 = var49.bind(var3)(var48, var47);
                var46[3] = var47;
                var44['children'] = var46;
                var44 = var42.bind(var3)(var45, var44);
                var43[1] = var44;
                var40['children'] = var43;
                var40 = var42.bind(var3)(var41, var40);
                var37['children'] = var40;
                var37 = var39.bind(var3)(var38, var37);
                var34['children'] = var37;
                var34 = var36.bind(var3)(var35, var34);
                var32['children'] = var34;
                var32 = var31.bind(var3)(var33, var32);
                var29['children'] = var32;
                var29 = var31.bind(var3)(var30, var29);
                var26['children'] = var29;
                var26 = var28.bind(var3)(var27, var26);
                var23['children'] = var26;
                var23 = var25.bind(var3)(var24, var23);
                var20['children'] = var23;
                var20 = var22.bind(var3)(var21, var20);
                var17['children'] = var20;
                var17 = var19.bind(var3)(var18, var17);
                var14['children'] = var17;
                var14 = var16.bind(var3)(var15, var14);
                var11['children'] = var14;
                var11 = var13.bind(var3)(var12, var11);
                var8['children'] = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5['children'] = var8;
                var5 = var7.bind(var3)(var6, var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3 = var4.bind(var7)(var3);
        var4 = 50;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/AppContainer.tsx';
        var4 = var5.bind(var6)(var4);
        var2['default'] = var3;
        return var1;
    }
})();