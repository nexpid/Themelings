// app/records/GuildRoleRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.TypeTag;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/GuildRoleRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 'GuildRole';
    var3['GuildRoleRecordTypeTag'] = var4;
    var4 = function isEveryoneRole(arg1) {
        var1 = arg1;
        var2 = var1.id;
        var1 = var1.guildId;
        var1 = var2 === var1;
        return var1;
    };
    var3['isEveryoneRole'] = var4;
    var4 = function hasPermission(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.has;
        var1 = arg1;
        var2 = var1.permissions;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['hasPermission'] = var4;
    var4 = function hasAnyPermission(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.hasAny;
        var1 = arg1;
        var2 = var1.permissions;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['hasAnyPermission'] = var4;
    var2 = function isRoleEqual(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.isEqualWith;
        var3 = arg1;
        var2 = arg2;
        var1 = function(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = undefined;
                var3 = 'permissions';
                var2 = arg3;
                var1 = undefined;
                if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 1;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var4 = var5.equals;
                var3 = arg1;
                var2 = arg2;
                var1 = var4.bind(var5)(var3, var2);
case 2:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var3['isRoleEqual'] = var2;
    return var1;
})();