// app/modules/rewards/ProgramRewardsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function isEligibleForProgramReward(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = 'ProgramRewardsUtils';
case 2:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.RewardProgram;
            var3 = var2.NITRO;
            var2 = arg1;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = false;
            return var2;
case 4:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.getPremiumRewardsOrbsExperiment;
            var1 = var1.bind(var2)(var5);
            var1 = var1.isInTreatment;
            var2 = 4;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.isVirtualCurrencyEnabled;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function useIsEligibleForProgramReward(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arguments[1];
            var5 = undefined;
            if(!(var8 === var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var8 = 'ProgramRewardsUtils';
case 2:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var4.bind(var5)(var1);
            var1 = var2.usePremiumRewardsOrbsExperiment;
            var1 = var1.bind(var2)(var8);
            var2 = var1.isInTreatment;
            var1 = 4;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var3 = var7.useVirtualCurrencyEnabled;
            var1 = {};
            var1['location'] = var8;
            var1 = var3.bind(var7)(var1);
            var3 = var1.enabled;
            var1 = 2;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.RewardProgram;
            var4 = var1.NITRO;
            var1 = arg1;
            var1 = var1 === var4;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var3;
case 10:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var9 = var8[var1];
    var6 = metroImportDefault;
    var1 = undefined;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.PremiumTypes;
    var _closure1_slot3 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/rewards/ProgramRewardsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isEligibleForProgramReward'] = var5;
    var3['useIsEligibleForProgramReward'] = var4;
    var4 = function isEligibleForAnyProgramReward() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arguments[0];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var4 = 'ProgramRewardsUtils';
case 2:
            var2 = _closure1_slot4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.RewardProgram;
            var1 = var1.NITRO;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['isEligibleForAnyProgramReward'] = var4;
    var4 = function useIsEligibleForAnyProgramReward() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arguments[0];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var4 = 'ProgramRewardsUtils';
case 2:
            var2 = _closure1_slot5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.RewardProgram;
            var1 = var1.NITRO;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['useIsEligibleForAnyProgramReward'] = var4;
    var2 = function hasNecessaryPremiumSubscriptionStatus(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0005_ip = 12; continue _fun0005 }
case 3:
            var2 = _closure1_slot2;
            var1 = var2.getCurrentUser;
            var4 = var1.bind(var2)();
case 12:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isPremiumExactly;
            var1 = _closure1_slot3;
            var1 = var1.TIER_2;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['hasNecessaryPremiumSubscriptionStatus'] = var2;
    return var1;
})();