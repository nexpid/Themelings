// app/modules/search_v2/tracking/Tracking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: toAnalyticsSearchTab
        michal = _closure1_slot6;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: toAnalyticsSearchFilterType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.FILTER_FROM;
            if(!(zuuluu !== michal)) { _fun00002_ip = 159; continue _fun00001 }
 23:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.FILTER_MENTIONS;
            if(!(zuuluu !== michal)) { _fun00002_ip = 151; continue _fun00001 }
 37:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.FILTER_IN;
            if(!(zuuluu !== michal)) { _fun00002_ip = 143; continue _fun00001 }
 51:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.FILTER_HAS;
            if(!(zuuluu !== michal)) { _fun00002_ip = 135; continue _fun00001 }
 65:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.FILTER_ON;
            if(!(zuuluu !== michal)) { _fun00002_ip = 127; continue _fun00001 }
 79:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.FILTER_AFTER;
            if(!(zuuluu !== michal)) { _fun00002_ip = 119; continue _fun00001 }
 93:
            entity = _closure1_slot8;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: toAnalyticsSearchLocation
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = _closure1_slot9;
            michal = michal.GUILD;
            if(!(michal !== zuuluu)) { _fun00004_ip = 150; continue _fun00003 }
 28:
            michal = _closure1_slot9;
            michal = michal.GUILD_CHANNEL;
            if(!(michal !== zuuluu)) { _fun00004_ip = 138; continue _fun00003 }
 42:
            michal = _closure1_slot9;
            michal = michal.THREAD;
            if(!(michal !== zuuluu)) { _fun00004_ip = 138; continue _fun00003 }
 56:
            michal = _closure1_slot9;
            michal = michal.CHANNEL;
            if(!(michal !== zuuluu)) { _fun00004_ip = 126; continue _fun00003 }
 70:
            michal = _closure1_slot9;
            michal = michal.DMS;
            if(!(michal !== zuuluu)) { _fun00004_ip = 114; continue _fun00003 }
 84:
            michal = _closure1_slot9;
            michal = michal.FAVORITES;
            if(!(michal !== zuuluu)) { _fun00004_ip = 102; continue _fun00003 }
 98:
            michal = undefined;
            return michal;
 102:
            michal = _closure1_slot4;
            michal = michal.FAVORITES;
            return michal;
 114:
            michal = _closure1_slot4;
            michal = michal.DM_LIST;
            return michal;
 126:
            michal = _closure1_slot4;
            michal = michal.DM_CHANNEL;
            return michal;
 138:
            michal = _closure1_slot4;
            michal = michal.GUILD_CHANNEL;
            return michal;
 150:
            entity = _closure1_slot4;
            entity = entity.GUILD;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: collectSearchAnalyticsMetadata
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 4;
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
            golfie = _closure1_slot10;
            zuuluu = golfie.bind(report)(option);
 61:
            entity['search_tab_selected'] = zuuluu;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.bind(report)(tangon);
            entity['search_location'] = zuuluu;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.getSessionId;
            michal = michal.bind(zuuluu)(tangon);
            entity['search_session_id'] = michal;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticsSearchLocations;
    var _closure1_slot4 = golfie;
    golfie = tangon.SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY;
    var _closure1_slot5 = golfie;
    tangon = tangon.SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot7 = golfie;
    golfie = tangon.SearchTokenTypes;
    var _closure1_slot8 = golfie;
    tangon = tangon.SearchTypes;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/tracking/Tracking.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: trackSearchOpened
        entity = argFoo;
        golfie = entity.searchContext;
        option = entity.visibleSearchTabs;
        zuuluu = _closure1_slot13;
        entity = undefined;
        oscard = zuuluu.bind(entity)(golfie);
        report = _closure1_slot3;
        tangon = report.getState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getQueryString;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = tangon.bind(report)(golfie, zuuluu);
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        zuuluu = 5;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot7;
        zuuluu = michal.SEARCH_V2_OPENED;
        michal = {};
        offset = michal;
        verify = oscard;
        oscard = copyDataProperties(offset, verify);
        oscard = 'visible_search_tabs';
        michal[oscard] = option;
        oscard = golfie.trim;
        oscard = oscard.bind(golfie)();
        golfie = oscard.length;
        oscard = 'search_query_length';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchOpened'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchClosed
        entity = argFoo;
        option = entity.searchContext;
        zuuluu = _closure1_slot13;
        entity = undefined;
        romeon = zuuluu.bind(entity)(option);
        golfie = _closure1_slot0;
        verify = _closure1_slot1;
        zuuluu = 5;
        zuuluu = verify[zuuluu];
        report = golfie.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot7;
        zuuluu = michal.SEARCH_V2_CLOSED;
        michal = {};
        foxtra = michal;
        oscard = copyDataProperties(foxtra, romeon);
        oscard = 4;
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
        zuuluu = _closure1_slot13;
        entity = undefined;
        oscard = zuuluu.bind(entity)(golfie);
        report = _closure1_slot3;
        tangon = report.getState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getQueryString;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = tangon.bind(report)(golfie, zuuluu);
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        zuuluu = 5;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot7;
        zuuluu = michal.SEARCH_V2_RESULT_EMPTY;
        michal = {};
        verify = michal;
        option = oscard;
        oscard = copyDataProperties(verify, option);
        oscard = golfie.trim;
        oscard = oscard.bind(golfie)();
        golfie = oscard.length;
        oscard = 'search_query_length';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultEmpty'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchIndexing
        entity = argFoo;
        tangon = entity.searchContext;
        option = entity.isHistoricalIndexing;
        golfie = entity.documentsIndexed;
        zuuluu = _closure1_slot13;
        entity = undefined;
        verify = zuuluu.bind(entity)(tangon);
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        zuuluu = 5;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot7;
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
            zuuluu = _closure1_slot13;
            entity = undefined;
            offset = zuuluu.bind(entity)(report);
            report = _closure1_slot2;
            zuuluu = report.getChannel;
            oscard = zuuluu.bind(report)(oscard);
            zuuluu = _closure1_slot5;
            golfie = zuuluu[tangon];
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot7;
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
            zuuluu = _closure1_slot13;
            entity = undefined;
            verify = zuuluu.bind(entity)(tangon);
            tangon = _closure1_slot2;
            zuuluu = tangon.getChannel;
            oscard = zuuluu.bind(tangon)(report);
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot7;
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
            golfie = entity.searchContext;
            report = entity.channelId;
            zuuluu = _closure1_slot13;
            entity = undefined;
            option = zuuluu.bind(entity)(golfie);
            tangon = _closure1_slot2;
            zuuluu = tangon.getChannel;
            oscard = zuuluu.bind(tangon)(report);
            report = _closure1_slot3;
            tangon = report.getState;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.getQueryString;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = tangon.bind(report)(golfie, zuuluu);
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot7;
            zuuluu = michal.SEARCH_V2_RESULT_CLICKED;
            michal = {};
            yankee = michal;
            offset = option;
            option = copyDataProperties(yankee, offset);
            option = null;
            verify = option == oscard;
            option = undefined;
            if(verify) { _fun00012_ip = 131; continue _fun00011 }
 126:
            option = oscard.type;
 131:
            oscard = 'search_result_channel_type';
            michal[oscard] = option;
            oscard = golfie.trim;
            oscard = oscard.bind(golfie)();
            golfie = oscard.length;
            oscard = 'search_query_length';
            michal[oscard] = golfie;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchResultClicked'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchFiltersOpened
        entity = argFoo;
        tangon = entity.searchContext;
        zuuluu = _closure1_slot13;
        entity = undefined;
        report = zuuluu.bind(entity)(tangon);
        tangon = _closure1_slot0;
        oscard = _closure1_slot1;
        zuuluu = 5;
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.trackWithMetadata;
        michal = _closure1_slot7;
        michal = michal.SEARCH_V2_FILTERS_OPENED;
        michal = zuuluu.bind(tangon)(michal, report);
        return entity;
    };
    zuuluu['trackSearchFiltersOpened'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchFiltersApplied
        entity = argFoo;
        tangon = entity.searchContext;
        zuuluu = _closure1_slot13;
        entity = undefined;
        report = zuuluu.bind(entity)(tangon);
        tangon = _closure1_slot0;
        oscard = _closure1_slot1;
        zuuluu = 5;
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.trackWithMetadata;
        michal = _closure1_slot7;
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
        michal = _closure1_slot13;
        entity = undefined;
        offset = michal.bind(entity)(zuuluu);
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot1;
        michal = 5;
        michal = tangon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot7;
        zuuluu = michal.SEARCH_V2_FILTER_ADD;
        michal = {};
        yankee = michal;
        verify = copyDataProperties(yankee, offset);
        oscard = _closure1_slot11;
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
        michal = _closure1_slot13;
        entity = undefined;
        offset = michal.bind(entity)(zuuluu);
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot1;
        michal = 5;
        michal = tangon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot7;
        zuuluu = michal.SEARCH_V2_FILTER_REMOVE;
        michal = {};
        yankee = michal;
        verify = copyDataProperties(yankee, offset);
        oscard = _closure1_slot11;
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
        zuuluu = _closure1_slot13;
        entity = undefined;
        report = zuuluu.bind(entity)(tangon);
        tangon = _closure1_slot0;
        oscard = _closure1_slot1;
        zuuluu = 5;
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.trackWithMetadata;
        michal = _closure1_slot7;
        michal = michal.SEARCH_V2_TAB_SELECTED;
        michal = zuuluu.bind(tangon)(michal, report);
        return entity;
    };
    zuuluu['trackSearchTabSelected'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchJumpToMessage
        entity = argFoo;
        tangon = entity.searchContext;
        zuuluu = _closure1_slot13;
        entity = undefined;
        report = zuuluu.bind(entity)(tangon);
        tangon = _closure1_slot0;
        oscard = _closure1_slot1;
        zuuluu = 5;
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.trackWithMetadata;
        michal = _closure1_slot7;
        michal = michal.SEARCH_V2_JUMP_TO_MESSAGE;
        michal = zuuluu.bind(tangon)(michal, report);
        return entity;
    };
    zuuluu['trackSearchJumpToMessage'] = tangon;
    michal = function(argFoo) { // Original name: trackSearchStarted
        entity = argFoo;
        golfie = entity.searchContext;
        zuuluu = _closure1_slot13;
        entity = undefined;
        oscard = zuuluu.bind(entity)(golfie);
        report = _closure1_slot3;
        tangon = report.getState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getQueryString;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = tangon.bind(report)(golfie, zuuluu);
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        zuuluu = 5;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot7;
        zuuluu = michal.SEARCH_V2_STARTED;
        michal = {};
        verify = michal;
        option = oscard;
        oscard = copyDataProperties(verify, option);
        oscard = golfie.trim;
        oscard = oscard.bind(golfie)();
        golfie = oscard.length;
        oscard = 'search_query_length';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchStarted'] = michal;
    return entity;
})();