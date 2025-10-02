// app/modules/collectibles/utils/CollectiblesProductUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var5 = var4.CurrencyCodes;
    var _closure1_slot0 = var5;
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot1 = var4;
    var4 = function getAllProductPrices(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.product;
            var1 = var1.isPremiumUser;
            var2 = var2.prices;
            var3 = _closure1_slot1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.DEFAULT;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = var3.PREMIUM_TIER_2;
case 4:
            var3 = var2[var1];
            var2 = null;
            var5 = var2 == var3;
            var1 = undefined;
            if(var5) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var3.countryPrices;
            var5 = var2 == var3;
            var1 = undefined;
            if(var5) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var6 = var3.prices;
            var3 = var2 == var6;
            var1 = undefined;
            if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 8:
            var5 = var6.slice;
            var4 = 0;
            var3 = 2;
            var1 = var5.bind(var6)(var4, var3);
case 5:
            if(!(var2 == var1)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = new Array(0);
case 9:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/utils/CollectiblesProductUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getAllProductPrices'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.product;
            var1 = var1.isPremiumUser;
            var3 = _closure1_slot2;
            var2 = {};
            var2['product'] = var4;
            var2['isPremiumUser'] = var1;
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.currency;
                var1 = _closure1_slot0;
                var1 = var1.DISCORD_ORB;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var3['getProductOrbPrice'] = var2;
    return var1;
})();