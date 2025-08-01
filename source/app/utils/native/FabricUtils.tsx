// app/utils/native/FabricUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/FabricUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isFabric() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 0;
            var1 = var3[var1];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            var2 = undefined;
            if(!var1) { _fun0001_ip = 103; continue _fun0001 }
 38:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = 1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var4 = null;
            var6 = var4 == var3;
            var3 = undefined;
            if(var6) { _fun0001_ip = 96; continue _fun0001 }
 69:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var6 = var6.bind(var7)(var5);
            var5 = var6.isFabric;
            var3 = var5.bind(var6)();
 96:
            var1 = var4 != var3;
            var2 = var3;
 103:
            if(!var1) { _fun0001_ip = 109; continue _fun0001 }
 106:
            var1 = var2;
 109:
            return var1;
        }
    };
    var3['isFabric'] = var2;
    return var1;
})();