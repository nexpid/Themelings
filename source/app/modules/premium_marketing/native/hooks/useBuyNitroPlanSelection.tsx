// app/modules/premium_marketing/native/hooks/useBuyNitroPlanSelection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.PremiumTypes;
    var _closure1_slot5 = var5;
    var4 = var4.SubscriptionIntervalTypes;
    var _closure1_slot6 = var4;
    var8 = var5.TIER_2;
    var4 = new Array(2);
    var4[0] = var8;
    var5 = var5.TIER_0;
    var4[1] = var5;
    var _closure1_slot7 = var4;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium_marketing/native/hooks/useBuyNitroPlanSelection.tsx';
    var5 = var6.bind(var7)(var5);
    var3['NITRO_PLAN_TIERS'] = var4;
    var2 = function useBuyNitroPlanSelection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var14 = arg1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 4;
            var2 = var6[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var2);
            var2 = var3.usePremiumTrialOfferPremiumType;
            var2 = var2.bind(var3)();
            var3 = 5;
            var3 = var6[var3];
            var3 = var5.bind(var1)(var3);
            var7 = var3.NitroACOMSubscriptionExperiment;
            var4 = var7.useConfig;
            var3 = {};
            var8 = 'useBuyNitroPlanSelection';
            var3['location'] = var8;
            var3 = var4.bind(var7)(var3);
            var3 = var3.enabled;
            var4 = 6;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isIOS;
            var4 = var4.bind(var5)();
            if(!var4) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = undefined;
            if(var3) { _fun0004_ip = 38; continue _fun0004 }
