// app/modules/user_profile/UserProfileRoleUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/UserProfileRoleUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function sortRolesByVerification(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var3 = var6.tags;
            var1 = null;
            var4 = var1 == var3;
            var7 = undefined;
            var2 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.guild_connections;
case 2:
            var2 = var7 !== var2;
            var3 = var5.tags;
            var4 = var1 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var3.guild_connections;
case 4:
            var3 = var7 !== var1;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 1;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = -1;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 9:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 0;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.compareGuildRoles;
            var2 = var3.bind(var4)(var6, var5);
case 11:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['sortRolesByVerification'] = var2;
    return var1;
})();