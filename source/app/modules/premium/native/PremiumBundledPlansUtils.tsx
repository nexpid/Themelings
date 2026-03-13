// app/modules/premium/native/PremiumBundledPlansUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot6;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot6;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var7;
    var6 = function getPremiumBundledItemsFromProductId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var5 = 1;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.AppStorePremiumProductIdsToPremiumBundledItems;
            var3 = var2 in var3;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
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
case 36:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AppStorePremiumProductIdsToPremiumBundledItems;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function getToggledIntervalProduct(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot8;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1);
            var _closure2_slot0 = var1;
            var7 = var1.premiumTier;
            var1 = _closure1_slot2;
            var6 = var1.TIER_1;
            var4 = null;
            var1 = null;
            if(!(var7 !== var6)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var5 = _closure1_slot7;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.numPremiumGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.numPremiumGuild;
                    var1 = var4 === var1;
                    if(!var1) { _fun0006_ip = 5; continue _fun0006 }
case 40:
                    var5 = var2.premiumTier;
                    var4 = _closure2_slot0;
                    var4 = var4.premiumTier;
                    var1 = var5 === var4;
case 5:
                    if(!var1) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var4 = var2.interval;
                    var3 = _closure2_slot0;
                    var3 = var3.interval;
                    var1 = var4 !== var3;
case 41:
                    if(!var1) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var2 = var2.isDeprecated;
                    var1 = !var2;
case 43:
                    return var1;
                }
            };
            var3 = var5.bind(var2)(var3);
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 45; continue _fun0005 }
case 35:
            var2 = var3.productId;
case 45:
            var1 = var2;
case 38:
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function isValidBundleProductId(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0007_ip = 39; continue _fun0007 }
case 46:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.AppStorePremiumProductIdsToPremiumBundledItems;
            var1 = var3 in var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
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
    var11 = var8.SubscriptionIntervalTypes;
    var _closure1_slot3 = var11;
    var8 = var8.SubscriptionPlans;
    var _closure1_slot4 = var8;
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
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot8;
            var2 = undefined;
            var6 = var1.bind(var2)(var4);
            var1 = _closure1_slot9;
            var2 = var1.bind(var2)(var4);
            var3 = null;
            if(!(var3 != var2)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            var1 = {};
            var9 = var6.interval;
            var7 = _closure1_slot3;
            var8 = var7.MONTH;
            var7 = var2;
            if(!(var9 === var8)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var7 = var4;
case 49:
            var1['monthly'] = var7;
            var6 = var6.interval;
            var5 = _closure1_slot3;
            var5 = var5.YEAR;
            if(!(var6 === var5)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var2 = var4;
case 51:
            var1['yearly'] = var2;
            _fun0008_ip = 13; continue _fun0008;
case 47:
            var2 = {};
            var2['monthly'] = var4;
            var2['yearly'] = var3;
            var1 = var2;
case 13:
            return var1;
        }
    };
    var3['getProductIdsForBothIntervals'] = var5;
    var5 = function productsHaveSamePerks(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var5 = _closure1_slot10;
            var4 = undefined;
            var5 = var5.bind(var4)(var2);
            if(!var5) { _fun0009_ip = 53; continue _fun0009 }
case 31:
            var5 = _closure1_slot10;
            var5 = var5.bind(var4)(var1);
            if(var5) { _fun0009_ip = 37; continue _fun0009 }
case 53:
            var5 = var2 === var1;
            return var5;
case 37:
            var5 = null;
            if(!(var5 != var2)) { _fun0009_ip = 13; continue _fun0009 }
case 39:
            if(!(var5 != var1)) { _fun0009_ip = 13; continue _fun0009 }
case 54:
            if(!(var2 !== var1)) { _fun0009_ip = 55; continue _fun0009 }
case 4:
            var3 = _closure1_slot8;
            var5 = var3.bind(var4)(var2);
            var4 = var3.bind(var4)(var1);
            var6 = var5.numPremiumGuild;
            var3 = var4.numPremiumGuild;
            var3 = var6 === var3;
            if(!var3) { _fun0009_ip = 56; continue _fun0009 }
case 51:
            var5 = var5.premiumTier;
            var4 = var4.premiumTier;
            var3 = var5 === var4;
case 56:
            return var3;
case 55:
            var3 = true;
            return var3;
case 13:
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['productsHaveSamePerks'] = var5;
    var3['isValidBundleProductId'] = var4;
    var4 = function shouldAlwaysExcludeFromPlanSelect(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isDeprecated;
            if(var1) { _fun0010_ip = 53; continue _fun0010 }
case 46:
            var3 = var2.interval;
            var2 = _closure1_slot3;
            var2 = var2.YEAR;
            var1 = var3 === var2;
case 53:
            return var1;
        }
    };
    var3['shouldAlwaysExcludeFromPlanSelect'] = var4;
    var4 = function getSubscriptionItemsForProduct(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot10;
            var5 = undefined;
            var1 = var1.bind(var5)(var2);
            if(var1) { _fun0011_ip = 41; continue _fun0011 }
case 29:
            var1 = global;
            var6 = var1.Error;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = 'Invalid product ';
            var9 = var4.bind(var1)(var2);
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var10 = var4;
            var1 = new var10[var6](var9, var8);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 41:
            var1 = _closure1_slot8;
            var2 = var1.bind(var5)(var2);
            var1 = new Array(0);
            var6 = var2.basePlanId;
            var4 = _closure1_slot4;
            var4 = var4.NONE_MONTH;
            if(!(var6 !== var4)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
            var6 = var1.push;
            var4 = {};
            var7 = var2.basePlanId;
            var4['planId'] = var7;
            var7 = 1;
            var4['quantity'] = var7;
            var4 = var6.bind(var1)(var4);
case 57:
            var3 = _closure1_slot5;
            var2 = var2.additionalPlans;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0011_ip = 59; continue _fun0011 }
case 14:
            var7 = var3.value;
            var6 = var1.push;
            var2 = {};
            var8 = var7.planId;
            var2['planId'] = var8;
            var7 = var7.quantity;
            var2['quantity'] = var7;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var5)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0011_ip = 14; continue _fun0011 }
case 59:
            return var1;
        }
    };
    var3['getSubscriptionItemsForProduct'] = var4;
    var2 = function makeExternalPaymentGatewayPlanIdOrThrow(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0012_ip = 56; continue _fun0012 }
case 60:
            var2 = _closure1_slot10;
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            if(var2) { _fun0012_ip = 61; continue _fun0012 }
case 62:
            var2 = '.1';
            var2 = var1 + var2;
            var3 = _closure1_slot10;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0012_ip = 63; continue _fun0012 }
case 64:
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
case 63:
            return var2;
case 61:
            return var1;
case 56:
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