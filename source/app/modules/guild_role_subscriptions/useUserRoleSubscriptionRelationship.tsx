// app/modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getUserRoleSubscriptionRelationship() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[0];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var4;
            var5 = var3;
case 2:
            var3 = var5;
            var4 = var3[Symbol.iterator];
            var3 = var4().next;
            var6 = var3().value;
            var3 = var4;
            var5 = var3 === var1;
            var3 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var6;
case 4:
            var _closure2_slot0 = var3;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4.return();
case 6:
            var _closure2_slot1 = var1;
            var1 = var3.getGuildIdsWithPurchasableRoles;
            var1 = var1.bind(var3)();
            var3 = false;
            _closure2_slot1 = var3;
            var4 = var1.forEach;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = var4.getUserSubscriptionRoles;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1);
                    var3 = var1.size;
                    var1 = 0;
                    if(!(var3 > var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = true;
                    _closure2_slot1 = var1;
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var1)(var3);
            var2 = _closure2_slot1;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var1.size;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = _closure1_slot3;
            var1 = var1.IN_SUBSCRIPTION_SERVER;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var2 = _closure1_slot3;
            var1 = var2.NONE;
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 10:
            var2 = _closure1_slot3;
            var1 = var2.SUBSCRIBED;
case 15:
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserGuildRoleSubscriptionRelationship;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useUserRoleSubscriptionRelationship() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot4;
            var1 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['getUserRoleSubscriptionRelationship'] = var2;
    return var1;
})();