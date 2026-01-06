// app/modules/search/native/tracking/Tracking.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function toAnalyticsSearchFilterType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot6;
            var3 = var3.FILTER_FROM;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot6;
            var3 = var3.FILTER_MENTIONS;
            if(!(var3 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot6;
            var3 = var3.FILTER_IN;
            if(!(var3 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot6;
            var3 = var3.FILTER_HAS;
            if(!(var3 !== var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot6;
            var3 = var3.FILTER_ON;
            if(!(var3 !== var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot6;
            var3 = var3.FILTER_AFTER;
            if(!(var3 !== var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = _closure1_slot6;
            var1 = var1.FILTER_BEFORE;
            if(!(var1 !== var2)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = null;
            return var1;
case 14:
            var1 = 'filter_before';
            return var1;
case 12:
            var1 = 'filter_after';
            return var1;
case 10:
            var1 = 'filter_on';
            return var1;
case 8:
            var1 = 'filter_has';
            return var1;
case 6:
            var1 = 'filter_in';
            return var1;
case 4:
            var1 = 'filter_mentions';
            return var1;
case 2:
            var1 = 'filter_from';
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var2 = var2.SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.SearchTokenTypes;
    var _closure1_slot6 = var7;
    var2 = var2.AnalyticEvents;
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = function trackSearchOpened(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.searchContext;
            var12 = var1.searchLocation;
            var14 = _closure1_slot1;
            var11 = _closure1_slot2;
            var13 = 4;
            var3 = var11[var13];
            var1 = undefined;
            var4 = var14.bind(var1)(var3);
            var3 = var4.initialize;
            var3 = var3.bind(var4)(var10, var12);
            var9 = _closure1_slot0;
            var8 = 5;
            var3 = var11[var8];
            var4 = var9.bind(var1)(var3);
            var3 = var4.getChannelIdFromSearchContext;
            var6 = var3.bind(var4)(var10);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var7 = var3.bind(var4)(var6);
            var3 = 6;
            var3 = var11[var3];
            var5 = var14.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot7;
            var3 = var2.SEARCH_OPENED_MOBILE;
            var2 = {};
            var13 = var11[var13];
            var14 = var14.bind(var1)(var13);
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
            if(var8) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var6 = var7.type;
case 16:
            var2['channel_type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var2['trackSearchOpened'] = var7;
    var7 = function trackSearchStarted(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
            if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var15 = _closure1_slot1;
            var13 = _closure1_slot2;
            var14 = 4;
            var3 = var13[var14];
            var5 = undefined;
            var4 = var15.bind(var5)(var3);
            var3 = var4.refreshQueryId;
            var3 = var3.bind(var4)(var12);
            var11 = _closure1_slot0;
            var10 = 5;
            var3 = var13[var10];
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
            var2 = 6;
            var2 = var13[var2];
            var4 = var15.bind(var5)(var2);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot7;
            var2 = var1.SEARCH_STARTED_MOBILE;
            var1 = {};
            var16 = var13[var14];
            var17 = var15.bind(var5)(var16);
            var16 = var17.getSessionId;
            var16 = var16.bind(var17)(var12);
            var1['search_session_id'] = var16;
            var16 = var13[var14];
            var17 = var15.bind(var5)(var16);
            var16 = var17.getQueryId;
            var16 = var16.bind(var17)(var12);
            var1['search_query_id'] = var16;
            var14 = var13[var14];
            var15 = var15.bind(var5)(var14);
            var14 = var15.getLocation;
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
            if(var9) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var5 = var8.type;
case 20:
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
case 18:
            var1 = undefined;
            return var1;
        }
    };
    var2['trackSearchStarted'] = var7;
    var7 = function trackSearchResultClicked(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var19 = var1.searchContext;
            var14 = var1.index;
            var10 = var1.messageId;
            var7 = var1.channelId;
            var12 = var1.userId;
            var13 = var1.entityType;
            var5 = _closure1_slot4;
            var4 = var5.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var5)(var19, var3);
            if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 5;
            var4 = var16[var3];
            var5 = undefined;
            var6 = var15.bind(var5)(var4);
            var4 = var6.getGuildIdFromSearchContext;
            var9 = var4.bind(var6)(var19);
            var3 = var16[var3];
            var4 = var15.bind(var5)(var3);
            var3 = var4.getChannelIdFromSearchContext;
            var8 = var3.bind(var4)(var19);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var6 = var3.bind(var4)(var8);
            var3 = var4.getChannel;
            var11 = var3.bind(var4)(var7);
            var4 = _closure1_slot4;
            var17 = var4.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var22 = var17.bind(var4)(var19, var3);
            var3 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getTextInputValue;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = var3.bind(var4)(var19, var2);
            var18 = _closure1_slot1;
            var2 = 6;
            var2 = var16[var2];
            var4 = var18.bind(var5)(var2);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot7;
            var2 = var1.SEARCH_RESULT_CLICKED_MOBILE;
            var1 = {};
            var17 = 4;
            var20 = var16[var17];
            var23 = var18.bind(var5)(var20);
            var20 = var23.getSessionId;
            var20 = var20.bind(var23)(var19);
            var1['search_session_id'] = var20;
            var20 = var16[var17];
            var23 = var18.bind(var5)(var20);
            var20 = var23.getLocation;
            var20 = var20.bind(var23)(var19);
            var1['search_location'] = var20;
            var20 = var16[var17];
            var23 = var18.bind(var5)(var20);
            var20 = var23.getQueryId;
            var20 = var20.bind(var23)(var19);
            var1['search_query_id'] = var20;
            var20 = var22.trim;
            var20 = var20.bind(var22)();
            var20 = var20.length;
            var1['search_query_length'] = var20;
            var20 = var21.trim;
            var20 = var20.bind(var21)();
            var20 = var20.length;
            var1['search_query_content_length'] = var20;
            var17 = var16[var17];
            var18 = var18.bind(var5)(var17);
            var17 = var18.getSelectedTab;
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
            if(var12) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var10 = var11.type;
case 24:
            var1['search_result_channel_type'] = var10;
            var1['guild_id'] = var9;
            var1['channel_id'] = var8;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var5 = var6.type;
case 26:
            var1['channel_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 22:
            var1 = undefined;
            return var1;
        }
    };
    var2['trackSearchResultClicked'] = var7;
    var7 = function trackSearchResultReturned(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var23 = var1.searchContext;
            var18 = var1.searchResultTotalCount;
            var17 = var1.numMemberTabReturnedResults;
            var16 = var1.numChannelTabReturnedResults;
            var15 = var1.numPeopleTabReturnedResults;
            var14 = var1.numMessageTabReturnedResults;
            var13 = var1.numMediaTabReturnedResults;
            var12 = var1.numFileTabReturnedResults;
            var9 = var1.numLinkTabReturnedResults;
            var5 = _closure1_slot4;
            var4 = var5.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var5)(var23, var3);
            if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 5;
            var4 = var11[var3];
            var5 = undefined;
            var6 = var10.bind(var5)(var4);
            var4 = var6.getGuildIdFromSearchContext;
            var8 = var4.bind(var6)(var23);
            var3 = var11[var3];
            var4 = var10.bind(var5)(var3);
            var3 = var4.getChannelIdFromSearchContext;
            var7 = var3.bind(var4)(var23);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var6 = var3.bind(var4)(var7);
            var4 = _closure1_slot4;
            var19 = var4.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = var19.bind(var4)(var23, var3);
            var3 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getTextInputValue;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var3.bind(var4)(var23, var2);
            var22 = _closure1_slot1;
            var2 = 6;
            var2 = var11[var2];
            var4 = var22.bind(var5)(var2);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot7;
            var2 = var1.SEARCH_RESULT_RETURNED_MOBILE;
            var1 = {};
            var19 = 4;
            var24 = var11[var19];
            var25 = var22.bind(var5)(var24);
            var24 = var25.getSessionId;
            var24 = var24.bind(var25)(var23);
            var1['search_session_id'] = var24;
            var24 = var11[var19];
            var25 = var22.bind(var5)(var24);
            var24 = var25.getLocation;
            var24 = var24.bind(var25)(var23);
            var1['search_location'] = var24;
            var19 = var11[var19];
            var22 = var22.bind(var5)(var19);
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
            if(var7) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var5 = var6.type;
case 30:
            var1['channel_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 28:
            var1 = undefined;
            return var1;
        }
    };
    var2['trackSearchResultReturned'] = var7;
    var7 = function trackSearchEmptyResult(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var13 = var1.searchContext;
            var5 = _closure1_slot4;
            var4 = var5.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var5)(var13, var3);
            if(var3) { _fun0006_ip = 32; continue _fun0006 }
case 19:
            var4 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 5;
            var6 = var14[var3];
            var5 = undefined;
            var7 = var4.bind(var5)(var6);
            var6 = var7.getGuildIdFromSearchContext;
            var8 = var6.bind(var7)(var13);
            var3 = var14[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getChannelIdFromSearchContext;
            var7 = var3.bind(var4)(var13);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var6 = var3.bind(var4)(var7);
            var4 = _closure1_slot4;
            var9 = var4.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var9.bind(var4)(var13, var3);
            var3 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getTextInputValue;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var3.bind(var4)(var13, var2);
            var12 = _closure1_slot1;
            var2 = 6;
            var2 = var14[var2];
            var4 = var12.bind(var5)(var2);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot7;
            var2 = var1.SEARCH_EMPTY_RESULT_MOBILE;
            var1 = {};
            var9 = 4;
            var15 = var14[var9];
            var16 = var12.bind(var5)(var15);
            var15 = var16.getSessionId;
            var15 = var15.bind(var16)(var13);
            var1['search_session_id'] = var15;
            var15 = var14[var9];
            var16 = var12.bind(var5)(var15);
            var15 = var16.getLocation;
            var15 = var15.bind(var16)(var13);
            var1['search_location'] = var15;
            var9 = var14[var9];
            var12 = var12.bind(var5)(var9);
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
            if(var7) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var5 = var6.type;
case 33:
            var1['channel_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 32:
            var1 = undefined;
            return var1;
        }
    };
    var2['trackSearchEmptyResult'] = var7;
    var7 = function trackSearchEmptyMessageResult(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var13 = var1.searchContext;
            var5 = _closure1_slot4;
            var4 = var5.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var5)(var13, var3);
            if(var3) { _fun0007_ip = 32; continue _fun0007 }
case 19:
            var4 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 5;
            var6 = var14[var3];
            var5 = undefined;
            var7 = var4.bind(var5)(var6);
            var6 = var7.getGuildIdFromSearchContext;
            var8 = var6.bind(var7)(var13);
            var3 = var14[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getChannelIdFromSearchContext;
            var7 = var3.bind(var4)(var13);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var6 = var3.bind(var4)(var7);
            var4 = _closure1_slot4;
            var9 = var4.getState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getQueryString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var9.bind(var4)(var13, var3);
            var3 = var4.getState;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getTextInputValue;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var3.bind(var4)(var13, var2);
            var12 = _closure1_slot1;
            var2 = 6;
            var2 = var14[var2];
            var4 = var12.bind(var5)(var2);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot7;
            var2 = var1.SEARCH_EMPTY_MESSAGE_RESULT_MOBILE;
            var1 = {};
            var9 = 4;
            var15 = var14[var9];
            var16 = var12.bind(var5)(var15);
            var15 = var16.getSessionId;
            var15 = var15.bind(var16)(var13);
            var1['search_session_id'] = var15;
            var15 = var14[var9];
            var16 = var12.bind(var5)(var15);
            var15 = var16.getLocation;
            var15 = var15.bind(var16)(var13);
            var1['search_location'] = var15;
            var9 = var14[var9];
            var12 = var12.bind(var5)(var9);
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
            if(var7) { _fun0007_ip = 33; continue _fun0007 }
case 34:
            var5 = var6.type;
case 33:
            var1['channel_type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 32:
            var1 = undefined;
            return var1;
        }
    };
    var2['trackSearchEmptyMessageResult'] = var7;
    var7 = function trackSearchClosed(arg1) {
        var1 = arg1;
        var4 = var1.searchContext;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.terminate;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['trackSearchClosed'] = var7;
    var7 = function trackSearchIndexing(arg1) {
        var1 = arg1;
        var8 = var1.searchContext;
        var10 = var1.isHistoricalIndexing;
        var6 = var1.documentsIndexed;
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 6;
        var3 = var9[var1];
        var1 = undefined;
        var5 = var7.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot7;
        var3 = var2.SEARCH_V2_INDEXING_VIEWED;
        var2 = {};
        var2['is_historical_indexing'] = var10;
        var2['documents_indexed'] = var6;
        var6 = 4;
        var10 = var9[var6];
        var11 = var7.bind(var1)(var10);
        var10 = var11.getSelectedTab;
        var10 = var10.bind(var11)(var8);
        var2['search_tab_selected'] = var10;
        var10 = var9[var6];
        var11 = var7.bind(var1)(var10);
        var10 = var11.getLocation;
        var10 = var10.bind(var11)(var8);
        var2['search_location'] = var10;
        var10 = var9[var6];
        var11 = var7.bind(var1)(var10);
        var10 = var11.getSessionId;
        var10 = var10.bind(var11)(var8);
        var2['search_session_id'] = var10;
        var6 = var9[var6];
        var7 = var7.bind(var1)(var6);
        var6 = var7.getQueryId;
        var6 = var6.bind(var7)(var8);
        var2['search_query_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackSearchIndexing'] = var7;
    var7 = function trackSearchHistoryClicked(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var10 = var1.searchContext;
            var3 = var1.searchHistoryItemType;
            var5 = var1.channelId;
            var4 = _closure1_slot3;
            var1 = var4.getChannel;
            var8 = var1.bind(var4)(var5);
            var1 = _closure1_slot5;
            var6 = var1[var3];
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 6;
            var3 = var11[var1];
            var1 = undefined;
            var5 = var9.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot7;
            var3 = var2.SEARCH_V2_HISTORY_CLICKED;
            var2 = {};
            var7 = 4;
            var12 = var11[var7];
            var13 = var9.bind(var1)(var12);
            var12 = var13.getSelectedTab;
            var12 = var12.bind(var13)(var10);
            var2['search_tab_selected'] = var12;
            var12 = var11[var7];
            var13 = var9.bind(var1)(var12);
            var12 = var13.getLocation;
            var12 = var12.bind(var13)(var10);
            var2['search_location'] = var12;
            var7 = var11[var7];
            var9 = var9.bind(var1)(var7);
            var7 = var9.getSessionId;
            var7 = var7.bind(var9)(var10);
            var2['search_session_id'] = var7;
            var7 = null;
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0008_ip = 35; continue _fun0008 }
case 36:
            var7 = var8.type;
case 35:
            var2['search_result_channel_type'] = var7;
            var2['search_history_type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var2['trackSearchHistoryClicked'] = var7;
    var7 = function trackSuggestedSearchClicked(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var9 = var1.searchContext;
            var4 = var1.channelId;
            var3 = _closure1_slot3;
            var1 = var3.getChannel;
            var7 = var1.bind(var3)(var4);
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 6;
            var3 = var10[var1];
            var1 = undefined;
            var5 = var8.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot7;
            var3 = var2.SEARCH_V2_SUGGESTED_CLICKED;
            var2 = {};
            var6 = 4;
            var11 = var10[var6];
            var12 = var8.bind(var1)(var11);
            var11 = var12.getSelectedTab;
            var11 = var11.bind(var12)(var9);
            var2['search_tab_selected'] = var11;
            var11 = var10[var6];
            var12 = var8.bind(var1)(var11);
            var11 = var12.getLocation;
            var11 = var11.bind(var12)(var9);
            var2['search_location'] = var11;
            var6 = var10[var6];
            var8 = var8.bind(var1)(var6);
            var6 = var8.getSessionId;
            var6 = var6.bind(var8)(var9);
            var2['search_session_id'] = var6;
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0009_ip = 37; continue _fun0009 }
case 38:
            var6 = var7.type;
case 37:
            var2['search_result_channel_type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var2['trackSuggestedSearchClicked'] = var7;
    var7 = function trackSearchFilterAdd(arg1) {
        var1 = arg1;
        var11 = var1.searchContext;
        var8 = var1.searchTokenType;
        var6 = var1.location;
        var10 = _closure1_slot1;
        var12 = _closure1_slot2;
        var1 = 6;
        var2 = var12[var1];
        var1 = undefined;
        var5 = var10.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot7;
        var3 = var2.SEARCH_V2_FILTER_ADD;
        var2 = {};
        var9 = 4;
        var13 = var12[var9];
        var14 = var10.bind(var1)(var13);
        var13 = var14.getSelectedTab;
        var13 = var13.bind(var14)(var11);
        var2['search_tab_selected'] = var13;
        var13 = var12[var9];
        var14 = var10.bind(var1)(var13);
        var13 = var14.getLocation;
        var13 = var13.bind(var14)(var11);
        var2['search_location'] = var13;
        var13 = var12[var9];
        var14 = var10.bind(var1)(var13);
        var13 = var14.getSessionId;
        var13 = var13.bind(var14)(var11);
        var2['search_session_id'] = var13;
        var9 = var12[var9];
        var10 = var10.bind(var1)(var9);
        var9 = var10.getQueryId;
        var9 = var9.bind(var10)(var11);
        var2['search_query_id'] = var9;
        var7 = _closure1_slot8;
        var7 = var7.bind(var1)(var8);
        var2['search_filter_type'] = var7;
        var2['location'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackSearchFilterAdd'] = var7;
    var7 = function trackSearchFilterRemove(arg1) {
        var1 = arg1;
        var11 = var1.searchContext;
        var8 = var1.searchTokenType;
        var6 = var1.isDefault;
        var10 = _closure1_slot1;
        var12 = _closure1_slot2;
        var1 = 6;
        var2 = var12[var1];
        var1 = undefined;
        var5 = var10.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot7;
        var3 = var2.SEARCH_V2_FILTER_REMOVE;
        var2 = {};
        var9 = 4;
        var13 = var12[var9];
        var14 = var10.bind(var1)(var13);
        var13 = var14.getSelectedTab;
        var13 = var13.bind(var14)(var11);
        var2['search_tab_selected'] = var13;
        var13 = var12[var9];
        var14 = var10.bind(var1)(var13);
        var13 = var14.getLocation;
        var13 = var13.bind(var14)(var11);
        var2['search_location'] = var13;
        var13 = var12[var9];
        var14 = var10.bind(var1)(var13);
        var13 = var14.getSessionId;
        var13 = var13.bind(var14)(var11);
        var2['search_session_id'] = var13;
        var9 = var12[var9];
        var10 = var10.bind(var1)(var9);
        var9 = var10.getQueryId;
        var9 = var9.bind(var10)(var11);
        var2['search_query_id'] = var9;
        var7 = _closure1_slot8;
        var7 = var7.bind(var1)(var8);
        var2['search_filter_type'] = var7;
        var2['is_default_search_filter'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackSearchFilterRemove'] = var7;
    var7 = function trackSearchTabSelected(arg1) {
        var1 = arg1;
        var8 = var1.searchContext;
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 6;
        var3 = var9[var1];
        var1 = undefined;
        var5 = var7.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot7;
        var3 = var2.SEARCH_V2_TAB_SELECTED;
        var2 = {};
        var6 = 4;
        var10 = var9[var6];
        var11 = var7.bind(var1)(var10);
        var10 = var11.getSessionId;
        var10 = var10.bind(var11)(var8);
        var2['search_session_id'] = var10;
        var10 = var9[var6];
        var11 = var7.bind(var1)(var10);
        var10 = var11.getQueryId;
        var10 = var10.bind(var11)(var8);
        var2['search_query_id'] = var10;
        var10 = var9[var6];
        var11 = var7.bind(var1)(var10);
        var10 = var11.getSelectedTab;
        var10 = var10.bind(var11)(var8);
        var2['search_tab_selected'] = var10;
        var6 = var9[var6];
        var7 = var7.bind(var1)(var6);
        var6 = var7.getLocation;
        var6 = var6.bind(var7)(var8);
        var2['search_location'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackSearchTabSelected'] = var7;
    var4 = function trackSearchJumpToMessage(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var10 = var1.searchContext;
            var6 = var1.channelId;
            var3 = _closure1_slot3;
            var1 = var3.getChannel;
            var8 = var1.bind(var3)(var6);
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 6;
            var3 = var11[var1];
            var1 = undefined;
            var5 = var9.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot7;
            var3 = var2.SEARCH_V2_JUMP_TO_MESSAGE;
            var2 = {};
            var7 = 4;
            var12 = var11[var7];
            var13 = var9.bind(var1)(var12);
            var12 = var13.getSelectedTab;
            var12 = var12.bind(var13)(var10);
            var2['search_tab_selected'] = var12;
            var12 = var11[var7];
            var13 = var9.bind(var1)(var12);
            var12 = var13.getLocation;
            var12 = var12.bind(var13)(var10);
            var2['search_location'] = var12;
            var12 = var11[var7];
            var13 = var9.bind(var1)(var12);
            var12 = var13.getSessionId;
            var12 = var12.bind(var13)(var10);
            var2['search_session_id'] = var12;
            var7 = var11[var7];
            var9 = var9.bind(var1)(var7);
            var7 = var9.getQueryId;
            var7 = var7.bind(var9)(var10);
            var2['search_query_id'] = var7;
            var7 = null;
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0010_ip = 39; continue _fun0010 }
case 40:
            var7 = var8.type;
case 39:
            var2['search_result_channel_type'] = var7;
            var2['search_result_channel_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var2['trackSearchJumpToMessage'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/tracking/Tracking.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();