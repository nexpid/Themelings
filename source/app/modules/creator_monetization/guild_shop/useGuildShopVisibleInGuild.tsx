// app/modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildShopVisibleInGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var3);
            var6 = var7.useIsEligibleForSubscriptionsInGuildShop;
            var5 = null;
            var8 = var5 == var4;
            var3 = undefined;
            if(var8) { _fun0001_ip = 50; continue _fun0001 }
 45:
            var3 = var4.id;
 50:
            var8 = 'channel_list';
            var3 = var6.bind(var7)(var3, var8);
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 2;
            var3 = var7[var3];
            var7 = var6.bind(var1)(var3);
            var6 = var7.useRoleSubscriptionsVisibleInGuild;
            var9 = var5 == var4;
            var3 = undefined;
            if(var9) { _fun0001_ip = 102; continue _fun0001 }
 97:
            var3 = var4.id;
 102:
            var3 = var6.bind(var7)(var3);
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var7 = var3.bind(var1)(var2);
            var2 = var7.useGuildShopPreviewVisible;
            var2 = var2.bind(var7)(var4, var8);
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.useShouldHideGuildPurchaseEntryPoints;
            var5 = var5 == var4;
            var1 = undefined;
            if(var5) { _fun0001_ip = 171; continue _fun0001 }
 166:
            var1 = var4.id;
 171:
            var1 = var2.bind(var3)(var1);
            var1 = var1.shouldHideGuildPurchaseEntryPoints;
            var1 = false;
            return var1;
        }
    };
    var3['useGuildShopVisibleInGuild'] = var4;
    var2 = function isGuildShopVisibleInGuild(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var4 = var4[var2];
            var2 = undefined;
            var8 = var5.bind(var2)(var4);
            var7 = var8.isEligibleForSubscriptionsInGuildShop;
            var5 = null;
            var4 = var5 == var1;
            var6 = undefined;
            if(var4) { _fun0002_ip = 50; continue _fun0002 }
 45:
            var6 = var1.id;
 50:
            var4 = 'channel_list';
            var4 = var7.bind(var8)(var6, var4);
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 2;
            var3 = var6[var3];
            var4 = var4.bind(var2)(var3);
            var3 = var4.areRoleSubscriptionsVisibleInGuild;
            var5 = var5 == var1;
            var2 = undefined;
            if(var5) { _fun0002_ip = 102; continue _fun0002 }
 97:
            var2 = var1.id;
 102:
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = false;
            return var1;
        }
    };
    var3['isGuildShopVisibleInGuild'] = var2;
    return var1;
})();