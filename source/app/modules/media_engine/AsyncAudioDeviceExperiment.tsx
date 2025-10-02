// app/modules/media_engine/AsyncAudioDeviceExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/AsyncAudioDeviceExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getAsyncAudioDeviceExperimentConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.location;
            var6 = var1.autoTrackExposure;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = true;
case 2:
            var1 = {};
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 0;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.AVHoldoutExperimentH22025;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var3['location'] = var2;
            var2 = {};
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var2 = var2.isInHoldout;
            var2 = !var2;
            var1['enabled'] = var2;
            return var1;
        }
    };
    var3['getAsyncAudioDeviceExperimentConfig'] = var2;
    return var1;
})();