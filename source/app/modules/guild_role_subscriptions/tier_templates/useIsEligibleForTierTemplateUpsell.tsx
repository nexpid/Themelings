// app/modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsEligibleForTierTemplateUpsell(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 2;
            var5 = var7[var5];
            var6 = undefined;
            var9 = var2.bind(var6)(var5);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot2;
            var5 = new Array(1);
            var5[0] = var10;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var8.bind(var9)(var5, var1);
            var1 = 3;
            var1 = var7[var1];
            var2 = var2.bind(var6)(var1);
            var1 = var2.useGuildEligibleForTierTemplates;
            var2 = var1.bind(var2)(var4);
            var4 = null;
            var1 = var4 == var5;
            var7 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var5.features;
            var8 = var9.has;
            var1 = _closure1_slot3;
            var1 = var1.ROLE_SUBSCRIPTIONS_ENABLED;
            var7 = var8.bind(var9)(var1);
case 2:
            var1 = true;
            var1 = var1 === var7;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var4 == var5;
            var7 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var5.features;
            var8 = var9.has;
            var4 = _closure1_slot3;
            var4 = var4.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
            var7 = var8.bind(var9)(var4);
case 6:
            var4 = false;
            var1 = var4 === var7;
case 4:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 4;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.canManageGuildRoleSubscriptions;
            var3 = var3.bind(var4)(var5);
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var3;
case 8:
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();