// app/modules/search_v2/native/tracking/Tracking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: toAnalyticsSearchTab
        mike = _closure1_slot6;
        entity = argFoo;
        entity = mike[entity];
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: toAnalyticsSearchFilterType
        _fun112616: for(var _fun112616_ip = 0; ; ) switch(_fun112616_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot8;
            zulu = zulu.FILTER_FROM;
            if(!(zulu !== mike)) { _fun112616_ip = 159; continue _fun112616 }
 23:
            zulu = _closure1_slot8;
            zulu = zulu.FILTER_MENTIONS;
            if(!(zulu !== mike)) { _fun112616_ip = 151; continue _fun112616 }
 37:
            zulu = _closure1_slot8;
            zulu = zulu.FILTER_IN;
            if(!(zulu !== mike)) { _fun112616_ip = 143; continue _fun112616 }
 51:
            zulu = _closure1_slot8;
            zulu = zulu.FILTER_HAS;
            if(!(zulu !== mike)) { _fun112616_ip = 135; continue _fun112616 }
 65:
            zulu = _closure1_slot8;
            zulu = zulu.FILTER_ON;
            if(!(zulu !== mike)) { _fun112616_ip = 127; continue _fun112616 }
 79:
            zulu = _closure1_slot8;
            zulu = zulu.FILTER_AFTER;
            if(!(zulu !== mike)) { _fun112616_ip = 119; continue _fun112616 }
 93:
            entity = _closure1_slot8;
            entity = entity.FILTER_BEFORE;
            if(!(entity !== mike)) { _fun112616_ip = 111; continue _fun112616 }
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
        _fun112617: for(var _fun112617_ip = 0; ; ) switch(_fun112617_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = _closure1_slot9;
            mike = mike.GUILD;
            if(!(mike !== zulu)) { _fun112617_ip = 121; continue _fun112617 }
 25:
            mike = _closure1_slot9;
            mike = mike.GUILD_CHANNEL;
            if(!(mike !== zulu)) { _fun112617_ip = 109; continue _fun112617 }
 39:
            mike = _closure1_slot9;
            mike = mike.THREAD;
            if(!(mike !== zulu)) { _fun112617_ip = 109; continue _fun112617 }
 53:
            mike = _closure1_slot9;
            mike = mike.CHANNEL;
            if(!(mike !== zulu)) { _fun112617_ip = 97; continue _fun112617 }
 67:
            mike = _closure1_slot9;
            mike = mike.DMS;
            if(!(mike !== zulu)) { _fun112617_ip = 85; continue _fun112617 }
 81:
            mike = undefined;
            return mike;
 85:
            mike = _closure1_slot4;
            mike = mike.DM_LIST;
            return mike;
 97:
            mike = _closure1_slot4;
            mike = mike.DM_CHANNEL;
            return mike;
 109:
            mike = _closure1_slot4;
            mike = mike.GUILD_CHANNEL;
            return mike;
 121:
            entity = _closure1_slot4;
            entity = entity.GUILD;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: collectSearchAnalyticsMetadata
        _fun112618: for(var _fun112618_ip = 0; ; ) switch(_fun112618_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 4;
            entity = entity[oscar];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.getSelectedSearchTab;
            options = entity.bind(zulu)(tango);
            entity = {};
            golf = null;
            zulu = options;
            if(!(golf != zulu)) { _fun112618_ip = 61; continue _fun112618 }
 52:
            golf = _closure1_slot10;
            zulu = golf.bind(report)(options);
 61:
            entity['search_tab_selected'] = zulu;
            zulu = _closure1_slot12;
            zulu = zulu.bind(report)(tango);
            entity['search_location'] = zulu;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            zulu = zulu.bind(report)(mike);
            mike = zulu.getSessionId;
            mike = mike.bind(zulu)(tango);
            entity['search_session_id'] = mike;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.getSearchQueryString;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticsSearchLocations;
    var _closure1_slot4 = golf;
    golf = tango.SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY;
    var _closure1_slot5 = golf;
    tango = tango.SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot7 = golf;
    golf = tango.SearchTokenTypes;
    var _closure1_slot8 = golf;
    tango = tango.SearchTypes;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/tracking/Tracking.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: trackSearchOpened
        entity = argFoo;
        tango = entity.searchContext;
        options = entity.visibleSearchTabs;
        zulu = _closure1_slot13;
        entity = undefined;
        verify = zulu.bind(entity)(tango);
        zulu = _closure1_slot3;
        golf = zulu.bind(entity)(tango);
        tango = _closure1_slot0;
        report = _closure1_slot1;
        zulu = 5;
        zulu = report[zulu];
        report = tango.bind(entity)(zulu);
        tango = report.trackWithMetadata;
        mike = _closure1_slot7;
        zulu = mike.SEARCH_V2_OPENED;
        mike = {};
        offset = mike;
        oscar = copyDataProperties(offset, verify);
        oscar = 'visible_search_tabs';
        mike[oscar] = options;
        oscar = golf.trim;
        oscar = oscar.bind(golf)();
        golf = oscar.length;
        oscar = 'search_query_length';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackSearchOpened'] = tango;
    tango = function(argFoo) { // Original name: trackSearchClosed
        entity = argFoo;
        options = entity.searchContext;
        zulu = _closure1_slot13;
        entity = undefined;
        romeo = zulu.bind(entity)(options);
        golf = _closure1_slot0;
        verify = _closure1_slot1;
        zulu = 5;
        zulu = verify[zulu];
        report = golf.bind(entity)(zulu);
        tango = report.trackWithMetadata;
        mike = _closure1_slot7;
        zulu = mike.SEARCH_V2_CLOSED;
        mike = {};
        foxtrot = mike;
        oscar = copyDataProperties(foxtrot, romeo);
        oscar = 4;
        offset = verify[oscar];
        yankee = golf.bind(entity)(offset);
        offset = yankee.getSearchCount;
        yankee = offset.bind(yankee)(options);
        offset = 'num_searches';
        mike[offset] = yankee;
        offset = verify[oscar];
        yankee = golf.bind(entity)(offset);
        offset = yankee.getSearchCountWithoutFilters;
        yankee = offset.bind(yankee)(options);
        offset = 'num_searches_without_filters_applied';
        mike[offset] = yankee;
        oscar = verify[oscar];
        golf = golf.bind(entity)(oscar);
        oscar = golf.getSearchWithFiltersCount;
        golf = oscar.bind(golf)(options);
        oscar = 'num_searches_with_filters_applied';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackSearchClosed'] = tango;
    tango = function(argFoo) { // Original name: trackSearchResultEmpty
        entity = argFoo;
        tango = entity.searchContext;
        zulu = _closure1_slot13;
        entity = undefined;
        options = zulu.bind(entity)(tango);
        zulu = _closure1_slot3;
        golf = zulu.bind(entity)(tango);
        tango = _closure1_slot0;
        report = _closure1_slot1;
        zulu = 5;
        zulu = report[zulu];
        report = tango.bind(entity)(zulu);
        tango = report.trackWithMetadata;
        mike = _closure1_slot7;
        zulu = mike.SEARCH_V2_RESULT_EMPTY;
        mike = {};
        verify = mike;
        oscar = copyDataProperties(verify, options);
        oscar = golf.trim;
        oscar = oscar.bind(golf)();
        golf = oscar.length;
        oscar = 'search_query_length';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackSearchResultEmpty'] = tango;
    tango = function(argFoo) { // Original name: trackSearchIndexing
        entity = argFoo;
        tango = entity.searchContext;
        options = entity.isHistoricalIndexing;
        golf = entity.documentsIndexed;
        zulu = _closure1_slot13;
        entity = undefined;
        verify = zulu.bind(entity)(tango);
        tango = _closure1_slot0;
        report = _closure1_slot1;
        zulu = 5;
        zulu = report[zulu];
        report = tango.bind(entity)(zulu);
        tango = report.trackWithMetadata;
        mike = _closure1_slot7;
        zulu = mike.SEARCH_V2_INDEXING_VIEWED;
        mike = {};
        mike['is_historical_indexing'] = options;
        mike['documents_indexed'] = golf;
        offset = mike;
        oscar = copyDataProperties(offset, verify);
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackSearchIndexing'] = tango;
    tango = function(argFoo) { // Original name: trackSearchHistoryClicked
        _fun112623: for(var _fun112623_ip = 0; ; ) switch(_fun112623_ip) {
 0:
            entity = argFoo;
            report = entity.searchContext;
            tango = entity.searchHistoryItemType;
            oscar = entity.channelId;
            zulu = _closure1_slot13;
            entity = undefined;
            offset = zulu.bind(entity)(report);
            report = _closure1_slot2;
            zulu = report.getChannel;
            oscar = zulu.bind(report)(oscar);
            zulu = _closure1_slot5;
            golf = zulu[tango];
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 5;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.trackWithMetadata;
            mike = _closure1_slot7;
            zulu = mike.SEARCH_V2_HISTORY_CLICKED;
            mike = {};
            yankee = mike;
            options = copyDataProperties(yankee, offset);
            options = null;
            verify = options == oscar;
            options = undefined;
            if(verify) { _fun112623_ip = 117; continue _fun112623 }
 112:
            options = oscar.type;
 117:
            oscar = 'search_result_channel_type';
            mike[oscar] = options;
            oscar = 'search_history_type';
            mike[oscar] = golf;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackSearchHistoryClicked'] = tango;
    tango = function(argFoo) { // Original name: trackSuggestedSearchClicked
        _fun112624: for(var _fun112624_ip = 0; ; ) switch(_fun112624_ip) {
 0:
            entity = argFoo;
            tango = entity.searchContext;
            report = entity.channelId;
            zulu = _closure1_slot13;
            entity = undefined;
            verify = zulu.bind(entity)(tango);
            tango = _closure1_slot2;
            zulu = tango.getChannel;
            oscar = zulu.bind(tango)(report);
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 5;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.trackWithMetadata;
            mike = _closure1_slot7;
            zulu = mike.SEARCH_V2_SUGGESTED_CLICKED;
            mike = {};
            offset = mike;
            golf = copyDataProperties(offset, verify);
            golf = null;
            options = golf == oscar;
            golf = undefined;
            if(options) { _fun112624_ip = 103; continue _fun112624 }
 98:
            golf = oscar.type;
 103:
            oscar = 'search_result_channel_type';
            mike[oscar] = golf;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackSuggestedSearchClicked'] = tango;
    tango = function(argFoo) { // Original name: trackSearchResultClicked
        _fun112625: for(var _fun112625_ip = 0; ; ) switch(_fun112625_ip) {
 0:
            entity = argFoo;
            tango = entity.searchContext;
            oscar = entity.channelId;
            zulu = _closure1_slot13;
            entity = undefined;
            offset = zulu.bind(entity)(tango);
            report = _closure1_slot2;
            zulu = report.getChannel;
            oscar = zulu.bind(report)(oscar);
            zulu = _closure1_slot3;
            golf = zulu.bind(entity)(tango);
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 5;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.trackWithMetadata;
            mike = _closure1_slot7;
            zulu = mike.SEARCH_V2_RESULT_CLICKED;
            mike = {};
            yankee = mike;
            options = copyDataProperties(yankee, offset);
            options = null;
            verify = options == oscar;
            options = undefined;
            if(verify) { _fun112625_ip = 112; continue _fun112625 }
 107:
            options = oscar.type;
 112:
            oscar = 'search_result_channel_type';
            mike[oscar] = options;
            oscar = golf.trim;
            oscar = oscar.bind(golf)();
            golf = oscar.length;
            oscar = 'search_query_length';
            mike[oscar] = golf;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackSearchResultClicked'] = tango;
    tango = function(argFoo) { // Original name: trackSearchFiltersOpened
        entity = argFoo;
        tango = entity.searchContext;
        zulu = _closure1_slot13;
        entity = undefined;
        report = zulu.bind(entity)(tango);
        tango = _closure1_slot0;
        oscar = _closure1_slot1;
        zulu = 5;
        zulu = oscar[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.trackWithMetadata;
        mike = _closure1_slot7;
        mike = mike.SEARCH_V2_FILTERS_OPENED;
        mike = zulu.bind(tango)(mike, report);
        return entity;
    };
    zulu['trackSearchFiltersOpened'] = tango;
    tango = function(argFoo) { // Original name: trackSearchFiltersApplied
        entity = argFoo;
        tango = entity.searchContext;
        zulu = _closure1_slot13;
        entity = undefined;
        report = zulu.bind(entity)(tango);
        tango = _closure1_slot0;
        oscar = _closure1_slot1;
        zulu = 5;
        zulu = oscar[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.trackWithMetadata;
        mike = _closure1_slot7;
        mike = mike.SEARCH_V2_FILTERS_APPLIED;
        mike = zulu.bind(tango)(mike, report);
        return entity;
    };
    zulu['trackSearchFiltersApplied'] = tango;
    tango = function(argFoo) { // Original name: trackSearchFilterAdd
        entity = argFoo;
        zulu = entity.searchContext;
        options = entity.searchTokenType;
        golf = entity.location;
        mike = _closure1_slot13;
        entity = undefined;
        offset = mike.bind(entity)(zulu);
        zulu = _closure1_slot0;
        tango = _closure1_slot1;
        mike = 5;
        mike = tango[mike];
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot7;
        zulu = mike.SEARCH_V2_FILTER_ADD;
        mike = {};
        yankee = mike;
        verify = copyDataProperties(yankee, offset);
        oscar = _closure1_slot11;
        options = oscar.bind(entity)(options);
        oscar = 'search_filter_type';
        mike[oscar] = options;
        oscar = 'location';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackSearchFilterAdd'] = tango;
    tango = function(argFoo) { // Original name: trackSearchFilterRemove
        entity = argFoo;
        zulu = entity.searchContext;
        options = entity.searchTokenType;
        golf = entity.isDefault;
        mike = _closure1_slot13;
        entity = undefined;
        offset = mike.bind(entity)(zulu);
        zulu = _closure1_slot0;
        tango = _closure1_slot1;
        mike = 5;
        mike = tango[mike];
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot7;
        zulu = mike.SEARCH_V2_FILTER_REMOVE;
        mike = {};
        yankee = mike;
        verify = copyDataProperties(yankee, offset);
        oscar = _closure1_slot11;
        options = oscar.bind(entity)(options);
        oscar = 'search_filter_type';
        mike[oscar] = options;
        oscar = 'is_default_search_filter';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackSearchFilterRemove'] = tango;
    tango = function(argFoo) { // Original name: trackSearchTabSelected
        entity = argFoo;
        tango = entity.searchContext;
        zulu = _closure1_slot13;
        entity = undefined;
        report = zulu.bind(entity)(tango);
        tango = _closure1_slot0;
        oscar = _closure1_slot1;
        zulu = 5;
        zulu = oscar[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.trackWithMetadata;
        mike = _closure1_slot7;
        mike = mike.SEARCH_V2_TAB_SELECTED;
        mike = zulu.bind(tango)(mike, report);
        return entity;
    };
    zulu['trackSearchTabSelected'] = tango;
    mike = function(argFoo) { // Original name: trackSearchJumpToMessage
        entity = argFoo;
        tango = entity.searchContext;
        zulu = _closure1_slot13;
        entity = undefined;
        report = zulu.bind(entity)(tango);
        tango = _closure1_slot0;
        oscar = _closure1_slot1;
        zulu = 5;
        zulu = oscar[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.trackWithMetadata;
        mike = _closure1_slot7;
        mike = mike.SEARCH_V2_JUMP_TO_MESSAGE;
        mike = zulu.bind(tango)(mike, report);
        return entity;
    };
    zulu['trackSearchJumpToMessage'] = mike;
    return entity;
})();