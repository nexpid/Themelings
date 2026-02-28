// app/modules/skus/utils/getPricesFromServer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var4.getPriceFromServer;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/skus/utils/getPricesFromServer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getPricesFromServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = global;
            var2 = var1.Object;
            var1 = var2.entries;
            var4 = var1.bind(var2)(var3);
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var6 = arg2;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var5 = var6().value;
                    var3 = var2;
                    var8 = undefined;
                    var4 = var3 === var8;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = var5;
case 4:
                    var5 = undefined;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = var6().value;
                    var6 = var2;
                    var6 = var6 === var8;
                    var5 = undefined;
                    var4 = var6;
                    if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var5 = var7;
                    var4 = var6;
case 6:
                    if(var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var2.return();
case 9:
                    var2 = {};
                    var4 = {};
                    var6 = var5.country_prices;
                    var6 = var6.country_code;
                    var4['countryCode'] = var6;
                    var5 = var5.country_prices;
                    var7 = var5.prices;
                    var6 = var7.map;
                    var5 = function(arg1) {
                        var4 = _closure1_slot0;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
                    var4['prices'] = var5;
                    var2['countryPrices'] = var4;
                    var4 = {};
                    var2['paymentSourcePrices'] = var4;
                    var1[var3] = var2;
                    return var1;
                }
            };
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 11; continue _fun0001;
case 2:
            var1 = {};
case 11:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();