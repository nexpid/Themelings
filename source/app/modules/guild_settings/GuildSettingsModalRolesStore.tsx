// app/modules/guild_settings/GuildSettingsModalRolesStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function getSortedRoleIds(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var10 = function handleGuildRoleCreateOrUpdate(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var1 = _closure1_slot12;
            if(!var1) { _fun0002_ip = 48; continue _fun0002 }
 18:
            var4 = _closure1_slot22;
            var3 = _closure1_slot8;
            var1 = var3.getSortedRoles;
            var3 = var1.bind(var3)(var5);
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            _closure1_slot13 = var1;
 48:
            var1 = undefined;
            return var1;
        }
    };
    var9 = function handleCancelEditingPermissions() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot17;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 43; continue _fun0003 }
 13:
            var3 = _closure1_slot17;
            var1 = _closure1_slot16;
            if(!(var3 !== var1)) { _fun0003_ip = 43; continue _fun0003 }
 25:
            var1 = _closure1_slot16;
            _closure1_slot17 = var1;
            var1 = false;
            _closure1_slot18 = var1;
            var1 = undefined;
            return var1;
 43:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot23 = var9;
    var1 = function checkForPermissionChanges() {
        var3 = _closure1_slot16;
        var1 = _closure1_slot17;
        var1 = var3 !== var1;
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.FormStates;
    var _closure1_slot10 = var2;
    var2 = var2.CLOSED;
    var _closure1_slot11 = var2;
    var2 = false;
    var _closure1_slot12 = var2;
    var8 = null;
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var8;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var8;
    var _closure1_slot17 = var8;
    var _closure1_slot18 = var2;
    var _closure1_slot19 = var8;
    var _closure1_slot20 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildSettingsModalRolesStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot21;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot9;
            var1 = _closure1_slot8;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'submitting';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot11;
            var1 = _closure1_slot10;
            var1 = var1.SUBMITTING;
            var1 = var2 === var1;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getUpdates';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = _closure1_slot13;
                var2 = null;
                if(!(var2 != var1)) { _fun0005_ip = 160; continue _fun0005 }
 18:
                var1 = _closure1_slot14;
                if(!(var2 != var1)) { _fun0005_ip = 160; continue _fun0005 }
 29:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.calculatePositionDeltas;
                var1 = {};
                var8 = _closure1_slot8;
                var7 = var8.getSortedRoles;
                var6 = _closure1_slot14;
                var6 = var6.id;
                var6 = var7.bind(var8)(var6);
                var1['oldOrdering'] = var6;
                var8 = _closure1_slot8;
                var7 = var8.getManyRoles;
                var6 = _closure1_slot14;
                var6 = var6.id;
                var5 = _closure1_slot13;
                var5 = var7.bind(var8)(var6, var5);
                var1['newOrdering'] = var5;
                var5 = function idGetter(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var1['idGetter'] = var5;
                var4 = function existingPositionGetter(arg1) {
                    var1 = arg1;
                    var1 = var1.position;
                    return var1;
                };
                var1['existingPositionGetter'] = var4;
                var4 = false;
                var1['ascending'] = var4;
                var1 = var2.bind(var3)(var1);
                _fun0005_ip = 164; continue _fun0005;
 160:
                var1 = new Array(0);
 164:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'order';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'guild';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'role';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'permissions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'hasPermissionChanges';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['get'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildSettingsModalRolesStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleStartReorder(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var1 = true;
        _closure1_slot12 = var1;
        var4 = _closure1_slot22;
        var3 = _closure1_slot8;
        var1 = var3.getSortedRoles;
        var3 = var1.bind(var3)(var5);
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        _closure1_slot13 = var3;
        var4 = _closure1_slot9;
        var3 = var4.getGuild;
        var3 = var3.bind(var4)(var5);
        _closure1_slot14 = var3;
        var3 = global;
        var3 = var3.clearTimeout;
        var2 = _closure1_slot19;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['GUILD_SETTINGS_MODAL_ROLES_START_REORDER'] = var11;
    var11 = function handleStopReorder() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = false;
            _closure1_slot12 = var1;
            var1 = null;
            _closure1_slot14 = var1;
            var3 = _closure1_slot20;
            if(var3) { _fun0006_ip = 26; continue _fun0006 }
 22:
            _closure1_slot13 = var1;
 26:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER'] = var11;
    var11 = function handleUpdateOrder(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var7 = var1.from;
            var6 = var1.to;
            var2 = _closure1_slot13;
            var1 = null;
            if(!(var1 != var2)) { _fun0007_ip = 71; continue _fun0007 }
 26:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.moveItemFromTo;
            var2 = _closure1_slot13;
            var2 = var4.bind(var5)(var2, var7, var6);
            _closure1_slot13 = var2;
            return var1;
 71:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER'] = var11;
    var2['GUILD_ROLE_CREATE'] = var10;
    var2['GUILD_ROLE_UPDATE'] = var10;
    var10 = function handleGuildRoleDelete(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.roleId;
            var3 = _closure1_slot13;
            var2 = null;
            if(!(var2 != var3)) { _fun0008_ip = 74; continue _fun0008 }
 22:
            var3 = _closure1_slot13;
            var2 = var3.indexOf;
            var4 = var2.bind(var3)(var4);
            var2 = -1;
            if(!(var2 !== var4)) { _fun0008_ip = 70; continue _fun0008 }
 47:
            var3 = _closure1_slot13;
            var2 = var3.splice;
            var1 = 1;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
 70:
            var1 = false;
            return var1;
 74:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_ROLE_DELETE'] = var10;
    var10 = function handleStartEditingPermissions(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var8 = var1.roleId;
            var2 = _closure1_slot9;
            var1 = var2.getGuild;
            var1 = var1.bind(var2)(var4);
            _closure1_slot14 = var1;
            var4 = null;
            var5 = var4 != var1;
            var1 = undefined;
            var2 = undefined;
            if(!var5) { _fun0009_ip = 73; continue _fun0009 }
 48:
            var7 = _closure1_slot8;
            var6 = var7.getRole;
            var5 = _closure1_slot14;
            var5 = var5.id;
            var2 = var6.bind(var7)(var5, var8);
 73:
            _closure1_slot15 = var2;
            if(!(var4 != var2)) { _fun0009_ip = 99; continue _fun0009 }
 81:
            var2 = _closure1_slot15;
            var2 = var2.permissions;
            _closure1_slot17 = var2;
            _closure1_slot16 = var2;
 99:
            var2 = _closure1_slot10;
            var2 = var2.OPEN;
            _closure1_slot11 = var2;
            return var1;
        }
    };
    var2['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING'] = var10;
    var10 = function handleStopEditingPermissions() {
        var1 = null;
        _closure1_slot17 = var1;
        _closure1_slot16 = var1;
        _closure1_slot15 = var1;
        _closure1_slot14 = var1;
        var1 = false;
        _closure1_slot18 = var1;
        var1 = _closure1_slot10;
        var1 = var1.CLOSED;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING'] = var10;
    var2['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL'] = var9;
    var9 = function handleAllowPermission(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var6 = var1.permission;
            var3 = _closure1_slot17;
            var1 = null;
            if(!(var1 != var3)) { _fun0010_ip = 73; continue _fun0010 }
 22:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.add;
            var3 = _closure1_slot17;
            var3 = var4.bind(var5)(var3, var6);
            _closure1_slot17 = var3;
            var2 = _closure1_slot24;
            var2 = var2.bind(var1)();
            return var1;
 73:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW'] = var9;
    var9 = function handleDenyPermission(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var6 = var1.permission;
            var3 = _closure1_slot17;
            var1 = null;
            if(!(var1 != var3)) { _fun0011_ip = 74; continue _fun0011 }
 22:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.remove;
            var3 = _closure1_slot17;
            var3 = var4.bind(var5)(var3, var6);
            _closure1_slot17 = var3;
            var2 = _closure1_slot24;
            var2 = var2.bind(var1)();
            return var1;
 74:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY'] = var9;
    var9 = function handleSubmitPermissions() {
        var1 = _closure1_slot10;
        var1 = var1.SUBMITTING;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING'] = var9;
    var9 = function handleSubmitPermissionsSuccess() {
        var2 = _closure1_slot10;
        var2 = var2.OPEN;
        _closure1_slot11 = var2;
        var2 = _closure1_slot17;
        _closure1_slot16 = var2;
        var2 = _closure1_slot24;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS'] = var9;
    var9 = function handleSubmitPermissionsFailure() {
        var2 = _closure1_slot10;
        var2 = var2.OPEN;
        _closure1_slot11 = var2;
        var2 = _closure1_slot23;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE'] = var9;
    var9 = function handleSubmit() {
        var1 = true;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_SETTINGS_SUBMIT'] = var9;
    var4 = function handleSubmitSuccess() {
        var1 = false;
        _closure1_slot20 = var1;
        var2 = global;
        var5 = var2.clearTimeout;
        var4 = _closure1_slot19;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var5 = var2.setTimeout;
        var4 = function() {
            var1 = null;
            _closure1_slot13 = var1;
            var1 = undefined;
            return var1;
        };
        var2 = 400;
        var2 = var5.bind(var1)(var4, var2);
        _closure1_slot19 = var2;
        return var1;
    };
    var2['GUILD_SETTINGS_SUBMIT_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/GuildSettingsModalRolesStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();