// app/utils/InterceptionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var2);
    var2 = function resolveThunk(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = 'function';
            var2 = typeof var3;
            var1 = var3;
            if(!(var4 === var2)) { _fun0001_ip = 23; continue _fun0001 }
 17:
            var2 = undefined;
            var1 = var3.bind(var2)();
 23:
            return var1;
        }
    };
    var _closure1_slot0 = var2;
    var1 = 0;
    var7 = var6[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var5 = var7.curry;
    var4 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg3;
            var2 = _closure1_slot0;
            var3 = undefined;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0002_ip = 32; continue _fun0002 }
 23:
            var1 = {};
            var1 = var4.bind(var3)(var1);
            _fun0002_ip = 40; continue _fun0002;
 32:
            var2 = arg1;
            var1 = var2.bind(var3)(var4);
 40:
            return var1;
        }
    };
    var4 = var5.bind(var7)(var4);
    var5 = 1;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/InterceptionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['resolveThunk'] = var2;
    return var1;
})();