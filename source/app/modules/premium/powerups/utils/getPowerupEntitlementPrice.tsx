// app/modules/premium/powerups/utils/getPowerupEntitlementPrice.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/premium/powerups/utils/getPowerupEntitlementPrice.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getPowerupEntitlementPrice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = null;
            var2 = var4 == var1;
            var6 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.tenant_metadata;
            var3 = var4 == var2;
            var6 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = var2.guild_monetization;
case 2:
            var2 = var4 == var1;
            var3 = undefined;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = var1.sku;
            var2 = var4 == var1;
            var3 = undefined;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var1 = var1.tenant_metadata;
            var2 = var4 == var1;
            var3 = undefined;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 8:
            var3 = var1.guild_monetization;
case 5:
            var2 = var4 == var6;
            var1 = undefined;
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var6.game_server;
            var7 = var4 == var2;
            var1 = undefined;
            if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var1 = var2.boost_price;
case 9:
            if(!(var4 == var1)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var6.powerup;
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var2 = var6.boost_price;
case 14:
            var1 = var2;
case 12:
            if(!(var4 == var1)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var6 = var4 == var3;
            var2 = undefined;
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var6 = var3.game_server;
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var2 = var6.boost_price;
case 19:
            var1 = var2;
case 17:
            if(!(var4 == var1)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var6 = var4 == var3;
            var2 = undefined;
            if(var6) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = var3.powerup;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var2 = var3.boost_price;
case 24:
            var1 = var2;
case 22:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();