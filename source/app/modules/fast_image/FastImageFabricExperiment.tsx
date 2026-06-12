// app/modules/fast_image/FastImageFabricExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
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
    var4 = {'name': '2026-06-ios-fastimage-fabric', 'kind': 'user'};
    var9 = {};
    var12 = false;
    var9['useFabric'] = var12;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['useFabric'] = var12;
    var9[0] = var10;
    var10 = {};
    var10['useFabric'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/fast_image/FastImageFabricExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function getFastImageFabricEnabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot3;
            var2 = var3.getId;
            var3 = var2.bind(var3)();
            var4 = _closure1_slot1;
            var2 = undefined;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = _closure1_slot2;
            var2 = var4.hasLoaded;
            var2 = var2.bind(var4)(var3);
            if(!var2) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var5 = _closure1_slot4;
            var4 = var5.getConfig;
            var2 = {};
            var6 = 'fast_image';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = var2.useFabric;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var2;
            return var2;
case 5:
            var2 = false;
            return var2;
case 4:
            var1 = _closure1_slot1;
            return var1;
        }
    };
    var3['getFastImageFabricEnabled'] = var2;
    return var1;
})();