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
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var7 = _closure1_slot9;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot4;
        var3[1] = var7;
        var2 = _closure1_slot6;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot9;
            var2 = var3.getGuildScheduledEventsByIndex;
            var5 = _closure1_slot8;
            var4 = var5.GUILD_EVENT_UPCOMING;
            var1 = _closure2_slot0;
            var1 = var4.bind(var5)(var1);
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.entity_type;
                    var3 = _closure1_slot11;
                    var3 = var3.NONE;
                    if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = var2.status;
                    var3 = _closure1_slot12;
                    var3 = var3.SCHEDULED;
                    if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                    var4 = var2.channel_id;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                    var4 = _closure1_slot4;
                    var3 = var4.getChannel;
                    var2 = var2.channel_id;
                    var4 = var3.bind(var4)(var2);
                    var3 = _closure1_slot6;
                    var2 = var3.can;
                    var1 = _closure1_slot14;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
case 5:
                    var1 = true;
                    return var1;
case 2:
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
    var _closure1_slot17 = var4;
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
    var9 = var7[var5];
    var9 = var6.bind(var1)(var9);
    var10 = var9.isGuildScheduledEventActive;
    var _closure1_slot7 = var10;
    var9 = var9.StaticGuildEventIndexes;
    var _closure1_slot8 = var9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.GuildScheduledEventEntityTypes;
    var _closure1_slot11 = var9;
    var5 = var5.GuildScheduledEventStatus;
    var _closure1_slot12 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.GuildFeatures;
    var _closure1_slot13 = var9;
    var5 = var5.Permissions;
    var _closure1_slot14 = var5;
    var5 = new Array(0);
    var _closure1_slot15 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Millis;
    var8 = var5.MINUTE;
    var5 = 15;
    var5 = var5 * var8;
    var _closure1_slot16 = var5;
    var5 = 14;
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
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var8 = _closure1_slot5;
        var3 = new Array(4);
        var3[0] = var8;
        var8 = _closure1_slot9;
        var3[1] = var8;
        var8 = _closure1_slot6;
        var3[2] = var8;
        var2 = _closure1_slot4;
        var3[3] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot5;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var1);
                var7 = null;
                if(!(var7 != var1)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var4 = _closure1_slot9;
                var3 = var4.getGuildScheduledEventsByIndex;
                var6 = _closure2_slot1;
                if(!(var7 == var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var7 = _closure1_slot8;
                var6 = var7.GUILD_EVENT_UPCOMING;
                var1 = var1.id;
                var1 = var6.bind(var7)(var1);
                _fun0002_ip = 11; continue _fun0002;
case 9:
                var1 = _closure2_slot1;
case 11:
                var4 = var3.bind(var4)(var1);
                var3 = var4.filter;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.channel_id;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var3 = _closure1_slot4;
                        var2 = var3.getChannel;
                        var4 = var2.bind(var3)(var4);
                        var3 = _closure1_slot6;
                        var2 = var3.can;
                        var1 = _closure1_slot14;
                        var1 = var1.VIEW_CHANNEL;
                        var1 = var2.bind(var3)(var1, var4);
                        return var1;
case 12:
                        var1 = true;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                _fun0002_ip = 14; continue _fun0002;
case 7:
                var1 = _closure1_slot15;
case 14:
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
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot9;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot4;
        var3[1] = var7;
        var2 = _closure1_slot6;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot4;
                var3 = var4.getChannel;
                var1 = _closure2_slot0;
                var4 = var3.bind(var4)(var1);
                var6 = _closure1_slot6;
                var3 = var6.can;
                var1 = _closure1_slot14;
                var1 = var1.VIEW_CHANNEL;
                var3 = var3.bind(var6)(var1, var4);
                var1 = null;
                if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                return var1;
case 15:
                var6 = var1 == var4;
                var3 = undefined;
                if(var6) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var3 = var4.guild_id;
case 17:
                if(!(var1 != var3)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var4 = _closure1_slot9;
                var3 = var4.getGuildScheduledEventsByIndex;
                var6 = _closure1_slot8;
                var5 = var6.CHANNEL_EVENT_ACTIVE;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                var4 = var3.bind(var4)(var2);
                var2 = var4.length;
                var3 = 0;
                var5 = var2 > var3;
                var2 = null;
                if(!var5) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var2 = var4[var3];
case 21:
                return var2;
case 19:
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
        var4 = 10;
        var5 = var5[var4];
        var4 = undefined;
        var7 = var6.bind(var4)(var5);
        var6 = var7.useStateFromStoresArray;
        var4 = _closure1_slot9;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var3 = _closure1_slot9;
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.channel_id;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 23; continue _fun0005 }
case 13:
                    var2 = _closure3_slot0;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3, var4);
case 23:
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot17;
            var1 = undefined;
            var11 = var3.bind(var1)(var4);
            var _closure2_slot1 = var11;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 10;
            var6 = var5[var3];
            var10 = var4.bind(var1)(var6);
            var9 = var10.useStateFromStoresObject;
            var6 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var6;
            var7 = function() {
                var2 = _closure1_slot10;
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
                var2 = _closure1_slot10;
                var1 = var2.getAllUpcomingNoticeSeenTimes;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var8.bind(var9)(var7, var6);
            var6 = var5[var3];
            var14 = var4.bind(var1)(var6);
            var13 = var14.useStateFromStoresObject;
            var6 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var6;
            var7 = new Array(1);
            var7[0] = var11;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var4 = _closure2_slot1;
                    var3 = var4.reduce;
                    var2 = function(arg1, arg2) {
                        var2 = arg2;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 11;
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
                        var5 = _closure1_slot9;
                        var4 = var5.isInterestedInEventRecurrence;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var2, var6);
                        var1[var3] = var2;
                        return var1;
                    };
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0007_ip = 26; continue _fun0007;
case 24:
                    var1 = {};
case 26:
                    return var1;
                }
            };
            var8 = var13.bind(var14)(var8, var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3, var2);
            var7 = null;
            var2 = var7 != var3;
            if(!var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var6 = var3.features;
            var5 = var6.has;
            var4 = _closure1_slot13;
            var4 = var4.COMMUNITY;
            var4 = var5.bind(var6)(var4);
            var2 = !var4;
case 27:
            if(!var2) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var5 = var3.features;
            var4 = var5.has;
            var3 = _closure1_slot13;
            var3 = var3.INTERNAL_EMPLOYEE_ONLY;
            var2 = var4.bind(var5)(var3);
case 29:
            if(!(var7 != var11)) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            if(!(var7 != var8)) { _fun0006_ip = 31; continue _fun0006 }
case 33:
            if(!var2) { _fun0006_ip = 31; continue _fun0006 }
case 34:
            var2 = var11.length;
            var6 = 0;
            var2 = var6 < var2;
            var5 = 12;
            if(!var2) { _fun0006_ip = 31; continue _fun0006 }
case 35:
            var3 = var11[var6];
            var2 = var3.id;
            var15 = var10[var2];
            var2 = var3.id;
            var14 = var9[var2];
            var2 = var3.id;
            var2 = var8[var2];
            var13 = var7 != var2;
            if(!var13) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var13 = var2;
case 36:
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
            if(!(var7 == var2)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var6 = var6 + 1;
            var4 = var11.length;
            if(var6 < var4) { _fun0006_ip = 35; continue _fun0006 }
case 31:
            return var1;
case 38:
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
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot9;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot4;
        var3[1] = var7;
        var2 = _closure1_slot6;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot9;
            var2 = var3.getGuildScheduledEventsByIndex;
            var5 = _closure1_slot8;
            var4 = var5.GUILD_EVENT_ACTIVE;
            var1 = _closure2_slot0;
            var1 = var4.bind(var5)(var1);
            var3 = var2.bind(var3)(var1);
            var2 = var3.find;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.entity_type;
                    var3 = _closure1_slot11;
                    var3 = var3.NONE;
                    if(!(var4 !== var3)) { _fun0008_ip = 14; continue _fun0008 }
case 3:
                    var4 = _closure1_slot7;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var2);
                    if(!var3) { _fun0008_ip = 14; continue _fun0008 }
case 24:
                    var4 = var2.channel_id;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0008_ip = 7; continue _fun0008 }
