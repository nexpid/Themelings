// app/modules/quests/experiments/QuestCardDescriptionExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var13 = true;
    var4['value'] = var13;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var5 = {};
    var6 = 1;
    var5['WITH_REWARD_DURATION'] = var6;
    var1 = 'WITH_REWARD_DURATION';
    var5[var6] = var1;
    var4 = 2;
    var5['WITH_REWARD_DURATION_NO_GAME_TITLE'] = var4;
    var1 = 'WITH_REWARD_DURATION_NO_GAME_TITLE';
    var5[var4] = var1;
    var _closure1_slot0 = var5;
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var10 = var7.bind(var1)(var4);
    var9 = var10.createApexExperiment;
    var4 = {'name': '2026-02-quest-card-description', 'kind': 'user'};
    var11 = {'enabled': false, 'variant': null};
    var4['defaultConfig'] = var11;
    var11 = {};
    var12 = {};
    var12['enabled'] = var13;
    var14 = var5.WITH_REWARD_DURATION;
    var12['variant'] = var14;
    var11[1] = var12;
    var12 = {};
    var12['enabled'] = var13;
    var13 = var5.WITH_REWARD_DURATION_NO_GAME_TITLE;
    var12['variant'] = var13;
    var11[2] = var12;
    var4['variations'] = var11;
    var4 = var9.bind(var10)(var4);
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/experiments/QuestCardDescriptionExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['QuestCardDescriptionExperimentVariant'] = var5;
    var3['QuestCardDescriptionExperiment'] = var4;
    var2 = function shouldUseDescriptionWithRewardDuration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot0;
            var1 = var1.WITH_REWARD_DURATION;
            var1 = var3 === var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var2 = var2.WITH_REWARD_DURATION_NO_GAME_TITLE;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var3['shouldUseDescriptionWithRewardDuration'] = var2;
    return var1;
})();