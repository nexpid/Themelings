// app/modules/premium/native/hooks/useCheckoutPlanPriceString.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useNativeCheckoutStore;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/hooks/useCheckoutPlanPriceString.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCheckoutPlanPriceString(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var9;
            var5 = null;
            var4 = var5 == var3;
            var6 = undefined;
            var1 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.priceString;
case 2:
            var3 = var5 != var1;
            var5 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var1;
case 4:
            var7 = _closure1_slot3;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.orderRequired;
                return var1;
            };
            var4 = var7.bind(var6)(var3);
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getCheckoutContextRecord;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var7.bind(var6)(var3);
            var _closure2_slot1 = var10;
            var8 = _closure1_slot2;
            var7 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot1;
                    var3 = var4.getAvailablePlanForItems;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 2;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.getSubscriptionItemsForProduct;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var6)(var2);
                    var4 = var3.bind(var4)(var2);
                    var3 = var1 != var4;
                    var2 = null;
                    if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = var4.getPriceString;
                    var2 = var3.bind(var4)();
case 8:
                    return var2;
case 6:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var3);
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.isIOS;
            var3 = var1.bind(var3)();
            var1 = var5;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = false;
            var1 = var5;
            if(!(var3 !== var4)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['useCheckoutPlanPriceString'] = var2;
    return var1;
})();