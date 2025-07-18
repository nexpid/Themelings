// app/modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function resetStateForEvent(arg1) {
        var3 = arg1;
        var1 = {};
        var5 = _closure1_slot11;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var4 = delete var1[var3];
        _closure1_slot11 = var1;
        var1 = {};
        var5 = _closure1_slot12;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var3 = delete var1[var3];
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.GuildScheduledEventStatus;
    var _closure1_slot9 = var8;
    var2 = var2.UpcomingGuildEventNoticeTypes;
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function UpcomingEventNoticesStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var3 = null;
                if(!(var3 != var1)) { _fun0003_ip = 44; continue _fun0003 }
 9:
                var4 = var1.upcomingEventDismissals;
                if(!(var3 == var4)) { _fun0003_ip = 21; continue _fun0003 }
 19:
                var4 = {};
 21:
                _closure1_slot11 = var4;
                var1 = var1.upcomingEventSeenTimestamps;
                if(!(var3 == var1)) { _fun0003_ip = 40; continue _fun0003 }
 38:
                var1 = {};
 40:
                _closure1_slot12 = var1;
 44:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuildEventNoticeDismissalTime';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getAllEventDismissals';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getUpcomingNoticeSeenTime';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAllUpcomingNoticeSeenTimes';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot11;
            var1['upcomingEventDismissals'] = var3;
            var2 = _closure1_slot12;
            var1['upcomingEventSeenTimestamps'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'UpcomingEventNoticesStore';
    var8['displayName'] = var2;
    var2 = 'UpcomingEventNotices';
    var8['persistKey'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleHideNotice(arg1) {
        var1 = arg1;
        var4 = var1.eventId;
        var2 = {};
        var6 = _closure1_slot11;
        var7 = var2;
        var3 = copyDataProperties(var7, var6);
        var3 = global;
        var5 = var3.Date;
        var3 = var5.now;
        var3 = var3.bind(var5)();
        var2[var4] = var3;
        _closure1_slot11 = var2;
        var1 = undefined;
        return var1;
    };
    var2['UPCOMING_GUILD_EVENT_NOTICE_HIDE'] = var9;
    var9 = function handleEventUpdate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.guildScheduledEvent;
            var4 = var1.status;
            var3 = _closure1_slot9;
            var3 = var3.CANCELED;
            var3 = var4 !== var3;
            if(!var3) { _fun0004_ip = 53; continue _fun0004 }
 34:
            var5 = var1.status;
            var4 = _closure1_slot9;
            var4 = var4.COMPLETED;
            var3 = var5 !== var4;
 53:
            if(var3) { _fun0004_ip = 72; continue _fun0004 }
 56:
            var3 = _closure1_slot14;
            var2 = var1.id;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 72:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_SCHEDULED_EVENT_UPDATE'] = var9;
    var9 = function handleEventDelete(arg1) {
        var1 = arg1;
        var1 = var1.guildScheduledEvent;
        var3 = _closure1_slot14;
        var2 = var1.id;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['GUILD_SCHEDULED_EVENT_DELETE'] = var9;
    var9 = function handleMaybeHideNewEventNotice(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.userId;
            var4 = var1.guildEventId;
            var5 = _closure1_slot7;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            if(!(var3 === var1)) { _fun0005_ip = 195; continue _fun0005 }
 38:
            var3 = _closure1_slot8;
            var1 = var3.getGuildScheduledEvent;
            var8 = var1.bind(var3)(var4);
            var3 = null;
            if(!(var3 != var8)) { _fun0005_ip = 195; continue _fun0005 }
 62:
            var5 = var8.status;
            var1 = _closure1_slot9;
            var1 = var1.SCHEDULED;
            if(!(var5 === var1)) { _fun0005_ip = 195; continue _fun0005 }
 81:
            var1 = _closure1_slot11;
            var1 = var1[var4];
            if(!(var3 == var1)) { _fun0005_ip = 195; continue _fun0005 }
 93:
            var1 = _closure1_slot12;
            var10 = var1[var4];
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 8;
            var1 = var5[var1];
            var6 = undefined;
            var5 = var3.bind(var6)(var1);
            var3 = var5.getNextShownUpcomingEventNoticeType;
            var9 = false;
            var13 = var5;
            var12 = var8;
            var11 = undefined;
            var3 = var13[var3](var12, var11, var10, var9, var8);
            var1 = _closure1_slot10;
            var1 = var1.NEW_EVENT;
            if(!(var3 === var1)) { _fun0005_ip = 195; continue _fun0005 }
 157:
            var1 = {};
            var11 = _closure1_slot11;
            var12 = var1;
            var3 = copyDataProperties(var12, var11);
            var3 = global;
            var5 = var3.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            var1[var4] = var3;
            _closure1_slot11 = var1;
 195:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_SCHEDULED_EVENT_USER_ADD'] = var9;
    var4 = function handleMarkUpcomingNoticeAsSeen(arg1) {
        var1 = arg1;
        var4 = var1.guildEventId;
        var2 = {};
        var6 = _closure1_slot12;
        var7 = var2;
        var3 = copyDataProperties(var7, var6);
        var3 = global;
        var5 = var3.Date;
        var3 = var5.now;
        var3 = var3.bind(var5)();
        var2[var4] = var3;
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['UPCOMING_GUILD_EVENT_NOTICE_SEEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();