// app/modules/premium/PremiumSubscriptionOfferUtil.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID;
    var _closure1_slot7 = var5;
    var5 = var4.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID;
    var _closure1_slot8 = var5;
    var5 = var4.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID;
    var _closure1_slot9 = var5;
    var5 = var4.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID;
    var _closure1_slot10 = var5;
    var5 = var4.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID;
    var _closure1_slot11 = var5;
    var5 = var4.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
    var _closure1_slot12 = var5;
    var5 = var4.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID;
    var _closure1_slot13 = var5;
    var4 = var4.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID;
    var _closure1_slot14 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot15 = var4;
    var4 = function useHasDiscountApplied() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var3.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var6)(var3, var1);
            var1 = null;
            var6 = var1 == var3;
            var4 = undefined;
            if(var6) { _fun0001_ip = 91; continue _fun0001 }
 68:
            var3 = var3.metadata;
            var6 = var1 == var3;
            var4 = undefined;
            if(var6) { _fun0001_ip = 91; continue _fun0001 }
 83:
            var4 = var3.active_discount_expires_at;
 91:
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 158; continue _fun0001 }
 98:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var8 = var6.bind(var5)(var3);
            var3 = global;
            var9 = var3.Date;
            var3 = var9.now;
            var3 = var3.bind(var9)();
            var3 = var8.bind(var5)(var3);
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.bind(var5)(var4);
            var1 = var3 <= var2;
 158:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var5 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 125; continue _fun0002 }
 7:
                    var7 = undefined;
                    var5 = undefined;
                    var4 = null;
                    var2 = null;
 15: // try_start_0
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 11;
                    var3 = var9[var3];
                    var3 = var6.bind(var7)(var3);
                    var7 = var3.HTTP;
                    var6 = var7.post;
                    var3 = {};
                    var8 = _closure1_slot15;
                    var8 = var8.CHURN_USER_OFFER;
                    var3['url'] = var8;
                    var8 = true;
                    var3['rejectWithError'] = var8;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=80);
 78:
                    return var3;
 80:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 117; continue _fun0002 }
 86:
                    var6 = var3.body;
                    var6 = var6.offer;
                    var5 = var6;
                    var6 = var4 != var6;
                    var4 = null;
                    if(!var6) { _fun0002_ip = 112; continue _fun0002 }
 109:
                    var4 = var5;
 112:
                    var2 = var4;
 115: // try_end0
                    _fun0002_ip = 122; continue _fun0002;
 117:
                    return var3;
 120: // catch_target0
                    CatchBlockStart(arg_register=2);
 122:
                    return var2;
 125:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var5.bind(var1)();
    var _closure1_slot17 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/PremiumSubscriptionOfferUtil.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useIsInPremiumOfferExperience() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var3 = undefined;
            var4 = var6.bind(var3)(var1);
            var1 = var4.usePremiumTrialOffer;
            var1 = var1.bind(var4)();
            var4 = 7;
            var4 = var7[var4];
            var5 = var6.bind(var3)(var4);
            var4 = var5.useHasActiveTrial;
            var5 = var4.bind(var5)();
            var4 = 8;
            var4 = var7[var4];
            var6 = var6.bind(var3)(var4);
            var4 = var6.usePremiumDiscountOffer;
            var4 = var4.bind(var6)();
            var2 = _closure1_slot16;
            var2 = var2.bind(var3)();
            var3 = null;
            var1 = var3 != var1;
            if(var1) { _fun0003_ip = 99; continue _fun0003 }
 96:
            var1 = var5;
 99:
            if(var1) { _fun0003_ip = 106; continue _fun0003 }
 102:
            var1 = var3 != var4;
 106:
            if(var1) { _fun0003_ip = 112; continue _fun0003 }
 109:
            var1 = var2;
 112:
            return var1;
        }
    };
    var3['useIsInPremiumOfferExperience'] = var5;
    var3['useHasDiscountApplied'] = var4;
    var4 = function() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var5.bind(var6)(var4, var3);
            var5 = null;
            var6 = var5 == var4;
            var3 = undefined;
            if(var6) { _fun0004_ip = 91; continue _fun0004 }
 68:
            var4 = var4.metadata;
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0004_ip = 91; continue _fun0004 }
 83:
            var3 = var4.active_discount_id;
 91:
            var4 = _closure1_slot9;
            if(!(var4 !== var3)) { _fun0004_ip = 224; continue _fun0004 }
 102:
            var4 = _closure1_slot11;
            if(!(var4 !== var3)) { _fun0004_ip = 224; continue _fun0004 }
 110:
            var4 = _closure1_slot10;
            if(!(var4 !== var3)) { _fun0004_ip = 208; continue _fun0004 }
 118:
            var4 = _closure1_slot13;
            if(!(var4 !== var3)) { _fun0004_ip = 208; continue _fun0004 }
 126:
            var4 = _closure1_slot14;
            if(!(var4 !== var3)) { _fun0004_ip = 208; continue _fun0004 }
 134:
            var4 = _closure1_slot12;
            if(!(var4 !== var3)) { _fun0004_ip = 192; continue _fun0004 }
 142:
            var4 = _closure1_slot7;
            if(!(var4 !== var3)) { _fun0004_ip = 176; continue _fun0004 }
 150:
            var2 = _closure1_slot8;
            if(!(var2 !== var3)) { _fun0004_ip = 160; continue _fun0004 }
 158:
            return var1;
 160:
            var1 = {'duration': 1, 'percentage': 25};
            return var1;
 176:
            var1 = {'duration': 1, 'percentage': 20};
            return var1;
 192:
            var1 = {'duration': 1, 'percentage': 40};
            return var1;
 208:
            var1 = {'duration': 3, 'percentage': 30};
            return var1;
 224:
            var1 = {'duration': 1, 'percentage': 30};
            return var1;
        }
    };
    var3['useActiveDiscountInfo'] = var4;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var13 = _closure1_slot5;
            var2 = var13.useState;
            var6 = false;
            var2 = var2.bind(var13)(var6);
            var11 = _closure1_slot3;
            var5 = undefined;
            var10 = 2;
            var2 = var11.bind(var5)(var2, var10);
            var3 = 0;
            var8 = var2[var3];
            var9 = 1;
            var2 = var2[var9];
            var _closure2_slot0 = var2;
            var2 = var13.useState;
            var2 = var2.bind(var13)(var6);
            var6 = var11.bind(var5)(var2, var10);
            var2 = var6[var3];
            var7 = var6[var9];
            var _closure2_slot1 = var7;
            var12 = var13.useState;
            var6 = null;
            var6 = var12.bind(var13)(var6);
            var6 = var11.bind(var5)(var6, var10);
            var3 = var6[var3];
            var6 = var6[var9];
            var _closure2_slot2 = var6;
            var6 = arg1;
            if(var6) { _fun0005_ip = 204; continue _fun0005 }
 117:
            var6 = function onFetchComplete() {
                var4 = _closure2_slot0;
                var1 = undefined;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot1;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var _closure2_slot3 = var6;
            var6 = var2;
            if(var6) { _fun0005_ip = 137; continue _fun0005 }
 134:
            var6 = var8;
 137:
            if(var6) { _fun0005_ip = 190; continue _fun0005 }
 140:
            var6 = true;
            var6 = var7.bind(var5)(var6);
            var4 = _closure1_slot17;
            var6 = var4.bind(var5)();
            var5 = var6.then;
            var4 = function(arg1) {
                var4 = _closure2_slot2;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.catch;
            var1 = function() {
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = var4.bind(var5)(var1);
 190:
            var1 = {};
            var1['churnUserDiscountOffer'] = var3;
            var1['isFetchingChurnDiscountOffer'] = var2;
            return var1;
 204:
            var1 = {};
            var1['churnUserDiscountOffer'] = var3;
            var1['isFetchingChurnDiscountOffer'] = var2;
            return var1;
        }
    };
    var3['useFetchChurnUserDiscountOffer'] = var4;
    var4 = function() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var4.bind(var2)(var3);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var5.bind(var6)(var4, var3);
            var1 = _closure1_slot16;
            var2 = var1.bind(var2)();
            var3 = null;
            var1 = var3 !== var4;
            if(!var1) { _fun0006_ip = 82; continue _fun0006 }
 74:
            var1 = var4.hasPremiumNitroMonthly;
 82:
            var3 = var3 == var4;
            if(var3) { _fun0006_ip = 98; continue _fun0006 }
 89:
            var4 = var4.hasActiveTrial;
            var3 = !var4;
 98:
            if(!var1) { _fun0006_ip = 107; continue _fun0006 }
 101:
            var3 = !var3;
            var1 = !var3;
 107:
            if(!var1) { _fun0006_ip = 113; continue _fun0006 }
 110:
            var1 = !var2;
 113:
            return var1;
        }
    };
    var3['useShouldFetchChurnOffer'] = var4;
    var2 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useIsInReverseTrial;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['useIsNUXEligible'] = var2;
    return var1;
})();