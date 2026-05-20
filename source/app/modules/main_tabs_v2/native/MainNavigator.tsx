// app/modules/main_tabs_v2/native/MainNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var10 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var10;
        var _closure1_slot2 = var7;
        var1 = function getAuthComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot18 = var1;
        var1 = function getTabsComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot19 = var1;
        var1 = function getChannelComponent() {
            var1 = _closure1_slot5;
            return var1;
        };
        var _closure1_slot20 = var1;
        var1 = function WrappedAutoAnalytics() {
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.default;
            var2 = _closure1_slot10;
            var1 = {};
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        };
        var _closure1_slot21 = var1;
        var1 = function getMemberVerificationComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot22 = var1;
        var1 = function getFriendsNavigatorComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot23 = var1;
        var1 = function getYouComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot24 = var1;
        var1 = function getChannelDetailsComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot25 = var1;
        var1 = function getSearchComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot26 = var1;
        var1 = function getContextMenuCommandNavigatorComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot27 = var1;
        var1 = function getModalComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot28 = var1;
        var1 = function getMessageRequestsComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 22;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot29 = var1;
        var1 = function getSettingsComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 23;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot30 = var1;
        var1 = function getAccountStanding() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 24;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot31 = var1;
        var2 = function getChannelScreen() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arguments[0];
                var4 = undefined;
                if(!(var1 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var2 = _closure1_slot7;
                var1 = var2.animation;
case 2:
                var _closure2_slot0 = var1;
                var3 = _closure1_slot10;
                var1 = _closure1_slot16;
                var2 = var1.Screen;
                var1 = {};
                var7 = 'channel';
                var1['name'] = var7;
                var7 = {};
                var8 = function beforeRemove(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getBestActiveInput;
                        var2 = var2.bind(var3)();
                        var3 = null;
                        if(!(var3 != var2)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 26;
                        var2 = var9[var2];
                        var5 = var8.bind(var1)(var2);
                        var4 = var5.setKeyboardType;
                        var2 = {};
                        var6 = 27;
                        var6 = var9[var6];
                        var6 = var8.bind(var1)(var6);
                        var6 = var6.KeyboardTypes;
                        var6 = var6.SYSTEM;
                        var2['type'] = var6;
                        var2 = var4.bind(var5)(var2);
case 4:
                        var2 = arg1;
                        var2 = var2.data;
                        var4 = var3 == var2;
                        var8 = undefined;
                        if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var2 = var2.action;
                        var3 = var3 == var2;
                        var8 = undefined;
                        if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                        var8 = var2.type;
case 6:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 28;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.trackWithMetadata;
                        var2 = _closure1_slot8;
                        var3 = var2.CHANNEL_BACK_NAVIGATED;
                        var2 = {};
                        var6 = 'GO_BACK';
                        if(!(var6 !== var8)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var6 = _closure1_slot9;
                        var6 = var6.SWIPE;
                        _fun0003_ip = 11; continue _fun0003;
case 9:
                        var7 = _closure1_slot9;
                        var6 = var7.BACK_BUTTON;
case 11:
                        var2['source'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    }
                };
                var7['beforeRemove'] = var8;
                var1['listeners'] = var7;
                var6 = function options(arg1) {
                    var1 = arg1;
                    var6 = var1.navigation;
                    var5 = var1.route;
                    var1 = {};
                    var2 = true;
                    var1['headerShown'] = var2;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 29;
                    var9 = var8[var3];
                    var4 = undefined;
                    var9 = var7.bind(var4)(var9);
                    var9 = var9.renderHeader;
                    var1['header'] = var9;
                    var3 = var8[var3];
                    var4 = var7.bind(var4)(var3);
                    var3 = var4.getDefaultChannelStackHeaderProps;
                    var10 = var3.bind(var4)(var6, var5);
                    var11 = var1;
                    var3 = copyDataProperties(var11, var10);
                    var10 = _closure1_slot7;
                    var11 = var1;
                    var2 = copyDataProperties(var11, var10);
                    var3 = _closure2_slot0;
                    var2 = 'animation';
                    var1[1] = var3;
                    return var1;
                };
                var1['options'] = var6;
                var5 = _closure1_slot20;
                var1['getComponent'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot32 = var2;
        var5 = global;
        var11 = var5.Object;
        var9 = var11.defineProperty;
        var8 = {};
        var1 = true;
        var8['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var11)(var3, var1, var8);
        var1 = 0;
        var8 = var7[var1];
        var1 = undefined;
        var8 = var10.bind(var1)(var8);
        var _closure1_slot3 = var8;
        var14 = 1;
        var9 = var7[var14];
        var8 = metroImportAll;
        var8 = var8.bind(var1)(var9);
        var _closure1_slot4 = var8;
        var9 = 2;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = var9.View;
        var _closure1_slot5 = var9;
        var9 = 3;
        var9 = var7[var9];
        var9 = var10.bind(var1)(var9);
        var _closure1_slot6 = var9;
        var9 = 4;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var9 = var9.StackNavigationAnimationSettings;
        var _closure1_slot7 = var9;
        var9 = 5;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var11 = var9.AnalyticEvents;
        var _closure1_slot8 = var11;
        var9 = var9.DrawerSourceTypes;
        var _closure1_slot9 = var9;
        var9 = 6;
        var9 = var7[var9];
        var9 = var6.bind(var1)(var9);
        var11 = var9.jsx;
        var _closure1_slot10 = var11;
        var11 = var9.jsxs;
        var _closure1_slot11 = var11;
        var9 = var9.Fragment;
        var _closure1_slot12 = var9;
        var9 = 7;
        var9 = var7[var9];
        var12 = var6.bind(var1)(var9);
        var11 = var12.createStyles;
        var9 = {};
        var13 = {};
        var13['flex'] = var14;
        var9['flex'] = var13;
        var9 = var11.bind(var12)(var9);
        var _closure1_slot13 = var9;
        var9 = 8;
        var9 = var7[var9];
        var11 = var6.bind(var1)(var9);
        var9 = var11.isIOS;
        var9 = var9.bind(var11)();
        if(!var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var11 = 9;
        var11 = var7[var11];
        var12 = var6.bind(var1)(var11);
        var11 = var12.getSystemVersionMajor;
        var12 = var11.bind(var12)();
        var11 = 15;
        var9 = var12 <= var11;
case 12:
        var _closure1_slot14 = var9;
        var9 = 10;
        var9 = var7[var9];
        var11 = var6.bind(var1)(var9);
        var9 = var11.createNativeStackNavigator;
        var9 = var9.bind(var11)();
        var _closure1_slot15 = var9;
        var9 = 11;
        var9 = var7[var9];
        var9 = var10.bind(var1)(var9);
        var9 = var9.bind(var1)();
        var _closure1_slot16 = var9;
        var10 = var5.Object;
        var9 = var10.freeze;
        var5 = {};
        var11 = 'none';
        var5['animation'] = var11;
        var5 = var9.bind(var10)(var5);
        var _closure1_slot17 = var5;
        var5 = var8.memo;
        var4 = function StackNavigator() {
            var3 = _closure1_slot13;
            var8 = undefined;
            var11 = var3.bind(var8)();
            var _closure2_slot0 = var11;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 30;
            var5 = var12[var4];
            var6 = var3.bind(var8)(var5);
            var5 = var6.useScreenReaderEnabled;
            var5 = var5.bind(var6)();
            var4 = var12[var4];
            var5 = var3.bind(var8)(var4);
            var4 = var5.useAppKeyCommands;
            var4 = var4.bind(var5)();
            var5 = _closure1_slot1;
            var4 = 31;
            var4 = var12[var4];
            var4 = var5.bind(var8)(var4);
            var4 = var4.bind(var8)();
            var4 = 32;
            var4 = var12[var4];
            var9 = var3.bind(var8)(var4);
            var7 = var9.useStateFromStores;
            var4 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getSessionId;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var10 = var7.bind(var9)(var6, var4);
            var _closure2_slot1 = var10;
            var4 = _closure1_slot4;
            var7 = var4.useState;
            var6 = _closure1_slot7;
            var6 = var6.animation;
            var7 = var7.bind(var4)(var6);
            var6 = _closure1_slot3;
            var2 = 2;
            var6 = var6.bind(var8)(var7, var2);
            var2 = 0;
            var7 = var6[var2];
            var _closure2_slot2 = var7;
            var2 = 1;
            var2 = var6[var2];
            var _closure2_slot3 = var2;
            var2 = 33;
            var2 = var12[var2];
            var9 = var3.bind(var8)(var2);
            var6 = var9.useYouBarEnabled;
            var2 = 'stacknavigator';
            var6 = var6.bind(var9)(var2);
            var _closure2_slot4 = var6;
            var2 = 34;
            var2 = var12[var2];
            var13 = var3.bind(var8)(var2);
            var9 = var13.useHomeIndicatorStore;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.autoHideHomeIndicator;
                return var1;
            };
            var9 = var9.bind(var13)(var2);
            var _closure2_slot5 = var9;
            var2 = 35;
            var2 = var12[var2];
            var2 = var5.bind(var8)(var2);
            var2 = var2.bind(var8)();
            var5 = var2.isChatBesideChannelList;
            var _closure2_slot6 = var5;
            var2 = 36;
            var2 = var12[var2];
            var3 = var3.bind(var8)(var2);
            var2 = var3.useAccessibilityNativeStackOptions;
            var8 = var2.bind(var3)();
            var _closure2_slot7 = var8;
            var3 = var4.useMemo;
            var2 = new Array(7);
            var2[0] = var11;
            var2[1] = var10;
            var2[2] = var9;
            var2[3] = var8;
            var2[4] = var7;
            var2[5] = var6;
            var2[6] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot10;
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var21 = 37;
                    var1 = var14[var21];
                    var3 = undefined;
                    var2 = var13.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = var14[var21];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.Profiles;
                    var5 = var5.MainNavigator;
                    var1['profile'] = var5;
                    var7 = _closure1_slot11;
                    var5 = 38;
                    var5 = var14[var5];
                    var6 = var13.bind(var3)(var5);
                    var5 = {'style': null, 'nativeID': 'mainNavigator', 'collapsableChildren': false};
                    var8 = _closure2_slot0;
                    var8 = var8.flex;
                    var5['style'] = var8;
                    var12 = _closure1_slot10;
                    var8 = 39;
                    var8 = var14[var8];
                    var10 = var13.bind(var3)(var8);
                    var8 = {};
                    var11 = 40;
                    var11 = var14[var11];
                    var14 = var13.bind(var3)(var11);
                    var13 = {};
                    var15 = _closure2_slot1;
                    var16 = null;
                    if(!var15) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var18 = _closure1_slot10;
                    var17 = _closure1_slot21;
                    var15 = {};
                    var16 = var18.bind(var3)(var17, var15);
case 14:
                    var15 = new Array(2);
                    var15[0] = var16;
                    var18 = _closure1_slot10;
                    var17 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var16 = var19[var21];
                    var17 = var17.bind(var3)(var16);
                    var16 = {};
                    var20 = _closure1_slot0;
                    var19 = var19[var21];
                    var19 = var20.bind(var3)(var19);
                    var19 = var19.Profiles;
                    var19 = var19.StackNavigator;
                    var16['profile'] = var19;
                    var21 = _closure1_slot11;
                    var19 = _closure1_slot15;
                    var20 = var19.Navigator;
                    var19 = {};
                    var22 = 'root';
                    var19['id'] = var22;
                    var22 = function screenOptions() {
                        var1 = {};
                        var2 = false;
                        var1['headerShown'] = var2;
                        var3 = _closure2_slot5;
                        var1['autoHideHomeIndicator'] = var3;
                        var4 = _closure2_slot7;
                        var5 = var1;
                        var2 = copyDataProperties(var5, var4);
                        return var1;
                    };
                    var19['screenOptions'] = var22;
                    var25 = _closure1_slot10;
                    var22 = _closure1_slot15;
                    var24 = var22.Screen;
                    var22 = {};
                    var27 = 'main';
                    var22['name'] = var27;
                    var27 = _closure1_slot17;
                    var22['options'] = var27;
                    var27 = function children() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = _closure1_slot11;
                            var3 = _closure1_slot12;
                            var2 = {};
                            var1 = _closure1_slot16;
                            var7 = var1.Navigator;
                            var5 = {};
                            var1 = 'tabs';
                            var5['id'] = var1;
                            var8 = function screenOptions(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                    var1 = arg1;
                                    var5 = var1.navigation;
                                    var1 = {};
                                    var4 = _closure1_slot14;
                                    var6 = undefined;
                                    var3 = undefined;
                                    if(!var4) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                                    var3 = 'default';
case 16:
                                    var1['orientation'] = var3;
                                    var3 = false;
                                    var1['headerShown'] = var3;
                                    var4 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var3 = 29;
                                    var3 = var7[var3];
                                    var4 = var4.bind(var6)(var3);
                                    var3 = var4.getDefaultStackHeaderProps;
                                    var8 = var3.bind(var4)(var5);
                                    var9 = var1;
                                    var3 = copyDataProperties(var9, var8);
                                    var8 = _closure1_slot7;
                                    var9 = var1;
                                    var2 = copyDataProperties(var9, var8);
                                    var8 = _closure2_slot7;
                                    var9 = var1;
                                    var2 = copyDataProperties(var9, var8);
                                    return var1;
                                }
                            };
                            var5['screenOptions'] = var8;
                            var10 = _closure1_slot10;
                            var8 = _closure1_slot16;
                            var9 = var8.Screen;
                            var8 = {};
                            var8['name'] = var1;
                            var1 = _closure1_slot19;
                            var8['getComponent'] = var1;
                            var1 = _closure1_slot17;
                            var8['options'] = var1;
                            var1 = undefined;
                            var9 = var10.bind(var1)(var9, var8);
                            var8 = new Array(4);
                            var8[0] = var9;
                            var14 = _closure1_slot10;
                            var9 = _closure1_slot16;
                            var12 = var9.Screen;
                            var9 = {};
                            var10 = 'member-verification';
                            var9['name'] = var10;
                            var10 = _closure1_slot22;
                            var9['getComponent'] = var10;
                            var15 = {'presentation': 'transparentModal', 'animation': 'slide_from_bottom'};
                            var11 = _closure2_slot7;
                            var18 = var15;
                            var17 = var11;
                            var16 = copyDataProperties(var18, var17);
                            var9['options'] = var15;
                            var9 = var14.bind(var1)(var12, var9);
                            var8[1] = var9;
                            var12 = _closure1_slot32;
                            var9 = null;
                            var14 = var9 == var11;
                            var11 = undefined;
                            if(var14) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                            var14 = _closure2_slot7;
                            var11 = var14.animation;
case 18:
                            if(!(var9 == var11)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                            var11 = _closure2_slot2;
case 20:
                            var11 = var12.bind(var1)(var11);
                            var8[2] = var11;
                            var10 = _closure2_slot4;
                            var9 = null;
                            if(var10) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                            var12 = _closure1_slot10;
                            var10 = _closure1_slot16;
                            var11 = var10.Screen;
                            var10 = {};
                            var14 = 'settings';
                            var10['name'] = var14;
                            var13 = function options(arg1) {
                                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                    var1 = arg1;
                                    var2 = var1.route;
                                    var1 = {};
                                    var3 = var2.params;
                                    var2 = null;
                                    var5 = var2 != var3;
                                    var4 = 'slide_from_right';
                                    var2 = var4;
                                    if(!var5) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                                    var3 = var3.isRootScreen;
                                    var2 = var4;
                                    if(!var3) { _fun0007_ip = 24; continue _fun0007 }
case 26:
                                    var2 = 'slide_from_bottom';
case 24:
                                    var1['animation'] = var2;
                                    var2 = false;
                                    var1['headerShown'] = var2;
                                    var6 = _closure2_slot7;
                                    var7 = var1;
                                    var2 = copyDataProperties(var7, var6);
                                    return var1;
                                }
                            };
                            var10['options'] = var13;
                            var13 = _closure1_slot30;
                            var10['getComponent'] = var13;
                            var9 = var12.bind(var1)(var11, var10);
case 22:
                            var8[3] = var9;
                            var5['children'] = var8;
                            var7 = var4.bind(var1)(var7, var5);
                            var5 = new Array(2);
                            var5[0] = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 41;
                            var6 = var8[var6];
                            var6 = var7.bind(var1)(var6);
                            var6 = var6.APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO;
                            var5[1] = var6;
                            var2['children'] = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var22['children'] = var27;
                    var24 = var25.bind(var3)(var24, var22);
                    var22 = new Array(11);
                    var22[0] = var24;
                    var27 = _closure1_slot10;
                    var24 = _closure1_slot15;
                    var25 = var24.Screen;
                    var24 = {};
                    var28 = 'search';
                    var24['name'] = var28;
                    var28 = _closure1_slot26;
                    var24['getComponent'] = var28;
                    var24 = var27.bind(var3)(var25, var24);
                    var22[1] = var24;
                    var27 = _closure1_slot10;
                    var24 = _closure1_slot15;
                    var25 = var24.Screen;
                    var24 = {};
                    var28 = 'auth';
                    var24['name'] = var28;
                    var28 = _closure1_slot18;
                    var24['getComponent'] = var28;
                    var28 = _closure1_slot17;
                    var24['options'] = var28;
                    var24 = var27.bind(var3)(var25, var24);
                    var22[2] = var24;
                    var27 = _closure1_slot10;
                    var24 = _closure1_slot15;
                    var25 = var24.Screen;
                    var24 = {};
                    var28 = 'account-standing';
                    var24['name'] = var28;
                    var28 = _closure1_slot31;
                    var24['getComponent'] = var28;
                    var28 = {'presentation': 'fullScreenModal', 'gestureEnabled': false};
                    var32 = _closure1_slot17;
                    var33 = var28;
                    var29 = copyDataProperties(var33, var32);
                    var24['options'] = var28;
                    var24 = var27.bind(var3)(var25, var24);
                    var22[3] = var24;
                    var25 = _closure2_slot4;
                    var24 = null;
                    if(!var25) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var28 = _closure1_slot10;
                    var25 = _closure1_slot15;
                    var27 = var25.Screen;
                    var25 = {};
                    var29 = 'you';
                    var25['name'] = var29;
                    var29 = function options() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = {};
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var3 = 42;
                            var3 = var7[var3];
                            var4 = undefined;
                            var5 = var5.bind(var4)(var3);
                            var6 = _closure1_slot0;
                            var3 = 9;
                            var3 = var7[var3];
                            var6 = var6.bind(var4)(var3);
                            var3 = var6.isIpadOS;
                            var3 = var3.bind(var6)();
                            if(var3) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 8;
                            var3 = var7[var3];
                            var6 = var6.bind(var4)(var3);
                            var3 = var6.isAndroid;
                            var6 = var3.bind(var6)();
                            var3 = undefined;
                            if(!var6) { _fun0008_ip = 7; continue _fun0008 }
case 31:
                            var6 = _closure2_slot6;
                            var3 = undefined;
                            if(!var6) { _fun0008_ip = 7; continue _fun0008 }
case 32:
                            var6 = {};
                            var7 = 'transparentModal';
                            var6['presentation'] = var7;
                            var3 = var6;
case 7:
                            _fun0008_ip = 33; continue _fun0008;
case 29:
                            var6 = {};
                            var7 = 'modal';
                            var6['presentation'] = var7;
                            var3 = var6;
case 33:
                            var8 = var5.bind(var4)(var3);
                            var9 = var1;
                            var3 = copyDataProperties(var9, var8);
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 8;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.isAndroid;
                            var2 = var2.bind(var3)();
                            var3 = undefined;
                            if(!var2) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                            var2 = _closure2_slot6;
                            var3 = undefined;
                            if(!var2) { _fun0008_ip = 34; continue _fun0008 }
case 36:
                            var2 = {};
                            var4 = 'transparent';
                            var2['backgroundColor'] = var4;
                            var3 = var2;
case 34:
                            var2 = 'contentStyle';
                            var1[1] = var3;
                            var3 = 'slide_from_bottom';
                            var2 = 'animation';
                            var1[1] = var3;
                            return var1;
                        }
                    };
                    var25['options'] = var29;
                    var29 = _closure1_slot24;
                    var25['getComponent'] = var29;
                    var24 = var28.bind(var3)(var27, var25);
case 27:
                    var22[4] = var24;
                    var27 = _closure1_slot10;
                    var24 = _closure1_slot15;
                    var25 = var24.Screen;
                    var24 = {};
                    var28 = 'friends';
                    var24['name'] = var28;
                    var28 = function options(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.route;
                            var1 = {};
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 42;
                            var3 = var5[var3];
                            var5 = undefined;
                            var6 = var4.bind(var5)(var3);
                            var3 = {};
                            var7 = var2.params;
                            var4 = null;
                            var9 = var4 == var7;
                            var8 = undefined;
                            if(var9) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                            var7 = var7.params;
                            var9 = var4 == var7;
                            var8 = undefined;
                            if(var9) { _fun0009_ip = 37; continue _fun0009 }
case 39:
                            var8 = var7.presentation;
case 37:
                            var9 = var4 != var8;
                            var7 = 'modal';
                            if(!var9) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                            var7 = var8;
case 40:
                            var3['presentation'] = var7;
                            var10 = var6.bind(var5)(var3);
                            var11 = var1;
                            var3 = copyDataProperties(var11, var10);
                            var2 = var2.params;
                            var6 = var4 == var2;
                            var3 = undefined;
                            if(var6) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                            var2 = var2.params;
                            var4 = var4 == var2;
                            var3 = undefined;
                            if(var4) { _fun0009_ip = 42; continue _fun0009 }
case 44:
                            var3 = var2.presentation;
case 42:
                            var2 = 'card';
                            var3 = var2 === var3;
                            var2 = 'fullScreenGestureEnabled';
                            var1[1] = var3;
                            return var1;
                        }
                    };
                    var24['options'] = var28;
                    var28 = {};
                    var30 = _closure1_slot0;
                    var31 = _closure1_slot2;
                    var29 = 8;
                    var29 = var31[var29];
                    var30 = var30.bind(var3)(var29);
                    var29 = var30.isAndroid;
                    var30 = var29.bind(var30)();
                    var29 = undefined;
                    if(var30) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var29 = function() {
                        var3 = _closure2_slot3;
                        var1 = undefined;
                        var2 = 'none';
                        var2 = var3.bind(var1)(var2);
                        var2 = global;
                        var4 = var2.setTimeout;
                        var2 = _closure1_slot7;
                        var3 = var2.duration;
                        var2 = function() {
                            var3 = _closure2_slot3;
                            var1 = _closure1_slot7;
                            var2 = var1.animation;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var4.bind(var1)(var2, var3);
                        return var1;
                    };
case 45:
                    var28['beforeRemove'] = var29;
                    var24['listeners'] = var28;
                    var28 = _closure1_slot23;
                    var24['getComponent'] = var28;
                    var24 = var27.bind(var3)(var25, var24);
                    var22[5] = var24;
                    var23 = _closure2_slot4;
                    var11 = null;
                    if(!var23) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var25 = _closure1_slot10;
                    var23 = _closure1_slot15;
                    var24 = var23.Screen;
                    var23 = {};
                    var27 = 'settings';
                    var23['name'] = var27;
                    var27 = function options() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = {};
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 42;
                            var3 = var6[var3];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var3);
                            var5 = _closure1_slot0;
                            var2 = 9;
                            var2 = var6[var2];
                            var5 = var5.bind(var4)(var2);
                            var2 = var5.isIpadOS;
                            var5 = var2.bind(var5)();
                            var2 = undefined;
                            if(!var5) { _fun0010_ip = 49; continue _fun0010 }
case 50:
                            var5 = {};
                            var6 = 'modal';
                            var5['presentation'] = var6;
                            var2 = var5;
case 49:
                            var7 = var3.bind(var4)(var2);
                            var8 = var1;
                            var2 = copyDataProperties(var8, var7);
                            var3 = 'slide_from_bottom';
                            var2 = 'animation';
                            var1[1] = var3;
                            var3 = true;
                            var2 = 'fullScreenGestureEnabled';
                            var1[1] = var3;
                            var7 = _closure2_slot7;
                            var8 = var1;
                            var2 = copyDataProperties(var8, var7);
                            return var1;
                        }
                    };
                    var23['options'] = var27;
                    var27 = _closure1_slot30;
                    var23['getComponent'] = var27;
                    var11 = var25.bind(var3)(var24, var23);
case 47:
                    var22[6] = var11;
                    var24 = _closure1_slot10;
                    var11 = _closure1_slot15;
                    var23 = var11.Screen;
                    var11 = {};
                    var25 = 'sidebar';
                    var11['name'] = var25;
                    var25 = _closure1_slot25;
                    var11['getComponent'] = var25;
                    var25 = function options() {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 42;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var4 = false;
                        var1['lockOrientation'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var11['options'] = var25;
                    var11 = var24.bind(var3)(var23, var11);
                    var22[7] = var11;
                    var25 = _closure1_slot10;
                    var11 = _closure1_slot15;
                    var24 = var11.Screen;
                    var23 = {};
                    var11 = 'message-requests';
                    var23['name'] = var11;
                    var28 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var27 = 42;
                    var29 = var11[var27];
                    var29 = var28.bind(var3)(var29);
                    var29 = var29.bind(var3)();
                    var23['options'] = var29;
                    var29 = _closure1_slot29;
                    var23['getComponent'] = var29;
                    var23 = var25.bind(var3)(var24, var23);
                    var22[8] = var23;
                    var25 = _closure1_slot10;
                    var23 = _closure1_slot15;
                    var24 = var23.Screen;
                    var23 = {};
                    var29 = 'context-menu-commands';
                    var23['name'] = var29;
                    var27 = var11[var27];
                    var27 = var28.bind(var3)(var27);
                    var27 = var27.bind(var3)();
                    var23['options'] = var27;
                    var27 = _closure1_slot27;
                    var23['getComponent'] = var27;
                    var23 = var25.bind(var3)(var24, var23);
                    var22[9] = var23;
                    var25 = _closure1_slot10;
                    var23 = _closure1_slot15;
                    var24 = var23.Screen;
                    var23 = {};
                    var27 = 'modal';
                    var23['name'] = var27;
                    var26 = function options(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var1 = arg1;
                            var6 = var1.route;
                            var1 = {};
                            var2 = var6.params;
                            var2 = var2.fullScreenGestureEnabled;
                            var1['fullScreenGestureEnabled'] = var2;
                            var2 = var6.params;
                            var3 = var2.animation;
                            var7 = null;
                            var4 = var7 != var3;
                            var2 = 'slide_from_bottom';
                            if(!var4) { _fun0011_ip = 50; continue _fun0011 }
case 38:
                            var2 = var3;
case 50:
                            var1['animation'] = var2;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 42;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var5 = var6.params;
                            var10 = var5.presentation;
                            var8 = 'transparentModal';
                            var9 = 'card';
                            var5 = var8;
                            if(!(var9 !== var10)) { _fun0011_ip = 51; continue _fun0011 }
case 7:
                            var6 = var6.params;
                            var6 = var6.presentation;
                            var7 = var7 != var6;
                            var5 = var8;
                            if(!var7) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                            var5 = var6;
case 51:
                            var2['presentation'] = var5;
                            var11 = var3.bind(var4)(var2);
                            var12 = var1;
                            var2 = copyDataProperties(var12, var11);
                            return var1;
                        }
                    };
                    var23['options'] = var26;
                    var26 = _closure1_slot28;
                    var23['getComponent'] = var26;
                    var23 = var25.bind(var3)(var24, var23);
                    var22[10] = var23;
                    var19['children'] = var22;
                    var19 = var21.bind(var3)(var20, var19);
                    var16['children'] = var19;
                    var16 = var18.bind(var3)(var17, var16);
                    var15[1] = var16;
                    var13['children'] = var15;
                    var13 = var7.bind(var3)(var14, var13);
                    var8['children'] = var13;
                    var10 = var12.bind(var3)(var10, var8);
                    var8 = new Array(4);
                    var8[0] = var10;
                    var10 = _closure1_slot0;
                    var9 = 41;
                    var12 = var11[var9];
                    var12 = var10.bind(var3)(var12);
                    var12 = var12.APP_EXTRA_COMPONENTS;
                    var8[1] = var12;
                    var12 = var11[var9];
                    var12 = var10.bind(var3)(var12);
                    var12 = var12.APP_EXTRA_COMPONENTS_NEVER_FREEZE;
                    var8[2] = var12;
                    var9 = var11[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.APP_EXTRA_COMPONENTS_EXTERNAL_PIP;
                    var8[3] = var9;
                    var5['children'] = var8;
                    var5 = var7.bind(var3)(var6, var5);
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var4 = var5.bind(var8)(var4);
        var5 = 43;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/main_tabs_v2/native/MainNavigator.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var4 = 'mainNavigator';
        var3['MAIN_NAVIGATOR_ID'] = var4;
        var3['getChannelScreen'] = var2;
        return var1;
    }
})();