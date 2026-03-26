// app/modules/media_engine/VADBeforeProcessingExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var9 = true;
    var4['value'] = var9;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var6 = var4.bind(var1)(var6);
    var4 = {'kind': 'user', 'name': '2025-10-vad-before-processing'};
    var7 = {};
    var8 = false;
    var7['enabled'] = var8;
    var4['defaultConfig'] = var7;
    var7 = {};
    var8 = {};
    var8['enabled'] = var9;
    var7[1] = var8;
    var4['variations'] = var7;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/VADBeforeProcessingExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getVADBeforeProcessingExperimentConfig(arg1) {
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
    var3['getVADBeforeProcessingExperimentConfig'] = var2;
    return var1;
})();