// app/actions/SearchActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function search(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var7 = arg2;
            var5 = arg4;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.setIncludeNSFW;
            var3 = var3.bind(var4)(var7, var6);
            if(!var5) { _fun0001_ip = 59; continue _fun0001 }
 49:
            var3 = true;
            var7['search_everywhere'] = var3;
 59:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var8 = 'SEARCH_START';
            var2['type'] = var8;
            var2['query'] = var7;
            var2['searchId'] = var6;
            var6 = arg3;
            var2['queryString'] = var6;
            var2['searchEverywhere'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function searchModeToSearchQueryParams(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot5;
            var2 = var2.MOST_RELEVANT;
            if(!(var2 !== var3)) { _fun0002_ip = 76; continue _fun0002 }
 20:
            var2 = _closure1_slot5;
            var2 = var2.OLDEST;
            if(!(var2 !== var3)) { _fun0002_ip = 60; continue _fun0002 }
 34:
            var1 = _closure1_slot5;
            var1 = var1.NEWEST;
            var1 = {'sort_by': 'timestamp', 'sort_order': 'desc'};
            return var1;
 60:
            var1 = {'sort_by': 'timestamp', 'sort_order': 'asc'};
            return var1;
 76:
            var1 = {'sort_by': 'relevance', 'sort_order': 'desc'};
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.SEARCH_PAGE_SIZE;
    var _closure1_slot4 = var9;
    var6 = var6.SearchModes;
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'actions/SearchActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['search'] = var5;
    var3['searchModeToSearchQueryParams'] = var4;
    var4 = function searchQueryParamsToSearchMode(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var2 = var1.sort_by;
            var3 = null;
            if(!(var3 != var2)) { _fun0003_ip = 102; continue _fun0003 }
 15:
            var2 = var1.sort_order;
            if(!(var3 != var2)) { _fun0003_ip = 102; continue _fun0003 }
 25:
            var3 = var1.sort_by;
            var2 = 'relevance';
            if(!(var2 !== var3)) { _fun0003_ip = 87; continue _fun0003 }
 41:
            var2 = var1.sort_order;
            var1 = 'asc';
            if(!(var1 !== var2)) { _fun0003_ip = 72; continue _fun0003 }
 57:
            var1 = _closure1_slot5;
            var1 = var1.NEWEST;
            _fun0003_ip = 85; continue _fun0003;
 72:
            var2 = _closure1_slot5;
            var1 = var2.OLDEST;
 85:
            _fun0003_ip = 100; continue _fun0003;
 87:
            var2 = _closure1_slot5;
            var1 = var2.MOST_RELEVANT;
 100:
            _fun0003_ip = 115; continue _fun0003;
 102:
            var2 = _closure1_slot5;
            var1 = var2.NEWEST;
 115:
            return var1;
        }
    };
    var3['searchQueryParamsToSearchMode'] = var4;
    var4 = function searchByMode(arg1, arg2, arg3) {
        var5 = arg1;
        var4 = _closure1_slot6;
        var3 = {};
        var6 = _closure1_slot3;
        var2 = var6.getQuery;
        var8 = var2.bind(var6)(var5);
        var9 = var3;
        var2 = copyDataProperties(var9, var8);
        var6 = _closure1_slot7;
        var1 = undefined;
        var2 = arg2;
        var8 = var6.bind(var1)(var2);
        var9 = var3;
        var2 = copyDataProperties(var9, var8);
        var6 = 0;
        var2 = 'offset';
        var3[var2] = var6;
        var2 = arg3;
        var2 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var3['searchByMode'] = var4;
    var4 = function changePage(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot4;
            var1 = arg2;
            var2 = var1 * var2;
            var6 = _closure1_slot3;
            var1 = var6.getQuery;
            var1 = var1.bind(var6)(var5);
            var4 = var6.getTotalResults;
            var4 = var4.bind(var6)(var5);
            var6 = 0;
            if(!(!(var2 < var6))) { _fun0004_ip = 90; continue _fun0004 }
 49:
            if(!(!(var2 > var4))) { _fun0004_ip = 90; continue _fun0004 }
 53:
            var4 = _closure1_slot6;
            var3 = {};
            var9 = var3;
            var8 = var1;
            var1 = copyDataProperties(var9, var8);
            var1 = 'offset';
            var3[var1] = var2;
            var2 = undefined;
            var1 = arg3;
            var1 = var4.bind(var2)(var5, var3, var1);
 90:
            var1 = undefined;
            return var1;
        }
    };
    var3['changePage'] = var4;
    var4 = function clearHistory(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SEARCH_CLEAR_HISTORY';
        var2['type'] = var5;
        var5 = arg1;
        var2['searchId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearHistory'] = var4;
    var4 = function ensureSearchState(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'SEARCH_ENSURE_SEARCH_STATE';
            var2['type'] = var5;
            var5 = _closure2_slot0;
            var2['searchId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['ensureSearchState'] = var4;
    var4 = function setSearchState(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 69; continue _fun0005 }
 9:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'SEARCH_EDITOR_STATE_CHANGE';
            var1['type'] = var5;
            var1['searchId'] = var4;
            var4 = arg2;
            var1['editorState'] = var4;
            var1 = var2.bind(var3)(var1);
 69:
            var1 = undefined;
            return var1;
        }
    };
    var3['setSearchState'] = var4;
    var4 = function clearSearchState(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'SEARCH_EDITOR_STATE_CLEAR';
            var1['type'] = var4;
            var4 = _closure2_slot0;
            var1['searchId'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearSearchState'] = var4;
    var4 = function updateAutocompleteQuery(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0006_ip = 77; continue _fun0006 }
 9:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE';
            var1['type'] = var5;
            var1['searchId'] = var4;
            var4 = arg2;
            var1['tokens'] = var4;
            var4 = arg3;
            var1['cursorScope'] = var4;
            var1 = var2.bind(var3)(var1);
 77:
            var1 = undefined;
            return var1;
        }
    };
    var3['updateAutocompleteQuery'] = var4;
    var4 = function setShowBlockedResults(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SEARCH_SET_SHOW_BLOCKED_RESULTS';
        var2['type'] = var5;
        var5 = arg1;
        var2['searchId'] = var5;
        var5 = arg2;
        var2['showBlocked'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setShowBlockedResults'] = var4;
    var4 = function setShowNoResultsAlt(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SEARCH_SET_SHOW_NO_RESULTS_ALT';
        var2['type'] = var5;
        var5 = arg1;
        var2['searchId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setShowNoResultsAlt'] = var4;
    var4 = function addQueryToHistory(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SEARCH_ADD_HISTORY';
        var2['type'] = var5;
        var5 = arg1;
        var2['searchId'] = var5;
        var5 = arg2;
        var2['query'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['addQueryToHistory'] = var4;
    var4 = function removeQueryFromHistory(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SEARCH_REMOVE_HISTORY';
        var2['type'] = var5;
        var5 = arg1;
        var2['searchId'] = var5;
        var5 = arg2;
        var2['query'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['removeQueryFromHistory'] = var4;
    var2 = function updateSearchResultsQuery(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SEARCH_RESULTS_QUERY_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['searchId'] = var5;
        var5 = arg2;
        var2['queryString'] = var5;
        var5 = arg3;
        var2['query'] = var5;
        var5 = arg4;
        var2['offset'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateSearchResultsQuery'] = var2;
    return var1;
})();