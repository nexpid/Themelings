// app/modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildPowerupNewPerkMarketingVersion;
    var _closure1_slot5 = var7;
    var4 = var4.NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot7 = var7;
    var4 = var4.Permissions;
    var _closure1_slot8 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupNewPerkMarketingVersion(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var10 = arg2;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var10;
            var7 = _closure1_slot0;
            var13 = _closure1_slot1;
            var3 = 5;
            var3 = var13[var3];
            var5 = undefined;
            var4 = var7.bind(var5)(var3);
            var3 = var4.useGameServerEnabled;
            var12 = 'useGuildPowerupNewPerkMarketingVersion';
            var9 = var3.bind(var4)(var6, var12);
            var _closure2_slot2 = var9;
            var11 = 6;
            var3 = var13[var11];
            var14 = var7.bind(var5)(var3);
            var8 = var14.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = var3.features;
                    var3 = var4.has;
                    var2 = _closure1_slot7;
                    var2 = var2.GAME_SERVERS;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var8 = var8.bind(var14)(var4, var3);
            var _closure2_slot3 = var8;
            var3 = 7;
            var3 = var13[var3];
            var4 = var7.bind(var5)(var3);
            var3 = var4.useServerThemeEnabled;
            var4 = var3.bind(var4)(var6, var12);
            var3 = 8;
            var3 = var13[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var7.useServerThemeUserEnabled;
            var3 = var3.bind(var7)(var12);
            var7 = var4;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var3;
case 4:
            var _closure2_slot4 = var7;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var11];
            var11 = var4.bind(var5)(var3);
            var5 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = _closure1_slot3;
            var4[1] = var3;
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var2 = _closure1_slot8;
                var2 = var2.MANAGE_GUILD;
                var6 = _closure1_slot3;
                var5 = var6.getGuild;
                var1 = _closure2_slot0;
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var5.bind(var11)(var4, var3);
            var _closure2_slot5 = var5;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(6);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var7;
            var2[4] = var6;
            var2[5] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var2 = var5 == var1;
                    var9 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = _closure2_slot1;
                    var6 = var2.allPowerups;
                    var2 = var5 == var6;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var7.bind(var9)(var2);
                    var2 = var2.GUILD_POWERUP_TAG_SKU_ID;
                    var1 = var6[var2];
case 6:
                    var2 = var5 != var1;
                    var1 = _closure2_slot1;
                    var6 = var5 == var1;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var6 = _closure2_slot1;
                    var7 = var6.unlockedPowerups;
                    var6 = var5 == var7;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var6 = 9;
                    var6 = var10[var6];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.GUILD_POWERUP_TAG_SKU_ID;
                    var1 = var7[var6];
case 9:
                    var1 = var5 != var1;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 15:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 10;
                    var2 = var7[var2];
                    var7 = var6.bind(var9)(var2);
                    var6 = var7.canUseMobileServerTagSettings;
                    var2 = _closure2_slot0;
                    var2 = var6.bind(var7)(var2);
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 16:
                    var1 = _closure1_slot5;
                    var1 = var1.GUILD_TAG;
                    return var1;
case 12:
                    var1 = _closure2_slot1;
                    var2 = var5 == var1;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var2 = _closure2_slot1;
                    var6 = var2.allPowerups;
                    var2 = var5 == var6;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 19:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var7.bind(var9)(var2);
                    var2 = var2.GUILD_POWERUP_GUILD_THEME_SKU_ID;
                    var1 = var6[var2];
case 17:
                    var2 = var5 != var1;
                    var1 = _closure2_slot1;
                    var6 = var5 == var1;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var6 = _closure2_slot1;
                    var7 = var6.unlockedPowerups;
                    var6 = var5 == var7;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 20; continue _fun0003 }
case 22:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var6 = 9;
                    var6 = var10[var6];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.GUILD_POWERUP_GUILD_THEME_SKU_ID;
                    var1 = var7[var6];
case 20:
                    var1 = var5 != var1;
                    var6 = _closure2_slot4;
                    if(!var6) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    if(!var2) { _fun0003_ip = 23; continue _fun0003 }
case 25:
                    if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 26:
                    var1 = _closure1_slot5;
                    var1 = var1.GUILD_THEME;
                    return var1;
case 23:
                    var1 = _closure2_slot1;
                    var2 = var5 == var1;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var2 = _closure2_slot1;
                    var6 = var2.allPowerups;
                    var2 = var5 == var6;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 27; continue _fun0003 }
case 29:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var7.bind(var9)(var2);
                    var2 = var2.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
                    var1 = var6[var2];
case 27:
                    var2 = var5 != var1;
                    var1 = _closure2_slot1;
                    var6 = var5 == var1;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var6 = _closure2_slot1;
                    var7 = var6.unlockedPowerups;
                    var6 = var5 == var7;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 30; continue _fun0003 }
case 32:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var6 = 9;
                    var6 = var10[var6];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
                    var1 = var7[var6];
case 30:
                    var1 = var5 != var1;
                    if(!var2) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    if(var1) { _fun0003_ip = 33; continue _fun0003 }
case 35:
                    var1 = _closure1_slot5;
                    var1 = var1.FILE_UPLOAD_250_MB;
                    _fun0003_ip = 36; continue _fun0003;
case 33:
                    var6 = global;
                    var8 = var6.Array;
                    var7 = var8.from;
                    var9 = _closure1_slot6;
                    var2 = _closure1_slot5;
                    var2 = var2.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    var2 = var9[var2];
                    var8 = var7.bind(var8)(var2);
                    var7 = var8.some;
                    var2 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            var4 = var2 == var1;
                            var1 = undefined;
                            if(var4) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                            var3 = _closure2_slot1;
                            var4 = var3.unlockedPowerups;
                            var3 = var2 == var4;
                            var1 = undefined;
                            if(var3) { _fun0004_ip = 37; continue _fun0004 }
case 39:
                            var3 = arg1;
                            var1 = var4[var3];
case 37:
                            var1 = var2 != var1;
                            return var1;
                        }
                    };
                    var2 = var7.bind(var8)(var2);
                    if(var2) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                    var2 = _closure1_slot5;
                    var2 = var2.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    _fun0003_ip = 42; continue _fun0003;
case 40:
                    var7 = _closure2_slot2;
                    if(!var7) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0003_ip = 43; continue _fun0003 }
case 45:
                    var3 = _closure1_slot5;
                    var3 = var3.GAME_SERVER_HOSTING;
                    _fun0003_ip = 46; continue _fun0003;
case 43:
                    var8 = var6.Array;
                    var7 = var8.from;
                    var9 = _closure1_slot6;
                    var6 = _closure1_slot5;
                    var6 = var6.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.some;
                    var4 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            var4 = var2 == var1;
                            var1 = undefined;
                            if(var4) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                            var3 = _closure2_slot1;
                            var4 = var3.unlockedPowerups;
                            var3 = var2 == var4;
                            var1 = undefined;
                            if(var3) { _fun0005_ip = 37; continue _fun0005 }
case 39:
                            var3 = arg1;
                            var1 = var4[var3];
case 37:
                            var1 = var2 != var1;
                            return var1;
                        }
                    };
                    var6 = var6.bind(var7)(var4);
                    var4 = 0;
                    if(var6) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                    var5 = _closure1_slot5;
                    var4 = var5.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
case 47:
                    var3 = var4;
case 46:
                    var2 = var3;
case 42:
                    var1 = var2;
case 36:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();