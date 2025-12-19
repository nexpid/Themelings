// app/modules/media_engine/MobileGLTRExperiment.tsx
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
    var4 = {'name': '2025-12-mobile-golive-tile-resolution', 'kind': 'user'};
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
    var4 = 'modules/media_engine/MobileGLTRExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getMobileGLTRExperimentConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var7 = arguments[1];
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = true;
case 2:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var1 = var6[var1];
            var1 = var3.bind(var5)(var1);
            var6 = var1.AVHoldoutExperimentH22025;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var4;
            var1 = {};
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var3, var1);
            var1 = var1.isInHoldout;
            var2 = _closure1_slot2;
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
    var3['getMobileGLTRExperimentConfig'] = var2;
    return var1;
})();