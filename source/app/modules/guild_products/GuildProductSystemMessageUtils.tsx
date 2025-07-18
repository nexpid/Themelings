// app/modules/guild_products/GuildProductSystemMessageUtils.tsx
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
    var4 = var4.NOOP;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_products/GuildProductSystemMessageUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGuildProductPurchaseSystemMessageContentMobile(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.username;
            var6 = var1.usernameOnClickHandler;
            var8 = undefined;
            if(!(var6 === var8)) { _fun0001_ip = 27; continue _fun0001 }
 20:
            var6 = _closure1_slot2;
 27:
            var5 = var1.productName;
            var2 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 1;
            var3 = var9[var1];
            var3 = var2.bind(var8)(var3);
            var4 = var3.intl;
            var3 = var4.formatToParts;
            var1 = var9[var1];
            var1 = var2.bind(var8)(var1);
            var1 = var1.t;
            var2 = var1.w4iXs7;
            var1 = {};
            var1['username'] = var7;
            var1['usernameHook'] = var6;
            var1['productName'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getGuildProductPurchaseSystemMessageContentMobile'] = var2;
    return var1;
})();