// discord_common/js/packages/flux/ChangeListeners.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function() { // Original name: ChangeListeners
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot0;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = global;
            tango = tango.Set;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            options = report;
            tango = new options[tango](golf);
            tango = tango instanceof Object ? tango : report;
            zulu['listeners'] = tango;
            tango = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.listeners;
                mike = zulu.add;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            zulu['add'] = tango;
            tango = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.listeners;
                mike = zulu.delete;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            zulu['remove'] = tango;
            mike = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zulu = argFoo;
                    tango = arguments[1];
                    var _closure4_slot0 = zulu;
                    entity = undefined;
                    if(!(tango === entity)) { _fun00002_ip = 20; continue _fun00001 }
 18:
                    tango = true;
 20:
                    var _closure4_slot1 = entity;
                    if(!tango) { _fun00002_ip = 37; continue _fun00001 }
 27:
                    tango = zulu.bind(entity)();
                    zulu = false;
                    if(!(zulu !== tango)) { _fun00002_ip = 63; continue _fun00001 }
 37:
                    tango = function() { // Original name: conditionalCallback
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            zulu = _closure4_slot0;
                            entity = undefined;
                            tango = zulu.bind(entity)();
                            zulu = false;
                            if(!(zulu === tango)) { _fun00004_ip = 41; continue _fun00003 }
 19:
                            tango = _closure3_slot0;
                            zulu = tango.remove;
                            mike = _closure4_slot1;
                            mike = zulu.bind(tango)(mike);
 41:
                            return entity;
                        }
                    };
                    _closure4_slot1 = tango;
                    zulu = _closure3_slot0;
                    mike = zulu.add;
                    mike = mike.bind(zulu)(tango);
 63:
                    return entity;
                }
            };
            zulu['addConditional'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'has';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.listeners;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'hasAny';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.listeners;
            mike = entity.size;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'invokeAll';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            zulu = entity.listeners;
            mike = zulu.forEach;
            entity = function(argFoo) {
                mike = argFoo;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/flux/ChangeListeners.tsx';
    tango = report.bind(oscar)(tango);
    zulu['ChangeListeners'] = mike;
    return entity;
})();