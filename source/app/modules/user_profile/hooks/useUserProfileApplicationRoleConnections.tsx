// app/modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native3;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = new Array(0);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileApplicationRoleConnections(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var5.bind(var4)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getUserProfile;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var6.bind(var7)(var5, var2);
            var _closure2_slot1 = var2;
            var3 = _closure1_slot2;
            var5 = null;
            var6 = var5 == var2;
            var5 = undefined;
            if(var6) { _fun0001_ip = 89; continue _fun0001 }
 83:
            var5 = var2.applicationRoleConnections;
 89:
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    var4 = var3 == var2;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 28; continue _fun0002 }
 18:
                    var4 = _closure2_slot1;
                    var2 = var4.applicationRoleConnections;
 28:
                    if(!(var3 != var2)) { _fun0002_ip = 44; continue _fun0002 }
 32:
                    var1 = _closure2_slot1;
                    var1 = var1.applicationRoleConnections;
                    _fun0002_ip = 51; continue _fun0002;
 44:
                    var1 = _closure1_slot4;
 51:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();