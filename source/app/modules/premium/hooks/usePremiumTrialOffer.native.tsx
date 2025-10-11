// app/modules/premium/hooks/usePremiumTrialOffer.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function useGetTrialOffer(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 2;
            var2 = var9[var2];
            var7 = undefined;
            var3 = var8.bind(var7)(var2);
            var2 = var3.useTrialOffer;
            var2 = var2.bind(var3)(var6);
            var3 = global;
            var5 = var3.Object;
            var4 = var5.values;
            var3 = 3;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.TrialIdToProductOfferId;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.every;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var1);
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot3 = var7;
    var7 = var4.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot4 = var7;
    var7 = var4.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot5 = var7;
    var7 = var4.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot6 = var7;
    var4 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/usePremiumTrialOffer.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumTrialOffer() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 4;
        var2 = var5[var2];
        var9 = undefined;
        var6 = var4.bind(var9)(var2);
        var5 = var6.useStateFromStoresObject;
        var2 = _closure1_slot2;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var1 = {};
            var3 = _closure1_slot2;
            var2 = var3.isFetchingProducts;
            var2 = var2.bind(var3)();
            var1['isFetchingProducts'] = var2;
            var2 = var3.getOfferIds;
            var2 = var2.bind(var3)();
            var1['offerIds'] = var2;
            return var1;
        };
        var2 = var5.bind(var6)(var4, var2);
        var8 = var2.offerIds;
        var7 = _closure1_slot8;
        var2 = _closure1_slot6;
        var6 = var7.bind(var9)(var2, var8);
        var2 = _closure1_slot3;
        var5 = var7.bind(var9)(var2, var8);
        var2 = _closure1_slot4;
        var4 = var7.bind(var9)(var2, var8);
        var2 = _closure1_slot5;
        var2 = var7.bind(var9)(var2, var8);
        var3 = _closure1_slot7;
        var7 = var7.bind(var9)(var3, var8);
        var3 = new Array(5);
        var3[0] = var7;
        var3[1] = var6;
        var3[2] = var5;
        var3[3] = var4;
        var3[4] = var2;
        var2 = var3.find;
        var1 = function(arg1) {
            var2 = null;
            var1 = arg1;
            var1 = var2 != var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['usePremiumTrialOffer'] = var2;
    return var1;
})();