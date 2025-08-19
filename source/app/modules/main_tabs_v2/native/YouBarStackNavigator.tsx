// app/modules/main_tabs_v2/native/YouBarStackNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function getGuildsComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function getNotificationsComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.ThemedNotifications;
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function getSettingsComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function getYouComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function getICYMIComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var _closure1_slot4 = var9;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MainTabsNavigatorScreens;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var8 = var4.Fragment;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.createNativeStackNavigator;
    var4 = var4.bind(var8)();
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function YouBarStackNavigator() {
        var1 = function useInitialGuildParams() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot3;
                var1 = var2.useRef;
                var3 = undefined;
                var1 = var1.bind(var2)(var3);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 12;
                var2 = var6[var2];
                var7 = var5.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() {
                    var2 = _closure1_slot7;
                    var1 = var2.getGuildId;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = var6.bind(var7)(var5, var2);
                var2 = var1.current;
                var5 = null;
                var2 = var5 == var2;
                if(!var2) { _fun0001_ip = 89; continue _fun0001 }
 85:
                var2 = var5 != var7;
 89:
                if(!var2) { _fun0001_ip = 135; continue _fun0001 }
 92:
                var2 = {};
                var2['guildId'] = var7;
                var6 = _closure1_slot6;
                var4 = var6.getChannelId;
                var4 = var4.bind(var6)(var7);
                var5 = var5 != var4;
                var3 = undefined;
                if(!var5) { _fun0001_ip = 125; continue _fun0001 }
 122:
                var3 = var4;
 125:
                var2['channelId'] = var3;
                var1['current'] = var2;
 135:
                var1 = var1.current;
                return var1;
            }
        };
        var4 = undefined;
        var15 = var1.bind(var4)();
        var _closure2_slot0 = var15;
        var9 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 13;
        var1 = var3[var1];
        var1 = var9.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var1 = 14;
        var1 = var3[var1];
        var1 = var9.bind(var4)(var1);
        var12 = var1.bind(var4)();
        var _closure2_slot1 = var12;
        var2 = _closure1_slot0;
        var1 = 15;
        var6 = var3[var1];
        var10 = var2.bind(var4)(var6);
        var8 = var10.useICYMIExperiment;
        var6 = 'TabsNavigator';
        var14 = var8.bind(var10)(var6);
        var _closure2_slot2 = var14;
        var8 = 16;
        var8 = var3[var8];
        var9 = var9.bind(var4)(var8);
        var8 = 'hide_icymi_tab';
        var13 = var9.bind(var4)(var8);
        var _closure2_slot3 = var13;
        var1 = var3[var1];
        var3 = var2.bind(var4)(var1);
        var2 = var3.useIsNotificationsTabMerged;
        var1 = {};
        var1['location'] = var6;
        var1 = var2.bind(var3)(var1);
        var11 = var1.enabled;
        var _closure2_slot4 = var11;
        var10 = _closure1_slot3;
        var3 = var10.useMemo;
        var2 = function() {
            var1 = {'headerShown': false, 'gestureEnabled': true, 'fullScreenGestureEnabled': true};
            return var1;
        };
        var1 = new Array(0);
        var8 = var3.bind(var10)(var2, var1);
        var3 = _closure1_slot9;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = _closure1_slot4;
        var6 = var6.absoluteFillObject;
        var1['style'] = var6;
        var5 = _closure1_slot12;
        var6 = var5.Navigator;
        var5 = {};
        var9 = 'tabs';
        var5['id'] = var9;
        var5['screenOptions'] = var8;
        var9 = var10.useMemo;
        var8 = new Array(5);
        var8[0] = var15;
        var8[1] = var14;
        var8[2] = var13;
        var8[3] = var12;
        var8[4] = var11;
        var7 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = _closure1_slot11;
                var3 = _closure1_slot10;
                var2 = {};
                var8 = _closure1_slot9;
                var1 = _closure1_slot12;
                var7 = var1.Screen;
                var5 = {};
                var1 = _closure1_slot8;
                var1 = var1.GUILDS;
                var5['name'] = var1;
                var1 = _closure2_slot0;
                var5['initialParams'] = var1;
                var1 = _closure1_slot13;
                var5['getComponent'] = var1;
                var1 = undefined;
                var7 = var8.bind(var1)(var7, var5);
                var5 = new Array(5);
                var5[0] = var7;
                var8 = _closure2_slot2;
                var7 = null;
                if(!var8) { _fun0002_ip = 143; continue _fun0002 }
 89:
                var8 = _closure2_slot3;
                var7 = null;
                if(var8) { _fun0002_ip = 143; continue _fun0002 }
 98:
                var11 = _closure1_slot9;
                var8 = _closure1_slot12;
                var10 = var8.Screen;
                var8 = {};
                var12 = _closure1_slot8;
                var12 = var12.ICYMI;
                var8['name'] = var12;
                var12 = _closure1_slot17;
                var8['getComponent'] = var12;
                var7 = var11.bind(var1)(var10, var8);
 143:
                var5[1] = var7;
                var7 = _closure2_slot4;
                var7 = !var7;
                if(!var7) { _fun0002_ip = 202; continue _fun0002 }
 157:
                var11 = _closure1_slot9;
                var8 = _closure1_slot12;
                var10 = var8.Screen;
                var8 = {};
                var12 = _closure1_slot8;
                var12 = var12.NOTIFICATIONS;
                var8['name'] = var12;
                var12 = _closure1_slot14;
                var8['getComponent'] = var12;
                var7 = var11.bind(var1)(var10, var8);
 202:
                var5[2] = var7;
                var6 = _closure2_slot1;
                if(!var6) { _fun0002_ip = 258; continue _fun0002 }
 213:
                var10 = _closure1_slot9;
                var7 = _closure1_slot12;
                var8 = var7.Screen;
                var7 = {};
                var11 = _closure1_slot8;
                var11 = var11.SETTINGS;
                var7['name'] = var11;
                var11 = _closure1_slot15;
                var7['getComponent'] = var11;
                var6 = var10.bind(var1)(var8, var7);
 258:
                var5[3] = var6;
                var8 = _closure1_slot9;
                var6 = _closure1_slot12;
                var7 = var6.Screen;
                var6 = {};
                var10 = _closure1_slot8;
                var10 = var10.YOU;
                var6['name'] = var10;
                var9 = _closure1_slot16;
                var6['getComponent'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var5[4] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var7 = var9.bind(var10)(var7, var8);
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/YouBarStackNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();