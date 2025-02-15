// app/modules/search_v2/native/hooks/useMessageSearchTabCounts.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useSearchResultsQuery;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MESSAGE_SEARCH_RESULT_TABS;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/hooks/useMessageSearchTabCounts.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useMessageSearchTabCounts
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        zulu = _closure1_slot3;
        report = undefined;
        golf = zulu.bind(report)(oscar);
        var _closure2_slot1 = golf;
        tango = _closure1_slot0;
        options = _closure1_slot1;
        zulu = 3;
        zulu = options[zulu];
        report = tango.bind(report)(zulu);
        tango = report.useStateFromStoresObject;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            tango = _closure1_slot4;
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    zulu = argBar;
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    tango = 4;
                    report = report[tango];
                    tango = undefined;
                    golf = oscar.bind(tango)(report);
                    oscar = golf.getSearchTabFetchId;
                    report = _closure2_slot0;
                    tango = _closure2_slot1;
                    report = oscar.bind(golf)(report, zulu, tango);
                    tango = _closure1_slot2;
                    mike = tango.getTotalCount;
                    tango = mike.bind(tango)(report);
                    mike = null;
                    report = mike != tango;
                    if(!report) { _fun00002_ip = 82; continue _fun00001 }
 79:
                    mike = tango;
 82:
                    entity[zulu] = mike;
                    return entity;
                }
            };
            entity = {};
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useMessageSearchTabCounts'] = mike;
    return entity;
})();