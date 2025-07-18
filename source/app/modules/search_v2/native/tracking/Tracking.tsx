// app/modules/search_v2/native/tracking/Tracking.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function toAnalyticsSearchTab(arg1) {
        var2 = _closure1_slot7;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function toAnalyticsSearchFilterType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot9;
            var3 = var3.FILTER_FROM;
            if(!(var3 !== var2)) { _fun0001_ip = 159; continue _fun0001 }
 23:
            var3 = _closure1_slot9;
            var3 = var3.FILTER_MENTIONS;
            if(!(var3 !== var2)) { _fun0001_ip = 151; continue _fun0001 }
 37:
            var3 = _closure1_slot9;
            var3 = var3.FILTER_IN;
            if(!(var3 !== var2)) { _fun0001_ip = 143; continue _fun0001 }
 51:
            var3 = _closure1_slot9;
            var3 = var3.FILTER_HAS;
            if(!(var3 !== var2)) { _fun0001_ip = 135; continue _fun0001 }
 65:
            var3 = _closure1_slot9;
            var3 = var3.FILTER_ON;
            if(!(var3 !== var2)) { _fun0001_ip = 127; continue _fun0001 }
 79:
            var3 = _closure1_slot9;
            var3 = var3.FILTER_AFTER;
            if(!(var3 !== var2)) { _fun0001_ip = 119; continue _fun0001 }
 93:
            var1 = _closure1_slot9;
            var1 = var1.FILTER_BEFORE;
            if(!(var1 !== var2)) { _fun0001_ip = 111; continue _fun0001 }
 107:
            var1 = null;
            return var1;
 111:
            var1 = 'filter_before';
            return var1;
 119:
            var1 = 'filter_after';
            return var1;
 127:
            var1 = 'filter_on';
            return var1;
 135:
            var1 = 'filter_has';
            return var1;
 143:
            var1 = 'filter_in';
            return var1;
 151:
            var1 = 'filter_mentions';
            return var1;
 159:
            var1 = 'filter_from';
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function toAnalyticsSearchLocation(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot10;
            var2 = var2.GUILD;
            if(!(var2 !== var3)) { _fun0002_ip = 150; continue _fun0002 }
 28:
            var2 = _closure1_slot10;
            var2 = var2.GUILD_CHANNEL;
            if(!(var2 !== var3)) { _fun0002_ip = 138; continue _fun0002 }
 42:
            var2 = _closure1_slot10;
            var2 = var2.THREAD;
            if(!(var2 !== var3)) { _fun0002_ip = 138; continue _fun0002 }
 56:
            var2 = _closure1_slot10;
            var2 = var2.CHANNEL;
            if(!(var2 !== var3)) { _fun0002_ip = 126; continue _fun0002 }
 70:
            var2 = _closure1_slot10;
            var2 = var2.DMS;
            if(!(var2 !== var3)) { _fun0002_ip = 114; continue _fun0002 }
 84:
            var2 = _closure1_slot10;
            var2 = var2.FAVORITES;
            if(!(var2 !== var3)) { _fun0002_ip = 102; continue _fun0002 }
 98:
            var2 = undefined;
            return var2;
 102:
            var2 = _closure1_slot5;
            var2 = var2.FAVORITES;
            return var2;
 114:
            var2 = _closure1_slot5;
            var2 = var2.DM_LIST;
            return var2;
 126:
            var2 = _closure1_slot5;
            var2 = var2.DM_CHANNEL;
            return var2;
 138:
            var2 = _closure1_slot5;
            var2 = var2.GUILD_CHANNEL;
            return var2;
 150:
            var1 = _closure1_slot5;
            var1 = var1.GUILD;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function collectSearchAnalyticsMetadata(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var6 = 5;
            var1 = var1[var6];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.getSelectedSearchTab;
            var8 = var1.bind(var3)(var4);
            var1 = {};
            var7 = null;
            var3 = var8;
            if(!(var7 != var3)) { _fun0003_ip = 61; continue _fun0003 }
 52:
            var7 = _closure1_slot11;
            var3 = var7.bind(var5)(var8);
 61:
            var1['search_tab_selected'] = var3;
            var3 = _closure1_slot13;
            var3 = var3.bind(var5)(var4);
            var1['search_location'] = var3;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var7 = var2[var6];
            var8 = var3.bind(var5)(var7);
            var7 = var8.getSessionId;
            var7 = var7.bind(var8)(var4);
            var1['search_session_id'] = var7;
            var2 = var2[var6];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getQueryId;
            var2 = var2.bind(var3)(var4);
            var1['search_query_id'] = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticsSearchLocations;
    var _closure1_slot5 = var8;
    var8 = var4.SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY;
    var _closure1_slot6 = var8;
    var4 = var4.SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot8 = var8;
    var8 = var4.SearchTokenTypes;
    var _closure1_slot9 = var8;
    var4 = var4.SearchTypes;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var13 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'SearchTracking';
    var4 = new var13[var8](var12, var11);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/native/tracking/Tracking.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function trackSearchOpened(arg1) {
        var1 = arg1;
        var7 = var1.searchContext;
        var9 = var1.visibleSearchTabs;
        var4 = _closure1_slot14;
        var1 = undefined;
        var6 = var4.bind(var1)(var7);
        var5 = _closure1_slot4;
        var8 = var5.getState;
        var4 = function(arg1) {
            var2 = arg1;
            var1 = var2.getQueryString;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var8.bind(var5)(var7, var4);
        var4 = var5.getState;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = var2.getTextInputValue;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var4.bind(var5)(var7, var3);
        var3 = var9.length;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 6;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.SEARCH_V2_OPENED;
        var2 = {};
        var11 = var2;
        var10 = var6;
        var6 = copyDataProperties(var11, var10);
        var6 = 'visible_search_tabs';
        var2[var6] = var9;
        var6 = var8.trim;
        var6 = var6.bind(var8)();
        var8 = var6.length;
        var6 = 'search_query_length';
        var2[var6] = var8;
        var6 = var7.trim;
        var6 = var6.bind(var7)();
        var7 = var6.length;
        var6 = 'search_query_content_length';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchOpened'] = var4;
    var4 = function trackSearchClosed(arg1) {
        var1 = arg1;
        var8 = var1.searchContext;
        var3 = _closure1_slot14;
        var1 = undefined;
        var12 = var3.bind(var1)(var8);
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var3 = 6;
        var3 = var9[var3];
        var5 = var7.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.SEARCH_V2_CLOSED;
        var2 = {};
        var13 = var2;
        var6 = copyDataProperties(var13, var12);
        var6 = 5;
        var10 = var9[var6];
        var11 = var7.bind(var1)(var10);
        var10 = var11.getSearchCount;
        var11 = var10.bind(var11)(var8);
        var10 = 'num_searches';
        var2[var10] = var11;
        var10 = var9[var6];
        var11 = var7.bind(var1)(var10);
        var10 = var11.getSearchCountWithoutFilters;
        var11 = var10.bind(var11)(var8);
        var10 = 'num_searches_without_filters_applied';
        var2[var10] = var11;
        var6 = var9[var6];
        var7 = var7.bind(var1)(var6);
        var6 = var7.getSearchWithFiltersCount;
        var7 = var6.bind(var7)(var8);
        var6 = 'num_searches_with_filters_applied';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchClosed'] = var4;
    var4 = function trackSearchResultEmpty(arg1) {
        var1 = arg1;
        var7 = var1.searchContext;
        var4 = _closure1_slot14;
        var1 = undefined;
        var6 = var4.bind(var1)(var7);
        var5 = _closure1_slot4;
        var8 = var5.getState;
        var4 = function(arg1) {
            var2 = arg1;
            var1 = var2.getQueryString;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var8.bind(var5)(var7, var4);
        var4 = var5.getState;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = var2.getTextInputValue;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var4.bind(var5)(var7, var3);
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 6;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.SEARCH_V2_RESULT_EMPTY;
        var2 = {};
        var10 = var2;
        var9 = var6;
        var6 = copyDataProperties(var10, var9);
        var6 = var8.trim;
        var6 = var6.bind(var8)();
        var8 = var6.length;
        var6 = 'search_query_length';
        var2[var6] = var8;
        var6 = var7.trim;
        var6 = var6.bind(var7)();
        var7 = var6.length;
        var6 = 'search_query_content_length';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchResultEmpty'] = var4;
    var4 = function trackSearchResultMessagesEmpty(arg1) {
        var1 = arg1;
        var7 = var1.searchContext;
        var4 = _closure1_slot14;
        var1 = undefined;
        var6 = var4.bind(var1)(var7);
        var5 = _closure1_slot4;
        var8 = var5.getState;
        var4 = function(arg1) {
            var2 = arg1;
            var1 = var2.getQueryString;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var8.bind(var5)(var7, var4);
        var4 = var5.getState;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = var2.getTextInputValue;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var4.bind(var5)(var7, var3);
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 6;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.SEARCH_V2_RESULT_MESSAGES_EMPTY;
        var2 = {};
        var10 = var2;
        var9 = var6;
        var6 = copyDataProperties(var10, var9);
        var6 = var8.trim;
        var6 = var6.bind(var8)();
        var8 = var6.length;
        var6 = 'search_query_length';
        var2[var6] = var8;
        var6 = var7.trim;
        var6 = var6.bind(var7)();
        var7 = var6.length;
        var6 = 'search_query_content_length';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchResultMessagesEmpty'] = var4;
    var4 = function trackSearchIndexing(arg1) {
        var1 = arg1;
        var4 = var1.searchContext;
        var8 = var1.isHistoricalIndexing;
        var7 = var1.documentsIndexed;
        var3 = _closure1_slot14;
        var1 = undefined;
        var9 = var3.bind(var1)(var4);
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 6;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.SEARCH_V2_INDEXING_VIEWED;
        var2 = {};
        var2['is_historical_indexing'] = var8;
        var2['documents_indexed'] = var7;
        var10 = var2;
        var6 = copyDataProperties(var10, var9);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchIndexing'] = var4;
    var4 = function trackSearchHistoryClicked(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var5 = var1.searchContext;
            var4 = var1.searchHistoryItemType;
            var6 = var1.channelId;
            var3 = _closure1_slot14;
            var1 = undefined;
            var10 = var3.bind(var1)(var5);
            var5 = _closure1_slot3;
            var3 = var5.getChannel;
            var6 = var3.bind(var5)(var6);
            var3 = _closure1_slot6;
            var7 = var3[var4];
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 6;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.SEARCH_V2_HISTORY_CLICKED;
            var2 = {};
            var11 = var2;
            var8 = copyDataProperties(var11, var10);
            var8 = null;
            var9 = var8 == var6;
            var8 = undefined;
            if(var9) { _fun0004_ip = 117; continue _fun0004 }
 112:
            var8 = var6.type;
 117:
            var6 = 'search_result_channel_type';
            var2[var6] = var8;
            var6 = 'search_history_type';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackSearchHistoryClicked'] = var4;
    var4 = function trackSuggestedSearchClicked(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var4 = var1.searchContext;
            var5 = var1.channelId;
            var3 = _closure1_slot14;
            var1 = undefined;
            var9 = var3.bind(var1)(var4);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var6 = var3.bind(var4)(var5);
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 6;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.SEARCH_V2_SUGGESTED_CLICKED;
            var2 = {};
            var10 = var2;
            var7 = copyDataProperties(var10, var9);
            var7 = null;
            var8 = var7 == var6;
            var7 = undefined;
            if(var8) { _fun0005_ip = 103; continue _fun0005 }
 98:
            var7 = var6.type;
 103:
            var6 = 'search_result_channel_type';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackSuggestedSearchClicked'] = var4;
    var4 = function trackSearchResultClicked(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var5 = var1.searchContext;
            var12 = var1.channelId;
            var13 = var1.messageId;
            var11 = var1.userId;
            var14 = var1.index;
            var7 = var1.totalSearchResults;
            var3 = _closure1_slot14;
            var1 = undefined;
            var9 = var3.bind(var1)(var5);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var10 = var3.bind(var4)(var12);
            var4 = _closure1_slot4;
            var8 = var4.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var8.bind(var4)(var5, var3);
            var8 = var4.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getTextInputValue;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var8.bind(var4)(var5, var3);
            var3 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var3.bind(var4)(var5, var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.SEARCH_V2_RESULT_CLICKED;
            var2 = {};
            var20 = var2;
            var19 = var9;
            var9 = copyDataProperties(var20, var19);
            var9 = null;
            var18 = var9 == var10;
            var17 = undefined;
            if(var18) { _fun0006_ip = 190; continue _fun0006 }
 185:
            var17 = var10.type;
 190:
            var10 = 'search_result_channel_type';
            var2[var10] = var17;
            var10 = var16.trim;
            var10 = var10.bind(var16)();
            var16 = var10.length;
            var10 = 'search_query_length';
            var2[var10] = var16;
            var10 = var15.trim;
            var10 = var10.bind(var15)();
            var15 = var10.length;
            var10 = 'search_query_content_length';
            var2[var10] = var15;
            var10 = 'search_result_index';
            var2[var10] = var14;
            var10 = 'search_result_message_id';
            var2[var10] = var13;
            var10 = 'search_result_channel_id';
            var2[var10] = var12;
            var10 = 'search_result_user_id';
            var2[var10] = var11;
            var9 = null;
            if(var8) { _fun0006_ip = 305; continue _fun0006 }
 302:
            var9 = var7;
 305:
            var7 = 'total_search_results';
            var2[var7] = var9;
            var7 = 'is_initial_search_query';
            var2[var7] = var8;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 7;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var7 = var6.SearchResultExactCountEnabled;
            var6 = var7.getSetting;
            var7 = var6.bind(var7)();
            var6 = 'search_results_exact_counts_enabled';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackSearchResultClicked'] = var4;
    var4 = function trackSearchResultsViewedAggregate(arg1) {
        var1 = arg1;
        var3 = var1.searchContext;
        var10 = var1.searchTab;
        var9 = var1.farthestIndexSeen;
        var8 = var1.totalResultsViewedUnique;
        var7 = var1.totalResultsViewed;
        var2 = _closure1_slot14;
        var1 = undefined;
        var12 = var2.bind(var1)(var3);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 6;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.SEARCH_V2_RESULTS_VIEWED_AGGREGATE;
        var2 = {};
        var13 = var2;
        var11 = copyDataProperties(var13, var12);
        var6 = _closure1_slot11;
        var10 = var6.bind(var1)(var10);
        var6 = 'search_tab_viewed';
        var2[var6] = var10;
        var6 = 'search_farthest_seen_index';
        var2[var6] = var9;
        var6 = 'search_results_viewed_unique';
        var2[var6] = var8;
        var6 = 'search_results_viewed';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchResultsViewedAggregate'] = var4;
    var4 = function trackSearchFiltersOpened(arg1) {
        var1 = arg1;
        var4 = var1.searchContext;
        var3 = _closure1_slot14;
        var1 = undefined;
        var5 = var3.bind(var1)(var4);
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 6;
        var3 = var6[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.trackWithMetadata;
        var2 = _closure1_slot8;
        var2 = var2.SEARCH_V2_FILTERS_OPENED;
        var2 = var3.bind(var4)(var2, var5);
        return var1;
    };
    var3['trackSearchFiltersOpened'] = var4;
    var4 = function trackSearchFiltersApplied(arg1) {
        var1 = arg1;
        var4 = var1.searchContext;
        var3 = _closure1_slot14;
        var1 = undefined;
        var5 = var3.bind(var1)(var4);
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 6;
        var3 = var6[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.trackWithMetadata;
        var2 = _closure1_slot8;
        var2 = var2.SEARCH_V2_FILTERS_APPLIED;
        var2 = var3.bind(var4)(var2, var5);
        return var1;
    };
    var3['trackSearchFiltersApplied'] = var4;
    var4 = function trackSearchFilterAdd(arg1) {
        var1 = arg1;
        var3 = var1.searchContext;
        var8 = var1.searchTokenType;
        var7 = var1.location;
        var2 = _closure1_slot14;
        var1 = undefined;
        var10 = var2.bind(var1)(var3);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 6;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.SEARCH_V2_FILTER_ADD;
        var2 = {};
        var11 = var2;
        var9 = copyDataProperties(var11, var10);
        var6 = _closure1_slot12;
        var8 = var6.bind(var1)(var8);
        var6 = 'search_filter_type';
        var2[var6] = var8;
        var6 = 'location';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchFilterAdd'] = var4;
    var4 = function trackSearchFilterRemove(arg1) {
        var1 = arg1;
        var3 = var1.searchContext;
        var8 = var1.searchTokenType;
        var7 = var1.isDefault;
        var2 = _closure1_slot14;
        var1 = undefined;
        var10 = var2.bind(var1)(var3);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 6;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.SEARCH_V2_FILTER_REMOVE;
        var2 = {};
        var11 = var2;
        var9 = copyDataProperties(var11, var10);
        var6 = _closure1_slot12;
        var8 = var6.bind(var1)(var8);
        var6 = 'search_filter_type';
        var2[var6] = var8;
        var6 = 'is_default_search_filter';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchFilterRemove'] = var4;
    var4 = function trackSearchTabSelected(arg1) {
        var1 = arg1;
        var4 = var1.searchContext;
        var3 = _closure1_slot14;
        var1 = undefined;
        var5 = var3.bind(var1)(var4);
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 6;
        var3 = var6[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.trackWithMetadata;
        var2 = _closure1_slot8;
        var2 = var2.SEARCH_V2_TAB_SELECTED;
        var2 = var3.bind(var4)(var2, var5);
        return var1;
    };
    var3['trackSearchTabSelected'] = var4;
    var4 = function trackSearchJumpToMessage(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.searchContext;
            var7 = var1.channelId;
            var3 = _closure1_slot14;
            var1 = undefined;
            var10 = var3.bind(var1)(var4);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var6 = var3.bind(var4)(var7);
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 6;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.SEARCH_V2_JUMP_TO_MESSAGE;
            var2 = {};
            var11 = var2;
            var8 = copyDataProperties(var11, var10);
            var8 = null;
            var9 = var8 == var6;
            var8 = undefined;
            if(var9) { _fun0007_ip = 103; continue _fun0007 }
 98:
            var8 = var6.type;
 103:
            var6 = 'search_result_channel_type';
            var2[var6] = var8;
            var6 = 'search_result_channel_id';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackSearchJumpToMessage'] = var4;
    var4 = function trackSearchStarted(arg1) {
        var1 = arg1;
        var7 = var1.searchContext;
        var4 = _closure1_slot14;
        var1 = undefined;
        var6 = var4.bind(var1)(var7);
        var5 = _closure1_slot4;
        var8 = var5.getState;
        var4 = function(arg1) {
            var2 = arg1;
            var1 = var2.getQueryString;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var8.bind(var5)(var7, var4);
        var4 = var5.getState;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = var2.getTextInputValue;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var4.bind(var5)(var7, var3);
        var3 = var6.search_query_id;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 6;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.SEARCH_V2_STARTED;
        var2 = {};
        var10 = var2;
        var9 = var6;
        var6 = copyDataProperties(var10, var9);
        var6 = var8.trim;
        var6 = var6.bind(var8)();
        var8 = var6.length;
        var6 = 'search_query_length';
        var2[var6] = var8;
        var6 = var7.trim;
        var6 = var6.bind(var7)();
        var7 = var6.length;
        var6 = 'search_query_content_length';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchStarted'] = var4;
    var4 = function trackSearchResultCountsViewed(arg1) {
        var1 = arg1;
        var5 = var1.searchContext;
        var18 = var1.totalMessageResults;
        var17 = var1.totalMediaResults;
        var16 = var1.totalPinsResults;
        var15 = var1.totalLinksResults;
        var14 = var1.totalFilesResults;
        var13 = var1.totalMembersResults;
        var12 = var1.totalGuildChannelsResults;
        var11 = var1.totalPeopleResults;
        var3 = _closure1_slot14;
        var1 = undefined;
        var7 = var3.bind(var1)(var5);
        var4 = _closure1_slot4;
        var8 = var4.getState;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = var2.getQueryString;
            var1 = var1.bind(var2)();
            return var1;
        };
        var10 = var8.bind(var4)(var5, var3);
        var3 = var4.getState;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = var2.getTextInputValue;
            var1 = var1.bind(var2)();
            return var1;
        };
        var9 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 6;
        var2 = var8[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.SEARCH_V2_RESULT_COUNTS_VIEWED;
        var2 = {};
        var20 = var2;
        var19 = var7;
        var7 = copyDataProperties(var20, var19);
        var7 = 'total_message_results';
        var2[var7] = var18;
        var7 = 'total_media_results';
        var2[var7] = var17;
        var7 = 'total_pins_results';
        var2[var7] = var16;
        var7 = 'total_links_results';
        var2[var7] = var15;
        var7 = 'total_files_results';
        var2[var7] = var14;
        var7 = 'total_members_results';
        var2[var7] = var13;
        var7 = 'total_guild_channels_results';
        var2[var7] = var12;
        var7 = 'total_people_results';
        var2[var7] = var11;
        var7 = var10.trim;
        var7 = var7.bind(var10)();
        var10 = var7.length;
        var7 = 'search_query_length';
        var2[var7] = var10;
        var7 = var9.trim;
        var7 = var7.bind(var9)();
        var9 = var7.length;
        var7 = 'search_query_content_length';
        var2[var7] = var9;
        var7 = _closure1_slot0;
        var6 = 7;
        var6 = var8[var6];
        var6 = var7.bind(var1)(var6);
        var7 = var6.SearchResultExactCountEnabled;
        var6 = var7.getSetting;
        var7 = var6.bind(var7)();
        var6 = 'search_results_exact_counts_enabled';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchResultCountsViewed'] = var4;
    var2 = function trackSearchResultsViewed(arg1) {
        var1 = arg1;
        var5 = var1.searchContext;
        var12 = var1.tab;
        var11 = var1.totalSearchResults;
        var3 = _closure1_slot14;
        var1 = undefined;
        var7 = var3.bind(var1)(var5);
        var4 = _closure1_slot4;
        var8 = var4.getState;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = var2.getQueryString;
            var1 = var1.bind(var2)();
            return var1;
        };
        var10 = var8.bind(var4)(var5, var3);
        var3 = var4.getState;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = var2.getTextInputValue;
            var1 = var1.bind(var2)();
            return var1;
        };
        var9 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 6;
        var2 = var8[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.SEARCH_V2_RESULTS_VIEWED;
        var2 = {};
        var14 = var2;
        var13 = var7;
        var7 = copyDataProperties(var14, var13);
        var7 = 'search_tab_selected';
        var2[var7] = var12;
        var7 = 'total_search_results';
        var2[var7] = var11;
        var7 = var10.trim;
        var7 = var7.bind(var10)();
        var10 = var7.length;
        var7 = 'search_query_length';
        var2[var7] = var10;
        var7 = var9.trim;
        var7 = var7.bind(var9)();
        var9 = var7.length;
        var7 = 'search_query_content_length';
        var2[var7] = var9;
        var7 = _closure1_slot0;
        var6 = 7;
        var6 = var8[var6];
        var6 = var7.bind(var1)(var6);
        var7 = var6.SearchResultExactCountEnabled;
        var6 = var7.getSetting;
        var7 = var6.bind(var7)();
        var6 = 'search_results_exact_counts_enabled';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackSearchResultsViewed'] = var2;
    return var1;
})();