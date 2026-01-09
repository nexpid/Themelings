// app/modules/guild_role_subscriptions/GuildRoleSubscriptionsExperimentUtils.tsx
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
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot2 = var7;
    var7 = var4.GuildFeatures;
    var8 = var7.ROLE_SUBSCRIPTIONS_ENABLED;
    var4 = new Array(3);
    var4[0] = var8;
    var8 = var7.CREATOR_MONETIZABLE;
    var4[1] = var8;
    var7 = var7.CREATOR_MONETIZABLE_PROVISIONAL;
    var4[2] = var7;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsExperimentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildEligibleForRoleSubscriptions() {
        var1 = true;
        return var1;
    };
    var3['useGuildEligibleForRoleSubscriptions'] = var4;
    var4 = function isGuildEligibleForRoleSubscriptions() {
        var1 = true;
        return var1;
    };
    var3['isGuildEligibleForRoleSubscriptions'] = var4;
    var4 = function useRoleSubscriptionMaxTiersExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.GuildRoleSubscriptionMaxTiersExperiment;
            var2 = var3.useExperiment;
            var1 = {};
            var6 = null;
            if(!(var6 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot2;
case 2:
            var1['guildId'] = var4;
            var4 = '504714_7';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useRoleSubscriptionMaxTiersExperiment'] = var4;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot3;
            var3 = var4.some;
            var2 = function(arg1) {
                var1 = _closure2_slot0;
                var3 = var1.features;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['hasEnabledMonetization'] = var4;
    var4 = function useGuildEligibleForRoleSubscriptionsMobileTeamSetup(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 1;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var7 = var1.GuildRoleSubscriptionsMobileTeamSetupExperiment;
            var6 = var7.useExperiment;
            var3 = {};
            var8 = null;
            var9 = var8 == var4;
            var1 = undefined;
            if(var9) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = var4.id;
case 6:
            if(!(var8 == var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = _closure1_slot2;
case 8:
            var3['guildId'] = var1;
            var1 = '504714_8';
            var3['location'] = var1;
            var1 = {};
            var8 = true;
            var1['autoTrackExposure'] = var8;
            var1 = var6.bind(var7)(var3, var1);
            var1 = var1.enabled;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useIsExpeditedOnboardingGuild;
            var2 = var2.bind(var3)(var4);
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['useGuildEligibleForRoleSubscriptionsMobileTeamSetup'] = var4;
    var4 = function isGuildEligibleForTierTemplates(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.GuildRoleSubscriptionsTierTemplatesExperiment;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var6 = null;
            if(!(var6 == var1)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var1 = _closure1_slot2;
case 2:
            var2['guildId'] = var1;
            var1 = '504714_9';
            var2['location'] = var1;
            var1 = {};
            var5 = false;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['isGuildEligibleForTierTemplates'] = var4;
    var4 = function useGuildEligibleForTierTemplates(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.GuildRoleSubscriptionsTierTemplatesExperiment;
            var3 = var4.useExperiment;
            var2 = {};
            var6 = null;
            if(!(var6 == var1)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var1 = _closure1_slot2;
case 2:
            var2['guildId'] = var1;
            var1 = '504714_10';
            var2['location'] = var1;
            var1 = {};
            var5 = false;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['useGuildEligibleForTierTemplates'] = var4;
    var4 = function useShowCreatorPortalLinkForTierTemplates(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.GuildRoleSubscriptionsTierTemplatesExperiment;
            var3 = var4.useExperiment;
            var2 = {};
            var6 = null;
            if(!(var6 == var1)) { _fun0006_ip = 2; continue _fun0006 }
case 3:
            var1 = _closure1_slot2;
case 2:
            var2['guildId'] = var1;
            var1 = '504714_11';
            var2['location'] = var1;
            var1 = {};
            var5 = false;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.showCreatorPortalLink;
            return var1;
        }
    };
    var3['useShowCreatorPortalLinkForTierTemplates'] = var4;
    var4 = function isUserEligibleForTierTemplates() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var4 = var1.GuildRoleSubscriptionsTierTemplatesUserExperiment;
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = '504714_12';
        var2['location'] = var1;
        var1 = {};
        var5 = false;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['isUserEligibleForTierTemplates'] = var4;
    var2 = function useUserEligibleForTierTemplates() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var4 = var1.GuildRoleSubscriptionsTierTemplatesUserExperiment;
        var3 = var4.useExperiment;
        var2 = {};
        var1 = '504714_13';
        var2['location'] = var1;
        var1 = {};
        var5 = false;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useUserEligibleForTierTemplates'] = var2;
    return var1;
})();