// app/modules/content_inventory/ContentInventoryExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var10 = var4.CommonTriggerPoints;
    var4 = 1;
    var4 = var8[var4];
    var6 = var7.bind(var1)(var4);
    var5 = var6.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2026-03-content-inventory-memberlist-and-ranker'};
    var9 = {'enabled': true, 'impressionCappingEnabled': true};
    var4['defaultConfig'] = var9;
    var9 = {};
    var11 = {'enabled': false, 'impressionCappingEnabled': false};
    var9[0] = var11;
    var4['variations'] = var9;
    var5 = var5.bind(var6)(var4);
    var _closure1_slot2 = var5;
    var4 = 2;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-09_hotwheels_nvidia_boost', 'label': 'Next iteration of the activity feed ranking model.'};
    var10 = var10.CONNECTION_OPEN;
    var4['commonTriggerPoint'] = var10;
    var10 = {};
    var4['defaultConfig'] = var10;
    var11 = {'id': 16, 'label': 'ML model V3 - Nvidia small boost'};
    var10 = {};
    var11['config'] = var10;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = {'id': 17, 'label': 'ML model V3 - Nvidia big boost'};
    var12 = {};
    var11['config'] = var12;
    var10[1] = var11;
    var4['treatments'] = var10;
    var4 = var6.bind(var9)(var4);
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/content_inventory/ContentInventoryExperiments.tsx';
    var6 = var7.bind(var8)(var6);
    var3['MemberlistRankerExperiment'] = var5;
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