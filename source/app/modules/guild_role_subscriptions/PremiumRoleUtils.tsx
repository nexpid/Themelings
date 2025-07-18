// app/modules/guild_role_subscriptions/PremiumRoleUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/PremiumRoleUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isSubscriptionRole(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 35; continue _fun0001 }
 14:
            var3 = var3.tags;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 35; continue _fun0001 }
 29:
            var1 = var3.subscription_listing_id;
 35:
            var1 = var2 != var1;
            return var1;
        }
    };
    var3['isSubscriptionRole'] = var4;
    var2 = function isSubscriptionRoleAvailableForPurchase(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var4 = null;
            var5 = var4 == var3;
            var2 = undefined;
            var1 = undefined;
            if(var5) { _fun0002_ip = 39; continue _fun0002 }
 16:
            var3 = var3.tags;
            var4 = var4 == var3;
            var1 = undefined;
            if(var4) { _fun0002_ip = 39; continue _fun0002 }
 31:
            var1 = var3.available_for_purchase;
 39:
            var1 = var2 !== var1;
            return var1;
        }
    };
    var3['isSubscriptionRoleAvailableForPurchase'] = var2;
    return var1;
})();