// app/modules/premium/getNumSubscriptionsPurchasedFromSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/premium/getNumSubscriptionsPurchasedFromSystemMessage.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getNumSubscriptionsPurchasedFromSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = global;
            var4 = var1.Number;
            var2 = arg1;
            var2 = var2.content;
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var1 = var1.isNaN;
            var3 = var1.bind(var3)(var2);
            var4 = 1;
            var1 = var4;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 0;
            var1 = var4;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();