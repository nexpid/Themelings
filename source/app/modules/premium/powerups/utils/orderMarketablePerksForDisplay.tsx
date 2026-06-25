// app/modules/premium/powerups/utils/orderMarketablePerksForDisplay.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GAME_SERVER_POWERUP_SKU_ID;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/utils/orderMarketablePerksForDisplay.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function orderMarketablePerksForDisplay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = new Array(0);
            var9 = arg1;
            var3 = 0;
            var10 = var4;
            var8 = 0;
            var1 = arraySpread(var10, var9, var8);
            var1 = var4.reverse;
            var1 = var1.bind(var4)();
            var5 = var1.findIndex;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.skuId;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.GUILD_POWERUP_GUILD_THEME_SKU_ID;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var5.bind(var1)(var4);
            if(!(var5 > var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1.splice;
            var7 = 1;
            var6 = var4.bind(var1)(var5, var7);
            var5 = _closure1_slot2;
            var4 = undefined;
            var4 = var5.bind(var4)(var6, var7);
            var5 = var4[var3];
            var4 = var1.unshift;
            var4 = var4.bind(var1)(var5);
case 2:
            var4 = var1.findIndex;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.skuId;
                var1 = _closure1_slot3;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var1)(var2);
            var2 = -1;
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.length;
            var6 = 1;
            var2 = var2 - var6;
            if(!(var4 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = var1.splice;
            var5 = var2.bind(var1)(var4, var6);
            var4 = _closure1_slot2;
            var2 = undefined;
            var2 = var4.bind(var2)(var5, var6);
            var3 = var2[var3];
            var2 = var1.push;
            var2 = var2.bind(var1)(var3);
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();