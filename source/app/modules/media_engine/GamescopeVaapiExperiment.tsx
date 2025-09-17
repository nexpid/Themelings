// app/modules/media_engine/GamescopeVaapiExperiment.tsx
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
    var4 = {'name': '2025-09-gamescope-vaapi', 'kind': 'user'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/GamescopeVaapiExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGamescopeVaapiExperimentConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var7 = arguments[1];
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var7 = true;
 14:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var6 = var2.AVHoldoutExperimentH22025;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var4;
            var2 = {};
            var2['autoTrackExposure'] = var7;
            var2 = var5.bind(var6)(var3, var2);
            var3 = var2.isInHoldout;
            var2 = {};
            if(var3) { _fun0001_ip = 100; continue _fun0001 }
 79:
            var3 = _closure1_slot2;
            var1 = var3.getConfig;
            var2['location'] = var4;
            var1 = var1.bind(var3)(var2);
            _fun0001_ip = 109; continue _fun0001;
 100:
            var3 = false;
            var2['enabled'] = var3;
            var1 = var2;
 109:
            return var1;
        }
    };
    var3['getGamescopeVaapiExperimentConfig'] = var2;
    return var1;
})();