// app/modules/premium/PremiumSubscription.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var5 = function getNonePlanIdForIntervalType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 1;
case 2:
            var _closure2_slot1 = var2;
            var2 = global;
            var5 = var2.Object;
            var4 = var5.keys;
            var3 = _closure1_slot1;
            var4 = var4.bind(var5)(var3);
            var3 = var4.find;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = var2.skuId;
                    var3 = _closure1_slot2;
                    var3 = var3.NONE;
                    var1 = var4 === var3;
case 4:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var2.interval;
                    var3 = _closure2_slot0;
                    var1 = var4 === var3;
case 6:
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = var2.intervalCount;
                    var2 = _closure2_slot1;
                    var1 = var3 === var2;
case 8:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot0;
            var1 = var2.NONE_MONTH;
case 10:
            return var1;
        }
    };
    var _closure1_slot3 = var5;
    var4 = function getBaseSubscriptionItemForSubscriptionItems(arg1) {
        var3 = arg1;
        var2 = var3.find;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure1_slot1;
                var1 = arg1;
                var1 = var1.planId;
                var2 = var2[var1];
                var3 = null;
                var1 = var3 != var2;
                if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var2 = var2.premiumType;
                var1 = var3 != var2;
case 12:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var9 = var6.SubscriptionPlans;
    var _closure1_slot0 = var9;
    var9 = var6.SubscriptionPlanInfo;
    var _closure1_slot1 = var9;
    var6 = var6.PremiumSubscriptionSKUs;
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/PremiumSubscription.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getNonePlanIdForIntervalType'] = var5;
    var5 = function getNonePlanIdForSubscription(arg1) {
        var3 = _closure1_slot1;
        var1 = arg1;
        var4 = var1.items;
        var1 = 0;
        var1 = var4[var1];
        var1 = var1.planId;
        var1 = var3[var1];
        var4 = _closure1_slot3;
        var3 = var1.interval;
        var2 = var1.intervalCount;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['getNonePlanIdForSubscription'] = var5;
    var3['getBaseSubscriptionItemForSubscriptionItems'] = var4;
    var2 = function getBasePlanIdForSubscriptionItems(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var4 = arg2;
            var3 = arg3;
            var5 = _closure1_slot4;
            var2 = undefined;
            var5 = var5.bind(var2)(var7);
            var6 = null;
            if(!(var6 != var5)) { _fun0004_ip = 14; continue _fun0004 }
case 13:
            var5 = var5.planId;
            return var5;
case 14:
            var6 = var7.length;
            var5 = 0;
            if(!(var6 > var5)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var6 = _closure1_slot1;
            var5 = var7[var5];
            var5 = var5.planId;
            var5 = var6[var5];
            var4 = var5.interval;
            var3 = var5.intervalCount;
case 15:
            var1 = _closure1_slot3;
            var1 = var1.bind(var2)(var4, var3);
            return var1;
        }
    };
    var3['getBasePlanIdForSubscriptionItems'] = var2;
    return var1;
})();