// discord_common/js/shared/utils/MutexUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/shared/utils/MutexUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: createLock
        mike = global;
        tango = mike.Promise;
        zulu = tango.resolve;
        mike = null;
        mike = zulu.bind(tango)(mike);
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            tango = function(argFoo, argBar) {
                tango = _closure2_slot0;
                zulu = tango.then;
                entity = _closure3_slot0;
                report = zulu.bind(tango)(entity);
                tango = report.then;
                zulu = argFoo;
                entity = argBar;
                entity = tango.bind(report)(zulu, entity);
                _closure2_slot0 = entity;
                entity = undefined;
                return entity;
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        return entity;
    };
    zulu['createLock'] = tango;
    mike = function(argFoo) { // Original name: createObservableLock
        entity = argFoo;
        zulu = global;
        report = zulu.Promise;
        tango = report.resolve;
        zulu = null;
        zulu = tango.bind(report)(zulu);
        var _closure2_slot0 = zulu;
        zulu = new Array(0);
        var _closure2_slot1 = zulu;
        zulu = false;
        var _closure2_slot2 = zulu;
        zulu = entity.onContention;
        var _closure2_slot3 = zulu;
        zulu = entity.onContentionResolved;
        var _closure2_slot4 = zulu;
        zulu = entity.onTimeout;
        var _closure2_slot5 = zulu;
        entity = entity.timeoutMs;
        var _closure2_slot6 = entity;
        entity = function(argFoo, argBar) { // Original name: mutex
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argBar;
                mike = argFoo;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = report;
                mike = _closure2_slot1;
                tango = mike.length;
                mike = 0;
                if(!(!(tango > mike))) { _fun00002_ip = 59; continue _fun00001 }
 34:
                mike = _closure2_slot2;
                if(!mike) { _fun00002_ip = 81; continue _fun00001 }
 41:
                tango = _closure2_slot4;
                mike = undefined;
                mike = tango.bind(mike)();
                mike = false;
                _closure2_slot2 = mike;
                _fun00002_ip = 81; continue _fun00001;
 59:
                oscar = _closure2_slot3;
                tango = _closure2_slot1;
                mike = undefined;
                mike = oscar.bind(mike)(report, tango);
                mike = true;
                _closure2_slot2 = mike;
 81:
                tango = _closure2_slot1;
                mike = tango.push;
                mike = mike.bind(tango)(report);
                mike = _closure2_slot6;
                report = null;
                tango = report == mike;
                mike = null;
                if(tango) { _fun00002_ip = 150; continue _fun00001 }
 110:
                tango = _closure2_slot5;
                tango = report == tango;
                mike = null;
                if(tango) { _fun00002_ip = 150; continue _fun00001 }
 123:
                tango = global;
                oscar = tango.setTimeout;
                report = _closure2_slot6;
                tango = undefined;
                zulu = function() {
                    tango = _closure2_slot5;
                    zulu = _closure3_slot1;
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                mike = oscar.bind(tango)(zulu, report);
 150:
                var _closure3_slot2 = mike;
                mike = global;
                zulu = mike.Promise;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                options = function(argFoo, argBar) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        oscar = _closure2_slot0;
                        report = oscar.then;
                        tango = _closure3_slot0;
                        golf = report.bind(oscar)(tango);
                        oscar = golf.then;
                        report = argFoo;
                        tango = argBar;
                        oscar = oscar.bind(golf)(report, tango);
                        report = oscar.then;
                        tango = function() {
                            tango = _closure2_slot1;
                            zulu = tango.splice;
                            mike = 0;
                            entity = 1;
                            entity = zulu.bind(tango)(mike, entity);
                            return entity;
                        };
                        tango = report.bind(oscar)(tango);
                        _closure2_slot0 = tango;
                        tango = _closure3_slot2;
                        zulu = null;
                        if(!(zulu != tango)) { _fun00004_ip = 99; continue _fun00003 }
 74:
                        tango = _closure2_slot0;
                        zulu = tango.then;
                        entity = function() {
                            entity = global;
                            zulu = entity.clearTimeout;
                            mike = _closure3_slot2;
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            return entity;
                        };
                        entity = zulu.bind(tango)(entity);
                        _closure2_slot0 = entity;
 99:
                        entity = undefined;
                        return entity;
                    }
                };
                verify = mike;
                entity = new verify[zulu](options, golf);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        zulu = function() {
            entity = _closure2_slot1;
            mike = entity.length;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        entity['isMutexHeld'] = zulu;
        mike = function() {
            entity = _closure2_slot1;
            return entity;
        };
        entity['getLockHolders'] = mike;
        return entity;
    };
    zulu['createObservableLock'] = mike;
    return entity;
})();