// app/modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native3;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = {};
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildRoleMemberCounts(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arguments[1];
            var _closure2_slot0 = var7;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 20; continue _fun0001 }
 18:
            var6 = 0;
 20:
            var _closure2_slot1 = var6;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 2;
            var1 = var8[var1];
            var8 = var4.bind(var5)(var1);
            var5 = var8.useStateFromStores;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getRoleMemberCount;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var5.bind(var8)(var4, var1);
            var5 = _closure1_slot3;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0002_ip = 145; continue _fun0002 }
 16:
                    var5 = _closure1_slot5;
                    var4 = _closure2_slot0;
                    var5 = var5[var4];
                    var3 = var3 != var5;
                    if(!var3) { _fun0002_ip = 48; continue _fun0002 }
 38:
                    var6 = _closure2_slot1;
                    var4 = 0;
                    var3 = var6 > var4;
 48:
                    if(!var3) { _fun0002_ip = 80; continue _fun0002 }
 51:
                    var4 = global;
                    var6 = var4.Date;
                    var4 = var6.now;
                    var4 = var4.bind(var6)();
                    var5 = var4 - var5;
                    var4 = _closure2_slot1;
                    var3 = var5 < var4;
 80:
                    if(var3) { _fun0002_ip = 145; continue _fun0002 }
 83:
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var2 = global;
                    var5 = var2.Date;
                    var2 = var5.now;
                    var2 = var2.bind(var5)();
                    var4[var3] = var2;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.fetchMemberCounts;
                    var1 = var1.bind(var2)(var3);
 145:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();