// app/modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var7 = function useIsRavenOnboardingGuild(arg1) {
        var2 = null;
        var1 = arg1;
        var1 = var2 != var1;
        return var1;
    };
    var _closure1_slot3 = var7;
    var6 = function isRavenOnboardingGuild(arg1) {
        var2 = null;
        var1 = arg1;
        var1 = var2 != var1;
        return var1;
    };
    var _closure1_slot4 = var6;
    var5 = function useIsWhitegloveOnboardingGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.features;
            var3 = var4.has;
            var2 = _closure1_slot2;
            var2 = var2.CREATOR_MONETIZABLE_WHITEGLOVE;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function isWhitegloveOnboardingGuild(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var4 = var2.features;
            var3 = var4.has;
            var2 = _closure1_slot2;
            var2 = var2.CREATOR_MONETIZABLE_WHITEGLOVE;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
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
    var8 = var8.GuildFeatures;
    var _closure1_slot2 = var8;
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
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot3;
            var1 = null;
            var6 = var1 == var4;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var1 = var4.id;
case 4:
            var1 = var5.bind(var3)(var1);
            var2 = _closure1_slot5;
            var2 = var2.bind(var3)(var4);
            if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['useIsExpeditedOnboardingGuild'] = var4;
    var4 = function isExpeditedMonetizationOnboardingGuild(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot4;
            var1 = null;
            var6 = var1 == var4;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0004_ip = 4; continue _fun0004 }
case 5:
            var1 = var4.id;
case 4:
            var1 = var5.bind(var3)(var1);
            if(var1) { _fun0004_ip = 7; continue _fun0004 }
case 8:
            var2 = _closure1_slot6;
            var1 = var2.bind(var3)(var4);
case 7:
            return var1;
        }
    };
    var3['isExpeditedMonetizationOnboardingGuild'] = var4;
    var2 = function isCreatorMonetizationNagActivateEnabled() {
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
    var3['isCreatorMonetizationNagActivateEnabled'] = var2;
    return var1;
})();