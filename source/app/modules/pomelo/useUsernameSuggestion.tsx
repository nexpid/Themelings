// app/modules/pomelo/useUsernameSuggestion.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/pomelo/useUsernameSuggestion.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot0;
        golfie = _closure1_slot2;
        oscard = 2;
        michal = golfie[oscard];
        report = undefined;
        verify = zuuluu.bind(report)(michal);
        option = verify.useStateFromStoresArray;
        michal = _closure1_slot4;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot4;
            entity = zuuluu.usernameSuggestion;
            michal = entity.bind(zuuluu)();
            entity = new Array(2);
            entity[0] = michal;
            michal = zuuluu.usernameSuggestionLoading;
            michal = michal.bind(zuuluu)();
            entity[1] = michal;
            return entity;
        };
        zuuluu = option.bind(verify)(zuuluu, michal);
        michal = _closure1_slot3;
        oscard = michal.bind(report)(zuuluu, oscard);
        michal = 0;
        zuuluu = oscard[michal];
        michal = 1;
        michal = oscard[michal];
        oscard = _closure1_slot1;
        tangon = 3;
        tangon = golfie[tangon];
        tangon = oscard.bind(report)(tangon);
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot4;
                michal = tangon.wasSuggestionsFetched;
                michal = michal.bind(tangon)();
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                if(michal) { _fun00002_ip = 84; continue _fun00001 }
 32:
                michal = 4;
                report = zuuluu[michal];
                michal = undefined;
                oscard = tangon.bind(michal)(report);
                report = oscard.fetchSuggestions;
                michal = _closure2_slot0;
                oscard = report.bind(oscard)(michal);
                report = oscard.finally;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {'type': 'POMELO_SUGGESTIONS_FETCH', 'usernameSuggestionLoading': false};
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = report.bind(oscard)(michal);
                _fun00002_ip = 122; continue _fun00001;
 84:
                michal = 5;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.dispatch;
                michal = {'type': 'POMELO_SUGGESTIONS_FETCH', 'usernameSuggestionLoading': false};
                michal = zuuluu.bind(tangon)(michal);
 122:
                entity = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 4;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.resetSuggestions;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                return entity;
            }
        };
        entity = tangon.bind(report)(entity);
        entity = {};
        entity['usernameSuggestion'] = zuuluu;
        entity['usernameSuggestionLoading'] = michal;
        return entity;
    };
    zuuluu['useUsernameSuggestion'] = michal;
    return entity;
})();