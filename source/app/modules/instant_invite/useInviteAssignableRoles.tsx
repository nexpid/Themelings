// app/modules/instant_invite/useInviteAssignableRoles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isEveryoneRole;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/useInviteAssignableRoles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useInviteAssignableRoles(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var5.bind(var3)(var4);
        var6 = var7.useStateFromStoresObject;
        var3 = _closure1_slot5;
        var5 = new Array(3);
        var5[0] = var3;
        var3 = _closure1_slot7;
        var5[1] = var3;
        var3 = _closure1_slot6;
        var5[2] = var3;
        var4 = new Array(1);
        var4[0] = var8;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = {};
                var2 = _closure2_slot0;
                var5 = null;
                if(!(var5 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = new Array(0);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var7 = _closure1_slot5;
                var6 = var7.getSortedRoles;
                var4 = _closure2_slot0;
                var4 = var4.id;
                var2 = var6.bind(var7)(var4);
case 4:
                var1['sortedRoles'] = var2;
                var6 = _closure1_slot7;
                var2 = var6.getCurrentUser;
                var2 = var2.bind(var6)();
                var1['currentUser'] = var2;
                var2 = _closure2_slot0;
                var2 = var5 != var2;
                if(!var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var6 = _closure1_slot6;
                var5 = var6.can;
                var4 = _closure1_slot8;
                var4 = var4.MANAGE_ROLES;
                var3 = _closure2_slot0;
                var2 = var5.bind(var6)(var4, var3);
case 5:
                var1['canManageRoles'] = var2;
                return var1;
            }
        };
        var3 = var6.bind(var7)(var5, var3, var4);
        var5 = var3.sortedRoles;
        var _closure2_slot1 = var5;
        var7 = var3.currentUser;
        var _closure2_slot2 = var7;
        var6 = var3.canManageRoles;
        var _closure2_slot3 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var3)) { _fun0002_ip = 7; continue _fun0002 }
case 3:
                var3 = _closure2_slot2;
                if(!(var4 != var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var3 = _closure2_slot3;
                if(!var3) { _fun0002_ip = 7; continue _fun0002 }
case 9:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.getHighestRole;
                var4 = _closure2_slot0;
                var3 = _closure2_slot2;
                var3 = var3.id;
                var3 = var5.bind(var6)(var4, var3);
                var _closure3_slot0 = var3;
                var3 = _closure2_slot1;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var9 = arg1;
                        var1 = _closure1_slot4;
                        var6 = undefined;
                        var1 = var1.bind(var6)(var9);
                        var1 = !var1;
                        if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 8:
                        var2 = var9.managed;
                        var2 = !var2;
                        if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var5 = var9.tags;
                        var3 = null;
                        var7 = var3 == var5;
                        var3 = undefined;
                        if(var7) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var3 = var5.guild_connections;
case 13:
                        var3 = var6 === var3;
                        if(!var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 7;
                        var4 = var7[var4];
                        var8 = var5.bind(var6)(var4);
                        var7 = var8.isRoleHigher;
                        var13 = _closure2_slot0;
                        var4 = _closure2_slot2;
                        var12 = var4.id;
                        var11 = _closure3_slot0;
                        var14 = var8;
                        var10 = var9;
                        var4 = var14[var7](var13, var12, var11, var10, var9);
                        var4 = !var4;
                        var3 = !var4;
case 15:
                        var2 = var3;
case 11:
                        var1 = var2;
case 10:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
case 7:
                var1 = new Array(0);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();