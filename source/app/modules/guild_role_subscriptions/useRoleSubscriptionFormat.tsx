// app/modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildRoleSubscriptionFormat;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var4 = var4.VIEW_CHANNEL;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRoleSubscriptionFormat(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot5;
        var4 = new Array(2);
        var4[0] = var3;
        var3 = _closure1_slot4;
        var4[1] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot5;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var3 = var1 != var4;
                var1 = undefined;
                if(!var3) { _fun0001_ip = 50; continue _fun0001 }
 35:
                var3 = _closure1_slot4;
                var2 = var3.getEveryoneRole;
                var1 = var2.bind(var3)(var4);
 50:
                return var1;
            }
        };
        var6 = var5.bind(var6)(var4, var3);
        var _closure2_slot1 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 78; continue _fun0002 }
 13:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.has;
                var2 = _closure2_slot1;
                var3 = var2.permissions;
                var2 = _closure1_slot7;
                var2 = var4.bind(var5)(var3, var2);
                if(var2) { _fun0002_ip = 78; continue _fun0002 }
 66:
                var1 = _closure1_slot6;
                var1 = var1.ALL_CHANNELS;
                _fun0002_ip = 91; continue _fun0002;
 78:
                var2 = _closure1_slot6;
                var1 = var2.SOME_CHANNELS;
 91:
                return var1;
            }
        };
        var3 = var4.bind(var5)(var1, var3);
        var1 = {};
        var1['format'] = var3;
        var2 = _closure1_slot6;
        var2 = var2.ALL_CHANNELS;
        var2 = var3 === var2;
        var1['isFullServerGating'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();