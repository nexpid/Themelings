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
 0:
            var2 = arg1;
            var4 = null;
            var1 = var4 != var2;
            if(!var1) { _fun0001_ip = 22; continue _fun0001 }
 12:
            var3 = var2.expires_at;
            var1 = var4 != var3;
 22:
            if(!var1) { _fun0001_ip = 69; continue _fun0001 }
 25:
            var4 = global;
            var5 = var4.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            var5 = var4.Date;
            var4 = var5.parse;
            var2 = var2.expires_at;
            var2 = var4.bind(var5)(var2);
            var1 = var3 > var2;
 69:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function useDiscountOffer(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 5;
            var2 = var8[var3];
            var6 = undefined;
            var10 = var7.bind(var6)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getUserDiscountOffer;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var9.bind(var10)(var5, var2);
            var _closure2_slot1 = var2;
            var10 = _closure1_slot3;
            var9 = var10.useState;
            var5 = _closure1_slot11;
            var5 = var5.bind(var6)(var2);
            var10 = var9.bind(var10)(var5);
            var9 = _closure1_slot2;
            var5 = 2;
            var10 = var9.bind(var6)(var10, var5);
            var5 = 0;
            var5 = var10[var5];
            var _closure2_slot2 = var5;
            var9 = 1;
            var9 = var10[var9];
            var _closure2_slot3 = var9;
            var3 = var8[var3];
            var8 = var7.bind(var6)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
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
            var3 = var7.bind(var8)(var6, var3);
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var4 = new Array(2);
            var4[0] = var5;
            var4[1] = var2;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 29; continue _fun0003 }
 15:
                    var2 = _closure2_slot1;
                    var2 = var2.expires_at;
                    if(!(var3 == var2)) { _fun0003_ip = 33; continue _fun0003 }
 29:
                    var2 = undefined;
                    return var2;
 33:
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
 0:
                            var1 = _closure2_slot1;
                            var1 = var1.expires_at;
                            var3 = null;
                            var1 = var3 != var1;
                            var4 = 0;
                            if(!var1) { _fun0004_ip = 72; continue _fun0004 }
 24:
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
 72:
                            var2 = _closure3_slot0;
                            if(!(var3 != var2)) { _fun0004_ip = 105; continue _fun0004 }
 83:
                            var3 = _closure3_slot0;
                            var2 = var3.start;
                            var1 = function() {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                    var2 = _closure2_slot2;
                                    if(var2) { _fun0005_ip = 44; continue _fun0005 }
 10:
                                    var4 = _closure1_slot11;
                                    var2 = _closure2_slot1;
                                    var3 = undefined;
                                    var2 = var4.bind(var3)(var2);
                                    if(!var2) { _fun0005_ip = 44; continue _fun0005 }
 31:
                                    var2 = _closure2_slot3;
                                    var1 = true;
                                    var1 = var2.bind(var3)(var1);
                                    _fun0005_ip = 57; continue _fun0005;
 44:
                                    var2 = _closure3_slot1;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
 57:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var4, var1);
 105:
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
            var1 = var6.bind(var7)(var1, var4);
            var1 = null;
            if(var5) { _fun0002_ip = 211; continue _fun0002 }
 197:
            if(!var3) { _fun0002_ip = 208; continue _fun0002 }
 200:
            var3 = arg2;
            var1 = null;
            if(!var3) { _fun0002_ip = 211; continue _fun0002 }
 208:
            var1 = var2;
 211:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
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
    var9 = var6.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID;
    var _closure1_slot6 = var9;
    var9 = var6.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
    var _closure1_slot7 = var9;
    var9 = var6.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID;
    var _closure1_slot8 = var9;
    var9 = var6.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID;
    var _closure1_slot9 = var9;
    var6 = var6.SubscriptionPlanInfo;
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/hooks/usePremiumDiscountOffer.tsx';
    var6 = var7.bind(var8)(var6);
    var3['hasUserDiscountExpired'] = var5;
    var5 = function discountOfferHasTier(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var2 = null;
            var1 = var2 != var3;
            if(!var1) { _fun0006_ip = 94; continue _fun0006 }
 12:
            var4 = global;
            var4 = var4.Set;
            var3 = var3.discount;
            var5 = var2 == var3;
            var2 = undefined;
            if(var5) { _fun0006_ip = 58; continue _fun0006 }
 35:
            var6 = var3.plan_ids;
            var5 = var6.map;
            var3 = function(arg1) {
                var2 = _closure1_slot10;
                var1 = arg1;
                var1 = var2[var1];
                var1 = var1.skuId;
                return var1;
            };
            var2 = var5.bind(var6)(var3);
 58:
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var8 = var3;
            var7 = var2;
            var2 = new var8[var4](var7, var6);
            var4 = var2 instanceof Object ? var2 : var3;
            var3 = var4.has;
            var2 = arg2;
            var1 = var3.bind(var4)(var2);
 94:
            return var1;
        }
    };
    var3['discountOfferHasTier'] = var5;
    var3['useDiscountOffer'] = var4;
    var2 = function usePremiumDiscountOffer() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = _closure1_slot5;
            var2 = var3.canFractionalPremiumUserUseOffer;
            var7 = var2.bind(var3)();
            var6 = _closure1_slot12;
            var2 = _closure1_slot8;
            var3 = undefined;
            var5 = var6.bind(var3)(var2, var7);
            var2 = _closure1_slot9;
            var4 = var6.bind(var3)(var2, var7);
            var2 = _closure1_slot6;
            var2 = var6.bind(var3)(var2, var7);
            var1 = _closure1_slot7;
            var1 = var6.bind(var3)(var1, var7);
            var3 = null;
            if(!(var3 != var5)) { _fun0007_ip = 72; continue _fun0007 }
 69:
            var4 = var5;
 72:
            if(!(var3 != var4)) { _fun0007_ip = 79; continue _fun0007 }
 76:
            var2 = var4;
 79:
            if(!(var3 != var2)) { _fun0007_ip = 86; continue _fun0007 }
 83:
            var1 = var2;
 86:
            return var1;
        }
    };
    var3['usePremiumDiscountOffer'] = var2;
    return var1;
})();