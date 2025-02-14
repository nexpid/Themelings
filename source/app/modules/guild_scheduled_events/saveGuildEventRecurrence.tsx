// app/modules/guild_scheduled_events/saveGuildEventRecurrence.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 3;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/saveGuildEventRecurrence.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: saveGuildEventRecurrence
        _fun76201: for(var _fun76201_ip = 0; ; ) switch(_fun76201_ip) {
 0:
            zulu = argFoo;
            options = argBar;
            yankee = argBaz;
            mike = argCorge;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            foxtrot = 0;
            golf = tango[foxtrot];
            entity = undefined;
            verify = report.bind(entity)(golf);
            golf = verify.getBaseScheduleForRecurrence;
            offset = golf.bind(verify)(options, zulu);
            tango = tango[foxtrot];
            verify = report.bind(entity)(tango);
            golf = verify.areDatesIdentical;
            report = offset.startDate;
            tango = yankee.startDate;
            report = golf.bind(verify)(report, tango);
            tango = null;
            romeo = null;
            if(report) { _fun76201_ip = 94; continue _fun76201 }
 88:
            romeo = yankee.startDate;
 94:
            golf = _closure1_slot0;
            report = _closure1_slot2;
            report = report[foxtrot];
            backup = golf.bind(entity)(report);
            verify = backup.areDatesIdentical;
            golf = offset.endDate;
            report = yankee.endDate;
            report = verify.bind(backup)(golf, report);
            verify = null;
            if(report) { _fun76201_ip = 146; continue _fun76201 }
 140:
            verify = yankee.endDate;
 146:
            if(!(tango == mike)) { _fun76201_ip = 324; continue _fun76201 }
 153:
            golf = _closure1_slot1;
            backup = _closure1_slot2;
            report = 2;
            report = backup[report];
            kilo = golf.bind(entity)(report);
            report = kilo.extractTimestamp;
            output = report.bind(kilo)(options);
            report = 1;
            report = backup[report];
            sizing = golf.bind(entity)(report);
            kilo = sizing.createGuildEventException;
            backup = {};
            report = global;
            report = report.Date;
            golf = report.prototype;
            golf = Object.create(golf, {constructor: {value: report}});
            control = golf;
            source = output;
            report = new control[report](source, update);
            golf = report instanceof Object ? report : golf;
            report = golf.toISOString;
            report = report.bind(golf)();
            backup['original_scheduled_start_time'] = report;
            golf = tango == romeo;
            report = undefined;
            if(golf) { _fun76201_ip = 269; continue _fun76201 }
 259:
            golf = romeo.toISOString;
            report = golf.bind(romeo)();
 269:
            backup['scheduled_start_time'] = report;
            golf = tango == verify;
            report = undefined;
            if(golf) { _fun76201_ip = 293; continue _fun76201 }
 283:
            golf = verify.toISOString;
            report = golf.bind(verify)();
 293:
            backup['scheduled_end_time'] = report;
            report = false;
            backup['is_canceled'] = report;
            golf = zulu.guild_id;
            report = zulu.id;
            report = kilo.bind(sizing)(backup, golf, report);
            return report;
 324:
            golf = _closure1_slot0;
            report = _closure1_slot2;
            report = report[foxtrot];
            golf = golf.bind(entity)(report);
            report = golf.areSchedulesIdentical;
            report = report.bind(golf)(yankee, offset);
            golf = _closure1_slot1;
            offset = _closure1_slot2;
            oscar = 1;
            oscar = offset[oscar];
            oscar = golf.bind(entity)(oscar);
            if(report) { _fun76201_ip = 468; continue _fun76201 }
 376:
            golf = oscar.updateGuildEventException;
            report = {};
            yankee = tango == romeo;
            offset = undefined;
            if(yankee) { _fun76201_ip = 403; continue _fun76201 }
 393:
            yankee = romeo.toISOString;
            offset = yankee.bind(romeo)();
 403:
            report['scheduled_start_time'] = offset;
            tango = tango == verify;
            entity = undefined;
            if(tango) { _fun76201_ip = 427; continue _fun76201 }
 417:
            tango = verify.toISOString;
            entity = tango.bind(verify)();
 427:
            report['scheduled_end_time'] = entity;
            entity = mike.is_canceled;
            report['is_canceled'] = entity;
            update = zulu.guild_id;
            echo = zulu.id;
            control = oscar;
            source = report;
            result = options;
            entity = control[golf](source, update, echo, result, output);
            _fun76201_ip = 497; continue _fun76201;
 468:
            report = oscar.deleteGuildEventException;
            tango = zulu.guild_id;
            zulu = zulu.id;
            mike = mike.event_exception_id;
            entity = report.bind(oscar)(tango, zulu, mike);
 497:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();