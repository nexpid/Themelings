// app/utils/StylesheetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/StylesheetUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getClass(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = 2;
            var3 = copyRestArgs(var6);
            var2 = var3.reduce;
            var1 = function(arg1, arg2) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.upperCaseFirstChar;
                var1 = arg2;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var1 = var1 + var2;
                return var1;
            };
            var4 = '';
            var3 = var2.bind(var3)(var1, var4);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = arg2;
            var2 = var2.bind(var4)(var1, var3);
            var1 = arg1;
            var1 = var1[var2];
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 69; continue _fun0001 }
 65:
            var2 = undefined;
            return var2;
 69:
            return var1;
        }
    };
    var3['getClass'] = var2;
    return var1;
})();