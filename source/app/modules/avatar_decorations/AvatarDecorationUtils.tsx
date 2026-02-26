// app/modules/avatar_decorations/AvatarDecorationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var5 = function parseAvatarDecorationData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = 'object';
            var1 = typeof var2;
            if(!(var3 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = {};
            var3 = 'asset';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = var2.asset;
            var5 = 'string';
            var4 = typeof var4;
            var3 = var5 === var4;
case 5:
            if(!var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = var2.asset;
            var1['asset'] = var3;
case 7:
            var3 = 'sku_id';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var2.sku_id;
            var5 = 'string';
            var4 = typeof var4;
            var3 = var5 === var4;
case 9:
            if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var2.sku_id;
            var1['skuId'] = var3;
case 11:
            var3 = 'skuId';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = var2.skuId;
            var5 = 'string';
            var4 = typeof var4;
            var3 = var5 === var4;
case 13:
            if(!var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = var2.skuId;
            var1['skuId'] = var3;
case 15:
            var3 = 'expires_at';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = var2.expires_at;
            var5 = 'number';
            var4 = typeof var4;
            var3 = var5 === var4;
case 17:
            if(!var3) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = var2.expires_at;
            var1['expiresAt'] = var3;
case 19:
            var3 = 'expiresAt';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var4 = var2.expiresAt;
            var5 = 'number';
            var4 = typeof var4;
            var3 = var5 === var4;
case 21:
            if(!var3) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var2 = var2.expiresAt;
            var1['expiresAt'] = var2;
case 23:
            return var1;
case 2:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot2 = var5;
    var4 = function isAvatarDecorationExpired(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var1 = var2.expiresAt;
case 25:
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var3 = var2.expiresAt;
            var2 = 1000;
            var3 = var2 * var3;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var1 = var3 < var2;
case 27:
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var1 = 1;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/avatar_decorations/AvatarDecorationUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['parseAvatarDecorationData'] = var5;
    var3['isAvatarDecorationExpired'] = var4;
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            if(!(var1 != var2)) { _fun0003_ip = 29; continue _fun0003 }
case 31:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 0;
            var4 = var6[var4];
            var7 = undefined;
            var6 = var5.bind(var7)(var4);
            var5 = var6.isEqual;
            var1 = _closure1_slot2;
            var4 = var1.bind(var7)(var3);
            var1 = var1.bind(var7)(var2);
            var1 = var5.bind(var6)(var4, var1);
            _fun0003_ip = 32; continue _fun0003;
case 29:
            var1 = var3 === var2;
case 32:
            return var1;
        }
    };
    var3['isEqualAvatarDecoration'] = var4;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var3 = null;
            var1 = arg2;
            var1 = var3 != var1;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var6 = _closure1_slot3;
            var7 = var3 == var4;
            var5 = undefined;
            var2 = undefined;
            if(var7) { _fun0004_ip = 6; continue _fun0004 }
case 35:
            var2 = var4.avatarDecoration;
case 6:
            var2 = var6.bind(var5)(var2);
            var1 = !var2;
case 33:
            if(!var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 38; continue _fun0004 }
case 8:
            var4 = var4.avatarDecoration;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var2 = var4.asset;
case 38:
            var1 = var3 != var2;
case 36:
            return var1;
        }
    };
    var3['hasGlobalDefaultAvatarDecoration'] = var2;
    return var1;
})();