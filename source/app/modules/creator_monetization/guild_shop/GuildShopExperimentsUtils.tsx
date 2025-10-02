// app/modules/creator_monetization/guild_shop/GuildShopExperimentsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization/guild_shop/GuildShopExperimentsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsEligibleForSubscriptionsInGuildShop(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg2;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var1 = var6[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var7 = var1.ShowGuildRoleSubInGuildShopExperiment;
            var2 = var7.useExperiment;
            var1 = {};
            var1['location'] = var5;
            var1 = var2.bind(var7)(var1);
            var1 = var1.enabled;
            var2 = 1;
            var2 = var6[var2];
            var4 = var4.bind(var3)(var2);
            var3 = var4.useGuildEligibleForGuildProducts;
            var2 = arg1;
            var2 = var3.bind(var4)(var2, var5);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useIsEligibleForSubscriptionsInGuildShop'] = var4;
    var4 = function isEligibleForSubscriptionsInGuildShop(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg2;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var1 = var6[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var7 = var1.ShowGuildRoleSubInGuildShopExperiment;
            var2 = var7.getCurrentConfig;
            var1 = {};
            var1['location'] = var5;
            var1 = var2.bind(var7)(var1);
            var1 = var1.enabled;
            var2 = 1;
            var2 = var6[var2];
            var4 = var4.bind(var3)(var2);
            var3 = var4.isGuildEligibleForGuildProducts;
            var2 = arg1;
            var2 = var3.bind(var4)(var2, var5);
            if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['isEligibleForSubscriptionsInGuildShop'] = var4;
    var2 = function useIsEligibleForGuildShopPreview(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.GuildShopPreviewExperiment;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useIsEligibleForGuildShopPreview'] = var2;
    return var1;
})();