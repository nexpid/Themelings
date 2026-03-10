// app/modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var10 = true;
    var4['value'] = var10;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = {};
    var1 = 'control';
    var4['CONTROL'] = var1;
    var1 = 'treatment_a';
    var4['TREATMENT_A'] = var1;
    var1 = 'treatment_b';
    var4['TREATMENT_B'] = var1;
    var1 = 'treatment_c';
    var4['TREATMENT_C'] = var1;
    var1 = 'treatment_d';
    var4['TREATMENT_D'] = var1;
    var _closure1_slot0 = var4;
    var5 = {};
    var6 = var4.CONTROL;
    var1 = 0;
    var5[var6] = var1;
    var6 = var4.TREATMENT_A;
    var9 = 250;
    var5[var6] = var9;
    var6 = var4.TREATMENT_B;
    var8 = 500;
    var5[var6] = var8;
    var6 = var4.TREATMENT_C;
    var5[var6] = var9;
    var6 = var4.TREATMENT_D;
    var5[var6] = var8;
    var _closure1_slot1 = var5;
    var6 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var6 = var5.bind(var1)(var6);
    var5 = {'name': '2025-12-nitro-s-rewards', 'kind': 'user'};
    var8 = {};
    var9 = var4.CONTROL;
    var8['treatment'] = var9;
    var11 = false;
    var8['receivesUpdatedUpsellPopover'] = var11;
    var5['defaultConfig'] = var8;
    var8 = {};
    var9 = {};
    var12 = var4.CONTROL;
    var9['treatment'] = var12;
    var9['receivesUpdatedUpsellPopover'] = var11;
    var8[0] = var9;
    var9 = {};
    var12 = var4.TREATMENT_A;
    var9['treatment'] = var12;
    var9['receivesUpdatedUpsellPopover'] = var11;
    var8[1] = var9;
    var9 = {};
    var12 = var4.TREATMENT_B;
    var9['treatment'] = var12;
    var9['receivesUpdatedUpsellPopover'] = var11;
    var8[2] = var9;
    var9 = {};
    var11 = var4.TREATMENT_C;
    var9['treatment'] = var11;
    var9['receivesUpdatedUpsellPopover'] = var10;
    var8[3] = var9;
    var9 = {};
    var11 = var4.TREATMENT_D;
    var9['treatment'] = var11;
    var9['receivesUpdatedUpsellPopover'] = var10;
    var8[4] = var9;
    var5['variations'] = var8;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var6 = 1;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['PremiumRewardsOrbsTreatment'] = var4;
    var4 = function usePremiumRewardsOrbsExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot2;
            var3 = var4.useConfig;
            var1 = {};
            var5 = arg1;
            var1['location'] = var5;
            var5 = var3.bind(var4)(var1);
            var3 = var5.treatment;
            var4 = null;
            if(!(var4 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot0;
            var3 = var1.CONTROL;
case 2:
            var1 = {};
            var1['treatment'] = var3;
            var6 = _closure1_slot0;
            var6 = var6.CONTROL;
            var6 = var3 !== var6;
            var1['isInTreatment'] = var6;
            var5 = var5.receivesUpdatedUpsellPopover;
            var4 = var4 != var5;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var5;
case 4:
            var1['receivesUpdatedUpsellPopover'] = var4;
            var2 = _closure1_slot1;
            var2 = var2[var3];
            var1['orbsRewardAmount'] = var2;
            return var1;
        }
    };
    var3['usePremiumRewardsOrbsExperiment'] = var4;
    var2 = function getPremiumRewardsOrbsExperiment(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot2;
            var3 = var4.getConfig;
            var1 = {};
            var5 = arg1;
            var1['location'] = var5;
            var5 = var3.bind(var4)(var1);
            var3 = var5.treatment;
            var4 = null;
            if(!(var4 == var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = _closure1_slot0;
            var3 = var1.CONTROL;
case 2:
            var1 = {};
            var1['treatment'] = var3;
            var6 = _closure1_slot0;
            var6 = var6.CONTROL;
            var6 = var3 !== var6;
            var1['isInTreatment'] = var6;
            var5 = var5.receivesUpdatedUpsellPopover;
            var4 = var4 != var5;
            if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = var5;
case 4:
            var1['receivesUpdatedUpsellPopover'] = var4;
            var2 = _closure1_slot1;
            var2 = var2[var3];
            var1['orbsRewardAmount'] = var2;
            return var1;
        }
    };
    var3['getPremiumRewardsOrbsExperiment'] = var2;
    return var1;
})();