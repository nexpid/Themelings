// app/modules/collectibles/utils/CollectiblesProductUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var11[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var5 = var4.CurrencyCodes;
    var _closure1_slot3 = var5;
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot4 = var4;
    var8 = function getProductOrbPrice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.product;
            var1 = var1.isPremiumUser;
            var2 = var2.prices;
            var3 = _closure1_slot4;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.DEFAULT;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = var3.PREMIUM_TIER_2;
case 4:
            var2 = var2[var1];
            var1 = null;
            var5 = var1 == var2;
            var4 = undefined;
            if(var5) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var2.countryPrices;
            var5 = var1 == var2;
            var4 = undefined;
            if(var5) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var6 = var2.prices;
            var2 = var1 == var6;
            var4 = undefined;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 8:
            var5 = var6.slice;
            var3 = 0;
            var2 = 2;
            var4 = var5.bind(var6)(var3, var2);
case 5:
            if(!(var1 == var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = new Array(0);
case 9:
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.currency;
                var1 = _closure1_slot3;
                var1 = var1.DISCORD_ORB;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot5 = var8;
    var7 = function getProductFiatPrice(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.product;
            var1 = var1.isPremiumUser;
            var2 = var2.prices;
            var3 = _closure1_slot4;
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var3.MOBILE;
            _fun0002_ip = 4; continue _fun0002;
case 2:
            var1 = var3.MOBILE_PREMIUM_TIER_2;
case 4:
            var2 = var2[var1];
            var1 = null;
            var5 = var1 == var2;
            var4 = undefined;
            if(var5) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = var2.countryPrices;
            var5 = var1 == var2;
            var4 = undefined;
            if(var5) { _fun0002_ip = 5; continue _fun0002 }
case 7:
            var6 = var2.prices;
            var2 = var1 == var6;
            var4 = undefined;
            if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 8:
            var5 = var6.slice;
            var3 = 0;
            var2 = 2;
            var4 = var5.bind(var6)(var3, var2);
case 5:
            if(!(var1 == var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var4 = new Array(0);
case 9:
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.currency;
                var1 = _closure1_slot3;
                var1 = var1.DISCORD_ORB;
                var1 = var2 !== var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot6 = var7;
    var6 = function getHasOrbPrice(arg1) {
        var3 = _closure1_slot5;
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
    var _closure1_slot7 = var6;
    var5 = function getHasNonOrbPrice(arg1) {
        var3 = _closure1_slot6;
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
    var _closure1_slot8 = var5;
    var4 = function getIsVariantProduct(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = var2.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.CollectiblesItemType;
            var1 = var1.VARIANTS_GROUP;
            var1 = var3 === var1;
            if(!var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var4 = var2.variants;
            var3 = null;
            var1 = var3 != var4;
case 13:
            if(!var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var2 = var2.variants;
            var3 = var2.length;
            var2 = 0;
            var1 = var2 !== var3;
case 15:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var9 = 3;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/collectibles/utils/CollectiblesProductUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['getProductOrbPrice'] = var8;
    var3['getProductFiatPrice'] = var7;
    var3['getHasOrbPrice'] = var6;
    var3['getHasNonOrbPrice'] = var5;
    var5 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var1 = _closure1_slot7;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            var2 = _closure1_slot8;
            var2 = var2.bind(var3)(var4);
            if(!var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var1 = !var2;
case 19:
            return var1;
case 17:
            var1 = false;
            return var1;
        }
    };
    var3['isOrbsExclusiveProduct'] = var5;
    var5 = function(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot7;
                var3 = undefined;
                var1 = var1.bind(var3)(var4);
                var2 = _closure1_slot8;
                var2 = var2.bind(var3)(var4);
                if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var1 = var2;
case 21:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getProductsWithOrbsPrice'] = var5;
    var3['getIsVariantProduct'] = var4;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot9;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            if(var1) { _fun0006_ip = 20; continue _fun0006 }
case 23:
            var3 = var2.skuId;
            var1 = new Array(1);
            var1[0] = var3;
            _fun0006_ip = 24; continue _fun0006;
case 20:
            var4 = var2.variants;
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.skuId;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 24:
            return var1;
        }
    };
    var3['getProductSkuIds'] = var4;
    var4 = function(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var2 = _closure1_slot9;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            var1 = var4;
            if(!var2) { _fun0007_ip = 25; continue _fun0007 }
case 26:
            var3 = null;
            var1 = var4;
            if(!(var3 != var5)) { _fun0007_ip = 25; continue _fun0007 }
case 20:
            var2 = var4.variants;
            var2 = var2[var5];
            var1 = var4;
            if(!(var3 != var2)) { _fun0007_ip = 25; continue _fun0007 }
case 14:
            var1 = var2;
case 25:
            return var1;
        }
    };
    var3['getSelectedProduct'] = var4;
    var2 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0008_ip = 27; continue _fun0008 }
case 28:
            var4 = var2.type;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 2;
            var3 = var7[var3];
            var7 = undefined;
            var3 = var6.bind(var7)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.VARIANTS_GROUP;
            if(!(var4 !== var3)) { _fun0008_ip = 29; continue _fun0008 }
case 24:
            var3 = var2.type;
            return var3;
case 29:
            var3 = var2.variants;
            if(!(var1 != var3)) { _fun0008_ip = 12; continue _fun0008 }
case 7:
            var3 = var2.variants;
            var3 = var3.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0008_ip = 12; continue _fun0008 }
case 30:
            var2 = var2.variants;
            var3 = var2[var4];
            var6 = var1 == var3;
            var2 = null;
            if(var6) { _fun0008_ip = 31; continue _fun0008 }
case 32:
            var6 = _closure1_slot2;
            var5 = var3.items;
            var3 = 1;
            var3 = var6.bind(var7)(var5, var3);
            var3 = var3[var4];
            var2 = var3.type;
case 31:
            return var2;
case 12:
            return var1;
case 27:
            return var1;
        }
    };
    var3['getProductType'] = var2;
    return var1;
})();