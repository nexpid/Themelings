// app/modules/search/experiments/SearchDesktopXDMExperiment.tsx
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
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-06_search_desktop_xdm_experiment', 'label': 'Search Desktop XDM Experiment'};
    var9 = {'enabled': false, 'inExperiment': false};
    var4['defaultConfig'] = var9;
    var10 = {'id': 0, 'label': 'Control group for xDM search on desktop'};
    var9 = {'enabled': false, 'inExperiment': true};
    var10['config'] = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {'id': 1, 'label': 'Enables xDM search on desktop'};
    var11 = {'enabled': true, 'inExperiment': true};
    var10['config'] = var11;
    var9[1] = var10;
    var4['treatments'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/experiments/SearchDesktopXDMExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getIsSearchDesktopXDMExperimentEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.location;
            var6 = var2.autoTrackExposure;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 22; continue _fun0001 }
 20:
            var6 = true;
 22:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.getIsInSearchImprovementsHoldout;
            var3 = {};
            var3['location'] = var1;
            var3['autoTrackExposure'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var6;
            var1['disable'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['getIsSearchDesktopXDMExperimentEnabled'] = var4;
    var4 = function useIsSearchDesktopXDMExperimentEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.location;
            var6 = var2.autoTrackExposure;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0002_ip = 22; continue _fun0002 }
 20:
            var6 = true;
 22:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useIsInSearchImprovementsHoldout;
            var3 = {};
            var3['location'] = var1;
            var3['autoTrackExposure'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot2;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var6;
            var1['disable'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['useIsSearchDesktopXDMExperimentEnabled'] = var4;
    var4 = function useIsInSearchDesktopXDMExperiment(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = var2.location;
            var6 = var2.autoTrackExposure;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0003_ip = 22; continue _fun0003 }
 20:
            var6 = true;
 22:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useIsInSearchImprovementsHoldout;
            var3 = {};
            var3['location'] = var1;
            var3['autoTrackExposure'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot2;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var6;
            var1['disable'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.inExperiment;
            return var1;
        }
    };
    var3['useIsInSearchDesktopXDMExperiment'] = var4;
    var2 = function getIsInSearchDesktopXDMExperiment(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var1 = var2.location;
            var6 = var2.autoTrackExposure;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0004_ip = 22; continue _fun0004 }
 20:
            var6 = true;
 22:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.getIsInSearchImprovementsHoldout;
            var3 = {};
            var3['location'] = var1;
            var3['autoTrackExposure'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var6;
            var1['disable'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.inExperiment;
            return var1;
        }
    };
    var3['getIsInSearchDesktopXDMExperiment'] = var2;
    return var1;
})();