// app/actions/GuildSubscriptionsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var4 = function subscribeChannel(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SUBSCRIPTIONS_CHANNEL';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['channelId'] = var5;
        var5 = arg3;
        var2['ranges'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 2;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/GuildSubscriptionsActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function subscribeMembers(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SUBSCRIPTIONS_MEMBERS_ADD';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['userIds'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['subscribeMembers'] = var5;
    var5 = function unsubscribeMembers(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['userIds'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['unsubscribeMembers'] = var5;
    var5 = function subscribeToMemberUpdates(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['subscribeToMemberUpdates'] = var5;
    var5 = function unsubscribeFromMemberUpdates(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['unsubscribeFromMemberUpdates'] = var5;
    var5 = function subscribeGuild(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SUBSCRIPTIONS';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['subscribeGuild'] = var5;
    var3['subscribeChannel'] = var4;
    var2 = function subscribeChannelDimensions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = var3.guildId;
            var4 = var3.channelId;
            var9 = var3.y;
            var2 = var3.height;
            var3 = var3.rowHeight;
            var _closure2_slot0 = var3;
            var7 = function toIndex(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arguments[1];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0002_ip = 11; continue _fun0002 }
 9:
                    var2 = 0;
 11:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.max;
                    var6 = var1.Math;
                    var5 = var6.ceil;
                    var8 = var1.Math;
                    var7 = var8.ceil;
                    var9 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var1 / var9;
                    var1 = var7.bind(var8)(var1);
                    var1 = var5.bind(var6)(var1);
                    var2 = var1 + var2;
                    var1 = 0;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var8 = function pushRange(arg1) {
                var6 = arg1;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 1;
                var3 = var1[var2];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.MINIMUM_RANGE;
                var1 = var1 - var2;
                var1 = var6 + var1;
                var5 = _closure2_slot1;
                var4 = var5.push;
                var3 = new Array(2);
                var3[0] = var6;
                var3[1] = var1;
                var3 = var4.bind(var5)(var3);
                var1 = var1 + var2;
                return var1;
            };
            var3 = new Array(0);
            var _closure2_slot1 = var3;
            var1 = 0.5;
            var6 = var1 * var2;
            var1 = undefined;
            var6 = var7.bind(var1)(var6);
            var10 = -var6;
            var10 = var7.bind(var1)(var9, var10);
            var2 = var9 + var2;
            var7 = var7.bind(var1)(var2, var6);
            var2 = 0;
            var14 = var10;
            if(!(var14 > var2)) { _fun0001_ip = 130; continue _fun0001 }
 106:
            var6 = global;
            var9 = var6.Math;
            var6 = var9.max;
            var2 = var8.bind(var1)(var2);
            var14 = var6.bind(var9)(var2, var10);
 130:
            var2 = global;
            var13 = var2.Math;
            var12 = var13.floor;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 1;
            var9 = var11[var6];
            var9 = var10.bind(var1)(var9);
            var9 = var9.MINIMUM_RANGE;
            var9 = var14 / var9;
            var9 = var12.bind(var13)(var9);
            var6 = var11[var6];
            var6 = var10.bind(var1)(var6);
            var6 = var6.MINIMUM_RANGE;
            var6 = var9 * var6;
            if(!(var6 <= var7)) { _fun0001_ip = 214; continue _fun0001 }
 205:
            var6 = var8.bind(var1)(var6);
            if(var6 <= var7) { _fun0001_ip = 205; continue _fun0001 }
 214:
            var2 = _closure1_slot3;
            var2 = var2.bind(var1)(var5, var4, var3);
            return var1;
        }
    };
    var3['subscribeChannelDimensions'] = var2;
    return var1;
})();