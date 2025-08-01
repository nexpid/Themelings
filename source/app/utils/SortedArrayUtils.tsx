// app/utils/SortedArrayUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function insertionIndex(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var8 = arg2;
            var7 = arg3;
            var6 = var9.length;
            var5 = 0;
            var10 = var5 < var6;
            var4 = 1;
            var3 = undefined;
            var2 = 0;
            var1 = 0;
            if(!var10) { _fun0001_ip = 74; continue _fun0001 }
 32:
            var10 = var2 + var6;
            var11 = var10 >>> var4;
            var10 = var9[var11];
            var12 = var7.bind(var3)(var10, var8);
            var10 = var11;
            if(!(var12 < var5)) { _fun0001_ip = 64; continue _fun0001 }
 57:
            var2 = var11 + var4;
            var10 = var6;
 64:
            var6 = var10;
            var1 = var2;
            if(var1 < var6) { _fun0001_ip = 32; continue _fun0001 }
 74:
            return var1;
        }
    };
    var _closure1_slot0 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/SortedArrayUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['insertionIndex'] = var4;
    var2 = function insert(arg1, arg2, arg3) {
        var6 = arg1;
        var5 = arg2;
        var3 = _closure1_slot0;
        var1 = undefined;
        var2 = arg3;
        var4 = var3.bind(var1)(var6, var5, var2);
        var3 = var6.splice;
        var2 = 0;
        var2 = var3.bind(var6)(var4, var2, var5);
        return var1;
    };
    var3['insert'] = var2;
    return var1;
})();