// app/modules/keyword_filter/hooks/useShouldFilterKeywords.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyword_filter/hooks/useShouldFilterKeywords.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 0;
            var1 = var7[var1];
            var5 = undefined;
            var2 = var6.bind(var5)(var1);
            var1 = var2.useKeywordFilterSettings;
            var1 = var1.bind(var2)();
            var3 = var1.profanity;
            var4 = var1.sexualContent;
            var2 = var1.slurs;
            var1 = 1;
            var1 = var7[var1];
            var6 = var6.bind(var5)(var1);
            var5 = var6.useIsEligibleForKeywordFiltering;
            var1 = {};
            var7 = 'use-should-filter-keywords';
            var1['location'] = var7;
            var1 = var5.bind(var6)(var1);
            var5 = !var1;
            var1 = !var5;
            if(var5) { _fun0001_ip = 123; continue _fun0001 }
 96:
            if(var3) { _fun0001_ip = 102; continue _fun0001 }
 99:
            var3 = var4;
 102:
            if(var3) { _fun0001_ip = 108; continue _fun0001 }
 105:
            var3 = var2;
 108:
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 120; continue _fun0001 }
 117:
            var2 = var3;
 120:
            var1 = var2;
 123:
            return var1;
        }
    };
    var3['useShouldFilterKeywords'] = var2;
    return var1;
})();