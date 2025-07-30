// app/modules/premium/powerups/hooks/useIsUserServerBoosterForGuild.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getIsRoleServerBooster(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.tags;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 38; continue _fun0001 }
 18:
            var2 = var2.tags;
            var3 = var2.premium_subscriber;
            var2 = undefined;
            var1 = var2 !== var3;
 38:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = function getCurrentRole(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 49; continue _fun0002 }
 12:
            if(!(var2 != var6)) { _fun0002_ip = 49; continue _fun0002 }
 16:
            var5 = _closure1_slot2;
            var3 = var5.getMember;
            var3 = var3.bind(var5)(var4, var6);
            if(!(var2 != var3)) { _fun0002_ip = 49; continue _fun0002 }
 39:
            var3 = var3.colorRoleId;
            if(!(var2 == var3)) { _fun0002_ip = 53; continue _fun0002 }
 49:
            var2 = undefined;
            return var2;
 53:
            var2 = _closure1_slot3;
            var1 = var2.getRole;
            var1 = var1.bind(var2)(var4, var3);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/powerups/hooks/useIsUserServerBoosterForGuild.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useIsUserServerBoosterForGuild(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var3 = undefined;
            var8 = var4.bind(var3)(var2);
            var7 = var8.useStateFromStores;
            var10 = _closure1_slot2;
            var2 = new Array(2);
            var2[0] = var10;
            var9 = _closure1_slot4;
            var2[1] = var9;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = _closure1_slot6;
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3, var1);
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 44; continue _fun0004 }
 35:
                    var2 = _closure1_slot5;
                    var1 = var2.bind(var4)(var3);
 44:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var1);
            var1 = 4;
            var1 = var6[var1];
            var4 = var4.bind(var3)(var1);
            var3 = var4.useBoosterEnhancedRoleColors;
            var1 = 'useIsUserServerBoosterForGuild';
            var1 = var3.bind(var4)(var5, var1);
            if(!var1) { _fun0003_ip = 113; continue _fun0003 }
 110:
            var1 = var2;
 113:
            return var1;
        }
    };
    var3['default'] = var5;
    var4 = function getIsUserServerBoosterForGuild(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var8 = arg1;
            var2 = _closure1_slot6;
            var5 = undefined;
            var1 = arg2;
            var4 = var2.bind(var5)(var8, var1);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0005_ip = 81; continue _fun0005 }
 30:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var2 = var7[var2];
            var7 = var6.bind(var5)(var2);
            var6 = var7.getBoosterEnhancedRoleColors;
            var2 = 'getIsUserServerBoosterForGuild';
            var2 = var6.bind(var7)(var8, var2);
            if(!var2) { _fun0005_ip = 78; continue _fun0005 }
 69:
            var3 = _closure1_slot5;
            var2 = var3.bind(var5)(var4);
 78:
            var1 = var2;
 81:
            return var1;
        }
    };
    var3['getIsUserServerBoosterForGuild'] = var4;
    var3['getIsRoleServerBooster'] = var2;
    return var1;
})();