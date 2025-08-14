// app/components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumGuildSubscribeModalScenes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumGuildSubscribeModal(arg1) {
        var1 = arg1;
        var2 = var1.guildId;
        var _closure2_slot0 = var2;
        var1 = var1.previousGuildSubscriptionSlot;
        var _closure2_slot1 = var1;
        var8 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 20;
        var2 = var10[var2];
        var4 = undefined;
        var3 = var8.bind(var4)(var2);
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = new Array(0);
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 64; continue _fun0001 }
 17:
                var3 = var2.push;
                var1 = {};
                var4 = _closure1_slot6;
                var4 = var4.GUILD_SELECT;
                var1['name'] = var4;
                var4 = {};
                var6 = _closure2_slot1;
                var4['previousGuildSubscriptionSlot'] = var6;
                var1['params'] = var4;
                var1 = var3.bind(var2)(var1);
                _fun0001_ip = 117; continue _fun0001;
 64:
                var3 = var2.push;
                var1 = {};
                var4 = _closure1_slot6;
                var4 = var4.OVERVIEW;
                var1['name'] = var4;
                var4 = {};
                var6 = _closure2_slot0;
                var4['guildId'] = var6;
                var5 = _closure2_slot1;
                var4['previousGuildSubscriptionSlot'] = var5;
                var1['params'] = var4;
                var1 = var3.bind(var2)(var1);
 117:
                var1 = {};
                var1['initialStack'] = var2;
                var3 = function getScreens() {
                    var1 = {};
                    var2 = _closure1_slot6;
                    var6 = var2.GUILD_SELECT;
                    var3 = {};
                    var7 = false;
                    var3['headerShown'] = var7;
                    var7 = function render(arg1) {
                        var4 = _closure1_slot8;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = arg1;
                        var7 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['render'] = var7;
                    var1[var6] = var3;
                    var7 = var2.OVERVIEW;
                    var3 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 7;
                    var5 = var10[var6];
                    var8 = undefined;
                    var13 = var9.bind(var8)(var5);
                    var12 = var13.getHeaderCloseButton;
                    var5 = 8;
                    var11 = var10[var5];
                    var11 = var9.bind(var8)(var11);
                    var11 = var11.closeApplyBoostModal;
                    var11 = var12.bind(var13)(var11);
                    var3['headerLeft'] = var11;
                    var11 = function headerRight() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var4 = _closure1_slot8;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 9;
                            var1 = var8[var1];
                            var3 = undefined;
                            var1 = var7.bind(var3)(var1);
                            var2 = var1.HeaderActionButton;
                            var1 = {};
                            var6 = 10;
                            var6 = var8[var6];
                            var8 = var7.bind(var3)(var6);
                            var7 = var8.isThemeDark;
                            var6 = _closure1_slot5;
                            var6 = var6.theme;
                            var6 = var7.bind(var8)(var6);
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            if(var6) { _fun0002_ip = 95; continue _fun0002 }
 81:
                            var6 = 12;
                            var6 = var9[var6];
                            var6 = var8.bind(var3)(var6);
                            _fun0002_ip = 107; continue _fun0002;
 95:
                            var7 = 11;
                            var7 = var9[var7];
                            var6 = var8.bind(var3)(var7);
 107:
                            var1['source'] = var6;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 13;
                            var5 = var9[var5];
                            var5 = var8.bind(var3)(var5);
                            var5 = var5.SettingsIcon;
                            var1['IconComponent'] = var5;
                            var5 = 14;
                            var6 = var9[var5];
                            var6 = var8.bind(var3)(var6);
                            var10 = var6.intl;
                            var7 = var10.string;
                            var6 = var9[var5];
                            var6 = var8.bind(var3)(var6);
                            var6 = var6.t;
                            var6 = var6.3D5yo6;
                            var6 = var7.bind(var10)(var6);
                            var1['accessibilityLabel'] = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var3)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var3)(var5);
                            var5 = var5.t;
                            var5 = var5.+CbP2t;
                            var5 = var6.bind(var7)(var5);
                            var1['accessibilityHint'] = var5;
                            var5 = function onPress() {
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 15;
                                var2 = var4[var1];
                                var1 = undefined;
                                var7 = var3.bind(var1)(var2);
                                var6 = var7.trackPaneViewed;
                                var2 = {};
                                var5 = _closure1_slot7;
                                var8 = var5.GUILD_BOOSTING;
                                var2['destinationPane'] = var8;
                                var2 = var6.bind(var7)(var2);
                                var2 = 8;
                                var2 = var4[var2];
                                var6 = var3.bind(var1)(var2);
                                var2 = var6.closeApplyBoostModal;
                                var2 = var2.bind(var6)();
                                var2 = 16;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.openUserSettings;
                                var2 = {};
                                var5 = var5.GUILD_BOOSTING;
                                var2['screen'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var1['onPress'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        }
                    };
                    var3['headerRight'] = var11;
                    var11 = function headerTitle(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            var9 = var1.children;
                            var4 = _closure1_slot8;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var1 = 7;
                            var1 = var11[var1];
                            var3 = undefined;
                            var1 = var10.bind(var3)(var1);
                            var2 = var1.NavigatorHeader;
                            var1 = {};
                            var5 = 14;
                            var7 = var11[var5];
                            var7 = var10.bind(var3)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var5 = var11[var5];
                            var5 = var10.bind(var3)(var5);
                            var5 = var5.t;
                            var5 = var5.VJEVbm;
                            var5 = var7.bind(var8)(var5);
                            var1['title'] = var5;
                            var7 = var9.length;
                            var5 = 0;
                            var7 = var7 > var5;
                            var5 = null;
                            if(!var7) { _fun0003_ip = 154; continue _fun0003 }
 112:
                            var8 = _closure1_slot8;
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 17;
                            var6 = var10[var6];
                            var6 = var7.bind(var3)(var6);
                            var7 = var6.LegacyText;
                            var6 = {};
                            var6['children'] = var9;
                            var5 = var8.bind(var3)(var7, var6);
 154:
                            var1['subtitle'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        }
                    };
                    var3['headerTitle'] = var11;
                    var11 = function render(arg1) {
                        var4 = _closure1_slot8;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 18;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = arg1;
                        var7 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['render'] = var11;
                    var1[var7] = var3;
                    var3 = var2.CONFIRMATION;
                    var2 = {};
                    var6 = var10[var6];
                    var7 = var9.bind(var8)(var6);
                    var6 = var7.getHeaderCloseButton;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.closeApplyBoostModal;
                    var5 = var6.bind(var7)(var5);
                    var2['headerLeft'] = var5;
                    var5 = 14;
                    var6 = var10[var5];
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.VJEVbm;
                    var5 = var6.bind(var7)(var5);
                    var2['headerTitle'] = var5;
                    var4 = function render(arg1) {
                        var4 = _closure1_slot8;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 19;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = arg1;
                        var7 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['render'] = var4;
                    var1[var3] = var2;
                    return var1;
                };
                var2 = undefined;
                var2 = var3.bind(var2)();
                var1['screens'] = var2;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var6 = var2.initialStack;
        var7 = var2.screens;
        var11 = _closure1_slot4;
        var9 = var11.useState;
        var2 = 0;
        var3 = var6[var2];
        var3 = var3.name;
        var12 = var9.bind(var11)(var3);
        var9 = _closure1_slot3;
        var3 = 2;
        var9 = var9.bind(var4)(var12, var3);
        var2 = var9[var2];
        var _closure2_slot2 = var2;
        var3 = 1;
        var3 = var9[var3];
        var _closure2_slot3 = var3;
        var3 = 21;
        var3 = var10[var3];
        var3 = var8.bind(var4)(var3);
        var9 = var11.useCallback;
        var8 = new Array(1);
        var8[0] = var2;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure2_slot2;
                var1 = _closure1_slot6;
                var1 = var1.GUILD_SELECT;
                var1 = var3 === var1;
                if(!var1) { _fun0004_ip = 61; continue _fun0004 }
 27:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.closeApplyBoostModal;
                var2 = var2.bind(var3)();
                var1 = true;
 61:
                return var1;
            }
        };
        var2 = var9.bind(var11)(var2, var8);
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot8;
        var9 = _closure1_slot0;
        var1 = 22;
        var1 = var10[var1];
        var1 = var9.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var7;
        var1['initialRouteStack'] = var6;
        var6 = 14;
        var7 = var10[var6];
        var7 = var9.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.13/7kZ;
        var6 = var7.bind(var8)(var6);
        var1['headerBackTitle'] = var6;
        var5 = function onStateChange(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                var2 = undefined;
                if(var5) { _fun0005_ip = 31; continue _fun0005 }
 16:
                var5 = var4.routes;
                var4 = var4.index;
                var2 = var5[var4];
 31:
                if(!(var3 != var2)) { _fun0005_ip = 52; continue _fun0005 }
 35:
                var3 = _closure2_slot3;
                var2 = var2.name;
                var2 = var3.bind(var1)(var2);
 52:
                return var1;
            }
        };
        var1['onStateChange'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();