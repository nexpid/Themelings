// app/modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildPowerupNewPerkMarketingVersion;
    var _closure1_slot4 = var7;
    var4 = var4.NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupNewPerkMarketingVersion(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var5 = undefined;
            var4 = var10.bind(var5)(var3);
            var3 = var4.useGameServerEnabled;
            var9 = 'useGuildPowerupNewPerkMarketingVersion';
            var7 = var3.bind(var4)(var12, var9);
            var _closure2_slot2 = var7;
            var3 = 5;
            var3 = var11[var3];
            var13 = var10.bind(var5)(var3);
            var6 = var13.useStateFromStores;
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
                    var2 = _closure1_slot6;
                    var2 = var2.GAME_SERVERS;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var6 = var6.bind(var13)(var4, var3);
            var _closure2_slot3 = var6;
            var3 = 6;
            var3 = var11[var3];
            var4 = var10.bind(var5)(var3);
            var3 = var4.useServerThemeEnabled;
            var4 = var3.bind(var4)(var12, var9);
            var3 = 7;
            var3 = var11[var3];
            var5 = var10.bind(var5)(var3);
            var3 = var5.useServerThemeUserEnabled;
            var3 = var3.bind(var5)(var9);
            var5 = var4;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var3;
case 4:
            var _closure2_slot4 = var5;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
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
                    var2 = 8;
                    var2 = var8[var2];
                    var2 = var7.bind(var9)(var2);
                    var2 = var2.GUILD_POWERUP_GUILD_THEME_SKU_ID;
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
                    var6 = 8;
                    var6 = var10[var6];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.GUILD_POWERUP_GUILD_THEME_SKU_ID;
                    var1 = var7[var6];
case 9:
                    var1 = var5 != var1;
                    var6 = _closure2_slot4;
                    if(!var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                    if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 15:
                    var1 = _closure1_slot4;
                    var1 = var1.GUILD_THEME;
                    return var1;
case 12:
                    var1 = _closure2_slot1;
                    var2 = var5 == var1;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var2 = _closure2_slot1;
                    var6 = var2.allPowerups;
                    var2 = var5 == var6;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 16; continue _fun0003 }
case 18:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 8;
                    var2 = var8[var2];
                    var2 = var7.bind(var9)(var2);
                    var2 = var2.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
                    var1 = var6[var2];
case 16:
                    var2 = var5 != var1;
                    var1 = _closure2_slot1;
                    var6 = var5 == var1;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var6 = _closure2_slot1;
                    var7 = var6.unlockedPowerups;
                    var6 = var5 == var7;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 19; continue _fun0003 }
case 21:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var6 = 8;
                    var6 = var10[var6];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
                    var1 = var7[var6];
case 19:
                    var1 = var5 != var1;
                    if(!var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    if(var1) { _fun0003_ip = 22; continue _fun0003 }
case 24:
                    var1 = _closure1_slot4;
                    var1 = var1.FILE_UPLOAD_250_MB;
                    _fun0003_ip = 25; continue _fun0003;
case 22:
                    var6 = global;
                    var8 = var6.Array;
                    var7 = var8.from;
                    var9 = _closure1_slot5;
                    var2 = _closure1_slot4;
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
                            if(var4) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                            var3 = _closure2_slot1;
                            var4 = var3.unlockedPowerups;
                            var3 = var2 == var4;
                            var1 = undefined;
                            if(var3) { _fun0004_ip = 26; continue _fun0004 }
case 28:
                            var3 = arg1;
                            var1 = var4[var3];
case 26:
                            var1 = var2 != var1;
                            return var1;
                        }
                    };
                    var2 = var7.bind(var8)(var2);
                    if(var2) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var2 = _closure1_slot4;
                    var2 = var2.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    _fun0003_ip = 31; continue _fun0003;
case 29:
                    var7 = _closure2_slot2;
                    if(!var7) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0003_ip = 32; continue _fun0003 }
case 34:
                    var3 = _closure1_slot4;
                    var3 = var3.GAME_SERVER_HOSTING;
                    _fun0003_ip = 35; continue _fun0003;
case 32:
                    var8 = var6.Array;
                    var7 = var8.from;
                    var9 = _closure1_slot5;
                    var6 = _closure1_slot4;
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
                            if(var4) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                            var3 = _closure2_slot1;
                            var4 = var3.unlockedPowerups;
                            var3 = var2 == var4;
                            var1 = undefined;
                            if(var3) { _fun0005_ip = 26; continue _fun0005 }
case 28:
                            var3 = arg1;
                            var1 = var4[var3];
case 26:
                            var1 = var2 != var1;
                            return var1;
                        }
                    };
                    var6 = var6.bind(var7)(var4);
                    var4 = 0;
                    if(var6) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var5 = _closure1_slot4;
                    var4 = var5.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
case 36:
                    var3 = var4;
case 35:
                    var2 = var3;
case 31:
                    var1 = var2;
case 25:
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