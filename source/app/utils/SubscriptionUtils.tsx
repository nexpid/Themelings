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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
case 0:
            var1 = arg1;
            var5 = arg2;
            var4 = arg3;
            var2 = var1.getCurrentSubscriptionPlanIdForGroup;
            var3 = var2.bind(var1)(var4);
            var2 = var1.type;
            var1 = _closure1_slot7;
            var1 = var1.PREMIUM;
            var1 = var2 === var1;
            if(!var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = null;
            var1 = var2 == var3;
case 36:
            if(var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
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
            if(!var2) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var6 = _closure1_slot8;
            var6 = var6.PREMIUM_MONTH_TIER_2;
            var2 = var5 === var6;
case 40:
            var6 = !var2;
            var2 = 'Unexpected plan switch';
            var2 = var7.bind(var8)(var6, var2);
            var2 = var4.indexOf;
            var3 = var2.bind(var4)(var3);
            var2 = var4.indexOf;
            var2 = var2.bind(var4)(var5);
            var1 = var3 < var2;
case 38:
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
case 0:
            var10 = arg1;
            var3 = _closure1_slot5;
            var1 = var3.get;
            var1 = var1.bind(var3)(var10);
            var5 = null;
            if(!(var5 == var1)) { _fun0005_ip = 16; continue _fun0005 }
case 42:
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
            if(var3) { _fun0005_ip = 16; continue _fun0005 }
case 43:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.fetchSubscriptionPlansForSKU;
            var2 = arg2;
            var2 = var3.bind(var4)(var5, var2);
case 16:
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
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                var4 = var2 != var3;
                var3 = null;
                if(!var4) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var5 = _closure1_slot5;
                var4 = var5.get;
                var1 = _closure2_slot0;
                var3 = var4.bind(var5)(var1);
case 44:
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2 != var3;
                if(!var2) { _fun0006_ip = 46; continue _fun0006 }
case 39:
                var5 = _closure1_slot5;
                var4 = var5.isFetchingForSKU;
                var3 = var3.skuId;
                var2 = var4.bind(var5)(var3);
case 46:
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
case 0:
                var2 = _closure2_slot2;
                var4 = null;
                if(!(var4 == var2)) { _fun0007_ip = 17; continue _fun0007 }
case 47:
                var2 = _closure2_slot0;
                if(!(var4 != var2)) { _fun0007_ip = 17; continue _fun0007 }
case 48:
                var2 = _closure2_slot3;
                if(var2) { _fun0007_ip = 17; continue _fun0007 }
case 49:
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
case 17:
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
case 0:
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
            if(!(var5 === var4)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
            var5 = var3.pauseEndsAt;
            var4 = null;
            if(!(var4 == var5)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            var4 = {};
            var5 = new Array(0);
            var4['durations'] = var5;
            var5 = 0;
            var4['currentDaysPaused'] = var5;
            return var4;
case 52:
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
            if(var1) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var10 = var5.value;
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var11.bind(var7)(var1);
            var1 = var1.PauseDuration;
            var1 = var1[var10];
            if(!(var1 > var3)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var1 = var4.push;
            var1 = var1.bind(var4)(var10);
case 56:
            var10 = var6.bind(var7)();
            var1 = var10.done;
            var5 = var10;
            if(!var1) { _fun0008_ip = 55; continue _fun0008 }
case 54:
            var1 = {};
            var1['durations'] = var4;
            var1['currentDaysPaused'] = var3;
            return var1;
case 50:
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
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isMoment;
            var1 = var2.bind(var3)(var4);
case 58:
            if(!var1) { _fun0009_ip = 60; continue _fun0009 }
case 36:
            var3 = var4.isSameOrAfter;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var1 = var3.bind(var4)(var2);
case 60:
            return var1;
        }
    };
    var3['didBeginPurchaseFlowOnFractionalPremium'] = var2;
    return var1;
})();