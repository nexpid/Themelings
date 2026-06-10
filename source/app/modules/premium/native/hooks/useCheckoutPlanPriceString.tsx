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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useNativeCheckoutStore;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/hooks/useCheckoutPlanPriceString.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCheckoutPlanPriceString(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg2;
            var4 = null;
            var3 = var4 == var1;
            var7 = undefined;
            var2 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.priceString;
case 2:
            var3 = var4 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            var5 = _closure1_slot2;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.getCheckoutContextRecord;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var7)(var3);
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 1;
            var3 = var8[var3];
            var6 = var6.bind(var7)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var4 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var3 = var5.getAvailablePlanForItems;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 2;
            var2 = var8[var2];
            var7 = var6.bind(var7)(var2);
            var6 = var7.getSubscriptionItemsForProduct;
            var2 = arg1;
            var2 = var6.bind(var7)(var2);
            var5 = var3.bind(var5)(var2);
            var2 = var4 != var5;
            var3 = null;
            if(!var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var5.getPriceString;
            var3 = var2.bind(var5)();
case 9:
            var2 = var1;
            if(!(var4 != var3)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var3;
case 11:
            return var2;
case 6:
            return var1;
        }
    };
    var3['useCheckoutPlanPriceString'] = var2;
    return var1;
})();