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
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-07_agc2', 'label': 'WebRTC AGC2'};
    var9 = {};
    var10 = false;
    var9['useAGC2'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'WebRTC defaults'};
    var9 = {'useAGC2': true, 'enableAnalog': false, 'enableDigital': true, 'headroom_db': 5, 'max_gain_db': 50, 'initial_gain_db': 15, 'max_gain_change_db_per_second': 6, 'max_output_noise_level_dbfs': 4294967246, 'fixed_gain_db': 0};
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
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
 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var7 = undefined;
            if(!(var5 === var7)) { _fun0001_ip = 22; continue _fun0001 }
 20:
            var5 = true;
 22:
            var6 = var2.disable;
            if(!(var6 === var7)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var6 = false;
 34:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 1;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var8 = var3.AVHoldoutExperimentH22025;
            var7 = var8.getCurrentConfig;
            var4 = {};
            var4['location'] = var1;
            var3 = {};
            var3['disable'] = var6;
            var3['autoTrackExposure'] = var5;
            var3 = var7.bind(var8)(var4, var3);
            var7 = var3.isInHoldout;
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            if(var6) { _fun0001_ip = 123; continue _fun0001 }
 120:
            var6 = var7;
 123:
            var1['disable'] = var6;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getAGC2ExperimentConfig'] = var2;
    return var1;
})();