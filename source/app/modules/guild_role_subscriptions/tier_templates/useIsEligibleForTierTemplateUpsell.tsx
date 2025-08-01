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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsEligibleForTierTemplateUpsell(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var2 = var4[var2];
            var7 = undefined;
            var9 = var3.bind(var7)(var2);
            var6 = var9.useStateFromStores;
            var10 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var6.bind(var9)(var2, var1);
            var1 = 3;
            var2 = var4[var1];
            var6 = var3.bind(var7)(var2);
            var2 = var6.useGuildEligibleForTierTemplates;
            var2 = var2.bind(var6)(var8);
            var1 = var4[var1];
            var3 = var3.bind(var7)(var1);
            var1 = var3.useUserEligibleForTierTemplates;
            var4 = var1.bind(var3)();
            var3 = null;
            var1 = var3 == var9;
            var6 = undefined;
            if(var1) { _fun0001_ip = 143; continue _fun0001 }
 117:
            var11 = var9.features;
            var10 = var11.has;
            var1 = _closure1_slot3;
            var1 = var1.ROLE_SUBSCRIPTIONS_ENABLED;
            var6 = var10.bind(var11)(var1);
 143:
            var1 = true;
            var1 = var1 === var6;
            if(!var1) { _fun0001_ip = 193; continue _fun0001 }
 152:
            var3 = var3 == var9;
            var6 = undefined;
            if(var3) { _fun0001_ip = 187; continue _fun0001 }
 161:
            var11 = var9.features;
            var10 = var11.has;
            var3 = _closure1_slot3;
            var3 = var3.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
            var6 = var10.bind(var11)(var3);
 187:
            var3 = false;
            var1 = var3 === var6;
 193:
            var6 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 4;
            var3 = var10[var3];
            var6 = var6.bind(var7)(var3);
            var3 = var6.canManageGuildRoleSubscriptions;
            var3 = var3.bind(var6)(var9);
            var6 = var1;
            if(!var1) { _fun0001_ip = 233; continue _fun0001 }
 230:
            var6 = var4;
 233:
            if(!var6) { _fun0001_ip = 239; continue _fun0001 }
 236:
            var6 = var3;
 239:
            if(!var6) { _fun0001_ip = 295; continue _fun0001 }
 242:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 5;
            var5 = var9[var5];
            var5 = var6.bind(var7)(var5);
            var7 = var5.GuildRoleSubscriptionsTierTemplatesExperiment;
            var6 = var7.trackExposure;
            var5 = {};
            var5['guildId'] = var8;
            var8 = 'ca30d9_1';
            var5['location'] = var8;
            var5 = var6.bind(var7)(var5);
 295:
            if(!var1) { _fun0001_ip = 301; continue _fun0001 }
 298:
            var1 = var4;
 301:
            if(!var1) { _fun0001_ip = 307; continue _fun0001 }
 304:
            var1 = var3;
 307:
            if(!var1) { _fun0001_ip = 313; continue _fun0001 }
 310:
            var1 = var2;
 313:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();