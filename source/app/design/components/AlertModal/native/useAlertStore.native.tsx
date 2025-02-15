// app/design/components/AlertModal/native/useAlertStore.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    options = oscar.bind(entity)(tango);
    report = options.create;
    tango = function() {
        entity = {};
        mike = new Array(0);
        entity['alerts'] = mike;
        return entity;
    };
    tango = report.bind(options)(tango);
    var _closure1_slot2 = tango;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/AlertModal/native/useAlertStore.native.tsx';
    report = oscar.bind(golf)(report);
    zulu['useAlertStore'] = tango;
    tango = function() {
        tango = _closure1_slot2;
        zulu = tango.getState;
        zulu = zulu.bind(tango)();
        report = zulu.alerts;
        tango = report.forEach;
        zulu = function(argFoo) {
            _fun56580: for(var _fun56580_ip = 0; ; ) switch(_fun56580_ip) {
 0:
                zulu = argFoo;
                mike = zulu.onDismiss;
                entity = null;
                mike = entity == mike;
                entity = undefined;
                if(mike) { _fun56580_ip = 30; continue _fun56580 }
 20:
                mike = zulu.onDismiss;
                entity = mike.bind(zulu)();
 30:
                return entity;
            }
        };
        zulu = tango.bind(report)(zulu);
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 1;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot2;
            mike = zulu.setState;
            entity = {};
            tango = new Array(0);
            entity['alerts'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['dismissAlerts'] = tango;
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
            _fun56583: for(var _fun56583_ip = 0; ; ) switch(_fun56583_ip) {
 0:
                tango = _closure1_slot2;
                zulu = tango.getState;
                zulu = zulu.bind(tango)();
                report = zulu.alerts;
                tango = report.find;
                zulu = function(argFoo) {
                    entity = argFoo;
                    mike = entity.key;
                    entity = _closure2_slot0;
                    entity = mike === entity;
                    return entity;
                };
                tango = tango.bind(report)(zulu);
                oscar = null;
                zulu = oscar == tango;
                if(zulu) { _fun56583_ip = 59; continue _fun56583 }
 49:
                report = tango.onDismiss;
                zulu = oscar == report;
 59:
                if(zulu) { _fun56583_ip = 72; continue _fun56583 }
 62:
                zulu = tango.onDismiss;
                zulu = zulu.bind(tango)();
 72:
                zulu = _closure1_slot2;
                mike = zulu.setState;
                entity = function(argFoo) {
                    entity = {};
                    mike = argFoo;
                    tango = mike.alerts;
                    zulu = tango.filter;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.key;
                        entity = _closure2_slot0;
                        entity = mike !== entity;
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    entity['alerts'] = mike;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['dismissAlert'] = tango;
    mike = function(argFoo, argBar, argBaz) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 1;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot2;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                mike = argFoo;
                options = mike.alerts;
                mike = new Array(1);
                golf = 0;
                verify = mike;
                tango = arraySpread(verify, options, golf);
                zulu = {};
                oscar = _closure2_slot0;
                zulu['key'] = oscar;
                oscar = _closure2_slot1;
                zulu['node'] = oscar;
                report = _closure2_slot2;
                zulu['onDismiss'] = report;
                mike[tango] = zulu;
                zulu = 1;
                zulu = tango + zulu;
                entity['alerts'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['openAlert'] = mike;
    return entity;
})();