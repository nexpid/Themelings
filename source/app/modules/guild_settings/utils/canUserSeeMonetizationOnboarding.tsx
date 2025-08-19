// app/modules/guild_settings/utils/canUserSeeMonetizationOnboarding.tsx
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/utils/canUserSeeMonetizationOnboarding.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function canUserSeeMonetizationOnboarding(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var10 = var4.ownerId;
            var3 = _closure1_slot2;
            var2 = var3.getCurrentUser;
            var2 = var2.bind(var3)();
            var3 = null;
            var3 = var3 == var2;
            var7 = undefined;
            var9 = undefined;
            if(var3) { _fun0001_ip = 43; continue _fun0001 }
 38:
            var9 = var2.id;
 43:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 1;
            var1 = var8[var5];
            var3 = var6.bind(var7)(var1);
            var2 = var3.canSeeGuildRoleSubscriptionSettings;
            var1 = {};
            var1['guild'] = var4;
            var9 = var10 === var9;
            var1['isOwner'] = var9;
            var5 = var8[var5];
            var9 = var6.bind(var7)(var5);
            var5 = var9.canManageGuildRoleSubscriptions;
            var5 = var5.bind(var9)(var4);
            var1['canManageGuildRoleSubscriptions'] = var5;
            var5 = 2;
            var9 = var8[var5];
            var11 = var6.bind(var7)(var9);
            var10 = var11.isMonetizationWaitlistEnabledForGuild;
            var9 = var4.id;
            var9 = var10.bind(var11)(var9);
            var1['isMonetizationWaitlistEnabledForGuild'] = var9;
            var9 = 3;
            var9 = var8[var9];
            var11 = var6.bind(var7)(var9);
            var10 = var11.isGuildEligibleForRoleSubscriptions;
            var9 = var4.id;
            var9 = var10.bind(var11)(var9);
            var1['isGuildEligibleForRoleSubscriptions'] = var9;
            var9 = var8[var5];
            var10 = var6.bind(var7)(var9);
            var9 = var10.isExpeditedMonetizationOnboardingGuild;
            var9 = var9.bind(var10)(var4);
            var1['isExpeditedMonetizationOnboardingGuild'] = var9;
            var5 = var8[var5];
            var9 = var6.bind(var7)(var5);
            var5 = var9.isUserInCreatorMonetizationEligibleCountry;
            var5 = var5.bind(var9)();
            var1['isUserInCreatorMonetizationEligibleCountry'] = var5;
            var5 = 4;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.shouldRestrictUpdatingCreatorMonetizationSettings;
            var4 = var4.id;
            var4 = var5.bind(var6)(var4);
            var1['shouldRestrictUpdatingRoleSubscriptionSettings'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['canUserSeeMonetizationOnboarding'] = var2;
    return var1;
})();