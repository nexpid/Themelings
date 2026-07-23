// app/modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var10 = true;
    var4['value'] = var10;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.createApexExperiment;
    var4 = {'name': '2026-04-one-day-fractional-nitro', 'kind': 'user', 'defaultConfig': false};
    var9 = {};
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useOneDayFractionalNitroEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot2;
            var3 = var4.useConfig;
            var1 = {};
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = !var2;
case 2:
            return var1;
        }
    };
    var3['useOneDayFractionalNitroEnabled'] = var2;
    return var1;
})();