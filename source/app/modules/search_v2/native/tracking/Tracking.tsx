// app/modules/search_v2/native/tracking/Tracking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: toAnalyticsSearchTab
        michal = _closure1_slot7;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: toAnalyticsSearchFilterType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.FILTER_FROM;
            if(!(zuuluu !== michal)) { _fun00002_ip = 159; continue _fun00001 }
 23:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.FILTER_MENTIONS;
            if(!(zuuluu !== michal)) { _fun00002_ip = 151; continue _fun00001 }
 37:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.FILTER_IN;
            if(!(zuuluu !== michal)) { _fun00002_ip = 143; continue _fun00001 }
 51:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.FILTER_HAS;
            if(!(zuuluu !== michal)) { _fun00002_ip = 135; continue _fun00001 }
 65:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.FILTER_ON;
            if(!(zuuluu !== michal)) { _fun00002_ip = 127; continue _fun00001 }
 79:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.FILTER_AFTER;
            if(!(zuuluu !== michal)) { _fun00002_ip = 119; continue _fun00001 }
 93:
            entity = _closure1_slot9;
            entity = entity.FILTER_BEFORE;
            if(!(entity !== michal)) { _fun00002_ip = 111; continue _fun00001 }
 107:
            entity = null;
            return entity;
 111:
            entity = 'filter_before';
            return entity;
 119:
            entity = 'filter_after';
            return entity;
 127:
            entity = 'filter_on';
            return entity;
 135:
            entity = 'filter_has';
            return entity;
 143:
            entity = 'filter_in';
            return entity;
 151:
            entity = 'filter_mentions';
            return entity;
 159:
            entity = 'filter_from';
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: toAnalyticsSearchLocation
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = _closure1_slot10;
            michal = michal.GUILD;
            if(!(michal !== zuuluu)) { _fun00004_ip = 150; continue _fun00003 }
 28:
            michal = _closure1_slot10;
            michal = michal.GUILD_CHANNEL;
            if(!(michal !== zuuluu)) { _fun00004_ip = 138; continue _fun00003 }
 42:
            michal = _closure1_slot10;
            michal = michal.THREAD;
            if(!(michal !== zuuluu)) { _fun00004_ip = 138; continue _fun00003 }
 56:
            michal = _closure1_slot10;
            michal = michal.CHANNEL;
            if(!(michal !== zuuluu)) { _fun00004_ip = 126; continue _fun00003 }
 70:
            michal = _closure1_slot10;
            michal = michal.DMS;
            if(!(michal !== zuuluu)) { _fun00004_ip = 114; continue _fun00003 }
 84:
            michal = _closure1_slot10;
            michal = michal.FAVORITES;
            if(!(michal !== zuuluu)) { _fun00004_ip = 102; continue _fun00003 }
 98:
            michal = undefined;
            return michal;
 102:
            michal = _closure1_slot5;
            michal = michal.FAVORITES;
            return michal;
 114:
            michal = _closure1_slot5;
            michal = michal.DM_LIST;
            return michal;
 126:
            michal = _closure1_slot5;
            michal = michal.DM_CHANNEL;
            return michal;
 138:
            michal = _closure1_slot5;
            michal = michal.GUILD_CHANNEL;
            return michal;
 150:
            entity = _closure1_slot5;
            entity = entity.GUILD;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: collectSearchAnalyticsMetadata
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot1;
            entity = _closure1_slot2;
            oscard = 5;
            entity = entity[oscard];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.getSelectedSearchTab;
            option = entity.bind(zuuluu)(tangon);
            entity = {};
            golfie = null;
            zuuluu = option;
            if(!(golfie != zuuluu)) { _fun00006_ip = 61; continue _fun00005 }
 52:
            golfie = _closure1_slot11;
            zuuluu = golfie.bind(report)(option);
 61:
            entity['search_tab_selected'] = zuuluu;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(report)(tangon);
            entity['search_location'] = zuuluu;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            golfie = michal[oscard];
            option = zuuluu.bind(report)(golfie);
            golfie = option.getSessionId;
            golfie = golfie.bind(option)(tangon);
            entity['search_session_id'] = golfie;
            michal = michal[oscard];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.getQueryId;
            michal = michal.bind(zuuluu)(tangon);
            entity['search_query_id'] = michal;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.AnalyticsSearchLocations;
    var _closure1_slot5 = option;
    option = tangon.SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY;
    var _closure1_slot6 = option;
    tangon = tangon.SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.AnalyticEvents;
    var _closure1_slot8 = option;
    option = tangon.SearchTokenTypes;
    var _closure1_slot9 = option;
    tangon = tangon.SearchTypes;
    var _closure1_slot10 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    foxtra = Object.create(tangon, {constructor: {value: option}});
    romeon = 'SearchTracking';
    tangon = new foxtra[option](romeon, yankee);
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/tracking/Tracking.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: trackSearchOpened
        entity = argFoo;
        golfie = entity.searchContext;
        verify = entity.visibleSearchTabs;
        tangon = _closure1_slot14;
        entity = undefined;
        oscard = tangon.bind(entity)(golfie);
        report = _closure1_slot4;
        option = report.getState;
        tangon = function(argFoo) {
            michal = argFoo;
            entity = michal.getQueryString;
            entity = entity.bind(michal)();
            return entity;
        };
        option = option.bind(report)(golfie, tangon);
        tangon = report.getState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getTextInputValue;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = tangon.bind(report)(golfie, zuuluu);
        zuuluu = verify.length;
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        zuuluu = 6;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot8;
        zuuluu = michal.SEARCH_V2_OPENED;
        michal = {};
        yankee = michal;
        offset = oscard;
        oscard = copyDataProperties(yankee, offset);
        oscard = 'visible_search_tabs';
        michal[oscard] = verify;
        oscard = option.trim;
        oscard = oscard.bind(option)();
        option = oscard.length;
        oscard = 'search_query_length';
        michal[oscard] = option;
        oscard = golfie.trim;
        oscard = oscard.bind(golfie)();
        golfie = oscard.length;
        oscard = 'search_query_content_length';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchOpened'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchClosed
        entity = argFoo;
        option = entity.searchContext;
        zuuluu = _closure1_slot14;
        entity = undefined;
        romeon = zuuluu.bind(entity)(option);
        golfie = _closure1_slot1;
        verify = _closure1_slot2;
        zuuluu = 6;
        zuuluu = verify[zuuluu];
        report = golfie.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot8;
        zuuluu = michal.SEARCH_V2_CLOSED;
        michal = {};
        foxtra = michal;
        oscard = copyDataProperties(foxtra, romeon);
        oscard = 5;
        offset = verify[oscard];
        yankee = golfie.bind(entity)(offset);
        offset = yankee.getSearchCount;
        yankee = offset.bind(yankee)(option);
        offset = 'num_searches';
        michal[offset] = yankee;
        offset = verify[oscard];
        yankee = golfie.bind(entity)(offset);
        offset = yankee.getSearchCountWithoutFilters;
        yankee = offset.bind(yankee)(option);
        offset = 'num_searches_without_filters_applied';
        michal[offset] = yankee;
        oscard = verify[oscard];
        golfie = golfie.bind(entity)(oscard);
        oscard = golfie.getSearchWithFiltersCount;
        golfie = oscard.bind(golfie)(option);
        oscard = 'num_searches_with_filters_applied';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchClosed'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultEmpty
        entity = argFoo;
        golfie = entity.searchContext;
        tangon = _closure1_slot14;
        entity = undefined;
        oscard = tangon.bind(entity)(golfie);
        report = _closure1_slot4;
        option = report.getState;
        tangon = function(argFoo) {
            michal = argFoo;
            entity = michal.getQueryString;
            entity = entity.bind(michal)();
            return entity;
        };
        option = option.bind(report)(golfie, tangon);
        tangon = report.getState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getTextInputValue;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = tangon.bind(report)(golfie, zuuluu);
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        zuuluu = 6;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot8;
        zuuluu = michal.SEARCH_V2_RESULT_EMPTY;
        michal = {};
        offset = michal;
        verify = oscard;
        oscard = copyDataProperties(offset, verify);
        oscard = option.trim;
        oscard = oscard.bind(option)();
        option = oscard.length;
        oscard = 'search_query_length';
        michal[oscard] = option;
        oscard = golfie.trim;
        oscard = oscard.bind(golfie)();
        golfie = oscard.length;
        oscard = 'search_query_content_length';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultEmpty'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultMessagesEmpty
        entity = argFoo;
        golfie = entity.searchContext;
        tangon = _closure1_slot14;
        entity = undefined;
        oscard = tangon.bind(entity)(golfie);
        report = _closure1_slot4;
        option = report.getState;
        tangon = function(argFoo) {
            michal = argFoo;
            entity = michal.getQueryString;
            entity = entity.bind(michal)();
            return entity;
        };
        option = option.bind(report)(golfie, tangon);
        tangon = report.getState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getTextInputValue;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = tangon.bind(report)(golfie, zuuluu);
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        zuuluu = 6;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot8;
        zuuluu = michal.SEARCH_V2_RESULT_MESSAGES_EMPTY;
        michal = {};
        offset = michal;
        verify = oscard;
        oscard = copyDataProperties(offset, verify);
        oscard = option.trim;
        oscard = oscard.bind(option)();
        option = oscard.length;
        oscard = 'search_query_length';
        michal[oscard] = option;
        oscard = golfie.trim;
        oscard = oscard.bind(golfie)();
        golfie = oscard.length;
        oscard = 'search_query_content_length';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultMessagesEmpty'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchIndexing
        entity = argFoo;
        tangon = entity.searchContext;
        option = entity.isHistoricalIndexing;
        golfie = entity.documentsIndexed;
        zuuluu = _closure1_slot14;
        entity = undefined;
        verify = zuuluu.bind(entity)(tangon);
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        zuuluu = 6;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot8;
        zuuluu = michal.SEARCH_V2_INDEXING_VIEWED;
        michal = {};
        michal['is_historical_indexing'] = option;
        michal['documents_indexed'] = golfie;
        offset = michal;
        oscard = copyDataProperties(offset, verify);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchIndexing'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchHistoryClicked
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = entity.searchContext;
            tangon = entity.searchHistoryItemType;
            oscard = entity.channelId;
            zuuluu = _closure1_slot14;
            entity = undefined;
            offset = zuuluu.bind(entity)(report);
            report = _closure1_slot3;
            zuuluu = report.getChannel;
            oscard = zuuluu.bind(report)(oscard);
            zuuluu = _closure1_slot6;
            golfie = zuuluu[tangon];
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 6;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot8;
            zuuluu = michal.SEARCH_V2_HISTORY_CLICKED;
            michal = {};
            yankee = michal;
            option = copyDataProperties(yankee, offset);
            option = null;
            verify = option == oscard;
            option = undefined;
            if(verify) { _fun00008_ip = 117; continue _fun00007 }
 112:
            option = oscard.type;
 117:
            oscard = 'search_result_channel_type';
            michal[oscard] = option;
            oscard = 'search_history_type';
            michal[oscard] = golfie;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchHistoryClicked'] = tangon;
    tangon = function(argFoo) { // Original name: trackSuggestedSearchClicked
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            tangon = entity.searchContext;
            report = entity.channelId;
            zuuluu = _closure1_slot14;
            entity = undefined;
            verify = zuuluu.bind(entity)(tangon);
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            oscard = zuuluu.bind(tangon)(report);
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 6;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot8;
            zuuluu = michal.SEARCH_V2_SUGGESTED_CLICKED;
            michal = {};
            offset = michal;
            golfie = copyDataProperties(offset, verify);
            golfie = null;
            option = golfie == oscard;
            golfie = undefined;
            if(option) { _fun00010_ip = 103; continue _fun00009 }
 98:
            golfie = oscard.type;
 103:
            oscard = 'search_result_channel_type';
            michal[oscard] = golfie;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSuggestedSearchClicked'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultClicked
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            report = entity.searchContext;
            romeon = entity.channelId;
            foxtra = entity.messageId;
            yankee = entity.userId;
            backup = entity.index;
            golfie = entity.totalSearchResults;
            zuuluu = _closure1_slot14;
            entity = undefined;
            verify = zuuluu.bind(entity)(report);
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            offset = zuuluu.bind(tangon)(romeon);
            tangon = _closure1_slot4;
            option = tangon.getState;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.getQueryString;
                entity = entity.bind(michal)();
                return entity;
            };
            sizing = option.bind(tangon)(report, zuuluu);
            option = tangon.getState;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.getTextInputValue;
                entity = entity.bind(michal)();
                return entity;
            };
            kiloes = option.bind(tangon)(report, zuuluu);
            zuuluu = tangon.getState;
            michal = function(argFoo) {
                michal = argFoo;
                entity = michal.isInitialSearchQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            option = zuuluu.bind(tangon)(report, michal);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot8;
            zuuluu = michal.SEARCH_V2_RESULT_CLICKED;
            michal = {};
            update = michal;
            echoed = verify;
            verify = copyDataProperties(update, echoed);
            verify = null;
            result = verify == offset;
            output = undefined;
            if(result) { _fun00012_ip = 190; continue _fun00011 }
 185:
            output = offset.type;
 190:
            offset = 'search_result_channel_type';
            michal[offset] = output;
            offset = sizing.trim;
            offset = offset.bind(sizing)();
            sizing = offset.length;
            offset = 'search_query_length';
            michal[offset] = sizing;
            offset = kiloes.trim;
            offset = offset.bind(kiloes)();
            kiloes = offset.length;
            offset = 'search_query_content_length';
            michal[offset] = kiloes;
            offset = 'search_result_index';
            michal[offset] = backup;
            offset = 'search_result_message_id';
            michal[offset] = foxtra;
            offset = 'search_result_channel_id';
            michal[offset] = romeon;
            offset = 'search_result_user_id';
            michal[offset] = yankee;
            verify = null;
            if(option) { _fun00012_ip = 305; continue _fun00011 }
 302:
            verify = golfie;
 305:
            golfie = 'total_search_results';
            michal[golfie] = verify;
            golfie = 'is_initial_search_query';
            michal[golfie] = option;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 7;
            oscard = option[oscard];
            oscard = golfie.bind(entity)(oscard);
            golfie = oscard.SearchResultExactCountEnabled;
            oscard = golfie.getSetting;
            golfie = oscard.bind(golfie)();
            oscard = 'search_results_exact_counts_enabled';
            michal[oscard] = golfie;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchResultClicked'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultsViewedAggregate
        entity = argFoo;
        zuuluu = entity.searchContext;
        offset = entity.searchTab;
        verify = entity.farthestIndexSeen;
        option = entity.totalResultsViewedUnique;
        golfie = entity.totalResultsViewed;
        michal = _closure1_slot14;
        entity = undefined;
        romeon = michal.bind(entity)(zuuluu);
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        michal = 6;
        michal = tangon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot8;
        zuuluu = michal.SEARCH_V2_RESULTS_VIEWED_AGGREGATE;
        michal = {};
        foxtra = michal;
        yankee = copyDataProperties(foxtra, romeon);
        oscard = _closure1_slot11;
        offset = oscard.bind(entity)(offset);
        oscard = 'search_tab_viewed';
        michal[oscard] = offset;
        oscard = 'search_farthest_seen_index';
        michal[oscard] = verify;
        oscard = 'search_results_viewed_unique';
        michal[oscard] = option;
        oscard = 'search_results_viewed';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultsViewedAggregate'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchFiltersOpened
        entity = argFoo;
        tangon = entity.searchContext;
        zuuluu = _closure1_slot14;
        entity = undefined;
        report = zuuluu.bind(entity)(tangon);
        tangon = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 6;
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.trackWithMetadata;
        michal = _closure1_slot8;
        michal = michal.SEARCH_V2_FILTERS_OPENED;
        michal = zuuluu.bind(tangon)(michal, report);
        return entity;
    };
    zuuluu['trackSearchFiltersOpened'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchFiltersApplied
        entity = argFoo;
        tangon = entity.searchContext;
        zuuluu = _closure1_slot14;
        entity = undefined;
        report = zuuluu.bind(entity)(tangon);
        tangon = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 6;
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.trackWithMetadata;
        michal = _closure1_slot8;
        michal = michal.SEARCH_V2_FILTERS_APPLIED;
        michal = zuuluu.bind(tangon)(michal, report);
        return entity;
    };
    zuuluu['trackSearchFiltersApplied'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchFilterAdd
        entity = argFoo;
        zuuluu = entity.searchContext;
        option = entity.searchTokenType;
        golfie = entity.location;
        michal = _closure1_slot14;
        entity = undefined;
        offset = michal.bind(entity)(zuuluu);
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        michal = 6;
        michal = tangon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot8;
        zuuluu = michal.SEARCH_V2_FILTER_ADD;
        michal = {};
        yankee = michal;
        verify = copyDataProperties(yankee, offset);
        oscard = _closure1_slot12;
        option = oscard.bind(entity)(option);
        oscard = 'search_filter_type';
        michal[oscard] = option;
        oscard = 'location';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchFilterAdd'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchFilterRemove
        entity = argFoo;
        zuuluu = entity.searchContext;
        option = entity.searchTokenType;
        golfie = entity.isDefault;
        michal = _closure1_slot14;
        entity = undefined;
        offset = michal.bind(entity)(zuuluu);
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        michal = 6;
        michal = tangon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot8;
        zuuluu = michal.SEARCH_V2_FILTER_REMOVE;
        michal = {};
        yankee = michal;
        verify = copyDataProperties(yankee, offset);
        oscard = _closure1_slot12;
        option = oscard.bind(entity)(option);
        oscard = 'search_filter_type';
        michal[oscard] = option;
        oscard = 'is_default_search_filter';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchFilterRemove'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchTabSelected
        entity = argFoo;
        tangon = entity.searchContext;
        zuuluu = _closure1_slot14;
        entity = undefined;
        report = zuuluu.bind(entity)(tangon);
        tangon = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 6;
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.trackWithMetadata;
        michal = _closure1_slot8;
        michal = michal.SEARCH_V2_TAB_SELECTED;
        michal = zuuluu.bind(tangon)(michal, report);
        return entity;
    };
    zuuluu['trackSearchTabSelected'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchJumpToMessage
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            tangon = entity.searchContext;
            golfie = entity.channelId;
            zuuluu = _closure1_slot14;
            entity = undefined;
            offset = zuuluu.bind(entity)(tangon);
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            oscard = zuuluu.bind(tangon)(golfie);
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 6;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot8;
            zuuluu = michal.SEARCH_V2_JUMP_TO_MESSAGE;
            michal = {};
            yankee = michal;
            option = copyDataProperties(yankee, offset);
            option = null;
            verify = option == oscard;
            option = undefined;
            if(verify) { _fun00014_ip = 103; continue _fun00013 }
 98:
            option = oscard.type;
 103:
            oscard = 'search_result_channel_type';
            michal[oscard] = option;
            oscard = 'search_result_channel_id';
            michal[oscard] = golfie;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchJumpToMessage'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchStarted
        entity = argFoo;
        golfie = entity.searchContext;
        tangon = _closure1_slot14;
        entity = undefined;
        oscard = tangon.bind(entity)(golfie);
        report = _closure1_slot4;
        option = report.getState;
        tangon = function(argFoo) {
            michal = argFoo;
            entity = michal.getQueryString;
            entity = entity.bind(michal)();
            return entity;
        };
        option = option.bind(report)(golfie, tangon);
        tangon = report.getState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getTextInputValue;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = tangon.bind(report)(golfie, zuuluu);
        zuuluu = oscard.search_query_id;
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        zuuluu = 6;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot8;
        zuuluu = michal.SEARCH_V2_STARTED;
        michal = {};
        offset = michal;
        verify = oscard;
        oscard = copyDataProperties(offset, verify);
        oscard = option.trim;
        oscard = oscard.bind(option)();
        option = oscard.length;
        oscard = 'search_query_length';
        michal[oscard] = option;
        oscard = golfie.trim;
        oscard = oscard.bind(golfie)();
        golfie = oscard.length;
        oscard = 'search_query_content_length';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchStarted'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultCountsViewed
        entity = argFoo;
        report = entity.searchContext;
        result = entity.totalMessageResults;
        output = entity.totalMediaResults;
        sizing = entity.totalPinsResults;
        kiloes = entity.totalLinksResults;
        backup = entity.totalFilesResults;
        foxtra = entity.totalMembersResults;
        romeon = entity.totalGuildChannelsResults;
        yankee = entity.totalPeopleResults;
        zuuluu = _closure1_slot14;
        entity = undefined;
        golfie = zuuluu.bind(entity)(report);
        tangon = _closure1_slot4;
        option = tangon.getState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getQueryString;
            entity = entity.bind(michal)();
            return entity;
        };
        offset = option.bind(tangon)(report, zuuluu);
        zuuluu = tangon.getState;
        michal = function(argFoo) {
            michal = argFoo;
            entity = michal.getTextInputValue;
            entity = entity.bind(michal)();
            return entity;
        };
        verify = zuuluu.bind(tangon)(report, michal);
        zuuluu = _closure1_slot1;
        option = _closure1_slot2;
        michal = 6;
        michal = option[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot8;
        zuuluu = michal.SEARCH_V2_RESULT_COUNTS_VIEWED;
        michal = {};
        update = michal;
        echoed = golfie;
        golfie = copyDataProperties(update, echoed);
        golfie = 'total_message_results';
        michal[golfie] = result;
        golfie = 'total_media_results';
        michal[golfie] = output;
        golfie = 'total_pins_results';
        michal[golfie] = sizing;
        golfie = 'total_links_results';
        michal[golfie] = kiloes;
        golfie = 'total_files_results';
        michal[golfie] = backup;
        golfie = 'total_members_results';
        michal[golfie] = foxtra;
        golfie = 'total_guild_channels_results';
        michal[golfie] = romeon;
        golfie = 'total_people_results';
        michal[golfie] = yankee;
        golfie = offset.trim;
        golfie = golfie.bind(offset)();
        offset = golfie.length;
        golfie = 'search_query_length';
        michal[golfie] = offset;
        golfie = verify.trim;
        golfie = golfie.bind(verify)();
        verify = golfie.length;
        golfie = 'search_query_content_length';
        michal[golfie] = verify;
        golfie = _closure1_slot0;
        oscard = 7;
        oscard = option[oscard];
        oscard = golfie.bind(entity)(oscard);
        golfie = oscard.SearchResultExactCountEnabled;
        oscard = golfie.getSetting;
        golfie = oscard.bind(golfie)();
        oscard = 'search_results_exact_counts_enabled';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultCountsViewed'] = tangon;
    michal = function(argFoo) { // Original name: trackSearchResultsViewed
        entity = argFoo;
        report = entity.searchContext;
        romeon = entity.tab;
        yankee = entity.totalSearchResults;
        zuuluu = _closure1_slot14;
        entity = undefined;
        golfie = zuuluu.bind(entity)(report);
        tangon = _closure1_slot4;
        option = tangon.getState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getQueryString;
            entity = entity.bind(michal)();
            return entity;
        };
        offset = option.bind(tangon)(report, zuuluu);
        zuuluu = tangon.getState;
        michal = function(argFoo) {
            michal = argFoo;
            entity = michal.getTextInputValue;
            entity = entity.bind(michal)();
            return entity;
        };
        verify = zuuluu.bind(tangon)(report, michal);
        zuuluu = _closure1_slot1;
        option = _closure1_slot2;
        michal = 6;
        michal = option[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot8;
        zuuluu = michal.SEARCH_V2_RESULTS_VIEWED;
        michal = {};
        backup = michal;
        foxtra = golfie;
        golfie = copyDataProperties(backup, foxtra);
        golfie = 'search_tab_selected';
        michal[golfie] = romeon;
        golfie = 'total_search_results';
        michal[golfie] = yankee;
        golfie = offset.trim;
        golfie = golfie.bind(offset)();
        offset = golfie.length;
        golfie = 'search_query_length';
        michal[golfie] = offset;
        golfie = verify.trim;
        golfie = golfie.bind(verify)();
        verify = golfie.length;
        golfie = 'search_query_content_length';
        michal[golfie] = verify;
        golfie = _closure1_slot0;
        oscard = 7;
        oscard = option[oscard];
        oscard = golfie.bind(entity)(oscard);
        golfie = oscard.SearchResultExactCountEnabled;
        oscard = golfie.getSetting;
        golfie = oscard.bind(golfie)();
        oscard = 'search_results_exact_counts_enabled';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultsViewed'] = michal;
    return entity;
})();