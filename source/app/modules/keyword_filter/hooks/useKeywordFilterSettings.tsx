// app/modules/keyword_filter/hooks/useKeywordFilterSettings.tsx
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
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = function useKeywordFilterSettings() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
 0:
                    var1 = _closure1_slot2;
                    var1 = var1.settings;
                    var3 = var1.textAndImages;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 36; continue _fun0002 }
 30:
                    var1 = var3.keywordFilterSettings;
 36:
                    if(!(var2 == var1)) { _fun0002_ip = 42; continue _fun0002 }
 40:
                    var1 = {};
 42:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3, var1);
            var1 = {};
            var6 = var3.profanity;
            var4 = null;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 80; continue _fun0001 }
 75:
            var5 = var6.value;
 80:
            var1['profanity'] = var5;
            var6 = var3.sexualContent;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 105; continue _fun0001 }
 100:
            var5 = var6.value;
 105:
            var1['sexualContent'] = var5;
            var3 = var3.slurs;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 130; continue _fun0001 }
 125:
            var2 = var3.value;
 130:
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
 0:
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
            if(var5) { _fun0003_ip = 110; continue _fun0003 }
 83:
            if(var3) { _fun0003_ip = 89; continue _fun0003 }
 86:
            var3 = var4;
 89:
            if(var3) { _fun0003_ip = 95; continue _fun0003 }
 92:
            var3 = var2;
 95:
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0003_ip = 107; continue _fun0003 }
 104:
            var2 = var3;
 107:
            var1 = var2;
 110:
            return var1;
        }
    };
    var3['useShouldFilterKeywords'] = var2;
    return var1;
})();