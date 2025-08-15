// app/modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var7 = function useIsRavenOnboardingGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 1;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var9 = var1.CreatorMonetizationRavenOnboardingGuildExperiment;
            var8 = var9.useExperiment;
            var5 = {};
            var1 = null;
            var2 = var4;
            if(!(var1 == var2)) { _fun0001_ip = 55; continue _fun0001 }
 51:
            var2 = _closure1_slot2;
 55:
            var5['guildId'] = var2;
            var2 = 'e3bb71_3';
            var5['location'] = var2;
            var2 = {};
            var10 = true;
            var2['autoTrackExposure'] = var10;
            var2 = var8.bind(var9)(var5, var2);
            var2 = var2.enableFastMonetizationOnboardingForGuild;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var7 = var3.CreatorMonetizationRavenOnboardingUserExperiment;
            var6 = var7.useExperiment;
            var5 = {};
            var3 = 'e3bb71_4';
            var5['location'] = var3;
            var3 = {};
            var8 = false;
            var3['autoTrackExposure'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            var3 = var3.enableFastMonetizationOnboardingForUser;
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
    var _closure1_slot4 = var7;
    var6 = function isRavenOnboardingGuild(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 1;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var8 = var1.CreatorMonetizationRavenOnboardingGuildExperiment;
            var5 = var8.getCurrentConfig;
            var2 = {};
            var1 = null;
            var9 = var4;
            if(!(var1 == var9)) { _fun0002_ip = 55; continue _fun0002 }
 51:
            var9 = _closure1_slot2;
 55:
            var2['guildId'] = var9;
            var9 = 'e3bb71_5';
            var2['location'] = var9;
            var2 = var5.bind(var8)(var2);
            var2 = var2.enableFastMonetizationOnboardingForGuild;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var6 = var3.CreatorMonetizationRavenOnboardingUserExperiment;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var7 = 'e3bb71_6';
            var3['location'] = var7;
            var3 = var5.bind(var6)(var3);
            var3 = var3.enableFastMonetizationOnboardingForUser;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 148; continue _fun0002 }
 139:
            if(!var2) { _fun0002_ip = 145; continue _fun0002 }
 142:
            var2 = var3;
 145:
            var1 = var2;
 148:
            return var1;
        }
    };
    var _closure1_slot5 = var6;
    var5 = function useIsWhitegloveOnboardingGuild(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var3);
            var6 = var1.CreatorMonetizationRavenOnboardingUserExperiment;
            var5 = var6.useExperiment;
            var3 = {};
            var1 = 'e3bb71_7';
            var3['location'] = var1;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var3, var1);
            var3 = var1.enableFastMonetizationOnboardingForUser;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0003_ip = 117; continue _fun0003 }
 82:
            var5 = var4.features;
            var4 = var5.has;
            var2 = _closure1_slot3;
            var2 = var2.CREATOR_MONETIZABLE_WHITEGLOVE;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0003_ip = 114; continue _fun0003 }
 111:
            var2 = var3;
 114:
            var1 = var2;
 117:
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function isWhitegloveOnboardingGuild(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var3);
            var5 = var1.CreatorMonetizationRavenOnboardingUserExperiment;
            var3 = var5.getCurrentConfig;
            var1 = {};
            var6 = 'e3bb71_8';
            var1['location'] = var6;
            var1 = var3.bind(var5)(var1);
            var3 = var1.enableFastMonetizationOnboardingForUser;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0004_ip = 107; continue _fun0004 }
 72:
            var5 = var4.features;
            var4 = var5.has;
            var2 = _closure1_slot3;
            var2 = var2.CREATOR_MONETIZABLE_WHITEGLOVE;
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0004_ip = 104; continue _fun0004 }
 101:
            var2 = var3;
 104:
            var1 = var2;
 107:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var11 = var8.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot2 = var11;
    var8 = var8.GuildFeatures;
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function useIsUserInCreatorMonetizationEligibleCountry() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var4 = var1.CreatorMonetizationCountryAllowlistExperiment;
        var3 = var4.useExperiment;
        var2 = {};
        var1 = 'e3bb71_1';
        var2['location'] = var1;
        var1 = {};
        var5 = false;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.isUserEligibleForCreatorMonetization;
        return var1;
    };
    var3['useIsUserInCreatorMonetizationEligibleCountry'] = var8;
    var8 = function isUserInCreatorMonetizationEligibleCountry() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var4 = var1.CreatorMonetizationCountryAllowlistExperiment;
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = 'e3bb71_2';
        var2['location'] = var1;
        var1 = {};
        var5 = false;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.isUserEligibleForCreatorMonetization;
        return var1;
    };
    var3['isUserInCreatorMonetizationEligibleCountry'] = var8;
    var3['useIsRavenOnboardingGuild'] = var7;
    var3['isRavenOnboardingGuild'] = var6;
    var3['useIsWhitegloveOnboardingGuild'] = var5;
    var3['isWhitegloveOnboardingGuild'] = var4;
    var4 = function useIsExpeditedOnboardingGuild(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot4;
            var1 = null;
            var6 = var1 == var4;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0005_ip = 28; continue _fun0005 }
 23:
            var1 = var4.id;
 28:
            var1 = var5.bind(var3)(var1);
            var2 = _closure1_slot6;
            var2 = var2.bind(var3)(var4);
            if(var1) { _fun0005_ip = 48; continue _fun0005 }
 45:
            var1 = var2;
 48:
            return var1;
        }
    };
    var3['useIsExpeditedOnboardingGuild'] = var4;
    var4 = function isExpeditedMonetizationOnboardingGuild(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot5;
            var1 = null;
            var6 = var1 == var4;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0006_ip = 28; continue _fun0006 }
 23:
            var1 = var4.id;
 28:
            var1 = var5.bind(var3)(var1);
            if(var1) { _fun0006_ip = 45; continue _fun0006 }
 36:
            var2 = _closure1_slot7;
            var1 = var2.bind(var3)(var4);
 45:
            return var1;
        }
    };
    var3['isExpeditedMonetizationOnboardingGuild'] = var4;
    var4 = function useIsMonetizationWaitlistEnabledForGuild(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.CreatorMonetizationOnboardingWaitlistExperiment;
            var3 = var4.useExperiment;
            var2 = {};
            var6 = null;
            if(!(var6 == var1)) { _fun0007_ip = 52; continue _fun0007 }
 48:
            var1 = _closure1_slot2;
 52:
            var2['guildId'] = var1;
            var1 = 'e3bb71_9';
            var2['location'] = var1;
            var1 = {};
            var5 = false;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enableWaitlist;
            return var1;
        }
    };
    var3['useIsMonetizationWaitlistEnabledForGuild'] = var4;
    var4 = function isMonetizationWaitlistEnabledForGuild(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.CreatorMonetizationOnboardingWaitlistExperiment;
            var2 = var3.getCurrentConfig;
            var1 = {};
            var6 = null;
            if(!(var6 == var4)) { _fun0008_ip = 52; continue _fun0008 }
 48:
            var4 = _closure1_slot2;
 52:
            var1['guildId'] = var4;
            var4 = 'e3bb71_10';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enableWaitlist;
            return var1;
        }
    };
    var3['isMonetizationWaitlistEnabledForGuild'] = var4;
    var4 = function isCreatorMonetizationNagActivateEnabled() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var4 = var1.CreatorMonetizationNagActivateExperiment;
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = 'e3bb71_11';
        var2['location'] = var1;
        var1 = {};
        var5 = true;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.enableCreatorMonetizationNagActivateForUser;
        return var1;
    };
    var3['isCreatorMonetizationNagActivateEnabled'] = var4;
    var2 = function isEnableMonetizationHiddenFromServerSettings(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.MoveRoleSubscriptionsOnboardingFromServerSettingsExperiment;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var6 = null;
            if(!(var6 == var1)) { _fun0009_ip = 52; continue _fun0009 }
 48:
            var1 = _closure1_slot2;
 52:
            var2['guildId'] = var1;
            var1 = 'e3bb71_12';
            var2['location'] = var1;
            var1 = {};
            var5 = false;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.hideMonetizatonOnboardingInServerSettings;
            return var1;
        }
    };
    var3['isEnableMonetizationHiddenFromServerSettings'] = var2;
    return var1;
})();