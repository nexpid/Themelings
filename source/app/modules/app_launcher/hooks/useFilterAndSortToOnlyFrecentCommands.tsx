// app/modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useFilterAndSortToOnlyFrecentCommands
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            offset = zulu.context;
            mike = zulu.commands;
            var _closure2_slot0 = mike;
            report = zulu.limit;
            options = undefined;
            if(!(report === options)) { _fun00002_ip = 37; continue _fun00001 }
 32:
            report = mike.length;
 37:
            var _closure2_slot1 = report;
            var _closure2_slot2 = options;
            var _closure2_slot3 = options;
            var _closure2_slot4 = options;
            golf = _closure1_slot0;
            verify = _closure1_slot1;
            tango = 2;
            tango = verify[tango];
            oscar = golf.bind(options)(tango);
            tango = oscar.useCommandContext;
            oscar = tango.bind(oscar)(offset);
            _closure2_slot2 = oscar;
            tango = 3;
            tango = verify[tango];
            golf = golf.bind(options)(tango);
            tango = golf.useTopCommands;
            options = tango.bind(golf)(oscar);
            _closure2_slot3 = options;
            tango = _closure1_slot2;
            golf = tango.useMemo;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                tango = _closure2_slot0;
                zulu = tango.reduce;
                mike = function(argFoo, argBar) {
                    entity = argFoo;
                    zulu = argBar;
                    mike = zulu.id;
                    entity[mike] = zulu;
                    return entity;
                };
                entity = {};
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf = golf.bind(tango)(mike, zulu);
            _closure2_slot4 = golf;
            zulu = tango.useMemo;
            mike = new Array(4);
            mike[0] = options;
            mike[1] = golf;
            mike[2] = oscar;
            mike[3] = report;
            entity = function() {
                report = _closure2_slot3;
                tango = report.map;
                zulu = function(argFoo) {
                    mike = _closure2_slot4;
                    entity = argFoo;
                    entity = mike[entity];
                    return entity;
                };
                report = tango.bind(report)(zulu);
                tango = report.filter;
                zulu = function(argFoo) {
                    mike = null;
                    entity = argFoo;
                    entity = mike != entity;
                    return entity;
                };
                tango = tango.bind(report)(zulu);
                zulu = tango.sort;
                mike = function(argFoo, argBar) {
                    report = _closure1_slot3;
                    tango = report.getScoreWithoutLoadingLatest;
                    zulu = _closure2_slot2;
                    mike = argFoo;
                    mike = tango.bind(report)(zulu, mike);
                    tango = report.getScoreWithoutLoadingLatest;
                    zulu = _closure2_slot2;
                    entity = argBar;
                    entity = tango.bind(report)(zulu, entity);
                    entity = entity - mike;
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                zulu = tango.slice;
                mike = _closure2_slot1;
                entity = 0;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();