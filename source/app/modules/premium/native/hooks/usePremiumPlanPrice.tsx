// app/modules/premium/native/hooks/usePremiumPlanPrice.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PaymentGateways;
    var _closure1_slot7 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/hooks/usePremiumPlanPrice.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumPlanPrice(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 5;
            var5 = var2[var4];
            var8 = undefined;
            var11 = var10.bind(var8)(var5);
            var9 = var11.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var9.bind(var11)(var7, var5);
            var5 = 6;
            var5 = var2[var5];
            var5 = var10.bind(var8)(var5);
            var9 = var5.NitroACOMSubscriptionExperiment;
            var7 = var9.useConfig;
            var5 = {};
            var11 = 'usePremiumPlanPrice';
            var5['location'] = var11;
            var5 = var7.bind(var9)(var5);
            var12 = var5.enabled;
            var7 = _closure1_slot1;
            var5 = 7;
            var5 = var2[var5];
            var9 = var7.bind(var8)(var5);
            var5 = var9.useNativeIAPPayments;
            var5 = var5.bind(var9)();
            var9 = var5.storeFront;
            var _closure2_slot1 = var9;
            var5 = var2[var4];
            var15 = var10.bind(var8)(var5);
            var14 = var15.useStateFromStores;
            var5 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var5;
            var10 = new Array(1);
            var10[0] = var1;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot4;
                    var3 = var4.get;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var5 = var14.bind(var15)(var11, var5, var10);
            var11 = 8;
            var2 = var2[var11];
            var2 = var7.bind(var8)(var2);
            var2 = var2.bind(var8)(var5, var9);
            var5 = var2.price;
            var10 = var2.priceState;
            var _closure2_slot2 = var10;
            var7 = null;
            var14 = var7 != var1;
            var2 = null;
            if(!var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 9;
            var14 = var16[var14];
            var14 = var15.bind(var8)(var14);
            var14 = var14.BasePlanIdToProductId;
            var2 = var14[var1];
case 4:
            var _closure2_slot3 = var2;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = var15[var4];
            var18 = var14.bind(var8)(var4);
            var17 = var18.useStateFromStores;
            var4 = _closure1_slot6;
            var16 = new Array(1);
            var16[0] = var4;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                    var4 = _closure1_slot6;
                    var3 = var4.getProduct;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var4 = var17.bind(var18)(var16, var2, var4);
            var2 = 10;
            var2 = var15[var2];
            var14 = var14.bind(var8)(var2);
            var2 = var14.isIOS;
            var2 = var2.bind(var14)();
            if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            if(var12) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var15 = var7 == var13;
            var14 = undefined;
            if(var15) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var14 = var13.isACOM;
case 11:
            var13 = true;
            var12 = var13 === var14;
case 9:
            var2 = var12;
case 7:
            var _closure2_slot4 = var2;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 11;
            var12 = var14[var12];
            var13 = var13.bind(var8)(var12);
            var12 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var6 = 500;
                var5 = 10000;
                var7 = var2;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var15 = var13.bind(var8)(var12);
            var _closure2_slot5 = var15;
            var14 = _closure1_slot3;
            var13 = var14.useEffect;
            var12 = new Array(4);
            var12[0] = var2;
            var12[1] = var10;
            var12[2] = var9;
            var12[3] = var15;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot4;
                    if(!var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var6 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var8 = 8;
                    var5 = var4[var8];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var5 = var5.PriceStates;
                    var5 = var5.PRICE_AVAILABLE;
                    if(!(var6 === var5)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var6 = _closure2_slot5;
                    var5 = var6.succeed;
                    var5 = var5.bind(var6)();
                    _fun0004_ip = 13; continue _fun0004;
case 15:
                    var6 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var7.bind(var4)(var5);
                    var5 = var5.PriceStates;
                    var5 = var5.MISMATCHING_COUNTRIES;
                    if(!(var6 !== var5)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var6 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var7.bind(var4)(var5);
                    var5 = var5.PriceStates;
                    var5 = var5.COUNTRY_PRICE_UNAVAILABLE;
                    if(!(var6 === var5)) { _fun0004_ip = 13; continue _fun0004 }
case 17:
                    var6 = _closure2_slot1;
                    var5 = null;
                    var6 = var5 == var6;
                    var4 = undefined;
                    if(var6) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var6 = _closure2_slot1;
                    var4 = var6.country;
case 19:
                    if(!(var5 != var4)) { _fun0004_ip = 13; continue _fun0004 }
case 21:
                    var4 = _closure2_slot5;
                    var4 = var4.pending;
                    if(var4) { _fun0004_ip = 13; continue _fun0004 }
case 22:
                    var4 = _closure1_slot4;
                    var3 = var4.isFetchingForPremiumSKUs;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0004_ip = 13; continue _fun0004 }
case 23:
                    var3 = _closure2_slot5;
                    var4 = var3.fails;
                    var3 = 3;
                    if(!(!(var4 >= var3))) { _fun0004_ip = 13; continue _fun0004 }
case 24:
                    var3 = _closure2_slot1;
                    var3 = var3.country;
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot5;
                    var3 = var4.fail;
                    var2 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = _closure1_slot4;
                            var2 = var3.isFetchingForPremiumSKUs;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 13;
                            var2 = var4[var2];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.fetchPremiumSubscriptionPlans;
                            var9 = _closure3_slot0;
                            var1 = _closure1_slot7;
                            var6 = var1.APPLE_ADVANCED_COMMERCE;
                            var10 = var4;
                            var8 = undefined;
                            var7 = undefined;
                            var3 = var10[var3](var9, var8, var7, var6, var5);
                            var2 = var3.catch;
                            var1 = function() {
                                var1 = undefined;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
case 25:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var1 = function() {
                        var2 = _closure2_slot5;
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var13.bind(var14)(var3, var12);
            var3 = var7 == var1;
            var1 = null;
            if(var3) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            if(var2) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var3 = var7 != var4;
            var2 = null;
            if(!var3) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var3 = {};
            var12 = var4.price;
            var3['price'] = var12;
            var12 = var4.currencyCode;
            var3['currency'] = var12;
            var13 = var7 == var9;
            var12 = undefined;
            if(var13) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var12 = var9.country;
case 33:
            if(!(var7 == var12)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var12 = var4.countryCode;
case 35:
            var3['countryCode'] = var12;
            var4 = var4.priceString;
            var3['priceString'] = var4;
            var4 = 'IAP';
            var3['source'] = var4;
            var2 = var3;
case 31:
            _fun0001_ip = 37; continue _fun0001;
case 29:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var4.bind(var8)(var3);
            var3 = var3.PriceStates;
            var4 = var3.PRICE_AVAILABLE;
            var3 = null;
            if(!(var10 === var4)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var4 = var7 != var5;
            var3 = null;
            if(!var4) { _fun0001_ip = 38; continue _fun0001 }
case 40:
            var4 = {};
            var10 = var5.amount;
            var4['price'] = var10;
            var10 = var5.currency;
            var4['currency'] = var10;
            var10 = var7 == var9;
            var7 = undefined;
            if(var10) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var7 = var9.country;
case 41:
            var4['countryCode'] = var7;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 14;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.formatPrice;
            var6 = var5.amount;
            var5 = var5.currency;
            var5 = var7.bind(var8)(var6, var5);
            var4['priceString'] = var5;
            var5 = 'API';
            var4['source'] = var5;
            var3 = var4;
case 38:
            var2 = var3;
case 37:
            var1 = var2;
case 27:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();