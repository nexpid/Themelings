// app/modules/search/experiments/SearchAuthorTypeFilterExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/experiments/SearchAuthorTypeFilterExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getIsSearchAuthorTypeFilterEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.location;
            var4 = var1.autoTrackExposure;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = true;
case 2:
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var1 = var6[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.getIsInSearchImprovementsHoldout;
            var1 = {};
            var1['location'] = var5;
            var1['autoTrackExposure'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        }
    };
    var3['getIsSearchAuthorTypeFilterEnabled'] = var4;
    var2 = function useIsSearchAuthorTypeFilterEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.location;
            var4 = var1.autoTrackExposure;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var4 = true;
case 2:
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var1 = var6[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.useIsInSearchImprovementsHoldout;
            var1 = {};
            var1['location'] = var5;
            var1['autoTrackExposure'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        }
    };
    var3['useIsSearchAuthorTypeFilterEnabled'] = var2;
    return var1;
})();