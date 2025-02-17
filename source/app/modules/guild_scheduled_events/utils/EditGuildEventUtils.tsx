// app/modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    oscar = function(argFoo) { // Original name: recurrenceRuleToServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            tango = null;
            mike = tango == zulu;
            entity = null;
            if(mike) { _fun00002_ip = 169; continue _fun00001 }
 17:
            mike = {};
            report = zulu.start;
            mike['start'] = report;
            report = zulu.end;
            mike['end'] = report;
            report = zulu.frequency;
            mike['frequency'] = report;
            report = zulu.interval;
            mike['interval'] = report;
            report = zulu.byWeekday;
            mike['by_weekday'] = report;
            report = zulu.byNWeekday;
            mike['by_n_weekday'] = report;
            report = zulu.byMonth;
            mike['by_month'] = report;
            report = zulu.byMonthDay;
            oscar = tango == report;
            golf = undefined;
            if(oscar) { _fun00002_ip = 112; continue _fun00001 }
 107:
            golf = report.length;
 112:
            options = tango != golf;
            oscar = 0;
            report = 0;
            if(!options) { _fun00002_ip = 126; continue _fun00001 }
 123:
            report = golf;
 126:
            report = report > oscar;
            tango = null;
            if(!report) { _fun00002_ip = 141; continue _fun00001 }
 135:
            tango = zulu.byMonthDay;
 141:
            mike['by_month_day'] = tango;
            tango = zulu.byYearDay;
            mike['by_year_day'] = tango;
            zulu = zulu.count;
            mike['count'] = zulu;
            entity = mike;
 169:
            return entity;
        }
    };
    var _closure1_slot7 = oscar;
    report = function(argFoo) { // Original name: recurrenceRuleFromServer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            tango = null;
            mike = tango == zulu;
            entity = null;
            if(mike) { _fun00004_ip = 214; continue _fun00003 }
 17:
            mike = {};
            report = global;
            options = report.Date;
            verify = zulu.start;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            offset = golf;
            oscar = new offset[options](verify, options);
            golf = oscar instanceof Object ? oscar : golf;
            oscar = golf.toISOString;
            oscar = oscar.bind(golf)();
            mike['start'] = oscar;
            oscar = zulu.end;
            oscar = tango != oscar;
            tango = null;
            if(!oscar) { _fun00004_ip = 121; continue _fun00003 }
 80:
            golf = report.Date;
            verify = zulu.end;
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            offset = oscar;
            report = new offset[golf](verify, options);
            oscar = report instanceof Object ? report : oscar;
            report = oscar.toISOString;
            tango = report.bind(oscar)();
 121:
            mike['end'] = tango;
            tango = zulu.frequency;
            mike['frequency'] = tango;
            tango = zulu.interval;
            mike['interval'] = tango;
            tango = zulu.by_weekday;
            mike['byWeekday'] = tango;
            tango = zulu.by_n_weekday;
            mike['byNWeekday'] = tango;
            tango = zulu.by_month;
            mike['byMonth'] = tango;
            tango = zulu.by_month_day;
            mike['byMonthDay'] = tango;
            tango = zulu.by_year_day;
            mike['byYearDay'] = tango;
            zulu = zulu.count;
            mike['count'] = zulu;
            entity = mike;
 214:
            return entity;
        }
    };
    var _closure1_slot8 = report;
    entity = function(argFoo) { // Original name: eventExceptionsToServer
        zulu = argFoo;
        mike = zulu.map;
        entity = function(argFoo) {
            mike = argFoo;
            entity = {};
            zulu = mike.eventExceptionId;
            entity['event_exception_id'] = zulu;
            zulu = mike.eventId;
            entity['event_id'] = zulu;
            zulu = mike.guildId;
            entity['guild_id'] = zulu;
            zulu = mike.scheduledStartTime;
            entity['scheduled_start_time'] = zulu;
            zulu = mike.scheduledEndTime;
            entity['scheduled_end_time'] = zulu;
            mike = mike.isCanceled;
            entity['is_canceled'] = mike;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot9 = entity;
    tango = function(argFoo) { // Original name: isExistingGuildEvent
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun00006_ip = 20; continue _fun00005 }
 12:
            mike = 'id';
            entity = mike in zulu;
 20:
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = global;
    yankee = entity.Object;
    options = yankee.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, golf);
    entity = 0;
    options = offset[entity];
    golf = argBaz;
    entity = undefined;
    golf = golf.bind(entity)(options);
    var _closure1_slot2 = golf;
    golf = 1;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    options = golf.GuildScheduledEventEntityTypes;
    var _closure1_slot3 = options;
    options = golf.GuildScheduledEventStatus;
    var _closure1_slot4 = options;
    options = golf.GuildScheduledEventPrivacyLevel;
    var _closure1_slot5 = options;
    golf = golf.FAKE_EVENT_ID;
    var _closure1_slot6 = golf;
    golf = {};
    options = 'ChannelSelector';
    golf['CHANNEL_SELECTOR'] = options;
    options = 'Details';
    golf['DETAILS'] = options;
    options = 'Preview';
    golf['PREVIEW'] = options;
    options = 4;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx';
    options = verify.bind(offset)(options);
    zulu['EditGuildEventScreens'] = golf;
    golf = function(argFoo) { // Original name: isEditingEvent
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            entity = global;
            zulu = entity.Boolean;
            entity = null;
            report = entity == tango;
            mike = undefined;
            entity = undefined;
            if(report) { _fun00008_ip = 29; continue _fun00007 }
 24:
            entity = tango.id;
 29:
            entity = zulu.bind(mike)(entity);
            return entity;
        }
    };
    zulu['isEditingEvent'] = golf;
    zulu['recurrenceRuleToServer'] = oscar;
    zulu['recurrenceRuleFromServer'] = report;
    zulu['isExistingGuildEvent'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: convertToFakeGuildEvent
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            backup = argBaz;
            romeo = entity.name;
            foxtrot = entity.description;
            yankee = entity.privacyLevel;
            mike = entity.channelId;
            offset = entity.scheduledStartTime;
            verify = entity.scheduledEndTime;
            report = entity.entityType;
            options = entity.entityMetadata;
            golf = entity.image;
            oscar = entity.recurrenceRule;
            tango = entity.eventExceptions;
            entity = {};
            zulu = null;
            if(!(zulu == backup)) { _fun00010_ip = 84; continue _fun00009 }
 77:
            backup = _closure1_slot6;
 84:
            entity['id'] = backup;
            entity['name'] = romeo;
            backup = zulu != foxtrot;
            romeo = null;
            if(!backup) { _fun00010_ip = 104; continue _fun00009 }
 101:
            romeo = foxtrot;
 104:
            entity['description'] = romeo;
            entity['privacy_level'] = yankee;
            entity['scheduled_start_time'] = offset;
            entity['scheduled_end_time'] = verify;
            entity['entity_type'] = report;
            verify = zulu != options;
            report = null;
            if(!verify) { _fun00010_ip = 140; continue _fun00009 }
 137:
            report = options;
 140:
            entity['entity_metadata'] = report;
            options = zulu != golf;
            zulu = undefined;
            report = undefined;
            if(!options) { _fun00010_ip = 159; continue _fun00009 }
 156:
            report = golf;
 159:
            entity['image'] = report;
            entity['channel_id'] = mike;
            mike = argBar;
            entity['guild_id'] = mike;
            golf = _closure1_slot2;
            report = golf.getId;
            report = report.bind(golf)();
            entity['creator_id'] = report;
            report = _closure1_slot4;
            report = report.SCHEDULED;
            entity['status'] = report;
            report = _closure1_slot7;
            report = report.bind(zulu)(oscar);
            entity['recurrence_rule'] = report;
            mike = _closure1_slot9;
            mike = mike.bind(zulu)(tango);
            entity['guild_scheduled_event_exceptions'] = mike;
            return entity;
        }
    };
    zulu['convertToFakeGuildEvent'] = tango;
    mike = function(argFoo, argBar) { // Original name: getInitialGuildEventData
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            golf = argBar;
            entity = {};
            mike = null;
            zulu = mike == report;
            oscar = undefined;
            options = undefined;
            if(zulu) { _fun00012_ip = 26; continue _fun00011 }
 21:
            options = report.name;
 26:
            verify = mike != options;
            zulu = '';
            tango = zulu;
            if(!verify) { _fun00012_ip = 43; continue _fun00011 }
 40:
            tango = options;
 43:
            entity['name'] = tango;
            options = mike == report;
            tango = undefined;
            if(options) { _fun00012_ip = 62; continue _fun00011 }
 56:
            tango = report.privacy_level;
 62:
            if(!(mike == tango)) { _fun00012_ip = 79; continue _fun00011 }
 66:
            options = _closure1_slot5;
            tango = options.GUILD_ONLY;
 79:
            entity['privacyLevel'] = tango;
            options = mike == report;
            tango = undefined;
            if(options) { _fun00012_ip = 98; continue _fun00011 }
 93:
            tango = report.description;
 98:
            options = mike != tango;
            if(!options) { _fun00012_ip = 108; continue _fun00011 }
 105:
            zulu = tango;
 108:
            entity['description'] = zulu;
            tango = mike == report;
            zulu = undefined;
            if(tango) { _fun00012_ip = 127; continue _fun00011 }
 121:
            zulu = report.scheduled_start_time;
 127:
            if(!(mike == zulu)) { _fun00012_ip = 174; continue _fun00011 }
 131:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            tango = 2;
            tango = verify[tango];
            options = options.bind(oscar)(tango);
            tango = options.getInitialEventStartDate;
            options = tango.bind(options)();
            tango = options.toISOString;
            zulu = tango.bind(options)();
 174:
            entity['scheduledStartTime'] = zulu;
            tango = mike == report;
            zulu = undefined;
            if(tango) { _fun00012_ip = 194; continue _fun00011 }
 188:
            zulu = report.entity_type;
 194:
            if(!(mike == zulu)) { _fun00012_ip = 211; continue _fun00011 }
 198:
            tango = _closure1_slot3;
            zulu = tango.NONE;
 211:
            entity['entityType'] = zulu;
            zulu = mike == report;
            tango = undefined;
            if(zulu) { _fun00012_ip = 231; continue _fun00011 }
 225:
            tango = report.entity_metadata;
 231:
            options = mike != tango;
            zulu = undefined;
            if(!options) { _fun00012_ip = 243; continue _fun00011 }
 240:
            zulu = tango;
 243:
            entity['entityMetadata'] = zulu;
            tango = mike == report;
            zulu = undefined;
            if(tango) { _fun00012_ip = 262; continue _fun00011 }
 257:
            zulu = report.channel_id;
 262:
            entity['channelId'] = zulu;
            tango = mike == report;
            zulu = undefined;
            if(tango) { _fun00012_ip = 281; continue _fun00011 }
 275:
            zulu = report.creator_id;
 281:
            entity['creatorId'] = zulu;
            tango = mike == report;
            zulu = undefined;
            if(tango) { _fun00012_ip = 301; continue _fun00011 }
 295:
            zulu = report.image;
 301:
            entity['image'] = zulu;
            tango = mike == report;
            zulu = undefined;
            if(tango) { _fun00012_ip = 321; continue _fun00011 }
 315:
            zulu = report.scheduled_end_time;
 321:
            entity['scheduledEndTime'] = zulu;
            options = _closure1_slot8;
            verify = mike == report;
            tango = undefined;
            if(verify) { _fun00012_ip = 348; continue _fun00011 }
 342:
            tango = report.recurrence_rule;
 348:
            tango = options.bind(oscar)(tango);
            entity['recurrenceRule'] = tango;
            tango = mike == report;
            verify = undefined;
            if(tango) { _fun00012_ip = 373; continue _fun00011 }
 367:
            verify = report.guild_scheduled_event_exceptions;
 373:
            if(!(mike == verify)) { _fun00012_ip = 381; continue _fun00011 }
 377:
            verify = new Array(0);
 381:
            options = verify.map;
            tango = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = mike.event_exception_id;
                entity['eventExceptionId'] = zulu;
                zulu = mike.event_id;
                entity['eventId'] = zulu;
                zulu = mike.guild_id;
                entity['guildId'] = zulu;
                zulu = mike.scheduled_start_time;
                entity['scheduledStartTime'] = zulu;
                zulu = mike.scheduled_end_time;
                entity['scheduledEndTime'] = zulu;
                mike = mike.is_canceled;
                entity['isCanceled'] = mike;
                return entity;
            };
            tango = options.bind(verify)(tango);
            entity['eventExceptions'] = tango;
            tango = _closure1_slot10;
            tango = tango.bind(oscar)(report);
            if(!tango) { _fun00012_ip = 444; continue _fun00011 }
 415:
            tango = mike == report;
            options = undefined;
            if(tango) { _fun00012_ip = 430; continue _fun00011 }
 424:
            options = report.entity_type;
 430:
            tango = _closure1_slot3;
            tango = tango.EXTERNAL;
            if(!(options !== tango)) { _fun00012_ip = 536; continue _fun00011 }
 444:
            tango = entity.channelId;
            tango = mike == tango;
            if(!tango) { _fun00012_ip = 460; continue _fun00011 }
 456:
            tango = mike != golf;
 460:
            if(!tango) { _fun00012_ip = 583; continue _fun00011 }
 463:
            tango = golf.id;
            entity['channelId'] = tango;
            tango = golf.isGuildStageVoice;
            tango = tango.bind(golf)();
            if(tango) { _fun00012_ip = 518; continue _fun00011 }
 487:
            tango = golf.isGuildVoice;
            tango = tango.bind(golf)();
            if(!tango) { _fun00012_ip = 583; continue _fun00011 }
 500:
            tango = _closure1_slot3;
            tango = tango.VOICE;
            entity['entityType'] = tango;
            _fun00012_ip = 583; continue _fun00011;
 518:
            tango = _closure1_slot3;
            tango = tango.STAGE_INSTANCE;
            entity['entityType'] = tango;
            _fun00012_ip = 583; continue _fun00011;
 536:
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 3;
            zulu = golf[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.getLocationFromEvent;
            zulu = zulu.bind(tango)(report);
            if(!(mike != zulu)) { _fun00012_ip = 583; continue _fun00011 }
 571:
            mike = {};
            mike['location'] = zulu;
            entity['entityMetadata'] = mike;
 583:
            return entity;
        }
    };
    zulu['getInitialGuildEventData'] = mike;
    return entity;
})();