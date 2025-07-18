// app/modules/quests/experiments/MobileVideoQuestRolloutExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var9 = var6.bind(var1)(var4);
    var8 = var9.createExperiment;
    var4 = {'id': '2025-05_mobile_video_quest_rollout', 'kind': 'user', 'label': 'Quests: Mobile Video Quest'};
    var5 = {'enabled': false, 'orientation': null};
    var4['defaultConfig'] = var5;
    var11 = {'id': 1, 'label': 'Enabled: Portrait'};
    var5 = 1;
    var10 = {'enabled': true, 'orientation': 'portrait'};
    var11['config'] = var10;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = {'id': 2, 'label': 'Enabled: Landscape'};
    var12 = {'enabled': true, 'orientation': 'landscape'};
    var11['config'] = var12;
    var10[1] = var11;
    var4['treatments'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot0 = var4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/experiments/MobileVideoQuestRolloutExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MobileVideoQuestExperiment'] = var4;
    var2 = function useIsMobileVideoQuestExperimentEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0001_ip = 22; continue _fun0001 }
 20:
            var5 = true;
 22:
            var4 = _closure1_slot0;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['useIsMobileVideoQuestExperimentEnabled'] = var2;
    return var1;
})();