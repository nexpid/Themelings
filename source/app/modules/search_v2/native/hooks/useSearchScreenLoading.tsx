// app/modules/search_v2/native/hooks/useSearchScreenLoading.tsx
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
    tangon = tangon.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot4 = tangon;
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
            report = entity.searchContext;
            michal = entity.data;
            tangon = _closure1_slot3;
            zuuluu = tangon.useState;
            entity = function(argFoo) {
                michal = argFoo;
                entity = michal.isInitialSearchQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = zuuluu.bind(tangon)(report, entity);
            entity = !entity;
            if(!entity) { _fun00002_ip = 58; continue _fun00001 }
 47:
            zuuluu = michal.length;
            michal = 0;
            entity = michal === zuuluu;
 58:
            return entity;
        }
    };
    zuuluu['useIsPlaceholderVisible'] = tangon;
    michal = function(argFoo) { // Original name: useIsSearchSpinnerVisible
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.searchContext;
            var _closure2_slot0 = oscard;
            report = _closure1_slot3;
            tangon = report.useState;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.getSearchResultsQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            var _closure2_slot1 = zuuluu;
            golfie = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 3;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            golfie = golfie.bind(zuuluu)(tangon);
            tangon = golfie.useStateFromStores;
            entity = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 4;
                zuuluu = zuuluu[michal];
                michal = undefined;
                oscard = tangon.bind(michal)(zuuluu);
                report = oscard.getSearchTabFetchId;
                tangon = _closure2_slot0;
                zuuluu = _closure1_slot4;
                michal = _closure2_slot1;
                zuuluu = report.bind(oscard)(tangon, zuuluu, michal);
                michal = _closure1_slot2;
                entity = michal.getIsInitialFetchComplete;
                entity = entity.bind(michal)(zuuluu);
                entity = !entity;
                return entity;
            };
            entity = tangon.bind(golfie)(zuuluu, entity);
            tangon = report.useState;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.isInitialSearchQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            tangon = report.useState;
            michal = function(argFoo) {
                michal = argFoo;
                entity = michal.isAutocompleteVisible;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = tangon.bind(report)(oscard, michal);
            if(!entity) { _fun00004_ip = 138; continue _fun00003 }
 135:
            entity = !zuuluu;
 138:
            if(!entity) { _fun00004_ip = 144; continue _fun00003 }
 141:
            entity = !michal;
 144:
            return entity;
        }
    };
    zuuluu['useIsSearchSpinnerVisible'] = michal;
    return entity;
})();