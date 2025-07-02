// app/actions/SearchActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: search
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            option = argBar;
            oscard = argBaz;
            report = argCor;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.setIncludeNSFW;
            zuuluu = zuuluu.bind(tangon)(option, golfie);
            if(!report) { _fun00002_ip = 62; continue _fun00001 }
 52:
            zuuluu = true;
            option['search_everywhere'] = zuuluu;
 62:
            romeon = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 3;
            zuuluu = tangon[zuuluu];
            offset = romeon.bind(entity)(zuuluu);
            verify = offset.trackSearchStarted;
            zuuluu = {};
            yankee = 4;
            yankee = tangon[yankee];
            romeon = romeon.bind(entity)(yankee);
            yankee = romeon.getSearchType;
            yankee = yankee.bind(romeon)(golfie);
            zuuluu['searchType'] = yankee;
            zuuluu['searchId'] = golfie;
            zuuluu['query'] = option;
            zuuluu['queryString'] = oscard;
            zuuluu = verify.bind(offset)(zuuluu);
            zuuluu = _closure1_slot1;
            michal = 5;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            verify = 'SEARCH_START';
            michal['type'] = verify;
            michal['query'] = option;
            michal['searchId'] = golfie;
            michal['queryString'] = oscard;
            michal['searchEverywhere'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.SEARCH_PAGE_SIZE;
    var _closure1_slot4 = option;
    report = report.SearchModes;
    var _closure1_slot5 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/SearchActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['search'] = tangon;
    tangon = function(argFoo) { // Original name: searchQueryParamsToSearchMode
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.sort_by;
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00004_ip = 102; continue _fun00003 }
 15:
            michal = entity.sort_order;
            if(!(zuuluu != michal)) { _fun00004_ip = 102; continue _fun00003 }
 25:
            zuuluu = entity.sort_by;
            michal = 'relevance';
            if(!(michal !== zuuluu)) { _fun00004_ip = 87; continue _fun00003 }
 41:
            michal = entity.sort_order;
            entity = 'asc';
            if(!(entity !== michal)) { _fun00004_ip = 72; continue _fun00003 }
 57:
            entity = _closure1_slot5;
            entity = entity.NEWEST;
            _fun00004_ip = 85; continue _fun00003;
 72:
            michal = _closure1_slot5;
            entity = michal.OLDEST;
 85:
            _fun00004_ip = 100; continue _fun00003;
 87:
            michal = _closure1_slot5;
            entity = michal.MOST_RELEVANT;
 100:
            _fun00004_ip = 115; continue _fun00003;
 102:
            michal = _closure1_slot5;
            entity = michal.NEWEST;
 115:
            return entity;
        }
    };
    zuuluu['searchQueryParamsToSearchMode'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: searchByMode
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            michal = _closure1_slot3;
            entity = michal.getQuery;
            michal = entity.bind(michal)(report);
            entity = _closure1_slot5;
            entity = entity.MOST_RELEVANT;
            if(!(entity !== tangon)) { _fun00006_ip = 94; continue _fun00005 }
 38:
            entity = _closure1_slot5;
            entity = entity.OLDEST;
            if(!(entity !== tangon)) { _fun00006_ip = 78; continue _fun00005 }
 52:
            entity = _closure1_slot5;
            entity = entity.NEWEST;
            entity = {'sort_by': 'timestamp', 'sort_order': 'desc'};
            _fun00006_ip = 108; continue _fun00005;
 78:
            entity = {'sort_by': 'timestamp', 'sort_order': 'asc'};
            _fun00006_ip = 108; continue _fun00005;
 94:
            entity = {'sort_by': 'relevance', 'sort_order': 'desc'};
 108:
            tangon = _closure1_slot6;
            zuuluu = {};
            option = zuuluu;
            golfie = michal;
            michal = copyDataProperties(option, golfie);
            option = zuuluu;
            golfie = entity;
            entity = copyDataProperties(option, golfie);
            michal = 0;
            entity = 'offset';
            zuuluu[entity] = michal;
            entity = undefined;
            michal = argBaz;
            michal = tangon.bind(entity)(report, zuuluu, michal);
            return entity;
        }
    };
    zuuluu['searchByMode'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: changePage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot4;
            entity = argBar;
            michal = entity * michal;
            oscard = _closure1_slot3;
            entity = oscard.getQuery;
            entity = entity.bind(oscard)(report);
            tangon = oscard.getTotalResults;
            tangon = tangon.bind(oscard)(report);
            oscard = 0;
            if(!(!(michal < oscard))) { _fun00008_ip = 90; continue _fun00007 }
 49:
            if(!(!(michal > tangon))) { _fun00008_ip = 90; continue _fun00007 }
 53:
            tangon = _closure1_slot6;
            zuuluu = {};
            verify = zuuluu;
            option = entity;
            entity = copyDataProperties(verify, option);
            entity = 'offset';
            zuuluu[entity] = michal;
            michal = undefined;
            entity = argBaz;
            entity = tangon.bind(michal)(report, zuuluu, entity);
 90:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['changePage'] = tangon;
    tangon = function(argFoo) { // Original name: clearHistory
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SEARCH_CLEAR_HISTORY';
        michal['type'] = report;
        report = argFoo;
        michal['searchId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearHistory'] = tangon;
    tangon = function(argFoo) { // Original name: ensureSearchState
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.wait;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'SEARCH_ENSURE_SEARCH_STATE';
            michal['type'] = report;
            report = _closure2_slot0;
            michal['searchId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['ensureSearchState'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: setSearchState
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00010_ip = 69; continue _fun00009 }
 9:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            report = 'SEARCH_EDITOR_STATE_CHANGE';
            entity['type'] = report;
            entity['searchId'] = tangon;
            tangon = argBar;
            entity['editorState'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 69:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['setSearchState'] = tangon;
    tangon = function(argFoo) { // Original name: clearSearchState
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.wait;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'SEARCH_EDITOR_STATE_CLEAR';
            entity['type'] = tangon;
            tangon = _closure2_slot0;
            entity['searchId'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearSearchState'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: updateAutocompleteQuery
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00012_ip = 77; continue _fun00011 }
 9:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            report = 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE';
            entity['type'] = report;
            entity['searchId'] = tangon;
            tangon = argBar;
            entity['tokens'] = tangon;
            tangon = argBaz;
            entity['cursorScope'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 77:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['updateAutocompleteQuery'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: setShowBlockedResults
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SEARCH_SET_SHOW_BLOCKED_RESULTS';
        michal['type'] = report;
        report = argFoo;
        michal['searchId'] = report;
        report = argBar;
        michal['showBlocked'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setShowBlockedResults'] = tangon;
    tangon = function(argFoo) { // Original name: setShowNoResultsAlt
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SEARCH_SET_SHOW_NO_RESULTS_ALT';
        michal['type'] = report;
        report = argFoo;
        michal['searchId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setShowNoResultsAlt'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: addQueryToHistory
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SEARCH_ADD_HISTORY';
        michal['type'] = report;
        report = argFoo;
        michal['searchId'] = report;
        report = argBar;
        michal['query'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['addQueryToHistory'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: removeQueryFromHistory
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SEARCH_REMOVE_HISTORY';
        michal['type'] = report;
        report = argFoo;
        michal['searchId'] = report;
        report = argBar;
        michal['query'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['removeQueryFromHistory'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: updateSearchResultsQuery
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SEARCH_RESULTS_QUERY_UPDATE';
        michal['type'] = report;
        report = argFoo;
        michal['searchId'] = report;
        report = argBar;
        michal['queryString'] = report;
        report = argBaz;
        michal['query'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateSearchResultsQuery'] = michal;
    return entity;
})();