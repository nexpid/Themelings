// app/modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.ENTITY_TYPES_REQUIRED_CHANNEL_ID;
    var _closure1_slot6 = golfie;
    golfie = michal.ENTITY_TYPES_REQUIRED_ENTITY_METADATA;
    var _closure1_slot7 = golfie;
    golfie = michal.GuildScheduledEventStatus;
    var _closure1_slot8 = golfie;
    michal = michal.MAX_RSVP_USER_DISPLAY_COUNT;
    var _closure1_slot9 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.Endpoints;
    var _closure1_slot10 = golfie;
    michal = michal.Routes;
    var _closure1_slot11 = michal;
    michal = {};
    golfie = function(argFoo, argBar) { // Original name: startEvent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.patch;
        entity = {};
        option = _closure1_slot10;
        golfie = option.GUILD_EVENT;
        oscard = argBar;
        tangon = argFoo;
        tangon = golfie.bind(option)(oscard, tangon);
        entity['url'] = tangon;
        tangon = {};
        report = _closure1_slot8;
        report = report.ACTIVE;
        tangon['status'] = report;
        entity['body'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['startEvent'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: endEvent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.patch;
        entity = {};
        option = _closure1_slot10;
        golfie = option.GUILD_EVENT;
        oscard = argBar;
        tangon = argFoo;
        tangon = golfie.bind(option)(oscard, tangon);
        entity['url'] = tangon;
        tangon = {};
        report = _closure1_slot8;
        report = report.COMPLETED;
        tangon['status'] = report;
        entity['body'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['endEvent'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: joinVoiceEvent
        golfie = argBar;
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        entity = 6;
        zuuluu = report[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.selectVoiceChannel;
        zuuluu = zuuluu.bind(tangon)(golfie);
        tangon = _closure1_slot0;
        zuuluu = 7;
        zuuluu = report[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.transitionTo;
        oscard = _closure1_slot11;
        report = oscard.CHANNEL;
        michal = argFoo;
        michal = report.bind(oscard)(michal, golfie);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['joinVoiceEvent'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: saveEvent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            tangon = _closure1_slot6;
            zuuluu = tangon.has;
            michal = entity.entityType;
            michal = zuuluu.bind(tangon)(michal);
            oscard = null;
            zuuluu = null;
            if(!michal) { _fun00002_ip = 38; continue _fun00001 }
 33:
            zuuluu = entity.channelId;
 38:
            golfie = _closure1_slot7;
            tangon = golfie.has;
            michal = entity.entityType;
            tangon = tangon.bind(golfie)(michal);
            michal = null;
            if(!tangon) { _fun00002_ip = 69; continue _fun00001 }
 63:
            michal = entity.entityMetadata;
 69:
            tangon = entity.image;
            if(!(oscard != tangon)) { _fun00002_ip = 117; continue _fun00001 }
 79:
            golfie = /^data:/;
            oscard = golfie.test;
            tangon = entity.image;
            golfie = oscard.bind(golfie)(tangon);
            tangon = false;
            oscard = undefined;
            if(!(tangon !== golfie)) { _fun00002_ip = 123; continue _fun00001 }
 117:
            oscard = entity.image;
 123:
            tangon = {};
            golfie = entity.name;
            tangon['name'] = golfie;
            golfie = entity.description;
            tangon['description'] = golfie;
            tangon['image'] = oscard;
            oscard = entity.privacyLevel;
            tangon['privacy_level'] = oscard;
            oscard = entity.scheduledStartTime;
            tangon['scheduled_start_time'] = oscard;
            oscard = entity.scheduledEndTime;
            tangon['scheduled_end_time'] = oscard;
            oscard = entity.entityType;
            tangon['entity_type'] = oscard;
            tangon['channel_id'] = zuuluu;
            tangon['entity_metadata'] = michal;
            michal = argCor;
            michal = michal.broadcastToDirectoryChannels;
            tangon['broadcast_to_directory_channels'] = michal;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 8;
            golfie = oscard[michal];
            michal = undefined;
            option = zuuluu.bind(michal)(golfie);
            golfie = option.recurrenceRuleToServer;
            entity = entity.recurrenceRule;
            entity = golfie.bind(option)(entity);
            tangon['recurrence_rule'] = entity;
            entity = 5;
            entity = oscard[entity];
            entity = zuuluu.bind(michal)(entity);
            zuuluu = entity.HTTP;
            michal = zuuluu.patch;
            entity = {};
            option = _closure1_slot10;
            golfie = option.GUILD_EVENT;
            oscard = argBaz;
            report = argFoo;
            report = golfie.bind(option)(oscard, report);
            entity['url'] = report;
            entity['body'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['saveEvent'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: createGuildEvent
        entity = argFoo;
        tangon = {};
        michal = entity.name;
        tangon['name'] = michal;
        michal = entity.description;
        tangon['description'] = michal;
        michal = entity.image;
        tangon['image'] = michal;
        michal = entity.privacyLevel;
        tangon['privacy_level'] = michal;
        michal = entity.scheduledStartTime;
        tangon['scheduled_start_time'] = michal;
        michal = entity.scheduledEndTime;
        tangon['scheduled_end_time'] = michal;
        michal = entity.entityType;
        tangon['entity_type'] = michal;
        michal = entity.channelId;
        tangon['channel_id'] = michal;
        michal = entity.entityMetadata;
        tangon['entity_metadata'] = michal;
        michal = argBaz;
        michal = michal.broadcastToDirectoryChannels;
        tangon['broadcast_to_directory_channels'] = michal;
        zuuluu = _closure1_slot0;
        oscard = _closure1_slot2;
        michal = 8;
        golfie = oscard[michal];
        michal = undefined;
        option = zuuluu.bind(michal)(golfie);
        golfie = option.recurrenceRuleToServer;
        entity = entity.recurrenceRule;
        entity = golfie.bind(option)(entity);
        tangon['recurrence_rule'] = entity;
        entity = 5;
        entity = oscard[entity];
        entity = zuuluu.bind(michal)(entity);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        golfie = _closure1_slot10;
        oscard = golfie.GUILD_EVENTS_FOR_GUILD;
        report = argBar;
        report = oscard.bind(golfie)(report);
        entity['url'] = report;
        entity['body'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['createGuildEvent'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: fetchGuildEvent
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 153; continue _fun00003 }
 10:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 9;
                    michal = report[michal];
                    oscard = undefined;
                    report = zuuluu.bind(oscard)(michal);
                    zuuluu = report.httpGetWithCountryCodeQuery;
                    michal = {};
                    offset = _closure1_slot10;
                    verify = offset.GUILD_EVENT;
                    option = _closure2_slot0;
                    golfie = _closure2_slot1;
                    golfie = verify.bind(offset)(option, golfie);
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=89);
 87:
                    return michal;
 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 150; continue _fun00003 }
 95:
                    zuuluu = michal.body;
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 10;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'FETCH_GUILD_EVENT';
                    tangon['type'] = golfie;
                    tangon['guildScheduledEvent'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 150:
                    return michal;
 153:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetchGuildEvent'] = golfie;
    golfie = function(argFoo) { // Original name: fetchGuildEventsForGuild
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 154; continue _fun00005 }
 10:
                    report = {};
                    oscard = _closure1_slot10;
                    zuuluu = oscard.GUILD_EVENTS_FOR_GUILD;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(oscard)(michal);
                    report['url'] = michal;
                    michal = false;
                    report['rejectWithError'] = michal;
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 9;
                    michal = oscard[michal];
                    oscard = undefined;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = zuuluu.httpGetWithCountryCodeQuery;
                    michal = michal.bind(zuuluu)(report);
                    SaveGenerator(address=84);
 82:
                    return michal;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 151; continue _fun00005 }
 90:
                    zuuluu = michal.body;
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 10;
                    tangon = option[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'FETCH_GUILD_EVENTS_FOR_GUILD';
                    tangon['type'] = option;
                    golfie = _closure2_slot0;
                    tangon['guildId'] = golfie;
                    tangon['guildScheduledEvents'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 151:
                    return michal;
 154:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetchGuildEventsForGuild'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: fetchGuildEventUserCounts
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 220; continue _fun00007 }
 10:
                    report = {};
                    option = _closure1_slot10;
                    oscard = option.GUILD_EVENT_USER_COUNTS;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = oscard.bind(option)(zuuluu, michal);
                    report['url'] = michal;
                    michal = {};
                    zuuluu = _closure2_slot2;
                    michal['guild_scheduled_event_exception_ids'] = zuuluu;
                    report['query'] = michal;
                    michal = false;
                    report['rejectWithError'] = michal;
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 5;
                    michal = oscard[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    zuuluu = michal.HTTP;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)(report);
                    SaveGenerator(address=111);
 109:
                    return michal;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 217; continue _fun00007 }
 117:
                    report = michal.body;
                    zuuluu = {};
                    option = report.guild_scheduled_event_count;
                    zuuluu['eventCount'] = option;
                    report = report.guild_scheduled_event_exception_counts;
                    zuuluu['recurrenceCounts'] = report;
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 10;
                    tangon = option[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS';
                    tangon['type'] = option;
                    option = _closure2_slot0;
                    tangon['guildId'] = option;
                    golfie = _closure2_slot1;
                    tangon['eventId'] = golfie;
                    tangon['counts'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 217:
                    return michal;
 220:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetchGuildEventUserCounts'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: cancelGuildEvent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.patch;
        entity = {};
        option = _closure1_slot10;
        golfie = option.GUILD_EVENT;
        oscard = argBar;
        tangon = argFoo;
        tangon = golfie.bind(option)(oscard, tangon);
        entity['url'] = tangon;
        tangon = {};
        report = _closure1_slot8;
        report = report.CANCELED;
        tangon['status'] = report;
        entity['body'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['cancelGuildEvent'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: deleteGuildEvent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {};
        golfie = _closure1_slot10;
        oscard = golfie.GUILD_EVENT;
        report = argBar;
        tangon = argFoo;
        tangon = oscard.bind(golfie)(report, tangon);
        entity['url'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['deleteGuildEvent'] = golfie;
    golfie = function(argFoo) { // Original name: getGuildEventsForCurrentUser
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 175; continue _fun00009 }
 10:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    oscard = michal.HTTP;
                    report = oscard.get;
                    michal = {};
                    golfie = _closure1_slot10;
                    golfie = golfie.USER_GUILD_EVENTS;
                    michal['url'] = golfie;
                    option = {};
                    offset = _closure2_slot0;
                    verify = new Array(1);
                    verify[0] = offset;
                    option['guild_ids'] = verify;
                    michal['query'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=103);
 101:
                    return michal;
 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 172; continue _fun00009 }
 109:
                    option = michal.body;
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 10;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    verify = 'GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS';
                    tangon['type'] = verify;
                    tangon['guildScheduledEventUsers'] = option;
                    golfie = _closure2_slot0;
                    tangon['guildId'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 172:
                    return michal;
 175:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['getGuildEventsForCurrentUser'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: createRsvpForGuildEvent
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 292; continue _fun00011 }
 10:
                    report = undefined;
                    oscard = undefined;
                    tangon = _closure1_slot4;
                    michal = tangon.getId;
                    oscard = michal.bind(tangon)();
 31: // try_start_0
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    michal = 10;
                    michal = golfie[michal];
                    option = tangon.bind(report)(michal);
                    tangon = option.dispatch;
                    michal = {};
                    verify = 'GUILD_SCHEDULED_EVENT_USER_ADD';
                    michal['type'] = verify;
                    verify = oscard;
                    michal['userId'] = verify;
                    foxtra = _closure2_slot2;
                    michal['guildId'] = foxtra;
                    romeon = _closure2_slot0;
                    michal['guildEventId'] = romeon;
                    yankee = _closure2_slot1;
                    michal['guildEventExceptionId'] = yankee;
                    verify = _closure2_slot3;
                    michal['response'] = verify;
                    michal = tangon.bind(option)(michal);
                    tangon = _closure1_slot0;
                    michal = 5;
                    michal = golfie[michal];
                    michal = tangon.bind(report)(michal);
                    golfie = michal.HTTP;
                    tangon = golfie.put;
                    michal = {};
                    offset = _closure1_slot10;
                    option = offset.USER_GUILD_EVENT;
                    option = option.bind(offset)(foxtra, romeon, yankee);
                    michal['url'] = option;
                    option = {};
                    option['response'] = verify;
                    michal['body'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = tangon.bind(golfie)(michal);
                    SaveGenerator(address=192);
 190:
                    return michal;
 192:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00012_ip = 201; continue _fun00011 }
 198: // try_end0
                    return michal;
 201:
                    return michal;
 204: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
                    zuuluu['type'] = golfie;
                    zuuluu['userId'] = oscard;
                    golfie = _closure2_slot2;
                    zuuluu['guildId'] = golfie;
                    golfie = _closure2_slot0;
                    zuuluu['guildEventId'] = golfie;
                    golfie = _closure2_slot1;
                    zuuluu['guildEventExceptionId'] = golfie;
                    oscard = _closure2_slot3;
                    zuuluu['response'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 292:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['createRsvpForGuildEvent'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: deleteRsvpForGuildEvent
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 327; continue _fun00013 }
 10:
                    report = undefined;
                    option = undefined;
                    oscard = undefined;
                    tangon = _closure1_slot4;
                    michal = tangon.getId;
                    yankee = michal.bind(tangon)();
                    option = yankee;
                    offset = _closure1_slot5;
                    verify = offset.getRsvp;
                    tangon = _closure2_slot0;
                    michal = _closure2_slot1;
                    tangon = verify.bind(offset)(tangon, michal, yankee);
                    oscard = tangon;
                    michal = null;
                    if(!(michal == tangon)) { _fun00014_ip = 76; continue _fun00013 }
 73:
                    return report;
 76: // try_start_0
                    tangon = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 10;
                    michal = verify[michal];
                    offset = tangon.bind(report)(michal);
                    tangon = offset.dispatch;
                    michal = {};
                    yankee = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
                    michal['type'] = yankee;
                    yankee = option;
                    michal['userId'] = yankee;
                    backup = _closure2_slot2;
                    michal['guildId'] = backup;
                    foxtra = _closure2_slot0;
                    michal['guildEventId'] = foxtra;
                    romeon = _closure2_slot1;
                    michal['guildEventExceptionId'] = romeon;
                    yankee = oscard;
                    yankee = yankee.response;
                    michal['response'] = yankee;
                    michal = tangon.bind(offset)(michal);
                    tangon = _closure1_slot0;
                    michal = 5;
                    michal = verify[michal];
                    michal = tangon.bind(report)(michal);
                    verify = michal.HTTP;
                    tangon = verify.del;
                    michal = {};
                    yankee = _closure1_slot10;
                    offset = yankee.USER_GUILD_EVENT;
                    offset = offset.bind(yankee)(backup, foxtra, romeon);
                    michal['url'] = offset;
                    offset = false;
                    michal['rejectWithError'] = offset;
                    michal = tangon.bind(verify)(michal);
                    SaveGenerator(address=230);
 228:
                    return michal;
 230:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00014_ip = 239; continue _fun00013 }
 236: // try_end0
                    return michal;
 239:
                    return michal;
 242: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    verify = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = verify[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    verify = 'GUILD_SCHEDULED_EVENT_USER_ADD';
                    zuuluu['type'] = verify;
                    zuuluu['userId'] = option;
                    option = _closure2_slot2;
                    zuuluu['guildId'] = option;
                    option = _closure2_slot0;
                    zuuluu['guildEventId'] = option;
                    golfie = _closure2_slot1;
                    zuuluu['guildEventExceptionId'] = golfie;
                    oscard = oscard.response;
                    zuuluu['response'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 327:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['deleteRsvpForGuildEvent'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: updateRsvp
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        michal = argGra;
        var _closure2_slot4 = michal;
        michal = this;
        var _closure2_slot5 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 231; continue _fun00015 }
 10:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 11;
                    tangon = tangon[michal];
                    michal = undefined;
                    verify = oscard.bind(michal)(tangon);
                    option = verify.getExistingRsvp;
                    golfie = _closure2_slot0;
                    oscard = _closure2_slot1;
                    golfie = option.bind(verify)(golfie, oscard);
                    oscard = null;
                    if(!(oscard == golfie)) { _fun00016_ip = 149; continue _fun00015 }
 64: // try_start_0
                    romeon = _closure2_slot5;
                    yankee = romeon.createRsvpForGuildEvent;
                    sizing = _closure2_slot0;
                    kiloes = _closure2_slot1;
                    backup = _closure2_slot2;
                    foxtra = _closure2_slot3;
                    output = romeon;
                    golfie = output[yankee](sizing, kiloes, backup, foxtra, romeon);
                    SaveGenerator(address=101);
 99:
                    return golfie;
 101:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00016_ip = 125; continue _fun00015 }
 107:
                    option = _closure2_slot4;
                    if(!(oscard != option)) { _fun00016_ip = 123; continue _fun00015 }
 115:
                    option = _closure2_slot4;
                    option = option.bind(michal)();
 123: // try_end0
                    _fun00016_ip = 228; continue _fun00015;
 125:
                    return golfie;
 128: // catch_target0
                    CatchBlockStart(arg_register=4);
                    golfie = _closure2_slot4;
                    if(!(oscard != golfie)) { _fun00016_ip = 228; continue _fun00015 }
 138:
                    golfie = _closure2_slot4;
                    report = golfie.bind(michal)(report);
                    _fun00016_ip = 228; continue _fun00015;
 149: // try_start_1
                    offset = _closure2_slot5;
                    verify = offset.deleteRsvpForGuildEvent;
                    option = _closure2_slot0;
                    golfie = _closure2_slot1;
                    report = _closure2_slot2;
                    report = verify.bind(offset)(option, golfie, report);
                    SaveGenerator(address=182);
 180:
                    return report;
 182:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00016_ip = 206; continue _fun00015 }
 188:
                    golfie = _closure2_slot4;
                    if(!(oscard != golfie)) { _fun00016_ip = 204; continue _fun00015 }
 196:
                    golfie = _closure2_slot4;
                    golfie = golfie.bind(michal)();
 204: // try_end1
                    _fun00016_ip = 228; continue _fun00015;
 206:
                    return report;
 209: // catch_target1
                    CatchBlockStart(arg_register=2);
                    report = _closure2_slot4;
                    if(!(oscard != report)) { _fun00016_ip = 228; continue _fun00015 }
 219:
                    tangon = _closure2_slot4;
                    zuuluu = tangon.bind(michal)(zuuluu);
 228:
                    return michal;
 231:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['updateRsvp'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: fetchUsersForGuildEvent
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = arguments[3];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = argBaz;
            var _closure2_slot2 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00018_ip = 39; continue _fun00017 }
 32:
            zuuluu = _closure1_slot9;
 39:
            var _closure2_slot3 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00020_ip = 257; continue _fun00019 }
 10:
                        michal = _closure2_slot0;
                        zuuluu = null;
                        if(!(zuuluu != michal)) { _fun00020_ip = 250; continue _fun00019 }
 26:
                        michal = _closure2_slot2;
                        if(!(zuuluu != michal)) { _fun00020_ip = 250; continue _fun00019 }
 37:
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        michal = 5;
                        michal = report[michal];
                        report = undefined;
                        michal = tangon.bind(report)(michal);
                        golfie = michal.HTTP;
                        tangon = golfie.get;
                        michal = {};
                        romeon = _closure1_slot10;
                        yankee = romeon.GUILD_EVENT_USERS;
                        offset = _closure2_slot2;
                        verify = _closure2_slot0;
                        option = _closure2_slot1;
                        option = yankee.bind(romeon)(offset, verify, option);
                        michal['url'] = option;
                        option = {'limit': null, 'with_member': true, 'upgrade_response_type': true};
                        verify = _closure2_slot3;
                        option['limit'] = verify;
                        michal['query'] = option;
                        option = false;
                        michal['rejectWithError'] = option;
                        michal = tangon.bind(golfie)(michal);
                        SaveGenerator(address=151);
 149:
                        return michal;
 151:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00020_ip = 247; continue _fun00019 }
 157:
                        tangon = _closure1_slot1;
                        golfie = _closure1_slot2;
                        zuuluu = 10;
                        zuuluu = golfie[zuuluu];
                        report = tangon.bind(report)(zuuluu);
                        tangon = report.dispatch;
                        zuuluu = {};
                        golfie = 'GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS';
                        zuuluu['type'] = golfie;
                        golfie = _closure2_slot0;
                        zuuluu['guildEventId'] = golfie;
                        golfie = michal.body;
                        zuuluu['guildScheduledEventUsers'] = golfie;
                        golfie = _closure2_slot2;
                        zuuluu['guildId'] = golfie;
                        oscard = _closure2_slot1;
                        zuuluu['guildEventExceptionId'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
                        zuuluu = michal.body;
                        zuuluu = zuuluu.users;
                        return zuuluu;
 247:
                        return michal;
 250:
                        michal = new Array(0);
                        return michal;
 257:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['fetchUsersForGuildEvent'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: createGuildEventException
        entity = argFoo;
        option = entity.original_scheduled_start_time;
        golfie = entity.scheduled_start_time;
        oscard = entity.scheduled_end_time;
        report = entity.is_canceled;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        yankee = _closure1_slot10;
        offset = yankee.GUILD_EVENT_EXCEPTIONS;
        verify = argBar;
        tangon = argBaz;
        tangon = offset.bind(yankee)(verify, tangon);
        entity['url'] = tangon;
        tangon = {};
        tangon['original_scheduled_start_time'] = option;
        tangon['scheduled_start_time'] = golfie;
        tangon['scheduled_end_time'] = oscard;
        tangon['is_canceled'] = report;
        entity['body'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['createGuildEventException'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: updateGuildEventException
        entity = argFoo;
        golfie = entity.scheduled_start_time;
        oscard = entity.scheduled_end_time;
        report = entity.is_canceled;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.patch;
        entity = {};
        yankee = _closure1_slot10;
        offset = yankee.GUILD_EVENT_EXCEPTION;
        verify = argBar;
        option = argBaz;
        tangon = argCor;
        tangon = offset.bind(yankee)(verify, option, tangon);
        entity['url'] = tangon;
        tangon = {};
        tangon['scheduled_start_time'] = golfie;
        tangon['scheduled_end_time'] = oscard;
        tangon['is_canceled'] = report;
        entity['body'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['updateGuildEventException'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: deleteGuildEventException
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {};
        option = _closure1_slot10;
        golfie = option.GUILD_EVENT_EXCEPTION;
        oscard = argFoo;
        report = argBar;
        tangon = argBaz;
        tangon = golfie.bind(option)(oscard, report, tangon);
        entity['url'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['deleteGuildEventException'] = golfie;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: deleteRecurrence
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            tangon = argBaz;
            golfie = argCor;
            zuuluu = this;
            entity = null;
            if(!(entity == golfie)) { _fun00022_ip = 124; continue _fun00021 }
 21:
            option = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            michal = option.bind(entity)(michal);
            entity = michal.extractTimestamp;
            backup = entity.bind(michal)(tangon);
            michal = zuuluu.createGuildEventException;
            entity = {};
            option = global;
            option = option.Date;
            verify = option.prototype;
            verify = Object.create(verify, {constructor: {value: option}});
            kiloes = verify;
            option = new kiloes[option](backup, foxtra);
            verify = option instanceof Object ? option : verify;
            option = verify.toISOString;
            option = option.bind(verify)();
            entity['original_scheduled_start_time'] = option;
            option = true;
            entity['is_canceled'] = option;
            entity = michal.bind(zuuluu)(entity, oscard, report);
            _fun00022_ip = 180; continue _fun00021;
 124:
            michal = zuuluu.updateGuildEventException;
            entity = {};
            option = golfie.scheduled_start_time;
            entity['scheduled_start_time'] = option;
            golfie = golfie.scheduled_end_time;
            entity['scheduled_end_time'] = golfie;
            golfie = true;
            entity['is_canceled'] = golfie;
            kiloes = zuuluu;
            backup = entity;
            foxtra = oscard;
            romeon = report;
            yankee = tangon;
            entity = kiloes[michal](backup, foxtra, romeon, yankee, offset);
 180:
            entity = undefined;
            return entity;
        }
    };
    michal['deleteRecurrence'] = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();