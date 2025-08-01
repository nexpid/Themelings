// app/modules/billing/native/subscription/useStoreFrontPrice.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot3 = var2;
    var2 = {};
    var5 = 'PRICE_AVAILABLE';
    var2['PRICE_AVAILABLE'] = var5;
    var5 = 'SUBSCRIPTION_PLAN_UNAVAILABLE';
    var2['SUBSCRIPTION_PLAN_UNAVAILABLE'] = var5;
    var5 = 'STOREFRONT_UNAVAILABLE';
    var2['STOREFRONT_UNAVAILABLE'] = var5;
    var5 = 'MISMATCHING_COUNTRIES';
    var2['MISMATCHING_COUNTRIES'] = var5;
    var5 = 'COUNTRY_PRICE_UNAVAILABLE';
    var2['COUNTRY_PRICE_UNAVAILABLE'] = var5;
    var _closure1_slot4 = var2;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/billing/native/subscription/useStoreFrontPrice.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useStoreFrontPrice(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var1)) { _fun0001_ip = 213; continue _fun0001 }
 16:
                var1 = _closure2_slot1;
                if(!(var2 != var1)) { _fun0001_ip = 196; continue _fun0001 }
 27:
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 2;
                var1 = var10[var6];
                var7 = undefined;
                var13 = var8.bind(var7)(var1);
                var12 = var13.getCountryPrices;
                var1 = _closure2_slot0;
                var11 = var1.id;
                var9 = _closure1_slot3;
                var5 = var9.MOBILE;
                var5 = var12.bind(var13)(var11, var5);
                var6 = var10[var6];
                var8 = var8.bind(var7)(var6);
                var7 = var8.experimentalGetPrice;
                var6 = var1.id;
                var1 = {};
                var9 = var9.MOBILE;
                var1['purchaseType'] = var9;
                var4 = _closure2_slot1;
                var9 = var4.currency;
                var1['currency'] = var9;
                var1 = var7.bind(var8)(var6, var1);
                var5 = var5.countryCode;
                var4 = var4.country;
                if(!(var5 === var4)) { _fun0001_ip = 181; continue _fun0001 }
 153:
                if(!(var2 != var1)) { _fun0001_ip = 169; continue _fun0001 }
 157:
                var2 = _closure1_slot4;
                var2 = var2.PRICE_AVAILABLE;
                _fun0001_ip = 179; continue _fun0001;
 169:
                var4 = _closure1_slot4;
                var2 = var4.COUNTRY_PRICE_UNAVAILABLE;
 179:
                _fun0001_ip = 191; continue _fun0001;
 181:
                var3 = _closure1_slot4;
                var2 = var3.MISMATCHING_COUNTRIES;
 191:
                var3 = var1;
                _fun0001_ip = 228; continue _fun0001;
 196:
                var1 = _closure1_slot4;
                var2 = var1.STOREFRONT_UNAVAILABLE;
                var3 = undefined;
                _fun0001_ip = 228; continue _fun0001;
 213:
                var1 = _closure1_slot4;
                var2 = var1.SUBSCRIPTION_PLAN_UNAVAILABLE;
                var3 = undefined;
 228:
                var1 = {};
                var1['price'] = var3;
                var1['priceState'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['PriceStates'] = var2;
    return var1;
})();