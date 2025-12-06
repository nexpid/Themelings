// app/modules/media_engine/AGC2Experiment.tsx
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
    var11 = {'useAGC2': true, 'enableAnalog': false, 'enableDigital': true, 'headroom_db': 5, 'max_gain_db': 50, 'initial_gain_db': 15, 'max_gain_change_db_per_second': 6, 'max_output_noise_level_dbfs': 4294967246, 'fixed_gain_db': 0};
    var13 = false;
    var4 = 0;
    var7 = var6[var4];
    var1 = undefined;
    var9 = var5.bind(var1)(var7);
    var8 = var9.createApexExperiment;
    var7 = {'kind': 'user', 'name': '2025-09-agc2-v2'};
    var10 = {};
    var10['noiseCancellationDuringProcessing'] = var13;
    var14 = {};
    var14['useAGC2'] = var13;
    var10['noiseCancellationConfig'] = var14;
    var7['defaultConfig'] = var10;
    var10 = {};
    var14 = {};
    var14['noiseCancellationDuringProcessing'] = var12;
    var15 = {};
    var15['useAGC2'] = var13;
    var14['noiseCancellationConfig'] = var15;
    var10[1] = var14;
    var14 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.5};
    var14['noiseCancellationConfig'] = var11;
    var10[2] = var14;
    var14 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.55};
    var14['noiseCancellationConfig'] = var11;
    var10[3] = var14;
    var14 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.6};
    var14['noiseCancellationConfig'] = var11;
    var10[4] = var14;
    var14 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.65};
    var14['noiseCancellationConfig'] = var11;
    var10[5] = var14;
    var14 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.7};
    var14['noiseCancellationConfig'] = var11;
    var10[6] = var14;
    var7['variations'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot2 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createApexExperiment;
    var7 = {'kind': 'user', 'name': '2025-12-agc2-v2--mirror'};
    var10 = {};
    var10['noiseCancellationDuringProcessing'] = var13;
    var14 = {};
    var14['useAGC2'] = var13;
    var10['noiseCancellationConfig'] = var14;
    var7['defaultConfig'] = var10;
    var10 = {};
    var14 = {};
    var14['noiseCancellationDuringProcessing'] = var12;
    var15 = {};
    var15['useAGC2'] = var13;
    var14['noiseCancellationConfig'] = var15;
    var10[1] = var14;
    var14 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.5};
    var14['noiseCancellationConfig'] = var11;
    var10[2] = var14;
    var14 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.55};
    var14['noiseCancellationConfig'] = var11;
    var10[3] = var14;
    var14 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.6};
    var14['noiseCancellationConfig'] = var11;
    var10[4] = var14;
    var14 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.65};
    var14['noiseCancellationConfig'] = var11;
    var10[5] = var14;
    var14 = {'noiseCancellationDuringProcessing': true, 'noiseCancellationConfig': null, 'vadKrispActivationThreshold': 0.7};
    var14['noiseCancellationConfig'] = var11;
    var10[6] = var14;
    var7['variations'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2025-12-agc2-v2--shadow'};
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
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/AGC2Experiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getAGC2ExperimentConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.location;
            var1 = var1.disable;
            var6 = undefined;
            if(!(var1 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var2 = {};
            var2['location'] = var5;
            var2['disable'] = var1;
            var10 = var2.location;
            var4 = var2.disable;
            if(!(var4 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = false;
case 4:
            var8 = _closure1_slot0;
            var3 = _closure1_slot1;
            var7 = 1;
            var3 = var3[var7];
            var3 = var8.bind(var6)(var3);
            var12 = var3.AVMirrorHoldoutExperimentH22025;
            var11 = var12.getCurrentConfig;
            var9 = {};
            var9['location'] = var10;
            var3 = {};
            var3['disable'] = var4;
            var8 = true;
            var3['autoTrackExposure'] = var8;
            var3 = var11.bind(var12)(var9, var3);
            var3 = var3.isInHoldout;
            var12 = _closure1_slot4;
            var11 = var12.getConfig;
            var9 = {};
            var9['location'] = var10;
            var9 = var11.bind(var12)(var9);
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4;
case 6:
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot3;
            var4 = var9.getConfig;
            var3 = {};
            var3['location'] = var10;
            var3 = var4.bind(var9)(var3);
case 8:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var4.bind(var6)(var3);
            var7 = var3.AVHoldoutExperimentH22025;
            var6 = var7.getCurrentConfig;
            var4 = {};
            var4['location'] = var5;
            var3 = {};
            var3['disable'] = var1;
            var3['autoTrackExposure'] = var8;
            var3 = var6.bind(var7)(var4, var3);
            var3 = var3.isInHoldout;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var4 = _closure1_slot2;
            var3 = var4.getConfig;
            var1 = {};
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 13; continue _fun0001;
case 10:
            var2 = _closure1_slot2;
            var2 = var2.definition;
            var1 = var2.defaultConfig;
case 13:
            return var1;
        }
    };
    var3['getAGC2ExperimentConfig'] = var2;
    return var1;
})();