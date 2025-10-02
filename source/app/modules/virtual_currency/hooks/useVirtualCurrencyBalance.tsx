// app/modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useVirtualCurrencyBalance() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var1 = _closure1_slot2;
            var1 = var1.balance;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useVirtualCurrencyBalance'] = var4;
    var4 = function useHasEnoughVirtualCurrency(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot2;
                var4 = var4.balance;
                var5 = var3 != var4;
                var3 = 0;
                if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = var4;
case 4:
                var2 = _closure2_slot0;
                var1 = var3 >= var2;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useHasEnoughVirtualCurrency'] = var4;
    var2 = function getVirtualCurrencyBalance() {
        var2 = _closure1_slot2;
        var1 = var2.getCurrentBalance;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['getVirtualCurrencyBalance'] = var2;
    return var1;
})();