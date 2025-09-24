// app/modules/search/SearchActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getGuildIdForSearchMessageSuccessDispatch(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot3;
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 19; continue _fun0001 }
 16:
            var1 = var2;
 19:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var7 = var2.FAVORITES;
    var _closure1_slot3 = var7;
    var2 = var2.SearchModes;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function fetchTabMessages(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var10 = var2.searchContext;
            var _closure2_slot0 = var10;
            var7 = var2.searchTabs;
            var9 = var2.searchQueryString;
            var14 = var2.pagination;
            var13 = var2.trackExactTotalHits;
            var3 = var2.getId;
            var _closure2_slot1 = var3;
            var15 = var2.getLimit;
            var6 = var2.onFetchStart;
            var3 = var2.onFetchSuccess;
            var _closure2_slot2 = var3;
            var16 = var2.searchMode;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0002_ip = 98; continue _fun0002 }
 85:
            var2 = _closure1_slot4;
            var16 = var2.NEWEST;
 98:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var18 = 1;
            var8 = var3[var18];
            var11 = var5.bind(var4)(var8);
            var8 = var11.tokenizeQuery;
            var12 = var8.bind(var11)(var9);
            var8 = var3[var18];
            var11 = var5.bind(var4)(var8);
            var8 = var11.getSearchQueryFromTokens;
            var12 = var8.bind(var11)(var12);
            var8 = function fixSearchQueryPinned(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var1 = global;
                    var4 = var1.Array;
                    var3 = var4.isArray;
                    var1 = var2.pinned;
                    var1 = var3.bind(var4)(var1);
                    if(!var1) { _fun0003_ip = 60; continue _fun0003 }
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
 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var8.bind(var4)(var12);
            var8 = var3[var18];
            var11 = var5.bind(var4)(var8);
            var8 = var11.searchModeToSearchQueryParams;
            var11 = var8.bind(var11)(var16);
            var8 = {};
            var21 = var8;
            var20 = var12;
            var12 = copyDataProperties(var21, var20);
            var21 = var8;
            var20 = var11;
            var11 = copyDataProperties(var21, var20);
            var3 = var3[var18];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getGuildIdFromSearchContext;
            var12 = var3.bind(var5)(var10);
            _closure2_slot3 = var12;
            var3 = null;
            if(!(var3 != var12)) { _fun0002_ip = 271; continue _fun0002 }
 242:
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var18];
            var11 = var11.bind(var4)(var5);
            var5 = var11.setIncludeNSFW;
            var5 = var5.bind(var11)(var8, var12);
 271:
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 2;
            var5 = var16[var5];
            var12 = var11.bind(var4)(var5);
            var11 = var12.create;
            var5 = {};
            var17 = _closure1_slot0;
            var16 = var16[var18];
            var17 = var17.bind(var4)(var16);
            var16 = var17.getSearchContextId;
            var16 = var16.bind(var17)(var10);
            var5['id'] = var16;
            var5['searchContext'] = var10;
            var5['searchQuery'] = var8;
            var5['searchTabs'] = var7;
            var5['getLimit'] = var15;
            var5['pagination'] = var14;
            var5['trackExactTotalHits'] = var13;
            var5 = var11.bind(var12)(var5);
            if(!(var3 != var6)) { _fun0002_ip = 387; continue _fun0002 }
 365:
            var3 = {};
            var3['searchContext'] = var10;
            var3['searchQueryString'] = var9;
            var3['searchQuery'] = var8;
            var3 = var6.bind(var4)(var3);
 387:
            var6 = var7.map;
            var3 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var3);
            _closure2_slot4 = var6;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'SEARCH_MESSAGES_START';
            var2['type'] = var7;
            var2['ids'] = var6;
            var2 = var3.bind(var4)(var2);
            var4 = var5.fetch;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.body;
                    var _closure3_slot0 = var1;
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.entries;
                    var1 = var1.tabs;
                    var4 = var2.bind(var3)(var1);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var3 = var6.dispatch;
                    var2 = {};
                    var8 = 'SEARCH_MESSAGES_SUCCESS';
                    var2['type'] = var8;
                    var9 = _closure1_slot5;
                    var8 = _closure2_slot3;
                    var8 = var9.bind(var1)(var8);
                    var2['guildId'] = var8;
                    var8 = var4.map;
                    var7 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var5 = arg1;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var4 = var5().value;
                            var2 = var1;
                            var8 = undefined;
                            var3 = var2 === var8;
                            var2 = undefined;
                            if(var3) { _fun0005_ip = 27; continue _fun0005 }
 24:
                            var2 = var4;
 27:
                            var4 = undefined;
                            if(var3) { _fun0005_ip = 57; continue _fun0005 }
 32:
                            var6 = var5().value;
                            var5 = var1;
                            var5 = var5 === var8;
                            var4 = undefined;
                            var3 = var5;
                            if(var5) { _fun0005_ip = 57; continue _fun0005 }
 51:
                            var4 = var6;
                            var3 = var5;
 57:
                            if(var3) { _fun0005_ip = 63; continue _fun0005 }
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
                            if(!(var3 != var6)) { _fun0005_ip = 160; continue _fun0005 }
 121:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 4;
                            var5 = var9[var5];
                            var7 = var7.bind(var8)(var5);
                            var5 = var7.isEmpty;
                            var7 = var5.bind(var7)(var6);
                            var5 = null;
                            if(var7) { _fun0005_ip = 163; continue _fun0005 }
 160:
                            var5 = var6;
 163:
                            var1['cursor'] = var5;
                            var5 = var4.messages;
                            var1['messages'] = var5;
                            var5 = var4.channels;
                            if(!(var3 == var5)) { _fun0005_ip = 192; continue _fun0005 }
 188:
                            var5 = new Array(0);
 192:
                            var1['channels'] = var5;
                            var5 = var4.threads;
                            if(!(var3 == var5)) { _fun0005_ip = 211; continue _fun0005 }
 207:
                            var5 = new Array(0);
 211:
                            var1['threads'] = var5;
                            var5 = var4.members;
                            if(!(var3 == var5)) { _fun0005_ip = 230; continue _fun0005 }
 226:
                            var5 = new Array(0);
 230:
                            var4 = var5.map;
                            var3 = function(arg1) {
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 5;
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
                    var7 = var8.bind(var4)(var7);
                    var2['data'] = var7;
                    var2 = var3.bind(var6)(var2);
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 158; continue _fun0004 }
 133:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['searchContext'] = var5;
                    var2['tabEntries'] = var4;
                    var2 = var3.bind(var1)(var2);
 158:
                    return var1;
                }
            };
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
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
                var2 = _closure1_slot2;
                var1 = 3;
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
    var2['fetchTabMessages'] = var7;
    var7 = function fetchMessages(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var10 = var1.searchContext;
            var9 = var1.query;
            var5 = var1.searchEverywhere;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 1;
            var6 = var6[var4];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getGuildIdFromSearchContext;
            var8 = var6.bind(var7)(var10);
            var _closure2_slot0 = var8;
            var6 = null;
            if(!(var6 != var8)) { _fun0006_ip = 104; continue _fun0006 }
 75:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var4];
            var7 = var7.bind(var1)(var6);
            var6 = var7.setIncludeNSFW;
            var6 = var6.bind(var7)(var9, var8);
 104:
            if(!var5) { _fun0006_ip = 117; continue _fun0006 }
 107:
            var5 = true;
            var9['search_everywhere'] = var5;
 117:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = var5[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.getSearchContextId;
            var8 = var4.bind(var6)(var10);
            _closure2_slot1 = var8;
            var4 = _closure1_slot1;
            var3 = 6;
            var3 = var5[var3];
            var7 = var4.bind(var1)(var3);
            var6 = var7.create;
            var3 = {};
            var3['id'] = var8;
            var10 = var10.type;
            var3['searchType'] = var10;
            var3['searchQuery'] = var9;
            var6 = var6.bind(var7)(var3);
            var3 = 3;
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var7 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'SEARCH_MESSAGES_SUCCESS';
                    var2['type'] = var6;
                    var8 = _closure1_slot5;
                    var6 = _closure2_slot0;
                    var6 = var8.bind(var1)(var6);
                    var2['guildId'] = var6;
                    var6 = {};
                    var5 = _closure2_slot1;
                    var6['id'] = var5;
                    var5 = var7.body;
                    var5 = var5.analytics_id;
                    var6['analyticsId'] = var5;
                    var5 = var7.body;
                    var5 = var5.total_results;
                    var6['totalResults'] = var5;
                    var5 = var7.body;
                    var5 = var5.messages;
                    var6['messages'] = var5;
                    var5 = var7.body;
                    var8 = var5.threads;
                    var5 = null;
                    if(!(var5 == var8)) { _fun0007_ip = 142; continue _fun0007 }
 138:
                    var8 = new Array(0);
 142:
                    var6['threads'] = var8;
                    var8 = var7.body;
                    var10 = var8.members;
                    if(!(var5 == var10)) { _fun0007_ip = 166; continue _fun0007 }
 162:
                    var10 = new Array(0);
 166:
                    var9 = var10.map;
                    var8 = function(arg1) {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 5;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var8 = var9.bind(var10)(var8);
                    var6['members'] = var8;
                    var8 = var7.body;
                    var8 = var8.doing_deep_historical_index;
                    var6['doingHistoricalIndex'] = var8;
                    var8 = var7.body;
                    var8 = var8.documents_indexed;
                    var6['documentsIndexed'] = var8;
                    var7 = var7.body;
                    var7 = var7.channels;
                    if(!(var5 == var7)) { _fun0007_ip = 239; continue _fun0007 }
 235:
                    var7 = new Array(0);
 239:
                    var6['channels'] = var7;
                    var6['cursor'] = var5;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2['data'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SEARCH_MESSAGES_INDEXING';
                var2['type'] = var5;
                var6 = _closure2_slot1;
                var5 = new Array(1);
                var5[0] = var6;
                var2['ids'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SEARCH_MESSAGES_FAILURE';
                var2['type'] = var5;
                var6 = _closure2_slot1;
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
    var2['fetchMessages'] = var7;
    var7 = function clearSearchRecentMessages() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
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
    var7 = function clearAllSearchMesssages() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
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
    var2['clearAllSearchMesssages'] = var7;
    var7 = function clearSearchMessages(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
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
    var2['clearSearchMessages'] = var7;
    var7 = function initializeAutocomplete(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SEARCH_AUTOCOMPLETE_INITIALIZE';
        var2['type'] = var5;
        var5 = arg1;
        var2['searchContext'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['initializeAutocomplete'] = var7;
    var7 = function updateAutocompleteQuery(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var7 = var1.searchContext;
            var6 = var1.tokens;
            var2 = var1.queryString;
            var5 = var1.cursorScope;
            var1 = var2.trim;
            var1 = var1.bind(var2)();
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            if(!var1) { _fun0008_ip = 97; continue _fun0008 }
 51:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getIsSearchAutocompleteFetchFrecencyExperimentEnabled;
            var2 = {};
            var8 = 'updateAutocompleteQuery';
            var2['location'] = var8;
            var1 = var3.bind(var4)(var2);
 97:
            if(!var1) { _fun0008_ip = 141; continue _fun0008 }
 100:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.FrecencyUserSettingsActionCreators;
            var1 = var2.loadIfNecessary;
            var1 = var1.bind(var2)();
 141:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var8 = 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE';
            var2['type'] = var8;
            var2['searchContext'] = var7;
            var2['tokens'] = var6;
            var2['cursorScope'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['updateAutocompleteQuery'] = var7;
    var4 = function markSearchTokensRefreshed() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SEARCH_TOKENS_REFRESHED';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['markSearchTokensRefreshed'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/SearchActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();