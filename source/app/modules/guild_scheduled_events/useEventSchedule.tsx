// app/modules/guild_scheduled_events/useEventSchedule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _getEventSchedule
        _fun69852: for(var _fun69852_ip = 0; ; ) switch(_fun69852_ip) {
 0:
            zulu = argFoo;
            verify = argBaz;
            entity = zulu.recurrence_rule;
            mike = null;
            if(!(mike != entity)) { _fun69852_ip = 136; continue _fun69852 }
 18:
            if(!(mike != verify)) { _fun69852_ip = 136; continue _fun69852 }
 22:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 1;
            golf = oscar[entity];
            tango = undefined;
            options = report.bind(tango)(golf);
            golf = options.getBaseScheduleForRecurrence;
            golf = golf.bind(options)(verify, zulu);
            entity = oscar[entity];
            oscar = report.bind(tango)(entity);
            report = oscar.getScheduleForRecurrenceWithException;
            entity = argBar;
            entity = report.bind(oscar)(golf, entity);
            golf = entity.startDate;
            oscar = entity.endDate;
            entity = {};
            report = golf.toDate;
            report = report.bind(golf)();
            entity['startTime'] = report;
            report = mike == oscar;
            if(report) { _fun69852_ip = 129; continue _fun69852 }
 119:
            report = oscar.toDate;
            tango = report.bind(oscar)();
 129:
            entity['endTime'] = tango;
            return entity;
 136:
            entity = {};
            tango = global;
            golf = tango.Date;
            yankee = zulu.scheduled_start_time;
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            romeo = oscar;
            report = new romeo[golf](yankee, offset);
            report = report instanceof Object ? report : oscar;
            entity['startTime'] = report;
            report = zulu.scheduled_end_time;
            report = mike != report;
            mike = null;
            if(!report) { _fun69852_ip = 224; continue _fun69852 }
 192:
            report = tango.Date;
            yankee = zulu.scheduled_end_time;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            romeo = tango;
            zulu = new romeo[report](yankee, offset);
            mike = zulu instanceof Object ? zulu : tango;
 224:
            entity['endTime'] = mike;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/useEventSchedule.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useEventSchedule
        _fun69853: for(var _fun69853_ip = 0; ; ) switch(_fun69853_ip) {
 0:
            report = argFoo;
            tango = argBar;
            entity = null;
            if(!(entity == tango)) { _fun69853_ip = 48; continue _fun69853 }
 12:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.getNextRecurrenceIdInEvent;
            tango = entity.bind(mike)(report);
 48:
            zulu = _closure1_slot4;
            oscar = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 2;
            entity = mike[entity];
            mike = undefined;
            oscar = oscar.bind(mike)(entity);
            entity = report.id;
            entity = oscar.bind(mike)(tango, entity);
            entity = zulu.bind(mike)(report, entity, tango);
            return entity;
        }
    };
    zulu['default'] = tango;
    tango = function(argFoo, argBar) { // Original name: useEventScheduleById
        _fun69854: for(var _fun69854_ip = 0; ; ) switch(_fun69854_ip) {
 0:
            oscar = argBar;
            mike = argFoo;
            var _closure2_slot0 = mike;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 3;
            zulu = report[zulu];
            report = undefined;
            golf = tango.bind(report)(zulu);
            tango = golf.useStateFromStores;
            options = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = options;
            entity = function() {
                zulu = _closure1_slot3;
                mike = zulu.getGuildScheduledEvent;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = tango.bind(golf)(zulu, entity);
            entity = null;
            if(!(entity == oscar)) { _fun69854_ip = 104; continue _fun69854 }
 73:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 1;
            zulu = options[zulu];
            golf = golf.bind(report)(zulu);
            zulu = golf.getNextRecurrenceIdInEvent;
            oscar = zulu.bind(golf)(tango);
 104:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 2;
            zulu = options[zulu];
            golf = golf.bind(report)(zulu);
            options = entity == tango;
            zulu = undefined;
            if(options) { _fun69854_ip = 138; continue _fun69854 }
 133:
            zulu = tango.id;
 138:
            zulu = golf.bind(report)(oscar, zulu);
            golf = entity == tango;
            entity = null;
            if(golf) { _fun69854_ip = 164; continue _fun69854 }
 153:
            mike = _closure1_slot4;
            entity = mike.bind(report)(tango, zulu, oscar);
 164:
            return entity;
        }
    };
    zulu['useEventScheduleById'] = tango;
    mike = function(argFoo, argBar) { // Original name: getEventSchedule
        report = argFoo;
        tango = argBar;
        zulu = _closure1_slot4;
        oscar = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 2;
        entity = mike[entity];
        mike = undefined;
        golf = oscar.bind(mike)(entity);
        oscar = golf.getEventException;
        entity = report.id;
        entity = oscar.bind(golf)(tango, entity);
        entity = zulu.bind(mike)(report, entity, tango);
        return entity;
    };
    zulu['getEventSchedule'] = mike;
    return entity;
})();