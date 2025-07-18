// app/modules/avatar_decorations/AvatarDecorationUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
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
 0:
            var3 = arg1;
            var2 = 'object';
            var1 = typeof var3;
            if(!(var2 === var1)) { _fun0001_ip = 241; continue _fun0001 }
 17:
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 241; continue _fun0001 }
 26:
            var2 = 'asset';
            var2 = var2 in var3;
            if(!var2) { _fun0001_ip = 239; continue _fun0001 }
 40:
            var2 = var3.asset;
            var6 = 'string';
            var2 = typeof var2;
            if(!(var6 === var2)) { _fun0001_ip = 239; continue _fun0001 }
 60:
            var2 = {};
            var4 = var3.asset;
            var2['asset'] = var4;
            var4 = 'sku_id';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 97; continue _fun0001 }
 84:
            var5 = var3.sku_id;
            var5 = typeof var5;
            var4 = var6 === var5;
 97:
            if(!var4) { _fun0001_ip = 112; continue _fun0001 }
 100:
            var4 = var3.sku_id;
            var2['skuId'] = var4;
 112:
            var4 = 'skuId';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 136; continue _fun0001 }
 123:
            var5 = var3.skuId;
            var5 = typeof var5;
            var4 = var6 === var5;
 136:
            if(!var4) { _fun0001_ip = 151; continue _fun0001 }
 139:
            var4 = var3.skuId;
            var2['skuId'] = var4;
 151:
            var4 = 'expires_at';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 179; continue _fun0001 }
 162:
            var5 = var3.expires_at;
            var6 = 'number';
            var5 = typeof var5;
            var4 = var6 === var5;
 179:
            if(!var4) { _fun0001_ip = 194; continue _fun0001 }
 182:
            var4 = var3.expires_at;
            var2['expiresAt'] = var4;
 194:
            var4 = 'expiresAt';
            var4 = var4 in var3;
            if(!var4) { _fun0001_ip = 222; continue _fun0001 }
 205:
            var5 = var3.expiresAt;
            var6 = 'number';
            var5 = typeof var5;
            var4 = var6 === var5;
 222:
            if(!var4) { _fun0001_ip = 237; continue _fun0001 }
 225:
            var3 = var3.expiresAt;
            var2['expiresAt'] = var3;
 237:
            return var2;
 239:
            return var1;
 241:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot3 = var5;
    var4 = function isAvatarDecorationExpired(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0002_ip = 20; continue _fun0002 }
 14:
            var1 = var2.expiresAt;
 20:
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 75; continue _fun0002 }
 27:
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
 75:
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
    var6 = function(arg1) {
        var4 = arg1;
        var3 = var4.split;
        var2 = '_';
        var1 = 2;
        var3 = var3.bind(var4)(var2, var1);
        var2 = var3.includes;
        var1 = 'a';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isAnimatedAvatarDecoration'] = var6;
    var3['parseAvatarDecorationData'] = var5;
    var3['isAvatarDecorationExpired'] = var4;
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 69; continue _fun0003 }
 12:
            if(!(var1 != var2)) { _fun0003_ip = 69; continue _fun0003 }
 16:
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
            _fun0003_ip = 73; continue _fun0003;
 69:
            var1 = var3 === var2;
 73:
            return var1;
        }
    };
    var3['isEqualAvatarDecoration'] = var4;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var3 = null;
            var1 = arg2;
            var1 = var3 != var1;
            if(!var1) { _fun0004_ip = 47; continue _fun0004 }
 15:
            var6 = _closure1_slot4;
            var7 = var3 == var4;
            var5 = undefined;
            var2 = undefined;
            if(var7) { _fun0004_ip = 39; continue _fun0004 }
 33:
            var2 = var4.avatarDecoration;
 39:
            var2 = var6.bind(var5)(var2);
            var1 = !var2;
 47:
            if(!var1) { _fun0004_ip = 84; continue _fun0004 }
 50:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 80; continue _fun0004 }
 59:
            var4 = var4.avatarDecoration;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 80; continue _fun0004 }
 74:
            var2 = var4.asset;
 80:
            var1 = var3 != var2;
 84:
            return var1;
        }
    };
    var3['hasGlobalDefaultAvatarDecoration'] = var2;
    return var1;
})();