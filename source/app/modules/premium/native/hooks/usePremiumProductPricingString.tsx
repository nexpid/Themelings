// app/modules/premium/native/hooks/usePremiumProductPricingString.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/hooks/usePremiumProductPricingString.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumProductPricingString(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var4 = var6[var2];
            var2 = undefined;
            var9 = var5.bind(var2)(var4);
            var8 = var9.getPlanIdForPremiumType;
            var7 = arg1;
            var4 = arg2;
            var8 = var8.bind(var9)(var7, var4);
            var4 = 2;
            var4 = var6[var4];
            var7 = var5.bind(var2)(var4);
            var4 = var7.getProductIdForGift;
            var4 = var4.bind(var7)(var8);
            var _closure2_slot0 = var4;
            var4 = 3;
            var4 = var6[var4];
            var5 = var5.bind(var2)(var4);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3, var1);
            var1 = null;
            var4 = var1 == var3;
            if(var4) { _fun0001_ip = 129; continue _fun0001 }
 123:
            var2 = var3.priceString;
 129:
            var3 = var1 != var2;
            var1 = '$...';
            if(!var3) { _fun0001_ip = 145; continue _fun0001 }
 142:
            var1 = var2;
 145:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();