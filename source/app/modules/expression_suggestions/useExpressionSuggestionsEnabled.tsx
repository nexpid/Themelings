// app/modules/expression_suggestions/useExpressionSuggestionsEnabled.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    tangon = function() { // Original name: useExpressionSuggestionsDisabled
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.ExpressionSuggestionsDisabledExperiment;
        michal = zuuluu.useExperiment;
        entity = {};
        tangon = 'ExpressionSuggestions';
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.disabled;
        return entity;
    };
    var _closure1_slot2 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 2;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/expression_suggestions/useExpressionSuggestionsEnabled.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: setExpressionSuggestionsEnabled
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.ExpressionSuggestionsEnabled;
        zuuluu = tangon.updateSetting;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setExpressionSuggestionsEnabled'] = report;
    zuuluu['useExpressionSuggestionsDisabled'] = tangon;
    michal = function() { // Original name: useExpressionSuggestionsEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 0;
            michal = zuuluu[michal];
            zuuluu = undefined;
            michal = tangon.bind(zuuluu)(michal);
            tangon = michal.ExpressionSuggestionsEnabled;
            michal = tangon.useSetting;
            michal = michal.bind(tangon)();
            entity = _closure1_slot2;
            entity = entity.bind(zuuluu)();
            entity = !entity;
            if(!entity) { _fun00002_ip = 57; continue _fun00001 }
 54:
            entity = michal;
 57:
            return entity;
        }
    };
    zuuluu['useExpressionSuggestionsEnabled'] = michal;
    return entity;
})();