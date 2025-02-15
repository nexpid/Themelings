// app/modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.ENTITY_TYPES_REQUIRED_CHANNEL_ID;
    var _closure1_slot6 = golf;
    golf = mike.ENTITY_TYPES_REQUIRED_ENTITY_METADATA;
    var _closure1_slot7 = golf;
    golf = mike.GuildScheduledEventStatus;
    var _closure1_slot8 = golf;
    mike = mike.MAX_RSVP_USER_DISPLAY_COUNT;
    var _closure1_slot9 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.Endpoints;
    var _closure1_slot10 = golf;
    mike = mike.Routes;
    var _closure1_slot11 = mike;
    mike = {};
    golf = function(argFoo, argBar) { // Original name: startEvent
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        options = _closure1_slot10;
        golf = options.GUILD_EVENT;
        oscar = argBar;
        tango = argFoo;
        tango = golf.bind(options)(oscar, tango);
        entity['url'] = tango;
        tango = {};
        report = _closure1_slot8;
        report = report.ACTIVE;
        tango['status'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['startEvent'] = golf;
    golf = function(argFoo, argBar) { // Original name: endEvent
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        options = _closure1_slot10;
        golf = options.GUILD_EVENT;
        oscar = argBar;
        tango = argFoo;
        tango = golf.bind(options)(oscar, tango);
        entity['url'] = tango;
        tango = {};
        report = _closure1_slot8;
        report = report.COMPLETED;
        tango['status'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['endEvent'] = golf;
    golf = function(argFoo, argBar) { // Original name: joinVoiceEvent
        golf = argBar;
        tango = _closure1_slot1;
        report = _closure1_slot2;
        entity = 6;
        zulu = report[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.selectVoiceChannel;
        zulu = zulu.bind(tango)(golf);
        tango = _closure1_slot0;
        zulu = 7;
        zulu = report[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.transitionTo;
        oscar = _closure1_slot11;
        report = oscar.CHANNEL;
        mike = argFoo;
        mike = report.bind(oscar)(mike, golf);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['joinVoiceEvent'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: saveEvent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            tango = _closure1_slot6;
            zulu = tango.has;
            mike = entity.entityType;
            mike = zulu.bind(tango)(mike);
            oscar = null;
            zulu = null;
            if(!mike) { _fun00002_ip = 38; continue _fun00001 }
 33:
            zulu = entity.channelId;
 38:
            golf = _closure1_slot7;
            tango = golf.has;
            mike = entity.entityType;
            tango = tango.bind(golf)(mike);
            mike = null;
            if(!tango) { _fun00002_ip = 69; continue _fun00001 }
 63:
            mike = entity.entityMetadata;
 69:
            tango = entity.image;
            if(!(oscar != tango)) { _fun00002_ip = 117; continue _fun00001 }
 79:
            golf = /^data:/;
            oscar = golf.test;
            tango = entity.image;
            golf = oscar.bind(golf)(tango);
            tango = false;
            oscar = undefined;
            if(!(tango !== golf)) { _fun00002_ip = 123; continue _fun00001 }
 117:
            oscar = entity.image;
 123:
            tango = {};
            golf = entity.name;
            tango['name'] = golf;
            golf = entity.description;
            tango['description'] = golf;
            tango['image'] = oscar;
            oscar = entity.privacyLevel;
            tango['privacy_level'] = oscar;
            oscar = entity.scheduledStartTime;
            tango['scheduled_start_time'] = oscar;
            oscar = entity.scheduledEndTime;
            tango['scheduled_end_time'] = oscar;
            oscar = entity.entityType;
            tango['entity_type'] = oscar;
            tango['channel_id'] = zulu;
            tango['entity_metadata'] = mike;
            mike = argCorge;
            mike = mike.broadcastToDirectoryChannels;
            tango['broadcast_to_directory_channels'] = mike;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 8;
            golf = oscar[mike];
            mike = undefined;
            options = zulu.bind(mike)(golf);
            golf = options.recurrenceRuleToServer;
            entity = entity.recurrenceRule;
            entity = golf.bind(options)(entity);
            tango['recurrence_rule'] = entity;
            entity = 5;
            entity = oscar[entity];
            entity = zulu.bind(mike)(entity);
            zulu = entity.HTTP;
            mike = zulu.patch;
            entity = {};
            options = _closure1_slot10;
            golf = options.GUILD_EVENT;
            oscar = argBaz;
            report = argFoo;
            report = golf.bind(options)(oscar, report);
            entity['url'] = report;
            entity['body'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['saveEvent'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: createGuildEvent
        entity = argFoo;
        tango = {};
        mike = entity.name;
        tango['name'] = mike;
        mike = entity.description;
        tango['description'] = mike;
        mike = entity.image;
        tango['image'] = mike;
        mike = entity.privacyLevel;
        tango['privacy_level'] = mike;
        mike = entity.scheduledStartTime;
        tango['scheduled_start_time'] = mike;
        mike = entity.scheduledEndTime;
        tango['scheduled_end_time'] = mike;
        mike = entity.entityType;
        tango['entity_type'] = mike;
        mike = entity.channelId;
        tango['channel_id'] = mike;
        mike = entity.entityMetadata;
        tango['entity_metadata'] = mike;
        mike = argBaz;
        mike = mike.broadcastToDirectoryChannels;
        tango['broadcast_to_directory_channels'] = mike;
        zulu = _closure1_slot0;
        oscar = _closure1_slot2;
        mike = 8;
        golf = oscar[mike];
        mike = undefined;
        options = zulu.bind(mike)(golf);
        golf = options.recurrenceRuleToServer;
        entity = entity.recurrenceRule;
        entity = golf.bind(options)(entity);
        tango['recurrence_rule'] = entity;
        entity = 5;
        entity = oscar[entity];
        entity = zulu.bind(mike)(entity);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        golf = _closure1_slot10;
        oscar = golf.GUILD_EVENTS_FOR_GUILD;
        report = argBar;
        report = oscar.bind(golf)(report);
        entity['url'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['createGuildEvent'] = golf;
    golf = function(argFoo, argBar) { // Original name: fetchGuildEvent
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 153; continue _fun00003 }
 10:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 9;
                    mike = report[mike];
                    oscar = undefined;
                    report = zulu.bind(oscar)(mike);
                    zulu = report.httpGetWithCountryCodeQuery;
                    mike = {};
                    offset = _closure1_slot10;
                    verify = offset.GUILD_EVENT;
                    options = _closure2_slot0;
                    golf = _closure2_slot1;
                    golf = verify.bind(offset)(options, golf);
                    mike['url'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=89);
 87:
                    return mike;
 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 150; continue _fun00003 }
 95:
                    zulu = mike.body;
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 10;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'FETCH_GUILD_EVENT';
                    tango['type'] = golf;
                    tango['guildScheduledEvent'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 150:
                    return mike;
 153:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetchGuildEvent'] = golf;
    golf = function(argFoo) { // Original name: fetchGuildEventsForGuild
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 154; continue _fun00005 }
 10:
                    report = {};
                    oscar = _closure1_slot10;
                    zulu = oscar.GUILD_EVENTS_FOR_GUILD;
                    mike = _closure2_slot0;
                    mike = zulu.bind(oscar)(mike);
                    report['url'] = mike;
                    mike = false;
                    report['rejectWithError'] = mike;
                    zulu = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 9;
                    mike = oscar[mike];
                    oscar = undefined;
                    zulu = zulu.bind(oscar)(mike);
                    mike = zulu.httpGetWithCountryCodeQuery;
                    mike = mike.bind(zulu)(report);
                    SaveGenerator(address=84);
 82:
                    return mike;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00006_ip = 151; continue _fun00005 }
 90:
                    zulu = mike.body;
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 10;
                    tango = options[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'FETCH_GUILD_EVENTS_FOR_GUILD';
                    tango['type'] = options;
                    golf = _closure2_slot0;
                    tango['guildId'] = golf;
                    tango['guildScheduledEvents'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 151:
                    return mike;
 154:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetchGuildEventsForGuild'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: fetchGuildEventUserCounts
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 219; continue _fun00007 }
 10:
                    report = {};
                    options = _closure1_slot10;
                    oscar = options.GUILD_EVENT_USER_COUNTS;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = oscar.bind(options)(zulu, mike);
                    report['url'] = mike;
                    mike = {};
                    zulu = _closure2_slot2;
                    mike['guild_scheduled_event_exception_ids'] = zulu;
                    report['query'] = mike;
                    mike = false;
                    report['rejectWithError'] = mike;
                    zulu = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 5;
                    mike = oscar[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    zulu = mike.HTTP;
                    mike = zulu.get;
                    mike = mike.bind(zulu)(report);
                    SaveGenerator(address=110);
 108:
                    return mike;
 110:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00008_ip = 216; continue _fun00007 }
 116:
                    report = mike.body;
                    zulu = {};
                    options = report.guild_scheduled_event_count;
                    zulu['eventCount'] = options;
                    report = report.guild_scheduled_event_exception_counts;
                    zulu['recurrenceCounts'] = report;
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 10;
                    tango = options[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS';
                    tango['type'] = options;
                    options = _closure2_slot0;
                    tango['guildId'] = options;
                    golf = _closure2_slot1;
                    tango['eventId'] = golf;
                    tango['counts'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 216:
                    return mike;
 219:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetchGuildEventUserCounts'] = golf;
    golf = function(argFoo, argBar) { // Original name: cancelGuildEvent
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        options = _closure1_slot10;
        golf = options.GUILD_EVENT;
        oscar = argBar;
        tango = argFoo;
        tango = golf.bind(options)(oscar, tango);
        entity['url'] = tango;
        tango = {};
        report = _closure1_slot8;
        report = report.CANCELED;
        tango['status'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['cancelGuildEvent'] = golf;
    golf = function(argFoo, argBar) { // Original name: deleteGuildEvent
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {};
        golf = _closure1_slot10;
        oscar = golf.GUILD_EVENT;
        report = argBar;
        tango = argFoo;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['deleteGuildEvent'] = golf;
    golf = function(argFoo) { // Original name: getGuildEventsForCurrentUser
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 174; continue _fun00009 }
 10:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 5;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.HTTP;
                    report = oscar.get;
                    mike = {};
                    golf = _closure1_slot10;
                    golf = golf.USER_GUILD_EVENTS;
                    mike['url'] = golf;
                    options = {};
                    offset = _closure2_slot0;
                    verify = new Array(1);
                    verify[0] = offset;
                    options['guild_ids'] = verify;
                    mike['query'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=102);
 100:
                    return mike;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 171; continue _fun00009 }
 108:
                    options = mike.body;
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 10;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    verify = 'GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS';
                    tango['type'] = verify;
                    tango['guildScheduledEventUsers'] = options;
                    golf = _closure2_slot0;
                    tango['guildId'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 171:
                    return mike;
 174:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['getGuildEventsForCurrentUser'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: createRsvpForGuildEvent
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00012_ip = 292; continue _fun00011 }
 10:
                    report = undefined;
                    oscar = undefined;
                    tango = _closure1_slot4;
                    mike = tango.getId;
                    oscar = mike.bind(tango)();
 31: // try_start_0
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    mike = 10;
                    mike = golf[mike];
                    options = tango.bind(report)(mike);
                    tango = options.dispatch;
                    mike = {};
                    verify = 'GUILD_SCHEDULED_EVENT_USER_ADD';
                    mike['type'] = verify;
                    verify = oscar;
                    mike['userId'] = verify;
                    foxtrot = _closure2_slot2;
                    mike['guildId'] = foxtrot;
                    romeo = _closure2_slot0;
                    mike['guildEventId'] = romeo;
                    yankee = _closure2_slot1;
                    mike['guildEventExceptionId'] = yankee;
                    verify = _closure2_slot3;
                    mike['response'] = verify;
                    mike = tango.bind(options)(mike);
                    tango = _closure1_slot0;
                    mike = 5;
                    mike = golf[mike];
                    mike = tango.bind(report)(mike);
                    golf = mike.HTTP;
                    tango = golf.put;
                    mike = {};
                    offset = _closure1_slot10;
                    options = offset.USER_GUILD_EVENT;
                    options = options.bind(offset)(foxtrot, romeo, yankee);
                    mike['url'] = options;
                    options = {};
                    options['response'] = verify;
                    mike['body'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = tango.bind(golf)(mike);
                    SaveGenerator(address=192);
 190:
                    return mike;
 192:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00012_ip = 201; continue _fun00011 }
 198: // try_end0
                    return mike;
 201:
                    return mike;
 204: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 10;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
                    zulu['type'] = golf;
                    zulu['userId'] = oscar;
                    golf = _closure2_slot2;
                    zulu['guildId'] = golf;
                    golf = _closure2_slot0;
                    zulu['guildEventId'] = golf;
                    golf = _closure2_slot1;
                    zulu['guildEventExceptionId'] = golf;
                    oscar = _closure2_slot3;
                    zulu['response'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 292:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['createRsvpForGuildEvent'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: deleteRsvpForGuildEvent
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 327; continue _fun00013 }
 10:
                    report = undefined;
                    options = undefined;
                    oscar = undefined;
                    tango = _closure1_slot4;
                    mike = tango.getId;
                    yankee = mike.bind(tango)();
                    options = yankee;
                    offset = _closure1_slot5;
                    verify = offset.getRsvp;
                    tango = _closure2_slot0;
                    mike = _closure2_slot1;
                    tango = verify.bind(offset)(tango, mike, yankee);
                    oscar = tango;
                    mike = null;
                    if(!(mike == tango)) { _fun00014_ip = 76; continue _fun00013 }
 73:
                    return report;
 76: // try_start_0
                    tango = _closure1_slot1;
                    verify = _closure1_slot2;
                    mike = 10;
                    mike = verify[mike];
                    offset = tango.bind(report)(mike);
                    tango = offset.dispatch;
                    mike = {};
                    yankee = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
                    mike['type'] = yankee;
                    yankee = options;
                    mike['userId'] = yankee;
                    backup = _closure2_slot2;
                    mike['guildId'] = backup;
                    foxtrot = _closure2_slot0;
                    mike['guildEventId'] = foxtrot;
                    romeo = _closure2_slot1;
                    mike['guildEventExceptionId'] = romeo;
                    yankee = oscar;
                    yankee = yankee.response;
                    mike['response'] = yankee;
                    mike = tango.bind(offset)(mike);
                    tango = _closure1_slot0;
                    mike = 5;
                    mike = verify[mike];
                    mike = tango.bind(report)(mike);
                    verify = mike.HTTP;
                    tango = verify.del;
                    mike = {};
                    yankee = _closure1_slot10;
                    offset = yankee.USER_GUILD_EVENT;
                    offset = offset.bind(yankee)(backup, foxtrot, romeo);
                    mike['url'] = offset;
                    offset = false;
                    mike['rejectWithError'] = offset;
                    mike = tango.bind(verify)(mike);
                    SaveGenerator(address=230);
 228:
                    return mike;
 230:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00014_ip = 239; continue _fun00013 }
 236: // try_end0
                    return mike;
 239:
                    return mike;
 242: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    verify = _closure1_slot2;
                    zulu = 10;
                    zulu = verify[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    verify = 'GUILD_SCHEDULED_EVENT_USER_ADD';
                    zulu['type'] = verify;
                    zulu['userId'] = options;
                    options = _closure2_slot2;
                    zulu['guildId'] = options;
                    options = _closure2_slot0;
                    zulu['guildEventId'] = options;
                    golf = _closure2_slot1;
                    zulu['guildEventExceptionId'] = golf;
                    oscar = oscar.response;
                    zulu['response'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 327:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['deleteRsvpForGuildEvent'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: updateRsvp
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        mike = argGrault;
        var _closure2_slot4 = mike;
        mike = this;
        var _closure2_slot5 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00016_ip = 231; continue _fun00015 }
 10:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 11;
                    tango = tango[mike];
                    mike = undefined;
                    verify = oscar.bind(mike)(tango);
                    options = verify.getExistingRsvp;
                    golf = _closure2_slot0;
                    oscar = _closure2_slot1;
                    golf = options.bind(verify)(golf, oscar);
                    oscar = null;
                    if(!(oscar == golf)) { _fun00016_ip = 149; continue _fun00015 }
 64: // try_start_0
                    romeo = _closure2_slot5;
                    yankee = romeo.createRsvpForGuildEvent;
                    sizing = _closure2_slot0;
                    kilo = _closure2_slot1;
                    backup = _closure2_slot2;
                    foxtrot = _closure2_slot3;
                    output = romeo;
                    golf = output[yankee](sizing, kilo, backup, foxtrot, romeo);
                    SaveGenerator(address=101);
 99:
                    return golf;
 101:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(options) { _fun00016_ip = 125; continue _fun00015 }
 107:
                    options = _closure2_slot4;
                    if(!(oscar != options)) { _fun00016_ip = 123; continue _fun00015 }
 115:
                    options = _closure2_slot4;
                    options = options.bind(mike)();
 123: // try_end0
                    _fun00016_ip = 228; continue _fun00015;
 125:
                    return golf;
 128: // catch_target0
                    CatchBlockStart(arg_register=4);
                    golf = _closure2_slot4;
                    if(!(oscar != golf)) { _fun00016_ip = 228; continue _fun00015 }
 138:
                    golf = _closure2_slot4;
                    report = golf.bind(mike)(report);
                    _fun00016_ip = 228; continue _fun00015;
 149: // try_start_1
                    offset = _closure2_slot5;
                    verify = offset.deleteRsvpForGuildEvent;
                    options = _closure2_slot0;
                    golf = _closure2_slot1;
                    report = _closure2_slot2;
                    report = verify.bind(offset)(options, golf, report);
                    SaveGenerator(address=182);
 180:
                    return report;
 182:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun00016_ip = 206; continue _fun00015 }
 188:
                    golf = _closure2_slot4;
                    if(!(oscar != golf)) { _fun00016_ip = 204; continue _fun00015 }
 196:
                    golf = _closure2_slot4;
                    golf = golf.bind(mike)();
 204: // try_end1
                    _fun00016_ip = 228; continue _fun00015;
 206:
                    return report;
 209: // catch_target1
                    CatchBlockStart(arg_register=2);
                    report = _closure2_slot4;
                    if(!(oscar != report)) { _fun00016_ip = 228; continue _fun00015 }
 219:
                    tango = _closure2_slot4;
                    zulu = tango.bind(mike)(zulu);
 228:
                    return mike;
 231:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['updateRsvp'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: fetchUsersForGuildEvent
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zulu = arguments[3];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            mike = argBaz;
            var _closure2_slot2 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun00018_ip = 39; continue _fun00017 }
 32:
            zulu = _closure1_slot9;
 39:
            var _closure2_slot3 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00020_ip = 252; continue _fun00019 }
 10:
                        mike = _closure2_slot0;
                        zulu = null;
                        if(!(zulu != mike)) { _fun00020_ip = 245; continue _fun00019 }
 26:
                        mike = _closure2_slot2;
                        if(!(zulu != mike)) { _fun00020_ip = 245; continue _fun00019 }
 37:
                        tango = _closure1_slot0;
                        report = _closure1_slot2;
                        mike = 5;
                        mike = report[mike];
                        report = undefined;
                        mike = tango.bind(report)(mike);
                        golf = mike.HTTP;
                        tango = golf.get;
                        mike = {};
                        romeo = _closure1_slot10;
                        yankee = romeo.GUILD_EVENT_USERS;
                        offset = _closure2_slot2;
                        verify = _closure2_slot0;
                        options = _closure2_slot1;
                        options = yankee.bind(romeo)(offset, verify, options);
                        mike['url'] = options;
                        options = {'limit': null, 'with_member': true, 'upgrade_response_type': true};
                        verify = _closure2_slot3;
                        options['limit'] = verify;
                        mike['query'] = options;
                        options = false;
                        mike['rejectWithError'] = options;
                        mike = tango.bind(golf)(mike);
                        SaveGenerator(address=146);
 144:
                        return mike;
 146:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun00020_ip = 242; continue _fun00019 }
 152:
                        tango = _closure1_slot1;
                        golf = _closure1_slot2;
                        zulu = 10;
                        zulu = golf[zulu];
                        report = tango.bind(report)(zulu);
                        tango = report.dispatch;
                        zulu = {};
                        golf = 'GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS';
                        zulu['type'] = golf;
                        golf = _closure2_slot0;
                        zulu['guildEventId'] = golf;
                        golf = mike.body;
                        zulu['guildScheduledEventUsers'] = golf;
                        golf = _closure2_slot2;
                        zulu['guildId'] = golf;
                        oscar = _closure2_slot1;
                        zulu['guildEventExceptionId'] = oscar;
                        zulu = tango.bind(report)(zulu);
                        zulu = mike.body;
                        zulu = zulu.users;
                        return zulu;
 242:
                        return mike;
 245:
                        mike = new Array(0);
                        return mike;
 252:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    mike['fetchUsersForGuildEvent'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: createGuildEventException
        entity = argFoo;
        options = entity.original_scheduled_start_time;
        golf = entity.scheduled_start_time;
        oscar = entity.scheduled_end_time;
        report = entity.is_canceled;
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        yankee = _closure1_slot10;
        offset = yankee.GUILD_EVENT_EXCEPTIONS;
        verify = argBar;
        tango = argBaz;
        tango = offset.bind(yankee)(verify, tango);
        entity['url'] = tango;
        tango = {};
        tango['original_scheduled_start_time'] = options;
        tango['scheduled_start_time'] = golf;
        tango['scheduled_end_time'] = oscar;
        tango['is_canceled'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['createGuildEventException'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: updateGuildEventException
        entity = argFoo;
        golf = entity.scheduled_start_time;
        oscar = entity.scheduled_end_time;
        report = entity.is_canceled;
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        yankee = _closure1_slot10;
        offset = yankee.GUILD_EVENT_EXCEPTION;
        verify = argBar;
        options = argBaz;
        tango = argCorge;
        tango = offset.bind(yankee)(verify, options, tango);
        entity['url'] = tango;
        tango = {};
        tango['scheduled_start_time'] = golf;
        tango['scheduled_end_time'] = oscar;
        tango['is_canceled'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['updateGuildEventException'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: deleteGuildEventException
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {};
        options = _closure1_slot10;
        golf = options.GUILD_EVENT_EXCEPTION;
        oscar = argFoo;
        report = argBar;
        tango = argBaz;
        tango = golf.bind(options)(oscar, report, tango);
        entity['url'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['deleteGuildEventException'] = golf;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: deleteRecurrence
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            tango = argBaz;
            golf = argCorge;
            zulu = this;
            entity = null;
            if(!(entity == golf)) { _fun00022_ip = 124; continue _fun00021 }
 21:
            options = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            mike = options.bind(entity)(mike);
            entity = mike.extractTimestamp;
            backup = entity.bind(mike)(tango);
            mike = zulu.createGuildEventException;
            entity = {};
            options = global;
            options = options.Date;
            verify = options.prototype;
            verify = Object.create(verify, {constructor: {value: options}});
            kilo = verify;
            options = new kilo[options](backup, foxtrot);
            verify = options instanceof Object ? options : verify;
            options = verify.toISOString;
            options = options.bind(verify)();
            entity['original_scheduled_start_time'] = options;
            options = true;
            entity['is_canceled'] = options;
            entity = mike.bind(zulu)(entity, oscar, report);
            _fun00022_ip = 180; continue _fun00021;
 124:
            mike = zulu.updateGuildEventException;
            entity = {};
            options = golf.scheduled_start_time;
            entity['scheduled_start_time'] = options;
            golf = golf.scheduled_end_time;
            entity['scheduled_end_time'] = golf;
            golf = true;
            entity['is_canceled'] = golf;
            kilo = zulu;
            backup = entity;
            foxtrot = oscar;
            romeo = report;
            yankee = tango;
            entity = kilo[mike](backup, foxtrot, romeo, yankee, offset);
 180:
            entity = undefined;
            return entity;
        }
    };
    mike['deleteRecurrence'] = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();