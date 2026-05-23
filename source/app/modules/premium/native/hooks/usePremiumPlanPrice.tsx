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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 10;
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
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var14 = 3;
            var2 = var5[var14];
            var8 = undefined;
            var9 = var11.bind(var8)(var2);
            var7 = var9.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getPremiumSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var7.bind(var9)(var3, var2);
            var3 = 4;
            var3 = var5[var3];
            var3 = var11.bind(var8)(var3);
            var9 = var3.NitroACOMSubscriptionExperiment;
            var7 = var9.useConfig;
            var3 = {};
            var10 = 'usePremiumPlanPrice';
            var3['location'] = var10;
            var3 = var7.bind(var9)(var3);
            var3 = var3.enabled;
            var10 = _closure1_slot1;
            var7 = 5;
            var7 = var5[var7];
            var9 = var10.bind(var8)(var7);
            var7 = var9.useNativeIAPPayments;
            var7 = var7.bind(var9)();
            var9 = var7.storeFront;
            var7 = var5[var14];
            var15 = var11.bind(var8)(var7);
            var13 = var15.useStateFromStores;
            var7 = _closure1_slot3;
            var12 = new Array(1);
            var12[0] = var7;
            var11 = new Array(1);
            var11[0] = var1;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot3;
                    var3 = var4.get;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var7 = var13.bind(var15)(var12, var7, var11);
            var11 = 6;
            var5 = var5[var11];
            var5 = var10.bind(var8)(var5);
            var7 = var5.bind(var8)(var7, var9);
            var5 = var7.price;
            var10 = var7.priceState;
            var7 = null;
            var12 = var7 != var1;
            var16 = null;
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 7;
            var12 = var15[var12];
            var12 = var13.bind(var8)(var12);
            var12 = var12.BasePlanIdToProductId;
            var16 = var12[var1];
case 4:
            var _closure2_slot1 = var16;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var14];
            var15 = var13.bind(var8)(var12);
            var14 = var15.useStateFromStores;
            var12 = _closure1_slot5;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = new Array(1);
            var12[0] = var16;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                    var4 = _closure1_slot5;
                    var3 = var4.getProduct;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var4 = var14.bind(var15)(var13, var4, var12);
            var12 = var7 == var1;
            var1 = null;
            if(var12) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 8;
            var12 = var14[var12];
            var13 = var13.bind(var8)(var12);
            var12 = var13.isIOS;
            var12 = var12.bind(var13)();
            if(!var12) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var12 = var7 == var2;
            var3 = undefined;
            if(var12) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var2.isACOM;
case 13:
            var2 = true;
            if(!(var2 !== var3)) { _fun0001_ip = 11; continue _fun0001 }
case 9:
            var3 = var7 != var4;
            var2 = null;
            if(!var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = {};
            var12 = var4.price;
            var3['price'] = var12;
            var12 = var4.currencyCode;
            var3['currency'] = var12;
            var13 = var7 == var9;
            var12 = undefined;
            if(var13) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = var9.country;
case 17:
            if(!(var7 == var12)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = var4.countryCode;
case 19:
            var3['countryCode'] = var12;
            var4 = var4.priceString;
            var3['priceString'] = var4;
            var4 = 'IAP';
            var3['source'] = var4;
            var2 = var3;
case 15:
            _fun0001_ip = 21; continue _fun0001;
case 11:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var4.bind(var8)(var3);
            var3 = var3.PriceStates;
            var4 = var3.PRICE_AVAILABLE;
            var3 = null;
            if(!(var10 === var4)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var4 = var7 != var5;
            var3 = null;
            if(!var4) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var4 = {};
            var10 = var5.amount;
            var4['price'] = var10;
            var10 = var5.currency;
            var4['currency'] = var10;
            var10 = var7 == var9;
            var7 = undefined;
            if(var10) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var7 = var9.country;
case 25:
            var4['countryCode'] = var7;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 9;
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
case 22:
            var2 = var3;
case 21:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();