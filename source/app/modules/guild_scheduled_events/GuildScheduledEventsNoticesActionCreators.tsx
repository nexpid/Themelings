// app/modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function hideLiveChannelNotice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.eventId;
            var4 = var1.stageId;
            var2 = null;
            var1 = var2 == var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2 == var4;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'LIVE_CHANNEL_NOTICE_HIDE';
            var1['type'] = var6;
            var1['eventId'] = var5;
            var1['stageId'] = var4;
            var1 = var2.bind(var3)(var1);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var3['hideLiveChannelNotice'] = var4;
    var4 = function hideUpcomingEventNotice(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UPCOMING_GUILD_EVENT_NOTICE_HIDE';
        var2['type'] = var5;
        var5 = arg1;
        var2['eventId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['hideUpcomingEventNotice'] = var4;
    var4 = function markUpcomingEventNoticeAsSeen(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UPCOMING_GUILD_EVENT_NOTICE_SEEN';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildEventId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['markUpcomingEventNoticeAsSeen'] = var4;
    var2 = function dismissEventBanner(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'EVENT_BANNER_DISMISS';
        var2['type'] = var5;
        var5 = arg1;
        var2['eventId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['dismissEventBanner'] = var2;
    return var1;
})();