// app/modules/calls/AutoOpenTIVExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var5 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var5 = var4.bind(var1)(var5);
    var4 = {'kind': 'user', 'name': '2025-11-auto-open-tiv'};
    var7 = {'collectAnalytics': false, 'autoOpenTIV': false, 'autoNavigateChannel': false};
    var4['defaultConfig'] = var7;
    var7 = {};
    var8 = {'collectAnalytics': true, 'autoOpenTIV': false, 'autoNavigateChannel': false};
    var7[0] = var8;
    var8 = {'collectAnalytics': true, 'autoOpenTIV': true, 'autoNavigateChannel': false};
    var7[1] = var8;
    var8 = {'collectAnalytics': true, 'autoOpenTIV': true, 'autoNavigateChannel': true};
    var7[2] = var8;
    var4['variations'] = var7;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var5 = 1;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/calls/AutoOpenTIVExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['AutoOpenTIVExperiment'] = var4;
    var2 = function useShouldAutoOpenTIV(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channel;
            var5 = var1.location;
            var3 = _closure1_slot0;
            var2 = var3.useConfig;
            var1 = {};
            var1['location'] = var5;
            var1 = var2.bind(var3)(var1);
            var2 = var1.autoOpenTIV;
            var1 = null;
            var3 = var1 == var4;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4.isGuildVocal;
            var1 = var1.bind(var4)();
            var3 = !var1;
case 2:
            var1 = !var3;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useShouldAutoOpenTIV'] = var2;
    return var1;
})();