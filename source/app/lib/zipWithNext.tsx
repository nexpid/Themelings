// app/lib/zipWithNext.tsx
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
    var2 = 'lib/zipWithNext.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function zipWithNext(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var2 = var7.length;
            var1 = 2;
            if(!(!(var2 < var1))) { _fun0001_ip = 82; continue _fun0001 }
 18:
            var1 = new Array(0);
            var2 = 0;
            var5 = var7[var2];
            var2 = var7.length;
            var4 = 1;
            var2 = var4 < var2;
            var3 = undefined;
            if(!var2) { _fun0001_ip = 80; continue _fun0001 }
 45:
            var8 = var7[var4];
            var9 = var1.push;
            var2 = var6.bind(var3)(var5, var8);
            var2 = var9.bind(var1)(var2);
            var4 = var4 + 1;
            var2 = var7.length;
            var5 = var8;
            if(var4 < var2) { _fun0001_ip = 45; continue _fun0001 }
 80:
            return var1;
 82:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();