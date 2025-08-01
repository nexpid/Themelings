// app/modules/main_tabs_v2/native/MainNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var11;
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
        var _closure1_slot20 = var1;
        var1 = function getOldMainComponent() {
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'Deprecated mobile UI, slated for deletion.';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        };
        var _closure1_slot21 = var1;
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
        var _closure1_slot22 = var1;
        var1 = function getChannelComponent() {
            var1 = _closure1_slot5;
            return var1;
        };
        var _closure1_slot23 = var1;
        var1 = function WrappedAutoAnalytics() {
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.default;
            var2 = _closure1_slot11;
            var1 = {};
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        };
        var _closure1_slot24 = var1;
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
        var _closure1_slot25 = var1;
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
        var _closure1_slot26 = var1;
        var1 = function getChannelDetailsComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot27 = var1;
        var1 = function getSearchComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot28 = var1;
        var1 = function getModalComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot29 = var1;
        var1 = function getMessageRequestsComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot30 = var1;
        var1 = function getSettingsComponent() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot31 = var1;
        var1 = function getAccountStanding() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 22;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.default;
            return var1;
        };
        var _closure1_slot32 = var1;
        var2 = function getChannelScreen() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arguments[0];
                var4 = undefined;
                if(!(var1 === var4)) { _fun0002_ip = 24; continue _fun0002 }
 11:
                var2 = _closure1_slot8;
                var1 = var2.animation;
 24:
                var _closure2_slot0 = var1;
                var3 = _closure1_slot11;
                var1 = _closure1_slot17;
                var2 = var1.Screen;
                var1 = {};
                var7 = 'channel';
                var1['name'] = var7;
                var7 = {};
                var8 = function beforeRemove(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 23;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getBestActiveInput;
                        var2 = var2.bind(var3)();
                        var3 = null;
                        if(!(var3 != var2)) { _fun0003_ip = 102; continue _fun0003 }
 41:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 24;
                        var2 = var9[var2];
                        var5 = var8.bind(var1)(var2);
                        var4 = var5.setKeyboardType;
                        var2 = {};
                        var6 = 25;
                        var6 = var9[var6];
                        var6 = var8.bind(var1)(var6);
                        var6 = var6.KeyboardTypes;
                        var6 = var6.SYSTEM;
                        var2['type'] = var6;
                        var2 = var4.bind(var5)(var2);
 102:
                        var2 = arg1;
                        var2 = var2.data;
                        var4 = var3 == var2;
                        var8 = undefined;
                        if(var4) { _fun0003_ip = 138; continue _fun0003 }
 119:
                        var2 = var2.action;
                        var3 = var3 == var2;
                        var8 = undefined;
                        if(var3) { _fun0003_ip = 138; continue _fun0003 }
 133:
                        var8 = var2.type;
 138:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 26;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.trackWithMetadata;
                        var2 = _closure1_slot9;
                        var3 = var2.CHANNEL_BACK_NAVIGATED;
                        var2 = {};
                        var6 = 'GO_BACK';
                        if(!(var6 !== var8)) { _fun0003_ip = 198; continue _fun0003 }
 186:
                        var6 = _closure1_slot10;
                        var6 = var6.SWIPE;
                        _fun0003_ip = 208; continue _fun0003;
 198:
                        var7 = _closure1_slot10;
                        var6 = var7.BACK_BUTTON;
 208:
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
                    var3 = 27;
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
                    var10 = _closure1_slot8;
                    var11 = var1;
                    var2 = copyDataProperties(var11, var10);
                    var3 = _closure2_slot0;
                    var2 = 'animation';
                    var1[var2] = var3;
                    return var1;
                };
                var1['options'] = var6;
                var5 = _closure1_slot23;
                var1['getComponent'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot33 = var2;
        var9 = global;
        var10 = var9.Object;
        var8 = var10.defineProperty;
        var5 = {};
        var1 = true;
        var5['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var10)(var3, var1, var5);
        var1 = 0;
        var5 = var7[var1];
        var1 = undefined;
        var5 = var11.bind(var1)(var5);
        var _closure1_slot3 = var5;
        var15 = 1;
        var8 = var7[var15];
        var5 = metroImportAll;
        var8 = var5.bind(var1)(var8);
        var _closure1_slot4 = var8;
        var5 = 2;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var12 = var5.Platform;
        var5 = var5.View;
        var _closure1_slot5 = var5;
        var5 = 3;
        var5 = var7[var5];
        var5 = var11.bind(var1)(var5);
        var _closure1_slot6 = var5;
        var5 = 4;
        var5 = var7[var5];
        var5 = var11.bind(var1)(var5);
        var _closure1_slot7 = var5;
        var5 = 5;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.StackNavigationAnimationSettings;
        var _closure1_slot8 = var5;
        var5 = 6;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var10 = var5.AnalyticEvents;
        var _closure1_slot9 = var10;
        var5 = var5.DrawerSourceTypes;
        var _closure1_slot10 = var5;
        var5 = 7;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var10 = var5.jsx;
        var _closure1_slot11 = var10;
        var10 = var5.jsxs;
        var _closure1_slot12 = var10;
        var5 = var5.Fragment;
        var _closure1_slot13 = var5;
        var5 = 8;
        var5 = var7[var5];
        var13 = var6.bind(var1)(var5);
        var10 = var13.createStyles;
        var5 = {};
        var14 = {};
        var14['flex'] = var15;
        var5['flex'] = var14;
        var5 = var10.bind(var13)(var5);
        var _closure1_slot14 = var5;
        var5 = 9;
        var10 = var7[var5];
        var13 = var6.bind(var1)(var10);
        var10 = var13.isIOS;
        var10 = var10.bind(var13)();
        if(!var10) { _fun0001_ip = 514; continue _fun0001 }
 463:
        var14 = var9.parseInt;
        var15 = var12.Version;
        var12 = var9.HermesInternal;
        var13 = var12.concat;
        var12 = '';
        var13 = var13.bind(var12)(var15);
        var12 = 10;
        var12 = var14.bind(var1)(var13, var12);
        var13 = var12 | 0;
        var12 = 15;
        var10 = var13 <= var12;
 514:
        var _closure1_slot15 = var10;
        var10 = 10;
        var10 = var7[var10];
        var12 = var6.bind(var1)(var10);
        var10 = var12.createNativeStackNavigator;
        var10 = var10.bind(var12)();
        var _closure1_slot16 = var10;
        var10 = 11;
        var10 = var7[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.bind(var1)();
        var _closure1_slot17 = var10;
        var11 = var9.Object;
        var10 = var11.freeze;
        var9 = {};
        var12 = 'none';
        var9['animation'] = var12;
        var9 = var10.bind(var11)(var9);
        var _closure1_slot18 = var9;
        var5 = var7[var5];
        var9 = var6.bind(var1)(var5);
        var5 = var9.isAndroid;
        var5 = var5.bind(var9)();
        var _closure1_slot19 = var5;
        var5 = var8.memo;
        var4 = function StackNavigator() {
            var3 = _closure1_slot14;
            var11 = undefined;
            var10 = var3.bind(var11)();
            var _closure2_slot0 = var10;
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 28;
            var4 = var12[var3];
            var6 = var5.bind(var11)(var4);
            var4 = var6.useScreenReaderEnabled;
            var4 = var4.bind(var6)();
            var4 = var12[var3];
            var6 = var5.bind(var11)(var4);
            var4 = var6.useUpsellManager;
            var4 = var4.bind(var6)();
            var3 = var12[var3];
            var4 = var5.bind(var11)(var3);
            var3 = var4.useAppKeyCommands;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot1;
            var3 = 29;
            var3 = var12[var3];
            var3 = var4.bind(var11)(var3);
            var3 = var3.bind(var11)();
            var3 = 30;
            var4 = var12[var3];
            var8 = var5.bind(var11)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getSessionId;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var9 = var7.bind(var8)(var6, var4);
            var _closure2_slot1 = var9;
            var4 = _closure1_slot4;
            var7 = var4.useState;
            var6 = _closure1_slot8;
            var6 = var6.animation;
            var8 = var7.bind(var4)(var6);
            var7 = _closure1_slot3;
            var6 = 2;
            var8 = var7.bind(var11)(var8, var6);
            var6 = 0;
            var6 = var8[var6];
            var _closure2_slot2 = var6;
            var7 = 1;
            var7 = var8[var7];
            var _closure2_slot3 = var7;
            var7 = 31;
            var7 = var12[var7];
            var13 = var5.bind(var11)(var7);
            var8 = var13.useHomeIndicatorStore;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.autoHideHomeIndicator;
                return var1;
            };
            var8 = var8.bind(var13)(var7);
            var _closure2_slot4 = var8;
            var7 = 32;
            var7 = var12[var7];
            var13 = var5.bind(var11)(var7);
            var7 = var13.useAccessibilityNativeStackOptions;
            var7 = var7.bind(var13)();
            var _closure2_slot5 = var7;
            var3 = var12[var3];
            var11 = var5.bind(var11)(var3);
            var5 = var11.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var11)(var3, var2);
            var _closure2_slot6 = var5;
            var3 = var4.useMemo;
            var2 = new Array(6);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var7;
            var2[4] = var6;
            var2[5] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot11;
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var13 = 33;
                    var1 = var16[var13];
                    var3 = undefined;
                    var2 = var15.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = var16[var13];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.Profiles;
                    var5 = var5.MainNavigator;
                    var1['profile'] = var5;
                    var7 = _closure1_slot12;
                    var5 = 34;
                    var5 = var16[var5];
                    var6 = var15.bind(var3)(var5);
                    var5 = {};
                    var8 = _closure2_slot0;
                    var8 = var8.flex;
                    var5['style'] = var8;
                    var8 = 'mainNavigator';
                    var5['nativeID'] = var8;
                    var14 = _closure1_slot11;
                    var8 = 35;
                    var8 = var16[var8];
                    var11 = var15.bind(var3)(var8);
                    var8 = {};
                    var10 = 36;
                    var10 = var16[var10];
                    var16 = var15.bind(var3)(var10);
                    var15 = {};
                    var17 = _closure2_slot1;
                    var18 = null;
                    if(!var17) { _fun0004_ip = 165; continue _fun0004 }
 149:
                    var20 = _closure1_slot11;
                    var19 = _closure1_slot24;
                    var17 = {};
                    var18 = var20.bind(var3)(var19, var17);
 165:
                    var17 = new Array(2);
                    var17[0] = var18;
                    var20 = _closure1_slot11;
                    var19 = _closure1_slot1;
                    var31 = _closure1_slot2;
                    var18 = var31[var13];
                    var19 = var19.bind(var3)(var18);
                    var18 = {};
                    var30 = _closure1_slot0;
                    var13 = var31[var13];
                    var13 = var30.bind(var3)(var13);
                    var13 = var13.Profiles;
                    var13 = var13.StackNavigator;
                    var18['profile'] = var13;
                    var23 = _closure1_slot12;
                    var13 = _closure1_slot16;
                    var22 = var13.Navigator;
                    var21 = {};
                    var13 = 'root';
                    var21['id'] = var13;
                    var13 = function screenOptions() {
                        var1 = {};
                        var2 = false;
                        var1['headerShown'] = var2;
                        var3 = _closure2_slot4;
                        var1['autoHideHomeIndicator'] = var3;
                        var4 = _closure2_slot5;
                        var5 = var1;
                        var2 = copyDataProperties(var5, var4);
                        return var1;
                    };
                    var21['screenOptions'] = var13;
                    var25 = _closure1_slot11;
                    var13 = _closure1_slot16;
                    var24 = var13.Screen;
                    var13 = {};
                    var26 = 'main';
                    var13['name'] = var26;
                    var26 = _closure1_slot18;
                    var13['options'] = var26;
                    var26 = function children() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var4 = _closure1_slot12;
                            var3 = _closure1_slot13;
                            var2 = {};
                            var1 = _closure1_slot17;
                            var7 = var1.Navigator;
                            var5 = {};
                            var1 = 'tabs';
                            var5['id'] = var1;
                            var8 = function screenOptions(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                    var1 = arg1;
                                    var5 = var1.navigation;
                                    var1 = {};
                                    var4 = _closure1_slot15;
                                    var6 = undefined;
                                    var3 = undefined;
                                    if(!var4) { _fun0006_ip = 29; continue _fun0006 }
 25:
                                    var3 = 'default';
 29:
                                    var1['orientation'] = var3;
                                    var3 = false;
                                    var1['headerShown'] = var3;
                                    var4 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var3 = 27;
                                    var3 = var7[var3];
                                    var4 = var4.bind(var6)(var3);
                                    var3 = var4.getDefaultStackHeaderProps;
                                    var8 = var3.bind(var4)(var5);
                                    var9 = var1;
                                    var3 = copyDataProperties(var9, var8);
                                    var8 = _closure1_slot8;
                                    var9 = var1;
                                    var2 = copyDataProperties(var9, var8);
                                    var8 = _closure2_slot5;
                                    var9 = var1;
                                    var2 = copyDataProperties(var9, var8);
                                    return var1;
                                }
                            };
                            var5['screenOptions'] = var8;
                            var10 = _closure1_slot11;
                            var8 = _closure1_slot17;
                            var9 = var8.Screen;
                            var8 = {};
                            var8['name'] = var1;
                            var1 = _closure1_slot22;
                            var8['getComponent'] = var1;
                            var1 = _closure1_slot18;
                            var8['options'] = var1;
                            var1 = undefined;
                            var9 = var10.bind(var1)(var9, var8);
                            var8 = new Array(4);
                            var8[0] = var9;
                            var14 = _closure1_slot11;
                            var9 = _closure1_slot17;
                            var13 = var9.Screen;
                            var10 = {};
                            var9 = 'member-verification';
                            var10['name'] = var9;
                            var9 = _closure1_slot25;
                            var10['getComponent'] = var9;
                            var15 = {'presentation': 'transparentModal', 'animation': 'slide_from_bottom'};
                            var9 = _closure2_slot5;
                            var18 = var15;
                            var17 = var9;
                            var16 = copyDataProperties(var18, var17);
                            var10['options'] = var15;
                            var10 = var14.bind(var1)(var13, var10);
                            var8[1] = var10;
                            var10 = _closure1_slot33;
                            var13 = null;
                            var14 = var13 == var9;
                            var9 = undefined;
                            if(var14) { _fun0005_ip = 205; continue _fun0005 }
 195:
                            var14 = _closure2_slot5;
                            var9 = var14.animation;
 205:
                            if(!(var13 == var9)) { _fun0005_ip = 213; continue _fun0005 }
 209:
                            var9 = _closure2_slot2;
 213:
                            var9 = var10.bind(var1)(var9);
                            var8[2] = var9;
                            var11 = _closure1_slot11;
                            var9 = _closure1_slot17;
                            var10 = var9.Screen;
                            var9 = {};
                            var13 = 'settings';
                            var9['name'] = var13;
                            var12 = function options(arg1) {
                                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                    var1 = arg1;
                                    var2 = var1.route;
                                    var1 = {};
                                    var3 = var2.params;
                                    var2 = null;
                                    var5 = var2 != var3;
                                    var4 = 'slide_from_right';
                                    var2 = var4;
                                    if(!var5) { _fun0007_ip = 53; continue _fun0007 }
 35:
                                    var3 = var3.isRootScreen;
                                    var2 = var4;
                                    if(!var3) { _fun0007_ip = 53; continue _fun0007 }
 47:
                                    var2 = 'slide_from_bottom';
 53:
                                    var1['animation'] = var2;
                                    var2 = false;
                                    var1['headerShown'] = var2;
                                    var6 = _closure2_slot5;
                                    var7 = var1;
                                    var2 = copyDataProperties(var7, var6);
                                    return var1;
                                }
                            };
                            var9['options'] = var12;
                            var12 = _closure1_slot31;
                            var9['getComponent'] = var12;
                            var9 = var11.bind(var1)(var10, var9);
                            var8[3] = var9;
                            var5['children'] = var8;
                            var7 = var4.bind(var1)(var7, var5);
                            var5 = new Array(2);
                            var5[0] = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 37;
                            var6 = var8[var6];
                            var6 = var7.bind(var1)(var6);
                            var6 = var6.APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO;
                            var5[1] = var6;
                            var2['children'] = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var13['children'] = var26;
                    var13 = var25.bind(var3)(var24, var13);
                    var24 = new Array(9);
                    var24[0] = var13;
                    var26 = _closure1_slot11;
                    var13 = _closure1_slot16;
                    var25 = var13.Screen;
                    var13 = {};
                    var27 = 'search';
                    var13['name'] = var27;
                    var27 = _closure1_slot28;
                    var13['getComponent'] = var27;
                    var13 = var26.bind(var3)(var25, var13);
                    var24[1] = var13;
                    var26 = _closure1_slot11;
                    var13 = _closure1_slot16;
                    var25 = var13.Screen;
                    var13 = {};
                    var27 = 'auth';
                    var13['name'] = var27;
                    var27 = _closure1_slot20;
                    var13['getComponent'] = var27;
                    var27 = _closure1_slot18;
                    var13['options'] = var27;
                    var13 = var26.bind(var3)(var25, var13);
                    var24[2] = var13;
                    var26 = _closure1_slot11;
                    var13 = _closure1_slot16;
                    var25 = var13.Screen;
                    var13 = {};
                    var27 = 'account-standing';
                    var13['name'] = var27;
                    var27 = _closure1_slot32;
                    var13['getComponent'] = var27;
                    var27 = {'presentation': 'fullScreenModal', 'gestureEnabled': false};
                    var32 = _closure1_slot18;
                    var33 = var27;
                    var29 = copyDataProperties(var33, var32);
                    var13['options'] = var27;
                    var13 = var26.bind(var3)(var25, var13);
                    var24[3] = var13;
                    var26 = _closure1_slot11;
                    var13 = _closure1_slot16;
                    var25 = var13.Screen;
                    var13 = {};
                    var27 = 'panels';
                    var13['name'] = var27;
                    var27 = _closure1_slot21;
                    var13['getComponent'] = var27;
                    var27 = _closure1_slot18;
                    var13['options'] = var27;
                    var13 = var26.bind(var3)(var25, var13);
                    var24[4] = var13;
                    var26 = _closure1_slot11;
                    var13 = _closure1_slot16;
                    var25 = var13.Screen;
                    var13 = {};
                    var27 = 'friends';
                    var13['name'] = var27;
                    var27 = function options(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.route;
                            var1 = {};
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 38;
                            var3 = var5[var3];
                            var5 = undefined;
                            var6 = var4.bind(var5)(var3);
                            var3 = {};
                            var7 = var2.params;
                            var4 = null;
                            var9 = var4 == var7;
                            var8 = undefined;
                            if(var9) { _fun0008_ip = 76; continue _fun0008 }
 55:
                            var7 = var7.params;
                            var9 = var4 == var7;
                            var8 = undefined;
                            if(var9) { _fun0008_ip = 76; continue _fun0008 }
 70:
                            var8 = var7.presentation;
 76:
                            var9 = var4 != var8;
                            var7 = 'modal';
                            if(!var9) { _fun0008_ip = 90; continue _fun0008 }
 87:
                            var7 = var8;
 90:
                            var3['presentation'] = var7;
                            var10 = var6.bind(var5)(var3);
                            var11 = var1;
                            var3 = copyDataProperties(var11, var10);
                            var2 = var2.params;
                            var6 = var4 == var2;
                            var3 = undefined;
                            if(var6) { _fun0008_ip = 143; continue _fun0008 }
 122:
                            var2 = var2.params;
                            var4 = var4 == var2;
                            var3 = undefined;
                            if(var4) { _fun0008_ip = 143; continue _fun0008 }
 137:
                            var3 = var2.presentation;
 143:
                            var2 = 'card';
                            var3 = var2 === var3;
                            var2 = 'fullScreenGestureEnabled';
                            var1[var2] = var3;
                            return var1;
                        }
                    };
                    var13['options'] = var27;
                    var27 = {};
                    var29 = 9;
                    var29 = var31[var29];
                    var30 = var30.bind(var3)(var29);
                    var29 = var30.isAndroid;
                    var30 = var29.bind(var30)();
                    var29 = undefined;
                    if(var30) { _fun0004_ip = 610; continue _fun0004 }
 603:
                    var29 = function() {
                        var3 = _closure2_slot3;
                        var1 = undefined;
                        var2 = 'none';
                        var2 = var3.bind(var1)(var2);
                        var2 = global;
                        var4 = var2.setTimeout;
                        var2 = _closure1_slot8;
                        var3 = var2.duration;
                        var2 = function() {
                            var3 = _closure2_slot3;
                            var1 = _closure1_slot8;
                            var2 = var1.animation;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var4.bind(var1)(var2, var3);
                        return var1;
                    };
 610:
                    var27['beforeRemove'] = var29;
                    var13['listeners'] = var27;
                    var27 = _closure1_slot26;
                    var13['getComponent'] = var27;
                    var13 = var26.bind(var3)(var25, var13);
                    var24[5] = var13;
                    var26 = _closure1_slot11;
                    var13 = _closure1_slot16;
                    var25 = var13.Screen;
                    var13 = {};
                    var27 = 'sidebar';
                    var13['name'] = var27;
                    var27 = _closure1_slot27;
                    var13['getComponent'] = var27;
                    var27 = function options() {
                        var1 = {};
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 38;
                        var2 = var3[var2];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var5 = var2.bind(var3)();
                        var6 = var1;
                        var2 = copyDataProperties(var6, var5);
                        var3 = false;
                        var2 = 'lockOrientation';
                        var1[var2] = var3;
                        return var1;
                    };
                    var13['options'] = var27;
                    var13 = var26.bind(var3)(var25, var13);
                    var24[6] = var13;
                    var27 = _closure1_slot11;
                    var13 = _closure1_slot16;
                    var26 = var13.Screen;
                    var25 = {};
                    var13 = 'message-requests';
                    var25['name'] = var13;
                    var30 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var29 = 38;
                    var29 = var13[var29];
                    var29 = var30.bind(var3)(var29);
                    var29 = var29.bind(var3)();
                    var25['options'] = var29;
                    var29 = _closure1_slot30;
                    var25['getComponent'] = var29;
                    var25 = var27.bind(var3)(var26, var25);
                    var24[7] = var25;
                    var27 = _closure1_slot11;
                    var25 = _closure1_slot16;
                    var26 = var25.Screen;
                    var25 = {};
                    var29 = 'modal';
                    var25['name'] = var29;
                    var28 = function options(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
                            if(!var4) { _fun0009_ip = 58; continue _fun0009 }
 55:
                            var2 = var3;
 58:
                            var1['animation'] = var2;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 38;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var5 = var6.params;
                            var10 = var5.presentation;
                            var8 = 'transparentModal';
                            var9 = 'card';
                            var5 = var8;
                            if(!(var9 !== var10)) { _fun0009_ip = 144; continue _fun0009 }
 119:
                            var6 = var6.params;
                            var6 = var6.presentation;
                            var7 = var7 != var6;
                            var5 = var8;
                            if(!var7) { _fun0009_ip = 144; continue _fun0009 }
 141:
                            var5 = var6;
 144:
                            var2['presentation'] = var5;
                            var11 = var3.bind(var4)(var2);
                            var12 = var1;
                            var2 = copyDataProperties(var12, var11);
                            return var1;
                        }
                    };
                    var25['options'] = var28;
                    var28 = _closure1_slot29;
                    var25['getComponent'] = var28;
                    var25 = var27.bind(var3)(var26, var25);
                    var24[8] = var25;
                    var21['children'] = var24;
                    var21 = var23.bind(var3)(var22, var21);
                    var18['children'] = var21;
                    var18 = var20.bind(var3)(var19, var18);
                    var17[1] = var18;
                    var15['children'] = var17;
                    var15 = var7.bind(var3)(var16, var15);
                    var8['children'] = var15;
                    var11 = var14.bind(var3)(var11, var8);
                    var8 = new Array(5);
                    var8[0] = var11;
                    var14 = _closure1_slot0;
                    var11 = 37;
                    var15 = var13[var11];
                    var15 = var14.bind(var3)(var15);
                    var15 = var15.APP_EXTRA_COMPONENTS;
                    var8[1] = var15;
                    var13 = var13[var11];
                    var13 = var14.bind(var3)(var13);
                    var13 = var13.APP_EXTRA_COMPONENTS_NEVER_FREEZE;
                    var8[2] = var13;
                    var13 = _closure1_slot19;
                    if(!var13) { _fun0004_ip = 935; continue _fun0004 }
 926:
                    var12 = _closure2_slot6;
                    var10 = null;
                    if(var12) { _fun0004_ip = 961; continue _fun0004 }
 935:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var12 = 39;
                    var12 = var14[var12];
                    var12 = var13.bind(var3)(var12);
                    var10 = var12.MOVED_TO_ACTION_SHEET_ON_ANDROID_COMPONENTS;
 961:
                    var8[3] = var10;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.APP_EXTRA_COMPONENTS_EXTERNAL_PIP;
                    var8[4] = var9;
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
        var5 = 40;
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