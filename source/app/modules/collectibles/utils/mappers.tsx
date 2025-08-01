// app/modules/collectibles/utils/mappers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function parseServerNameplate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0001_ip = 70; continue _fun0001 }
 12:
            var2 = {};
            var4 = var3.asset;
            var2['asset'] = var4;
            var4 = var3.sku_id;
            var2['skuId'] = var4;
            var4 = var3.expires_at;
            var2['expiresAt'] = var4;
            var4 = var3.label;
            var2['label'] = var4;
            var3 = var3.palette;
            var2['palette'] = var3;
            var1 = var2;
 70:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 1;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/utils/mappers.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function parseServerUserCollectibles(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0002_ip = 42; continue _fun0002 }
 12:
            var2 = {};
            var5 = _closure1_slot2;
            var4 = var3.nameplate;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var2['nameplate'] = var3;
            var1 = var2;
 42:
            return var1;
        }
    };
    var3['parseServerUserCollectibles'] = var5;
    var3['parseServerNameplate'] = var4;
    var2 = function getNameplateDataFromRecord(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.asset;
        var1['src'] = var3;
        var3 = var2.label;
        var1['imgAlt'] = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 0;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.getNameplatePalette;
        var2 = var2.palette;
        var2 = var3.bind(var4)(var2);
        var1['palette'] = var2;
        return var1;
    };
    var3['getNameplateDataFromRecord'] = var2;
    return var1;
})();