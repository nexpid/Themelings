// app/modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
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
    var1 = {};
    var5 = var4.CONTROL;
    var6 = 0;
    var1[4] = var6;
    var5 = var4.TREATMENT_A;
    var10 = 250;
    var1[4] = var10;
    var5 = var4.TREATMENT_B;
    var9 = 500;
    var1[4] = var9;
    var5 = var4.TREATMENT_C;
    var1[4] = var10;
    var5 = var4.TREATMENT_D;
    var1[4] = var9;
    var _closure1_slot1 = var1;
    var5 = var7[var6];
    var1 = undefined;
    var9 = var8.bind(var1)(var5);
    var5 = {'name': '2025-12-nitro-s-rewards', 'kind': 'user'};
    var10 = {};
    var11 = var4.CONTROL;
    var10['treatment'] = var11;
    var5['defaultConfig'] = var10;
    var10 = {};
    var11 = {};
    var12 = var4.CONTROL;
    var11['treatment'] = var12;
    var10[0] = var11;
    var11 = {};
    var12 = var4.TREATMENT_A;
    var11['treatment'] = var12;
    var10[1] = var11;
    var11 = {};
    var12 = var4.TREATMENT_B;
    var11['treatment'] = var12;
    var10[2] = var11;
    var11 = {};
    var12 = var4.TREATMENT_C;
    var11['treatment'] = var12;
    var10[3] = var11;
    var11 = {};
    var12 = var4.TREATMENT_D;
    var11['treatment'] = var12;
    var10[4] = var11;
    var5['variations'] = var10;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var6 = var7[var6];
    var8 = var8.bind(var1)(var6);
    var6 = {'name': '2026-03-nitro-s-rewards-v2-test', 'kind': 'user'};
    var9 = {};
    var10 = var4.CONTROL;
    var9['treatment'] = var10;
    var6['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var11 = var4.CONTROL;
    var10['treatment'] = var11;
    var9[0] = var10;
    var10 = {};
    var11 = var4.TREATMENT_C;
    var10['treatment'] = var11;
    var9[1] = var10;
    var10 = {};
    var11 = var4.TREATMENT_D;
    var10['treatment'] = var11;
    var9[2] = var10;
    var6['variations'] = var9;
    var6 = var8.bind(var1)(var6);
    var _closure1_slot3 = var6;
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
            var6 = arg1;
            var4 = _closure1_slot2;
            var3 = var4.useConfig;
            var1 = {};
            var1['location'] = var6;
            var1 = var3.bind(var4)(var1);
            var5 = _closure1_slot3;
            var4 = var5.useConfig;
            var3 = {};
            var3['location'] = var6;
            var4 = var4.bind(var5)(var3);
            var3 = var1.treatment;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var3 = var5.CONTROL;
case 2:
            var5 = _closure1_slot0;
            var5 = var5.CONTROL;
            if(!(var3 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var4.treatment;
            if(!(var1 == var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot0;
            var6 = var1.CONTROL;
case 6:
            var1 = _closure1_slot0;
            var1 = var1.CONTROL;
            if(!(var6 === var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = {'treatment': null, 'isInTreatment': false, 'receivesUpdatedUpsellPopover': false, 'orbsRewardAmount': 0};
            var4 = _closure1_slot0;
            var4 = var4.CONTROL;
            var1['treatment'] = var4;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var4 = {'treatment': null, 'isInTreatment': true, 'receivesUpdatedUpsellPopover': true};
            var4['treatment'] = var6;
            var5 = _closure1_slot1;
            var5 = var5[var6];
            var4['orbsRewardAmount'] = var5;
            var1 = var4;
case 10:
            return var1;
case 4:
            var1 = {'treatment': null, 'isInTreatment': true, 'receivesUpdatedUpsellPopover': false};
            var1['treatment'] = var3;
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
            var6 = arg1;
            var4 = _closure1_slot2;
            var3 = var4.getConfig;
            var1 = {};
            var1['location'] = var6;
            var1 = var3.bind(var4)(var1);
            var5 = _closure1_slot3;
            var4 = var5.getConfig;
            var3 = {};
            var3['location'] = var6;
            var4 = var4.bind(var5)(var3);
            var3 = var1.treatment;
            var1 = null;
            if(!(var1 == var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var5 = _closure1_slot0;
            var3 = var5.CONTROL;
case 2:
            var5 = _closure1_slot0;
            var5 = var5.CONTROL;
            if(!(var3 === var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = var4.treatment;
            if(!(var1 == var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = _closure1_slot0;
            var6 = var1.CONTROL;
case 6:
            var1 = _closure1_slot0;
            var1 = var1.CONTROL;
            if(!(var6 === var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = {'treatment': null, 'isInTreatment': false, 'receivesUpdatedUpsellPopover': false, 'orbsRewardAmount': 0};
            var4 = _closure1_slot0;
            var4 = var4.CONTROL;
            var1['treatment'] = var4;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var4 = {'treatment': null, 'isInTreatment': true, 'receivesUpdatedUpsellPopover': true};
            var4['treatment'] = var6;
            var5 = _closure1_slot1;
            var5 = var5[var6];
            var4['orbsRewardAmount'] = var5;
            var1 = var4;
case 10:
            return var1;
case 4:
            var1 = {'treatment': null, 'isInTreatment': true, 'receivesUpdatedUpsellPopover': false};
            var1['treatment'] = var3;
            var2 = _closure1_slot1;
            var2 = var2[var3];
            var1['orbsRewardAmount'] = var2;
            return var1;
        }
    };
    var3['getPremiumRewardsOrbsExperiment'] = var2;
    return var1;
})();