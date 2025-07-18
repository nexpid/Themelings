// app/modules/keyword_filter/KeywordFilterExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2024-04_keyword_filter_experiment', 'label': 'Replace registered keywords with asterisks'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Enable Keyword Filter'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/keyword_filter/KeywordFilterExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['KeywordFilterExperiment'] = var4;
    var4 = function useIsEligibleForKeywordFiltering(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.location;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.useIsEligibleForKeywordFilterUpsell;
            var2 = {};
            var2['location'] = var1;
            var2 = var4.bind(var5)(var2);
            var5 = _closure1_slot2;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var1;
            var1 = {};
            var6 = true;
            var1['autoTrackExposure'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.enabled;
            if(var1) { _fun0001_ip = 92; continue _fun0001 }
 89:
            var1 = var2;
 92:
            return var1;
        }
    };
    var3['useIsEligibleForKeywordFiltering'] = var4;
    var2 = function isEligibleForKeywordFiltering(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.location;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.isEligibleForKeywordFilterUpsell;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var1 = {};
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            if(var1) { _fun0002_ip = 82; continue _fun0002 }
 79:
            var1 = var2;
 82:
            return var1;
        }
    };
    var3['isEligibleForKeywordFiltering'] = var2;
    return var1;
})();