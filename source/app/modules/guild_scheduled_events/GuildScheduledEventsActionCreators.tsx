// app/modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.ENTITY_TYPES_REQUIRED_CHANNEL_ID;
    var _closure1_slot6 = var7;
    var7 = var2.ENTITY_TYPES_REQUIRED_ENTITY_METADATA;
    var _closure1_slot7 = var7;
    var7 = var2.GuildScheduledEventStatus;
    var _closure1_slot8 = var7;
    var2 = var2.MAX_RSVP_USER_DISPLAY_COUNT;
    var _closure1_slot9 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.Endpoints;
    var _closure1_slot10 = var7;
    var2 = var2.Routes;
    var _closure1_slot11 = var2;
    var2 = {};
    var7 = function startEvent(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var8 = _closure1_slot10;
        var7 = var8.GUILD_EVENT;
        var6 = arg2;
        var4 = arg1;
        var4 = var7.bind(var8)(var6, var4);
        var1['url'] = var4;
        var4 = {};
        var5 = _closure1_slot8;
        var5 = var5.ACTIVE;
        var4['status'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['startEvent'] = var7;
    var7 = function endEvent(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var8 = _closure1_slot10;
        var7 = var8.GUILD_EVENT;
        var6 = arg2;
        var4 = arg1;
        var4 = var7.bind(var8)(var6, var4);
        var1['url'] = var4;
        var4 = {};
        var5 = _closure1_slot8;
        var5 = var5.COMPLETED;
        var4['status'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['endEvent'] = var7;
    var7 = function joinVoiceEvent(arg1, arg2) {
        var7 = arg2;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 6;
        var3 = var5[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.selectVoiceChannel;
        var3 = var3.bind(var4)(var7);
        var4 = _closure1_slot0;
        var3 = 7;
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.transitionTo;
        var6 = _closure1_slot11;
        var5 = var6.CHANNEL;
        var2 = arg1;
        var2 = var5.bind(var6)(var2, var7);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['joinVoiceEvent'] = var7;
    var7 = function saveEvent(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg2;
            var4 = _closure1_slot6;
            var3 = var4.has;
            var2 = var1.entityType;
            var2 = var3.bind(var4)(var2);
            var6 = null;
            var3 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.channelId;
case 2:
            var7 = _closure1_slot7;
            var4 = var7.has;
            var2 = var1.entityType;
            var4 = var4.bind(var7)(var2);
            var2 = null;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.entityMetadata;
case 4:
            var4 = var1.image;
            if(!(var6 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = /^data:/;
            var6 = var7.test;
            var4 = var1.image;
            var7 = var6.bind(var7)(var4);
            var4 = false;
            var6 = undefined;
            if(!(var4 !== var7)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var6 = var1.image;
case 8:
            var4 = {};
            var7 = var1.name;
            var4['name'] = var7;
            var7 = var1.description;
            var4['description'] = var7;
            var4['image'] = var6;
            var6 = var1.privacyLevel;
            var4['privacy_level'] = var6;
            var6 = var1.scheduledStartTime;
            var4['scheduled_start_time'] = var6;
            var6 = var1.scheduledEndTime;
            var4['scheduled_end_time'] = var6;
            var6 = var1.entityType;
            var4['entity_type'] = var6;
            var4['channel_id'] = var3;
            var4['entity_metadata'] = var2;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var7 = var6[var2];
            var2 = undefined;
            var8 = var3.bind(var2)(var7);
            var7 = var8.recurrenceRuleToServer;
            var1 = var1.recurrenceRule;
            var1 = var7.bind(var8)(var1);
            var4['recurrence_rule'] = var1;
            var1 = 5;
            var1 = var6[var1];
            var1 = var3.bind(var2)(var1);
            var3 = var1.HTTP;
            var2 = var3.patch;
            var1 = {};
            var8 = _closure1_slot10;
            var7 = var8.GUILD_EVENT;
            var6 = arg3;
            var5 = arg1;
            var5 = var7.bind(var8)(var6, var5);
            var1['url'] = var5;
            var1['body'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['saveEvent'] = var7;
    var7 = function createGuildEvent(arg1, arg2) {
        var1 = arg1;
        var4 = {};
        var2 = var1.name;
        var4['name'] = var2;
        var2 = var1.description;
        var4['description'] = var2;
        var2 = var1.image;
        var4['image'] = var2;
        var2 = var1.privacyLevel;
        var4['privacy_level'] = var2;
        var2 = var1.scheduledStartTime;
        var4['scheduled_start_time'] = var2;
        var2 = var1.scheduledEndTime;
        var4['scheduled_end_time'] = var2;
        var2 = var1.entityType;
        var4['entity_type'] = var2;
        var2 = var1.channelId;
        var4['channel_id'] = var2;
        var2 = var1.entityMetadata;
        var4['entity_metadata'] = var2;
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 8;
        var7 = var6[var2];
        var2 = undefined;
        var8 = var3.bind(var2)(var7);
        var7 = var8.recurrenceRuleToServer;
        var1 = var1.recurrenceRule;
        var1 = var7.bind(var8)(var1);
        var4['recurrence_rule'] = var1;
        var1 = 5;
        var1 = var6[var1];
        var1 = var3.bind(var2)(var1);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var7 = _closure1_slot10;
        var6 = var7.GUILD_EVENTS_FOR_GUILD;
        var5 = arg2;
        var5 = var6.bind(var7)(var5);
        var1['url'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['createGuildEvent'] = var7;
    var7 = function fetchGuildEvent(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.httpGetWithCountryCodeQuery;
                    var2 = {};
                    var10 = _closure1_slot10;
                    var9 = var10.GUILD_EVENT;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var7 = var9.bind(var10)(var8, var7);
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=89);
case 11:
                    return var2;
case 12:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var3 = var2.body;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 10;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'FETCH_GUILD_EVENT';
                    var4['type'] = var7;
                    var4['guildScheduledEvent'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 13:
                    return var2;
case 9:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchGuildEvent'] = var7;
    var7 = function fetchGuildEventsForGuild(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 10:
                    var5 = {};
                    var6 = _closure1_slot10;
                    var3 = var6.GUILD_EVENTS_FOR_GUILD;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var6)(var2);
                    var5['url'] = var2;
                    var2 = false;
                    var5['rejectWithError'] = var2;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 9;
                    var2 = var6[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.httpGetWithCountryCodeQuery;
                    var2 = var2.bind(var3)(var5);
                    SaveGenerator(address=84);
case 16:
                    return var2;
case 17:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var3 = var2.body;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 10;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'FETCH_GUILD_EVENTS_FOR_GUILD';
                    var4['type'] = var8;
                    var7 = _closure2_slot0;
                    var4['guildId'] = var7;
                    var4['guildScheduledEvents'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 18:
                    return var2;
case 15:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchGuildEventsForGuild'] = var7;
    var7 = function fetchGuildEventUserCounts(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 20; continue _fun0004 }
case 10:
                    var5 = {};
                    var8 = _closure1_slot10;
                    var6 = var8.GUILD_EVENT_USER_COUNTS;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var6.bind(var8)(var3, var2);
                    var5['url'] = var2;
                    var2 = {};
                    var3 = _closure2_slot2;
                    var2['guild_scheduled_event_exception_ids'] = var3;
                    var5['query'] = var2;
                    var2 = false;
                    var5['rejectWithError'] = var2;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 5;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var3 = var2.HTTP;
                    var2 = var3.get;
                    var2 = var2.bind(var3)(var5);
                    SaveGenerator(address=111);
case 21:
                    return var2;
case 22:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 23; continue _fun0004 }
case 6:
                    var5 = var2.body;
                    var3 = {};
                    var8 = var5.guild_scheduled_event_count;
                    var3['eventCount'] = var8;
                    var5 = var5.guild_scheduled_event_exception_counts;
                    var3['recurrenceCounts'] = var5;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 10;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var8 = _closure2_slot0;
                    var4['guildId'] = var8;
                    var7 = _closure2_slot1;
                    var4['eventId'] = var7;
                    var4['counts'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 23:
                    return var2;
case 20:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchGuildEventUserCounts'] = var7;
    var7 = function cancelGuildEvent(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var8 = _closure1_slot10;
        var7 = var8.GUILD_EVENT;
        var6 = arg2;
        var4 = arg1;
        var4 = var7.bind(var8)(var6, var4);
        var1['url'] = var4;
        var4 = {};
        var5 = _closure1_slot8;
        var5 = var5.CANCELED;
        var4['status'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['cancelGuildEvent'] = var7;
    var7 = function deleteGuildEvent(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var7 = _closure1_slot10;
        var6 = var7.GUILD_EVENT;
        var5 = arg2;
        var4 = arg1;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['deleteGuildEvent'] = var7;
    var7 = function getGuildEventsForCurrentUser(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 24; continue _fun0005 }
case 10:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot10;
                    var7 = var7.USER_GUILD_EVENTS;
                    var2['url'] = var7;
                    var8 = {};
                    var10 = _closure2_slot0;
                    var9 = new Array(1);
                    var9[0] = var10;
                    var8['guild_ids'] = var9;
                    var2['query'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=103);
case 25:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 27; continue _fun0005 }
case 21:
                    var8 = var2.body;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS';
                    var4['type'] = var9;
                    var4['guildScheduledEventUsers'] = var8;
                    var7 = _closure2_slot0;
                    var4['guildId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 27:
                    return var2;
case 24:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getGuildEventsForCurrentUser'] = var7;
    var7 = function createRsvpForGuildEvent(arg1, arg2, arg3, arg4) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 28; continue _fun0006 }
case 10:
                    var5 = undefined;
                    var6 = undefined;
                    var4 = _closure1_slot4;
                    var2 = var4.getId;
                    var6 = var2.bind(var4)();
case 29: // try_start_0
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 10;
                    var2 = var7[var2];
                    var8 = var4.bind(var5)(var2);
                    var4 = var8.dispatch;
                    var2 = {};
                    var9 = 'GUILD_SCHEDULED_EVENT_USER_ADD';
                    var2['type'] = var9;
                    var9 = var6;
                    var2['userId'] = var9;
                    var13 = _closure2_slot2;
                    var2['guildId'] = var13;
                    var12 = _closure2_slot0;
                    var2['guildEventId'] = var12;
                    var11 = _closure2_slot1;
                    var2['guildEventExceptionId'] = var11;
                    var9 = _closure2_slot3;
                    var2['response'] = var9;
                    var2 = var4.bind(var8)(var2);
                    var4 = _closure1_slot0;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.put;
                    var2 = {};
                    var10 = _closure1_slot10;
                    var8 = var10.USER_GUILD_EVENT;
                    var8 = var8.bind(var10)(var13, var12, var11);
                    var2['url'] = var8;
                    var8 = {};
                    var8['response'] = var9;
                    var2['body'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=192);
case 30:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 32; continue _fun0006 }
case 33: // try_end0
                    return var2;
case 32:
                    return var2;
case 34: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 10;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
                    var3['type'] = var7;
                    var3['userId'] = var6;
                    var7 = _closure2_slot2;
                    var3['guildId'] = var7;
                    var7 = _closure2_slot0;
                    var3['guildEventId'] = var7;
                    var7 = _closure2_slot1;
                    var3['guildEventExceptionId'] = var7;
                    var6 = _closure2_slot3;
                    var3['response'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 28:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['createRsvpForGuildEvent'] = var7;
    var7 = function deleteRsvpForGuildEvent(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 35; continue _fun0007 }
case 10:
                    var5 = undefined;
                    var8 = undefined;
                    var6 = undefined;
                    var4 = _closure1_slot4;
                    var2 = var4.getId;
                    var11 = var2.bind(var4)();
                    var8 = var11;
                    var10 = _closure1_slot5;
                    var9 = var10.getRsvp;
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var4 = var9.bind(var10)(var4, var2, var11);
                    var6 = var4;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    return var5;
case 36: // try_start_0
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 10;
                    var2 = var9[var2];
                    var10 = var4.bind(var5)(var2);
                    var4 = var10.dispatch;
                    var2 = {};
                    var11 = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
                    var2['type'] = var11;
                    var11 = var8;
                    var2['userId'] = var11;
                    var14 = _closure2_slot2;
                    var2['guildId'] = var14;
                    var13 = _closure2_slot0;
                    var2['guildEventId'] = var13;
                    var12 = _closure2_slot1;
                    var2['guildEventExceptionId'] = var12;
                    var11 = var6;
                    var11 = var11.response;
                    var2['response'] = var11;
                    var2 = var4.bind(var10)(var2);
                    var4 = _closure1_slot0;
                    var2 = 5;
                    var2 = var9[var2];
                    var2 = var4.bind(var5)(var2);
                    var9 = var2.HTTP;
                    var4 = var9.del;
                    var2 = {};
                    var11 = _closure1_slot10;
                    var10 = var11.USER_GUILD_EVENT;
                    var10 = var10.bind(var11)(var14, var13, var12);
                    var2['url'] = var10;
                    var10 = false;
                    var2['rejectWithError'] = var10;
                    var2 = var4.bind(var9)(var2);
                    SaveGenerator(address=230);
case 38:
                    return var2;
case 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 40; continue _fun0007 }
case 41: // try_end0
                    return var2;
case 40:
                    return var2;
case 42: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 10;
                    var3 = var9[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var9 = 'GUILD_SCHEDULED_EVENT_USER_ADD';
                    var3['type'] = var9;
                    var3['userId'] = var8;
                    var8 = _closure2_slot2;
                    var3['guildId'] = var8;
                    var8 = _closure2_slot0;
                    var3['guildEventId'] = var8;
                    var7 = _closure2_slot1;
                    var3['guildEventExceptionId'] = var7;
                    var6 = var6.response;
                    var3['response'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 35:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['deleteRsvpForGuildEvent'] = var7;
    var7 = function updateRsvp(arg1, arg2, arg3, arg4, arg5) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var2 = arg5;
        var _closure2_slot4 = var2;
        var2 = this;
        var _closure2_slot5 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 43; continue _fun0008 }
case 10:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var4 = var4[var2];
                    var2 = undefined;
                    var9 = var6.bind(var2)(var4);
                    var8 = var9.getExistingRsvp;
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var7 = var8.bind(var9)(var7, var6);
                    var6 = null;
                    if(!(var6 == var7)) { _fun0008_ip = 44; continue _fun0008 }
case 45: // try_start_0
                    var12 = _closure2_slot5;
                    var11 = var12.createRsvpForGuildEvent;
                    var16 = _closure2_slot0;
                    var15 = _closure2_slot1;
                    var14 = _closure2_slot2;
                    var13 = _closure2_slot3;
                    var17 = var12;
                    var7 = var17[var11](var16, var15, var14, var13, var12);
                    SaveGenerator(address=101);
case 46:
                    return var7;
case 25:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var8 = _closure2_slot4;
                    if(!(var6 != var8)) { _fun0008_ip = 8; continue _fun0008 }
case 49:
                    var8 = _closure2_slot4;
                    var8 = var8.bind(var2)();
case 8: // try_end0
                    _fun0008_ip = 38; continue _fun0008;
case 47:
                    return var7;
case 50: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var7 = _closure2_slot4;
                    if(!(var6 != var7)) { _fun0008_ip = 38; continue _fun0008 }
case 51:
                    var7 = _closure2_slot4;
                    var5 = var7.bind(var2)(var5);
                    _fun0008_ip = 38; continue _fun0008;
case 44: // try_start_1
                    var10 = _closure2_slot5;
                    var9 = var10.deleteRsvpForGuildEvent;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var5 = _closure2_slot2;
                    var5 = var9.bind(var10)(var8, var7, var5);
                    SaveGenerator(address=182);
case 52:
                    return var5;
case 53:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var7 = _closure2_slot4;
                    if(!(var6 != var7)) { _fun0008_ip = 34; continue _fun0008 }
case 56:
                    var7 = _closure2_slot4;
                    var7 = var7.bind(var2)();
case 34: // try_end1
                    _fun0008_ip = 38; continue _fun0008;
case 54:
                    return var5;
case 57: // catch_target1
                    CatchBlockStart(arg_register=2);
                    var5 = _closure2_slot4;
                    if(!(var6 != var5)) { _fun0008_ip = 38; continue _fun0008 }
case 58:
                    var4 = _closure2_slot4;
                    var3 = var4.bind(var2)(var3);
case 38:
                    return var2;
case 43:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['updateRsvp'] = var7;
    var7 = function fetchUsersForGuildEvent(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arguments[3];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0009_ip = 59; continue _fun0009 }
case 60:
            var3 = _closure1_slot9;
case 59:
            var _closure2_slot3 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0010_ip = 61; continue _fun0010 }
case 10:
                        var2 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                        var2 = _closure2_slot2;
                        if(!(var3 != var2)) { _fun0010_ip = 62; continue _fun0010 }
case 64:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var2 = var5[var2];
                        var5 = undefined;
                        var2 = var4.bind(var5)(var2);
                        var7 = var2.HTTP;
                        var4 = var7.get;
                        var2 = {};
                        var12 = _closure1_slot10;
                        var11 = var12.GUILD_EVENT_USERS;
                        var10 = _closure2_slot2;
                        var9 = _closure2_slot0;
                        var8 = _closure2_slot1;
                        var8 = var11.bind(var12)(var10, var9, var8);
                        var2['url'] = var8;
                        var8 = {'limit': null, 'with_member': true, 'upgrade_response_type': true};
                        var9 = _closure2_slot3;
                        var8['limit'] = var9;
                        var2['query'] = var8;
                        var8 = false;
                        var2['rejectWithError'] = var8;
                        var2 = var4.bind(var7)(var2);
                        SaveGenerator(address=151);
case 44:
                        return var2;
case 18:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 10;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS';
                        var3['type'] = var7;
                        var7 = _closure2_slot0;
                        var3['guildEventId'] = var7;
                        var7 = var2.body;
                        var3['guildScheduledEventUsers'] = var7;
                        var7 = _closure2_slot2;
                        var3['guildId'] = var7;
                        var6 = _closure2_slot1;
                        var3['guildEventExceptionId'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var3 = var2.body;
                        var3 = var3.users;
                        return var3;
case 65:
                        return var2;
case 62:
                        var2 = new Array(0);
                        return var2;
case 61:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['fetchUsersForGuildEvent'] = var7;
    var7 = function createGuildEventException(arg1, arg2, arg3) {
        var1 = arg1;
        var8 = var1.original_scheduled_start_time;
        var7 = var1.scheduled_start_time;
        var6 = var1.scheduled_end_time;
        var5 = var1.is_canceled;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var11 = _closure1_slot10;
        var10 = var11.GUILD_EVENT_EXCEPTIONS;
        var9 = arg2;
        var4 = arg3;
        var4 = var10.bind(var11)(var9, var4);
        var1['url'] = var4;
        var4 = {};
        var4['original_scheduled_start_time'] = var8;
        var4['scheduled_start_time'] = var7;
        var4['scheduled_end_time'] = var6;
        var4['is_canceled'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['createGuildEventException'] = var7;
    var7 = function updateGuildEventException(arg1, arg2, arg3, arg4) {
        var1 = arg1;
        var7 = var1.scheduled_start_time;
        var6 = var1.scheduled_end_time;
        var5 = var1.is_canceled;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var11 = _closure1_slot10;
        var10 = var11.GUILD_EVENT_EXCEPTION;
        var9 = arg2;
        var8 = arg3;
        var4 = arg4;
        var4 = var10.bind(var11)(var9, var8, var4);
        var1['url'] = var4;
        var4 = {};
        var4['scheduled_start_time'] = var7;
        var4['scheduled_end_time'] = var6;
        var4['is_canceled'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['updateGuildEventException'] = var7;
    var7 = function deleteGuildEventException(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var8 = _closure1_slot10;
        var7 = var8.GUILD_EVENT_EXCEPTION;
        var6 = arg1;
        var5 = arg2;
        var4 = arg3;
        var4 = var7.bind(var8)(var6, var5, var4);
        var1['url'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['deleteGuildEventException'] = var7;
    var4 = function deleteRecurrence(arg1, arg2, arg3, arg4) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg3;
            var7 = arg4;
            var3 = this;
            var1 = null;
            if(!(var1 == var7)) { _fun0011_ip = 67; continue _fun0011 }
case 68:
            var8 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var8.bind(var1)(var2);
            var1 = var2.extractTimestamp;
            var14 = var1.bind(var2)(var4);
            var2 = var3.createGuildEventException;
            var1 = {};
            var8 = global;
            var8 = var8.Date;
            var9 = var8.prototype;
            var9 = Object.create(var9, {constructor: {value: var8}});
            var15 = var9;
            var8 = new var15[var8](var14, var13);
            var9 = var8 instanceof Object ? var8 : var9;
            var8 = var9.toISOString;
            var8 = var8.bind(var9)();
            var1['original_scheduled_start_time'] = var8;
            var8 = true;
            var1['is_canceled'] = var8;
            var1 = var2.bind(var3)(var1, var6, var5);
            return var1;
case 67:
            var2 = var3.updateGuildEventException;
            var1 = {};
            var8 = var7.scheduled_start_time;
            var1['scheduled_start_time'] = var8;
            var7 = var7.scheduled_end_time;
            var1['scheduled_end_time'] = var7;
            var7 = true;
            var1['is_canceled'] = var7;
            var15 = var3;
            var14 = var1;
            var13 = var6;
            var12 = var5;
            var11 = var4;
            var1 = var15[var2](var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var2['deleteRecurrence'] = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();