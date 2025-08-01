// app/modules/guild_scheduled_events/useGuildScheduledEvents.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function useGuildUpcomingEvents(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var7 = _closure1_slot11;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot5;
        var3[1] = var7;
        var2 = _closure1_slot8;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot11;
            var2 = var3.getGuildScheduledEventsByIndex;
            var5 = _closure1_slot10;
            var4 = var5.GUILD_EVENT_UPCOMING;
            var1 = _closure2_slot0;
            var1 = var4.bind(var5)(var1);
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.entity_type;
                    var3 = _closure1_slot13;
                    var3 = var3.NONE;
                    if(!(var4 !== var3)) { _fun0001_ip = 107; continue _fun0001 }
 26:
                    var4 = var2.status;
                    var3 = _closure1_slot14;
                    var3 = var3.SCHEDULED;
                    if(!(var4 === var3)) { _fun0001_ip = 107; continue _fun0001 }
 45:
                    var4 = var2.channel_id;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0001_ip = 103; continue _fun0001 }
 56:
                    var4 = _closure1_slot5;
                    var3 = var4.getChannel;
                    var2 = var2.channel_id;
                    var4 = var3.bind(var4)(var2);
                    var3 = _closure1_slot8;
                    var2 = var3.can;
                    var1 = _closure1_slot16;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
 103:
                    var1 = true;
                    return var1;
 107:
                    var1 = false;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot19 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 7;
    var9 = var7[var5];
    var9 = var6.bind(var1)(var9);
    var10 = var9.isGuildScheduledEventActive;
    var _closure1_slot9 = var10;
    var9 = var9.StaticGuildEventIndexes;
    var _closure1_slot10 = var9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.GuildScheduledEventEntityTypes;
    var _closure1_slot13 = var9;
    var5 = var5.GuildScheduledEventStatus;
    var _closure1_slot14 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.GuildFeatures;
    var _closure1_slot15 = var9;
    var5 = var5.Permissions;
    var _closure1_slot16 = var5;
    var5 = new Array(0);
    var _closure1_slot17 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Millis;
    var8 = var5.MINUTE;
    var5 = 15;
    var5 = var5 * var8;
    var _closure1_slot18 = var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_scheduled_events/useGuildScheduledEvents.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useGuildEvents(arg1, arg2) {
        var6 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var8 = _closure1_slot7;
        var3 = new Array(6);
        var3[0] = var8;
        var8 = _closure1_slot4;
        var3[1] = var8;
        var8 = _closure1_slot11;
        var3[2] = var8;
        var8 = _closure1_slot8;
        var3[3] = var8;
        var8 = _closure1_slot5;
        var3[4] = var8;
        var2 = _closure1_slot6;
        var3[5] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = _closure1_slot7;
                var4 = var5.getGuild;
                var3 = _closure2_slot0;
                var4 = var4.bind(var5)(var3);
                var3 = null;
                if(!(var3 != var4)) { _fun0002_ip = 242; continue _fun0002 }
 35:
                var7 = var4.features;
                var6 = var7.has;
                var5 = _closure1_slot15;
                var5 = var5.HUB;
                var5 = var6.bind(var7)(var5);
                if(var5) { _fun0002_ip = 130; continue _fun0002 }
 64:
                var7 = _closure1_slot11;
                var6 = var7.getGuildScheduledEventsByIndex;
                var5 = _closure2_slot1;
                if(!(var3 == var5)) { _fun0002_ip = 104; continue _fun0002 }
 82:
                var10 = _closure1_slot10;
                var9 = var10.GUILD_EVENT_UPCOMING;
                var5 = var4.id;
                var5 = var9.bind(var10)(var5);
                _fun0002_ip = 108; continue _fun0002;
 104:
                var5 = _closure2_slot1;
 108:
                var7 = var6.bind(var7)(var5);
                var6 = var7.filter;
                var5 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.channel_id;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0003_ip = 59; continue _fun0003 }
 14:
                        var3 = _closure1_slot5;
                        var2 = var3.getChannel;
                        var4 = var2.bind(var3)(var4);
                        var3 = _closure1_slot8;
                        var2 = var3.can;
                        var1 = _closure1_slot16;
                        var1 = var1.VIEW_CHANNEL;
                        var1 = var2.bind(var3)(var1, var4);
                        return var1;
 59:
                        var1 = true;
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5);
                return var5;
 130:
                var6 = _closure1_slot6;
                var5 = var6.getDefaultChannel;
                var4 = var4.id;
                var4 = var5.bind(var6)(var4);
                var5 = var3 == var4;
                var6 = undefined;
                var7 = undefined;
                if(var5) { _fun0002_ip = 166; continue _fun0002 }
 161:
                var7 = var4.id;
 166:
                var5 = _closure1_slot4;
                var4 = var5.getEventDirectoryEntries;
                var4 = var4.bind(var5)(var7);
                if(!(var3 == var4)) { _fun0002_ip = 189; continue _fun0002 }
 185:
                var4 = new Array(0);
 189:
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.scheduledEventId;
                        var3 = _closure1_slot11;
                        var1 = var3.getGuildScheduledEvent;
                        var1 = var1.bind(var3)(var4);
                        var3 = null;
                        if(!(var3 == var1)) { _fun0004_ip = 50; continue _fun0004 }
 33:
                        var3 = _closure1_slot4;
                        var2 = var3.getCachedGuildScheduledEventById;
                        var1 = var2.bind(var3)(var4);
 50:
                        return var1;
                    }
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 13;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.isNotNullish;
                var2 = var3.bind(var4)(var2);
                return var2;
 242:
                var1 = _closure1_slot17;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var5;
    var5 = function useActiveEvent(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot11;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot5;
        var3[1] = var7;
        var2 = _closure1_slot8;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = _closure1_slot5;
                var3 = var4.getChannel;
                var1 = _closure2_slot0;
                var4 = var3.bind(var4)(var1);
                var6 = _closure1_slot8;
                var3 = var6.can;
                var1 = _closure1_slot16;
                var1 = var1.VIEW_CHANNEL;
                var3 = var3.bind(var6)(var1, var4);
                var1 = null;
                if(var3) { _fun0005_ip = 57; continue _fun0005 }
 55:
                return var1;
 57:
                var6 = var1 == var4;
                var3 = undefined;
                if(var6) { _fun0005_ip = 71; continue _fun0005 }
 66:
                var3 = var4.guild_id;
 71:
                if(!(var1 != var3)) { _fun0005_ip = 131; continue _fun0005 }
 75:
                var4 = _closure1_slot11;
                var3 = var4.getGuildScheduledEventsByIndex;
                var6 = _closure1_slot10;
                var5 = var6.CHANNEL_EVENT_ACTIVE;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                var4 = var3.bind(var4)(var2);
                var2 = var4.length;
                var3 = 0;
                var5 = var2 > var3;
                var2 = null;
                if(!var5) { _fun0005_ip = 129; continue _fun0005 }
 125:
                var2 = var4[var3];
 129:
                return var2;
 131:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useActiveEvent'] = var5;
    var5 = function useActiveEventsByChannel(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var4 = 12;
        var5 = var5[var4];
        var4 = undefined;
        var7 = var6.bind(var4)(var5);
        var6 = var7.useStateFromStoresArray;
        var4 = _closure1_slot11;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var3 = _closure1_slot11;
            var2 = var3.getGuildScheduledEventsForGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var6.bind(var7)(var5, var3, var4);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure3_slot0 = var1;
            var4 = _closure2_slot1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var3 = var4.channel_id;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 32; continue _fun0006 }
 14:
                    var2 = _closure3_slot0;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3, var4);
 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useActiveEventsByChannel'] = var5;
    var3['useGuildUpcomingEvents'] = var4;
    var4 = function useGuildUpcomingEventsNotice(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot19;
            var1 = undefined;
            var11 = var3.bind(var1)(var4);
            var _closure2_slot1 = var11;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 12;
            var6 = var5[var3];
            var10 = var4.bind(var1)(var6);
            var9 = var10.useStateFromStoresObject;
            var6 = _closure1_slot12;
            var8 = new Array(1);
            var8[0] = var6;
            var7 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getAllEventDismissals;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var9.bind(var10)(var8, var7);
            var7 = var5[var3];
            var9 = var4.bind(var1)(var7);
            var8 = var9.useStateFromStoresObject;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getAllUpcomingNoticeSeenTimes;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var8.bind(var9)(var7, var6);
            var6 = var5[var3];
            var14 = var4.bind(var1)(var6);
            var13 = var14.useStateFromStoresObject;
            var6 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var6;
            var7 = new Array(1);
            var7[0] = var11;
            var6 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 40; continue _fun0008 }
 13:
                    var4 = _closure2_slot1;
                    var3 = var4.reduce;
                    var2 = function(arg1, arg2) {
                        var2 = arg2;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 14;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.getNextRecurrenceIdInEvent;
                        var6 = var1.bind(var3)(var2);
                        var1 = {};
                        var7 = arg1;
                        var8 = var1;
                        var3 = copyDataProperties(var8, var7);
                        var3 = var2.id;
                        var5 = _closure1_slot11;
                        var4 = var5.isInterestedInEventRecurrence;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var2, var6);
                        var1[var3] = var2;
                        return var1;
                    };
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0008_ip = 42; continue _fun0008;
 40:
                    var1 = {};
 42:
                    return var1;
                }
            };
            var8 = var13.bind(var14)(var8, var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3, var2);
            var7 = null;
            var2 = var7 != var3;
            if(!var2) { _fun0007_ip = 232; continue _fun0007 }
 203:
            var6 = var3.features;
            var5 = var6.has;
            var4 = _closure1_slot15;
            var4 = var4.COMMUNITY;
            var4 = var5.bind(var6)(var4);
            var2 = !var4;
 232:
            if(!var2) { _fun0007_ip = 261; continue _fun0007 }
 235:
            var5 = var3.features;
            var4 = var5.has;
            var3 = _closure1_slot15;
            var3 = var3.INTERNAL_EMPLOYEE_ONLY;
            var2 = var4.bind(var5)(var3);
 261:
            if(!(var7 != var11)) { _fun0007_ip = 391; continue _fun0007 }
 268:
            if(!(var7 != var8)) { _fun0007_ip = 391; continue _fun0007 }
 272:
            if(!var2) { _fun0007_ip = 391; continue _fun0007 }
 275:
            var2 = var11.length;
            var6 = 0;
            var2 = var6 < var2;
            var5 = 15;
            if(!var2) { _fun0007_ip = 391; continue _fun0007 }
 292:
            var3 = var11[var6];
            var2 = var3.id;
            var15 = var10[var2];
            var2 = var3.id;
            var14 = var9[var2];
            var2 = var3.id;
            var2 = var8[var2];
            var13 = var7 != var2;
            if(!var13) { _fun0007_ip = 333; continue _fun0007 }
 330:
            var13 = var2;
 333:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var5];
            var4 = var4.bind(var1)(var2);
            var2 = var4.getNextShownUpcomingEventNoticeType;
            var20 = var4;
            var19 = var3;
            var18 = var15;
            var17 = var14;
            var16 = var13;
            var2 = var20[var2](var19, var18, var17, var16, var15);
            if(!(var7 == var2)) { _fun0007_ip = 393; continue _fun0007 }
 379:
            var6 = var6 + 1;
            var4 = var11.length;
            if(var6 < var4) { _fun0007_ip = 292; continue _fun0007 }
 391:
            return var1;
 393:
            var1 = {};
            var1['upcomingEvent'] = var3;
            var1['noticeType'] = var2;
            return var1;
        }
    };
    var3['useGuildUpcomingEventsNotice'] = var4;
    var4 = function useGuildActiveEvent(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot11;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot5;
        var3[1] = var7;
        var2 = _closure1_slot8;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot11;
            var2 = var3.getGuildScheduledEventsByIndex;
            var5 = _closure1_slot10;
            var4 = var5.GUILD_EVENT_ACTIVE;
            var1 = _closure2_slot0;
            var1 = var4.bind(var5)(var1);
            var3 = var2.bind(var3)(var1);
            var2 = var3.find;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.entity_type;
                    var3 = _closure1_slot13;
                    var3 = var3.NONE;
                    if(!(var4 !== var3)) { _fun0009_ip = 102; continue _fun0009 }
 26:
                    var4 = _closure1_slot9;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var2);
                    if(!var3) { _fun0009_ip = 102; continue _fun0009 }
 40:
                    var4 = var2.channel_id;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0009_ip = 98; continue _fun0009 }
 51:
                    var4 = _closure1_slot5;
                    var3 = var4.getChannel;
                    var2 = var2.channel_id;
                    var4 = var3.bind(var4)(var2);
                    var3 = _closure1_slot8;
                    var2 = var3.can;
                    var1 = _closure1_slot16;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
 98:
                    var1 = true;
                    return var1;
 102:
                    var1 = false;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGuildActiveEvent'] = var4;
    var4 = function useGuildChannelScheduledEvents(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot11;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot11;
            var2 = var3.getGuildScheduledEventsByIndex;
            var5 = _closure1_slot10;
            var4 = var5.CHANNEL_EVENT_UPCOMING;
            var1 = _closure2_slot0;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGuildChannelScheduledEvents'] = var4;
    var4 = function useFirstActiveEventChannel(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot5;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot11;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = _closure1_slot11;
                var3 = var4.getGuildScheduledEventsByIndex;
                var6 = _closure1_slot10;
                var5 = var6.GUILD_EVENT_ACTIVE;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                var4 = var3.bind(var4)(var2);
                var3 = var4.find;
                var2 = function(arg1) {
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var1 = arg1;
                    var1 = var1.channel_id;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = null;
                var5 = var1 == var4;
                var1 = undefined;
                if(var5) { _fun0010_ip = 83; continue _fun0010 }
 78:
                var1 = var4.channel_id;
 83:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useFirstActiveEventChannel'] = var4;
    var2 = function useImminentUpcomingGuildEvents(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot3;
        var5 = var4.useState;
        var2 = function() {
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var5.bind(var4)(var2);
        var5 = _closure1_slot2;
        var7 = undefined;
        var2 = 2;
        var6 = var5.bind(var7)(var6, var2);
        var2 = 0;
        var2 = var6[var2];
        var5 = 1;
        var5 = var6[var5];
        var _closure2_slot1 = var5;
        var9 = var4.useEffect;
        var6 = function() {
            var2 = global;
            var5 = var2.setInterval;
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = function() {
                var3 = _closure2_slot1;
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var5.bind(var3)(var2, var4);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = global;
                var3 = var1.clearInterval;
                var2 = _closure3_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var5 = new Array(0);
        var5 = var9.bind(var4)(var6, var5);
        var6 = _closure1_slot0;
        var9 = _closure1_slot1;
        var5 = 12;
        var5 = var9[var5];
        var7 = var6.bind(var7)(var5);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot11;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var2;
        var2 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0011_ip = 52; continue _fun0011 }
 13:
                var3 = _closure1_slot11;
                var2 = var3.getGuildScheduledEventsByIndex;
                var5 = _closure1_slot10;
                var4 = var5.CHANNEL_EVENT_UPCOMING;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                _fun0011_ip = 56; continue _fun0011;
 52:
                var1 = new Array(0);
 56:
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5, var2, var3);
        var _closure2_slot2 = var5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure2_slot2;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var4 = arg1;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 16;
                    var3 = var6[var2];
                    var2 = undefined;
                    var7 = var5.bind(var2)(var3);
                    var3 = var7.getEventSchedule;
                    var3 = var3.bind(var7)(var4);
                    var7 = var3.startTime;
                    var8 = var3.endTime;
                    var3 = 14;
                    var3 = var6[var3];
                    var6 = var5.bind(var2)(var3);
                    var5 = var6.getEventTimeData;
                    var3 = var7.toISOString;
                    var3 = var3.bind(var7)();
                    var7 = null;
                    var7 = var7 == var8;
                    if(var7) { _fun0012_ip = 98; continue _fun0012 }
 88:
                    var7 = var8.toISOString;
                    var2 = var7.bind(var8)();
 98:
                    var3 = var5.bind(var6)(var3, var2);
                    var2 = var3.withinStartWindow;
                    var3 = var3.diffMinutes;
                    var4 = var4.status;
                    var1 = _closure1_slot14;
                    var1 = var1.ACTIVE;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0012_ip = 141; continue _fun0012 }
 138:
                    var1 = var2;
 141:
                    if(!var1) { _fun0012_ip = 151; continue _fun0012 }
 144:
                    var2 = 15;
                    var1 = var3 < var2;
 151:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useImminentUpcomingGuildEvents'] = var2;
    return var1;
})();