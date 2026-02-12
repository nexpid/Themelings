// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function ConnectedCreateThreadHeaderButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var2 = var2.channelId;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStores;
            var7 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var4.bind(var6)(var3, var1);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot9;
            var3 = _closure1_slot14;
            var2 = {};
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function CreateThreadHeaderButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var8 = var2.channel;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.useCanStartThread;
            var2 = var2.bind(var3)(var8);
            var7 = _closure1_slot3;
            var4 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.navigateToThreadCreation;
                var3 = _closure2_slot0;
                var2 = 'Thread Browser Toolbar';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var7 = var4.bind(var7)(var1, var3);
            var1 = null;
            if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot9;
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 11;
            var2 = var8[var2];
            var2 = var12.bind(var5)(var2);
            var3 = var2.HeaderIconButton;
            var2 = {};
            var9 = 12;
            var10 = var8[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var8[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.rBIGBL;
            var9 = var10.bind(var11)(var9);
            var2['accessibilityLabel'] = var9;
            var2['onPress'] = var7;
            var7 = _closure1_slot1;
            var6 = 13;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var2['source'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function getHeaderLeft(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.navigation;
            var2 = var1.routeName;
            var1 = var1.initialRouteName;
            if(!(var1 !== var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getRenderModalBackImage;
            var1 = var1.bind(var2)(var4);
            _fun0003_ip = 8; continue _fun0003;
case 6:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.getRenderModalCloseImage;
            var1 = var2.bind(var3)(var4);
case 8:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var4 = global;
    var10 = var4.Object;
    var8 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var8 = 1;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.View;
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ChannelDetailsNavigatorScreens;
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AnalyticEvents;
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.SearchNavigatorScreens;
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot9 = var9;
    var8 = var8.jsxs;
    var _closure1_slot10 = var8;
    var9 = var4.Object;
    var8 = var9.freeze;
    var4 = {};
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.createNativeStackNavigator;
    var4 = var4.bind(var8)();
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var1 = var1.route;
            var2 = var1.params;
            var20 = var2.channelId;
            var _closure2_slot0 = var20;
            var19 = var2.applicationId;
            var17 = var2.search;
            var1 = var2.source;
            var _closure2_slot1 = var1;
            var8 = var2.initialRouteName;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var2 = _closure1_slot6;
            var8 = var2.DETAILS;
case 9:
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var5 = _closure1_slot3;
            var3 = var5.useEffect;
            var2 = new Array(3);
            var2[0] = var20;
            var2[1] = var8;
            var2[2] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var6 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var6)) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot7;
                    var2 = var1.CHANNEL_SIDEBAR_VIEWED;
                    var1 = {};
                    var7 = var6.id;
                    var1['channel_id'] = var7;
                    var7 = var6.getGuildId;
                    var7 = var7.bind(var6)();
                    var1['guild_id'] = var7;
                    var6 = var6.type;
                    var1['channel_type'] = var6;
                    var6 = _closure2_slot2;
                    var1['initial_route_name'] = var6;
                    var5 = _closure2_slot1;
                    var1['source'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var1 = var5.useChannelSettingsScreensStyles;
            var5 = var1.bind(var5)();
            _closure2_slot3 = var5;
            var10 = _closure1_slot3;
            var7 = var10.useMemo;
            var6 = new Array(1);
            var6[0] = var20;
            var1 = function() {
                var1 = {};
                var2 = {};
                var3 = _closure2_slot0;
                var2['channelId'] = var3;
                var1['initialParams'] = var2;
                return var1;
            };
            var15 = var7.bind(var10)(var1, var6);
            var1 = 16;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useAccessibilityNativeStackOptions;
            var14 = var1.bind(var2)();
            var2 = _closure1_slot5;
            var1 = var2.getChannel;
            var3 = var1.bind(var2)(var20);
            var1 = null;
            var2 = var1 == var3;
            var1 = undefined;
            if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var2 = var3.getGuildId;
            var1 = var2.bind(var3)();
case 13:
            _closure2_slot4 = var1;
            var6 = _closure1_slot3;
            var3 = var6.useMemo;
            var2 = new Array(3);
            var2[0] = var20;
            var2[1] = var1;
            var2[2] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var1 = {};
                    _fun0006_ip = 17; continue _fun0006;
case 15:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 15;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.getChannelSettingsScreens;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot3;
                    var1 = var5.bind(var6)(var4, var3, var2);
case 17:
                    return var1;
                }
            };
            var12 = var3.bind(var6)(var1, var2);
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 17;
            var1 = var21[var1];
            var3 = var18.bind(var4)(var1);
            var2 = var3.useNavigatorBackPressHandler;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.getRootNavigationRef;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var2 = var1 == var4;
                    if(var2) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                    var1 = var4.isReady;
                    var1 = var1.bind(var4)();
                    var2 = !var1;
case 18:
                    var1 = !var2;
                    if(var2) { _fun0007_ip = 20; continue _fun0007 }
case 6:
                    var2 = var4.canGoBack;
                    var2 = var2.bind(var4)();
                    var3 = !var2;
                    var2 = !var3;
                    if(var3) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var3 = var4.goBack;
                    var3 = var3.bind(var4)();
                    var2 = true;
case 21:
                    var1 = var2;
case 20:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = 19;
            var1 = var21[var1];
            var2 = var18.bind(var4)(var1);
            var1 = var2.useLocalHorizontalSafeArea;
            var1 = var1.bind(var2)();
            var10 = var1.left;
            var7 = var1.right;
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var5.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var6['paddingLeft'] = var10;
            var6['paddingRight'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var10 = _closure1_slot12;
            var6 = var10.Navigator;
            var5 = {};
            var13 = 'channel-details-navigator';
            var5['id'] = var13;
            var13 = {};
            var16 = 11;
            var16 = var21[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.renderGenericTitle;
            var13['headerTitle'] = var16;
            var23 = var13;
            var22 = var14;
            var14 = copyDataProperties(var23, var22);
            var5['screenOptions'] = var13;
            var5['initialRouteName'] = var8;
            var16 = _closure1_slot9;
            var13 = var10.Screen;
            var8 = {};
            var14 = {};
            var14['channelId'] = var20;
            var14['search'] = var17;
            var8['initialParams'] = var14;
            var14 = _closure1_slot6;
            var17 = var14.DETAILS;
            var8['name'] = var17;
            var17 = {};
            var18 = false;
            var17['headerShown'] = var18;
            var8['options'] = var17;
            var17 = function getComponent() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                return var1;
            };
            var8['getComponent'] = var17;
            var13 = var16.bind(var4)(var13, var8);
            var8 = new Array(6);
            var8[0] = var13;
            var17 = _closure1_slot9;
            var16 = var10.Screen;
            var13 = {};
            var18 = _closure1_slot8;
            var18 = var18.SEARCH_CHAT_PREVIEW;
            var13['name'] = var18;
            var18 = function options(arg1) {
                var1 = arg1;
                var3 = var1.route;
                var _closure3_slot0 = var3;
                var4 = var1.navigation;
                var1 = {};
                var3 = function header(arg1) {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var1 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var1);
                    var2 = var3.renderHeader;
                    var1 = {};
                    var8 = arg1;
                    var9 = var1;
                    var4 = copyDataProperties(var9, var8);
                    var4 = 21;
                    var4 = var7[var4];
                    var5 = var6.bind(var5)(var4);
                    var4 = var5.isAndroid;
                    var5 = var4.bind(var5)();
                    var4 = 'shouldHandleSafeArea';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['header'] = var3;
                var2 = function headerTitle() {
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure3_slot0;
                    var5 = var5.params;
                    var5 = var5.channelId;
                    var1['channelId'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerTitle'] = var2;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.getRenderBackImage;
                var2 = var2.bind(var3)(var4);
                var1['headerLeft'] = var2;
                return var1;
            };
            var13['options'] = var18;
            var18 = function getComponent() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                return var1;
            };
            var13['getComponent'] = var18;
            var13 = var17.bind(var4)(var16, var13);
            var8[1] = var13;
            var17 = _closure1_slot9;
            var16 = var10.Screen;
            var13 = {};
            var18 = var14.PINNED_MESSAGES;
            var13['name'] = var18;
            var18 = {};
            var18['channelId'] = var20;
            var13['initialParams'] = var18;
            var18 = function options(arg1) {
                var1 = arg1;
                var6 = var1.navigation;
                var5 = var1.route;
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 12;
                var7 = var10[var3];
                var4 = undefined;
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var3 = var10[var3];
                var3 = var9.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.mp1N/2;
                var3 = var7.bind(var8)(var3);
                var1['title'] = var3;
                var3 = _closure1_slot15;
                var2 = {};
                var2['navigation'] = var6;
                var6 = _closure2_slot2;
                var2['initialRouteName'] = var6;
                var5 = var5.name;
                var2['routeName'] = var5;
                var2 = var3.bind(var4)(var2);
                var1['headerLeft'] = var2;
                return var1;
            };
            var13['options'] = var18;
            var18 = function getComponent() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                return var1;
            };
            var13['getComponent'] = var18;
            var13 = var17.bind(var4)(var16, var13);
            var8[2] = var13;
            var17 = _closure1_slot9;
            var16 = var10.Screen;
            var13 = {};
            var18 = {};
            var18['channelId'] = var20;
            var18['applicationId'] = var19;
            var13['initialParams'] = var18;
            var18 = var14.MUTE;
            var13['name'] = var18;
            var18 = function options(arg1) {
                var1 = arg1;
                var6 = var1.navigation;
                var5 = var1.route;
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 12;
                var7 = var10[var3];
                var4 = undefined;
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var3 = var10[var3];
                var3 = var9.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.w4m945;
                var3 = var7.bind(var8)(var3);
                var1['title'] = var3;
                var3 = _closure1_slot15;
                var2 = {};
                var2['navigation'] = var6;
                var6 = _closure2_slot2;
                var2['initialRouteName'] = var6;
                var5 = var5.name;
                var2['routeName'] = var5;
                var2 = var3.bind(var4)(var2);
                var1['headerLeft'] = var2;
                return var1;
            };
            var13['options'] = var18;
            var18 = function getComponent() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                return var1;
            };
            var13['getComponent'] = var18;
            var13 = var17.bind(var4)(var16, var13);
            var8[3] = var13;
            var13 = _closure1_slot9;
            var11 = var10.Screen;
            var10 = {};
            var23 = var10;
            var22 = var15;
            var15 = copyDataProperties(var23, var22);
            var15 = var14.THREADS;
            var14 = 'name';
            var10[var14] = var15;
            var15 = function options(arg1) {
                var1 = arg1;
                var7 = var1.navigation;
                var6 = var1.route;
                var _closure3_slot0 = var6;
                var1 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 12;
                var8 = var11[var4];
                var5 = undefined;
                var8 = var10.bind(var5)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var4 = var11[var4];
                var4 = var10.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.B2panI;
                var4 = var8.bind(var9)(var4);
                var1['title'] = var4;
                var4 = _closure1_slot15;
                var3 = {};
                var3['navigation'] = var7;
                var7 = _closure2_slot2;
                var3['initialRouteName'] = var7;
                var6 = var6.name;
                var3['routeName'] = var6;
                var3 = var4.bind(var5)(var3);
                var1['headerLeft'] = var3;
                var2 = function headerRight() {
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot13;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var1 = var1.params;
                    var1 = var1.channelId;
                    var2['channelId'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1['headerRight'] = var2;
                return var1;
            };
            var14 = 'options';
            var10[var14] = var15;
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
            var14 = 'getComponent';
            var10[var14] = var15;
            var10 = var13.bind(var4)(var11, var10);
            var8[4] = var10;
            var10 = global;
            var11 = var10.Object;
            var10 = var11.entries;
            var11 = var10.bind(var11)(var12);
            var10 = var11.map;
            var9 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var7 = arg1;
                    var1 = var7[Symbol.iterator];
                    var7 = var1().next;
                    var3 = var7().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var4 = undefined;
                    if(var2) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                    var4 = var3;
case 23:
                    var _closure3_slot0 = var4;
                    var3 = undefined;
                    if(var2) { _fun0008_ip = 6; continue _fun0008 }
case 25:
                    var8 = var7().value;
                    var7 = var1;
                    var7 = var7 === var5;
                    var3 = undefined;
                    var2 = var7;
                    if(var7) { _fun0008_ip = 6; continue _fun0008 }
case 18:
                    var3 = var8;
                    var2 = var7;
case 6:
                    var _closure3_slot1 = var3;
                    if(var2) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var1.return();
case 26:
                    var3 = _closure1_slot9;
                    var1 = _closure1_slot12;
                    var2 = var1.Screen;
                    var1 = {};
                    var1['name'] = var4;
                    var7 = function options(arg1) {
                        var1 = arg1;
                        var5 = var1.navigation;
                        var1 = {};
                        var3 = _closure3_slot1;
                        var3 = var3.title;
                        var1['title'] = var3;
                        var4 = _closure1_slot15;
                        var3 = {};
                        var3['navigation'] = var5;
                        var5 = _closure2_slot2;
                        var3['initialRouteName'] = var5;
                        var2 = _closure3_slot0;
                        var3['routeName'] = var2;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var1['headerLeft'] = var2;
                        return var1;
                    };
                    var1['options'] = var7;
                    var6 = function children(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.route;
                            var4 = var2.navigation;
                            var3 = var1.params;
                            var1 = null;
                            if(!(var1 == var3)) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                            var3 = _closure1_slot11;
case 28:
                            var2 = _closure3_slot1;
                            var1 = var2.render;
                            var1 = var1.bind(var2)(var3, var4);
                            return var1;
                        }
                    };
                    var1['children'] = var6;
                    var1 = var3.bind(var5)(var2, var1, var4);
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9);
            var8[5] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();