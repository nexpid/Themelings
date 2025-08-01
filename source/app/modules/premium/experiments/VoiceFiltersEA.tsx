// app/modules/premium/experiments/VoiceFiltersEA.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var12 = true;
    var2['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var9 = var2.CommonTriggerPoints;
    var2 = 1;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createExperiment;
    var2 = {'kind': 'user', 'id': '2025-06_voice_filters_ea', 'label': 'Voice Filters EA'};
    var10 = {};
    var11 = null;
    var10['enabled'] = var11;
    var2['defaultConfig'] = var10;
    var9 = var9.CONNECTION_OPEN;
    var2['commonTriggerPoint'] = var9;
    var10 = {'id': 0, 'label': "User don't see voice filters EA"};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {'id': 1, 'label': 'User sees voice filters EA'};
    var11 = {};
    var11['enabled'] = var12;
    var10['config'] = var11;
    var9[1] = var10;
    var2['treatments'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot2 = var2;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/experiments/VoiceFiltersEA.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useVoiceFiltersEA(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.location;
            var5 = _closure1_slot2;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var1;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.enabled;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.useAreVoiceFiltersEnabled;
            var2 = {'location': 'VoiceFiltersEarlyAccess', 'autoTrackExposure': true};
            var2 = var3.bind(var4)(var2);
            if(!var1) { _fun0001_ip = 100; continue _fun0001 }
 97:
            var1 = var2;
 100:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['VoiceFiltersEA'] = var2;
    return var1;
})();