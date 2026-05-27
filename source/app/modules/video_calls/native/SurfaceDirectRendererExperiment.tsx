// app/modules/video_calls/native/SurfaceDirectRendererExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var8 = var9.createApexExperiment;
    var5 = {'kind': 'user', 'name': '2026-03-surface-direct-renderer'};
    var4 = '2026-03-surface-direct-renderer';
    var10 = {};
    var11 = false;
    var10['enableSurfaceDirectRenderer'] = var11;
    var5['defaultConfig'] = var10;
    var10 = {};
    var11 = {};
    var11['enableSurfaceDirectRenderer'] = var12;
    var10[1] = var11;
    var5['variations'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/SurfaceDirectRendererExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT'] = var4;
    var4 = function isSurfaceDirectRendererExperimentEnabled() {
        var3 = _closure1_slot3;
        var2 = var3.getConfig;
        var1 = {};
        var4 = 'RTCConnection_media_engine_connect';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enableSurfaceDirectRenderer;
        return var1;
    };
    var3['isSurfaceDirectRendererExperimentEnabled'] = var4;
    var2 = function useSurfaceDirectRendererExperiment(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot3;
            var5 = var6.useConfig;
            var2 = arg2;
            var2 = var5.bind(var6)(var2);
            var2 = var2.enableSurfaceDirectRenderer;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var5 = 2;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot2;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = new Array(1);
            var3[0] = var4;
            var1 = function() {
                var2 = _closure2_slot0;
                var3 = _closure1_slot2;
                var1 = var3.getId;
                var1 = var1.bind(var3)();
                var1 = var2 === var1;
                return var1;
            };
            var3 = var6.bind(var7)(var5, var1, var3);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = !var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useSurfaceDirectRendererExperiment'] = var2;
    return var1;
})();