case 40:
                    var4 = _closure1_slot4;
                    var3 = var4.getChannel;
                    var2 = var2.channel_id;
                    var4 = var3.bind(var4)(var2);
                    var3 = _closure1_slot6;
                    var2 = var3.can;
                    var1 = _closure1_slot14;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
case 7:
                    var1 = true;
                    return var1;
case 14:
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
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot9;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot9;
            var2 = var3.getGuildScheduledEventsByIndex;
            var5 = _closure1_slot8;
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
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot4;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot9;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = _closure1_slot9;
                var3 = var4.getGuildScheduledEventsByIndex;
                var6 = _closure1_slot8;
                var5 = var6.GUILD_EVENT_ACTIVE;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                var4 = var3.bind(var4)(var2);
                var3 = var4.find;
                var2 = function(arg1) {
                    var3 = _closure1_slot4;
                    var2 = var3.getChannel;
                    var1 = arg1;
                    var1 = var1.channel_id;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = null;
                var5 = var1 == var4;
                var1 = undefined;
                if(var5) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                var1 = var4.channel_id;
case 41:
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
            var4 = _closure1_slot16;
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
        var5 = 10;
        var5 = var9[var5];
        var7 = var6.bind(var7)(var5);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot9;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var2;
        var2 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 43; continue _fun0010 }
case 25:
                var3 = _closure1_slot9;
                var2 = var3.getGuildScheduledEventsByIndex;
                var5 = _closure1_slot8;
                var4 = var5.CHANNEL_EVENT_UPCOMING;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                _fun0010_ip = 6; continue _fun0010;
case 43:
                var1 = new Array(0);
case 6:
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
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 13;
                    var3 = var6[var2];
                    var2 = undefined;
                    var7 = var5.bind(var2)(var3);
                    var3 = var7.getEventSchedule;
                    var3 = var3.bind(var7)(var4);
                    var7 = var3.startTime;
                    var8 = var3.endTime;
                    var3 = 11;
                    var3 = var6[var3];
                    var6 = var5.bind(var2)(var3);
                    var5 = var6.getEventTimeData;
                    var3 = var7.toISOString;
                    var3 = var3.bind(var7)();
                    var7 = null;
                    var7 = var7 == var8;
                    if(var7) { _fun0011_ip = 7; continue _fun0011 }
case 44:
                    var7 = var8.toISOString;
                    var2 = var7.bind(var8)();
case 7:
                    var3 = var5.bind(var6)(var3, var2);
                    var2 = var3.withinStartWindow;
                    var3 = var3.diffMinutes;
                    var4 = var4.status;
                    var1 = _closure1_slot12;
                    var1 = var1.ACTIVE;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                    var1 = var2;
case 45:
                    if(!var1) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                    var2 = 15;
                    var1 = var3 < var2;
case 47:
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