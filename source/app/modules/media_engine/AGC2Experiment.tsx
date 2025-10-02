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
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2025-09-agc2-v2'};
    var9 = {};
    var13 = false;
    var9['noiseCancellationDuringProcessing'] = var13;
    var10 = {};
    var10['useAGC2'] = var13;
    var9['noiseCancellationConfig'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['noiseCancellationDuringProcessing'] = var11;
    var12 = {};
    var12['useAGC2'] = var13;
    var10['noiseCancellationConfig'] = var12;
    var9[1] = var10;
    var10 = {};
    var10['noiseCancellationDuringProcessing'] = var11;
    var11 = {'useAGC2': true, 'enableAnalog': false, 'enableDigital': true, 'headroom_db': 5, 'max_gain_db': 50, 'initial_gain_db': 15, 'max_gain_change_db_per_second': 6, 'max_output_noise_level_dbfs': 4294967246, 'fixed_gain_db': 0};
    var10['noiseCancellationConfig'] = var11;
    var9[2] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
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
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var3 = var4.bind(var6)(var3);
            var7 = var3.AVHoldoutExperimentH22025;
            var6 = var7.getCurrentConfig;
            var4 = {};
            var4['location'] = var5;
            var3 = {};
            var3['disable'] = var1;
            var8 = true;
            var3['autoTrackExposure'] = var8;
            var3 = var6.bind(var7)(var4, var3);
            var3 = var3.isInHoldout;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = _closure1_slot2;
            var3 = var4.getConfig;
            var1 = {};
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 7; continue _fun0001;
case 4:
            var2 = _closure1_slot2;
            var2 = var2.definition;
            var1 = var2.defaultConfig;
case 7:
            return var1;
        }
    };
    var3['getAGC2ExperimentConfig'] = var2;
    return var1;
})();