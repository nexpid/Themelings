// app/modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot4 = var7;
    var2 = function() {
        var4 = function ChannelLatestMessageLoadingStatsManager(arg1) {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['label'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var1 = {};
        var2 = 'start';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var2 = {};
            var1 = arg1;
            var1 = var1.channelId;
            var2['channelId'] = var1;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2['startMs'] = var1;
            var1 = this;
            var1['latestChannelMessagesLoad'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'cancel';
        var1['key'] = var6;
        var6 = function value() {
            var1 = undefined;
            var2 = this;
            var2['latestChannelMessagesLoad'] = var1;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'finish';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var8 = arg1;
                var2 = this;
                var1 = var2.latestChannelMessagesLoad;
                var3 = null;
                if(!(var3 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var1.channelId;
                var3 = var8.channelId;
                if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var1 = var1.startMs;
                var9 = var3 - var1;
                var3 = _closure2_slot0;
                var5 = var3.seenChannelIds;
                var4 = var5.has;
                var3 = var8.channelId;
                var3 = var4.bind(var5)(var3);
                var7 = !var3;
                if(!var7) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var1 = _closure2_slot0;
                var4 = var1.seenChannelIds;
                var3 = var4.add;
                var1 = var8.channelId;
                var1 = var3.bind(var4)(var1);
case 5:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.trackClickstream;
                var3 = _closure1_slot4;
                var4 = var3.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM;
                var3 = {};
                var3['load_duration_ms'] = var9;
                var8 = var8.areMessagesCached;
                var3['were_messages_cached'] = var8;
                var3['is_first_load'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                var2['latestChannelMessagesLoad'] = var1;
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var4.Set;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var2['seenChannelIds'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();