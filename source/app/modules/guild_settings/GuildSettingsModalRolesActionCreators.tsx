// app/modules/guild_settings/GuildSettingsModalRolesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function updateGuildRole() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function _updateGuildRole() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 234; continue _fun0001 }
 13:
                    var6 = var2.guildId;
                    var16 = var2.roleId;
                    var14 = var2.name;
                    var12 = var2.permissions;
                    var13 = var2.color;
                    var11 = var2.hoist;
                    var10 = var2.mentionable;
                    var7 = undefined;
                    SaveGenerator(address=58);
 56:
                    return var7;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 231; continue _fun0001 }
 67:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 2;
                    var3 = var8[var3];
                    var3 = var5.bind(var7)(var3);
                    var8 = var3.HTTP;
                    var5 = var8.patch;
                    var3 = {};
                    var15 = _closure1_slot4;
                    var9 = var15.GUILD_ROLE;
                    var9 = var9.bind(var15)(var6, var16);
                    var3['url'] = var9;
                    var9 = {};
                    var9['name'] = var14;
                    var9['permissions'] = var12;
                    var12 = null;
                    var14 = var12 != var13;
                    var12 = 0;
                    if(!var14) { _fun0001_ip = 148; continue _fun0001 }
 145:
                    var12 = var13;
 148:
                    var9['color'] = var12;
                    var9['hoist'] = var11;
                    var9['mentionable'] = var10;
                    var3['body'] = var9;
                    var9 = true;
                    var3['oldFormErrors'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=188);
 186:
                    return var3;
 188:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 228; continue _fun0001 }
 194:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 3;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.checkGuildTemplateDirty;
                    var4 = var4.bind(var5)(var6);
                    return var3;
 228:
                    return var3;
 231:
                    return var2;
 234:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function startReordering(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_MODAL_ROLES_START_REORDER';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['startReordering'] = var7;
    var7 = function stopReordering() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER';
            var1['type'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['stopReordering'] = var7;
    var7 = function updateRoleOrder(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER';
        var2['type'] = var5;
        var5 = arg1;
        var2['from'] = var5;
        var5 = arg2;
        var2['to'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['updateRoleOrder'] = var7;
    var7 = function toggleRoleSetting(arg1, arg2, arg3, arg4) {
        var1 = arg2;
        var3 = _closure1_slot5;
        var2 = {};
        var4 = arg1;
        var2['guildId'] = var4;
        var4 = var1.id;
        var2['roleId'] = var4;
        var4 = var1.name;
        var2['name'] = var4;
        var4 = var1.permissions;
        var2['permissions'] = var4;
        var1 = var1.color;
        var2['color'] = var1;
        var1 = arg3;
        var2['hoist'] = var1;
        var1 = arg4;
        var2['mentionable'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['toggleRoleSetting'] = var7;
    var7 = function startEditingPermissions(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['roleId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['startEditingPermissions'] = var7;
    var7 = function stopEditingPermissions() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['stopEditingPermissions'] = var7;
    var7 = function allowPermission(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW';
        var2['type'] = var5;
        var5 = arg1;
        var2['permission'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['allowPermission'] = var7;
    var7 = function denyPermission(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY';
        var2['type'] = var5;
        var5 = arg1;
        var2['permission'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['denyPermission'] = var7;
    var7 = function cancelPermissionChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['cancelPermissionChanges'] = var7;
    var4 = function savePermissionChanges(arg1) {
        var1 = arg1;
        var11 = var1.guildId;
        var10 = var1.roleId;
        var9 = var1.name;
        var8 = var1.permissions;
        var7 = var1.color;
        var6 = var1.hoist;
        var5 = var1.mentionable;
        var12 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 4;
        var4 = var4[var1];
        var1 = undefined;
        var13 = var12.bind(var1)(var4);
        var12 = var13.dispatch;
        var4 = {};
        var14 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING';
        var4['type'] = var14;
        var4 = var12.bind(var13)(var4);
        var4 = _closure1_slot5;
        var3 = {};
        var3['guildId'] = var11;
        var3['roleId'] = var10;
        var3['name'] = var9;
        var3['permissions'] = var8;
        var3['color'] = var7;
        var3['hoist'] = var6;
        var3['mentionable'] = var5;
        var5 = var4.bind(var1)(var3);
        var4 = var5.then;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS';
            var1['type'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE';
            var1['type'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['savePermissionChanges'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/GuildSettingsModalRolesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();