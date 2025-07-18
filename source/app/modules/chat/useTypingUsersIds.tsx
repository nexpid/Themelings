// app/modules/chat/useTypingUsersIds.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/useTypingUsersIds.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTypingUserIds(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arguments[1];
            var _closure2_slot0 = var7;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 32; continue _fun0001 }
 18:
            var2 = global;
            var2 = var2.Number;
            var6 = var2.MAX_SAFE_INTEGER;
 32:
            var _closure2_slot1 = var6;
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 3;
            var3 = var8[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStoresArray;
            var8 = _closure1_slot4;
            var3 = new Array(3);
            var3[0] = var8;
            var8 = _closure1_slot3;
            var3[1] = var8;
            var2 = _closure1_slot2;
            var3[2] = var2;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var9 = null;
                    var2 = var9 == var1;
                    var8 = undefined;
                    if(var2) { _fun0002_ip = 32; continue _fun0002 }
 27:
                    var8 = var1.id;
 32:
                    var3 = _closure1_slot3;
                    var2 = var3.getTypingUsers;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = new Array(0);
                    var5 = var2;
                    for(var2 in var5)
 69:
                    {
 78:
                        var13 = var2;
                        var12 = var1.length;
                        var11 = _closure2_slot1;
                        if(!(!(var12 >= var11))) { _fun0002_ip = 162; continue _fun0002 }
 94:
                        var12 = _closure1_slot4;
                        var11 = var12.getUser;
                        var11 = var11.bind(var12)(var13);
                        if(var9 == var11) { _fun0002_ip = 69; continue _fun0002 }
 113:
                        var12 = var11.id;
                        if(var12 === var8) { _fun0002_ip = 69; continue _fun0002 }
 122:
                        var14 = _closure1_slot2;
                        var13 = var14.isBlockedOrIgnored;
                        var12 = var11.id;
                        var12 = var13.bind(var14)(var12);
                        if(var12) { _fun0002_ip = 69; continue _fun0002 }
 145:
                        var12 = var1.push;
                        var11 = var11.id;
                        var11 = var12.bind(var1)(var11);
                        _fun0002_ip = 69; continue _fun0002;
                    }
 162:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var3['useTypingUserIds'] = var2;
    return var1;
})();