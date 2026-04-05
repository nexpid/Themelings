// app/modules/video_calls/native/SurfaceDirectRendererExperiment.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2026-03-android-surface-direct-renderer'};
    var9 = {};
    var10 = false;
    var9['enableSurfaceDirectRenderer'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enableSurfaceDirectRenderer'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/SurfaceDirectRendererExperiment.tsx';
    var4 = var5.bind(var6)(var4);
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