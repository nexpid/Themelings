// app/modules/search_v2/SearchImprovementsHoldoutExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var9 = var6.bind(var1)(var4);
    var8 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-06_search_improvements_holdout', 'label': 'Search Improvements Holdout'};
    var5 = {};
    var10 = false;
    var5['isInHoldout'] = var10;
    var4['defaultConfig'] = var5;
    var11 = {'id': 1, 'label': 'Enables holdout group'};
    var5 = 1;
    var10 = {};
    var10['isInHoldout'] = var12;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var4['treatments'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot0 = var4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search_v2/SearchImprovementsHoldoutExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SearchImprovementsHoldoutExperiment'] = var4;
    var4 = function getIsInSearchImprovementsHoldout(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0001_ip = 22; continue _fun0001 }
 20:
            var5 = true;
 22:
            var4 = _closure1_slot0;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.isInHoldout;
            return var1;
        }
    };
    var3['getIsInSearchImprovementsHoldout'] = var4;
    var2 = function useIsInSearchImprovementsHoldout(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0002_ip = 22; continue _fun0002 }
 20:
            var5 = true;
 22:
            var4 = _closure1_slot0;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.isInHoldout;
            return var1;
        }
    };
    var3['useIsInSearchImprovementsHoldout'] = var2;
    return var1;
})();