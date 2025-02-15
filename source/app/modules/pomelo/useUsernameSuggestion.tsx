// app/modules/pomelo/useUsernameSuggestion.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/pomelo/useUsernameSuggestion.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot0;
        golf = _closure1_slot2;
        oscar = 2;
        mike = golf[oscar];
        report = undefined;
        verify = zulu.bind(report)(mike);
        options = verify.useStateFromStoresArray;
        mike = _closure1_slot4;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            zulu = _closure1_slot4;
            entity = zulu.usernameSuggestion;
            mike = entity.bind(zulu)();
            entity = new Array(2);
            entity[0] = mike;
            mike = zulu.usernameSuggestionLoading;
            mike = mike.bind(zulu)();
            entity[1] = mike;
            return entity;
        };
        zulu = options.bind(verify)(zulu, mike);
        mike = _closure1_slot3;
        oscar = mike.bind(report)(zulu, oscar);
        mike = 0;
        zulu = oscar[mike];
        mike = 1;
        mike = oscar[mike];
        oscar = _closure1_slot1;
        tango = 3;
        tango = golf[tango];
        tango = oscar.bind(report)(tango);
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot4;
                mike = tango.wasSuggestionsFetched;
                mike = mike.bind(tango)();
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                if(mike) { _fun00002_ip = 84; continue _fun00001 }
 32:
                mike = 4;
                report = zulu[mike];
                mike = undefined;
                oscar = tango.bind(mike)(report);
                report = oscar.fetchSuggestions;
                mike = _closure2_slot0;
                oscar = report.bind(oscar)(mike);
                report = oscar.finally;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {'type': 'POMELO_SUGGESTIONS_FETCH', 'usernameSuggestionLoading': false};
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = report.bind(oscar)(mike);
                _fun00002_ip = 122; continue _fun00001;
 84:
                mike = 5;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.dispatch;
                mike = {'type': 'POMELO_SUGGESTIONS_FETCH', 'usernameSuggestionLoading': false};
                mike = zulu.bind(tango)(mike);
 122:
                entity = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 4;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.resetSuggestions;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                return entity;
            }
        };
        entity = tango.bind(report)(entity);
        entity = {};
        entity['usernameSuggestion'] = zulu;
        entity['usernameSuggestionLoading'] = mike;
        return entity;
    };
    zulu['useUsernameSuggestion'] = mike;
    return entity;
})();