case 36:
            var3 = null;
            var3 = var3 != var2;
            var4 = undefined;
            if(!var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = _closure1_slot7;
            var3 = var5.includes;
            var3 = var3.bind(var5)(var2);
            var4 = undefined;
            if(!var3) { _fun0004_ip = 38; continue _fun0004 }
case 40:
            var4 = var2;
case 38:
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var6 = null;
            var2 = var6 == var14;
            var7 = undefined;
            if(var2) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var7 = var14.tier;
case 41:
            var8 = var6 != var7;
            var2 = null;
            if(!var8) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var2 = var7;
case 43:
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot3;
            var20 = 2;
            var3 = var2.bind(var1)(var3, var20);
            var16 = 0;
            var2 = var3[var16];
            var17 = 1;
            var3 = var3[var17];
            var _closure2_slot0 = var3;
            var19 = var4;
            if(!(var6 != var2)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var19 = var2;
case 45:
            if(!(var6 == var19)) { _fun0004_ip = 47; continue _fun0004 }
case 21:
            var2 = _closure1_slot5;
            var19 = var2.TIER_2;
case 47:
            var _closure2_slot1 = var19;
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var19;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = function getBasePlansForTier(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getPremiumBundlesWithPredicate;
                    var2 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.additionalPlans;
                            var1 = var1.length;
                            var4 = 0;
                            var1 = var4 === var1;
                            if(!var1) { _fun0005_ip = 48; continue _fun0005 }
case 31:
                            var5 = var2.isDeprecated;
                            var3 = true;
                            var1 = var3 !== var5;
case 48:
                            if(!var1) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                            var3 = var2.numPremiumGuild;
                            var1 = var4 === var3;
case 49:
                            if(!var1) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                            var3 = var2.premiumTier;
                            var2 = _closure4_slot0;
                            var1 = var3 === var2;
case 51:
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.sort;
                    var1 = function(arg1, arg2) {
                        var1 = arg2;
                        var2 = var1.interval;
                        var1 = arg1;
                        var1 = var1.interval;
                        var1 = var2 - var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var10 = var5.bind(var7)(var2, var3);
            var _closure2_slot2 = var10;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var5 = var3.bind(var1)(var2);
            var2 = var5.usePremiumDiscountOffer;
            var5 = var2.bind(var5)();
            var2 = 8;
            var2 = var8[var2];
            var7 = var3.bind(var1)(var2);
            var2 = var7.useIsEligibleForBogoOffer;
            var7 = var2.bind(var7)();
            var2 = 9;
            var2 = var8[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.useDiscountedPremiumProductInfo;
            var2 = var2.bind(var3)(var5, var10);
            var9 = var2.discountedProduct;
            var15 = var2.discountedPriceString;
            if(!(var6 == var5)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var2 = global;
            var8 = var2.NaN;
            _fun0004_ip = 55; continue _fun0004;
case 53:
            var2 = global;
            var3 = var2.parseFloat;
            var2 = var5.discount;
            var2 = var2.amount;
            var8 = var3.bind(var1)(var2);
case 55:
            var3 = {};
            var13 = var6 == var9;
            var2 = undefined;
            if(var13) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var2 = var9.identifier;
case 56:
            var3['id'] = var2;
            var3['priceString'] = var15;
            var2 = var6 == var5;
            var9 = undefined;
            if(var2) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var2 = var5.discount;
            var13 = var6 == var2;
            var9 = undefined;
            if(var13) { _fun0004_ip = 58; continue _fun0004 }
case 60:
            var9 = var2.userUsageLimit;
case 58:
            var13 = var6 != var9;
            var2 = var17;
            if(!var13) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var2 = var9;
case 61:
            var3['numMonths'] = var2;
            var2 = global;
            var9 = var2.Number;
            var2 = var9.isNaN;
            var9 = var2.bind(var9)(var8);
            var2 = null;
            if(var9) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var2 = var8;
case 63:
            var3['percentOff'] = var2;
            var8 = var10.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.interval;
                var1 = _closure1_slot6;
                var1 = var1.MONTH;
                var1 = var2 === var1;
                return var1;
            };
            var24 = var8.bind(var10)(var2);
            var _closure2_slot3 = var24;
            var8 = var10.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.interval;
                var1 = _closure1_slot6;
                var1 = var1.YEAR;
                var1 = var2 === var1;
                return var1;
            };
            var23 = var8.bind(var10)(var2);
            var _closure2_slot4 = var23;
            var8 = _closure1_slot1;
            var2 = _closure1_slot2;
            var9 = 10;
            var2 = var2[var9];
            var8 = var8.bind(var1)(var2);
            var13 = var6 == var24;
            var2 = undefined;
            if(var13) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var2 = var24.basePlanId;
case 65:
            var8 = var8.bind(var1)(var2);
            var13 = var6 == var8;
            var2 = undefined;
            if(var13) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var2 = var8.priceString;
case 67:
            var8 = var6 != var2;
            var22 = null;
            if(!var8) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var22 = var2;
case 69:
            var _closure2_slot5 = var22;
            var8 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var8 = var8.bind(var1)(var2);
            var9 = var6 == var23;
            var2 = undefined;
            if(var9) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var2 = var23.basePlanId;
case 71:
            var8 = var8.bind(var1)(var2);
            var9 = var6 == var8;
            var2 = undefined;
            if(var9) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var2 = var8.priceString;
case 73:
            var8 = var6 != var2;
            var18 = null;
            if(!var8) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            var18 = var2;
case 75:
            var _closure2_slot6 = var18;
            var21 = _closure1_slot4;
            var8 = var21.useState;
            var2 = function() {
                var1 = global;
                var1 = var1.Map;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var3 = var2;
                var1 = new var3[var1](var2);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var8 = var8.bind(var21)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var1)(var8, var20);
            var8 = var2[var16];
            var _closure2_slot7 = var8;
            var2 = var2[var17];
            var _closure2_slot8 = var2;
            var13 = var21.useCallback;
            var9 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var3 = _closure2_slot8;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.get;
                        var2 = _closure3_slot0;
                        var4 = var4.bind(var1)(var2);
                        var2 = _closure3_slot1;
                        if(!(var4 !== var2)) { _fun0006_ip = 77; continue _fun0006 }
case 34:
                        var2 = global;
                        var2 = var2.Map;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {constructor: {value: var2}});
                        var8 = var4;
                        var7 = var1;
                        var2 = new var8[var2](var7, var6);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var5 = var2.set;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var3 = var5.bind(var2)(var4, var3);
                        return var2;
case 77:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var13.bind(var21)(var9, var2);
            var13 = var21.useMemo;
            var9 = new Array(5);
            var9[0] = var24;
            var9[1] = var23;
            var9[2] = var22;
            var9[3] = var18;
            var9[4] = var8;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = global;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var14 = var2;
                    var1 = new var14[var1](var13);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var3 = _closure2_slot3;
                    var5 = null;
                    var3 = var5 != var3;
                    if(!var3) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                    var4 = _closure2_slot5;
                    var3 = var5 != var4;
case 78:
                    if(!var3) { _fun0007_ip = 77; continue _fun0007 }
case 4:
                    var6 = var1.set;
                    var3 = _closure2_slot3;
                    var4 = var3.productId;
                    var3 = _closure2_slot5;
                    var3 = var6.bind(var1)(var4, var3);
case 77:
                    var3 = _closure2_slot4;
                    var3 = var5 != var3;
                    if(!var3) { _fun0007_ip = 80; continue _fun0007 }
case 81:
                    var4 = _closure2_slot6;
                    var3 = var5 != var4;
case 80:
                    if(!var3) { _fun0007_ip = 82; continue _fun0007 }
case 83:
                    var5 = var1.set;
                    var3 = _closure2_slot4;
                    var4 = var3.productId;
                    var3 = _closure2_slot6;
                    var3 = var5.bind(var1)(var4, var3);
case 82:
                    var3 = _closure1_slot8;
                    var2 = _closure2_slot7;
                    var8 = undefined;
                    var7 = var3.bind(var8)(var2);
                    var3 = var7.bind(var8)();
                    var2 = var3.done;
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    if(var2) { _fun0007_ip = 46; continue _fun0007 }
case 84:
                    var10 = var3.value;
                    var2 = _closure1_slot3;
                    var2 = var2.bind(var8)(var10, var6);
                    var11 = var2[var5];
                    var10 = var2[var4];
                    var2 = var1.has;
                    var2 = var2.bind(var1)(var11);
                    if(!var2) { _fun0007_ip = 85; continue _fun0007 }
case 86:
                    var2 = var1.set;
                    var2 = var2.bind(var1)(var11, var10);
case 85:
                    var10 = var7.bind(var8)();
                    var2 = var10.done;
                    var3 = var10;
                    if(!var2) { _fun0007_ip = 84; continue _fun0007 }
case 46:
                    return var1;
                }
            };
            var9 = var13.bind(var21)(var8, var9);
            var _closure2_slot9 = var9;
            var18 = var21.useMemo;
            var13 = new Array(2);
            var13[0] = var10;
            var13[1] = var9;
            var8 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = global;
                    var1 = var1.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var11 = var2;
                    var1 = new var11[var1](var10);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var2 = _closure2_slot9;
                    var3 = var2.size;
                    var2 = 0;
                    if(!(var3 > var2)) { _fun0008_ip = 87; continue _fun0008 }
case 2:
                    var3 = _closure1_slot8;
                    var2 = _closure2_slot2;
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0008_ip = 87; continue _fun0008 }
case 88:
                    var2 = var3.value;
                    var9 = _closure2_slot9;
                    var8 = var9.has;
                    var7 = var2.productId;
                    var7 = var8.bind(var9)(var7);
                    if(var7) { _fun0008_ip = 89; continue _fun0008 }
