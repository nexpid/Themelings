// app/modules/premium/hooks/usePremiumDiscountOffer.native.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/usePremiumDiscountOffer.native.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumDiscountOffer() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var3 = var4[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var3);
        var6 = var7.useStateFromStoresObject;
        var3 = _closure1_slot3;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var1 = {};
            var3 = _closure1_slot3;
            var2 = var3.isFetchingProducts;
            var2 = var2.bind(var3)();
            var1['isFetchingProducts'] = var2;
            var2 = var3.getOfferIds;
            var2 = var2.bind(var3)();
            var1['offerIds'] = var2;
            return var1;
        };
        var3 = var6.bind(var7)(var5, var3);
        var3 = var3.offerIds;
        var2 = _closure1_slot4;
        var1 = function useGetDiscountOffer(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = arg1;
                var1 = arg2;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 2;
                var2 = var9[var2];
                var8 = undefined;
                var2 = var3.bind(var8)(var2);
                var3 = var2.bind(var8)(var6);
                var2 = global;
                var5 = var2.Object;
                var2 = var5.values;
                var7 = _closure1_slot0;
                var1 = 3;
                var1 = var9[var1];
                var1 = var7.bind(var8)(var1);
                var1 = var1.DiscountIdToProductOfferId;
                var1 = var1[var6];
                var6 = var2.bind(var5)(var1);
                var7 = var6.length;
                var5 = 0;
                var1 = null;
                if(!(var5 !== var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var6.every;
                var4 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var2 = null;
                if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = var3;
case 4:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = var1.bind(var4)(var2, var3);
        return var1;
    };
    var3['usePremiumDiscountOffer'] = var2;
    return var1;
})();