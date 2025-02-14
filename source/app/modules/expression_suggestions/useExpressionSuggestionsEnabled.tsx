// app/modules/expression_suggestions/useExpressionSuggestionsEnabled.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    tango = function() { // Original name: useExpressionSuggestionsDisabled
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.ExpressionSuggestionsDisabledExperiment;
        mike = zulu.useExperiment;
        entity = {};
        tango = 'ExpressionSuggestions';
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = entity.disabled;
        return entity;
    };
    var _closure1_slot2 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 2;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/expression_suggestions/useExpressionSuggestionsEnabled.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: setExpressionSuggestionsEnabled
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.ExpressionSuggestionsEnabled;
        zulu = tango.updateSetting;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setExpressionSuggestionsEnabled'] = report;
    zulu['useExpressionSuggestionsDisabled'] = tango;
    mike = function() { // Original name: useExpressionSuggestionsEnabled
        _fun97699: for(var _fun97699_ip = 0; ; ) switch(_fun97699_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 0;
            mike = zulu[mike];
            zulu = undefined;
            mike = tango.bind(zulu)(mike);
            tango = mike.ExpressionSuggestionsEnabled;
            mike = tango.useSetting;
            mike = mike.bind(tango)();
            entity = _closure1_slot2;
            entity = entity.bind(zulu)();
            entity = !entity;
            if(!entity) { _fun97699_ip = 57; continue _fun97699 }
 54:
            entity = mike;
 57:
            return entity;
        }
    };
    zulu['useExpressionSuggestionsEnabled'] = mike;
    return entity;
})();