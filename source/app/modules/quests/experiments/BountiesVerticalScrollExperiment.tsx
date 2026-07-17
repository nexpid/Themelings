// app/modules/quests/experiments/BountiesVerticalScrollExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var4 = function shouldUseScrollIndicatorOverlay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = 'indicator';
            var1 = var1 === var3;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'peek';
            var1 = var2 === var3;
case 2:
            return var1;
        }
    };
    var _closure1_slot1 = var4;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var9 = var7.bind(var1)(var5);
    var6 = var9.createApexExperiment;
    var5 = {'name': '2026-07-bounties-vertical-scroll', 'kind': 'user'};
    var10 = {'enabled': false, 'verticalScrollEnabled': false, 'scrollAffordanceVariant': 'none', 'autoScrollLeadMs': 3000, 'autoScrollEndCardMs': 8000, 'peekFraction': 0, 'ctaTimerMilliSeconds': 0};
    var5['defaultConfig'] = var10;
    var10 = {};
    var11 = {'enabled': true, 'verticalScrollEnabled': false, 'scrollAffordanceVariant': 'none', 'autoScrollLeadMs': 3000, 'autoScrollEndCardMs': 8000, 'peekFraction': 0, 'ctaTimerMilliSeconds': 0};
    var10[1] = var11;
    var11 = {'enabled': true, 'verticalScrollEnabled': true, 'scrollAffordanceVariant': 'none', 'autoScrollLeadMs': 3000, 'autoScrollEndCardMs': 8000, 'peekFraction': 0, 'ctaTimerMilliSeconds': 0};
    var10[2] = var11;
    var11 = {'enabled': true, 'verticalScrollEnabled': true, 'scrollAffordanceVariant': 'indicator', 'autoScrollLeadMs': 3000, 'autoScrollEndCardMs': 8000, 'peekFraction': 0, 'ctaTimerMilliSeconds': 0};
    var10[3] = var11;
    var11 = {'enabled': true, 'verticalScrollEnabled': true, 'scrollAffordanceVariant': 'auto', 'autoScrollLeadMs': 3000, 'autoScrollEndCardMs': 8000, 'peekFraction': 0, 'ctaTimerMilliSeconds': 0};
    var10[4] = var11;
    var11 = {'enabled': true, 'verticalScrollEnabled': true, 'scrollAffordanceVariant': 'peek', 'autoScrollLeadMs': 3000, 'autoScrollEndCardMs': 8000, 'peekFraction': 0.12, 'ctaTimerMilliSeconds': 0};
    var10[5] = var11;
    var5['variations'] = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot0 = var5;
    var6 = 1;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/experiments/BountiesVerticalScrollExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['BountiesVerticalScrollExperiment'] = var5;
    var5 = function useIsBountiesVerticalScrollExperimentEnabled(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.verticalScrollEnabled;
        return var1;
    };
    var3['useIsBountiesVerticalScrollExperimentEnabled'] = var5;
    var5 = function useIsBountiesVerticalScrollExperimentActive(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useIsBountiesVerticalScrollExperimentActive'] = var5;
    var3['shouldUseScrollIndicatorOverlay'] = var4;
    var2 = function useIsScrollIndicatorOverlayVariant(arg1) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot0;
        var2 = var4.useConfig;
        var1 = {};
        var5 = arg1;
        var1['location'] = var5;
        var1 = var2.bind(var4)(var1);
        var2 = var1.scrollAffordanceVariant;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useIsScrollIndicatorOverlayVariant'] = var2;
    return var1;
})();