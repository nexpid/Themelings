// app/modules/rewards/ProgramRewardsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function isEligibleForProgramReward(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = arguments[1];
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 'ProgramRewardsUtils';
case 2:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 3;
            var2 = var2[var7];
            var2 = var6.bind(var4)(var2);
            var2 = var2.RewardProgram;
            var2 = var2.NITRO;
            if(!(var2 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var6.bind(var4)(var2);
            var2 = var2.RewardProgram;
            var2 = var2.XBOX;
            if(!(var2 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = false;
            return var2;
case 6:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getIsCrepeEnabled;
            var2 = var2.bind(var5)(var3);
            return var2;
case 4:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getPremiumRewardsOrbsExperiment;
            var1 = var1.bind(var2)(var3);
            var1 = var1.isInTreatment;
            return var1;
        }
    };
    var _closure1_slot6 = var7;
    var6 = function canFetchNitroProgramReward() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arguments[0];
            var3 = undefined;
            if(!(var5 === var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = 'ProgramRewardsUtils';
case 8:
            var4 = _closure1_slot6;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.RewardProgram;
            var1 = var1.NITRO;
            var1 = var4.bind(var3)(var1, var5);
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = _closure1_slot7;
            var1 = var2.bind(var3)();
case 10:
            return var1;
        }
    };
    var5 = function canFetchXboxProgramReward() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arguments[0];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = 'ProgramRewardsUtils';
case 8:
            var3 = _closure1_slot6;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.RewardProgram;
            var1 = var1.XBOX;
            var1 = var3.bind(var5)(var1, var4);
            if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 11:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.hasCrepeMonthlyOrbsPerk;
            var5 = _closure1_slot3;
            var2 = var5.getCurrentUser;
            var2 = var2.bind(var5)();
            var1 = var3.bind(var4)(var2);
case 12:
            return var1;
        }
    };
    var2 = function hasNecessaryPremiumSubscriptionStatus(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0004_ip = 13; continue _fun0004 }
case 9:
            var2 = _closure1_slot3;
            var1 = var2.getCurrentUser;
            var4 = var1.bind(var2)();
case 13:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isPremiumExactly;
            var1 = _closure1_slot4;
            var1 = var1.TIER_2;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.PremiumTypes;
    var _closure1_slot4 = var8;
    var8 = {};
    var11 = 3;
    var12 = var10[var11];
    var12 = var9.bind(var1)(var12);
    var12 = var12.RewardProgram;
    var12 = var12.NITRO;
    var8[11] = var6;
    var11 = var10[var11];
    var11 = var9.bind(var1)(var11);
    var11 = var11.RewardProgram;
    var11 = var11.XBOX;
    var8[10] = var5;
    var _closure1_slot5 = var8;
    var8 = 8;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/rewards/ProgramRewardsUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function isProgramRewardStale(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0005_ip = 14; continue _fun0005 }
case 9:
            var6 = var2.next_reward_date;
            var1 = var1 != var6;
            if(!var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var2 = '';
            var1 = var2 !== var6;
case 15:
            if(!var1) { _fun0005_ip = 6; continue _fun0005 }
case 17:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = global;
            var2 = var2.Date;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var8 = var5;
            var7 = var6;
            var2 = new var8[var2](var7, var6);
            var2 = var2 instanceof Object ? var2 : var5;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
case 14:
            var1 = true;
            return var1;
        }
    };
    var3['isProgramRewardStale'] = var8;
    var3['isEligibleForProgramReward'] = var7;
    var7 = function useIsEligibleForProgramReward(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var9 = arguments[1];
            var6 = undefined;
            if(!(var9 === var6)) { _fun0006_ip = 2; continue _fun0006 }
case 3:
            var9 = 'ProgramRewardsUtils';
case 2:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var2 = var8.bind(var6)(var1);
            var1 = var2.usePremiumRewardsOrbsExperiment;
            var1 = var1.bind(var2)(var9);
            var1 = var1.isInTreatment;
            var2 = 5;
            var2 = var5[var2];
            var7 = var8.bind(var6)(var2);
            var2 = var7.useIsCrepeEnabled;
            var2 = var2.bind(var7)(var9);
            var7 = 3;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.RewardProgram;
            var5 = var5.NITRO;
            if(!(var5 !== var4)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.RewardProgram;
            var3 = var3.XBOX;
            if(!(var3 !== var4)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var3 = false;
            return var3;
case 20:
            return var2;
case 18:
            return var1;
        }
    };
    var3['useIsEligibleForProgramReward'] = var7;
    var3['canFetchNitroProgramReward'] = var6;
    var3['canFetchXboxProgramReward'] = var5;
    var4 = function canFetchAnyProgramReward() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arguments[0];
            var7 = undefined;
            if(!(var6 === var7)) { _fun0007_ip = 8; continue _fun0007 }
case 9:
            var6 = 'ProgramRewardsUtils';
case 8:
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 3;
            var1 = var8[var1];
            var1 = var4.bind(var7)(var1);
            var1 = var1.RewardProgram;
            var4 = var2.bind(var3)(var1);
            var1 = var4.length;
            var3 = 0;
            var1 = var3 < var1;
            var2 = 'number';
            if(!var1) { _fun0007_ip = 22; continue _fun0007 }
case 23:
            var1 = var4[var3];
            var7 = typeof var1;
            if(!(var2 === var7)) { _fun0007_ip = 12; continue _fun0007 }
case 24:
            var7 = _closure1_slot5;
            var1 = var7[var1];
            var1 = var1.bind(var7)(var6);
            if(var1) { _fun0007_ip = 25; continue _fun0007 }
case 12:
            var3 = var3 + 1;
            var1 = var4.length;
            if(var3 < var1) { _fun0007_ip = 23; continue _fun0007 }
case 22:
            var1 = false;
            return var1;
case 25:
            var1 = true;
            return var1;
        }
    };
    var3['canFetchAnyProgramReward'] = var4;
    var3['hasNecessaryPremiumSubscriptionStatus'] = var2;
    return var1;
})();