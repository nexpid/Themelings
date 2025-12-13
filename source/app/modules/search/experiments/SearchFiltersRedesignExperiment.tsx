// app/modules/search/experiments/SearchFiltersRedesignExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var9 = var5.bind(var1)(var4);
    var8 = var9.createExperiment;
    var7 = {'kind': 'user', 'id': '2025-07_search_filters_redesign', 'label': 'Search Filters Redesign'};
    var4 = {'isInExperiment': false, 'isEnabled': false, 'isHasFilterElevated': false};
    var7['defaultConfig'] = var4;
    var4 = {'id': 0, 'label': 'Control'};
    var10 = {'isInExperiment': true, 'isEnabled': false, 'isHasFilterElevated': false};
    var4['config'] = var10;
    var10 = new Array(3);
    var10[0] = var4;
    var11 = {'id': 1, 'label': 'Top Filters'};
    var4 = 1;
    var12 = {'isInExperiment': true, 'isEnabled': true, 'isHasFilterElevated': false};
    var11['config'] = var12;
    var10[1] = var11;
    var11 = {'id': 2, 'label': 'Top Filters (has: before mentions:)'};
    var12 = {'isInExperiment': true, 'isEnabled': true, 'isHasFilterElevated': true};
    var11['config'] = var12;
    var10[2] = var11;
    var7['treatments'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot0 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/experiments/SearchFiltersRedesignExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getIsInSearchFiltersRedesignExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot0;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.isInExperiment;
            return var1;
        }
    };
    var3['getIsInSearchFiltersRedesignExperiment'] = var4;
    var4 = function useIsInSearchFiltersRedesignExperiment(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot0;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.isInExperiment;
            return var1;
        }
    };
    var3['useIsInSearchFiltersRedesignExperiment'] = var4;
    var4 = function useIsSearchFiltersRedesignEnabled(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot0;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.isEnabled;
            return var1;
        }
    };
    var3['useIsSearchFiltersRedesignEnabled'] = var4;
    var4 = function getIsHasSearchFilterElevated(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot0;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.isHasFilterElevated;
            return var1;
        }
    };
    var3['getIsHasSearchFilterElevated'] = var4;
    var2 = function useIsHasSearchFilterElevated(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot0;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.isHasFilterElevated;
            return var1;
        }
    };
    var3['useIsHasSearchFilterElevated'] = var2;
    return var1;
})();