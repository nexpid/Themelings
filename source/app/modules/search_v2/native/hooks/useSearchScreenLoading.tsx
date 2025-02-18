// app/modules/search_v2/native/hooks/useSearchScreenLoading.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: useMessageScreenLoadingState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            offset = michal.searchContext;
            verify = michal.tab;
            zuuluu = _closure1_slot5;
            report = undefined;
            option = zuuluu.bind(report)(offset);
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 3;
            zuuluu = oscard[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            zuuluu = golfie.getSearchTabFetchId;
            zuuluu = zuuluu.bind(golfie)(offset, verify, option);
            var _closure2_slot0 = zuuluu;
            zuuluu = 4;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useStateFromStoresObject;
            report = _closure1_slot2;
            michal = new Array(1);
            michal[0] = report;
            entity = function() {
                entity = {};
                report = _closure1_slot2;
                zuuluu = report.getIsInitialFetchComplete;
                tangon = _closure2_slot0;
                zuuluu = zuuluu.bind(report)(tangon);
                entity['isInitialFetchComplete'] = zuuluu;
                zuuluu = _closure1_slot2;
                michal = zuuluu.getIsFetching;
                michal = michal.bind(zuuluu)(tangon);
                entity['isFetching'] = michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            michal = entity.isInitialFetchComplete;
            entity = entity.isFetching;
            michal = !michal;
            zuuluu = !michal;
            if(michal) { _fun00002_ip = 135; continue _fun00001 }
 132:
            zuuluu = entity;
 135:
            entity = {};
            entity['isFirstPageLoading'] = michal;
            entity['isNextPageLoading'] = zuuluu;
            if(michal) { _fun00002_ip = 153; continue _fun00001 }
 150:
            michal = zuuluu;
 153:
            entity['isLoading'] = michal;
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.useIsAutocompleteVisible;
    var _closure1_slot3 = option;
    option = report.useIsInitialSearchQuery;
    var _closure1_slot4 = option;
    report = report.useSearchResultsQuery;
    var _closure1_slot5 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot6 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/search_v2/native/hooks/useSearchScreenLoading.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useMessageScreenLoadingState'] = tangon;
    tangon = function(argFoo) { // Original name: useIsPlaceholderVisible
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = entity.searchContext;
            michal = entity.data;
            zuuluu = _closure1_slot4;
            entity = undefined;
            entity = zuuluu.bind(entity)(tangon);
            entity = !entity;
            if(!entity) { _fun00004_ip = 45; continue _fun00003 }
 34:
            zuuluu = michal.length;
            michal = 0;
            entity = michal === zuuluu;
 45:
            return entity;
        }
    };
    zuuluu['useIsPlaceholderVisible'] = tangon;
    michal = function(argFoo) { // Original name: useIsSearchSpinnerVisible
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.searchContext;
            zuuluu = _closure1_slot7;
            entity = {};
            entity['searchContext'] = report;
            tangon = _closure1_slot6;
            entity['tab'] = tangon;
            tangon = undefined;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.isFirstPageLoading;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(tangon)(report);
            michal = _closure1_slot3;
            michal = michal.bind(tangon)(report);
            if(!entity) { _fun00006_ip = 69; continue _fun00005 }
 66:
            entity = !zuuluu;
 69:
            if(!entity) { _fun00006_ip = 75; continue _fun00005 }
 72:
            entity = !michal;
 75:
            return entity;
        }
    };
    zuuluu['useIsSearchSpinnerVisible'] = michal;
    return entity;
})();