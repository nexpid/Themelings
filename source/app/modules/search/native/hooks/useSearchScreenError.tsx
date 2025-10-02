// app/modules/search/native/hooks/useSearchScreenError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/hooks/useSearchScreenError.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useMessageSearchErrorScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.searchContext;
            var8 = var2.tab;
            var11 = undefined;
            var _closure2_slot3 = var11;
            var5 = _closure1_slot6;
            var4 = var5.useState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getSearchResultsQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var4.bind(var5)(var9, var3);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var6 = var4.bind(var11)(var3);
            var3 = var6.getSearchTabFetchId;
            var3 = var3.bind(var6)(var9, var8, var7);
            var _closure2_slot0 = var3;
            var3 = 6;
            var3 = var5[var3];
            var6 = var4.bind(var11)(var3);
            var5 = var6.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot5;
                var2 = var4.getError;
                var3 = _closure2_slot0;
                var2 = var2.bind(var4)(var3);
                var1['error'] = var2;
                var2 = var4.getIsFetching;
                var2 = var2.bind(var4)(var3);
                var1['isFetching'] = var2;
                return var1;
            };
            var3 = var5.bind(var6)(var4, var3);
            var5 = var3.error;
            var3 = var3.isFetching;
            var _closure2_slot1 = var3;
            var8 = _closure1_slot4;
            var6 = var8.useState;
            var4 = false;
            var7 = var6.bind(var8)(var4);
            var6 = _closure1_slot3;
            var4 = 2;
            var7 = var6.bind(var11)(var7, var4);
            var4 = 0;
            var4 = var7[var4];
            var6 = 1;
            var6 = var7[var6];
            var _closure2_slot2 = var6;
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var6);
            var3 = null;
            var7 = var3 == var5;
            var6 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var5.getAnyErrorMessage;
            var6 = var7.bind(var5)();
case 4:
            if(!(var3 == var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 7;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var10.bind(var11)(var7);
            var7 = var7.t;
            var7 = var7.uvDZBQ;
            var6 = var8.bind(var9)(var7);
case 6:
            _closure2_slot3 = var6;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 8;
                var2 = var8[var2];
                var4 = var7.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = 'SEARCH_ERROR_TOAST';
                var2['key'] = var6;
                var6 = 9;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var2['icon'] = var6;
                var5 = _closure2_slot3;
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var7.bind(var8)(var1, var2);
            var1 = {};
            var7 = var3 != var5;
            var1['canShowErrorScreen'] = var7;
            var1['errorScreenText'] = var6;
            var3 = var3 != var5;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = !var4;
case 8:
            var1['canShowErrorToast'] = var3;
            var1['showErrorToast'] = var2;
            return var1;
        }
    };
    var3['useMessageSearchErrorScreen'] = var4;
    var2 = function useMessageTabCountsErrorText(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = var1.searchContext;
            var3 = _closure1_slot6;
            var2 = var3.useState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getSearchResultsQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var2.bind(var3)(var6, var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var8 = undefined;
            var3 = var2.bind(var8)(var1);
            var2 = var3.getSearchTabFetchId;
            var1 = _closure1_slot7;
            var5 = var2.bind(var3)(var6, var1, var5);
            var2 = _closure1_slot5;
            var1 = var2.getIsInitialFetchComplete;
            var2 = var1.bind(var2)(var5);
            var1 = null;
            if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            return var1;
case 10:
            var3 = _closure1_slot5;
            var2 = var3.getTotalCount;
            var2 = var2.bind(var3)(var5);
            if(!(var1 == var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var3 = _closure1_slot5;
            var2 = var3.getError;
            var5 = var2.bind(var3)(var5);
            var3 = var1 == var5;
            var2 = null;
            if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = var5.getAnyErrorMessage;
            var3 = var3.bind(var5)();
            if(!(var1 == var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 7;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.uvDZBQ;
            var3 = var5.bind(var6)(var4);
case 16:
            var2 = var3;
case 14:
            return var2;
case 12:
            return var1;
        }
    };
    var3['useMessageTabCountsErrorText'] = var2;
    return var1;
})();