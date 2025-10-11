// app/modules/app_analytics/clickstream/getClickstreamTrackEvent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot2 = var7;
    var4 = var4.ChannelTypes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_analytics/clickstream/getClickstreamTrackEvent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getClickstreamTrackEvent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var2 = _closure1_slot2;
            var2 = var2.CHANNEL_OPENED_CLICKSTREAM;
            if(!(var2 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_VIEWED_CLICKSTREAM;
            if(!(var2 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot2;
            var2 = var2.FRIENDS_LIST_VIEWED_CLICKSTREAM;
            if(!(var2 !== var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = global;
            var5 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'getClickstreamTrackEvent: Unknown event: ';
            var7 = var3.bind(var2)(var6);
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var8 = var3;
            var2 = new var8[var5](var7, var6);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 6:
            var2 = {};
            var3 = global;
            var3 = var3.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var8 = var5;
            var3 = new var8[var3](var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var2['timestamp'] = var3;
            var5 = _closure1_slot1;
            var3 = var5.getState;
            var3 = var3.bind(var5)();
            var2['rtc_state'] = var3;
            var3 = var1.tab_opened;
            var2['tab_opened'] = var3;
            var3 = var1.num_friends;
            var2['num_friends'] = var3;
            var3 = var1.now_playing_visible;
            var2['now_playing_visible'] = var3;
            var3 = var1.now_playing_num_cards;
            var2['now_playing_num_cards'] = var3;
            return var2;
case 4:
            var3 = var1.guildId;
            var2 = {};
            var5 = global;
            var5 = var5.Date;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var8 = var6;
            var5 = new var8[var5](var7);
            var5 = var5 instanceof Object ? var5 : var6;
            var2['timestamp'] = var5;
            var6 = _closure1_slot1;
            var5 = var6.getState;
            var5 = var5.bind(var6)();
            var2['rtc_state'] = var5;
            var2['guildId'] = var3;
            return var2;
case 2:
            var3 = var1.channelId;
            var1 = _closure1_slot4;
            var1 = var1.CHANNEL_BROWSER;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = _closure1_slot4;
            var1 = var1.GUILD_HOME;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var1 = _closure1_slot4;
            var1 = var1.GUILD_SHOP;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            var1 = _closure1_slot4;
            var1 = var1.GAME_SHOP;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 12:
            var1 = _closure1_slot4;
            var1 = var1.MEMBER_APPLICATIONS;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 13:
            var1 = _closure1_slot4;
            var1 = var1.ROLE_SUBSCRIPTIONS;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 14:
            var1 = _closure1_slot4;
            var1 = var1.CUSTOMIZE_COMMUNITY;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 15:
            var1 = _closure1_slot4;
            var1 = var1.MEMBER_SAFETY;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 16:
            var1 = _closure1_slot4;
            var1 = var1.GUILD_ONBOARDING;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 17:
            var1 = _closure1_slot4;
            var1 = var1.GUILD_BOOSTS;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 18:
            var2 = _closure1_slot0;
            var1 = var2.getChannel;
            var5 = var1.bind(var2)(var3);
            var1 = null;
            var6 = var1 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = var5.type;
case 19:
            if(!(var1 == var2)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var1 = _closure1_slot3;
            var2 = var1.UNKNOWN;
case 21:
            var1 = {};
            var5 = global;
            var5 = var5.Date;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var8 = var6;
            var5 = new var8[var5](var7);
            var5 = var5 instanceof Object ? var5 : var6;
            var1['timestamp'] = var5;
            var5 = _closure1_slot1;
            var4 = var5.getState;
            var4 = var4.bind(var5)();
            var1['rtc_state'] = var4;
            var1['channelId'] = var3;
            var1['channelType'] = var2;
            return var1;
case 8:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();