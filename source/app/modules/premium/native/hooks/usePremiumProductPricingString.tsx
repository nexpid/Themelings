// app/modules/premium/native/hooks/usePremiumProductPricingString.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PRICE_PLACEHOLDER;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/hooks/usePremiumProductPricingString.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumProductPricingString(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var4 = var6[var1];
            var1 = undefined;
            var9 = var5.bind(var1)(var4);
            var8 = var9.getPlanIdForPremiumType;
            var7 = arg1;
            var4 = arg2;
            var8 = var8.bind(var9)(var7, var4);
            var4 = 3;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var4 = var7.getProductIdForGift;
            var4 = var4.bind(var7)(var8);
            var _closure2_slot0 = var4;
            var4 = 4;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var7;
            var3 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4, var3);
            var3 = null;
            var5 = var3 == var4;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4.priceString;
case 2:
            if(!(var3 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot3;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();