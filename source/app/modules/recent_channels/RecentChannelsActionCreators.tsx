// app/modules/recent_channels/RecentChannelsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _bulkClearRecents() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 2;
                    var6 = var8[var2];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var6);
                    var6 = var7.updateUserGuildSettings;
                    var2 = var8[var2];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.UserSettingsDelay;
                    var5 = var2.INFREQUENT_USER_ACTION;
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.Timestamp;
                        var2 = var3.fromDate;
                        var1 = global;
                        var1 = var1.Date;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {constructor: {value: var1}});
                        var6 = var4;
                        var1 = new var6[var1](var5);
                        var1 = var1 instanceof Object ? var1 : var4;
                        var2 = var2.bind(var3)(var1);
                        var1 = arg1;
                        var1['guildRecentsDismissedAt'] = var2;
                        var1 = true;
                        return var1;
                    };
                    var2 = var6.bind(var7)(var10, var2, var5);
                    SaveGenerator(address=85);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 4;
                    var5 = var7[var5];
                    var9 = var6.bind(var3)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var11 = 'BULK_CLEAR_RECENTS';
                    var5['type'] = var11;
                    var5['guildId'] = var10;
                    var10 = arg2;
                    var5['channelIds'] = var10;
                    var5 = var8.bind(var9)(var5);
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.track;
                    var4 = _closure1_slot4;
                    var5 = var4.CHANNEL_LIST_UPDATED;
                    var4 = {};
                    var8 = 'recents_dismissed';
                    var4['action_type'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/recent_channels/RecentChannelsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function bulkClearRecents() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['bulkClearRecents'] = var2;
    return var1;
})();