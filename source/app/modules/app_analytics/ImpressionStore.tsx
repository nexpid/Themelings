// app/modules/app_analytics/ImpressionStore.tsx
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
    tango = true;
    report['value'] = tango;
    tango = '__esModule';
    tango = options.bind(verify)(zulu, tango, report);
    report = entity.Object;
    tango = report.freeze;
    entity = {};
    options = null;
    entity['debugTrackedData'] = options;
    options = new Array(0);
    entity['impressions'] = options;
    entity = tango.bind(report)(entity);
    var _closure1_slot2 = entity;
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    options = oscar.bind(entity)(tango);
    report = options.createWithEqualityFn;
    tango = function() {
        entity = _closure1_slot2;
        return entity;
    };
    tango = report.bind(options)(tango);
    var _closure1_slot3 = tango;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/app_analytics/ImpressionStore.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) {
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
                entity = {};
                mike = argFoo;
                oscar = mike.impressions;
                mike = new Array(1);
                report = 0;
                golf = mike;
                tango = arraySpread(golf, oscar, report);
                zulu = _closure2_slot0;
                mike[tango] = zulu;
                zulu = 1;
                zulu = tango + zulu;
                entity['impressions'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setCurrentImpression'] = report;
    report = function(argFoo) {
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
                entity = {};
                mike = argFoo;
                tango = mike.impressions;
                zulu = tango.filter;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.sequenceId;
                    entity = _closure2_slot0;
                    entity = entity.sequenceId;
                    entity = mike !== entity;
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                entity['impressions'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['cleanupImpression'] = report;
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
            entity = function() {
                entity = {};
                mike = {};
                tango = _closure2_slot0;
                mike['name'] = tango;
                report = _closure2_slot1;
                oscar = mike;
                zulu = copyDataProperties(oscar, report);
                entity['debugTrackedData'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setDebugTrackedData'] = report;
    zulu['useImpressionStore'] = tango;
    tango = function() { // Original name: getLocation
        entity = {};
        var _closure2_slot0 = entity;
        tango = _closure1_slot3;
        zulu = tango.getState;
        zulu = zulu.bind(tango)();
        tango = zulu.impressions;
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun35911: for(var _fun35911_ip = 0; ; ) switch(_fun35911_ip) {
 0:
                mike = argFoo;
                tango = mike.type;
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 2;
                zulu = zulu[entity];
                entity = undefined;
                zulu = report.bind(entity)(zulu);
                zulu = zulu.ImpressionTypes;
                zulu = zulu.PAGE;
                if(!(tango !== zulu)) { _fun35911_ip = 69; continue _fun35911 }
 49:
                tango = _closure2_slot0;
                zulu = mike.name;
                tango['section'] = zulu;
                _fun35911_ip = 87; continue _fun35911;
 69:
                zulu = _closure2_slot0;
                mike = mike.name;
                zulu['page'] = mike;
 87:
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['getLocation'] = tango;
    mike = function() { // Original name: getImpressionStack
        mike = _closure1_slot3;
        entity = mike.getState;
        entity = entity.bind(mike)();
        entity = entity.impressions;
        return entity;
    };
    zulu['getImpressionStack'] = mike;
    return entity;
})();