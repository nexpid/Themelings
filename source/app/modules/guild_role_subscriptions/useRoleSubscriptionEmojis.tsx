// app/modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot2 = var2;
    var2 = 1;
    var5 = var7[var2];
    var2 = metroImportDefault;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot3 = var2;
    var2 = new Array(0);
    var _closure1_slot4 = var2;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useRoleSubscriptionEmojis(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var8 = var6.bind(var3)(var4);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot3;
        var6 = new Array(1);
        var6[0] = var3;
        var4 = new Array(1);
        var4[0] = var5;
        var3 = function() {
            var3 = _closure1_slot3;
            var2 = var3.getGuildEmoji;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var7.bind(var8)(var6, var3, var4);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot1;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.isRoleSubscriptionEmoji;
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var1 = _closure1_slot4;
case 4:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['NO_EMOJIS_AVAILABLE'] = var2;
    return var1;
})();