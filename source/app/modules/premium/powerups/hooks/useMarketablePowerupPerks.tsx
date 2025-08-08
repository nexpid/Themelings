// app/modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var9 = 0;
    var8 = var6[var9];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var7 = 1;
    var8 = var6[var7];
    var7 = metroImportDefault;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET;
    var7 = var7.GuildPowerupType;
    var _closure1_slot4 = var7;
    var8 = var4.Set;
    var7 = var4.Array;
    var4 = var7.from;
    var12 = var4.bind(var7)(var10);
    var4 = new Array(0);
    var13 = var4;
    var11 = 0;
    var7 = arraySpread(var13, var12, var11);
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var14 = var7;
    var13 = var4;
    var4 = new var14[var8](var13, var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMarketablePowerupPerks(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot3;
                var3 = var4.getStateForGuild;
                var1 = _closure2_slot0;
                var3 = var3.bind(var4)(var1);
                var4 = null;
                var6 = var4 == var3;
                var1 = undefined;
                if(var6) { _fun0001_ip = 65; continue _fun0001 }
 36:
                var3 = var3.powerupCatalog;
                var4 = var4 == var3;
                var1 = undefined;
                if(var4) { _fun0001_ip = 65; continue _fun0001 }
 51:
                var2 = _closure1_slot4;
                var2 = var2.PERK;
                var1 = var3[var2];
 65:
                return var1;
            }
        };
        var5 = var5.bind(var6)(var4, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 == var3)) { _fun0002_ip = 19; continue _fun0002 }
 13:
                var3 = new Array(0);
                _fun0002_ip = 23; continue _fun0002;
 19:
                var3 = _closure2_slot1;
 23:
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot5;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var1.skuId;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();