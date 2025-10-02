// app/modules/guild_role_subscriptions/RolePermissionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportAll;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var4 = function isChannelAccessDeniedBy(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var9 = 2;
            var2 = var2[var9];
            var8 = undefined;
            var10 = var3.bind(var8)(var2);
            var7 = var10.has;
            var3 = var5.deny;
            var2 = _closure1_slot3;
            var2 = var2.VIEW_CHANNEL;
            var2 = var7.bind(var10)(var3, var2);
            var3 = !var2;
            var2 = !var3;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var6.isGuildVocal;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var9];
            var7 = var7.bind(var8)(var6);
            var6 = var7.has;
            var5 = var5.deny;
            var4 = _closure1_slot3;
            var4 = var4.CONNECT;
            var3 = var6.bind(var7)(var5, var4);
case 6:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.hasPermission;
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/RolePermissionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function hasViewChannelPermission(arg1) {
        var4 = _closure1_slot2;
        var1 = _closure1_slot3;
        var3 = var1.VIEW_CHANNEL;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var1, var3);
        return var1;
    };
    var3['hasViewChannelPermission'] = var5;
    var3['isChannelAccessDeniedBy'] = var4;
    var2 = function isChannelAccessGrantedBy(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 3:
            var2 = _closure1_slot4;
            var9 = undefined;
            var2 = var2.bind(var9)(var7, var6);
            var2 = !var2;
            if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var10 = 2;
            var3 = var3[var10];
            var11 = var4.bind(var9)(var3);
            var8 = var11.has;
            var4 = var6.allow;
            var3 = _closure1_slot3;
            var3 = var3.VIEW_CHANNEL;
            var3 = var8.bind(var11)(var4, var3);
            var4 = !var3;
            var3 = !var4;
            if(var4) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var4 = var7.isGuildVocal;
            var4 = var4.bind(var7)();
            var4 = !var4;
            if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var10];
            var8 = var8.bind(var9)(var7);
            var7 = var8.has;
            var6 = var6.allow;
            var5 = _closure1_slot3;
            var5 = var5.CONNECT;
            var4 = var7.bind(var8)(var6, var5);
case 13:
            var3 = var4;
case 11:
            var2 = var3;
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['isChannelAccessGrantedBy'] = var2;
    return var1;
})();