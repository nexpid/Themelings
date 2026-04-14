// app/modules/safety_flows/SafetyFlowsExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var9 = var7.bind(var1)(var4);
    var6 = var9.createExperiment;
    var5 = {'id': '2025-05_safety_flows', 'label': 'Safety Flows', 'kind': 'user'};
    var4 = {};
    var12 = false;
    var4['enabled'] = var12;
    var5['defaultConfig'] = var4;
    var13 = {'id': 1, 'label': 'Enabled'};
    var4 = 1;
    var10 = {};
    var10['enabled'] = var11;
    var13['config'] = var10;
    var10 = new Array(1);
    var10[0] = var13;
    var5['treatments'] = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot0 = var5;
    var6 = var8[var4];
    var4 = metroImportDefault;
    var6 = var4.bind(var1)(var6);
    var4 = {'name': '2026-04-safety-flows', 'kind': 'user'};
    var9 = {};
    var9['enabled'] = var12;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var12;
    var9[0] = var10;
    var10 = {};
    var10['enabled'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/safety_flows/SafetyFlowsExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['SafetyFlowsExperiment'] = var5;
    var3['SafetyFlowsApexExperiment'] = var4;
    var4 = function isEligibleForSafetyFlowsExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.location;
            var6 = _closure1_slot0;
            var4 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var5;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var4.bind(var6)(var3, var1);
            var1 = var1.enabled;
            var4 = _closure1_slot1;
            var3 = var4.getConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['isEligibleForSafetyFlowsExperiment'] = var4;
    var2 = function useIsEligibleForSafetyFlowsExperiment(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.location;
            var6 = _closure1_slot0;
            var4 = var6.useExperiment;
            var3 = {};
            var3['location'] = var5;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var4.bind(var6)(var3, var1);
            var1 = var1.enabled;
            var4 = _closure1_slot1;
            var3 = var4.useConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useIsEligibleForSafetyFlowsExperiment'] = var2;
    return var1;
})();