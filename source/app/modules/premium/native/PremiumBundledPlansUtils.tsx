// app/modules/premium/native/PremiumBundledPlansUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var7 = function getPremiumBundleWithPredicate(arg1) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 1;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var1.AppStorePremiumProductIdsToPremiumBundledItems;
        var3 = var2.bind(var3)(var1);
        var2 = var3.find;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot4 = var7;
    var6 = function getPremiumBundledItemsFromProductId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var5 = 1;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.AppStorePremiumProductIdsToPremiumBundledItems;
            var3 = var2 in var3;
            if(var3) { _fun0001_ip = 93; continue _fun0001 }
 41:
            var3 = global;
            var7 = var3.Error;
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var3 = 'Invalid bundled product ID ';
            var8 = var6.bind(var3)(var2);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var9 = var6;
            var3 = new var9[var7](var8, var7);
            var3 = var3 instanceof Object ? var3 : var6;
            throw var3;
 93:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AppStorePremiumProductIdsToPremiumBundledItems;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot5 = var6;
    var5 = function getToggledIntervalProduct(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot5;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1);
            var _closure2_slot0 = var1;
            var7 = var1.premiumTier;
            var1 = _closure1_slot2;
            var6 = var1.TIER_1;
            var4 = null;
            var1 = null;
            if(!(var7 !== var6)) { _fun0002_ip = 79; continue _fun0002 }
 47:
            var5 = _closure1_slot4;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.numPremiumGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.numPremiumGuild;
                    var1 = var4 === var1;
                    if(!var1) { _fun0003_ip = 49; continue _fun0003 }
 29:
                    var5 = var2.premiumTier;
                    var4 = _closure2_slot0;
                    var4 = var4.premiumTier;
                    var1 = var5 === var4;
 49:
                    if(!var1) { _fun0003_ip = 72; continue _fun0003 }
 52:
                    var4 = var2.interval;
                    var3 = _closure2_slot0;
                    var3 = var3.interval;
                    var1 = var4 !== var3;
 72:
                    if(!var1) { _fun0003_ip = 84; continue _fun0003 }
 75:
                    var2 = var2.isDeprecated;
                    var1 = !var2;
 84:
                    return var1;
                }
            };
            var3 = var5.bind(var2)(var3);
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 76; continue _fun0002 }
 70:
            var2 = var3.productId;
 76:
            var1 = var2;
 79:
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function isValidBundleProductId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 47; continue _fun0004 }
 12:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.AppStorePremiumProductIdsToPremiumBundledItems;
            var1 = var3 in var2;
 47:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var11 = var8.PremiumTypes;
    var _closure1_slot2 = var11;
    var8 = var8.SubscriptionIntervalTypes;
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/premium/native/PremiumBundledPlansUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function getPremiumBundlesWithPredicate(arg1) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 1;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var1.AppStorePremiumProductIdsToPremiumBundledItems;
        var3 = var2.bind(var3)(var1);
        var2 = var3.filter;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getPremiumBundlesWithPredicate'] = var8;
    var3['getPremiumBundleWithPredicate'] = var7;
    var3['getPremiumBundledItemsFromProductId'] = var6;
    var3['getToggledIntervalProduct'] = var5;
    var5 = function getProductIdsForBothIntervals(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot5;
            var2 = undefined;
            var6 = var1.bind(var2)(var4);
            var1 = _closure1_slot6;
            var2 = var1.bind(var2)(var4);
            var3 = null;
            if(!(var3 != var2)) { _fun0005_ip = 95; continue _fun0005 }
 32:
            var1 = {};
            var9 = var6.interval;
            var7 = _closure1_slot3;
            var8 = var7.MONTH;
            var7 = var2;
            if(!(var9 === var8)) { _fun0005_ip = 60; continue _fun0005 }
 57:
            var7 = var4;
 60:
            var1['monthly'] = var7;
            var6 = var6.interval;
            var5 = _closure1_slot3;
            var5 = var5.YEAR;
            if(!(var6 === var5)) { _fun0005_ip = 88; continue _fun0005 }
 85:
            var2 = var4;
 88:
            var1['yearly'] = var2;
            _fun0005_ip = 110; continue _fun0005;
 95:
            var2 = {};
            var2['monthly'] = var4;
            var2['yearly'] = var3;
            var1 = var2;
 110:
            return var1;
        }
    };
    var3['getProductIdsForBothIntervals'] = var5;
    var5 = function productsHaveSamePerks(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
            var5 = _closure1_slot7;
            var4 = undefined;
            var5 = var5.bind(var4)(var2);
            if(!var5) { _fun0006_ip = 35; continue _fun0006 }
 23:
            var5 = _closure1_slot7;
            var5 = var5.bind(var4)(var1);
            if(var5) { _fun0006_ip = 41; continue _fun0006 }
 35:
            var5 = var2 === var1;
            return var5;
 41:
            var5 = null;
            if(!(var5 != var2)) { _fun0006_ip = 110; continue _fun0006 }
 47:
            if(!(var5 != var1)) { _fun0006_ip = 110; continue _fun0006 }
 51:
            if(!(var2 !== var1)) { _fun0006_ip = 106; continue _fun0006 }
 55:
            var3 = _closure1_slot5;
            var5 = var3.bind(var4)(var2);
            var4 = var3.bind(var4)(var1);
            var6 = var5.numPremiumGuild;
            var3 = var4.numPremiumGuild;
            var3 = var6 === var3;
            if(!var3) { _fun0006_ip = 104; continue _fun0006 }
 88:
            var5 = var5.premiumTier;
            var4 = var4.premiumTier;
            var3 = var5 === var4;
 104:
            return var3;
 106:
            var3 = true;
            return var3;
 110:
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['productsHaveSamePerks'] = var5;
    var3['isValidBundleProductId'] = var4;
    var4 = function shouldAlwaysExcludeFromPlanSelect(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var1 = var2.isDeprecated;
            if(var1) { _fun0007_ip = 35; continue _fun0007 }
 12:
            var3 = var2.interval;
            var2 = _closure1_slot3;
            var2 = var2.YEAR;
            var1 = var3 === var2;
 35:
            return var1;
        }
    };
    var3['shouldAlwaysExcludeFromPlanSelect'] = var4;
    var2 = function makeExternalPaymentGatewayPlanIdOrThrow(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0008_ip = 104; continue _fun0008 }
 9:
            var2 = _closure1_slot7;
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            if(var2) { _fun0008_ip = 102; continue _fun0008 }
 26:
            var2 = '.1';
            var2 = var1 + var2;
            var3 = _closure1_slot7;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0008_ip = 100; continue _fun0008 }
 48:
            var3 = global;
            var5 = var3.Error;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = 'Invalid plan ID ';
            var6 = var4.bind(var3)(var1);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var3 = new var7[var5](var6, var5);
            var3 = var3 instanceof Object ? var3 : var4;
            throw var3;
 100:
            return var2;
 102:
            return var1;
 104:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var6 = 'Invalid null plan ID';
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['makeExternalPaymentGatewayPlanIdOrThrow'] = var2;
    return var1;
})();