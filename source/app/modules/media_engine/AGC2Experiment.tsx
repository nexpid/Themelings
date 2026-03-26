// app/modules/media_engine/AGC2Experiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var11 = {'useAGC2': true, 'enableAnalog': false, 'enableDigital': true, 'headroom_db': 5, 'max_gain_db': 50, 'initial_gain_db': 15, 'max_gain_change_db_per_second': 6, 'max_output_noise_level_dbfs': 4294967246, 'fixed_gain_db': 0};
    var13 = false;
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2025-09-agc2-v2'};
    var9 = {};
    var9['noiseCancellationDuringProcessing'] = var13;
    var10 = {};
    var10['useAGC2'] = var13;
    var9['noiseCancellationConfig'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['noiseCancellationDuringProcessing'] = var12;
    var12 = {};
    var12['useAGC2'] = var13;
    var10['noiseCancellationConfig'] = var12;
    var9[1] = var10;
    var10 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.5};
    var10['noiseCancellationConfig'] = var11;
    var9[2] = var10;
    var10 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.55};
    var10['noiseCancellationConfig'] = var11;
    var9[3] = var10;
    var10 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.6};
    var10['noiseCancellationConfig'] = var11;
    var9[4] = var10;
    var10 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.65};
    var10['noiseCancellationConfig'] = var11;
    var9[5] = var10;
    var10 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.7};
    var10['noiseCancellationConfig'] = var11;
    var9[6] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/AGC2Experiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getAGC2ExperimentConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.location;
            var1 = var1.disable;
            var2 = undefined;
            if(!(var1 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var2 = _closure1_slot0;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.getConfig;
            var1 = {};
            var1['location'] = var4;
            var1 = var3.bind(var2)(var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = var2.definition;
            var1 = var2.defaultConfig;
case 6:
            return var1;
        }
    };
    var3['getAGC2ExperimentConfig'] = var2;
    return var1;
})();