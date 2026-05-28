// app/modules/media_uploads/experiments/AndroidRNVHttpEngineExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createApexExperiment;
    var4 = {'name': '2026-05-android-rnv-http-engine', 'kind': 'user'};
    var9 = {};
    var11 = 'default';
    var9['httpEngine'] = var11;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['httpEngine'] = var11;
    var9[0] = var10;
    var10 = {};
    var11 = 'okhttp';
    var10['httpEngine'] = var11;
    var9[1] = var10;
    var10 = {};
    var11 = 'cronet';
    var10['httpEngine'] = var11;
    var9[2] = var10;
    var4['variations'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_uploads/experiments/AndroidRNVHttpEngineExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['AndroidRNVHttpEngineExperiment'] = var4;
    var4 = function useRnvHttpEngine() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot4;
            var3 = var4.useConfig;
            var2 = {};
            var5 = 'android_rnv_http_engine';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isAndroid;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.httpEngine;
case 2:
            return var1;
        }
    };
    var3['useRnvHttpEngine'] = var4;
    var2 = function getMuxExperimentDimension() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot3;
            var2 = var3.getId;
            var4 = var2.bind(var3)();
            var3 = _closure1_slot2;
            var2 = var3.getAssignment;
            var1 = 'user';
            var6 = '2026-05-android-rnv-http-engine';
            var3 = var2.bind(var3)(var1, var4, var6);
            var1 = null;
            var4 = var1 == var3;
            var5 = undefined;
            if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = var3.trackedVariantId;
case 4:
            if(!(var1 == var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.variantId;
case 8:
            var5 = var2;
case 6:
            var2 = var1 == var5;
            var1 = null;
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ':';
            var1 = var4.bind(var3)(var6, var2, var5);
case 10:
            return var1;
        }
    };
    var3['getMuxExperimentDimension'] = var2;
    return var1;
})();