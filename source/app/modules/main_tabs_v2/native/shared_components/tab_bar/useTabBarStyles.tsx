// app/modules/main_tabs_v2/native/shared_components/tab_bar/useTabBarStyles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var13;
        var _closure1_slot2 = var8;
        var1 = global;
        var6 = var1.Object;
        var5 = var6.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var6)(var3, var1, var4);
        var18 = 0;
        var5 = var8[var18];
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var5);
        var _closure1_slot3 = var4;
        var14 = 1;
        var4 = var8[var14];
        var4 = var7.bind(var1)(var4);
        var17 = var4.CHAT_INPUT_HEIGHT;
        var15 = 2;
        var4 = var8[var15];
        var4 = var7.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot4 = var4;
        var12 = 3;
        var4 = var8[var12];
        var4 = var13.bind(var1)(var4);
        var4 = var4.spacing;
        var11 = var4.PX_48;
        var _closure1_slot5 = var11;
        var5 = function useTabletIconYouWidth() {
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 4;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.useICYMIEnabled;
            var3 = 'useTabBarStyles';
            var5 = var4.bind(var5)(var3);
            var _closure2_slot0 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = 2;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = 3;
case 2:
                    var8 = 3;
                    if(!(var8 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var2 = var1[var8];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.spacing;
                    var4 = var1.PX_32;
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var5 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var2 = var1[var8];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.spacing;
                    var4 = var1.PX_12;
case 6:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 5;
                    var5 = var2[var5];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.DRAWER_LEFT_WIDTH_MIN;
                    var6 = _closure1_slot1;
                    var2 = var2[var8];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.spacing;
                    var2 = var2.PX_8;
                    var2 = var5 - var2;
                    var2 = var2 - var4;
                    var1 = _closure1_slot5;
                    var1 = var1 * var3;
                    var1 = var2 - var1;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot6 = var5;
        var4 = 6;
        var4 = var8[var4];
        var9 = var7.bind(var1)(var4);
        var6 = var9.createStyles;
        var4 = {};
        var10 = {};
        var10['borderTopWidth'] = var14;
        var16 = var8[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BORDER_SUBTLE;
        var10['borderTopColor'] = var16;
        var16 = var8[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BG_SURFACE_OVERLAY_TMP;
        var10['backgroundColor'] = var16;
        var4['tabBar'] = var10;
        var10 = {};
        var10['borderTopWidth'] = var18;
        var4['tabBarYou'] = var10;
        var10 = {};
        var16 = var8[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BG_BASE_SECONDARY;
        var10['backgroundColor'] = var16;
        var4['tabBarTablet'] = var10;
        var10 = {};
        var16 = var8[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.spacing;
        var16 = var16.PX_8;
        var17 = var17 + var16;
        var16 = var8[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.spacing;
        var16 = var16.PX_4;
        var16 = var16 / var15;
        var19 = var17 - var16;
        var16 = var8[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.spacing;
        var16 = var16.PX_4;
        var17 = var16 / var15;
        var16 = 7;
        var20 = var8[var16];
        var21 = var7.bind(var1)(var20);
        var20 = var21.isAndroid;
        var20 = var20.bind(var21)();
        if(!var20) { _fun0001_ip = 7; continue _fun0001 }
case 8:
        var20 = var8[var12];
        var20 = var13.bind(var1)(var20);
        var20 = var20.spacing;
        var20 = var20.PX_4;
        var20 = var20 / var15;
        var18 = var20 / var15;
case 7:
        var17 = var17 / var15;
        var17 = var19 - var17;
        var17 = var17 - var18;
        var10['height'] = var17;
        var4['tabBarTabletHeight'] = var10;
        var10 = {};
        var17 = var8[var12];
        var17 = var13.bind(var1)(var17);
        var17 = var17.radii;
        var17 = var17.sm;
        var10['borderRadius'] = var17;
        var17 = var8[var12];
        var17 = var13.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.BORDER_SUBTLE;
        var10['borderColor'] = var17;
        var10['borderWidth'] = var14;
        var4['tabBarNux'] = var10;
        var10 = {};
        var17 = var8[var12];
        var17 = var13.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.BG_BASE_TERTIARY;
        var10['backgroundColor'] = var17;
        var4['tabBarNuxBackground'] = var10;
        var10 = {};
        var16 = var8[var16];
        var17 = var7.bind(var1)(var16);
        var16 = var17.isIOS;
        var17 = var16.bind(var17)();
        var16 = undefined;
        if(!var17) { _fun0001_ip = 9; continue _fun0001 }
case 10:
        var16 = -1;
case 9:
        var10['marginLeft'] = var16;
        var4['tabBarIcon'] = var10;
        var10 = {};
        var16 = 'none';
        var10['display'] = var16;
        var4['tabBarGuildsTablet'] = var10;
        var10 = {'position': 'absolute', 'top': 0};
        var16 = var15 * var11;
        var15 = var8[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_8;
        var15 = var16 + var15;
        var10['right'] = var15;
        var10['width'] = var11;
        var4['tabBarIcymTablet'] = var10;
        var10 = {'position': 'absolute', 'top': 0};
        var15 = var14 * var11;
        var14 = var8[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_8;
        var14 = var15 + var14;
        var10['right'] = var14;
        var10['width'] = var11;
        var4['tabBarNotificationsTablet'] = var10;
        var10 = {'position': 'absolute', 'top': 0};
        var12 = var8[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_8;
        var10['right'] = var12;
        var10['width'] = var11;
        var4['tabBarSettingsTablet'] = var10;
        var10 = {'position': 'absolute', 'left': 0, 'top': 0};
        var4['tabBarYouTablet'] = var10;
        var4 = var6.bind(var9)(var4);
        var _closure1_slot7 = var4;
        var6 = 16;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/main_tabs_v2/native/shared_components/tab_bar/useTabBarStyles.tsx';
        var6 = var7.bind(var8)(var6);
        var3['useTabletIconYouWidth'] = var5;
        var3['useTabBarStyles'] = var4;
        var2 = function useTabBarStylesComputed() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot7;
                var4 = undefined;
                var16 = var3.bind(var4)();
                var _closure2_slot0 = var16;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 8;
                var6 = var7[var3];
                var8 = var5.bind(var4)(var6);
                var6 = var8.useGradientBottom;
                var12 = var6.bind(var8)();
                var _closure2_slot1 = var12;
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useGradientMidpoint;
                var15 = var3.bind(var5)();
                var _closure2_slot2 = var15;
                var6 = _closure1_slot1;
                var3 = 9;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var18 = var3.bind(var4)();
                var3 = 10;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var9 = var3.theme;
                var _closure2_slot3 = var9;
                var6 = var3.primaryColor;
                var _closure2_slot4 = var6;
                var3 = null;
                if(!(var3 != var9)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var18 = var9;
case 11:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 11;
                var3 = var13[var7];
                var11 = var14.bind(var4)(var3);
                var10 = var11.useToken;
                var5 = _closure1_slot1;
                var3 = 3;
                var8 = var13[var3];
                var8 = var5.bind(var4)(var8);
                var8 = var8.colors;
                var8 = var8.INTERACTIVE_NORMAL;
                var11 = var10.bind(var11)(var8);
                var _closure2_slot5 = var11;
                var8 = var13[var7];
                var17 = var14.bind(var4)(var8);
                var10 = var17.useToken;
                var8 = var13[var3];
                var8 = var5.bind(var4)(var8);
                var8 = var8.colors;
                var8 = var8.INTERACTIVE_ACTIVE;
                var10 = var10.bind(var17)(var8);
                var _closure2_slot6 = var10;
                var8 = var13[var7];
                var19 = var14.bind(var4)(var8);
                var17 = var19.useToken;
                var8 = var13[var3];
                var8 = var5.bind(var4)(var8);
                var8 = var8.colors;
                var8 = var8.INTERACTIVE_NORMAL;
                var8 = var17.bind(var19)(var8, var18);
                var _closure2_slot7 = var8;
                var7 = var13[var7];
                var17 = var14.bind(var4)(var7);
                var7 = var17.useToken;
                var3 = var13[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.colors;
                var3 = var3.INTERACTIVE_ACTIVE;
                var7 = var7.bind(var17)(var3, var18);
                var _closure2_slot8 = var7;
                var3 = 12;
                var3 = var13[var3];
                var14 = var14.bind(var4)(var3);
                var3 = var14.useLaunchWelcomeNuxVisible;
                var3 = var3.bind(var14)();
                var17 = var3.isNuxVisible;
                var _closure2_slot9 = var17;
                var3 = 13;
                var3 = var13[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var14 = var3.bottom;
                var _closure2_slot10 = var14;
                var3 = 14;
                var3 = var13[var3];
                var3 = var5.bind(var4)(var3);
                var13 = var3.bind(var4)();
                var _closure2_slot11 = var13;
                var3 = _closure1_slot6;
                var5 = var3.bind(var4)();
                var _closure2_slot12 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useMemo;
                var2 = new Array(13);
                var2[0] = var17;
                var2[1] = var16;
                var2[2] = var15;
                var2[3] = var14;
                var2[4] = var13;
                var2[5] = var12;
                var2[6] = var11;
                var2[7] = var10;
                var2[8] = var9;
                var2[9] = var8;
                var2[10] = var7;
                var2[11] = var6;
                var2[12] = var5;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure2_slot9;
                        var3 = undefined;
                        if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var1 = _closure2_slot0;
                        var2 = var1.tabBarNux;
                        var1 = new Array(2);
                        var1[0] = var2;
                        var4 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var2 = _closure2_slot0;
                        var2 = var2.tabBarNuxBackground;
                        _fun0004_ip = 17; continue _fun0004;
case 15:
                        var2 = _closure2_slot2;
case 17:
                        var1[1] = var2;
                        var3 = var1;
case 13:
                        var1 = _closure2_slot0;
                        var1 = var1.tabBarTabletHeight;
                        var2 = new Array(2);
                        var2[0] = var1;
                        var1 = {};
                        var4 = _closure2_slot10;
                        var1['marginBottom'] = var4;
                        var2[1] = var1;
                        var1 = _closure2_slot11;
                        var6 = undefined;
                        if(!var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var1 = _closure2_slot0;
                        var4 = var1.tabBarYouTablet;
                        var1 = new Array(3);
                        var1[0] = var4;
                        var4 = {};
                        var5 = _closure2_slot12;
                        var4['width'] = var5;
                        var1[1] = var4;
                        var1[2] = var2;
                        var6 = var1;
case 18:
                        var1 = _closure2_slot11;
                        var10 = undefined;
                        if(!var1) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var1 = _closure2_slot0;
                        var4 = var1.tabBarIcymTablet;
                        var1 = new Array(2);
                        var1[0] = var4;
                        var1[1] = var2;
                        var10 = var1;
case 20:
                        var1 = _closure2_slot11;
                        var8 = undefined;
                        if(!var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var1 = _closure2_slot0;
                        var4 = var1.tabBarNotificationsTablet;
                        var1 = new Array(2);
                        var1[0] = var4;
                        var1[1] = var2;
                        var8 = var1;
case 22:
                        var1 = _closure2_slot11;
                        var5 = undefined;
                        if(!var1) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                        var1 = _closure2_slot0;
                        var4 = var1.tabBarSettingsTablet;
                        var1 = new Array(2);
                        var1[0] = var4;
                        var1[1] = var2;
                        var5 = var1;
case 24:
                        var1 = _closure2_slot11;
                        var11 = undefined;
                        if(!var1) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var1 = _closure2_slot0;
                        var11 = var1.tabBarGuildsTablet;
case 26:
                        var1 = _closure2_slot0;
                        var2 = var1.tabBarIcon;
                        var13 = {};
                        var14 = var1.tabBar;
                        var15 = var13;
                        var1 = copyDataProperties(var15, var14);
                        var14 = _closure2_slot1;
                        var15 = var13;
                        var1 = copyDataProperties(var15, var14);
                        var1 = _closure2_slot11;
                        var9 = undefined;
                        if(!var1) { _fun0004_ip = 8; continue _fun0004 }
case 28:
                        var1 = {};
                        var12 = _closure2_slot1;
                        var4 = null;
                        if(!(var4 == var12)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var4 = _closure2_slot0;
                        var4 = var4.tabBarTablet;
                        _fun0004_ip = 31; continue _fun0004;
case 29:
                        var4 = {};
case 31:
                        var15 = var1;
                        var14 = var4;
                        var4 = copyDataProperties(var15, var14);
                        var4 = _closure2_slot0;
                        var4 = var4.tabBarTabletHeight;
                        var12 = var4.height;
                        var4 = _closure2_slot10;
                        var12 = var12 + var4;
                        var4 = 'height';
                        var1[var4] = var12;
                        var9 = var1;
case 8:
                        var1 = {};
                        var4 = {};
                        var12 = new Array(2);
                        var12[0] = var13;
                        var12[1] = var9;
                        var4['tabBarStyle'] = var12;
                        var12 = _closure2_slot11;
                        var12 = !var12;
                        var4['tabBarShowLabel'] = var12;
                        var12 = _closure2_slot5;
                        var4['tabBarInactiveTintColor'] = var12;
                        var12 = _closure2_slot6;
                        var4['tabBarActiveTintColor'] = var12;
                        var1['tabBarStyles'] = var4;
                        var4 = {};
                        var4['tabBarItemStyle'] = var11;
                        var1['tabBarStylesGuilds'] = var4;
                        var4 = {};
                        var4['tabBarItemStyle'] = var10;
                        var1['tabBarStylesIcym'] = var4;
                        var4 = {};
                        var4['tabBarItemStyle'] = var10;
                        var1['tabBarStylesDiscovery'] = var4;
                        var4 = {};
                        var4['tabBarItemStyle'] = var8;
                        var1['tabBarStylesNotifications'] = var4;
                        var4 = {};
                        var10 = _closure2_slot3;
                        var8 = null;
                        if(!(var8 != var10)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                        var8 = _closure2_slot0;
                        var10 = var8.tabBarYou;
                        _fun0004_ip = 34; continue _fun0004;
case 32:
                        var8 = _closure2_slot0;
                        var10 = var8.tabBar;
case 34:
                        var8 = new Array(2);
                        var8[0] = var10;
                        var8[1] = var9;
                        var4['tabBarStyle'] = var8;
                        var8 = function tabBarBackground() {
                            var4 = _closure1_slot4;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = _closure2_slot3;
                            var1['theme'] = var6;
                            var5 = _closure2_slot4;
                            var1['backgroundColor'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var4['tabBarBackground'] = var8;
                        var8 = _closure2_slot7;
                        var4['tabBarInactiveTintColor'] = var8;
                        var7 = _closure2_slot8;
                        var4['tabBarActiveTintColor'] = var7;
                        var4['tabBarItemStyle'] = var6;
                        var1['tabBarStylesYouTab'] = var4;
                        var4 = {};
                        var4['tabBarItemStyle'] = var5;
                        var1['tabBarStylesSettings'] = var4;
                        var1['tabBarItemStyle'] = var3;
                        var1['tabBarIconStyle'] = var2;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            }
        };
        var3['useTabBarStylesComputed'] = var2;
        return var1;
    }
})();