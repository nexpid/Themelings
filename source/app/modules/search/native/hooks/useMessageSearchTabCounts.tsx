// app/modules/search/native/hooks/useMessageSearchTabCounts.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MESSAGE_SEARCH_RESULT_TABS;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/hooks/useMessageSearchTabCounts.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMessageSearchTabCounts(arg1, arg2) {
        var6 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var3 = arg2;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 3;
                    var5 = var5[var4];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.getSearchTabFetchId;
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var5 = var6.bind(var7)(var5, var3, var4);
                    var4 = _closure1_slot2;
                    var2 = var4.getTotalCount;
                    var4 = var2.bind(var4)(var5);
                    var2 = null;
                    var5 = var2 != var4;
                    if(!var5) { _fun0001_ip = 82; continue _fun0001 }
 79:
                    var2 = var4;
 82:
                    var1[var3] = var2;
                    return var1;
                }
            };
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useMessageSearchTabCounts'] = var2;
    return var1;
})();