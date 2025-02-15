// app/modules/panels/morphable/native/SafeAreaDisabledStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    golf = report.bind(entity)(tango);
    tango = golf.create;
    mike = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        zulu = global;
        zulu = zulu.Set;
        tango = zulu.prototype;
        tango = Object.create(tango, {constructor: {value: zulu}});
        report = tango;
        zulu = new report[zulu](tango);
        zulu = zulu instanceof Object ? zulu : tango;
        entity['lockKeys'] = zulu;
        zulu = function() { // Original name: shouldDisableSafeAreas
            mike = _closure2_slot1;
            entity = undefined;
            entity = mike.bind(entity)();
            entity = entity.lockKeys;
            mike = entity.size;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        entity['shouldDisableSafeAreas'] = zulu;
        mike = function(argFoo) { // Original name: requestSafeAreaDisableLock
            entity = argFoo;
            zulu = entity.key;
            var _closure3_slot0 = zulu;
            entity = entity.lockEnabled;
            var _closure3_slot1 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                entity = undefined;
                mike = function(argFoo) {
                    _fun76026: for(var _fun76026_ip = 0; ; ) switch(_fun76026_ip) {
 0:
                        tango = argFoo;
                        entity = _closure3_slot1;
                        oscar = tango.lockKeys;
                        report = oscar.has;
                        mike = _closure3_slot0;
                        mike = report.bind(oscar)(mike);
                        if(entity) { _fun76026_ip = 106; continue _fun76026 }
 33:
                        if(mike) { _fun76026_ip = 38; continue _fun76026 }
 36:
                        return tango;
 38:
                        entity = global;
                        entity = entity.Set;
                        report = entity.prototype;
                        report = Object.create(report, {constructor: {value: entity}});
                        yankee = report;
                        offset = oscar;
                        entity = new yankee[entity](offset, verify);
                        oscar = entity instanceof Object ? entity : report;
                        report = oscar.delete;
                        entity = _closure3_slot0;
                        entity = report.bind(oscar)(entity);
                        entity = {};
                        offset = entity;
                        verify = tango;
                        report = copyDataProperties(offset, verify);
                        report = 'lockKeys';
                        entity[report] = oscar;
                        return entity;
 106:
                        entity = tango;
                        if(mike) { _fun76026_ip = 211; continue _fun76026 }
 112:
                        mike = {};
                        offset = mike;
                        verify = tango;
                        report = copyDataProperties(offset, verify);
                        oscar = global;
                        report = oscar.Set;
                        golf = _closure3_slot0;
                        zulu = new Array(1);
                        zulu[0] = golf;
                        golf = oscar.Array;
                        oscar = golf.from;
                        tango = tango.lockKeys;
                        verify = oscar.bind(golf)(tango);
                        options = 1;
                        offset = zulu;
                        tango = arraySpread(offset, verify, options);
                        tango = report.prototype;
                        tango = Object.create(tango, {constructor: {value: report}});
                        yankee = tango;
                        offset = zulu;
                        zulu = new yankee[report](offset, verify);
                        tango = zulu instanceof Object ? zulu : tango;
                        zulu = 'lockKeys';
                        mike[zulu] = tango;
                        entity = mike;
 211:
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['requestSafeAreaDisableLock'] = mike;
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/panels/morphable/native/SafeAreaDisabledStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();