// app/utils/SubscriptionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
    var5 = function getSubscriptionPlans(arg1) {
        var1 = arg1;
        var3 = var1.items;
        var2 = var3.map;
        var1 = function(arg1) {
            var4 = _closure1_slot5;
            var3 = var4.get;
            var1 = arg1;
            var1 = var1.planId;
            var1 = var3.bind(var4)(var1);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var2 = null;
            var3 = var2 != var1;
            var2 = 'Unable to fetch plan';
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot12 = var5;
    var4 = function subscriptionCanSwitchImmediately(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var5 = arg2;
            var4 = arg3;
            var2 = var1.getCurrentSubscriptionPlanIdForGroup;
            var3 = var2.bind(var1)(var4);
            var2 = var1.type;
            var1 = _closure1_slot7;
            var1 = var1.PREMIUM;
            var1 = var2 === var1;
            if(!var1) { _fun0004_ip = 51; continue _fun0004 }
 45:
            var2 = null;
            var1 = var2 == var3;
 51:
            if(var1) { _fun0004_ip = 175; continue _fun0004 }
 54:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 5;
            var10 = var9[var2];
            var8 = undefined;
            var12 = var7.bind(var8)(var10);
            var10 = null;
            var11 = var10 != var3;
            var10 = 'Current subscription has no plan in group';
            var10 = var12.bind(var8)(var11, var10);
            var2 = var9[var2];
            var7 = var7.bind(var8)(var2);
            var2 = _closure1_slot8;
            var2 = var2.PREMIUM_YEAR_TIER_1;
            var2 = var3 === var2;
            if(!var2) { _fun0004_ip = 134; continue _fun0004 }
 120:
            var6 = _closure1_slot8;
            var6 = var6.PREMIUM_MONTH_TIER_2;
            var2 = var5 === var6;
 134:
            var6 = !var2;
            var2 = 'Unexpected plan switch';
            var2 = var7.bind(var8)(var6, var2);
            var2 = var4.indexOf;
            var3 = var2.bind(var4)(var3);
            var2 = var4.indexOf;
            var2 = var2.bind(var4)(var5);
            var1 = var3 < var2;
 175:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
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
    var _closure1_slot3 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.SubscriptionStatusTypes;
    var _closure1_slot6 = var9;
    var6 = var6.SubscriptionTypes;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.SubscriptionPlans;
    var _closure1_slot8 = var9;
    var6 = var6.SubscriptionPlanInfo;
    var _closure1_slot9 = var6;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/SubscriptionUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getSubscriptionPlans'] = var5;
    var5 = function getSubscriptionSKUs(arg1) {
        var3 = _closure1_slot12;
        var2 = undefined;
        var1 = arg1;
        var3 = var3.bind(var2)(var1);
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.skuId;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getSubscriptionSKUs'] = var5;
    var3['subscriptionCanSwitchImmediately'] = var4;
    var4 = function subscriptionCanDowngrade(arg1, arg2, arg3) {
        var5 = _closure1_slot13;
        var4 = undefined;
        var3 = arg1;
        var2 = arg2;
        var1 = arg3;
        var1 = var5.bind(var4)(var3, var2, var1);
        var1 = !var1;
        return var1;
    };
    var3['subscriptionCanDowngrade'] = var4;
    var4 = function getOrFetchSubscriptionPlan(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var10 = arg1;
            var3 = _closure1_slot5;
            var1 = var3.get;
            var1 = var1.bind(var3)(var10);
            var5 = null;
            if(!(var5 == var1)) { _fun0005_ip = 179; continue _fun0005 }
 29:
            var3 = _closure1_slot9;
            var3 = var3[var10];
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 5;
            var6 = var7[var4];
            var4 = undefined;
            var8 = var8.bind(var4)(var6);
            var6 = var5 != var3;
            var5 = global;
            var5 = var5.HermesInternal;
            var9 = var5.concat;
            var5 = 'Missing hardcoded subscriptionPlan: ';
            var5 = var9.bind(var5)(var10);
            var5 = var8.bind(var4)(var6, var5);
            var6 = _closure1_slot0;
            var5 = 6;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.castPremiumSubscriptionAsSkuId;
            var3 = var3.skuId;
            var5 = var5.bind(var6)(var3);
            var6 = _closure1_slot5;
            var3 = var6.isFetchingForSKU;
            var3 = var3.bind(var6)(var5);
            if(var3) { _fun0005_ip = 179; continue _fun0005 }
 144:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.fetchSubscriptionPlansForSKU;
            var2 = arg2;
            var2 = var3.bind(var4)(var5, var2);
 179:
            return var1;
        }
    };
    var3['getOrFetchSubscriptionPlan'] = var4;
    var4 = function useGetOrFetchSubscriptionPlan(arg1, arg2) {
        var8 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 8;
        var1 = var5[var1];
        var6 = undefined;
        var9 = var4.bind(var6)(var1);
        var5 = var9.useStateFromStoresArray;
        var1 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                var4 = var2 != var3;
                var3 = null;
                if(!var4) { _fun0006_ip = 39; continue _fun0006 }
 18:
                var5 = _closure1_slot5;
                var4 = var5.get;
                var1 = _closure2_slot0;
                var3 = var4.bind(var5)(var1);
 39:
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2 != var3;
                if(!var2) { _fun0006_ip = 78; continue _fun0006 }
 54:
                var5 = _closure1_slot5;
                var4 = var5.isFetchingForSKU;
                var3 = var3.skuId;
                var2 = var4.bind(var5)(var3);
 78:
                var1[1] = var2;
                return var1;
            }
        };
        var5 = var5.bind(var9)(var4, var1);
        var4 = _closure1_slot3;
        var1 = 2;
        var5 = var4.bind(var6)(var5, var1);
        var1 = 0;
        var1 = var5[var1];
        var _closure2_slot2 = var1;
        var4 = 1;
        var6 = var5[var4];
        var _closure2_slot3 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = new Array(4);
        var3[0] = var1;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = _closure2_slot2;
                var4 = null;
                if(!(var4 == var2)) { _fun0007_ip = 169; continue _fun0007 }
 16:
                var2 = _closure2_slot0;
                if(!(var4 != var2)) { _fun0007_ip = 169; continue _fun0007 }
 27:
                var2 = _closure2_slot3;
                if(var2) { _fun0007_ip = 169; continue _fun0007 }
 37:
                var2 = _closure1_slot9;
                var10 = _closure2_slot0;
                var2 = var2[var10];
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 5;
                var5 = var8[var5];
                var7 = undefined;
                var6 = var6.bind(var7)(var5);
                var5 = var4 != var2;
                var4 = global;
                var4 = var4.HermesInternal;
                var9 = var4.concat;
                var4 = 'Missing hardcoded subscriptionPlan: ';
                var4 = var9.bind(var4)(var10);
                var4 = var6.bind(var7)(var5, var4);
                var6 = _closure1_slot0;
                var3 = 7;
                var3 = var8[var3];
                var4 = var6.bind(var7)(var3);
                var3 = var4.fetchSubscriptionPlansForSKU;
                var5 = 6;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.castPremiumSubscriptionAsSkuId;
                var2 = var2.skuId;
                var2 = var5.bind(var6)(var2);
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
 169:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useGetOrFetchSubscriptionPlan'] = var4;
    var4 = function getSubscriptionPauseDurations(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.keys;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 9;
            var2 = var2[var8];
            var7 = undefined;
            var2 = var6.bind(var7)(var2);
            var2 = var2.PauseDuration;
            var5 = var4.bind(var5)(var2);
            var4 = var5.filter;
            var2 = function(arg1) {
                var1 = global;
                var3 = var1.isNaN;
                var4 = var1.Number;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var5 = var3.status;
            var4 = _closure1_slot6;
            var4 = var4.PAUSED;
            if(!(var5 === var4)) { _fun0008_ip = 311; continue _fun0008 }
 93:
            var5 = var3.pauseEndsAt;
            var4 = null;
            if(!(var4 == var5)) { _fun0008_ip = 125; continue _fun0008 }
 105:
            var4 = {};
            var5 = new Array(0);
            var4['durations'] = var5;
            var5 = 0;
            var4['currentDaysPaused'] = var5;
            return var4;
 125:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 10;
            var10 = var6[var4];
            var11 = var5.bind(var7)(var10);
            var10 = var3.currentPeriodStart;
            var11 = var11.bind(var7)(var10);
            var4 = var6[var4];
            var4 = var5.bind(var7)(var4);
            var3 = var3.pauseEndsAt;
            var10 = var4.bind(var7)(var3);
            var4 = var1.Math;
            var3 = var4.round;
            var6 = var10.diff;
            var5 = 'days';
            var1 = true;
            var1 = var6.bind(var10)(var11, var5, var1);
            var3 = var3.bind(var4)(var1);
            var4 = new Array(0);
            var1 = _closure1_slot10;
            var6 = var1.bind(var7)(var2);
            var5 = var6.bind(var7)();
            var1 = var5.done;
            if(var1) { _fun0008_ip = 297; continue _fun0008 }
 236:
            var10 = var5.value;
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var11.bind(var7)(var1);
            var1 = var1.PauseDuration;
            var1 = var1[var10];
            if(!(var1 > var3)) { _fun0008_ip = 282; continue _fun0008 }
 272:
            var1 = var4.push;
            var1 = var1.bind(var4)(var10);
 282:
            var10 = var6.bind(var7)();
            var1 = var10.done;
            var5 = var10;
            if(!var1) { _fun0008_ip = 236; continue _fun0008 }
 297:
            var1 = {};
            var1['durations'] = var4;
            var1['currentDaysPaused'] = var3;
            return var1;
 311:
            var1 = {};
            var1['durations'] = var2;
            var2 = 0;
            var1['currentDaysPaused'] = var2;
            return var1;
        }
    };
    var3['getSubscriptionPauseDurations'] = var4;
    var2 = function didBeginPurchaseFlowOnFractionalPremium(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0009_ip = 48; continue _fun0009 }
 12:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isMoment;
            var1 = var2.bind(var3)(var4);
 48:
            if(!var1) { _fun0009_ip = 91; continue _fun0009 }
 51:
            var3 = var4.isSameOrAfter;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var1 = var3.bind(var4)(var2);
 91:
            return var1;
        }
    };
    var3['didBeginPurchaseFlowOnFractionalPremium'] = var2;
    return var1;
})();