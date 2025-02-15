// app/modules/guild_scheduled_events/GuildScheduledEventUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    tango = report.bind(entity)(tango);
    golf = tango.UpcomingGuildEventNoticeTypes;
    var _closure1_slot2 = golf;
    golf = tango.NEW_EVENT_WINDOW_MILLISECONDS;
    var _closure1_slot3 = golf;
    golf = tango.EVENT_STARTING_SOON_WINDOW_MILLISECONDS;
    var _closure1_slot4 = golf;
    tango = tango.ACKED_RECENTLY_WINDOW_DAYS;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/GuildScheduledEventUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: getNextShownUpcomingEventNoticeType
        _fun76127: for(var _fun76127_ip = 0; ; ) switch(_fun76127_ip) {
 0:
            verify = argFoo;
            golf = argBar;
            oscar = argBaz;
            zulu = argCorge;
            report = _closure1_slot0;
            entity = _closure1_slot1;
            offset = 1;
            entity = entity[offset];
            tango = undefined;
            entity = report.bind(tango)(entity);
            romeo = entity.bind(tango)();
            entity = global;
            yankee = entity.Date;
            output = verify.scheduled_start_time;
            options = yankee.prototype;
            options = Object.create(options, {constructor: {value: yankee}});
            result = options;
            report = new result[yankee](output, sizing);
            options = report instanceof Object ? report : options;
            report = options.getTime;
            options = report.bind(options)();
            report = {};
            yankee = _closure1_slot4;
            yankee = options - yankee;
            report['start'] = yankee;
            report['end'] = options;
            backup = romeo.isBetween;
            foxtrot = report.start;
            yankee = report.end;
            yankee = backup.bind(romeo)(foxtrot, yankee);
            if(yankee) { _fun76127_ip = 237; continue _fun76127 }
 128:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot1;
            yankee = 2;
            yankee = backup[yankee];
            foxtrot = foxtrot.bind(tango)(yankee);
            yankee = foxtrot.extractTimestamp;
            verify = verify.id;
            yankee = yankee.bind(foxtrot)(verify);
            foxtrot = entity.Math;
            verify = foxtrot.min;
            entity = null;
            backup = yankee;
            if(!(entity != oscar)) { _fun76127_ip = 187; continue _fun76127 }
 184:
            backup = oscar;
 187:
            oscar = _closure1_slot3;
            oscar = backup + oscar;
            verify = verify.bind(foxtrot)(oscar, options);
            oscar = romeo.isBetween;
            oscar = oscar.bind(romeo)(yankee, verify);
            if(!oscar) { _fun76127_ip = 235; continue _fun76127 }
 216:
            if(!(entity == golf)) { _fun76127_ip = 235; continue _fun76127 }
 220:
            if(zulu) { _fun76127_ip = 235; continue _fun76127 }
 223:
            entity = _closure1_slot2;
            entity = entity.NEW_EVENT;
            return entity;
 235:
            return tango;
 237:
            entity = null;
            if(!(entity == golf)) { _fun76127_ip = 255; continue _fun76127 }
 243:
            entity = _closure1_slot2;
            entity = entity.EVENT_STARTING_SOON;
            return entity;
 255:
            verify = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = entity[offset];
            oscar = verify.bind(tango)(oscar);
            golf = oscar.bind(tango)(golf);
            yankee = golf.isBetween;
            oscar = report.start;
            report = report.end;
            oscar = yankee.bind(golf)(oscar, report);
            report = golf.isBetween;
            entity = entity[offset];
            entity = verify.bind(tango)(entity);
            yankee = entity.bind(tango)(options);
            offset = yankee.subtract;
            verify = _closure1_slot5;
            entity = 'days';
            entity = offset.bind(yankee)(verify, entity);
            report = report.bind(golf)(entity, options);
            entity = undefined;
            if(oscar) { _fun76127_ip = 368; continue _fun76127 }
 350:
            if(!report) { _fun76127_ip = 358; continue _fun76127 }
 353:
            entity = undefined;
            if(!zulu) { _fun76127_ip = 368; continue _fun76127 }
 358:
            mike = _closure1_slot2;
            entity = mike.EVENT_STARTING_SOON;
 368:
            return entity;
        }
    };
    zulu['getNextShownUpcomingEventNoticeType'] = mike;
    return entity;
})();