// app/modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot4 = var7;
    var7 = var4.BoostedGuildTiers;
    var _closure1_slot5 = var7;
    var4 = var4.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildPowerupBoostLevelProgress(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var7 = undefined;
            var1 = var5.bind(var7)(var1);
            var1 = var1.bind(var7)(var4);
            var6 = _closure1_slot0;
            var5 = 3;
            var4 = var9[var5];
            var12 = var6.bind(var7)(var4);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot3;
            var10 = new Array(1);
            var10[0] = var8;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var4 = var3.bind(var4)(var1);
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 41; continue _fun0002 }
 35:
                    var1 = var4.premiumTier;
 41:
                    if(!(var3 == var1)) { _fun0002_ip = 55; continue _fun0002 }
 45:
                    var2 = _closure1_slot5;
                    var1 = var2.NONE;
 55:
                    return var1;
                }
            };
            var4 = var11.bind(var12)(var10, var4);
            var5 = var9[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var8;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 61; continue _fun0003 }
 35:
                    var4 = var3.features;
                    var3 = var4.has;
                    var1 = _closure1_slot6;
                    var1 = var1.PREMIUM_TIER_3_OVERRIDE;
                    var2 = var3.bind(var4)(var1);
 61:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5, var2);
            var2 = 0;
            if(var5) { _fun0001_ip = 133; continue _fun0001 }
 125:
            var3 = _closure1_slot4;
            var2 = var3[var4];
 133:
            var1 = var1.available;
            var1 = var2 + var1;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getGuildPowerupBoostLevelProgress(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.getGuildPowerupsBoostCount;
            var1 = var1.bind(var4)(var6);
            var5 = _closure1_slot3;
            var4 = var5.getGuild;
            var5 = var4.bind(var5)(var6);
            var4 = null;
            var6 = var4 == var5;
            if(var6) { _fun0004_ip = 68; continue _fun0004 }
 62:
            var3 = var5.premiumTier;
 68:
            if(!(var4 == var3)) { _fun0004_ip = 82; continue _fun0004 }
 72:
            var4 = _closure1_slot5;
            var3 = var4.NONE;
 82:
            var2 = _closure1_slot4;
            var2 = var2[var3];
            var1 = var1.available;
            var1 = var2 + var1;
            return var1;
        }
    };
    var3['getGuildPowerupBoostLevelProgress'] = var2;
    return var1;
})();