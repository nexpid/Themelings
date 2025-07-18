// app/actions/DimensionActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = native7;
    var2 = native3;
    var _closure1_slot0 = var2;
    var _closure1_slot1 = var4;
    var2 = global;
    var7 = var2.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var2 = true;
    var5['value'] = var2;
    var2 = '__esModule';
    var2 = var6.bind(var7)(var3, var2, var5);
    var2 = {};
    var5 = function updateChannelDimensions(arg1, arg2, arg3, arg4, arg5) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var1 = arg4;
        var _closure2_slot3 = var1;
        var1 = arg5;
        var _closure2_slot4 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 0;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.dispatch;
                var3 = {};
                var2 = 'UPDATE_CHANNEL_DIMENSIONS';
                var3['type'] = var2;
                var6 = _closure2_slot0;
                var3['channelId'] = var6;
                var6 = _closure2_slot1;
                var3['scrollTop'] = var6;
                var6 = _closure2_slot2;
                var3['scrollHeight'] = var6;
                var6 = _closure2_slot3;
                var3['offsetHeight'] = var6;
                var3 = var4.bind(var5)(var3);
                var4 = _closure2_slot4;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 100; continue _fun0001 }
 92:
                var2 = _closure2_slot4;
                var2 = var2.bind(var1)();
 100:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['updateChannelDimensions'] = var5;
    var5 = function updateChannelListScroll(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0002_ip = 13; continue _fun0002 }
 9:
            var5 = new Array(0);
 13:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'UPDATE_CHANNEL_LIST_DIMENSIONS';
            var2['type'] = var6;
            var6 = arg1;
            var2['guildId'] = var6;
            var6 = arg2;
            var2['scrollTop'] = var6;
            var2['channelIds'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['updateChannelListScroll'] = var5;
    var5 = function channelListScrollTo(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UPDATE_CHANNEL_LIST_DIMENSIONS';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['scrollTo'] = var5;
        var5 = new Array(0);
        var2['channelIds'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['channelListScrollTo'] = var5;
    var5 = function clearChannelListScrollTo(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {'type': 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'guildId': null, 'scrollTo': null};
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = new Array(0);
        var2['channelIds'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearChannelListScrollTo'] = var5;
    var5 = function clearChannelDimensions(arg1, arg2) {
        var5 = this;
        var4 = var5.updateChannelDimensions;
        var10 = arg1;
        var6 = arg2;
        var11 = var5;
        var9 = null;
        var8 = null;
        var7 = null;
        var1 = var11[var4](var10, var9, var8, var7, var6, var5);
        var1 = undefined;
        return var1;
    };
    var2['clearChannelDimensions'] = var5;
    var1 = function updateGuildListScrollTo(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UPDATE_GUILD_LIST_DIMENSIONS';
        var2['type'] = var5;
        var5 = arg1;
        var2['scrollTop'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['updateGuildListScrollTo'] = var1;
    var1 = 1;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/DimensionActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();