// app/modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx
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
    var4 = var4.useEffect;
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchVirtualCurrencyBalance(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var2 = var4[var2];
            var7 = undefined;
            var6 = var3.bind(var7)(var2);
            var4 = var6.useStateFromStoresObject;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = {};
                var2 = _closure1_slot3;
                var3 = var2.balance;
                var1['balance'] = var3;
                var3 = var2.isFetchingBalance;
                var1['isFetching'] = var3;
                var2 = var2.fetchBalanceError;
                var1['error'] = var2;
                return var1;
            };
            var2 = var4.bind(var6)(var3, var2);
            var4 = var2.balance;
            var _closure2_slot1 = var4;
            var3 = var2.isFetching;
            var2 = var2.error;
            var _closure2_slot2 = var2;
            var6 = _closure1_slot2;
            var5 = new Array(3);
            var5[0] = var4;
            var5[1] = var2;
            var8 = null;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var9.disableFetch;
case 2:
            var5[2] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot0;
                    var1 = var4.disableFetch;
case 4:
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot1;
                    var1 = var3 !== var4;
case 6:
                    if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot2;
                    var1 = var3 !== var2;
case 8:
                    if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = _closure1_slot3;
                    var1 = var2.isFetchingBalance;
case 10:
                    if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchVirtualCurrencyBalance;
                    var1 = var1.bind(var2)();
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['balance'] = var4;
            var1['isFetching'] = var3;
            var1['error'] = var2;
            return var1;
        }
    };
    var3['useFetchVirtualCurrencyBalance'] = var2;
    return var1;
})();