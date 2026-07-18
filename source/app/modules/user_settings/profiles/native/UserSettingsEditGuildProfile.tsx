// app/modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var12 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var9['borderRadius'] = var13;
    var13 = var12.hairlineWidth;
    var9['borderTopWidth'] = var13;
    var12 = var12.hairlineWidth;
    var9['borderBottomWidth'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var9['borderColor'] = var10;
    var10 = 'hidden';
    var9['overflow'] = var10;
    var4['guildSelector'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsEditGuildProfile() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = function onSelectGuild(arg1) {
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.setCurrentGuild;
                var2 = arg1;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var _closure2_slot4 = var1;
            var2 = _closure1_slot9;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 7;
            var3 = var8[var2];
            var5 = var10.bind(var4)(var3);
            var3 = 8;
            var3 = var8[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.USER_SETTINGS_GUILD_PROFILE;
            var3 = var5.bind(var4)(var3);
            var6 = var3.analyticsLocations;
            var5 = _closure1_slot0;
            var3 = 9;
            var7 = var8[var3];
            var13 = var5.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var12.bind(var13)(var11, var7);
            var _closure2_slot0 = var11;
            var7 = 10;
            var7 = var8[var7];
            var7 = var10.bind(var4)(var7);
            var10 = var7.bind(var4)();
            var7 = var10.guild;
            var _closure2_slot1 = var7;
            var10 = var10.resetPending;
            var _closure2_slot2 = var10;
            var3 = var8[var3];
            var10 = var5.bind(var4)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.showNotice;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var8.bind(var10)(var5, var3);
            var _closure2_slot3 = var3;
            var10 = _closure1_slot3;
            var8 = var10.useEffect;
            var5 = new Array(2);
            var5[0] = var11;
            var5[1] = var7;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot1;
                    var2 = var4 != var3;
case 2:
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var3 = var4[var3];
                    var5 = undefined;
                    var8 = var6.bind(var5)(var3);
                    var7 = var8.setCurrentGuild;
                    var6 = _closure2_slot1;
                    var3 = var6.id;
                    var3 = var7.bind(var8)(var3);
                    var3 = _closure1_slot1;
                    var2 = 12;
                    var2 = var4[var2];
                    var4 = var3.bind(var5)(var2);
                    var8 = _closure2_slot0;
                    var3 = var8.id;
                    var7 = var8.getAvatarURL;
                    var2 = var6.id;
                    var1 = 80;
                    var2 = var7.bind(var8)(var2, var1);
                    var1 = {};
                    var6 = var6.id;
                    var1['guildId'] = var6;
                    var6 = true;
                    var1['dispatchWait'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var10)(var3, var5);
            var3 = null;
            if(!(var3 != var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var3 != var7)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var5 = _closure1_slot8;
            var19 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = var12[var2];
            var2 = var19.bind(var4)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var10 = _closure1_slot7;
            var8 = _closure1_slot4;
            var6 = {};
            var9 = var9.guildSelector;
            var6['style'] = var9;
            var9 = 14;
            var9 = var12[var9];
            var9 = var19.bind(var4)(var9);
            var14 = var9.TableRow;
            var13 = {};
            var9 = _closure1_slot1;
            var18 = 15;
            var16 = var12[var18];
            var17 = var9.bind(var4)(var16);
            var16 = {};
            var16['guild'] = var7;
            var18 = var12[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.GuildIconSizes;
            var18 = var18.XSMALL;
            var16['size'] = var18;
            var16 = var10.bind(var4)(var17, var16);
            var13['icon'] = var16;
            var16 = var7.name;
            var13['label'] = var16;
            var16 = true;
            var13['arrow'] = var16;
            var15 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = function onConfirm() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var4 = null;
                        var2 = var4 != var2;
                        if(!var2) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                        var3 = _closure2_slot1;
                        var2 = var4 != var3;
case 2:
                        if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 5:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 17;
                        var4 = var2[var4];
                        var7 = undefined;
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.openLazy;
                        var6 = _closure1_slot0;
                        var3 = 19;
                        var3 = var2[var3];
                        var6 = var6.bind(var7)(var3);
                        var3 = 18;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var3 = var6.bind(var7)(var3, var2);
                        var2 = {};
                        var6 = _closure2_slot0;
                        var2['user'] = var6;
                        var6 = _closure2_slot1;
                        var2['selectedGuild'] = var6;
                        var1 = _closure2_slot4;
                        var2['onSelectGuild'] = var1;
                        var1 = 'GuildSelectComponentActionSheet';
                        var1 = var4.bind(var5)(var3, var1, var2);
case 9:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onConfirm'] = var4;
                var5 = _closure2_slot3;
                var2['hasEdits'] = var5;
                var4 = _closure2_slot2;
                var2['resetPending'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var13['onPress'] = var15;
            var13 = var10.bind(var4)(var14, var13);
            var6['children'] = var13;
            var8 = var10.bind(var4)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var8 = 20;
            var8 = var12[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['currentUser'] = var11;
            var14 = var11.id;
            var13 = var7.id;
            var7 = global;
            var7 = var7.HermesInternal;
            var12 = var7.concat;
            var11 = '';
            var7 = '-';
            var7 = var12.bind(var11)(var14, var7, var13);
            var7 = var10.bind(var4)(var9, var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 6:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();