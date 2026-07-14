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
    var13 = true;
    var4['value'] = var13;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var11 = var4.CommonTriggerPoints;
    var4 = 1;
    var5 = var9[var4];
    var7 = var8.bind(var1)(var5);
    var6 = var7.createApexExperiment;
    var5 = {'kind': 'user', 'name': '2026-03-content-inventory-memberlist-and-ranker'};
    var10 = {'enabled': true, 'impressionCappingEnabled': true};
    var5['defaultConfig'] = var10;
    var10 = {};
    var12 = false;
    var14 = {'enabled': false, 'impressionCappingEnabled': false};
    var10[0] = var14;
    var5['variations'] = var10;
    var6 = var6.bind(var7)(var5);
    var _closure1_slot2 = var6;
    var5 = 2;
    var5 = var9[var5];
    var10 = var8.bind(var1)(var5);
    var7 = var10.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-09_hotwheels_nvidia_boost', 'label': 'Next iteration of the activity feed ranking model.'};
    var11 = var11.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var11;
    var11 = {};
    var5['defaultConfig'] = var11;
    var14 = {'id': 16, 'label': 'ML model V3 - Nvidia small boost'};
    var11 = {};
    var14['config'] = var11;
    var11 = new Array(2);
    var11[0] = var14;
    var14 = {'id': 17, 'label': 'ML model V3 - Nvidia big boost'};
    var15 = {};
    var14['config'] = var15;
    var11[1] = var14;
    var5['treatments'] = var11;
    var5 = var7.bind(var10)(var5);
    var4 = var9[var4];
    var10 = var8.bind(var1)(var4);
    var7 = var10.createApexExperiment;
    var4 = {'name': '2026-07-hotwheels-clickable-game-icon', 'kind': 'user'};
    var11 = {};
    var11['enabled'] = var12;
    var4['defaultConfig'] = var11;
    var11 = {};
    var12 = {};
    var12['enabled'] = var13;
    var11[1] = var12;
    var4['variations'] = var11;
    var4 = var7.bind(var10)(var4);
    var _closure1_slot3 = var4;
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/content_inventory/ContentInventoryExperiments.tsx';
    var7 = var8.bind(var9)(var7);
    var3['MemberlistRankerExperiment'] = var6;
    var3['HotwheelsActivityFeedNvidiaExperiment'] = var5;
    var3['HotwheelsClickableGameIconExperiment'] = var4;
    var4 = function useIsHotwheelsClickableGameIconEnabled(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useIsHotwheelsClickableGameIconEnabled'] = var4;
    var4 = function isEligibleForContentInventoryV1(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot2;
            var3 = var5.getConfig;
            var1 = {};
            var1['location'] = var4;
            var1 = var3.bind(var5)(var1);
            var1 = var1.enabled;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.getICYMIEnabled;
            var2 = var2.bind(var3)(var4);
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