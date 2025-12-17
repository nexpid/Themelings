// app/utils/native/FabricUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var4 = true;
    var2['value'] = var4;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = global;
    var2 = var1.RN$Bridgeless;
    var1 = 1;
    var7 = var6[var1];
    var6 = require;
    var1 = undefined;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/native/FabricUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function isFabric() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 0;
            var1 = var1[var6];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = null;
            var4 = var1 == var2;
            var2 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isFabric;
            var2 = var3.bind(var4)();
case 2:
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['isFabric'] = var5;
    var2 = var4 === var2;
    var3['isBridgeless'] = var2;
    return var1;
})();