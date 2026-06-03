// app/modules/collectibles/native/hooks/useVirtualCurrencyData.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/hooks/useVirtualCurrencyData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 1;
        var3 = var7[var3];
        var5 = undefined;
        var8 = var6.bind(var5)(var3);
        var4 = var8.getProductOrbPrice;
        var3 = {};
        var9 = arg1;
        var3['product'] = var9;
        var9 = arg2;
        var3['hasShopDiscount'] = var9;
        var4 = var4.bind(var8)(var3);
        var _closure2_slot0 = var4;
        var3 = 2;
        var3 = var7[var3];
        var5 = var6.bind(var5)(var3);
        var3 = var5.useFetchVirtualCurrencyBalance;
        var3 = var3.bind(var5)();
        var3 = var3.balance;
        var _closure2_slot1 = var3;
        var6 = _closure1_slot2;
        var5 = var6.useMemo;
        var2 = new Array(2);
        var2[0] = var4;
        var2[1] = var3;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var4 = null;
                var3 = var4 == var1;
                var1 = null;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot1;
                var3 = var4 == var3;
                var1 = null;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var3 = _closure2_slot0;
                var3 = var3.amount;
                var2 = _closure2_slot1;
                var1 = var3 <= var2;
case 2:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var1, var2);
        var1 = {};
        var1['price'] = var4;
        var1['balance'] = var3;
        var1['canAfford'] = var2;
        return var1;
    };
    var3['useVirtualCurrencyData'] = var2;
    return var1;
})();