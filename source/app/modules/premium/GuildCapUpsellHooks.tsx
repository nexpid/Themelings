// app/modules/premium/GuildCapUpsellHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function hasIncreasedGuildCap(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = var2.canUseIncreasedGuildCap;
            var1 = var1.bind(var2)(var4);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = null;
            var2 = var2 == var4;
            var3 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var4.isStaff;
            var3 = var2.bind(var4)();
case 4:
            var2 = true;
            var1 = var2 === var3;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MAX_USER_GUILDS;
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/GuildCapUpsellHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useShouldShowInlineGuildCapUpsell() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var3;
case 6:
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['useShouldShowInlineGuildCapUpsell'] = var5;
    var5 = function hideInlineGuildCapUpsell() {
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
    var3['hideInlineGuildCapUpsell'] = var5;
    var3['hasIncreasedGuildCap'] = var4;
    var2 = function isAtGuildCapAndNonPremium() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot3;
            var1 = var3.getGuildCount;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot5;
            var1 = var3 >= var1;
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var1 = !var2;
case 10:
            return var1;
        }
    };
    var3['isAtGuildCapAndNonPremium'] = var2;
    return var1;
})();