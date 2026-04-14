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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/hooks/useSearchScreenError.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useMessageSearchErrorScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.searchContext;
            var _closure2_slot0 = var3;
            var3 = var2.tab;
            var _closure2_slot1 = var3;
            var4 = var2.hasListItems;
            var11 = undefined;
            var _closure2_slot3 = var11;
            var _closure2_slot4 = var11;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 4;
            var3 = var6[var3];
            var7 = var5.bind(var11)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = _closure1_slot4;
            var5[1] = var3;
            var3 = function() {
                var4 = _closure1_slot5;
                var3 = var4.getSearchResultsQuery;
                var6 = _closure2_slot0;
                var5 = var3.bind(var4)(var6);
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var3 = var4.getSearchTabFetchId;
                var2 = _closure2_slot1;
                var3 = var3.bind(var4)(var6, var2, var5);
                var2 = _closure1_slot4;
                var1 = var2.getError;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var5 = var6.bind(var7)(var5, var3);
            var _closure2_slot2 = var5;
            var3 = null;
            var7 = var3 == var5;
            var6 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var5.getAnyErrorMessage;
            var6 = var7.bind(var5)();
case 2:
            if(!(var3 == var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 6;
            var8 = var12[var7];
            var8 = var10.bind(var11)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var10.bind(var11)(var7);
            var7 = var7.t;
            var7 = var7.uvDZBZ;
            var6 = var8.bind(var9)(var7);
case 4:
            _closure2_slot3 = var6;
            var8 = _closure1_slot3;
            var2 = var8.useRef;
            var2 = var2.bind(var8)(var3);
            _closure2_slot4 = var2;
            var7 = var8.useCallback;
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    if(!(var3 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 7;
                    var2 = var8[var2];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var5 = 'SEARCH_ERROR_TOAST';
                    var2['key'] = var5;
                    var5 = 8;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var2['icon'] = var5;
                    var5 = _closure2_slot3;
                    var2['content'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot2;
                    var2['current'] = var1;
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var1, var2);
            var1 = {};
            var7 = var3 != var5;
            var1['hasError'] = var7;
            var1['errorText'] = var6;
            var6 = var3 != var5;
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = !var4;
case 8:
            var1['isErrorFullscreen'] = var6;
            var3 = var3 != var5;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var4;
case 10:
            var1['isErrorToast'] = var3;
            var1['showErrorToast'] = var2;
            return var1;
        }
    };
    var3['useMessageSearchErrorScreen'] = var4;
    var2 = function useMessageTabCountsErrorText(arg1) {
        var2 = arg1;
        var2 = var2.searchContext;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot5;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot4;
        var2[1] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure1_slot5;
                var1 = var2.getSearchResultsQuery;
                var6 = _closure2_slot0;
                var5 = var1.bind(var2)(var6);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var8 = undefined;
                var3 = var2.bind(var8)(var1);
                var2 = var3.getSearchTabFetchId;
                var1 = _closure1_slot6;
                var5 = var2.bind(var3)(var6, var1, var5);
                var2 = _closure1_slot4;
                var1 = var2.getIsInitialFetchComplete;
                var2 = var1.bind(var2)(var5);
                var1 = null;
                if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                return var1;
case 12:
                var3 = _closure1_slot4;
                var2 = var3.getTotalCount;
                var2 = var2.bind(var3)(var5);
                if(!(var1 == var2)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var3 = _closure1_slot4;
                var2 = var3.getError;
                var5 = var2.bind(var3)(var5);
                var3 = var1 == var5;
                var2 = null;
                if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var3 = var5.getAnyErrorMessage;
                var3 = var3.bind(var5)();
                if(!(var1 == var3)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 6;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.uvDZBZ;
                var3 = var5.bind(var6)(var4);
case 18:
                var2 = var3;
case 16:
                return var2;
case 14:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useMessageTabCountsErrorText'] = var2;
    return var1;
})();