// app/modules/search/experiments/SearchMobileEntrypoints.tsx
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
    var9 = var5.bind(var1)(var4);
    var8 = var9.createExperiment;
    var7 = {'kind': 'user', 'id': '2025-08_mobile_search_entrypoints', 'label': 'Search Mobile Entrypoints'};
    var4 = {'isLargerMessagesEntrypointEnabled': false, 'isDMEntrypointEnabled': false};
    var7['defaultConfig'] = var4;
    var4 = {'id': 1, 'label': 'Larger entrypoint in Messages tab + copy changes'};
    var10 = {'isLargerMessagesEntrypointEnabled': true, 'isDMEntrypointEnabled': false};
    var4['config'] = var10;
    var10 = new Array(2);
    var10[0] = var4;
    var11 = {'id': 2, 'label': 'Larger entrypoint in Messages tab + copy changes + DM entrypoint'};
    var4 = 2;
    var12 = {'isLargerMessagesEntrypointEnabled': true, 'isDMEntrypointEnabled': true};
    var11['config'] = var12;
    var10[1] = var11;
    var7['treatments'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot2 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/experiments/SearchMobileEntrypoints.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsLargerSearchMobileEntrypointsEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var6 = var2.autoTrackExposure;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = true;
case 2:
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
            var1 = var1.isLargerMessagesEntrypointEnabled;
            return var1;
        }
    };
    var3['useIsLargerSearchMobileEntrypointsEnabled'] = var4;
    var2 = function useIsDMSearchMobileEntrypointsEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var6 = var2.autoTrackExposure;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var6 = true;
case 2:
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
            var1 = var1.isDMEntrypointEnabled;
            return var1;
        }
    };
    var3['useIsDMSearchMobileEntrypointsEnabled'] = var2;
    return var1;
})();