// app/lib/AutomaticLifecycleManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: AutomaticLifecycleManager
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = 0;
            zulu['initializedCount'] = mike;
            mike = {};
            zulu['actions'] = mike;
            mike = global;
            mike = mike.Map;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            golf = tango;
            mike = new golf[mike](oscar);
            mike = mike instanceof Object ? mike : tango;
            zulu['stores'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'initialize';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun58706: for(var _fun58706_ip = 0; ; ) switch(_fun58706_ip) {
 0:
                mike = this;
                zulu = mike.initializedCount;
                zulu = zulu + 1;
                mike['initializedCount'] = zulu;
                tango = mike.initializedCount;
                zulu = 1;
                if(!(!(tango > zulu))) { _fun58706_ip = 104; continue _fun58706 }
 33:
                zulu = mike._initialize;
                zulu = zulu.bind(mike)();
                zulu = global;
                report = zulu.Object;
                tango = report.entries;
                zulu = mike.actions;
                report = tango.bind(report)(zulu);
                tango = report.forEach;
                zulu = function(argFoo) {
                    _fun58707: for(var _fun58707_ip = 0; ; ) switch(_fun58707_ip) {
 0:
                        tango = argFoo;
                        mike = tango[Symbol.iterator];
                        tango = mike().next;
                        oscar = tango().value;
                        zulu = mike;
                        entity = undefined;
                        zulu = zulu === entity;
                        report = undefined;
                        if(zulu) { _fun58707_ip = 27; continue _fun58707 }
 24:
                        report = oscar;
 27:
                        oscar = undefined;
                        if(zulu) { _fun58707_ip = 57; continue _fun58707 }
 32:
                        golf = tango().value;
                        tango = mike;
                        tango = tango === entity;
                        oscar = undefined;
                        zulu = tango;
                        if(tango) { _fun58707_ip = 57; continue _fun58707 }
 51:
                        oscar = golf;
                        zulu = tango;
 57:
                        if(zulu) { _fun58707_ip = 63; continue _fun58707 }
 60:
                        mike.return();
 63:
                        zulu = _closure1_slot0;
                        tango = _closure1_slot1;
                        mike = 2;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.subscribe;
                        options = 'function';
                        golf = typeof oscar;
                        mike = oscar;
                        if(!(options !== golf)) { _fun58707_ip = 112; continue _fun58707 }
 106:
                        mike = oscar.callback;
 112:
                        mike = zulu.bind(tango)(report, mike);
                        return entity;
                    }
                };
                zulu = tango.bind(report)(zulu);
                zulu = mike.stores;
                mike = zulu.forEach;
                entity = function(argFoo, argBar) {
                    mike = argFoo;
                    zulu = argBar;
                    entity = zulu.addChangeListener;
                    entity = entity.bind(zulu)(mike);
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 104:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'terminate';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun58709: for(var _fun58709_ip = 0; ; ) switch(_fun58709_ip) {
 0:
                entity = this;
                mike = entity.initializedCount;
                zulu = 0;
                if(!(!(mike <= zulu))) { _fun58709_ip = 106; continue _fun58709 }
 15:
                mike = argFoo;
                if(mike) { _fun58709_ip = 38; continue _fun58709 }
 21:
                mike = entity.initializedCount;
                mike = mike - 1;
                entity['initializedCount'] = mike;
                _fun58709_ip = 44; continue _fun58709;
 38:
                entity['initializedCount'] = zulu;
 44:
                mike = entity.initializedCount;
                if(!(zulu === mike)) { _fun58709_ip = 106; continue _fun58709 }
 54:
                mike = entity._terminate;
                mike = mike.bind(entity)();
                mike = global;
                zulu = mike.Object;
                mike = zulu.entries;
                entity = entity.actions;
                zulu = mike.bind(zulu)(entity);
                mike = zulu.forEach;
                entity = function(argFoo) {
                    _fun58710: for(var _fun58710_ip = 0; ; ) switch(_fun58710_ip) {
 0:
                        tango = argFoo;
                        mike = tango[Symbol.iterator];
                        tango = mike().next;
                        oscar = tango().value;
                        zulu = mike;
                        entity = undefined;
                        zulu = zulu === entity;
                        report = undefined;
                        if(zulu) { _fun58710_ip = 27; continue _fun58710 }
 24:
                        report = oscar;
 27:
                        oscar = undefined;
                        if(zulu) { _fun58710_ip = 57; continue _fun58710 }
 32:
                        golf = tango().value;
                        tango = mike;
                        tango = tango === entity;
                        oscar = undefined;
                        zulu = tango;
                        if(tango) { _fun58710_ip = 57; continue _fun58710 }
 51:
                        oscar = golf;
                        zulu = tango;
 57:
                        if(zulu) { _fun58710_ip = 63; continue _fun58710 }
 60:
                        mike.return();
 63:
                        zulu = _closure1_slot0;
                        tango = _closure1_slot1;
                        mike = 2;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.unsubscribe;
                        options = 'function';
                        golf = typeof oscar;
                        mike = oscar;
                        if(!(options !== golf)) { _fun58710_ip = 112; continue _fun58710 }
 106:
                        mike = oscar.callback;
 112:
                        mike = zulu.bind(tango)(report, mike);
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
 106:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = '_initialize';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = '_terminate';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'lib/AutomaticLifecycleManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();