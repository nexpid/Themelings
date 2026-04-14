// app/modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSearchMessagesLoadingState(arg1) {
        var2 = arg1;
        var3 = var2.searchContext;
        var _closure2_slot0 = var3;
        var3 = var2.tab;
        var _closure2_slot1 = var3;
        var10 = var2.placeholderHeight;
        var9 = var2.numColumns;
        var4 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 3;
        var2 = var6[var2];
        var3 = undefined;
        var8 = var4.bind(var3)(var2);
        var7 = var8.useFullscreenPlaceholderCount;
        var2 = {};
        var2['placeholderHeight'] = var10;
        var2['numColumns'] = var9;
        var2 = var7.bind(var8)(var2);
        var _closure2_slot2 = var2;
        var2 = 4;
        var2 = var6[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot2;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot3;
                var2 = var3.getSearchResultsQuery;
                var6 = _closure2_slot0;
                var5 = var2.bind(var3)(var6);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getSearchTabFetchId;
                var2 = _closure2_slot1;
                var5 = var3.bind(var4)(var6, var2, var5);
                var4 = _closure1_slot2;
                var2 = var4.getIsInitialFetchComplete;
                var2 = var2.bind(var4)(var5);
                var3 = var4.getIsFetching;
                var3 = var3.bind(var4)(var5);
                var2 = !var2;
                var4 = !var2;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var3;
case 2:
                var3 = global;
                var6 = var3.Math;
                var5 = var6.max;
                var3 = _closure2_slot2;
                var7 = _closure1_slot4;
                var1 = _closure2_slot1;
                var1 = var7[var1];
                var3 = var5.bind(var6)(var3, var1);
                var1 = {};
                var1['isFirstPageLoading'] = var2;
                var1['isNextPageLoading'] = var4;
                if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = 0;
                if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                var2 = var3;
case 6:
                var1['placeholderCount'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSearchMessagesLoadingState'] = var2;
    return var1;
})();