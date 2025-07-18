// app/modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getHasAllocateBoostPermission(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var3 = null;
            var2 = var3 == var4;
            var1 = null;
            if(var2) { _fun0001_ip = 62; continue _fun0001 }
 17:
            var2 = var5.getGuildPermissions;
            var2 = var2.bind(var5)(var4);
            var2 = var3 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 62; continue _fun0001 }
 37:
            var3 = var5.can;
            var2 = _closure1_slot4;
            var2 = var2.ADMINISTRATOR;
            var1 = var3.bind(var5)(var2, var4);
 62:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useHasAllocateBoostPermission(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot2;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var5 = _closure1_slot2;
            var2 = var5.getGuild;
            var1 = _closure2_slot0;
            var2 = var2.bind(var5)(var1);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['getHasAllocateBoostPermission'] = var2;
    return var1;
})();