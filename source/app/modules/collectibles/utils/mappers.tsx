// app/modules/collectibles/utils/mappers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function parseSkuIdFromServerData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.skuId;
            var3 = 'string';
            var1 = typeof var1;
            if(!(var3 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.skuId;
            var4 = 'number';
            var1 = typeof var1;
            if(!(var4 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2.sku_id;
            var1 = typeof var1;
            if(!(var3 !== var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var2.sku_id;
            var3 = typeof var3;
            var1 = null;
            if(!(var4 === var3)) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var3 = global;
            var5 = var3.String;
            var4 = var2.sku_id;
            var3 = undefined;
            var1 = var5.bind(var3)(var4);
case 7:
            _fun0001_ip = 8; continue _fun0001;
case 2:
            var3 = global;
            var4 = var3.String;
            var3 = var2.skuId;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 8:
            return var1;
        }
    };
    var _closure1_slot0 = var4;
    var1 = function parseServerUserNameplate(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = 'object';
            var1 = typeof var3;
            if(!(var2 === var1)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var4 = _closure1_slot0;
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            if(!(var1 != var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = 'label';
            var2 = var2 in var3;
            if(!var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = var3.label;
            var6 = 'string';
            var2 = typeof var2;
            if(!(var6 === var2)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var2 = 'palette';
            var2 = var2 in var3;
            if(!var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = var3.palette;
            var2 = typeof var2;
            if(!(var6 === var2)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
            var2 = {};
            var2['skuId'] = var4;
            var4 = var3.label;
            var2['label'] = var4;
            var4 = var3.palette;
            var2['palette'] = var4;
            var4 = 'asset';
            var4 = var4 in var3;
            if(!var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var5 = var3.asset;
            var5 = typeof var5;
            var4 = var6 === var5;
case 20:
            if(!var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var4 = var3.asset;
            var2['asset'] = var4;
case 22:
            var4 = 'expiresAt';
            var4 = var4 in var3;
            if(!var4) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var5 = var3.expiresAt;
            var6 = 'number';
            var5 = typeof var5;
            var4 = var6 === var5;
case 24:
            if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var4 = var3.expiresAt;
            var2['expiresAt'] = var4;
case 26:
            var4 = 'expires_at';
            var4 = var4 in var3;
            if(!var4) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var5 = var3.expires_at;
            var6 = 'number';
            var5 = typeof var5;
            var4 = var6 === var5;
case 28:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var3 = var3.expires_at;
            var2['expiresAt'] = var3;
case 30:
            return var2;
case 17:
            return var1;
case 14:
            return var1;
case 12:
            return var1;
case 9:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot1 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/utils/mappers.tsx';
    var5 = var6.bind(var7)(var5);
    var3['parseSkuIdFromServerData'] = var4;
    var2 = function parseServerUserCollectibles(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var6 = null;
            var5 = 'object';
            var2 = typeof var4;
            var1 = null;
            if(!(var5 === var2)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var2 = var6 == var4;
            var1 = null;
            if(var2) { _fun0003_ip = 32; continue _fun0003 }
case 34:
            var2 = 'nameplate';
            var3 = var2 in var4;
            var2 = null;
            if(!var3) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var3 = var4.nameplate;
            var3 = typeof var3;
            var2 = null;
            if(!(var5 === var3)) { _fun0003_ip = 35; continue _fun0003 }
case 37:
            var3 = {};
            var6 = _closure1_slot1;
            var5 = var4.nameplate;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var3['nameplate'] = var4;
            var2 = var3;
case 35:
            var1 = var2;
case 32:
            return var1;
        }
    };
    var3['parseServerUserCollectibles'] = var2;
    return var1;
})();