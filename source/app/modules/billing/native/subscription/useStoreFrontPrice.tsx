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
case 0:
                var1 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot1;
                if(!(var2 != var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = _closure2_slot0;
                var6 = var1.prices;
                var4 = var2 == var6;
                var1 = undefined;
                var3 = undefined;
                if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = _closure1_slot3;
                var4 = var4.MOBILE;
                var3 = var6[var4];
case 6:
                if(!(var2 != var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 2;
                var3 = var9[var7];
                var13 = var8.bind(var1)(var3);
                var12 = var13.getCountryPrices;
                var3 = _closure2_slot0;
                var11 = var3.id;
                var10 = _closure1_slot3;
                var6 = var10.MOBILE;
                var6 = var12.bind(var13)(var11, var6);
                var7 = var9[var7];
                var9 = var8.bind(var1)(var7);
                var8 = var9.experimentalGetPrice;
                var7 = var3.id;
                var3 = {};
                var10 = var10.MOBILE;
                var3['purchaseType'] = var10;
                var5 = _closure2_slot1;
                var10 = var5.currency;
                var3['currency'] = var10;
                var3 = var8.bind(var9)(var7, var3);
                var6 = var6.countryCode;
                var5 = var5.country;
                if(!(var6 === var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                if(!(var2 != var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var2 = _closure1_slot4;
                var2 = var2.PRICE_AVAILABLE;
                _fun0001_ip = 14; continue _fun0001;
case 12:
                var5 = _closure1_slot4;
                var2 = var5.COUNTRY_PRICE_UNAVAILABLE;
case 14:
                _fun0001_ip = 15; continue _fun0001;
case 10:
                var4 = _closure1_slot4;
                var2 = var4.MISMATCHING_COUNTRIES;
case 15:
                _fun0001_ip = 16; continue _fun0001;
case 8:
                var4 = _closure1_slot4;
                var2 = var4.COUNTRY_PRICE_UNAVAILABLE;
                var3 = undefined;
                _fun0001_ip = 16; continue _fun0001;
case 4:
                var1 = _closure1_slot4;
                var2 = var1.STOREFRONT_UNAVAILABLE;
                var3 = undefined;
                _fun0001_ip = 16; continue _fun0001;
case 2:
                var1 = _closure1_slot4;
                var2 = var1.SUBSCRIPTION_PLAN_UNAVAILABLE;
                var3 = undefined;
case 16:
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