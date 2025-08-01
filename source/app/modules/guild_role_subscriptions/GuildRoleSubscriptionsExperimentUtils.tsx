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
    var4 = function useGuildEligibleForRoleSubscriptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 1;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var9 = var1.GuildRoleSubscriptionsExperiment;
            var8 = var9.useExperiment;
            var5 = {};
            var1 = null;
            var2 = var4;
            if(!(var1 == var2)) { _fun0001_ip = 55; continue _fun0001 }
 51:
            var2 = _closure1_slot2;
 55:
            var5['guildId'] = var2;
            var2 = '504714_1';
            var5['location'] = var2;
            var2 = {};
            var10 = true;
            var2['autoTrackExposure'] = var10;
            var2 = var8.bind(var9)(var5, var2);
            var2 = var2.enableRoleSubscriptionsForGuild;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var7 = var3.GuildRoleSubscriptionUsersExperiment;
            var6 = var7.useExperiment;
            var5 = {};
            var3 = '504714_2';
            var5['location'] = var3;
            var3 = {};
            var8 = false;
            var3['autoTrackExposure'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            var3 = var3.enableRoleSubscriptionsForUser;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 168; continue _fun0001 }
 159:
            if(!var2) { _fun0001_ip = 165; continue _fun0001 }
 162:
            var2 = var3;
 165:
            var1 = var2;
 168:
            return var1;
        }
    };
    var3['useGuildEligibleForRoleSubscriptions'] = var4;
    var4 = function isGuildEligibleForRoleSubscriptions(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 1;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var8 = var1.GuildRoleSubscriptionsExperiment;
            var5 = var8.getCurrentConfig;
            var2 = {};
            var1 = null;
            var9 = var4;
            if(!(var1 == var9)) { _fun0002_ip = 55; continue _fun0002 }
 51:
            var9 = _closure1_slot2;
 55:
            var2['guildId'] = var9;
            var9 = '504714_3';
            var2['location'] = var9;
            var2 = var5.bind(var8)(var2);
            var2 = var2.enableRoleSubscriptionsForGuild;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var7 = var3.GuildRoleSubscriptionUsersExperiment;
            var6 = var7.getCurrentConfig;
            var5 = {};
            var3 = '504714_4';
            var5['location'] = var3;
            var3 = {};
            var8 = false;
            var3['autoTrackExposure'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            var3 = var3.enableRoleSubscriptionsForUser;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 158; continue _fun0002 }
 149:
            if(!var2) { _fun0002_ip = 155; continue _fun0002 }
 152:
            var2 = var3;
 155:
            var1 = var2;
 158:
            return var1;
        }
    };
    var3['isGuildEligibleForRoleSubscriptions'] = var4;
    var4 = function useRoleSubscriptionMaxTiersExperiment(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(!(var6 == var4)) { _fun0003_ip = 52; continue _fun0003 }
 48:
            var4 = _closure1_slot2;
 52:
            var1['guildId'] = var4;
            var4 = '504714_7';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useRoleSubscriptionMaxTiersExperiment'] = var4;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 41; continue _fun0004 }
 18:
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
 41:
            return var1;
        }
    };
    var3['hasEnabledMonetization'] = var4;
    var4 = function useGuildEligibleForRoleSubscriptionsMobileTeamSetup(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
            if(var9) { _fun0005_ip = 58; continue _fun0005 }
 53:
            var1 = var4.id;
 58:
            if(!(var8 == var1)) { _fun0005_ip = 66; continue _fun0005 }
 62:
            var1 = _closure1_slot2;
 66:
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
            if(!var1) { _fun0005_ip = 137; continue _fun0005 }
 134:
            var1 = var2;
 137:
            return var1;
        }
    };
    var3['useGuildEligibleForRoleSubscriptionsMobileTeamSetup'] = var4;
    var4 = function isGuildEligibleForTierTemplates(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
            if(!(var6 == var1)) { _fun0006_ip = 52; continue _fun0006 }
 48:
            var1 = _closure1_slot2;
 52:
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
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
            if(!(var6 == var1)) { _fun0007_ip = 52; continue _fun0007 }
 48:
            var1 = _closure1_slot2;
 52:
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
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
            if(!(var6 == var1)) { _fun0008_ip = 52; continue _fun0008 }
 48:
            var1 = _closure1_slot2;
 52:
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