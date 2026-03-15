// app/modules/premium/perks_state/PerksStateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function hasPerk(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = arg2;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = var1.activePerksBitmask;
            var1 = global;
            var4 = var1.Math;
            var3 = var4.floor;
            var2 = 64;
            var1 = var8 / var2;
            var3 = var3.bind(var4)(var1);
            var1 = var13.length;
            var4 = var3 >= var1;
            var1 = !var4;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 1;
            var4 = var10[var6];
            var7 = undefined;
            var5 = var9.bind(var7)(var4);
            var4 = var5.has;
            var11 = var10[var6];
            var12 = var9.bind(var7)(var11);
            var11 = var12.deserialize;
            var3 = var13[var3];
            var3 = var11.bind(var12)(var3);
            var6 = var10[var6];
            var7 = var9.bind(var7)(var6);
            var6 = var7.getFlag;
            var2 = var8 % var2;
            var2 = var6.bind(var7)(var2);
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function getPerkSource(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var3 = null;
            if(!(var3 == var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = undefined;
            return var1;
case 6:
            var2 = var6.configByPerk;
            var1 = global;
            var1 = var1.String;
            var5 = undefined;
            var1 = var1.bind(var5)(var4);
            var2 = var2[var1];
            var7 = var3 == var2;
            var1 = undefined;
            if(var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var2.source;
case 8:
            if(!(var3 == var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = _closure1_slot4;
            var4 = var1.bind(var5)(var6, var4);
            var1 = undefined;
            if(!var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.PerkSource;
            var4 = var3.SOURCE_NITRO;
            var3 = new Array(1);
            var3[0] = var4;
            var1 = var3;
case 12:
            _fun0002_ip = 14; continue _fun0002;
case 10:
            var1 = var2.source;
case 14:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var9 = var8[var1];
    var6 = metroImportDefault;
    var1 = undefined;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot3 = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/perks_state/PerksStateUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function parseServerPerks(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 15; continue _fun0003 }
case 7:
            var4 = {};
            var2 = global;
            var6 = var2.Object;
            var5 = var6.entries;
            var2 = var3.config_by_perk;
            var11 = var5.bind(var6)(var2);
            var2 = var11.length;
            var10 = 0;
            var2 = var10 < var2;
            var9 = undefined;
            var7 = 2;
            var6 = 1;
            var5 = 0;
            if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var12 = var11[var5];
            var2 = _closure1_slot3;
            var2 = var2.bind(var9)(var12, var7);
            var12 = var2[var10];
            var15 = var2[var6];
            var2 = {};
            var13 = var15.source;
            var2['source'] = var13;
            var13 = var15.increased_file_upload_size;
            var14 = var1 != var13;
            var13 = undefined;
            if(!var14) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var14 = {};
            var16 = var15.increased_file_upload_size;
            var16 = var16.max_size;
            var14['maxSize'] = var16;
            var13 = var14;
case 18:
            var2['increasedFileUploadSize'] = var13;
            var13 = var15.increased_guild_limit;
            var14 = var1 != var13;
            var13 = undefined;
            if(!var14) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var14 = {};
            var15 = var15.increased_guild_limit;
            var15 = var15.max_guilds;
            var14['maxGuilds'] = var15;
            var13 = var14;
case 20:
            var2['increasedGuildLimit'] = var13;
            var4[var12] = var2;
            var5 = var5 + 1;
            var2 = var11.length;
            if(var5 < var2) { _fun0003_ip = 17; continue _fun0003 }
case 16:
            var2 = {};
            var5 = var3.active_perks_bitmask;
            var2['activePerksBitmask'] = var5;
            var2['configByPerk'] = var4;
            var3 = var3.rules_version;
            var2['rulesVersion'] = var3;
            return var2;
case 15:
            return var1;
        }
    };
    var3['parseServerPerks'] = var6;
    var3['hasPerk'] = var5;
    var3['getPerkSource'] = var4;
    var2 = function getPerkConfig(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var6)) { _fun0004_ip = 22; continue _fun0004 }
case 7:
            var3 = var6.configByPerk;
            var2 = global;
            var2 = var2.String;
            var4 = undefined;
            var2 = var2.bind(var4)(var5);
            var2 = var3[var2];
            if(!(var1 == var2)) { _fun0004_ip = 23; continue _fun0004 }
case 22:
            var1 = undefined;
            return var1;
case 23:
            var1 = {};
            var3 = _closure1_slot5;
            var3 = var3.bind(var4)(var6, var5);
            var1['source'] = var3;
            var3 = var2.increasedFileUploadSize;
            var1['increasedFileUploadSize'] = var3;
            var2 = var2.increasedGuildLimit;
            var1['increasedGuildLimit'] = var2;
            return var1;
        }
    };
    var3['getPerkConfig'] = var2;
    return var1;
})();