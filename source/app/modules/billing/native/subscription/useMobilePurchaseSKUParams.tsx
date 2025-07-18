// app/modules/billing/native/subscription/useMobilePurchaseSKUParams.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/subscription/useMobilePurchaseSKUParams.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMobilePurchaseSKUParams(arg1, arg2, arg3) {
        var7 = arg1;
        var8 = arg2;
        var5 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var8;
        var _closure2_slot2 = var5;
        var6 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 1;
        var3 = var4[var3];
        var4 = undefined;
        var3 = var6.bind(var4)(var3);
        var6 = var3.bind(var4)();
        var _closure2_slot3 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                var6 = null;
                var2 = var6 == var1;
                var1 = null;
                if(var2) { _fun0001_ip = 191; continue _fun0001 }
 21:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var6 !== var2)) { _fun0001_ip = 191; continue _fun0001 }
 34:
                var2 = _closure2_slot3;
                var2 = var6 == var2;
                var1 = null;
                if(var2) { _fun0001_ip = 191; continue _fun0001 }
 50:
                var2 = {};
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 2;
                var5 = var5[var3];
                var3 = undefined;
                var7 = var7.bind(var3)(var5);
                var5 = var7.v4;
                var5 = var5.bind(var7)();
                var2['requestIdentifier'] = var5;
                var5 = _closure2_slot0;
                var2['skuId'] = var5;
                var5 = _closure2_slot1;
                var7 = var5.country;
                var2['countryCode'] = var7;
                var5 = var5.currency;
                var2['currency'] = var5;
                var5 = _closure2_slot2;
                var5 = var6 == var5;
                var7 = undefined;
                if(var5) { _fun0001_ip = 150; continue _fun0001 }
 140:
                var5 = _closure2_slot2;
                var7 = var5.isGift;
 150:
                var5 = true;
                var5 = var5 === var7;
                var2['isGift'] = var5;
                var5 = _closure2_slot2;
                var5 = var6 == var5;
                var3 = undefined;
                if(var5) { _fun0001_ip = 183; continue _fun0001 }
 174:
                var4 = _closure2_slot2;
                var3 = var4.options;
 183:
                var2['giftInfoOptions'] = var3;
                var1 = var2;
 191:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();