// app/modules/search_v2/native/hooks/useSearchScreenLoading.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.useIsAutocompleteVisible;
    var _closure1_slot3 = golfie;
    golfie = tangon.useIsInitialSearchQuery;
    var _closure1_slot4 = golfie;
    tangon = tangon.useSearchResultsQuery;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/hooks/useSearchScreenLoading.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useIsPlaceholderVisible
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.searchContext;
            michal = entity.data;
            zuuluu = _closure1_slot4;
            entity = undefined;
            entity = zuuluu.bind(entity)(tangon);
            entity = !entity;
            if(!entity) { _fun00002_ip = 45; continue _fun00001 }
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
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = michal.searchContext;
            var _closure2_slot0 = report;
            zuuluu = _closure1_slot5;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(report);
            var _closure2_slot1 = zuuluu;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 3;
            zuuluu = golfie[zuuluu];
            golfie = oscard.bind(tangon)(zuuluu);
            oscard = golfie.useStateFromStores;
            option = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 4;
                zuuluu = zuuluu[michal];
                michal = undefined;
                oscard = tangon.bind(michal)(zuuluu);
                report = oscard.getSearchTabFetchId;
                tangon = _closure2_slot0;
                zuuluu = _closure1_slot6;
                michal = _closure2_slot1;
                zuuluu = report.bind(oscard)(tangon, zuuluu, michal);
                michal = _closure1_slot2;
                entity = michal.getIsInitialFetchComplete;
                entity = entity.bind(michal)(zuuluu);
                entity = !entity;
                return entity;
            };
            entity = oscard.bind(golfie)(zuuluu, entity);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(tangon)(report);
            michal = _closure1_slot3;
            michal = michal.bind(tangon)(report);
            if(!entity) { _fun00004_ip = 107; continue _fun00003 }
 104:
            entity = !zuuluu;
 107:
            if(!entity) { _fun00004_ip = 113; continue _fun00003 }
 110:
            entity = !michal;
 113:
            return entity;
        }
    };
    zuuluu['useIsSearchSpinnerVisible'] = michal;
    return entity;
})();