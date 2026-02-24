// app/modules/premium/powerups/hooks/useFeaturedExpiringPowerup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useFeaturedExpiringPowerup.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFeaturedExpiringPowerup(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 3;
        var6 = var8[var3];
        var4 = undefined;
        var10 = var5.bind(var4)(var6);
        var9 = var10.useStateFromStores;
        var6 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getStateForGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var9.bind(var10)(var7, var6);
        var _closure2_slot1 = var7;
        var3 = var8[var3];
        var10 = var5.bind(var4)(var3);
        var9 = var10.useStateFromStores;
        var3 = _closure1_slot3;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var3 = _closure1_slot3;
            var2 = var3.getStateForGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var9.bind(var10)(var6, var3);
        var _closure2_slot2 = var6;
        var3 = 4;
        var3 = var8[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useExpiringPowerupCoachmarkEnabled;
        var3 = 'useFeaturedExpiringPowerup';
        var5 = var4.bind(var5)(var3);
        var _closure2_slot3 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot3;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = global;
                var8 = var7.Object;
                var4 = var8.values;
                var2 = _closure2_slot1;
                var6 = null;
                var9 = var6 == var2;
                var5 = undefined;
                var2 = undefined;
                if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var9 = _closure2_slot1;
                var2 = var9.unlockedPowerups;
case 4:
                if(!(var6 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = {};
case 6:
                var15 = var4.bind(var8)(var2);
                var9 = new Array(0);
                var4 = 0;
                var16 = var9;
                var14 = 0;
                var8 = arraySpread(var16, var15, var14);
                var11 = var7.Object;
                var10 = var11.values;
                var2 = _closure2_slot2;
                var12 = var6 == var2;
                var2 = undefined;
                if(var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var12 = _closure2_slot2;
                var2 = var12.entitlements;
case 8:
                if(!(var6 == var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var2 = {};
case 10:
                var15 = var10.bind(var11)(var2);
                var16 = var9;
                var14 = var8;
                var2 = arraySpread(var16, var15, var14);
                var8 = var9.filter;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = arg1;
                        var1 = var3.ends_at;
                        var2 = null;
                        var1 = var2 != var1;
                        if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var3 = var3.metadata;
                        var5 = var2 == var3;
                        var4 = undefined;
                        if(var5) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var4 = var3.num_expiring_boosts;
case 14:
                        var5 = var2 != var4;
                        var3 = 0;
                        var2 = 0;
                        if(!var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var2 = var4;
case 16:
                        var1 = var2 > var3;
case 12:
                        return var1;
                    }
                };
                var8 = var8.bind(var9)(var2);
                var2 = var8.length;
                if(!(var4 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 18:
                var2 = var8.reduce;
                var1 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var4 = var2.ends_at;
                        var3 = var1.ends_at;
                        if(!(var4 > var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                        var1 = var2;
case 19:
                        return var1;
                    }
                };
                var2 = var2.bind(var8)(var1);
                var1 = _closure2_slot1;
                var8 = var6 == var1;
                var1 = undefined;
                if(var8) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                var3 = _closure2_slot1;
                var8 = var3.allPowerups;
                var3 = var2.sku_id;
                var3 = var8[var3];
                var8 = var6 == var3;
                var1 = undefined;
                if(var8) { _fun0001_ip = 21; continue _fun0001 }
case 23:
                var1 = var3.title;
case 21:
                var3 = var6 != var1;
                var8 = null;
                if(!var3) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                var8 = var1;
case 24:
                var3 = var2.sku;
                var9 = var6 == var3;
                var1 = undefined;
                if(var9) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                var3 = var3.tenant_metadata;
                var9 = var6 == var3;
                var1 = undefined;
                if(var9) { _fun0001_ip = 26; continue _fun0001 }
case 28:
                var3 = var3.guild_monetization;
                var9 = var6 == var3;
                var1 = undefined;
                if(var9) { _fun0001_ip = 26; continue _fun0001 }
case 29:
                var1 = var3.game_server;
case 26:
                var3 = var6 != var1;
                if(!(var6 === var8)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                if(var3) { _fun0001_ip = 30; continue _fun0001 }
case 2:
                var1 = undefined;
                return var1;
case 30:
                var1 = {};
                var1['name'] = var8;
                var9 = var7.Math;
                var8 = var9.max;
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var10 = 5;
                var10 = var12[var10];
                var11 = var11.bind(var5)(var10);
                var10 = var11.getDaysRemaining;
                var13 = var7.Date;
                var16 = var2.ends_at;
                var12 = var13.prototype;
                var12 = Object.create(var12, {constructor: {value: var13}});
                var17 = var12;
                var7 = new var17[var13](var16, var15);
                var7 = var7 instanceof Object ? var7 : var12;
                var7 = var10.bind(var11)(var7);
                var7 = var8.bind(var9)(var4, var7);
                var1['daysUntilExpiry'] = var7;
                var7 = var2.metadata;
                var8 = var6 == var7;
                var5 = undefined;
                if(var8) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                var5 = var7.num_expiring_boosts;
case 32:
                var6 = var6 != var5;
                var4 = 0;
                if(!var6) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                var4 = var5;
case 34:
                var1['numExpiringBoosts'] = var4;
                var1['isGameServer'] = var3;
                var2 = var2.sku_id;
                var1['skuId'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();