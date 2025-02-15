// app/modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    report = function(argFoo, argBar) { // Original name: getExistingRsvp
        zulu = _closure1_slot2;
        mike = zulu.getId;
        report = mike.bind(zulu)();
        tango = _closure1_slot3;
        zulu = tango.getRsvp;
        mike = argFoo;
        entity = argBar;
        entity = zulu.bind(tango)(mike, entity, report);
        return entity;
    };
    var _closure1_slot7 = report;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    offset = 0;
    tango = options[offset];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    verify = 1;
    tango = options[verify];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    oscar = tango.GuildScheduledEventUserResponses;
    var _closure1_slot4 = oscar;
    tango = tango.GuildScheduledEventStatusDone;
    var _closure1_slot5 = tango;
    tango = {};
    tango['SERIES'] = offset;
    oscar = 'SERIES';
    tango[offset] = oscar;
    tango['RECURRENCE'] = verify;
    oscar = 'RECURRENCE';
    tango[verify] = oscar;
    var _closure1_slot6 = tango;
    oscar = 7;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['getExistingRsvp'] = report;
    zulu['ResponseOptions'] = tango;
    tango = function() { // Original name: getResponseOptions
        mike = {};
        options = _closure1_slot0;
        verify = _closure1_slot1;
        tango = 3;
        zulu = verify[tango];
        golf = undefined;
        zulu = options.bind(golf)(zulu);
        oscar = zulu.intl;
        report = oscar.string;
        zulu = verify[tango];
        zulu = options.bind(golf)(zulu);
        zulu = zulu.t;
        zulu = zulu.uoorxs;
        zulu = report.bind(oscar)(zulu);
        mike['name'] = zulu;
        zulu = _closure1_slot6;
        entity = zulu.SERIES;
        mike['value'] = entity;
        entity = new Array(2);
        entity[0] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        oscar = report.intl;
        report = oscar.string;
        tango = verify[tango];
        tango = options.bind(golf)(tango);
        tango = tango.t;
        tango = tango.lwZCFR;
        tango = report.bind(oscar)(tango);
        mike['name'] = tango;
        zulu = zulu.RECURRENCE;
        mike['value'] = zulu;
        entity[1] = mike;
        return entity;
    };
    zulu['getResponseOptions'] = tango;
    mike = function(argFoo) { // Original name: handleRsvp
        _fun70284: for(var _fun70284_ip = 0; ; ) switch(_fun70284_ip) {
 0:
            entity = argFoo;
            golf = entity.eventId;
            tango = entity.recurrenceId;
            oscar = entity.guildId;
            report = entity.updateRsvp;
            yankee = entity.openRsvpPicker;
            mike = entity.onRsvp;
            zulu = _closure1_slot3;
            entity = zulu.getGuildScheduledEvent;
            verify = entity.bind(zulu)(golf);
            zulu = null;
            if(!(zulu != verify)) { _fun70284_ip = 439; continue _fun70284 }
 65:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot1;
            entity = 4;
            offset = foxtrot[entity];
            entity = undefined;
            backup = romeo.bind(entity)(offset);
            offset = backup.getEventException;
            sizing = offset.bind(backup)(tango, golf);
            offset = 5;
            offset = foxtrot[offset];
            romeo = romeo.bind(entity)(offset);
            offset = romeo.getEventSchedule;
            offset = offset.bind(romeo)(verify, tango);
            kilo = offset.startTime;
            romeo = zulu == verify;
            offset = undefined;
            if(romeo) { _fun70284_ip = 144; continue _fun70284 }
 138:
            offset = verify.scheduled_start_time;
 144:
            offset = zulu != offset;
            foxtrot = null;
            if(!offset) { _fun70284_ip = 232; continue _fun70284 }
 153:
            romeo = _closure1_slot0;
            backup = _closure1_slot1;
            offset = 6;
            offset = backup[offset];
            backup = romeo.bind(entity)(offset);
            romeo = backup.getRecurrenceStatus;
            offset = global;
            result = offset.Date;
            output = zulu == verify;
            offset = undefined;
            if(output) { _fun70284_ip = 202; continue _fun70284 }
 196:
            offset = verify.scheduled_start_time;
 202:
            output = result.prototype;
            output = Object.create(output, {constructor: {value: result}});
            vacuum = output;
            control = offset;
            offset = new vacuum[result](control, source);
            offset = offset instanceof Object ? offset : output;
            foxtrot = romeo.bind(backup)(sizing, kilo, offset);
 232:
            if(!(zulu != foxtrot)) { _fun70284_ip = 255; continue _fun70284 }
 236:
            romeo = _closure1_slot5;
            offset = romeo.has;
            romeo = offset.bind(romeo)(foxtrot);
            offset = null;
            if(romeo) { _fun70284_ip = 293; continue _fun70284 }
 255:
            if(!(zulu == tango)) { _fun70284_ip = 290; continue _fun70284 }
 259:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot1;
            romeo = 6;
            romeo = backup[romeo];
            foxtrot = foxtrot.bind(entity)(romeo);
            romeo = foxtrot.getNextRecurrenceIdInEvent;
            tango = romeo.bind(foxtrot)(verify);
 290:
            offset = tango;
 293:
            foxtrot = _closure1_slot7;
            tango = verify.id;
            tango = foxtrot.bind(entity)(tango);
            romeo = verify.id;
            romeo = foxtrot.bind(entity)(romeo, offset);
            if(!(zulu != offset)) { _fun70284_ip = 388; continue _fun70284 }
 322:
            if(!(zulu == romeo)) { _fun70284_ip = 334; continue _fun70284 }
 326:
            verify = yankee.bind(entity)(verify, offset);
            _fun70284_ip = 439; continue _fun70284;
 334:
            if(!(zulu == tango)) { _fun70284_ip = 350; continue _fun70284 }
 338:
            verify = _closure1_slot4;
            verify = verify.UNINTERESTED;
            _fun70284_ip = 360; continue _fun70284;
 350:
            yankee = _closure1_slot4;
            verify = yankee.INTERESTED;
 360:
            vacuum = undefined;
            control = golf;
            source = offset;
            update = oscar;
            echo = verify;
            verify = vacuum[report](control, source, update, echo, result);
            if(!(zulu != mike)) { _fun70284_ip = 439; continue _fun70284 }
 382:
            verify = mike.bind(entity)();
            _fun70284_ip = 439; continue _fun70284;
 388:
            if(!(zulu == tango)) { _fun70284_ip = 404; continue _fun70284 }
 392:
            tango = _closure1_slot4;
            tango = tango.INTERESTED;
            _fun70284_ip = 414; continue _fun70284;
 404:
            options = _closure1_slot4;
            tango = options.UNINTERESTED;
 414:
            vacuum = undefined;
            control = golf;
            source = null;
            update = oscar;
            echo = tango;
            tango = vacuum[report](control, source, update, echo, result);
            if(!(zulu != mike)) { _fun70284_ip = 439; continue _fun70284 }
 435:
            entity = mike.bind(entity)();
 439:
            entity = undefined;
            return entity;
        }
    };
    zulu['handleRsvp'] = mike;
    return entity;
})();