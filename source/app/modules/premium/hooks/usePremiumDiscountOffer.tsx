// app/modules/premium/hooks/usePremiumDiscountOffer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function hasUserDiscountExpired(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            var1 = var4 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.expires_at;
            var1 = var4 != var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = global;
            var5 = var4.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            var5 = var4.Date;
            var4 = var5.parse;
            var2 = var2.expires_at;
            var2 = var4.bind(var5)(var2);
            var1 = var3 > var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var4 = function useDiscountOffer(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 5;
            var2 = var9[var5];
            var6 = undefined;
            var11 = var8.bind(var6)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getUserDiscountOffer;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var10.bind(var11)(var7, var2);
            var _closure2_slot1 = var2;
            var11 = _closure1_slot3;
            var10 = var11.useState;
            var7 = _closure1_slot14;
            var7 = var7.bind(var6)(var2);
            var11 = var10.bind(var11)(var7);
            var10 = _closure1_slot2;
            var7 = 2;
            var11 = var10.bind(var6)(var11, var7);
            var7 = 0;
            var7 = var11[var7];
            var _closure2_slot2 = var7;
            var10 = 1;
            var10 = var11[var10];
            var _closure2_slot3 = var10;
            var5 = var9[var5];
            var9 = var8.bind(var6)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isPremium;
                var4 = _closure1_slot4;
                var1 = var4.getCurrentUser;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var8.bind(var9)(var6, var5);
            var9 = _closure1_slot3;
            var8 = var9.useEffect;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var2;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = _closure2_slot1;
                    var2 = var2.expires_at;
                    if(!(var3 == var2)) { _fun0003_ip = 8; continue _fun0003 }
case 6:
                    var2 = undefined;
                    return var2;
case 8:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.Timeout;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var6 = var4;
                    var2 = new var6[var2](var5);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var _closure3_slot0 = var2;
                    var2 = function startTimer() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.expires_at;
                            var3 = null;
                            var1 = var3 != var1;
                            var4 = 0;
                            if(!var1) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                            var1 = global;
                            var6 = var1.Date;
                            var5 = var6.parse;
                            var2 = _closure2_slot1;
                            var2 = var2.expires_at;
                            var2 = var5.bind(var6)(var2);
                            var5 = var1.Date;
                            var1 = var5.now;
                            var1 = var1.bind(var5)();
                            var4 = var2 - var1;
case 9:
                            var2 = _closure3_slot0;
                            if(!(var3 != var2)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                            var3 = _closure3_slot0;
                            var2 = var3.start;
                            var1 = function() {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    var2 = _closure2_slot2;
                                    if(var2) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                                    var4 = _closure1_slot14;
                                    var2 = _closure2_slot1;
                                    var3 = undefined;
                                    var2 = var4.bind(var3)(var2);
                                    if(!var2) { _fun0005_ip = 13; continue _fun0005 }
case 15:
                                    var2 = _closure2_slot3;
                                    var1 = true;
                                    var1 = var2.bind(var3)(var1);
                                    _fun0005_ip = 16; continue _fun0005;
case 13:
                                    var2 = _closure3_slot1;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
case 16:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var4, var1);
case 11:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var2;
                    var2 = var2.bind(var3)();
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.stop;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var1, var5);
            var1 = null;
            if(var7) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            if(!var6) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var6 = arg2;
            if(var6) { _fun0002_ip = 19; continue _fun0002 }
case 21:
            var6 = _closure1_slot6;
            if(!(var4 !== var6)) { _fun0002_ip = 19; continue _fun0002 }
case 22:
            var3 = _closure1_slot7;
            var1 = null;
            if(!(var4 === var3)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
            var1 = var2;
case 17:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID;
    var _closure1_slot6 = var9;
    var9 = var6.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID;
    var _closure1_slot7 = var9;
    var9 = var6.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID;
    var _closure1_slot8 = var9;
    var9 = var6.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
    var _closure1_slot9 = var9;
    var9 = var6.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID;
    var _closure1_slot10 = var9;
    var9 = var6.APPLE_PAYMENT_LINK_1_MONTH_10_PERCENT_DISCOUNT;
    var _closure1_slot11 = var9;
    var9 = var6.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID;
    var _closure1_slot12 = var9;
    var6 = var6.SubscriptionPlanInfo;
    var _closure1_slot13 = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/hooks/usePremiumDiscountOffer.tsx';
    var6 = var7.bind(var8)(var6);
    var3['hasUserDiscountExpired'] = var5;
    var5 = function discountOfferHasTier(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            var1 = var2 != var3;
            if(!var1) { _fun0006_ip = 23; continue _fun0006 }
case 3:
            var4 = global;
            var4 = var4.Set;
            var3 = var3.discount;
            var5 = var2 == var3;
            var2 = undefined;
            if(var5) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var6 = var3.plan_ids;
            var5 = var6.map;
            var3 = function(arg1) {
                var2 = _closure1_slot13;
                var1 = arg1;
                var1 = var2[var1];
                var1 = var1.skuId;
                return var1;
            };
            var2 = var5.bind(var6)(var3);
case 24:
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var8 = var3;
            var7 = var2;
            var2 = new var8[var4](var7, var6);
            var4 = var2 instanceof Object ? var2 : var3;
            var3 = var4.has;
            var2 = arg2;
            var1 = var3.bind(var4)(var2);
case 23:
            return var1;
        }
    };
    var3['discountOfferHasTier'] = var5;
    var3['useDiscountOffer'] = var4;
    var2 = function usePremiumDiscountOffer() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot5;
            var1 = var2.canFractionalPremiumUserUseOffer;
            var8 = var1.bind(var2)();
            var7 = _closure1_slot15;
            var1 = _closure1_slot10;
            var6 = undefined;
            var5 = var7.bind(var6)(var1, var8);
            var1 = _closure1_slot12;
            var4 = var7.bind(var6)(var1, var8);
            var1 = _closure1_slot8;
            var2 = var7.bind(var6)(var1, var8);
            var1 = _closure1_slot9;
            var1 = var7.bind(var6)(var1, var8);
            var3 = _closure1_slot11;
            var6 = var7.bind(var6)(var3, var8);
            var3 = null;
            if(!(var3 != var6)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var5 = var6;
case 26:
            if(!(var3 != var5)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var4 = var5;
case 28:
            if(!(var3 != var4)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
            var2 = var4;
case 30:
            if(!(var3 != var2)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var1 = var2;
case 32:
            return var1;
        }
    };
    var3['usePremiumDiscountOffer'] = var2;
    return var1;
})();