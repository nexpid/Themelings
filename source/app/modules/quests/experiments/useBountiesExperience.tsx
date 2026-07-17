// app/modules/quests/experiments/useBountiesExperience.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/experiments/useBountiesExperience.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBountiesExperience(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 0;
            var1 = var7[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var6 = var1.BountiesVerticalScrollExperiment;
            var5 = var6.useConfig;
            var1 = {};
            var1['location'] = var4;
            var6 = var5.bind(var6)(var1);
            var1 = 1;
            var1 = var7[var1];
            var1 = var3.bind(var2)(var1);
            var8 = var1.BountiesStage1Experiment;
            var5 = var8.useConfig;
            var1 = {};
            var1['location'] = var4;
            var5 = var5.bind(var8)(var1);
            var1 = 2;
            var1 = var7[var1];
            var1 = var3.bind(var2)(var1);
            var3 = var1.QuestHomeBountiesExperiment;
            var2 = var3.useConfig;
            var1 = {};
            var1['location'] = var4;
            var2 = var2.bind(var3)(var1);
            var1 = var5.enabled;
            var4 = 50;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.orbAmount;
case 2:
            var1 = var5.enabled;
            var3 = 15;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5.rewardTimerSeconds;
case 4:
            var1 = var6.enabled;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = {};
            var2 = var2.enabled;
            var1['showBounties'] = var2;
            var2 = false;
            var1['ownedByVerticalScrollExperiment'] = var2;
            var2 = var5.verticalScrollEnabled;
            var1['verticalScrollEnabled'] = var2;
            var2 = var5.loopingEnabled;
            var1['loopingEnabled'] = var2;
            var2 = var5.ctaTimerMilliSeconds;
            var1['ctaTimerMilliSeconds'] = var2;
            var2 = 'none';
            var1['scrollAffordanceVariant'] = var2;
            var2 = var5.enabled;
            var1['stage1Enabled'] = var2;
            var1['orbAmount'] = var4;
            var1['rewardTimerSeconds'] = var3;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var2 = {'showBounties': true, 'ownedByVerticalScrollExperiment': true, 'verticalScrollEnabled': null, 'loopingEnabled': false};
            var7 = var6.verticalScrollEnabled;
            var2['verticalScrollEnabled'] = var7;
            var7 = var6.ctaTimerMilliSeconds;
            var2['ctaTimerMilliSeconds'] = var7;
            var6 = var6.scrollAffordanceVariant;
            var2['scrollAffordanceVariant'] = var6;
            var5 = var5.enabled;
            var2['stage1Enabled'] = var5;
            var2['orbAmount'] = var4;
            var2['rewardTimerSeconds'] = var3;
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['useBountiesExperience'] = var2;
    return var1;
})();