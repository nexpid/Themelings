// app/modules/search_v2/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = tangon.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSearchMessagesLoadingState
        michal = argFoo;
        verify = michal.searchContext;
        var _closure2_slot0 = verify;
        zuuluu = michal.tab;
        var _closure2_slot1 = zuuluu;
        yankee = michal.placeholderHeight;
        offset = michal.numColumns;
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        zuuluu = 3;
        zuuluu = oscard[zuuluu];
        tangon = undefined;
        option = report.bind(tangon)(zuuluu);
        golfie = option.useFullscreenPlaceholderCount;
        zuuluu = {};
        zuuluu['placeholderHeight'] = yankee;
        zuuluu['numColumns'] = offset;
        zuuluu = golfie.bind(option)(zuuluu);
        var _closure2_slot2 = zuuluu;
        option = _closure1_slot3;
        golfie = option.useState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getSearchResultsQuery;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu = golfie.bind(option)(verify, zuuluu);
        var _closure2_slot3 = zuuluu;
        zuuluu = 4;
        zuuluu = oscard[zuuluu];
        tangon = report.bind(tangon)(zuuluu);
        zuuluu = tangon.useStateFromStoresObject;
        report = _closure1_slot2;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.getSearchTabFetchId;
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot1;
                michal = _closure2_slot3;
                report = report.bind(oscard)(tangon, zuuluu, michal);
                tangon = _closure1_slot2;
                michal = tangon.getIsInitialFetchComplete;
                michal = michal.bind(tangon)(report);
                zuuluu = tangon.getIsFetching;
                zuuluu = zuuluu.bind(tangon)(report);
                michal = !michal;
                tangon = !michal;
                if(michal) { _fun00002_ip = 91; continue _fun00001 }
 88:
                tangon = zuuluu;
 91:
                zuuluu = global;
                oscard = zuuluu.Math;
                report = oscard.max;
                zuuluu = _closure2_slot2;
                golfie = _closure1_slot4;
                entity = _closure2_slot1;
                entity = golfie[entity];
                zuuluu = report.bind(oscard)(zuuluu, entity);
                entity = {};
                entity['isFirstPageLoading'] = michal;
                entity['isNextPageLoading'] = tangon;
                if(michal) { _fun00002_ip = 146; continue _fun00001 }
 141:
                michal = 0;
                if(!tangon) { _fun00002_ip = 149; continue _fun00001 }
 146:
                michal = zuuluu;
 149:
                entity['placeholderCount'] = michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useSearchMessagesLoadingState'] = michal;
    return entity;
})();