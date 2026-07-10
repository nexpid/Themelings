// app/modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsEligibleForBogoOffer() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var2 = 4;
            var1 = var11[var2];
            var4 = undefined;
            var7 = var10.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getActiveBogoRewardPromotion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var6.bind(var7)(var5, var1);
            var2 = var11[var2];
            var7 = var10.bind(var4)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var7)(var5, var2);
            var2 = 5;
            var2 = var11[var2];
            var5 = var10.bind(var4)(var2);
            var2 = var5.usePremiumTrialOffer;
            var2 = var2.bind(var5)();
            var5 = 6;
            var5 = var11[var5];
            var7 = var10.bind(var4)(var5);
            var5 = var7.usePremiumDiscountOffer;
            var7 = var5.bind(var7)();
            var5 = 7;
            var5 = var11[var5];
            var8 = var10.bind(var4)(var5);
            var5 = var8.useIsPaymentsBlocked;
            var8 = var5.bind(var8)();
            var5 = 8;
            var5 = var11[var5];
            var10 = var10.bind(var4)(var5);
            var5 = var10.useForceUpdate;
            var13 = var5.bind(var10)();
            var _closure2_slot0 = var13;
            var5 = null;
            var10 = var5 != var1;
            var14 = null;
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var1.endDate;
            var10 = var11.valueOf;
            var14 = var10.bind(var11)();
case 2:
            var _closure2_slot1 = var14;
            var12 = _closure1_slot2;
            var11 = var12.useEffect;
            var10 = new Array(2);
            var10[0] = var14;
            var10[1] = var13;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure2_slot1;
                    var3 = global;
                    var6 = var3.Date;
                    var4 = var6.now;
                    var4 = var4.bind(var6)();
                    var5 = var5 - var4;
                    var4 = 0;
                    if(!(!(var5 <= var4))) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var4 = var3.setTimeout;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3, var5);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var11.bind(var12)(var9, var10);
            var1 = var5 != var1;
            if(!var1) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = !var8;
case 7:
            if(!var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var5 == var2;
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var5 == var7;
case 11:
            if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var5 = var5 == var6;
            var4 = undefined;
            if(var5) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = var6.hasPremiumAtLeast;
            var3 = _closure1_slot5;
            var3 = var3.TIER_2;
            var4 = var5.bind(var6)(var3);
case 15:
            var3 = true;
            var2 = var3 !== var4;
case 13:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var3['useIsEligibleForBogoOffer'] = var2;
    return var1;
})();