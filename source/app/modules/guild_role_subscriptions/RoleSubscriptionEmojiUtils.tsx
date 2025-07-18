// app/modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var6 = native7;
    var4 = function isPurchasableRoleSubscriptionEmoji(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = null;
            var5 = var4 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 22; continue _fun0001 }
 16:
            var3 = var2.roles;
 22:
            if(!(var4 != var3)) { _fun0001_ip = 105; continue _fun0001 }
 26:
            var3 = var2.roles;
            var5 = var3.length;
            var3 = 0;
            if(!(var3 !== var5)) { _fun0001_ip = 105; continue _fun0001 }
 43:
            var3 = var2.guildId;
            if(!(var4 != var3)) { _fun0001_ip = 105; continue _fun0001 }
 52:
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
 105:
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
    var5 = native3;
    var1 = undefined;
    var5 = var5.bind(var1)(var7);
    var _closure1_slot0 = var5;
    var5 = 1;
    var6 = var6[var5];
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function isRoleSubscriptionEmoji(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var5 = arg2;
            var3 = null;
            var6 = var3 == var2;
            var4 = undefined;
            if(var6) { _fun0002_ip = 25; continue _fun0002 }
 19:
            var4 = var2.roles;
 25:
            if(!(var3 != var4)) { _fun0002_ip = 96; continue _fun0002 }
 29:
            var4 = var2.roles;
            var6 = var4.length;
            var4 = 0;
            if(!(var4 !== var6)) { _fun0002_ip = 96; continue _fun0002 }
 46:
            if(!(var3 != var5)) { _fun0002_ip = 96; continue _fun0002 }
 50:
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
 96:
            var1 = false;
            return var1;
        }
    };
    var3['isRoleSubscriptionEmoji'] = var5;
    var3['isPurchasableRoleSubscriptionEmoji'] = var4;
    var2 = function isUnusableRoleSubscriptionEmoji(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var4 = null;
            var6 = var4 == var3;
            var5 = undefined;
            var2 = undefined;
            if(var6) { _fun0003_ip = 24; continue _fun0003 }
 18:
            var2 = var3.roles;
 24:
            if(!(var4 != var2)) { _fun0003_ip = 167; continue _fun0003 }
 31:
            var2 = var3.roles;
            var6 = var2.length;
            var2 = 0;
            if(!(var2 !== var6)) { _fun0003_ip = 167; continue _fun0003 }
 48:
            var2 = var3.guildId;
            if(!(var4 != var2)) { _fun0003_ip = 167; continue _fun0003 }
 57:
            var2 = _closure1_slot1;
            var2 = var2.bind(var5)(var3);
            if(!var2) { _fun0003_ip = 163; continue _fun0003 }
 72:
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
            if(!var1) { _fun0003_ip = 153; continue _fun0003 }
 133:
            var5 = _closure1_slot0;
            var4 = var5.getUserIsAdmin;
            var3 = var3.guildId;
            var1 = var4.bind(var5)(var3);
 153:
            if(var2) { _fun0003_ip = 163; continue _fun0003 }
 156:
            if(var1) { _fun0003_ip = 163; continue _fun0003 }
 159:
            var1 = true;
            return var1;
 163:
            var1 = false;
            return var1;
 167:
            var1 = false;
            return var1;
        }
    };
    var3['isUnusableRoleSubscriptionEmoji'] = var2;
    return var1;
})();