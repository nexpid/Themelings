// app/modules/guild_badge/useUpgradeToGuildBadgeV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var4 = true;
    var7['value'] = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var3, var4, var7);
    var8 = var1.Set;
    var7 = 0;
    var4 = var6[var7];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.BadgeCategory;
    var9 = var4.PARTNERED;
    var4 = new Array(5);
    var4[0] = var9;
    var9 = var6[var7];
    var9 = var5.bind(var1)(var9);
    var9 = var9.BadgeCategory;
    var9 = var9.VERIFIED;
    var4[1] = var9;
    var9 = var6[var7];
    var9 = var5.bind(var1)(var9);
    var9 = var9.BadgeCategory;
    var9 = var9.VERIFIED_AND_PARTNERED;
    var4[2] = var9;
    var9 = var6[var7];
    var9 = var5.bind(var1)(var9);
    var9 = var9.BadgeCategory;
    var9 = var9.COMMUNITY;
    var4[3] = var9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.BadgeCategory;
    var7 = var7.DISCOVERABLE;
    var4[4] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var13 = var7;
    var12 = var4;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_badge/useUpgradeToGuildBadgeV2.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUpgradeToGuildBadgeV2(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 83; continue _fun0001 }
 9:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var3 = undefined;
            var4 = var5.bind(var3)(var2);
            var2 = var4.getGuildTraits;
            var4 = var2.bind(var4)(var7);
            var2 = 0;
            var2 = var6[var2];
            var3 = var5.bind(var3)(var2);
            var2 = var3.getBadgeCategory;
            var3 = var2.bind(var3)(var4);
            var2 = _closure1_slot2;
            var1 = var2.has;
            var1 = var1.bind(var2)(var3);
            return var1;
 83:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();