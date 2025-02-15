// app/modules/search_v2/native/hooks/useSearchScreenLoading.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: useMessageScreenLoadingState
        _fun112813: for(var _fun112813_ip = 0; ; ) switch(_fun112813_ip) {
 0:
            mike = argFoo;
            offset = mike.searchContext;
            verify = mike.tab;
            zulu = _closure1_slot5;
            report = undefined;
            options = zulu.bind(report)(offset);
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 3;
            zulu = oscar[zulu];
            golf = tango.bind(report)(zulu);
            zulu = golf.getSearchTabFetchId;
            zulu = zulu.bind(golf)(offset, verify, options);
            var _closure2_slot0 = zulu;
            zulu = 4;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.useStateFromStoresObject;
            report = _closure1_slot2;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                entity = {};
                report = _closure1_slot2;
                zulu = report.getIsInitialFetchComplete;
                tango = _closure2_slot0;
                zulu = zulu.bind(report)(tango);
                entity['isInitialFetchComplete'] = zulu;
                zulu = _closure1_slot2;
                mike = zulu.getIsFetching;
                mike = mike.bind(zulu)(tango);
                entity['isFetching'] = mike;
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            mike = entity.isInitialFetchComplete;
            entity = entity.isFetching;
            mike = !mike;
            zulu = !mike;
            if(mike) { _fun112813_ip = 135; continue _fun112813 }
 132:
            zulu = entity;
 135:
            entity = {};
            entity['isFirstPageLoading'] = mike;
            entity['isNextPageLoading'] = zulu;
            if(mike) { _fun112813_ip = 153; continue _fun112813 }
 150:
            mike = zulu;
 153:
            entity['isLoading'] = mike;
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.useIsAutocompleteVisible;
    var _closure1_slot3 = options;
    options = report.useIsInitialSearchQuery;
    var _closure1_slot4 = options;
    report = report.useSearchResultsQuery;
    var _closure1_slot5 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot6 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/search_v2/native/hooks/useSearchScreenLoading.tsx';
    report = oscar.bind(golf)(report);
    zulu['useMessageScreenLoadingState'] = tango;
    tango = function(argFoo) { // Original name: useIsPlaceholderVisible
        _fun112815: for(var _fun112815_ip = 0; ; ) switch(_fun112815_ip) {
 0:
            entity = argFoo;
            tango = entity.searchContext;
            mike = entity.data;
            zulu = _closure1_slot4;
            entity = undefined;
            entity = zulu.bind(entity)(tango);
            entity = !entity;
            if(!entity) { _fun112815_ip = 45; continue _fun112815 }
 34:
            zulu = mike.length;
            mike = 0;
            entity = mike === zulu;
 45:
            return entity;
        }
    };
    zulu['useIsPlaceholderVisible'] = tango;
    mike = function(argFoo) { // Original name: useIsSearchSpinnerVisible
        _fun112816: for(var _fun112816_ip = 0; ; ) switch(_fun112816_ip) {
 0:
            entity = argFoo;
            report = entity.searchContext;
            zulu = _closure1_slot7;
            entity = {};
            entity['searchContext'] = report;
            tango = _closure1_slot6;
            entity['tab'] = tango;
            tango = undefined;
            entity = zulu.bind(tango)(entity);
            entity = entity.isFirstPageLoading;
            zulu = _closure1_slot4;
            zulu = zulu.bind(tango)(report);
            mike = _closure1_slot3;
            mike = mike.bind(tango)(report);
            if(!entity) { _fun112816_ip = 69; continue _fun112816 }
 66:
            entity = !zulu;
 69:
            if(!entity) { _fun112816_ip = 75; continue _fun112816 }
 72:
            entity = !mike;
 75:
            return entity;
        }
    };
    zulu['useIsSearchSpinnerVisible'] = mike;
    return entity;
})();