// app/modules/premium/game_server/utils/productToGameServerGame.tsx
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
    var2 = 'modules/premium/game_server/utils/productToGameServerGame.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function productToGameServerGame(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.skus;
            var4 = var5.map;
            var3 = function(arg1) {
                var3 = arg1;
                var1 = var3.tenant_metadata;
                var4 = var1.plan_features;
                var2 = var4.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.title;
                    var1['title'] = var3;
                    var2 = var2.description;
                    var1['description'] = var2;
                    return var1;
                };
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var4 = var3.id;
                var1['id'] = var4;
                var4 = var3.name;
                var1['name'] = var4;
                var3 = var3.tenant_metadata;
                var3 = var3.boost_price;
                var1['cost'] = var3;
                var1['specifications'] = var2;
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.sort;
            var3 = function(arg1, arg2) {
                var1 = arg2;
                var2 = var1.cost;
                var1 = arg1;
                var1 = var1.cost;
                var1 = var2 - var1;
                return var1;
            };
            var6 = var4.bind(var5)(var3);
            var3 = var6.length;
            var8 = 0;
            var4 = var3 > var8;
            var3 = 0;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = global;
            var5 = var4.Math;
            var4 = var5.min;
            var7 = var6.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.cost;
                return var1;
            };
            var11 = var7.bind(var6)(var1);
            var1 = new Array(0);
            var12 = var1;
            var10 = 0;
            var7 = arraySpread(var12, var11, var10);
            var12 = var4;
            var11 = var1;
            var10 = var5;
            var3 = apply(var12, var11, var10);
case 2:
            var1 = {};
            var4 = var2.id;
            var1['id'] = var4;
            var4 = var2.name;
            var1['name'] = var4;
            var7 = var2.tenant_metadata;
            var4 = null;
            var9 = var4 == var7;
            var8 = undefined;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var7.guild_monetization;
            var9 = var4 == var7;
            var8 = undefined;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var7 = var7.game_server;
            var9 = var4 == var7;
            var8 = undefined;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var8 = var7.game_application_id;
case 4:
            var9 = var4 != var8;
            var7 = '';
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var8;
case 8:
            var1['gameId'] = var7;
            var8 = var2.tenant_metadata;
            var9 = var4 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var8.guild_monetization;
            var9 = var4 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var8 = var8.game_server;
            var9 = var4 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 13:
            var7 = var8.provider;
case 10:
            var1['provider'] = var7;
            var1['plans'] = var6;
            var1['baseCost'] = var3;
            var6 = var2.tenant_metadata;
            var7 = var4 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var6.guild_monetization;
            var7 = var4 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var6 = var6.game_server;
            var7 = var4 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 17:
            var3 = var6.disabled;
case 14:
            var1['disabled'] = var3;
            var6 = var2.tenant_metadata;
            var7 = var4 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var6.guild_monetization;
            var7 = var4 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var6 = var6.game_server;
            var7 = var4 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 21:
            var3 = var6.early_access;
case 18:
            var1['early_access'] = var3;
            var3 = var2.tenant_metadata;
            var6 = var4 == var3;
            var2 = undefined;
            if(var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = var3.guild_monetization;
            var6 = var4 == var3;
            var2 = undefined;
            if(var6) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var3 = var3.game_server;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 25:
            var2 = var3.can_market;
case 22:
            var1['can_market'] = var2;
            return var1;
        }
    };
    var3['productToGameServerGame'] = var2;
    return var1;
})();