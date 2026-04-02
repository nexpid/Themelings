// app/modules/media_uploads/experiments/VideoUploadBitrateExperiment.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.VideoCompressionQuality;
    var _closure1_slot0 = var4;
    var11 = 1;
    var4 = var6[var11];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'name': '2025-10-video-upload-bitrate-reduction', 'kind': 'user'};
    var9 = {};
    var9['bitrateMultiplier'] = var11;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['bitrateMultiplier'] = var11;
    var9[0] = var10;
    var10 = {};
    var11 = 0.9;
    var10['bitrateMultiplier'] = var11;
    var9[1] = var10;
    var10 = {};
    var11 = 0.8;
    var10['bitrateMultiplier'] = var11;
    var9[2] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/experiments/VideoUploadBitrateExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getVideoUploadBitrateConfig(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot1;
        var2 = var3.getConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getVideoUploadBitrateConfig'] = var4;
    var2 = function shouldApplyBitrateExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot0;
            var1 = var1.MEDIUM;
            var1 = var3 === var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var2 = var2.HIGH;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var3['shouldApplyBitrateExperiment'] = var2;
    return var1;
})();