case 90:
                    var7 = var1.add;
                    var2 = var2.productId;
                    var2 = var7.bind(var1)(var2);
case 89:
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0008_ip = 88; continue _fun0008 }
case 87:
                    return var1;
                }
            };
            var8 = var18.bind(var21)(var8, var13);
            var18 = _closure1_slot6;
            if(var7) { _fun0004_ip = 91; continue _fun0004 }
case 92:
            var13 = var18.YEAR;
            _fun0004_ip = 93; continue _fun0004;
case 91:
            var13 = var18.MONTH;
case 93:
            var21 = _closure1_slot4;
            var18 = var21.useState;
            var23 = var6 == var14;
            var22 = undefined;
            if(var23) { _fun0004_ip = 94; continue _fun0004 }
case 95:
            var22 = var14.productId;
case 94:
            var23 = var6 != var22;
            var14 = null;
            if(!var23) { _fun0004_ip = 96; continue _fun0004 }
case 97:
            var14 = var22;
case 96:
            var18 = var18.bind(var21)(var14);
            var14 = _closure1_slot3;
            var14 = var14.bind(var1)(var18, var20);
            var16 = var14[var16];
            var _closure2_slot10 = var16;
            var14 = var14[var17];
            var _closure2_slot11 = var14;
            var20 = _closure1_slot4;
            var17 = var20.useCallback;
            var14 = new Array(1);
            var14[0] = var19;
            var12 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure2_slot1;
                    if(!(var4 !== var2)) { _fun0009_ip = 98; continue _fun0009 }
case 32:
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var4);
                    var2 = _closure2_slot11;
                    var1 = null;
                    var1 = var2.bind(var3)(var1);
