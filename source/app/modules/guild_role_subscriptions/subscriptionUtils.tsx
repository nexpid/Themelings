// app/modules/guild_role_subscriptions/subscriptionUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/subscriptionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getRoleSubscriptionPlanId(arg1) {
        var1 = arg1;
        var2 = var1.items;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 0;
        var3 = var3[var1];
        var6 = undefined;
        var5 = var4.bind(var6)(var3);
        var4 = var2.length;
        var3 = 1;
        var4 = var3 === var4;
        var3 = 'more than 1 subscription item for role subscription';
        var3 = var5.bind(var6)(var4, var3);
        var1 = var2[var1];
        var1 = var1.planId;
        return var1;
    };
    var3['getRoleSubscriptionPlanId'] = var4;
    var2 = function getRoleSubscriptionMutationPlanId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = null;
            var5 = var4 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0001_ip = 37; continue _fun0001 }
 16:
            var2 = var2.renewalMutations;
            var5 = var4 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 37; continue _fun0001 }
 31:
            var3 = var2.items;
 37:
            if(!(var4 == var3)) { _fun0001_ip = 43; continue _fun0001 }
 41:
            return var1;
 43:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 0;
            var5 = var5[var2];
            var7 = var6.bind(var1)(var5);
            var6 = var3.length;
            var5 = 1;
            var6 = var6 <= var5;
            var5 = 'more than 1 renewal mutation for role subscription';
            var5 = var7.bind(var1)(var6, var5);
            var4 = var4 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 108; continue _fun0001 }
 98:
            var2 = var3[var2];
            var1 = var2.planId;
 108:
            return var1;
        }
    };
    var3['getRoleSubscriptionMutationPlanId'] = var2;
    return var1;
})();