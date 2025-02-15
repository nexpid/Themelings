// app/lib/ZustandStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: defaultStatesAreEqual
        mike = argFoo;
        entity = argBar;
        entity = mike === entity;
        return entity;
    };
    var _closure1_slot3 = entity;
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
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/ZustandStore.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: createZustandStore
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = function(argFoo, argBar) { // Original name: useState
            tango = _closure2_slot1;
            zulu = undefined;
            mike = argFoo;
            entity = argBar;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        var _closure2_slot3 = report;
        tango = function(argFoo) { // Original name: getState
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = argFoo;
                mike = _closure2_slot1;
                entity = mike.getState;
                zulu = entity.bind(mike)();
                mike = null;
                entity = zulu;
                if(!(mike != tango)) { _fun00002_ip = 36; continue _fun00001 }
 29:
                mike = undefined;
                entity = tango.bind(mike)(zulu);
 36:
                return entity;
            }
        };
        var _closure2_slot4 = tango;
        entity = function(argFoo) { // Original name: makeFieldSelector
            mike = argFoo;
            var _closure3_slot0 = mike;
            entity = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                entity = entity[mike];
                return entity;
            };
            return entity;
        };
        var _closure2_slot5 = entity;
        options = _closure1_slot0;
        verify = _closure1_slot1;
        entity = 1;
        entity = verify[entity];
        golf = undefined;
        oscar = options.bind(golf)(entity);
        zulu = oscar.createWithEqualityFn;
        entity = 2;
        entity = verify[entity];
        options = options.bind(golf)(entity);
        golf = options.subscribeWithSelector;
        entity = function(argFoo, argBar, argBaz) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            report = _closure2_slot0;
            tango = undefined;
            zulu = function(argFoo) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 3;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.batchUpdates;
                entity = function() {
                    zulu = _closure3_slot0;
                    mike = _closure4_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = argBar;
            entity = argBaz;
            entity = report.bind(tango)(zulu, mike, entity);
            return entity;
        };
        entity = golf.bind(options)(entity);
        entity = zulu.bind(oscar)(entity);
        var _closure2_slot1 = entity;
        zulu = function(argFoo) { // Original name: setState
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot1;
                mike = zulu.setState;
                entity = _closure3_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure2_slot2 = zulu;
        entity = {};
        entity['useState'] = report;
        entity['getState'] = tango;
        tango = function(argFoo) { // Original name: useField
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                options = argFoo;
                tango = arguments[1];
                var _closure3_slot0 = options;
                zulu = undefined;
                if(!(tango === zulu)) { _fun00004_ip = 25; continue _fun00003 }
 18:
                tango = _closure1_slot3;
 25:
                mike = _closure2_slot3;
                golf = _closure1_slot2;
                oscar = golf.useMemo;
                report = new Array(1);
                report[0] = options;
                entity = function() {
                    zulu = _closure2_slot5;
                    mike = _closure3_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = oscar.bind(golf)(entity, report);
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            }
        };
        entity['useField'] = tango;
        tango = function(argFoo) { // Original name: getField
            zulu = _closure2_slot4;
            tango = _closure2_slot5;
            mike = undefined;
            entity = argFoo;
            entity = tango.bind(mike)(entity);
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        entity['getField'] = tango;
        tango = function(argFoo, argBar, argBaz) { // Original name: subscribe
            report = _closure2_slot1;
            tango = report.subscribe;
            zulu = argFoo;
            mike = argBar;
            entity = argBaz;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        };
        entity['subscribe'] = tango;
        entity['setState'] = zulu;
        mike = function() { // Original name: resetState
            zulu = _closure2_slot1;
            mike = zulu.getInitialState;
            zulu = mike.bind(zulu)();
            mike = _closure2_slot2;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        entity['resetState'] = mike;
        return entity;
    };
    zulu['createZustandStore'] = mike;
    return entity;
})();