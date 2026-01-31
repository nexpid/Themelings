// app/modules/collectibles/utils/CollectiblesProductUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var10[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var10[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var4.ORB_RENTAL_PRICE;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var5 = var4.CurrencyCodes;
    var _closure1_slot5 = var5;
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot6 = var4;
    var7 = function getProductOrbPrice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.product;
            var1 = var2.isPremiumUser;
            var4 = var2.isRental;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var3.prices;
            var4 = _closure1_slot6;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var4.DEFAULT;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var1 = var4.PREMIUM_TIER_2;
case 6:
            var3 = var3[var1];
            var1 = null;
            var6 = var1 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = var3.countryPrices;
            var6 = var1 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var7 = var3.prices;
            var3 = var1 == var7;
            var5 = undefined;
            if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 10:
            var6 = var7.slice;
            var4 = 0;
            var3 = 2;
            var5 = var6.bind(var7)(var4, var3);
case 7:
            if(!(var1 == var5)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var5 = new Array(0);
case 11:
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.currency;
                var1 = _closure1_slot5;
                var1 = var1.DISCORD_ORB;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = var1 != var3;
            var1 = null;
            if(!var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = var3;
case 13:
            _fun0001_ip = 15; continue _fun0001;
case 2:
            var1 = _closure1_slot4;
case 15:
            return var1;
        }
    };
    var _closure1_slot7 = var7;
    var6 = function getProductFiatPrice(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.product;
            var1 = var1.isPremiumUser;
            var2 = var2.prices;
            var3 = _closure1_slot6;
            if(var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = var3.MOBILE;
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var1 = var3.MOBILE_PREMIUM_TIER_2;
case 18:
            var2 = var2[var1];
            var1 = null;
            var5 = var1 == var2;
            var4 = undefined;
            if(var5) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = var2.countryPrices;
            var5 = var1 == var2;
            var4 = undefined;
            if(var5) { _fun0002_ip = 19; continue _fun0002 }
case 21:
            var6 = var2.prices;
            var2 = var1 == var6;
            var4 = undefined;
            if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 22:
            var5 = var6.slice;
            var3 = 0;
            var2 = 2;
            var4 = var5.bind(var6)(var3, var2);
case 19:
            if(!(var1 == var4)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var4 = new Array(0);
case 23:
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.currency;
                var1 = _closure1_slot5;
                var1 = var1.DISCORD_ORB;
                var1 = var2 !== var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var1 = var2;
case 25:
            return var1;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function getHasOrbPrice(arg1) {
        var3 = _closure1_slot7;
        var2 = {'product': null, 'isPremiumUser': false, 'isRental': false};
        var1 = arg1;
        var2['product'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot9 = var5;
    var4 = function getHasNonOrbPrice(arg1) {
        var3 = _closure1_slot8;
        var2 = {};
        var1 = arg1;
        var2['product'] = var1;
        var1 = false;
        var2['isPremiumUser'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot10 = var4;
    var8 = 5;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/collectibles/utils/CollectiblesProductUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['getProductOrbPrice'] = var7;
    var3['getProductFiatPrice'] = var6;
    var3['getHasOrbPrice'] = var5;
    var3['getHasNonOrbPrice'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var1 = _closure1_slot9;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            var2 = _closure1_slot10;
            var2 = var2.bind(var3)(var4);
            if(!var1) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var1 = !var2;
case 29:
            return var1;
case 27:
            var1 = false;
            return var1;
        }
    };
    var3['isOrbsExclusiveProduct'] = var4;
    var4 = function(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot9;
                var3 = undefined;
                var1 = var1.bind(var3)(var4);
                var2 = _closure1_slot10;
                var2 = var2.bind(var3)(var4);
                if(!var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var1 = var2;
case 31:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getProductsWithOrbsPrice'] = var4;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = var2.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.CollectiblesItemType;
            var1 = var1.VARIANTS_GROUP;
            var1 = var3 === var1;
            if(!var1) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var4 = var2.variants;
            var3 = null;
            var1 = var3 != var4;
case 33:
            if(!var1) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var2 = var2.variants;
            var3 = var2.length;
            var2 = 0;
            var1 = var2 !== var3;
case 35:
            return var1;
        }
    };
    var3['getIsVariantProduct'] = var4;
    var4 = function(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var8 = arg2;
            var5 = var4.type;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 4;
            var1 = var6[var1];
            var9 = undefined;
            var1 = var3.bind(var9)(var1);
            var1 = var1.CollectiblesItemType;
            var3 = var1.VARIANTS_GROUP;
            var1 = var4;
            if(!(var5 === var3)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var3 = null;
            var1 = var4;
            if(!(var3 != var8)) { _fun0006_ip = 37; continue _fun0006 }
case 33:
            var6 = _closure1_slot3;
            var5 = var6.getProduct;
            var7 = var4.variants;
            var10 = var3 == var7;
            var2 = undefined;
            if(var10) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var7 = var7[var8];
            var8 = var3 == var7;
            var2 = undefined;
            if(var8) { _fun0006_ip = 39; continue _fun0006 }
case 10:
            var2 = var7.skuId;
case 39:
            var2 = var5.bind(var6)(var2);
            var1 = var4;
            if(!(var3 != var2)) { _fun0006_ip = 37; continue _fun0006 }
case 41:
            var1 = var2;
case 37:
            return var1;
        }
    };
    var3['getSelectedProduct'] = var4;
    var2 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var4 = var2.type;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 4;
            var3 = var7[var3];
            var7 = undefined;
            var3 = var6.bind(var7)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.VARIANTS_GROUP;
            if(!(var4 !== var3)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var3 = var2.type;
            return var3;
case 44:
            var3 = var2.variants;
            if(!(var1 != var3)) { _fun0007_ip = 26; continue _fun0007 }
case 21:
            var3 = var2.variants;
            var3 = var3.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0007_ip = 26; continue _fun0007 }
case 46:
            var2 = var2.variants;
            var3 = var2[var4];
            var6 = var1 == var3;
            var2 = null;
            if(var6) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var6 = _closure1_slot2;
            var5 = var3.items;
            var3 = 1;
            var3 = var6.bind(var7)(var5, var3);
            var3 = var3[var4];
            var2 = var3.type;
case 47:
            return var2;
case 26:
            return var1;
case 42:
            return var1;
        }
    };
    var3['getProductType'] = var2;
    return var1;
})();