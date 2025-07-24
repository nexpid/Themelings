// app/actions/SearchActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.FAVORITES;
    var _closure1_slot4 = var7;
    var7 = var4.SearchModes;
    var _closure1_slot5 = var7;
    var4 = var4.SearchTypes;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/SearchActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function search(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.searchId;
            var _closure2_slot0 = var8;
            var9 = var1.query;
            var4 = var1.searchEverywhere;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 2;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.setIncludeNSFW;
            var5 = var5.bind(var6)(var9, var8);
            if(!var4) { _fun0001_ip = 82; continue _fun0001 }
 72:
            var4 = true;
            var9['search_everywhere'] = var4;
 82:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 3;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.getSearchType;
            var7 = var4.bind(var5)(var8);
            var5 = _closure1_slot1;
            var4 = 4;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.create;
            var4 = {};
            var4['id'] = var8;
            var4['searchType'] = var7;
            var4['searchQuery'] = var9;
            var6 = var5.bind(var6)(var4);
            var4 = _closure1_slot4;
            if(!(var8 !== var4)) { _fun0001_ip = 184; continue _fun0001 }
 163:
            var4 = _closure1_slot6;
            var5 = var4.GUILD;
            var4 = null;
            if(!(var7 === var5)) { _fun0001_ip = 182; continue _fun0001 }
 179:
            var4 = var8;
 182:
            _fun0001_ip = 217; continue _fun0001;
 184:
            var7 = _closure1_slot3;
            var5 = var7.getChannel;
            var7 = var5.bind(var7)(var8);
            var5 = null;
            var9 = var5 == var7;
            var5 = undefined;
            if(var9) { _fun0001_ip = 214; continue _fun0001 }
 209:
            var5 = var7.guild_id;
 214:
            var4 = var5;
 217:
            _closure2_slot1 = var4;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.dispatch;
            var3 = {};
            var7 = 'SEARCH_MESSAGES_START';
            var3['type'] = var7;
            var7 = new Array(1);
            var7[0] = var8;
            var3['ids'] = var7;
            var3 = var4.bind(var5)(var3);
            var5 = var6.fetch;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var6 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var4 = 5;
                    var3 = var1[var4];
                    var1 = undefined;
                    var10 = var6.bind(var1)(var3);
                    var9 = var10.dispatch;
                    var3 = {};
                    var6 = 'SEARCH_MESSAGES_SUCCESS';
                    var3['type'] = var6;
                    var6 = _closure2_slot1;
                    var3['guildId'] = var6;
                    var12 = {};
                    var6 = _closure2_slot0;
                    var12['id'] = var6;
                    var6 = var5.body;
                    var6 = var6.analytics_id;
                    var12['analyticsId'] = var6;
                    var6 = var5.body;
                    var6 = var6.total_results;
                    var12['totalResults'] = var6;
                    var6 = var5.body;
                    var6 = var6.messages;
                    var12['messages'] = var6;
                    var6 = var5.body;
                    var11 = var6.threads;
                    var6 = null;
                    if(!(var6 == var11)) { _fun0002_ip = 135; continue _fun0002 }
 131:
                    var11 = new Array(0);
 135:
                    var12['threads'] = var11;
                    var11 = var5.body;
                    var14 = var11.members;
                    if(!(var6 == var14)) { _fun0002_ip = 159; continue _fun0002 }
 155:
                    var14 = new Array(0);
 159:
                    var13 = var14.map;
                    var11 = function(arg1) {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var11 = var13.bind(var14)(var11);
                    var12['members'] = var11;
                    var11 = var5.body;
                    var11 = var11.doing_deep_historical_index;
                    var12['doingHistoricalIndex'] = var11;
                    var11 = var5.body;
                    var11 = var11.documents_indexed;
                    var12['documentsIndexed'] = var11;
                    var11 = var5.body;
                    var11 = var11.channels;
                    if(!(var6 == var11)) { _fun0002_ip = 232; continue _fun0002 }
 228:
                    var11 = new Array(0);
 232:
                    var12['channels'] = var11;
                    var12['cursor'] = var6;
                    var11 = new Array(1);
                    var11[0] = var12;
                    var3['data'] = var11;
                    var3 = var9.bind(var10)(var3);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var9 = 'SEARCH_FINISH';
                    var2['type'] = var9;
                    var9 = _closure2_slot0;
                    var2['searchId'] = var9;
                    var8 = _closure2_slot1;
                    var2['guildId'] = var8;
                    var8 = var5.body;
                    var8 = var8.analytics_id;
                    var2['analyticsId'] = var8;
                    var8 = var5.body;
                    var8 = var8.total_results;
                    var2['totalResults'] = var8;
                    var8 = var5.body;
                    var8 = var8.messages;
                    var2['messages'] = var8;
                    var8 = var5.body;
                    var8 = var8.threads;
                    if(!(var6 == var8)) { _fun0002_ip = 375; continue _fun0002 }
 371:
                    var8 = new Array(0);
 375:
                    var2['threads'] = var8;
                    var8 = var5.body;
                    var9 = var8.members;
                    if(!(var6 == var9)) { _fun0002_ip = 399; continue _fun0002 }
 395:
                    var9 = new Array(0);
 399:
                    var8 = var9.map;
                    var7 = function(arg1) {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
                    var2['members'] = var7;
                    var7 = var5.body;
                    var7 = var7.doing_deep_historical_index;
                    var2['doingHistoricalIndex'] = var7;
                    var7 = var5.body;
                    var7 = var7.documents_indexed;
                    var2['documentsIndexed'] = var7;
                    var5 = var5.body;
                    var5 = var5.channels;
                    if(!(var6 == var5)) { _fun0002_ip = 472; continue _fun0002 }
 468:
                    var5 = new Array(0);
 472:
                    var2['channels'] = var5;
                    var5 = false;
                    var2['hasError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SEARCH_MESSAGES_INDEXING';
                var2['type'] = var5;
                var6 = _closure2_slot0;
                var5 = new Array(1);
                var5[0] = var6;
                var2['ids'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SEARCH_MESSAGES_FAILURE';
                var2['type'] = var5;
                var6 = _closure2_slot0;
                var5 = new Array(1);
                var5[0] = var6;
                var2['ids'] = var5;
                var5 = arg1;
                var2['error'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        }
    };
    var3['search'] = var4;
    var4 = function searchModeToSearchQueryParams(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot5;
            var2 = var2.MOST_RELEVANT;
            if(!(var2 !== var3)) { _fun0003_ip = 76; continue _fun0003 }
 20:
            var2 = _closure1_slot5;
            var2 = var2.OLDEST;
            if(!(var2 !== var3)) { _fun0003_ip = 60; continue _fun0003 }
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
            var1 = _closure1_slot5;
            var1 = var1.NEWEST;
            _fun0004_ip = 85; continue _fun0004;
 72:
            var2 = _closure1_slot5;
            var1 = var2.OLDEST;
 85:
            _fun0004_ip = 100; continue _fun0004;
 87:
            var2 = _closure1_slot5;
            var1 = var2.MOST_RELEVANT;
 100:
            _fun0004_ip = 115; continue _fun0004;
 102:
            var2 = _closure1_slot5;
            var1 = var2.NEWEST;
 115:
            return var1;
        }
    };
    var3['searchQueryParamsToSearchMode'] = var4;
    var4 = function clearHistory(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
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
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
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
            var1 = 5;
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
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
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
            var1 = 5;
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
        var1 = 5;
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
        var1 = 5;
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
        var1 = 5;
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
        var1 = 5;
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
        var1 = 5;
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