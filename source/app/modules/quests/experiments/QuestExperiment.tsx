// app/modules/quests/experiments/QuestExperiment.tsx
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
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createExperiment;
    var4 = {'id': '2023-12_quests', 'kind': 'user', 'label': 'Quests'};
    var9 = {};
    var11 = false;
    var9['enabled'] = var11;
    var4['defaultConfig'] = var9;
    var10 = {'id': 0, 'label': 'Control'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {'id': 1, 'label': 'Quests enabled'};
    var11 = {};
    var11['enabled'] = var12;
    var10['config'] = var11;
    var9[1] = var10;
    var4['treatments'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/experiments/QuestExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.location;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var1 = var4.isMetaQuest;
            var1 = var1.bind(var4)();
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot2;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var3['location'] = var2;
            var2 = {};
            var6 = false;
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var2.enabled;
case 2:
            return var1;
        }
    };
    var3['getIsEligibleForQuests'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.location;
            var5 = _closure1_slot2;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var2;
            var2 = {};
            var6 = false;
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isMetaQuest;
            var1 = var1.bind(var3)();
            var1 = !var1;
            if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 4:
            var1 = var2.enabled;
case 2:
            return var1;
        }
    };
    var3['useIsEligibleForQuests'] = var2;
    return var1;
})();