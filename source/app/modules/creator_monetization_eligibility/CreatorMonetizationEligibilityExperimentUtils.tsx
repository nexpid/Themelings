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
    var _closure1_slot5 = var7;
    var6 = function isRavenOnboardingGuild(arg1) {
        var2 = null;
        var1 = arg1;
        var1 = var2 != var1;
        return var1;
    };
    var _closure1_slot6 = var6;
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
            var2 = _closure1_slot3;
            var2 = var2.CREATOR_MONETIZABLE_WHITEGLOVE;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
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
            var2 = _closure1_slot3;
            var2 = var2.CREATOR_MONETIZABLE_WHITEGLOVE;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var8 = global;
    var13 = var8.Object;
    var12 = var13.defineProperty;
    var11 = {};
    var1 = true;
    var11['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var11);
    var1 = 0;
    var12 = var10[var1];
    var11 = metroImportDefault;
    var1 = undefined;
    var11 = var11.bind(var1)(var12);
    var _closure1_slot2 = var11;
    var11 = 1;
    var11 = var10[var11];
    var11 = var9.bind(var1)(var11);
    var11 = var11.GuildFeatures;
    var _closure1_slot3 = var11;
    var12 = var8.Set;
    var8 = var12.prototype;
    var11 = Object.create(var8, {constructor: {value: var12}});
    var16 = ['US'];
    var17 = var11;
    var8 = new var17[var12](var16, var15);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot4 = var8;
    var8 = 4;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function useIsUserInCreatorMonetizationEligibleCountry() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot2;
                var1 = var3.getCurrentUser;
                var3 = var1.bind(var3)();
                var1 = null;
                var5 = var1 == var3;
                var4 = undefined;
                if(var5) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                var3 = var3.storeCountry;
                var5 = var1 == var3;
                var4 = undefined;
                if(var5) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                var4 = var3.country;
case 4:
                var1 = var1 != var4;
                if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var3 = _closure1_slot4;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 7:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsUserInCreatorMonetizationEligibleCountry'] = var8;
    var8 = function isUserInCreatorMonetizationEligibleCountry() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot2;
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var1 = null;
            var5 = var1 == var3;
            var4 = undefined;
            if(var5) { _fun0004_ip = 4; continue _fun0004 }
case 5:
            var3 = var3.storeCountry;
            var5 = var1 == var3;
            var4 = undefined;
            if(var5) { _fun0004_ip = 4; continue _fun0004 }
case 6:
            var4 = var3.country;
case 4:
            var1 = var1 != var4;
            if(!var1) { _fun0004_ip = 7; continue _fun0004 }
case 8:
            var3 = _closure1_slot4;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 7:
            return var1;
        }
    };
    var3['isUserInCreatorMonetizationEligibleCountry'] = var8;
    var3['useIsRavenOnboardingGuild'] = var7;
    var3['isRavenOnboardingGuild'] = var6;
    var3['useIsWhitegloveOnboardingGuild'] = var5;
    var3['isWhitegloveOnboardingGuild'] = var4;
    var4 = function useIsExpeditedOnboardingGuild(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot5;
            var1 = null;
            var6 = var1 == var4;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0005_ip = 9; continue _fun0005 }
case 10:
            var1 = var4.id;
case 9:
            var1 = var5.bind(var3)(var1);
            var2 = _closure1_slot7;
            var2 = var2.bind(var3)(var4);
            if(var1) { _fun0005_ip = 4; continue _fun0005 }
case 11:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useIsExpeditedOnboardingGuild'] = var4;
    var4 = function isExpeditedMonetizationOnboardingGuild(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot6;
            var1 = null;
            var6 = var1 == var4;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0006_ip = 9; continue _fun0006 }
case 10:
            var1 = var4.id;
case 9:
            var1 = var5.bind(var3)(var1);
            if(var1) { _fun0006_ip = 11; continue _fun0006 }
case 12:
            var2 = _closure1_slot8;
            var1 = var2.bind(var3)(var4);
case 11:
            return var1;
        }
    };
    var3['isExpeditedMonetizationOnboardingGuild'] = var4;
    var2 = function isCreatorMonetizationNagActivateEnabled() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
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