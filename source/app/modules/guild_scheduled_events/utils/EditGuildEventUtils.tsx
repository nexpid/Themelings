// app/modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    oscard = function(argFoo) { // Original name: recurrenceRuleToServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = null;
            michal = tangon == zuuluu;
            entity = null;
            if(michal) { _fun00002_ip = 169; continue _fun00001 }
 17:
            michal = {};
            report = zuuluu.start;
            michal['start'] = report;
            report = zuuluu.end;
            michal['end'] = report;
            report = zuuluu.frequency;
            michal['frequency'] = report;
            report = zuuluu.interval;
            michal['interval'] = report;
            report = zuuluu.byWeekday;
            michal['by_weekday'] = report;
            report = zuuluu.byNWeekday;
            michal['by_n_weekday'] = report;
            report = zuuluu.byMonth;
            michal['by_month'] = report;
            report = zuuluu.byMonthDay;
            oscard = tangon == report;
            golfie = undefined;
            if(oscard) { _fun00002_ip = 112; continue _fun00001 }
 107:
            golfie = report.length;
 112:
            option = tangon != golfie;
            oscard = 0;
            report = 0;
            if(!option) { _fun00002_ip = 126; continue _fun00001 }
 123:
            report = golfie;
 126:
            report = report > oscard;
            tangon = null;
            if(!report) { _fun00002_ip = 141; continue _fun00001 }
 135:
            tangon = zuuluu.byMonthDay;
 141:
            michal['by_month_day'] = tangon;
            tangon = zuuluu.byYearDay;
            michal['by_year_day'] = tangon;
            zuuluu = zuuluu.count;
            michal['count'] = zuuluu;
            entity = michal;
 169:
            return entity;
        }
    };
    var _closure1_slot7 = oscard;
    report = function(argFoo) { // Original name: recurrenceRuleFromServer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = null;
            michal = tangon == zuuluu;
            entity = null;
            if(michal) { _fun00004_ip = 214; continue _fun00003 }
 17:
            michal = {};
            report = global;
            option = report.Date;
            verify = zuuluu.start;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            offset = golfie;
            oscard = new offset[option](verify, option);
            golfie = oscard instanceof Object ? oscard : golfie;
            oscard = golfie.toISOString;
            oscard = oscard.bind(golfie)();
            michal['start'] = oscard;
            oscard = zuuluu.end;
            oscard = tangon != oscard;
            tangon = null;
            if(!oscard) { _fun00004_ip = 121; continue _fun00003 }
 80:
            golfie = report.Date;
            verify = zuuluu.end;
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            offset = oscard;
            report = new offset[golfie](verify, option);
            oscard = report instanceof Object ? report : oscard;
            report = oscard.toISOString;
            tangon = report.bind(oscard)();
 121:
            michal['end'] = tangon;
            tangon = zuuluu.frequency;
            michal['frequency'] = tangon;
            tangon = zuuluu.interval;
            michal['interval'] = tangon;
            tangon = zuuluu.by_weekday;
            michal['byWeekday'] = tangon;
            tangon = zuuluu.by_n_weekday;
            michal['byNWeekday'] = tangon;
            tangon = zuuluu.by_month;
            michal['byMonth'] = tangon;
            tangon = zuuluu.by_month_day;
            michal['byMonthDay'] = tangon;
            tangon = zuuluu.by_year_day;
            michal['byYearDay'] = tangon;
            zuuluu = zuuluu.count;
            michal['count'] = zuuluu;
            entity = michal;
 214:
            return entity;
        }
    };
    var _closure1_slot8 = report;
    entity = function(argFoo) { // Original name: eventExceptionsToServer
        zuuluu = argFoo;
        michal = zuuluu.map;
        entity = function(argFoo) {
            michal = argFoo;
            entity = {};
            zuuluu = michal.eventExceptionId;
            entity['event_exception_id'] = zuuluu;
            zuuluu = michal.eventId;
            entity['event_id'] = zuuluu;
            zuuluu = michal.guildId;
            entity['guild_id'] = zuuluu;
            zuuluu = michal.scheduledStartTime;
            entity['scheduled_start_time'] = zuuluu;
            zuuluu = michal.scheduledEndTime;
            entity['scheduled_end_time'] = zuuluu;
            michal = michal.isCanceled;
            entity['is_canceled'] = michal;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot9 = entity;
    tangon = function(argFoo) { // Original name: isExistingGuildEvent
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00006_ip = 20; continue _fun00005 }
 12:
            michal = 'id';
            entity = michal in zuuluu;
 20:
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, golfie);
    entity = 0;
    option = offset[entity];
    golfie = argBaz;
    entity = undefined;
    golfie = golfie.bind(entity)(option);
    var _closure1_slot2 = golfie;
    golfie = 1;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    option = golfie.GuildScheduledEventEntityTypes;
    var _closure1_slot3 = option;
    option = golfie.GuildScheduledEventStatus;
    var _closure1_slot4 = option;
    option = golfie.GuildScheduledEventPrivacyLevel;
    var _closure1_slot5 = option;
    golfie = golfie.FAKE_EVENT_ID;
    var _closure1_slot6 = golfie;
    golfie = {};
    option = 'ChannelSelector';
    golfie['CHANNEL_SELECTOR'] = option;
    option = 'Details';
    golfie['DETAILS'] = option;
    option = 'Preview';
    golfie['PREVIEW'] = option;
    option = 4;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx';
    option = verify.bind(offset)(option);
    zuuluu['EditGuildEventScreens'] = golfie;
    golfie = function(argFoo) { // Original name: isEditingEvent
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = global;
            zuuluu = entity.Boolean;
            entity = null;
            report = entity == tangon;
            michal = undefined;
            entity = undefined;
            if(report) { _fun00008_ip = 29; continue _fun00007 }
 24:
            entity = tangon.id;
 29:
            entity = zuuluu.bind(michal)(entity);
            return entity;
        }
    };
    zuuluu['isEditingEvent'] = golfie;
    zuuluu['recurrenceRuleToServer'] = oscard;
    zuuluu['recurrenceRuleFromServer'] = report;
    zuuluu['isExistingGuildEvent'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: convertToFakeGuildEvent
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            backup = argBaz;
            romeon = entity.name;
            foxtra = entity.description;
            yankee = entity.privacyLevel;
            michal = entity.channelId;
            offset = entity.scheduledStartTime;
            verify = entity.scheduledEndTime;
            report = entity.entityType;
            option = entity.entityMetadata;
            golfie = entity.image;
            oscard = entity.recurrenceRule;
            tangon = entity.eventExceptions;
            entity = {};
            zuuluu = null;
            if(!(zuuluu == backup)) { _fun00010_ip = 84; continue _fun00009 }
 77:
            backup = _closure1_slot6;
 84:
            entity['id'] = backup;
            entity['name'] = romeon;
            backup = zuuluu != foxtra;
            romeon = null;
            if(!backup) { _fun00010_ip = 104; continue _fun00009 }
 101:
            romeon = foxtra;
 104:
            entity['description'] = romeon;
            entity['privacy_level'] = yankee;
            entity['scheduled_start_time'] = offset;
            entity['scheduled_end_time'] = verify;
            entity['entity_type'] = report;
            verify = zuuluu != option;
            report = null;
            if(!verify) { _fun00010_ip = 140; continue _fun00009 }
 137:
            report = option;
 140:
            entity['entity_metadata'] = report;
            option = zuuluu != golfie;
            zuuluu = undefined;
            report = undefined;
            if(!option) { _fun00010_ip = 159; continue _fun00009 }
 156:
            report = golfie;
 159:
            entity['image'] = report;
            entity['channel_id'] = michal;
            michal = argBar;
            entity['guild_id'] = michal;
            golfie = _closure1_slot2;
            report = golfie.getId;
            report = report.bind(golfie)();
            entity['creator_id'] = report;
            report = _closure1_slot4;
            report = report.SCHEDULED;
            entity['status'] = report;
            report = _closure1_slot7;
            report = report.bind(zuuluu)(oscard);
            entity['recurrence_rule'] = report;
            michal = _closure1_slot9;
            michal = michal.bind(zuuluu)(tangon);
            entity['guild_scheduled_event_exceptions'] = michal;
            return entity;
        }
    };
    zuuluu['convertToFakeGuildEvent'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getInitialGuildEventData
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            golfie = argBar;
            entity = {};
            michal = null;
            zuuluu = michal == report;
            oscard = undefined;
            option = undefined;
            if(zuuluu) { _fun00012_ip = 26; continue _fun00011 }
 21:
            option = report.name;
 26:
            verify = michal != option;
            zuuluu = '';
            tangon = zuuluu;
            if(!verify) { _fun00012_ip = 43; continue _fun00011 }
 40:
            tangon = option;
 43:
            entity['name'] = tangon;
            option = michal == report;
            tangon = undefined;
            if(option) { _fun00012_ip = 62; continue _fun00011 }
 56:
            tangon = report.privacy_level;
 62:
            if(!(michal == tangon)) { _fun00012_ip = 79; continue _fun00011 }
 66:
            option = _closure1_slot5;
            tangon = option.GUILD_ONLY;
 79:
            entity['privacyLevel'] = tangon;
            option = michal == report;
            tangon = undefined;
            if(option) { _fun00012_ip = 98; continue _fun00011 }
 93:
            tangon = report.description;
 98:
            option = michal != tangon;
            if(!option) { _fun00012_ip = 108; continue _fun00011 }
 105:
            zuuluu = tangon;
 108:
            entity['description'] = zuuluu;
            tangon = michal == report;
            zuuluu = undefined;
            if(tangon) { _fun00012_ip = 127; continue _fun00011 }
 121:
            zuuluu = report.scheduled_start_time;
 127:
            if(!(michal == zuuluu)) { _fun00012_ip = 174; continue _fun00011 }
 131:
            option = _closure1_slot0;
            verify = _closure1_slot1;
            tangon = 2;
            tangon = verify[tangon];
            option = option.bind(oscard)(tangon);
            tangon = option.getInitialEventStartDate;
            option = tangon.bind(option)();
            tangon = option.toISOString;
            zuuluu = tangon.bind(option)();
 174:
            entity['scheduledStartTime'] = zuuluu;
            tangon = michal == report;
            zuuluu = undefined;
            if(tangon) { _fun00012_ip = 194; continue _fun00011 }
 188:
            zuuluu = report.entity_type;
 194:
            if(!(michal == zuuluu)) { _fun00012_ip = 211; continue _fun00011 }
 198:
            tangon = _closure1_slot3;
            zuuluu = tangon.NONE;
 211:
            entity['entityType'] = zuuluu;
            zuuluu = michal == report;
            tangon = undefined;
            if(zuuluu) { _fun00012_ip = 231; continue _fun00011 }
 225:
            tangon = report.entity_metadata;
 231:
            option = michal != tangon;
            zuuluu = undefined;
            if(!option) { _fun00012_ip = 243; continue _fun00011 }
 240:
            zuuluu = tangon;
 243:
            entity['entityMetadata'] = zuuluu;
            tangon = michal == report;
            zuuluu = undefined;
            if(tangon) { _fun00012_ip = 262; continue _fun00011 }
 257:
            zuuluu = report.channel_id;
 262:
            entity['channelId'] = zuuluu;
            tangon = michal == report;
            zuuluu = undefined;
            if(tangon) { _fun00012_ip = 281; continue _fun00011 }
 275:
            zuuluu = report.creator_id;
 281:
            entity['creatorId'] = zuuluu;
            tangon = michal == report;
            zuuluu = undefined;
            if(tangon) { _fun00012_ip = 301; continue _fun00011 }
 295:
            zuuluu = report.image;
 301:
            entity['image'] = zuuluu;
            tangon = michal == report;
            zuuluu = undefined;
            if(tangon) { _fun00012_ip = 321; continue _fun00011 }
 315:
            zuuluu = report.scheduled_end_time;
 321:
            entity['scheduledEndTime'] = zuuluu;
            option = _closure1_slot8;
            verify = michal == report;
            tangon = undefined;
            if(verify) { _fun00012_ip = 348; continue _fun00011 }
 342:
            tangon = report.recurrence_rule;
 348:
            tangon = option.bind(oscard)(tangon);
            entity['recurrenceRule'] = tangon;
            tangon = michal == report;
            verify = undefined;
            if(tangon) { _fun00012_ip = 373; continue _fun00011 }
 367:
            verify = report.guild_scheduled_event_exceptions;
 373:
            if(!(michal == verify)) { _fun00012_ip = 381; continue _fun00011 }
 377:
            verify = new Array(0);
 381:
            option = verify.map;
            tangon = function(argFoo) {
                michal = argFoo;
                entity = {};
                zuuluu = michal.event_exception_id;
                entity['eventExceptionId'] = zuuluu;
                zuuluu = michal.event_id;
                entity['eventId'] = zuuluu;
                zuuluu = michal.guild_id;
                entity['guildId'] = zuuluu;
                zuuluu = michal.scheduled_start_time;
                entity['scheduledStartTime'] = zuuluu;
                zuuluu = michal.scheduled_end_time;
                entity['scheduledEndTime'] = zuuluu;
                michal = michal.is_canceled;
                entity['isCanceled'] = michal;
                return entity;
            };
            tangon = option.bind(verify)(tangon);
            entity['eventExceptions'] = tangon;
            tangon = _closure1_slot10;
            tangon = tangon.bind(oscard)(report);
            if(!tangon) { _fun00012_ip = 444; continue _fun00011 }
 415:
            tangon = michal == report;
            option = undefined;
            if(tangon) { _fun00012_ip = 430; continue _fun00011 }
 424:
            option = report.entity_type;
 430:
            tangon = _closure1_slot3;
            tangon = tangon.EXTERNAL;
            if(!(option !== tangon)) { _fun00012_ip = 536; continue _fun00011 }
 444:
            tangon = entity.channelId;
            tangon = michal == tangon;
            if(!tangon) { _fun00012_ip = 460; continue _fun00011 }
 456:
            tangon = michal != golfie;
 460:
            if(!tangon) { _fun00012_ip = 583; continue _fun00011 }
 463:
            tangon = golfie.id;
            entity['channelId'] = tangon;
            tangon = golfie.isGuildStageVoice;
            tangon = tangon.bind(golfie)();
            if(tangon) { _fun00012_ip = 518; continue _fun00011 }
 487:
            tangon = golfie.isGuildVoice;
            tangon = tangon.bind(golfie)();
            if(!tangon) { _fun00012_ip = 583; continue _fun00011 }
 500:
            tangon = _closure1_slot3;
            tangon = tangon.VOICE;
            entity['entityType'] = tangon;
            _fun00012_ip = 583; continue _fun00011;
 518:
            tangon = _closure1_slot3;
            tangon = tangon.STAGE_INSTANCE;
            entity['entityType'] = tangon;
            _fun00012_ip = 583; continue _fun00011;
 536:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 3;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.getLocationFromEvent;
            zuuluu = zuuluu.bind(tangon)(report);
            if(!(michal != zuuluu)) { _fun00012_ip = 583; continue _fun00011 }
 571:
            michal = {};
            michal['location'] = zuuluu;
            entity['entityMetadata'] = michal;
 583:
            return entity;
        }
    };
    zuuluu['getInitialGuildEventData'] = michal;
    return entity;
})();