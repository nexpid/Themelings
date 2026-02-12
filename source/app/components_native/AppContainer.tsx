// app/components_native/AppContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var12 = require;
        var15 = metroImportDefault;
        var14 = exports;
        var13 = dependencyMap;
        var1 = global;
        var _closure1_slot0 = var1;
        var5 = var12;
        var _closure1_slot1 = var12;
        var4 = var15;
        var _closure1_slot2 = var15;
        var2 = var14;
        var6 = var13;
        var _closure1_slot3 = var13;
        var1 = undefined;
        var7 = undefined;
        var8 = function GestureWrapper(arg1) {
            var1 = arg1;
            var5 = var1.children;
            var2 = _closure1_slot12;
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
            var3 = _closure1_slot10;
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
        var _closure1_slot19 = var8;
        var8 = function handleNavigationOnReady() {
            var4 = _closure1_slot2;
            var6 = _closure1_slot3;
            var1 = 12;
            var3 = var6[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.flush;
            var3 = var3.bind(var4)();
            var5 = _closure1_slot1;
            var3 = 13;
            var3 = var6[var3];
            var3 = var5.bind(var1)(var3);
            var4 = var3.ComponentDispatch;
            var3 = var4.dispatch;
            var2 = _closure1_slot9;
            var2 = var2.NAVIGATOR_READY;
            var2 = var3.bind(var4)(var2);
            var2 = 14;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var4 = var2.routingInstrumentation;
            var3 = var4.registerNavigationContainer;
            var2 = 15;
            var2 = var6[var2];
            var5 = var5.bind(var1)(var2);
            var2 = var5.getRootNavigationRef;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure1_slot20 = var8;
        var8 = function AppNavigationContainer(arg1) {
            var2 = arg1;
            var5 = var2.children;
            var3 = _closure1_slot2;
            var11 = _closure1_slot3;
            var2 = 21;
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
                    var8 = 22;
                    var4 = var4[var8];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.coerceMessagesRoute;
                    var4 = var4.bind(var5)(var6);
                    if(!(var3 == var4)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var7 = var7.bind(var1)(var5);
                    var5 = var7.coerceGuildsRoute;
                    var4 = var5.bind(var7)(var6);
case 7:
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
                    var5 = _closure1_slot8;
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
                    var6 = var5.bind(var1)(var6, var4);
                    var5 = _closure1_slot4;
                    var4 = 2;
                    var5 = var5.bind(var1)(var6, var4);
                    var4 = 0;
                    var7 = var5[var4];
                    var4 = 1;
                    var6 = var5[var4];
                    var3 = var3 != var6;
                    if(!var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var5 = _closure1_slot7;
                    var4 = var5.getChannelId;
                    var4 = var4.bind(var5)();
                    var3 = var6 !== var4;
case 13:
                    if(!var3) { _fun0003_ip = 4; continue _fun0003 }
case 15:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 20;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.selectChannel;
                    var3 = {};
                    var3['guildId'] = var7;
                    var3['channelId'] = var6;
                    var6 = 'Navigation Fix';
                    var3['source'] = var6;
                    var3 = var4.bind(var5)(var3);
case 4:
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
                    if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var8 = var1.routes;
                    var2 = 0;
                    var2 = var8[var2];
                    var5 = var5 == var2;
                    var6 = undefined;
                    if(var5) { _fun0004_ip = 16; continue _fun0004 }
case 18:
                    var6 = var2.name;
case 16:
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
                    if(var3) { _fun0005_ip = 19; continue _fun0005 }
case 20:
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
                            if(!(var3 != var4)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                            var3 = var4.isReady;
                            var3 = var3.bind(var4)();
                            if(!var3) { _fun0006_ip = 21; continue _fun0006 }
case 23:
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
case 21:
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
case 19:
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
            var3 = _closure1_slot10;
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
            var8 = _closure1_slot20;
            var1['onReady'] = var8;
            var1['onStateChange'] = var7;
            var1['initialState'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot21 = var8;
        var8 = function ShareNavigationContainer(arg1) {
            var1 = arg1;
            var5 = var1.children;
            var3 = _closure1_slot2;
            var7 = _closure1_slot3;
            var2 = 21;
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
            var3 = _closure1_slot10;
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
        var _closure1_slot22 = var8;
        var8 = function AppNavigationContainerOrEmpty(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var2 = var1.children;
                var4 = var1.appEntryKey;
                var1 = 'main';
                if(!(var1 !== var4)) { _fun0007_ip = 6; continue _fun0007 }
case 24:
                var3 = 'share';
                var1 = var2;
                if(!(var3 === var4)) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                var6 = _closure1_slot10;
                var5 = _closure1_slot22;
                var4 = {};
                var4['children'] = var2;
                var3 = undefined;
                var1 = var6.bind(var3)(var5, var4);
case 25:
                _fun0007_ip = 27; continue _fun0007;
case 6:
                var5 = _closure1_slot10;
                var4 = _closure1_slot21;
                var3 = {};
                var3['children'] = var2;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
case 27:
                return var1;
            }
        };
        var _closure1_slot23 = var8;
        var8 = global;
        var11 = var8.Object;
        var10 = var11.defineProperty;
        var9 = {};
        var8 = true;
        var9['value'] = var8;
        var8 = '__esModule';
        var8 = var10.bind(var11)(var14, var8, var9);
        var8 = 0;
        var8 = var13[var8];
        var8 = var15.bind(var1)(var8);
        var _closure1_slot4 = var8;
        var14 = 1;
        var9 = var13[var14];
        var8 = metroImportAll;
        var8 = var8.bind(var1)(var9);
        var _closure1_slot5 = var8;
        var8 = 2;
        var8 = var13[var8];
        var8 = var12.bind(var1)(var8);
        var9 = var8.NativeModules;
        var8 = var8.Platform;
        var8 = 3;
        var8 = var13[var8];
        var8 = var12.bind(var1)(var8);
        var8 = var8.handleHistoryStoreNavigationChange;
        var _closure1_slot6 = var8;
        var8 = 4;
        var8 = var13[var8];
        var8 = var15.bind(var1)(var8);
        var _closure1_slot7 = var8;
        var8 = 5;
        var8 = var13[var8];
        var8 = var12.bind(var1)(var8);
        var9 = var8.AnalyticEvents;
        var _closure1_slot8 = var9;
        var8 = var8.ComponentActions;
        var _closure1_slot9 = var8;
        var8 = 6;
        var8 = var13[var8];
        var8 = var12.bind(var1)(var8);
        var9 = var8.jsx;
        var7 = var9;
        var _closure1_slot10 = var9;
        var8 = var8.jsxs;
        var _closure1_slot11 = var8;
        var8 = 7;
        var8 = var13[var8];
        var10 = var12.bind(var1)(var8);
        var9 = var10.createStyles;
        var8 = {};
        var11 = {};
        var11['flex'] = var14;
        var8['flex'] = var11;
        var11 = {};
        var14 = 8;
        var14 = var13[var14];
        var14 = var15.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.ANDROID_NAVIGATION_BAR_BACKGROUND;
        var11['backgroundColor'] = var14;
        var8['rootBackgroundColor'] = var11;
        var8 = var9.bind(var10)(var8);
        var _closure1_slot12 = var8;
        var8 = 9;
        var9 = var13[var8];
        var11 = var12.bind(var1)(var9);
        var10 = var11.configureReanimatedLogger;
        var9 = {};
        var8 = var13[var8];
        var8 = var12.bind(var1)(var8);
        var8 = var8.ReanimatedLogLevel;
        var8 = var8.error;
        var9['level'] = var8;
        var8 = false;
        var9['strict'] = var8;
        var9 = var10.bind(var11)(var9);
case 28: // try_start_0
        var10 = var5;
        var11 = var6;
        var9 = 16;
        var9 = var11[var9];
        var10 = var10.bind(var1)(var9);
        var9 = var10.enableFreeze;
        var9 = var9.bind(var10)();
case 29: // try_end0
        _fun0001_ip = 30; continue _fun0001;
case 31: // catch_target0
        CatchBlockStart(arg_register=8);
case 30:
        var9 = 17;
        var9 = var6[var9];
        var11 = var5.bind(var1)(var9);
        var10 = var11.setDesignConfig;
        var9 = {};
        var12 = 18;
        var12 = var6[var12];
        var12 = var5.bind(var1)(var12);
        var12 = var12.useTrackNavigatorScreenImpression;
        var9['useTrackNavigatorScreenImpression'] = var12;
        var9 = var10.bind(var11)(var9);
        var _closure1_slot13 = var8;
        var8 = {};
        var9 = 'function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}';
        var8['code'] = var9;
        var _closure1_slot14 = var8;
        var9 = var7;
        var7 = var4;
        var4 = 28;
        var4 = var6[var4];
        var8 = var7.bind(var1)(var4);
        var4 = {};
        var4 = var9.bind(var1)(var8, var4);
        var _closure1_slot15 = var4;
        var4 = 29;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.SafeAreaReporter;
        var4 = {};
        var4 = var9.bind(var1)(var8, var4);
        var _closure1_slot16 = var4;
        var4 = 30;
        var4 = var6[var4];
        var8 = var7.bind(var1)(var4);
        var4 = {};
        var4 = var9.bind(var1)(var8, var4);
        var _closure1_slot17 = var4;
        var4 = 31;
        var4 = var6[var4];
        var8 = var7.bind(var1)(var4);
        var4 = {};
        var4 = var9.bind(var1)(var8, var4);
        var _closure1_slot18 = var4;
        var4 = 48;
        var4 = var6[var4];
        var7 = var7.bind(var1)(var4);
        var4 = var7.profiledRootComponent;
        var3 = function AppContainer(arg1) {
            var2 = arg1;
            var48 = var2.children;
            var20 = var2.appEntryKey;
            var42 = _closure1_slot1;
            var46 = _closure1_slot3;
            var2 = 32;
            var2 = var46[var2];
            var4 = undefined;
            var5 = var42.bind(var4)(var2);
            var3 = var5.useRequestGatewaySocket;
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var2 = 'AppContainer:';
            var2 = var6.bind(var2)(var20);
            var2 = var3.bind(var5)(var2);
            var6 = _closure1_slot5;
            var5 = var6.useEffect;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot13;
                    if(var3) { _fun0008_ip = 32; continue _fun0008 }
case 33:
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
                    var6 = _closure1_slot14;
                    var1['__initData'] = var6;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var3)();
                    var1 = true;
                    _closure1_slot13 = var1;
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var2 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot5;
            var5 = var6.useEffect;
            var3 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = new Array(0);
            var2 = var5.bind(var6)(var3, var2);
            var1 = function useManaContextProviderValue() {
                var6 = _closure1_slot1;
                var8 = _closure1_slot3;
                var3 = 46;
                var3 = var8[var3];
                var4 = undefined;
                var7 = var6.bind(var4)(var3);
                var3 = var7.useRiveRendererExperiment;
                var5 = 'AppContainer';
                var7 = var3.bind(var7)(var5);
                var _closure3_slot0 = var7;
                var3 = 47;
                var3 = var8[var3];
                var4 = var6.bind(var4)(var3);
                var3 = var4.useRiveBase64ImageExperiment;
                var3 = var3.bind(var4)(var5);
                var _closure3_slot1 = var3;
                var6 = _closure1_slot5;
                var5 = var6.useMemo;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var3;
                var3 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = new Array(0);
                        var3 = _closure3_slot0;
                        if(!var3) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                        var4 = var1.push;
                        var3 = 'rive-mobile-renderer';
                        var3 = var4.bind(var1)(var3);
case 34:
                        var2 = _closure3_slot1;
                        if(!var2) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                        var3 = var1.push;
                        var2 = 'rive-mobile-base64-image';
                        var2 = var3.bind(var1)(var2);
case 36:
                        return var1;
                    }
                };
                var5 = var5.bind(var6)(var3, var4);
                var _closure3_slot2 = var5;
                var4 = _closure1_slot5;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var1 = {};
                    var2 = {};
                    var3 = _closure3_slot2;
                    var2['enabledExperiments'] = var3;
                    var1['experiments'] = var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var14 = var1.bind(var4)();
            var3 = _closure1_slot10;
            var45 = _closure1_slot2;
            var5 = 33;
            var1 = var46[var5];
            var2 = var45.bind(var4)(var1);
            var1 = {};
            var5 = var46[var5];
            var5 = var42.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.AppContainer;
            var1['profile'] = var5;
            var7 = _closure1_slot10;
            var5 = 34;
            var5 = var46[var5];
            var5 = var42.bind(var4)(var5);
            var6 = var5.ReanimatedScreenProvider;
            var5 = {};
            var10 = _closure1_slot10;
            var8 = 35;
            var8 = var46[var8];
            var8 = var42.bind(var4)(var8);
            var9 = var8.RootThemeContextProvider;
            var8 = {};
            var13 = _closure1_slot10;
            var11 = 36;
            var11 = var46[var11];
            var11 = var42.bind(var4)(var11);
            var12 = var11.ManaContextProvider;
            var11 = {};
            var11['value'] = var14;
            var16 = _closure1_slot10;
            var14 = 37;
            var14 = var46[var14];
            var15 = var45.bind(var4)(var14);
            var14 = {};
            var19 = _closure1_slot10;
            var18 = _closure1_slot23;
            var17 = {};
            var17['appEntryKey'] = var20;
            var22 = _closure1_slot10;
            var20 = 38;
            var20 = var46[var20];
            var20 = var42.bind(var4)(var20);
            var21 = var20.WebViewContextProvider;
            var20 = {};
            var25 = _closure1_slot10;
            var23 = 39;
            var23 = var46[var23];
            var23 = var42.bind(var4)(var23);
            var24 = var23.Router;
            var23 = {};
            var26 = 40;
            var26 = var46[var26];
            var27 = var45.bind(var4)(var26);
            var26 = var27.getHistory;
            var26 = var26.bind(var27)();
            var23['history'] = var26;
            var28 = _closure1_slot10;
            var27 = _closure1_slot19;
            var26 = {};
            var29 = 41;
            var29 = var46[var29];
            var30 = var45.bind(var4)(var29);
            var29 = {};
            var33 = _closure1_slot10;
            var31 = 42;
            var31 = var46[var31];
            var31 = var42.bind(var4)(var31);
            var32 = var31.PortalProvider;
            var31 = {};
            var36 = _closure1_slot10;
            var34 = 43;
            var34 = var46[var34];
            var34 = var45.bind(var4)(var34);
            var35 = var34.Component;
            var34 = {};
            var39 = _closure1_slot11;
            var37 = 44;
            var37 = var46[var37];
            var38 = var45.bind(var4)(var37);
            var37 = {};
            var41 = _closure1_slot15;
            var40 = new Array(2);
            var40[0] = var41;
            var43 = _closure1_slot10;
            var41 = 29;
            var41 = var46[var41];
            var41 = var42.bind(var4)(var41);
            var42 = var41.SafeAreaProvider;
            var41 = {};
            var44 = 45;
            var44 = var46[var44];
            var45 = var45.bind(var4)(var44);
            var44 = {};
            var46 = new Array(4);
            var46[0] = var48;
            var48 = _closure1_slot16;
            var46[1] = var48;
            var48 = _closure1_slot17;
            var46[2] = var48;
            var47 = _closure1_slot18;
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
            var29['children'] = var31;
            var29 = var28.bind(var4)(var30, var29);
            var26['children'] = var29;
            var26 = var28.bind(var4)(var27, var26);
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
        var4 = 49;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'components_native/AppContainer.tsx';
        var4 = var5.bind(var6)(var4);
        var2['default'] = var3;
        return var1;
    }
})();