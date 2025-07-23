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
            var8 = arg1;
            var12 = arg2;
            var7 = arg3;
            var _closure2_slot0 = var8;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.setIncludeNSFW;
            var4 = var4.bind(var5)(var12, var8);
            var4 = arg4;
            if(!var4) { _fun0001_ip = 68; continue _fun0001 }
 58:
            var4 = true;
            var12['search_everywhere'] = var4;
 68:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 4;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.getSearchType;
            var9 = var4.bind(var5)(var8);
            var5 = _closure1_slot1;
            var4 = 5;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.create;
            var4 = {};
            var4['id'] = var8;
            var4['searchType'] = var9;
            var4['searchQuery'] = var12;
            var6 = var5.bind(var6)(var4);
            var4 = _closure1_slot5;
            if(!(var8 !== var4)) { _fun0001_ip = 170; continue _fun0001 }
 149:
            var4 = _closure1_slot8;
            var5 = var4.GUILD;
            var4 = null;
            if(!(var9 === var5)) { _fun0001_ip = 168; continue _fun0001 }
 165:
            var4 = var8;
 168:
            _fun0001_ip = 203; continue _fun0001;
 170:
            var9 = _closure1_slot3;
            var5 = var9.getChannel;
            var9 = var5.bind(var9)(var8);
            var5 = null;
            var10 = var5 == var9;
            var5 = undefined;
            if(var10) { _fun0001_ip = 200; continue _fun0001 }
 195:
            var5 = var9.guild_id;
 200:
            var4 = var5;
 203:
            var _closure2_slot1 = var4;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 6;
            var9 = var5[var3];
            var11 = var4.bind(var1)(var9);
            var10 = var11.dispatch;
            var9 = {};
            var13 = 'SEARCH_START';
            var9['type'] = var13;
            var9['query'] = var12;
            var9['searchId'] = var8;
            var9['queryString'] = var7;
            var9 = var10.bind(var11)(var9);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.dispatch;
            var3 = {};
            var9 = 'SEARCH_ADD_HISTORY';
            var3['type'] = var9;
            var3['searchId'] = var8;
            var3['query'] = var7;
            var3 = var4.bind(var5)(var3);
            var5 = var6.fetch;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'SEARCH_FINISH';
                    var2['type'] = var6;
                    var7 = _closure2_slot0;
                    var2['searchId'] = var7;
                    var6 = _closure2_slot1;
                    var2['guildId'] = var6;
                    var6 = var5.body;
                    var6 = var6.analytics_id;
                    var2['analyticsId'] = var6;
                    var6 = var5.body;
                    var6 = var6.total_results;
                    var2['totalResults'] = var6;
                    var6 = var5.body;
                    var6 = var6.messages;
                    var2['messages'] = var6;
                    var6 = var5.body;
                    var7 = var6.threads;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0002_ip = 132; continue _fun0002 }
 128:
                    var7 = new Array(0);
 132:
                    var2['threads'] = var7;
                    var7 = var5.body;
                    var8 = var7.members;
                    if(!(var6 == var8)) { _fun0002_ip = 156; continue _fun0002 }
 152:
                    var8 = new Array(0);
 156:
                    var7 = var8.map;
                    var6 = function(arg1) {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6);
                    var2['members'] = var6;
                    var6 = false;
                    var2['hasError'] = var6;
                    var6 = var5.body;
                    var6 = var6.doing_deep_historical_index;
                    var2['doingHistoricalIndex'] = var6;
                    var5 = var5.body;
                    var5 = var5.documents_indexed;
                    var2['documentsIndexed'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SEARCH_INDEXING';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['searchId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SEARCH_FINISH';
                var2['type'] = var5;
                var6 = _closure2_slot0;
                var2['searchId'] = var6;
                var5 = _closure2_slot1;
                var2['guildId'] = var5;
                var5 = new Array(0);
                var2['messages'] = var5;
                var5 = new Array(0);
                var2['threads'] = var5;
                var5 = new Array(0);
                var2['members'] = var5;
                var5 = 0;
                var2['totalResults'] = var5;
                var6 = null;
                var2['analyticsId'] = var6;
                var6 = true;
                var2['hasError'] = var6;
                var6 = false;
                var2['doingHistoricalIndex'] = var6;
                var2['documentsIndexed'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function searchModeToSearchQueryParams(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot7;
            var2 = var2.MOST_RELEVANT;
            if(!(var2 !== var3)) { _fun0003_ip = 76; continue _fun0003 }
 20:
            var2 = _closure1_slot7;
            var2 = var2.OLDEST;
            if(!(var2 !== var3)) { _fun0003_ip = 60; continue _fun0003 }
 34:
            var1 = _closure1_slot7;
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
    var _closure1_slot10 = var4;
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
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.FAVORITES;
    var _closure1_slot5 = var9;
    var9 = var6.SEARCH_PAGE_SIZE;
    var _closure1_slot6 = var9;
    var9 = var6.SearchModes;
    var _closure1_slot7 = var9;
    var6 = var6.SearchTypes;
    var _closure1_slot8 = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'actions/SearchActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['search'] = var5;
    var3['searchModeToSearchQueryParams'] = var4;
    var4 = function searchQueryParamsToSearchMode(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.sort_by;
            var3 = null;
            if(!(var3 != var2)) { _fun0004_ip = 102; continue _fun0004 }
 15:
            var2 = var1.sort_order;
            if(!(var3 != var2)) { _fun0004_ip = 102; continue _fun0004 }
 25:
            var3 = var1.sort_by;
            var2 = 'relevance';
            if(!(var2 !== var3)) { _fun0004_ip = 87; continue _fun0004 }
 41:
            var2 = var1.sort_order;
            var1 = 'asc';
            if(!(var1 !== var2)) { _fun0004_ip = 72; continue _fun0004 }
 57:
            var1 = _closure1_slot7;
            var1 = var1.NEWEST;
            _fun0004_ip = 85; continue _fun0004;
 72:
            var2 = _closure1_slot7;
            var1 = var2.OLDEST;
 85:
            _fun0004_ip = 100; continue _fun0004;
 87:
            var2 = _closure1_slot7;
            var1 = var2.MOST_RELEVANT;
 100:
            _fun0004_ip = 115; continue _fun0004;
 102:
            var2 = _closure1_slot7;
            var1 = var2.NEWEST;
 115:
            return var1;
        }
    };
    var3['searchQueryParamsToSearchMode'] = var4;
    var4 = function searchByMode(arg1, arg2, arg3) {
        var5 = arg1;
        var4 = _closure1_slot9;
        var3 = {};
        var6 = _closure1_slot4;
        var2 = var6.getQuery;
        var8 = var2.bind(var6)(var5);
        var9 = var3;
        var2 = copyDataProperties(var9, var8);
        var6 = _closure1_slot10;
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
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot6;
            var1 = arg2;
            var2 = var1 * var2;
            var6 = _closure1_slot4;
            var1 = var6.getQuery;
            var1 = var1.bind(var6)(var5);
            var4 = var6.getTotalResults;
            var4 = var4.bind(var6)(var5);
            var6 = 0;
            if(!(!(var2 < var6))) { _fun0005_ip = 90; continue _fun0005 }
 49:
            if(!(!(var2 > var4))) { _fun0005_ip = 90; continue _fun0005 }
 53:
            var4 = _closure1_slot9;
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
        var1 = 6;
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
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0006_ip = 69; continue _fun0006 }
 9:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
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
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
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
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 77; continue _fun0007 }
 9:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
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
        var1 = 6;
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
        var1 = 6;
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
        var1 = 6;
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
        var1 = 6;
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
        var1 = 6;
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