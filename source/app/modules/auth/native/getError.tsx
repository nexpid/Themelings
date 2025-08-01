// app/modules/auth/native/getError.tsx
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
    var2 = 'modules/auth/native/getError.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getError(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var1 = arg1;
            var4 = var2[var1];
            var1 = null;
            var2 = var1 == var4;
            if(var2) { _fun0001_ip = 52; continue _fun0001 }
 19:
            var2 = global;
            var3 = var2.Array;
            var2 = var3.isArray;
            var3 = var2.bind(var3)(var4);
            var2 = var4;
            if(!var3) { _fun0001_ip = 49; continue _fun0001 }
 43:
            var3 = 0;
            var2 = var4[var3];
 49:
            var1 = var2;
 52:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();