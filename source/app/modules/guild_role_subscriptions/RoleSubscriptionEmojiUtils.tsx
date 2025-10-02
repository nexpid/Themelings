// app/modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var4 = function isPurchasableRoleSubscriptionEmoji(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            var5 = var4 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.roles;
case 2:
            if(!(var4 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.roles;
            var5 = var3.length;
            var3 = 0;
            if(!(var3 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = var2.guildId;
            if(!(var4 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var4 = var5.getPurchasableSubscriptionRoles;
            var3 = var2.guildId;
            var3 = var4.bind(var5)(var3);
            var _closure2_slot0 = var3;
            var3 = var2.roles;
            var2 = var3.some;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
case 4:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var7 = var6[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var7);
    var _closure1_slot0 = var5;
    var5 = 1;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function isRoleSubscriptionEmoji(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var3 = null;
            var6 = var3 == var2;
            var4 = undefined;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var2.roles;
case 8:
            if(!(var3 != var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = var2.roles;
            var6 = var4.length;
            var4 = 0;
            if(!(var4 !== var6)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            if(!(var3 != var5)) { _fun0002_ip = 10; continue _fun0002 }
case 13:
            var4 = _closure1_slot0;
            var3 = var4.getSubscriptionRoles;
            var3 = var3.bind(var4)(var5);
            var _closure2_slot0 = var3;
            var3 = var2.roles;
            var2 = var3.some;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
case 10:
            var1 = false;
            return var1;
        }
    };
    var3['isRoleSubscriptionEmoji'] = var5;
    var3['isPurchasableRoleSubscriptionEmoji'] = var4;
    var2 = function isUnusableRoleSubscriptionEmoji(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var6 = var4 == var3;
            var5 = undefined;
            var2 = undefined;
            if(var6) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = var3.roles;
case 14:
            if(!(var4 != var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var2 = var3.roles;
            var6 = var2.length;
            var2 = 0;
            if(!(var2 !== var6)) { _fun0003_ip = 16; continue _fun0003 }
case 18:
            var2 = var3.guildId;
            if(!(var4 != var2)) { _fun0003_ip = 16; continue _fun0003 }
case 19:
            var2 = _closure1_slot1;
            var2 = var2.bind(var5)(var3);
            if(!var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var6 = _closure1_slot0;
            var5 = var6.getUserSubscriptionRoles;
            var2 = var3.guildId;
            var2 = var5.bind(var6)(var2);
            var _closure2_slot0 = var2;
            var5 = var3.roles;
            var2 = var5.some;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var2.bind(var5)(var1);
            var5 = var3.guildId;
            var1 = arg2;
            var1 = var1 === var5;
            if(!var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var5 = _closure1_slot0;
            var4 = var5.getUserIsAdmin;
            var3 = var3.guildId;
            var1 = var4.bind(var5)(var3);
case 22:
            if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 24:
            if(var1) { _fun0003_ip = 20; continue _fun0003 }
case 25:
            var1 = true;
            return var1;
case 20:
            var1 = false;
            return var1;
case 16:
            var1 = false;
            return var1;
        }
    };
    var3['isUnusableRoleSubscriptionEmoji'] = var2;
    return var1;
})();