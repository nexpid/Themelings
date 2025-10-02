// app/modules/search/native/hooks/useSearchContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getChannelDetailsSearchContext(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var1 = arg3;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = {};
            var2 = _closure1_slot5;
            var2 = var2.GUILD_CHANNEL;
            var1['type'] = var2;
            var1['guildId'] = var4;
            var1['channelId'] = var3;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = {};
            var5 = _closure1_slot5;
            var5 = var5.CHANNEL;
            var2['type'] = var5;
            var2['channelId'] = var3;
            var1 = var2;
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var8 = undefined;
            var7 = var6.bind(var8)(var2);
            var2 = null;
            var6 = var2 != var4;
            var2 = '[useChannelDetailsSearchContext] Thread must have a guild id';
            var2 = var7.bind(var8)(var6, var2);
            var2 = {};
            var5 = _closure1_slot5;
            var5 = var5.THREAD;
            var2['type'] = var5;
            var2['guildId'] = var4;
            var2['channelId'] = var3;
            var1 = var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SearchTypes;
    var _closure1_slot5 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/native/hooks/useSearchContext.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useGuildSearchContext(arg1) {
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
    var3['useGuildSearchContext'] = var5;
    var5 = function useGuildChannelSearchContext(arg1, arg2) {
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
    var3['useGuildChannelSearchContext'] = var5;
    var3['getChannelDetailsSearchContext'] = var4;
    var2 = function useChannelDetailsSearchContext(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var8 = var5.bind(var3)(var4);
        var5 = var8.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var3 = var4.isThread;
                var2 = var3.bind(var4)();
case 8:
                var1 = var1 != var2;
                if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var1 = var2;
case 10:
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
            var5 = _closure1_slot6;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = _closure2_slot2;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useChannelDetailsSearchContext'] = var2;
    return var1;
})();