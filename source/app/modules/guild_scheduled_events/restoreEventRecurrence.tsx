// app/modules/guild_scheduled_events/restoreEventRecurrence.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/restoreEventRecurrence.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: restoreEventRecurrence
        _fun102888: for(var _fun102888_ip = 0; ; ) switch(_fun102888_ip) {
 0:
            entity = argFoo;
            oscar = argBar;
            report = argBaz;
            tango = argCorge;
            options = entity.scheduled_start_time;
            golf = entity.scheduled_end_time;
            entity = null;
            if(!(entity == options)) { _fun102888_ip = 34; continue _fun102888 }
 30:
            if(!(entity != golf)) { _fun102888_ip = 104; continue _fun102888 }
 34:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 0;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.updateGuildEventException;
            entity = {};
            entity['scheduled_start_time'] = options;
            entity['scheduled_end_time'] = golf;
            golf = false;
            entity['is_canceled'] = golf;
            foxtrot = zulu;
            romeo = entity;
            yankee = oscar;
            offset = report;
            verify = tango;
            entity = foxtrot[mike](romeo, yankee, offset, verify, options);
            _fun102888_ip = 141; continue _fun102888;
 104:
            golf = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 0;
            zulu = zulu[mike];
            mike = undefined;
            zulu = golf.bind(mike)(zulu);
            mike = zulu.deleteGuildEventException;
            entity = mike.bind(zulu)(oscar, report, tango);
 141:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();