// app/modules/collectibles/utils/mappers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function parseServerUserNameplate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = 'object';
            var1 = typeof var3;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = 'asset';
            var2 = var2 in var3;
            if(!var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var3.asset;
            var6 = 'string';
            var2 = typeof var2;
            if(!(var6 === var2)) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var2 = 'label';
            var2 = var2 in var3;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3.label;
            var2 = typeof var2;
            if(!(var6 === var2)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var2 = 'palette';
            var2 = var2 in var3;
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var3.palette;
            var2 = typeof var2;
            if(!(var6 === var2)) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var2 = {};
            var4 = var3.asset;
            var2['asset'] = var4;
            var4 = var3.label;
            var2['label'] = var4;
            var4 = var3.palette;
            var2['palette'] = var4;
            var4 = 'skuId';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var3.skuId;
            var5 = typeof var5;
            var4 = var6 === var5;
case 14:
            if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = var3.skuId;
            var2['skuId'] = var4;
case 16:
            var4 = 'sku_id';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var5 = var3.sku_id;
            var5 = typeof var5;
            var4 = var6 === var5;
case 18:
            if(!var4) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = var3.sku_id;
            var2['skuId'] = var4;
case 20:
            var4 = 'expiresAt';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var5 = var3.expiresAt;
            var6 = 'number';
            var5 = typeof var5;
            var4 = var6 === var5;
case 22:
            if(!var4) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var4 = var3.expiresAt;
            var2['expiresAt'] = var4;
case 24:
            var4 = 'expires_at';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var5 = var3.expires_at;
            var6 = 'number';
            var5 = typeof var5;
            var4 = var6 === var5;
case 26:
            if(!var4) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var3 = var3.expires_at;
            var2['expiresAt'] = var3;
case 28:
            return var2;
case 11:
            return var1;
case 8:
            return var1;
case 5:
            return var1;
case 2:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot2 = var1;
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
    var4 = 'modules/collectibles/utils/mappers.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function parseServerUserCollectibles(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var6 = null;
            var5 = 'object';
            var2 = typeof var4;
            var1 = null;
            if(!(var5 === var2)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var2 = var6 == var4;
            var1 = null;
            if(var2) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            var2 = 'nameplate';
            var3 = var2 in var4;
            var2 = null;
            if(!var3) { _fun0002_ip = 33; continue _fun0002 }
case 6:
            var3 = var4.nameplate;
            var3 = typeof var3;
            var2 = null;
            if(!(var5 === var3)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var3 = {};
            var6 = _closure1_slot2;
            var5 = var4.nameplate;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var3['nameplate'] = var4;
            var2 = var3;
case 33:
            var1 = var2;
case 30:
            return var1;
        }
    };
    var3['parseServerUserCollectibles'] = var4;
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