// app/modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var6 = function recurrenceRuleToServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var2 = var4 == var3;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            var5 = var3.start;
            var2['start'] = var5;
            var5 = var3.end;
            var2['end'] = var5;
            var5 = var3.frequency;
            var2['frequency'] = var5;
            var5 = var3.interval;
            var2['interval'] = var5;
            var5 = var3.byWeekday;
            var2['by_weekday'] = var5;
            var5 = var3.byNWeekday;
            var2['by_n_weekday'] = var5;
            var5 = var3.byMonth;
            var2['by_month'] = var5;
            var5 = var3.byMonthDay;
            var6 = var4 == var5;
            var7 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var5.length;
case 4:
            var8 = var4 != var7;
            var6 = 0;
            var5 = 0;
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var7;
case 6:
            var5 = var5 > var6;
            var4 = null;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var3.byMonthDay;
case 8:
            var2['by_month_day'] = var4;
            var4 = var3.byYearDay;
            var2['by_year_day'] = var4;
            var3 = var3.count;
            var2['count'] = var3;
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function recurrenceRuleFromServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var2 = var4 == var3;
            var1 = null;
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 3:
            var2 = {};
            var5 = global;
            var8 = var5.Date;
            var9 = var3.start;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var6 = new var10[var8](var9, var8);
            var7 = var6 instanceof Object ? var6 : var7;
            var6 = var7.toISOString;
            var6 = var6.bind(var7)();
            var2['start'] = var6;
            var6 = var3.end;
            var6 = var4 != var6;
            var4 = null;
            if(!var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = var5.Date;
            var9 = var3.end;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var10 = var6;
            var5 = new var10[var7](var9, var8);
            var6 = var5 instanceof Object ? var5 : var6;
            var5 = var6.toISOString;
            var4 = var5.bind(var6)();
case 11:
            var2['end'] = var4;
            var4 = var3.frequency;
            var2['frequency'] = var4;
            var4 = var3.interval;
            var2['interval'] = var4;
            var4 = var3.by_weekday;
            var2['byWeekday'] = var4;
            var4 = var3.by_n_weekday;
            var2['byNWeekday'] = var4;
            var4 = var3.by_month;
            var2['byMonth'] = var4;
            var4 = var3.by_month_day;
            var2['byMonthDay'] = var4;
            var4 = var3.by_year_day;
            var2['byYearDay'] = var4;
            var3 = var3.count;
            var2['count'] = var3;
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var1 = function eventExceptionsToServer(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.eventExceptionId;
            var1['event_exception_id'] = var3;
            var3 = var2.eventId;
            var1['event_id'] = var3;
            var3 = var2.guildId;
            var1['guild_id'] = var3;
            var3 = var2.scheduledStartTime;
            var1['scheduled_start_time'] = var3;
            var3 = var2.scheduledEndTime;
            var1['scheduled_end_time'] = var3;
            var2 = var2.isCanceled;
            var1['is_canceled'] = var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function isExistingGuildEvent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var2 = 'id';
            var1 = var2 in var3;
case 13:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var7);
    var1 = 0;
    var8 = var10[var1];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var8 = var7.GuildScheduledEventEntityTypes;
    var _closure1_slot3 = var8;
    var8 = var7.GuildScheduledEventStatus;
    var _closure1_slot4 = var8;
    var8 = var7.GuildScheduledEventPrivacyLevel;
    var _closure1_slot5 = var8;
    var7 = var7.FAKE_EVENT_ID;
    var _closure1_slot6 = var7;
    var7 = {};
    var8 = 'ChannelSelector';
    var7['CHANNEL_SELECTOR'] = var8;
    var8 = 'Details';
    var7['DETAILS'] = var8;
    var8 = 'Preview';
    var7['PREVIEW'] = var8;
    var8 = 4;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['EditGuildEventScreens'] = var7;
    var7 = function isEditingEvent(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = global;
            var3 = var1.Boolean;
            var1 = null;
            var5 = var1 == var4;
            var2 = undefined;
            var1 = undefined;
            if(var5) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var1 = var4.id;
case 15:
            var1 = var3.bind(var2)(var1);
            return var1;
        }
    };
    var3['isEditingEvent'] = var7;
    var3['recurrenceRuleToServer'] = var6;
    var3['recurrenceRuleFromServer'] = var5;
    var3['isExistingGuildEvent'] = var4;
    var4 = function convertToFakeGuildEvent(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var14 = arg3;
            var12 = var1.name;
            var13 = var1.description;
            var11 = var1.privacyLevel;
            var2 = var1.channelId;
            var10 = var1.scheduledStartTime;
            var9 = var1.scheduledEndTime;
            var5 = var1.entityType;
            var8 = var1.entityMetadata;
            var7 = var1.image;
            var6 = var1.recurrenceRule;
            var4 = var1.eventExceptions;
            var1 = {};
            var3 = null;
            if(!(var3 == var14)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var14 = _closure1_slot6;
case 17:
            var1['id'] = var14;
            var1['name'] = var12;
            var14 = var3 != var13;
            var12 = null;
            if(!var14) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var12 = var13;
case 19:
            var1['description'] = var12;
            var1['privacy_level'] = var11;
            var1['scheduled_start_time'] = var10;
            var1['scheduled_end_time'] = var9;
            var1['entity_type'] = var5;
            var9 = var3 != var8;
            var5 = null;
            if(!var9) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var5 = var8;
case 21:
            var1['entity_metadata'] = var5;
            var8 = var3 != var7;
            var3 = undefined;
            var5 = undefined;
            if(!var8) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var5 = var7;
case 23:
            var1['image'] = var5;
            var1['channel_id'] = var2;
            var2 = arg2;
            var1['guild_id'] = var2;
            var7 = _closure1_slot2;
            var5 = var7.getId;
            var5 = var5.bind(var7)();
            var1['creator_id'] = var5;
            var5 = _closure1_slot4;
            var5 = var5.SCHEDULED;
            var1['status'] = var5;
            var5 = _closure1_slot7;
            var5 = var5.bind(var3)(var6);
            var1['recurrence_rule'] = var5;
            var2 = _closure1_slot9;
            var2 = var2.bind(var3)(var4);
            var1['guild_scheduled_event_exceptions'] = var2;
            return var1;
        }
    };
    var3['convertToFakeGuildEvent'] = var4;
    var2 = function getInitialGuildEventData(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var7 = arg2;
            var1 = {};
            var2 = null;
            var3 = var2 == var5;
            var6 = undefined;
            var8 = undefined;
            if(var3) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var8 = var5.name;
case 25:
            var9 = var2 != var8;
            var3 = '';
            var4 = var3;
            if(!var9) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var4 = var8;
case 27:
            var1['name'] = var4;
            var8 = var2 == var5;
            var4 = undefined;
            if(var8) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var4 = var5.privacy_level;
case 29:
            if(!(var2 == var4)) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var8 = _closure1_slot5;
            var4 = var8.GUILD_ONLY;
case 31:
            var1['privacyLevel'] = var4;
            var8 = var2 == var5;
            var4 = undefined;
            if(var8) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var4 = var5.description;
case 33:
            var8 = var2 != var4;
            if(!var8) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var3 = var4;
case 35:
            var1['description'] = var3;
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0006_ip = 37; continue _fun0006 }
case 11:
            var3 = var5.scheduled_start_time;
