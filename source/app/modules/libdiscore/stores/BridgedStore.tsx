// app/modules/libdiscore/stores/BridgedStore.tsx
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
    var4 = 'modules/libdiscore/stores/BridgedStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ensureValidMode(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = 'typescript';
            if(!(var1 !== var2)) { _fun0001_ip = 48; continue _fun0001 }
 11:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 0;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.hasFluxApi;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0001_ip = 51; continue _fun0001 }
 48:
            var1 = var2;
 51:
            return var1;
        }
    };
    var3['ensureValidMode'] = var2;
    return var1;
})();