// app/modules/app_analytics/clickstream/getClickstreamDrainEvent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_analytics/clickstream/getClickstreamDrainEvent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getClicksteamDrainEvent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var4 = arg2;
            var1 = global;
            var3 = var1.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var8 = var5;
            var3 = new var8[var3](var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot0;
            var5 = var5.CHANNEL_OPENED_CLICKSTREAM;
            if(!(var5 !== var6)) { _fun0001_ip = 329; continue _fun0001 }
 60:
            var5 = _closure1_slot0;
            var5 = var5.GUILD_VIEWED_CLICKSTREAM;
            if(!(var5 !== var6)) { _fun0001_ip = 265; continue _fun0001 }
 77:
            var3 = _closure1_slot0;
            var3 = var3.FRIENDS_LIST_VIEWED_CLICKSTREAM;
            if(!(var3 !== var6)) { _fun0001_ip = 141; continue _fun0001 }
 91:
            var5 = var1.Error;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = 'getClicksteamDrainEvent: Unknown event: ';
            var7 = var3.bind(var1)(var6);
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var8 = var3;
            var1 = new var8[var5](var7, var6);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
 141:
            var1 = {};
            var5 = var4.map;
            var3 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = var2.getTime;
                var2 = var1.bind(var2)();
                var1 = arg1;
                var3 = var1.timestamp;
                var1 = var3.getTime;
                var1 = var1.bind(var3)();
                var1 = var2 - var1;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['time_minus'] = var3;
            var5 = var4.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.rtc_state;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['rtc_states'] = var3;
            var5 = var4.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.tab_opened;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['tab_opened'] = var3;
            var5 = var4.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.num_friends;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['num_friends'] = var3;
            var5 = var4.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.now_playing_visible;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['now_playing_visible'] = var3;
            var5 = var4.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.now_playing_num_cards;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['now_playing_num_cards'] = var3;
            return var1;
 265:
            var1 = {};
            var5 = var4.map;
            var3 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = var2.getTime;
                var2 = var1.bind(var2)();
                var1 = arg1;
                var3 = var1.timestamp;
                var1 = var3.getTime;
                var1 = var1.bind(var3)();
                var1 = var2 - var1;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['time_minus'] = var3;
            var5 = var4.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.guildId;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['guild_ids'] = var3;
            var5 = var4.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.rtc_state;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['rtc_states'] = var3;
            return var1;
 329:
            var1 = {};
            var5 = var4.map;
            var3 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = var2.getTime;
                var2 = var1.bind(var2)();
                var1 = arg1;
                var3 = var1.timestamp;
                var1 = var3.getTime;
                var1 = var1.bind(var3)();
                var1 = var2 - var1;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['time_minus'] = var3;
            var5 = var4.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.channelId;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['channel_ids'] = var3;
            var5 = var4.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.channelType;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var1['channel_types'] = var3;
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.rtc_state;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['rtc_states'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();