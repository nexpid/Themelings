// app/modules/guild_products/GuildProductsExperimentUtils.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_products/GuildProductsExperimentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildEligibleForGuildProducts(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.GuildProductsExperiment;
            var2 = var3.useExperiment;
            var1 = {};
            var6 = null;
            if(!(var6 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot2;
case 2:
            var1['guildId'] = var4;
            var4 = arg2;
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['useGuildEligibleForGuildProducts'] = var4;
    var2 = function isGuildEligibleForGuildProducts(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.GuildProductsExperiment;
            var2 = var3.getCurrentConfig;
            var1 = {};
            var6 = null;
            if(!(var6 == var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var4 = _closure1_slot2;
case 2:
            var1['guildId'] = var4;
            var4 = arg2;
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['isGuildEligibleForGuildProducts'] = var2;
    return var1;
})();