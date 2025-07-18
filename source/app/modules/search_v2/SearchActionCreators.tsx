// app/modules/search_v2/SearchActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.SearchModes;
    var _closure1_slot4 = var7;
    var2 = var2.SearchTypes;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function fetchMessages(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.searchContext;
            var _closure2_slot0 = var8;
            var13 = var2.searchTabs;
            var7 = var2.searchQueryString;
            var15 = var2.pagination;
            var14 = var2.trackExactTotalHits;
            var3 = var2.getId;
            var _closure2_slot1 = var3;
            var16 = var2.getLimit;
            var4 = var2.onFetchStart;
            var3 = var2.onFetchSuccess;
            var _closure2_slot2 = var3;
            var17 = var2.searchMode;
            var3 = undefined;
            if(!(var17 === var3)) { _fun0001_ip = 98; continue _fun0001 }
 85:
            var2 = _closure1_slot4;
            var17 = var2.NEWEST;
 98:
            var _closure2_slot3 = var3;
            var _closure2_slot4 = var3;
            var6 = _closure1_slot2;
            var10 = _closure1_slot3;
            var12 = 1;
            var2 = var10[var12];
            var9 = var6.bind(var3)(var2);
            var2 = var9.tokenizeQuery;
            var9 = var2.bind(var9)(var7);
            var2 = var10[var12];
            var6 = var6.bind(var3)(var2);
            var2 = var6.getSearchQueryFromTokens;
            var11 = var2.bind(var6)(var9);
            var2 = function fixSearchQueryPinned(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var1 = global;
                    var4 = var1.Array;
                    var3 = var4.isArray;
                    var1 = var2.pinned;
                    var1 = var3.bind(var4)(var1);
                    if(!var1) { _fun0002_ip = 62; continue _fun0002 }
 30:
                    var4 = var2.pinned;
                    var3 = var4.some;
                    var1 = function(arg1) {
                        var2 = true;
                        var1 = arg1;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var2['pinned'] = var1;
 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var2.bind(var3)(var11);
            var9 = _closure1_slot0;
            var2 = 2;
            var2 = var10[var2];
            var6 = var9.bind(var3)(var2);
            var2 = var6.searchModeToSearchQueryParams;
            var2 = var2.bind(var6)(var17);
            var6 = {};
            var20 = var6;
            var19 = var11;
            var11 = copyDataProperties(var20, var19);
            var20 = var6;
            var19 = var2;
            var2 = copyDataProperties(var20, var19);
            var2 = 3;
            var2 = var10[var2];
            var9 = var9.bind(var3)(var2);
            var2 = var9.getGuildIdFromSearchContext;
            var11 = var2.bind(var9)(var8);
            _closure2_slot3 = var11;
            var2 = null;
            if(!(var2 != var11)) { _fun0001_ip = 283; continue _fun0001 }
 254:
            var10 = _closure1_slot2;
            var9 = _closure1_slot3;
            var9 = var9[var12];
            var10 = var10.bind(var3)(var9);
            var9 = var10.setIncludeNSFW;
            var9 = var9.bind(var10)(var6, var11);
 283:
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var5 = 4;
            var5 = var11[var5];
            var12 = var10.bind(var3)(var5);
            var9 = var12.getSearchTabFetcher;
            var5 = {};
            var5['searchContext'] = var8;
            var5['searchQuery'] = var6;
            var5['searchTabs'] = var13;
            var5['getLimit'] = var16;
            var5['pagination'] = var15;
            var5['trackExactTotalHits'] = var14;
            var5 = var9.bind(var12)(var5);
            var12 = var13.map;
            var9 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var12 = var12.bind(var13)(var9);
            _closure2_slot4 = var12;
            var9 = 5;
            var9 = var11[var9];
            var11 = var10.bind(var3)(var9);
            var10 = var11.dispatch;
            var9 = {};
            var13 = 'SEARCH_MESSAGES_START';
            var9['type'] = var13;
            var9['ids'] = var12;
            var9 = var10.bind(var11)(var9);
            if(!(var2 != var4)) { _fun0001_ip = 434; continue _fun0001 }
 412:
            var2 = {};
            var2['searchContext'] = var8;
            var2['searchQueryString'] = var7;
            var2['searchQuery'] = var6;
            var2 = var4.bind(var3)(var2);
 434:
            var4 = var5.fetch;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.body;
                    var _closure3_slot0 = var1;
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.entries;
                    var1 = var1.tabs;
                    var4 = var3.bind(var4)(var1);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var3);
                    var6 = var7.dispatch;
                    var3 = {};
                    var5 = 'SEARCH_MESSAGES_SUCCESS';
                    var3['type'] = var5;
                    var8 = _closure2_slot3;
                    var3['guildId'] = var8;
                    var9 = var4.map;
                    var8 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var5 = arg1;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var4 = var5().value;
                            var2 = var1;
                            var8 = undefined;
                            var3 = var2 === var8;
                            var2 = undefined;
                            if(var3) { _fun0004_ip = 27; continue _fun0004 }
 24:
                            var2 = var4;
 27:
                            var4 = undefined;
                            if(var3) { _fun0004_ip = 57; continue _fun0004 }
 32:
                            var6 = var5().value;
                            var5 = var1;
                            var5 = var5 === var8;
                            var4 = undefined;
                            var3 = var5;
                            if(var5) { _fun0004_ip = 57; continue _fun0004 }
 51:
                            var4 = var6;
                            var3 = var5;
 57:
                            if(var3) { _fun0004_ip = 63; continue _fun0004 }
 60:
                            var1.return();
 63:
                            var1 = _closure2_slot1;
                            var2 = var1.bind(var8)(var2);
                            var6 = var4.cursor;
                            var1 = {};
                            var1['id'] = var2;
                            var3 = _closure3_slot0;
                            var3 = var3.analytics_id;
                            var1['analyticsId'] = var3;
                            var3 = var4.total_results;
                            var1['totalResults'] = var3;
                            var3 = null;
                            if(!(var3 != var6)) { _fun0004_ip = 161; continue _fun0004 }
 122:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var5 = 6;
                            var5 = var9[var5];
                            var7 = var7.bind(var8)(var5);
                            var5 = var7.isEmpty;
                            var7 = var5.bind(var7)(var6);
                            var5 = null;
                            if(var7) { _fun0004_ip = 164; continue _fun0004 }
 161:
                            var5 = var6;
 164:
                            var1['cursor'] = var5;
                            var5 = var4.messages;
                            var1['messages'] = var5;
                            var5 = var4.channels;
                            if(!(var3 == var5)) { _fun0004_ip = 194; continue _fun0004 }
 190:
                            var5 = new Array(0);
 194:
                            var1['channels'] = var5;
                            var5 = var4.threads;
                            if(!(var3 == var5)) { _fun0004_ip = 213; continue _fun0004 }
 209:
                            var5 = new Array(0);
 213:
                            var1['threads'] = var5;
                            var5 = var4.members;
                            if(!(var3 == var5)) { _fun0004_ip = 232; continue _fun0004 }
 228:
                            var5 = new Array(0);
 232:
                            var4 = var5.map;
                            var3 = function(arg1) {
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var1 = 7;
                                var1 = var3[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var3 = var4.bind(var5)(var3);
                            var1['members'] = var3;
                            var2 = _closure3_slot0;
                            var3 = var2.doing_deep_historical_index;
                            var1['doingHistoricalIndex'] = var3;
                            var2 = var2.documents_indexed;
                            var1['documentsIndexed'] = var2;
                            return var1;
                        }
                    };
                    var8 = var9.bind(var4)(var8);
                    var3['data'] = var8;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var4 = arg1;
                            var2 = var4[Symbol.iterator];
                            var4 = var2().next;
                            var1 = var4().value;
                            var3 = var2;
                            var1 = undefined;
                            var3 = var3 === var1;
                            var7 = undefined;
                            if(var3) { _fun0005_ip = 49; continue _fun0005 }
 24:
                            var5 = var4().value;
                            var4 = var2;
                            var4 = var4 === var1;
                            var7 = undefined;
                            var3 = var4;
                            if(var4) { _fun0005_ip = 49; continue _fun0005 }
 43:
                            var7 = var5;
                            var3 = var4;
 49:
                            if(var3) { _fun0005_ip = 55; continue _fun0005 }
 52:
                            var2.return();
 55:
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var2 = 5;
                            var2 = var9[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var6 = 'SEARCH_FINISH';
                            var2['type'] = var6;
                            var6 = _closure1_slot0;
                            var5 = 3;
                            var8 = var9[var5];
                            var11 = var6.bind(var1)(var8);
                            var10 = var11.getBackwardCompatibilitySearchId;
                            var8 = _closure2_slot0;
                            var10 = var10.bind(var11)(var8);
                            var2['searchId'] = var10;
                            var5 = var9[var5];
                            var6 = var6.bind(var1)(var5);
                            var5 = var6.getGuildIdFromSearchContext;
                            var5 = var5.bind(var6)(var8);
                            var2['guildId'] = var5;
                            var6 = _closure3_slot0;
                            var6 = var6.analytics_id;
                            var2['analyticsId'] = var6;
                            var6 = var7.total_results;
                            var2['totalResults'] = var6;
                            var6 = var7.channels;
                            var2['channels'] = var6;
                            var6 = var7.messages;
                            var2['messages'] = var6;
                            var8 = var7.threads;
                            var6 = null;
                            if(!(var6 == var8)) { _fun0005_ip = 223; continue _fun0005 }
 219:
                            var8 = new Array(0);
 223:
                            var2['threads'] = var8;
                            var8 = var7.members;
                            if(!(var6 == var8)) { _fun0005_ip = 242; continue _fun0005 }
 238:
                            var8 = new Array(0);
 242:
                            var7 = var8.map;
                            var6 = function(arg1) {
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot3;
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
                            var5 = _closure3_slot0;
                            var6 = var5.doing_deep_historical_index;
                            var2['doingHistoricalIndex'] = var6;
                            var5 = var5.documents_indexed;
                            var2['documentsIndexed'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 168; continue _fun0003 }
 143:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['searchContext'] = var5;
                    var2['tabEntries'] = var4;
                    var2 = var3.bind(var1)(var2);
 168:
                    return var1;
                }
            };
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SEARCH_MESSAGES_INDEXING';
                var2['type'] = var5;
                var5 = _closure2_slot4;
                var2['ids'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SEARCH_MESSAGES_FAILURE';
                var2['type'] = var5;
                var5 = _closure2_slot4;
                var2['ids'] = var5;
                var5 = arg1;
                var2['error'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = true;
            return var1;
        }
    };
    var2['fetchMessages'] = var7;
    var7 = function clearSearchRecentMessages() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SEARCH_RECENT_MESSAGES_CLEAR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearSearchRecentMessages'] = var7;
    var7 = function clearAllSearchStates() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SEARCH_MESSAGES_CLEAR_ALL';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearAllSearchStates'] = var7;
    var7 = function clearSearchState(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SEARCH_MESSAGES_CLEAR';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearSearchState'] = var7;
    var7 = function addSearchHistoryItem(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var3 = var6.type;
            var2 = _closure1_slot5;
            var2 = var2.DMS;
            if(!(var3 !== var2)) { _fun0006_ip = 44; continue _fun0006 }
 25:
            var3 = var6.type;
            var2 = _closure1_slot5;
            var2 = var2.GUILD;
            if(!(var3 === var2)) { _fun0006_ip = 126; continue _fun0006 }
 44:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 3;
            var2 = var5[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.getSearchContextId;
            var4 = var2.bind(var4)(var6);
            var2 = _closure1_slot1;
            var1 = 5;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'SEARCH_HISTORY_ADD_ITEM';
            var1['type'] = var5;
            var1['id'] = var4;
            var4 = arg2;
            var1['item'] = var4;
            var1 = var2.bind(var3)(var1);
 126:
            var1 = undefined;
            return var1;
        }
    };
    var2['addSearchHistoryItem'] = var7;
    var7 = function removeSearchHistoryItem(arg1, arg2) {
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var1 = 3;
        var3 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var3);
        var5 = var6.getSearchContextId;
        var3 = arg1;
        var5 = var5.bind(var6)(var3);
        var3 = _closure1_slot1;
        var2 = 5;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'SEARCH_HISTORY_REMOVE_ITEM';
        var2['type'] = var6;
        var2['id'] = var5;
        var5 = arg2;
        var2['item'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['removeSearchHistoryItem'] = var7;
    var7 = function clearSearchHistory(arg1) {
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var1 = 3;
        var3 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var3);
        var5 = var6.getSearchContextId;
        var3 = arg1;
        var5 = var5.bind(var6)(var3);
        var3 = _closure1_slot1;
        var2 = 5;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'SEARCH_HISTORY_CLEAR_ITEMS';
        var2['type'] = var6;
        var2['id'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearSearchHistory'] = var7;
    var4 = function openSearchScreen(arg1) {
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var1 = 3;
        var3 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var3);
        var5 = var6.getBackwardCompatibilitySearchId;
        var3 = arg1;
        var5 = var5.bind(var6)(var3);
        var3 = _closure1_slot1;
        var2 = 5;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'SEARCH_SCREEN_OPEN';
        var2['type'] = var6;
        var2['searchId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['openSearchScreen'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/SearchActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();