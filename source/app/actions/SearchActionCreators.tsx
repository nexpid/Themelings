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
            oscard = argFoo;
            golfie = argBar;
            report = argCor;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.setIncludeNSFW;
            zuuluu = zuuluu.bind(tangon)(golfie, oscard);
            if(!report) { _fun00002_ip = 59; continue _fun00001 }
 49:
            zuuluu = true;
            golfie['search_everywhere'] = zuuluu;
 59:
            option = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 3;
            zuuluu = tangon[zuuluu];
            verify = option.bind(entity)(zuuluu);
            option = verify.trackSearchStarted;
            zuuluu = {};
            yankee = _closure1_slot3;
            offset = yankee.getSearchType;
            offset = offset.bind(yankee)();
            zuuluu['searchType'] = offset;
            yankee = _closure1_slot3;
            offset = yankee.getAnalyticsId;
            offset = offset.bind(yankee)(oscard);
            zuuluu['searchAnalyticsId'] = offset;
            zuuluu['query'] = golfie;
            zuuluu = option.bind(verify)(zuuluu);
            zuuluu = _closure1_slot1;
            michal = 4;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            option = 'SEARCH_START';
            michal['type'] = option;
            michal['query'] = golfie;
            michal['searchId'] = oscard;
            oscard = argBaz;
            michal['queryString'] = oscard;
            michal['searchEverywhere'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    entity = function(argFoo, argBar) { // Original name: searchPage
        tangon = argFoo;
        zuuluu = _closure1_slot8;
        michal = _closure1_slot3;
        entity = michal.getOffset;
        michal = entity.bind(michal)(tangon);
        entity = argBar;
        michal = michal + entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: searchOffset
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            report = argBar;
            zuuluu = _closure1_slot3;
            entity = zuuluu.getQuery;
            entity = entity.bind(zuuluu)(tangon);
            oscard = _closure1_slot3;
            zuuluu = oscard.getTotalResults;
            zuuluu = zuuluu.bind(oscard)(tangon);
            oscard = 0;
            if(!(!(report < oscard))) { _fun00004_ip = 84; continue _fun00003 }
 45:
            if(!(!(report > zuuluu))) { _fun00004_ip = 84; continue _fun00003 }
 49:
            zuuluu = _closure1_slot6;
            michal = {};
            option = michal;
            golfie = entity;
            entity = copyDataProperties(option, golfie);
            entity = 'offset';
            michal[entity] = report;
            entity = undefined;
            michal = zuuluu.bind(entity)(tangon, michal);
            return entity;
 84:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/SearchActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['search'] = tangon;
    tangon = function(argFoo) { // Original name: searchQueryParamsToSearchMode
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.sort_by;
            michal = 'relevance';
            if(!(michal !== zuuluu)) { _fun00006_ip = 65; continue _fun00005 }
 19:
            michal = entity.sort_order;
            entity = 'asc';
            if(!(entity !== michal)) { _fun00006_ip = 50; continue _fun00005 }
 35:
            entity = _closure1_slot5;
            entity = entity.NEWEST;
            _fun00006_ip = 63; continue _fun00005;
 50:
            michal = _closure1_slot5;
            entity = michal.OLDEST;
 63:
            _fun00006_ip = 78; continue _fun00005;
 65:
            michal = _closure1_slot5;
            entity = michal.MOST_RELEVANT;
 78:
            return entity;
        }
    };
    zuuluu['searchQueryParamsToSearchMode'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: searchByMode
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            report = _closure1_slot3;
            entity = report.getQuery;
            report = entity.bind(report)(tangon);
            entity = _closure1_slot5;
            entity = entity.MOST_RELEVANT;
            if(!(entity !== zuuluu)) { _fun00008_ip = 94; continue _fun00007 }
 38:
            entity = _closure1_slot5;
            entity = entity.OLDEST;
            if(!(entity !== zuuluu)) { _fun00008_ip = 78; continue _fun00007 }
 52:
            entity = _closure1_slot5;
            entity = entity.NEWEST;
            entity = {'sort_by': 'timestamp', 'sort_order': 'desc'};
            _fun00008_ip = 108; continue _fun00007;
 78:
            entity = {'sort_by': 'timestamp', 'sort_order': 'asc'};
            _fun00008_ip = 108; continue _fun00007;
 94:
            entity = {'sort_by': 'relevance', 'sort_order': 'desc'};
 108:
            zuuluu = _closure1_slot6;
            michal = {};
            golfie = michal;
            oscard = report;
            report = copyDataProperties(golfie, oscard);
            golfie = michal;
            oscard = entity;
            entity = copyDataProperties(golfie, oscard);
            report = 0;
            entity = 'offset';
            michal[entity] = report;
            entity = undefined;
            michal = zuuluu.bind(entity)(tangon, michal);
            return entity;
        }
    };
    zuuluu['searchByMode'] = tangon;
    tangon = function(argFoo) { // Original name: searchNextPage
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = arguments[1];
            entity = undefined;
            if(!(tangon === entity)) { _fun00010_ip = 16; continue _fun00009 }
 9:
            tangon = _closure1_slot4;
 16:
            zuuluu = _closure1_slot7;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal, tangon);
            return entity;
        }
    };
    zuuluu['searchNextPage'] = tangon;
    tangon = function(argFoo) { // Original name: searchPreviousPage
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00012_ip = 16; continue _fun00011 }
 9:
            michal = _closure1_slot4;
 16:
            tangon = _closure1_slot7;
            zuuluu = -michal;
            michal = argFoo;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['searchPreviousPage'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: changePage
        tangon = _closure1_slot8;
        michal = _closure1_slot4;
        entity = argBar;
        zuuluu = entity * michal;
        entity = undefined;
        michal = argFoo;
        michal = tangon.bind(entity)(michal, zuuluu);
        return entity;
    };
    zuuluu['changePage'] = tangon;
    tangon = function(argFoo) { // Original name: clearHistory
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
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
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.wait;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
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
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00014_ip = 69; continue _fun00013 }
 9:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
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
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.wait;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
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
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00016_ip = 77; continue _fun00015 }
 9:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
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
        entity = 4;
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
    tangon = function(argFoo, argBar) { // Original name: addQueryToHistory
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
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
    michal = function(argFoo, argBar) { // Original name: removeQueryFromHistory
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
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
    zuuluu['removeQueryFromHistory'] = michal;
    return entity;
})();