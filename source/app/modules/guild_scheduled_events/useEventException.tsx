// app/modules/guild_scheduled_events/useEventException.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _getEventException
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = null;
            zulu = entity == tango;
            entity = undefined;
            if(zulu) { _fun00002_ip = 40; continue _fun00001 }
 23:
            zulu = tango.find;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.event_exception_id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 40:
            return entity;
        }
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
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/useEventException.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useEventException
        mike = argBar;
        var _closure2_slot0 = mike;
        tango = _closure1_slot3;
        oscar = _closure1_slot0;
        report = _closure1_slot1;
        zulu = 1;
        report = report[zulu];
        zulu = undefined;
        oscar = oscar.bind(zulu)(report);
        report = oscar.useStateFromStoresArray;
        golf = _closure1_slot2;
        mike = new Array(1);
        mike[0] = golf;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure1_slot2;
                mike = zulu.getGuildScheduledEvent;
                entity = _closure2_slot0;
                zulu = mike.bind(zulu)(entity);
                mike = null;
                tango = mike == zulu;
                entity = undefined;
                if(tango) { _fun00004_ip = 42; continue _fun00003 }
 36:
                entity = zulu.guild_scheduled_event_exceptions;
 42:
                if(!(mike == entity)) { _fun00004_ip = 50; continue _fun00003 }
 46:
                entity = new Array(0);
 50:
                return entity;
            }
        };
        mike = report.bind(oscar)(mike, entity);
        entity = argFoo;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo, argBar) { // Original name: getEventException
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = _closure1_slot3;
            zulu = _closure1_slot2;
            mike = zulu.getGuildScheduledEvent;
            entity = argBar;
            report = mike.bind(zulu)(entity);
            entity = null;
            oscar = entity == report;
            zulu = undefined;
            mike = undefined;
            if(oscar) { _fun00006_ip = 44; continue _fun00005 }
 38:
            mike = report.guild_scheduled_event_exceptions;
 44:
            if(!(entity == mike)) { _fun00006_ip = 52; continue _fun00005 }
 48:
            mike = new Array(0);
 52:
            entity = argFoo;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    zulu['getEventException'] = mike;
    return entity;
})();