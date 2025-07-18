// app/modules/premium/GuildCapUpsellHooks.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MAX_USER_GUILDS;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/GuildCapUpsellHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useShouldShowInlineGuildCapUpsell() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 3;
            var1 = var8[var5];
            var6 = undefined;
            var10 = var7.bind(var6)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getGuildCount;
                var2 = var1.bind(var2)();
                var1 = 95;
                var1 = var2 >= var1;
                return var1;
            };
            var1 = var9.bind(var10)(var3, var1);
            var3 = var8[var5];
            var11 = var7.bind(var6)(var3);
            var10 = var11.useStateFromStores;
            var3 = 4;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.HotspotStore;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.HotspotStore;
                var2 = var3.hasHotspot;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.HotspotLocations;
                var1 = var1.GUILD_CAP_INLINE_UPSELL;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var10.bind(var11)(var9, var3);
            var5 = var8[var5];
            var6 = var7.bind(var6)(var5);
            var5 = var6.useStateFromStoresObject;
            var7 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var7;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isPremium;
                var4 = _closure1_slot4;
                var1 = var4.getCurrentUser;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            if(!var1) { _fun0001_ip = 156; continue _fun0001 }
 153:
            var1 = var3;
 156:
            if(!var1) { _fun0001_ip = 162; continue _fun0001 }
 159:
            var1 = var2;
 162:
            return var1;
        }
    };
    var3['useShouldShowInlineGuildCapUpsell'] = var4;
    var4 = function hideInlineGuildCapUpsell() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 4;
        var3 = var6[var2];
        var1 = undefined;
        var4 = var5.bind(var1)(var3);
        var3 = var4.hideHotspot;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.HotspotLocations;
        var2 = var2.GUILD_CAP_INLINE_UPSELL;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['hideInlineGuildCapUpsell'] = var4;
    var2 = function isAtGuildCapAndNonPremium() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot3;
            var1 = var3.getGuildCount;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot5;
            var1 = var3 >= var1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.canUseIncreasedGuildCap;
            var5 = _closure1_slot4;
            var2 = var5.getCurrentUser;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            if(!var1) { _fun0002_ip = 77; continue _fun0002 }
 74:
            var1 = !var2;
 77:
            return var1;
        }
    };
    var3['isAtGuildCapAndNonPremium'] = var2;
    return var1;
})();