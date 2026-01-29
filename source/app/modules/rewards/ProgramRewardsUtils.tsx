// app/modules/rewards/ProgramRewardsUtils.tsx
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
    var4 = var4.PremiumTypes;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rewards/ProgramRewardsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isInProgramRewardsTreatments() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[0];
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 'ProgramRewardsUtils';
case 2:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getPremiumRewardsOrbsExperiment;
            var1 = var1.bind(var2)(var3);
            var1 = var1.isInTreatment;
            return var1;
        }
    };
    var3['isInProgramRewardsTreatments'] = var4;
    var4 = function useIsInProgramRewardsTreatments() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arguments[0];
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var3 = 'ProgramRewardsUtils';
case 2:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.usePremiumRewardsOrbsExperiment;
            var1 = var1.bind(var2)(var3);
            var1 = var1.isInTreatment;
            return var1;
        }
    };
    var3['useIsInProgramRewardsTreatments'] = var4;
    var2 = function hasNecessaryPremiumSubscriptionStatus(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0003_ip = 4; continue _fun0003 }
case 3:
            var2 = _closure1_slot2;
            var1 = var2.getCurrentUser;
            var4 = var1.bind(var2)();
case 4:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
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