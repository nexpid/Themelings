// app/modules/premium/PremiumSubscriptionOfferUtil.tsx
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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var8 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID;
    var _closure1_slot6 = var5;
    var5 = var4.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID;
    var _closure1_slot7 = var5;
    var5 = var4.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID;
    var _closure1_slot8 = var5;
    var5 = var4.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID;
    var _closure1_slot9 = var5;
    var5 = var4.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID;
    var _closure1_slot10 = var5;
    var5 = var4.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
    var _closure1_slot11 = var5;
    var5 = var4.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID;
    var _closure1_slot12 = var5;
    var4 = var4.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID;
    var _closure1_slot13 = var4;
    var4 = function useHasDiscountApplied() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var3.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var6)(var3, var1);
            var1 = null;
            var6 = var1 == var3;
            var4 = undefined;
            if(var6) { _fun0004_ip = 89; continue _fun0004 }
 66:
            var3 = var3.metadata;
            var6 = var1 == var3;
            var4 = undefined;
            if(var6) { _fun0004_ip = 89; continue _fun0004 }
 81:
            var4 = var3.active_discount_expires_at;
 89:
            var1 = var1 != var4;
            if(!var1) { _fun0004_ip = 156; continue _fun0004 }
 96:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 8;
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
 156:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/PremiumSubscriptionOfferUtil.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useIsInPremiumOfferExperience() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var3 = undefined;
            var4 = var6.bind(var3)(var1);
            var1 = var4.usePremiumTrialOffer;
            var1 = var1.bind(var4)();
            var4 = 5;
            var4 = var7[var4];
            var5 = var6.bind(var3)(var4);
            var4 = var5.useHasActiveTrial;
            var5 = var4.bind(var5)();
            var4 = 6;
            var4 = var7[var4];
            var6 = var6.bind(var3)(var4);
            var4 = var6.usePremiumDiscountOffer;
            var4 = var4.bind(var6)();
            var2 = _closure1_slot14;
            var2 = var2.bind(var3)();
            var3 = null;
            var1 = var3 != var1;
            if(var1) { _fun0005_ip = 99; continue _fun0005 }
 96:
            var1 = var5;
 99:
            if(var1) { _fun0005_ip = 106; continue _fun0005 }
 102:
            var1 = var3 != var4;
 106:
            if(var1) { _fun0005_ip = 112; continue _fun0005 }
 109:
            var1 = var2;
 112:
            return var1;
        }
    };
    var3['useIsInPremiumOfferExperience'] = var5;
    var3['useHasDiscountApplied'] = var4;
    var4 = function() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var5.bind(var6)(var4, var2);
            var5 = null;
            var6 = var5 == var4;
            var2 = undefined;
            if(var6) { _fun0006_ip = 89; continue _fun0006 }
 66:
            var4 = var4.metadata;
            var5 = var5 == var4;
            var2 = undefined;
            if(var5) { _fun0006_ip = 89; continue _fun0006 }
 81:
            var2 = var4.active_discount_id;
 89:
            var4 = _closure1_slot8;
            if(!(var4 !== var2)) { _fun0006_ip = 245; continue _fun0006 }
 100:
            var4 = _closure1_slot10;
            if(!(var4 !== var2)) { _fun0006_ip = 245; continue _fun0006 }
 111:
            var4 = _closure1_slot9;
            if(!(var4 !== var2)) { _fun0006_ip = 224; continue _fun0006 }
 119:
            var4 = _closure1_slot12;
            if(!(var4 !== var2)) { _fun0006_ip = 224; continue _fun0006 }
 127:
            var4 = _closure1_slot13;
            if(!(var4 !== var2)) { _fun0006_ip = 224; continue _fun0006 }
 135:
            var4 = _closure1_slot11;
            if(!(var4 !== var2)) { _fun0006_ip = 203; continue _fun0006 }
 143:
            var4 = _closure1_slot6;
            if(!(var4 !== var2)) { _fun0006_ip = 182; continue _fun0006 }
 151:
            var3 = _closure1_slot7;
            if(!(var3 !== var2)) { _fun0006_ip = 161; continue _fun0006 }
 159:
            return var1;
 161:
            var1 = {'duration': 1, 'percentage': 25};
            var1['discountId'] = var2;
            return var1;
 182:
            var1 = {'duration': 1, 'percentage': 20};
            var1['discountId'] = var2;
            return var1;
 203:
            var1 = {'duration': 1, 'percentage': 40};
            var1['discountId'] = var2;
            return var1;
 224:
            var1 = {'duration': 3, 'percentage': 30};
            var1['discountId'] = var2;
            return var1;
 245:
            var1 = {'duration': 1, 'percentage': 30};
            var1['discountId'] = var2;
            return var1;
        }
    };
    var3['useActiveDiscountInfo'] = var4;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var13 = _closure1_slot4;
            var2 = var13.useState;
            var5 = false;
            var2 = var2.bind(var13)(var5);
            var11 = _closure1_slot3;
            var6 = undefined;
            var10 = 2;
            var2 = var11.bind(var6)(var2, var10);
            var3 = 0;
            var8 = var2[var3];
            var9 = 1;
            var2 = var2[var9];
            var _closure2_slot0 = var2;
            var2 = var13.useState;
            var2 = var2.bind(var13)(var5);
            var5 = var11.bind(var6)(var2, var10);
            var2 = var5[var3];
            var7 = var5[var9];
            var _closure2_slot1 = var7;
            var12 = var13.useState;
            var5 = null;
            var5 = var12.bind(var13)(var5);
            var5 = var11.bind(var6)(var5, var10);
            var3 = var5[var3];
            var5 = var5[var9];
            var _closure2_slot2 = var5;
            var5 = arg1;
            if(var5) { _fun0007_ip = 220; continue _fun0007 }
 117:
            var5 = function onFetchComplete() {
                var4 = _closure2_slot0;
                var1 = undefined;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot1;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var _closure2_slot3 = var5;
            var5 = var2;
            if(var5) { _fun0007_ip = 135; continue _fun0007 }
 132:
            var5 = var8;
 135:
            if(var5) { _fun0007_ip = 206; continue _fun0007 }
 138:
            var5 = true;
            var5 = var7.bind(var6)(var5);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.fetchChurnDiscountOffer;
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
 206:
            var1 = {};
            var1['churnUserDiscountOffer'] = var3;
            var1['isFetchingChurnDiscountOffer'] = var2;
            return var1;
 220:
            var1 = {};
            var1['churnUserDiscountOffer'] = var3;
            var1['isFetchingChurnDiscountOffer'] = var2;
            return var1;
        }
    };
    var3['useFetchChurnUserDiscountOffer'] = var4;
    var4 = function() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var4.bind(var2)(var3);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var5.bind(var6)(var4, var3);
            var1 = _closure1_slot14;
            var2 = var1.bind(var2)();
            var3 = null;
            var1 = var3 !== var4;
            if(!var1) { _fun0008_ip = 80; continue _fun0008 }
 72:
            var1 = var4.hasPremiumNitroMonthly;
 80:
            var3 = var3 == var4;
            if(var3) { _fun0008_ip = 96; continue _fun0008 }
 87:
            var4 = var4.hasActiveTrial;
            var3 = !var4;
 96:
            if(!var1) { _fun0008_ip = 105; continue _fun0008 }
 99:
            var3 = !var3;
            var1 = !var3;
 105:
            if(!var1) { _fun0008_ip = 111; continue _fun0008 }
 108:
            var1 = !var2;
 111:
            return var1;
        }
    };
    var3['useShouldFetchChurnOffer'] = var4;
    var4 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = _closure1_slot15;
            var1 = arg1;
            var1 = var1.invoiceItems;
            var6 = undefined;
            var5 = var2.bind(var6)(var1);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var1 = null;
            var4 = var3;
            if(var2) { _fun0009_ip = 181; continue _fun0009 }
 45:
            var2 = var4.value;
            var9 = var2.discounts;
            var3 = var9.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.InvoiceDiscountTypes;
                var1 = var1.SUBSCRIPTION_PLAN;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var3.bind(var9)(var2);
            if(!(var1 != var3)) { _fun0009_ip = 98; continue _fun0009 }
 76:
            var9 = var3.discount_id;
            var2 = _closure1_slot8;
            if(!(var2 !== var9)) { _fun0009_ip = 148; continue _fun0009 }
 90:
            var2 = _closure1_slot9;
            if(!(var2 !== var9)) { _fun0009_ip = 115; continue _fun0009 }
 98:
            var9 = var5.bind(var6)();
            var2 = var9.done;
            var4 = var9;
            if(var2) { _fun0009_ip = 181; continue _fun0009 }
 113:
            _fun0009_ip = 45; continue _fun0009;
 115:
            var2 = {};
            var4 = 3;
            var2['duration'] = var4;
            var4 = var3.percentage_amount;
            var2['percentage'] = var4;
            var4 = var3.discount_id;
            var2['discountId'] = var4;
            return var2;
 148:
            var2 = {};
            var4 = 1;
            var2['duration'] = var4;
            var4 = var3.percentage_amount;
            var2['percentage'] = var4;
            var3 = var3.discount_id;
            var2['discountId'] = var3;
            return var2;
 181:
            return var1;
        }
    };
    var3['renewalInvoiceChurnDiscountInfo'] = var4;
    var2 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
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