// app/modules/threads/sanitizeThreadName.tsx
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
    var2 = 'modules/threads/sanitizeThreadName.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function sanitizeThreadName(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.trim;
            var1 = var2.bind(var3)();
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();