// app/modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getChannelsAllowedToUnlink(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = arguments[1];
            var2 = arguments[2];
            var5 = undefined;
            if(!(var3 === var5)) { _fun0001_ip = 24; continue _fun0001 }
 17:
            var3 = _closure1_slot2;
 24:
            if(!(var2 === var5)) { _fun0001_ip = 35; continue _fun0001 }
 28:
            var2 = _closure1_slot4;
 35:
            var _closure2_slot0 = var2;
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 103; continue _fun0001 }
 45:
            var2 = var3.getChannels;
            var3 = var2.bind(var3)(var4);
            var2 = _closure1_slot3;
            var4 = var3[var2];
            var3 = var4.filter;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.canUnlinkLobbyChannel;
                var1 = arg1;
                var2 = var1.channel;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0001_ip = 107; continue _fun0001;
 103:
            var1 = new Array(0);
 107:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var5 = 0;
    var9 = var7[var5];
    var1 = undefined;
    var9 = var8.bind(var1)(var9);
    var _closure1_slot2 = var9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getChannelsAllowedToUnlink'] = var4;
    var2 = function useChannelsAllowedToUnlink(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var6 = _closure1_slot4;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot2;
        var2[1] = var5;
        var1 = function() {
            var5 = _closure1_slot5;
            var4 = _closure2_slot0;
            var3 = _closure1_slot2;
            var2 = _closure1_slot4;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useChannelsAllowedToUnlink'] = var2;
    return var1;
})();