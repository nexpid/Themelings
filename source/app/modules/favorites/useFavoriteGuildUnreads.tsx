// app/modules/favorites/useFavoriteGuildUnreads.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/useFavoriteGuildUnreads.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFavoriteGuildUnreads(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot3;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = _closure1_slot5;
        var2[1] = var6;
        var6 = _closure1_slot6;
        var2[2] = var6;
        var5 = _closure1_slot4;
        var2[3] = var5;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.keys;
            var1 = _closure2_slot0;
            var4 = var2.bind(var3)(var1);
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var7 = arg2;
                    var3 = _closure1_slot3;
                    var2 = var3.getChannel;
                    var9 = var2.bind(var3)(var7);
                    var8 = null;
                    var2 = var8 == var9;
                    var3 = undefined;
                    if(var2) { _fun0001_ip = 44; continue _fun0001 }
 34:
                    var2 = var9.isGuildVocal;
                    var3 = var2.bind(var9)();
 44:
                    var5 = var1.badge;
                    var10 = _closure1_slot5;
                    var2 = var10.getMentionCount;
                    var2 = var2.bind(var10)(var7);
                    var2 = var5 + var2;
                    var1['badge'] = var2;
                    var2 = var1.unread;
                    if(var2) { _fun0001_ip = 178; continue _fun0001 }
 84:
                    var3 = !var3;
                    if(!var3) { _fun0001_ip = 116; continue _fun0001 }
 90:
                    var11 = _closure1_slot4;
                    var10 = var11.can;
                    var5 = _closure1_slot7;
                    var5 = var5.VIEW_CHANNEL;
                    var3 = var10.bind(var11)(var5, var9);
 116:
                    if(!var3) { _fun0001_ip = 134; continue _fun0001 }
 119:
                    var10 = _closure1_slot5;
                    var5 = var10.hasUnread;
                    var3 = var5.bind(var10)(var7);
 134:
                    if(!var3) { _fun0001_ip = 175; continue _fun0001 }
 137:
                    var5 = _closure1_slot6;
                    var4 = var5.isChannelMuted;
                    var8 = var8 == var9;
                    var6 = undefined;
                    if(var8) { _fun0001_ip = 166; continue _fun0001 }
 156:
                    var8 = var9.getGuildId;
                    var6 = var8.bind(var9)();
 166:
                    var4 = var4.bind(var5)(var6, var7);
                    var3 = !var4;
 175:
                    var2 = var3;
 178:
                    var1['unread'] = var2;
                    return var1;
                }
            };
            var1 = {'badge': 0, 'unread': false};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();