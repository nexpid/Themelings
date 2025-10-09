// app/modules/calls/SurfaceUnwatchedStreamsExperiment.tsx
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
    var10 = true;
    var4['value'] = var10;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = {'kind': 'user', 'name': '2025-10-surface-unwatched-streams'};
    var8 = {};
    var9 = false;
    var8['showInCallGrid'] = var9;
    var4['defaultConfig'] = var8;
    var8 = {};
    var9 = {};
    var9['showInCallGrid'] = var10;
    var8[1] = var9;
    var4['variations'] = var8;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/SurfaceUnwatchedStreamsExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getSurfaceUnwatchedStreamsExperimentConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.location;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var3);
            var6 = var1.AVHoldoutExperimentH22025;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var4;
            var1 = {};
            var7 = true;
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var3, var1);
            var1 = var1.isInHoldout;
            var2 = _closure1_slot2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.getConfig;
            var1 = {};
            var1['location'] = var4;
            var1 = var3.bind(var2)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = var2.definition;
            var1 = var2.defaultConfig;
case 4:
            return var1;
        }
    };
    var3['getSurfaceUnwatchedStreamsExperimentConfig'] = var2;
    return var1;
})();