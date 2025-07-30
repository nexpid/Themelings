// app/modules/search/native/hooks/useSearchContext.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchTypes;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/hooks/useSearchContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildSearchContext(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {};
            var2 = _closure1_slot5;
            var2 = var2.GUILD;
            var1['type'] = var2;
            var2 = _closure2_slot0;
            var1['guildId'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useGuildSearchContext'] = var4;
    var4 = function useGuildChannelSearchContext(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var1 = {};
            var2 = _closure1_slot5;
            var2 = var2.GUILD_CHANNEL;
            var1['type'] = var2;
            var3 = _closure2_slot0;
            var1['guildId'] = var3;
            var2 = _closure2_slot1;
            var1['channelId'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useGuildChannelSearchContext'] = var4;
    var2 = function useChannelDetailsSearchContext(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var8 = var5.bind(var3)(var4);
        var5 = var8.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0001_ip = 45; continue _fun0001 }
 35:
                var2 = var3.isThread;
                var1 = var2.bind(var3)();
 45:
                return var1;
            }
        };
        var5 = var5.bind(var8)(var4, var3);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure2_slot2;
                if(var1) { _fun0002_ip = 89; continue _fun0002 }
 10:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var2)) { _fun0002_ip = 57; continue _fun0002 }
 20:
                var1 = {};
                var2 = _closure1_slot5;
                var2 = var2.GUILD_CHANNEL;
                var1['type'] = var2;
                var2 = _closure2_slot1;
                var1['guildId'] = var2;
                var2 = _closure2_slot0;
                var1['channelId'] = var2;
                _fun0002_ip = 87; continue _fun0002;
 57:
                var2 = {};
                var4 = _closure1_slot5;
                var4 = var4.CHANNEL;
                var2['type'] = var4;
                var4 = _closure2_slot0;
                var2['channelId'] = var4;
                var1 = var2;
 87:
                _fun0002_ip = 167; continue _fun0002;
 89:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var8 = undefined;
                var7 = var4.bind(var8)(var2);
                var4 = _closure2_slot1;
                var2 = null;
                var6 = var2 != var4;
                var2 = '[useChannelDetailsSearchContext] Thread must have a guild id';
                var2 = var7.bind(var8)(var6, var2);
                var2 = {};
                var5 = _closure1_slot5;
                var5 = var5.THREAD;
                var2['type'] = var5;
                var2['guildId'] = var4;
                var3 = _closure2_slot0;
                var2['channelId'] = var3;
                var1 = var2;
 167:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useChannelDetailsSearchContext'] = var2;
    return var1;
})();