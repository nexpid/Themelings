// app/modules/keyword_filter/hooks/useKeywordFilterSettings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = function useKeywordFilterSettings() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.useStateFromStoresObject;
            var1 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot2;
                    var1 = var1.settings;
                    var3 = var1.textAndImages;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var3.keywordFilterSettings;
case 2:
                    if(!(var2 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = {};
case 4:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3, var1);
            var1 = {};
            var6 = var3.profanity;
            var4 = null;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var6.value;
case 6:
            var1['profanity'] = var5;
            var6 = var3.sexualContent;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var6.value;
case 8:
            var1['sexualContent'] = var5;
            var3 = var3.slurs;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var3.value;
case 10:
            var1['slurs'] = var2;
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/keyword_filter/hooks/useKeywordFilterSettings.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useKeywordFilterSettings'] = var4;
    var2 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = _closure1_slot3;
            var6 = undefined;
            var2 = var2.bind(var6)();
            var3 = var2.profanity;
            var4 = var2.sexualContent;
            var2 = var2.slurs;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 2;
            var1 = var7[var1];
            var6 = var5.bind(var6)(var1);
            var5 = var6.useIsEligibleForKeywordFiltering;
            var1 = {};
            var7 = 'use-should-filter-keywords';
            var1['location'] = var7;
            var1 = var5.bind(var6)(var1);
            var5 = !var1;
            var1 = !var5;
            if(var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = var4;
case 14:
            if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var3 = var2;
case 16:
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var2 = var3;
case 18:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['useShouldFilterKeywords'] = var2;
    return var1;
})();