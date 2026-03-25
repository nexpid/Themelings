// app/modules/content_inventory/ContentInventoryExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var11 = var4.CommonTriggerPoints;
    var4 = 1;
    var4 = var9[var4];
    var6 = var8.bind(var1)(var4);
    var5 = var6.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2026-03-content-inventory-memberlist-and-ranker'};
    var7 = {'enabled': true, 'impressionCappingEnabled': true};
    var4['defaultConfig'] = var7;
    var7 = {};
    var10 = {'enabled': false, 'impressionCappingEnabled': false};
    var7[0] = var10;
    var4['variations'] = var7;
    var6 = var5.bind(var6)(var4);
    var _closure1_slot2 = var6;
    var4 = 2;
    var5 = var9[var4];
    var10 = var8.bind(var1)(var5);
    var7 = var10.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-04_hotwheels_holdout_the_sequel', 'label': 'Tracking a holdout hashed to member list experiment for data readouts'};
    var12 = var11.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var12;
    var12 = {};
    var5['defaultConfig'] = var12;
    var13 = {'id': 0, 'label': 'Holdout'};
    var12 = {};
    var13['config'] = var12;
    var12 = new Array(2);
    var12[0] = var13;
    var13 = {'id': 1, 'label': 'Shadow Treatment'};
    var14 = {};
    var13['config'] = var14;
    var12[1] = var13;
    var5['treatments'] = var12;
    var5 = var7.bind(var10)(var5);
    var4 = var9[var4];
    var10 = var8.bind(var1)(var4);
    var7 = var10.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-09_hotwheels_nvidia_boost', 'label': 'Next iteration of the activity feed ranking model.'};
    var11 = var11.CONNECTION_OPEN;
    var4['commonTriggerPoint'] = var11;
    var11 = {};
    var4['defaultConfig'] = var11;
    var12 = {'id': 16, 'label': 'ML model V3 - Nvidia small boost'};
    var11 = {};
    var12['config'] = var11;
    var11 = new Array(2);
    var11[0] = var12;
    var12 = {'id': 17, 'label': 'ML model V3 - Nvidia big boost'};
    var13 = {};
    var12['config'] = var13;
    var11[1] = var12;
    var4['treatments'] = var11;
    var4 = var7.bind(var10)(var4);
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/content_inventory/ContentInventoryExperiments.tsx';
    var7 = var8.bind(var9)(var7);
    var3['MemberlistRankerExperiment'] = var6;
    var3['HotwheelsHoldoutTheSequel'] = var5;
    var3['HotwheelsActivityFeedNvidiaExperiment'] = var4;
    var4 = function isEligibleForContentInventoryV1(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot2;
            var3 = var4.getConfig;
            var1 = {};
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getICYMIEnabled;
            var2 = false;
            var2 = var3.bind(var4)(var5, var2);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['isEligibleForContentInventoryV1'] = var4;
    var2 = function isEligibleForImpressionCapping(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot2;
            var2 = var3.getConfig;
            var1 = {};
            var4 = arg1;
            var1['location'] = var4;
            var2 = var2.bind(var3)(var1);
            var1 = var2.enabled;
            var3 = var2.impressionCappingEnabled;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = true;
            var1 = var2 === var3;
case 4:
            return var1;
        }
    };
    var3['isEligibleForImpressionCapping'] = var2;
    return var1;
})();