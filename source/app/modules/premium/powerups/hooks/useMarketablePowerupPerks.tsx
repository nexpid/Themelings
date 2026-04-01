// app/modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var11 = 0;
    var9 = var6[var11];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var9);
    var _closure1_slot3 = var4;
    var9 = 1;
    var4 = var6[var9];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET;
    var12 = var4.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET;
    var4 = var4.GuildPowerupType;
    var _closure1_slot5 = var4;
    var8 = var7.Set;
    var10 = var7.Array;
    var4 = var10.from;
    var15 = var4.bind(var10)(var13);
    var4 = new Array(1);
    var16 = var4;
    var14 = 0;
    var14 = arraySpread(var16, var15, var14);
    var11 = var7.Array;
    var7 = var11.from;
    var15 = var7.bind(var11)(var12);
    var16 = var4;
    var7 = arraySpread(var16, var15, var14);
    var10 = 3;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.VANITY_URL_POWERUP_SKU_ID;
    var4[6] = var10;
    var7 = var7 + var9;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var17 = var7;
    var16 = var4;
    var4 = new var17[var8](var16, var15);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMarketablePowerupPerks(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 4;
        var3 = var8[var3];
        var4 = undefined;
        var9 = var6.bind(var4)(var3);
        var7 = var9.useStateFromStores;
        var3 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot4;
                var3 = var4.getStateForGuild;
                var1 = _closure2_slot0;
                var3 = var3.bind(var4)(var1);
                var4 = null;
                var6 = var4 == var3;
                var1 = undefined;
                if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var3.powerupCatalog;
                var4 = var4 == var3;
                var1 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var2 = _closure1_slot5;
                var2 = var2.PERK;
                var1 = var3[var2];
case 2:
                return var1;
            }
        };
        var6 = var7.bind(var9)(var6, var3);
        var _closure2_slot1 = var6;
        var7 = _closure1_slot1;
        var3 = 5;
        var3 = var8[var3];
        var3 = var7.bind(var4)(var3);
        var5 = var3.bind(var4)(var5);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot1;
                var4 = null;
                if(!(var4 == var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var5 = new Array(0);
                _fun0002_ip = 7; continue _fun0002;
case 5:
                var5 = _closure2_slot1;
case 7:
                var3 = new Array(0);
                var6 = 0;
                var8 = var3;
                var7 = var5;
                var2 = arraySpread(var8, var7, var6);
                var2 = _closure2_slot2;
                if(!(var4 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = var3.push;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
case 8:
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot6;
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