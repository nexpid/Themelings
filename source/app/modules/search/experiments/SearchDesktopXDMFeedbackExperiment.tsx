// app/modules/search/experiments/SearchDesktopXDMFeedbackExperiment.tsx
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
    var7 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-06_search_desktop_xdm_feedback', 'label': 'Search Desktop XDM Feedback Experiment'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Enables feedback in xDM control and treatment groups'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/experiments/SearchDesktopXDMFeedbackExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsSearchDesktopXDMFeedbackEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.location;
            var6 = _closure1_slot2;
            var4 = var6.useExperiment;
            var3 = {};
            var3['location'] = var5;
            var2 = {};
            var7 = false;
            var2['autoTrackExposure'] = var7;
            var2 = var4.bind(var6)(var3, var2);
            var2 = var2.enabled;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.useIsInSearchDesktopXDMExperiment;
            var1 = {};
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useIsSearchDesktopXDMFeedbackEnabled'] = var4;
    var2 = function getIsSearchDesktopXDMFeedbackEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.location;
            var6 = _closure1_slot2;
            var4 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var5;
            var2 = {};
            var7 = false;
            var2['autoTrackExposure'] = var7;
            var2 = var4.bind(var6)(var3, var2);
            var2 = var2.enabled;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getIsInSearchDesktopXDMExperiment;
            var1 = {};
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['getIsSearchDesktopXDMFeedbackEnabled'] = var2;
    return var1;
})();