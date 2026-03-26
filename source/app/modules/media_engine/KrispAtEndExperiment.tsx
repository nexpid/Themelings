// app/modules/media_engine/KrispAtEndExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var7 = var8.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2025-10-krisp-at-end'};
    var9 = {'noiseCancellationAfterProcessing': false, 'vadAfterWebrtc': false};
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {'noiseCancellationAfterProcessing': true, 'vadAfterWebrtc': false};
    var9[1] = var10;
    var10 = {'noiseCancellationAfterProcessing': false, 'vadAfterWebrtc': true};
    var9[2] = var10;
    var10 = {'noiseCancellationAfterProcessing': true, 'vadAfterWebrtc': true};
    var9[3] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/KrispAtEndExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getKrispAtEndExperimentConfig(arg1) {
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
    var3['getKrispAtEndExperimentConfig'] = var2;
    return var1;
})();