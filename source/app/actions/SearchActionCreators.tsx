// app/actions/SearchActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: search
        _fun112633: for(var _fun112633_ip = 0; ; ) switch(_fun112633_ip) {
 0:
            oscar = argFoo;
            golf = argBar;
            report = argCorge;
            var _closure2_slot0 = golf;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.setIncludeNSFW;
            mike = mike.bind(zulu)(golf, oscar);
            if(!report) { _fun112633_ip = 65; continue _fun112633 }
 55:
            mike = true;
            golf['search_everywhere'] = mike;
 65:
            mike = global;
            zulu = mike.Object;
            mike = zulu.keys;
            backup = mike.bind(zulu)(golf);
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 3;
            mike = tango[mike];
            offset = zulu.bind(entity)(mike);
            verify = offset.trackWithMetadata;
            mike = _closure1_slot5;
            options = mike.SEARCH_STARTED;
            mike = {};
            kilo = _closure1_slot3;
            foxtrot = kilo.getSearchType;
            foxtrot = foxtrot.bind(kilo)();
            mike['search_type'] = foxtrot;
            foxtrot = _closure1_slot3;
            romeo = foxtrot.getAnalyticsId;
            romeo = romeo.bind(foxtrot)(oscar);
            mike['prev_search_id'] = romeo;
            romeo = backup.length;
            mike['num_modifiers'] = romeo;
            foxtrot = backup.reduce;
            romeo = function(argFoo, argBar) {
                _fun112634: for(var _fun112634_ip = 0; ; ) switch(_fun112634_ip) {
 0:
                    entity = argFoo;
                    zulu = argBar;
                    mike = _closure2_slot0;
                    tango = mike[zulu];
                    mike = global;
                    report = mike.Array;
                    mike = report.isArray;
                    report = mike.bind(report)(tango);
                    mike = 1;
                    if(!report) { _fun112634_ip = 46; continue _fun112634 }
 41:
                    mike = tango.length;
 46:
                    entity[zulu] = mike;
                    return entity;
                }
            };
            yankee = {};
            yankee = foxtrot.bind(backup)(romeo, yankee);
            mike['modifiers'] = yankee;
            mike = verify.bind(offset)(options, mike);
            mike = 4;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            options = 'SEARCH_START';
            mike['type'] = options;
            mike['query'] = golf;
            mike['searchId'] = oscar;
            oscar = argBaz;
            mike['queryString'] = oscar;
            mike['searchEverywhere'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    entity = function(argFoo, argBar) { // Original name: searchPage
        tango = argFoo;
        zulu = _closure1_slot9;
        mike = _closure1_slot3;
        entity = mike.getOffset;
        mike = entity.bind(mike)(tango);
        entity = argBar;
        mike = mike + entity;
        entity = undefined;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: searchOffset
        _fun112636: for(var _fun112636_ip = 0; ; ) switch(_fun112636_ip) {
 0:
            tango = argFoo;
            report = argBar;
            zulu = _closure1_slot3;
            entity = zulu.getQuery;
            entity = entity.bind(zulu)(tango);
            oscar = _closure1_slot3;
            zulu = oscar.getTotalResults;
            zulu = zulu.bind(oscar)(tango);
            oscar = 0;
            if(!(!(report < oscar))) { _fun112636_ip = 84; continue _fun112636 }
 45:
            if(!(!(report > zulu))) { _fun112636_ip = 84; continue _fun112636 }
 49:
            zulu = _closure1_slot7;
            mike = {};
            options = mike;
            golf = entity;
            entity = copyDataProperties(options, golf);
            entity = 'offset';
            mike[entity] = report;
            entity = undefined;
            mike = zulu.bind(entity)(tango, mike);
            return entity;
 84:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.SEARCH_PAGE_SIZE;
    var _closure1_slot4 = options;
    options = report.AnalyticEvents;
    var _closure1_slot5 = options;
    report = report.SearchModes;
    var _closure1_slot6 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/SearchActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['search'] = tango;
    tango = function(argFoo) { // Original name: searchQueryParamsToSearchMode
        _fun112637: for(var _fun112637_ip = 0; ; ) switch(_fun112637_ip) {
 0:
            entity = argFoo;
            zulu = entity.sort_by;
            mike = 'relevance';
            if(!(mike !== zulu)) { _fun112637_ip = 65; continue _fun112637 }
 19:
            mike = entity.sort_order;
            entity = 'asc';
            if(!(entity !== mike)) { _fun112637_ip = 50; continue _fun112637 }
 35:
            entity = _closure1_slot6;
            entity = entity.NEWEST;
            _fun112637_ip = 63; continue _fun112637;
 50:
            mike = _closure1_slot6;
            entity = mike.OLDEST;
 63:
            _fun112637_ip = 78; continue _fun112637;
 65:
            mike = _closure1_slot6;
            entity = mike.MOST_RELEVANT;
 78:
            return entity;
        }
    };
    zulu['searchQueryParamsToSearchMode'] = tango;
    tango = function(argFoo, argBar) { // Original name: searchByMode
        _fun112638: for(var _fun112638_ip = 0; ; ) switch(_fun112638_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            report = _closure1_slot3;
            entity = report.getQuery;
            report = entity.bind(report)(tango);
            entity = _closure1_slot6;
            entity = entity.MOST_RELEVANT;
            if(!(entity !== zulu)) { _fun112638_ip = 90; continue _fun112638 }
 38:
            entity = _closure1_slot6;
            entity = entity.OLDEST;
            if(!(entity !== zulu)) { _fun112638_ip = 74; continue _fun112638 }
 52:
            entity = _closure1_slot6;
            entity = entity.NEWEST;
            entity = {'sort_by': 'timestamp', 'sort_order': 'desc'};
            _fun112638_ip = 104; continue _fun112638;
 74:
            entity = {'sort_by': 'timestamp', 'sort_order': 'asc'};
            _fun112638_ip = 104; continue _fun112638;
 90:
            entity = {'sort_by': 'relevance', 'sort_order': 'desc'};
 104:
            zulu = _closure1_slot7;
            mike = {};
            golf = mike;
            oscar = report;
            report = copyDataProperties(golf, oscar);
            golf = mike;
            oscar = entity;
            entity = copyDataProperties(golf, oscar);
            report = 0;
            entity = 'offset';
            mike[entity] = report;
            entity = undefined;
            mike = zulu.bind(entity)(tango, mike);
            return entity;
        }
    };
    zulu['searchByMode'] = tango;
    tango = function(argFoo) { // Original name: searchNextPage
        _fun112639: for(var _fun112639_ip = 0; ; ) switch(_fun112639_ip) {
 0:
            tango = arguments[1];
            entity = undefined;
            if(!(tango === entity)) { _fun112639_ip = 16; continue _fun112639 }
 9:
            tango = _closure1_slot4;
 16:
            zulu = _closure1_slot8;
            mike = argFoo;
            mike = zulu.bind(entity)(mike, tango);
            return entity;
        }
    };
    zulu['searchNextPage'] = tango;
    tango = function(argFoo) { // Original name: searchPreviousPage
        _fun112640: for(var _fun112640_ip = 0; ; ) switch(_fun112640_ip) {
 0:
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun112640_ip = 16; continue _fun112640 }
 9:
            mike = _closure1_slot4;
 16:
            tango = _closure1_slot8;
            zulu = -mike;
            mike = argFoo;
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        }
    };
    zulu['searchPreviousPage'] = tango;
    tango = function(argFoo, argBar) { // Original name: changePage
        tango = _closure1_slot9;
        mike = _closure1_slot4;
        entity = argBar;
        zulu = entity * mike;
        entity = undefined;
        mike = argFoo;
        mike = tango.bind(entity)(mike, zulu);
        return entity;
    };
    zulu['changePage'] = tango;
    tango = function(argFoo) { // Original name: clearHistory
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SEARCH_CLEAR_HISTORY';
        mike['type'] = report;
        report = argFoo;
        mike['searchId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearHistory'] = tango;
    tango = function(argFoo) { // Original name: ensureSearchState
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.wait;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'SEARCH_ENSURE_SEARCH_STATE';
            mike['type'] = report;
            report = _closure2_slot0;
            mike['searchId'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['ensureSearchState'] = tango;
    tango = function(argFoo, argBar) { // Original name: setSearchState
        _fun112645: for(var _fun112645_ip = 0; ; ) switch(_fun112645_ip) {
 0:
            tango = argFoo;
            entity = null;
            if(!(entity != tango)) { _fun112645_ip = 69; continue _fun112645 }
 9:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            report = 'SEARCH_EDITOR_STATE_CHANGE';
            entity['type'] = report;
            entity['searchId'] = tango;
            tango = argBar;
            entity['editorState'] = tango;
            entity = mike.bind(zulu)(entity);
 69:
            entity = undefined;
            return entity;
        }
    };
    zulu['setSearchState'] = tango;
    tango = function(argFoo) { // Original name: clearSearchState
        yankee = argFoo;
        var _closure2_slot0 = yankee;
        tango = _closure1_slot1;
        report = _closure1_slot2;
        entity = 3;
        zulu = report[entity];
        entity = undefined;
        options = tango.bind(entity)(zulu);
        golf = options.trackWithMetadata;
        zulu = _closure1_slot5;
        oscar = zulu.SEARCH_CLOSED;
        zulu = {};
        offset = _closure1_slot3;
        verify = offset.getAnalyticsId;
        verify = verify.bind(offset)(yankee);
        zulu['search_id'] = verify;
        zulu = golf.bind(options)(oscar, zulu);
        zulu = 4;
        zulu = report[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.wait;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'SEARCH_EDITOR_STATE_CLEAR';
            entity['type'] = tango;
            tango = _closure2_slot0;
            entity['searchId'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearSearchState'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: updateAutocompleteQuery
        _fun112648: for(var _fun112648_ip = 0; ; ) switch(_fun112648_ip) {
 0:
            tango = argFoo;
            entity = null;
            if(!(entity != tango)) { _fun112648_ip = 77; continue _fun112648 }
 9:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            report = 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE';
            entity['type'] = report;
            entity['searchId'] = tango;
            tango = argBar;
            entity['tokens'] = tango;
            tango = argBaz;
            entity['cursorScope'] = tango;
            entity = mike.bind(zulu)(entity);
 77:
            entity = undefined;
            return entity;
        }
    };
    zulu['updateAutocompleteQuery'] = tango;
    tango = function(argFoo, argBar) { // Original name: setShowBlockedResults
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SEARCH_SET_SHOW_BLOCKED_RESULTS';
        mike['type'] = report;
        report = argFoo;
        mike['searchId'] = report;
        report = argBar;
        mike['showBlocked'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setShowBlockedResults'] = tango;
    tango = function(argFoo, argBar) { // Original name: addQueryToHistory
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SEARCH_ADD_HISTORY';
        mike['type'] = report;
        report = argFoo;
        mike['searchId'] = report;
        report = argBar;
        mike['query'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['addQueryToHistory'] = tango;
    mike = function(argFoo, argBar) { // Original name: removeQueryFromHistory
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SEARCH_REMOVE_HISTORY';
        mike['type'] = report;
        report = argFoo;
        mike['searchId'] = report;
        report = argBar;
        mike['query'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['removeQueryFromHistory'] = mike;
    return entity;
})();