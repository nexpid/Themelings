// app/modules/rpc/helpers/validateScope.tsx
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
    var4 = var4.RPC_SCOPE_CONFIG;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/helpers/validateScope.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function validateScope(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var3;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 188; continue _fun0001 }
 21:
            var4 = typeof var2;
            var1 = 'string';
            if(!(var1 !== var4)) { _fun0001_ip = 176; continue _fun0001 }
 35:
            var1 = 'object';
            if(!(var1 === var4)) { _fun0001_ip = 172; continue _fun0001 }
 46:
            var1 = _closure1_slot0;
            var4 = var1.ANY;
            var9 = var2[var4];
            var1 = var1.ALL;
            var7 = var2[var1];
            var4 = global;
            var6 = var4.Array;
            var1 = var6.isArray;
            var1 = var1.bind(var6)(var9);
            var6 = !var1;
            if(var6) { _fun0001_ip = 118; continue _fun0001 }
 97:
            var8 = var9.some;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var8.bind(var9)(var1);
            var6 = !var1;
 118:
            var1 = !var6;
            if(!var6) { _fun0001_ip = 170; continue _fun0001 }
 124:
            var6 = var4.Array;
            var4 = var6.isArray;
            var4 = var4.bind(var6)(var7);
            var4 = !var4;
            if(var4) { _fun0001_ip = 167; continue _fun0001 }
 146:
            var6 = var7.every;
            var5 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var4 = !var5;
 167:
            var1 = !var4;
 170:
            return var1;
 172:
            var1 = false;
            return var1;
 176:
            var1 = var3.includes;
            var1 = var1.bind(var3)(var2);
            return var1;
 188:
            var1 = true;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();