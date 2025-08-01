// app/modules/media_engine/WindowsGraphicsCaptureUpdateExperiment.tsx
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
    var13 = true;
    var4['value'] = var13;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var9 = var5.bind(var1)(var4);
    var8 = var9.createExperiment;
    var7 = {'kind': 'user', 'id': '2025-04_wgc24h2api', 'label': 'Windows Graphics Capture 24H2 API'};
    var4 = {};
    var10 = false;
    var4['enabled'] = var10;
    var7['defaultConfig'] = var4;
    var4 = {'id': 1, 'label': 'Enable new API features'};
    var10 = {};
    var10['enabled'] = var13;
    var4['config'] = var10;
    var10 = new Array(2);
    var10[0] = var4;
    var11 = {'id': 2, 'label': 'Enable new API features (copy for holdout)'};
    var4 = 2;
    var12 = {};
    var12['enabled'] = var13;
    var11['config'] = var12;
    var10[1] = var11;
    var7['treatments'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot2 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/WindowsGraphicsCaptureUpdateExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getWindowsGraphicsCaptureUpdateExperimentConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = arguments[1];
            var6 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var5 = true;
 14:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var3 = var4.bind(var6)(var3);
            var7 = var3.AVHoldoutExperimentH12025;
            var6 = var7.getCurrentConfig;
            var4 = {};
            var4['location'] = var1;
            var3 = {};
            var3['autoTrackExposure'] = var5;
            var3 = var6.bind(var7)(var4, var3);
            var6 = var3.isInHoldout;
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['disable'] = var6;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getWindowsGraphicsCaptureUpdateExperimentConfig'] = var2;
    return var1;
})();