// app/utils/native/FabricUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = global;
    var2 = var1._IS_BRIDGELESS;
    var1 = 2;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/native/FabricUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function isFabric() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 0;
            var1 = var3[var1];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            var2 = undefined;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = 1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var4 = null;
            var6 = var4 == var3;
            var3 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var6 = var6.bind(var7)(var5);
            var5 = var6.isFabric;
            var3 = var5.bind(var6)();
case 4:
            var1 = var4 != var3;
            var2 = var3;
case 2:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['isFabric'] = var4;
    var3['isBridgeless'] = var2;
    return var1;
})();