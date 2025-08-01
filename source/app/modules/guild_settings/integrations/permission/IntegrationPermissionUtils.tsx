// app/modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function toPermissionKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = function commandPermissions(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg2;
            var1 = {};
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = arg1;
            var9 = var3.bind(var4)(var2);
            var2 = var9.length;
            var8 = 0;
            var2 = var8 < var2;
            var6 = undefined;
            var5 = 2;
            var4 = 1;
            var3 = 0;
            if(!var2) { _fun0001_ip = 110; continue _fun0001 }
 54:
            var11 = var9[var3];
            var2 = _closure1_slot2;
            var2 = var2.bind(var6)(var11, var5);
            var11 = var2[var8];
            var2 = var2[var4];
            var13 = var10.includes;
            var12 = var2.type;
            var12 = var13.bind(var10)(var12);
            if(!var12) { _fun0001_ip = 98; continue _fun0001 }
 94:
            var1[var11] = var2;
 98:
            var3 = var3 + 1;
            var2 = var9.length;
            if(var3 < var2) { _fun0001_ip = 54; continue _fun0001 }
 110:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function commandName(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var1 = var1.ApplicationCommandType;
            var4 = var1.CHAT;
            var2 = arg1;
            var1 = var3;
            if(!(var2 === var4)) { _fun0002_ip = 58; continue _fun0002 }
 50:
            var2 = '/';
            var1 = var2 + var3;
 58:
            return var1;
        }
    };
    var3['commandName'] = var5;
    var5 = function commandPermissionChannels(arg1) {
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.ApplicationCommandPermissionType;
        var1 = var1.CHANNEL;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['commandPermissionChannels'] = var5;
    var5 = function commandPermissionMembersRoles(arg1) {
        var4 = _closure1_slot4;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 2;
        var2 = var6[var1];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var2 = var2.ApplicationCommandPermissionType;
        var7 = var2.ROLE;
        var2 = new Array(2);
        var2[0] = var7;
        var1 = var6[var1];
        var1 = var5.bind(var3)(var1);
        var1 = var1.ApplicationCommandPermissionType;
        var1 = var1.USER;
        var2[1] = var1;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['commandPermissionMembersRoles'] = var5;
    var3['toPermissionKey'] = var4;
    var2 = function keyPermissions(arg1) {
        var5 = arg1;
        var1 = global;
        var3 = var1.Object;
        var2 = var3.fromEntries;
        var4 = var5.map;
        var1 = function(arg1) {
            var2 = arg1;
            var5 = _closure1_slot3;
            var4 = var2.id;
            var3 = var2.type;
            var1 = undefined;
            var3 = var5.bind(var1)(var4, var3);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['keyPermissions'] = var2;
    return var1;
})();