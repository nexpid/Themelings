// app/modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.hasPermission;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildRoleSubscriptionFormat;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
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
        var4 = _closure1_slot1;
        var3 = 6;
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
        var5 = _closure1_slot2;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 57; continue _fun0002 }
 13:
                var5 = _closure1_slot3;
                var4 = _closure2_slot1;
                var2 = _closure1_slot7;
                var3 = var2.VIEW_CHANNEL;
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var3);
                if(var2) { _fun0002_ip = 57; continue _fun0002 }
 45:
                var1 = _closure1_slot6;
                var1 = var1.ALL_CHANNELS;
                _fun0002_ip = 70; continue _fun0002;
 57:
                var2 = _closure1_slot6;
                var1 = var2.SOME_CHANNELS;
 70:
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