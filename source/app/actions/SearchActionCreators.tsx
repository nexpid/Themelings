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
            var _closure2_slot0 = golfie;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.setIncludeNSFW;
            michal = michal.bind(zuuluu)(golfie, oscard);
            if(!report) { _fun00002_ip = 65; continue _fun00001 }
 55:
            michal = true;
            golfie['search_everywhere'] = michal;
 65:
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            backup = michal.bind(zuuluu)(golfie);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 3;
            michal = tangon[michal];
            offset = zuuluu.bind(entity)(michal);
            verify = offset.trackWithMetadata;
            michal = _closure1_slot5;
            option = michal.SEARCH_STARTED;
            michal = {};
            kiloes = _closure1_slot3;
            foxtra = kiloes.getSearchType;
            foxtra = foxtra.bind(kiloes)();
            michal['search_type'] = foxtra;
            foxtra = _closure1_slot3;
            romeon = foxtra.getAnalyticsId;
            romeon = romeon.bind(foxtra)(oscard);
            michal['prev_search_id'] = romeon;
            romeon = backup.length;
            michal['num_modifiers'] = romeon;
            foxtra = backup.reduce;
            romeon = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zuuluu = argBar;
                    michal = _closure2_slot0;
                    tangon = michal[zuuluu];
                    michal = global;
                    report = michal.Array;
                    michal = report.isArray;
                    report = michal.bind(report)(tangon);
                    michal = 1;
                    if(!report) { _fun00004_ip = 46; continue _fun00003 }
 41:
                    michal = tangon.length;
 46:
                    entity[zuuluu] = michal;
                    return entity;
                }
            };
            yankee = {};
            yankee = foxtra.bind(backup)(romeon, yankee);
            michal['modifiers'] = yankee;
            michal = verify.bind(offset)(option, michal);
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
    var _closure1_slot7 = tangon;
    entity = function(argFoo, argBar) { // Original name: searchPage
        tangon = argFoo;
        zuuluu = _closure1_slot9;
        michal = _closure1_slot3;
        entity = michal.getOffset;
        michal = entity.bind(michal)(tangon);
        entity = argBar;
        michal = michal + entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: searchOffset
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
            if(!(!(report < oscard))) { _fun00006_ip = 84; continue _fun00005 }
 45:
            if(!(!(report > zuuluu))) { _fun00006_ip = 84; continue _fun00005 }
 49:
            zuuluu = _closure1_slot7;
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
    var _closure1_slot9 = entity;
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
    option = report.AnalyticEvents;
    var _closure1_slot5 = option;
    report = report.SearchModes;
    var _closure1_slot6 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/SearchActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['search'] = tangon;
    tangon = function(argFoo) { // Original name: searchQueryParamsToSearchMode
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.sort_by;
            michal = 'relevance';
            if(!(michal !== zuuluu)) { _fun00008_ip = 65; continue _fun00007 }
 19:
            michal = entity.sort_order;
            entity = 'asc';
            if(!(entity !== michal)) { _fun00008_ip = 50; continue _fun00007 }
 35:
            entity = _closure1_slot6;
            entity = entity.NEWEST;
            _fun00008_ip = 63; continue _fun00007;
 50:
            michal = _closure1_slot6;
            entity = michal.OLDEST;
 63:
            _fun00008_ip = 78; continue _fun00007;
 65:
            michal = _closure1_slot6;
            entity = michal.MOST_RELEVANT;
 78:
            return entity;
        }
    };
    zuuluu['searchQueryParamsToSearchMode'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: searchByMode
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            report = _closure1_slot3;
            entity = report.getQuery;
            report = entity.bind(report)(tangon);
            entity = _closure1_slot6;
            entity = entity.MOST_RELEVANT;
            if(!(entity !== zuuluu)) { _fun00010_ip = 94; continue _fun00009 }
 38:
            entity = _closure1_slot6;
            entity = entity.OLDEST;
            if(!(entity !== zuuluu)) { _fun00010_ip = 78; continue _fun00009 }
 52:
            entity = _closure1_slot6;
            entity = entity.NEWEST;
            entity = {'sort_by': 'timestamp', 'sort_order': 'desc'};
            _fun00010_ip = 108; continue _fun00009;
 78:
            entity = {'sort_by': 'timestamp', 'sort_order': 'asc'};
            _fun00010_ip = 108; continue _fun00009;
 94:
            entity = {'sort_by': 'relevance', 'sort_order': 'desc'};
 108:
            zuuluu = _closure1_slot7;
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
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = arguments[1];
            entity = undefined;
            if(!(tangon === entity)) { _fun00012_ip = 16; continue _fun00011 }
 9:
            tangon = _closure1_slot4;
 16:
            zuuluu = _closure1_slot8;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal, tangon);
            return entity;
        }
    };
    zuuluu['searchNextPage'] = tangon;
    tangon = function(argFoo) { // Original name: searchPreviousPage
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00014_ip = 16; continue _fun00013 }
 9:
            michal = _closure1_slot4;
 16:
            tangon = _closure1_slot8;
            zuuluu = -michal;
            michal = argFoo;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['searchPreviousPage'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: changePage
        tangon = _closure1_slot9;
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
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00016_ip = 69; continue _fun00015 }
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
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00018_ip = 77; continue _fun00017 }
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