case 37:
            if(!(var2 == var3)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 2;
            var4 = var9[var4];
            var8 = var8.bind(var6)(var4);
            var4 = var8.getInitialEventStartDate;
            var8 = var4.bind(var8)();
            var4 = var8.toISOString;
            var3 = var4.bind(var8)();
case 38:
            var1['scheduledStartTime'] = var3;
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var3 = var5.entity_type;
case 40:
            if(!(var2 == var3)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var4 = _closure1_slot3;
            var3 = var4.NONE;
case 42:
            var1['entityType'] = var3;
            var3 = var2 == var5;
            var4 = undefined;
            if(var3) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var4 = var5.entity_metadata;
case 44:
            var8 = var2 != var4;
            var3 = undefined;
            if(!var8) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var3 = var4;
case 46:
            var1['entityMetadata'] = var3;
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var3 = var5.channel_id;
case 48:
            var1['channelId'] = var3;
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var3 = var5.creator_id;
case 50:
            var1['creatorId'] = var3;
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var3 = var5.image;
case 52:
            var1['image'] = var3;
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var3 = var5.scheduled_end_time;
case 54:
            var1['scheduledEndTime'] = var3;
            var8 = _closure1_slot8;
            var9 = var2 == var5;
            var4 = undefined;
            if(var9) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var4 = var5.recurrence_rule;
case 56:
            var4 = var8.bind(var6)(var4);
            var1['recurrenceRule'] = var4;
            var4 = var2 == var5;
            var9 = undefined;
            if(var4) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var9 = var5.guild_scheduled_event_exceptions;
case 58:
            if(!(var2 == var9)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var9 = new Array(0);
case 60:
            var8 = var9.map;
            var4 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.event_exception_id;
                var1['eventExceptionId'] = var3;
                var3 = var2.event_id;
                var1['eventId'] = var3;
                var3 = var2.guild_id;
                var1['guildId'] = var3;
                var3 = var2.scheduled_start_time;
                var1['scheduledStartTime'] = var3;
                var3 = var2.scheduled_end_time;
                var1['scheduledEndTime'] = var3;
                var2 = var2.is_canceled;
                var1['isCanceled'] = var2;
                return var1;
            };
            var4 = var8.bind(var9)(var4);
            var1['eventExceptions'] = var4;
            var4 = _closure1_slot10;
            var4 = var4.bind(var6)(var5);
            if(!var4) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var4 = var2 == var5;
            var8 = undefined;
            if(var4) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var8 = var5.entity_type;
case 64:
            var4 = _closure1_slot3;
            var4 = var4.EXTERNAL;
            if(!(var8 !== var4)) { _fun0006_ip = 66; continue _fun0006 }
case 62:
            var4 = var1.channelId;
            var4 = var2 == var4;
            if(!var4) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var4 = var2 != var7;
case 67:
            if(!var4) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            var4 = var7.id;
            var1['channelId'] = var4;
            var4 = var7.isGuildStageVoice;
            var4 = var4.bind(var7)();
            if(var4) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            var4 = var7.isGuildVoice;
            var4 = var4.bind(var7)();
            if(!var4) { _fun0006_ip = 69; continue _fun0006 }
case 73:
            var4 = _closure1_slot3;
            var4 = var4.VOICE;
            var1['entityType'] = var4;
            _fun0006_ip = 69; continue _fun0006;
case 71:
            var4 = _closure1_slot3;
            var4 = var4.STAGE_INSTANCE;
            var1['entityType'] = var4;
            _fun0006_ip = 69; continue _fun0006;
case 66:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getLocationFromEvent;
            var3 = var3.bind(var4)(var5);
            if(!(var2 != var3)) { _fun0006_ip = 69; continue _fun0006 }
case 74:
            var2 = {};
            var2['location'] = var3;
            var1['entityMetadata'] = var2;
case 69:
            return var1;
        }
    };
    var3['getInitialGuildEventData'] = var2;
    return var1;
})();