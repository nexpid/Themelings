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
            verify = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 3;
            zuuluu = tangon[zuuluu];
            offset = verify.bind(entity)(zuuluu);
            verify = offset.trackSearchStarted;
            zuuluu = {};
            romeon = _closure1_slot3;
            yankee = romeon.getSearchType;
            yankee = yankee.bind(romeon)(golfie);
            zuuluu['searchType'] = yankee;
            zuuluu['searchId'] = golfie;
            zuuluu['query'] = option;
            zuuluu['queryString'] = oscard;
            zuuluu = verify.bind(offset)(zuuluu);
            zuuluu = _closure1_slot1;
            michal = 4;
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
    entity = function(argFoo, argBar, argBaz) { // Original name: searchPage
        report = argFoo;
        tangon = _closure1_slot8;
        michal = _closure1_slot3;
        entity = michal.getOffset;
        michal = entity.bind(michal)(report);
        entity = argBar;
        zuuluu = michal + entity;
        entity = undefined;
        michal = argBaz;
        michal = tangon.bind(entity)(report, zuuluu, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: searchOffset
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            michal = argBar;
            tangon = _closure1_slot3;
            entity = tangon.getQuery;
            entity = entity.bind(tangon)(report);
            oscard = _closure1_slot3;
            tangon = oscard.getTotalResults;
            tangon = tangon.bind(oscard)(report);
            oscard = 0;
            if(!(!(michal < oscard))) { _fun00004_ip = 88; continue _fun00003 }
 45:
            if(!(!(michal > tangon))) { _fun00004_ip = 88; continue _fun00003 }
 49:
            tangon = _closure1_slot6;
            zuuluu = {};
            verify = zuuluu;
            option = entity;
            entity = copyDataProperties(verify, option);
            entity = 'offset';
            zuuluu[entity] = michal;
            entity = undefined;
            michal = argBaz;
            michal = tangon.bind(entity)(report, zuuluu, michal);
            return entity;
 88:
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
            michal = entity.sort_by;
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00006_ip = 102; continue _fun00005 }
 15:
            michal = entity.sort_order;
            if(!(zuuluu != michal)) { _fun00006_ip = 102; continue _fun00005 }
 25:
            zuuluu = entity.sort_by;
            michal = 'relevance';
            if(!(michal !== zuuluu)) { _fun00006_ip = 87; continue _fun00005 }
 41:
            michal = entity.sort_order;
            entity = 'asc';
            if(!(entity !== michal)) { _fun00006_ip = 72; continue _fun00005 }
 57:
            entity = _closure1_slot5;
            entity = entity.NEWEST;
            _fun00006_ip = 85; continue _fun00005;
 72:
            michal = _closure1_slot5;
            entity = michal.OLDEST;
 85:
            _fun00006_ip = 100; continue _fun00005;
 87:
            michal = _closure1_slot5;
            entity = michal.MOST_RELEVANT;
 100:
            _fun00006_ip = 115; continue _fun00005;
 102:
            michal = _closure1_slot5;
            entity = michal.NEWEST;
 115:
            return entity;
        }
    };
    zuuluu['searchQueryParamsToSearchMode'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: searchByMode
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            michal = _closure1_slot3;
            entity = michal.getQuery;
            michal = entity.bind(michal)(report);
            entity = _closure1_slot5;
            entity = entity.MOST_RELEVANT;
            if(!(entity !== tangon)) { _fun00008_ip = 94; continue _fun00007 }
 38:
            entity = _closure1_slot5;
            entity = entity.OLDEST;
            if(!(entity !== tangon)) { _fun00008_ip = 78; continue _fun00007 }
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
    tangon = function(argFoo, argBar, argBaz) { // Original name: searchNextPage
        report = _closure1_slot7;
        entity = undefined;
        tangon = argFoo;
        zuuluu = argBar;
        michal = argBaz;
        michal = report.bind(entity)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['searchNextPage'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: searchPreviousPage
        report = _closure1_slot7;
        entity = argBar;
        tangon = -entity;
        entity = undefined;
        zuuluu = argFoo;
        michal = argBaz;
        michal = report.bind(entity)(zuuluu, tangon, michal);
        return entity;
    };
    zuuluu['searchPreviousPage'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: changePage
        report = _closure1_slot8;
        michal = _closure1_slot4;
        entity = argBar;
        tangon = entity * michal;
        entity = undefined;
        zuuluu = argFoo;
        michal = argBaz;
        michal = report.bind(entity)(zuuluu, tangon, michal);
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
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00010_ip = 69; continue _fun00009 }
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
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00012_ip = 77; continue _fun00011 }
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