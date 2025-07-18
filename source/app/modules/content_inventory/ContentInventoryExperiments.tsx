// app/modules/content_inventory/ContentInventoryExperiments.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var13 = true;
    var4['value'] = var13;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var10[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var12 = var4.CommonTriggerPoints;
    var4 = 1;
    var5 = var10[var4];
    var7 = var9.bind(var1)(var5);
    var6 = var7.createExperiment;
    var5 = {'kind': 'user', 'id': '2024-03_content_inventory_memberlist_and_ranker', 'label': 'Enables the memberlist content feed'};
    var8 = {'enabled': true, 'impressionCappingEnabled': true};
    var5['defaultConfig'] = var8;
    var11 = {'id': 4294967295, 'label': 'Not in experiment'};
    var8 = {};
    var14 = false;
    var8['enabled'] = var14;
    var11['config'] = var8;
    var8 = new Array(2);
    var8[0] = var11;
    var11 = {'id': 0, 'label': 'Holdout'};
    var15 = {};
    var15['enabled'] = var14;
    var11['config'] = var15;
    var8[1] = var11;
    var5['treatments'] = var8;
    var7 = var6.bind(var7)(var5);
    var _closure1_slot2 = var7;
    var5 = var10[var4];
    var8 = var9.bind(var1)(var5);
    var6 = var8.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-04_hotwheels_holdout_the_sequel', 'label': 'Tracking a holdout hashed to member list experiment for data readouts'};
    var11 = var12.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var11;
    var11 = {};
    var5['defaultConfig'] = var11;
    var15 = {'id': 0, 'label': 'Holdout'};
    var11 = {};
    var15['config'] = var11;
    var11 = new Array(2);
    var11[0] = var15;
    var15 = {'id': 1, 'label': 'Shadow Treatment'};
    var16 = {};
    var15['config'] = var16;
    var11[1] = var15;
    var5['treatments'] = var11;
    var6 = var6.bind(var8)(var5);
    var5 = var10[var4];
    var11 = var9.bind(var1)(var5);
    var8 = var11.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-05_hotwheels_user_affinity_v2', 'label': 'Next iteration of the activity feed ranking model.'};
    var12 = var12.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var12;
    var12 = {};
    var5['defaultConfig'] = var12;
    var15 = {'id': 14, 'label': 'ML model V3 - User Affinity V2'};
    var12 = {};
    var15['config'] = var12;
    var12 = new Array(1);
    var12[0] = var15;
    var5['treatments'] = var12;
    var5 = var8.bind(var11)(var5);
    var4 = var10[var4];
    var11 = var9.bind(var1)(var4);
    var8 = var11.createExperiment;
    var4 = {'kind': 'user', 'id': '2024-08_content_inventory_analytics_sampling', 'label': 'Content Inventory Analytics Sampling'};
    var12 = {};
    var12['trackingEnabled'] = var13;
    var4['defaultConfig'] = var12;
    var13 = {'id': 1, 'label': 'Tracking disabled'};
    var12 = {};
    var12['trackingEnabled'] = var14;
    var13['config'] = var12;
    var12 = new Array(1);
    var12[0] = var13;
    var4['treatments'] = var12;
    var4 = var8.bind(var11)(var4);
    var _closure1_slot3 = var4;
    var8 = 3;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/content_inventory/ContentInventoryExperiments.tsx';
    var8 = var9.bind(var10)(var8);
    var3['MemberlistRankerExperiment'] = var7;
    var3['HotwheelsHoldoutTheSequel'] = var6;
    var3['HotwheelsActivityFeedMlModelUAV2Experiment'] = var5;
    var5 = function isEligibleForContentInventoryV1(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var6 = _closure1_slot2;
            var4 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var5;
            var1 = {};
            var7 = true;
            var1['autoTrackExposure'] = var7;
            var1 = var4.bind(var6)(var3, var1);
            var1 = var1.enabled;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getICYMIExperiment;
            var2 = false;
            var2 = var3.bind(var4)(var5, var2);
            if(var1) { _fun0001_ip = 84; continue _fun0001 }
 81:
            var1 = var2;
 84:
            return var1;
        }
    };
    var3['isEligibleForContentInventoryV1'] = var5;
    var5 = function isEligibleForImpressionCapping(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var5 = false;
            var1['autoTrackExposure'] = var5;
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.enabled;
            var3 = var2.impressionCappingEnabled;
            if(!var1) { _fun0002_ip = 57; continue _fun0002 }
 51:
            var2 = true;
            var1 = var2 === var3;
 57:
            return var1;
        }
    };
    var3['isEligibleForImpressionCapping'] = var5;
    var3['ContentInventoryAnalyticsSamplingExperiment'] = var4;
    var4 = function isEligibleForContentInventoryAnalyticsSampling(arg1) {
        var4 = _closure1_slot3;
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = arg1;
        var2['location'] = var1;
        var1 = {};
        var5 = true;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['isEligibleForContentInventoryAnalyticsSampling'] = var4;
    var2 = function useIsEligibleForContentInventoryAnalyticsSampling(arg1) {
        var4 = _closure1_slot3;
        var3 = var4.useExperiment;
        var2 = {};
        var1 = arg1;
        var2['location'] = var1;
        var1 = {};
        var5 = true;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsEligibleForContentInventoryAnalyticsSampling'] = var2;
    return var1;
})();