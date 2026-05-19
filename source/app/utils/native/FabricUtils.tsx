// app/utils/native/FabricUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var6 = function isFabric() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var6 = 0;
            var1 = var1[var6];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = null;
            var4 = var1 == var2;
            var2 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
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
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var4 = true;
    var2['value'] = var4;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = global;
    var2 = var1.RN$Bridgeless;
    var1 = 2;
    var7 = var7[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/native/FabricUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['isFabric'] = var6;
    var5 = function isIosFabric() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot3;
            var1 = var2.bind(var3)();
case 6:
            return var1;
        }
    };
    var3['isIosFabric'] = var5;
    var2 = var4 === var2;
    var3['isBridgeless'] = var2;
    return var1;
})();