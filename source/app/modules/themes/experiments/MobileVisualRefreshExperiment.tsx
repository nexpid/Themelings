// app/modules/themes/experiments/MobileVisualRefreshExperiment.tsx
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
    var4 = {'kind': 'user', 'name': '2026-02-mobile-visual-refresh'};
    var7 = {'enabled': false, 'chatInputHideMore': false};
    var4['defaultConfig'] = var7;
    var7 = {};
    var8 = {'enabled': false, 'chatInputHideMore': false};
    var7[0] = var8;
    var8 = {'enabled': true, 'chatInputHideMore': false};
    var7[1] = var8;
    var8 = {'enabled': true, 'chatInputHideMore': true};
    var7[2] = var8;
    var4['variations'] = var7;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var5 = 1;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/themes/experiments/MobileVisualRefreshExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useIsMobileVisualRefreshExperimentEnabled(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['default'] = var5;
    var3['MobileVisualRefreshExperiment'] = var4;
    var4 = function useMobileVisualRefreshConfig(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot0;
        var2 = var3.useConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useMobileVisualRefreshConfig'] = var4;
    var4 = function isMobileVisualRefreshEnabled(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['isMobileVisualRefreshEnabled'] = var4;
    var2 = function resolveRefreshToken(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.resolve;
            var1 = {};
            var4 = arg2;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = new Array(0);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = ['mobile-visual-refresh'];
case 4:
            var1['enabledExperiments'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['resolveRefreshToken'] = var2;
    return var1;
})();