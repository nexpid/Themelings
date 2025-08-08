// app/modules/search/native/tracking/TrackingV2.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SEARCH_TYPE_TO_SEARCH_INITIAL_TABS;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SearchSessionAnalyticsManager;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var13 = var7;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = function trackSearchOpenedMobile(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.searchContext;
            var12 = var1.searchLocation;
            var3 = _closure1_slot5;
            var1 = var10.type;
            var3 = var3[var1];
            var1 = 0;
            var6 = var3[var1];
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 4;
            var3 = var1[var7];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.hasSession;
            var3 = var3.bind(var4)(var10);
            var5 = var6;
            if(!var3) { _fun0001_ip = 118; continue _fun0001 }
 78:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var4 = var4.bind(var1)(var3);
            var3 = var4.getSelectedSearchTab;
            var3 = var3.bind(var4)(var10);
            var4 = null;
            var5 = var6;
            if(!(var4 != var3)) { _fun0001_ip = 118; continue _fun0001 }
 115:
            var5 = var3;
 118:
            var14 = _closure1_slot7;
            var4 = var14.initialize;
            var3 = {};
            var3['searchContext'] = var10;
            var3['initialTab'] = var5;
            var3['searchLocation'] = var12;
            var5 = false;
            var3['initializeSearchQueryId'] = var5;
            var3 = var4.bind(var14)(var3);
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 5;
            var3 = var11[var8];
            var4 = var9.bind(var1)(var3);
            var3 = var4.getChannelIdFromSearchContext;
            var6 = var3.bind(var4)(var10);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var7 = var3.bind(var4)(var6);
            var4 = _closure1_slot1;
            var3 = 6;
            var3 = var11[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot6;
            var3 = var2.SEARCH_OPENED_MOBILE;
            var2 = {};
            var13 = var14.getSessionId;
            var13 = var13.bind(var14)(var10);
            var2['search_session_id'] = var13;
            var2['search_location'] = var12;
            var8 = var11[var8];
            var9 = var9.bind(var1)(var8);
            var8 = var9.getGuildIdFromSearchContext;
            var8 = var8.bind(var9)(var10);
            var2['guild_id'] = var8;
            var2['channel_id'] = var6;
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 301; continue _fun0001 }
 296:
            var6 = var7.type;
 301:
            var2['channel_type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var2['trackSearchOpenedMobile'] = var7;
    var7 = function trackSearchStartedMobile(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var12 = var1.searchContext;
            var5 = _closure1_slot4;
            var4 = var5.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var5)(var12, var3);
            if(var3) { _fun0002_ip = 316; continue _fun0002 }
 41:
            var15 = _closure1_slot7;
            var3 = var15.refreshSearchQueryAnalyticsId;
            var3 = var3.bind(var15)(var12);
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 5;
            var3 = var13[var10];
            var5 = undefined;
            var4 = var11.bind(var5)(var3);
            var3 = var4.getChannelIdFromSearchContext;
            var9 = var3.bind(var4)(var12);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var8 = var3.bind(var4)(var9);
            var4 = _closure1_slot4;
            var6 = var4.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var6.bind(var4)(var12, var3);
            var3 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getTextInputValue;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var3.bind(var4)(var12, var2);
            var3 = _closure1_slot1;
            var2 = 6;
            var2 = var13[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot6;
            var2 = var1.SEARCH_STARTED_MOBILE;
            var1 = {};
            var14 = var15.getSessionId;
            var14 = var14.bind(var15)(var12);
            var1['search_session_id'] = var14;
            var14 = var15.getQueryId;
            var14 = var14.bind(var15)(var12);
            var1['search_query_id'] = var14;
            var14 = var15.getSearchLocation;
            var14 = var14.bind(var15)(var12);
            var1['search_location'] = var14;
            var10 = var13[var10];
            var11 = var11.bind(var5)(var10);
            var10 = var11.getGuildIdFromSearchContext;
            var10 = var10.bind(var11)(var12);
            var1['guild_id'] = var10;
            var1['channel_id'] = var9;
            var9 = null;
            var9 = var9 == var8;
            if(var9) { _fun0002_ip = 265; continue _fun0002 }
 260:
            var5 = var8.type;
 265:
            var1['channel_type'] = var5;
            var5 = var7.trim;
            var5 = var5.bind(var7)();
            var5 = var5.length;
            var1['search_query_length'] = var5;
            var5 = var6.trim;
            var5 = var5.bind(var6)();
            var5 = var5.length;
            var1['search_query_content_length'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 316:
            var1 = undefined;
            return var1;
        }
    };
    var2['trackSearchStartedMobile'] = var7;
    var7 = function trackSearchResultClickedMobile(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var19 = var2.searchContext;
            var14 = var2.index;
            var10 = var2.messageId;
            var7 = var2.channelId;
            var12 = var2.userId;
            var13 = var2.entityType;
            var4 = _closure1_slot4;
            var3 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var4)(var19, var2);
            if(var2) { _fun0003_ip = 463; continue _fun0003 }
 67:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 5;
            var3 = var16[var2];
            var5 = undefined;
            var4 = var15.bind(var5)(var3);
            var3 = var4.getGuildIdFromSearchContext;
            var9 = var3.bind(var4)(var19);
            var2 = var16[var2];
            var3 = var15.bind(var5)(var2);
            var2 = var3.getChannelIdFromSearchContext;
            var8 = var2.bind(var3)(var19);
            var3 = _closure1_slot3;
            var2 = var3.getChannel;
            var6 = var2.bind(var3)(var8);
            var2 = var3.getChannel;
            var11 = var2.bind(var3)(var7);
            var3 = _closure1_slot4;
            var4 = var3.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = var4.bind(var3)(var19, var2);
            var2 = var3.getState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getTextInputValue;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var2.bind(var3)(var19, var1);
            var18 = _closure1_slot1;
            var1 = 6;
            var1 = var16[var1];
            var4 = var18.bind(var5)(var1);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot6;
            var2 = var1.SEARCH_RESULT_CLICKED_MOBILE;
            var1 = {};
            var22 = _closure1_slot7;
            var17 = var22.getSessionId;
            var17 = var17.bind(var22)(var19);
            var1['search_session_id'] = var17;
            var17 = var22.getSearchLocation;
            var17 = var17.bind(var22)(var19);
            var1['search_location'] = var17;
            var17 = var22.getQueryId;
            var17 = var17.bind(var22)(var19);
            var1['search_query_id'] = var17;
            var17 = var21.trim;
            var17 = var17.bind(var21)();
            var17 = var17.length;
            var1['search_query_length'] = var17;
            var17 = var20.trim;
            var17 = var17.bind(var20)();
            var17 = var17.length;
            var1['search_query_content_length'] = var17;
            var17 = 4;
            var17 = var16[var17];
            var18 = var18.bind(var5)(var17);
            var17 = var18.getSelectedSearchTab;
            var17 = var17.bind(var18)(var19);
            var1['search_tab_selected'] = var17;
            var1['search_result_index'] = var14;
            var14 = 7;
            var14 = var16[var14];
            var15 = var15.bind(var5)(var14);
            var14 = var15.v4;
            var14 = var14.bind(var15)();
            var1['search_result_click_id'] = var14;
            var1['search_result_content_entity_type'] = var13;
            var1['search_result_user_id'] = var12;
            var1['search_result_message_id'] = var10;
            var1['search_result_channel_id'] = var7;
            var1['search_result_guild_id'] = var9;
            var7 = null;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0003_ip = 423; continue _fun0003 }
 418:
            var10 = var11.type;
 423:
            var1['search_result_channel_type'] = var10;
            var1['guild_id'] = var9;
            var1['channel_id'] = var8;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0003_ip = 452; continue _fun0003 }
 447:
            var5 = var6.type;
 452:
            var1['channel_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 463:
            var1 = undefined;
            return var1;
        }
    };
    var2['trackSearchResultClickedMobile'] = var7;
    var7 = function trackSearchResultReturnedMobile(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var23 = var2.searchContext;
            var18 = var2.searchResultTotalCount;
            var17 = var2.numMemberTabReturnedResults;
            var16 = var2.numChannelTabReturnedResults;
            var15 = var2.numPeopleTabReturnedResults;
            var14 = var2.numMessageTabReturnedResults;
            var13 = var2.numMediaTabReturnedResults;
            var12 = var2.numFileTabReturnedResults;
            var9 = var2.numLinkTabReturnedResults;
            var4 = _closure1_slot4;
            var3 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var4)(var23, var2);
            if(var2) { _fun0004_ip = 444; continue _fun0004 }
 89:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 5;
            var3 = var11[var2];
            var5 = undefined;
            var4 = var10.bind(var5)(var3);
            var3 = var4.getGuildIdFromSearchContext;
            var8 = var3.bind(var4)(var23);
            var2 = var11[var2];
            var3 = var10.bind(var5)(var2);
            var2 = var3.getChannelIdFromSearchContext;
            var7 = var2.bind(var3)(var23);
            var3 = _closure1_slot3;
            var2 = var3.getChannel;
            var6 = var2.bind(var3)(var7);
            var3 = _closure1_slot4;
            var4 = var3.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = var4.bind(var3)(var23, var2);
            var2 = var3.getState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getTextInputValue;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var2.bind(var3)(var23, var1);
            var2 = _closure1_slot1;
            var1 = 6;
            var1 = var11[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot6;
            var2 = var1.SEARCH_RESULT_RETURNED_MOBILE;
            var1 = {};
            var22 = _closure1_slot7;
            var19 = var22.getSessionId;
            var19 = var19.bind(var22)(var23);
            var1['search_session_id'] = var19;
            var19 = var22.getSearchLocation;
            var19 = var19.bind(var22)(var23);
            var1['search_location'] = var19;
            var19 = var22.getQueryId;
            var19 = var19.bind(var22)(var23);
            var1['search_query_id'] = var19;
            var19 = var21.trim;
            var19 = var19.bind(var21)();
            var19 = var19.length;
            var1['search_query_length'] = var19;
            var19 = var20.trim;
            var19 = var19.bind(var20)();
            var19 = var19.length;
            var1['search_query_content_length'] = var19;
            var1['search_result_total_count'] = var18;
            var1['num_member_tab_returned_results'] = var17;
            var1['num_channel_tab_returned_results'] = var16;
            var1['num_people_tab_returned_results'] = var15;
            var1['num_message_tab_returned_results'] = var14;
            var1['num_media_tab_returned_results'] = var13;
            var1['num_file_tab_returned_results'] = var12;
            var1['num_link_tab_returned_results'] = var9;
            var9 = 8;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.SearchResultExactCountEnabled;
            var9 = var10.getSetting;
            var9 = var9.bind(var10)();
            var1['exact_search_result_count_setting_enabled'] = var9;
            var1['guild_id'] = var8;
            var1['channel_id'] = var7;
            var7 = null;
            var7 = var7 == var6;
            if(var7) { _fun0004_ip = 433; continue _fun0004 }
 428:
            var5 = var6.type;
 433:
            var1['channel_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 444:
            var1 = undefined;
            return var1;
        }
    };
    var2['trackSearchResultReturnedMobile'] = var7;
    var7 = function trackSearchEmptyResultMobile(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var13 = var2.searchContext;
            var4 = _closure1_slot4;
            var3 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var4)(var13, var2);
            if(var2) { _fun0005_ip = 305; continue _fun0005 }
 41:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var6 = var3[var2];
            var5 = undefined;
            var7 = var4.bind(var5)(var6);
            var6 = var7.getGuildIdFromSearchContext;
            var8 = var6.bind(var7)(var13);
            var2 = var3[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getChannelIdFromSearchContext;
            var7 = var2.bind(var4)(var13);
            var4 = _closure1_slot3;
            var2 = var4.getChannel;
            var6 = var2.bind(var4)(var7);
            var4 = _closure1_slot4;
            var10 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var10.bind(var4)(var13, var2);
            var2 = var4.getState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getTextInputValue;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var2.bind(var4)(var13, var1);
            var2 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot6;
            var2 = var1.SEARCH_EMPTY_RESULT_MOBILE;
            var1 = {};
            var12 = _closure1_slot7;
            var9 = var12.getSessionId;
            var9 = var9.bind(var12)(var13);
            var1['search_session_id'] = var9;
            var9 = var12.getSearchLocation;
            var9 = var9.bind(var12)(var13);
            var1['search_location'] = var9;
            var9 = var12.getQueryId;
            var9 = var9.bind(var12)(var13);
            var1['search_query_id'] = var9;
            var9 = var11.trim;
            var9 = var9.bind(var11)();
            var9 = var9.length;
            var1['search_query_length'] = var9;
            var9 = var10.trim;
            var9 = var9.bind(var10)();
            var9 = var9.length;
            var1['search_query_content_length'] = var9;
            var1['guild_id'] = var8;
            var1['channel_id'] = var7;
            var7 = null;
            var7 = var7 == var6;
            if(var7) { _fun0005_ip = 294; continue _fun0005 }
 289:
            var5 = var6.type;
 294:
            var1['channel_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 305:
            var1 = undefined;
            return var1;
        }
    };
    var2['trackSearchEmptyResultMobile'] = var7;
    var7 = function trackSearchEmptyMessageResultMobile(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var13 = var2.searchContext;
            var4 = _closure1_slot4;
            var3 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var4)(var13, var2);
            if(var2) { _fun0006_ip = 305; continue _fun0006 }
 41:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var6 = var3[var2];
            var5 = undefined;
            var7 = var4.bind(var5)(var6);
            var6 = var7.getGuildIdFromSearchContext;
            var8 = var6.bind(var7)(var13);
            var2 = var3[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getChannelIdFromSearchContext;
            var7 = var2.bind(var4)(var13);
            var4 = _closure1_slot3;
            var2 = var4.getChannel;
            var6 = var2.bind(var4)(var7);
            var4 = _closure1_slot4;
            var10 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var10.bind(var4)(var13, var2);
            var2 = var4.getState;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getTextInputValue;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var2.bind(var4)(var13, var1);
            var2 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot6;
            var2 = var1.SEARCH_EMPTY_MESSAGE_RESULT_MOBILE;
            var1 = {};
            var12 = _closure1_slot7;
            var9 = var12.getSessionId;
            var9 = var9.bind(var12)(var13);
            var1['search_session_id'] = var9;
            var9 = var12.getSearchLocation;
            var9 = var9.bind(var12)(var13);
            var1['search_location'] = var9;
            var9 = var12.getQueryId;
            var9 = var9.bind(var12)(var13);
            var1['search_query_id'] = var9;
            var9 = var11.trim;
            var9 = var9.bind(var11)();
            var9 = var9.length;
            var1['search_query_length'] = var9;
            var9 = var10.trim;
            var9 = var9.bind(var10)();
            var9 = var9.length;
            var1['search_query_content_length'] = var9;
            var1['guild_id'] = var8;
            var1['channel_id'] = var7;
            var7 = null;
            var7 = var7 == var6;
            if(var7) { _fun0006_ip = 294; continue _fun0006 }
 289:
            var5 = var6.type;
 294:
            var1['channel_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 305:
            var1 = undefined;
            return var1;
        }
    };
    var2['trackSearchEmptyMessageResultMobile'] = var7;
    var4 = function trackSearchClosedMobile(arg1) {
        var1 = arg1;
        var3 = var1.searchContext;
        var2 = _closure1_slot7;
        var1 = var2.terminate;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['trackSearchClosedMobile'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/tracking/TrackingV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();