case 98:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var17.bind(var20)(var12, var14);
            var17 = var20.useCallback;
            var14 = new Array(1);
            var14[0] = var19;
            var12 = function(arg1) {
                var4 = _closure2_slot11;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var14 = var17.bind(var20)(var12, var14);
            if(!(var6 != var16)) { _fun0004_ip = 99; continue _fun0004 }
case 100:
            var17 = var10.some;
            var12 = function(arg1) {
                var1 = arg1;
                var2 = var1.productId;
                var1 = _closure2_slot10;
                var1 = var2 === var1;
                return var1;
            };
            var12 = var17.bind(var10)(var12);
            if(!var12) { _fun0004_ip = 99; continue _fun0004 }
case 101:
            var12 = var8.has;
            var12 = var12.bind(var8)(var16);
            var17 = var16;
            if(!var12) { _fun0004_ip = 102; continue _fun0004 }
case 99:
            var12 = function getDefaultItem(arg1, arg2, arg3) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = arg1;
                    var3 = arg2;
                    var _closure3_slot0 = var3;
                    var3 = arg3;
                    var _closure3_slot1 = var3;
                    var4 = var2.filter;
                    var3 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.productId;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var4 = var4.bind(var2)(var3);
                    var5 = var4.length;
                    var3 = 0;
                    if(!(var5 > var3)) { _fun0010_ip = 49; continue _fun0010 }
case 103:
                    var2 = var4;
case 49:
                    var4 = var2.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.interval;
                        var1 = _closure3_slot1;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var4.bind(var2)(var1);
                    var4 = null;
                    if(!(var4 == var1)) { _fun0010_ip = 104; continue _fun0010 }
case 35:
                    var1 = var2[var3];
case 104:
                    return var1;
                }
            };
            var13 = var12.bind(var1)(var10, var8, var13);
            var16 = var6 == var13;
            var12 = undefined;
            if(var16) { _fun0004_ip = 105; continue _fun0004 }
case 106:
            var12 = var13.productId;
case 105:
            var17 = var12;
case 102:
            var _closure2_slot12 = var17;
            var12 = var10.find;
            var11 = function(arg1) {
                var1 = arg1;
                var2 = var1.productId;
                var1 = _closure2_slot12;
                var1 = var2 === var1;
                return var1;
            };
            var16 = var12.bind(var10)(var11);
            var13 = var6 != var16;
            if(!var13) { _fun0004_ip = 107; continue _fun0004 }
case 108:
            var12 = var16.productId;
            var11 = var3.id;
            var13 = var12 === var11;
case 107:
            if(!var13) { _fun0004_ip = 109; continue _fun0004 }
case 110:
            var13 = var6 != var15;
case 109:
            var12 = var6 != var4;
            if(!var12) { _fun0004_ip = 111; continue _fun0004 }
case 112:
            var11 = var6 == var16;
            var1 = undefined;
            if(var11) { _fun0004_ip = 113; continue _fun0004 }
case 114:
            var1 = var16.premiumTier;
case 113:
            var12 = var1 === var4;
case 111:
            var1 = {};
            var11 = {};
            var11['tier'] = var19;
            var11['setTier'] = var18;
            var11['productId'] = var17;
            var11['setProductId'] = var14;
            var11['item'] = var16;
            var17 = var6 == var16;
            var14 = null;
            if(var17) { _fun0004_ip = 115; continue _fun0004 }
case 116:
            if(var13) { _fun0004_ip = 117; continue _fun0004 }
case 118:
            var17 = var9.get;
            var16 = var16.productId;
            var17 = var17.bind(var9)(var16);
            var18 = var6 != var17;
            var16 = null;
            if(!var18) { _fun0004_ip = 119; continue _fun0004 }
case 120:
            var16 = var17;
case 119:
            var15 = var16;
case 117:
            var14 = var15;
case 115:
            var11['priceString'] = var14;
            var11['isDiscounted'] = var13;
            var11['isTrial'] = var12;
            var1['selection'] = var11;
            var1['items'] = var10;
            var1['priceStringByProductId'] = var9;
            var1['unavailableProductIds'] = var8;
            var1['bogoEligible'] = var7;
            var5 = var6 != var5;
            var1['hasDiscountOffer'] = var5;
            var1['trialTier'] = var4;
            var1['discounted'] = var3;
            var1['applyOrderPriceOverride'] = var2;
            return var1;
        }
    };
    var3['useBuyNitroPlanSelection'] = var2;
    return var1;
})();