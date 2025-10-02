// app/modules/avatar_decorations/AvatarDecorationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var4 = var4.EPHEMERAL_COLLECTIBLE_EXPIRY_GRACE_PERIOD_IN_MS;
    var _closure1_slot2 = var4;
    var5 = function parseAvatarDecorationData(arg1) {
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
            var2 = {};
            var4 = var3.asset;
            var2['asset'] = var4;
            var4 = 'sku_id';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var3.sku_id;
            var5 = typeof var5;
            var4 = var6 === var5;
case 8:
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var3.sku_id;
            var2['skuId'] = var4;
case 10:
            var4 = 'skuId';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var3.skuId;
            var5 = typeof var5;
            var4 = var6 === var5;
case 12:
            if(!var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var3.skuId;
            var2['skuId'] = var4;
case 14:
            var4 = 'expires_at';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = var3.expires_at;
            var6 = 'number';
            var5 = typeof var5;
            var4 = var6 === var5;
case 16:
            if(!var4) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var3.expires_at;
            var2['expiresAt'] = var4;
case 18:
            var4 = 'expiresAt';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var5 = var3.expiresAt;
            var6 = 'number';
            var5 = typeof var5;
            var4 = var6 === var5;
case 20:
            if(!var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = var3.expiresAt;
            var2['expiresAt'] = var3;
case 22:
            return var2;
case 5:
            return var1;
case 2:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot3 = var5;
    var4 = function isAvatarDecorationExpired(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var1 = var2.expiresAt;
case 24:
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var3 = var2.expiresAt;
            var2 = 1000;
            var3 = var2 * var3;
            var2 = _closure1_slot2;
            var3 = var3 + var2;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var1 = var3 < var2;
case 26:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var6 = 2;
    var6 = var8[var6];
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
            if(!(var1 != var3)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            if(!(var1 != var2)) { _fun0003_ip = 28; continue _fun0003 }
case 30:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 1;
            var4 = var6[var4];
            var7 = undefined;
            var6 = var5.bind(var7)(var4);
            var5 = var6.isEqual;
            var1 = _closure1_slot3;
            var4 = var1.bind(var7)(var3);
            var1 = var1.bind(var7)(var2);
            var1 = var5.bind(var6)(var4, var1);
            _fun0003_ip = 31; continue _fun0003;
case 28:
            var1 = var3 === var2;
case 31:
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
            if(!var1) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var6 = _closure1_slot4;
            var7 = var3 == var4;
            var5 = undefined;
            var2 = undefined;
            if(var7) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var2 = var4.avatarDecoration;
case 34:
            var2 = var6.bind(var5)(var2);
            var1 = !var2;
case 32:
            if(!var1) { _fun0004_ip = 9; continue _fun0004 }
case 36:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var4 = var4.avatarDecoration;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 37; continue _fun0004 }
case 39:
            var2 = var4.asset;
case 37:
            var1 = var3 != var2;
case 9:
            return var1;
        }
    };
    var3['hasGlobalDefaultAvatarDecoration'] = var2;
    return var1;
})();