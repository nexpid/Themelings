// app/modules/gplay/native/GPlayAnalyticsStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    mike = true;
    report['value'] = mike;
    mike = '__esModule';
    mike = options.bind(verify)(zulu, mike, report);
    report = entity.Object;
    mike = report.freeze;
    entity = {};
    options = {};
    entity['analyticsByProductId'] = options;
    entity = mike.bind(report)(entity);
    var _closure1_slot2 = entity;
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    options = oscar.bind(entity)(mike);
    report = options.create;
    mike = function() {
        entity = _closure1_slot2;
        return entity;
    };
    mike = report.bind(options)(mike);
    var _closure1_slot3 = mike;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/gplay/native/GPlayAnalyticsStore.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 1;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot3;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                mike = {};
                zulu = argFoo;
                report = zulu.analyticsByProductId;
                oscar = mike;
                zulu = copyDataProperties(oscar, report);
                tango = _closure2_slot0;
                zulu = _closure2_slot1;
                mike[tango] = zulu;
                entity['analyticsByProductId'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setGPlayAnalytics'] = report;
    tango = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 1;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot3;
            mike = zulu.setState;
            entity = function(argFoo) {
                mike = {};
                entity = argFoo;
                zulu = entity.analyticsByProductId;
                tango = mike;
                entity = copyDataProperties(tango, zulu);
                entity = _closure2_slot0;
                entity = delete mike[entity];
                entity = {};
                entity['analyticsByProductId'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['deleteGPlayAnalytics'] = tango;
    zulu['useGPlayAnalyticsStore'] = mike;
    return entity;
})();